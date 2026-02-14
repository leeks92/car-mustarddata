import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '현금 vs 할부 vs 리스 - 2026년 자동차 구매 방식 비교',
  description:
    '자동차 구매 시 현금 일시불, 할부, 리스의 장단점을 비교했습니다. 초기 비용, 월 부담, 총 비용, 세금 혜택까지 3,000만 원 차량 기준으로 상세 분석합니다.',
  keywords: [
    '현금 할부 리스 비교',
    '자동차 구매 방식',
    '현금 일시불 vs 할부',
    '자동차 리스',
    '할부 이자 계산',
    '자동차 구매 방법',
  ],
  alternates: { canonical: `${BASE_URL}/guide/cash-vs-loan-vs-lease` },
  openGraph: {
    title: '현금 vs 할부 vs 리스 - 2026년 자동차 구매 방식 비교',
    description: '현금 일시불, 할부, 리스의 장단점과 총 비용을 비교하여 나에게 맞는 구매 방식을 찾아보세요.',
    url: `${BASE_URL}/guide/cash-vs-loan-vs-lease`,
  },
};

const comparisonTable = [
  {
    item: '초기 비용',
    cash: '3,000만 원 (전액)',
    loan: '약 300~500만 원 (10~20%)',
    lease: '약 0~200만 원 (최소)',
  },
  {
    item: '월 부담',
    cash: '0원',
    loan: '약 50~60만 원 (60개월 기준)',
    lease: '약 60~70만 원 (60개월 기준)',
  },
  {
    item: '소유권',
    cash: '즉시 소유',
    loan: '대출 완납 시 소유 (저당 설정)',
    lease: '소유권 없음 (사용권만)',
  },
  {
    item: '세금 혜택',
    cash: '취등록세 감면 (전기차·하이브리드)',
    loan: '취등록세 감면 (전기차·하이브리드)',
    lease: '사업자 한정: 비용 처리 가능',
  },
  {
    item: '보험',
    cash: '별도 가입 필요',
    loan: '별도 가입 필요',
    lease: '월 비용에 포함 가능',
  },
  {
    item: '차량 변경 주기',
    cash: '자유롭게 변경 가능',
    loan: '대출 완납 후 변경 가능',
    lease: '계약 만료 시 변경 용이',
  },
  {
    item: '추천 대상',
    cash: '여유자금 충분한 구매자',
    loan: '월 부담을 줄이고 소유를 원하는 구매자',
    lease: '사업자 또는 차량을 자주 바꾸는 구매자',
  },
];

const costSimulation = [
  {
    method: '현금 일시불',
    initial: '3,000만 원',
    monthly: '0원',
    total: '약 3,210만 원',
    breakdown: '차량 가격 3,000만 원 + 취등록세 210만 원',
    note: '이자 비용 없음',
  },
  {
    method: '할부 (60개월, 연 6%)',
    initial: '약 500만 원',
    monthly: '약 58만 원',
    total: '약 3,690만 원',
    breakdown: '차량 가격 3,000만 원 + 취등록세 210만 원 + 이자 약 480만 원',
    note: '월 납입금에 원리금 포함',
  },
  {
    method: '리스 (60개월)',
    initial: '약 0~200만 원',
    monthly: '약 63만 원',
    total: '약 3,800만 원',
    breakdown: '리스료 + 보험료 + 세금 포함',
    note: '보험·세금이 월 비용에 포함되어 있음',
  },
];

const scenarios = [
  {
    title: '여유자금이 충분한 경우',
    recommendation: '현금 일시불',
    description:
      '현금으로 구매하면 이자 비용이 없어 가장 경제적입니다. 유동성 감소는 있지만, 장기적으로 총 비용이 가장 적습니다.',
    pros: ['이자 비용 0원', '총 비용 최소', '즉시 소유권 획득'],
    cons: ['초기 자금 부담 큼', '유동성 감소'],
  },
  {
    title: '월 부담을 줄이고 소유를 원하는 경우',
    recommendation: '할부',
    description:
      '초기 부담을 줄이면서도 대출 완납 후 차량을 소유할 수 있습니다. 금리는 연 4~8% 수준이며, 제조사 프로모션을 통해 저금리 혜택을 받을 수 있습니다.',
    pros: ['초기 부담 적음', '대출 완납 시 소유권', '금리 협상 가능'],
    cons: ['이자 비용 발생', '저당 설정 필요'],
  },
  {
    title: '사업자이거나 차량을 자주 바꾸는 경우',
    recommendation: '리스',
    description:
      '사업자의 경우 리스 비용을 비용 처리할 수 있어 세금 혜택이 있습니다. 계약 만료 시 차량을 반납하고 새 차량으로 교체하기 용이합니다.',
    pros: ['초기 부담 최소', '사업자 세금 혜택', '차량 교체 용이', '보험·세금 포함 가능'],
    cons: ['소유권 없음', '총 비용이 상대적으로 높음'],
  },
];

export default function CashVsLoanVsLeasePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '현금 vs 할부 vs 리스 - 2026년 자동차 구매 방식 비교',
          description:
            '현금 일시불, 할부, 리스의 장단점과 총 비용을 비교하여 나에게 맞는 구매 방식을 찾아보세요.',
          url: `${BASE_URL}/guide/cash-vs-loan-vs-lease`,
          publisher: { '@type': 'Organization', name: 'MustardData' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '현금 vs 할부 vs 리스', item: `${BASE_URL}/guide/cash-vs-loan-vs-lease` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">
            홈
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">구매 방식 비교</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          현금 vs 할부 vs 리스
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          2026년 기준, 자동차를 구매할 때 선택할 수 있는 세 가지 방식의 장단점과 총 비용을 비교했습니다.
          3,000만 원 차량을 기준으로 각 방식의 특징을 분석합니다.
        </p>

        {/* 비교 테이블 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3가지 구매 방식 비교
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">항목</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">현금 일시불</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">할부</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">리스</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={row.item} className="border-t border-gray-100">
                    <td className="px-6 py-3 text-sm font-semibold text-gray-900">{row.item}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{row.cash}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{row.loan}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{row.lease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 각 방식 상세 설명 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">각 방식 상세 설명</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">현금 일시불</h3>
              <p className="text-gray-600 mb-4">
                차량 가격 전액을 현금으로 지불하는 방식입니다. 이자 비용이 없어 가장 경제적이지만, 초기 자금 부담이 큽니다.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>이자 비용 0원 - 총 비용이 가장 적음</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>소유권 즉시 획득 - 차량을 바로 소유</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">✗</span>
                  <span>유동성 감소 - 대량의 현금이 차량에 묶임</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">할부</h3>
              <p className="text-gray-600 mb-4">
                차량 가격의 일부를 선금으로 지불하고, 나머지를 대출로 분할 상환하는 방식입니다. 초기 부담을 줄이면서도 대출 완납 후 차량을 소유할 수 있습니다.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>초기 부담 적음 - 보통 차량 가격의 10~20% 선금</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>금리 4~8% - 캐피탈사·은행 기준 연 4~8% 수준</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>소유권 있음 - 대출 완납 시 차량 소유 (저당 설정됨)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">✗</span>
                  <span>이자 비용 발생 - 총 비용이 현금 구매보다 높음</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">리스</h3>
              <p className="text-gray-600 mb-4">
                차량을 소유하지 않고 일정 기간 동안 사용하는 방식입니다. 초기 부담이 최소이며, 월 비용에 보험료와 세금이 포함될 수 있습니다.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>초기 부담 최소 - 보통 0~200만 원 수준</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>월 비용에 세금+보험 포함 가능 - 별도 관리 불필요</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>사업자 세금 혜택 - 리스 비용을 비용 처리 가능</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">✗</span>
                  <span>소유권 없음 - 계약 기간 동안 사용권만 보유</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5년 총비용 시뮬레이션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3,000만 원 차량 기준 5년 총비용 시뮬레이션
          </h2>
          <p className="text-gray-600 mb-4">
            동일한 차량을 각 방식으로 구매했을 때의 총 비용을 비교합니다. (취등록세 포함, 보험료는 별도)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {costSimulation.map((cost) => (
              <div key={cost.method} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">{cost.method}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">초기 비용:</span>
                    <span className="ml-2 font-semibold text-gray-900">{cost.initial}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">월 납입금:</span>
                    <span className="ml-2 font-semibold text-gray-900">{cost.monthly}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-gray-500">5년 총 비용:</span>
                    <span className="ml-2 font-bold text-lg text-amber-600">{cost.total}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{cost.breakdown}</div>
                  <div className="text-xs text-amber-600 font-semibold mt-1">{cost.note}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ※ 할부 금리는 연 6% 기준, 리스는 보험·세금 포함 기준입니다. 실제 금리와 조건은 금융사·리스사에 따라 상이합니다.
          </p>
        </section>

        {/* 어떤 방식이 나에게 맞을까? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">어떤 방식이 나에게 맞을까?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{scenario.title}</h3>
                <div className="mb-3">
                  <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                    추천: {scenario.recommendation}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-1">장점</div>
                    <ul className="space-y-1">
                      {scenario.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                          <span className="text-amber-500 mt-0.5">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-1">단점</div>
                    <ul className="space-y-1">
                      {scenario.cons.map((con, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-1">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="bg-amber-50 rounded-2xl border border-amber-100 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">할부금 계산기</h2>
            <p className="text-gray-600 mb-6">
              할부 구매를 고려 중이라면, 실제 월 납입금과 총 이자를 계산해보세요.
            </p>
            <Link
              href="/calculator/installment"
              className="inline-block bg-amber-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors"
            >
              할부금 계산하기 →
            </Link>
          </div>
        </section>

        {/* 관련 계산기 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 계산기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: '💳', title: '할부금 계산기', href: '/calculator/installment' },
              { emoji: '📋', title: '취등록세 계산기', href: '/calculator/registration-tax' },
              { emoji: '🏷️', title: '자동차세 계산기', href: '/calculator/car-tax' },
            ].map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-3xl mb-2">{calc.emoji}</div>
                <div className="font-semibold text-gray-900">{calc.title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
