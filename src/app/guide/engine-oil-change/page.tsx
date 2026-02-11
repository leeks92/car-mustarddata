import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '엔진오일 교체 주기·비용 가이드 - 종류별 가격 비교',
  description:
    '엔진오일 종류별 교체 주기, 비용, 브랜드별 가격 비교, 셀프 교체 방법을 총정리했습니다. 광유·합성유·100% 합성유 차이, 가솔린·디젤·터보·하이브리드 엔진별 교체 주기와 서비스센터·정비소·셀프 교체 비용을 비교합니다.',
  keywords: [
    '엔진오일 교체 주기',
    '엔진오일 교체 비용',
    '엔진오일 종류',
    '합성유 가격',
    '엔진오일 브랜드 비교',
    '셀프 엔진오일 교체',
    '엔진오일 점도',
    '모빌1 가격',
    '엔진오일 추천',
    '자동차 정비 비용',
  ],
  alternates: { canonical: `${BASE_URL}/guide/engine-oil-change` },
  openGraph: {
    title: '엔진오일 교체 주기·비용 가이드 - 종류별 가격 비교',
    description: '엔진오일 종류별 교체 주기와 비용, 브랜드별 가격, 셀프 교체 방법을 비교했습니다.',
    url: `${BASE_URL}/guide/engine-oil-change`,
    type: 'website',
  },
};

// 엔진오일 종류별 특징
const oilTypes = [
  {
    type: '광유 (Mineral)',
    base: '원유 정제',
    price: '리터당 3,000~6,000원',
    cycle: '5,000~7,000km',
    strength: '가격이 저렴',
    weakness: '고온 안정성 낮음, 교체 주기 짧음',
    recommended: '저가 차량, 짧은 주행거리',
  },
  {
    type: '합성유 (Semi-Synthetic)',
    base: '광유 + 합성유 혼합',
    price: '리터당 6,000~12,000원',
    cycle: '7,000~10,000km',
    strength: '가성비 우수, 적당한 보호 성능',
    weakness: '100% 합성유 대비 성능 제한',
    recommended: '일반 승용차, 도심 주행',
  },
  {
    type: '100% 합성유 (Full Synthetic)',
    base: '화학 합성',
    price: '리터당 12,000~25,000원',
    cycle: '10,000~15,000km',
    strength: '고온/저온 안정성, 엔진 보호 극대화',
    weakness: '가격이 비쌈',
    recommended: '터보 엔진, 수입차, 고성능 차량',
  },
];

// 점도 등급 설명
const viscosityGrades = [
  { grade: '0W-20', lowTemp: '-40°C', characteristic: '초저점도, 연비 최적화', suitable: '최신 가솔린·하이브리드 (현대·기아 최신 모델)' },
  { grade: '5W-30', lowTemp: '-35°C', characteristic: '범용 점도, 가장 보편적', suitable: '대부분의 가솔린·디젤 엔진 (국산차 표준)' },
  { grade: '5W-40', lowTemp: '-35°C', characteristic: '고온 보호 강화', suitable: '유럽 수입차, 터보 엔진 (벤츠·BMW·아우디)' },
  { grade: '0W-40', lowTemp: '-40°C', characteristic: '광범위 온도 대응', suitable: '고성능 스포츠카, 혹한지역 운행 차량' },
  { grade: '10W-40', lowTemp: '-30°C', characteristic: '고점도, 오래된 엔진용', suitable: '고연식 차량, 오일 소모가 많은 엔진' },
];

