import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차보험료 비교 가이드 - 2026년 보험료 절약 방법 총정리',
  description:
    '자동차보험료 비교 방법, 보험사별 특징, 다이렉트 보험 할인, 특약 선택 가이드를 정리했습니다. 차종별·연령별 예상 보험료와 보험료 절약 팁을 확인하세요.',
  keywords: [
    '자동차보험료 비교',
    '자동차보험 다이렉트',
    '자동차보험료 절약',
    '자동차보험 특약',
    '자동차보험 갱신',
    '자동차보험료 계산',
    '보험사 비교',
    '자동차보험 할인',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-insurance` },
  openGraph: {
    title: '자동차보험료 비교 가이드 - 2026년 보험료 절약 방법 총정리',
    description:
      '자동차보험료 비교 방법과 절약 팁을 정리했습니다.',
    url: `${BASE_URL}/guide/car-insurance`,
    type: 'website',
  },
};

const insuranceTypes = [
  {
    emoji: '🛡️',
    title: '의무보험 (책임보험)',
    desc: '법적으로 반드시 가입해야 하는 보험입니다. 대인배상 I(무한), 대물배상(2천만 원)이 포함됩니다. 미가입 시 과태료가 부과됩니다.',
    cost: '연 15~30만 원',
  },
  {
    emoji: '🔒',
    title: '종합보험 (임의보험)',
    desc: '의무보험에 추가로 가입하는 보험입니다. 대인배상 II, 대물배상 확대, 자기신체사고, 자기차량손해 등을 선택할 수 있습니다.',
    cost: '연 50~200만 원',
  },
];

const comparisonByAge = [
  { age: '20대 (1~3년)', premium: '약 120~200만 원', note: '경력 짧아 보험료 높음' },
  { age: '30대 (5~10년)', premium: '약 60~100만 원', note: '무사고 할인 적용 시' },
  { age: '40대 (10~20년)', premium: '약 50~80만 원', note: '경력 할인 최대 적용' },
  { age: '50대 이상', premium: '약 55~90만 원', note: '고령 할증 시작 가능' },
];

const comparisonByCar = [
  { type: '경차', model: '모닝·스파크', premium: '약 40~60만 원', reason: '차량 가액 낮음' },
  { type: '준중형', model: '아반떼·K3', premium: '약 60~90만 원', reason: '가장 일반적인 구간' },
  { type: '중형', model: '쏘나타·K5', premium: '약 80~120만 원', reason: '차량 가액 중간' },
  { type: '대형·SUV', model: '그랜저·팰리세이드', premium: '약 100~170만 원', reason: '차량 가액 높음' },
  { type: '전기차', model: '아이오닉5·EV6', premium: '약 90~150만 원', reason: '수리비 높아 보험료 상승' },
  { type: '수입차', model: 'BMW·벤츠', premium: '약 150~300만 원', reason: '부품비·수리비 높음' },
];

const discountFactors = [
  {
    emoji: '📱',
    title: '다이렉트 보험 가입',
    saving: '10~20% 절약',
    desc: '대리점 수수료 없이 온라인·전화로 직접 가입하면 보험료가 10~20% 저렴합니다. 삼성화재 다이렉트, KB다이렉트, 현대해상 다이렉트 등이 있습니다.',
  },
  {
    emoji: '🚗',
    title: '마일리지 특약',
    saving: '최대 30% 절약',
    desc: '연간 주행거리가 적으면(5,000km 이하) 최대 30%까지 할인됩니다. 출퇴근 거리가 짧거나 주말에만 운전하는 경우 유리합니다.',
  },
  {
    emoji: '🎥',
    title: '블랙박스 할인',
    saving: '2~5% 절약',
    desc: '블랙박스를 장착하면 보험료 할인을 받을 수 있습니다. 보험사에 블랙박스 장착 사실을 알리면 자동 적용됩니다.',
  },
  {
    emoji: '👨‍👩‍👧',
    title: '가족 한정 특약',
    saving: '5~15% 절약',
    desc: '운전자를 본인·배우자·가족으로 한정하면 보험료가 할인됩니다. 다만 지정 외 운전자가 사고 시 보상에 제한이 있습니다.',
  },
  {
    emoji: '🏆',
    title: '무사고 할인',
    saving: '최대 50% 절약',
    desc: '무사고 기간이 길수록 보험료가 할인됩니다. 3년 무사고 시 약 30%, 5년 이상 무사고 시 최대 50%까지 할인됩니다.',
  },
  {
    emoji: '🔄',
    title: '다수 보험 할인',
    saving: '3~5% 절약',
    desc: '같은 보험사에서 운전자보험, 화재보험 등 다른 보험을 함께 가입하면 추가 할인을 받을 수 있습니다.',
  },
];

const faqItems = [
  {
    q: '자동차보험 갱신 시 보험사를 바꿔도 되나요?',
    a: '네, 자동차보험은 매년 갱신할 때 보험사를 자유롭게 변경할 수 있습니다. 무사고 할인 등급은 보험사가 바뀌어도 그대로 유지됩니다. 갱신 1~2개월 전에 여러 보험사의 보험료를 비교하는 것이 좋습니다.',
  },
  {
    q: '다이렉트 보험과 대리점 보험의 보장 내용이 다른가요?',
    a: '보장 내용은 동일합니다. 다이렉트 보험은 대리점 수수료가 없어 보험료가 저렴할 뿐, 보장 범위와 보상 절차는 같습니다. 다만 가입 시 상담이 필요하면 대리점이 편리할 수 있습니다.',
  },
  {
    q: '자동차보험료에 가장 큰 영향을 미치는 요인은 무엇인가요?',
    a: '가장 큰 영향을 미치는 요인은 ①운전 경력(사고 이력), ②차량 가액, ③운전자 연령입니다. 무사고 경력이 길수록, 차량 가격이 낮을수록, 30~40대일수록 보험료가 저렴합니다.',
  },
  {
    q: '전기차 보험료가 일반 차량보다 비싼 이유는 무엇인가요?',
    a: '전기차는 배터리 수리·교체 비용이 높고, 전용 부품 가격이 비싸기 때문에 보험료가 상대적으로 높습니다. 다만 전기차 보급이 늘면서 보험료 격차는 점차 줄어드는 추세입니다.',
  },
];

export default function CarInsuranceGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차보험료 비교 가이드 - 2026년 보험료 절약 방법 총정리',
          description:
            '자동차보험료 비교 방법, 보험사별 특징, 할인 방법을 정리했습니다.',
          url: `${BASE_URL}/guide/car-insurance`,
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
              name: '자동차보험료 비교 가이드',
              item: `${BASE_URL}/guide/car-insurance`,
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
            <li className="text-gray-900 font-medium">자동차보험료 비교 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자동차보험료 비교 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            자동차보험은 매년 갱신하는 필수 비용입니다. 보험사·가입 방식·특약 선택에 따라
            같은 차량이라도 보험료가 <strong>2배 이상</strong> 차이날 수 있습니다.
            2026년 기준 보험료 비교 방법과 절약 팁을 정리했습니다.
          </p>
        </section>

        {/* 보험 종류 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자동차보험 종류
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {insuranceTypes.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <p className="text-amber-600 font-semibold text-sm">{item.cost}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 연령별 보험료 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            연령별 예상 보험료 (종합보험 기준)
          </h2>
          <p className="text-gray-600 mb-4">
            중형차(쏘나타급) 기준, 자기차량손해 포함 종합보험 예상 보험료입니다.
            실제 보험료는 사고 이력, 차량 가액, 특약 선택에 따라 달라집니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">연령대 (경력)</th>
                    <th className="px-4 py-3 text-right font-semibold">예상 연간 보험료</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonByAge.map((row) => (
                    <tr key={row.age} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.age}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.premium}</td>
                      <td className="px-4 py-3 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 차종별 보험료 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            차종별 예상 보험료
          </h2>
          <p className="text-gray-600 mb-4">
            30대, 5년 이상 무사고 운전자 기준 예상 보험료입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-left font-semibold">대표 모델</th>
                    <th className="px-4 py-3 text-right font-semibold">예상 연간 보험료</th>
                    <th className="px-4 py-3 text-left font-semibold">특이사항</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonByCar.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.model}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.premium}</td>
                      <td className="px-4 py-3 text-gray-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 자기차량손해 포함, 대인배상 II 무한, 대물배상 1억 원 기준
          </p>
        </section>

        {/* 보험료 절약 방법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자동차보험료 절약 방법 6가지
          </h2>
          <div className="space-y-4">
            {discountFactors.map((item, index) => (
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

        {/* 보험 갱신 체크리스트 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            보험 갱신 시 체크리스트
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <ol className="space-y-4">
              {[
                { step: '1', title: '갱신 1~2개월 전 비교 시작', desc: '보험 만기 1~2개월 전부터 여러 보험사의 보험료를 비교합니다. 보험다모아(insure.or.kr)에서 한 번에 비교할 수 있습니다.' },
                { step: '2', title: '보장 내용 점검', desc: '불필요한 특약은 제거하고, 필요한 보장(자기차량손해, 무보험차 상해 등)은 추가합니다.' },
                { step: '3', title: '할인 항목 확인', desc: '마일리지 특약, 블랙박스 할인, 가족 한정 등 적용 가능한 할인을 모두 확인합니다.' },
                { step: '4', title: '다이렉트 vs 대리점 비교', desc: '같은 보험사라도 다이렉트 가입이 10~20% 저렴합니다. 온라인 가입이 가능한지 확인하세요.' },
                { step: '5', title: '보험료 납부 방식 선택', desc: '일시납이 분할납보다 약 2~3% 저렴합니다. 카드 할인이 적용되는지도 확인하세요.' },
              ].map((item) => (
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
              자동차 유지비를 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              보험료를 포함한 전체 유지비를 확인하고 절약 방법을 찾아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                유지비 가이드 보기
              </Link>
              <Link
                href="/calculator/fuel-cost"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                유류비 계산하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
