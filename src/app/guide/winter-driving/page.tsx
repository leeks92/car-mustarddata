import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '겨울철 차량 관리·안전 운전 가이드 (2026) - 점검 체크리스트·결빙 도로 운전법',
  description:
    '겨울철 차량 점검 체크리스트 10항목, 스노우타이어 선택법, 결빙 도로 안전 운전법, 동파 방지법, 연비 절약 팁, 블랙아이스 대처법을 총정리했습니다. 2026년 겨울철 차량 관리 비용까지 한눈에 비교합니다.',
  keywords: [
    '겨울철 차량 관리',
    '겨울 안전 운전',
    '스노우타이어 가격',
    '결빙 도로 운전법',
    '블랙아이스 대처법',
    '차량 동파 방지',
    '겨울철 연비 절약',
    '부동액 교체',
    '겨울철 배터리 관리',
    '윈터타이어 교체 시기',
  ],
  alternates: { canonical: `${BASE_URL}/guide/winter-driving` },
  openGraph: {
    title: '겨울철 차량 관리·안전 운전 가이드 (2026)',
    description: '겨울철 차량 점검 항목, 스노우타이어, 결빙 도로 운전법, 동파 방지법을 총정리했습니다.',
    url: `${BASE_URL}/guide/winter-driving`,
    type: 'website',
  },
};

// 겨울철 차량 점검 체크리스트 10항목
const checklistItems = [
  {
    no: 1,
    item: '배터리 점검',
    detail: '전압 12.4V 이상 확인. 3년 이상 사용 시 교체 권장. 겨울철 방전 사고의 80%는 노후 배터리가 원인.',
    cost: '무료 (정비소 무상 점검)',
    priority: '필수',
  },
  {
    no: 2,
    item: '부동액(냉각수) 점검',
    detail: '농도 50% 확인, -35도 이하 동결 방지. 2년/4만km마다 교체. 부족 시 엔진 동파 위험.',
    cost: '3~5만 원 (교체 시)',
    priority: '필수',
  },
  {
    no: 3,
    item: '타이어 상태 확인',
    detail: '트레드 깊이 3mm 이상 확인, 공기압 10% 추가 주입. 동계용 타이어 교체 고려.',
    cost: '무료 (공기압) / 40~100만 원 (윈터타이어)',
    priority: '필수',
  },
  {
    no: 4,
    item: '와이퍼·워셔액 교체',
    detail: '동계용 워셔액(-25도)으로 교체. 와이퍼 블레이드 갈라짐·줄 생김 시 교체.',
    cost: '3,000~5,000원 (워셔액) / 1~3만 원 (와이퍼)',
    priority: '필수',
  },
  {
    no: 5,
    item: '히터·성에 제거 작동 확인',
    detail: '히터 정상 작동, 앞·뒷유리 열선 작동 확인. 히터 코어 고장 시 수리비 30~80만 원.',
    cost: '무료 (점검)',
    priority: '필수',
  },
  {
    no: 6,
    item: '엔진오일 점도 확인',
    detail: '저온 유동성 좋은 0W-20 또는 5W-30 사용 여부 확인. 고점도 오일은 겨울 시동 불량 원인.',
    cost: '5~15만 원 (교체 시)',
    priority: '권장',
  },
  {
    no: 7,
    item: '브레이크 패드·오일 점검',
    detail: '패드 두께 3mm 이상, 브레이크 오일 수분 함량 3% 이하 확인. 결빙 노면 제동거리 직결.',
    cost: '무료 (점검) / 8~15만 원 (패드 교체)',
    priority: '권장',
  },
  {
    no: 8,
    item: '램프류 전수 점검',
    detail: '전조등·안개등·미등·방향지시등 정상 점등 확인. 겨울철 일조 시간 단축으로 조명 중요.',
    cost: '무료 (점검) / 1~5만 원 (전구 교체)',
    priority: '권장',
  },
  {
    no: 9,
    item: '도어·트렁크 고무패킹 관리',
    detail: '실리콘 스프레이로 고무패킹 도포. 결빙 시 문짝 달라붙는 현상 예방.',
    cost: '5,000~1만 원 (실리콘 스프레이)',
    priority: '권장',
  },
  {
    no: 10,
    item: '비상용품 비치',
    detail: '담요, 손전등, 부스터 케이블, 삼각대, 견인 로프, 스노우체인, 성에 제거제 준비.',
    cost: '3~8만 원 (비상용품 세트)',
    priority: '권장',
  },
];

