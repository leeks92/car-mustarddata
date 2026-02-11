import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '장거리 운전 준비 체크리스트 - 차량 점검·필수 준비물·고속도로 팁',
  description:
    '장거리 운전 전 차량 점검 10항목, 필수 준비물, 고속도로 운전 팁, 피로 관리법, 연비 절약법, 구간별 통행료·휴게소 정보를 총정리했습니다. 2026년 기준 서울-부산, 서울-강릉, 서울-광주 통행료와 주요 휴게소를 안내합니다.',
  keywords: [
    '장거리 운전 준비',
    '장거리 운전 체크리스트',
    '고속도로 운전 팁',
    '장거리 운전 피로',
    '졸음 운전 예방',
    '고속도로 통행료',
    '장거리 연비 절약',
    '차량 점검 체크리스트',
    '휴게소 정보',
    '장거리 드라이브',
  ],
  alternates: { canonical: `${BASE_URL}/guide/long-distance-driving` },
  openGraph: {
    title: '장거리 운전 준비 체크리스트 - 차량 점검·필수 준비물·고속도로 팁',
    description: '장거리 운전 전 차량 점검, 필수 준비물, 피로 관리, 고속도로 운전 팁을 정리했습니다.',
    url: `${BASE_URL}/guide/long-distance-driving`,
    type: 'website',
  },
};

// 출발 전 차량 점검 체크리스트 10항목
const vehicleChecklist = [
  {
    no: 1,
    item: '타이어 공기압',
    detail: '적정 공기압(보통 32~35psi)을 확인합니다. 운전석 문 안쪽 라벨에서 권장 공기압을 확인하세요.',
    warning: '공기압 부족 시 연비 저하와 타이어 과열로 고속 주행 중 펑크 위험이 높아집니다.',
  },
  {
    no: 2,
    item: '타이어 마모도',
    detail: '트레드 깊이 1.6mm 이상인지 확인합니다. 100원 동전을 홈에 넣어 이순신 장군 감투가 보이면 교체 시기입니다.',
    warning: '마모된 타이어는 빗길 제동거리가 2~3배 늘어납니다.',
  },
  {
    no: 3,
    item: '엔진오일',
    detail: '오일 레벨 게이지로 양과 색상을 확인합니다. 투명한 호박색이면 정상, 검은색이면 교체가 필요합니다.',
    warning: '장거리 주행 전 교체 주기(7,000~10,000km)가 임박했다면 미리 교체하세요.',
  },
  {
    no: 4,
    item: '냉각수',
    detail: '리저브 탱크의 냉각수가 MIN~MAX 사이인지 확인합니다. 부족하면 냉각수 전용액을 보충하세요.',
    warning: '냉각수 부족 시 엔진 과열(오버히트)로 고속도로에서 긴급 정차할 수 있습니다.',
  },
  {
    no: 5,
    item: '브레이크 오일·패드',
    detail: '브레이크 오일 리저브 탱크의 잔량을 확인하고, 브레이크 패드 두께(3mm 이상)를 점검합니다.',
    warning: '브레이크 경고등이 점등되면 즉시 정비소에서 점검하세요. 장거리 출발 전 필수입니다.',
  },
  {
    no: 6,
    item: '라이트(전조등·후미등)',
    detail: '전조등, 후미등, 방향지시등, 안개등, 브레이크등이 모두 정상 작동하는지 확인합니다.',
    warning: '야간 고속도로 주행 시 전조등 불량은 중대 사고로 이어질 수 있습니다.',
  },
  {
    no: 7,
    item: '와이퍼·워셔액',
    detail: '와이퍼 블레이드의 닦임 상태를 확인하고, 워셔액을 가득 채워둡니다.',
    warning: '고속 주행 시 벌레·먼지가 많이 붙으므로 워셔액 소모가 빠릅니다.',
  },
  {
    no: 8,
    item: '배터리 상태',
    detail: '배터리 단자의 부식 여부와 전압(12.4V 이상)을 확인합니다. 사용 기간이 3년 이상이면 점검 필요.',
    warning: '장거리 주행 중 배터리 방전 시 견인 비용(10~30만 원)이 발생합니다.',
  },
  {
    no: 9,
    item: '에어컨·히터',
    detail: '에어컨 냉방과 히터 난방이 정상 작동하는지 확인합니다. 에어컨 필터 교체 주기(6~12개월)도 확인하세요.',
    warning: '여름철 에어컨 고장 시 차내 온도가 60도 이상 올라가 안전 위험이 있습니다.',
  },
  {
    no: 10,
    item: '연료·충전 상태',
    detail: '연료를 가득 채우고 출발하세요. 전기차는 80% 이상 충전 후 경로상 충전소 위치를 미리 확인합니다.',
    warning: '고속도로 휴게소 간 거리는 평균 25~50km이므로 연료 게이지 1/4 이하에서 주유하세요.',
  },
];

