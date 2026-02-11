import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '전기차 충전 비용 계산 - 2026년 충전 요금 비교 총정리',
  description:
    '전기차 충전 비용을 충전 방식별(가정용, 공용 완속, 급속)로 비교했습니다. kWh당 요금, 월간 충전비, 내연기관 대비 절약 금액을 확인하세요.',
  keywords: [
    '전기차 충전 비용',
    '전기차 충전 요금',
    '전기차 충전비 계산',
    '전기차 전기요금',
    '전기차 급속충전 비용',
    '전기차 완속충전 비용',
    '전기차 유지비',
    '전기차 vs 내연기관 비용',
  ],
  alternates: { canonical: `${BASE_URL}/calculator/ev-charging-cost` },
  openGraph: {
    title: '전기차 충전 비용 계산 - 2026년 충전 요금 비교 총정리',
    description: '전기차 충전 비용을 방식별로 비교하고 내연기관 대비 절약 금액을 확인하세요.',
    url: `${BASE_URL}/calculator/ev-charging-cost`,
    type: 'website',
  },
};

const chargingMethods = [
  {
    emoji: '🏠',
    title: '가정용 충전 (완속)',
    pricePerKwh: '약 120~180원',
    speed: '7~11kW',
    fullChargeTime: '약 6~10시간',
    monthlyCost: '약 2~3만 원',
    desc: '자택에 충전기를 설치하여 심야 전기 요금(경부하)으로 충전합니다. 가장 저렴한 충전 방법입니다.',
  },
  {
    emoji: '🔌',
    title: '공용 완속 충전',
    pricePerKwh: '약 250~350원',
    speed: '7~11kW',
    fullChargeTime: '약 6~10시간',
    monthlyCost: '약 4~6만 원',
    desc: '아파트 주차장, 공영주차장 등에 설치된 공용 완속 충전기를 이용합니다. 환경부 충전기 기준 요금입니다.',
  },
  {
    emoji: '⚡',
    title: '급속 충전',
    pricePerKwh: '약 300~500원',
    speed: '50~350kW',
    fullChargeTime: '약 20~60분 (80%)',
    monthlyCost: '약 5~9만 원',
    desc: '고속도로 휴게소, 마트 등에 설치된 급속 충전기입니다. 빠르지만 요금이 가장 높습니다.',
  },
];

const evModels = [
  { model: '아이오닉 5', battery: 72.6, efficiency: 5.1, homeCharge: '약 1.4만 원', publicCharge: '약 2.8만 원', fastCharge: '약 4.3만 원' },
  { model: '아이오닉 6', battery: 77.4, efficiency: 5.8, homeCharge: '약 1.3만 원', publicCharge: '약 2.5만 원', fastCharge: '약 3.8만 원' },
  { model: 'EV6', battery: 77.4, efficiency: 5.0, homeCharge: '약 1.5만 원', publicCharge: '약 3.0만 원', fastCharge: '약 4.5만 원' },
  { model: 'EV9', battery: 99.8, efficiency: 3.8, homeCharge: '약 2.0만 원', publicCharge: '약 4.0만 원', fastCharge: '약 6.0만 원' },
  { model: '테슬라 모델 3', battery: 60, efficiency: 5.8, homeCharge: '약 1.0만 원', publicCharge: '약 2.0만 원', fastCharge: '약 3.0만 원' },
  { model: '테슬라 모델 Y', battery: 75, efficiency: 5.2, homeCharge: '약 1.4만 원', publicCharge: '약 2.8만 원', fastCharge: '약 4.2만 원' },
];

const vsICE = [
  { item: '월 1,000km 기준 연료비', ev: '약 2~4만 원', ice: '약 12~18만 원' },
  { item: '연간 연료비', ev: '약 24~48만 원', ice: '약 144~216만 원' },
  { item: '연간 절약 금액', ev: '', ice: '' , highlight: '약 100~170만 원 절약' },
  { item: '자동차세 (연간)', ev: '약 13만 원 (정액)', ice: '약 20~50만 원 (배기량 비례)' },
  { item: '정비비 (연간)', ev: '약 20~30만 원', ice: '약 50~100만 원' },
];

const savingTips = [
  { title: '심야 시간대 가정 충전 활용', desc: '심야 전기 요금(23시~09시)은 경부하 요금이 적용되어 kWh당 약 80~100원으로 충전할 수 있습니다. 가정용 충전기 설치가 가장 경제적입니다.' },
  { title: '환경부 회원카드 발급', desc: '환경부 충전 인프라 회원카드를 발급받으면 공용 충전기를 할인된 요금으로 이용할 수 있습니다.' },
  { title: '충전 사업자별 요금 비교', desc: '한전, 환경부, 차지비, 에버온 등 충전 사업자마다 요금이 다릅니다. 자주 이용하는 충전소의 사업자를 확인하고 가장 저렴한 곳을 이용하세요.' },
  { title: '80% 충전 습관', desc: '배터리를 100%까지 충전하면 충전 속도가 느려지고 배터리 수명에도 영향을 줍니다. 80%까지만 충전하면 시간과 비용을 절약할 수 있습니다.' },
  { title: '에코 모드 활용', desc: '에코 모드를 사용하면 전비(km/kWh)가 10~20% 개선되어 같은 충전량으로 더 멀리 주행할 수 있습니다.' },
];

