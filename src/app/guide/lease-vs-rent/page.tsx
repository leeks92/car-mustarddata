import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 리스 vs 장기렌트 비교 - 2026년 어떤 게 유리할까?',
  description:
    '자동차 리스와 장기렌트의 차이점, 월 납입금, 세금 혜택, 장단점을 비교했습니다. 3,000만 원 차량 기준 5년 총비용 시뮬레이션으로 어떤 방식이 유리한지 확인하세요.',
  keywords: [
    '자동차 리스',
    '장기렌트',
    '리스 vs 렌트',
    '자동차 리스 장단점',
    '장기렌트 장단점',
    '리스 월납입금',
    '장기렌트 비용',
    '자동차 리스 세금',
  ],
  alternates: { canonical: `${BASE_URL}/guide/lease-vs-rent` },
  openGraph: {
    title: '자동차 리스 vs 장기렌트 비교 - 2026년 어떤 게 유리할까?',
    description: '리스와 장기렌트의 비용, 세금, 장단점을 비교했습니다.',
    url: `${BASE_URL}/guide/lease-vs-rent`,
    type: 'website',
  },
};

const comparisonItems = [
  { category: '소유권', lease: '리스 기간 중 리스사 소유, 만기 시 인수 가능', rent: '렌트사 소유, 만기 시 반납 또는 재계약' },
  { category: '번호판', lease: '일반 번호판 (소유자와 동일)', rent: '하·허·호 번호판 (렌트카 표시)' },
  { category: '보험', lease: '개인이 직접 가입·관리', rent: '렌트사가 보험 포함 (월 비용에 포함)' },
  { category: '정비', lease: '개인이 직접 관리', rent: '정비 포함 상품 선택 가능' },
  { category: '세금 혜택', lease: '사업자: 비용 처리 가능 (부가세 환급)', rent: '사업자: 전액 비용 처리 가능' },
  { category: '중도 해지', lease: '위약금 높음 (잔여 리스료의 30~50%)', rent: '위약금 상대적으로 낮음' },
  { category: '주행거리 제한', lease: '연 2~3만 km (초과 시 추가 비용)', rent: '연 2~3만 km (초과 시 추가 비용)' },
  { category: '만기 후 선택', lease: '인수, 반납, 재리스 중 선택', rent: '반납, 재계약, 인수(일부) 중 선택' },
];

const costSimulation = {
  carPrice: 3000,
  period: 5,
  lease: {
    deposit: 600,
    monthly: 42,
    residual: 900,
    totalPayment: 3120,
    insurance: 400,
    tax: 50,
    totalCost: 3570,
  },
  rent: {
    deposit: 300,
    monthly: 52,
    totalPayment: 3420,
    insurance: 0,
    tax: 0,
    totalCost: 3420,
  },
};

const leaseAdvantages = [
  { emoji: '🔢', text: '일반 번호판 사용 (렌트카 표시 없음)' },
  { emoji: '💰', text: '만기 시 차량 인수 가능 (잔존가치 유리 시)' },
  { emoji: '📊', text: '사업자 부가세 환급 가능' },
  { emoji: '🚗', text: '차량 선택의 폭이 넓음' },
];

const rentAdvantages = [
  { emoji: '🛡️', text: '보험·정비 포함으로 관리 편리' },
  { emoji: '💳', text: '초기 비용(보증금)이 상대적으로 낮음' },
  { emoji: '🔄', text: '중도 해지 위약금이 상대적으로 낮음' },
  { emoji: '📋', text: '사업자 전액 비용 처리 가능' },
];

const faqItems = [
  {
    q: '리스와 장기렌트 중 어떤 게 더 저렴한가요?',
    a: '단순 월 납입금은 리스가 저렴하지만, 보험료·정비비를 포함하면 총비용은 비슷합니다. 만기 시 차량을 인수할 계획이라면 리스가, 관리 편의성을 원하면 장기렌트가 유리합니다.',
  },
  {
    q: '개인도 리스를 이용할 수 있나요?',
    a: '네, 개인도 리스를 이용할 수 있습니다. 다만 사업자가 아닌 개인은 세금 혜택(부가세 환급, 비용 처리)을 받을 수 없으므로, 세금 혜택이 목적이라면 장기렌트가 더 유리할 수 있습니다.',
  },
  {
    q: '장기렌트 번호판이 신경 쓰이는데, 일반 번호판으로 바꿀 수 있나요?',
    a: '장기렌트는 렌트사 소유이므로 하·허·호 번호판을 사용해야 합니다. 일반 번호판을 원한다면 리스를 선택하거나, 만기 후 차량을 인수하여 명의이전하면 일반 번호판으로 변경할 수 있습니다.',
  },
  {
    q: '리스·장기렌트 계약 시 신용등급에 영향이 있나요?',
    a: '리스는 금융 상품이므로 신용조회가 이루어지고, 부채로 잡힐 수 있습니다. 장기렌트는 임대 계약이므로 신용등급에 영향이 상대적으로 적습니다. 다만 연체 시에는 모두 신용에 부정적 영향을 줍니다.',
  },
];