// 엔진 종류별 교체 주기
const changeCycles = [
  { engine: '가솔린 (자연흡기)', cycle: '7,000~10,000km', months: '6~12개월', oil: '5W-30 또는 0W-20', note: '제조사 권장 주기 기준, 가혹 조건 시 5,000km' },
  { engine: '디젤', cycle: '10,000~15,000km', months: '6~12개월', oil: '5W-30 또는 5W-40', note: 'DPF 장착 차량은 Low-SAPS 오일 필수' },
  { engine: '가솔린 터보', cycle: '5,000~7,000km', months: '4~6개월', oil: '5W-30 또는 5W-40', note: '터보 열부하로 오일 열화가 빠름' },
  { engine: '하이브리드', cycle: '10,000~15,000km', months: '12개월', oil: '0W-20', note: '엔진 가동 시간이 짧아 교체 주기 길어짐' },
  { engine: '수입차 (유럽)', cycle: '15,000~20,000km', months: '12~24개월', oil: '5W-40 또는 0W-40', note: '롱라이프 오일 사용 시, 제조사 인증 오일 필수' },
  { engine: '수입차 (일본)', cycle: '10,000~15,000km', months: '6~12개월', oil: '0W-20 또는 5W-30', note: '저점도 오일 권장, 연비 중시 설계' },
];

// 교체 비용 비교 (서비스센터 / 정비소 / 셀프)
const changeCosts = [
  { category: '국산차 · 광유', dealer: '5~7만 원', shop: '3~5만 원', selfChange: '1.5~2.5만 원', note: '광유 4~5L + 필터' },
  { category: '국산차 · 합성유', dealer: '7~10만 원', shop: '5~7만 원', selfChange: '3~5만 원', note: '합성유 4~5L + 필터' },
  { category: '국산차 · 100% 합성유', dealer: '10~15만 원', shop: '7~10만 원', selfChange: '5~8만 원', note: '100% 합성유 4~5L + 필터' },
  { category: '수입차 · 합성유', dealer: '15~25만 원', shop: '10~15만 원', selfChange: '6~10만 원', note: '제조사 인증 오일 5~7L + 필터' },
  { category: '수입차 · 100% 합성유', dealer: '20~40만 원', shop: '15~25만 원', selfChange: '8~15만 원', note: '프리미엄 인증 오일 5~7L + 필터' },
  { category: '디젤 · DPF 전용', dealer: '12~20만 원', shop: '8~13만 원', selfChange: '5~9만 원', note: 'Low-SAPS 오일 5~7L + 필터' },
];

// 브랜드별 가격 비교
const oilBrands = [
  { brand: '모빌1 (Mobil 1)', origin: '미국', volume: '4L', price: '45,000~65,000원', grade: '0W-40, 5W-30', feature: '가장 대중적인 프리미엄 합성유, F1 기술 적용' },
  { brand: '캐스트롤 EDGE', origin: '영국', volume: '4L', price: '42,000~60,000원', grade: '5W-30, 5W-40', feature: 'Fluid Titanium 기술, 고온 보호 강화' },
  { brand: '쉘 힐릭스 울트라', origin: '네덜란드', volume: '4L', price: '40,000~58,000원', grade: '5W-30, 5W-40', feature: '천연가스 기반 합성유, 청정성 우수' },
  { brand: 'ZIC X9', origin: '한국', volume: '4L', price: '28,000~38,000원', grade: '5W-30, 5W-40', feature: 'SK 자체 기유, 국산 최고급, 가성비 우수' },
  { brand: '킥스 PAO1', origin: '한국', volume: '4L', price: '25,000~35,000원', grade: '5W-30, 0W-30', feature: 'GS칼텍스 PAO 기유, 연비 개선 효과' },
  { brand: '토탈쿼츠 이네오', origin: '프랑스', volume: '5L', price: '48,000~65,000원', grade: '5W-30, 5W-40', feature: 'PSA·벤츠 인증, 유럽차 전용 라인업' },
  { brand: '발보린 SynPower', origin: '미국', volume: '4L', price: '35,000~50,000원', grade: '5W-30, 5W-40', feature: '엔진 세정 능력 우수, 합리적인 가격' },
  { brand: '리퀴몰리 탑텍', origin: '독일', volume: '5L', price: '55,000~75,000원', grade: '5W-30, 5W-40', feature: '독일차 전용 인증, BMW·벤츠·VW 순정 대체' },
];