const faqItems = [
  {
    q: '전기차 충전 비용은 한 달에 얼마나 드나요?',
    a: '월 1,000km 주행 기준, 가정용 충전 시 약 2~3만 원, 공용 완속 충전 시 약 4~6만 원, 급속 충전 시 약 5~9만 원입니다. 동일 주행거리의 내연기관 차량(약 12~18만 원) 대비 50~80% 저렴합니다.',
  },
  {
    q: '가정용 충전기 설치 비용은 얼마인가요?',
    a: '가정용 완속 충전기(7kW)는 설치비 포함 약 100~200만 원입니다. 정부 보조금(최대 80만 원)을 받으면 실제 부담은 약 20~120만 원입니다. 아파트의 경우 관리사무소 승인이 필요합니다.',
  },
  {
    q: '급속 충전을 자주 하면 배터리에 안 좋은가요?',
    a: '급속 충전은 배터리에 열을 발생시켜 장기적으로 배터리 수명에 영향을 줄 수 있습니다. 가능하면 완속 충전을 주로 사용하고, 급속 충전은 장거리 이동 시에만 사용하는 것이 좋습니다.',
  },
  {
    q: '전기차 충전 요금은 앞으로 오를 수 있나요?',
    a: '전기차 충전 특례 요금(할인 요금)은 정부 정책에 따라 변동될 수 있습니다. 2026년 현재 특례 요금이 적용 중이나, 전기차 보급 확대에 따라 점진적으로 인상될 가능성이 있습니다.',
  },
];

export default function EvChargingCostPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '전기차 충전 비용 계산 - 2026년 충전 요금 비교 총정리',
          description: '전기차 충전 비용을 방식별로 비교하고 내연기관 대비 절약 금액을 확인하세요.',
          url: `${BASE_URL}/calculator/ev-charging-cost`,
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
            { '@type': 'ListItem', position: 2, name: '전기차 충전 비용', item: `${BASE_URL}/calculator/ev-charging-cost` },
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
            <li className="text-gray-900 font-medium">전기차 충전 비용</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            전기차 충전 비용 계산
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            전기차 충전 비용은 충전 방식에 따라 <strong>2~5배</strong> 차이가 납니다.
            가정용 충전, 공용 완속, 급속 충전의 요금을 비교하고
            내연기관 대비 얼마나 절약할 수 있는지 확인하세요.
          </p>
        </section>

        {/* 충전 방식별 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            충전 방식별 요금 비교
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {chargingMethods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{method.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-3">{method.title}</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">kWh당 요금</span>
                    <span className="font-semibold text-amber-600">{method.pricePerKwh}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">충전 속도</span>
                    <span className="font-medium">{method.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">완충 시간</span>
                    <span className="font-medium">{method.fullChargeTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">월 예상 비용</span>
                    <span className="font-semibold text-amber-600">{method.monthlyCost}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 월 1,000km 주행, 전비 5km/kWh 기준. 실제 요금은 충전 사업자·시간대·지역에 따라 달라집니다.
          </p>
        </section>

        {/* 차종별 충전 비용 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            차종별 월간 충전 비용 (월 1,000km 기준)
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">배터리</th>
                    <th className="px-4 py-3 text-right font-semibold">전비</th>
                    <th className="px-4 py-3 text-right font-semibold">가정 충전</th>
                    <th className="px-4 py-3 text-right font-semibold">공용 완속</th>
                    <th className="px-4 py-3 text-right font-semibold">급속</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {evModels.map((car) => (
                    <tr key={car.model} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{car.model}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{car.battery}kWh</td>
                      <td className="px-4 py-3 text-right text-gray-700">{car.efficiency}km/kWh</td>
                      <td className="px-4 py-3 text-right text-green-600 font-medium">{car.homeCharge}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{car.publicCharge}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-medium">{car.fastCharge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 가정 충전 150원/kWh, 공용 완속 300원/kWh, 급속 450원/kWh 기준 계산
          </p>
        </section>

        {/* 내연기관 대비 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            전기차 vs 내연기관 비용 비교
          </h2>
          <p className="text-gray-600 mb-4">
            중형차 기준, 월 1,000km 주행 시 전기차와 내연기관의 비용을 비교했습니다.
            내연기관은 휘발유 1,600원/L, 연비 12km/L 기준입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-right font-semibold">전기차</th>
                    <th className="px-4 py-3 text-right font-semibold">내연기관</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vsICE.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      {row.highlight ? (
                        <td colSpan={2} className="px-4 py-3 text-center font-bold text-green-600 text-base">
                          {row.highlight}
                        </td>
                      ) : (
                        <>
                          <td className="px-4 py-3 text-right text-green-600 font-medium">{row.ev}</td>
                          <td className="px-4 py-3 text-right text-gray-700">{row.ice}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 절약 팁 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            충전 비용 절약 팁
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
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
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
              내 근처 전기차 충전소를 찾아보세요
            </h2>
            <p className="text-amber-100 mb-6">
              전국 전기차 충전소 위치, 요금, 운영시간 정보를 확인할 수 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/ev-charger"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                충전소 찾기
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
