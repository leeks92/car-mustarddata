import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '차종별 자동차보험료 비교 - 2026년 경차·중형·SUV·전기차·수입차 보험료',
  description:
    '2026년 차종별 자동차보험료를 비교했습니다. 모닝, 아반떼, 쏘나타, 그랜저, 팰리세이드, 아이오닉5, BMW 등 인기 차종의 예상 보험료와 보험료에 영향을 미치는 요인을 확인하세요.',
  keywords: [
    '차종별 보험료',
    '자동차보험료 비교',
    '모닝 보험료',
    '아반떼 보험료',
    '쏘나타 보험료',
    '그랜저 보험료',
    '팰리세이드 보험료',
    '아이오닉5 보험료',
    'BMW 보험료',
    '전기차 보험료',
    '수입차 보험료',
    '경차 보험료',
    'SUV 보험료',
  ],
  alternates: { canonical: `${BASE_URL}/guide/insurance-by-car` },
  openGraph: {
    title: '차종별 자동차보험료 비교 - 2026년 경차·중형·SUV·전기차·수입차 보험료',
    description: '인기 차종별 예상 보험료를 한눈에 비교하세요.',
    url: `${BASE_URL}/guide/insurance-by-car`,
    type: 'website',
  },
};

interface CarInsurance {
  category: string;
  model: string;
  price: string;
  cc: string;
  premium20s: string;
  premium30s: string;
  premium40s: string;
  note: string;
}

const domesticCars: CarInsurance[] = [
  { category: '경차', model: '기아 모닝', price: '약 1,400만 원', cc: '998cc', premium20s: '약 80~120만 원', premium30s: '약 40~60만 원', premium40s: '약 35~50만 원', note: '보험료 가장 저렴' },
  { category: '경차', model: '기아 레이', price: '약 1,600만 원', cc: '998cc', premium20s: '약 85~130만 원', premium30s: '약 45~65만 원', premium40s: '약 38~55만 원', note: '모닝 대비 소폭 높음' },
  { category: '준중형', model: '현대 아반떼', price: '약 2,000만 원', cc: '1,598cc', premium20s: '약 120~180만 원', premium30s: '약 60~90만 원', premium40s: '약 50~75만 원', note: '가장 대중적인 구간' },
  { category: '준중형', model: '기아 K3', price: '약 2,100만 원', cc: '1,598cc', premium20s: '약 120~180만 원', premium30s: '약 60~90만 원', premium40s: '약 50~75만 원', note: '아반떼와 유사' },
  { category: '중형', model: '현대 쏘나타', price: '약 2,800만 원', cc: '1,999cc', premium20s: '약 150~220만 원', premium30s: '약 80~120만 원', premium40s: '약 65~100만 원', note: '중형 기준선' },
  { category: '중형', model: '기아 K5', price: '약 2,700만 원', cc: '1,999cc', premium20s: '약 145~210만 원', premium30s: '약 78~115만 원', premium40s: '약 63~95만 원', note: '쏘나타와 유사' },
  { category: '대형', model: '현대 그랜저', price: '약 3,800만 원', cc: '2,497cc', premium20s: '약 180~270만 원', premium30s: '약 100~150만 원', premium40s: '약 85~130만 원', note: '차량 가액 높아 보험료 상승' },
  { category: '대형', model: '기아 K8', price: '약 3,600만 원', cc: '2,497cc', premium20s: '약 175~260만 원', premium30s: '약 95~145만 원', premium40s: '약 80~125만 원', note: '그랜저와 유사' },
  { category: 'SUV', model: '현대 투싼', price: '약 2,800만 원', cc: '1,999cc', premium20s: '약 155~230만 원', premium30s: '약 85~125만 원', premium40s: '약 70~105만 원', note: 'SUV 할증 소폭 적용' },
  { category: 'SUV', model: '현대 팰리세이드', price: '약 4,200만 원', cc: '3,498cc', premium20s: '약 220~330만 원', premium30s: '약 120~180만 원', premium40s: '약 100~155만 원', note: '대형 SUV, 수리비 높음' },
  { category: 'SUV', model: '기아 쏘렌토', price: '약 3,500만 원', cc: '2,199cc', premium20s: '약 180~270만 원', premium30s: '약 100~150만 원', premium40s: '약 85~130만 원', note: '중대형 SUV' },
];

