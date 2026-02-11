import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '신차 출고 후 해야 할 것 체크리스트 - 2026년 필수 점검 항목',
  description:
    '신차 출고 후 반드시 해야 할 것들을 체크리스트로 정리했습니다. 보험 가입, 번호판 등록, 블랙박스 설치, 길들이기 운전, 보증 등록까지 빠짐없이 확인하세요.',
  keywords: [
    '신차 출고 후',
    '신차 체크리스트',
    '신차 인수 점검',
    '신차 길들이기',
    '신차 보험',
    '신차 등록',
    '신차 출고 준비',
    '신차 인수 후 해야 할 것',
  ],
  alternates: { canonical: `${BASE_URL}/guide/new-car-checklist` },
  openGraph: {
    title: '신차 출고 후 해야 할 것 체크리스트 - 2026년 필수 점검 항목',
    description: '신차 출고 후 반드시 해야 할 것들을 체크리스트로 정리했습니다.',
    url: `${BASE_URL}/guide/new-car-checklist`,
    type: 'website',
  },
};

const immediateChecklist = [
  {
    emoji: '🛡️',
    title: '자동차보험 가입',
    timing: '출고 전 필수',
    desc: '출고 전에 자동차보험에 가입해야 합니다. 보험 미가입 상태로 운행하면 과태료가 부과됩니다. 다이렉트 보험으로 가입하면 10~20% 저렴합니다.',
    link: { href: '/guide/car-insurance', text: '보험료 비교 가이드 →' },
  },
  {
    emoji: '📋',
    title: '차량 등록 (번호판)',
    timing: '출고 후 즉시',
    desc: '딜러가 대행하는 경우가 대부분이지만, 직접 등록하는 경우 관할 관청에서 취등록세를 납부하고 번호판을 발급받습니다.',
    link: { href: '/calculator/registration-tax', text: '취등록세 계산하기 →' },
  },
  {
    emoji: '🔍',
    title: '출고 차량 외관 점검',
    timing: '인수 당일',
    desc: '도장 상태, 스크래치, 찍힘, 패널 간격, 유리 상태를 꼼꼼히 확인합니다. 문제 발견 시 즉시 딜러에게 알리고 사진을 촬영해두세요.',
  },
  {
    emoji: '📱',
    title: '차량 기능 작동 확인',
    timing: '인수 당일',
    desc: '에어컨, 히터, 오디오, 내비게이션, 열선시트, 와이퍼, 전조등, 방향지시등, 트렁크 등 모든 기능이 정상 작동하는지 확인합니다.',
  },
];

const firstWeekChecklist = [
  {
    emoji: '📹',
    title: '블랙박스 설치',
    desc: '사고 증거 확보와 보험료 할인(2~5%)을 위해 블랙박스를 설치합니다. 전·후방 2채널 이상을 설치하는 것이 좋습니다.',
  },
  {
    emoji: '🎨',
    title: 'PPF·유리막 코팅 (선택)',
    desc: '도장면 보호를 위한 PPF(페인트 보호 필름)나 유리막 코팅을 원하면 출고 직후에 시공하는 것이 좋습니다. 신차 상태에서 시공해야 효과가 좋습니다.',
  },
  {
    emoji: '🪟',
    title: '선팅 (썬팅)',
    desc: '자외선 차단과 프라이버시를 위해 유리 선팅을 합니다. 전면 유리는 가시광선 투과율 70% 이상이어야 합법입니다.',
  },
  {
    emoji: '📍',
    title: '하이패스 단말기 등록',
    desc: '고속도로 이용을 위해 하이패스 단말기를 구입·등록합니다. 차량 번호와 연동하여 후불 결제도 가능합니다.',
  },
  {
    emoji: '📲',
    title: '제조사 앱 등록',
    desc: '현대(블루링크), 기아(Kia Connect) 등 제조사 앱에 차량을 등록하면 원격 시동, 차량 상태 확인, 정비 예약 등을 이용할 수 있습니다.',
  },
];

const firstMonthChecklist = [
  {
    emoji: '🚗',
    title: '길들이기 운전 (1,000~2,000km)',
    desc: '신차 초기에는 엔진, 변속기, 브레이크 등이 안정화되는 기간이 필요합니다. 급가속·급정거를 피하고 정속 주행을 유지하세요.',
    tips: [
      'RPM 3,000 이하로 유지',
      '급가속·급정거 자제',
      '고속도로 장시간 정속 주행 피하기',
      '다양한 RPM 대역으로 주행',
    ],
  },
  {
    emoji: '🏷️',
    title: '자동차세 연납 신청',
    desc: '자동차세를 연초에 일시 납부하면 최대 4% 할인을 받을 수 있습니다. 1월에 신청하면 가장 큰 할인을 받습니다.',
    link: { href: '/guide/car-tax-prepay', text: '연납 가이드 보기 →' },
  },
  {
    emoji: '📝',
    title: '보증 등록 확인',
    desc: '제조사 보증(일반 3년/6만km, 파워트레인 5년/10만km)이 정상 등록되었는지 확인합니다. 보증 기간과 조건을 숙지해두세요.',
  },
  {
    emoji: '🅿️',
    title: '주차 환경 확인',
    desc: '자택·직장 주차 공간을 확인하고, 필요시 주차장 계약이나 거주자 우선 주차를 신청합니다.',
  },
];

