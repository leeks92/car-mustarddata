import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 썬팅 가격·종류 가이드 - 2026년 브랜드별 비교',
  description:
    '자동차 썬팅 종류별 특징(염색·금속·세라믹·나노카본), 브랜드별 가격 비교(3M·솔라가드·레이노·루마·V-KOOL), 차종별 비용, 농도 선택 가이드, 법적 기준까지 총정리했습니다.',
  keywords: [
    '자동차 썬팅 가격',
    '썬팅 종류',
    '썬팅 브랜드 비교',
    '세라믹 썬팅',
    '3M 썬팅 가격',
    '루마 썬팅',
    '썬팅 농도 추천',
    '전면 썬팅 법규',
    '차량 썬팅 비용',
    '썬팅 시공',
  ],
  alternates: { canonical: `${BASE_URL}/guide/window-tinting` },
  openGraph: {
    title: '자동차 썬팅 가격·종류 가이드 - 2026년 브랜드별 비교',
    description:
      '썬팅 종류·브랜드별 가격 비교, 차종별 비용, 농도 선택 가이드, 법적 기준을 총정리했습니다.',
    url: `${BASE_URL}/guide/window-tinting`,
    type: 'website',
  },
};

// 썬팅 종류별 특징
const tintTypes = [
  {
    type: '염색 필름',
    uvBlock: '90~95%',
    heatBlock: '20~35%',
    priceRange: '10~20만 원',
    durability: '2~3년',
    pros: '가격이 저렴함',
    cons: '변색이 빠르고 열차단 낮음',
  },
  {
    type: '금속 필름',
    uvBlock: '95~99%',
    heatBlock: '40~55%',
    priceRange: '20~35만 원',
    durability: '5~7년',
    pros: '열차단 우수, 내구성 좋음',
    cons: '전파 간섭(GPS·하이패스·DMB)',
  },
  {
    type: '세라믹 필름',
    uvBlock: '99%+',
    heatBlock: '50~70%',
    priceRange: '35~60만 원',
    durability: '7~10년',
    pros: '최고 열차단, 전파 간섭 없음',
    cons: '가격이 높음',
  },
  {
    type: '나노카본 필름',
    uvBlock: '99%+',
    heatBlock: '45~65%',
    priceRange: '30~50만 원',
    durability: '7~10년',
    pros: '변색 적고 전파 간섭 없음',
    cons: '세라믹 대비 열차단 약간 낮음',
  },
];

// 브랜드별 가격 비교
const brandPrices = [
  {
    brand: '3M',
    origin: '미국',
    tier: '프리미엄',
    front: '15~30만 원',
    side: '15~25만 원',
    rear: '10~20만 원',
    total: '40~75만 원',
    popular: '크리스탈라인, FX-ST',
  },
  {
    brand: '솔라가드',
    origin: '미국',
    tier: '프리미엄',
    front: '15~28만 원',
    side: '13~23만 원',
    rear: '10~18만 원',
    total: '38~69만 원',
    popular: 'LX, 퀀텀',
  },
  {
    brand: '레이노',
    origin: '미국',
    tier: '프리미엄',
    front: '18~35만 원',
    side: '15~28만 원',
    rear: '12~22만 원',
    total: '45~85만 원',
    popular: '시리우스, 판텀 S9',
  },
  {
    brand: '루마',
    origin: '한국',
    tier: '프리미엄',
    front: '12~25만 원',
    side: '12~22만 원',
    rear: '8~16만 원',
    total: '32~63만 원',
    popular: '프리미엄 IR, 버텍스',
  },
  {
    brand: 'V-KOOL',
    origin: '미국',
    tier: '최고급',
    front: '20~40만 원',
    side: '18~30만 원',
    rear: '14~25만 원',
    total: '52~95만 원',
    popular: 'V-KOOL 70, V-KOOL 40',
  },
  {
    brand: '하니웰',
    origin: '미국',
    tier: '중고급',
    front: '10~22만 원',
    side: '10~18만 원',
    rear: '8~14만 원',
    total: '28~54만 원',
    popular: '나노세라믹, IR 시리즈',
  },
  {
    brand: '존슨',
    origin: '미국',
    tier: '중고급',
    front: '10~20만 원',
    side: '10~17만 원',
    rear: '7~13만 원',
    total: '27~50만 원',
    popular: '마라톤, 리제넥스',
  },
  {
    brand: '레이텍',
    origin: '한국',
    tier: '가성비',
    front: '8~15만 원',
    side: '8~13만 원',
    rear: '6~10만 원',
    total: '22~38만 원',
    popular: 'Q7 세라믹, 프리미엄',
  },
];