// 장거리 운전 필수 준비물
const essentialItems = [
  { category: '안전용품', item: '안전삼각대', importance: '필수', note: '도로교통법상 차량 비치 의무. 미비치 시 과태료 2만 원' },
  { category: '안전용품', item: '소화기', importance: '필수', note: '차량용 소화기(1kg). 2026년 기준 모든 차량 비치 권장' },
  { category: '안전용품', item: '안전조끼(야광)', importance: '권장', note: '야간 고장·사고 시 후방 차량의 인지율을 높여줍니다' },
  { category: '안전용품', item: '점프 케이블', importance: '권장', note: '배터리 방전 시 다른 차량에서 전기를 빌려 시동 가능' },
  { category: '편의용품', item: '스마트폰 충전기·케이블', importance: '필수', note: '네비게이션·긴급전화용. 고속 충전기(PD 30W 이상) 추천' },
  { category: '편의용품', item: '거치대', importance: '필수', note: '운전 중 스마트폰 조작은 범칙금 7만 원+벌점 15점' },
  { category: '편의용품', item: '음료·스낵', importance: '권장', note: '카페인 음료, 견과류, 초콜릿 등. 졸음 예방에 도움' },
  { category: '편의용품', item: '담요·쿠션', importance: '선택', note: '장시간 운전 시 허리 지지, 동승자 수면 시 사용' },
  { category: '비상용품', item: '비상 연락처 메모', importance: '필수', note: '긴급출동(보험사), 도로공사 1588-2504, 경찰 112, 소방 119' },
  { category: '비상용품', item: '구급약품', importance: '권장', note: '두통약, 소화제, 멀미약, 반창고, 소독약 등 기본 키트' },
  { category: '비상용품', item: '우비·우산', importance: '선택', note: '갑작스러운 비에 대비. 차량 고장 시 비를 맞으며 작업 방지' },
  { category: '비상용품', item: '여분의 키(스마트키)', importance: '선택', note: '스마트키 배터리 방전 시를 대비해 기계식 키 위치 확인' },
];

