import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '첫차 추천 가이드 2026 - 예산별·용도별 첫차 선택 완벽 정리',
  description:
    '2026년 첫차 추천 가이드입니다. 예산별·용도별 추천 차종, 신차 vs 중고차 비교, 추가 비용 총정리, 보험 가입 팁까지 첫차 구매에 필요한 모든 정보를 정리했습니다.',
  keywords: [
    '첫차 추천',
    '첫차 추천 2026',
    '첫차 뭐 살까',
    '예산별 첫차',
    '첫차 보험료',
    '첫차 유지비',
    '신차 중고차 비교',
    '첫차 경차',
    '첫차 구매 비용',
    '초보 첫차',
  ],
  alternates: { canonical: `${BASE_URL}/guide/first-car-recommendation` },
  openGraph: {
    title: '첫차 추천 가이드 2026 - 예산별·용도별 첫차 선택 완벽 정리',
    description:
      '예산별·용도별 첫차 추천, 신차 vs 중고차 비교, 추가 비용, 보험 팁까지 총정리.',
    url: `${BASE_URL}/guide/first-car-recommendation`,
    type: 'website',
  },
};

const considerations = [
  {
    emoji: '💰',
    title: '예산 (구매 + 부대비용)',
    desc: '차량 가격뿐 아니라 취등록세, 보험료, 블랙박스, 썬팅 등 부대비용까지 포함해야 합니다. 차량 가격의 약 10~15%를 추가 비용으로 잡으세요. 2,000만 원 차량 기준 약 200~300만 원의 추가 비용이 발생합니다.',
  },
  {
    emoji: '🚗',
    title: '주요 용도',
    desc: '출퇴근용인지, 가족 이동용인지, 주말 레저용인지에 따라 적합한 차종이 달라집니다. 출퇴근 위주라면 연비 좋은 소형차, 가족용이라면 넓은 SUV, 레저용이라면 4WD SUV를 고려하세요.',
  },
  {
    emoji: '🛡️',
    title: '보험료',
    desc: '20대 초보운전자의 보험료는 연 120~200만 원으로, 경력 운전자 대비 약 2배 비쌉니다. 차량 가격이 높을수록 보험료도 올라가므로, 첫차는 보험료가 저렴한 차종을 선택하는 것이 유리합니다.',
  },
  {
    emoji: '🔧',
    title: '유지비 (연료비 + 정비비)',
    desc: '월 유지비는 연료비, 보험료, 자동차세, 정비비, 주차비를 포함해 월 30~60만 원입니다. 경차는 월 25~35만 원, 중형차는 월 45~65만 원 수준이므로 소득 대비 부담을 계산하세요.',
  },
  {
    emoji: '📉',
    title: '감가상각',
    desc: '신차는 출고 후 1년간 약 20~25%의 감가가 발생합니다. 3년 후에는 신차 가격의 약 55~65% 수준으로 떨어집니다. 첫차에서 접촉 사고가 잦은 점을 고려하면 1~3년 된 인증중고차도 현명한 선택입니다.',
  },
];

