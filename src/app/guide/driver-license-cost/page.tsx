import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '운전면허 취득 비용 총정리 - 2026년 학원비·시험비·총비용',
  description:
    '2026년 운전면허 취득 비용을 총정리했습니다. 1종·2종 면허 학원비, 시험비, 적성검사비, 독학 비용, 지역별 학원비 비교, 절약 팁까지 한눈에 확인하세요.',
  keywords: [
    '운전면허 비용',
    '운전면허 학원비',
    '운전면허 시험비',
    '면허 취득 비용',
    '1종 보통 비용',
    '2종 보통 비용',
    '운전면허 독학',
    '운전면허 학원 가격',
    '면허 시험 수수료',
    '운전면허 절약',
  ],
  alternates: { canonical: `${BASE_URL}/guide/driver-license-cost` },
  openGraph: {
    title: '운전면허 취득 비용 총정리 - 2026년 학원비·시험비·총비용',
    description:
      '1종·2종 면허 학원비, 시험비, 독학 비용, 지역별 학원비 비교까지 총정리.',
    url: `${BASE_URL}/guide/driver-license-cost`,
    type: 'website',
  },
};

const licenseTypes = [
  {
    type: '1종 보통',
    desc: '승용차·승합차(15인 이하)·화물차(12톤 미만)',
    academy: '약 65~80만원',
    selfStudy: '약 15~25만원',
    period: '2~3주',
  },
  {
    type: '2종 보통',
    desc: '승용차·승합차(10인 이하)',
    academy: '약 55~70만원',
    selfStudy: '약 13~20만원',
    period: '2~3주',
  },
  {
    type: '1종 대형',
    desc: '대형 승합·화물·특수차량',
    academy: '약 100~130만원',
    selfStudy: '해당 없음',
    period: '3~4주',
  },
  {
    type: '2종 소형(오토바이)',
    desc: '이륜차(125cc 이상)',
    academy: '약 30~40만원',
    selfStudy: '약 10~15만원',
    period: '1~2주',
  },
];

const comparisonItems = [
  {
    category: '총비용',
    academy: '약 55~80만원',
    selfStudy: '약 15~25만원',
  },
  {
    category: '소요기간',
    academy: '2~3주',
    selfStudy: '1~2개월',
  },
  {
    category: '합격률',
    academy: '90% 이상',
    selfStudy: '50~60%',
  },
  {
    category: '장점',
    academy: '체계적 교육, 높은 합격률, 연습 차량 제공, 시험장 동행',
    selfStudy: '비용 절감, 자유로운 일정, 자기 페이스 학습',
  },
  {
    category: '단점',
    academy: '높은 비용, 정해진 시간표, 학원 이동 필요',
    selfStudy: '낮은 합격률, 연습 차량 별도 확보, 시험장 직접 방문',
  },
];

const costDetails = [
  {
    title: '학원비',
    items: [
      { name: '교육비 (학과+기능+도로주행)', cost: '50~75만원' },
      { name: '연습 차량 사용료', cost: '학원비 포함' },
      { name: '교재비', cost: '약 1~2만원' },
    ],
    note: '학원에 따라 패키지 가격이 다르며, 재시험 시 추가 교육비가 발생할 수 있습니다.',
  },
  {
    title: '시험 수수료',
    items: [
      { name: '학과시험 (필기)', cost: '7,500원' },
      { name: '장내기능시험', cost: '22,000원' },
      { name: '도로주행시험', cost: '25,000원' },
    ],
    note: '불합격 시 재시험마다 동일한 수수료가 부과됩니다.',
  },
  {
    title: '기타 필수 비용',
    items: [
      { name: '적성검사 (신체검사 포함)', cost: '6,000원' },
      { name: '면허증 발급 수수료', cost: '7,500원' },
      { name: '신체검사 (병원)', cost: '5,000~6,000원' },
      { name: '사진 촬영비', cost: '약 5,000원' },
    ],
    note: '적성검사는 면허시험장 또는 지정 병원에서 받을 수 있습니다.',
  },
];