// 고속도로 운전 팁 8가지
const highwayTips = [
  {
    no: 1,
    title: '안전거리 확보',
    desc: '시속 100km 기준 최소 100m(약 차량 25대 간격) 이상 안전거리를 유지합니다. 비·눈·안개 시에는 1.5~2배로 늘리세요.',
    detail: '고속도로 사고의 30% 이상이 안전거리 미확보가 원인입니다.',
  },
  {
    no: 2,
    title: '차선 변경은 여유롭게',
    desc: '방향지시등을 3초 이상 켠 후 사이드미러와 사각지대를 확인하고 차선을 변경합니다. 급차선 변경은 금지입니다.',
    detail: '연속 2개 차선을 한 번에 변경하면 범칙금 4만 원이 부과됩니다.',
  },
  {
    no: 3,
    title: '졸음 운전 예방',
    desc: '2시간마다 반드시 휴식합니다. 졸음이 오면 에어컨을 강하게 틀거나, 창문을 열어 환기하고, 가까운 졸음쉼터에 정차하세요.',
    detail: '졸음 운전 사고 치사율은 일반 사고의 2.4배입니다.',
  },
  {
    no: 4,
    title: '1차로(추월차로) 사용 규칙',
    desc: '1차로는 추월 시에만 사용하고, 추월 후 바로 2차로로 복귀합니다. 1차로 지속 주행 시 범칙금 4만 원이 부과됩니다.',
    detail: '1차로 저속 주행은 후방 추돌 사고의 원인이 됩니다.',
  },
  {
    no: 5,
    title: '터널·교량 주의',
    desc: '터널 진입 시 전조등을 켜고 속도를 줄입니다. 교량 위는 바람이 강하고 결빙 위험이 있으므로 감속하세요.',
    detail: '겨울철 교량 결빙 사고는 일반 도로 대비 3배 높습니다.',
  },
  {
    no: 6,
    title: '긴급 상황 대처',
    desc: '고장·사고 시 비상등을 켜고 갓길로 이동합니다. 안전삼각대를 차량 후방 100m에 설치하고 가드레일 밖으로 대피하세요.',
    detail: '긴급 시 비상전화(112), 한국도로공사 1588-2504로 연락하세요.',
  },
  {
    no: 7,
    title: '화물차 근처 주의',
    desc: '대형 화물차의 사각지대를 피하고, 화물차 뒤에서 장시간 주행하지 마세요. 적재물 낙하 사고 위험이 있습니다.',
    detail: '화물차 사각지대: 운전석 바로 앞, 양쪽 옆 1~2m, 뒤쪽 30m 이내.',
  },
  {
    no: 8,
    title: '날씨별 대응',
    desc: '비: 속도 20% 감속, 수막현상 주의. 안개: 안개등 점등, 50km/h 이하. 눈: 스노우체인 장착, 급브레이크·급핸들 금지.',
    detail: '우천 시 제동거리는 마른 노면 대비 1.5배, 빙판은 6~8배까지 늘어납니다.',
  },
];

// 피로 관리·휴식 가이드
const fatigueManagement = [
  {
    rule: '2시간 규칙',
    icon: '2H',
    desc: '연속 운전 2시간마다 최소 15~20분 휴식합니다. 한국도로공사도 2시간 운전-15분 휴식을 권장합니다.',
    tip: '네비게이션에서 2시간 알림을 설정하면 휴식 타이밍을 놓치지 않습니다.',
  },
  {
    rule: '졸음쉼터 활용',
    icon: '30',
    desc: '전국 고속도로에 약 230여 개의 졸음쉼터가 설치되어 있습니다. 평균 15~30km 간격으로 위치합니다.',
    tip: '졸음쉼터에서 10~15분 수면이 2시간 각성 효과와 동일합니다.',
  },
  {
    rule: '스트레칭',
    icon: '5M',
    desc: '휴게소·졸음쉼터에서 목·어깨·허리·다리 스트레칭을 5분간 실시합니다. 혈액 순환을 촉진합니다.',
    tip: '목 돌리기(좌우 5회), 어깨 으쓱(10회), 허리 비틀기(좌우 5회), 종아리 스트레칭.',
  },
  {
    rule: '식사 조절',
    icon: '70',
    desc: '과식은 졸음을 유발합니다. 식사량을 평소의 70% 수준으로 줄이고, 소화가 잘 되는 음식을 선택하세요.',
    tip: '탄수화물 과다 섭취를 피하고, 단백질 위주의 가벼운 식사가 좋습니다.',
  },
  {
    rule: '카페인 활용법',
    icon: 'CF',
    desc: '커피는 섭취 후 20~30분 뒤에 효과가 나타납니다. 졸리기 전에 미리 마시는 것이 효과적입니다.',
    tip: '커피 마시고 15분 낮잠("카페인 냅")이 가장 효과적인 졸음 해소법입니다.',
  },
  {
    rule: '운전자 교대',
    icon: 'SW',
    desc: '동승자가 운전면허 소지자라면 2~3시간마다 운전을 교대합니다. 가장 효과적인 피로 관리법입니다.',
    tip: '교대 운전 시 보험의 "다른 운전자 특약"이 적용되는지 사전에 확인하세요.',
  },
];