export default function LeaseVsRentPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차 리스 vs 장기렌트 비교 - 2026년 어떤 게 유리할까?',
          description: '리스와 장기렌트의 비용, 세금, 장단점을 비교했습니다.',
          url: `${BASE_URL}/guide/lease-vs-rent`,
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
              name: '리스 vs 장기렌트 비교',
              item: `${BASE_URL}/guide/lease-vs-rent`,
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
            <li className="text-gray-900 font-medium">리스 vs 장기렌트 비교</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자동차 리스 vs 장기렌트 비교
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            차량을 구매하지 않고 이용하는 대표적인 방법인 리스와 장기렌트.
            소유권, 비용 구조, 세금 혜택, 관리 편의성 등 핵심 차이점을 비교하고
            어떤 방식이 나에게 유리한지 확인해보세요.
          </p>
        </section>

        {/* 핵심 비교표 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            리스 vs 장기렌트 핵심 비교
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-left font-semibold">리스</th>
                    <th className="px-4 py-3 text-left font-semibold">장기렌트</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonItems.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.category}</td>
                      <td className="px-4 py-3 text-gray-700">{row.lease}</td>
                      <td className="px-4 py-3 text-gray-700">{row.rent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 비용 시뮬레이션 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5년 총비용 시뮬레이션 (3,000만 원 차량)
          </h2>
          <p className="text-gray-600 mb-4">
            차량 가격 {costSimulation.carPrice.toLocaleString()}만 원, 계약 기간 {costSimulation.period}년 기준 예상 비용입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 리스 */}
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span> 리스
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">보증금 (20%)</span>
                  <span className="font-medium">{costSimulation.lease.deposit}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">월 리스료</span>
                  <span className="font-medium">{costSimulation.lease.monthly}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">5년 리스료 합계</span>
                  <span className="font-medium">{(costSimulation.lease.monthly * 60).toLocaleString()}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">잔존가치 (인수 시)</span>
                  <span className="font-medium">{costSimulation.lease.residual}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">보험료 (5년)</span>
                  <span className="font-medium">약 {costSimulation.lease.insurance}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">자동차세 (5년)</span>
                  <span className="font-medium">약 {costSimulation.lease.tax}만 원</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-base">
                  <span className="font-bold text-gray-900">5년 총비용 (인수 시)</span>
                  <span className="font-bold text-amber-600">약 {costSimulation.lease.totalCost.toLocaleString()}만 원</span>
                </div>
              </div>
            </div>

            {/* 장기렌트 */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚙</span> 장기렌트
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">보증금 (10%)</span>
                  <span className="font-medium">{costSimulation.rent.deposit}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">월 렌트료 (보험 포함)</span>
                  <span className="font-medium">{costSimulation.rent.monthly}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">5년 렌트료 합계</span>
                  <span className="font-medium">{(costSimulation.rent.monthly * 60).toLocaleString()}만 원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">보험료</span>
                  <span className="font-medium text-green-600">월 렌트료에 포함</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">자동차세</span>
                  <span className="font-medium text-green-600">월 렌트료에 포함</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>잔존가치</span>
                  <span>반납 (소유권 없음)</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-base">
                  <span className="font-bold text-gray-900">5년 총비용 (반납 시)</span>
                  <span className="font-bold text-blue-600">약 {costSimulation.rent.totalCost.toLocaleString()}만 원</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 실제 비용은 리스사·렌트사, 차종, 신용등급, 계약 조건에 따라 달라집니다.
            위 금액은 일반적인 조건 기준 예시입니다.
          </p>
        </section>

        {/* 장단점 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            각각의 장점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">리스의 장점</h3>
              <ul className="space-y-3">
                {leaseAdvantages.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.emoji}</span>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">장기렌트의 장점</h3>
              <ul className="space-y-3">
                {rentAdvantages.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.emoji}</span>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 추천 대상 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            이런 분에게 추천
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">리스가 유리한 경우</h3>
              <ul className="space-y-2 text-sm text-amber-900">
                <li>• 만기 후 차량 인수를 계획하는 경우</li>
                <li>• 일반 번호판을 사용하고 싶은 경우</li>
                <li>• 사업자로서 부가세 환급이 필요한 경우</li>
                <li>• 차량 관리를 직접 하는 것이 괜찮은 경우</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">장기렌트가 유리한 경우</h3>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>• 보험·정비 등 관리를 맡기고 싶은 경우</li>
                <li>• 초기 비용을 최소화하고 싶은 경우</li>
                <li>• 2~3년마다 새 차로 바꾸고 싶은 경우</li>
                <li>• 사업 경비로 전액 처리하고 싶은 경우</li>
              </ul>
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
              할부 구매와도 비교해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              현금·할부·리스 3가지 방식의 총비용을 자세히 비교할 수 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/cash-vs-loan-vs-lease"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                현금 vs 할부 vs 리스 비교
              </Link>
              <Link
                href="/calculator/installment"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                할부금 계산하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
