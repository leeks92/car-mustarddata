import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 에어컨 관리·수리 비용 - 냉매 충전, 고장 수리비 총정리',
  description:
    '자동차 에어컨 냉매 충전 비용, 고장 증상별 수리비, 캐빈 필터 교체 비용과 주기, 에어컨 효율 높이는 방법을 총정리했습니다. R-134a·R-1234yf 냉매 가격, 컴프레서·콘덴서·에바포레이터 수리비, 국산차·수입차 비교까지 안내합니다.',
  keywords: [
    '자동차 에어컨 수리 비용',
    '에어컨 냉매 충전 비용',
    '자동차 에어컨 가스 충전',
    '에어컨 컴프레서 수리비',
    '캐빈 필터 교체 비용',
    '에어컨 냄새 제거',
    '자동차 에어컨 관리',
    '에어컨 냉매 R-1234yf',
    '에어컨 에바포레이터 세척',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-air-conditioner` },
  openGraph: {
    title: '자동차 에어컨 관리·수리 비용 - 냉매 충전, 고장 수리비 총정리',
    description: '자동차 에어컨 냉매 충전, 고장 수리비, 캐빈 필터 교체 비용과 효율적인 관리 방법을 안내합니다.',
    url: `${BASE_URL}/guide/car-air-conditioner`,
    type: 'website',
  },
};

// 에어컨 시스템 주요 구성 부품
const acComponents = [
  { part: '컴프레서', role: '냉매를 압축하여 고온·고압 기체로 변환', location: '엔진룸 (벨트 연결)', note: '에어컨의 심장, 고장 시 냉방 불가' },
  { part: '콘덴서', role: '고온 냉매를 외부 공기로 냉각·액화', location: '라디에이터 앞쪽', note: '전면 충돌 시 파손 위험, 이물질 끼임 주의' },
  { part: '팽창밸브', role: '냉매 압력을 낮춰 저온·저압 상태로 변환', location: '에바포레이터 앞', note: '막힘 발생 시 냉방 성능 저하' },
  { part: '에바포레이터', role: '저온 냉매로 실내 공기를 냉각', location: '대시보드 내부', note: '곰팡이·세균 번식 가능, 냄새 원인' },
  { part: '블로워 모터', role: '냉각된 공기를 실내로 송풍', location: '조수석 글로브박스 뒤', note: '풍량 약해지면 교체 필요' },
  { part: '냉매 (가스)', role: '열 교환 매체로 순환하며 냉방 수행', location: '에어컨 배관 전체', note: 'R-134a 또는 R-1234yf 사용' },
];

// 냉매 충전 비용
const refrigerantCosts = [
  { item: 'R-134a 냉매 보충', cost: '5~8만 원', cycle: '2~3년 (누설 없을 시)', note: '기존 차량 대부분 사용, 가격 저렴' },
  { item: 'R-134a 전량 교체', cost: '8~15만 원', cycle: '5~7년 또는 냉방 저하 시', note: '진공 작업 후 규정량 재충전' },
  { item: 'R-1234yf 냉매 보충', cost: '15~25만 원', cycle: '2~3년 (누설 없을 시)', note: '2017년 이후 신차, 친환경 냉매' },
  { item: 'R-1234yf 전량 교체', cost: '25~40만 원', cycle: '5~7년 또는 냉방 저하 시', note: '냉매 단가가 R-134a의 3~4배' },
  { item: '냉매 누설 검사', cost: '3~5만 원', cycle: '냉매 부족 시', note: '형광 검사 또는 전자식 검출기 사용' },
  { item: '에어컨 배관 세척', cost: '5~10만 원', cycle: '냉매 교체 시 권장', note: '오일·이물질 제거로 냉방 효율 개선' },
];

// 고장 증상별 수리 비용
const repairCosts = [
  { symptom: '냉매 부족 (냉방 약함)', cause: '자연 감소 또는 미세 누설', repairMethod: '냉매 보충·누설 수리', costDomestic: '5~15만 원', costImported: '15~30만 원', urgency: '보통' },
  { symptom: '컴프레서 고장', cause: '마모, 윤활유 부족, 전기 문제', repairMethod: '컴프레서 교체', costDomestic: '50~90만 원', costImported: '80~180만 원', urgency: '높음' },
  { symptom: '콘덴서 누수·파손', cause: '전면 충돌, 부식, 돌 튐', repairMethod: '콘덴서 교체', costDomestic: '30~60만 원', costImported: '50~120만 원', urgency: '높음' },
  { symptom: '블로워 모터 이상', cause: '모터 마모, 저항기 고장', repairMethod: '블로워 모터 교체', costDomestic: '15~30만 원', costImported: '25~60만 원', urgency: '보통' },
  { symptom: '에바포레이터 누수', cause: '부식, 장기 사용 열화', repairMethod: '에바포레이터 교체', costDomestic: '40~80만 원', costImported: '70~150만 원', urgency: '높음' },
  { symptom: '팽창밸브 막힘', cause: '이물질 축적, 동결', repairMethod: '팽창밸브 교체', costDomestic: '15~30만 원', costImported: '25~50만 원', urgency: '보통' },
  { symptom: '에어컨 악취', cause: '에바포레이터 곰팡이·세균', repairMethod: '에바포레이터 세척·살균', costDomestic: '5~15만 원', costImported: '8~20만 원', urgency: '낮음' },
  { symptom: '에어컨 소음 (끼익·딸깍)', cause: '컴프레서 클러치, 벨트 마모', repairMethod: '클러치·벨트 교체', costDomestic: '10~25만 원', costImported: '20~50만 원', urgency: '보통' },
];

// 캐빈 필터 교체 비용
const cabinFilterCosts = [
  { brand: '현대·기아', filterType: '일반 캐빈 필터', cost: '1~2만 원', laborCost: '무료~1만 원', cycle: '15,000km / 1년', note: '순정 부품 기준, 셀프 교체 용이' },
  { brand: '현대·기아', filterType: '활성탄 필터', cost: '2~4만 원', laborCost: '무료~1만 원', cycle: '10,000km / 6개월', note: '매연·유해가스 차단 효과 우수' },
  { brand: 'KG모빌리티', filterType: '일반/활성탄', cost: '1.5~3만 원', laborCost: '무료~1만 원', cycle: '15,000km / 1년', note: '모델별 규격 확인 필요' },
  { brand: '벤츠', filterType: '순정 활성탄 필터', cost: '5~10만 원', laborCost: '2~5만 원', cycle: '15,000km / 1년', note: '서비스센터 기준, 호환 필터 2~4만 원' },
  { brand: 'BMW', filterType: '순정 마이크로 필터', cost: '5~9만 원', laborCost: '2~4만 원', cycle: '20,000km / 1년', note: '교체 난이도 높아 정비소 추천' },
  { brand: '아우디', filterType: '순정 활성탄 필터', cost: '5~8만 원', laborCost: '2~4만 원', cycle: '15,000km / 1년', note: 'VW 그룹 공용 부품 활용 가능' },
  { brand: '볼보', filterType: '순정 HEPA 필터', cost: '6~12만 원', laborCost: '2~5만 원', cycle: '15,000km / 1년', note: '초미세먼지(PM 2.5) 차단, 고급 사양' },
  { brand: '테슬라', filterType: 'HEPA 필터', cost: '8~15만 원', laborCost: '3~5만 원', cycle: '2년', note: '바이오웨폰 디펜스 모드 필터 (Model S/X)' },
];

// 에어컨 효율 높이는 방법 8가지
const efficiencyTips = [
  {
    title: '외기 모드로 시작 후 내기 모드 전환',
    desc: '차량 탑승 직후 창문을 열고 외기 모드로 뜨거운 공기를 빼낸 뒤(1~2분), 내기 순환 모드로 전환하면 냉방 속도가 30% 이상 빨라집니다.',
  },
  {
    title: '적정 온도 설정 (22~24도)',
    desc: '에어컨 온도를 최저(Lo)로 설정하면 컴프레서 과부하로 연비가 15~20% 악화됩니다. 22~24도에 풍량을 조절하는 것이 연비와 냉방 효율의 최적 균형점입니다.',
  },
  {
    title: '캐빈 필터 정기 교체',
    desc: '막힌 캐빈 필터는 풍량을 30~50% 감소시킵니다. 미세먼지가 심한 한국 환경에서는 6개월~1년마다 교체하고, 활성탄 필터를 사용하면 실내 공기질도 개선됩니다.',
  },
  {
    title: '콘덴서 청소',
    desc: '콘덴서에 먼지·벌레·이물질이 끼면 방열 효율이 떨어져 냉방 성능이 저하됩니다. 봄철 고압 에어건이나 물로 콘덴서 표면을 청소해주세요. 정비소에서 1~3만 원에 세척 가능합니다.',
  },
  {
    title: '주차 시 햇빛 차단',
    desc: '여름철 직사광선 아래 주차하면 실내 온도가 70~80도까지 상승합니다. 앞유리 햇빛 가리개(1~3만 원), 윈도우 틴팅(15~40만 원), 그늘 주차를 활용하면 에어컨 부하를 크게 줄일 수 있습니다.',
  },
  {
    title: '에바포레이터 살균·세척',
    desc: '에바포레이터에 곰팡이와 세균이 번식하면 악취와 함께 냉방 효율이 저하됩니다. 시즌 시작 전(5월경) 에바포레이터 세척(5~15만 원)을 받으면 냉방 성능 회복과 실내 공기질 개선 효과가 있습니다.',
  },
  {
    title: '냉매 적정량 유지',
    desc: '냉매가 10~20%만 부족해도 냉방 성능이 눈에 띄게 저하됩니다. 2~3년마다 냉매량을 점검하고, 냉방이 약해졌다면 냉매 보충(R-134a 5~8만 원, R-1234yf 15~25만 원)을 받으세요.',
  },
  {
    title: '도착 전 에어컨 끄기',
    desc: '목적지 2~3분 전에 에어컨(A/C)을 끄고 송풍만 작동시키면, 에바포레이터의 수분이 증발하여 곰팡이 번식을 억제합니다. 에어컨 악취 예방에 가장 효과적인 습관입니다.',
  },
];

// 계절별 관리법
const seasonalCare = {
  summer: [
    { item: '에어컨 가동 전 외기 모드 환기', detail: '탑승 후 1~2분간 창문 열고 외기 모드로 열기 배출 후 내기 모드 전환' },
    { item: '냉매량 점검', detail: '냉방이 약하면 냉매 보충 필요. 정비소에서 압력 게이지로 확인 (3~5만 원)' },
    { item: '캐빈 필터 상태 확인', detail: '풍량이 약하면 캐빈 필터 교체. 활성탄 필터 추천 (2~4만 원)' },
    { item: '콘덴서 청소', detail: '전면 그릴 쪽 콘덴서에 이물질 제거. 방열 효율 개선으로 냉방 성능 향상' },
    { item: '에바포레이터 세척', detail: '에어컨 악취 시 에바포레이터 세척·살균 (5~15만 원). 시즌 초 1회 추천' },
    { item: '컴프레서 벨트 점검', detail: '끼익 소리 발생 시 벨트 장력·마모 확인. 벨트 교체 3~8만 원' },
  ],
  winter: [
    { item: '월 1회 에어컨 가동', detail: '겨울에도 월 1~2회, 10분씩 에어컨(A/C)을 가동하여 컴프레서 윤활 유지. 장기 미사용 시 씰 경화·냉매 누설 위험' },
    { item: '성에 제거에 에어컨 활용', detail: '앞유리 성에 제거 시 A/C 버튼을 켜면 제습 효과로 빠르게 성에·습기 제거 가능' },
    { item: '캐빈 필터 교체', detail: '가을~겨울 사이 캐빈 필터를 교체하면 히터 사용 시 실내 공기질 유지에 도움' },
    { item: '냉각수 점검', detail: '에어컨 시스템과 연결된 냉각 계통도 함께 점검. 부동액 농도 확인 (50:50 비율 권장)' },
    { item: '봄 시즌 전 사전 점검', detail: '3~4월에 에어컨 전체 점검 받으면 여름 성수기 대기 없이 정비 가능. 냉매·필터·벨트 한번에 확인' },
  ],
};

// FAQ
const faqItems = [
  {
    q: '자동차 에어컨 냉매 충전 비용은 얼마인가요?',
    a: 'R-134a 냉매 보충은 5~8만 원, 전량 교체는 8~15만 원입니다. R-1234yf(2017년 이후 신차)는 보충 15~25만 원, 전량 교체 25~40만 원으로 약 3~4배 비쌉니다. 수입차 서비스센터는 공임비가 추가되어 20~50% 더 비쌀 수 있습니다.',
  },
  {
    q: '에어컨에서 냄새가 나는 원인과 해결 방법은?',
    a: '에바포레이터에 곰팡이·세균이 번식하여 발생하는 경우가 대부분입니다. 에바포레이터 세척·살균(5~15만 원)으로 해결할 수 있으며, 캐빈 필터 교체도 함께 하면 효과적입니다. 예방을 위해 에어컨 끄기 2~3분 전에 A/C를 끄고 송풍만 작동시켜 수분을 증발시키세요.',
  },
  {
    q: '에어컨 컴프레서 수리비는 얼마인가요?',
    a: '국산차 컴프레서 교체 비용은 부품비 + 공임 포함 50~90만 원, 수입차는 80~180만 원입니다. 컴프레서는 수리보다 교체가 일반적이며, 교체 시 냉매 재충전과 배관 세척 비용이 추가됩니다. 리빌트(재생) 부품 사용 시 30~40% 절약 가능합니다.',
  },
  {
    q: '캐빈 필터 교체 주기는 어떻게 되나요?',
    a: '일반적으로 15,000km 또는 1년마다 교체를 권장합니다. 미세먼지가 심한 봄·겨울에는 6개월~10,000km로 단축하는 것이 좋습니다. 풍량 저하, 악취, 유리 안쪽 습기가 잘 안 빠지는 증상이 있으면 즉시 교체하세요.',
  },
  {
    q: 'R-134a와 R-1234yf 냉매의 차이는 무엇인가요?',
    a: 'R-134a는 기존 차량에 널리 사용되는 냉매로 가격이 저렴합니다. R-1234yf는 지구온난화 지수(GWP)가 R-134a의 1/300 수준인 친환경 냉매로, 2017년 이후 생산 차량부터 의무 적용되고 있습니다. R-1234yf는 냉매 자체 가격이 3~4배 비싸 충전 비용도 높습니다.',
  },
  {
    q: '에어컨을 오래 켜면 엔진에 무리가 가나요?',
    a: '정상 상태의 에어컨은 엔진 출력의 3~5%를 사용하므로 큰 무리는 없습니다. 다만 연비는 약 10~15% 악화됩니다. 오래된 차량이나 컴프레서 상태가 불량한 경우 엔진 부하가 커질 수 있으므로, 오르막길·급가속 시 에어컨이 과도하게 부하를 주면 점검이 필요합니다.',
  },
  {
    q: '에어컨 수리는 어디서 받는 것이 좋은가요?',
    a: '보증 기간 내 차량은 공식 서비스센터를 추천합니다. 보증 만료 후에는 에어컨 전문점이나 사설 정비소가 가성비가 좋습니다. 특히 냉매 충전·캐빈 필터 교체 같은 간단한 작업은 전문점에서 30~50% 저렴하게 받을 수 있습니다. 컴프레서·에바포레이터 같은 대규모 수리는 후기가 좋은 정비소를 선택하세요.',
  },
];

export default function CarAirConditionerGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차 에어컨 관리·수리 비용 - 냉매 충전, 고장 수리비 총정리',
          description: '자동차 에어컨 냉매 충전 비용, 고장 증상별 수리비, 캐빈 필터 교체, 에어컨 효율 높이는 방법을 총정리했습니다.',
          url: `${BASE_URL}/guide/car-air-conditioner`,
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
            { '@type': 'ListItem', position: 2, name: '가이드', item: `${BASE_URL}/guide` },
            { '@type': 'ListItem', position: 3, name: '자동차 에어컨 관리·수리 비용', item: `${BASE_URL}/guide/car-air-conditioner` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li><Link href="/guide/maintenance-cost" className="hover:text-amber-600">가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">자동차 에어컨 관리·수리 비용</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">정비 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            자동차 에어컨 관리·수리 비용 총정리
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            에어컨 냉매 충전부터 컴프레서·콘덴서·에바포레이터 고장 수리비, 캐빈 필터 교체 비용까지 한눈에 비교했습니다.
            에어컨 효율을 높이는 방법과 계절별 관리법도 함께 안내합니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">냉매 보충 (R-134a)</p>
              <p className="text-lg font-bold text-amber-600">5~8만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">냉매 보충 (R-1234yf)</p>
              <p className="text-lg font-bold text-amber-600">15~25만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">컴프레서 교체 (국산)</p>
              <p className="text-lg font-bold text-red-500">50~90만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">캐빈 필터 교체</p>
              <p className="text-lg font-bold text-green-600">1~4만 원</p>
            </div>
          </div>
        </section>

        {/* ===== Section 1: 에어컨 구조와 작동 원리 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">자동차 에어컨 구조와 작동 원리</h2>
            <p className="text-sm text-gray-500 mb-4">
              자동차 에어컨은 냉매가 압축 → 응축 → 팽창 → 증발의 4단계를 순환하며 실내 열을 외부로 배출하는 원리로 작동합니다.
              각 부품의 역할을 이해하면 고장 증상 진단과 수리비 판단에 도움이 됩니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">부품명</th>
                    <th className="px-4 py-3 text-left font-semibold">역할</th>
                    <th className="px-4 py-3 text-left font-semibold">위치</th>
                    <th className="px-4 py-3 text-left font-semibold">참고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {acComponents.map((row) => (
                    <tr key={row.part} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.part}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.role}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{row.location}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>작동 순서:</strong> 컴프레서(압축) → 콘덴서(응축·냉각) → 팽창밸브(감압) → 에바포레이터(증발·냉방) → 컴프레서로 순환.
              이 과정에서 실내 열을 흡수하여 차가운 바람을 만듭니다.
            </div>
          </div>
        </section>

        {/* ===== Section 2: 냉매 충전 비용 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">에어컨 냉매 충전 비용</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 일반 정비소 가격 (서비스센터는 20~50% 추가)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-right font-semibold">비용</th>
                    <th className="px-4 py-3 text-right font-semibold">주기</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {refrigerantCosts.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.item}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.cost}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.cycle}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• <strong>R-134a:</strong> 2016년 이전 생산 차량 대부분에 사용. 냉매 단가가 저렴하여 충전 비용이 낮음</p>
              <p>• <strong>R-1234yf:</strong> 2017년 이후 신차에 적용되는 친환경 냉매. 지구온난화 지수(GWP)가 R-134a의 1/300 수준이나 가격이 3~4배 비쌈</p>
              <p>• 내 차의 냉매 종류는 엔진룸 스티커 또는 차량 매뉴얼에서 확인 가능</p>
            </div>
            <p className="text-xs text-gray-400 mt-3">※ R-134a와 R-1234yf는 호환되지 않습니다. 반드시 차량에 지정된 냉매를 사용하세요</p>
          </div>
        </section>

        {/* ===== Section 3: 고장 증상별 수리 비용 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">에어컨 고장 증상별 수리 비용</h2>
          <p className="text-sm text-gray-500 mb-6">증상별 원인, 수리 방법, 국산차·수입차 비용 비교 (2026년 기준)</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">증상</th>
                    <th className="px-4 py-3 text-left font-semibold">주요 원인</th>
                    <th className="px-4 py-3 text-left font-semibold">수리 방법</th>
                    <th className="px-4 py-3 text-right font-semibold">국산차</th>
                    <th className="px-4 py-3 text-right font-semibold">수입차</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {repairCosts.map((row) => (
                    <tr key={row.symptom} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.symptom}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.cause}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">{row.repairMethod}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.costDomestic}</td>
                      <td className="px-4 py-3 text-right font-medium text-red-500 whitespace-nowrap">{row.costImported}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 컴프레서·에바포레이터 교체 시 리빌트(재생) 부품을 사용하면 신품 대비 30~40% 절약할 수 있습니다.
            다만 보증 기간이 짧으므로 신뢰할 수 있는 정비소에서 작업하세요.
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 수입차 서비스센터 기준이며, 사설 정비소는 20~40% 저렴할 수 있습니다</p>
        </section>

        {/* ===== Section 4: 캐빈 필터 교체 비용 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">에어컨 필터(캐빈 필터) 교체 비용·주기</h2>
          <p className="text-sm text-gray-500 mb-6">브랜드별 순정 부품 기준, 호환 필터 사용 시 30~50% 절약 가능</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-left font-semibold">필터 종류</th>
                    <th className="px-4 py-3 text-right font-semibold">부품비</th>
                    <th className="px-4 py-3 text-right font-semibold">공임비</th>
                    <th className="px-4 py-3 text-right font-semibold">교체 주기</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cabinFilterCosts.map((row, idx) => (
                    <tr key={`${row.brand}-${idx}`} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.brand}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.filterType}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.cost}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.laborCost}</td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">{row.cycle}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">셀프 교체 방법</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">1</span>
                <span>글로브박스를 열고 양쪽 고정 클립(또는 댐퍼)을 분리하여 글로브박스를 내립니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">2</span>
                <span>캐빈 필터 커버를 열고 기존 필터를 꺼냅니다. 공기 흐름 방향 화살표를 확인하세요.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">3</span>
                <span>새 필터를 화살표 방향에 맞춰 삽입하고 커버를 닫습니다. 총 소요 시간 5~10분.</span>
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">※ 대부분의 국산차는 셀프 교체가 간단합니다. BMW 등 일부 수입차는 분해 난이도가 높아 정비소를 추천합니다.</p>
          </div>
        </section>

        {/* ===== Section 5: 에어컨 효율 높이는 방법 8가지 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">에어컨 효율 높이는 방법 8가지</h2>
          <div className="space-y-4">
            {efficiencyTips.map((tip, index) => (
              <div key={tip.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Section 6: 계절별 에어컨 관리법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">계절별 에어컨 관리법</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 여름 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">☀️</span>
                <h3 className="text-xl font-bold text-gray-900">여름철 관리법</h3>
              </div>
              <div className="space-y-3">
                {seasonalCare.summer.map((item) => (
                  <div key={item.item} className="border-l-2 border-amber-400 pl-3">
                    <p className="font-medium text-gray-900 text-sm">{item.item}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 겨울 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">❄️</span>
                <h3 className="text-xl font-bold text-gray-900">겨울철 관리법</h3>
              </div>
              <div className="space-y-3">
                {seasonalCare.winter.map((item) => (
                  <div key={item.item} className="border-l-2 border-blue-400 pl-3">
                    <p className="font-medium text-gray-900 text-sm">{item.item}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>핵심 포인트:</strong> 겨울에도 월 1~2회 에어컨(A/C)을 가동하세요. 장기 미사용 시 컴프레서 씰이 마르고 냉매가 누설될 수 있습니다.
            성에 제거에도 A/C 버튼이 효과적입니다.
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자동차 에어컨 자주 묻는 질문</h2>
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

        {/* ===== CTA ===== */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              내 차 유지비를 직접 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              에어컨 정비, 엔진오일, 타이어, 보험료까지 유지비를 한눈에 비교합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                차종별 유지비 비교
              </Link>
              <Link
                href="/guide/engine-oil-change"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                엔진오일 교체 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
