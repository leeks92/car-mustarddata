import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '하이브리드 vs 가솔린 비교 - 2026년 연비·유지비·총비용 비교',
  description:
    '하이브리드와 가솔린 차량의 연비, 유류비, 자동차세, 보험료, 정비비, 감가상각, 5년 총비용을 비교합니다. 쏘나타·그랜저·투싼·K5 실연비 비교와 추천 대상까지 2026년 최신 기준으로 총정리했습니다.',
  keywords: [
    '하이브리드 vs 가솔린',
    '하이브리드 가솔린 비교',
    '하이브리드 연비',
    '하이브리드 유지비',
    '하이브리드 장단점',
    '하이브리드 총비용',
    '하이브리드 배터리 수명',
    '하이브리드 취등록세',
    '쏘나타 하이브리드',
    '그랜저 하이브리드',
  ],
  alternates: { canonical: `${BASE_URL}/guide/hybrid-vs-gasoline` },
  openGraph: {
    title: '하이브리드 vs 가솔린 비교 - 2026년 연비·유지비·총비용 비교',
    description:
      '하이브리드와 가솔린 차량의 연비, 유지비, 5년 총비용을 비교합니다.',
    url: `${BASE_URL}/guide/hybrid-vs-gasoline`,
    type: 'website',
  },
};

const coreComparison = [
  { item: '차량 가격', hybrid: '약 200~400만 원 높음', gasoline: '기본 가격' },
  { item: '연비', hybrid: '18~23km/L', gasoline: '12~16km/L' },
  { item: '유류비 (연간)', hybrid: '약 100~130만 원', gasoline: '약 170~230만 원' },
  { item: '자동차세 (연간)', hybrid: '동일 (배기량 기준)', gasoline: '동일 (배기량 기준)' },
  { item: '취등록세', hybrid: '최대 40만 원 감면', gasoline: '차량가의 7%' },
  { item: '보험료 (연간)', hybrid: '약 5~10% 높음', gasoline: '기준 금액' },
  { item: '정비비 (연간)', hybrid: '약 30~50만 원', gasoline: '약 40~60만 원' },
  { item: '감가상각 (3년)', hybrid: '약 35~40%', gasoline: '약 40~50%' },
];

const fuelEfficiencyComparison = [
  {
    model: '쏘나타',
    hybridOfficial: '20.1km/L',
    hybridReal: '17.5km/L',
    gasolineOfficial: '14.1km/L',
    gasolineReal: '11.8km/L',
  },
  {
    model: '그랜저',
    hybridOfficial: '18.2km/L',
    hybridReal: '15.8km/L',
    gasolineOfficial: '11.5km/L',
    gasolineReal: '9.6km/L',
  },
  {
    model: '투싼',
    hybridOfficial: '17.2km/L',
    hybridReal: '14.9km/L',
    gasolineOfficial: '12.8km/L',
    gasolineReal: '10.5km/L',
  },
  {
    model: 'K5',
    hybridOfficial: '20.8km/L',
    hybridReal: '17.8km/L',
    gasolineOfficial: '13.9km/L',
    gasolineReal: '11.5km/L',
  },
];

const fiveYearCost = {
  hybrid: {
    purchase: '3,350만 원',
    registrationTax: '195만 원 (40만 원 감면)',
    insurance: '550만 원',
    fuel: '600만 원',
    maintenance: '200만 원',
    total: '4,895만 원',
  },
  gasoline: {
    purchase: '3,050만 원',
    registrationTax: '214만 원',
    insurance: '500만 원',
    fuel: '1,020만 원',
    maintenance: '280만 원',
    total: '5,064만 원',
  },
};

const hybridPros = [
  {
    title: '뛰어난 연비',
    description:
      '도심 주행 시 가솔린 대비 30~50% 높은 연비를 실현합니다. 정체 구간이 많은 출퇴근 환경에서 특히 효과적입니다.',
  },
  {
    title: '취등록세 감면',
    description:
      '하이브리드 차량은 취등록세 최대 40만 원 감면 혜택을 받을 수 있습니다. 2026년에도 감면 제도가 유지됩니다.',
  },
  {
    title: '정숙한 주행 경험',
    description:
      '저속 구간에서 전기모터로 주행하여 소음과 진동이 적습니다. 시내 주행 시 승차감이 뛰어납니다.',
  },
  {
    title: '낮은 감가상각',
    description:
      '중고차 시장에서 하이브리드 수요가 높아 가솔린 대비 감가상각이 적습니다. 3년 기준 약 5~10%p 유리합니다.',
  },
  {
    title: '적은 정비비',
    description:
      '회생제동 시스템으로 브레이크 패드 마모가 적고, 엔진 부하가 분산되어 전체적인 정비비가 절감됩니다.',
  },
];

