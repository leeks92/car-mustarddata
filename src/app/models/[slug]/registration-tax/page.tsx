import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import { CAR_MODELS, getCarModel, getAllSlugs } from '@/lib/car-models';
import { formatKoreanWon } from '@/lib/calculations';

export const dynamicParams = false;

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
  const title = `${car.name} 취등록세 - 2026년 ${car.isEV ? '전기차 감면' : car.cc <= 1000 ? '경차 면제' : '취득세·공채·등록비'} 총정리`;
  const description = `${car.name}(${car.price.toLocaleString()}만 원) 구매 시 취등록세를 상세히 계산했습니다. 취득세, 공채 매입비, 등록비, ${car.isEV ? '전기차 감면' : car.cc <= 1000 ? '경차 면제' : '할인'} 정보까지 총정리.`;

  return {
    title,
    description,
    keywords: [
      `${car.name} 취등록세`, `${shortName} 취등록세`, `${shortName} 취득세`,
      `${shortName} 등록비`, `${shortName} 구매 비용`, `${car.category} 취등록세`,
      `${shortName} 공채`, `${shortName} 신차 등록`,
    ],
    alternates: { canonical: `${BASE_URL}/models/${car.slug}/registration-tax` },
    openGraph: { title, description, url: `${BASE_URL}/models/${car.slug}/registration-tax`, type: 'website' },
  };
}

