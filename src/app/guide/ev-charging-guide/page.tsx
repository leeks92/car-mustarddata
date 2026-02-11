import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '전기차 충전 방법 완벽 가이드 - 충전카드·요금·앱 총정리',
  description:
    '전기차 충전 방식별 특징(완속·급속·초급속), 충전 사업자별 요금 비교, 충전카드 발급 방법, 가정용 충전기 설치, 충전 팁과 주의사항까지 2026년 최신 기준으로 총정리했습니다.',
  keywords: [
    '전기차 충전',
    '전기차 충전 방법',
    '전기차 충전 요금',
    '전기차 충전카드',
    '전기차 충전 앱',
    '가정용 충전기 설치',
    '급속 충전',
    '완속 충전',
    '환경부 충전카드',
    '전기차 충전소',
  ],
  alternates: { canonical: `${BASE_URL}/guide/ev-charging-guide` },
  openGraph: {
    title: '전기차 충전 방법 완벽 가이드 - 충전카드·요금·앱 총정리',
    description:
      '전기차 충전 방식별 특징, 사업자별 요금 비교, 충전카드 발급, 가정용 충전기 설치, 충전 팁까지 2026년 최신 기준으로 총정리했습니다.',
    url: `${BASE_URL}/guide/ev-charging-guide`,
    type: 'website',
  },
};

const chargingTypes = [
  {
    type: '완속 충전',
    power: '7kW',
    connector: 'AC (교류)',
    chargeTime: '약 6~10시간 (완충)',
    location: '아파트, 주택, 공용 주차장',
    cost: '약 200~300원/kWh',
    suitable: '야간·장시간 주차 시',
  },
  {
    type: '급속 충전',
    power: '50kW',
    connector: 'DC (직류) CCS1/CHAdeMO',
    chargeTime: '약 40~80분 (80%)',
    location: '고속도로 휴게소, 공용 충전소',
    cost: '약 300~400원/kWh',
    suitable: '이동 중 빠른 충전',
  },
  {
    type: '초급속 충전',
    power: '150~350kW',
    connector: 'DC (직류) CCS1',
    chargeTime: '약 15~30분 (80%)',
    location: '고속도로, 현대 E-pit 등',
    cost: '약 350~500원/kWh',
    suitable: '장거리 이동·긴급 충전',
  },
];

const operatorRates = [
  {
    operator: '환경부 (한국환경공단)',
    slow: '약 292.9원',
    fast: '약 324.4원',
    ultrafast: '-',
    membership: '무료 회원 가입',
    note: '공공 충전 인프라 최대',
  },
  {
    operator: '한전 (한국전력)',
    slow: '약 253.3원',
    fast: '-',
    ultrafast: '-',
    membership: '별도 카드 불필요',
    note: '아파트·주택 완속 전용',
  },
  {
    operator: 'SK시그넷',
    slow: '-',
    fast: '약 347.2원',
    ultrafast: '약 377.3원',
    membership: '앱 회원 가입',
    note: 'SK 주유소 충전 네트워크',
  },
  {
    operator: '차지비 (ChargeV)',
    slow: '약 285.0원',
    fast: '약 339.8원',
    ultrafast: '-',
    membership: '앱 회원 가입',
    note: '아파트 충전 특화',
  },
  {
    operator: 'GS칼텍스',
    slow: '-',
    fast: '약 352.7원',
    ultrafast: '약 385.0원',
    membership: 'GS&POINT 연동',
    note: '주유소 병행 네트워크',
  },
  {
    operator: '현대 E-pit',
    slow: '-',
    fast: '약 340.0원',
    ultrafast: '약 390.0원',
    membership: '현대·기아 회원',
    note: '초급속 800V 지원',
  },
];

