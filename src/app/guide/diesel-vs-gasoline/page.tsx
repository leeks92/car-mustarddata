import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '디젤 vs 가솔린 비교 - 연비·유지비·5년 총비용 분석',
  description:
    '디젤과 가솔린 엔진의 연비, 유류비, 정비비, 자동차세, 감가상각, 5년 총비용을 비교합니다. 쏘나타·투싼·쏘렌토·K5 실연비 비교와 디젤·가솔린 장단점, 추천 대상까지 2026년 최신 기준으로 총정리했습니다.',
  keywords: [
    '디젤 가솔린 비교',
    '디젤 vs 가솔린',
    '디젤 연비',
    '가솔린 연비',
    '디젤 유지비',
    '디젤 장단점',
    '경유 휘발유 비교',
    '디젤 5년 총비용',
    '디젤 DPF',
    '디젤 요소수',
  ],
  alternates: { canonical: `${BASE_URL}/guide/diesel-vs-gasoline` },
  openGraph: {
    title: '디젤 vs 가솔린 비교 - 연비·유지비·5년 총비용 분석',
    description:
      '디젤과 가솔린 엔진의 연비, 유지비, 5년 총비용, 장단점을 비교합니다.',
    url: `${BASE_URL}/guide/diesel-vs-gasoline`,
    type: 'website',
  },
};

const coreComparison = [
  { item: '연료 가격 (L당)', diesel: '약 1,450원 (경유)', gasoline: '약 1,650원 (휘발유)' },
  { item: '연비 (중형 기준)', diesel: '15~19km/L', gasoline: '11~15km/L' },
  { item: '출력 특성', diesel: '고토크·저RPM 유리', gasoline: '고RPM·부드러운 가속' },
  { item: '유지비 (연간)', diesel: '약 50~80만 원', gasoline: '약 40~60만 원' },
  { item: '환경 기준', diesel: '배출가스 5등급 규제 강화', gasoline: '상대적으로 유리' },
  { item: '중고차 가격', diesel: '감가 빠름 (환경규제)', gasoline: '안정적 잔존가치' },
  { item: '소음·진동', diesel: '상대적으로 크다', gasoline: '정숙한 주행' },
  { item: '내구성', diesel: '30만 km+ 장수명', gasoline: '20만 km+ 일반 수명' },
];

const fuelEfficiencyComparison = [
  {
    model: '쏘나타',
    dieselOfficial: '17.8km/L',
    dieselReal: '15.2km/L',
    gasolineOfficial: '14.1km/L',
    gasolineReal: '11.8km/L',
  },
  {
    model: '투싼',
    dieselOfficial: '16.5km/L',
    dieselReal: '14.1km/L',
    gasolineOfficial: '12.8km/L',
    gasolineReal: '10.5km/L',
  },
  {
    model: '쏘렌토',
    dieselOfficial: '14.3km/L',
    dieselReal: '12.5km/L',
    gasolineOfficial: '10.6km/L',
    gasolineReal: '8.9km/L',
  },
  {
    model: 'K5',
    dieselOfficial: '17.2km/L',
    dieselReal: '14.8km/L',
    gasolineOfficial: '13.9km/L',
    gasolineReal: '11.5km/L',
  },
];

const fiveYearCost = {
  diesel: {
    purchase: '3,250만 원',
    fuel: '약 715만 원',
    maintenance: '약 350만 원',
    tax: '약 165만 원',
    depreciation: '약 1,560만 원 (48%)',
    total: '약 6,040만 원',
  },
  gasoline: {
    purchase: '3,050만 원',
    fuel: '약 1,050만 원',
    maintenance: '약 260만 원',
    tax: '약 165만 원',
    depreciation: '약 1,340만 원 (44%)',
    total: '약 5,865만 원',
  },
};