const budgetRecommendations = [
  {
    range: '1,000만 원 이하',
    cars: [
      { name: '기아 모닝 (중고)', price: '500~900만 원', fuel: '15.7km/L', monthly: '약 25만 원', note: '경차 혜택, 보험료 저렴' },
      { name: '현대 아반떼 (중고)', price: '700~1,000만 원', fuel: '14.3km/L', monthly: '약 35만 원', note: '넓은 실내, 부품 저렴' },
      { name: '기아 K3 (중고)', price: '700~1,000만 원', fuel: '14.5km/L', monthly: '약 34만 원', note: '디자인 우수, 옵션 다양' },
      { name: '쉐보레 스파크 (중고)', price: '400~700만 원', fuel: '15.0km/L', monthly: '약 24만 원', note: '가장 저렴, 경차 혜택' },
    ],
  },
  {
    range: '1,000~2,000만 원',
    cars: [
      { name: '기아 모닝 (신차)', price: '1,415~1,850만 원', fuel: '15.7km/L', monthly: '약 27만 원', note: '경차 혜택 최대, 취등록세 면제' },
      { name: '기아 레이 (신차)', price: '1,520~1,930만 원', fuel: '13.0km/L', monthly: '약 30만 원', note: '넓은 실내 공간, 캠핑 가능' },
      { name: '현대 아반떼 (신차)', price: '1,842~2,637만 원', fuel: '14.3km/L', monthly: '약 38만 원', note: '가성비 준중형 대표' },
      { name: '현대 캐스퍼 (신차)', price: '1,385~2,035만 원', fuel: '14.3km/L', monthly: '약 28만 원', note: 'SUV형 경차, 실용적' },
    ],
  },
  {
    range: '2,000~3,000만 원',
    cars: [
      { name: '기아 K3 (신차)', price: '2,048~2,594만 원', fuel: '14.5km/L', monthly: '약 40만 원', note: '스포티 디자인, 첨단 안전사양' },
      { name: '현대 투싼 (중고)', price: '2,000~2,800만 원', fuel: '13.5km/L', monthly: '약 48만 원', note: '패밀리 SUV, 넓은 공간' },
      { name: '현대 아반떼 HEV', price: '2,297~2,805만 원', fuel: '20.1km/L', monthly: '약 33만 원', note: '하이브리드 연비 우수' },
      { name: '기아 니로 HEV', price: '2,771~3,181만 원', fuel: '20.8km/L', monthly: '약 35만 원', note: '하이브리드 SUV, 연비 최고' },
    ],
  },
  {
    range: '3,000만 원 이상',
    cars: [
      { name: '현대 쏘나타 (신차)', price: '3,029~3,779만 원', fuel: '13.8km/L', monthly: '약 50만 원', note: '중형 세단 대표, 넓은 공간' },
      { name: '기아 K5 (신차)', price: '2,857~3,576만 원', fuel: '13.6km/L', monthly: '약 48만 원', note: '스포티 중형, 옵션 풍부' },
      { name: '기아 쏘렌토 (신차)', price: '3,393~4,340만 원', fuel: '12.6km/L', monthly: '약 58만 원', note: '7인승 SUV, 가족용 최적' },
      { name: '현대 아이오닉5 (신차)', price: '4,695~5,270만 원', fuel: '5.1km/kWh', monthly: '약 35만 원', note: '전기차, 보조금 적용 시 3천만 원대' },
    ],
  },
];

const purposeRecommendations = [
  {
    purpose: '출퇴근용 (도심 주행)',
    priority: '연비, 주차 편의, 유지비',
    cars: [
      { name: '기아 모닝', type: '경차', reason: '경차 혜택 + 주차 편리 + 유지비 최저' },
      { name: '현대 캐스퍼', type: '경형 SUV', reason: '경차 혜택 + 높은 시야 + 실용성' },
      { name: '현대 아반떼 HEV', type: '준중형 하이브리드', reason: '도심 연비 20km/L 이상' },
      { name: '기아 니로 HEV', type: 'SUV 하이브리드', reason: '도심 연비 최고 + SUV 실용성' },
    ],
  },
  {
    purpose: '가족용 (4인 이상)',
    priority: '안전성, 공간, 편의사양',
    cars: [
      { name: '현대 투싼', type: '준중형 SUV', reason: '넉넉한 공간 + 첨단 안전사양' },
      { name: '기아 쏘렌토', type: '중형 SUV', reason: '7인승 옵션 + 넓은 트렁크' },
      { name: '현대 쏘나타', type: '중형 세단', reason: '뒷좌석 넓음 + 승차감 우수' },
      { name: '기아 카니발', type: '미니밴', reason: '최대 9인승 + 슬라이딩 도어' },
    ],
  },
  {
    purpose: '장거리 출장·여행',
    priority: '연비, 승차감, 안전사양',
    cars: [
      { name: '현대 쏘나타 HEV', type: '중형 하이브리드', reason: '고속 연비 우수 + 승차감' },
      { name: '기아 K5', type: '중형 세단', reason: 'HDA2 고속도로 자율주행 보조' },
      { name: '현대 아이오닉5', type: '전기차', reason: '초고속 충전 + 장거리 주행' },
      { name: '기아 쏘렌토 HEV', type: 'SUV 하이브리드', reason: '연비 + 공간 + 4WD' },
    ],
  },
  {
    purpose: '레저·캠핑',
    priority: '4WD, 적재 공간, 지상고',
    cars: [
      { name: '기아 레이', type: '경차 밴', reason: '차박 최적화 + 경차 혜택 + 평탄화' },
      { name: '현대 투싼', type: '준중형 SUV', reason: '4WD + 루프랙 장착 가능' },
      { name: '기아 쏘렌토', type: '중형 SUV', reason: '넓은 트렁크 + 4WD + 견인력' },
      { name: '쌍용 토레스', type: '준중형 SUV', reason: '넓은 적재 공간 + 험로 주행' },
    ],
  },
];

