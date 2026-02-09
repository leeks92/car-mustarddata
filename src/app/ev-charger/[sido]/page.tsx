import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import {
  getRegionBySlug,
  getAllSidoSlugs,
  getRegionChargerCount,
  getChargerTypeCount,
  sidoToSlug,
  sigunguToSlug,
} from '@/lib/ev-data';

interface PageProps {
  params: Promise<{ sido: string }>;
}

export async function generateStaticParams() {
  return getAllSidoSlugs().map((sido) => ({ sido }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { sido } = await params;
  const region = getRegionBySlug(sido);
  if (!region) return {};
  const count = getRegionChargerCount(region);

  return {
    title: `${region.sido} 전기차 충전소 ${count}곳 - 위치, 요금, 운영시간`,
    description: `${region.sido} 전기차 충전소 ${count}곳의 위치, 요금, 운영시간 정보입니다. ${region.sigungu.map((s) => s.name).join(', ')} 지역 충전소를 확인하세요.`,
    keywords: [
      `${region.sido} 전기차 충전소`,
      `${region.sido} 급속 충전소`,
      `${region.sido} EV 충전소`,
      ...region.sigungu.map((s) => `${s.name} 전기차 충전소`),
    ],
    alternates: {
      canonical: `${BASE_URL}/ev-charger/${sidoToSlug(region.sido)}`,
    },
    openGraph: {
      title: `${region.sido} 전기차 충전소 ${count}곳`,
      description: `${region.sido} 지역 전기차 충전소 위치와 요금 정보를 확인하세요.`,
      url: `${BASE_URL}/ev-charger/${sidoToSlug(region.sido)}`,
    },
  };
}

export default async function SidoPage({ params }: PageProps) {
  const { sido } = await params;
  const region = getRegionBySlug(sido);
  if (!region) notFound();

  const totalCount = getRegionChargerCount(region);
  const allChargers = region.sigungu.flatMap((s) => s.chargers);
  const typeCounts = getChargerTypeCount(allChargers);
  const available24hCount = allChargers.filter((c) => c.available24h).length;
  const parkingFreeCount = allChargers.filter((c) => c.parkingFree).length;

  const faqItems = [
    {
      q: `${region.sido}에 전기차 충전소가 몇 개 있나요?`,
      a: `${region.sido}에는 총 ${totalCount}개의 전기차 충전소가 있습니다. 급속 충전소 ${typeCounts.fast}곳, 완속 충전소 ${typeCounts.slow}곳이 운영 중입니다.`,
    },
    {
      q: `${region.sido}에서 24시간 이용 가능한 충전소는 몇 곳인가요?`,
      a: `${region.sido}에서 24시간 이용 가능한 전기차 충전소는 ${available24hCount}곳입니다. 환경부 공공 충전소 위주로 24시간 운영됩니다.`,
    },
    {
      q: `${region.sido}에서 주차비 무료인 충전소는 어디인가요?`,
      a: `${region.sido}에서 주차비가 무료인 전기차 충전소는 ${parkingFreeCount}곳입니다. 공공기관, 공영주차장에 설치된 충전소가 대부분 무료 주차를 제공합니다.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${region.sido} 전기차 충전소`,
          description: `${region.sido} 지역 전기차 충전소 ${totalCount}곳 정보`,
          url: `${BASE_URL}/ev-charger/${sidoToSlug(region.sido)}`,
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

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* 브레드크럼 */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">
            홈
          </Link>
          <span className="mx-2">›</span>
          <Link href="/ev-charger" className="hover:text-amber-600">
            전기차 충전소
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{region.sido}</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {region.sido} 전기차 충전소
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          {region.sido} 지역 {totalCount}개 전기차 충전소의 위치, 요금,
          운영시간 정보를 확인하세요.
        </p>

        {/* 요약 통계 */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-white text-center">
              <div className="text-3xl font-extrabold">{totalCount}</div>
              <div className="text-sm text-amber-100 mt-1">전체 충전소</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-extrabold text-amber-600">
                {typeCounts.fast}
              </div>
              <div className="text-sm text-gray-500 mt-1">급속 충전소</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-extrabold text-blue-600">
                {typeCounts.slow}
              </div>
              <div className="text-sm text-gray-500 mt-1">완속 충전소</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-extrabold text-green-600">
                {available24hCount}
              </div>
              <div className="text-sm text-gray-500 mt-1">24시간 운영</div>
            </div>
          </div>
        </section>

        {/* 시군구별 목록 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            시군구별 충전소 현황
          </h2>
          <div className="space-y-4">
            {region.sigungu.map((sg) => {
              const sgTypeCounts = getChargerTypeCount(sg.chargers);
              const sg24h = sg.chargers.filter((c) => c.available24h).length;
              return (
                <Link
                  key={sg.code}
                  href={`/ev-charger/${sidoToSlug(region.sido)}/${sigunguToSlug(sg.name)}`}
                  className="block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {sg.name}
                    </h3>
                    <span className="text-sm text-amber-600 font-semibold">
                      {sg.chargers.length}개 충전소 →
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      급속 {sgTypeCounts.fast}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      완속 {sgTypeCounts.slow}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      24시간 {sg24h}
                    </span>
                  </div>
                  {/* 운영사 목록 */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {Array.from(
                      new Set(sg.chargers.map((c) => c.operator))
                    ).map((op) => (
                      <span
                        key={op}
                        className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded-full"
                      >
                        {op}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0">Q.</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">
                  <span className="text-gray-400 font-bold">A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 관련 페이지 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            관련 페이지
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                emoji: '⚡',
                title: '전국 충전소 목록',
                href: '/ev-charger',
              },
              {
                emoji: '🔋',
                title: '전기차 보조금 가이드',
                href: '/guide/ev-subsidy',
              },
              {
                emoji: '⛽',
                title: '유류비 계산기',
                href: '/calculator/fuel-cost',
              },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-3xl mb-2">{p.emoji}</div>
                <div className="font-semibold text-gray-900">{p.title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