const dieselPros = [
  {
    title: '뛰어난 연비',
    description:
      '디젤 엔진은 압축비가 높아 가솔린 대비 20~30% 높은 연비를 자랑합니다. 장거리 고속주행에서 특히 효과가 크며, 연간 2만 km 이상 주행 시 유류비 차이가 확연합니다.',
  },
  {
    title: '저렴한 연료 가격',
    description:
      '경유는 휘발유보다 리터당 약 150~250원 저렴합니다. 높은 연비와 낮은 유가가 결합되어 장거리 운전자에게 유류비 절감 효과가 큽니다.',
  },
  {
    title: '높은 토크 (견인력)',
    description:
      '디젤 엔진은 낮은 RPM에서 강한 토크를 발생시켜 고속도로 추월, 경사로 주행, 캠핑 트레일러 견인 등에 유리합니다. SUV와 대형차에서 특히 장점이 부각됩니다.',
  },
  {
    title: '엔진 내구성',
    description:
      '디젤 엔진은 구조적으로 튼튼하여 30만 km 이상의 장수명이 가능합니다. 택시나 영업용 차량에서 디젤을 선호하는 이유이기도 합니다.',
  },
];

const dieselCons = [
  {
    title: '강화되는 환경 규제',
    description:
      '미세먼지·질소산화물(NOx) 배출 기준이 강화되면서, 노후 디젤차는 운행제한지역(LEZ) 진입이 제한되고 있습니다. 5등급 디젤차는 서울·수도권 운행제한 대상입니다.',
  },
  {
    title: '요소수(AdBlue) 관리',
    description:
      'SCR 장착 디젤차는 요소수(AdBlue)를 주기적으로 보충해야 합니다. 약 1만 km마다 10L(약 1~2만 원) 소요되며, 부족 시 엔진 출력이 제한됩니다.',
  },
  {
    title: '소음과 진동',
    description:
      '디젤 엔진은 압축착화 방식 특성상 가솔린보다 소음과 진동이 큽니다. 최신 디젤 엔진은 크게 개선되었으나 정숙성 면에서 가솔린에 미치지 못합니다.',
  },
  {
    title: 'DPF 관리 필요',
    description:
      '디젤 미립자 필터(DPF)는 장거리 고속주행으로 재생이 필요합니다. 단거리 시내주행만 반복하면 DPF 막힘이 발생하여 교체 비용 100~200만 원이 소요될 수 있습니다.',
  },
];

const gasolinePros = [
  {
    title: '정숙한 주행',
    description:
      '가솔린 엔진은 디젤 대비 소음과 진동이 적어 쾌적한 승차감을 제공합니다. 시내 저속 주행에서 특히 정숙성이 돋보이며, 여성 운전자와 가족 단위 사용자에게 선호됩니다.',
  },
  {
    title: '저렴한 정비비',
    description:
      '가솔린 엔진은 구조가 상대적으로 단순하여 정비비가 낮습니다. DPF, 요소수(SCR), 인젝터 등 디젤 전용 부품의 고가 정비 부담이 없습니다.',
  },
  {
    title: '환경 기준 유리',
    description:
      '가솔린 차량은 배출가스 등급에서 유리하여 운행제한지역 규제 걱정이 적습니다. 향후 환경 규제 강화에도 디젤보다 영향이 적습니다.',
  },
  {
    title: '안정적 중고차 가치',
    description:
      '환경 규제 강화로 디젤 중고차 수요가 감소하면서, 가솔린 차량의 잔존가치가 상대적으로 안정적입니다. 3~5년 후 매각 시 유리합니다.',
  },
];