const steps = [
  {
    step: 1,
    title: '교통안전교육 이수',
    duration: '1시간',
    cost: '무료 (온라인 가능)',
    detail:
      '도로교통공단에서 실시하는 교통안전교육을 이수해야 합니다. 온라인(safety.koroad.or.kr)으로도 수강 가능하며, 면허시험 접수 전 필수입니다.',
    criteria: '이수 완료',
  },
  {
    step: 2,
    title: '학과시험 (필기)',
    duration: '50분',
    cost: '7,500원',
    detail:
      '객관식 40문제로, 1종은 70점 이상, 2종은 60점 이상 합격입니다. PC 기반 시험으로 즉시 결과를 확인할 수 있습니다.',
    criteria: '1종 70점 / 2종 60점 이상',
  },
  {
    step: 3,
    title: '장내기능시험',
    duration: '약 5~10분',
    cost: '22,000원',
    detail:
      '시험장 코스에서 출발, 정지, 좌·우회전, 교차로, 주차 등의 기능을 평가합니다. 실격 항목(신호 위반 등)에 해당하면 즉시 불합격됩니다.',
    criteria: '80점 이상 (감점 방식)',
  },
  {
    step: 4,
    title: '도로주행시험',
    duration: '약 15~20분',
    cost: '25,000원',
    detail:
      '실제 도로에서 약 5km 구간을 주행합니다. 차선 변경, 교차로 통과, 신호 준수, 안전 운전 등을 종합 평가합니다.',
    criteria: '70점 이상 (감점 방식)',
  },
  {
    step: 5,
    title: '면허증 발급',
    duration: '당일 발급',
    cost: '7,500원',
    detail:
      '모든 시험에 합격하면 면허시험장에서 즉시 면허증을 발급받을 수 있습니다. 사진 1매가 필요하며, 현장 촬영도 가능합니다.',
    criteria: '전 과정 합격',
  },
];

const regionalCosts = [
  { region: '서울', cost: '65~85만원', note: '가장 높은 편, 강남·서초 지역 비쌈' },
  { region: '경기', cost: '60~80만원', note: '지역에 따라 편차 큼' },
  { region: '부산', cost: '55~70만원', note: '서울 대비 저렴한 편' },
  { region: '대구', cost: '50~65만원', note: '경쟁 학원이 많아 가격 경쟁' },
  { region: '광주', cost: '50~60만원', note: '상대적으로 저렴' },
  { region: '대전', cost: '50~65만원', note: '중부권 평균 수준' },
  { region: '인천', cost: '55~75만원', note: '서울 근접 지역은 높은 편' },
  { region: '제주', cost: '55~70만원', note: '학원 수 제한으로 변동 적음' },
];

const savingTips = [
  {
    title: '지역별 학원비 비교',
    desc: '같은 시·도 내에서도 학원비 차이가 10~20만원까지 날 수 있습니다. 인근 지역 학원까지 비교해보세요. 특히 서울 외곽이나 경기도 학원이 서울 시내보다 저렴한 경우가 많습니다.',
  },
  {
    title: '비수기 할인 활용',
    desc: '겨울(12~2월)과 학기 중은 학원 비수기입니다. 이 시기에 등록하면 5~15만원 할인받을 수 있습니다. 반대로 방학 시즌(7~8월)은 성수기로 가격이 오르고 예약도 어렵습니다.',
  },
  {
    title: '할인 쿠폰·이벤트 확인',
    desc: '학원 홈페이지, 네이버 카페, 커뮤니티에서 할인 쿠폰이나 이벤트를 확인하세요. 친구 소개 할인, 단체 할인 등을 활용하면 3~10만원 절약할 수 있습니다.',
  },
  {
    title: '군 면허 활용',
    desc: '군 복무 중 운전면허를 취득하면 무료 또는 매우 저렴한 비용으로 면허를 딸 수 있습니다. 1종 대형이나 특수 면허도 가능하므로 군 입대 예정이라면 적극 활용하세요.',
  },
  {
    title: '온라인 학과 학습으로 독학 병행',
    desc: '학과시험은 도로교통공단 사이트에서 무료 모의고사를 반복 풀면 독학으로 충분히 합격 가능합니다. 기능·도로주행만 학원에서 배우면 교육비를 줄일 수 있습니다.',
  },
];

