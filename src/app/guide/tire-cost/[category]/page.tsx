import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import { getTireCategory, getAllTireSlugs } from '@/lib/tire-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getAllTireSlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const data = getTireCategory(category);
  if (!data) return {};

  const title = `${data.fullName} 브랜드별 가격 비교 (2026) - ${data.models} 규격·추천`;
  const description = `${data.models}에 맞는 ${data.inchRange} 타이어 브랜드별 가격을 비교했습니다. 한국타이어·금호·미쉐린·콘티넨탈 등 ${data.brands.length}개 브랜드의 짝당·4짝 가격, 성능, 추천 제품을 정리했습니다.`;

  return {
    title,
    description,
    keywords: [
      `${data.name} 타이어 가격`, `${data.name} 타이어 브랜드 비교`, `${data.name} 타이어 추천`,
      ...data.models.split(', ').flatMap((m) => [`${m} 타이어 가격`, `${m} 타이어 추천`]),
      `${data.inchRange} 타이어 가격`, '타이어 브랜드 비교', '타이어 가격 비교',
    ],
    alternates: { canonical: `${BASE_URL}/guide/tire-cost/${data.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/guide/tire-cost/${data.slug}`,
      type: 'website',
    },
  };
}

export default async function TireBrandComparePage({ params }: PageProps) {
  const { category } = await params;
  const data = getTireCategory(category);
  if (!data) notFound();

  // 가격순 정렬 (국산 먼저)
  const domesticBrands = data.brands.filter((b) => b.origin === '국산');
  const importBrands = data.brands.filter((b) => b.origin !== '국산');

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${data.fullName} 브랜드별 가격 비교 (2026)`,
          description: `${data.models}에 맞는 타이어 브랜드별 가격, 성능, 추천 제품을 비교했습니다.`,
          url: `${BASE_URL}/guide/tire-cost/${data.slug}`,
          publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '타이어 교체 비용', item: `${BASE_URL}/guide/tire-cost` },
            { '@type': 'ListItem', position: 3, name: `${data.name} 타이어`, item: `${BASE_URL}/guide/tire-cost/${data.slug}` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href="/guide/tire-cost" className="hover:text-amber-600">타이어 교체 비용</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{data.name} 타이어</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{data.name} 타이어</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {data.fullName} 브랜드별 가격 비교
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            {data.description}
          </p>
        </section>

        {/* 핵심 요약 카드 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">대표 모델</p>
              <p className="text-sm font-bold text-gray-900">{data.models}</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">규격</p>
              <p className="text-sm font-bold text-gray-900">{data.inchRange}</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">국산 4짝</p>
              <p className="text-sm font-bold text-amber-600">{data.domesticPrice4}</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">수입 4짝</p>
              <p className="text-sm font-bold text-red-500">{data.importPrice4}</p>
            </div>
          </div>
        </section>

        {/* ===== 국산 브랜드 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">국산 브랜드 비교 - {data.name} 타이어</h2>
          <p className="text-sm text-gray-500 mb-6">{data.sizeRange} 기준 짝당·4짝 가격</p>
          <div className="space-y-4">
            {domesticBrands.map((b, i) => (
              <div key={b.product} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        {i === 0 && <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">BEST</span>}
                        <h3 className="text-lg font-bold text-gray-900">{b.brand}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{b.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">짝당</p>
                      <p className="text-lg font-bold text-amber-600">{b.price1}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">4짝 가격</p>
                      <p className="text-sm font-bold text-gray-900">{b.price4}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">내마모 지수</p>
                      <p className="text-sm font-bold text-gray-900">{b.treadwear}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">웻 그립</p>
                      <p className="text-sm font-bold text-gray-900">{b.wetGrip}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">소음</p>
                      <p className="text-sm font-bold text-gray-900">{b.noise}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-green-600 font-medium">장점:</span>
                      <span className="text-gray-600 ml-1">{b.strength}</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-medium">단점:</span>
                      <span className="text-gray-600 ml-1">{b.weakness}</span>
                    </div>
                  </div>

                  {/* 별점 */}
                  <div className="mt-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={`text-sm ${star <= Math.round(b.rating) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{b.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 수입 브랜드 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">수입 브랜드 비교 - {data.name} 타이어</h2>
          <p className="text-sm text-gray-500 mb-6">{data.sizeRange} 기준 짝당·4짝 가격</p>
          <div className="space-y-4">
            {importBrands.map((b, i) => (
              <div key={b.product} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        {i === 0 && <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">TOP</span>}
                        <h3 className="text-lg font-bold text-gray-900">{b.brand}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{b.product} ({b.origin})</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">짝당</p>
                      <p className="text-lg font-bold text-red-500">{b.price1}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">4짝 가격</p>
                      <p className="text-sm font-bold text-gray-900">{b.price4}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">내마모 지수</p>
                      <p className="text-sm font-bold text-gray-900">{b.treadwear}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">웻 그립</p>
                      <p className="text-sm font-bold text-gray-900">{b.wetGrip}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">소음</p>
                      <p className="text-sm font-bold text-gray-900">{b.noise}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-green-600 font-medium">장점:</span>
                      <span className="text-gray-600 ml-1">{b.strength}</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-medium">단점:</span>
                      <span className="text-gray-600 ml-1">{b.weakness}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={`text-sm ${star <= Math.round(b.rating) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{b.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 전체 비교 테이블 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.name} 타이어 전체 비교표</h2>
          <p className="text-sm text-gray-500 mb-6">{data.sizeRange} 기준</p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-left font-semibold">제품명</th>
                    <th className="px-4 py-3 text-right font-semibold">짝당</th>
                    <th className="px-4 py-3 text-right font-semibold">4짝</th>
                    <th className="px-4 py-3 text-center font-semibold">내마모</th>
                    <th className="px-4 py-3 text-center font-semibold">웻그립</th>
                    <th className="px-4 py-3 text-center font-semibold">소음</th>
                    <th className="px-4 py-3 text-center font-semibold">평점</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.brands.map((b) => (
                    <tr key={b.product} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{b.brand}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{b.product}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{b.price1}</td>
                      <td className="px-4 py-3 text-right font-medium whitespace-nowrap">{b.price4}</td>
                      <td className="px-4 py-3 text-center">{b.treadwear}</td>
                      <td className="px-4 py-3 text-center">{b.wetGrip}</td>
                      <td className="px-4 py-3 text-center">{b.noise}</td>
                      <td className="px-4 py-3 text-center font-medium text-amber-600">{b.rating.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 내마모 지수(Treadwear): 숫자가 높을수록 수명이 김 / 웻 그립: A가 최상급 / 소음: 숫자가 낮을수록 정숙</p>
        </section>

        {/* ===== 교체 주기 & 팁 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.name} 타이어 교체 주기 및 팁</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-3">교체 주기</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>주행거리 기준</span>
                  <span className="font-bold text-gray-900">{data.cycle}</span>
                </div>
                <div className="flex justify-between">
                  <span>연수 기준</span>
                  <span className="font-bold text-gray-900">{data.years}</span>
                </div>
                <div className="flex justify-between">
                  <span>규격</span>
                  <span className="font-bold text-gray-900">{data.sizeRange}</span>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-5">
              <h3 className="font-bold text-amber-800 mb-3">선택 팁</h3>
              <p className="text-sm text-amber-700 leading-relaxed">{data.tip}</p>
            </div>
          </div>
        </section>

        {/* ===== 관련 차량 유지비 ===== */}
        {data.relatedSlugs.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.name} 차량별 유지비 상세</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {data.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/models/${slug}/maintenance`}
                  className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-amber-200 transition-all group"
                >
                  <span className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{slug.replace(/-/g, ' ').toUpperCase()}</span>
                  <p className="text-[10px] text-gray-400 mt-1">유지비 상세 →</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.name} 타이어 자주 묻는 질문</h2>
          <div className="space-y-4">
            {data.faq.map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-amber-600 transition-colors">
                  {item.q}
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ===== 다른 차종 타이어 보기 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">다른 차종 타이어 비교</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { slug: 'compact', name: '경차', emoji: '🚗' },
              { slug: 'subcompact', name: '준중형', emoji: '🚙' },
              { slug: 'midsize', name: '중형 세단', emoji: '🚘' },
              { slug: 'fullsize', name: '대형 세단', emoji: '🚗' },
              { slug: 'suv', name: 'SUV', emoji: '🚙' },
              { slug: 'ev', name: '전기차', emoji: '⚡' },
              { slug: 'imported', name: '수입차', emoji: '🔷' },
            ]
              .filter((c) => c.slug !== data.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/guide/tire-cost/${c.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-amber-200 transition-all group"
                >
                  <div className="text-xl mb-1">{c.emoji}</div>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{c.name} 타이어</span>
                </Link>
              ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              타이어 교체 비용 종합 가이드
            </h2>
            <p className="text-amber-100 mb-6">
              차종별 교체 비용, 교체 주기, 공임비, 절약 방법을 한눈에 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/tire-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                타이어 교체 비용 총정리
              </Link>
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                차종별 유지비 비교
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
