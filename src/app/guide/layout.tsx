import Link from 'next/link';
import { GUIDE_PAGES } from '@/lib/urls';

// 토픽별 가이드 그룹 (상호 링크용)
const GUIDE_GROUPS: Record<string, string[]> = {
  구매: [
    '/guide/new-car-buying',
    '/guide/cash-vs-loan-vs-lease',
    '/guide/used-car-buying-checklist',
    '/guide/first-car-recommendation',
    '/guide/imported-car-buying',
    '/guide/beginner-driver',
  ],
  보험: [
    '/guide/car-insurance',
    '/guide/insurance-by-car',
    '/guide/car-insurance-renewal',
    '/guide/imported-car-insurance',
    '/guide/car-accident-process',
  ],
  세금: [
    '/guide/car-tax-prepay',
    '/guide/car-tax-refund',
    '/guide/compact-car-benefits',
    '/guide/ownership-transfer',
  ],
  유지비: [
    '/guide/maintenance-cost',
    '/guide/imported-car-maintenance',
    '/guide/engine-oil-change',
    '/guide/tire-cost',
    '/guide/brake-pad-replacement',
    '/guide/car-battery-replacement',
    '/guide/car-air-conditioner',
    '/guide/car-wash-cost',
    '/guide/car-scratch-repair-cost',
  ],
  전기차: [
    '/guide/ev-subsidy',
    '/guide/ev-charging-guide',
    '/guide/hybrid-vs-gasoline',
  ],
  비교: [
    '/guide/lease-vs-rent',
    '/guide/hybrid-vs-gasoline',
    '/guide/diesel-vs-gasoline',
    '/guide/suv-vs-sedan',
    '/guide/car-lease-return',
  ],
  운전: [
    '/guide/beginner-driver',
    '/guide/driver-license-cost',
    '/guide/long-distance-driving',
    '/guide/winter-driving',
    '/guide/international-driving-permit',
    '/guide/car-camping',
  ],
  차량관리: [
    '/guide/new-car-checklist',
    '/guide/window-tinting',
    '/guide/dashcam-guide',
    '/guide/scrap-car-subsidy',
  ],
};

function getRelatedGuides(currentPath: string): typeof GUIDE_PAGES {
  // 현재 가이드가 속한 그룹에서 관련 가이드 찾기
  const relatedPaths = new Set<string>();

  for (const paths of Object.values(GUIDE_GROUPS)) {
    if (paths.includes(currentPath)) {
      for (const p of paths) {
        if (p !== currentPath) relatedPaths.add(p);
      }
    }
  }

  // 관련 가이드에서 GUIDE_PAGES 데이터 매칭 (최대 4개)
  return GUIDE_PAGES.filter((g) => relatedPaths.has(g.path)).slice(0, 4);
}

// 서버 컴포넌트에서 현재 path를 알 수 없으므로, 전체 가이드 중 인기 가이드를 표시
const POPULAR_GUIDES = GUIDE_PAGES.filter((g) =>
  [
    '/guide/new-car-buying',
    '/guide/maintenance-cost',
    '/guide/car-insurance',
    '/guide/ev-subsidy',
    '/guide/car-tax-prepay',
    '/guide/used-car-buying-checklist',
  ].includes(g.path)
);

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* 가이드 간 상호 링크 섹션 */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            다른 가이드도 확인해보세요
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {POPULAR_GUIDES.map((guide) => (
              <Link
                key={guide.path}
                href={guide.path}
                className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all"
              >
                <div className="text-2xl mb-2">{guide.emoji}</div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-1">
                  {guide.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