// 셀프 교체 7단계
const selfChangeSteps = [
  {
    step: 1,
    title: '준비물 확인',
    desc: '엔진오일(차량 매뉴얼 확인), 오일 필터, 드레인 볼트 와셔, 오일 팬(폐유 수거용), 래칫·소켓 세트, 오일 필터 렌치, 잭·잭스탠드, 장갑·걸레',
    caution: '반드시 차량 매뉴얼에서 권장 오일 규격과 용량을 확인하세요',
  },
  {
    step: 2,
    title: '엔진 예열',
    desc: '시동을 걸고 3~5분 정도 예열합니다. 오일이 따뜻해져야 점도가 낮아지고 노폐물과 함께 잘 배출됩니다.',
    caution: '너무 오래 예열하면 오일이 뜨거워 화상 위험이 있으므로 주의',
  },
  {
    step: 3,
    title: '차량 들어올리기',
    desc: '잭으로 차량을 들어올리고 잭스탠드로 고정합니다. 평탄한 바닥에서 작업하고, 반드시 잭스탠드를 사용하세요.',
    caution: '잭만으로 차량 아래 작업하는 것은 매우 위험합니다',
  },
  {
    step: 4,
    title: '폐유 배출',
    desc: '오일 팬을 드레인 볼트 아래에 놓고, 소켓 렌치로 드레인 볼트를 반시계 방향으로 풀어 폐유를 배출합니다. 10~15분 충분히 빼줍니다.',
    caution: '드레인 볼트를 완전히 빼면 오일이 한꺼번에 나오므로 오일 팬 위치를 잘 잡으세요',
  },
  {
    step: 5,
    title: '오일 필터 교체',
    desc: '오일 필터 렌치로 기존 필터를 제거하고, 새 필터의 고무 패킹에 새 오일을 살짝 바른 후 손으로 조여 장착합니다.',
    caution: '오일 필터는 손으로 조이는 것이 원칙. 과도하게 조이면 다음 교체 시 분리가 어렵습니다',
  },
  {
    step: 6,
    title: '새 오일 주입',
    desc: '드레인 볼트를 새 와셔와 함께 장착하고 적정 토크로 조입니다. 오일 주입구를 열고 규정량의 새 오일을 천천히 주입합니다.',
    caution: '오일량은 차량 매뉴얼의 규정량을 정확히 지키세요. 과다·부족 모두 엔진에 해롭습니다',
  },
  {
    step: 7,
    title: '누유 확인 및 마무리',
    desc: '시동을 걸고 1~2분 공회전 후 시동을 끕니다. 5분 뒤 오일 레벨 게이지로 유량을 확인하고, 드레인 볼트와 필터 주변에 누유가 없는지 점검합니다.',
    caution: '폐유는 주유소나 정비소에 무료로 맡길 수 있습니다. 하수구에 절대 버리지 마세요',
  },
];

// 교체 시기 확인 방법
const checkMethods = [
  {
    method: '주행거리 확인',
    icon: '🔢',
    desc: '계기판의 트립 미터나 정비 이력을 확인하여 마지막 교체 후 주행거리를 계산합니다. 대부분의 차량은 오일 교체 알림 기능이 있습니다.',
    detail: '가솔린 7,000~10,000km, 디젤 10,000~15,000km, 터보 5,000~7,000km 기준',
  },
  {
    method: '오일 색상 확인',
    icon: '🎨',
    desc: '오일 레벨 게이지를 뽑아 색상을 확인합니다. 새 오일은 투명한 호박색이며, 교체 시기가 되면 검은색으로 변합니다.',
    detail: '호박색(양호) → 갈색(주의) → 검은색(교체 필요) → 우유빛·거품(냉각수 혼입, 즉시 점검)',
  },
  {
    method: '경고등 확인',
    icon: '🚨',
    desc: '계기판의 엔진오일 경고등(오일캔 모양)이 점등되면 즉시 확인이 필요합니다. 오일 부족이나 유압 이상을 알려주는 신호입니다.',
    detail: '경고등 점등 시 즉시 정차 후 오일량 확인. 주행 중 점등은 엔진 손상 위험',
  },
  {
    method: '정비 이력 관리',
    icon: '📋',
    desc: '마이카(정부24), 카카오내비, 카닥 등 앱에서 정비 이력을 관리하면 교체 시기를 놓치지 않을 수 있습니다.',
    detail: '날짜와 주행거리를 함께 기록하면 교체 주기를 정확하게 파악 가능',
  },
];