const newVsUsedComparison = [
  { item: '구매 가격 (아반떼 기준)', newCar: '1,842~2,637만 원', usedCar: '1,200~1,800만 원 (1~3년)' },
  { item: '취등록세', newCar: '약 130~185만 원 (7%)', usedCar: '약 84~126만 원 (7%)' },
  { item: '보증 기간', newCar: '5년 / 10만km', usedCar: '인증중고: 1~2년 / 제조사 잔여 보증' },
  { item: '1년 후 감가상각', newCar: '약 20~25% 하락', usedCar: '약 8~12% 하락' },
  { item: '3년 후 잔존가치', newCar: '신차가의 약 58%', usedCar: '구매가의 약 72%' },
  { item: '보험료 (20대 초보)', newCar: '약 150~200만 원/년', usedCar: '약 100~150만 원/년' },
  { item: '정비 비용', newCar: '무상 정기점검 (2~3년)', usedCar: '구매 즉시 정비 필요 가능' },
  { item: '옵션 선택', newCar: '원하는 옵션 자유 선택', usedCar: '기존 옵션 그대로 인수' },
  { item: '심리적 만족도', newCar: '높음 (새 차 느낌)', usedCar: '보통 (사고 걱정 적음)' },
];

const additionalCosts = [
  { item: '취등록세', amount: '차량가의 7% (경차 면제)', example: '2,000만 원 차량 → 약 140만 원', required: true },
  { item: '자동차보험', amount: '연 120~200만 원 (20대 초보)', example: '종합보험 + 자차 기준', required: true },
  { item: '자동차세', amount: '연 10~52만 원', example: '경차 10만 원 / 2,000cc 52만 원', required: true },
  { item: '공채', amount: '차량가의 5~12%', example: '할인 매입 시 실부담 약 2~5%', required: true },
  { item: '번호판 대행료', amount: '약 3~5만 원', example: '딜러 대행 기준', required: false },
  { item: '블랙박스', amount: '15~40만 원', example: '2채널 FHD 기준 (설치비 포함)', required: false },
  { item: '썬팅', amount: '15~50만 원', example: '국산 필름 15~25만 원 / 수입 필름 30~50만 원', required: false },
  { item: '하이패스 단말기', amount: '3~5만 원', example: '유선형 기준, 무선 6~10만 원', required: false },
  { item: '방염 코팅 (유리막)', amount: '20~80만 원', example: '국산 코팅 20~40만 원 / 수입 40~80만 원', required: false },
  { item: '바닥 매트', amount: '5~15만 원', example: '코일매트 또는 트레이매트', required: false },
];

