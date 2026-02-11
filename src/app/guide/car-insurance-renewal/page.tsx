import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차보험 갱신 가이드 - 2026년 보험료 절약하는 갱신 방법',
  description:
    '자동차보험 갱신 시기, 보험사 변경 체크리스트, 보험료 절약 방법 8가지, 연령대별 갱신 팁을 총정리했습니다. 만기 전 비교하고 최대 50%까지 보험료를 절약하세요.',
  keywords: [
    '자동차보험 갱신',
    '보험 갱신 방법',
    '보험료 절약',
    '보험사 변경',
    '자동차보험 만기',
    '다이렉트 보험',
    '마일리지 특약',
    '무사고 할인',
    '보험 비교',
    '보험다모아',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-insurance-renewal` },
  openGraph: {
    title: '자동차보험 갱신 가이드 - 2026년 보험료 절약하는 갱신 방법',
    description:
      '자동차보험 갱신 시기, 보험사 변경 방법, 보험료 절약 팁을 총정리했습니다.',
    url: `${BASE_URL}/guide/car-insurance-renewal`,
    type: 'website',
  },
};

const checklistItems = [
  {
    step: '1',
    title: '현재 보험 만기일 확인',
    desc: '보험 증권이나 보험사 앱에서 만기일을 확인하세요. 만기 1~2개월 전부터 비교를 시작하는 것이 좋습니다.',
  },
  {
    step: '2',
    title: '무사고 할인 등급 확인',
    desc: '보험개발원 또는 현재 보험사에서 내 할인·할증 등급을 확인하세요. 보험사를 바꿔도 등급은 유지됩니다.',
  },
  {
    step: '3',
    title: '특약 내역 정리',
    desc: '현재 가입된 특약(마일리지, 블랙박스, 자기차량손해 등)을 정리하고 불필요한 특약은 제거합니다.',
  },
  {
    step: '4',
    title: '보험다모아에서 비교',
    desc: '금융감독원 보험다모아(insure.or.kr)에서 보험사별 보험료를 한 번에 비교할 수 있습니다.',
  },
  {
    step: '5',
    title: '다이렉트 vs 대리점 비교',
    desc: '같은 보험사라도 다이렉트 가입이 10~20% 저렴합니다. 온라인 가입이 가능한지 확인하세요.',
  },
  {
    step: '6',
    title: '보장 내용 동일 여부 확인',
    desc: '보험사를 변경할 때 기존과 동일한 보장 범위(대인·대물·자손·자차)인지 꼭 확인하세요.',
  },
  {
    step: '7',
    title: '갱신 전 사고 접수 확인',
    desc: '갱신 전에 미처리 사고가 있으면 현재 보험사에서 처리 후 변경하는 것이 유리합니다.',
  },
];

const savingMethods = [
  {
    title: '다이렉트 가입',
    saving: '10~20% 절약',
    desc: '대리점 수수료 없이 온라인·전화로 직접 가입하면 보험료가 10~20% 저렴합니다. 삼성화재 다이렉트, KB다이렉트, 현대해상 다이렉트 등이 대표적입니다.',
  },
  {
    title: '마일리지 특약',
    saving: '최대 30% 절약',
    desc: '연간 주행거리가 적으면(5,000km 이하) 최대 30%까지 할인됩니다. 출퇴근 거리가 짧거나 주말에만 운전하는 경우 반드시 가입하세요.',
  },
  {
    title: '블랙박스 할인',
    saving: '2~5% 절약',
    desc: '블랙박스를 장착하면 보험료 할인을 받을 수 있습니다. 보험사에 블랙박스 장착 사실을 알리면 자동 적용됩니다.',
  },
  {
    title: '가족한정 특약',
    saving: '5~15% 절약',
    desc: '운전자를 본인·배우자·가족으로 한정하면 보험료가 할인됩니다. 다만 지정 외 운전자가 사고 시 보상에 제한이 있습니다.',
  },
  {
    title: '무사고 유지',
    saving: '최대 50% 절약',
    desc: '무사고 기간이 길수록 보험료가 할인됩니다. 3년 무사고 시 약 30%, 5년 이상 무사고 시 최대 50%까지 할인됩니다. 소액 사고는 자비 처리가 유리할 수 있습니다.',
  },
  {
    title: '차량 가액 확인',
    saving: '과납 방지',
    desc: '차량 시세가 떨어졌는데 보험 가액이 높게 설정되어 있으면 보험료를 더 내게 됩니다. 갱신 시 차량 가액을 현재 시세에 맞게 조정하세요.',
  },
  {
    title: 'T맵·카카오내비 안전운전 할인',
    saving: '3~11% 절약',
    desc: '안전운전 점수를 기반으로 보험료를 할인받을 수 있습니다. T맵(최대 11%), 카카오내비(최대 5%) 등의 안전운전 프로그램을 활용하세요.',
  },
  {
    title: '보험료 납부 방법 최적화',
    saving: '2~3% 절약',
    desc: '일시납이 분할납보다 약 2~3% 저렴합니다. 또한 특정 카드로 결제하면 추가 할인이나 캐시백을 받을 수 있습니다.',
  },
];

const ageTips = [
  {
    age: '20대',
    title: '운전 경력 쌓기',
    tips: [
      '부모님 차량에 가족한정으로 등록해 경력을 쌓으세요',
      '다이렉트 가입으로 초기 보험료를 절약하세요',
      '소액 사고는 자비 처리하여 무사고 등급을 유지하세요',
      '마일리지 특약으로 주행거리가 적으면 할인받으세요',
    ],
  },
  {
    age: '30대',
    title: '마일리지+가족한정 활용',
    tips: [
      '마일리지 특약과 가족한정 특약을 함께 적용하세요',
      '블랙박스·안전운전 할인을 모두 활용하세요',
      '무사고 경력이 쌓이면 보험료가 크게 줄어듭니다',
      '보험다모아에서 매년 비교 후 최저가 보험사를 선택하세요',
    ],
  },
  {
    age: '40대',
    title: '최대 할인 활용',
    tips: [
      '무사고 할인이 최대에 가까워지는 시기입니다',
      '불필요한 특약은 정리하고 핵심 보장만 유지하세요',
      '차량 가액을 현재 시세에 맞게 조정하세요',
      '장기 고객 할인이 있는지 보험사에 확인하세요',
    ],
  },
  {
    age: '50대 이상',
    title: '고령 할증 대비',
    tips: [
      '60세 이상부터 고령 운전자 할증이 적용될 수 있습니다',
      '안전운전 습관을 증명할 수 있는 특약을 활용하세요',
      '보장 범위를 유지하면서 다이렉트로 비용을 절약하세요',
      '운전자 범위를 줄여 가족한정 할인을 극대화하세요',
    ],
  },
];

const cautionItems = [
  {
    title: '보장 축소 위험',
    desc: '보험료만 보고 갱신하면 보장 내용이 축소될 수 있습니다. 대인배상 II 무한, 대물배상 금액, 자기차량손해 등 핵심 보장이 동일한지 반드시 확인하세요.',
  },
  {
    title: '특약 자동 해지',
    desc: '보험사를 변경하면 기존 특약(마일리지, 블랙박스 할인 등)이 자동 해지됩니다. 새 보험사에서 동일한 특약을 다시 신청해야 합니다.',
  },
  {
    title: '보험 공백기간 방지',
    desc: '기존 보험 만기일과 새 보험 시작일 사이에 공백이 생기면 무보험 상태가 됩니다. 만기일에 맞춰 새 보험이 시작되도록 가입하세요.',
  },
  {
    title: '보험사 변경 시 확인사항',
    desc: '긴급출동 서비스 범위, 제휴 정비소 네트워크, 사고 처리 만족도 등도 확인하세요. 보험료가 저렴해도 서비스 품질이 낮으면 사고 시 불편할 수 있습니다.',
  },
];

const faqItems = [
  {
    q: '보험 갱신 안 하면 어떻게 되나요?',
    a: '자동차보험은 의무보험(책임보험)을 반드시 가입해야 합니다. 갱신하지 않으면 무보험 상태가 되어 과태료(최대 100만 원)가 부과되고, 사고 시 모든 비용을 본인이 부담해야 합니다. 자동갱신을 설정해두면 만기 시 자동으로 갱신됩니다.',
  },
  {
    q: '보험사를 바꿔도 무사고 할인이 유지되나요?',
    a: '네, 무사고 할인(할인·할증 등급)은 보험개발원에서 통합 관리하므로 보험사를 변경해도 그대로 유지됩니다. 다만 보험사별 자체 할인(장기 고객 할인 등)은 소멸될 수 있습니다.',
  },
  {
    q: '갱신 시 보장 내용을 바꿀 수 있나요?',
    a: '네, 갱신 시점에 보장 내용을 자유롭게 변경할 수 있습니다. 특약 추가·삭제, 보장 금액 변경, 운전자 범위 변경 등이 모두 가능합니다. 다만 보장을 줄이면 사고 시 보상에 제한이 있으므로 신중하게 결정하세요.',
  },
  {
    q: '자동갱신을 해지하려면 어떻게 하나요?',
    a: '보험사 고객센터(전화), 앱, 또는 홈페이지에서 자동갱신을 해지할 수 있습니다. 만기 1개월 전까지 해지 신청하면 됩니다. 자동갱신을 해지하면 만기 전에 직접 새 보험에 가입해야 합니다.',
  },
  {
    q: '보험료가 갑자기 오른 이유는 무엇인가요?',
    a: '보험료가 오르는 주요 원인은 ①사고 접수로 할증 적용, ②차량 연식 변화에 따른 요율 조정, ③보험사 전체 요율 인상, ④나이 변화에 따른 할증(고령 등), ⑤특약 변경 등입니다. 보험사에 세부 내역을 요청하면 정확한 원인을 확인할 수 있습니다.',
  },
  {
    q: '다이렉트 보험과 설계사 보험의 차이는?',
    a: '보장 내용은 동일합니다. 다이렉트 보험은 중간 수수료가 없어 10~20% 저렴합니다. 설계사 보험은 가입 시 상담과 사고 시 도움을 받을 수 있다는 장점이 있습니다. 보험에 익숙하다면 다이렉트, 상담이 필요하면 설계사 보험이 적합합니다.',
  },
  {
    q: '보험 갱신 비교 사이트 추천해주세요',
    a: '금융감독원이 운영하는 보험다모아(insure.or.kr)가 가장 공신력 있는 비교 사이트입니다. 모든 보험사의 보험료를 한 번에 비교할 수 있습니다. 그 외 각 보험사의 다이렉트 홈페이지에서도 견적을 받아볼 수 있습니다.',
  },
];

export default function CarInsuranceRenewalGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차보험 갱신 가이드 - 2026년 보험료 절약하는 갱신 방법',
          description:
            '자동차보험 갱신 시기, 보험사 변경 방법, 보험료 절약 팁을 총정리했습니다.',
          url: `${BASE_URL}/guide/car-insurance-renewal`,
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
              name: '자동차보험 갱신 가이드',
              item: `${BASE_URL}/guide/car-insurance-renewal`,
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
            <li className="text-gray-900 font-medium">자동차보험 갱신 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자동차보험 갱신 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            자동차보험은 매년 갱신해야 하는 필수 비용입니다. 만기 전에 보험사를 비교하고
            할인 특약을 활용하면 같은 보장이라도 보험료를 <strong>최대 50%까지</strong> 절약할 수 있습니다.
            2026년 기준 갱신 절차와 절약 방법을 정리했습니다.
          </p>
        </section>

        {/* 보험 갱신 시기와 절차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            보험 갱신 시기와 절차
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-3">만기 1~2개월 전 비교 시작</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                보험 만기일 기준 1~2개월 전부터 여러 보험사의 보험료를 비교하는 것이 좋습니다.
                너무 일찍 견적을 받으면 실제 갱신 시점과 보험료가 달라질 수 있고,
                너무 늦으면 비교할 시간이 부족합니다. 대부분의 보험사는 만기 60일 전부터 견적 조회가 가능합니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-3">갱신 프로세스</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
                <span className="bg-amber-50 px-3 py-1.5 rounded-lg font-medium">만기 안내 수신</span>
                <span className="text-gray-400">&rarr;</span>
                <span className="bg-amber-50 px-3 py-1.5 rounded-lg font-medium">보험료 비교</span>
                <span className="text-gray-400">&rarr;</span>
                <span className="bg-amber-50 px-3 py-1.5 rounded-lg font-medium">보장 내용 결정</span>
                <span className="text-gray-400">&rarr;</span>
                <span className="bg-amber-50 px-3 py-1.5 rounded-lg font-medium">가입·결제</span>
                <span className="text-gray-400">&rarr;</span>
                <span className="bg-amber-50 px-3 py-1.5 rounded-lg font-medium">보험증권 확인</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">자동갱신</h3>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>- 만기 시 기존 보험사에서 자동으로 갱신</li>
                  <li>- 보장 내용과 특약이 그대로 유지</li>
                  <li>- 보험료가 최적화되지 않을 수 있음</li>
                  <li>- 비교 없이 갱신되어 불리할 수 있음</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">수동갱신</h3>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>- 직접 보험사를 비교하고 선택</li>
                  <li>- 불필요한 특약 정리 가능</li>
                  <li>- 다이렉트 할인 등 적극 활용 가능</li>
                  <li>- 만기일 관리를 직접 해야 함</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-6">
              <h3 className="font-bold text-amber-800 mb-2">갱신 안내 확인 방법</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                보험사는 만기 약 45~60일 전에 SMS, 앱 알림, 우편으로 갱신 안내를 발송합니다.
                안내를 받지 못했다면 보험사 앱이나 고객센터에서 만기일을 직접 확인하세요.
                보험다모아(insure.or.kr)에서도 내 보험 정보를 조회할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 보험사 변경 체크리스트 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            보험사 변경 체크리스트
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <ol className="space-y-4">
              {checklistItems.map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 보험료 절약 방법 8가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            보험료 절약 방법 8가지
          </h2>
          <div className="space-y-4">
            {savingMethods.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                      {item.saving}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 연령대별 갱신 팁 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            연령대별 갱신 팁
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ageTips.map((group) => (
              <div
                key={group.age}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm bg-amber-500 text-white px-2.5 py-0.5 rounded-full font-bold">
                    {group.age}
                  </span>
                  <h3 className="font-bold text-gray-900">{group.title}</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {group.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 갱신 시 주의사항 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            갱신 시 주의사항
          </h2>
          <div className="space-y-4">
            {cautionItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  !
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
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
              보험료 비교 가이드도 확인하세요
            </h2>
            <p className="text-amber-100 mb-6">
              보험사별 보험료 비교와 차종별 보험료 정보를 한눈에 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/car-insurance"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                보험료 비교 가이드
              </Link>
              <Link
                href="/guide/insurance-by-car"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                차종별 보험료 비교
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