const evCars: CarInsurance[] = [
  { category: '전기차', model: '현대 아이오닉 5', price: '약 4,700만 원', cc: '전기', premium20s: '약 200~300만 원', premium30s: '약 110~160만 원', premium40s: '약 90~140만 원', note: '배터리 수리비 반영' },
  { category: '전기차', model: '기아 EV6', price: '약 4,800만 원', cc: '전기', premium20s: '약 210~310만 원', premium30s: '약 115~165만 원', premium40s: '약 95~145만 원', note: '아이오닉5와 유사' },
  { category: '전기차', model: '현대 아이오닉 6', price: '약 4,600만 원', cc: '전기', premium20s: '약 195~290만 원', premium30s: '약 105~155만 원', premium40s: '약 88~135만 원', note: '세단형 전기차' },
  { category: '전기차', model: '기아 EV9', price: '약 7,300만 원', cc: '전기', premium20s: '약 280~400만 원', premium30s: '약 150~220만 원', premium40s: '약 130~190만 원', note: '대형 전기 SUV, 차량 가액 높음' },
  { category: '전기차', model: '테슬라 모델 3', price: '약 5,500만 원', cc: '전기', premium20s: '약 230~340만 원', premium30s: '약 125~185만 원', premium40s: '약 105~160만 원', note: '수입 전기차, 부품비 높음' },
  { category: '전기차', model: '테슬라 모델 Y', price: '약 5,800만 원', cc: '전기', premium20s: '약 240~360만 원', premium30s: '약 130~195만 원', premium40s: '약 110~170만 원', note: '수입 전기 SUV' },
];

const importCars: CarInsurance[] = [
  { category: '수입 세단', model: 'BMW 3시리즈', price: '약 5,500만 원', cc: '1,998cc', premium20s: '약 250~370만 원', premium30s: '약 140~200만 원', premium40s: '약 115~175만 원', note: '수입차 부품비 높음' },
  { category: '수입 세단', model: '벤츠 C클래스', price: '약 5,800만 원', cc: '1,999cc', premium20s: '약 260~390만 원', premium30s: '약 145~215만 원', premium40s: '약 120~185만 원', note: '수리비 높아 보험료 상승' },
  { category: '수입 SUV', model: 'BMW X3', price: '약 6,500만 원', cc: '1,998cc', premium20s: '약 280~420만 원', premium30s: '약 155~230만 원', premium40s: '약 130~200만 원', note: '수입 SUV 할증' },
  { category: '수입 SUV', model: '벤츠 GLC', price: '약 7,000만 원', cc: '1,999cc', premium20s: '약 300~450만 원', premium30s: '약 165~245만 원', premium40s: '약 140~215만 원', note: '차량 가액 + 수입차 할증' },
];

const priceFactors = [
  { emoji: '🚗', title: '차량 가액 (차량 가격)', impact: '매우 높음', desc: '차량 가격이 높을수록 사고 시 수리비가 증가하므로 보험료가 올라갑니다. 5,000만 원 차량은 2,000만 원 차량 대비 보험료가 약 1.5~2배 높습니다.' },
  { emoji: '🔧', title: '수리비 (부품 가격)', impact: '높음', desc: '수입차·전기차는 부품 가격이 높아 보험료가 상승합니다. 같은 가격대라도 국산차보다 수입차가 20~50% 비쌉니다.' },
  { emoji: '📊', title: '사고율 (손해율)', impact: '높음', desc: '특정 차종의 사고 빈도가 높으면 해당 차종의 보험료가 올라갑니다. 스포츠카, 고성능 차량은 사고율이 높아 보험료가 높습니다.' },
  { emoji: '👤', title: '운전자 연령·경력', impact: '매우 높음', desc: '20대 초보 운전자는 40대 경력 운전자 대비 보험료가 2~3배 높습니다. 무사고 경력이 길수록 할인이 커집니다.' },
  { emoji: '🛡️', title: '보장 범위 (특약)', impact: '중간', desc: '자기차량손해, 무보험차 상해 등 특약을 추가할수록 보험료가 올라갑니다. 필요한 특약만 선택하면 비용을 줄일 수 있습니다.' },
  { emoji: '📍', title: '차량 용도·지역', impact: '낮음~중간', desc: '출퇴근용, 영업용에 따라 보험료가 달라집니다. 사고 빈도가 높은 지역(서울 등)은 소폭 할증될 수 있습니다.' },
];