// 스노우타이어 vs 사계절 비교
const tireComparison = [
  { item: '제동 거리 (빙판)', allSeason: '약 70m (60km/h)', winter: '약 45m (60km/h)', diff: '약 35% 단축' },
  { item: '눈길 접지력', allSeason: '보통', winter: '우수', diff: '접지력 40%+' },
  { item: '저온 고무 경화', allSeason: '7도 이하 경화 시작', winter: '-40도까지 유연 유지', diff: '저온 성능 우위' },
  { item: '수막 현상 대응', allSeason: '보통', winter: '우수 (사이프 구조)', diff: '배수 성능 우위' },
  { item: '사용 가능 온도', allSeason: '-10도~40도', winter: '-40도~7도', diff: '7도 이하 전환 권장' },
  { item: '소음', allSeason: '보통', winter: '약간 높음', diff: '소폭 증가' },
  { item: '연비 영향', allSeason: '기준', winter: '1~3% 감소', diff: '소폭 감소' },
  { item: '수명', allSeason: '4~5년', winter: '3~4시즌', diff: '계절 교체 필요' },
];

// 스노우타이어 브랜드별 가격
const winterTirePrices = [
  { brand: '한국타이어 윈터 i*cept', origin: '국산', size: '205/55R16', price4: '36~48만 원', feature: '가성비 우수, 국산차 호환 폭넓음' },
  { brand: '금호 윈터크래프트 WP72', origin: '국산', size: '205/55R16', price4: '32~44만 원', feature: '저소음, 승차감 우수, 합리적 가격' },
  { brand: '넥센 윈가드 스포츠2', origin: '국산', size: '205/55R16', price4: '28~40만 원', feature: '가격 경쟁력 최강, 기본 성능 충실' },
  { brand: '미쉐린 파일럿 알핀5', origin: '프랑스', size: '205/55R16', price4: '60~80만 원', feature: '최고 수준 제동력, 프리미엄 정숙성' },
  { brand: '콘티넨탈 바이킹컨택트7', origin: '독일', size: '205/55R16', price4: '56~72만 원', feature: '빙판 제동 최강, 유럽차 순정 채택' },
  { brand: '브리지스톤 블리작 VRX3', origin: '일본', size: '205/55R16', price4: '52~68만 원', feature: '빙판 성능 우수, 일본차 순정 채택' },
  { brand: '피렐리 윈터 소토제로3', origin: '이탈리아', size: '205/55R16', price4: '54~70만 원', feature: '고속 안정성, 스포츠 주행 적합' },
];

// 결빙 도로 안전 운전법 7가지
const icyDrivingTips = [
  {
    no: 1,
    title: '감속 운전 철저',
    desc: '평소 속도의 60~70%로 감속. 빙판 제동거리는 마른 노면의 3~8배. 고속도로에서도 80km/h 이하 권장.',
    icon: '🐢',
  },
  {
    no: 2,
    title: '급조작 3금지',
    desc: '급가속·급브레이크·급핸들 절대 금지. 브레이크는 여러 번 나누어 밟고(펌핑), ABS 장착 차량은 꾹 밟아 유지.',
    icon: '🚫',
  },
  {
    no: 3,
    title: '차간거리 2배 확보',
    desc: '앞차와의 거리를 평소의 2배 이상 확보. 60km/h 기준 최소 80m 이상 유지.',
    icon: '↔️',
  },
  {
    no: 4,
    title: '오르막·내리막 대처',
    desc: '오르막은 2단 기어로 출발, 내리막은 엔진 브레이크 적극 활용. 급경사에서 정차 후 재출발 시 미끄러짐 주의.',
    icon: '⛰️',
  },
  {
    no: 5,
    title: '커브 진입 전 감속 완료',
    desc: '커브 구간에서 브레이크 조작은 위험. 커브 진입 전에 충분히 감속하고, 커브 내에서는 일정한 속도 유지.',
    icon: '🔄',
  },
  {
    no: 6,
    title: '블랙아이스 의심 구간 주의',
    desc: '다리 위, 터널 출입구, 산 그늘, 교차로 정지선 부근은 결빙 위험 구간. 노면이 젖어 보이면 블랙아이스 의심.',
    icon: '🧊',
  },
  {
    no: 7,
    title: '안개등·전조등 적극 사용',
    desc: '눈·비 시 전조등 필수 점등. 폭설 시 안개등 사용. 상향등은 눈에 반사되어 시야 방해하므로 하향등 사용.',
    icon: '💡',
  },
];