// 장거리 연비 절약법 6가지
const fuelSavingTips = [
  {
    no: 1,
    title: '경제 속도 유지',
    effect: '연비 15~20% 향상',
    desc: '고속도로에서 시속 90~100km를 유지하면 최적의 연비를 얻을 수 있습니다. 시속 120km 이상에서는 공기저항이 급증하여 연비가 20~30% 하락합니다.',
  },
  {
    no: 2,
    title: '크루즈 컨트롤 사용',
    effect: '연비 5~10% 향상',
    desc: '일정 속도를 자동으로 유지하므로 불필요한 가감속이 줄어듭니다. 평지 구간에서 적극 활용하세요.',
  },
  {
    no: 3,
    title: '에어컨 효율적 사용',
    effect: '연비 5~15% 절약',
    desc: '고속 주행 시 창문을 열면 공기저항이 증가하므로 에어컨을 사용하는 것이 유리합니다. 내기순환 모드로 빠르게 냉방 후 온도를 조절하세요.',
  },
  {
    no: 4,
    title: '타이어 공기압 최적화',
    effect: '연비 3~5% 향상',
    desc: '적정 공기압보다 10% 부족하면 연비가 3% 하락합니다. 장거리 출발 전 냉간 상태에서 공기압을 확인하세요.',
  },
  {
    no: 5,
    title: '불필요한 짐 정리',
    effect: '연비 1~3% 향상',
    desc: '차량 무게 50kg 증가 시 연비가 약 2% 하락합니다. 트렁크의 불필요한 짐을 정리하고, 루프박스·루프랙은 미사용 시 분리하세요.',
  },
  {
    no: 6,
    title: '셀프 주유소·알뜰 주유소 활용',
    effect: '리터당 50~150원 절약',
    desc: '오피넷(opinet.co.kr)에서 경로상 최저가 주유소를 검색합니다. 셀프 주유소는 리터당 50~100원, 알뜰 주유소는 100~150원 저렴합니다.',
  },
];

// 구간별 통행료·휴게소 정보
const routeInfo = [
  {
    route: '서울 → 부산',
    highway: '경부고속도로',
    distance: '약 417km',
    time: '약 4시간 20분',
    tollSmall: '20,700원',
    tollMedium: '21,500원',
    restStops: '안성, 천안(호두), 옥산, 황간, 금호, 경산, 건천, 언양, 통도사',
    tip: '추석·설 연휴에는 6~10시간 소요. 새벽 4~5시 출발이 가장 빠름',
  },
  {
    route: '서울 → 강릉',
    highway: '영동고속도로',
    distance: '약 237km',
    time: '약 2시간 30분',
    tollSmall: '10,600원',
    tollMedium: '10,900원',
    restStops: '덕평, 횡성, 안흥, 평창(대관령)',
    tip: '대관령 구간 급경사·커브 주의. 겨울철 결빙 구간 다수',
  },
  {
    route: '서울 → 광주',
    highway: '호남고속도로',
    distance: '약 330km',
    time: '약 3시간 30분',
    tollSmall: '14,200원',
    tollMedium: '14,700원',
    restStops: '안성, 천안, 이인, 논산, 정읍, 고창',
    tip: '논산 분기점에서 논산천안고속도로와 합류하므로 정체 구간 확인',
  },
  {
    route: '서울 → 대전',
    highway: '경부고속도로',
    distance: '약 164km',
    time: '약 1시간 50분',
    tollSmall: '7,400원',
    tollMedium: '7,700원',
    restStops: '안성, 천안(호두), 옥산',
    tip: '천안~대전 구간은 주말 정체가 잦음. 당진영덕고속도로 우회 가능',
  },
  {
    route: '서울 → 속초',
    highway: '서울양양고속도로',
    distance: '약 198km',
    time: '약 2시간 10분',
    tollSmall: '14,800원',
    tollMedium: '15,200원',
    restStops: '홍천, 인제',
    tip: '동절기 미시령·한계령 구간 결빙 주의. 체인 필수 구간 있음',
  },
  {
    route: '서울 → 여수',
    highway: '호남고속도로+순천완주',
    distance: '약 390km',
    time: '약 4시간',
    tollSmall: '17,800원',
    tollMedium: '18,300원',
    restStops: '안성, 천안, 논산, 정읍, 장성, 곡성, 순천',
    tip: '순천완주고속도로 경유. 남해안 진입 시 2차로 구간 서행 주의',
  },
];

