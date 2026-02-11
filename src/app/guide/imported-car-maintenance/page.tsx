import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '수입차 유지비 현실 가이드 - 2026년 브랜드별 월간 유지비·정비비·순위 총정리',
  description:
    '수입차 유지비의 현실을 국산차와 비교합니다. 벤츠·BMW·아우디·렉서스·포르쉐 월간 유지비, 브랜드별 정비비 비교, 유지비 순위(저렴→비쌈), 절약 팁 6가지까지 2026년 최신 정보를 확인하세요.',
  keywords: [
    '수입차 유지비',
    '수입차 유지비 현실',
    '수입차 정비비',
    '수입차 유지비 비교',
    '벤츠 유지비',
    'BMW 유지비',
    '수입차 유지비 순위',
    '수입차 유지비 절약',
  ],
  alternates: { canonical: `${BASE_URL}/guide/imported-car-maintenance` },
  openGraph: {
    title: '수입차 유지비 현실 가이드 - 2026년 브랜드별 월간 유지비·정비비·순위 총정리',
    description:
      '수입차 유지비를 국산차와 비교하고 브랜드별 순위와 절약 방법을 정리했습니다.',
    url: `${BASE_URL}/guide/imported-car-maintenance`,
    type: 'website',
  },
};

const monthlyCostComparison = [
  {
    model: '국산 중형 (쏘나타)',
    tax: '3.7만',
    insurance: '8.3만',
    fuel: '15만',
    maintenance: '5만',
    tire: '2만',
    etc: '3만',
    total: '약 37만',
    highlight: false,
  },
  {
    model: '수입 세단 (벤츠 E)',
    tax: '3.7만',
    insurance: '20.8만',
    fuel: '17만',
    maintenance: '12만',
    tire: '4만',
    etc: '5만',
    total: '약 62만',
    highlight: true,
  },
  {
    model: '수입 SUV (BMW X5)',
    tax: '7.2만',
    insurance: '24만',
    fuel: '20만',
    maintenance: '15만',
    tire: '5만',
    etc: '5만',
    total: '약 76만',
    highlight: true,
  },
  {
    model: '일본 수입 (렉서스 ES)',
    tax: '4.6만',
    insurance: '15만',
    fuel: '11만',
    maintenance: '7만',
    tire: '3만',
    etc: '4만',
    total: '약 45만',
    highlight: false,
  },
  {
    model: '포르쉐 카이엔',
    tax: '7.2만',
    insurance: '30만',
    fuel: '23만',
    maintenance: '20만',
    tire: '8만',
    etc: '8만',
    total: '약 96만',
    highlight: true,
  },
];

const maintenanceCostByBrand = [
  {
    item: '엔진오일 교체',
    domestic: '5~8만',
    german: '15~25만',
    japanese: '10~15만',
  },
  {
    item: '브레이크 패드',
    domestic: '10~15만',
    german: '30~50만',
    japanese: '20~30만',
  },
  {
    item: '타이밍벨트/체인',
    domestic: '20~30만',
    german: '50~100만',
    japanese: '30~50만',
  },
  {
    item: '에어컨 필터',
    domestic: '2~3만',
    german: '5~10만',
    japanese: '3~5만',
  },
];

const maintenanceRanking = [
  { rank: 1, model: '토요타 캠리', monthly: '월 40만', level: 'low' },
  { rank: 2, model: '렉서스 ES', monthly: '월 45만~52만', level: 'low' },
  { rank: 3, model: '미니 쿠퍼', monthly: '월 50만', level: 'mid' },
  { rank: 4, model: '폭스바겐 티구안', monthly: '월 55만', level: 'mid' },
  { rank: 5, model: '렉서스 RX', monthly: '월 58만', level: 'mid' },
  { rank: 6, model: '아우디 A4', monthly: '월 60만', level: 'mid' },
  { rank: 7, model: 'BMW 3시리즈', monthly: '월 62만', level: 'mid' },
  { rank: 8, model: '벤츠 C클래스', monthly: '월 65만', level: 'mid' },
  { rank: 9, model: '볼보 XC60', monthly: '월 68만', level: 'mid' },
  { rank: 10, model: 'BMW X3', monthly: '월 70만', level: 'high' },
  { rank: 11, model: '아우디 A6', monthly: '월 70만', level: 'high' },
  { rank: 12, model: '벤츠 GLC', monthly: '월 72만', level: 'high' },
  { rank: 13, model: 'BMW 5시리즈', monthly: '월 72만', level: 'high' },
  { rank: 14, model: '벤츠 E클래스', monthly: '월 75만', level: 'high' },
  { rank: 15, model: '벤츠 GLE', monthly: '월 90만', level: 'very-high' },
  { rank: 16, model: 'BMW X5', monthly: '월 92만', level: 'very-high' },
  { rank: 17, model: '포르쉐 카이엔', monthly: '월 120만', level: 'very-high' },
];