const chargingCards = [
  {
    name: '환경부 충전카드',
    issuer: '한국환경공단',
    coverage: '환경부 공공 충전소 전국 약 2만 기',
    fee: '발급비 무료',
    howTo: '무공해차 통합누리집(ev.or.kr) 또는 환경부 앱에서 신청',
    roaming: '일부 민간 충전기 로밍 사용 가능',
  },
  {
    name: '사업자별 충전카드',
    issuer: 'SK시그넷, 차지비, GS칼텍스 등',
    coverage: '해당 사업자 충전소 + 로밍 제휴 충전소',
    fee: '대부분 무료 발급 (일부 보증금)',
    howTo: '각 사업자 앱 다운로드 후 회원 가입 및 카드 신청',
    roaming: '로밍 서비스로 타 사업자 충전소 이용 가능 (추가 수수료)',
  },
  {
    name: '복합 결제 카드 (신용/체크)',
    issuer: '신한, 현대, 삼성카드 등',
    coverage: '제휴 충전 사업자 전체',
    fee: '카드 연회비에 포함',
    howTo: '해당 카드사에서 전기차 전용 카드 신청',
    roaming: '대부분의 공용 충전소에서 결제 가능',
  },
];

const homeChargerCosts = [
  {
    item: '충전기 본체 (7kW)',
    apartment: '약 80~150만 원',
    house: '약 80~150만 원',
    note: '벽걸이·스탠드형',
  },
  {
    item: '설치 공사비',
    apartment: '약 30~80만 원',
    house: '약 20~50만 원',
    note: '배선 거리에 따라 상이',
  },
  {
    item: '전기 증설 공사',
    apartment: '약 10~30만 원',
    house: '약 20~50만 원',
    note: '기존 전기 용량에 따라',
  },
  {
    item: '관리사무소 협의',
    apartment: '필수 (입주민 동의)',
    house: '불필요',
    note: '공동주택관리법 적용',
  },
  {
    item: '정부 보조금',
    apartment: '최대 400만 원',
    house: '최대 400만 원',
    note: '2026년 기준, 선착순',
  },
  {
    item: '예상 총비용',
    apartment: '약 0~200만 원 (보조금 후)',
    house: '약 0~150만 원 (보조금 후)',
    note: '보조금 적용 시 무료 가능',
  },
];

const chargingTips = [
  {
    title: '배터리 20~80% 구간 유지',
    description:
      '리튬이온 배터리는 20~80% 사이에서 충전하는 것이 수명 연장에 가장 좋습니다. 일상적으로 100% 완충이나 0%까지 방전을 반복하면 배터리 열화가 빨라집니다.',
  },
  {
    title: '야간 완속 충전 활용',
    description:
      '심야 시간대(23시~09시)에 완속 충전하면 전기 요금이 저렴하고 배터리에도 부담이 적습니다. 가정용 충전기가 있다면 타이머 예약 기능을 적극 활용하세요.',
  },
  {
    title: '충전소 사전 확인·예약',
    description:
      '장거리 이동 전 네비게이션이나 충전 앱으로 경로상 충전소를 미리 확인하세요. 일부 사업자(현대 E-pit 등)는 앱에서 충전기 예약 기능을 제공합니다.',
  },
  {
    title: '멤버십·구독 요금제 활용',
    description:
      '월정액 구독 요금제를 이용하면 kWh당 요금을 20~30% 절약할 수 있습니다. 월 200kWh 이상 충전한다면 구독이 유리합니다.',
  },
  {
    title: '충전 앱 포인트·쿠폰 활용',
    description:
      '환경부, SK시그넷, 차지비 등 충전 앱에서 수시로 포인트 적립과 할인 쿠폰을 제공합니다. 여러 앱을 설치해 혜택을 비교하세요.',
  },
  {
    title: '차량 사전 컨디셔닝 활용',
    description:
      '충전 중이나 출발 전에 차량 공조(에어컨/히터)를 미리 작동하면 주행 중 전력 소모를 줄일 수 있습니다. 대부분의 전기차가 앱에서 원격 공조 기능을 지원합니다.',
  },
  {
    title: '급속 충전 80%에서 멈추기',
    description:
      '급속 충전은 80% 이후 속도가 급격히 느려집니다. 80%까지 충전 후 이동하고, 나머지는 완속으로 채우는 것이 시간과 비용 모두 효율적입니다.',
  },
  {
    title: '계절별 충전 전략 세우기',
    description:
      '겨울철에는 배터리 효율이 20~30% 떨어지므로 충전 빈도를 늘려야 합니다. 출발 전 사전 워밍업으로 배터리 온도를 높이면 충전 속도와 주행 가능 거리가 개선됩니다.',
  },
];