// 차종별 썬팅 비용
const costByCarType = [
  {
    carType: '경차',
    models: '모닝, 레이, 캐스퍼',
    economy: '15~25만 원',
    standard: '25~40만 원',
    premium: '40~60만 원',
    note: '유리 면적이 작아 비용이 적음',
  },
  {
    carType: '세단',
    models: '아반떼, 쏘나타, 그랜저',
    economy: '20~30만 원',
    standard: '30~50만 원',
    premium: '50~80만 원',
    note: '가장 보편적인 시공 차종',
  },
  {
    carType: 'SUV',
    models: '투싼, 쏘렌토, 팰리세이드',
    economy: '25~35만 원',
    standard: '35~55만 원',
    premium: '55~90만 원',
    note: '유리 면적이 넓어 비용 증가',
  },
  {
    carType: '대형 SUV',
    models: '팰리세이드, 카니발, GV80',
    economy: '30~40만 원',
    standard: '40~65만 원',
    premium: '65~100만 원',
    note: '3열 유리 추가, 면적 최대',
  },
];

// 농도(VLT) 추천
const densityGuide = [
  {
    position: '전면 유리',
    recommended: '50~70%',
    legal: '70% 이상 (필수)',
    reason: '시야 확보 최우선, 법적 기준 반드시 준수',
    popular: '투명 단열 필름 (크리스탈라인 등)',
  },
  {
    position: '운전석·조수석',
    recommended: '25~35%',
    legal: '규정 없음 (권장 35% 이상)',
    reason: '사이드미러 시야 확보와 프라이버시 균형',
    popular: '중간 농도 세라믹 필름',
  },
  {
    position: '뒷좌석 측면',
    recommended: '15~25%',
    legal: '규정 없음',
    reason: '프라이버시 보호와 열차단 중심',
    popular: '짙은 농도 세라믹·카본 필름',
  },
  {
    position: '후면 유리',
    recommended: '5~15%',
    legal: '규정 없음',
    reason: '최대 프라이버시, 짐칸 보호',
    popular: '가장 짙은 농도 선택',
  },
];

// 시공 업체 선택 기준
const selectionCriteria = [
  {
    title: '공인 시공점 여부',
    desc: '3M, 솔라가드, 레이노 등 본사 인증 공인 시공점인지 확인하세요. 인증 시공점은 정품 필름 사용이 보장되고, 본사 A/S 혜택을 받을 수 있습니다.',
    icon: '1',
  },
  {
    title: 'A/S 보증 기간',
    desc: '정품 필름은 5~10년 품질 보증을 제공합니다. 보증서를 반드시 받으세요. 변색, 기포, 박리 발생 시 무상 재시공이 가능한지 확인이 중요합니다.',
    icon: '2',
  },
  {
    title: '정품 필름 확인',
    desc: '시공 전 필름 포장지의 정품 라벨과 로트번호를 확인하세요. 짝퉁 필름은 열차단율이 30% 이하로 떨어지고, 1~2년 내 변색됩니다.',
    icon: '3',
  },
  {
    title: '시공 후기 및 경력',
    desc: '블로그, 네이버 플레이스 리뷰를 확인하세요. 경력 5년 이상, 리뷰 100개 이상인 업체가 안전합니다. 시공 사진 포트폴리오도 참고하세요.',
    icon: '4',
  },
  {
    title: '가격 비교 및 견적',
    desc: '최소 3곳 이상 견적을 비교하세요. 지나치게 저렴한 곳은 저급 필름을 사용할 가능성이 높습니다. 적정 가격대를 파악한 후 결정하세요.',
    icon: '5',
  },
];