const savingTips = [
  {
    title: '보증 기간 내 무상 정비 최대한 활용',
    desc: '수입차 브랜드 대부분은 3~5년 무상 보증을 제공합니다. 보증 기간 중에는 공식 서비스센터에서 정기 점검과 소모품 교체를 무상으로 받을 수 있으므로 빠짐없이 챙기세요. 특히 엔진오일, 브레이크 패드, 와이퍼 등은 보증 범위에 포함되는 경우가 많습니다.',
  },
  {
    title: '보증 만료 후 수입차 전문 사설정비소 이용',
    desc: '보증이 끝나면 공식 서비스센터 대신 수입차 전문 사설정비소를 이용하면 정비비를 30~50% 절약할 수 있습니다. 네이버·카카오맵 리뷰와 수입차 커뮤니티에서 정비소 평판을 확인하고, 실제 방문 후 견적을 비교해보세요.',
  },
  {
    title: 'OEM(호환) 부품으로 부품비 40~60% 절감',
    desc: '정품 부품 대신 OEM(순정 동등품) 부품을 사용하면 부품비를 크게 줄일 수 있습니다. 브레이크 패드, 에어 필터, 오일 필터 등 소모품은 OEM 부품으로도 충분한 성능을 발휘합니다. 다만 엔진·변속기 등 핵심 부품은 정품을 권장합니다.',
  },
  {
    title: '다이렉트 보험으로 보험료 10~20% 절약',
    desc: '수입차는 보험료가 국산차의 2배 이상이므로 다이렉트 보험의 절약 효과가 큽니다. 삼성화재·KB·현대해상 다이렉트를 비교하면 연간 20~50만 원을 절약할 수 있습니다. 마일리지 특약을 추가하면 최대 30%까지 추가 할인도 가능합니다.',
    link: { href: '/guide/imported-car-insurance', text: '수입차 보험 가이드 보기 →' },
  },
  {
    title: '소모품 교체 주기를 정확히 지키기',
    desc: '수입차는 정비를 미루면 수리비가 기하급수적으로 올라갑니다. 엔진오일(1만 km), 브레이크 패드(3만 km), 타이어(4만 km) 등 교체 주기를 정확히 지키면 큰 고장을 예방하고 장기적으로 유지비를 크게 절약할 수 있습니다.',
  },
  {
    title: '유류비 계산기로 연료비 미리 시뮬레이션',
    desc: '수입차는 대부분 고급 휘발유나 경유를 사용하므로 연료비도 무시할 수 없습니다. car.mustarddata.com 유류비 계산기로 월간 연료비를 미리 계산해보면 실제 유지비를 정확하게 예측할 수 있습니다.',
    link: { href: '/calculator/fuel-cost', text: '유류비 계산하기 →' },
  },
];