const savingTips = [
  { title: '경차 선택', desc: '경차(모닝, 레이)는 차량 가액이 낮아 보험료가 가장 저렴합니다. 보험료 절약이 중요하다면 경차가 유리합니다.', saving: '중형 대비 40~50% 절약' },
  { title: '국산차 선택', desc: '같은 가격대라도 국산차가 수입차보다 부품비가 저렴해 보험료가 20~50% 낮습니다.', saving: '수입차 대비 20~50% 절약' },
  { title: '다이렉트 보험 가입', desc: '온라인으로 직접 가입하면 대리점 수수료가 없어 10~20% 저렴합니다.', saving: '10~20% 절약' },
  { title: '마일리지 특약 활용', desc: '연간 주행거리가 적으면(5,000km 이하) 최대 30%까지 할인됩니다.', saving: '최대 30% 절약' },
  { title: '무사고 할인 유지', desc: '3년 무사고 시 약 30%, 5년 이상 무사고 시 최대 50%까지 할인됩니다.', saving: '최대 50% 절약' },
];

const faqItems = [
  {
    q: '경차와 중형차의 보험료 차이는 얼마나 되나요?',
    a: '30대 무사고 기준, 경차(모닝)는 연 약 40~60만 원, 중형차(쏘나타)는 연 약 80~120만 원으로 약 2배 차이가 납니다. 차량 가액과 수리비 차이가 주요 원인입니다.',
  },
  {
    q: '전기차 보험료가 내연기관보다 비싼 이유는 무엇인가요?',
    a: '전기차는 ①배터리 수리·교체 비용이 높고(배터리만 1,000~2,000만 원), ②전용 부품 가격이 비싸며, ③차량 가액 자체가 높기 때문입니다. 다만 전기차 보급 확대로 보험료 격차는 점차 줄어드는 추세입니다.',
  },
  {
    q: '수입차 보험료가 국산차보다 비싼 이유는 무엇인가요?',
    a: '수입차는 ①부품을 해외에서 조달해야 하므로 수리비가 높고, ②공임비도 비싸며, ③차량 가액이 높은 경우가 많기 때문입니다. 같은 2,000cc급이라도 수입차가 국산차보다 보험료가 30~80% 높을 수 있습니다.',
  },
  {
    q: 'SUV는 세단보다 보험료가 비싼가요?',
    a: '일반적으로 SUV가 세단보다 소폭 비쌉니다. SUV는 차체가 크고 무거워 사고 시 수리비가 높고, 대형 SUV(팰리세이드 등)는 차량 가액도 높기 때문입니다. 다만 같은 가격대의 세단과 SUV라면 보험료 차이는 크지 않습니다.',
  },
  {
    q: '하이브리드 차량의 보험료는 어떤가요?',
    a: '하이브리드 차량은 동급 내연기관 차량과 보험료가 비슷하거나 소폭 높습니다. 하이브리드 시스템 수리비가 추가되지만, 차량 가액 차이가 크지 않아 보험료 차이도 크지 않습니다.',
  },
];

