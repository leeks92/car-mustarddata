import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차세 연납 가이드 - 2026년 연납 할인율, 신청 방법 총정리',
  description:
    '자동차세 연납 제도에 대해 정리했습니다. 2026년 월별 연납 할인율, 신청 방법, 절약 금액 예시, 자주 묻는 질문까지 한눈에 확인하세요.',
  keywords: ['자동차세 연납', '자동차세 연납 할인', '연납 신청', '자동차세 할인', '위택스 연납'],
  alternates: { canonical: `${BASE_URL}/guide/car-tax-prepay` },
  openGraph: {
    title: '자동차세 연납 가이드 - 2026년 연납 할인율, 신청 방법 총정리',
    description: '자동차세를 미리 납부하면 할인받는 연납 제도에 대해 정리했습니다.',
    url: `${BASE_URL}/guide/car-tax-prepay`,
  },
};

const prepayDiscountTable = [
  { month: '1월', discount: '약 4.57%', period: '1월 1일 ~ 1월 31일' },
  { month: '3월', discount: '약 3.76%', period: '3월 1일 ~ 3월 31일' },
  { month: '6월', discount: '약 2.52%', period: '6월 1일 ~ 6월 30일' },
  { month: '9월', discount: '약 1.25%', period: '9월 1일 ~ 9월 30일' },
];

const savingsExample = [
  { month: '1월 연납', annualTax: '52만 원', discount: '4.57%', savings: '약 23,764원', finalAmount: '496,236원' },
  { month: '3월 연납', annualTax: '52만 원', discount: '3.76%', savings: '약 19,552원', finalAmount: '500,448원' },
  { month: '6월 연납', annualTax: '52만 원', discount: '2.52%', savings: '약 13,104원', finalAmount: '506,896원' },
  { month: '9월 연납', annualTax: '52만 원', discount: '1.25%', savings: '약 6,500원', finalAmount: '513,500원' },
];

const faqs = [
  {
    question: '연납 후 차를 팔면 어떻게 되나요?',
    answer: '연납한 자동차세는 일할 계산하여 환급받을 수 있습니다. 차량 매도 시 관할 시·군·구청에 환급 신청을 하면 됩니다.',
  },
  {
    question: '매년 다시 신청해야 하나요?',
    answer: '한 번 연납 신청을 하면 매년 자동으로 적용됩니다. 별도 신청 없이 매년 1월에 자동차세가 연납 처리됩니다.',
  },
  {
    question: '연납 신청 후 취소할 수 있나요?',
    answer: '납부 전이면 취소 가능합니다. 납부 기한 내에 납부하지 않으면 자동으로 취소되며, 분할 납부로 전환됩니다.',
  },
  {
    question: '연납 할인율은 어떻게 결정되나요?',
    answer: '연납 할인율은 정부가 정한 기준금리와 납부 시점에 따라 결정됩니다. 1월에 납부할수록 할인율이 높습니다.',
  },
  {
    question: '모든 차량이 연납 대상인가요?',
    answer: '비영업용 승용차, 승합차, 화물차 등 대부분의 자동차가 연납 대상입니다. 다만 일부 특수 차량은 제외될 수 있습니다.',
  },
];