// FAQ
const faqItems = [
  {
    q: '장거리 운전 전 차량 점검은 꼭 해야 하나요?',
    a: '반드시 해야 합니다. 고속도로에서 차량 고장이 발생하면 대형 사고로 이어질 수 있고, 견인 비용(10~30만 원)과 긴급 정비비가 추가됩니다. 출발 전 10분 투자로 타이어·엔진오일·냉각수·브레이크·라이트만 확인해도 도로 위 고장의 80%를 예방할 수 있습니다.',
  },
  {
    q: '장거리 운전 시 최적의 휴식 주기는?',
    a: '한국도로공사에서 권장하는 기준은 "2시간 운전, 15분 이상 휴식"입니다. 연구에 따르면 2시간 이상 연속 운전 시 집중력이 크게 저하되며, 3시간 이후에는 음주운전과 비슷한 수준의 반응속도 저하가 나타납니다. 고속도로 졸음쉼터를 적극 활용하세요.',
  },
  {
    q: '고속도로에서 타이어 펑크가 나면 어떻게 하나요?',
    a: '비상등을 즉시 켜고 서서히 감속하며 갓길로 이동합니다. 차에서 내리기 전 안전삼각대를 차량 후방 100m 이상에 설치하세요. 가드레일 밖으로 대피한 후 보험사 긴급출동(대부분 무료) 또는 한국도로공사 1588-2504에 연락합니다. 갓길에서 직접 타이어 교체는 매우 위험하므로 전문가 도움을 받으세요.',
  },
  {
    q: '고속도로 통행료를 절약하는 방법이 있나요?',
    a: '하이패스를 사용하면 출퇴근 시간대(7~9시, 18~20시) 고속도로 통행료가 50% 할인됩니다. 경차는 통행료 50% 감면이 적용됩니다. 명절 연휴에는 특별 할인(소형차 50%)이 적용되는 경우도 있습니다. 하이패스 단말기는 2~4만 원에 구매할 수 있으며, 통행료 절약으로 빠르게 회수됩니다.',
  },
  {
    q: '장거리 운전 시 연비를 최대화하려면?',
    a: '시속 90~100km의 경제 속도를 유지하고, 크루즈 컨트롤을 활용하면 연비를 15~20% 개선할 수 있습니다. 급가속·급제동을 피하고, 타이어 공기압을 적정 수준으로 유지하세요. 에어컨은 내기순환으로 초기 냉방 후 외기순환으로 전환하면 효율적입니다. 트렁크의 불필요한 짐(50kg)을 줄이면 연비가 약 2% 향상됩니다.',
  },
  {
    q: '어린이·반려동물과 장거리 운전 시 주의사항은?',
    a: '어린이는 반드시 카시트(만 6세 미만 의무, 미착용 시 과태료 6만 원)를 사용하고, 1.5~2시간마다 휴식합니다. 멀미약은 출발 30분 전에 복용하세요. 반려동물은 전용 캐리어나 안전벨트를 사용하고, 2시간마다 물과 산책 시간을 제공합니다. 여름철에는 절대 차 안에 아이나 반려동물을 두고 내리지 마세요.',
  },
  {
    q: '전기차로 장거리 운전할 때 충전 계획은 어떻게 세우나요?',
    a: '출발 전 경로상 급속 충전소 위치를 네비게이션이나 환경부 충전소 앱에서 확인합니다. 배터리 잔량 20% 이하로 떨어지기 전에 충전하는 것이 안전합니다. 고속도로 휴게소에는 50kW~350kW 급속 충전기가 설치되어 있으며, 350kW 급속 충전 시 약 15~20분에 80% 충전이 가능합니다. 명절 연휴에는 충전 대기 시간이 길어질 수 있으므로 여유 있는 충전 계획을 세우세요.',
  },
];

