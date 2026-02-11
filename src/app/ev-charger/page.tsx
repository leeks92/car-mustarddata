import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import {
  getRegionSummaries,
  getTotalChargerCount,
} from '@/lib/ev-data';

export const metadata: Metadata = {
  title: '전기차 충전소 찾기 - 전국 충전소 위치, 요금, 운영시간',
  description:
    '전국 전기차 충전소 위치와 요금 정보를 한눈에 확인하세요. 시도별 급속·완속 충전소 현황, 24시간 운영 충전소, 무료 주차 충전소 정보를 제공합니다.',
  keywords: [
    '전기차 충전소',
    '전기차 충전소 찾기',
    '급속 충전소',
    '전기차 충전 요금',
    '전기차 충전소 위치',
    'EV 충전소',
    '전기차 충전소 지도',
  ],
  alternates: { canonical: `${BASE_URL}/ev-charger` },
  openGraph: {
    title: '전기차 충전소 찾기 - 전국 충전소 위치, 요금, 운영시간',
    description:
      '전국 전기차 충전소 위치와 요금 정보를 한눈에 확인하세요.',
    url: `${BASE_URL}/ev-charger`,
  },
};

const faqItems = [
  {
    q: '전기차 충전 요금은 얼마인가요?',
    a: '환경부 급속 충전기 기준 kWh당 324.4원, 완속 충전기 기준 kWh당 292.9원입니다. 민간 충전 사업자(한국전력, 차지비, 에버온 등)는 사업자별로 요금이 상이합니다.',
  },
  {
    q: '급속 충전과 완속 충전의 차이는 무엇인가요?',
    a: '급속 충전은 50kW~350kW 출력으로 30분~1시간 내에 80% 충전이 가능합니다. 완속 충전은 7kW 출력으로 완전 충전까지 6~8시간이 소요되며, 주로 야간이나 장시간 주차 시 이용합니다.',
  },
  {
    q: '전기차 충전기 커넥터 종류는 어떤 것이 있나요?',
    a: 'DC콤보(CCS1)는 현대·기아 등 국산차에 주로 사용됩니다. CHAdeMO는 일본차(닛산 리프 등)에 사용됩니다. AC3상은 르노 등 일부 차종에 사용되며, AC완속은 대부분의 전기차에서 호환됩니다.',
  },
  {
    q: '24시간 운영 충전소는 어디서 찾나요?',
    a: '환경부 운영 공공 충전소 대부분은 24시간 운영됩니다. 본 사이트에서 지역별 충전소 목록에서 24시간 운영 여부를 확인할 수 있습니다.',
  },
];

export default function EVChargerMainPage() {
  const regionSummaries = getRegionSummaries();
  const totalCount = getTotalChargerCount();
  const totalFast = regionSummaries
    ? regionSummaries.reduce((s, r) => s + r.fastCount, 0)
    : 0;
  const totalSlow = regionSummaries
    ? regionSummaries.reduce((s, r) => s + r.slowCount, 0)
    : 0;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '전기차 충전소 찾기',
          description:
            '전국 전기차 충전소 위치와 요금 정보를 한눈에 확인하세요.',
          url: `${BASE_URL}/ev-charger`,
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
          <span className="text-gray-900">전기차 충전소</span>
        </nav>

        {/* 히어로 */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          전기차 충전소 찾기
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          전국 {totalCount.toLocaleString()}개 충전소의 위치, 요금, 운영시간
          정보를 지역별로 확인하세요.
        </p>

        {/* 요약 통계 */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-white text-center">
              <div className="text-3xl font-extrabold">{totalCount}</div>
              <div className="text-sm text-amber-100 mt-1">전체 충전소</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-extrabold text-gray-900">
                {regionSummaries?.length ?? 0}
              </div>
              <div className="text-sm text-gray-500 mt-1">지역(시도)</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-extrabold text-amber-600">
                {totalFast}
              </div>
              <div className="text-sm text-gray-500 mt-1">급속 충전소</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-extrabold text-blue-600">
                {totalSlow}
              </div>
              <div className="text-sm text-gray-500 mt-1">완속 충전소</div>
            </div>
          </div>
        </section>

        {/* 지역별 목록 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            지역별 전기차 충전소
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(regionSummaries ?? []).map((region) => (
              <Link
                key={region.sidoCode}
                href={`/ev-charger/${region.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {region.sido}
                  </h3>
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    총 <span className="font-semibold text-gray-900">{region.chargerCount}개</span>{' '}
                    충전소
                  </p>
                  <p>
                    급속{' '}
                    <span className="font-semibold text-amber-600">
                      {region.fastCount}
                    </span>
                    개 · 완속{' '}
                    <span className="font-semibold text-blue-600">
                      {region.slowCount}
                    </span>
                    개
                  </p>
                  <p className="text-gray-400">
                    {region.sigunguCount}개 시군구
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 충전 요금 안내 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            전기차 충전 요금 안내
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-900">
                    충전 유형
                  </th>
                  <th className="text-right px-5 py-3 text-sm font-semibold text-gray-900">
                    요금 (kWh당)
                  </th>
                  <th className="text-right px-5 py-3 text-sm font-semibold text-gray-900">
                    충전 시간 (80%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-5 py-3 text-sm text-gray-900">
                    급속 충전 (50kW)
                  </td>
                  <td className="px-5 py-3 text-sm text-right font-semibold text-gray-900">
                    324.4원
                  </td>
                  <td className="px-5 py-3 text-sm text-right text-gray-600">
                    약 50분~1시간
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-5 py-3 text-sm text-gray-900">
                    급속 충전 (100kW)
                  </td>
                  <td className="px-5 py-3 text-sm text-right font-semibold text-gray-900">
                    324.4원
                  </td>
                  <td className="px-5 py-3 text-sm text-right text-gray-600">
                    약 25~40분
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-5 py-3 text-sm text-gray-900">
                    완속 충전 (7kW)
                  </td>
                  <td className="px-5 py-3 text-sm text-right font-semibold text-gray-900">
                    292.9원
                  </td>
                  <td className="px-5 py-3 text-sm text-right text-gray-600">
                    약 6~8시간
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 환경부 공공충전소 기준이며, 민간 사업자 요금은 상이할 수 있습니다.
          </p>
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
                emoji: '🏷️',
                title: '자동차세 계산기',
                href: '/calculator/car-tax',
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
