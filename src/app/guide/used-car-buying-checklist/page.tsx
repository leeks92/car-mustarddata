import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '중고차 구매 체크리스트 - 2026년 중고차 구매 전 필수 확인사항',
  description:
    '중고차 구매 전 차량 상태 점검 10항목, 서류 확인 8항목, 가격 협상 팁, 구매 후 필수 절차를 총정리했습니다. 딜러·인증중고차·개인거래·경매 채널별 장단점도 비교합니다.',
  keywords: [
    '중고차 구매',
    '중고차 체크리스트',
    '중고차 점검',
    '중고차 서류',
    '중고차 가격 협상',
    '중고차 명의이전',
    '중고차 시세',
    '중고차 사고이력',
  ],
  alternates: { canonical: `${BASE_URL}/guide/used-car-buying-checklist` },
  openGraph: {
    title: '중고차 구매 체크리스트 - 2026년 중고차 구매 전 필수 확인사항',
    description:
      '중고차 구매 전 차량 상태 점검, 서류 확인, 가격 협상, 구매 후 절차를 총정리했습니다.',
    url: `${BASE_URL}/guide/used-car-buying-checklist`,
    type: 'website',
  },
};

const preparationItems = [
  {
    emoji: '💰',
    title: '예산 설정',
    desc: '차량 구매 가격만 생각하면 안 됩니다. 취등록세(차량가의 약 7%), 보험료(연 50~200만 원), 정비비(30~100만 원), 그리고 여유 자금까지 포함하여 총예산을 설정하세요. 예를 들어 1,500만 원짜리 중고차를 사면 취등록세 약 105만 원, 보험료, 정비비까지 합쳐 최소 1,700~1,800만 원이 필요합니다.',
  },
  {
    emoji: '📝',
    title: '원하는 차종 리스트업',
    desc: '용도(출퇴근·가족·레저), 선호 크기(경차·준중형·SUV), 연료 타입(가솔린·디젤·하이브리드·전기), 연식 범위를 정리하여 후보 3~5개 차종을 선정하세요. 너무 한 차종에만 집착하면 매물이 적어 불리한 협상을 하게 됩니다.',
  },
  {
    emoji: '🔍',
    title: '시세 조사 방법',
    desc: '엔카(encar.com), KB차차차(kbchachacha.com), 보배드림(bobaedream.co.kr)에서 동일 연식·주행거리·옵션의 매물을 최소 10건 이상 비교하세요. KB국민차 시세를 기준으로 ±5% 범위가 적정 가격입니다. 급매물은 가격이 저렴하지만 숨은 하자가 있을 수 있으니 주의하세요.',
  },
];

