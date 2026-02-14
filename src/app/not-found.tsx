import Link from 'next/link';

const recommendedPages = [
  { emoji: '🏷️', title: '자동차세 계산기', href: '/calculator/car-tax' },
  { emoji: '📋', title: '취등록세 계산기', href: '/calculator/registration-tax' },
  { emoji: '💳', title: '할부금 계산기', href: '/calculator/installment' },
  { emoji: '⛽', title: '유류비 계산기', href: '/calculator/fuel-cost' },
  { emoji: '🚗', title: '신차 구매 가이드', href: '/guide/new-car-buying' },
  { emoji: '🔋', title: '전기차 보조금 가이드', href: '/guide/ev-subsidy' },
];

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>

      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
          이 페이지를 찾고 계셨나요?
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {recommendedPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
            >
              <div className="text-3xl mb-2">{page.emoji}</div>
              <div className="text-sm font-semibold text-gray-900">
                {page.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