const chargingCautions = [
  {
    title: '과충전 주의',
    description:
      '100% 완충 상태로 오래 방치하면 배터리 셀에 스트레스가 가해져 수명이 단축됩니다. 일상적인 사용에서는 80~90%까지만 충전하고, 장거리 출발 직전에만 100% 충전을 활용하세요. 대부분의 전기차는 충전 상한선 설정 기능을 제공합니다.',
  },
  {
    title: '고온·저온 환경에서의 충전',
    description:
      '외부 온도가 40도 이상이거나 영하 10도 이하일 때는 급속 충전을 피하는 것이 좋습니다. 극한 온도에서의 급속 충전은 배터리 열화를 가속시킵니다. 가능하면 실내 주차장이나 그늘에서 충전하세요.',
  },
  {
    title: '비·눈 올 때 충전 안전',
    description:
      '전기차 충전 커넥터는 방수 설계가 되어 있어 비가 와도 충전이 가능합니다. 다만 폭우·폭설 시에는 커넥터 연결부에 물이 고이지 않도록 주의하고, 젖은 손으로 조작하지 마세요. 번개가 칠 때는 충전을 중단하는 것이 안전합니다.',
  },
  {
    title: '충전 에티켓 지키기',
    description:
      '충전이 완료되면 즉시 차량을 이동하여 다른 사용자가 충전할 수 있도록 배려하세요. 충전 중이 아닌 차량이 충전 구역을 점유하면 과태료(최대 20만 원)가 부과될 수 있습니다. 충전 케이블은 사용 후 반드시 제자리에 정리해주세요.',
  },
  {
    title: '충전 중 차량 시동 걸지 않기',
    description:
      '충전 중에 차량 시동을 걸거나 기어를 변경하면 충전이 중단되고, 일부 차종에서는 충전 시스템에 오류가 발생할 수 있습니다. 충전 중에는 차량을 P(주차) 모드로 유지하고, 충전 완료 후 케이블을 분리한 뒤 시동을 거세요.',
  },
];

const faqItems = [
  {
    q: '전기차 충전 시간은 얼마나 걸리나요?',
    a: '충전 방식에 따라 다릅니다. 완속 충전(7kW)은 완전 방전에서 완충까지 약 6~10시간, 급속 충전(50kW)은 80%까지 약 40~80분, 초급속 충전(150~350kW)은 80%까지 약 15~30분이 소요됩니다. 배터리 용량, 잔량, 온도에 따라 실제 충전 시간은 달라질 수 있습니다.',
  },
  {
    q: '충전 카드 없이도 충전할 수 있나요?',
    a: '네, 대부분의 공용 충전기에서 신용카드나 체크카드로 즉시 결제가 가능합니다. 다만 충전 카드나 앱을 사용하면 kWh당 요금이 10~20% 저렴하고, 포인트 적립 등 추가 혜택을 받을 수 있어 충전 카드 발급을 권장합니다.',
  },
  {
    q: '아파트에 가정용 충전기를 설치할 수 있나요?',
    a: '가능합니다. 공동주택관리법에 따라 전기차 충전기 설치를 위해 관리사무소에 신청하면 입주민 동의 절차를 거쳐 설치할 수 있습니다. 2026년 기준 정부 보조금(최대 400만 원)을 받으면 본인 부담금이 크게 줄어들며, 전용 주차 구역이 있으면 설치가 더 수월합니다.',
  },
  {
    q: '전기차 충전 요금이 가장 저렴한 방법은?',
    a: '가정용 완속 충전기를 설치하고 심야 시간대(23시~09시)에 충전하는 것이 가장 저렴합니다. 한전 전기차 전용 요금제를 적용하면 kWh당 약 150~200원 수준으로 충전할 수 있어, 공용 급속 충전 대비 50% 이상 절약됩니다.',
  },
  {
    q: '로밍 충전이 무엇인가요?',
    a: '로밍 충전은 자신이 가입한 충전 사업자가 아닌 다른 사업자의 충전기를 이용하는 것입니다. 예를 들어 환경부 카드로 SK시그넷 충전기를 사용할 수 있습니다. 로밍 수수료가 추가되어 일반 요금보다 10~20% 비싸지만, 충전소 선택의 폭이 넓어지는 장점이 있습니다.',
  },
  {
    q: '전기차 충전 중 차 안에 있어도 되나요?',
    a: '네, 충전 중 차량 안에 탑승해 있어도 안전합니다. 다만 시동을 걸거나 기어를 조작하면 안 됩니다. 충전 중에는 에어컨이나 히터를 사용해도 되지만, 배터리에서 직접 전력을 공급하므로 충전 시간이 다소 늘어날 수 있습니다.',
  },
  {
    q: '겨울에 전기차 주행 거리가 줄어드는 이유는?',
    a: '겨울철에는 배터리 화학 반응이 느려져 출력이 감소하고, 히터 사용으로 전력 소모가 크게 증가합니다. 일반적으로 영하 환경에서 주행 가능 거리가 20~30% 줄어듭니다. 시트 히터와 핸들 히터를 적극 활용하고, 출발 전 사전 워밍업으로 배터리 온도를 높이면 효율을 개선할 수 있습니다.',
  },
  {
    q: '전기차 배터리 수명은 어떻게 관리하나요?',
    a: '배터리 수명을 관리하려면 일상 충전 시 20~80% 구간을 유지하고, 급속 충전 비율을 전체 충전의 20~30% 이하로 제한하는 것이 좋습니다. 극한 온도에서의 충전을 피하고, 장기간 주차 시 50~60% 수준을 유지하세요. 현대·기아는 배터리에 8년/16만 km 보증을 제공합니다.',
  },
];

