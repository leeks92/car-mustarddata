import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '차박 준비물·추천 차종 가이드 - 2026년 차박 완벽 정리',
  description:
    '차박 필수 준비물 체크리스트, 추천 차종 TOP 10, 차박 명소, 안전 수칙, 초기 장비 비용까지 총정리했습니다. 팰리세이드·스타리아·카니발·레이 등 차종별 실내 길이와 평탄화 가능 여부를 비교합니다.',
  keywords: [
    '차박 준비물',
    '차박 추천 차종',
    '차박 매트리스',
    '차박 명소 추천',
    '차박 비용',
    '차박 안전 수칙',
    '차박 캠핑',
    '차박 텐트',
    '차박 장비',
    '차량 캠핑',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-camping` },
  openGraph: {
    title: '차박 준비물·추천 차종 가이드 - 2026년 차박 완벽 정리',
    description:
      '차박 필수 준비물, 추천 차종 TOP 10, 차박 명소, 안전 수칙, 비용 정보를 총정리했습니다.',
    url: `${BASE_URL}/guide/car-camping`,
    type: 'website',
  },
};

// 추천 차종 TOP 10
const recommendedCars = [
  {
    rank: 1,
    name: '현대 팰리세이드',
    type: 'SUV',
    interiorLength: '약 2,900mm (2·3열 폴딩)',
    flatPossible: '가능 (거의 완전 평탄화)',
    priceRange: '3,700~5,600만 원',
    note: '넓은 실내, 차박 인기 1위',
  },
  {
    rank: 2,
    name: '기아 카니발',
    type: '미니밴',
    interiorLength: '약 3,100mm (2·3열 폴딩)',
    flatPossible: '가능 (단차 있음)',
    priceRange: '3,400~5,200만 원',
    note: '최대 적재 공간, 가족 차박에 최적',
  },
  {
    rank: 3,
    name: '현대 스타리아',
    type: '미니밴',
    interiorLength: '약 3,000mm (2·3열 폴딩)',
    flatPossible: '가능 (평탄화 우수)',
    priceRange: '3,200~5,000만 원',
    note: '높은 천장, 성인 2명 취침 여유',
  },
  {
    rank: 4,
    name: '기아 쏘렌토',
    type: 'SUV',
    interiorLength: '약 2,600mm (2열 폴딩)',
    flatPossible: '가능 (약간 단차)',
    priceRange: '3,300~4,800만 원',
    note: '중형 SUV 중 넓은 편, 하이브리드 인기',
  },
  {
    rank: 5,
    name: '현대 투싼',
    type: 'SUV',
    interiorLength: '약 2,400mm (2열 폴딩)',
    flatPossible: '가능 (매트 필요)',
    priceRange: '2,700~4,000만 원',
    note: '합리적 가격, 1~2인 차박에 적합',
  },
  {
    rank: 6,
    name: '현대 산타페',
    type: 'SUV',
    interiorLength: '약 2,700mm (2·3열 폴딩)',
    flatPossible: '가능 (거의 완전 평탄화)',
    priceRange: '3,400~4,900만 원',
    note: '하이브리드 연비 우수, 넓은 트렁크',
  },
  {
    rank: 7,
    name: '기아 셀토스',
    type: '소형 SUV',
    interiorLength: '약 2,200mm (2열 폴딩)',
    flatPossible: '부분 가능 (단차 큼)',
    priceRange: '2,200~3,200만 원',
    note: '경제적 차박, 소형이지만 활용 가능',
  },
  {
    rank: 8,
    name: '기아 레이',
    type: '경차',
    interiorLength: '약 2,100mm (2열 폴딩)',
    flatPossible: '가능 (완전 평탄화)',
    priceRange: '1,500~1,900만 원',
    note: '경차 차박의 대명사, 유지비 최저',
  },
  {
    rank: 9,
    name: '현대 스타렉스',
    type: '밴',
    interiorLength: '약 3,200mm (풀 플랫)',
    flatPossible: '가능 (완전 평탄화)',
    priceRange: '2,800~4,000만 원 (중고)',
    note: '캠핑카 개조 베이스, 최대 공간',
  },
  {
    rank: 10,
    name: 'KG 코란도',
    type: 'SUV',
    interiorLength: '약 2,300mm (2열 폴딩)',
    flatPossible: '가능 (매트 필요)',
    priceRange: '2,500~3,500만 원',
    note: '가성비 SUV, 디젤 연비 우수',
  },
];

// 차박 필수 준비물 체크리스트
const essentialItems = [
  {
    category: '취침',
    item: '차박 매트리스',
    price: '5~15만 원',
    necessity: '필수',
    desc: '차종별 맞춤형 에어매트 또는 자충매트. 평탄화 보정 역할도 수행',
  },
  {
    category: '취침',
    item: '침낭 (또는 이불)',
    price: '3~10만 원',
    necessity: '필수',
    desc: '3계절용 기준. 동계 차박 시 영하 10도 이하 대응 침낭 별도 준비',
  },
  {
    category: '프라이버시',
    item: '차량용 커튼/햇빛가리개',
    price: '3~8만 원',
    necessity: '필수',
    desc: '흡착식 또는 자석식. 프라이버시 보호 및 차내 온도 조절',
  },
  {
    category: '전원',
    item: '대용량 보조배터리',
    price: '15~40만 원',
    necessity: '필수',
    desc: '500Wh 이상 권장. 스마트폰, 선풍기, 전기장판 등 전원 공급',
  },
  {
    category: '환기',
    item: '차량용 선풍기/환풍기',
    price: '2~5만 원',
    necessity: '필수',
    desc: 'USB 충전식 선풍기. 여름 필수, 결로 방지 목적으로 사계절 유용',
  },
  {
    category: '조명',
    item: 'LED 캠핑 랜턴',
    price: '1~5만 원',
    necessity: '필수',
    desc: '충전식 LED 랜턴. 밝기 조절 및 무드등 기능 포함 제품 추천',
  },
  {
    category: '편의',
    item: '차박 테이블',
    price: '2~5만 원',
    necessity: '권장',
    desc: '접이식 경량 테이블. 차량 뒤에 펼쳐 간단한 조리·식사 가능',
  },
  {
    category: '편의',
    item: '아이스박스/쿨러',
    price: '3~15만 원',
    necessity: '권장',
    desc: '음료·식재료 보관. 전동식(12V) 또는 아이스팩 활용형',
  },
  {
    category: '안전',
    item: '일산화탄소 감지기',
    price: '2~5만 원',
    necessity: '필수',
    desc: '밀폐 공간 취침 시 CO 중독 방지. 소형 배터리 타입 권장',
  },
  {
    category: '안전',
    item: '방충망/모기장',
    price: '1~3만 원',
    necessity: '권장',
    desc: '창문 개방 시 벌레 차단. 자석 부착식이 탈부착 편리',
  },
  {
    category: '편의',
    item: '차박 텐트 (트렁크 어닝)',
    price: '10~30만 원',
    necessity: '선택',
    desc: '차량 후면에 연결하는 확장 텐트. 거실 공간 확보 가능',
  },
  {
    category: '난방',
    item: '전기장판/온열매트',
    price: '3~8만 원',
    necessity: '권장 (동계)',
    desc: '12V 차량용 또는 보조배터리 연결형. 동계 차박 핵심 장비',
  },
];

// 차박 비용 총정리
const initialCosts = [
  { item: '차박 매트리스', min: 50000, max: 150000 },
  { item: '침낭', min: 30000, max: 100000 },
  { item: '차량용 커튼', min: 30000, max: 80000 },
  { item: '대용량 보조배터리 (500Wh)', min: 150000, max: 400000 },
  { item: '선풍기/환풍기', min: 20000, max: 50000 },
  { item: 'LED 랜턴', min: 10000, max: 50000 },
  { item: '일산화탄소 감지기', min: 20000, max: 50000 },
  { item: '기타 소품 (테이블, 쿨러 등)', min: 50000, max: 200000 },
];

const perTripCosts = [
  { item: '유류비 (왕복 200km 기준)', cost: '3~5만 원' },
  { item: '식재료/음료', cost: '2~5만 원' },
  { item: '유료 캠핑장 이용료', cost: '0~3만 원' },
  { item: '기타 (얼음, 장작 등)', cost: '0.5~2만 원' },
];

// 차박 명소 추천
const campingSpots = [
  {
    region: '수도권',
    spots: [
      { name: '양평 두물머리', feature: '강변 뷰, 일출 명소', parking: '무료' },
      { name: '가평 자라섬', feature: '섬 내 차박 가능, 잔디밭', parking: '유료 (1만 원)' },
      { name: '인천 을왕리 해변', feature: '서해 일몰, 해변 인접', parking: '유료 (5천 원)' },
    ],
  },
  {
    region: '강원도',
    spots: [
      { name: '양양 서피비치', feature: '서핑+차박, 바다 뷰', parking: '유료 (2만 원)' },
      { name: '속초 영금정', feature: '해돋이 명소, 시내 접근성', parking: '무료' },
      { name: '평창 대관령', feature: '별 관측 최적, 여름 시원', parking: '무료' },
    ],
  },
  {
    region: '충청도',
    spots: [
      { name: '태안 만리포 해수욕장', feature: '서해안 일몰, 넓은 주차장', parking: '유료 (5천 원)' },
      { name: '단양 도담삼봉', feature: '남한강 뷰, 야경 아름다움', parking: '무료' },
    ],
  },
  {
    region: '경상도',
    spots: [
      { name: '포항 호미곶', feature: '한반도 최동단, 일출 명소', parking: '무료' },
      { name: '경주 보문호', feature: '호수 뷰, 벚꽃·단풍 시즌 인기', parking: '무료' },
      { name: '남해 상주은모래비치', feature: '쪽빛 바다, 남해 대표 차박지', parking: '유료 (5천 원)' },
    ],
  },
  {
    region: '전라도',
    spots: [
      { name: '여수 웅천 친수공원', feature: '밤바다 야경, 시내 가까움', parking: '무료' },
      { name: '순천만 습지', feature: '생태 탐방, 일몰 갈대밭', parking: '유료 (3천 원)' },
    ],
  },
  {
    region: '제주도',
    spots: [
      { name: '함덕 서우봉 해변', feature: '에메랄드빛 바다, 가족 인기', parking: '유료 (3천 원)' },
      { name: '월정리 해변', feature: '카페거리 인접, 인생 사진 명소', parking: '유료 (5천 원)' },
    ],
  },
];

// 안전 수칙 8가지
const safetyRules = [
  {
    title: '반드시 환기하며 취침하세요',
    desc: '밀폐된 차량에서 취침하면 이산화탄소 농도가 급격히 올라갑니다. 창문을 최소 2~3cm 열어 두고, 방충망을 부착해 벌레 유입을 막으세요. 선풍기를 함께 사용하면 공기 순환 효과가 높아집니다.',
  },
  {
    title: '일산화탄소 감지기를 꼭 설치하세요',
    desc: '차량 내 연소기구(가스 버너, 숯 난로) 사용은 일산화탄소 중독의 원인이 됩니다. 차량 내부에서 화기 사용은 절대 금지하며, 만약을 대비해 CO 감지기를 반드시 비치하세요. 경보 시 즉시 창문을 열고 환기하세요.',
  },
  {
    title: '안전한 주차 위치를 선택하세요',
    desc: '경사진 곳, 하천 근처, 절벽 가장자리는 피하세요. 평탄하고 단단한 지면에 주차하고, 반드시 주차 브레이크를 채우세요. 폭우 예보 시 저지대·하천변 차박은 절대 금지입니다.',
  },
  {
    title: '엔진을 끄고 취침하세요',
    desc: '엔진을 켠 채 수면하면 배기가스가 차내로 유입되어 일산화탄소 중독 위험이 있습니다. 냉난방은 보조배터리+전기장판(동계) 또는 선풍기(하계)로 해결하세요.',
  },
  {
    title: '비상 연락처와 위치를 공유하세요',
    desc: '차박 장소의 정확한 주소를 가족이나 지인에게 미리 공유하세요. 외진 곳에서 차박할 때는 혼자보다 동행인과 함께하는 것을 권장합니다. 119, 112 등 긴급 연락처를 저장해 두세요.',
  },
  {
    title: '날씨와 기온을 반드시 확인하세요',
    desc: '출발 전 기상청 예보를 확인하고, 강풍·폭우·폭설 예보 시 차박을 자제하세요. 여름 폭염 시 차내 온도는 50도 이상까지 올라갈 수 있으며, 겨울 영하 10도 이하에서는 저체온증 위험이 있습니다.',
  },
  {
    title: '귀중품과 차량 보안에 신경 쓰세요',
    desc: '차박 중에도 문을 잠그고, 귀중품은 보이지 않는 곳에 보관하세요. 블랙박스 주차 모드를 활성화하고, 이동식 도어 잠금장치를 추가로 사용하면 더욱 안전합니다.',
  },
  {
    title: '쓰레기는 반드시 되가져 오세요',
    desc: '차박지의 자연환경을 보호하기 위해 모든 쓰레기를 수거해 가세요. 음식물 쓰레기는 야생 동물을 유인할 수 있으므로 밀폐 용기에 담아 차량 내부에 보관하세요. 깨끗한 차박 문화가 차박 명소를 지킵니다.',
  },
];

// FAQ 7개
const faqItems = [
  {
    q: '차박에 가장 좋은 차종은 무엇인가요?',
    a: '넓은 실내 공간과 완전 평탄화가 가능한 차종이 좋습니다. 국내에서는 팰리세이드, 카니발, 스타리아가 차박 인기 TOP 3입니다. 2인 기준 중형 SUV(쏘렌토, 산타페)도 충분하며, 1인 차박이라면 레이나 셀토스도 활용 가능합니다. 핵심은 2열 이후 시트를 접었을 때 평탄한 바닥이 되는지 여부입니다.',
  },
  {
    q: '차박 장비 초기 비용은 얼마나 드나요?',
    a: '필수 장비만 기준으로 약 30~60만 원이 필요합니다. 매트리스(5~15만 원), 커튼(3~8만 원), 보조배터리(15~40만 원), 선풍기(2~5만 원), 랜턴(1~5만 원), CO 감지기(2~5만 원)가 기본입니다. 여기에 차박 텐트, 전기장판 등을 추가하면 70~100만 원 정도까지 올라갈 수 있습니다.',
  },
  {
    q: '차박할 때 엔진을 켜놓고 자도 되나요?',
    a: '절대 안 됩니다. 엔진을 켠 채 수면하면 배기가스가 차내로 유입되어 일산화탄소 중독으로 사망할 수 있습니다. 실제로 매년 차박 중 CO 중독 사고가 발생합니다. 냉난방은 보조배터리+전기장판(동계) 또는 USB 선풍기(하계)로 해결해야 합니다.',
  },
  {
    q: '차박 보조배터리는 어느 정도 용량이 필요한가요?',
    a: '1박 2일 기준 최소 500Wh 이상을 권장합니다. 스마트폰 충전, LED 랜턴, 선풍기를 사용하면 하룻밤에 약 200~300Wh를 소모합니다. 전기장판(60W)을 8시간 사용하면 약 480Wh가 추가로 필요하므로, 동계 차박 시에는 1,000Wh 이상의 대용량 배터리가 필요합니다.',
  },
  {
    q: '차박은 어디서나 할 수 있나요?',
    a: '아닙니다. 차박이 금지된 장소가 있습니다. 국립공원 내 야간 주차, 해수욕장 특정 구역, 주거지역 주차장 등에서는 차박이 제한됩니다. 지자체별로 차박 금지 구역을 지정하는 추세이므로, 출발 전 해당 지역의 차박 허용 여부를 반드시 확인하세요. 오토캠핑장이나 차박 전용 캠핑장을 이용하면 가장 안전합니다.',
  },
  {
    q: '레이(경차)로도 차박이 가능한가요?',
    a: '네, 레이는 경차 중 차박에 가장 적합한 차종입니다. 2열 시트를 완전히 접으면 약 2,100mm의 평탄한 공간이 만들어져 성인 1명이 누울 수 있습니다. 높은 천장 덕분에 실내에서 앉아 있기도 편합니다. 다만 2인 차박은 다소 좁으므로 1인 차박에 최적화되어 있습니다. 경차 혜택(세금·통행료·유류비 절감)이 있어 유지비가 저렴한 것도 장점입니다.',
  },
  {
    q: '차박 시 결로(이슬) 문제는 어떻게 해결하나요?',
    a: '차박 시 체온과 호흡으로 인해 차량 유리에 결로가 생기는 것은 자연스러운 현상입니다. 해결법은 창문을 2~3cm 열어 환기하고, 제습제(클로즈업 제습 등)를 차내에 비치하며, USB 환풍기를 작동시키는 것입니다. 극세사 타월로 수시로 닦아주는 것도 도움이 됩니다. 방수 매트를 깔면 매트리스가 젖는 것을 방지할 수 있습니다.',
  },
];

export default function CarCampingGuidePage() {
  const totalMin = initialCosts.reduce((sum, c) => sum + c.min, 0);
  const totalMax = initialCosts.reduce((sum, c) => sum + c.max, 0);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '차박 준비물·추천 차종 가이드 - 2026년 차박 완벽 정리',
          description:
            '차박 필수 준비물, 추천 차종 TOP 10, 차박 명소, 안전 수칙, 비용 정보를 총정리했습니다.',
          url: `${BASE_URL}/guide/car-camping`,
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
            { '@type': 'ListItem', position: 2, name: '가이드', item: `${BASE_URL}/guide` },
            {
              '@type': 'ListItem',
              position: 3,
              name: '차박 가이드',
              item: `${BASE_URL}/guide/car-camping`,
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
            <li className="text-gray-900 font-medium">차박 준비물·추천 차종</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">차량 활용 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            차박 준비물·추천 차종 가이드
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            차박(차에서 하는 캠핑)은 텐트 설치 없이 차량 안에서 잠을 자는 간편한 캠핑 방식입니다.
            2026년 기준 차박에 적합한 추천 차종, 필수 준비물 체크리스트, 전국 차박 명소,
            안전 수칙, 예상 비용까지 빠짐없이 정리했습니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">초기 장비 비용</p>
              <p className="text-lg font-bold text-amber-600">30~60만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">1회 차박 비용</p>
              <p className="text-lg font-bold text-amber-600">5~15만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">추천 배터리 용량</p>
              <p className="text-lg font-bold text-amber-600">500Wh+</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">인기 차종 1위</p>
              <p className="text-lg font-bold text-amber-600">팰리세이드</p>
            </div>
          </div>
        </section>

        {/* ===== 1. 차박이란? 장점과 매력 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">1. 차박이란? 장점과 매력</h2>
          <p className="text-sm text-gray-500 mb-6">텐트 없이 차 안에서 하룻밤, 간편한 캠핑의 시작</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>차박(車泊)</strong>은 차량의 뒷좌석이나 트렁크 공간을 활용해 차 안에서 잠을 자는
              캠핑 방식입니다. 일본의 &quot;샤하쿠(車中泊)&quot;에서 유래한 이 문화는 2020년 이후 한국에서
              폭발적으로 성장하여, 2026년 현재 국내 차박 인구는 약 300만 명 이상으로 추정됩니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              특히 SUV와 미니밴 차주 사이에서 인기가 높으며, 1~2인 가구의 여가 활동으로도 각광받고 있습니다.
              반려동물과 함께하기 편하고, 이동이 자유롭다는 점이 기존 캠핑 대비 큰 장점입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '설치·철수 간편', desc: '텐트 설치 없이 시트를 접고 매트를 깔면 끝. 도착 후 10분 이내 취침 준비 완료.' },
              { title: '날씨에 강함', desc: '비, 바람, 추위에도 차량이 보호막 역할. 갑작스러운 날씨 변화에 유연하게 대응 가능.' },
              { title: '비용 절약', desc: '숙박비 없이 전국 어디서나 하룻밤. 1박 비용 5~15만 원(유류비+식비)으로 여행 가능.' },
              { title: '이동의 자유', desc: '장소가 마음에 안 들면 바로 이동 가능. 마감 시간, 체크아웃 시간에 구애받지 않음.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 2. 차박 추천 차종 TOP 10 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">2. 차박 추천 차종 TOP 10</h2>
          <p className="text-sm text-gray-500 mb-6">2026년 기준 실내 길이·평탄화·가격으로 비교한 차박 추천 차종</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-center font-semibold">순위</th>
                    <th className="px-3 py-3 text-left font-semibold">차종</th>
                    <th className="px-3 py-3 text-right font-semibold">실내 길이</th>
                    <th className="px-3 py-3 text-center font-semibold">평탄화</th>
                    <th className="px-3 py-3 text-right font-semibold">가격대</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recommendedCars.map((row) => (
                    <tr key={row.name} className="hover:bg-gray-50">
                      <td className="px-3 py-3 text-center">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                          row.rank <= 3 ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {row.rank}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="font-medium text-gray-900">{row.name}</span>
                        <span className="block text-[10px] text-gray-400">{row.type}</span>
                      </td>
                      <td className="px-3 py-3 text-right text-amber-600 font-medium">{row.interiorLength}</td>
                      <td className="px-3 py-3 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          row.flatPossible.startsWith('가능 (완전') || row.flatPossible.startsWith('가능 (거의')
                            ? 'bg-green-100 text-green-700'
                            : row.flatPossible.startsWith('가능')
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {row.flatPossible}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right text-sm text-gray-600">{row.priceRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>* 실내 길이는 2열(또는 2·3열) 시트 폴딩 후 트렁크 끝까지의 길이입니다.</p>
            <p>* 가격은 2026년 신차 기준이며, 스타렉스는 단종으로 중고차 시세입니다.</p>
          </div>

          <div className="mt-6 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 차박 차종 선택 시 가장 중요한 것은 &quot;시트 폴딩 후 평탄도&quot;입니다.
            단차가 크면 매트리스를 깔아도 허리가 아플 수 있습니다. 구매 전 반드시 시트를 접어보고
            실제 누워보는 것을 권장합니다. 팰리세이드와 레이는 거의 완벽한 평탄화가 가능해 차박 입문자에게 추천합니다.
          </div>
        </section>

        {/* ===== 3. 차박 필수 준비물 체크리스트 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">3. 차박 필수 준비물 체크리스트</h2>
          <p className="text-sm text-gray-500 mb-6">카테고리별 필수도와 예상 가격을 정리했습니다</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold">카테고리</th>
                    <th className="px-3 py-3 text-left font-semibold">항목</th>
                    <th className="px-3 py-3 text-right font-semibold">가격</th>
                    <th className="px-3 py-3 text-center font-semibold">필수도</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {essentialItems.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-3 py-3 text-gray-500 text-xs">{row.category}</td>
                      <td className="px-3 py-3">
                        <span className="font-medium text-gray-900">{row.item}</span>
                        <span className="block text-[10px] text-gray-400 mt-0.5">{row.desc}</span>
                      </td>
                      <td className="px-3 py-3 text-right text-amber-600 font-medium">{row.price}</td>
                      <td className="px-3 py-3 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          row.necessity === '필수'
                            ? 'bg-red-100 text-red-700'
                            : row.necessity === '권장'
                            ? 'bg-amber-100 text-amber-700'
                            : row.necessity.includes('동계')
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {row.necessity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 처음 차박을 시작한다면 &quot;필수&quot; 항목만 먼저 구입하세요 (약 30만 원).
            경험이 쌓이면서 필요한 장비를 하나씩 추가하는 것이 경제적입니다.
            중고 거래 플랫폼(번개장터, 당근마켓)에서 차박 장비를 저렴하게 구입할 수도 있습니다.
          </div>
        </section>

        {/* ===== 4. 차박 비용 총정리 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">4. 차박 비용 총정리</h2>
          <p className="text-sm text-gray-500 mb-6">초기 장비 투자와 매 차박 회당 비용을 계산했습니다</p>

          {/* 초기 비용 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">초기 장비 비용</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-right font-semibold">최소</th>
                    <th className="px-4 py-3 text-right font-semibold">최대</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {initialCosts.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{(row.min / 10000).toFixed(0)}만 원</td>
                      <td className="px-4 py-3 text-right text-gray-600">{(row.max / 10000).toFixed(0)}만 원</td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50 font-bold">
                    <td className="px-4 py-3 text-gray-900">합계</td>
                    <td className="px-4 py-3 text-right text-amber-600">{(totalMin / 10000).toFixed(0)}만 원</td>
                    <td className="px-4 py-3 text-right text-amber-600">{(totalMax / 10000).toFixed(0)}만 원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 회당 비용 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">1회 차박 비용 (1박 2일 기준)</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-right font-semibold">예상 비용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {perTripCosts.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-medium">{row.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50 font-bold">
                    <td className="px-4 py-3 text-gray-900">합계 (1회)</td>
                    <td className="px-4 py-3 text-right text-amber-600">약 5.5~15만 원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">숙박 대비 비용 비교</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">차박 (1박)</p>
                <p className="text-xl font-bold text-amber-600">5~15만 원</p>
                <p className="text-[10px] text-gray-400">장비비 별도</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">펜션/모텔 (1박)</p>
                <p className="text-xl font-bold text-gray-600">8~20만 원</p>
                <p className="text-[10px] text-gray-400">성수기 2배</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">호텔 (1박)</p>
                <p className="text-xl font-bold text-gray-600">15~40만 원</p>
                <p className="text-[10px] text-gray-400">성수기 2~3배</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * 차박은 장비 초기 비용이 있지만, 연 5회 이상 차박하면 펜션 대비 경제적입니다.
            </p>
          </div>
        </section>

        {/* ===== 5. 차박 명소 추천 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">5. 전국 차박 명소 추천</h2>
          <p className="text-sm text-gray-500 mb-6">지역별 인기 차박 스팟과 주차 요금 정보</p>
          {campingSpots.map((region) => (
            <div key={region.region} className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{region.region}</h3>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-amber-50 text-gray-900">
                        <th className="px-4 py-3 text-left font-semibold">장소</th>
                        <th className="px-4 py-3 text-left font-semibold">특징</th>
                        <th className="px-4 py-3 text-right font-semibold">주차비</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {region.spots.map((spot) => (
                        <tr key={spot.name} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{spot.name}</td>
                          <td className="px-4 py-3 text-gray-600">{spot.feature}</td>
                          <td className="px-4 py-3 text-right">
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              spot.parking === '무료' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {spot.parking}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-red-50 rounded-xl p-4 text-sm text-red-800">
            <strong>주의:</strong> 일부 지역은 야간 주차 또는 차박이 제한될 수 있습니다.
            출발 전 해당 지자체·관광지 공식 사이트에서 차박 허용 여부를 반드시 확인하세요.
            국립공원 내 야간 주차는 원칙적으로 금지되어 있습니다.
          </div>
        </section>

        {/* ===== 6. 차박 안전 수칙 8가지 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. 차박 안전 수칙 8가지</h2>
          <p className="text-gray-600 mb-6">
            즐거운 차박을 위해 반드시 지켜야 할 안전 수칙입니다.
            특히 환기와 일산화탄소 관련 사항은 생명과 직결되므로 꼭 숙지하세요.
          </p>
          <div className="space-y-4">
            {safetyRules.map((rule, index) => (
              <div
                key={rule.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  index < 2 ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{rule.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-red-50 rounded-xl p-4 text-sm text-red-800">
            <strong>경고:</strong> 차박 중 일산화탄소 중독 사고는 매년 발생하고 있습니다.
            차량 내부에서 연소기구(가스 버너, 숯 난로, 번개탄) 사용은 <strong>절대 금지</strong>이며,
            엔진을 켠 채 취침하는 것도 매우 위험합니다. 반드시 CO 감지기를 설치하고 환기를 유지하세요.
          </div>
        </section>

        {/* ===== 7. FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">차박 자주 묻는 질문</h2>
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

        {/* ===== 8. CTA ===== */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              차박 전 내 차 유지비도 확인해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              차종별 유지비, 유류비, 보험료까지 한눈에 비교할 수 있습니다
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
