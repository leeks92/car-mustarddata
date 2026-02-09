import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import {
  getChargerById,
  getAllChargerIds,
  sidoToSlug,
  sigunguToSlug,
} from '@/lib/ev-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllChargerIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const result = getChargerById(id);
  if (!result) return {};
  const { charger, sigungu, region } = result;

  return {
    title: `${charger.name} - ${charger.chargerType} ${charger.output} | ${region.sido} ${sigungu.name}`,
    description: `${charger.name} 전기차 충전소 상세 정보입니다. ${charger.address}에 위치한 ${charger.chargerType} ${charger.output} 충전기로, ${charger.operator}에서 운영합니다. 충전 요금: ${charger.fee}`,
    keywords: [
      charger.name,
      `${sigungu.name} 전기차 충전소`,
      `${charger.operator} 충전소`,
      charger.chargerType === '급속' ? '급속 충전소' : '완속 충전소',
      ...charger.connectorTypes,
    ],
    alternates: {
      canonical: `${BASE_URL}/ev-charger/station/${charger.id}`,
    },
    openGraph: {
      title: `${charger.name} - ${charger.chargerType} ${charger.output}`,
      description: `${charger.address} | ${charger.operator} | ${charger.fee}`,
      url: `${BASE_URL}/ev-charger/station/${charger.id}`,
    },
  };
}

export default async function StationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const result = getChargerById(id);
  if (!result) notFound();
  const { charger, sigungu, region } = result;

  // 같은 시군구 내 다른 충전소 (최대 4개)
  const nearbyChargers = sigungu.chargers
    .filter((c) => c.id !== charger.id)
    .slice(0, 4);

  const faqItems = [
    {
      q: `${charger.name} 충전 요금은 얼마인가요?`,
      a: `${charger.name}의 충전 요금은 ${charger.fee}입니다. ${charger.operator}에서 운영하는 ${charger.chargerType} ${charger.output} 충전기입니다.`,
    },
    {
      q: `${charger.name}은 24시간 이용 가능한가요?`,
      a: charger.available24h
        ? `네, ${charger.name}은 24시간 이용 가능합니다.`
        : `${charger.name}은 24시간 운영이 아닙니다. 운영 시간은 현장 안내를 확인하세요.`,
    },
    {
      q: `${charger.name}에서 사용 가능한 커넥터는 무엇인가요?`,
      a: `${charger.name}에서는 ${charger.connectorTypes.join(', ')} 커넥터를 사용할 수 있습니다.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: charger.name,
          description: `${charger.chargerType} ${charger.output} 전기차 충전소`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: charger.address,
            addressLocality: sigungu.name,
            addressRegion: region.sido,
            addressCountry: 'KR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: charger.lat,
            longitude: charger.lng,
          },
          url: `${BASE_URL}/ev-charger/station/${charger.id}`,
          openingHours: charger.available24h ? 'Mo-Su 00:00-24:00' : undefined,
          priceRange: charger.fee,
          category: '전기차 충전소',
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
          <Link
            href={`/ev-charger/${sidoToSlug(region.sido)}/${sigunguToSlug(sigungu.name, sidoToSlug(region.sido))}`}
            className="hover:text-amber-600"
          >
            {sigungu.name}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{charger.name}</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {charger.name}
          </h1>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${
              charger.chargerType === '급속'
                ? 'bg-amber-100 text-amber-700'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {charger.chargerType}
          </span>
        </div>
        <p className="text-lg text-gray-600 mb-10">{charger.address}</p>

        {/* 상세 정보 카드 */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-6 border-b sm:border-b-0 sm:border-r border-gray-100">
                <h2 className="text-sm font-semibold text-gray-400 mb-4">
                  충전기 정보
                </h2>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">충전 타입</dt>
                    <dd className="text-sm font-semibold text-gray-900">
                      {charger.chargerType}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">충전 출력</dt>
                    <dd className="text-sm font-semibold text-gray-900">
                      {charger.output}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">커넥터</dt>
                    <dd className="text-sm font-semibold text-gray-900">
                      {charger.connectorTypes.join(', ')}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">충전 요금</dt>
                    <dd className="text-sm font-semibold text-amber-600">
                      {charger.fee}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="p-6">
                <h2 className="text-sm font-semibold text-gray-400 mb-4">
                  운영 정보
                </h2>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">운영 기관</dt>
                    <dd className="text-sm font-semibold text-gray-900">
                      {charger.operator}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">24시간 운영</dt>
                    <dd
                      className={`text-sm font-semibold ${charger.available24h ? 'text-green-600' : 'text-gray-400'}`}
                    >
                      {charger.available24h ? '예' : '아니오'}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">주차비</dt>
                    <dd
                      className={`text-sm font-semibold ${charger.parkingFree ? 'text-green-600' : 'text-gray-900'}`}
                    >
                      {charger.parkingFree ? '무료' : '유료'}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">위치</dt>
                    <dd className="text-sm text-gray-900">
                      {region.sido} {sigungu.name}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 충전 요금 예시 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            충전 비용 예시
          </h2>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">
                  20kWh 충전 시
                </div>
                <div className="text-2xl font-extrabold text-amber-700">
                  {charger.fee.includes('292.9')
                    ? '약 5,858원'
                    : charger.fee.includes('324.4')
                      ? '약 6,488원'
                      : charger.fee.includes('310')
                        ? '약 6,200원'
                        : '-'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  약 100~130km 주행 가능
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">
                  40kWh 충전 시
                </div>
                <div className="text-2xl font-extrabold text-amber-700">
                  {charger.fee.includes('292.9')
                    ? '약 11,716원'
                    : charger.fee.includes('324.4')
                      ? '약 12,976원'
                      : charger.fee.includes('310')
                        ? '약 12,400원'
                        : '-'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  약 200~260km 주행 가능
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">
                  60kWh 충전 시
                </div>
                <div className="text-2xl font-extrabold text-amber-700">
                  {charger.fee.includes('292.9')
                    ? '약 17,574원'
                    : charger.fee.includes('324.4')
                      ? '약 19,464원'
                      : charger.fee.includes('310')
                        ? '약 18,600원'
                        : '-'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  약 300~400km 주행 가능
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 근처 충전소 */}
        {nearbyChargers.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sigungu.name} 인근 충전소
            </h2>
            <div className="space-y-3">
              {nearbyChargers.map((nc) => (
                <Link
                  key={nc.id}
                  href={`/ev-charger/station/${nc.id}`}
                  className="flex items-center justify-between bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 truncate">
                        {nc.name}
                      </span>
                      <span
                        className={`shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full ${
                          nc.chargerType === '급속'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {nc.chargerType}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{nc.address}</p>
                  </div>
                  <span className="text-sm text-amber-600 font-semibold shrink-0 ml-4">
                    {nc.output}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

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
                emoji: '🔋',
                title: '전기차 보조금 가이드',
                href: '/guide/ev-subsidy',
              },
              {
                emoji: '📋',
                title: '취등록세 계산기',
                href: '/calculator/registration-tax',
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