const insuranceTips = [
  {
    title: '다이렉트 보험으로 가입하기',
    desc: '전화·인터넷 다이렉트 보험은 설계사 수수료가 없어 대면 가입 대비 약 15~20% 저렴합니다. 삼성화재, 현대해상, KB손해보험, DB손해보험 등 주요 보험사 다이렉트 채널을 비교하세요.',
  },
  {
    title: '블랙박스 할인 활용하기',
    desc: '블랙박스를 설치하면 보험료 2~5% 할인을 받을 수 있습니다. 15만 원짜리 블랙박스로 연간 3~10만 원을 절약할 수 있어 설치가 거의 필수입니다.',
  },
  {
    title: '마일리지 특약 가입하기',
    desc: '연간 주행거리가 7,000km 이하라면 마일리지 특약으로 보험료를 최대 30%까지 할인받을 수 있습니다. 주말에만 운전하거나 대중교통을 병행하는 경우 특히 유리합니다.',
  },
  {
    title: '운전자 범위 최소화하기',
    desc: '운전자 범위를 "1인 한정"으로 설정하면 "누구나 운전" 대비 약 10~15% 저렴합니다. 본인만 운전한다면 반드시 1인 한정으로 가입하세요.',
  },
  {
    title: '자기차량손해 면책금 조정하기',
    desc: '자차 보험의 자기부담금(면책금)을 20만 원에서 50만 원으로 올리면 보험료가 약 5~8% 저렴해집니다. 경미한 사고는 자비 처리하고 큰 사고만 보험 처리하는 전략입니다.',
  },
];

const faqs = [
  {
    q: '첫차로 경차가 좋은가요?',
    a: '경차는 첫차로 매우 좋은 선택입니다. 취등록세 면제(최대 75만 원), 자동차세 연 10만 원, 고속도로 통행료 50% 할인, 유류세 환급(연 최대 30만 원) 등 혜택이 많습니다. 보험료도 저렴하고 주차도 편리합니다. 다만 장거리 주행이 잦거나 4인 이상 탑승이 많다면 준중형 이상을 고려하세요.',
  },
  {
    q: '첫차는 신차가 좋은가요, 중고차가 좋은가요?',
    a: '초보 운전자는 접촉 사고 가능성이 높으므로 1~3년 된 인증중고차가 합리적입니다. 신차 대비 20~30% 저렴하게 구매할 수 있고, 사고가 나도 감가 부담이 적습니다. 다만 차량 상태 확인이 어렵다면 제조사 인증중고차(현대 Certified, 기아 Certified)를 이용하면 1~2년 보증을 받을 수 있습니다.',
  },
  {
    q: '첫차 보험료는 대략 얼마인가요?',
    a: '20대 초보운전자(면허 취득 1년 이내)의 종합보험료는 연 약 150~200만 원입니다. 30대 초보는 약 120~160만 원, 경력 운전자 대비 약 1.5~2배 수준입니다. 경차(모닝)는 약 100~140만 원, 준중형(아반떼)은 약 130~180만 원, 중형(쏘나타)은 약 160~220만 원입니다.',
  },
  {
    q: '첫차 유지비는 월 얼마나 들까요?',
    a: '경차 기준 월 약 25~35만 원(보험료 월납 포함), 준중형 기준 월 약 35~50만 원, 중형 기준 월 약 50~65만 원입니다. 유류비(월 8~15만 원), 보험료(월 10~17만 원), 자동차세(월 1~4만 원), 주차비(월 5~10만 원), 정비비(월 2~5만 원)가 포함됩니다.',
  },
  {
    q: '하이브리드가 첫차로 괜찮은가요?',
    a: '하이브리드는 연비가 우수해(리터당 18~21km) 유류비를 크게 절약할 수 있습니다. 다만 차량 가격이 동급 가솔린 대비 200~400만 원 높고, 보험료도 약간 비쌉니다. 연간 15,000km 이상 주행한다면 3~4년 내 가격 차이를 회수할 수 있어 장기적으로 유리합니다.',
  },
  {
    q: '전기차를 첫차로 사도 되나요?',
    a: '전기차는 충전 인프라와 주행 패턴을 고려해야 합니다. 자택이나 직장에 충전기가 있고 일 주행거리가 200km 이내라면 좋은 선택입니다. 보조금(국비+지자체) 적용 시 아이오닉5를 3천만 원대에 구매할 수 있고, 충전비가 유류비의 30~40% 수준이라 유지비가 매우 저렴합니다.',
  },
  {
    q: '첫차로 SUV를 사도 되나요?',
    a: '가능하지만, 초보에게는 차체 감각이 익숙해질 때까지 소형~준중형 세단이 유리합니다. SUV는 차체가 크고 사각지대가 넓어 주차와 골목길 운전이 어렵습니다. 꼭 SUV를 원한다면 캐스퍼(경형 SUV)나 투싼(준중형 SUV)처럼 비교적 작은 SUV부터 시작하는 것을 추천합니다.',
  },
  {
    q: '수입차를 첫차로 사도 될까요?',
    a: '추천하지 않습니다. 수입차는 부품비와 정비비가 국산차의 2~3배로, 접촉 사고가 잦은 초보 시기에 수리비 부담이 큽니다. 보험료도 국산차 대비 30~50% 비쌉니다. 예를 들어 벤츠 C클래스의 범퍼 수리비는 약 80~150만 원으로, 아반떼(약 20~40만 원)의 3~4배입니다.',
  },
];

