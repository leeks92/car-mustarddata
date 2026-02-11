export const BASE_URL = 'https://car.mustarddata.com';

export const CALCULATOR_PAGES = [
  {
    path: '/calculator/car-tax',
    title: '자동차세 계산기',
    description:
      '배기량과 차령을 입력하면 자동차세를 자동으로 계산합니다. 연납 할인, 분할 납부 금액도 확인하세요.',
    emoji: '🏷️',
    keywords: ['자동차세', '자동차세 계산', '자동차세 연납'],
  },
  {
    path: '/calculator/registration-tax',
    title: '취등록세 계산기',
    description:
      '신차·중고차 구매 시 취득세와 등록비용을 계산합니다. 경차·전기차·하이브리드 감면도 반영됩니다.',
    emoji: '📋',
    keywords: ['취등록세', '자동차 취득세', '신차 등록비용'],
  },
  {
    path: '/calculator/installment',
    title: '할부금 계산기',
    description:
      '자동차 할부 구매 시 월 납입금과 총 이자를 계산합니다. 원리금균등·원금균등 상환 비교가 가능합니다.',
    emoji: '💳',
    keywords: ['자동차 할부', '할부 이자', '월 납입금 계산'],
  },
  {
    path: '/calculator/fuel-cost',
    title: '유류비 계산기',
    description:
      '주행 거리와 연비를 입력하면 예상 유류비를 계산합니다. 휘발유·경유·LPG 유종별 비교가 가능합니다.',
    emoji: '⛽',
    keywords: ['유류비 계산', '주유비 계산', '연비 계산'],
  },
  {
    path: '/calculator/depreciation',
    title: '감가상각 계산기',
    description:
      '차량 가격, 연식, 주행거리를 기반으로 현재 예상 시세를 계산합니다.',
    emoji: '📉',
    keywords: ['자동차 감가상각', '중고차 시세', '차량 잔존가치'],
  },
  {
    path: '/calculator/penalty',
    title: '과태료·범칙금 조회',
    description:
      '교통 위반 유형별 과태료, 범칙금, 벌점을 한눈에 확인합니다. 2026년 도로교통법 기준.',
    emoji: '🚨',
    keywords: ['교통 과태료', '범칙금', '벌점 조회'],
  },
];

export const GUIDE_PAGES = [
  {
    path: '/guide/new-car-buying',
    title: '신차 구매 가이드',
    description: '신차 구매 시 필요한 비용과 절차를 총정리했습니다.',
    emoji: '🚗',
  },
  {
    path: '/guide/ev-subsidy',
    title: '전기차 보조금 가이드',
    description: '2026년 전기차 국고보조금·지자체 보조금 정보를 정리했습니다.',
    emoji: '🔋',
  },
  {
    path: '/guide/car-tax-prepay',
    title: '자동차세 연납 가이드',
    description: '자동차세 연납 할인율, 신청 방법, 절약 금액을 총정리했습니다.',
    emoji: '💸',
  },
  {
    path: '/guide/maintenance-cost',
    title: '자동차 유지비 가이드',
    description: '2026년 차종별 월간 유지비 비교와 절약 방법을 정리했습니다.',
    emoji: '🔧',
  },
  {
    path: '/guide/cash-vs-loan-vs-lease',
    title: '현금 vs 할부 vs 리스',
    description: '3가지 자동차 구매 방식의 장단점과 총비용을 비교합니다.',
    emoji: '💰',
  },
  {
    path: '/guide/car-insurance',
    title: '자동차보험료 비교 가이드',
    description: '보험사별 보험료 비교, 다이렉트 할인, 특약 선택 방법을 정리했습니다.',
    emoji: '🛡️',
  },
  {
    path: '/guide/lease-vs-rent',
    title: '리스 vs 장기렌트 비교',
    description: '리스와 장기렌트의 비용, 세금 혜택, 장단점을 비교합니다.',
    emoji: '🔄',
  },
  {
    path: '/guide/car-tax-refund',
    title: '자동차세 환급 방법',
    description: '폐차·양도·말소 시 자동차세 환급 대상과 신청 방법을 정리했습니다.',
    emoji: '💵',
  },
  {
    path: '/guide/new-car-checklist',
    title: '신차 출고 후 체크리스트',
    description: '신차 출고 후 보험, 등록, 길들이기 등 필수 점검 항목을 정리했습니다.',
    emoji: '✅',
  },
  {
    path: '/guide/insurance-by-car',
    title: '차종별 보험료 비교',
    description: '경차·중형·SUV·전기차·수입차 인기 모델의 보험료를 비교합니다.',
    emoji: '📊',
  },
  {
    path: '/guide/ownership-transfer',
    title: '자동차 명의이전 방법',
    description: '명의이전 절차, 필요 서류, 비용, 과태료 정보를 총정리했습니다.',
    emoji: '📝',
  },
  {
    path: '/guide/beginner-driver',
    title: '초보운전 필수 가이드',
    description: '첫 차 선택, 보험, 주차, 고속도로, 사고 대처법을 정리했습니다.',
    emoji: '🔰',
  },
  {
    path: '/guide/tire-cost',
    title: '타이어 교체 비용·주기',
    description: '차종별 타이어 교체 비용, 교체 주기, 브랜드별 가격, 절약 방법을 총정리했습니다.',
    emoji: '🛞',
  },
  {
    path: '/guide/imported-car-buying',
    title: '수입차 구매 완벽 가이드',
    description: '수입차 구매 시 공식 vs 병행수입 비교, 절차, 보증, 비용 총정리. 벤츠·BMW·아우디·렉서스·포르쉐 등.',
    emoji: '🌐',
  },
  {
    path: '/guide/imported-car-maintenance',
    title: '수입차 유지비 현실 가이드',
    description: '수입차 정비비, 부품비, 보험료 등 실제 유지비를 국산차와 비교합니다. 브랜드별·차종별 상세 비교.',
    emoji: '🔧',
  },
  {
    path: '/guide/imported-car-insurance',
    title: '수입차 보험료 절약 가이드',
    description: '수입차 보험료가 비싼 이유와 절약 방법을 정리했습니다. 브랜드별·모델별 보험료 비교.',
    emoji: '🛡️',
  },
];