// FAQ
const faqItems = [
  {
    q: '엔진오일 교체 비용은 평균 얼마인가요?',
    a: '국산차 기준 합성유 교체 시 정비소에서 5~7만 원, 100% 합성유는 7~10만 원입니다. 수입차는 15~40만 원으로 차이가 큽니다. 셀프 교체 시 오일과 필터 비용만 들어 3~8만 원으로 절약할 수 있습니다.',
  },
  {
    q: '가솔린 엔진오일 교체 주기는?',
    a: '자연흡기 가솔린 엔진은 7,000~10,000km 또는 6~12개월마다 교체합니다. 터보 가솔린은 열부하가 크므로 5,000~7,000km로 더 짧습니다. 가혹 조건(시내 주행, 짧은 거리 반복)에서는 권장 주기의 70% 시점에서 교체하는 것이 좋습니다.',
  },
  {
    q: '합성유와 광유의 차이는 무엇인가요?',
    a: '광유는 원유를 정제하여 만들고 가격이 저렴하지만 교체 주기가 짧습니다(5,000~7,000km). 합성유는 화학 합성으로 만들어 고온·저온 안정성이 뛰어나고 교체 주기가 깁니다(10,000~15,000km). 최신 차량은 대부분 합성유 이상을 권장합니다.',
  },
  {
    q: '엔진오일 점도 등급은 어떻게 선택하나요?',
    a: '차량 매뉴얼의 권장 점도를 따르는 것이 가장 좋습니다. 일반적으로 최신 국산차는 0W-20 또는 5W-30, 유럽 수입차는 5W-40을 사용합니다. W 앞 숫자가 낮을수록 저온 유동성이 좋고, 뒤 숫자가 높을수록 고온 보호 성능이 우수합니다.',
  },
  {
    q: '셀프 엔진오일 교체가 가능한가요?',
    a: '기본적인 공구와 작업 공간이 있다면 충분히 가능합니다. 준비물은 엔진오일, 오일 필터, 드레인 볼트 와셔, 오일 팬, 소켓 렌치 세트, 잭스탠드입니다. 셀프 교체 시 정비소 대비 40~60%의 비용을 절약할 수 있습니다.',
  },
  {
    q: '엔진오일을 안 갈면 어떻게 되나요?',
    a: '오일이 열화되면 윤활 성능이 떨어져 엔진 내부 마모가 가속됩니다. 장기간 미교체 시 슬러지(찌꺼기)가 쌓여 오일 통로가 막히고, 최악의 경우 엔진 소착(시징)이 발생합니다. 엔진 교체 비용은 국산차 200~500만 원, 수입차 500~1,500만 원에 달합니다.',
  },
  {
    q: '가혹 조건이란 무엇인가요?',
    a: '짧은 거리 반복 주행(8km 미만), 잦은 정체 구간 주행, 먼지가 많은 환경, 산악 도로·언덕길 주행, 고온·극한 환경 운행 등이 가혹 조건에 해당합니다. 이 경우 제조사 권장 교체 주기의 50~70% 시점에서 교체하는 것이 엔진 수명 연장에 도움이 됩니다.',
  },
];