const inspectionItems = [
  {
    number: 1,
    title: '외관 점검',
    desc: '도장 상태를 확인하세요. 색상 차이, 울퉁불퉁한 표면, 스티커로 가린 부분은 사고 수리 흔적일 수 있습니다. 각 패널의 틈새 간격이 균일한지, 문짝이 자연스럽게 닫히는지 확인합니다. 비 온 뒤 방문하면 누수 여부도 함께 확인할 수 있습니다.',
  },
  {
    number: 2,
    title: '실내 점검',
    desc: '시트 상태(찢어짐·얼룩·냄새), 계기판 경고등, 에어컨·히터 작동, 파워윈도우, 사이드미러 접힘, 오디오/내비게이션을 하나씩 점검하세요. 실내에서 곰팡이 냄새가 나면 침수차 의심이 필요합니다. 트렁크 바닥 매트 아래 녹 여부도 확인합니다.',
  },
  {
    number: 3,
    title: '엔진룸 점검',
    desc: '엔진오일 색상(검은색이면 교환 필요, 우윳빛이면 냉각수 혼입 의심), 벨트·호스의 균열이나 노후 상태, 오일 누유 흔적을 확인합니다. 엔진을 걸었을 때 이상 진동이나 소음이 없는지, 냉각수 양은 충분한지도 점검하세요.',
  },
  {
    number: 4,
    title: '하부 점검',
    desc: '차량 하부에 녹이 심하거나 용접 흔적이 있으면 사고차 또는 침수차일 가능성이 높습니다. 하부 프레임의 변형, 오일팬 손상, 배기관 부식 여부를 확인하세요. 정비소에서 리프트를 이용하면 정확하게 볼 수 있습니다.',
  },
  {
    number: 5,
    title: '타이어 상태',
    desc: '4개 타이어의 마모 상태가 균일한지 확인합니다. 한쪽만 심하게 닳았다면 휠 얼라인먼트 문제 또는 사고 이력이 의심됩니다. 트레드 깊이가 1.6mm 이하면 즉시 교체가 필요하며, 제조일자(DOT 코드)가 5년 이상이면 교체를 고려하세요.',
  },
  {
    number: 6,
    title: '브레이크 점검',
    desc: '브레이크 패드 잔량, 디스크 마모 상태를 확인합니다. 시운전 시 브레이크 소음(끼익 소리), 제동 시 한쪽으로 쏠림 현상, ABS 작동 여부를 점검하세요. 브레이크 오일의 색상이 검거나 탁하면 교환이 필요합니다.',
  },
  {
    number: 7,
    title: '조향장치 점검',
    desc: '핸들을 좌우로 끝까지 돌렸을 때 이상 소음이 없는지, 주행 중 핸들이 한쪽으로 쏠리지 않는지 확인합니다. 파워스티어링 오일 누유 여부, 타이로드 엔드·볼조인트의 유격도 점검 대상입니다.',
  },
  {
    number: 8,
    title: '전자장비 점검',
    desc: '전조등·후미등·방향지시등·안개등의 정상 작동 여부, 후방카메라·주차 센서, 크루즈 컨트롤, 열선 시트, 통풍 시트 등 전자 옵션을 하나씩 작동시켜 보세요. 특히 고급 옵션이 많은 차량은 수리비가 높으므로 꼼꼼히 확인해야 합니다.',
  },
  {
    number: 9,
    title: '주행 테스트',
    desc: '최소 20~30분, 시내 도로와 고속도로를 모두 주행해 보세요. 가속 시 반응, 변속 충격, 이상 진동, 소음(엔진·미션·서스펜션), 고속 주행 시 직진 안정성을 확인합니다. 가능하면 경사로 출발, 급제동 테스트도 해보세요.',
  },
  {
    number: 10,
    title: '배출가스 확인',
    desc: '배기구에서 나오는 연기 색상을 확인하세요. 흰 연기가 계속되면 냉각수 누출(엔진 헤드 가스켓 문제), 푸른 연기는 엔진오일 소모, 검은 연기는 연료 과다 분사를 의심할 수 있습니다. 디젤 차량은 DPF(매연 저감 장치) 상태도 중요합니다.',
  },
];

const documentItems = [
  {
    emoji: '📄',
    title: '자동차등록증',
    desc: '차량 소유자, 차종, 연식, 배기량, 차대번호 등 기본 정보가 기재되어 있습니다. 실제 차량과 등록증 정보가 일치하는지 반드시 대조하세요. 차대번호(VIN)는 차량 도어 옆면이나 앞유리 하단에서 확인할 수 있습니다.',
  },
  {
    emoji: '📋',
    title: '성능상태점검기록부',
    desc: '중고차 매매 시 의무적으로 발급되는 서류입니다. 주요 장치의 상태(엔진·변속기·조향·제동·전기), 사고 수리 이력, 침수 여부가 기록됩니다. 자동차민원 대국민포털(ecar.go.kr)에서 온라인 조회가 가능합니다.',
  },
  {
    emoji: '🏛️',
    title: '자동차세 완납증명',
    desc: '이전 소유자의 자동차세가 체납되어 있으면 명의이전이 불가합니다. 위택스(wetax.go.kr)에서 체납 여부를 조회하거나, 판매자에게 완납증명서를 요청하세요. 체납 세금은 차량에 귀속되므로 구매자에게 불이익이 올 수 있습니다.',
  },
  {
    emoji: '🛡️',
    title: '보험이력 조회',
    desc: '자동차보험 이력을 통해 사고 이력, 보험금 지급 내역을 확인합니다. 카히스토리(carhistory.or.kr) 또는 보험개발원에서 무료 조회가 가능합니다. 보험 처리 이력이 있으면 수리 부위와 금액을 상세히 확인하세요.',
  },
  {
    emoji: '🔎',
    title: '사고이력 조회 (카히스토리)',
    desc: '보험개발원 카히스토리에서 차대번호로 사고 이력, 침수 여부, 도난 이력을 조회합니다. 단, 보험 처리하지 않은 자가 수리 건은 조회되지 않으므로 실차 점검도 병행해야 합니다.',
  },
  {
    emoji: '⚖️',
    title: '압류·저당 조회',
    desc: '차량에 압류(세금 체납·과태료)나 저당(대출 담보)이 설정되어 있으면 명의이전이 불가합니다. 자동차민원 대국민포털(ecar.go.kr) 또는 자동차365에서 무료 조회가 가능합니다. 반드시 계약 전에 확인하세요.',
  },
  {
    emoji: '🔢',
    title: '주행거리 조작 여부',
    desc: '성능상태점검기록부의 주행거리와 실제 계기판 표시를 비교합니다. 자동차365(car365.go.kr)에서 검사 이력별 주행거리 변화를 확인할 수 있습니다. 갑자기 주행거리가 줄어든 기록이 있으면 조작 차량일 가능성이 높습니다.',
  },
  {
    emoji: '👤',
    title: '소유자 본인 확인',
    desc: '판매자가 등록증상의 소유자 본인인지 신분증으로 확인합니다. 대리 판매인 경우 위임장과 인감증명서가 필요합니다. 명의가 법인이면 법인 인감증명서와 사업자등록증도 확인하세요. 소유자 불일치 시 사기 피해 위험이 있습니다.',
  },
];