// 관리 방법 및 주의사항
const maintenanceTips = [
  {
    title: '시공 후 3~5일 창문 올리지 않기',
    desc: '접착제가 완전히 경화되려면 여름에는 3일, 겨울에는 5~7일이 필요합니다. 이 기간 동안 창문을 내리면 필름이 밀리거나 기포가 생길 수 있습니다.',
  },
  {
    title: '시공 후 1주일 세차 금지',
    desc: '시공 직후에는 물기가 필름 안으로 침투할 수 있어 최소 1주일은 세차를 피하세요. 특히 고압 세차는 2주 후부터 가능합니다.',
  },
  {
    title: '실내 유리 닦을 때 부드러운 천 사용',
    desc: '거친 수건이나 신문지로 닦으면 필름에 스크래치가 생깁니다. 극세사 타월에 유리 세정제를 뿌려 가볍게 닦아주세요.',
  },
  {
    title: '흡착판 사용 자제',
    desc: '하이패스 단말기나 내비게이션의 흡착판을 필름 위에 부착하면 흡착 자국이 남을 수 있습니다. 거치대를 사용하세요.',
  },
  {
    title: '스티커 부착 주의',
    desc: '필름 위에 스티커를 붙이면 제거 시 필름이 손상될 수 있습니다. 부득이한 경우 전면 유리 필름이 없는 부분에 부착하세요.',
  },
  {
    title: '교체 시기 확인',
    desc: '염색 필름은 2~3년, 세라믹 필름은 7~10년이 일반적인 수명입니다. 기포, 변색, 박리가 발생하면 교체가 필요합니다. 기존 필름 제거 비용은 5~15만 원입니다.',
  },
];

// FAQ
const faqItems = [
  {
    q: '자동차 썬팅 비용은 평균 얼마인가요?',
    a: '차종과 필름 등급에 따라 다릅니다. 경차 기준 이코노미 15~25만 원, 프리미엄 40~60만 원이며, 세단은 30~80만 원, SUV는 35~90만 원 수준입니다. 전면 유리 단열 필름을 추가하면 15~35만 원이 추가됩니다.',
  },
  {
    q: '전면 유리 썬팅 법적 기준은 어떻게 되나요?',
    a: '도로교통법상 전면 유리의 가시광선투과율(VLT)은 70% 이상이어야 합니다. 이를 위반하면 과태료 부과 및 차량 검사에서 불합격 처리됩니다. 측면과 후면 유리는 별도 규정이 없지만, 안전을 위해 운전석 측면은 35% 이상을 권장합니다.',
  },
  {
    q: '세라믹 필름과 일반 필름의 차이는 무엇인가요?',
    a: '세라믹 필름은 나노 세라믹 입자를 사용해 열차단율이 50~70%로 일반 염색 필름(20~35%)보다 훨씬 높습니다. 전파 간섭이 없고, 변색이 거의 없으며, 수명도 7~10년으로 깁니다. 가격은 2~3배 비싸지만 장기적으로 경제적입니다.',
  },
  {
    q: '금속 필름은 하이패스에 영향을 주나요?',
    a: '네, 금속 필름은 전파를 반사하므로 하이패스, GPS, DMB, 라디오 수신에 영향을 줄 수 있습니다. 금속 필름을 선택할 경우 전면 유리는 비금속 필름으로 시공하거나, 하이패스 수신 부분만 필름을 제거하는 방법을 사용합니다.',
  },
  {
    q: '썬팅 시공 시간은 얼마나 걸리나요?',
    a: '전체 차량(전면·측면·후면) 시공은 보통 2~4시간이 소요됩니다. 전면 유리만 시공하면 30분~1시간 정도입니다. 기존 필름 제거가 필요한 경우 1~2시간이 추가됩니다.',
  },
  {
    q: '기존 썬팅을 제거하고 다시 시공하는 비용은?',
    a: '기존 필름 제거 비용은 차량 전체 기준 5~15만 원이며, 부위별로 2~5만 원입니다. 오래된 필름은 접착제가 강해져 제거가 어렵고 비용이 높아질 수 있습니다. 제거 후 새로 시공하면 총 비용이 신규 시공보다 10~20만 원 추가됩니다.',
  },
  {
    q: '출고 시 순정 썬팅이 있는데 추가 시공이 필요한가요?',
    a: '순정 썬팅(프라이버시 글라스)은 빛만 줄여주는 착색 유리로, 열차단 효과는 미미합니다(열차단율 10~20%). 여름철 실내 온도를 효과적으로 낮추려면 열차단 필름을 추가 시공하는 것이 좋습니다. 순정 썬팅 위에 시공해도 무방합니다.',
  },
];