function InsuranceTable({ title, data, id }: { title: string; data: CarInsurance[]; id: string }) {
  return (
    <div className="mb-8" id={id}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-50 text-gray-900">
                <th className="px-3 py-3 text-left font-semibold">차종</th>
                <th className="px-3 py-3 text-left font-semibold">모델</th>
                <th className="px-3 py-3 text-right font-semibold">신차 가격</th>
                <th className="px-3 py-3 text-right font-semibold">20대</th>
                <th className="px-3 py-3 text-right font-semibold">30대</th>
                <th className="px-3 py-3 text-right font-semibold">40대</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((car) => (
                <tr key={`${car.model}`} className="hover:bg-gray-50">
                  <td className="px-3 py-3 text-gray-500 text-xs">{car.category}</td>
                  <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">{car.model}</td>
                  <td className="px-3 py-3 text-right text-gray-600 whitespace-nowrap">{car.price}</td>
                  <td className="px-3 py-3 text-right text-red-500 font-medium whitespace-nowrap">{car.premium20s}</td>
                  <td className="px-3 py-3 text-right text-amber-600 font-medium whitespace-nowrap">{car.premium30s}</td>
                  <td className="px-3 py-3 text-right text-green-600 font-medium whitespace-nowrap">{car.premium40s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function InsuranceByCarPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '차종별 자동차보험료 비교 - 2026년 경차·중형·SUV·전기차·수입차 보험료',
          description: '인기 차종별 예상 보험료를 한눈에 비교합니다.',
          url: `${BASE_URL}/guide/insurance-by-car`,
          publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '차종별 보험료 비교', item: `${BASE_URL}/guide/insurance-by-car` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href="/guide/car-insurance" className="hover:text-amber-600">자동차보험료 가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">차종별 보험료 비교</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            차종별 자동차보험료 비교
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            같은 운전자라도 어떤 차를 타느냐에 따라 보험료가 <strong>2~5배</strong> 차이납니다.
            2026년 기준, 국산차·전기차·수입차 인기 모델의 예상 보험료를 연령대별로 비교했습니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#domestic" className="text-sm px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">국산차</a>
            <a href="#ev" className="text-sm px-3 py-1.5 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">전기차</a>
            <a href="#import" className="text-sm px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">수입차</a>
          </div>
        </section>

        {/* 국산차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            국산차 보험료 비교
          </h2>
          <InsuranceTable title="경차 · 준중형 · 중형 · 대형 · SUV" data={domesticCars} id="domestic" />
          <p className="text-xs text-gray-400">
            ※ 종합보험(자기차량손해 포함), 대인 II 무한, 대물 1억 기준. 무사고 3년 이상 가정. 실제 보험료는 사고 이력, 특약, 보험사에 따라 달라집니다.
          </p>
        </section>

        {/* 전기차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            전기차 보험료 비교
          </h2>
          <p className="text-gray-600 mb-6">
            전기차는 배터리 수리·교체 비용이 높아 동급 내연기관 대비 보험료가 <strong>20~40%</strong> 높은 편입니다.
          </p>
          <InsuranceTable title="국산 전기차 · 수입 전기차" data={evCars} id="ev" />
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <h4 className="font-bold text-green-800 mb-2">전기차 보험료가 높은 이유</h4>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• 배터리 교체 비용: 1,000~2,000만 원 (차량 가격의 30~40%)</li>
              <li>• 전용 부품 가격이 내연기관 대비 높음</li>
              <li>• 차량 가액 자체가 동급 내연기관보다 높음</li>
              <li>• 전기차 전용 정비 인프라가 아직 부족</li>
            </ul>
          </div>
        </section>

        {/* 수입차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            수입차 보험료 비교
          </h2>
          <p className="text-gray-600 mb-6">
            수입차는 부품 조달 비용과 공임비가 높아 동급 국산차 대비 보험료가 <strong>30~80%</strong> 높습니다.
          </p>
          <InsuranceTable title="수입 세단 · 수입 SUV" data={importCars} id="import" />
        </section>

        {/* 보험료 결정 요인 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            보험료에 영향을 미치는 요인
          </h2>
          <div className="space-y-4">
            {priceFactors.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="text-2xl flex-shrink-0">{item.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.impact === '매우 높음' ? 'bg-red-100 text-red-700' :
                      item.impact === '높음' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      영향: {item.impact}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 절약 팁 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            차종 선택으로 보험료 절약하는 방법
          </h2>
          <div className="space-y-4">
            {savingTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900">{tip.title}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      {tip.saving}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-amber-600 transition-colors">
                  {item.q}
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              보험료 절약 방법을 더 알아보세요
            </h2>
            <p className="text-amber-100 mb-6">
              다이렉트 보험, 마일리지 특약, 갱신 체크리스트 등 보험료 절약 가이드를 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/car-insurance"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                보험료 비교 가이드
              </Link>
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                유지비 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