export default function EVChargingGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '전기차 충전 방법 완벽 가이드 - 충전카드·요금·앱 총정리',
          description:
            '전기차 충전 방식별 특징, 사업자별 요금 비교, 충전카드 발급, 가정용 충전기 설치, 충전 팁까지 2026년 최신 기준으로 총정리했습니다.',
          url: `${BASE_URL}/guide/ev-charging-guide`,
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
            {
              '@type': 'ListItem',
              position: 2,
              name: '가이드',
              item: `${BASE_URL}/guide`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: '전기차 충전 방법 가이드',
              item: `${BASE_URL}/guide/ev-charging-guide`,
            },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">자동차 계산기</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/" className="hover:text-amber-600">가이드</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">전기차 충전 방법 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            전기차 충전 방법 완벽 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            전기차를 처음 구매했거나 구매를 고려 중이라면 충전 방법이 가장 궁금할 것입니다.
            완속·급속·초급속 충전 방식의 차이, 충전 사업자별 요금, 충전카드 발급 방법,
            가정용 충전기 설치까지 <strong>2026년 최신 기준</strong>으로 총정리했습니다.
          </p>
        </section>

        {/* Section 1: 충전 방식별 특징 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. 충전 방식별 특징
            </h2>
            <p className="text-gray-600 mb-6">
              전기차 충전은 크게 <strong>완속(AC)</strong>, <strong>급속(DC)</strong>,
              <strong>초급속(DC)</strong> 3가지로 나뉩니다. AC(교류)는 차량 내부
              온보드 차저(OBC)를 통해 변환 후 충전하며, DC(직류)는 충전기에서 직접
              배터리에 전력을 공급하여 속도가 빠릅니다.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">구분</th>
                    <th className="px-4 py-3 text-center font-semibold">완속 충전</th>
                    <th className="px-4 py-3 text-center font-semibold">급속 충전</th>
                    <th className="px-4 py-3 text-center font-semibold">초급속 충전</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">출력</td>
                    {chargingTypes.map((t) => (
                      <td key={t.type} className="px-4 py-3 text-center text-gray-600">{t.power}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">전류 방식</td>
                    {chargingTypes.map((t) => (
                      <td key={t.type} className="px-4 py-3 text-center text-gray-600">{t.connector}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">충전 시간</td>
                    {chargingTypes.map((t) => (
                      <td key={t.type} className="px-4 py-3 text-center text-gray-600">{t.chargeTime}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">주요 설치 장소</td>
                    {chargingTypes.map((t) => (
                      <td key={t.type} className="px-4 py-3 text-center text-gray-600">{t.location}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">대략 요금</td>
                    {chargingTypes.map((t) => (
                      <td key={t.type} className="px-4 py-3 text-center text-gray-600">{t.cost}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">적합 상황</td>
                    {chargingTypes.map((t) => (
                      <td key={t.type} className="px-4 py-3 text-center text-gray-600">{t.suitable}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-gray-900 mb-2">AC vs DC, 무엇이 다른가요?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>AC(교류) 충전</strong>은 가정용 전기와 같은 교류 전원을 차량 내부의
                OBC(온보드 차저)가 직류로 변환하여 배터리에 저장합니다. OBC 용량(보통 7~11kW)에
                따라 충전 속도가 제한됩니다.
                <strong> DC(직류) 충전</strong>은 충전기 자체에서 교류를 직류로 변환하여
                배터리에 직접 공급하므로 OBC를 거치지 않아 훨씬 빠릅니다.
                급속(50kW)과 초급속(150~350kW)이 모두 DC 방식입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 충전 요금 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. 충전 사업자별 요금 비교
            </h2>
            <p className="text-gray-600 mb-6">
              전기차 충전 요금은 사업자, 충전 방식, 시간대에 따라 다릅니다. 주요 6개 사업자의
              kWh당 요금을 비교합니다. 실제 요금은 시기와 정책에 따라 변동될 수 있습니다.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold">충전 사업자</th>
                    <th className="px-3 py-3 text-center font-semibold">완속 (kWh)</th>
                    <th className="px-3 py-3 text-center font-semibold">급속 (kWh)</th>
                    <th className="px-3 py-3 text-center font-semibold">초급속 (kWh)</th>
                    <th className="px-3 py-3 text-center font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {operatorRates.map((row) => (
                    <tr key={row.operator} className="hover:bg-gray-50">
                      <td className="px-3 py-3 font-medium text-gray-900">{row.operator}</td>
                      <td className="px-3 py-3 text-center text-gray-600">{row.slow}</td>
                      <td className="px-3 py-3 text-center text-gray-600">{row.fast}</td>
                      <td className="px-3 py-3 text-center text-gray-600">{row.ultrafast}</td>
                      <td className="px-3 py-3 text-center text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 mt-3">
              ※ 2026년 기준 예상 요금이며, 사업자 정책 및 전기요금 변동에 따라 달라질 수 있습니다. 로밍 이용 시 추가 수수료가 발생합니다.
            </p>

            <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>절약 팁:</strong> 가정 완속 충전(심야 요금)이 가장 저렴하며,
                공용 충전 시에는 환경부 또는 한전 요금이 민간 사업자 대비 저렴합니다.
                멤버십 구독 요금제를 활용하면 추가 10~20% 할인을 받을 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 충전카드 발급 방법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. 충전카드 발급 방법
            </h2>
            <p className="text-gray-600 mb-6">
              전기차 충전에는 충전카드 또는 앱이 필요합니다. 크게 환경부 카드, 사업자별 카드,
              복합 결제 카드 3종류가 있으며, 각각의 특징과 발급 방법을 정리합니다.
            </p>

            <div className="space-y-4 mb-6">
              {chargingCards.map((card, index) => (
                <div key={card.name} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{card.name}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li><strong>발급처:</strong> {card.issuer}</li>
                        <li><strong>이용 범위:</strong> {card.coverage}</li>
                        <li><strong>발급비:</strong> {card.fee}</li>
                        <li><strong>발급 방법:</strong> {card.howTo}</li>
                        <li><strong>로밍:</strong> {card.roaming}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-gray-900 mb-2">주요 충전 앱 설치 안내</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                충전카드 없이도 앱만으로 충전이 가능합니다. 앱에서 QR 코드 스캔 또는
                충전기 번호를 입력하면 바로 충전을 시작할 수 있습니다.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- <strong>환경부 EV 앱</strong>: 공공 충전소 조회·충전·결제</li>
                <li>- <strong>Ev Infra (이브이인프라)</strong>: 전국 충전소 통합 검색·실시간 현황</li>
                <li>- <strong>차지비 앱</strong>: 아파트 충전 특화, 충전 예약</li>
                <li>- <strong>현대/기아 커넥트</strong>: 차량 연동, E-pit 예약 충전</li>
                <li>- <strong>TMAP/카카오내비</strong>: 경로 내 충전소 검색·요금 비교</li>
              </ul>
            </div>

            <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">로밍 서비스란?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                로밍은 자신이 가입한 충전 사업자가 아닌 다른 사업자의 충전기를 이용할 수 있는
                서비스입니다. 예를 들어 환경부 카드로 SK시그넷 충전기를, 차지비 카드로 환경부
                충전기를 사용할 수 있습니다. 로밍 이용 시 기본 요금에 10~20%의 로밍 수수료가
                추가되지만, 충전소 선택의 폭이 넓어지는 장점이 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 가정용 충전기 설치 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. 가정용 충전기 설치
            </h2>
            <p className="text-gray-600 mb-6">
              가정용 충전기를 설치하면 가장 저렴하고 편리하게 충전할 수 있습니다.
              아파트와 단독주택의 설치 조건, 비용, 전기요금 구조를 비교합니다.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-center font-semibold">아파트</th>
                    <th className="px-4 py-3 text-center font-semibold">단독주택</th>
                    <th className="px-4 py-3 text-center font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {homeChargerCosts.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.apartment}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.house}</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3">아파트 설치 절차</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">1.</span>
                    <span>관리사무소에 전기차 충전기 설치 신청서 제출</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">2.</span>
                    <span>입주민 동의(과반수) 또는 관리규약 확인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">3.</span>
                    <span>한전에 전기 증설 신청 (필요 시)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">4.</span>
                    <span>정부 보조금 신청 (무공해차 통합누리집)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">5.</span>
                    <span>인증 설치업체를 통한 충전기 설치 및 시공</span>
                  </li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3">단독주택 설치 절차</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">1.</span>
                    <span>전기 용량 확인 (기존 분전반 여유 확인)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">2.</span>
                    <span>정부 보조금 신청 (무공해차 통합누리집)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">3.</span>
                    <span>한전에 전기차 전용 계량기 신청 (별도 요금제)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">4.</span>
                    <span>인증 설치업체 선정 및 현장 확인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">5.</span>
                    <span>충전기 설치, 시운전 및 최종 확인</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-gray-900 mb-2">전기요금 구조 알아두기</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                가정용 전기차 충전에는 <strong>한전 전기차 전용 요금제</strong>를 적용받을 수
                있습니다. 별도 계량기를 설치하면 가정용 누진세와 분리되어 저렴한 요금이 적용됩니다.
                특히 <strong>심야 시간대(23시~09시)</strong>에는 kWh당 약 150원 수준으로
                충전할 수 있어 공용 충전소 대비 50% 이상 절약됩니다. 별도 계량기 설치가
                어려운 아파트에서도 전기차 충전 전용 요금을 별도 정산하는 방식으로 누진세
                부담을 줄일 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 충전 팁 8가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. 전기차 충전 팁 8가지
            </h2>
            <p className="text-gray-600 mb-6">
              배터리 수명을 연장하고, 충전 비용을 절약하며, 편리하게 충전하기 위한
              핵심 팁 8가지를 소개합니다.
            </p>

            <div className="space-y-4">
              {chargingTips.map((tip, index) => (
                <div key={tip.title} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: 충전 시 주의사항 5가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. 충전 시 주의사항 5가지
            </h2>
            <p className="text-gray-600 mb-6">
              안전하고 올바른 충전 습관을 위해 반드시 알아야 할 주의사항을 정리했습니다.
            </p>

            <div className="space-y-4">
              {chargingCautions.map((caution, index) => (
                <div key={caution.title} className="bg-red-50 rounded-xl border border-red-100 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{caution.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{caution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              내 전기차 충전 비용을 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              충전 방식별 요금 비교와 내연기관 대비 절약 금액을 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/ev-charging-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                충전 비용 계산하기
              </Link>
              <Link
                href="/guide/ev-subsidy"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                전기차 보조금 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