const maintenanceSchedule = [
  { km: '1,000km', item: '첫 점검 (무상)', desc: '엔진오일, 냉각수, 타이어 공기압 등 기본 점검' },
  { km: '5,000km', item: '엔진오일 교체', desc: '첫 엔진오일 교체 (이후 1만km 또는 6개월마다)' },
  { km: '10,000km', item: '정기 점검', desc: '에어필터, 에어컨 필터, 브레이크 패드 점검' },
  { km: '20,000km', item: '종합 점검', desc: '타이어 로테이션, 브레이크 오일, 변속기 오일 점검' },
  { km: '40,000km', item: '주요 부품 교체', desc: '브레이크 패드, 타이어 교체 시기 확인' },
];

const faqItems = [
  {
    q: '신차 길들이기는 꼭 해야 하나요?',
    a: '현대적인 제조 기술로 인해 과거만큼 엄격한 길들이기가 필요하지는 않지만, 초기 1,000~2,000km까지는 급가속·급정거를 피하고 다양한 RPM 대역으로 주행하는 것이 엔진과 변속기 수명에 도움이 됩니다.',
  },
  {
    q: '출고 후 바로 고속도로를 달려도 되나요?',
    a: '고속도로 주행 자체는 문제없지만, 초기에는 장시간 같은 속도로 주행하는 것보다 다양한 속도로 주행하는 것이 좋습니다. RPM 3,000 이하를 유지하면서 자연스럽게 주행하세요.',
  },
  {
    q: 'PPF와 유리막 코팅 중 어떤 것이 좋나요?',
    a: 'PPF(페인트 보호 필름)는 물리적 스크래치 보호에 효과적이고, 유리막 코팅은 오염 방지와 광택 유지에 좋습니다. 예산이 충분하면 PPF + 유리막 코팅을 함께 시공하고, 하나만 선택한다면 PPF가 보호 효과가 더 큽니다.',
  },
  {
    q: '신차 첫 세차는 언제 하는 것이 좋나요?',
    a: '출고 후 1~2주 이내에 첫 세차를 하는 것이 좋습니다. 출고 과정에서 묻은 먼지나 이물질을 제거해야 도장면을 보호할 수 있습니다. 손세차를 이용하고, 자동세차기는 초기에 피하는 것이 좋습니다.',
  },
];

export default function NewCarChecklistPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '신차 출고 후 해야 할 것 체크리스트 - 2026년 필수 점검 항목',
          description: '신차 출고 후 반드시 해야 할 것들을 체크리스트로 정리했습니다.',
          url: `${BASE_URL}/guide/new-car-checklist`,
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
            { '@type': 'ListItem', position: 2, name: '신차 출고 후 체크리스트', item: `${BASE_URL}/guide/new-car-checklist` },
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
            <li className="text-gray-900 font-medium">신차 출고 후 체크리스트</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            신차 출고 후 해야 할 것 체크리스트
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            신차를 출고받으면 설레는 마음에 중요한 것들을 놓치기 쉽습니다.
            보험 가입부터 길들이기 운전, 정비 스케줄까지
            <strong> 출고 후 반드시 해야 할 것들</strong>을 시기별로 정리했습니다.
          </p>
        </section>

        {/* 출고 당일 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            출고 당일 체크리스트
          </h2>
          <p className="text-gray-500 text-sm mb-6">가장 중요한 필수 항목들입니다</p>
          <div className="space-y-4">
            {immediateChecklist.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                      {item.timing}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="inline-block mt-2 text-amber-600 text-sm font-semibold hover:text-amber-700"
                    >
                      {item.link.text}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 첫 1주일 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            첫 1주일 이내
          </h2>
          <p className="text-gray-500 text-sm mb-6">가능한 빨리 처리하면 좋은 항목들입니다</p>
          <div className="space-y-4">
            {firstWeekChecklist.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="text-2xl flex-shrink-0">{item.emoji}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 첫 1개월 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            첫 1개월 이내
          </h2>
          <p className="text-gray-500 text-sm mb-6">여유를 가지고 처리할 항목들입니다</p>
          <div className="space-y-4">
            {firstMonthChecklist.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-block mt-2 text-amber-600 text-sm font-semibold hover:text-amber-700"
                      >
                        {item.link.text}
                      </Link>
                    )}
                  </div>
                </div>
                {'tips' in item && item.tips && (
                  <div className="mt-4 ml-12 bg-amber-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-amber-800 mb-2">길들이기 핵심 포인트</p>
                    <ul className="space-y-1">
                      {item.tips.map((tip) => (
                        <li key={tip} className="text-sm text-amber-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 정비 스케줄 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            신차 정비 스케줄
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">주행거리</th>
                    <th className="px-4 py-3 text-left font-semibold">점검 항목</th>
                    <th className="px-4 py-3 text-left font-semibold">내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {maintenanceSchedule.map((row) => (
                    <tr key={row.km} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-amber-600">{row.km}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-gray-600">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 제조사 권장 주기 기준. 전기차는 엔진오일 교체가 불필요하며, 정비 항목이 다릅니다.
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
              신차 구매 비용을 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              취등록세, 할부 이자, 보험료 등 신차 구매에 필요한 총비용을 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/new-car-buying"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                신차 구매 가이드
              </Link>
              <Link
                href="/calculator/registration-tax"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                취등록세 계산하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