const gasolineCons = [
  {
    title: '높은 연료 가격',
    description:
      '휘발유는 경유보다 리터당 150~250원 비싸며, 연비도 디젤보다 낮아 장거리 주행 시 유류비 부담이 큽니다. 연간 2만 km 이상 주행 시 연 50만 원 이상 차이가 납니다.',
  },
  {
    title: '낮은 저속 토크',
    description:
      '가솔린 엔진은 고RPM에서 최대 출력을 발휘하는 특성으로, 저속에서의 순발력과 견인력이 디젤보다 부족합니다. 무거운 짐이나 트레일러 견인 시 불리합니다.',
  },
  {
    title: '상대적으로 낮은 연비',
    description:
      '동일 차종 기준 가솔린 연비는 디젤 대비 약 20~30% 낮습니다. 고속도로 장거리 주행에서 연비 차이가 더욱 크게 체감됩니다.',
  },
];

const faqItems = [
  {
    q: '디젤차 DPF 재생은 어떻게 하나요?',
    a: 'DPF(디젤 미립자 필터) 재생은 고속도로에서 60~80km/h 이상으로 30분 이상 주행하면 자동으로 진행됩니다. 계기판에 DPF 경고등이 켜지면 가급적 빨리 고속주행을 해주세요. 시내 단거리 주행만 반복하면 DPF가 막혀 강제 재생이나 교체(100~200만 원)가 필요할 수 있습니다.',
  },
  {
    q: '디젤 요소수는 얼마나 자주 넣어야 하나요?',
    a: '디젤 요소수(AdBlue)는 약 1만~1.5만 km마다 10L 정도 보충이 필요합니다. 비용은 약 1~2만 원 수준으로 부담이 크지 않지만, 요소수가 부족하면 엔진 출력이 제한되므로 경고등이 뜨면 즉시 보충해야 합니다. 주유소나 자동차 용품점에서 쉽게 구입할 수 있습니다.',
  },
  {
    q: '디젤차는 시내 주행에 안 좋은가요?',
    a: '디젤차로 시내 단거리 주행만 하면 DPF 재생이 제대로 이루어지지 않아 DPF 막힘 문제가 생길 수 있습니다. 주 1~2회 이상 20분 이상 고속주행(고속도로 등)을 병행한다면 문제없습니다. 일상적으로 5km 미만 단거리만 주행하는 패턴이라면 가솔린을 추천합니다.',
  },
  {
    q: '디젤과 가솔린 자동차세 차이가 있나요?',
    a: '자동차세는 배기량(cc) 기준으로 부과되므로, 동일 배기량이면 디젤과 가솔린의 자동차세는 동일합니다. 다만 디젤 모델이 가솔린보다 배기량이 작은 경우가 있어(예: 가솔린 2.0L vs 디젤 1.6L) 실제 세금은 디젤이 더 적을 수 있습니다.',
  },
  {
    q: '디젤 SUV와 가솔린 SUV 중 어떤 게 좋나요?',
    a: '연간 2만 km 이상 주행하거나 고속도로·장거리 주행이 많다면 디젤 SUV가 유류비 면에서 유리합니다. 반면 시내 출퇴근 위주에 정숙성을 중시한다면 가솔린 SUV가 적합합니다. 최근에는 하이브리드 SUV도 좋은 대안이 되고 있어 함께 비교해보시길 추천합니다.',
  },
  {
    q: '디젤 중고차 가격이 많이 떨어지나요?',
    a: '환경 규제 강화로 디젤 중고차의 감가상각이 가솔린보다 빠른 편입니다. 특히 배출가스 4~5등급 디젤차는 운행제한 우려로 시세 하락폭이 큽니다. 유로6d 이상(배출가스 1등급) 최신 디젤은 상대적으로 안정적이지만, 전반적으로 가솔린 대비 3~5년 후 잔존가치가 약 3~5%p 낮은 경향이 있습니다.',
  },
  {
    q: '앞으로 디젤차 판매가 중단되나요?',
    a: '유럽에서는 2035년부터 내연기관 신차 판매가 금지될 예정이며, 국내에서도 환경부 정책에 따라 디젤 규제가 점차 강화되고 있습니다. 당장 판매가 중단되지는 않지만, 장기적으로 디젤 비중은 줄어들 전망입니다. 10년 이상 장기 보유를 계획한다면 이 점을 고려하세요.',
  },
];

