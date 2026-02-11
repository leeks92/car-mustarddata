import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import { CAR_MODELS, getCarModel, getAllSlugs } from '@/lib/car-models';
import { calculateCarTax, formatKoreanWon } from '@/lib/calculations';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarModel(slug);
  if (!car) return {};

  const shortName = car.name.split(' ').slice(1).join(' ');
  const title = `${car.name} 자동차세 - 2026년 ${car.isEV ? '전기차 정액' : `${car.cc}cc`} 연납 할인까지`;
  const description = `${car.name}(${car.isEV ? '전기차' : `${car.cc}cc`})의 2026년 자동차세를 상세히 계산했습니다. 연납 할인, 차령별 감면, 납부 방법, ${shortName} 자동차세 절약 방법까지 총정리.`;

  return {
    title,
    description,
    keywords: [
      `${car.name} 자동차세`, `${shortName} 자동차세`, `${shortName} 자동차세 얼마`,
      `${shortName} 자동차세 계산`, `${shortName} 자동차세 연납`, `${car.category} 자동차세`,
      `${shortName} 세금`, `${car.cc}cc 자동차세`,
    ],
    alternates: { canonical: `${BASE_URL}/models/${car.slug}/car-tax` },
    openGraph: { title, description, url: `${BASE_URL}/models/${car.slug}/car-tax`, type: 'website' },
  };
}