export const INFO_PAGES = [
  {
    path: '/recall',
    title: '리콜 정보 조회',
    description: '내 차가 리콜 대상인지 확인하고, 무상 수리를 받으세요.',
    emoji: '📢',
  },
  {
    path: '/inspection',
    title: '자동차 검사 일정',
    description: '정기검사·종합검사 주기, 비용, 과태료 정보를 확인하세요.',
    emoji: '🔍',
  },
  {
    path: '/calculator/car-tax/cc',
    title: '배기량별 자동차세',
    description: '배기량별 자동차세를 한눈에 비교하세요.',
    emoji: '📊',
  },
  {
    path: '/calculator/car-tax/models',
    title: '차종별 자동차세 조회',
    description: '국산차·수입차 인기 차종의 자동차세를 한눈에 비교합니다.',
    emoji: '🚘',
  },
  {
    path: '/calculator/registration-tax/used-car',
    title: '중고차 취등록세',
    description: '중고차 이전 등록 비용, 감면 대상, 명의이전 절차를 확인하세요.',
    emoji: '🔄',
  },
  {
    path: '/calculator/ev-charging-cost',
    title: '전기차 충전 비용',
    description: '충전 방식별 요금 비교와 내연기관 대비 절약 금액을 확인하세요.',
    emoji: '🔋',
  },
];

export const EV_CHARGER_PAGES = [
  {
    path: '/ev-charger',
    title: '전기차 충전소 찾기',
    description:
      '전국 전기차 충전소 위치, 요금, 운영시간 정보를 지역별로 확인하세요.',
    emoji: '⚡',
  },
  { path: '/ev-charger/seoul', title: '서울 전기차 충전소', description: '서울특별시 전기차 충전소 현황', emoji: '⚡' },
  { path: '/ev-charger/gyeonggi', title: '경기 전기차 충전소', description: '경기도 전기차 충전소 현황', emoji: '⚡' },
  { path: '/ev-charger/busan', title: '부산 전기차 충전소', description: '부산광역시 전기차 충전소 현황', emoji: '⚡' },
];