const hybridCons = [
  {
    title: '높은 구매 가격',
    description:
      '동일 모델 가솔린 대비 200~400만 원의 가격 프리미엄이 있습니다. 초기 투자 비용이 큽니다.',
  },
  {
    title: '배터리 교체 비용',
    description:
      '10년 이상 사용 시 구동 배터리 교체가 필요할 수 있으며, 교체 비용은 약 200~400만 원 수준입니다.',
  },
  {
    title: '트렁크 공간 감소',
    description:
      '배터리 탑재로 인해 가솔린 모델 대비 트렁크 용량이 약 50~100L 줄어듭니다.',
  },
  {
    title: '고속도로 연비 차이 적음',
    description:
      '고속 주행 시 엔진 중심으로 구동되어 가솔린과의 연비 차이가 도심 대비 크게 줄어듭니다.',
  },
];

const gasolinePros = [
  {
    title: '낮은 구매 가격',
    description:
      '하이브리드 대비 200~400만 원 저렴하여 초기 비용 부담이 적습니다. 같은 예산으로 상위 트림 선택이 가능합니다.',
  },
  {
    title: '정비 편의성',
    description:
      '구조가 단순하여 어디서나 정비가 가능하고, 정비 인프라가 풍부합니다. 부품 수급도 원활합니다.',
  },
  {
    title: '넉넉한 적재 공간',
    description:
      '배터리가 없어 트렁크 공간이 넓습니다. 캠핑이나 가족 여행 등 짐이 많을 때 유리합니다.',
  },
  {
    title: '다양한 선택지',
    description:
      '모델, 트림, 옵션의 선택 폭이 넓고, 중고차 시장에서도 매물이 풍부합니다.',
  },
];

const gasolineCons = [
  {
    title: '높은 유류비',
    description:
      '하이브리드 대비 연간 약 40~100만 원의 유류비가 더 소요됩니다. 연간 주행거리가 많을수록 차이가 커집니다.',
  },
  {
    title: '세금 혜택 없음',
    description:
      '하이브리드와 달리 취등록세 감면 혜택이 없어 전액 납부해야 합니다.',
  },
  {
    title: '높은 감가상각',
    description:
      '친환경 트렌드로 가솔린 차량의 중고차 가치 하락 속도가 하이브리드 대비 빠릅니다.',
  },
];

const faqItems = [
  {
    q: '하이브리드 배터리 수명은 얼마나 되나요?',
    a: '하이브리드 구동 배터리의 평균 수명은 약 15~20만 km 또는 10~15년입니다. 현대·기아는 구동 배터리에 10년/20만 km 보증을 제공하고 있어 보증 기간 내 무상 교체가 가능합니다. 실제로 택시처럼 고강도로 사용하지 않는 한 배터리 교체가 필요한 경우는 드뭅니다.',
  },
  {
    q: '하이브리드 배터리 교체 비용은?',
    a: '하이브리드 구동 배터리 교체 비용은 차종에 따라 약 200~400만 원 수준입니다. 쏘나타 HEV 기준 약 250만 원, 그랜저 HEV는 약 300만 원 내외입니다. 다만 보증 기간(10년/20만 km) 내에는 무상 교체되며, 사설 정비소를 이용하면 공임비를 절약할 수 있습니다.',
  },
  {
    q: '하이브리드도 충전해야 하나요?',
    a: '일반 하이브리드(HEV)는 별도 충전이 필요 없습니다. 주행 중 엔진과 회생제동을 통해 자동으로 배터리가 충전됩니다. 주유만 하면 됩니다. 다만 플러그인 하이브리드(PHEV)는 외부 충전이 가능하며, 충전 시 전기모드 주행 거리가 늘어납니다.',
  },
  {
    q: '하이브리드 취등록세 감면은 얼마인가요?',
    a: '2026년 기준 하이브리드 차량은 취등록세 최대 40만 원 감면을 받을 수 있습니다. 예를 들어 3,350만 원 쏘나타 HEV의 취등록세는 약 235만 원에서 40만 원이 감면되어 약 195만 원을 납부합니다. 감면 한도는 정부 정책에 따라 매년 조정될 수 있습니다.',
  },
  {
    q: '중고 하이브리드를 구매해도 괜찮을까요?',
    a: '중고 하이브리드 구매는 충분히 합리적인 선택입니다. 배터리 보증이 10년/20만 km로 넉넉하고, 감가상각이 가솔린 대비 적어 가성비가 좋습니다. 다만 구매 전 배터리 상태 점검(SOH 확인), 하이브리드 시스템 진단, 주행거리를 꼭 확인하세요. 5년/10만 km 이내 차량이 가장 안전한 선택입니다.',
  },
  {
    q: '하이브리드 연비가 실제로 좋은가요?',
    a: '도심 주행에서는 공인연비의 85~90% 수준으로 가솔린 대비 확실히 좋습니다. 예를 들어 쏘나타 HEV는 공인 20.1km/L, 실연비 약 17.5km/L이며, 가솔린은 공인 14.1km/L, 실연비 약 11.8km/L입니다. 다만 고속도로 위주 주행에서는 차이가 줄어들어 약 15~20% 정도만 유리합니다.',
  },
  {
    q: '플러그인 하이브리드(PHEV)와 일반 하이브리드 차이는?',
    a: '일반 하이브리드(HEV)는 충전 없이 엔진과 회생제동으로만 배터리를 충전하며, 전기 주행 거리는 2~3km로 매우 짧습니다. 반면 플러그인 하이브리드(PHEV)는 외부 충전이 가능하여 전기만으로 40~60km를 주행할 수 있습니다. PHEV는 취등록세 감면이 더 크고(최대 140만 원), 단거리 출퇴근 시 전기만으로 운행할 수 있어 유류비를 크게 절약할 수 있습니다.',
  },
];