const negotiationTips = [
  {
    title: 'KB 시세 기준 협상',
    desc: 'KB국민차 시세를 기준으로 매물 가격과의 차이를 근거로 협상합니다. "KB 시세 대비 ○○만 원 높다"고 구체적 수치를 제시하면 설득력이 높아집니다.',
  },
  {
    title: '하자 부분 지적',
    desc: '점검에서 발견한 문제점(타이어 교체 필요, 브레이크 패드 마모, 도장 상태 등)을 근거로 수리 예상 비용만큼 가격 인하를 요청합니다.',
  },
  {
    title: '복수 매물 비교 언급',
    desc: '"비슷한 조건의 다른 매물도 보고 있다"고 언급하면 판매자가 가격을 양보할 가능성이 높아집니다. 실제로 2~3개 매물을 비교하는 것이 좋습니다.',
  },
  {
    title: '현금 결제 할인',
    desc: '할부가 아닌 현금(계좌이체) 결제 시 딜러 수수료가 줄어들어 추가 할인을 받을 수 있습니다. 통상 10~30만 원 정도 추가 할인이 가능합니다.',
  },
  {
    title: '적정 타이밍 활용',
    desc: '연말·연초(신차 출시 시기), 월말(딜러 실적 마감), 비수기(1~2월, 7~8월)에는 가격 협상이 유리합니다. 반대로 봄·가을 이사철은 수요가 많아 가격이 높을 수 있습니다.',
  },
];

const negotiationWarnings = [
  '시세보다 지나치게 저렴한 매물 (사고차·침수차·대포차 위험)',
  '서류 확인을 거부하거나 미루는 판매자',
  '계약을 급하게 서두르는 경우 (충분한 검토 시간 확보)',
  '현장에서 차량 정보와 설명이 계속 달라지는 경우',
];

const afterPurchaseItems = [
  {
    emoji: '📝',
    title: '명의이전 (10일 이내)',
    desc: '중고차 구매 후 반드시 10일 이내에 명의이전을 완료해야 합니다. 기한 초과 시 과태료(10만 원~50만 원)가 부과됩니다. 관할 차량등록사업소에 방문하거나 자동차민원 대국민포털에서 온라인 신청이 가능합니다. 필요 서류: 매도용 인감증명서, 자동차매매계약서, 자동차등록증, 양도인·양수인 신분증 사본.',
  },
  {
    emoji: '🛡️',
    title: '자동차보험 가입',
    desc: '명의이전과 동시에 자동차보험에 가입해야 합니다. 이전 소유자의 보험이 자동으로 승계되지 않으므로, 인수 즉시 보험 가입을 진행하세요. 보험 미가입 상태에서 사고가 나면 모든 비용을 자비로 부담해야 합니다. 다이렉트 보험으로 가입하면 10~20% 절약 가능합니다.',
  },
  {
    emoji: '🔧',
    title: '기본 정비',
    desc: '구매 직후 엔진오일·오일필터·에어필터·에어컨 필터를 교환하세요. 이전 관리 이력을 알 수 없으므로 새로 시작하는 것이 안전합니다. 정비 비용은 국산차 기준 약 10~20만 원, 수입차는 20~50만 원 정도입니다. 타이어·브레이크 상태도 재점검하여 필요하면 교체합니다.',
  },
  {
    emoji: '📹',
    title: '블랙박스·썬팅',
    desc: '블랙박스가 없거나 오래된 경우 2채널(전방+후방) 블랙박스를 설치하세요(10~30만 원). 사고 시 과실 비율 산정에 결정적 증거가 됩니다. 썬팅은 전면 70% 이상 가시광선 투과율을 유지해야 합법입니다. 측면·후면은 자유롭게 선택 가능하며, 자외선 차단과 프라이버시 보호에 효과적입니다.',
  },
];