export default function WindowTintingGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차 썬팅 가격·종류 가이드 - 2026년 브랜드별 비교',
          description:
            '자동차 썬팅 종류별 특징, 브랜드별 가격 비교, 차종별 비용, 농도 선택 가이드, 법적 기준을 총정리했습니다.',
          url: `${BASE_URL}/guide/window-tinting`,
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
            { '@type': 'ListItem', position: 3, name: '자동차 썬팅 가격·종류', item: `${BASE_URL}/guide/window-tinting` },
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
            <li className="text-gray-900 font-medium">자동차 썬팅 가격·종류</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">유지비 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            자동차 썬팅 가격·종류 가이드
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            염색·금속·세라믹·나노카본 필름의 특징과 가격을 비교하고,
            3M·솔라가드·레이노·루마 등 브랜드별 시공 비용을 정리했습니다.
            차종별 예상 비용과 농도 선택 기준, 법적 규정까지 안내합니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">경차 시공비</p>
              <p className="text-lg font-bold text-amber-600">15~60만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">세단 시공비</p>
              <p className="text-lg font-bold text-amber-600">20~80만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">SUV 시공비</p>
              <p className="text-lg font-bold text-amber-600">25~90만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">전면 법적 기준</p>
              <p className="text-lg font-bold text-amber-600">VLT 70%+</p>
            </div>
          </div>
        </section>

        {/* ===== 1. 썬팅 종류별 특징 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">1. 썬팅 종류별 특징 비교</h2>
          <p className="text-sm text-gray-500 mb-6">4가지 필름 종류의 성능과 가격을 한눈에 비교합니다</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">필름 종류</th>
                    <th className="px-4 py-3 text-right font-semibold">자외선 차단율</th>
                    <th className="px-4 py-3 text-right font-semibold">열차단율</th>
                    <th className="px-4 py-3 text-right font-semibold">가격대 (전체)</th>
                    <th className="px-4 py-3 text-right font-semibold">내구성</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tintTypes.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-right">{row.uvBlock}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.heatBlock}</td>
                      <td className="px-4 py-3 text-right">{row.priceRange}</td>
                      <td className="px-4 py-3 text-right">{row.durability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tintTypes.map((row) => (
              <div key={row.type} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{row.type}</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-green-600"><span className="font-medium">장점:</span> {row.pros}</p>
                  <p className="text-red-500"><span className="font-medium">단점:</span> {row.cons}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 비용 대비 효과를 따지면 세라믹 필름이 가장 경제적입니다. 초기 비용은 높지만 7~10년 사용할 수 있어 연간 비용으로 환산하면 염색 필름과 큰 차이가 없습니다. 열차단율도 2배 이상 높아 여름철 에어컨 사용량을 줄여 연료비도 절약됩니다.
          </div>
        </section>

        {/* ===== 2. 브랜드별 가격 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">2. 브랜드별 썬팅 가격 비교</h2>
          <p className="text-sm text-gray-500 mb-6">중형 세단 기준, 공인 시공점 가격 (2026년 기준)</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-3 py-3 text-left font-semibold">등급</th>
                    <th className="px-3 py-3 text-right font-semibold">전면</th>
                    <th className="px-3 py-3 text-right font-semibold">측면</th>
                    <th className="px-3 py-3 text-right font-semibold">후면</th>
                    <th className="px-3 py-3 text-right font-semibold">전체 합계</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {brandPrices.map((row) => (
                    <tr key={row.brand} className="hover:bg-gray-50">
                      <td className="px-3 py-3 font-medium text-gray-900">
                        {row.brand}
                        <span className="block text-[10px] text-gray-400">{row.origin}</span>
                      </td>
                      <td className="px-3 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          row.tier === '최고급' ? 'bg-purple-100 text-purple-700' :
                          row.tier === '프리미엄' ? 'bg-amber-100 text-amber-700' :
                          row.tier === '중고급' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right text-sm">{row.front}</td>
                      <td className="px-3 py-3 text-right text-sm">{row.side}</td>
                      <td className="px-3 py-3 text-right text-sm">{row.rear}</td>
                      <td className="px-3 py-3 text-right font-medium text-amber-600">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>* 가격은 중형 세단(쏘나타, K5급) 기준이며, 차종·지역·시공점에 따라 달라질 수 있습니다.</p>
            <p>* 인기 제품: {brandPrices.slice(0, 4).map((b) => `${b.brand} ${b.popular}`).join(' / ')}</p>
          </div>
        </section>

        {/* ===== 3. 차종별 썬팅 비용 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">3. 차종별 썬팅 시공 비용</h2>
          <p className="text-sm text-gray-500 mb-6">전면·측면·후면 전체 시공 기준, 필름 등급별 가격</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-left font-semibold">대표 모델</th>
                    <th className="px-4 py-3 text-right font-semibold">이코노미</th>
                    <th className="px-4 py-3 text-right font-semibold">스탠다드</th>
                    <th className="px-4 py-3 text-right font-semibold">프리미엄</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {costByCarType.map((row) => (
                    <tr key={row.carType} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.carType}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.models}</td>
                      <td className="px-4 py-3 text-right">{row.economy}</td>
                      <td className="px-4 py-3 text-right font-medium">{row.standard}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>* <strong>이코노미:</strong> 염색·저가 필름 / <strong>스탠다드:</strong> 중급 금속·카본 필름 / <strong>프리미엄:</strong> 세라믹·나노카본 필름</p>
            <p>* 전면 유리 단열 필름은 별도 추가 (15~35만 원)</p>
          </div>
        </section>

        {/* ===== 4. 농도 선택 가이드 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">4. 썬팅 농도(VLT) 선택 가이드</h2>
          <p className="text-sm text-gray-500 mb-6">가시광선투과율(VLT)이 낮을수록 진한 썬팅입니다</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">위치</th>
                    <th className="px-4 py-3 text-right font-semibold">추천 농도 (VLT)</th>
                    <th className="px-4 py-3 text-left font-semibold">법적 기준</th>
                    <th className="px-4 py-3 text-left font-semibold">선택 이유</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {densityGuide.map((row) => (
                    <tr key={row.position} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.position}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.recommended}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          row.legal.includes('필수') ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {row.legal}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 농도별 시각 비교 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { vlt: '70%', label: '거의 투명', bg: 'bg-gray-100', text: '전면 유리용' },
              { vlt: '35%', label: '약간 진함', bg: 'bg-gray-300', text: '운전석 측면' },
              { vlt: '15%', label: '많이 진함', bg: 'bg-gray-500', text: '뒷좌석 측면' },
              { vlt: '5%', label: '매우 진함', bg: 'bg-gray-800', text: '후면 유리' },
            ].map((item) => (
              <div key={item.vlt} className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
                <div className={`w-full h-12 rounded-lg ${item.bg} mb-2`} />
                <p className="text-sm font-bold text-gray-900">VLT {item.vlt}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-[10px] text-amber-600 mt-1">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 rounded-xl p-4 text-sm text-red-800">
            <strong>법적 주의:</strong> 전면 유리의 가시광선투과율(VLT)은 반드시 70% 이상이어야 합니다 (도로교통법 시행규칙 제29조). 위반 시 과태료가 부과되며, 정기검사에서 불합격 처리됩니다. 측면·후면에는 별도 규정이 없으나, 운전석 측면은 안전을 위해 35% 이상을 권장합니다.
          </div>
        </section>

        {/* ===== 5. 시공 업체 선택 기준 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. 시공 업체 선택 기준 5가지</h2>
          <div className="space-y-3">
            {selectionCriteria.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4">
                <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 공인 시공점은 각 브랜드 공식 홈페이지에서 조회할 수 있습니다. 3M(www.3mkorea.co.kr), 솔라가드(www.solargard.co.kr), 레이노(www.llumar.co.kr) 등에서 가까운 공인 시공점을 찾아보세요.
          </div>
        </section>

        {/* ===== 6. 관리 방법과 주의사항 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. 썬팅 관리 방법과 주의사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {maintenanceTips.map((tip, i) => (
              <div key={tip.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{i + 1}</span>
                  <h3 className="font-bold text-gray-900 text-sm">{tip.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자동차 썬팅 자주 묻는 질문</h2>
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
              내 차 관리 비용을 확인해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              신차 출고 후 체크리스트부터 유지비 절약 방법까지 한눈에 확인합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/new-car-checklist"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                신차 출고 체크리스트
              </Link>
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                차종별 유지비 비교
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