const faqItems = [
  {
    q: '운전면허 취득까지 얼마나 걸리나요?',
    a: '학원을 이용하면 보통 2~3주 안에 취득할 수 있습니다. 독학의 경우 시험 일정과 재시험 여부에 따라 1~2개월 이상 걸릴 수 있습니다. 학원에서는 교육 일정이 체계적으로 짜여 있어 최단기로 취득이 가능합니다.',
  },
  {
    q: '운전면허 시험 불합격 시 재시험 비용은?',
    a: '학과시험 7,500원, 장내기능시험 22,000원, 도로주행시험 25,000원이 재시험 때마다 동일하게 부과됩니다. 학원의 경우 재교육 비용(1~3만원)이 추가될 수 있습니다. 불합격 후 3일이 지나면 재시험 응시가 가능합니다.',
  },
  {
    q: '자동 vs 수동 면허 차이는?',
    a: '2종 보통면허는 자동(AT)과 수동(MT) 중 선택할 수 있습니다. 자동 면허는 자동 변속기 차량만 운전 가능하고, 수동 면허는 자동·수동 모두 운전할 수 있습니다. 현재 신규 등록 차량의 98% 이상이 자동이므로, 특별한 사유가 없으면 자동 면허로 충분합니다.',
  },
  {
    q: '면허 시험 접수는 어디서 하나요?',
    a: '도로교통공단 운전면허시험장에서 직접 접수하거나, 안전운전 통합민원 사이트(safedriving.or.kr)에서 온라인 접수할 수 있습니다. 학원 등록 시에는 학원에서 시험 접수를 대행해줍니다.',
  },
  {
    q: '학원 없이 독학으로 따도 되나요?',
    a: '가능합니다. 학과시험은 온라인 모의고사로 독학이 충분하고, 기능·도로주행은 도로교통공단 시험장에서 직접 응시할 수 있습니다. 다만 연습 차량을 별도로 확보해야 하고, 합격률이 학원 대비 낮은 편(50~60%)입니다.',
  },
  {
    q: '외국 면허를 한국 면허로 바꿀 수 있나요?',
    a: '대부분의 국가에서 발급한 면허는 한국 면허로 교환할 수 있습니다. 해당 국가에서 90일 이상 체류한 증빙이 필요하며, 적성검사와 학과시험(간이)에 합격하면 됩니다. 비용은 약 2~3만원 수준입니다.',
  },
  {
    q: '운전면허증 갱신 비용과 주기는?',
    a: '면허증은 10년마다 갱신해야 합니다(65세 이상은 5년). 갱신 비용은 적성검사비 6,000원 + 면허증 재발급비 7,500원으로 총 13,500원입니다. 갱신 기간은 만료일 전후 6개월입니다.',
  },
  {
    q: '면허 취득 후 추가 비용은 있나요?',
    a: '면허 자체에 추가 비용은 없지만, 실제 운전을 위해 자동차 구매비, 보험료, 유류비 등이 필요합니다. 초보 운전자의 경우 운전 연수비(10시간 기준 20~30만원)를 투자하면 실전 운전에 큰 도움이 됩니다.',
  },
];