// 차량 동파 방지법
const freezePreventionItems = [
  {
    category: '워셔액 동파 방지',
    problem: '일반 워셔액이 -10도 이하에서 동결, 노즐·호스 파손',
    solution: '동계용 워셔액(-25도 이하)으로 전량 교체. 여름용과 혼합 사용 금지.',
    cost: '3,000~5,000원',
  },
  {
    category: '냉각수(부동액) 관리',
    problem: '부동액 농도 부족 시 엔진 블록·라디에이터 동파',
    solution: '부동액 농도 50%(-35도) 유지. 물만 보충하면 농도 저하. 2년/4만km마다 전량 교체.',
    cost: '3~5만 원 (전량 교체)',
  },
  {
    category: '도어 결빙 방지',
    problem: '세차 후 또는 눈·비 뒤 도어 고무패킹 결빙',
    solution: '실리콘 스프레이를 고무패킹에 도포. 결빙 시 미지근한 물 사용 (뜨거운 물 금지, 유리 파손 위험).',
    cost: '5,000~1만 원',
  },
  {
    category: '배터리 방전 방지',
    problem: '기온 -10도 이하 시 배터리 성능 50%까지 저하, 방전 위험',
    solution: '3년 이상 사용 배터리는 교체 검토. 장기 주차 시 블랙박스 주차 모드 전압 설정(11.8V 차단).',
    cost: '10~20만 원 (배터리 교체)',
  },
  {
    category: '연료 라인 결빙 방지 (디젤)',
    problem: '경유 왁스 성분이 -15도 이하에서 응고, 연료 필터 막힘',
    solution: '겨울용 경유(동절기 유종) 주유. 연료 첨가제 사용. 실내 주차 권장.',
    cost: '1~2만 원 (첨가제)',
  },
  {
    category: '유리 결빙 방지',
    problem: '아침 출근 시 앞유리 성에·결빙으로 시야 확보 불가',
    solution: '전날 밤 덮개 사용 또는 성에 방지 커버 장착. 성에 제거 스프레이 비치. 히터+뒷유리 열선 작동.',
    cost: '5,000~2만 원 (커버/스프레이)',
  },
];

// 겨울철 연비 절약 팁
const fuelSavingTips = [
  {
    no: 1,
    title: '공회전 최소화',
    desc: '겨울 예열은 30초~1분이면 충분. 장시간 공회전은 연료 낭비(시간당 약 1L)이고 엔진에도 해롭습니다. 서행 출발 후 5분 이내 정상 운행.',
    saving: '연비 5~10% 개선',
  },
  {
    no: 2,
    title: '타이어 공기압 수시 확인',
    desc: '기온이 10도 떨어지면 공기압 약 1psi 감소. 적정 공기압 유지 시 연비 3~5% 향상. 월 1회 이상 점검.',
    saving: '연비 3~5% 개선',
  },
  {
    no: 3,
    title: '불필요한 전기장치 절제',
    desc: '열선 시트·핸들, 후면 열선은 필요할 때만 사용. 전기 부하가 높으면 발전기 부하 증가로 연비 저하.',
    saving: '연비 2~3% 개선',
  },
  {
    no: 4,
    title: '짐칸 경량화',
    desc: '트렁크에 불필요한 짐 제거. 10kg 감량 시 연비 약 0.3% 개선. 루프박스·루프랙 미사용 시 탈거.',
    saving: '연비 1~3% 개선',
  },
  {
    no: 5,
    title: '에코 드라이빙 습관',
    desc: '경제속도(60~80km/h) 유지, 급가속 자제. 정속 주행 시 겨울철에도 연비 10~15% 절약 가능.',
    saving: '연비 10~15% 개선',
  },
  {
    no: 6,
    title: '실내 순환 모드 활용',
    desc: '히터 작동 후 실내 온도가 올라가면 외기 모드 대신 실내 순환 모드로 전환. 난방 효율 향상으로 연비 개선.',
    saving: '연비 1~2% 개선',
  },
];

