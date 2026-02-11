import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'SUV vs 세단 비교 - 2026년 연비·유지비·안전성·감가상각 총비교',
  description:
    'SUV와 세단의 연비, 유지비, 안전성, 공간, 승차감, 감가상각, 5년 총비용을 비교합니다. 투싼 vs 쏘나타, 쏘렌토 vs 그랜저, 셀토스 vs 아반떼 실연비 비교와 상황별 추천까지 2026년 최신 기준으로 총정리했습니다.',
  keywords: [
    'SUV 세단 비교',
    'SUV vs 세단',
    'SUV 연비',
    'SUV 유지비',
    'SUV 장단점',
    '세단 장단점',
    'SUV 감가상각',
    '투싼 쏘나타 비교',
    '쏘렌토 그랜저 비교',
    '셀토스 아반떼 비교',
  ],
  alternates: { canonical: `${BASE_URL}/guide/suv-vs-sedan` },
  openGraph: {
    title: 'SUV vs 세단 비교 - 2026년 연비·유지비·안전성·감가상각 총비교',
    description:
      'SUV와 세단의 연비, 유지비, 안전성, 실용성, 감가상각을 비교합니다.',
    url: `${BASE_URL}/guide/suv-vs-sedan`,
    type: 'website',
  },
};

const coreComparison = [
  { item: '차량 가격 (동급)', suv: '약 200~500만 원 높음', sedan: '기본 가격' },
  { item: '연비 (가솔린 기준)', suv: '10~14km/L', sedan: '12~16km/L' },
  { item: '유류비 (연간)', suv: '약 180~260만 원', sedan: '약 140~210만 원' },
  { item: '보험료 (연간)', suv: '약 5~15% 높음', sedan: '기준 금액' },
  { item: '안전성 (충돌 시)', suv: '높은 차체 → 유리', sedan: '낮은 무게중심 → 안정적' },
  { item: '실내 공간', suv: '넓은 적재·3열 가능', sedan: '승객 중심 설계' },
  { item: '승차감', suv: '높은 시야, 약간 딱딱', sedan: '낮고 안정적, 부드러움' },
  { item: '감가상각 (3년)', suv: '약 32~40%', sedan: '약 38~48%' },
];

const fuelEfficiencyComparison = [
  {
    suv: '셀토스 1.6 가솔린',
    suvReal: '11.2km/L',
    sedan: '아반떼 1.6 가솔린',
    sedanReal: '13.5km/L',
    category: '소형',
  },
  {
    suv: '투싼 2.0 가솔린',
    suvReal: '10.5km/L',
    sedan: '쏘나타 2.0 가솔린',
    sedanReal: '11.8km/L',
    category: '중형',
  },
  {
    suv: '쏘렌토 2.5 가솔린',
    suvReal: '8.9km/L',
    sedan: '그랜저 2.5 가솔린',
    sedanReal: '9.6km/L',
    category: '준대형',
  },
  {
    suv: '팰리세이드 3.8 가솔린',
    suvReal: '7.8km/L',
    sedan: 'K8 3.5 가솔린',
    sedanReal: '9.2km/L',
    category: '대형',
  },
  {
    suv: '투싼 HEV',
    suvReal: '14.9km/L',
    sedan: '쏘나타 HEV',
    sedanReal: '17.5km/L',
    category: '중형 HEV',
  },
];

const fiveYearCost = {
  suv: {
    purchase: '3,600만 원',
    registrationTax: '252만 원',
    insurance: '580만 원',
    fuel: '1,180만 원',
    maintenance: '320만 원',
    tax: '175만 원',
    depreciation: '1,330만 원 (37%)',
    total: '약 6,107만 원',
  },
  sedan: {
    purchase: '3,200만 원',
    registrationTax: '224만 원',
    insurance: '510만 원',
    fuel: '920만 원',
    maintenance: '270만 원',
    tax: '165만 원',
    depreciation: '1,410만 원 (44%)',
    total: '약 5,289만 원',
  },
};