const faqItems = [
  {
    q: '수입차 유지비가 국산차보다 실제로 얼마나 비싼가요?',
    a: '수입차 유지비는 국산차 대비 평균 50~100% 더 비쌉니다. 국산 중형(쏘나타) 기준 월 약 37만 원인 반면, 수입 세단(벤츠 E클래스)은 월 약 62만 원으로 약 68% 차이가 납니다. 특히 보험료와 정비비 차이가 가장 크며, 고급 모델일수록 격차가 더 벌어집니다.',
  },
  {
    q: '수입차 중 유지비가 가장 저렴한 브랜드는 어디인가요?',
    a: '토요타 캠리가 월 약 40만 원으로 수입차 중 유지비가 가장 저렴합니다. 렉서스 ES도 월 45만~52만 원 수준으로 합리적입니다. 일본 브랜드가 독일 브랜드보다 정비비가 낮고 내구성이 높아 유지비 부담이 적습니다.',
  },
  {
    q: '독일차(벤츠·BMW·아우디) 정비비가 왜 그렇게 비싼가요?',
    a: '독일차 정비비가 비싼 이유는 크게 3가지입니다. 첫째, 부품을 해외에서 수입해야 하므로 부품비 자체가 2~3배 비쌉니다. 둘째, 공식 서비스센터의 시간당 공임비가 국산 정비소의 2배 이상입니다. 셋째, 전자 장비와 특수 장비가 필요한 정비 항목이 많아 일반 정비소에서 수리가 어려운 경우가 있습니다.',
  },
  {
    q: '수입차 사설정비소에서 정비받아도 괜찮나요?',
    a: '보증 기간이 끝난 차량이라면 수입차 전문 사설정비소를 적극 추천합니다. 공식 서비스센터 대비 30~50% 저렴하면서도 양질의 서비스를 받을 수 있습니다. 다만 보증 기간 중에는 공식 서비스센터를 이용해야 무상 보증이 유지됩니다. 사설정비소 선택 시 수입차 전문 여부, 리뷰, 기술자 경력을 반드시 확인하세요.',
  },
  {
    q: '수입차 보험료가 국산차보다 왜 비싼가요?',
    a: '수입차 보험료가 비싼 주된 이유는 사고 시 수리비가 높기 때문입니다. 수입차 부품은 국산 대비 2~5배 비싸고, 공임비도 2~3배 높습니다. 또한 사고 이력 시 중고 시세 하락 폭이 크고, 수리 기간이 길어 대차 비용도 추가됩니다. 이 모든 요소가 보험료에 반영되어 국산차 대비 1.5~3배 높은 보험료가 책정됩니다.',
  },
  {
    q: '수입차 유지비를 가장 효과적으로 줄이는 방법은?',
    a: '가장 효과적인 방법은 3가지입니다. 첫째, 보증 만료 후 수입차 전문 사설정비소를 이용하면 정비비를 30~50% 절약할 수 있습니다. 둘째, 다이렉트 보험과 마일리지 특약을 활용하면 보험료를 연간 30~60만 원 줄일 수 있습니다. 셋째, 소모품 교체 주기를 정확히 지켜 큰 고장을 예방하면 장기적으로 수백만 원의 수리비를 아낄 수 있습니다.',
  },
  {
    q: '포르쉐 같은 고급 수입차 유지비는 얼마나 드나요?',
    a: '포르쉐 카이엔 기준 월 약 96만~120만 원의 유지비가 소요됩니다. 자동차세 7.2만, 보험료 30만, 유류비 23만, 정비비 20만, 타이어 8만, 기타 8만 원 수준입니다. 연간으로 환산하면 약 1,150만~1,440만 원으로, 국산 중형차 3대 분의 유지비에 해당합니다.',
  },
];