// 겨울철 사고 대처법
const accidentResponses = [
  {
    situation: '블랙아이스 미끄러짐',
    icon: '🧊',
    immediate: '브레이크를 급하게 밟지 말고, 가속 페달에서 발을 뗀 후 엔진 브레이크로 감속. ABS 작동 시 브레이크 꾹 밟기 유지.',
    prevention: '다리 위·터널 출입구·산 그늘 구간에서 미리 30% 이상 감속. 노면이 검게 젖어 보이면 의심.',
    caution: '핸들을 급하게 돌리면 스핀 발생. 차가 미끄러지는 방향으로 핸들을 부드럽게 돌려 자세 회복.',
  },
  {
    situation: '눈길 미끄러짐·탈출 불가',
    icon: '🌨️',
    immediate: '바퀴가 공회전하면 즉시 멈추고, 타이어 앞에 모래·염화칼슘·고무 매트를 깔아 접지력 확보. 2단 기어로 천천히 출발.',
    prevention: '스노우체인 미리 장착. 급경사 진입 전 속도 확보. 정지 후 재출발 시 핸들을 직진 방향으로.',
    caution: '바퀴 공회전을 계속하면 눈이 녹아 빙판이 되어 상황 악화. 전진·후진을 반복하며 탈출 시도.',
  },
  {
    situation: '폭설로 고립',
    icon: '❄️',
    immediate: '비상등 점등 후 119 신고. 배기구가 눈에 막히지 않도록 주기적 확인(일산화탄소 중독 방지). 담요로 보온.',
    prevention: '폭설 예보 시 외출 자제. 비상용품(담요·손전등·식수·비상식량) 항시 비치.',
    caution: '엔진을 계속 가동하면 배기가스 역류 위험. 10분 가동·10분 정지 반복. 창문 약간 열어 환기.',
  },
  {
    situation: '겨울철 추돌 사고',
    icon: '🚗',
    immediate: '안전한 곳으로 이동 후 비상등·삼각대 설치(차량 후방 100m). 112·보험사 신고. 사고 현장 사진 촬영.',
    prevention: '차간거리 2배 확보. 앞차 브레이크등 주시. 정체 구간 진입 시 미리 비상등 점멸.',
    caution: '겨울철 사고 현장에서 차 밖에 서 있으면 2차 사고 위험. 반드시 가드레일 바깥으로 대피.',
  },
];

// 겨울철 차량 관리 비용 정리
const winterCosts = [
  { item: '배터리 교체', cost: '10~20만 원', cycle: '3~5년', note: '전압 12.0V 이하 시 즉시 교체' },
  { item: '부동액 전량 교체', cost: '3~5만 원', cycle: '2년/4만km', note: '농도 50% 유지, 혼합 비율 확인' },
  { item: '동계용 워셔액', cost: '3,000~5,000원', cycle: '매 겨울', note: '-25도 이하 제품 선택' },
  { item: '와이퍼 블레이드 교체', cost: '1~3만 원', cycle: '6개월~1년', note: '동계용 와이퍼 별도 판매' },
  { item: '윈터타이어 4짝 (국산)', cost: '28~48만 원', cycle: '3~4시즌', note: '공임비 4~8만 원 별도' },
  { item: '윈터타이어 4짝 (수입)', cost: '52~80만 원', cycle: '3~4시즌', note: '공임비 6~10만 원 별도' },
  { item: '스노우체인', cost: '3~15만 원', cycle: '3~5년', note: '우레탄·직물·금속 종류별 가격 차이' },
  { item: '성에 제거 스프레이', cost: '5,000~1만 원', cycle: '매 겨울', note: '커버 사용 시 불필요' },
  { item: '실리콘 스프레이', cost: '5,000~1만 원', cycle: '매 겨울', note: '도어·트렁크 고무패킹용' },
  { item: '엔진오일 교체', cost: '5~15만 원', cycle: '7,000~10,000km', note: '저점도 오일(0W-20, 5W-30) 권장' },
  { item: '비상용품 세트', cost: '3~8만 원', cycle: '점검 후 보충', note: '담요·부스터·삼각대·손전등 포함' },
  { item: '히터 코어 수리', cost: '30~80만 원', cycle: '고장 시', note: '난방 불량·냉각수 누수 시 점검' },
];

