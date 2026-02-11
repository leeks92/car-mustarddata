import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '교통사고 대처 방법 - 2026년 사고 현장 대처·보험 처리·합의 총정리',
  description:
    '교통사고 발생 시 현장 대처 5단계, 보험 처리 절차, 과실 비율 기준, 합의 방법, 사고 후 체크리스트를 총정리했습니다. 추돌·접촉·주차장 사고 유형별 대처법도 확인하세요.',
  keywords: [
    '교통사고 대처',
    '교통사고 보험 처리',
    '교통사고 과실 비율',
    '교통사고 합의',
    '교통사고 합의금',
    '추돌사고 대처',
    '접촉사고 보험',
    '교통사고 체크리스트',
    '교통사고 신고',
    '사고 현장 대처',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-accident-process` },
  openGraph: {
    title: '교통사고 대처 방법 - 2026년 사고 현장 대처·보험 처리·합의 총정리',
    description:
      '교통사고 발생 시 현장 대처, 보험 처리, 과실 비율, 합의 방법을 총정리했습니다.',
    url: `${BASE_URL}/guide/car-accident-process`,
    type: 'website',
  },
};

const immediateSteps = [
  {
    step: 1,
    title: '안전 확보 및 2차 사고 방지',
    desc: '비상등을 즉시 켜고, 차량을 도로 갓길이나 안전한 곳으로 이동합니다. 고속도로에서는 차량 뒤쪽 100m 이상 지점에 삼각 경고판을 설치합니다. 야간에는 차량에서 내려 안전한 곳(가드레일 밖)으로 대피하세요. 2차 사고로 인한 피해가 더 클 수 있으므로 안전 확보가 최우선입니다.',
  },
  {
    step: 2,
    title: '119·112 신고',
    desc: '부상자가 있으면 즉시 119에 신고합니다. 경미한 접촉 사고라도 112(경찰)에 신고하는 것이 좋습니다. 경찰 사고 접수가 있어야 보험 처리 시 과실 비율 판정에 유리합니다. 신고 시 사고 위치, 부상자 유무, 차량 수를 알려주세요.',
  },
  {
    step: 3,
    title: '현장 증거 확보',
    desc: '스마트폰으로 사고 현장 전체, 양쪽 차량 손상 부위, 도로 상태, 신호등, 차선 표시를 사진·동영상으로 촬영합니다. 블랙박스 영상은 절대 삭제하지 말고 별도로 백업하세요. 목격자가 있다면 연락처를 받아두면 과실 판정에 도움이 됩니다.',
  },
  {
    step: 4,
    title: '상대방 정보 교환',
    desc: '상대 운전자의 이름, 연락처, 차량 번호, 보험사와 보험 증서 번호를 확인합니다. 운전면허증과 차량 등록증을 사진으로 촬영해두세요. 상대방이 정보 교환을 거부하면 차량 번호만이라도 반드시 기록합니다.',
  },
  {
    step: 5,
    title: '보험사 연락',
    desc: '자신의 보험사 사고 접수 번호(보험증서 뒷면 또는 앱)로 사고를 접수합니다. 보험사 긴급출동 서비스를 요청하면 현장에서 견인, 응급 수리 등 도움을 받을 수 있습니다. 사고 접수 시 상대 차량 정보와 사고 경위를 상세히 설명하세요.',
  },
];

const insuranceProcess = [
  {
    step: 1,
    title: '사고 접수',
    desc: '보험사 앱, 전화(대표번호), 또는 홈페이지에서 사고를 접수합니다. 접수 시 사고 일시, 장소, 경위, 상대 차량 정보, 부상 여부를 알려줍니다. 접수 후 사고 접수 번호를 받아 기록해두세요.',
    time: '사고 당일',
  },
  {
    step: 2,
    title: '보험사 현장 출동·사고 조사',
    desc: '보험사 손해사정인이 현장에 출동하여 사고 경위를 조사합니다. 차량 손상 정도, 블랙박스 영상, 목격자 진술 등을 확인합니다. 과실 비율은 이 조사 결과를 바탕으로 결정됩니다.',
    time: '1~3일',
  },
  {
    step: 3,
    title: '차량 수리',
    desc: '보험사가 지정 정비소를 안내하거나, 원하는 정비소를 선택할 수 있습니다. 수리 전 견적서를 받고 보험사 승인을 받은 후 수리를 진행합니다. 렌터카 특약이 있으면 수리 기간 중 렌터카를 이용할 수 있습니다.',
    time: '3~14일',
  },
  {
    step: 4,
    title: '보상 및 합의',
    desc: '차량 수리비, 치료비, 휴업 손해, 위자료 등을 산정하여 보상금을 확정합니다. 상대방 보험사에서 보상금을 제시하면 동의 여부를 결정합니다. 보상금이 부당하다고 느끼면 금융감독원 분쟁 조정을 신청할 수 있습니다.',
    time: '2~8주',
  },
];

const faultRatios = [
  { situation: '직진 차량 vs 좌회전 차량', a: '직진 차량', b: '좌회전 차량', ratioA: '0~20%', ratioB: '80~100%', note: '좌회전 차량이 직진 차량 통행을 방해하므로 과실이 큼' },
  { situation: '후방 추돌 (앞차 정상 주행)', a: '앞차', b: '뒤차', ratioA: '0%', ratioB: '100%', note: '뒤차가 안전거리를 유지하지 않은 과실' },
  { situation: '차선 변경 중 사고', a: '직진 차량', b: '차선 변경 차량', ratioA: '0~20%', ratioB: '80~100%', note: '차선 변경 시 안전 확인 의무 위반' },
  { situation: '유턴 차량 vs 직진 차량', a: '직진 차량', b: '유턴 차량', ratioA: '0~20%', ratioB: '80~100%', note: '유턴 차량이 직진 차량 통행을 방해' },
  { situation: '주차장 내 통로 사고', a: '통로 주행 차량', b: '주차 구역 출차 차량', ratioA: '20~30%', ratioB: '70~80%', note: '출차 차량이 통로 확인 의무 있음' },
  { situation: '신호 위반 사고', a: '정상 신호 차량', b: '신호 위반 차량', ratioA: '0%', ratioB: '100%', note: '신호 위반은 중대한 과실' },
  { situation: '교차로 동시 진입', a: '우측 차량', b: '좌측 차량', ratioA: '40%', ratioB: '60%', note: '비신호 교차로에서 우측 차량 우선' },
  { situation: '역주행 사고', a: '정상 주행 차량', b: '역주행 차량', ratioA: '0%', ratioB: '100%', note: '역주행은 100% 과실' },
];

const checklistItems = [
  { number: 1, title: '병원 방문 및 진단', desc: '사고 후 48시간 이내에 반드시 병원을 방문하세요. 경미한 통증이라도 진단을 받아야 합니다. 교통사고 후 며칠 뒤에 통증이 나타나는 경우가 많으므로, 당장 아프지 않아도 검사를 받는 것이 중요합니다.' },
  { number: 2, title: '진단서·소견서 발급', desc: '병원에서 진단서와 소견서를 발급받아 보관합니다. "교통사고로 인한" 이라는 문구가 포함되어야 보험 처리가 수월합니다. 진단서는 최소 2부(보험사 제출용, 본인 보관용)를 발급받으세요.' },
  { number: 3, title: '블랙박스 영상 백업', desc: '블랙박스 영상은 SD카드에서 별도 저장장치(USB, 클라우드)로 백업합니다. 블랙박스가 덮어쓰기 모드인 경우 시간이 지나면 사고 영상이 삭제될 수 있으므로 즉시 백업하세요.' },
  { number: 4, title: '사고 경위서 작성', desc: '사고 발생 일시, 장소, 경위, 상대 차량 정보를 상세히 기록합니다. 기억이 선명할 때 작성해야 정확합니다. 사고 직후 메모장 앱에 간략히 기록해두면 도움이 됩니다.' },
  { number: 5, title: '상대방 보험 정보 확인', desc: '상대방 보험사, 보험증서 번호, 담당자 연락처를 확인하고 기록합니다. 보험사 간 협의를 위해 필요하며, 보상 진행 상황을 확인할 때도 필요합니다.' },
  { number: 6, title: '합의서 내용 꼼꼼히 확인', desc: '합의서에 서명하기 전 보상 항목(치료비, 휴업손해, 위자료, 수리비)과 금액을 꼼꼼히 확인합니다. 합의 후에는 추가 보상을 요구하기 어려우므로 치료가 완전히 끝난 후 합의하는 것이 좋습니다.' },
  { number: 7, title: '렌터카·대차 비용 청구', desc: '렌터카 특약에 가입되어 있으면 수리 기간 동안 렌터카 비용을 보험사에 청구할 수 있습니다. 특약이 없더라도 상대방 과실이 크면 상대 보험사에 대차 비용을 청구할 수 있습니다.' },
  { number: 8, title: '보험료 할증 확인', desc: '사고 처리 후 다음 해 보험료가 얼마나 오르는지 확인합니다. 경미한 사고(수리비 50만 원 이하)는 자비 처리하는 것이 장기적으로 보험료 절약에 유리할 수 있습니다. 보험사에 할증 예상 금액을 문의하세요.' },
];

const accidentTypes = [
  {
    type: '추돌 사고',
    emoji: '🚗💥🚗',
    desc: '가장 흔한 사고 유형입니다. 앞차가 급정거하거나 뒤차가 안전거리를 유지하지 않을 때 발생합니다.',
    steps: [
      '비상등을 켜고 안전한 곳으로 이동',
      '뒤차(추돌 차량)가 100% 과실인 경우가 대부분',
      '목·허리 통증이 나중에 나타날 수 있으므로 반드시 병원 방문',
      '블랙박스 영상으로 급정거 여부 확인 (앞차 급정거 시 과실 조정 가능)',
    ],
  },
  {
    type: '접촉 사고',
    emoji: '🚗↔️🚗',
    desc: '차선 변경, 좁은 도로 교행, 골목길 진입 시 차량 간 접촉이 발생하는 사고입니다.',
    steps: [
      '경미해도 반드시 차량을 세우고 상대방과 정보 교환',
      '접촉 부위와 손상 정도를 사진으로 촬영',
      '과실 비율은 상황에 따라 다르므로 보험사에 판단 요청',
      '수리비가 소액(20~30만 원 이하)이면 자비 처리 검토',
    ],
  },
  {
    type: '주차장 사고',
    emoji: '🅿️💥',
    desc: '주차장 내에서 출차, 입차, 통로 주행 중 발생하는 사고입니다. CCTV와 블랙박스가 중요한 증거입니다.',
    steps: [
      '주차장 CCTV 영상 확보 요청 (관리사무소에 문의)',
      '상대 차량이 없으면(뺑소니) 주차장 관리자에게 신고',
      '출차 차량이 통로 차량보다 과실이 높은 경우가 많음 (70:30)',
      '문콕 사고는 블랙박스 주차 감시 모드로 증거 확보',
    ],
  },
  {
    type: '자손 사고 (단독 사고)',
    emoji: '🚗💥🪨',
    desc: '가드레일, 전신주, 벽 등에 충돌하거나 도랑에 빠지는 등 단독으로 발생하는 사고입니다.',
    steps: [
      '자기차량손해(자차) 보험에 가입되어 있어야 보상 가능',
      '자차 보험 자기부담금(보통 20~50만 원)이 발생',
      '음주·무면허 상태의 단독 사고는 보험 보상 제한',
      '수리비와 자기부담금+보험료 할증을 비교하여 처리 방법 결정',
    ],
  },
];

const faqItems = [
  {
    q: '교통사고 후 경찰 신고는 꼭 해야 하나요?',
    a: '법적으로 인명 피해가 있는 사고는 반드시 경찰에 신고해야 합니다. 경미한 접촉 사고도 신고하는 것이 좋습니다. 경찰 사고 접수 번호가 있으면 보험 처리 시 과실 비율 판정에 유리하고, 나중에 상대방이 뺑소니를 주장하는 것을 방지할 수 있습니다.',
  },
  {
    q: '사고 후 병원은 언제까지 가야 하나요?',
    a: '사고 후 48시간(2일) 이내에 병원을 방문하는 것이 가장 좋습니다. 교통사고 후 근육통, 목 디스크 등의 증상이 며칠 뒤에 나타나는 경우가 많습니다. 2주 이상 지나면 사고와의 인과관계를 입증하기 어려워 보험 처리가 복잡해질 수 있습니다.',
  },
  {
    q: '블랙박스가 없으면 어떻게 하나요?',
    a: '주변 CCTV(상가, 아파트, 교통 CCTV)를 경찰에 요청하여 확보할 수 있습니다. 목격자 진술서도 중요한 증거가 됩니다. 다만, 블랙박스가 없으면 과실 비율 다툼에서 불리할 수 있으므로 블랙박스 설치를 강력히 권장합니다.',
  },
  {
    q: '보험 처리 vs 자비 처리, 어떤 게 유리한가요?',
    a: '수리비가 소액(약 50만 원 이하)이고 상대방 과실이 없는 단독 사고라면 자비 처리가 유리할 수 있습니다. 보험 처리 시 다음 해 보험료가 약 10~20% 할증되므로, 수리비와 3년간 보험료 할증 총액을 비교해보세요. 상대방 과실이 큰 사고는 상대 보험사에서 처리하므로 내 보험료에 영향이 없습니다.',
  },
  {
    q: '과실 비율에 동의하지 않으면 어떻게 하나요?',
    a: '보험사가 제시한 과실 비율에 동의하지 않으면 ① 보험사에 재조사 요청, ② 금융감독원 분쟁 조정 신청, ③ 교통사고 과실 비율 인정 기준(손해보험협회) 자료를 근거로 이의 제기할 수 있습니다. 블랙박스 영상, CCTV, 목격자 진술이 과실 비율 변경에 결정적입니다.',
  },
  {
    q: '합의금은 어떻게 계산되나요?',
    a: '합의금은 치료비(실비), 휴업 손해(일 소득 x 치료 기간), 위자료(정신적 피해 보상), 향후 치료비를 합산하여 산정됩니다. 보험사 제시 금액이 낮다고 느끼면 교통사고 전문 변호사나 법률 구조 공단에 상담을 받아보세요.',
  },
  {
    q: '상대방이 보험 없이 운전하면 어떻게 되나요?',
    a: '상대방이 무보험 차량이면 정부보장사업(한국자동차보험해손사정인)에 보상을 청구할 수 있습니다. 또한, 내 보험에 무보험 차량 상해 특약이 있으면 자신의 보험사에서 보상받을 수 있습니다. 치료비는 건강보험으로 우선 처리하고 이후 구상권을 청구합니다.',
  },
  {
    q: '렌터카 사고는 어떻게 처리하나요?',
    a: '렌터카 사고 시 렌터카 업체와 자신의 보험사에 모두 연락합니다. 렌터카 보험(CDW, 자차면책)에 가입했으면 렌터카 업체 보험으로 처리됩니다. 미가입 시 자신의 자동차보험 다른 차량 운전 특약으로 처리할 수 있으며, 이 특약도 없으면 전액 자비 부담입니다.',
  },
];

export default function CarAccidentProcessPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '교통사고 대처 방법 - 2026년 사고 현장 대처·보험 처리·합의 총정리',
          description:
            '교통사고 발생 시 현장 대처, 보험 처리, 과실 비율, 합의 방법을 총정리했습니다.',
          url: `${BASE_URL}/guide/car-accident-process`,
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
            { '@type': 'ListItem', position: 3, name: '교통사고 대처 방법', item: `${BASE_URL}/guide/car-accident-process` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li><Link href="/guide/car-insurance" className="hover:text-amber-600">가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">교통사고 대처 방법</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            교통사고 대처 방법
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            교통사고는 누구에게나 갑자기 발생할 수 있습니다.
            사고 직후 당황하지 않고 올바르게 대처하는 것이 피해를 최소화하는 핵심입니다.
            <strong> 현장 대처 5단계, 보험 처리 절차, 과실 비율 기준, 합의 방법</strong>까지
            교통사고 발생 시 알아야 할 모든 것을 정리했습니다.
          </p>
        </section>

        {/* 1. 사고 직후 현장 대처 5단계 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            사고 직후 현장 대처 5단계
          </h2>
          <div className="space-y-4">
            {immediateSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-red-50 rounded-2xl p-5 border border-red-100">
            <h4 className="font-bold text-red-800 mb-2">절대 하지 말아야 할 것</h4>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• 사고 현장 이탈 (뺑소니) — 5년 이하 징역 또는 1,500만 원 이하 벌금</li>
              <li>• 현장에서 즉석 합의 — 나중에 추가 증상 발견 시 보상받기 어려움</li>
              <li>• 사고 현장 임의 정리 — 증거 사진 촬영 전 차량 이동 금지</li>
              <li>• &quot;괜찮다&quot;는 구두 합의 — 반드시 보험사를 통해 정식 처리</li>
            </ul>
          </div>
        </section>

        {/* 2. 교통사고 보험 처리 절차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            교통사고 보험 처리 절차
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 mb-6 text-sm">
              {insuranceProcess.map((item, index) => (
                <div key={item.step} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                    {item.step}단계: {item.title}
                  </span>
                  {index < insuranceProcess.length - 1 && (
                    <span className="text-gray-400 hidden md:inline">→</span>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {insuranceProcess.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{item.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">보험 처리 팁</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• 보험사 앱(삼성화재, 현대해상, DB손해보험 등)에서 실시간 진행 상황 확인 가능</li>
              <li>• 정비소 선택권은 차량 소유자에게 있으므로 원하는 정비소를 지정할 수 있음</li>
              <li>• 수리비 견적이 높으면 다른 정비소에서 비교 견적을 받아보세요</li>
              <li>• 보상 담당자 이름과 연락처를 꼭 기록해두세요</li>
            </ul>
          </div>
        </section>

        {/* 3. 과실 비율 기준 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            과실 비율 기준 (상황별)
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            과실 비율은 손해보험협회의 &lsquo;자동차사고 과실비율 인정기준&rsquo;을 기반으로 판정됩니다.
            아래는 대표적인 상황별 기본 과실 비율이며, 실제 사고에서는 신호 위반, 속도 초과, 음주 등 가감 요소에 따라 달라질 수 있습니다.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">사고 상황</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-900">차량 A</th>
                    <th className="text-center px-4 py-3 font-semibold text-amber-700">A 과실</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-900">차량 B</th>
                    <th className="text-center px-4 py-3 font-semibold text-amber-700">B 과실</th>
                  </tr>
                </thead>
                <tbody>
                  {faultRatios.map((row, index) => (
                    <tr key={row.situation} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.situation}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.a}</td>
                      <td className="px-4 py-3 text-center font-semibold text-amber-700">{row.ratioA}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.b}</td>
                      <td className="px-4 py-3 text-center font-semibold text-amber-700">{row.ratioB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">과실 비율 가감 요소</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 text-sm mb-2">과실 가중 요소 (+)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 음주 운전: +10~20%</li>
                  <li>• 신호 위반: +20%</li>
                  <li>• 속도 위반 (20km/h 초과): +10%</li>
                  <li>• 핸드폰 사용 중: +5~10%</li>
                  <li>• 무면허 운전: +10~20%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 text-sm mb-2">과실 감경 요소 (-)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 방향지시등 사용: -5%</li>
                  <li>• 서행 중 사고: -5~10%</li>
                  <li>• 비상등 점멸 중: -5%</li>
                  <li>• 경적으로 경고: -5%</li>
                  <li>• 어린이 보호구역 내: 상대 +10~20%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 교통사고 합의 방법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            교통사고 합의 방법
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-sm font-bold">A</span>
                보험사 합의 (권장)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#10003;</span>
                  <span>보험사 손해사정인이 피해 금액을 객관적으로 산정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#10003;</span>
                  <span>과실 비율을 전문적으로 판정하여 공정한 보상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#10003;</span>
                  <span>치료비, 수리비, 위자료 등 모든 항목 체계적 처리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#10003;</span>
                  <span>불만족 시 금융감독원 분쟁 조정 가능</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-xl p-3">
                대부분의 사고는 보험사를 통한 합의가 가장 안전하고 합리적입니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-sm font-bold">B</span>
                개인 합의 (주의 필요)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#9888;</span>
                  <span>보험 경력 할증을 피하기 위해 선택하는 경우가 많음</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#9888;</span>
                  <span>합의 후 추가 증상 발견 시 추가 보상 요구 어려움</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#9888;</span>
                  <span>합의금 적정성을 판단하기 어려워 불리한 합의 가능</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#9888;</span>
                  <span>합의서 작성 없이 현금 교환 시 분쟁 발생 가능</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 bg-red-50 rounded-xl p-3">
                개인 합의 시 반드시 합의서를 작성하고 서명을 받으세요.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">합의금 산정 기준</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">항목</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">설명</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">산정 기준</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">치료비</td>
                    <td className="px-4 py-3 text-gray-600">실제 발생한 의료비</td>
                    <td className="px-4 py-3 text-gray-600">진단서, 영수증 기준 실비 보상</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">휴업 손해</td>
                    <td className="px-4 py-3 text-gray-600">치료 기간 중 소득 감소분</td>
                    <td className="px-4 py-3 text-gray-600">일 소득 x 치료 기간 (최대 85%)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">위자료</td>
                    <td className="px-4 py-3 text-gray-600">정신적 고통에 대한 보상</td>
                    <td className="px-4 py-3 text-gray-600">부상 등급별 약 30~300만 원</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">향후 치료비</td>
                    <td className="px-4 py-3 text-gray-600">향후 예상 치료 비용</td>
                    <td className="px-4 py-3 text-gray-600">의사 소견서 기반 산정</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">차량 수리비</td>
                    <td className="px-4 py-3 text-gray-600">차량 복구 비용</td>
                    <td className="px-4 py-3 text-gray-600">정비소 견적서 기준, 감가 보상 별도</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. 교통사고 후 체크리스트 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            교통사고 후 체크리스트 8항목
          </h2>
          <div className="space-y-4">
            {checklistItems.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 사고 유형별 대처 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            사고 유형별 대처 방법
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accidentTypes.map((item) => (
              <div
                key={item.type}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              자동차 보험과 운전 관련 가이드를 더 확인하세요
            </h2>
            <p className="text-amber-100 mb-6">
              보험료 비교, 초보운전 가이드 등 운전자에게 필요한 모든 정보를 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/car-insurance"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                자동차보험 비교 가이드
              </Link>
              <Link
                href="/guide/beginner-driver"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                초보운전 필수 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