export default function CarTaxPrepayGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차세 연납 가이드 - 2026년 연납 할인율, 신청 방법 총정리',
          description: '자동차세 연납 제도에 대해 정리했습니다. 2026년 월별 연납 할인율, 신청 방법, 절약 금액 예시를 확인하세요.',
          url: `${BASE_URL}/guide/car-tax-prepay`,
          publisher: { '@type': 'Organization', name: 'MustardData' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: '홈',
              item: BASE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '자동차세 연납 가이드',
              item: `${BASE_URL}/guide/car-tax-prepay`,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">
            홈
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">자동차세 연납 가이드</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">자동차세 연납 가이드</h1>
        <p className="text-lg text-gray-600 mb-10">
          자동차세를 미리 납부하면 할인받을 수 있는 연납 제도에 대해 정리했습니다. 2026년 기준 월별 할인율과 신청 방법을 확인하세요.
        </p>

        {/* 연납이란? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">연납이란?</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-gray-700 leading-relaxed">
              연납(年納)은 자동차세를 1월에 미리 납부하면 할인받을 수 있는 제도입니다. 분할 납부(분납) 대신 연간 세액을 한 번에 납부하면
              정부가 정한 기준금리를 반영한 할인율을 적용받아 세액이 감면됩니다. 납부 시점이 빠를수록 할인율이 높아지므로, 1월에 납부하는 것이 가장
              유리합니다.
            </p>
          </div>
        </section>

        {/* 월별 연납 할인율 테이블 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">월별 연납 할인율 테이블 (2026년 기준)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">납부 월</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">할인율</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">신청 기간</th>
                </tr>
              </thead>
              <tbody>
                {prepayDiscountTable.map((row, i) => (
                  <tr key={row.month} className={i > 0 ? 'border-t border-gray-100' : ''}>
                    <td className="px-6 py-3 text-sm text-gray-900 font-medium">{row.month}</td>
                    <td className="px-6 py-3 text-sm text-right text-amber-600 font-semibold">{row.discount}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 할인율은 기준금리 변동에 따라 달라질 수 있습니다. 정확한 할인율은 신청 시점에 확인하세요.
          </p>
        </section>

        {/* 연납 신청 방법 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">연납 신청 방법</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">위택스(wetax.go.kr) 온라인 신청</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    위택스 홈페이지에 접속하여 로그인 후 자동차세 연납 신청 메뉴에서 신청할 수 있습니다. 공동인증서 또는 간편인증으로 로그인하면
                    됩니다.
                  </p>
                  <a
                    href="https://wetax.go.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-amber-600 font-semibold hover:text-amber-700"
                  >
                    위택스 바로가기 →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">관할 시·군·구청 전화/방문 신청</h3>
                  <p className="text-gray-600 leading-relaxed">
                    관할 시·군·구청 세무과에 전화하거나 직접 방문하여 연납 신청을 할 수 있습니다. 신분증과 차량 등록증을 지참하면 됩니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-amber-700">※ 유의사항:</span> 연납 신청 후 납부 기한 내에 납부하지 않으면 자동으로 취소되며,
                분할 납부(분납)로 전환됩니다. 납부 기한은 신청 시 안내받을 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 절약 금액 예시 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2000cc 차량 기준 연납 절약 금액 예시</h2>
          <p className="text-gray-600 mb-4">연세액 52만 원 기준입니다.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">연납 시점</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">연세액</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">할인율</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">절약 금액</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">최종 납부액</th>
                </tr>
              </thead>
              <tbody>
                {savingsExample.map((row, i) => (
                  <tr key={row.month} className={i > 0 ? 'border-t border-gray-100' : ''}>
                    <td className="px-6 py-3 text-sm text-gray-900 font-medium">{row.month}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-900">{row.annualTax}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-600">{row.discount}</td>
                    <td className="px-6 py-3 text-sm text-right text-amber-600 font-semibold">{row.savings}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-900 font-medium">{row.finalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 실제 절약 금액은 차량 배기량, 차령, 기준금리 변동에 따라 달라질 수 있습니다.
          </p>
        </section>

        {/* 연납 FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-amber-500">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 ml-6 leading-relaxed">
                  <span className="text-gray-500">A.</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 서비스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wetax.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all text-center"
            >
              <div className="text-3xl mb-2">🏛️</div>
              <div className="font-semibold text-gray-900 mb-1">위택스 바로가기</div>
              <div className="text-sm text-gray-500">자동차세 연납 신청</div>
            </a>
            <Link
              href="/calculator/car-tax"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all text-center"
            >
              <div className="text-3xl mb-2">🏷️</div>
              <div className="font-semibold text-gray-900 mb-1">자동차세 계산기</div>
              <div className="text-sm text-gray-500">연납 할인 금액 계산</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