// FAQ
const faqItems = [
  {
    q: '겨울철 차량 예열은 얼마나 해야 하나요?',
    a: '최신 차량은 30초~1분 예열이면 충분합니다. 이후 2~3km는 2,000rpm 이하로 서행하면서 엔진을 워밍업하세요. 10분 이상 공회전은 연료 낭비(시간당 약 1L)이고 엔진 카본 퇴적의 원인이 됩니다. 구형 차량(2010년 이전)은 2~3분 예열을 권장합니다.',
  },
  {
    q: '스노우타이어는 꼭 필요한가요?',
    a: '기온 7도 이하에서 운행하는 시간이 많거나, 눈·결빙이 잦은 지역이면 강력히 권장합니다. 윈터타이어는 빙판 제동거리를 약 35% 단축하고, 눈길 접지력이 40% 이상 향상됩니다. 수도권 이남 도심 위주 운행이면 사계절 타이어로도 충분할 수 있으나, 강원도·산간 지역은 필수입니다.',
  },
  {
    q: '부동액과 냉각수의 차이는 무엇인가요?',
    a: '냉각수는 엔진을 냉각하는 액체의 총칭이고, 부동액은 냉각수가 얼지 않도록 섞는 화학물질(에틸렌글리콜)입니다. 보통 부동액과 증류수를 50:50으로 혼합하여 사용하며, 이 비율에서 약 -35도까지 동결을 방지합니다. 물만 보충하면 농도가 낮아져 동파 위험이 커집니다.',
  },
  {
    q: '블랙아이스는 어디서 주로 발생하나요?',
    a: '다리 위(지면 열 차단으로 2~3도 더 낮음), 터널 출입구(급격한 온도 변화), 산 그늘·북향 도로, 교차로 정지선 부근(차량 열로 녹았다 재결빙), 고가도로·램프 구간에서 주로 발생합니다. 기온 0~3도, 새벽·아침 시간대에 가장 위험합니다.',
  },
  {
    q: '겨울철 배터리 방전 시 어떻게 하나요?',
    a: '다른 차량의 배터리로 점프 시동이 가능합니다. 부스터 케이블을 방전 차량 (+) → 정상 차량 (+) → 정상 차량 (-) → 방전 차량 엔진 블록(접지) 순서로 연결합니다. 점프 시동 후 최소 30분 이상 주행하여 충전하세요. 보험사 긴급출동(무료)이나 포터블 점프스타터(3~8만 원)도 활용할 수 있습니다.',
  },
  {
    q: '겨울철 세차는 어떻게 해야 하나요?',
    a: '염화칼슘(제설제)은 차체 부식의 주요 원인이므로, 눈·비 온 다음 날 하부 세차를 포함한 세차를 권장합니다. 세차 후 도어 고무패킹 물기를 완전히 제거하고 실리콘 스프레이를 도포하세요. 영하 날씨에는 자동세차를 이용하거나, 실내 세차장을 이용하세요.',
  },
  {
    q: '사계절 타이어로 눈길 운전이 가능한가요?',
    a: '완만한 도심 도로에서 소량의 눈은 사계절 타이어로 운행 가능하지만, 빙판이나 적설량 5cm 이상에서는 매우 위험합니다. 사계절 타이어는 7도 이하에서 고무가 경화되어 접지력이 급감합니다. 부득이한 경우 스노우체인을 장착하고 20~30km/h 이하로 서행하세요.',
  },
  {
    q: '겨울철 전기차 관리에서 특별히 주의할 점은?',
    a: '전기차는 저온에서 배터리 효율이 30~50% 감소하여 주행거리가 줄어듭니다. 출발 전 사전 난방(프리컨디셔닝)을 충전 중에 실행하면 배터리 소모를 줄일 수 있습니다. 급속충전보다 완속충전이 배터리 수명에 유리하고, 배터리 잔량 20% 이하로 방치하지 마세요.',
  },
];