const channelComparison = [
  {
    channel: '인증중고차',
    pros: '제조사 보증(1년/2만km), 엄격한 품질 검사, 사고차·침수차 배제',
    cons: '시세보다 10~20% 비쌈, 선택 가능한 매물 적음',
    suit: '안전한 구매를 원하는 초보 구매자',
  },
  {
    channel: '중고차 딜러',
    pros: '매물 다양, 빠른 거래, 명의이전 등 행정 대행',
    cons: '딜러 수수료 포함, 허위 매물 주의, 품질 편차 큼',
    suit: '다양한 매물 중 선택하고 싶은 구매자',
  },
  {
    channel: '개인 직거래',
    pros: '가장 저렴(중간 마진 없음), 직접 소유자에게 이력 확인 가능',
    cons: '사기 위험, 하자 발생 시 책임 소재 불분명, 행정 직접 처리',
    suit: '차량 지식이 있고 비용 절약을 원하는 구매자',
  },
  {
    channel: '공매·경매',
    pros: '시세 대비 20~40% 저렴, 법적 절차로 안전',
    cons: '시운전·점검 불가, 하자 책임 본인, 입찰 경쟁',
    suit: '차량 지식이 풍부하고 시세보다 저렴하게 구매하려는 경험자',
  },
];

const faqItems = [
  {
    q: '중고차 구매 시 취등록세는 얼마인가요?',
    a: '중고차 취등록세는 차량 가액의 약 7%(비영업용 승용차 기준)입니다. 경차는 면제, 하이브리드·전기차는 감면 혜택이 있습니다. 예를 들어 1,000만 원짜리 중고차의 취등록세는 약 70만 원입니다. 정확한 금액은 취등록세 계산기에서 확인하세요.',
  },
  {
    q: '성능상태점검기록부는 어디서 확인하나요?',
    a: '자동차민원 대국민포털(ecar.go.kr) 또는 자동차365(car365.go.kr)에서 차대번호로 조회할 수 있습니다. 중고차 매매상사에서 구매할 경우 성능상태점검기록부 발급이 의무이며, 개인 직거래 시에도 발급을 요청할 수 있습니다.',
  },
  {
    q: '침수차를 구별하는 방법은?',
    a: '실내 곰팡이 냄새, 시트 아래·트렁크 바닥 물자국이나 진흙 흔적, 전기장치 오작동, 카페트 아래 녹 발생 여부를 확인하세요. 카히스토리에서 침수 이력 조회가 가능하며, 안전벨트를 끝까지 당겨보면 물자국이 남아 있는 경우도 있습니다.',
  },
  {
    q: '중고차 보증은 어떻게 받나요?',
    a: '인증중고차(현대 인증중고차, 기아 인증중고차 등)를 구매하면 제조사 보증(1년/2만km)을 받을 수 있습니다. 일반 딜러 구매 시에는 성능상태점검기록부에 기재된 항목에 한해 1개월/2,000km 이내 하자 보수 청구가 가능합니다.',
  },
  {
    q: '사고 이력 조회는 어디서 하나요?',
    a: '보험개발원 카히스토리(carhistory.or.kr)에서 차대번호 또는 차량번호로 무료 조회가 가능합니다. 보험 처리된 사고 이력, 침수 여부, 도난 이력, 전손 처리 여부 등을 확인할 수 있습니다. 단, 자가 수리 건은 조회되지 않습니다.',
  },
  {
    q: '중고차 할부 금리는 얼마인가요?',
    a: '2026년 기준 중고차 할부 금리는 연 5.9~9.9% 수준입니다. 캐피탈사(현대캐피탈, KB캐피탈 등)에 따라 다르며, 신용등급이 높을수록 금리가 낮습니다. 딜러를 통한 할부는 금리가 높을 수 있으므로 직접 캐피탈사에 문의하는 것도 방법입니다.',
  },
  {
    q: '중고차 구매 후 명의이전 기한은?',
    a: '중고차 구매 후 15일 이내에 명의이전(이전등록)을 완료해야 합니다. 기한을 초과하면 10일 이내 10만 원, 10일 초과 시 매 1일당 1만 원의 과태료가 부과됩니다(최대 50만 원). 관할 차량등록사업소 방문 또는 온라인 신청이 가능합니다.',
  },
  {
    q: '중고차 시세 조회는 어디서 하나요?',
    a: 'KB국민차 시세(kbchachacha.com)가 가장 공신력 있는 기준입니다. 엔카(encar.com), 보배드림(bobaedream.co.kr)에서 실제 매물 가격을 비교하고, 자동차365(car365.go.kr)에서 등록 이력과 검사 이력도 함께 확인하세요.',
  },
];

export default function UsedCarBuyingChecklistPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '중고차 구매 체크리스트 - 2026년 중고차 구매 전 필수 확인사항',
          description:
            '중고차 구매 전 차량 상태 점검, 서류 확인, 가격 협상, 구매 후 절차를 총정리했습니다.',
          url: `${BASE_URL}/guide/used-car-buying-checklist`,
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
            {
              '@type': 'ListItem',
              position: 2,
              name: '중고차 구매 체크리스트',
              item: `${BASE_URL}/guide/used-car-buying-checklist`,
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
            <li className="text-gray-900 font-medium">중고차 구매 체크리스트</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            중고차 구매 체크리스트
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            중고차는 신차 대비 <strong>30~50%</strong> 저렴하게 구매할 수 있지만,
            꼼꼼한 점검 없이 구매하면 수리비로 더 많은 비용이 들 수 있습니다.
            2026년 기준 중고차 구매 전 반드시 확인해야 할 항목들을 정리했습니다.
          </p>
        </section>

        {/* 1. 구매 전 준비사항 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            구매 전 준비사항
          </h2>
          <div className="space-y-4">
            {preparationItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-2xl border border-amber-100 p-5">
            <p className="text-sm text-amber-800">
              <strong>TIP:</strong> 총예산 = 차량 가격 + 취등록세(약 7%) + 보험료(50~200만 원) + 초기 정비비(30~100만 원)로 계산하세요.
              예산의 80%를 차량 가격으로, 20%를 부대비용으로 배분하는 것이 안전합니다.
            </p>
          </div>
        </section>

        {/* 2. 차량 상태 점검 10항목 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            차량 상태 점검 10항목
          </h2>
          <p className="text-gray-600 mb-6">
            직접 점검이 어렵다면 전문 검수 대행 서비스(헤이딜러, 첫차 등)를 이용하는 것도 좋은 방법입니다.
            비용은 10~20만 원이지만, 숨은 하자를 발견하면 수백만 원을 절약할 수 있습니다.
          </p>
          <div className="space-y-4">
            {inspectionItems.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 서류 확인 8항목 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            서류 확인 8항목
          </h2>
          <p className="text-gray-600 mb-6">
            차량 상태만큼 서류 확인도 중요합니다. 압류·저당이 설정된 차량을 구매하면
            명의이전이 불가능하고, 주행거리가 조작된 차량은 실제 가치보다 비싸게 사는 셈입니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {documentItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 가격 협상 팁 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            가격 협상 팁
          </h2>
          <div className="space-y-4">
            {negotiationTips.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-red-50 rounded-2xl border border-red-100 p-5">
            <h3 className="font-bold text-red-800 mb-3">피해야 할 상황</h3>
            <ul className="space-y-2">
              {negotiationWarnings.map((warning) => (
                <li key={warning} className="flex items-start gap-2 text-sm text-red-700">
                  <span className="flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. 구매 후 필수 절차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            구매 후 필수 절차
          </h2>
          <div className="space-y-4">
            {afterPurchaseItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 구매 채널별 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            구매 채널별 장단점 비교
          </h2>
          <p className="text-gray-600 mb-4">
            중고차를 구매할 수 있는 4가지 채널의 특징을 비교했습니다.
            초보 구매자는 인증중고차, 경험이 있는 구매자는 개인 직거래가 가장 합리적입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">채널</th>
                    <th className="px-4 py-3 text-left font-semibold">장점</th>
                    <th className="px-4 py-3 text-left font-semibold">단점</th>
                    <th className="px-4 py-3 text-left font-semibold">추천 대상</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {channelComparison.map((row) => (
                    <tr key={row.channel} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.channel}</td>
                      <td className="px-4 py-3 text-gray-600">{row.pros}</td>
                      <td className="px-4 py-3 text-gray-600">{row.cons}</td>
                      <td className="px-4 py-3 text-amber-600 font-medium">{row.suit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 인증중고차는 현대 인증중고차, 기아 인증중고차, K Car 등 제조사·대기업이 운영하는 프로그램 기준
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
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

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              중고차 비용을 미리 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              취등록세와 감가상각 예상 금액을 확인하고 합리적인 구매 결정을 내리세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/registration-tax"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                취등록세 계산하기
              </Link>
              <Link
                href="/calculator/depreciation"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                감가상각 계산하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