export default async function CarTaxDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarModel(slug);
  if (!car) notFound();

  const shortName = car.name.split(' ').slice(1).join(' ');
  const taxResult = calculateCarTax(car.cc, 1, car.isEV ? 'ev' : 'sedan');

  // 차령별 자동차세 (1~10년)
  const taxByAge = Array.from({ length: 10 }, (_, i) => {
    const age = i + 1;
    const result = calculateCarTax(car.cc, age, car.isEV ? 'ev' : 'sedan');
    return { age, totalTax: result.totalTax, discountRate: result.discountRate };
  });

  // 경쟁 모델 자동차세 비교
  const competitors = car.competitors
    .map((s) => CAR_MODELS.find((m) => m.slug === s))
    .filter(Boolean);

  const faqItems = [
    {
      q: `${car.name} 자동차세는 연 얼마인가요?`,
      a: car.isEV
        ? `${car.name}는 전기차로 자동차세가 연 ${formatKoreanWon(taxResult.totalTax)}(교육세 포함)으로 정액 부과됩니다. 배기량과 무관하게 동일합니다.`
        : `${car.name}(${car.cc.toLocaleString()}cc)의 자동차세는 연 ${formatKoreanWon(taxResult.totalTax)}(교육세 포함)입니다. cc당 ${car.cc <= 1000 ? '80원' : car.cc <= 1600 ? '140원' : '200원'}이 적용됩니다.`,
    },
    {
      q: `${car.name} 자동차세 연납 할인은 얼마인가요?`,
      a: `1월에 연납하면 4.57% 할인되어 ${formatKoreanWon(taxResult.annualPaymentAmounts[0].amount)}만 납부하면 됩니다. 약 ${formatKoreanWon(taxResult.annualPaymentDiscount)}을 절약할 수 있습니다.`,
    },
    {
      q: `${car.name} 자동차세 납부 시기는 언제인가요?`,
      a: '자동차세는 매년 6월(1기분)과 12월(2기분)에 납부합니다. 1월, 3월, 6월, 9월에 연납 신청이 가능하며, 1월 연납 시 할인율이 가장 높습니다.',
    },
    {
      q: `${car.name} 오래 타면 자동차세가 줄어드나요?`,
      a: car.isEV
        ? '전기차는 차령에 따른 자동차세 감면이 없습니다. 매년 동일한 금액이 부과됩니다.'
        : `네, 3년차부터 매년 5%씩 최대 50%까지 감면됩니다. ${car.name}는 12년차 이후 연 ${formatKoreanWon(taxByAge[9].totalTax)}까지 줄어듭니다.`,
    },
  ];

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: `${car.name} 자동차세 상세 - 2026년`, description: `${car.name}의 자동차세를 상세히 계산했습니다.`, url: `${BASE_URL}/models/${car.slug}/car-tax`, publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL } }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: car.name, item: `${BASE_URL}/models/${car.slug}` },
        { '@type': 'ListItem', position: 3, name: '자동차세', item: `${BASE_URL}/models/${car.slug}/car-tax` },
      ] }} />

      <main className="min-h-screen bg-gray-50">
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href={`/models/${car.slug}`} className="hover:text-amber-600">{car.name}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">자동차세</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{car.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {car.name} 자동차세
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            {car.isEV
              ? `전기차 ${car.name}의 자동차세는 연 ${formatKoreanWon(taxResult.totalTax)}(교육세 포함)입니다. 배기량과 무관하게 정액 부과됩니다.`
              : `${car.name}(${car.cc.toLocaleString()}cc)의 2026년 자동차세는 연 ${formatKoreanWon(taxResult.totalTax)}(교육세 포함)입니다. 연납 할인, 차령별 감면 등 절약 방법을 상세히 정리했습니다.`
            }
          </p>
        </section>

        {/* 자동차세 계산 상세 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {car.name} 자동차세 계산 내역
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-3 text-sm">
              {!car.isEV ? (
                <>
                  <div className="flex justify-between"><span className="text-gray-600">배기량</span><span className="font-medium">{car.cc.toLocaleString()}cc</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">cc당 세율</span><span className="font-medium">{car.cc <= 1000 ? '80원' : car.cc <= 1600 ? '140원' : '200원'}/cc</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">기본세액 ({car.cc.toLocaleString()} × {car.cc <= 1000 ? '80' : car.cc <= 1600 ? '140' : '200'}원)</span><span className="font-medium">{formatKoreanWon(taxResult.baseTax)}</span></div>
                </>
              ) : (
                <div className="flex justify-between"><span className="text-gray-600">전기차 정액 과세</span><span className="font-medium">100,000원</span></div>
              )}
              <div className="flex justify-between"><span className="text-gray-600">지방교육세 (본세의 30%)</span><span className="font-medium">{formatKoreanWon(taxResult.localEducationTax)}</span></div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base"><span className="font-bold text-gray-900">연간 자동차세 합계</span><span className="font-bold text-amber-600">{formatKoreanWon(taxResult.totalTax)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">1기분 (6월)</span><span className="font-medium">{formatKoreanWon(taxResult.firstHalfTax)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2기분 (12월)</span><span className="font-medium">{formatKoreanWon(taxResult.secondHalfTax)}</span></div>
            </div>
          </div>
        </section>

        {/* 연납 할인 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {car.name} 자동차세 연납 할인
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            자동차세를 미리 납부하면 할인을 받을 수 있습니다. 1월에 연납하면 가장 높은 할인율이 적용됩니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50 text-gray-900">
                  <th className="px-4 py-3 text-left font-semibold">납부 시기</th>
                  <th className="px-4 py-3 text-right font-semibold">할인율</th>
                  <th className="px-4 py-3 text-right font-semibold">납부 금액</th>
                  <th className="px-4 py-3 text-right font-semibold">절약 금액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {taxResult.annualPaymentAmounts.map((ap) => (
                  <tr key={ap.month} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{ap.month}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium">{ap.discount}%</td>
                    <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(ap.amount)}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium">{formatKoreanWon(taxResult.totalTax - ap.amount)}</td>
                  </tr>
                ))}
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">정기 납부 (6월+12월)</td>
                  <td className="px-4 py-3 text-right text-gray-500">-</td>
                  <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(taxResult.totalTax)}</td>
                  <td className="px-4 py-3 text-right text-gray-400">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-green-50 rounded-xl p-4 text-sm text-green-800">
            <strong>TIP:</strong> 위택스(wetax.go.kr)에서 1월 16~31일에 연납 신청하면 {formatKoreanWon(taxResult.annualPaymentAmounts[0].amount)}만 납부하면 됩니다.
          </div>
        </section>

        {/* 차령별 자동차세 변화 */}
        {!car.isEV && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {car.name} 차령별 자동차세 변화
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              비영업용 승용차는 최초 등록 후 3년부터 매년 5%씩, 최대 50%까지 자동차세가 감면됩니다.
            </p>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차령</th>
                    <th className="px-4 py-3 text-right font-semibold">감면율</th>
                    <th className="px-4 py-3 text-right font-semibold">연간 자동차세</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {taxByAge.map((row) => (
                    <tr key={row.age} className={`hover:bg-gray-50 ${row.age === 1 ? 'bg-amber-50/50' : ''}`}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.age}년차 {row.age === 1 && <span className="text-xs text-amber-600">(신차)</span>}</td>
                      <td className="px-4 py-3 text-right text-green-600 font-medium">{row.discountRate > 0 ? `-${row.discountRate}%` : '-'}</td>
                      <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(row.totalTax)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 경쟁 모델 자동차세 비교 */}
        {competitors.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {shortName} vs {competitors.map((c) => c!.name.split(' ').slice(1).join(' ')).join(' vs ')} 자동차세 비교
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">배기량</th>
                    <th className="px-4 py-3 text-right font-semibold">연간 자동차세</th>
                    <th className="px-4 py-3 text-right font-semibold">1월 연납</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-amber-50/30">
                    <td className="px-4 py-3 font-bold text-gray-900">{car.name}</td>
                    <td className="px-4 py-3 text-right">{car.isEV ? '전기차' : `${car.cc.toLocaleString()}cc`}</td>
                    <td className="px-4 py-3 text-right font-bold text-amber-600">{formatKoreanWon(taxResult.totalTax)}</td>
                    <td className="px-4 py-3 text-right text-green-600">{formatKoreanWon(taxResult.annualPaymentAmounts[0].amount)}</td>
                  </tr>
                  {competitors.map((comp) => {
                    if (!comp) return null;
                    const compTax = calculateCarTax(comp.cc, 1, comp.isEV ? 'ev' : 'sedan');
                    return (
                      <tr key={comp.slug} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium"><Link href={`/models/${comp.slug}/car-tax`} className="text-amber-600 hover:underline">{comp.name}</Link></td>
                        <td className="px-4 py-3 text-right">{comp.isEV ? '전기차' : `${comp.cc.toLocaleString()}cc`}</td>
                        <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(compTax.totalTax)}</td>
                        <td className="px-4 py-3 text-right text-green-600">{formatKoreanWon(compTax.annualPaymentAmounts[0].amount)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 자동차세 납부 방법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 자동차세 납부 방법</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '위택스 (wetax.go.kr)', desc: '온라인 납부, 연납 신청, 자동이체 등록', icon: '💻' },
              { title: '은행 방문', desc: '고지서 지참 후 은행 창구 또는 ATM 납부', icon: '🏦' },
              { title: '간편결제', desc: '카카오페이, 네이버페이, 페이코 등', icon: '📱' },
              { title: 'ARS 전화', desc: '지방세 ARS (1899-0341) 전화 납부', icon: '📞' },
            ].map((method) => (
              <div key={method.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="text-2xl mb-2">{method.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-500">{method.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 자동차세 자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-amber-600 transition-colors">{item.q}</summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{car.name} 자동차세를 직접 계산해보세요</h2>
            <p className="text-amber-100 mb-6">배기량, 차령을 입력하면 정확한 자동차세를 계산합니다</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/calculator/car-tax" className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">자동차세 계산기</Link>
              <Link href={`/models/${car.slug}`} className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors">{shortName} 전체 비용 보기</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
