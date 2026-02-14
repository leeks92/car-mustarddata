import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 유지비 총정리 - 2026년 차종별 월간 유지비 비교',
  description:
    '자동차 유지비 4대 항목(자동차세, 보험료, 유류비, 정비비)을 정리하고 차종별 월간 유지비를 비교했습니다. 경차부터 대형 SUV까지 예상 비용과 절약 팁을 확인하세요.',
  keywords: [
    '자동차 유지비',
    '차종별 유지비',
    '월간 유지비',
    '자동차세',
    '자동차 보험료',
    '유류비',
    '정비비',
    '경차 유지비',
    '중형차 유지비',
    '대형차 유지비',
  ],
  alternates: { canonical: `${BASE_URL}/guide/maintenance-cost` },
  openGraph: {
    title: '자동차 유지비 총정리 - 2026년 차종별 월간 유지비 비교',
    description: '차종별 자동차 유지비를 비교하고 절약 방법을 알아보세요.',
    url: `${BASE_URL}/guide/maintenance-cost`,
  },
};

const costCategories = [
  {
    title: '자동차세',
    emoji: '🏷️',
    description: '배기량과 차령에 따라 연간 부과되는 세금입니다. 경차는 연 8만 원, 준중형은 연 10~15만 원, 중형은 연 15~20만 원 수준입니다.',
    monthly: '약 1~2만 원',
  },
  {
    title: '보험료',
    emoji: '🛡️',
    description: '자동차보험(의무보험 + 자동차종합보험)으로 연간 60~200만 원 수준입니다. 차량 가격, 운전 경력, 사고 이력에 따라 크게 달라집니다.',
    monthly: '약 5~17만 원',
  },
  {
    title: '유류비',
    emoji: '⛽',
    description: '주행 거리와 연비에 따라 결정됩니다. 월 1,000km 기준 경차는 약 7만 원, 중형차는 약 12만 원, 대형 SUV는 약 20만 원 수준입니다.',
    monthly: '약 7~20만 원',
  },
  {
    title: '정비비',
    emoji: '🔧',
    description: '정기점검, 부품 교체, 수리비 등입니다. 신차는 연 30~60만 원, 중고차는 연 60~120만 원 수준이며, 차종과 주행거리에 따라 달라집니다.',
    monthly: '약 3~10만 원',
  },
];

const carTypeComparison = [
  {
    type: '경차',
    model: '모닝',
    tax: '약 6,800원',
    insurance: '약 6만 원',
    fuel: '약 7만 원',
    maintenance: '약 5만 원',
    total: '약 19만 원',
  },
  {
    type: '준중형',
    model: '아반떼',
    tax: '약 1.2만 원',
    insurance: '약 8만 원',
    fuel: '약 10만 원',
    maintenance: '약 6만 원',
    total: '약 30만 원',
  },
  {
    type: '중형',
    model: '쏘나타',
    tax: '약 1.5만 원',
    insurance: '약 10만 원',
    fuel: '약 12만 원',
    maintenance: '약 7만 원',
    total: '약 38만 원',
  },
  {
    type: '대형',
    model: '그랜저',
    tax: '약 1.8만 원',
    insurance: '약 12만 원',
    fuel: '약 15만 원',
    maintenance: '약 8만 원',
    total: '약 50만 원',
  },
  {
    type: '전기차',
    model: '아이오닉5',
    tax: '약 0원',
    insurance: '약 9만 원',
    fuel: '약 3만 원',
    maintenance: '약 4만 원',
    total: '약 25만 원',
  },
  {
    type: 'SUV',
    model: '팰리세이드',
    tax: '약 2만 원',
    insurance: '약 15만 원',
    fuel: '약 18만 원',
    maintenance: '약 10만 원',
    total: '약 55만 원',
  },
];

