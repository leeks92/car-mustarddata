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
  const title = `${car.name} 보험료 - 2026년 연령별 종합보험 비교·다이렉트 할인`;
  const description = `${car.name}의 자동차보험료를 연령별로 비교했습니다. 20대·30대·40대 보험료, 다이렉트 할인, ${shortName} 보험료 절약 방법까지 총정리.`;

  return {
    title,
    description,
    keywords: [
      `${car.name} 보험료`, `${shortName} 보험료`, `${shortName} 보험료 얼마`,
      `${shortName} 자동차보험`, `${shortName} 보험료 비교`, `${shortName} 다이렉트 보험`,
      `${car.category} 보험료`, `${shortName} 20대 보험료`, `${shortName} 30대 보험료`,
    ],
    alternates: { canonical: `${BASE_URL}/models/${car.slug}/insurance` },
    openGraph: { title, description, url: `${BASE_URL}/models/${car.slug}/insurance`, type: 'website' },
  };
}

export default async function InsuranceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarModel(slug);
  if (!car) notFound();

  const shortName = car.name.split(' ').slice(1).join(' ');

  // 경쟁 모델
  const competitors = car.competitors
    .map((s) => CAR_MODELS.find((m) => m.slug === s))
    .filter(Boolean);

  // 보험료 절약 팁
  const savingTips = [
    { title: '다이렉트 보험 가입', desc: '설계사 없이 온라인으로 가입하면 10~20% 할인됩니다.', saving: '10~20%' },
    { title: '블랙박스 할인', desc: '블랙박스 장착 시 2~5% 추가 할인이 적용됩니다.', saving: '2~5%' },
    { title: '마일리지 특약', desc: '연간 주행거리가 적으면 최대 30% 할인됩니다.', saving: '최대 30%' },
    { title: '무사고 할인', desc: '무사고 기간이 길수록 보험료가 낮아집니다. 3년 무사고 시 약 20% 할인.', saving: '~20%' },
    { title: '자기부담금 설정', desc: '자기부담금을 높이면 보험료가 낮아집니다. 20만 원 → 50만 원 시 약 5~10% 절감.', saving: '5~10%' },
    { title: '불필요한 특약 제거', desc: '긴급출동, 대차 서비스 등 불필요한 특약을 제거하면 보험료를 줄일 수 있습니다.', saving: '3~8%' },
  ];

  const faqItems = [
    {
      q: `${car.name} 보험료는 연 얼마인가요?`,
      a: `30대 무사고 기준, ${car.name}의 종합보험료는 연 ${car.insurance30s}입니다. 20대는 ${car.insurance20s}, 40대는 ${car.insurance40s} 수준입니다.`,
    },
    {
      q: `${car.name} 20대 보험료가 비싼 이유는?`,
      a: `20대는 운전 경력이 짧고 사고율이 높아 보험료가 비쌉니다. ${car.name} 20대 보험료는 ${car.insurance20s}로, 40대(${car.insurance40s}) 대비 약 2배 이상입니다.`,
    },
    {
      q: `${car.name} 보험료를 줄이는 방법은?`,
      a: '다이렉트 보험 가입(10~20% 할인), 블랙박스 할인(2~5%), 마일리지 특약(최대 30%), 무사고 유지 등으로 보험료를 절약할 수 있습니다.',
    },
    {
      q: `${car.name} 다이렉트 보험이 더 저렴한가요?`,
      a: '네, 다이렉트 보험은 설계사 수수료가 없어 동일 조건 대비 10~20% 저렴합니다. 삼성화재 다이렉트, KB손보 다이렉트, 현대해상 다이렉트 등에서 비교 견적을 받아보세요.',
    },
  ];

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: `${car.name} 보험료 상세 - 2026년`, description: `${car.name}의 보험료를 연령별로 비교했습니다.`, url: `${BASE_URL}/models/${car.slug}/insurance`, publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL } }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: car.name, item: `${BASE_URL}/models/${car.slug}` },
        { '@type': 'ListItem', position: 3, name: '보험료', item: `${BASE_URL}/models/${car.slug}/insurance` },
      ] }} />

      <main className="min-h-screen bg-gray-50">
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href={`/models/${car.slug}`} className="hover:text-amber-600">{car.name}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">보험료</li>
          </ol>
        </nav>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{car.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{car.name} 보험료</h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            {car.name}의 자동차보험료를 연령대별로 비교하고, 다이렉트 할인·마일리지 특약 등 보험료 절약 방법을 정리했습니다.
          </p>
        </section>

        {/* 연령별 보험료 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 연령별 보험료 비교</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50 text-gray-900">
                  <th className="px-4 py-3 text-left font-semibold">연령대</th>
                  <th className="px-4 py-3 text-left font-semibold">운전 경력</th>
                  <th className="px-4 py-3 text-right font-semibold">예상 연간 보험료</th>
                  <th className="px-4 py-3 text-right font-semibold">월 환산</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { age: '20대', exp: '경력 1~3년', value: car.insurance20s, color: 'text-red-500' },
                  { age: '30대', exp: '경력 5~10년', value: car.insurance30s, color: 'text-amber-600' },
                  { age: '40대', exp: '경력 10~20년', value: car.insurance40s, color: 'text-green-600' },
                ].map((row) => {
                  const nums = row.value.replace(/[^0-9~]/g, '').split('~');
                  const avg = nums.length === 2 ? Math.round((parseInt(nums[0]) + parseInt(nums[1])) / 2) : parseInt(nums[0]);
                  return (
                    <tr key={row.age} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.age}</td>
                      <td className="px-4 py-3 text-gray-600">{row.exp}</td>
                      <td className={`px-4 py-3 text-right font-bold ${row.color}`}>{row.value}</td>
                      <td className="px-4 py-3 text-right text-gray-500">약 {formatKoreanWon(Math.round(avg * 10000 / 12))}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 종합보험(자기차량손해 포함), 대인 II 무한, 대물 1억 기준. 무사고 3년 이상 가정.</p>
        </section>

        {/* 보험료 절약 방법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 보험료 절약 방법</h2>
          <div className="space-y-3">
            {savingTips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">{tip.saving}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{tip.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 경쟁 모델 보험료 비교 */}
        {competitors.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {shortName} vs {competitors.map((c) => c!.name.split(' ').slice(1).join(' ')).join(' vs ')} 보험료 비교
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">20대</th>
                    <th className="px-4 py-3 text-right font-semibold">30대</th>
                    <th className="px-4 py-3 text-right font-semibold">40대</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-amber-50/30">
                    <td className="px-4 py-3 font-bold text-gray-900">{car.name}</td>
                    <td className="px-4 py-3 text-right text-red-500 font-medium">{car.insurance20s}</td>
                    <td className="px-4 py-3 text-right text-amber-600 font-bold">{car.insurance30s}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium">{car.insurance40s}</td>
                  </tr>
                  {competitors.map((comp) => comp && (
                    <tr key={comp.slug} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium"><Link href={`/models/${comp.slug}/insurance`} className="text-amber-600 hover:underline">{comp.name}</Link></td>
                      <td className="px-4 py-3 text-right">{comp.insurance20s}</td>
                      <td className="px-4 py-3 text-right font-medium">{comp.insurance30s}</td>
                      <td className="px-4 py-3 text-right">{comp.insurance40s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 보험 가입 시 확인사항 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 보험 가입 시 확인사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '대인배상 II', desc: '무한 보장을 선택하세요. 사고 시 상대방 치료비를 무제한 보장합니다.', icon: '🛡️' },
              { title: '대물배상', desc: '최소 1억 원 이상 가입하세요. 고가 차량 사고 시 부족할 수 있습니다.', icon: '🚗' },
              { title: '자기차량손해', desc: `${car.name} 가격(${car.price.toLocaleString()}만 원) 기준으로 보장됩니다. 자기부담금 설정에 따라 보험료가 달라집니다.`, icon: '🔧' },
              { title: '무보험차 상해', desc: '상대방이 보험 미가입 시 내 피해를 보장합니다. 2억 원 이상 가입을 추천합니다.', icon: '⚠️' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 보험료 자주 묻는 질문</h2>
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
            <h2 className="text-2xl font-bold mb-4">{car.name} 전체 비용을 확인하세요</h2>
            <p className="text-amber-100 mb-6">자동차세, 취등록세, 유지비까지 한눈에 비교합니다</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/models/${car.slug}`} className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">{shortName} 전체 비용 보기</Link>
              <Link href="/guide/car-insurance" className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors">보험료 절약 가이드</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