const situationRecommendations = [
  {
    situation: '도심 출퇴근',
    recommendation: '세단',
    reason: '좁은 도로와 지하주차장에서 세단의 작은 차체와 좋은 연비가 유리합니다. 주차 스트레스가 적고 유류비도 절약됩니다.',
  },
  {
    situation: '가족 (영유아)',
    recommendation: 'SUV',
    reason: '카시트 장착 시 넓은 뒷좌석이 유리하고, 유모차·짐을 트렁크에 여유롭게 실을 수 있습니다. 승하차 시 높은 시트가 편리합니다.',
  },
  {
    situation: '캠핑·레저',
    recommendation: 'SUV',
    reason: '캠핑 장비 적재, 비포장 도로 주행, 루프박스 장착 등 레저 활동에 SUV가 압도적으로 유리합니다.',
  },
  {
    situation: '장거리 고속도로',
    recommendation: '세단',
    reason: '낮은 무게중심과 공기저항으로 고속 안정성이 뛰어나고, 연비 효율도 높아 장거리 피로감이 적습니다.',
  },
  {
    situation: '도심 주차',
    recommendation: '세단',
    reason: '세단은 전고가 낮아 기계식 주차장 이용이 가능하고, 전폭도 작아 좁은 주차 공간에서 유리합니다.',
  },
  {
    situation: '눈길·비포장',
    recommendation: 'SUV',
    reason: 'AWD(사륜구동)와 높은 지상고로 눈길, 비포장 도로, 경사로에서 안정적인 주행이 가능합니다.',
  },
  {
    situation: '장거리 통근 (편도 30km+)',
    recommendation: '세단',
    reason: '연비가 좋아 연간 유류비를 크게 절약할 수 있으며, 고속주행 시 안정감과 정숙성이 뛰어납니다.',
  },
];

const suvPros = [
  {
    title: '넓은 실내 공간과 적재력',
    description:
      'SUV는 세단 대비 트렁크 용량이 30~80% 넓고, 3열 시트 옵션이 있는 모델도 많습니다. 캠핑 장비, 유모차, 대형 짐을 여유롭게 실을 수 있어 가족 단위 사용에 유리합니다.',
  },
  {
    title: '높은 시야 확보',
    description:
      '세단보다 약 15~20cm 높은 운전석 시점으로 전방 시야가 넓어 도로 상황을 미리 파악할 수 있습니다. 초보 운전자도 안정감을 느끼기 쉽습니다.',
  },
  {
    title: '충돌 안전성 우위',
    description:
      '높은 차체와 무거운 중량은 정면·측면 충돌 시 탑승자 보호에 유리합니다. 특히 세단과의 충돌에서 SUV 탑승자의 부상 위험이 통계적으로 낮습니다.',
  },
  {
    title: '다양한 노면 대응',
    description:
      'AWD 옵션과 높은 지상고(약 170~210mm)로 비포장 도로, 눈길, 침수 도로 등 다양한 노면 상황에 대응할 수 있습니다.',
  },
  {
    title: '감가상각이 적음',
    description:
      'SUV는 중고차 시장에서 수요가 꾸준히 높아 세단 대비 감가상각이 약 5~8%p 적습니다. 3년 후 되팔 때 더 높은 가격을 받을 수 있습니다.',
  },
];

const suvCons = [
  {
    title: '높은 유류비',
    description:
      '무거운 차체와 큰 공기저항으로 동급 세단 대비 연비가 15~25% 낮습니다. 연간 15,000km 주행 시 약 40~60만 원의 추가 유류비가 발생합니다.',
  },
  {
    title: '주차 불편',
    description:
      '전고 1,650~1,900mm로 기계식 주차장(제한 1,550~1,600mm) 이용이 불가능한 경우가 많습니다. 전폭도 넓어 좁은 골목과 주차장에서 불리합니다.',
  },
  {
    title: '높은 구매·유지 비용',
    description:
      '동급 세단 대비 차량 가격이 200~500만 원 높고, 타이어·브레이크 패드 등 소모품 비용도 10~20% 비쌉니다. 보험료도 차량 가액 기준으로 높게 책정됩니다.',
  },
  {
    title: '승차감 차이',
    description:
      '높은 무게중심으로 급커브 시 차체 쏠림(롤링)이 세단보다 크고, 서스펜션이 상대적으로 딱딱합니다. 고속도로 주행 시 풍절음도 세단보다 큽니다.',
  },
];