export default function WinterDrivingGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '겨울철 차량 관리·안전 운전 가이드 (2026)',
          description: '겨울철 차량 점검 체크리스트, 스노우타이어, 결빙 도로 운전법, 동파 방지법을 총정리했습니다.',
          url: `${BASE_URL}/guide/winter-driving`,
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
            { '@type': 'ListItem', position: 3, name: '겨울철 차량 관리', item: `${BASE_URL}/guide/winter-driving` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href="/guide/maintenance-cost" className="hover:text-amber-600">가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">겨울철 차량 관리</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">안전 운전 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            겨울철 차량 관리·안전 운전 가이드
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            겨울철 차량 점검 10항목, 스노우타이어 선택법, 결빙 도로 운전법, 동파 방지법을 정리했습니다.
            블랙아이스 대처법부터 겨울철 관리 비용까지 한눈에 확인하세요.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">윈터타이어 (국산 4짝)</p>
              <p className="text-lg font-bold text-amber-600">28~48만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">빙판 제동거리 단축</p>
              <p className="text-lg font-bold text-amber-600">약 35%</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">부동액 교체</p>
              <p className="text-lg font-bold text-amber-600">3~5만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">배터리 교체</p>
              <p className="text-lg font-bold text-amber-600">10~20만 원</p>
            </div>
          </div>
        </section>

        {/* ===== Section 1: 겨울철 차량 점검 체크리스트 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">겨울철 차량 점검 체크리스트 10항목</h2>
            <p className="text-sm text-gray-500 mb-6">11월 중순~12월 초 사이에 사전 점검을 완료하세요</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-center font-semibold w-10">No.</th>
                    <th className="px-3 py-3 text-left font-semibold">점검 항목</th>
                    <th className="px-3 py-3 text-left font-semibold">세부 내용</th>
                    <th className="px-3 py-3 text-right font-semibold">예상 비용</th>
                    <th className="px-3 py-3 text-center font-semibold w-16">구분</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {checklistItems.map((row) => (
                    <tr key={row.no} className="hover:bg-gray-50">
                      <td className="px-3 py-3 text-center font-bold text-amber-600">{row.no}</td>
                      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">{row.item}</td>
                      <td className="px-3 py-3 text-gray-600 text-xs">{row.detail}</td>
                      <td className="px-3 py-3 text-right text-amber-600 font-medium whitespace-nowrap text-xs">{row.cost}</td>
                      <td className="px-3 py-3 text-center">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          row.priority === '필수' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {row.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>TIP:</strong> 대부분의 정비소에서 겨울철 무료 점검 이벤트를 실시합니다. 현대·기아 블루핸즈, 쌍용 오토케어 등 공식 서비스센터의 계절 점검 프로모션을 활용하세요.
            </div>
          </div>
        </section>

        {/* ===== Section 2: 스노우타이어 가이드 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">스노우타이어(윈터타이어) 가이드</h2>
            <p className="text-sm text-gray-500 mb-6">기온 7도 이하에서는 윈터타이어의 성능이 사계절 타이어를 압도합니다</p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">사계절 타이어 vs 윈터타이어 비교</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">비교 항목</th>
                    <th className="px-4 py-3 text-left font-semibold">사계절 타이어</th>
                    <th className="px-4 py-3 text-left font-semibold">윈터타이어</th>
                    <th className="px-4 py-3 text-left font-semibold">차이</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tireComparison.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.item}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.allSeason}</td>
                      <td className="px-4 py-3 text-amber-600 font-medium text-xs">{row.winter}</td>
                      <td className="px-4 py-3 text-green-600 font-medium text-xs">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">윈터타이어 브랜드별 가격 비교</h3>
            <p className="text-xs text-gray-500 mb-4">준중형 세단 기준(205/55R16), 2026년 온라인 최저가 참고</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드·제품</th>
                    <th className="px-4 py-3 text-left font-semibold">원산지</th>
                    <th className="px-4 py-3 text-right font-semibold">4짝 가격</th>
                    <th className="px-4 py-3 text-left font-semibold">특징</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {winterTirePrices.map((row) => (
                    <tr key={row.brand} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.brand}</td>
                      <td className="px-4 py-3 text-gray-600">{row.origin}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.price4}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p><strong>교체 시기:</strong> 기온이 7도 이하로 떨어지는 11월 중순에 장착하고, 기온이 7도 이상 올라가는 3월 중순에 사계절 타이어로 복원합니다.</p>
              <p><strong>보관 방법:</strong> 탈거한 타이어는 세척 후 직사광선 없는 서늘한 곳에 세워서 보관. 타이어 호텔(보관 서비스)은 시즌당 4짝 3~6만 원.</p>
            </div>
            <p className="text-xs text-gray-400 mt-3">※ SUV·대형 세단은 규격이 커 가격이 20~40% 더 높습니다. 공임비(4~10만 원)는 별도.</p>
          </div>
        </section>

        {/* ===== Section 3: 결빙 도로 안전 운전법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">결빙 도로 안전 운전법 7가지</h2>
          <div className="space-y-4">
            {icyDrivingTips.map((tip) => (
              <div key={tip.no} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <span className="bg-amber-100 text-amber-700 text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {tip.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">{tip.no}</span>
                    <h3 className="font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-red-50 rounded-xl p-4 text-sm text-red-800">
            <strong>경고:</strong> 겨울철 교통사고의 약 40%가 결빙 노면에서 발생합니다. 특히 기온 0~3도, 새벽 5~8시 사이가 가장 위험한 시간대입니다. 빙판길 사고는 과실 비율이 높게 잡힐 수 있으므로 각별히 주의하세요.
          </div>
        </section>

        {/* ===== Section 4: 차량 동파 방지법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">차량 동파 방지법</h2>
            <p className="text-sm text-gray-500 mb-6">기온 -10도 이하에서는 반드시 사전 대비가 필요합니다</p>
            <div className="space-y-4">
              {freezePreventionItems.map((item) => (
                <div key={item.category} className="border border-gray-100 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{item.category}</h3>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{item.cost}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-600"><strong>문제:</strong> {item.problem}</p>
                    <p className="text-green-700"><strong>해결:</strong> {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>TIP:</strong> 야외 장기 주차 시 방한 커버를 씌우면 성에·결빙을 크게 줄일 수 있습니다. 앞유리 커버(1~3만 원)만 사용해도 아침 출근 준비 시간이 10~15분 단축됩니다.
            </div>
          </div>
        </section>

        {/* ===== Section 5: 겨울철 연비 절약 팁 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">겨울철 연비 절약 팁 6가지</h2>
          <p className="text-sm text-gray-500 mb-6">겨울철 연비는 여름 대비 10~20% 감소합니다. 습관 개선만으로 상당 부분 회복 가능합니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fuelSavingTips.map((tip) => (
              <div key={tip.no} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">{tip.no}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{tip.saving}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>종합 절약 효과:</strong> 위 6가지를 모두 실천하면 겨울철 연비를 15~25% 개선할 수 있습니다. 월 주행거리 1,500km, 연비 12km/L 기준 월 2~4만 원 절약 효과.
          </div>
        </section>

        {/* ===== Section 6: 겨울철 사고 대처법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">겨울철 사고 상황별 대처법</h2>
          <div className="space-y-4">
            {accidentResponses.map((item) => (
              <div key={item.situation} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{item.situation}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-red-800"><strong>즉시 대응:</strong> {item.immediate}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800"><strong>사전 예방:</strong> {item.prevention}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-amber-800"><strong>주의사항:</strong> {item.caution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Section 7: 겨울철 차량 관리 비용 정리 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">겨울철 차량 관리 비용 총정리</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 일반 승용차(준중형~중형) 기준 예상 비용</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-right font-semibold">비용</th>
                    <th className="px-4 py-3 text-right font-semibold">교체/점검 주기</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {winterCosts.map((row) => (
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
              <p><strong>최소 비용(필수 항목만):</strong> 워셔액 + 와이퍼 + 비상용품 = 약 3~5만 원</p>
              <p><strong>권장 비용(타이어 제외):</strong> 배터리 + 부동액 + 워셔액 + 와이퍼 + 소모품 = 약 20~35만 원</p>
              <p><strong>풀 패키지(타이어 포함):</strong> 위 항목 + 윈터타이어 = 약 50~85만 원</p>
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 수입차는 부품비가 국산차 대비 1.5~3배 높을 수 있습니다</p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">겨울철 차량 관리 자주 묻는 질문</h2>
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
              겨울철 유지비를 미리 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              타이어, 배터리, 유류비, 정비비까지 내 차 겨울 준비 비용을 확인합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/tire-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                타이어 교체 비용 비교
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