export default function LongDistanceDrivingGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '장거리 운전 준비 체크리스트 - 차량 점검·필수 준비물·고속도로 팁',
          description: '장거리 운전 전 차량 점검 10항목, 필수 준비물, 고속도로 운전 팁, 피로 관리법, 연비 절약법을 총정리했습니다.',
          url: `${BASE_URL}/guide/long-distance-driving`,
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
            { '@type': 'ListItem', position: 3, name: '장거리 운전 체크리스트', item: `${BASE_URL}/guide/long-distance-driving` },
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
            <li className="text-gray-900 font-medium">장거리 운전 체크리스트</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">운전 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            장거리 운전 준비 체크리스트
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            장거리 운전 전 차량 점검 10항목, 필수 준비물, 고속도로 안전 운전 팁,
            피로 관리법, 연비 절약법, 구간별 통행료 정보를 총정리했습니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">차량 점검</p>
              <p className="text-lg font-bold text-amber-600">10항목</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">권장 휴식 주기</p>
              <p className="text-lg font-bold text-amber-600">2시간마다</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">서울→부산 통행료</p>
              <p className="text-lg font-bold text-amber-600">20,700원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">경제 속도</p>
              <p className="text-lg font-bold text-green-600">90~100km/h</p>
            </div>
          </div>
        </section>

        {/* ===== Section 1: 출발 전 차량 점검 체크리스트 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">출발 전 차량 점검 체크리스트 10항목</h2>
            <p className="text-sm text-gray-500 mb-6">출발 전 10분 투자로 도로 위 고장의 80%를 예방할 수 있습니다</p>
            <div className="space-y-4">
              {vehicleChecklist.map((item) => (
                <div key={item.no} className="flex items-start gap-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {item.no}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.item}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.detail}</p>
                    <div className="bg-red-50 rounded-lg px-3 py-2 text-xs text-red-700">
                      <strong>주의:</strong> {item.warning}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>TIP:</strong> 가까운 정비소에서 &quot;장거리 출발 전 점검&quot;을 요청하면 무료 또는 1~2만 원에 종합 점검을 받을 수 있습니다. 공임나라·카닥 등에서 예약 가능합니다.
            </div>
          </div>
        </section>

        {/* ===== Section 2: 장거리 운전 필수 준비물 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">장거리 운전 필수 준비물</h2>
            <p className="text-sm text-gray-500 mb-6">안전용품은 법규상 의무 비치 항목을 포함합니다</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">분류</th>
                    <th className="px-4 py-3 text-left font-semibold">준비물</th>
                    <th className="px-4 py-3 text-center font-semibold">중요도</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {essentialItems.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">{row.category}</td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.item}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          row.importance === '필수'
                            ? 'bg-red-100 text-red-700'
                            : row.importance === '권장'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {row.importance}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>긴급 연락처 저장:</strong> 보험사 긴급출동, 한국도로공사(1588-2504), 경찰(112), 소방(119)을 스마트폰에 즐겨찾기로 저장해두세요.
            </div>
          </div>
        </section>

        {/* ===== Section 3: 고속도로 운전 팁 8가지 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">고속도로 안전 운전 팁 8가지</h2>
            <p className="text-sm text-gray-500 mb-6">고속도로 사고의 40%는 안전 수칙 미준수가 원인입니다</p>
            <div className="space-y-4">
              {highwayTips.map((item) => (
                <div key={item.no} className="border border-gray-100 rounded-xl p-5 hover:border-amber-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.no}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                      <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 4: 피로 관리·휴식 가이드 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">피로 관리·휴식 가이드</h2>
            <p className="text-sm text-gray-500 mb-6">졸음 운전 사고 치사율은 일반 사고의 2.4배입니다</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fatigueManagement.map((item) => (
                <div key={item.rule} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-amber-500 text-white text-xs font-bold w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </span>
                    <h3 className="font-bold text-gray-900">{item.rule}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">{item.tip}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-red-50 rounded-xl p-4 text-sm text-red-800">
              <strong>절대 금지:</strong> 졸음이 올 때 창문만 열고 계속 운전하는 것은 효과가 없습니다.
              반드시 안전한 곳에 정차하고 10~15분 수면을 취하세요.
              갓길 정차는 추돌 위험이 있으므로, 반드시 졸음쉼터나 휴게소를 이용하세요.
            </div>
          </div>
        </section>

        {/* ===== Section 5: 장거리 운전 연비 절약법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">장거리 운전 연비 절약법 6가지</h2>
            <p className="text-sm text-gray-500 mb-6">서울-부산 왕복 기준 최대 3~5만 원의 유류비를 절약할 수 있습니다</p>
            <div className="space-y-4">
              {fuelSavingTips.map((item) => (
                <div key={item.no} className="flex items-start gap-4 border border-gray-100 rounded-xl p-5 hover:border-amber-200 transition-colors">
                  <span className="bg-green-100 text-green-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.no}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{item.effect}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>연비 절약 시뮬레이션 (서울→부산 편도 기준):</strong> 중형 세단(연비 13km/L) 기준,
              경제 속도 주행 시 연료비 약 53,000원, 과속 주행(120km/h) 시 약 65,000원. 편도 약 12,000원, 왕복 약 24,000원 절약 가능.
            </div>
          </div>
        </section>

        {/* ===== Section 6: 구간별 통행료·휴게소 정보 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">구간별 통행료·휴게소 정보</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 소형차(1종) 통행료 / 비정체 시 예상 소요시간</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">구간</th>
                    <th className="px-4 py-3 text-right font-semibold">거리</th>
                    <th className="px-4 py-3 text-right font-semibold">소요시간</th>
                    <th className="px-4 py-3 text-right font-semibold">통행료(소형)</th>
                    <th className="px-4 py-3 text-left font-semibold">주요 휴게소</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {routeInfo.map((row) => (
                    <tr key={row.route} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-gray-900 whitespace-nowrap">{row.route}</p>
                        <p className="text-xs text-gray-400">{row.highway}</p>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.distance}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.time}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.tollSmall}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.restStops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• <strong>경차 할인:</strong> 경차(배기량 1,000cc 이하)는 고속도로 통행료 50% 감면</p>
              <p>• <strong>하이패스 할인:</strong> 출퇴근 시간대(7~9시, 18~20시) 50% 할인</p>
              <p>• <strong>실시간 교통정보:</strong> 한국도로공사 앱(고속도로 교통정보) 또는 실시간도로정보(road.re.kr)에서 확인</p>
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 통행료는 하이패스 기준이며, 구간·차종에 따라 달라질 수 있습니다. 한국도로공사 홈페이지에서 정확한 요금을 확인하세요.</p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">장거리 운전 자주 묻는 질문</h2>
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
              장거리 운전 비용을 미리 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              유류비, 통행료, 유지비까지 한눈에 비교합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/fuel-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                유류비 계산기
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