const sedanPros = [
  {
    title: '뛰어난 연비',
    description:
      '낮은 차고와 유선형 디자인으로 공기저항이 적어 동급 SUV 대비 15~25% 높은 연비를 실현합니다. 연간 유류비로 40~60만 원을 절약할 수 있습니다.',
  },
  {
    title: '안정적인 주행 성능',
    description:
      '낮은 무게중심으로 고속 주행과 코너링 시 안정감이 뛰어납니다. 급차선 변경이나 급커브에서 차체 쏠림이 적어 고속도로 장거리 운전 시 피로감이 줄어듭니다.',
  },
  {
    title: '편리한 주차',
    description:
      '전고 1,400~1,500mm로 기계식 주차장을 포함한 모든 주차 시설 이용이 가능합니다. 전폭도 SUV보다 좁아 좁은 공간에서 주차가 용이합니다.',
  },
  {
    title: '정숙하고 부드러운 승차감',
    description:
      '낮은 차체와 안정적인 서스펜션으로 노면 진동이 잘 흡수되어 장거리 주행에서도 쾌적합니다. 풍절음도 SUV보다 적습니다.',
  },
  {
    title: '저렴한 구매·유지 비용',
    description:
      '동급 SUV 대비 차량 가격이 200~500만 원 저렴하고, 타이어·브레이크 등 소모품과 보험료도 낮아 전체적인 유지비 부담이 적습니다.',
  },
];

const sedanCons = [
  {
    title: '제한적인 적재 공간',
    description:
      '트렁크 용량이 SUV 대비 30~50% 작아 캠핑 장비나 대형 짐을 싣기 어렵습니다. 뒷좌석을 접어야 긴 물건을 실을 수 있는 경우가 많습니다.',
  },
  {
    title: '낮은 시야',
    description:
      '운전석이 낮아 전방 시야가 SUV보다 제한적입니다. 대형 트럭이나 SUV 뒤에서 전방 상황을 파악하기 어려울 수 있습니다.',
  },
  {
    title: '노면 대응력 부족',
    description:
      '지상고가 약 130~150mm로 낮아 비포장 도로, 과속방지턱, 침수 구간에서 하부 손상 위험이 있습니다. AWD 옵션도 SUV보다 제한적입니다.',
  },
  {
    title: '빠른 감가상각',
    description:
      '중고차 시장에서 SUV 선호도가 높아지면서 세단의 감가상각이 상대적으로 빠릅니다. 3년 기준 SUV보다 약 5~8%p 더 감가됩니다.',
  },
];

const hybridComparison = [
  {
    item: '대표 모델',
    hybridSuv: '투싼 HEV, 쏘렌토 HEV',
    hybridSedan: '쏘나타 HEV, 그랜저 HEV',
  },
  {
    item: '연비 (실연비)',
    hybridSuv: '13~15km/L',
    hybridSedan: '15~18km/L',
  },
  {
    item: '차량 가격',
    hybridSuv: '3,500~4,800만 원',
    hybridSedan: '3,100~4,500만 원',
  },
  {
    item: '취등록세 감면',
    hybridSuv: '최대 40만 원',
    hybridSedan: '최대 40만 원',
  },
  {
    item: '연간 유류비',
    hybridSuv: '약 130~160만 원',
    hybridSedan: '약 100~130만 원',
  },
  {
    item: '배터리 보증',
    hybridSuv: '10년/20만 km',
    hybridSedan: '10년/20만 km',
  },
  {
    item: '트렁크 공간',
    hybridSuv: '약간 감소 (배터리)',
    hybridSedan: '약간 감소 (배터리)',
  },
  {
    item: '도심 연비 이점',
    hybridSuv: '가솔린 SUV 대비 40~50% 향상',
    hybridSedan: '가솔린 세단 대비 30~45% 향상',
  },
];

