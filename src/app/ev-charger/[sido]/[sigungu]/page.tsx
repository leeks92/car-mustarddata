import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import {
  getSigunguByCode,
  getAllSigunguParams,
  getChargerTypeCount,
  sidoToSlug,
  sigunguToSlug,
} from '@/lib/ev-data';

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ sido: string; sigungu: string }>;
}

export async function generateStaticParams() {
  return getAllSigunguParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { sido, sigungu: sigunguSlug } = await params;
  const result = getSigunguByCode(sido, sigunguSlug);
  if (!result) return {};
  const { region, sigungu } = result;
  const typeCounts = getChargerTypeCount(sigungu.chargers);

  return {
    title: `${region.sido} ${sigungu.name} 전기차 충전소 ${sigungu.chargers.length}곳 - 위치, 요금 정보`,
    description: `${region.sido} ${sigungu.name} 전기차 충전소 ${sigungu.chargers.length}곳 정보입니다. 급속 ${typeCounts.fast}곳, 완속 ${typeCounts.slow}곳의 위치, 요금, 커넥터 타입, 운영시간을 확인하세요.`,
    keywords: [
      `${sigungu.name} 전기차 충전소`,
      `${region.sido} ${sigungu.name} 충전소`,
      `${sigungu.name} 급속 충전소`,
      `${sigungu.name} EV 충전소`,
    ],
    alternates: {
      canonical: `${BASE_URL}/ev-charger/${sidoToSlug(region.sido)}/${sigunguToSlug(sigungu.name, sidoToSlug(region.sido))}`,
    },
    openGraph: {
      title: `${region.sido} ${sigungu.name} 전기차 충전소 ${sigungu.chargers.length}곳`,
      description: `${sigungu.name} 지역 전기차 충전소 위치와 요금 정보`,
      url: `${BASE_URL}/ev-charger/${sidoToSlug(region.sido)}/${sigunguToSlug(sigungu.name, sidoToSlug(region.sido))}`,
    },
  };
}

export default async function SigunguPage({ params }: PageProps) {
  const { sido, sigungu: sigunguSlug } = await params;
  const result = getSigunguByCode(sido, sigunguSlug);
  if (!result) notFound();
  const { region, sigungu } = result;

  const typeCounts = getChargerTypeCount(sigungu.chargers);
  const available24hCount = sigungu.chargers.filter(
    (c) => c.available24h
  ).length;
  const parkingFreeCount = sigungu.chargers.filter(
    (c) => c.parkingFree
  ).length;

  // 운영사별 통계
  const operatorCounts = sigungu.chargers.reduce(
    (acc, c) => {
      acc[c.operator] = (acc[c.operator] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const faqItems = [
    {
      q: `${sigungu.name}에 전기차 충전소가 몇 개 있나요?`,
      a: `${region.sido} ${sigungu.name}에는 총 ${sigungu.chargers.length}개의 전기차 충전소가 있습니다. 급속 ${typeCounts.fast}곳, 완속 ${typeCounts.slow}곳이 운영 중입니다.`,
    },
    {
      q: `${sigungu.name} 전기차 충전 요금은 얼마인가요?`,
      a: `${sigungu.name} 지역 환경부 공공 급속 충전 요금은 kWh당 324.4원, 완속 충전 요금은 kWh당 292.9원입니다. 민간 사업자 요금은 운영사에 따라 다를 수 있습니다.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${region.sido} ${sigungu.name} 전기차 충전소`,
          description: `${sigungu.name} 전기차 충전소 ${sigungu.chargers.length}곳 정보`,
          url: `${BASE_URL}/ev-charger/${sidoToSlug(region.sido)}/${sigunguToSlug(sigungu.name, sidoToSlug(region.sido))}`,
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
          <Link
            href={`/ev-charger/${sidoToSlug(region.sido)}`}
            className="hover:text-amber-600"
          >
            {region.sido}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{sigungu.name}</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {region.sido} {sigungu.name} 전기차 충전소
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          {sigungu.name} 지역 {sigungu.chargers.length}개 전기차 충전소의
          위치, 요금, 운영시간 정보입니다.
        </p>

        {/* 요약 통계 */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-white text-center">
              <div className="text-3xl font-extrabold">
                {sigungu.chargers.length}
              </div>
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

        {/* 운영사별 현황 */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            운영사별 현황
          </h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(operatorCounts).map(([op, count]) => (
              <span
                key={op}
                className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-700"
              >
                {op}{' '}
                <span className="font-semibold text-amber-600">{count}</span>
              </span>
            ))}
          </div>
        </section>

        {/* 충전소 목록 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            충전소 목록
          </h2>
          <div className="space-y-4">
            {sigungu.chargers.map((charger) => (
              <Link
                key={charger.id}
                href={`/ev-charger/station/${charger.id}`}
                className="block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 truncate">
                        {charger.name}
                      </h3>
                      <span
                        className={`shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full ${
                          charger.chargerType === '급속'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {charger.chargerType}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {charger.address}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                      <span>⚡ {charger.output}</span>
                      <span>🏢 {charger.operator}</span>
                      <span>💰 {charger.fee}</span>
                      {charger.available24h && (
                        <span className="text-green-600">🕐 24시간</span>
                      )}
                      {charger.parkingFree && (
                        <span className="text-blue-600">🅿️ 무료주차</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {charger.connectorTypes.map((ct) => (
                        <span
                          key={ct}
                          className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded-full"
                        >
                          {ct}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-400 shrink-0">→</span>
                </div>
              </Link>
            ))}
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
                title: `${region.sido} 충전소`,
                href: `/ev-charger/${sidoToSlug(region.sido)}`,
              },
              {
                emoji: '🔋',
                title: '전기차 보조금 가이드',
                href: '/guide/ev-subsidy',
              },
              {
                emoji: '📋',
                title: '취등록세 계산기',
                href: '/calculator/registration-tax',
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
