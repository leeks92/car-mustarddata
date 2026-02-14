import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '2026년 전기차 보조금 총정리 - 국고보조금·지자체 보조금',
  description:
    '2026년 전기차 구매 보조금을 정리했습니다. 국고보조금, 지자체 보조금, 보조금 대상 차종, 신청 방법까지 한눈에 확인하세요.',
  keywords: ['전기차 보조금', '2026 전기차 보조금', '전기차 국고보조금', '전기차 지자체 보조금', '전기차 보조금 대상'],
  alternates: { canonical: `${BASE_URL}/guide/ev-subsidy` },
  openGraph: {
    title: '2026년 전기차 보조금 총정리',
    description: '전기차 구매 시 받을 수 있는 국고보조금·지자체 보조금을 정리했습니다.',
    url: `${BASE_URL}/guide/ev-subsidy`,
  },
};

const subsidyTable = [
  { category: '승용차 (5,700만 원 미만)', national: '최대 680만 원', local: '지역별 200~500만 원' },
  { category: '승용차 (5,700~8,500만 원)', national: '최대 340만 원 (50%)', local: '지역별 100~250만 원' },
  { category: '승용차 (8,500만 원 이상)', national: '보조금 없음', local: '보조금 없음' },
  { category: '소형 전기차 (경차급)', national: '최대 580만 원', local: '지역별 150~400만 원' },
  { category: '전기 화물차', national: '최대 1,400만 원', local: '지역별 400~800만 원' },
];

const popularEVs = [
  { model: '현대 아이오닉 6', price: '약 4,695만 원~', subsidy: '국고 최대 680만 원' },
  { model: '기아 EV6', price: '약 4,870만 원~', subsidy: '국고 최대 680만 원' },
  { model: '현대 아이오닉 5', price: '약 4,695만 원~', subsidy: '국고 최대 680만 원' },
  { model: '기아 EV3', price: '약 3,488만 원~', subsidy: '국고 최대 680만 원' },
  { model: '테슬라 모델 3', price: '약 4,990만 원~', subsidy: '국고 최대 680만 원' },
  { model: '테슬라 모델 Y', price: '약 5,699만 원~', subsidy: '국고 최대 340만 원' },
];

const steps = [
  { step: '1', title: '차량 계약', desc: '보조금 대상 전기차를 선택하고 구매 계약을 진행합니다.' },
  { step: '2', title: '보조금 신청', desc: '지자체 무공해차 통합누리집(ev.or.kr)에서 보조금을 신청합니다.' },
  { step: '3', title: '보조금 배정', desc: '예산 한도 내에서 선착순으로 보조금이 배정됩니다.' },
  { step: '4', title: '차량 출고 및 등록', desc: '차량 출고 후 등록을 완료하면 보조금이 지급됩니다.' },
];

export default function EVSubsidyGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '2026년 전기차 보조금 총정리',
          description: '전기차 구매 시 받을 수 있는 국고보조금·지자체 보조금을 정리했습니다.',
          url: `${BASE_URL}/guide/ev-subsidy`,
          publisher: { '@type': 'Organization', name: 'MustardData' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '전기차 보조금 가이드', item: `${BASE_URL}/guide/ev-subsidy` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">전기차 보조금 가이드</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          2026년 전기차 보조금 총정리
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          전기차 구매 시 받을 수 있는 국고보조금과 지자체 보조금을 정리했습니다.
          차량 가격에 따라 보조금 지원 금액이 달라집니다.
        </p>

        {/* 보조금 기준표 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">보조금 지원 기준</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-900">차종/가격대</th>
                  <th className="text-right px-5 py-3 text-sm font-semibold text-gray-900">국고보조금</th>
                  <th className="text-right px-5 py-3 text-sm font-semibold text-gray-900">지자체 보조금</th>
                </tr>
              </thead>
              <tbody>
                {subsidyTable.map((row) => (
                  <tr key={row.category} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-sm text-gray-900">{row.category}</td>
                    <td className="px-5 py-3 text-sm text-right text-gray-900">{row.national}</td>
                    <td className="px-5 py-3 text-sm text-right text-gray-600">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 지자체 보조금은 지역별로 상이하며, 예산 소진 시 조기 마감될 수 있습니다.
          </p>
        </section>

        {/* 인기 전기차 보조금 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">인기 전기차 보조금 예시</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularEVs.map((ev) => (
              <div key={ev.model} className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{ev.model}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>차량 가격: {ev.price}</p>
                  <p className="text-amber-600 font-semibold">{ev.subsidy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 신청 절차 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">보조금 신청 절차</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-5">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 유의사항 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">유의사항</h2>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>보조금을 받은 전기차는 2년 이내 의무 운행 기간이 있으며, 기간 내 매매 시 보조금을 환수해야 합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>전기차 취등록세 감면은 최대 140만 원이며, 보조금과 별도로 적용됩니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>지자체 예산이 소진되면 보조금 신청이 조기 마감될 수 있으므로 빠른 신청이 유리합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>법인·개인사업자도 보조금 신청이 가능하지만, 일부 지자체에서는 개인 우선 배정 정책을 시행합니다.</span>
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
              { emoji: '🏷️', title: '자동차세 계산기', href: '/calculator/car-tax' },
              { emoji: '⛽', title: '유류비 계산기', href: '/calculator/fuel-cost' },
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