const faqItems = [
  {
    q: 'SUV가 세단보다 안전한가요?',
    a: 'SUV는 높은 차체와 무거운 중량 덕분에 정면·측면 충돌 시 탑승자 보호에 유리합니다. 미국 IIHS 데이터에 따르면 SUV 탑승자의 사고 시 사망률이 세단 대비 약 50% 낮습니다. 다만 SUV는 무게중심이 높아 급커브에서 전복 위험이 상대적으로 크고, 보행자 사고 시 피해가 더 클 수 있습니다. 최신 차량은 전자 자세제어(ESC) 등으로 전복 위험이 크게 줄었습니다.',
  },
  {
    q: 'SUV 주차가 정말 불편한가요?',
    a: '중형 SUV(투싼, 쏘렌토) 기준 전고 약 1,650~1,700mm, 전폭 약 1,865mm입니다. 기계식 주차장 높이 제한(보통 1,550~1,600mm)을 초과하여 이용이 불가능한 경우가 많고, 아파트 지하주차장 기둥 사이 통과도 주의가 필요합니다. 도심 거주 시 주차 환경을 반드시 사전에 확인하세요.',
  },
  {
    q: 'SUV 연비가 얼마나 안 좋은가요?',
    a: '동급 가솔린 기준 SUV는 세단 대비 약 15~25% 낮은 연비를 보입니다. 예를 들어 투싼 가솔린 실연비 약 10.5km/L, 쏘나타 가솔린 실연비 약 11.8km/L로 약 1.3km/L 차이입니다. 연간 15,000km 주행 시 약 30~50만 원의 유류비 차이가 발생합니다. 하이브리드 SUV를 선택하면 연비 격차를 크게 줄일 수 있습니다.',
  },
  {
    q: 'SUV 보험료가 세단보다 비싼가요?',
    a: '네, SUV는 차량 가액이 높고 수리 비용도 높아 보험료가 세단 대비 약 5~15% 비쌉니다. 투싼 기준 연간 보험료 약 95~115만 원, 쏘나타 기준 약 85~100만 원 수준입니다. 다만 운전자 나이, 사고 이력, 보험 특약에 따라 차이가 크므로 직접 비교 견적을 받아보시는 것이 정확합니다.',
  },
  {
    q: '첫차로 SUV와 세단 중 어떤 게 좋나요?',
    a: '초보 운전자에게는 양쪽 모두 장단점이 있습니다. SUV는 높은 시야로 도로 상황 파악이 쉽지만, 차체가 커서 주차와 좁은 도로 통과가 어렵습니다. 세단은 차폭이 좁아 주차가 쉽고 차량 감각 익히기가 수월하지만, 시야가 낮습니다. 도심 위주라면 세단(아반떼, K3), 교외·가족 용도라면 소형 SUV(셀토스, 코나)를 추천합니다.',
  },
  {
    q: 'SUV 감가상각이 세단보다 정말 적은가요?',
    a: '네, 2026년 현재 SUV의 중고차 수요가 높아 세단 대비 감가상각이 약 5~8%p 적습니다. 투싼 3년 잔존가율 약 63%, 쏘나타 3년 잔존가율 약 57% 수준입니다. 다만 대형 SUV(팰리세이드 등)는 유류비 부담으로 감가가 빠른 편이고, 하이브리드 SUV는 잔존가율이 더 높습니다. 인기 모델일수록 감가가 적습니다.',
  },
  {
    q: '하이브리드 SUV와 가솔린 세단 중 어떤 게 경제적인가요?',
    a: '5년 총비용 기준으로 비교하면, 하이브리드 SUV(투싼 HEV 약 5,600만 원)와 가솔린 세단(쏘나타 2.0 약 5,290만 원)은 약 300만 원 차이입니다. 하이브리드 SUV는 연비가 좋아 유류비가 적지만 구매 가격이 높고, 가솔린 세단은 초기 비용이 낮지만 감가상각이 빠릅니다. 공간과 활용도까지 고려하면 하이브리드 SUV도 합리적인 선택입니다.',
  },
];