const savingTips = [
  {
    title: '자동차세 연납 할인',
    description:
      '자동차세를 분할 납부 대신 연납하면 최대 4% 할인을 받을 수 있습니다. 연간 자동차세가 20만 원인 경우 약 8,000원을 절약할 수 있습니다.',
    link: { href: '/calculator/car-tax', text: '자동차세 계산하기 →' },
  },
  {
    title: '다이렉트 보험 가입',
    description:
      '대리점을 거치지 않고 보험사에 직접 가입하면 보험료가 10~20% 저렴합니다. 여러 보험사를 비교하여 가장 저렴한 보험을 선택하세요.',
  },
  {
    title: '경제 운전 습관',
    description:
      '급가속, 급정거를 피하고 정속 주행을 하면 연비가 10~20% 개선됩니다. 타이어 공기압을 정기적으로 점검하고 불필요한 짐을 제거하는 것도 연비 향상에 도움이 됩니다.',
  },
  {
    title: '정비 주기 준수',
    description:
      '정기점검을 제때 받으면 큰 고장을 예방할 수 있어 장기적으로 정비비를 절약할 수 있습니다. 제조사 권장 주기(보통 1만~1.5만 km)를 준수하세요.',
  },
  {
    title: '주유 할인 카드 활용',
    description:
      '주유소 할인 카드나 신용카드 할인을 활용하면 리터당 50~100원을 절약할 수 있습니다. 월 100L 주유 시 약 5,000~10,000원을 절약할 수 있습니다.',
    link: { href: '/calculator/fuel-cost', text: '유류비 계산하기 →' },
  },
];

export default function MaintenanceCostGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차 유지비 총정리 - 2026년 차종별 월간 유지비 비교',
          description: '자동차 유지비 4대 항목과 차종별 월간 유지비를 비교하고 절약 방법을 안내합니다.',
          url: `${BASE_URL}/guide/maintenance-cost`,
          publisher: { '@type': 'Organization', name: 'MustardData' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '자동차 유지비 가이드', item: `${BASE_URL}/guide/maintenance-cost` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">
            홈
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">자동차 유지비 가이드</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">자동차 유지비 총정리</h1>
        <p className="text-lg text-gray-600 mb-10">
          2026년 기준, 자동차 유지비 4대 항목을 정리하고 차종별 월간 유지비를 비교했습니다.
          예상 비용과 절약 팁을 확인하여 합리적인 차량 선택과 유지비 절감에 도움이 되도록 했습니다.
        </p>

        {/* 유지비 4대 항목 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">유지비 4대 항목</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {costCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">{category.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{category.description}</p>
                    <p className="text-amber-600 font-semibold text-sm">월 평균: {category.monthly}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 차종별 월간 유지비 비교 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">차종별 월간 유지비 비교</h2>
          <p className="text-gray-600 mb-4">
            월 1,000km 주행 기준 예상 유지비입니다. 실제 비용은 주행 거리, 운전 습관, 차량 상태에 따라 달라질 수 있습니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">차종</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">모델</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">자동차세</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">보험료</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">유류비</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">정비비</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">합계</th>
                </tr>
              </thead>
              <tbody>
                {carTypeComparison.map((car, i) => (
                  <tr key={car.type} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-3 text-sm font-semibold text-gray-900">{car.type}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{car.model}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-900">{car.tax}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-900">{car.insurance}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-900">{car.fuel}</td>
                    <td className="px-6 py-3 text-sm text-right text-gray-900">{car.maintenance}</td>
                    <td className="px-6 py-3 text-sm text-right font-bold text-amber-600">{car.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 전기차는 자동차세 면제, 충전비는 전기 요금 기준으로 계산했습니다. 유류비는 2026년 1월 기준 휘발유 1,500원/L,
            경유 1,400원/L 기준입니다.
          </p>
        </section>

        {/* 유지비 절약 팁 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">유지비 절약 팁 5가지</h2>
          <div className="space-y-4">
            {savingTips.map((tip, index) => (
              <div key={tip.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">{tip.description}</p>
                    {tip.link && (
                      <Link
                        href={tip.link.href}
                        className="inline-block mt-2 text-amber-600 font-semibold hover:text-amber-700"
                      >
                        {tip.link.text}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 관련 계산기 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 계산기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: '🏷️', title: '자동차세 계산기', href: '/calculator/car-tax' },
              { emoji: '⛽', title: '유류비 계산기', href: '/calculator/fuel-cost' },
              { emoji: '📉', title: '감가상각 계산기', href: '/calculator/depreciation' },
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