export default function EngineOilChangeGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '엔진오일 교체 주기·비용 가이드 - 종류별 가격 비교',
          description: '엔진오일 종류별 교체 주기, 비용, 브랜드별 가격 비교, 셀프 교체 방법을 총정리했습니다.',
          url: `${BASE_URL}/guide/engine-oil-change`,
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
            { '@type': 'ListItem', position: 3, name: '엔진오일 교체 주기·비용', item: `${BASE_URL}/guide/engine-oil-change` },
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
            <li className="text-gray-900 font-medium">엔진오일 교체 주기·비용</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">정비 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            엔진오일 교체 주기·비용 가이드
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            엔진오일 종류별 특징과 교체 주기, 서비스센터·정비소·셀프 교체 비용을 비교했습니다.
            브랜드별 가격과 셀프 교체 방법까지 한눈에 정리했습니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">국산차 합성유</p>
              <p className="text-lg font-bold text-amber-600">5~10만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">국산차 100% 합성유</p>
              <p className="text-lg font-bold text-amber-600">7~15만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">수입차 합성유</p>
              <p className="text-lg font-bold text-amber-600">10~25만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">셀프 교체</p>
              <p className="text-lg font-bold text-green-600">40~60% 절약</p>
            </div>
          </div>
        </section>

        {/* ===== Section 1: 엔진오일 종류와 특징 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">엔진오일 종류와 특징</h2>
            <p className="text-sm text-gray-500 mb-6">기유(Base Oil) 종류에 따라 광유, 합성유, 100% 합성유로 구분됩니다</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">종류</th>
                    <th className="px-4 py-3 text-left font-semibold">기유</th>
                    <th className="px-4 py-3 text-right font-semibold">가격</th>
                    <th className="px-4 py-3 text-right font-semibold">교체 주기</th>
                    <th className="px-4 py-3 text-left font-semibold">장점</th>
                    <th className="px-4 py-3 text-left font-semibold">단점</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {oilTypes.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.base}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.cycle}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.strength}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.weakness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>TIP:</strong> 최신 차량은 대부분 합성유 이상을 권장합니다. 광유를 사용하면 교체 주기가 짧아져 오히려 비용이 더 들 수 있습니다.
            </div>
          </div>

          {/* 점도 등급 설명 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">엔진오일 점도 등급 이해하기</h3>
            <p className="text-sm text-gray-500 mb-4">
              점도 등급(예: 5W-30)에서 W 앞 숫자는 저온 유동성, 뒤 숫자는 고온 점도를 나타냅니다.
              숫자가 낮을수록 저온에서 잘 흐르고, 높을수록 고온에서 두꺼운 유막을 형성합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">점도 등급</th>
                    <th className="px-4 py-3 text-right font-semibold">저온 한계</th>
                    <th className="px-4 py-3 text-left font-semibold">특성</th>
                    <th className="px-4 py-3 text-left font-semibold">적합 차량</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {viscosityGrades.map((row) => (
                    <tr key={row.grade} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold text-amber-600">{row.grade}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.lowTemp}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.characteristic}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.suitable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 반드시 차량 매뉴얼의 권장 점도를 확인하세요. 잘못된 점도 선택은 엔진 손상의 원인이 됩니다.</p>
          </div>
        </section>

        {/* ===== Section 2: 교체 주기 가이드 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">엔진 종류별 교체 주기</h2>
            <p className="text-sm text-gray-500 mb-6">100% 합성유 기준, 가혹 조건 시 권장 주기의 50~70% 시점에서 교체</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">엔진 종류</th>
                    <th className="px-4 py-3 text-right font-semibold">주행거리</th>
                    <th className="px-4 py-3 text-right font-semibold">기간</th>
                    <th className="px-4 py-3 text-left font-semibold">권장 점도</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {changeCycles.map((row) => (
                    <tr key={row.engine} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.engine}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.cycle}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.months}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.oil}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p><strong>가혹 조건 예시:</strong> 짧은 거리 반복(8km 미만), 정체 구간 위주, 먼지·비포장 환경, 산악·고지대 주행, 트레일러 견인</p>
              <p><strong>주행거리와 기간 중 먼저 도래하는 시점</strong>에 교체하세요. 연간 주행거리가 적더라도 오일은 시간이 지나면 산화됩니다.</p>
            </div>
          </div>
        </section>

        {/* ===== Section 3: 교체 비용 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">교체 비용 비교</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 오일 + 필터 + 공임 포함 (셀프는 부품비만)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">구분</th>
                    <th className="px-4 py-3 text-right font-semibold">서비스센터</th>
                    <th className="px-4 py-3 text-right font-semibold">일반 정비소</th>
                    <th className="px-4 py-3 text-right font-semibold">셀프 교체</th>
                    <th className="px-4 py-3 text-left font-semibold">포함 내역</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {changeCosts.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.category}</td>
                      <td className="px-4 py-3 text-right text-red-500 font-medium whitespace-nowrap">{row.dealer}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-medium whitespace-nowrap">{row.shop}</td>
                      <td className="px-4 py-3 text-right text-green-600 font-medium whitespace-nowrap">{row.selfChange}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• <strong>서비스센터:</strong> 공식 딜러 정비소. 순정 오일과 정품 부품 사용, 보증 유지에 유리</p>
              <p>• <strong>일반 정비소:</strong> 동네 카센터, 공임나라 등. 가격 대비 만족도가 높고 오일 선택 가능</p>
              <p>• <strong>셀프 교체:</strong> 직접 작업. 오일과 필터 구매비만 소요, 공임비(2~5만 원) 절약</p>
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 수입차 서비스센터는 정기점검 패키지에 오일 교체가 포함된 경우가 많으므로 개별 비용이 달라질 수 있습니다</p>
          </div>
        </section>

        {/* ===== Section 4: 브랜드별 가격 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">엔진오일 브랜드별 가격 비교</h2>
            <p className="text-sm text-gray-500 mb-6">100% 합성유 기준, 온라인 최저가 참고 (2026년 기준)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-left font-semibold">원산지</th>
                    <th className="px-4 py-3 text-right font-semibold">용량</th>
                    <th className="px-4 py-3 text-right font-semibold">가격</th>
                    <th className="px-4 py-3 text-left font-semibold">점도</th>
                    <th className="px-4 py-3 text-left font-semibold">특징</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {oilBrands.map((row) => (
                    <tr key={row.brand} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.brand}</td>
                      <td className="px-4 py-3 text-gray-600">{row.origin}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.volume}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.grade}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>가성비 TIP:</strong> 국산 ZIC X9, 킥스 PAO1은 수입 브랜드 대비 30~40% 저렴하면서도 API SP 인증을 받은 고품질 오일입니다. 일반 국산차에는 가성비 좋은 선택입니다.
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 수입차는 반드시 제조사 인증(MB-Approval, BMW LL, VW 502/504 등)을 받은 오일을 사용하세요</p>
          </div>
        </section>

        {/* ===== Section 5: 셀프 교체 방법 7단계 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">셀프 엔진오일 교체 방법 7단계</h2>
            <p className="text-sm text-gray-500 mb-6">소요 시간 약 30~40분, 준비물만 갖추면 초보자도 가능합니다</p>
            <div className="space-y-4">
              {selfChangeSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                    <div className="bg-red-50 rounded-lg px-3 py-2 text-xs text-red-700">
                      <strong>주의:</strong> {item.caution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>셀프 교체 절약 효과:</strong> 정비소 대비 공임비 2~5만 원을 절약할 수 있습니다. 연 2회 교체 시 연간 4~10만 원 절약. 단, 처음에는 공구 구매비(3~5만 원)가 추가로 필요합니다.
            </div>
          </div>
        </section>

        {/* ===== Section 6: 교체 시기 확인 방법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">교체 시기 확인 방법 4가지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkMethods.map((item) => (
                <div key={item.method} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-gray-900">{item.method}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">엔진오일 교체 자주 묻는 질문</h2>
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

        {/* ===== CTA ===== */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              내 차 유지비를 직접 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              엔진오일, 타이어, 보험료, 유류비까지 한눈에 비교합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                차종별 유지비 비교
              </Link>
              <Link
                href="/calculator/fuel-cost"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                유류비 계산기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