export default function ImportedCarMaintenancePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '수입차 유지비 현실 가이드 - 2026년 브랜드별 월간 유지비·정비비·순위 총정리',
          description:
            '수입차 유지비를 국산차와 비교하고 브랜드별 순위와 절약 방법을 안내합니다.',
          url: `${BASE_URL}/guide/imported-car-maintenance`,
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
              name: '수입차 유지비 현실 가이드',
              item: `${BASE_URL}/guide/imported-car-maintenance`,
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
            <li className="text-gray-900 font-medium">수입차 유지비 현실 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            수입차 유지비 현실 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            수입차는 구매 가격만큼이나 <strong>유지비도 현실적으로 고려</strong>해야 합니다.
            국산차 대비 월간 유지비, 브랜드별 정비비 차이, 17개 인기 모델의 유지비 순위,
            그리고 유지비를 줄이는 현실적인 방법까지 <strong>2026년 최신 기준</strong>으로 총정리했습니다.
          </p>
        </section>

        {/* 수입차 vs 국산차 월간 유지비 비교 대형 테이블 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            수입차 vs 국산차 월간 유지비 비교
          </h2>
          <p className="text-gray-600 mb-6">
            국산 중형부터 포르쉐까지, 차종별 월간 유지비를 항목별로 비교했습니다.
            보험료는 30대 무사고 기준, 유류비는 월 1,200km 주행 기준입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">자동차세</th>
                    <th className="px-4 py-3 text-right font-semibold">보험료</th>
                    <th className="px-4 py-3 text-right font-semibold">유류비</th>
                    <th className="px-4 py-3 text-right font-semibold">정비비</th>
                    <th className="px-4 py-3 text-right font-semibold">타이어</th>
                    <th className="px-4 py-3 text-right font-semibold">기타</th>
                    <th className="px-4 py-3 text-right font-semibold">합계</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {monthlyCostComparison.map((row) => (
                    <tr
                      key={row.model}
                      className={row.highlight ? 'bg-amber-50/50 hover:bg-amber-50' : 'hover:bg-gray-50'}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.model}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.tax}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.insurance}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.fuel}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.maintenance}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.tire}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.etc}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-bold whitespace-nowrap">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 자동차세는 월 환산 금액, 보험료는 30대 무사고 기준 월 환산, 유류비는 월 1,200km 주행 기준.
            실제 비용은 운전 습관, 지역, 차량 연식에 따라 달라질 수 있습니다.
          </p>
        </section>

        {/* 브랜드별 정비비 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            브랜드별 정비비 비교
          </h2>
          <p className="text-gray-600 mb-6">
            같은 정비 항목이라도 브랜드에 따라 비용 차이가 큽니다.
            독일 3사(벤츠·BMW·아우디), 일본(렉서스·토요타), 국산차의 정비비를 비교했습니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">정비 항목</th>
                    <th className="px-4 py-3 text-right font-semibold">국산차</th>
                    <th className="px-4 py-3 text-right font-semibold">독일 3사</th>
                    <th className="px-4 py-3 text-right font-semibold">일본 수입</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {maintenanceCostByBrand.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-right text-gray-900">{row.domestic}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.german}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.japanese}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 공식 서비스센터 기준이며, 사설정비소 이용 시 독일 3사 비용이 30~50% 절감될 수 있습니다.
          </p>
        </section>

        {/* 수입차 브랜드별 유지비 순위 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            수입차 브랜드별 유지비 순위
          </h2>
          <p className="text-gray-600 mb-6">
            인기 수입차 17개 모델의 월간 유지비를 저렴한 순서대로 정리했습니다.
            보험료, 유류비, 정비비, 자동차세, 소모품비를 모두 포함한 금액입니다.
          </p>
          <div className="space-y-3">
            {maintenanceRanking.map((item) => {
              const levelColor =
                item.level === 'low'
                  ? 'bg-green-100 text-green-700'
                  : item.level === 'mid'
                    ? 'bg-amber-100 text-amber-700'
                    : item.level === 'high'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-red-100 text-red-700';
              const levelText =
                item.level === 'low'
                  ? '합리적'
                  : item.level === 'mid'
                    ? '보통'
                    : item.level === 'high'
                      ? '높음'
                      : '매우 높음';
              return (
                <div
                  key={item.rank}
                  className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-gray-900">{item.model}</h3>
                      <span className={`text-sm ${levelColor} px-2 py-0.5 rounded-full font-medium`}>
                        {levelText}
                      </span>
                    </div>
                    <p className="text-amber-600 font-semibold">{item.monthly}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 30대 무사고 기준, 월 1,200km 주행, 보증 만료 후 공식 서비스센터 이용 기준 예상 금액입니다.
          </p>
        </section>

        {/* 유지비 절약 팁 6가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            수입차 유지비 절약 팁 6가지
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
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                  {tip.link && (
                    <Link
                      href={tip.link.href}
                      className="inline-block mt-3 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                    >
                      {tip.link.text}
                    </Link>
                  )}
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
              수입차 유지비를 직접 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              유류비, 보험료, 자동차세까지 한 번에 계산하고 합리적인 수입차 생활을 시작하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/fuel-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                유류비 계산하기
              </Link>
              <Link
                href="/guide/imported-car-buying"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                수입차 구매 가이드
              </Link>
              <Link
                href="/guide/imported-car-insurance"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                수입차 보험 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
