import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '신차 구매 가이드 - 2026년 신차 구매 비용 총정리',
  description:
    '신차 구매 시 알아야 할 모든 비용을 정리했습니다. 차량 가격, 취등록세, 보험료, 할부 이자 등 총 구매 비용을 계산하는 방법을 안내합니다.',
  keywords: ['신차 구매 가이드', '신차 구매 비용', '자동차 구매 절차', '신차 취등록세', '자동차 할부'],
  alternates: { canonical: `${BASE_URL}/guide/new-car-buying` },
  openGraph: {
    title: '신차 구매 가이드 - 2026년 신차 구매 비용 총정리',
    description: '신차 구매 시 차량 가격 외에 필요한 모든 비용과 절차를 정리했습니다.',
    url: `${BASE_URL}/guide/new-car-buying`,
  },
};

const steps = [
  {
    step: '1',
    title: '차량 선택 및 견적',
    content:
      '브랜드, 차종, 옵션을 결정하고 공식 홈페이지나 영업사원을 통해 견적을 받습니다. 동일 모델이라도 옵션에 따라 수백만 원 차이가 날 수 있으므로 여러 견적을 비교하는 것이 중요합니다.',
  },
  {
    step: '2',
    title: '취등록세 확인',
    content:
      '비영업용 승용차 기준 차량 가격의 7%가 취득세로 부과됩니다. 경차(1,000cc 이하)는 4%, 영업용은 4%, 화물차는 5%입니다. 전기차는 최대 140만 원, 하이브리드는 최대 40만 원 감면됩니다.',
    link: { href: '/calculator/registration-tax', text: '취등록세 계산하기 →' },
  },
  {
    step: '3',
    title: '결제 방식 결정',
    content:
      '현금 일시불, 할부, 리스, 장기렌트 중 선택합니다. 할부의 경우 캐피탈사 기준 연 5~9%, 은행 자동차 대출은 연 4~7% 수준입니다. 제조사 프로모션을 통해 무이자 또는 저금리 할부를 이용할 수도 있습니다.',
    link: { href: '/calculator/installment', text: '할부금 계산하기 →' },
  },
  {
    step: '4',
    title: '보험 가입',
    content:
      '차량 출고 전 자동차보험에 가입해야 합니다. 신차는 차량가액이 높아 보험료가 비교적 높으며, 운전 경력, 사고 이력, 보장 범위에 따라 보험료가 달라집니다. 최소 3개 이상 보험사를 비교하는 것이 좋습니다.',
  },
  {
    step: '5',
    title: '차량 등록 및 출고',
    content:
      '차량 등록에는 취득세, 공채 매입비(지역별 상이), 번호판 대금(약 12,000원), 인지세(약 3,000원) 등이 필요합니다. 딜러가 대행하는 경우 대행 수수료가 추가될 수 있습니다.',
  },
];

const costBreakdown = [
  { item: '차량 가격', example: '3,000만 원', note: '옵션 포함' },
  { item: '취득세 (7%)', example: '210만 원', note: '비영업용 승용차' },
  { item: '공채 매입비', example: '약 15~30만 원', note: '지역별 상이' },
  { item: '번호판 + 인지세', example: '약 1.5만 원', note: '고정 비용' },
  { item: '보험료 (1년)', example: '약 80~150만 원', note: '조건별 상이' },
  { item: '합계', example: '약 3,310~3,400만 원', note: '' },
];

export default function NewCarBuyingGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '신차 구매 가이드 - 2026년 신차 구매 비용 총정리',
          description: '신차 구매 시 알아야 할 모든 비용과 절차를 정리했습니다.',
          url: `${BASE_URL}/guide/new-car-buying`,
          publisher: { '@type': 'Organization', name: 'MustardData' },
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">신차 구매 가이드</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          신차 구매 가이드
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          2026년 기준, 신차를 구매할 때 차량 가격 외에 필요한 모든 비용과 절차를 정리했습니다.
        </p>

        {/* 비용 요약 테이블 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            신차 구매 비용 한눈에 보기
          </h2>
          <p className="text-gray-600 mb-4">3,000만 원 승용차 기준 예시입니다.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">항목</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">예시 금액</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-500">비고</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((row, i) => (
                  <tr
                    key={row.item}
                    className={`border-t border-gray-100 ${i === costBreakdown.length - 1 ? 'bg-amber-50 font-bold' : ''}`}
                  >
                    <td className="px-6 py-3 text-sm text-gray-900">{row.item}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-900">{row.example}</td>
                    <td className="px-6 py-3 text-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 단계별 가이드 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            신차 구매 절차
          </h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.content}</p>
                    {s.link && (
                      <Link
                        href={s.link.href}
                        className="inline-block mt-3 text-amber-600 font-semibold hover:text-amber-700"
                      >
                        {s.link.text}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 팁 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">구매 전 체크리스트</h2>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">✓</span>
                <span>여러 딜러에게 견적을 받아 비교한다</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">✓</span>
                <span>프로모션(무이자 할부, 현금 할인) 여부를 확인한다</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">✓</span>
                <span>자동차보험 3개 이상 비교 후 가입한다</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">✓</span>
                <span>출고 전 차량 상태를 꼼꼼히 확인한다 (PDI)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">✓</span>
                <span>전기차·하이브리드의 경우 보조금 신청을 미리 한다</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 관련 계산기 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 계산기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: '📋', title: '취등록세 계산기', href: '/calculator/registration-tax' },
              { emoji: '💳', title: '할부금 계산기', href: '/calculator/installment' },
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
