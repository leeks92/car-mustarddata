import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차세 환급 방법 - 2026년 폐차·이전·말소 시 환급 총정리',
  description:
    '자동차세 환급 대상, 환급 금액 계산법, 신청 방법을 정리했습니다. 폐차, 양도(이전), 말소 시 남은 기간의 자동차세를 돌려받는 방법을 확인하세요.',
  keywords: [
    '자동차세 환급',
    '자동차세 환불',
    '폐차 자동차세',
    '자동차세 이전 환급',
    '자동차세 말소 환급',
    '자동차세 연납 환급',
    '자동차세 돌려받기',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-tax-refund` },
  openGraph: {
    title: '자동차세 환급 방법 - 2026년 폐차·이전·말소 시 환급 총정리',
    description: '자동차세 환급 대상과 신청 방법을 정리했습니다.',
    url: `${BASE_URL}/guide/car-tax-refund`,
    type: 'website',
  },
};

const refundCases = [
  {
    emoji: '🚗',
    title: '차량 양도 (이전)',
    desc: '차량을 매도하여 명의이전이 완료되면, 이전일 이후 남은 기간에 해당하는 자동차세를 환급받을 수 있습니다.',
    example: '6월에 양도 시 → 7~12월분 환급',
  },
  {
    emoji: '🔧',
    title: '폐차 (말소)',
    desc: '차량을 폐차하여 등록이 말소되면, 말소일 이후 남은 기간의 자동차세를 환급받습니다.',
    example: '3월에 폐차 시 → 4~12월분 환급',
  },
  {
    emoji: '📋',
    title: '연납 후 양도·폐차',
    desc: '자동차세를 연납(선납)한 후 차량을 양도하거나 폐차하면, 남은 기간에 해당하는 연납 금액을 환급받습니다.',
    example: '1월 연납 후 8월 양도 시 → 9~12월분 환급',
  },
  {
    emoji: '🔄',
    title: '이중 납부',
    desc: '자동차세가 이중으로 부과·납부된 경우 초과 납부분을 환급받을 수 있습니다.',
    example: '이전 소유자와 신규 소유자 모두 납부 시',
  },
];

const refundExamples = [
  { cc: 1000, annualTax: 104, soldMonth: '3월', remainMonths: 9, refund: 78 },
  { cc: 1600, annualTax: 291, soldMonth: '6월', remainMonths: 6, refund: 146 },
  { cc: 2000, annualTax: 520, soldMonth: '4월', remainMonths: 8, refund: 347 },
  { cc: 2500, annualTax: 650, soldMonth: '8월', remainMonths: 4, refund: 217 },
  { cc: 3000, annualTax: 780, soldMonth: '2월', remainMonths: 10, refund: 650 },
];

const applicationMethods = [
  {
    step: '1',
    title: '위택스(Wetax) 온라인 신청',
    desc: '위택스(wetax.go.kr)에 로그인 → 환급금 조회/신청 메뉴에서 환급 가능 금액을 확인하고 신청합니다.',
    link: 'https://www.wetax.go.kr',
  },
  {
    step: '2',
    title: '관할 시·군·구청 방문',
    desc: '차량 등록지 관할 시·군·구청 세무과를 방문하여 환급 신청서를 작성합니다. 신분증과 통장 사본이 필요합니다.',
  },
  {
    step: '3',
    title: '정부24 온라인 신청',
    desc: '정부24(gov.kr)에서 "자동차세 환급"을 검색하여 온라인으로 신청할 수 있습니다.',
    link: 'https://www.gov.kr',
  },
  {
    step: '4',
    title: '자동 환급 (일부 지자체)',
    desc: '일부 지자체에서는 폐차·이전 등록 시 자동으로 환급 처리됩니다. 관할 지자체에 확인하세요.',
  },
];

const faqItems = [
  {
    q: '자동차세 환급은 얼마나 걸리나요?',
    a: '온라인(위택스) 신청 시 보통 2~4주 이내에 지정 계좌로 환급됩니다. 관할 관청 방문 신청 시에도 비슷한 기간이 소요됩니다. 일부 지자체는 자동 환급 처리하여 별도 신청 없이 환급되기도 합니다.',
  },
  {
    q: '연납 할인을 받았는데 환급 시 할인분은 어떻게 되나요?',
    a: '연납 할인을 받은 경우, 환급 금액은 실제 납부한 금액(할인 적용 후)을 기준으로 남은 기간에 비례하여 계산됩니다. 할인받은 금액이 차감되지는 않습니다.',
  },
  {
    q: '환급 신청 기한이 있나요?',
    a: '자동차세 환급 청구권은 5년입니다. 폐차·양도 후 5년 이내에 신청해야 합니다. 가능하면 양도·폐차 직후에 바로 신청하는 것이 좋습니다.',
  },
  {
    q: '폐차 시 자동차세 외에 돌려받을 수 있는 것이 있나요?',
    a: '폐차 시 자동차세 환급 외에도 ①자동차 보험 미경과 보험료 환급, ②번호판 보증금 환급(해당 시)을 받을 수 있습니다. 보험사에 별도로 해지 신청해야 합니다.',
  },
];

export default function CarTaxRefundPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차세 환급 방법 - 2026년 폐차·이전·말소 시 환급 총정리',
          description: '자동차세 환급 대상과 신청 방법을 정리했습니다.',
          url: `${BASE_URL}/guide/car-tax-refund`,
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
            { '@type': 'ListItem', position: 2, name: '자동차세 환급 방법', item: `${BASE_URL}/guide/car-tax-refund` },
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
            <li className="text-gray-900 font-medium">자동차세 환급 방법</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자동차세 환급 방법
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            차량을 양도하거나 폐차하면 이미 납부한 자동차세 중 남은 기간에 해당하는 금액을
            돌려받을 수 있습니다. 특히 자동차세를 <strong>연납</strong>한 경우 환급 금액이
            커질 수 있으므로 반드시 확인하세요.
          </p>
        </section>

        {/* 환급 대상 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자동차세 환급 대상
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {refundCases.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <p className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg inline-block">
                  예시: {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 환급 금액 계산 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            환급 금액 계산 방법
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              <p className="text-center text-lg font-bold text-amber-800">
                환급 금액 = 연간 자동차세 × (남은 월수 ÷ 12)
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              자동차세는 1월~6월분(1기분)과 7월~12월분(2기분)으로 나뉘어 부과됩니다.
              양도·폐차일이 속한 월의 다음 달부터 연말까지의 세액이 환급 대상입니다.
              연납한 경우에는 연납 금액 기준으로 남은 기간을 계산합니다.
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">배기량별 환급 예시</h3>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">배기량</th>
                    <th className="px-4 py-3 text-right font-semibold">연간 자동차세</th>
                    <th className="px-4 py-3 text-center font-semibold">양도/폐차 월</th>
                    <th className="px-4 py-3 text-center font-semibold">남은 개월</th>
                    <th className="px-4 py-3 text-right font-semibold text-amber-600">예상 환급액</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {refundExamples.map((row) => (
                    <tr key={`${row.cc}-${row.soldMonth}`} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.cc.toLocaleString()}cc</td>
                      <td className="px-4 py-3 text-right text-gray-700">약 {row.annualTax.toLocaleString()}천 원</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.soldMonth}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.remainMonths}개월</td>
                      <td className="px-4 py-3 text-right font-bold text-amber-600">약 {row.refund.toLocaleString()}천 원</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 비영업용 승용차 기준, 차령 경감율 미적용 금액. 실제 환급액은 차령, 연납 여부에 따라 달라집니다.
          </p>
        </section>

        {/* 신청 방법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            환급 신청 방법
          </h2>
          <div className="space-y-4">
            {applicationMethods.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-amber-600 text-sm font-semibold hover:text-amber-700"
                    >
                      {item.link.replace('https://www.', '')} 바로가기 →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 필요 서류 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            환급 신청 시 필요 서류
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <ul className="space-y-3">
              {[
                { doc: '신분증', note: '주민등록증, 운전면허증 등' },
                { doc: '환급 계좌 정보', note: '본인 명의 통장 사본 또는 계좌번호' },
                { doc: '자동차 말소 사실 증명서', note: '폐차 시 (자동차등록원부로 대체 가능)' },
                { doc: '자동차 양도 증명서', note: '양도(이전) 시' },
                { doc: '자동차세 납부 영수증', note: '연납 환급 시 (선택)' },
              ].map((item) => (
                <li key={item.doc} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <div>
                    <span className="font-medium text-gray-900">{item.doc}</span>
                    <span className="text-sm text-gray-500 ml-2">— {item.note}</span>
                  </div>
                </li>
              ))}
            </ul>
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
              내 차의 자동차세를 확인해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              배기량과 차령을 입력하면 연간 자동차세와 연납 할인 금액을 계산합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/car-tax"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                자동차세 계산하기
              </Link>
              <Link
                href="/guide/car-tax-prepay"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                연납 가이드 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