export default async function RegistrationTaxDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarModel(slug);
  if (!car) notFound();

  const shortName = car.name.split(' ').slice(1).join(' ');

  // 취등록세 계산
  const priceWon = car.price * 10000;
  const acquisitionTaxRate = car.isEV ? 7 : (car.cc <= 1000 ? 4 : 7);
  const acquisitionTax = Math.round(priceWon * (acquisitionTaxRate / 100));
  const evReduction = car.isEV ? Math.min(acquisitionTax, 1400000) : 0;
  const compactExemption = (!car.isEV && car.cc <= 1000) ? acquisitionTax : 0;
  const actualAcquisitionTax = acquisitionTax - evReduction - compactExemption;
  const bondRate = car.cc <= 1000 ? 0.008 : car.isEV ? 0.012 : 0.016;
  const bondCost = Math.round(priceWon * bondRate);
  const registrationFee = 15000;
  const stampTax = 15000;
  const plateFee = 12000;
  const totalRegistration = actualAcquisitionTax + bondCost + registrationFee + stampTax + plateFee;

  // 경쟁 모델
  const competitors = car.competitors
    .map((s) => CAR_MODELS.find((m) => m.slug === s))
    .filter(Boolean);

  const faqItems = [
    {
      q: `${car.name} 취등록세는 총 얼마인가요?`,
      a: `${car.name}(${car.price.toLocaleString()}만 원)의 총 취등록세는 약 ${formatKoreanWon(totalRegistration)}입니다. 취득세 ${formatKoreanWon(actualAcquisitionTax)}, 공채 ${formatKoreanWon(bondCost)}, 등록비·인지대·번호판 ${formatKoreanWon(registrationFee + stampTax + plateFee)}으로 구성됩니다.`,
    },
    {
      q: `${car.name} 취득세율은 몇 %인가요?`,
      a: car.isEV
        ? `전기차의 취득세율은 7%이지만, 전기차 감면(최대 140만 원)이 적용되어 실제 부담은 ${formatKoreanWon(actualAcquisitionTax)}입니다.`
        : car.cc <= 1000
        ? '경차(1,000cc 이하)는 취득세가 면제됩니다.'
        : `비영업용 승용차의 취득세율은 7%입니다. ${car.name}(${car.price.toLocaleString()}만 원)의 취득세는 ${formatKoreanWon(acquisitionTax)}입니다.`,
    },
    {
      q: `${car.name} 공채 매입비는 얼마인가요?`,
      a: `공채 매입비는 차량 가격의 약 ${(bondRate * 100).toFixed(1)}%(할인 매도 기준)로, ${car.name}는 약 ${formatKoreanWon(bondCost)}입니다. 지역에 따라 다를 수 있습니다.`,
    },
    {
      q: `${car.name} 등록은 어디서 하나요?`,
      a: '관할 차량등록사업소에서 등록합니다. 딜러가 대행하는 경우가 많으며, 대행 수수료는 별도입니다. 직접 등록하면 대행료(약 20~30만 원)를 절약할 수 있습니다.',
    },
  ];

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: `${car.name} 취등록세 상세 - 2026년`, description: `${car.name}의 취등록세를 상세히 계산했습니다.`, url: `${BASE_URL}/models/${car.slug}/registration-tax`, publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL } }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: car.name, item: `${BASE_URL}/models/${car.slug}` },
        { '@type': 'ListItem', position: 3, name: '취등록세', item: `${BASE_URL}/models/${car.slug}/registration-tax` },
      ] }} />

      <main className="min-h-screen bg-gray-50">
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href={`/models/${car.slug}`} className="hover:text-amber-600">{car.name}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">취등록세</li>
          </ol>
        </nav>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{car.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{car.name} 취등록세</h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            {car.name}({car.price.toLocaleString()}만 원) 신차 구매 시 필요한 취등록세를 항목별로 상세히 계산했습니다.
            {car.isEV && ' 전기차 감면 혜택이 적용됩니다.'}
            {!car.isEV && car.cc <= 1000 && ' 경차 취득세 면제 혜택이 적용됩니다.'}
          </p>
        </section>

        {/* 취등록세 상세 내역 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 취등록세 상세 내역</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">차량 가격</span><span className="font-medium">{car.price.toLocaleString()}만 원</span></div>
              <hr className="border-gray-200" />
              <div className="flex justify-between"><span className="text-gray-600 font-semibold">① 취득세 ({acquisitionTaxRate}%)</span><span className="font-medium">{formatKoreanWon(acquisitionTax)}</span></div>
              {car.isEV && (
                <div className="flex justify-between text-green-600 pl-4"><span>전기차 감면 (최대 140만 원)</span><span className="font-medium">-{formatKoreanWon(evReduction)}</span></div>
              )}
              {compactExemption > 0 && (
                <div className="flex justify-between text-green-600 pl-4"><span>경차 취득세 면제</span><span className="font-medium">-{formatKoreanWon(compactExemption)}</span></div>
              )}
              <div className="flex justify-between pl-4"><span className="text-gray-500">실제 취득세 부담</span><span className="font-bold text-amber-600">{formatKoreanWon(actualAcquisitionTax)}</span></div>
              <hr className="border-gray-200" />
              <div className="flex justify-between"><span className="text-gray-600 font-semibold">② 공채 매입비 (할인 매도)</span><span className="font-medium">약 {formatKoreanWon(bondCost)}</span></div>
              <div className="flex justify-between pl-4 text-xs text-gray-400"><span>차량 가격의 약 {(bondRate * 100).toFixed(1)}% (지역별 상이)</span></div>
              <hr className="border-gray-200" />
              <div className="flex justify-between"><span className="text-gray-600 font-semibold">③ 등록비</span><span className="font-medium">{formatKoreanWon(registrationFee)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600 font-semibold">④ 인지대</span><span className="font-medium">{formatKoreanWon(stampTax)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600 font-semibold">⑤ 번호판 비용</span><span className="font-medium">{formatKoreanWon(plateFee)}</span></div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base"><span className="font-bold text-gray-900">총 취등록세</span><span className="font-bold text-amber-600">약 {formatKoreanWon(totalRegistration)}</span></div>
            </div>
          </div>
          {car.isEV && (
            <div className="mt-4 bg-green-50 rounded-xl p-4 text-sm text-green-800">
              <strong>전기차 혜택:</strong> 전기차는 취득세 최대 140만 원 감면이 적용됩니다. 2026년 기준 보조금과 별도로 적용되는 세제 혜택입니다.
            </div>
          )}
          {!car.isEV && car.cc <= 1000 && (
            <div className="mt-4 bg-green-50 rounded-xl p-4 text-sm text-green-800">
              <strong>경차 혜택:</strong> 1,000cc 이하 경차는 취득세가 면제됩니다. 유류세 환급(연 30만 원), 고속도로 통행료 50% 할인 등 추가 혜택도 있습니다.
            </div>
          )}
        </section>

        {/* 필요 서류 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 등록 시 필요 서류</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-4">
              {[
                { doc: '신분증', desc: '본인 확인용 (주민등록증, 운전면허증)' },
                { doc: '자동차매매계약서', desc: '딜러에서 발급 (신차 출고 확인서)' },
                { doc: '자동차보험 가입증명서', desc: '의무보험 가입 확인 (책임보험 이상)' },
                { doc: '취득세 납부 영수증', desc: '위택스 또는 은행에서 납부 후 수령' },
                { doc: '인감증명서 또는 본인서명사실확인서', desc: '등록 신청 시 필요 (대리인 등록 시 위임장 추가)' },
              ].map((item) => (
                <div key={item.doc} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-900">{item.doc}</span>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 경쟁 모델 취등록세 비교 */}
        {competitors.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {shortName} vs {competitors.map((c) => c!.name.split(' ').slice(1).join(' ')).join(' vs ')} 취등록세 비교
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">가격</th>
                    <th className="px-4 py-3 text-right font-semibold">취득세</th>
                    <th className="px-4 py-3 text-right font-semibold">총 취등록세</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-amber-50/30">
                    <td className="px-4 py-3 font-bold text-gray-900">{car.name}</td>
                    <td className="px-4 py-3 text-right">{car.price.toLocaleString()}만</td>
                    <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(actualAcquisitionTax)}</td>
                    <td className="px-4 py-3 text-right font-bold text-amber-600">약 {formatKoreanWon(totalRegistration)}</td>
                  </tr>
                  {competitors.map((comp) => {
                    if (!comp) return null;
                    const compPrice = comp.price * 10000;
                    const compRate = comp.isEV ? 7 : (comp.cc <= 1000 ? 4 : 7);
                    const compAcqTax = Math.round(compPrice * (compRate / 100));
                    const compEvRed = comp.isEV ? Math.min(compAcqTax, 1400000) : 0;
                    const compCompactEx = (!comp.isEV && comp.cc <= 1000) ? compAcqTax : 0;
                    const compActual = compAcqTax - compEvRed - compCompactEx;
                    const compBond = Math.round(compPrice * (comp.cc <= 1000 ? 0.008 : comp.isEV ? 0.012 : 0.016));
                    const compTotal = compActual + compBond + 42000;
                    return (
                      <tr key={comp.slug} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium"><Link href={`/models/${comp.slug}/registration-tax`} className="text-amber-600 hover:underline">{comp.name}</Link></td>
                        <td className="px-4 py-3 text-right">{comp.price.toLocaleString()}만</td>
                        <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(compActual)}</td>
                        <td className="px-4 py-3 text-right font-medium">약 {formatKoreanWon(compTotal)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 절약 팁 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 취등록세 절약 방법</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '직접 등록하기', desc: '딜러 대행 수수료(20~30만 원)를 절약할 수 있습니다. 차량등록사업소에서 직접 등록 가능합니다.', icon: '💰' },
              { title: '공채 할인 매도', desc: '공채를 직접 보유하지 않고 할인 매도하면 실질 부담이 줄어듭니다.', icon: '📉' },
              { title: '감면 대상 확인', desc: `${car.isEV ? '전기차 취득세 감면(최대 140만 원)' : car.cc <= 1000 ? '경차 취득세 면제' : '다자녀 가구, 장애인 등 감면 대상'}을 확인하세요.`, icon: '✅' },
              { title: '시기 조절', desc: '연말보다 연초에 등록하면 자동차세 부담이 줄어듭니다.', icon: '📅' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 취등록세 자주 묻는 질문</h2>
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
            <h2 className="text-2xl font-bold mb-4">{car.name} 취등록세를 직접 계산해보세요</h2>
            <p className="text-amber-100 mb-6">차량 가격, 차종을 입력하면 정확한 취등록세를 계산합니다</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/calculator/registration-tax" className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">취등록세 계산기</Link>
              <Link href={`/models/${car.slug}`} className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors">{shortName} 전체 비용 보기</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