export default function FirstCarRecommendationPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '첫차 추천 가이드 2026 - 예산별·용도별 첫차 선택 완벽 정리',
          description:
            '예산별·용도별 첫차 추천, 신차 vs 중고차 비교, 추가 비용, 보험 팁까지 총정리.',
          url: `${BASE_URL}/guide/first-car-recommendation`,
          publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((item) => ({
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
            { '@type': 'ListItem', position: 2, name: '가이드', item: `${BASE_URL}/guide` },
            { '@type': 'ListItem', position: 3, name: '첫차 추천 가이드', item: `${BASE_URL}/guide/first-car-recommendation` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href="/guide/new-car-buying" className="hover:text-amber-600">가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">첫차 추천 가이드 2026</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            첫차 추천 가이드 2026
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            첫 차를 사는 것은 설레는 일이지만, 잘못 선택하면 몇 년간 후회할 수 있습니다.
            예산, 용도, 보험료, 유지비, 감가상각까지 꼼꼼히 따져서
            <strong> 나에게 딱 맞는 첫차</strong>를 찾아보세요.
          </p>
          <div className="mt-6 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="text-sm text-amber-800 font-semibold mb-1">2026년 첫차 트렌드</p>
            <p className="text-sm text-gray-700">
              하이브리드 차량의 인기가 급상승하면서, 아반떼 HEV와 니로 HEV가 첫차로 주목받고 있습니다.
              전기차 보조금이 유지되면서 아이오닉5도 보조금 적용 시 3천만 원대로 구매 가능합니다.
            </p>
          </div>
        </section>

        {/* 1. 첫차 선택 시 고려 사항 5가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            첫차 선택 시 고려 사항 5가지
          </h2>
          <div className="space-y-4">
            {considerations.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      <span className="mr-2">{item.emoji}</span>{item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 예산별 첫차 추천 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            예산별 첫차 추천
          </h2>
          <div className="space-y-8">
            {budgetRecommendations.map((budget) => (
              <div key={budget.range}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {budget.range}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">차종</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">가격대</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">연비</th>
                        <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">월 유지비</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 hidden sm:table-cell">특징</th>
                      </tr>
                    </thead>
                    <tbody>
                      {budget.cars.map((car, i) => (
                        <tr
                          key={car.name}
                          className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{car.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{car.price}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{car.fuel}</td>
                          <td className="px-4 py-3 text-sm text-right text-amber-600 font-semibold">{car.monthly}</td>
                          <td className="px-4 py-3 text-sm text-gray-500 hidden sm:table-cell">{car.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * 월 유지비는 연 12,000km 주행, 보험료(30대 기준), 자동차세, 유류비 포함 추정치입니다.
          </p>
        </section>

        {/* 3. 용도별 추천 차종 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            용도별 추천 차종
          </h2>
          <div className="space-y-8">
            {purposeRecommendations.map((item) => (
              <div key={item.purpose}>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.purpose}</h3>
                <p className="text-sm text-gray-500 mb-3">선택 우선순위: {item.priority}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">차종</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">유형</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">추천 이유</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.cars.map((car, i) => (
                        <tr
                          key={car.name}
                          className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{car.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{car.type}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{car.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 신차 vs 인증중고차 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            신차 vs 인증중고차 비교
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">비교 항목</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">신차</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">인증중고차 (1~3년)</th>
                </tr>
              </thead>
              <tbody>
                {newVsUsedComparison.map((row, i) => (
                  <tr
                    key={row.item}
                    className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.item}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.newCar}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.usedCar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="text-sm text-amber-800 font-semibold mb-1">초보운전자에게는 인증중고차 추천</p>
            <p className="text-sm text-gray-700">
              접촉 사고 가능성을 고려하면 1~3년 된 인증중고차가 경제적입니다.
              현대 Certified, 기아 Certified 등 제조사 인증중고차는 200여 항목 점검과 1~2년 보증을 제공합니다.
            </p>
          </div>
        </section>

        {/* 5. 첫차 구매 시 추가 비용 총정리 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            첫차 구매 시 추가 비용 총정리
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">항목</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">비용</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 hidden sm:table-cell">예시</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-900">필수</th>
                </tr>
              </thead>
              <tbody>
                {additionalCosts.map((row, i) => (
                  <tr
                    key={row.item}
                    className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.item}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.amount}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 hidden sm:table-cell">{row.example}</td>
                    <td className="px-4 py-3 text-sm text-center">
                      {row.required ? (
                        <span className="text-red-500 font-semibold">필수</span>
                      ) : (
                        <span className="text-gray-400">선택</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="text-sm font-semibold text-gray-900 mb-1">필수 비용 합계 (2,000만 원 차량)</p>
              <p className="text-amber-600 font-bold text-xl">약 290~380만 원</p>
              <p className="text-xs text-gray-500 mt-1">취등록세 + 보험 + 자동차세 + 공채</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="text-sm font-semibold text-gray-900 mb-1">선택 비용 합계 (풀옵션)</p>
              <p className="text-amber-600 font-bold text-xl">약 60~190만 원</p>
              <p className="text-xs text-gray-500 mt-1">블랙박스 + 썬팅 + 하이패스 + 코팅 + 매트</p>
            </div>
          </div>
        </section>

        {/* 6. 첫차 보험 가입 팁 5가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            첫차 보험 가입 팁 5가지
          </h2>
          <div className="space-y-4">
            {insuranceTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="text-sm text-amber-800 font-semibold mb-1">보험료 절약 총 효과</p>
            <p className="text-sm text-gray-700">
              위 5가지 팁을 모두 적용하면 대면 가입 대비 연간 약 30~50만 원을 절약할 수 있습니다.
              첫해 보험료가 200만 원이라면 약 140~160만 원까지 낮출 수 있습니다.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/guide/car-insurance"
              className="text-amber-600 font-semibold text-sm hover:text-amber-700"
            >
              자동차보험료 비교 가이드 보기 →
            </Link>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
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

        {/* 8. CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              첫차 비용을 미리 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              취등록세, 할부금, 보험료, 유류비 등 첫차 관련 비용을 한번에 계산합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/registration-tax"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                취등록세 계산하기
              </Link>
              <Link
                href="/calculator/installment"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                할부금 계산하기
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">관련 가이드</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/guide/beginner-driver"
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-2xl mb-2">🔰</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">초보운전 필수 가이드</div>
                <div className="text-xs text-gray-500">운전 요령·주차·사고 대처</div>
              </Link>
              <Link
                href="/guide/compact-car-benefits"
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-2xl mb-2">🚙</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">경차 혜택 총정리</div>
                <div className="text-xs text-gray-500">세금·통행료·유류세 혜택</div>
              </Link>
              <Link
                href="/guide/car-insurance"
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-2xl mb-2">🛡️</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">자동차보험 비교 가이드</div>
                <div className="text-xs text-gray-500">보험사별 비교·할인 팁</div>
              </Link>
              <Link
                href="/guide/used-car-buying-checklist"
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-2xl mb-2">📋</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">중고차 구매 체크리스트</div>
                <div className="text-xs text-gray-500">차량 점검·서류·가격 협상</div>
              </Link>
              <Link
                href="/guide/new-car-buying"
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-2xl mb-2">🚗</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">신차 구매 가이드</div>
                <div className="text-xs text-gray-500">구매 비용·절차 총정리</div>
              </Link>
              <Link
                href="/calculator/depreciation"
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-2xl mb-2">📉</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">감가상각 계산기</div>
                <div className="text-xs text-gray-500">내 차 예상 시세 확인</div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