export default function DriverLicenseCostPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            '운전면허 취득 비용 총정리 - 2026년 학원비·시험비·총비용',
          description:
            '1종·2종 면허 학원비, 시험비, 독학 비용, 지역별 학원비 비교까지 총정리.',
          url: `${BASE_URL}/guide/driver-license-cost`,
          publisher: {
            '@type': 'Organization',
            name: 'MustardData',
            url: BASE_URL,
          },
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
              name: '운전면허 취득 비용',
              item: `${BASE_URL}/guide/driver-license-cost`,
            },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">
                홈
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              운전면허 취득 비용
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            운전면허 취득 비용 총정리
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            운전면허를 따려면 얼마나 들까요? 학원비, 시험 수수료, 적성검사비,
            면허증 발급비까지{' '}
            <strong>2026년 기준 운전면허 취득에 필요한 모든 비용</strong>을
            항목별로 정리했습니다. 학원과 독학 비용 비교, 지역별 학원비 차이,
            절약 팁도 함께 확인하세요.
          </p>
        </section>

        {/* 면허 종류별 비용 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            면허 종류별 비용
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 border-b border-gray-100">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      면허 종류
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      대상 차량
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      학원 비용
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      독학 비용
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      소요기간
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {licenseTypes.map((item) => (
                    <tr
                      key={item.type}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {item.type}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.desc}</td>
                      <td className="px-4 py-3 text-center text-amber-600 font-semibold">
                        {item.academy}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-600">
                        {item.selfStudy}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-600">
                        {item.period}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
              * 학원비는 2026년 기준 전국 평균이며, 지역·학원에 따라 차이가
              있습니다.
            </div>
          </div>
        </section>

        {/* 학원 vs 독학 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            학원 vs 독학 비교
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 border-b border-gray-100">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      항목
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-600">
                      학원
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-600">
                      독학
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((item) => (
                    <tr
                      key={item.category}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {item.category}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {item.academy}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {item.selfStudy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">
              어떤 방법이 나에게 맞을까?
            </h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>
                • <strong>빠르게 취득</strong>하고 싶다면 → 학원 추천 (합격률
                90%+)
              </li>
              <li>
                • <strong>비용을 절약</strong>하고 싶다면 → 독학 + 부분 학원
                병행
              </li>
              <li>
                • <strong>시간이 자유롭다면</strong> → 독학 후 시험장 직접 응시
              </li>
            </ul>
          </div>
        </section>

        {/* 비용 세부항목 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            비용 세부항목
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {costDetails.map((group) => (
              <div
                key={group.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-start gap-2"
                    >
                      <span className="text-sm text-gray-600">
                        {item.name}
                      </span>
                      <span className="text-sm font-semibold text-amber-600 whitespace-nowrap">
                        {item.cost}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                  {group.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white rounded-2xl border border-gray-100 p-5">
            <h4 className="font-bold text-gray-900 mb-2">
              총비용 요약 (2종 보통 기준)
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <div className="text-gray-600 mb-1">학원 이용 시</div>
                <div className="text-2xl font-bold text-amber-600">
                  약 60~75만원
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-gray-600 mb-1">독학 시</div>
                <div className="text-2xl font-bold text-gray-700">
                  약 15~25만원
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 단계별 과정 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            단계별 취득 과정
          </h2>
          <div className="space-y-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {item.detail}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                      소요시간: {item.duration}
                    </span>
                    <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded-lg">
                      비용: {item.cost}
                    </span>
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded-lg">
                      합격기준: {item.criteria}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-3 text-amber-400 text-lg text-center">
                      ↓
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 지역별 학원비 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            지역별 학원비 비교
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 border-b border-gray-100">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      지역
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      평균 학원비 (2종 보통)
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      비고
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {regionalCosts.map((item) => (
                    <tr
                      key={item.region}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {item.region}
                      </td>
                      <td className="px-4 py-3 text-center text-amber-600 font-semibold">
                        {item.cost}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
              * 2026년 기준 추정치이며, 실제 학원비는 학원별로 상이합니다.
            </div>
          </div>
        </section>

        {/* 절약 팁 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            면허 취득 비용 절약 팁 5가지
          </h2>
          <div className="space-y-4">
            {savingTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자주 묻는 질문
          </h2>
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
              면허 취득 후 다음 단계를 준비하세요
            </h2>
            <p className="text-amber-100 mb-6">
              면허를 취득했다면 초보운전 가이드와 신차 구매 가이드를 확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/beginner-driver"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                초보운전 가이드
              </Link>
              <Link
                href="/guide/new-car-buying"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                신차 구매 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
