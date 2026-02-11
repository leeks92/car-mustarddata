import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 흠집·판금 수리 비용 - 수리 종류별 가격 총정리',
  description:
    '자동차 스크래치, 찍힘, 판금·도색, 범퍼 교체, 덴트 수리 비용을 종류별·부위별로 비교했습니다. 보험 처리 vs 자비 수리 기준, 공식 서비스센터·사설 정비소 비교, 국산차·수입차 수리비 차이까지 총정리.',
  keywords: [
    '자동차 흠집 수리 비용',
    '판금 도색 비용',
    '자동차 스크래치 수리',
    '범퍼 수리 비용',
    '덴트 수리 비용',
    '자동차 보험 수리',
    '자비 수리 기준',
    '수입차 수리비',
    '자동차 도색 비용',
    '자동차 판금 수리',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-scratch-repair-cost` },
  openGraph: {
    title: '자동차 흠집·판금 수리 비용 - 수리 종류별 가격 총정리',
    description: '자동차 흠집·판금·도색·덴트 수리 비용을 종류별·부위별로 비교하고 보험 처리 기준을 안내합니다.',
    url: `${BASE_URL}/guide/car-scratch-repair-cost`,
    type: 'website',
  },
};

// 수리 종류별 비용
const repairTypes = [
  { type: '가벼운 스크래치', desc: '클리어코트만 손상, 도장면 미노출', price: '3~8만 원', time: '30분~1시간', method: '컴파운드·광택 복원' },
  { type: '깊은 스크래치', desc: '도장면 노출, 하도까지 손상', price: '8~20만 원', time: '1~3시간', method: '부분 도색·터치업' },
  { type: '찍힘·패임', desc: '돌 튐, 문콕 등 소형 파손', price: '5~15만 원', time: '1~2시간', method: '덴트·부분 도색' },
  { type: '판금·도색', desc: '패널 변형 동반 도색 수리', price: '30~80만 원', time: '2~5일', method: '판금 복원 후 전면 도색' },
  { type: '범퍼 도색', desc: '범퍼 스크래치·깨짐 도색', price: '20~50만 원', time: '1~3일', method: '범퍼 탈거 후 도색' },
  { type: '범퍼 교체', desc: '범퍼 파손이 심해 교체', price: '40~150만 원', time: '1~3일', method: '신품·재생 부품 교체' },
  { type: '덴트 수리 (PDR)', desc: '도장 손상 없는 움푹 패임', price: '3~15만 원', time: '30분~2시간', method: '무도색 덴트 복원' },
  { type: '유리 수리·교체', desc: '전면 유리 균열·파손', price: '5~80만 원', time: '1~4시간', method: '레진 수리 또는 유리 교체' },
];

// 부위별 수리 비용
const repairByPart = [
  { part: '앞 범퍼', scratch: '10~25만 원', dent: '15~30만 원', paintFull: '25~50만 원', replace: '40~100만 원' },
  { part: '뒤 범퍼', scratch: '10~25만 원', dent: '15~30만 원', paintFull: '25~50만 원', replace: '40~100만 원' },
  { part: '도어 (1짝)', scratch: '10~20만 원', dent: '15~35만 원', paintFull: '30~60만 원', replace: '80~200만 원' },
  { part: '보닛 (후드)', scratch: '15~25만 원', dent: '20~40만 원', paintFull: '35~70만 원', replace: '100~250만 원' },
  { part: '펜더', scratch: '10~20만 원', dent: '15~30만 원', paintFull: '25~55만 원', replace: '60~150만 원' },
  { part: '트렁크', scratch: '10~20만 원', dent: '15~35만 원', paintFull: '30~60만 원', replace: '80~180만 원' },
  { part: '루프 (지붕)', scratch: '15~30만 원', dent: '20~50만 원', paintFull: '40~80만 원', replace: '150~350만 원' },
  { part: '사이드 미러', scratch: '5~10만 원', dent: '-', paintFull: '8~15만 원', replace: '15~60만 원' },
];

// 보험 처리 vs 자비 수리
const insuranceComparison = [
  { item: '수리비 10만 원 이하', selfPay: '자비 수리 유리', insurance: '할증 시 손해', reason: '할증 보험료가 수리비 초과' },
  { item: '수리비 20만 원', selfPay: '자비 수리 유리', insurance: '할증 시 손해', reason: '1사고 할증 약 10~30만 원' },
  { item: '수리비 30~50만 원', selfPay: '상황에 따라', insurance: '상황에 따라', reason: '무사고 할인 손실 고려 필요' },
  { item: '수리비 50~100만 원', selfPay: '부담 큼', insurance: '보험 처리 유리', reason: '자기부담금 제외 시 보험 유리' },
  { item: '수리비 100만 원 이상', selfPay: '자비 부담 과다', insurance: '보험 처리 유리', reason: '대형 수리는 보험 처리 권장' },
  { item: '상대방 과실 사고', selfPay: '해당 없음', insurance: '상대방 보험 처리', reason: '내 보험 할증 없음' },
];

// 수리 업체 종류별 비교
const shopComparison = [
  {
    type: '공식 서비스센터',
    priceLevel: '★★★★★',
    priceRange: '가장 비쌈 (1.5~2배)',
    quality: '최상',
    warranty: '보증 유지',
    pros: '순정 부품, 공식 보증, 전문 장비',
    cons: '높은 비용, 긴 대기 시간',
    recommended: '보증 기간 내 차량, 수입차',
  },
  {
    type: '사설 정비소',
    priceLevel: '★★★☆☆',
    priceRange: '보통 (기준가)',
    quality: '보통~양호',
    warranty: '업체별 상이',
    pros: '적정 가격, 접근성, 협상 가능',
    cons: '업체 편차 큼, 비순정 부품',
    recommended: '보증 만료 국산차, 일반 수리',
  },
  {
    type: '덴트 전문점',
    priceLevel: '★★☆☆☆',
    priceRange: '저렴 (도색 불필요)',
    quality: '양호 (PDR 한정)',
    warranty: '일부 업체 보증',
    pros: '무도색 복원, 빠른 시간, 저렴',
    cons: '도색 필요 시 불가, 크기 제한',
    recommended: '문콕, 우박 손상, 소형 덴트',
  },
  {
    type: 'DIY (셀프 수리)',
    priceLevel: '★☆☆☆☆',
    priceRange: '최저 (재료비만)',
    quality: '초보자 어려움',
    warranty: '없음',
    pros: '최소 비용, 즉시 가능',
    cons: '기술 필요, 마감 품질 차이',
    recommended: '가벼운 스크래치, 터치업 페인트',
  },
];

// 국산차 vs 수입차 도색 단가 비교
const brandPaintCost = [
  { brand: '현대', origin: '국산', doorPaint: '25~40만 원', bumperPaint: '20~35만 원', fullPanel: '30~60만 원', note: '가장 저렴한 수리비' },
  { brand: '기아', origin: '국산', doorPaint: '25~40만 원', bumperPaint: '20~35만 원', fullPanel: '30~60만 원', note: '현대와 유사한 수준' },
  { brand: 'KG모빌리티', origin: '국산', doorPaint: '25~45만 원', bumperPaint: '20~35만 원', fullPanel: '30~65만 원', note: '부품비 다소 높음' },
  { brand: '벤츠', origin: '독일', doorPaint: '50~90만 원', bumperPaint: '40~70만 원', fullPanel: '60~120만 원', note: '순정 도료 사용 시 1.5~2배' },
  { brand: 'BMW', origin: '독일', doorPaint: '50~85만 원', bumperPaint: '40~65만 원', fullPanel: '55~110만 원', note: '알루미늄 패널 추가 비용' },
  { brand: '아우디', origin: '독일', doorPaint: '50~85만 원', bumperPaint: '40~65만 원', fullPanel: '55~110만 원', note: 'BMW와 유사한 수준' },
  { brand: '렉서스', origin: '일본', doorPaint: '40~70만 원', bumperPaint: '35~55만 원', fullPanel: '45~90만 원', note: '독일차 대비 다소 저렴' },
  { brand: '볼보', origin: '스웨덴', doorPaint: '45~80만 원', bumperPaint: '35~60만 원', fullPanel: '50~100만 원', note: '안전 구조 관련 추가 비용' },
];

// 흠집 예방 방법
const preventionTips = [
  {
    title: 'PPF (페인트 보호 필름)',
    desc: '투명 보호 필름을 차체에 부착하여 스크래치와 돌 튐을 방지합니다. 전체 시공 시 200~500만 원, 부분 시공(보닛·펜더·범퍼)은 80~150만 원 수준입니다. 수입차 오너에게 특히 추천합니다.',
    cost: '부분 80~150만 원 / 전체 200~500만 원',
  },
  {
    title: '세라믹 코팅',
    desc: '차체 표면에 세라믹 피막을 형성하여 가벼운 스크래치와 오염을 방지합니다. 시공 비용은 30~100만 원이며, 효과는 1~3년 지속됩니다. PPF보다 보호력은 낮지만 광택 효과가 우수합니다.',
    cost: '30~100만 원 (1~3년 지속)',
  },
  {
    title: '주차 습관 개선',
    desc: '벽면 쪽 주차, 기둥 옆 주차를 피하고, 양쪽에 차가 없는 공간을 선택합니다. 대형마트·아파트에서는 문콕 방지를 위해 끝자리나 여유 공간에 주차하세요.',
    cost: '무료',
  },
  {
    title: '도어 가드·도어 엣지 몰딩',
    desc: '문콕을 방지하는 도어 가드(짝당 5,000~15,000원)와 도어 엣지 보호 몰딩(2~5만 원)을 설치합니다. 간단한 부착으로 문콕 피해를 줄일 수 있습니다.',
    cost: '2~6만 원',
  },
  {
    title: '정기 세차·왁스 관리',
    desc: '새똥, 수액, 철분 등은 오래 방치하면 도장을 부식시킵니다. 2주에 1회 세차, 3~6개월마다 왁스 또는 코팅 유지제를 발라 도장을 보호하세요.',
    cost: '월 2~5만 원',
  },
];

// FAQ
const faqItems = [
  {
    q: '자동차 스크래치 수리 비용은 얼마인가요?',
    a: '가벼운 스크래치(클리어코트 손상)는 컴파운드 광택으로 3~8만 원, 도장면이 노출된 깊은 스크래치는 부분 도색으로 8~20만 원 수준입니다. 도색이 필요한 경우 패널 전체 도색이 필요할 수 있어 30만 원 이상 소요됩니다.',
  },
  {
    q: '판금·도색 비용은 부위별로 얼마인가요?',
    a: '범퍼 도색은 20~50만 원, 도어 1짝 판금·도색은 30~60만 원, 보닛 판금·도색은 35~70만 원, 루프(지붕) 판금·도색은 40~80만 원 수준입니다. 수입차는 국산차 대비 1.5~2배 비쌉니다.',
  },
  {
    q: '덴트 수리와 판금·도색의 차이는 무엇인가요?',
    a: '덴트 수리(PDR)는 도장 손상 없이 패널의 움푹 패인 부분만 복원하는 무도색 기법으로 3~15만 원 수준입니다. 판금·도색은 패널 변형이 심하거나 도장이 손상된 경우 금속을 복원하고 다시 도색하는 방법으로 30~80만 원입니다.',
  },
  {
    q: '흠집 수리 시 보험 처리가 유리한가요?',
    a: '수리비 30만 원 이하는 보험 할증으로 인한 추가 보험료가 수리비를 초과할 수 있어 자비 수리가 유리합니다. 수리비 50만 원 이상이면 보험 처리가 유리하며, 상대방 과실 사고는 상대 보험으로 처리하므로 할증이 없습니다.',
  },
  {
    q: '수입차 수리비가 비싼 이유는?',
    a: '수입차는 순정 부품 가격이 높고(국산차의 2~3배), 전용 도료·장비가 필요하며, 알루미늄·고장력 강판 등 특수 소재 사용으로 판금 난이도가 높습니다. 공식 서비스센터 이용 시 공임비도 30~50% 더 비쌉니다.',
  },
  {
    q: '자비 수리 시 어떤 업체가 좋은가요?',
    a: '비용 대비 효과를 고려하면, 가벼운 덴트는 덴트 전문점, 도색이 필요한 경우 사설 정비소가 가장 합리적입니다. 보증 기간 내 차량이나 수입차는 공식 서비스센터를 추천합니다. 네이버 지도 리뷰, 카페 후기를 참고하세요.',
  },
  {
    q: 'PPF와 세라믹 코팅 중 어떤 것이 좋은가요?',
    a: 'PPF는 물리적 충격(돌 튐, 스크래치)까지 방지하는 보호 필름이고, 세라믹 코팅은 가벼운 오염·스크래치 방지와 광택 유지에 효과적입니다. 수입차나 신차는 PPF, 가성비를 원한다면 세라믹 코팅을 추천합니다.',
  },
  {
    q: '자동차 유리 수리와 교체 기준은?',
    a: '전면 유리의 작은 균열(500원 동전 크기 이하)은 레진 수리(5~10만 원)로 복원 가능합니다. 균열이 크거나 운전석 시야에 걸리면 유리 교체(30~80만 원)가 필요합니다. 자기차량손해 보험에 유리 파손 특약이 있다면 자기부담금만 납부합니다.',
  },
];

export default function CarScratchRepairCostPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차 흠집·판금 수리 비용 - 수리 종류별 가격 총정리',
          description: '자동차 스크래치, 찍힘, 판금·도색, 범퍼 교체, 덴트 수리 비용을 종류별·부위별로 비교합니다.',
          url: `${BASE_URL}/guide/car-scratch-repair-cost`,
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
            { '@type': 'ListItem', position: 3, name: '자동차 흠집·판금 수리 비용', item: `${BASE_URL}/guide/car-scratch-repair-cost` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li><Link href="/" className="hover:text-amber-600">가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">자동차 흠집·판금 수리 비용</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">수리비 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            자동차 흠집·판금 수리 비용 총정리
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            스크래치, 찍힘, 판금·도색, 범퍼 교체, 덴트, 유리 수리까지 수리 종류별 가격과 소요 시간을 비교했습니다.
            보험 처리 기준, 업체별 비교, 국산차·수입차 수리비 차이와 흠집 예방 방법까지 안내합니다.
          </p>
        </section>

        {/* ===== 1. 수리 종류별 비용 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">수리 종류별 비용 비교</h2>
          <p className="text-sm text-gray-500 mb-6">2026년 국산 중형 세단(쏘나타·K5급) 기준 평균 수리비</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">수리 종류</th>
                    <th className="px-4 py-3 text-left font-semibold">설명</th>
                    <th className="px-4 py-3 text-right font-semibold">예상 비용</th>
                    <th className="px-4 py-3 text-right font-semibold">소요 시간</th>
                    <th className="px-4 py-3 text-left font-semibold">수리 방법</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {repairTypes.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.desc}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">{row.time}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 수입차는 위 금액의 1.5~2배, 공식 서비스센터는 사설 대비 30~50% 추가</p>
        </section>

        {/* ===== 2. 부위별 수리 비용 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">부위별 수리 비용</h2>
          <p className="text-sm text-gray-500 mb-6">국산 중형차 기준 부위별 수리 방법에 따른 예상 비용</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">부위</th>
                    <th className="px-4 py-3 text-right font-semibold">스크래치 도색</th>
                    <th className="px-4 py-3 text-right font-semibold">덴트·부분 수리</th>
                    <th className="px-4 py-3 text-right font-semibold">판금·전면 도색</th>
                    <th className="px-4 py-3 text-right font-semibold">부품 교체</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {repairByPart.map((row) => (
                    <tr key={row.part} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.part}</td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">{row.scratch}</td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">{row.dent}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.paintFull}</td>
                      <td className="px-4 py-3 text-right font-medium text-red-500 whitespace-nowrap">{row.replace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 루프(지붕)와 보닛은 면적이 넓어 부분 도색이 어렵고, 전면 도색이 필요한 경우가 많습니다. 도어는 짝당 가격이므로 양쪽이면 2배입니다.
          </div>
        </section>

        {/* ===== 3. 보험 처리 vs 자비 수리 기준 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">보험 처리 vs 자비 수리 기준</h2>
          <p className="text-sm text-gray-500 mb-4">
            자기차량손해(자차) 보험 적용 시 수리비 금액별 손익 비교입니다.
            보험 처리 시 1사고당 보험료 할증은 연간 약 10~30만 원이며, 무사고 할인이 3년간 누적되면 최대 50~80만 원의 할인 혜택을 잃을 수 있습니다.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">수리비 금액</th>
                    <th className="px-4 py-3 text-center font-semibold">자비 수리</th>
                    <th className="px-4 py-3 text-center font-semibold">보험 처리</th>
                    <th className="px-4 py-3 text-left font-semibold">판단 근거</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {insuranceComparison.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.item}</td>
                      <td className="px-4 py-3 text-center text-sm">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.selfPay === '자비 수리 유리' ? 'bg-green-100 text-green-700' :
                          row.selfPay === '부담 큼' || row.selfPay === '자비 부담 과다' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {row.selfPay}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-sm">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.insurance === '보험 처리 유리' || row.insurance === '상대방 보험 처리' ? 'bg-green-100 text-green-700' :
                          row.insurance === '할증 시 손해' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {row.insurance}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">보험 처리 시 확인 사항</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">1</span>
                <span><strong>자기부담금:</strong> 자차 보험 처리 시 자기부담금(보통 20만 원 또는 수리비의 20%)을 먼저 부담합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">2</span>
                <span><strong>할증 기간:</strong> 보험 처리 1건당 3년간 보험료가 할증됩니다. 이 기간의 누적 할증액을 계산하세요.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">3</span>
                <span><strong>무사고 할인:</strong> 무사고 기간이 길수록 할인율이 높습니다. 보험 처리 시 이 할인이 초기화됩니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">4</span>
                <span><strong>유리 수리:</strong> 유리 파손 특약은 본 보험과 별도로, 할증 없이 처리되는 상품도 있습니다.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ===== 4. 수리 업체 종류별 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">수리 업체 종류별 비교</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shopComparison.map((shop) => (
              <div key={shop.type} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{shop.type}</h3>
                  <span className="text-amber-500 text-sm">{shop.priceLevel}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">가격 수준</span>
                    <span className="font-medium text-gray-900">{shop.priceRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">수리 품질</span>
                    <span className="font-medium text-gray-900">{shop.quality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">보증</span>
                    <span className="font-medium text-gray-900">{shop.warranty}</span>
                  </div>
                  <hr className="border-gray-100" />
                  <div>
                    <span className="text-green-600 text-xs font-medium">장점: </span>
                    <span className="text-gray-600 text-xs">{shop.pros}</span>
                  </div>
                  <div>
                    <span className="text-red-500 text-xs font-medium">단점: </span>
                    <span className="text-gray-600 text-xs">{shop.cons}</span>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-2 mt-2">
                    <span className="text-amber-700 text-xs font-medium">추천: </span>
                    <span className="text-amber-800 text-xs">{shop.recommended}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 5. 국산차 vs 수입차 수리비 차이 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">국산차 vs 수입차 도색 수리비 비교</h2>
          <p className="text-sm text-gray-500 mb-6">사설 정비소 기준 브랜드별 도색 단가 비교 (공임 + 도료 포함)</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-center font-semibold">원산지</th>
                    <th className="px-4 py-3 text-right font-semibold">도어 도색</th>
                    <th className="px-4 py-3 text-right font-semibold">범퍼 도색</th>
                    <th className="px-4 py-3 text-right font-semibold">패널 전면 도색</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {brandPaintCost.map((row) => (
                    <tr key={row.brand} className={`hover:bg-gray-50 ${row.origin !== '국산' ? 'bg-red-50/30' : ''}`}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.brand}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          row.origin === '국산' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {row.origin}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.doorPaint}</td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">{row.bumperPaint}</td>
                      <td className="px-4 py-3 text-right font-medium text-gray-900 whitespace-nowrap">{row.fullPanel}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>• <strong>수입차 수리비가 비싼 이유:</strong> 순정 부품 가격(국산차의 2~3배), 전용 도료(스탠독스·글라주리트 등), 알루미늄·고장력 강판 판금 난이도</p>
            <p>• <strong>절약 팁:</strong> 수입차도 사설 정비소에서 수리하면 공식 센터 대비 30~50% 절약 가능. 단, 보증 기간 내 차량은 공식 센터 추천</p>
          </div>
        </section>

        {/* ===== 6. 흠집 예방 방법 5가지 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">흠집 예방 방법 5가지</h2>
          <div className="space-y-4">
            {preventionTips.map((tip, index) => (
              <div key={tip.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tip.cost}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자동차 흠집·수리 자주 묻는 질문</h2>
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
              관련 가이드도 확인해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              자동차 유지비, 보험료 비교 정보를 함께 확인하면 더 합리적인 관리가 가능합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                자동차 유지비 가이드
              </Link>
              <Link
                href="/guide/car-insurance"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                보험료 비교 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