export const MODEL_PAGES = [
  { path: '/models/morning', title: '기아 모닝 유지비·세금', description: '모닝의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚗' },
  { path: '/models/ray', title: '기아 레이 유지비·세금', description: '레이의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚐' },
  { path: '/models/avante', title: '현대 아반떼 유지비·세금', description: '아반떼의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚙' },
  { path: '/models/k3', title: '기아 K3 유지비·세금', description: 'K3의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚙' },
  { path: '/models/sonata', title: '현대 쏘나타 유지비·세금', description: '쏘나타의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚘' },
  { path: '/models/k5', title: '기아 K5 유지비·세금', description: 'K5의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚘' },
  { path: '/models/grandeur', title: '현대 그랜저 유지비·세금', description: '그랜저의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚗' },
  { path: '/models/k8', title: '기아 K8 유지비·세금', description: 'K8의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚗' },
  { path: '/models/tucson', title: '현대 투싼 유지비·세금', description: '투싼의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚙' },
  { path: '/models/sorento', title: '기아 쏘렌토 유지비·세금', description: '쏘렌토의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚙' },
  { path: '/models/palisade', title: '현대 팰리세이드 유지비·세금', description: '팰리세이드의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🚙' },
  { path: '/models/ioniq5', title: '현대 아이오닉5 유지비·세금', description: '아이오닉5의 자동차세, 보험료, 취등록세, 충전비 총정리', emoji: '⚡' },
  { path: '/models/ev6', title: '기아 EV6 유지비·세금', description: 'EV6의 자동차세, 보험료, 취등록세, 충전비 총정리', emoji: '⚡' },
  { path: '/models/tesla-model-y', title: '테슬라 모델Y 유지비·세금', description: '테슬라 모델Y의 자동차세, 보험료, 취등록세, 충전비 총정리', emoji: '⚡' },
  // 수입차
  { path: '/models/benz-e-class', title: '벤츠 E클래스 유지비·세금', description: '벤츠 E클래스의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔷' },
  { path: '/models/benz-c-class', title: '벤츠 C클래스 유지비·세금', description: '벤츠 C클래스의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔷' },
  { path: '/models/bmw-5-series', title: 'BMW 5시리즈 유지비·세금', description: 'BMW 5시리즈의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔵' },
  { path: '/models/bmw-3-series', title: 'BMW 3시리즈 유지비·세금', description: 'BMW 3시리즈의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔵' },
  { path: '/models/audi-a6', title: '아우디 A6 유지비·세금', description: '아우디 A6의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '⚪' },
  { path: '/models/audi-a4', title: '아우디 A4 유지비·세금', description: '아우디 A4의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '⚪' },
  { path: '/models/volvo-xc60', title: '볼보 XC60 유지비·세금', description: '볼보 XC60의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔘' },
  { path: '/models/bmw-ix', title: 'BMW iX 유지비·세금', description: 'BMW iX의 자동차세, 보험료, 취등록세, 충전비 총정리', emoji: '🔵' },
  // 추가 수입차
  { path: '/models/benz-glc', title: '벤츠 GLC 유지비·세금', description: '벤츠 GLC의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔷' },
  { path: '/models/benz-gle', title: '벤츠 GLE 유지비·세금', description: '벤츠 GLE의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔷' },
  { path: '/models/bmw-x3', title: 'BMW X3 유지비·세금', description: 'BMW X3의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔵' },
  { path: '/models/bmw-x5', title: 'BMW X5 유지비·세금', description: 'BMW X5의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔵' },
  { path: '/models/lexus-es', title: '렉서스 ES 유지비·세금', description: '렉서스 ES의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔴' },
  { path: '/models/lexus-rx', title: '렉서스 RX 유지비·세금', description: '렉서스 RX의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔴' },
  { path: '/models/toyota-camry', title: '토요타 캠리 유지비·세금', description: '토요타 캠리의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔴' },
  { path: '/models/vw-tiguan', title: '폭스바겐 티구안 유지비·세금', description: '폭스바겐 티구안의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🟡' },
  { path: '/models/porsche-cayenne', title: '포르쉐 카이엔 유지비·세금', description: '포르쉐 카이엔의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🔶' },
  { path: '/models/mini-cooper', title: '미니 쿠퍼 유지비·세금', description: '미니 쿠퍼의 자동차세, 보험료, 취등록세, 월간 유지비 총정리', emoji: '🟢' },
];

// 타이어 브랜드별 비교 서브 페이지
const TIRE_CATEGORY_SLUGS = ['compact', 'subcompact', 'midsize', 'fullsize', 'suv', 'ev', 'imported'] as const;
export const TIRE_DETAIL_PAGES = TIRE_CATEGORY_SLUGS.map((slug) => ({
  path: `/guide/tire-cost/${slug}`,
}));

// 차량별 상세 서브 페이지 (Hub & Spoke의 Spoke)
const MODEL_SUB_TYPES = ['car-tax', 'insurance', 'registration-tax', 'maintenance'] as const;
const MODEL_SLUGS = [
  'morning', 'ray', 'avante', 'k3', 'sonata', 'k5', 'grandeur', 'k8',
  'tucson', 'sorento', 'palisade', 'ioniq5', 'ev6', 'tesla-model-y',
  'benz-e-class', 'benz-c-class', 'bmw-5-series', 'bmw-3-series',
  'audi-a6', 'audi-a4', 'volvo-xc60', 'bmw-ix',
  'benz-glc', 'benz-gle', 'bmw-x3', 'bmw-x5',
  'lexus-es', 'lexus-rx', 'toyota-camry', 'vw-tiguan',
  'porsche-cayenne', 'mini-cooper',
];
export const MODEL_DETAIL_PAGES = MODEL_SLUGS.flatMap((slug) =>
  MODEL_SUB_TYPES.map((sub) => ({
    path: `/models/${slug}/${sub}`,
  }))
);

export function getAllUrls(): string[] {
  return [
    BASE_URL,
    ...CALCULATOR_PAGES.map((page) => `${BASE_URL}${page.path}`),
    ...GUIDE_PAGES.map((page) => `${BASE_URL}${page.path}`),
    ...INFO_PAGES.map((page) => `${BASE_URL}${page.path}`),
    ...EV_CHARGER_PAGES.map((page) => `${BASE_URL}${page.path}`),
    ...MODEL_PAGES.map((page) => `${BASE_URL}${page.path}`),
    ...MODEL_DETAIL_PAGES.map((page) => `${BASE_URL}${page.path}`),
    ...TIRE_DETAIL_PAGES.map((page) => `${BASE_URL}${page.path}`),
  ];
}
