import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 배터리 교체 비용·시기 가이드 - 종류별·브랜드별 가격 비교',
  description:
    '자동차 배터리 수명, 교체 시기 판단법, MF·AGM·EFB·리튬이온 종류별 가격 비교, 브랜드별(델코·로케트·아틀라스·보쉬·발타) 비용, 정비소 vs 셀프 교체 방법, 방전 대처법을 총정리했습니다.',
  keywords: [
    '자동차 배터리 교체',
    '자동차 배터리 가격',
    '배터리 교체 비용',
    '배터리 교체 시기',
    '배터리 방전 대처',
    '점프 스타트 방법',
    '델코 배터리 가격',
    'AGM 배터리',
    '배터리 수명 연장',
    '셀프 배터리 교체',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-battery-replacement` },
  openGraph: {
    title: '자동차 배터리 교체 비용·시기 가이드 - 종류별·브랜드별 가격 비교',
    description: '자동차 배터리 수명과 교체 시기, 종류별·브랜드별 가격 비교, 셀프 교체 방법을 정리했습니다.',
    url: `${BASE_URL}/guide/car-battery-replacement`,
    type: 'website',
  },
};

// 배터리 종류별 특징
const batteryTypes = [
  {
    type: 'MF 배터리 (습식)',
    lifespan: '3~4년',
    price: '7~12만 원',
    feature: '가장 보편적, 보수 불필요',
    strength: '가격 저렴, 교체 용이',
    suitable: '일반 가솔린·디젤 승용차',
  },
  {
    type: 'AGM 배터리',
    lifespan: '4~6년',
    price: '15~30만 원',
    feature: '유리섬유 흡수 매트, ISG 대응',
    strength: '진동·충격에 강함, 급속 충전 가능',
    suitable: 'ISG 장착 차량, 고급 수입차',
  },
  {
    type: 'EFB 배터리',
    lifespan: '3~5년',
    price: '10~18만 원',
    feature: 'MF 개선형, ISG 경량 대응',
    strength: 'AGM 대비 저렴, MF 대비 내구성 우수',
    suitable: 'ISG 장착 소·중형차, 국산 최신 차량',
  },
  {
    type: '리튬이온 배터리',
    lifespan: '8~15년',
    price: '200~1,500만 원',
    feature: '전기차·HEV 고전압 구동 배터리',
    strength: '에너지 밀도 높음, 장수명',
    suitable: '전기차, 플러그인 하이브리드',
  },
];

// 방전 증상 5가지
const dischargeSymptoms = [
  {
    symptom: '시동 시 크랭킹 소리가 느려짐',
    icon: '🔊',
    detail: '시동 모터의 회전 속도가 눈에 띄게 느려지고, "르르르르" 소리가 길어집니다. 정상 대비 2~3초 이상 걸리면 배터리 교체를 고려하세요.',
  },
  {
    symptom: '헤드라이트가 어두워짐',
    icon: '💡',
    detail: '공회전 시 헤드라이트 밝기가 감소하거나, RPM에 따라 밝기가 변하면 배터리 전압 저하의 신호입니다.',
  },
  {
    symptom: '전자 장비 오작동',
    icon: '📱',
    detail: '내비게이션 리셋, 시계 초기화, 윈도우 자동 기능 해제, 블루투스 연결 끊김 등 전자 장비가 불안정해집니다.',
  },
  {
    symptom: '배터리 경고등 점등',
    icon: '🚨',
    detail: '계기판에 배터리 모양 경고등이 점등되면 충전 시스템 또는 배터리 자체에 문제가 있다는 의미입니다. 즉시 점검이 필요합니다.',
  },
  {
    symptom: '냉간 시동 불량 (특히 겨울철)',
    icon: '❄️',
    detail: '기온이 영하로 내려가면 배터리 성능이 30~50% 저하됩니다. 아침 첫 시동이 잘 안 걸리면 배터리 수명이 다한 것입니다.',
  },
];

// 브랜드별 가격 비교
const batteryBrands = [
  { brand: '델코 (DELKOR)', origin: '한국 (존슨콘트롤즈)', type: 'MF', price60: '8~11만 원', price80: '10~14만 원', priceAgm: '20~28만 원', feature: '국산차 순정 배터리 1위, A/S 네트워크 우수' },
  { brand: '로케트 (ROCKET)', origin: '한국 (세방전지)', type: 'MF', price60: '7~10만 원', price80: '9~13만 원', priceAgm: '18~25만 원', feature: '가성비 우수, 택배 교체 서비스 제공' },
  { brand: '아틀라스 (ATLAS)', origin: '한국 (한국앗치슨)', type: 'MF', price60: '7~9만 원', price80: '9~12만 원', priceAgm: '17~24만 원', feature: '합리적인 가격, 수출 비중 높은 품질' },
  { brand: '보쉬 (BOSCH)', origin: '독일', type: 'AGM', price60: '12~16만 원', price80: '15~20만 원', priceAgm: '25~35만 원', feature: '유럽차 순정 교체용, 실버·S5·S6 라인업' },
  { brand: '발타 (VARTA)', origin: '독일', type: 'AGM', price60: '11~15만 원', price80: '14~19만 원', priceAgm: '23~32만 원', feature: '유럽 점유율 1위, BMW·벤츠·아우디 순정 공급' },
];

// 교체 비용 비교 (정비소 vs 셀프)
const replacementCosts = [
  { category: '국산차 · MF 배터리 (60Ah)', dealerCost: '12~18만 원', shopCost: '8~13만 원', selfCost: '7~11만 원', note: '가장 보편적, 교체 30분' },
  { category: '국산차 · MF 배터리 (80Ah)', dealerCost: '15~22만 원', shopCost: '10~16만 원', selfCost: '9~13만 원', note: 'SUV·대형 세단' },
  { category: '국산차 · EFB 배터리', dealerCost: '18~28만 원', shopCost: '12~20만 원', selfCost: '10~18만 원', note: 'ISG 장착 최신 차량' },
  { category: '국산차 · AGM 배터리', dealerCost: '25~38만 원', shopCost: '18~28만 원', selfCost: '15~28만 원', note: 'ISG 고급형, 제네시스' },
  { category: '수입차 · AGM 배터리', dealerCost: '35~55만 원', shopCost: '25~40만 원', selfCost: '20~32만 원', note: '벤츠·BMW·아우디 등' },
  { category: '수입차 · 대용량 AGM (90Ah~)', dealerCost: '45~70만 원', shopCost: '30~50만 원', selfCost: '25~40만 원', note: 'SUV·대형 세단' },
];

// 셀프 교체 단계
const selfReplaceSteps = [
  {
    step: 1,
    title: '배터리 규격 확인',
    desc: '차량 매뉴얼이나 기존 배터리에서 규격(용량 Ah, 크기 그룹, 단자 위치 L/R)을 확인합니다. 호환되지 않는 배터리를 구매하면 장착이 불가합니다.',
    caution: '배터리 용량(Ah)과 CCA(저온 시동 전류)가 순정 이상인 제품을 선택하세요',
  },
  {
    step: 2,
    title: '시동 끄기 및 준비',
    desc: '시동을 끄고 키를 빼거나 스마트키를 멀리 둡니다. 10~12mm 스패너(또는 소켓 렌치), 장갑, 보호 안경을 준비합니다.',
    caution: '금속 공구가 양극(+)과 차체에 동시에 닿으면 합선(스파크)이 발생합니다',
  },
  {
    step: 3,
    title: '음극(-) 단자 먼저 분리',
    desc: '검은색 음극(-) 단자를 먼저 분리합니다. 너트를 풀고 단자를 들어올려 배터리에서 완전히 분리한 뒤, 차체 금속부에 닿지 않도록 옆으로 젖혀둡니다.',
    caution: '반드시 음극(-) 먼저! 양극(+)을 먼저 분리하면 합선 위험이 있습니다',
  },
  {
    step: 4,
    title: '양극(+) 단자 분리 및 배터리 탈거',
    desc: '빨간색 양극(+) 단자를 분리합니다. 배터리 고정 브래킷(클램프)을 풀고 배터리를 들어올려 제거합니다. 배터리는 15~20kg으로 무거우니 주의하세요.',
    caution: '배터리 트레이의 부식이나 오염이 있다면 청소 후 새 배터리를 장착하세요',
  },
  {
    step: 5,
    title: '새 배터리 장착 및 양극(+) 먼저 연결',
    desc: '새 배터리를 트레이에 올리고 고정 브래킷으로 단단히 고정합니다. 양극(+) 단자를 먼저 연결하고 너트를 조입니다.',
    caution: '단자 연결 순서는 분리의 역순! 양극(+) 먼저 → 음극(-) 나중에',
  },
  {
    step: 6,
    title: '음극(-) 연결 및 최종 점검',
    desc: '음극(-) 단자를 연결하고 너트를 조입니다. 단자에 부식 방지 그리스를 바릅니다. 시동을 걸어 정상 작동을 확인하고, 시계·라디오·파워윈도우 등 전자 장비를 초기 설정합니다.',
    caution: '폐배터리는 가까운 정비소·배터리 판매점에 무료 회수를 요청하세요 (폐기물 규정)',
  },
];

// 점프 스타트 6단계
const jumpStartSteps = [
  {
    step: 1,
    title: '점프 케이블 또는 점프 스타터 준비',
    desc: '점프 케이블(부스터 케이블)이나 휴대용 점프 스타터를 준비합니다. 점프 케이블 사용 시 방전되지 않은 다른 차량(구원차)이 필요합니다.',
  },
  {
    step: 2,
    title: '두 차량의 시동 끄기',
    desc: '방전차와 구원차 모두 시동을 끄고, 기어를 P(주차)에 놓고 주차 브레이크를 건 상태에서 작업합니다. 두 차의 배터리가 가까이 오도록 주차합니다.',
  },
  {
    step: 3,
    title: '빨간 케이블 연결 (양극 +)',
    desc: '빨간 케이블의 한쪽을 방전차 배터리의 양극(+)에 연결하고, 다른 쪽을 구원차 배터리의 양극(+)에 연결합니다.',
  },
  {
    step: 4,
    title: '검정 케이블 연결 (음극 -)',
    desc: '검정 케이블의 한쪽을 구원차 배터리의 음극(-)에 연결합니다. 다른 쪽은 방전차의 엔진 블록 또는 접지 볼트(배터리가 아닌 금속 부분)에 연결합니다.',
  },
  {
    step: 5,
    title: '구원차 시동 후 방전차 시동',
    desc: '구원차의 시동을 먼저 걸고 2~3분 정도 공회전합니다. 이후 방전차의 시동을 겁니다. 한 번에 안 걸리면 5분 간격으로 2~3회 재시도합니다.',
  },
  {
    step: 6,
    title: '케이블 분리 (연결 역순)',
    desc: '방전차 시동이 걸리면 연결의 역순으로 케이블을 분리합니다: 방전차 검정(-) → 구원차 검정(-) → 구원차 빨간(+) → 방전차 빨간(+). 시동 후 최소 30분 이상 주행하여 배터리를 충전합니다.',
  },
];

// 배터리 수명 연장 팁
const lifetimeTips = [
  {
    tip: '주 2~3회 이상, 30분 이상 주행하기',
    icon: '🚗',
    detail: '짧은 거리만 반복 주행하면 배터리가 충분히 충전되지 않아 수명이 단축됩니다. 주기적으로 30분 이상 주행하여 배터리를 완충해주세요.',
  },
  {
    tip: '시동 끈 상태에서 전자 장비 사용 자제',
    icon: '🔌',
    detail: '시동 없이 블랙박스 주차 모드, 라디오, 히터, 핸드폰 충전 등을 장시간 사용하면 방전됩니다. 블랙박스는 저전압 차단 기능을 설정하세요.',
  },
  {
    tip: '겨울철 실내 주차 활용',
    icon: '🏠',
    detail: '영하 10도 이하에서 배터리 성능이 50% 이상 저하됩니다. 가능하면 실내 주차장을 이용하고, 단열 커버 사용도 효과적입니다.',
  },
  {
    tip: '단자 부식 주기적 점검·청소',
    icon: '🧹',
    detail: '배터리 단자에 하얀 분말(부식)이 생기면 접촉 저항이 증가합니다. 6개월~1년마다 와이어 브러시로 청소하고 부식 방지 그리스를 발라주세요.',
  },
  {
    tip: '장기 미사용 시 배터리 분리 또는 충전기 연결',
    icon: '🔋',
    detail: '2주 이상 차량을 사용하지 않을 경우 음극(-) 단자를 분리하거나, 스마트 충전기(트리클 충전기)를 연결해 방전을 방지하세요.',
  },
  {
    tip: '시동 직후 전기 장치 한꺼번에 켜지 않기',
    icon: '⚡',
    detail: '시동 직후에는 에어컨, 열선, 오디오 등 고전력 장치를 한꺼번에 켜면 배터리에 부담됩니다. 시동 후 1~2분 뒤에 순차적으로 켜세요.',
  },
  {
    tip: '정기적인 배터리 전압 점검',
    icon: '📊',
    detail: '멀티미터로 시동 전 전압이 12.4V 이상인지 확인하세요. 12.0V 이하면 충전 또는 교체가 필요합니다. 정비소 무료 점검도 활용하세요.',
  },
  {
    tip: '순정 규격 이상의 배터리 사용',
    icon: '✅',
    detail: '차량에 후시장 전자 장비(블랙박스, 오디오, LED 등)를 추가했다면 순정보다 10~20Ah 높은 용량의 배터리를 사용하면 수명이 연장됩니다.',
  },
];

// FAQ
const faqItems = [
  {
    q: '자동차 배터리 교체 비용은 평균 얼마인가요?',
    a: '국산차 MF 배터리 기준 정비소에서 8~16만 원(배터리+공임), 셀프 교체 시 7~13만 원입니다. AGM 배터리는 18~40만 원, 수입차는 25~70만 원까지 차이가 납니다. 출장 교체 서비스 이용 시 출장비 1~3만 원이 추가됩니다.',
  },
  {
    q: '배터리 수명은 보통 몇 년인가요?',
    a: '일반 MF 배터리는 평균 3~4년, AGM 배터리는 4~6년입니다. 다만 운전 패턴, 기후, 전자 장비 사용량에 따라 크게 달라집니다. 짧은 거리 반복 주행, 잦은 방전, 극한 기온 노출 시 2년 만에 교체가 필요할 수도 있습니다.',
  },
  {
    q: 'MF 배터리와 AGM 배터리의 차이는?',
    a: 'MF(Maintenance Free) 배터리는 액체 전해질을 사용하는 전통적인 방식으로 가격이 저렴합니다. AGM(Absorbent Glass Mat) 배터리는 유리섬유 매트에 전해질을 흡수시킨 방식으로 진동에 강하고 급속 충·방전이 가능합니다. ISG(공회전 제한 장치) 차량은 반드시 AGM 또는 EFB를 사용해야 합니다.',
  },
  {
    q: '배터리 방전 시 점프 스타트 후 얼마나 주행해야 하나요?',
    a: '점프 스타트 후 최소 30분~1시간 이상 연속 주행해야 배터리가 충분히 충전됩니다. 시내 주행보다는 고속도로 주행이 충전 효율이 높습니다. 방전이 반복되면 배터리 수명이 크게 단축되므로 2회 이상 방전 시 교체를 권장합니다.',
  },
  {
    q: '셀프 배터리 교체 시 주의사항은?',
    a: '가장 중요한 것은 분리 순서(음극 먼저)와 연결 순서(양극 먼저)를 지키는 것입니다. 금속 공구가 양극 단자와 차체에 동시에 닿으면 합선으로 화상이나 배터리 폭발 위험이 있습니다. 또한 배터리 분리 시 ECU 메모리가 초기화되어 시계, 오디오, 파워윈도우 설정을 다시 해야 합니다.',
  },
  {
    q: '배터리 교체 후 해야 할 것이 있나요?',
    a: '시계 재설정, 오디오 프리셋 재입력, 파워윈도우 자동 기능 초기화(완전 개폐 2~3회), 공회전 학습(시동 후 10분 공회전)을 해주세요. 수입차의 경우 배터리 등록(코딩)이 필요한 차종도 있어 진단기가 필요할 수 있습니다.',
  },
  {
    q: '겨울에 배터리가 자주 방전되는 이유는?',
    a: '배터리의 화학 반응 속도가 저온에서 느려지기 때문입니다. 영하 10도에서 배터리 성능은 상온 대비 약 50%로 떨어지고, 동시에 시동 모터가 차가운 엔진을 돌리는 데 더 많은 전류가 필요합니다. 3년 이상 된 배터리는 겨울 전에 점검하는 것이 좋습니다.',
  },
  {
    q: '폐배터리는 어떻게 처리하나요?',
    a: '자동차 배터리에는 납(Pb)과 황산이 포함되어 있어 일반 쓰레기로 배출할 수 없습니다. 배터리 판매점, 정비소, 폐배터리 수거 업체에 무료로 회수를 요청하세요. 폐배터리 보증금 제도에 따라 반환 시 3,000~5,000원을 돌려받을 수 있습니다.',
  },
];

export default function CarBatteryReplacementGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차 배터리 교체 비용·시기 가이드 - 종류별·브랜드별 가격 비교',
          description: '자동차 배터리 수명, 교체 시기 판단법, 종류별·브랜드별 가격 비교, 셀프 교체 방법을 총정리했습니다.',
          url: `${BASE_URL}/guide/car-battery-replacement`,
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
            { '@type': 'ListItem', position: 3, name: '자동차 배터리 교체', item: `${BASE_URL}/guide/car-battery-replacement` },
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
            <li className="text-gray-900 font-medium">자동차 배터리 교체</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">정비 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            자동차 배터리 교체 비용·시기 가이드
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            배터리 수명과 교체 시기 판단법, MF·AGM·EFB 종류별 가격 비교, 브랜드별 비용,
            정비소 vs 셀프 교체 방법, 방전 대처법까지 한눈에 정리했습니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">평균 수명</p>
              <p className="text-lg font-bold text-amber-600">3~5년</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">국산차 MF 배터리</p>
              <p className="text-lg font-bold text-amber-600">7~16만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">수입차 AGM 배터리</p>
              <p className="text-lg font-bold text-amber-600">25~55만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">셀프 교체</p>
              <p className="text-lg font-bold text-green-600">20~40% 절약</p>
            </div>
          </div>
        </section>

        {/* ===== Section 1: 배터리 수명과 교체 시기 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">자동차 배터리 수명과 교체 시기</h2>
            <p className="text-sm text-gray-500 mb-4">일반 MF 배터리 기준 평균 3~5년, 사용 환경에 따라 2~6년까지 차이가 납니다</p>

            <div className="bg-amber-50 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-amber-800 mb-2">배터리 수명에 영향을 미치는 요소</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-amber-900">
                <div>
                  <p><strong>수명 단축 요인:</strong></p>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-amber-700">
                    <li>짧은 거리 반복 주행 (5km 미만)</li>
                    <li>잦은 방전 (2회 이상 방전 시 수명 30% 감소)</li>
                    <li>극한 기온 (영하 15도 이하 / 영상 40도 이상)</li>
                    <li>시동 꺼진 상태에서 전자 장비 장시간 사용</li>
                  </ul>
                </div>
                <div>
                  <p><strong>수명 연장 요인:</strong></p>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-amber-700">
                    <li>정기적인 장거리 주행 (30분 이상)</li>
                    <li>실내 주차 (온도 변화 최소화)</li>
                    <li>단자 청결 유지 및 부식 방지</li>
                    <li>적절한 용량의 배터리 사용</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">배터리 방전 증상 5가지</h3>
            <div className="space-y-4">
              {dischargeSymptoms.map((item) => (
                <div key={item.symptom} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.symptom}</h4>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-red-50 rounded-xl p-4 text-sm text-red-800">
              <strong>주의:</strong> 위 증상 중 2가지 이상 해당되면 가까운 정비소에서 배터리 전압과 CCA(저온 시동 전류)를 무료 점검받으세요. 대부분의 정비소와 배터리 전문점에서 무상 진단이 가능합니다.
            </div>
          </div>
        </section>

        {/* ===== Section 2: 배터리 종류별 특징·가격 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">배터리 종류별 특징·가격 비교</h2>
            <p className="text-sm text-gray-500 mb-6">MF(일반)·AGM·EFB·리튬이온 4가지 종류, 차량 사양에 맞는 배터리 선택이 중요합니다</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">종류</th>
                    <th className="px-4 py-3 text-right font-semibold">수명</th>
                    <th className="px-4 py-3 text-right font-semibold">가격</th>
                    <th className="px-4 py-3 text-left font-semibold">특징</th>
                    <th className="px-4 py-3 text-left font-semibold">장점</th>
                    <th className="px-4 py-3 text-left font-semibold">적합 차종</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {batteryTypes.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.type}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.lifespan}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.feature}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.strength}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.suitable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>TIP:</strong> ISG(공회전 제한 장치) 장착 차량에 일반 MF 배터리를 넣으면 잦은 충·방전으로 수명이 1~2년으로 단축됩니다. 반드시 EFB 또는 AGM 배터리를 사용하세요.
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 리튬이온 배터리는 전기차·하이브리드의 고전압 구동 배터리를 의미하며, 일반 12V 시동 배터리와는 다릅니다. 전기차도 12V 보조 배터리(AGM 또는 리튬)를 별도로 사용합니다.</p>
          </div>
        </section>

        {/* ===== Section 3: 브랜드별 배터리 가격 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">브랜드별 배터리 가격 비교</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 온라인 최저가 참고 (배터리 본체 가격, 공임 별도)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-left font-semibold">원산지</th>
                    <th className="px-4 py-3 text-right font-semibold">60Ah (MF)</th>
                    <th className="px-4 py-3 text-right font-semibold">80Ah (MF)</th>
                    <th className="px-4 py-3 text-right font-semibold">AGM</th>
                    <th className="px-4 py-3 text-left font-semibold">특징</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {batteryBrands.map((row) => (
                    <tr key={row.brand} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.brand}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.origin}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.price60}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.price80}</td>
                      <td className="px-4 py-3 text-right font-medium text-red-500 whitespace-nowrap">{row.priceAgm}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>가성비 TIP:</strong> 국산 브랜드(델코, 로케트, 아틀라스)는 수입 브랜드 대비 20~40% 저렴하면서 품질 차이가 거의 없습니다. 일반 국산차에는 델코나 로케트가 가장 보편적인 선택입니다.
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 수입차(특히 유럽차)는 배터리 등록(코딩)이 필요한 경우가 많으므로 호환 가능한 브랜드와 규격을 반드시 확인하세요</p>
          </div>
        </section>

        {/* ===== Section 4: 교체 방법 — 정비소 vs 셀프 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">교체 방법: 정비소 vs 셀프 교체</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 배터리 + 공임 포함 (셀프는 배터리 비용만)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">구분</th>
                    <th className="px-4 py-3 text-right font-semibold">서비스센터</th>
                    <th className="px-4 py-3 text-right font-semibold">일반 정비소</th>
                    <th className="px-4 py-3 text-right font-semibold">셀프 교체</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {replacementCosts.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.category}</td>
                      <td className="px-4 py-3 text-right text-red-500 font-medium whitespace-nowrap">{row.dealerCost}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-medium whitespace-nowrap">{row.shopCost}</td>
                      <td className="px-4 py-3 text-right text-green-600 font-medium whitespace-nowrap">{row.selfCost}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• <strong>서비스센터:</strong> 공식 딜러 정비소. 순정 배터리 장착, 배터리 등록(코딩) 가능, 보증 유지</p>
              <p>• <strong>일반 정비소:</strong> 동네 카센터, 배터리 전문점, 출장 교체 서비스. 공임 1~3만 원 포함</p>
              <p>• <strong>셀프 교체:</strong> 배터리 온라인 구매 후 직접 장착. 10mm 스패너만 있으면 15~20분 소요</p>
            </div>
          </div>

          {/* 셀프 교체 6단계 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">셀프 배터리 교체 6단계</h3>
            <p className="text-sm text-gray-500 mb-6">소요 시간 약 15~20분, 10mm 스패너(또는 소켓 렌치)만 있으면 가능합니다</p>
            <div className="space-y-4">
              {selfReplaceSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                    <div className="bg-red-50 rounded-lg px-3 py-2 text-xs text-red-700">
                      <strong>주의:</strong> {item.caution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>핵심 포인트:</strong> 분리할 때는 음극(-) 먼저, 연결할 때는 양극(+) 먼저! 이 순서만 기억하면 안전하게 교체할 수 있습니다.
            </div>
          </div>
        </section>

        {/* ===== Section 5: 배터리 방전 대처법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">배터리 방전 대처법: 점프 스타트 6단계</h2>
            <p className="text-sm text-gray-500 mb-6">점프 케이블이나 휴대용 점프 스타터로 방전된 배터리에 시동을 걸 수 있습니다</p>
            <div className="space-y-4">
              {jumpStartSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-red-50 rounded-xl p-4 text-sm text-red-800">
                <strong>주의사항:</strong> 점프 케이블 연결 시 양극(+)과 음극(-)을 절대 바꿔 연결하지 마세요. 차량 전자 장비가 손상되거나 배터리 폭발 위험이 있습니다.
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
                <strong>대안:</strong> 휴대용 점프 스타터(3~8만 원)를 차량에 비치하면 구원차 없이도 혼자 시동을 걸 수 있습니다. 보조 배터리(파워뱅크) 기능도 겸해 스마트폰 충전도 가능합니다.
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 6: 배터리 수명 연장 팁 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">배터리 수명 연장 팁 8가지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lifetimeTips.map((item) => (
                <div key={item.tip} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-gray-900 text-sm">{item.tip}</h3>
                  </div>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>종합 관리 효과:</strong> 위 팁들을 실천하면 배터리 수명을 평균 1~2년 연장할 수 있습니다. 특히 겨울철 전 배터리 점검과 단자 청소만으로도 방전 위험을 크게 줄일 수 있습니다.
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자동차 배터리 교체 자주 묻는 질문</h2>
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
              배터리, 엔진오일, 타이어, 보험료, 유류비까지 한눈에 비교합니다
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