export default function SuvVsSedanPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'SUV vs 세단 비교 - 2026년 연비·유지비·안전성·감가상각 총비교',
          description:
            'SUV와 세단의 연비, 유지비, 안전성, 실용성, 감가상각을 비교합니다.',
          url: `${BASE_URL}/guide/suv-vs-sedan`,
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
              name: '가이드',
              item: `${BASE_URL}/guide`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'SUV vs 세단 비교',
              item: `${BASE_URL}/guide/suv-vs-sedan`,
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
            <li>
              <Link href="/" className="hover:text-amber-600">가이드</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">SUV vs 세단 비교</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SUV vs 세단 비교
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            SUV와 세단, 어떤 차를 사야 할까요? 차량 가격, 연비, 유지비, 안전성, 공간,
            승차감, 감가상각까지 <strong>2026년 최신 기준</strong>으로 항목별 비교하고
            5년 총비용 시뮬레이션과 상황별 추천 결과를 확인하세요.
          </p>
        </section>

        {/* 1. 핵심 비교표 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            SUV vs 세단 핵심 비교표
          </h2>
          <p className="text-gray-600 mb-4">
            SUV와 세단의 주요 비용 및 성능 항목을 한눈에 비교합니다.
            중형급(투싼 vs 쏘나타) 기준, 연간 15,000km 주행 시 예상 수치입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">비교 항목</th>
                    <th className="px-4 py-3 text-center font-semibold">SUV</th>
                    <th className="px-4 py-3 text-center font-semibold">세단</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {coreComparison.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.suv}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.sedan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 2026년 기준, 중형급 가솔린 모델 기준 예상치이며 실제 비용은 차종, 운전 습관, 주행 환경에 따라 달라질 수 있습니다.
          </p>
        </section>

        {/* 2. 차종별 연비 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            차종별 연비 비교 (SUV vs 세단)
          </h2>
          <p className="text-gray-600 mb-4">
            동급 SUV와 세단 모델의 실연비를 직접 비교합니다.
            실연비는 사용자 평균 기준이며, 도심+고속 혼합 주행 조건입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold">급</th>
                    <th className="px-3 py-3 text-left font-semibold">SUV 모델</th>
                    <th className="px-3 py-3 text-center font-semibold">실연비</th>
                    <th className="px-3 py-3 text-left font-semibold">세단 모델</th>
                    <th className="px-3 py-3 text-center font-semibold">실연비</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {fuelEfficiencyComparison.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-3 py-3 font-medium text-gray-900">{row.category}</td>
                      <td className="px-3 py-3 text-gray-700">{row.suv}</td>
                      <td className="px-3 py-3 text-center text-gray-900 font-semibold">{row.suvReal}</td>
                      <td className="px-3 py-3 text-gray-700">{row.sedan}</td>
                      <td className="px-3 py-3 text-center text-amber-600 font-semibold">{row.sedanReal}</td>
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

        {/* 3. 5년 총비용 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5년 총비용 비교 (투싼 vs 쏘나타)
          </h2>
          <p className="text-gray-600 mb-4">
            중형 SUV(투싼 2.0 가솔린)와 중형 세단(쏘나타 2.0 가솔린)을 기준으로
            연 15,000km, 5년간 75,000km 주행 시 총비용을 비교합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* SUV */}
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
              <h3 className="text-lg font-bold text-amber-600 mb-4">투싼 2.0 가솔린</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>차량 구입비</span>
                  <span className="font-semibold">{fiveYearCost.suv.purchase}</span>
                </li>
                <li className="flex justify-between">
                  <span>취등록세</span>
                  <span className="font-semibold">{fiveYearCost.suv.registrationTax}</span>
                </li>
                <li className="flex justify-between">
                  <span>보험료 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.suv.insurance}</span>
                </li>
                <li className="flex justify-between">
                  <span>유류비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.suv.fuel}</span>
                </li>
                <li className="flex justify-between">
                  <span>정비비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.suv.maintenance}</span>
                </li>
                <li className="flex justify-between">
                  <span>자동차세 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.suv.tax}</span>
                </li>
                <li className="flex justify-between">
                  <span>감가상각 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.suv.depreciation}</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold text-gray-900">5년 총비용</span>
                  <span className="font-bold text-amber-600 text-lg">{fiveYearCost.suv.total}</span>
                </li>
              </ul>
            </div>
            {/* 세단 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-700 mb-4">쏘나타 2.0 가솔린</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>차량 구입비</span>
                  <span className="font-semibold">{fiveYearCost.sedan.purchase}</span>
                </li>
                <li className="flex justify-between">
                  <span>취등록세</span>
                  <span className="font-semibold">{fiveYearCost.sedan.registrationTax}</span>
                </li>
                <li className="flex justify-between">
                  <span>보험료 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.sedan.insurance}</span>
                </li>
                <li className="flex justify-between">
                  <span>유류비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.sedan.fuel}</span>
                </li>
                <li className="flex justify-between">
                  <span>정비비 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.sedan.maintenance}</span>
                </li>
                <li className="flex justify-between">
                  <span>자동차세 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.sedan.tax}</span>
                </li>
                <li className="flex justify-between">
                  <span>감가상각 (5년)</span>
                  <span className="font-semibold">{fiveYearCost.sedan.depreciation}</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold text-gray-900">5년 총비용</span>
                  <span className="font-bold text-gray-900 text-lg">{fiveYearCost.sedan.total}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">비용 분석 요약</h3>
            <p className="text-gray-700 leading-relaxed">
              5년 총비용 기준 세단이 약 <strong className="text-amber-700">818만 원 유리</strong>합니다.
              SUV는 구매가(+400만 원), 유류비(+260만 원), 보험료(+70만 원), 정비비(+50만 원)에서 비용이 더 높지만,
              감가상각에서 약 <strong className="text-amber-700">80만 원 유리</strong>합니다.
              다만 SUV의 넓은 공간, 높은 시야, 다양한 활용도 등 비용으로 환산하기 어려운 가치도 함께 고려해야 합니다.
            </p>
          </div>
        </section>

        {/* 4. 상황별 추천 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            상황별 추천
          </h2>
          <p className="text-gray-600 mb-4">
            라이프스타일과 주행 환경에 따라 SUV와 세단의 적합도가 달라집니다.
            나의 상황에 맞는 차종을 확인해보세요.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">상황</th>
                    <th className="px-4 py-3 text-center font-semibold">추천</th>
                    <th className="px-4 py-3 text-left font-semibold">이유</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {situationRecommendations.map((row) => (
                    <tr key={row.situation} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.situation}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          row.recommendation === 'SUV'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {row.recommendation}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. SUV 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            SUV 장단점
          </h2>

          <h3 className="text-xl font-bold text-gray-900 mb-4">장점</h3>
          <div className="space-y-3 mb-8">
            {suvPros.map((item, index) => (
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
            {suvCons.map((item, index) => (
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

        {/* 세단 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            세단 장단점
          </h2>

          <h3 className="text-xl font-bold text-gray-900 mb-4">장점</h3>
          <div className="space-y-3 mb-8">
            {sedanPros.map((item, index) => (
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
            {sedanCons.map((item, index) => (
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

        {/* 6. 하이브리드 SUV vs 하이브리드 세단 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            하이브리드 SUV vs 하이브리드 세단 비교
          </h2>
          <p className="text-gray-600 mb-4">
            연비를 중시한다면 하이브리드 모델도 좋은 선택입니다.
            하이브리드 SUV와 하이브리드 세단의 주요 항목을 비교합니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">비교 항목</th>
                    <th className="px-4 py-3 text-center font-semibold">하이브리드 SUV</th>
                    <th className="px-4 py-3 text-center font-semibold">하이브리드 세단</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {hybridComparison.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.hybridSuv}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.hybridSedan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mt-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">하이브리드 선택 포인트</h3>
            <p className="text-gray-700 leading-relaxed">
              하이브리드 SUV는 가솔린 SUV의 높은 유류비 단점을 크게 보완합니다.
              투싼 HEV는 가솔린 투싼 대비 연비가 약 <strong className="text-amber-700">40% 이상 향상</strong>되어
              연간 유류비를 약 80만 원 절약할 수 있습니다.
              공간과 활용도는 SUV, 연비는 하이브리드로 두 마리 토끼를 잡을 수 있는 선택입니다.
              다만 가솔린 세단 대비 구매 가격이 높으므로 <strong className="text-amber-700">연간 주행거리 1.5만 km 이상</strong>일 때 경제적으로 유리합니다.
            </p>
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
              내 차의 유지비를 직접 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              유류비 계산기와 자동차세 계산기로 SUV·세단의 실제 비용을 비교하세요
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