export default function HybridVsGasolinePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '하이브리드 vs 가솔린 비교 - 2026년 연비·유지비·총비용 비교',
          description:
            '하이브리드와 가솔린 차량의 연비, 유지비, 5년 총비용을 비교합니다.',
          url: `${BASE_URL}/guide/hybrid-vs-gasoline`,
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
            {
              '@type': 'ListItem',
              position: 2,
              name: '하이브리드 vs 가솔린 비교',
              item: `${BASE_URL}/guide/hybrid-vs-gasoline`,
            },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">홈</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">하이브리드 vs 가솔린 비교</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            하이브리드 vs 가솔린 비교
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            하이브리드와 가솔린, 어떤 차를 사야 할까요? 차량 가격, 연비, 유류비, 세금, 보험료,
            정비비, 감가상각까지 <strong>2026년 최신 기준</strong>으로 항목별 비교하고
            5년 총비용 시뮬레이션 결과를 확인하세요.
          </p>
        </section>

        {/* 1. 핵심 비교표 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            핵심 비교표
          </h2>
          <p className="text-gray-600 mb-4">
            하이브리드와 가솔린 차량의 주요 비용 항목을 한눈에 비교합니다.
            중형 세단(쏘나타급) 기준, 연간 15,000km 주행 시 예상 수치입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">비교 항목</th>
                    <th className="px-4 py-3 text-center font-semibold">하이브리드</th>
                    <th className="px-4 py-3 text-center font-semibold">가솔린</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {coreComparison.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.hybrid}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.gasoline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 2026년 기준, 중형 세단(쏘나타급) 기준 예상치이며 실제 비용은 차종, 운전 습관, 주행 환경에 따라 달라질 수 있습니다.
          </p>
        </section>

        {/* 2. 차종별 실연비 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            차종별 실연비 비교
          </h2>
          <p className="text-gray-600 mb-4">
            인기 하이브리드 모델과 동일 가솔린 모델의 공인연비·실연비를 비교합니다.
            실연비는 사용자 평균 기준이며, 도심+고속 혼합 주행 조건입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold" rowSpan={2}>차종</th>
                    <th className="px-3 py-2 text-center font-semibold border-b border-gray-200" colSpan={2}>하이브리드 (HEV)</th>
                    <th className="px-3 py-2 text-center font-semibold border-b border-gray-200" colSpan={2}>가솔린</th>
                  </tr>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-2 text-center text-xs font-medium">공인연비</th>
                    <th className="px-3 py-2 text-center text-xs font-medium">실연비</th>
                    <th className="px-3 py-2 text-center text-xs font-medium">공인연비</th>
                    <th className="px-3 py-2 text-center text-xs font-medium">실연비</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {fuelEfficiencyComparison.map((row) => (
                    <tr key={row.model} className="hover:bg-gray-50">
                      <td className="px-3 py-3 font-medium text-gray-900">{row.model}</td>
                      <td className="px-3 py-3 text-center text-gray-600">{row.hybridOfficial}</td>
                      <td className="px-3 py-3 text-center text-amber-600 font-semibold">{row.hybridReal}</td>
                      <td className="px-3 py-3 text-center text-gray-600">{row.gasolineOfficial}</td>
                      <td className="px-3 py-3 text-center text-gray-900 font-semibold">{row.gasolineReal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 실연비는 사용자 리뷰 및 자동차 커뮤니티 평균 데이터 기준이며, 운전 습관·주행 환경에 따라 달라집니다.
          </p>
        </section>

        {/* 3. 5년 총비용 계산 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5년 총비용 비교 (쏘나타 기준)
          </h2>
          <p className="text-gray-600 mb-4">
            쏘나타 HEV와 쏘나타 가솔린 2.0을 기준으로 5년간 15만 km 주행 시
            총비용(구입비+세금+보험+유류비+정비비)을 비교합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* 하이브리드 */}
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
              <h3 className="text-lg font-bold text-amber-600 mb-4">쏘나타 HEV</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>차량 구입비</span>
                  <span className="font-semibold">{fiveYearCost.hybrid.purchase}</span>
                </li>
                <li className="flex justify-between">
                  <span>취등록세</span>
                  <span className="font-semibold">{fiveYearCost.hybrid.registrationTax}</span>
                </li>
                <li className="flex justify-between">
                  <span>보험료 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.hybrid.insurance}</span>
                </li>
                <li className="flex justify-between">
                  <span>유류비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.hybrid.fuel}</span>
                </li>
                <li className="flex justify-between">
                  <span>정비비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.hybrid.maintenance}</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold text-gray-900">5년 총비용</span>
                  <span className="font-bold text-amber-600 text-lg">{fiveYearCost.hybrid.total}</span>
                </li>
              </ul>
            </div>
            {/* 가솔린 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-700 mb-4">쏘나타 가솔린 2.0</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>차량 구입비</span>
                  <span className="font-semibold">{fiveYearCost.gasoline.purchase}</span>
                </li>
                <li className="flex justify-between">
                  <span>취등록세</span>
                  <span className="font-semibold">{fiveYearCost.gasoline.registrationTax}</span>
                </li>
                <li className="flex justify-between">
                  <span>보험료 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.gasoline.insurance}</span>
                </li>
                <li className="flex justify-between">
                  <span>유류비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.gasoline.fuel}</span>
                </li>
                <li className="flex justify-between">
                  <span>정비비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.gasoline.maintenance}</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold text-gray-900">5년 총비용</span>
                  <span className="font-bold text-gray-900 text-lg">{fiveYearCost.gasoline.total}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">손익분기점 분석</h3>
            <p className="text-gray-700 leading-relaxed">
              하이브리드는 구매 가격이 약 300만 원 높지만, 유류비와 정비비에서 연간 약 80~100만 원을 절약합니다.
              <strong className="text-amber-700"> 약 3년(약 4.5만 km 주행 시점)</strong>에서 손익분기점을 넘기며,
              5년 기준 하이브리드가 약 <strong className="text-amber-700">169만 원 유리</strong>합니다.
              연간 주행거리가 2만 km 이상이면 손익분기점이 2년 이내로 앞당겨집니다.
            </p>
          </div>
        </section>

        {/* 4. 하이브리드 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            하이브리드 장단점
          </h2>

          <h3 className="text-xl font-bold text-gray-900 mb-4">장점</h3>
          <div className="space-y-3 mb-8">
            {hybridPros.map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">단점</h3>
          <div className="space-y-3">
            {hybridCons.map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 가솔린 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            가솔린 장단점
          </h2>

          <h3 className="text-xl font-bold text-gray-900 mb-4">장점</h3>
          <div className="space-y-3 mb-8">
            {gasolinePros.map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">단점</h3>
          <div className="space-y-3">
            {gasolineCons.map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 추천 대상 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            추천 대상
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
              <h3 className="text-lg font-bold text-amber-600 mb-4">하이브리드 추천</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>연간 2만 km 이상</strong> 주행하는 분 - 유류비 절감 효과가 극대화됩니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>도심 주행 위주</strong>인 분 - 정체 구간에서 전기모터의 효율이 극대화됩니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>5년 이상 장기 보유</strong> 예정인 분 - 손익분기점을 넘겨 경제적 이점이 커집니다</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-700 mb-4">가솔린 추천</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">&#10003;</span>
                  <span><strong>연간 1만 km 이하</strong> 주행하는 분 - 유류비 차이가 크지 않아 구매가 절감이 유리합니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">&#10003;</span>
                  <span><strong>고속도로 주행 위주</strong>인 분 - 고속에서는 연비 차이가 크지 않습니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">&#10003;</span>
                  <span><strong>3년 내 교체 예정</strong>인 분 - 손익분기점 전에 매각하면 가솔린이 유리합니다</span>
                </li>
              </ul>
            </div>
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
              내 주행 패턴에 맞는 비용을 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              유류비 계산기와 유지비 가이드로 나에게 맞는 차종을 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/fuel-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                유류비 계산하기
              </Link>
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                유지비 가이드 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