export default function DieselVsGasolinePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '디젤 vs 가솔린 비교 - 연비·유지비·5년 총비용 분석',
          description:
            '디젤과 가솔린 엔진의 연비, 유지비, 5년 총비용, 장단점을 비교합니다.',
          url: `${BASE_URL}/guide/diesel-vs-gasoline`,
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
            { '@type': 'ListItem', position: 1, name: '자동차 계산기', item: BASE_URL },
            {
              '@type': 'ListItem',
              position: 2,
              name: '가이드',
              item: `${BASE_URL}/guide`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: '디젤 vs 가솔린 비교',
              item: `${BASE_URL}/guide/diesel-vs-gasoline`,
            },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">자동차 계산기</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/" className="hover:text-amber-600">가이드</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">디젤 vs 가솔린 비교</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            디젤 vs 가솔린 비교
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            디젤과 가솔린, 어떤 엔진의 차를 사야 할까요? 연료 가격, 연비, 출력 특성, 정비비,
            환경 규제, 중고차 가격, 소음, 내구성까지 <strong>2026년 최신 기준</strong>으로
            항목별 비교하고 5년 총비용 시뮬레이션 결과를 확인하세요.
          </p>
        </section>

        {/* 1. 핵심 비교표 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              핵심 비교표
            </h2>
            <p className="text-gray-600 mb-4">
              디젤과 가솔린 차량의 주요 항목을 한눈에 비교합니다.
              중형 세단(쏘나타급) 기준, 연간 15,000km 주행 시 예상 수치입니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">비교 항목</th>
                    <th className="px-4 py-3 text-center font-semibold">디젤 (경유)</th>
                    <th className="px-4 py-3 text-center font-semibold">가솔린 (휘발유)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {coreComparison.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.diesel}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.gasoline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              ※ 2026년 기준 예상치이며, 실제 비용은 차종, 운전 습관, 유가 변동에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>

        {/* 2. 차종별 실연비 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              차종별 실연비 비교
            </h2>
            <p className="text-gray-600 mb-4">
              인기 차종의 디젤과 가솔린 모델 공인연비·실연비를 비교합니다.
              실연비는 사용자 평균 기준이며, 도심+고속 혼합 주행 조건입니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold" rowSpan={2}>차종</th>
                    <th className="px-3 py-2 text-center font-semibold border-b border-gray-200" colSpan={2}>디젤 (경유)</th>
                    <th className="px-3 py-2 text-center font-semibold border-b border-gray-200" colSpan={2}>가솔린 (휘발유)</th>
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
                      <td className="px-3 py-3 text-center text-gray-600">{row.dieselOfficial}</td>
                      <td className="px-3 py-3 text-center text-amber-600 font-semibold">{row.dieselReal}</td>
                      <td className="px-3 py-3 text-center text-gray-600">{row.gasolineOfficial}</td>
                      <td className="px-3 py-3 text-center text-gray-900 font-semibold">{row.gasolineReal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              ※ 실연비는 사용자 리뷰 및 자동차 커뮤니티 평균 데이터 기준이며, 운전 습관·주행 환경에 따라 달라집니다.
            </p>
          </div>
        </section>

        {/* 3. 5년 총비용 계산 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5년 총비용 비교 (쏘나타 기준)
            </h2>
            <p className="text-gray-600 mb-4">
              쏘나타 디젤 1.6과 쏘나타 가솔린 2.0을 기준으로 연 15,000km,
              5년간 75,000km 주행 시 총비용(구입비+유류비+정비비+세금+감가상각)을 비교합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* 디젤 */}
              <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
                <h3 className="text-lg font-bold text-amber-600 mb-4">쏘나타 디젤 1.6</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>차량 구입비</span>
                    <span className="font-semibold">{fiveYearCost.diesel.purchase}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>유류비 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.diesel.fuel}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>정비비 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.diesel.maintenance}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>자동차세 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.diesel.tax}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>감가상각 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.diesel.depreciation}</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                    <span className="font-bold text-gray-900">5년 총비용</span>
                    <span className="font-bold text-amber-600 text-lg">{fiveYearCost.diesel.total}</span>
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
                    <span>유류비 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.gasoline.fuel}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>정비비 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.gasoline.maintenance}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>자동차세 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.gasoline.tax}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>감가상각 (5년)</span>
                    <span className="font-semibold">{fiveYearCost.gasoline.depreciation}</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                    <span className="font-bold text-gray-900">5년 총비용</span>
                    <span className="font-bold text-gray-900 text-lg">{fiveYearCost.gasoline.total}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">비용 분석 요약</h3>
              <p className="text-gray-700 leading-relaxed">
                디젤은 유류비에서 5년간 약 <strong className="text-amber-700">335만 원을 절약</strong>하지만,
                차량 가격이 약 200만 원 높고, 정비비가 약 90만 원 더 소요되며,
                감가상각이 약 220만 원 더 큽니다.
                5년 총비용으로 보면 가솔린이 약 <strong className="text-amber-700">175만 원 유리</strong>합니다.
                다만 연간 주행거리가 2만 km 이상이면 디젤의 유류비 절감이 커져 총비용이 비슷해지며,
                3만 km 이상에서는 디젤이 유리해집니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 디젤 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              디젤 장단점
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">장점</h3>
            <div className="space-y-3 mb-8">
              {dieselPros.map((item, index) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
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
              {dieselCons.map((item, index) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
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
          </div>
        </section>

        {/* 5. 가솔린 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              가솔린 장단점
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">장점</h3>
            <div className="space-y-3 mb-8">
              {gasolinePros.map((item, index) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
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
                <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
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
          </div>
        </section>

        {/* 6. 추천 대상 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              추천 대상
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
                <h3 className="text-lg font-bold text-amber-600 mb-4">디젤 추천</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                    <span><strong>장거리 출퇴근</strong> (편도 30km+) - 디젤의 높은 연비와 저렴한 유가로 유류비 절감 효과가 극대화됩니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                    <span><strong>고속도로 주행 비중이 높은 분</strong> - 디젤은 고속 정속 주행에서 연비 효율이 가장 뛰어납니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                    <span><strong>SUV·대형차 선호</strong> - 디젤의 높은 토크가 SUV·대형차의 무게를 효율적으로 감당합니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                    <span><strong>연간 주행거리 2만 km 이상</strong> - 주행거리가 많을수록 유류비 절감 효과가 커집니다</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-700 mb-4">가솔린 추천</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold mt-0.5">&#10003;</span>
                    <span><strong>시내 주행 위주</strong> - 단거리 시내 주행이 많으면 DPF 걱정 없는 가솔린이 편리합니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold mt-0.5">&#10003;</span>
                    <span><strong>단거리 출퇴근</strong> (편도 10km 이하) - 짧은 주행에서는 디젤의 유류비 이점이 크지 않습니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold mt-0.5">&#10003;</span>
                    <span><strong>정숙성 중시</strong> - 소음과 진동이 적은 가솔린이 쾌적한 승차감을 제공합니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold mt-0.5">&#10003;</span>
                    <span><strong>낮은 정비 부담 선호</strong> - DPF·요소수·인젝터 등 디젤 전용 정비 부담이 없습니다</span>
                  </li>
                </ul>
              </div>
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
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
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
              유류비 계산기로 디젤·가솔린 연료비를 직접 비교하고, 하이브리드도 함께 검토하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/fuel-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                유류비 계산하기
              </Link>
              <Link
                href="/guide/hybrid-vs-gasoline"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                하이브리드 vs 가솔린 비교
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
