import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '차종별 타이어 교체 비용·주기 총정리 (2026) - 규격·브랜드·절약 방법',
  description:
    '경차부터 수입차까지 차종별 타이어 교체 비용, 교체 주기, 규격, 브랜드별 가격을 비교했습니다. 타이어 4짝 교체 비용과 공임비, 절약 방법까지 총정리.',
  keywords: [
    '타이어 교체 비용', '타이어 4짝 가격', '타이어 교체 주기', '차종별 타이어 가격',
    '타이어 공임비', '타이어 브랜드 비교', '모닝 타이어 가격', '쏘나타 타이어 가격',
    '벤츠 타이어 가격', '타이어 규격', '타이어 교체 시기', '타이어 수명',
    '타이어 마모 한계', '타이어 가격 비교',
  ],
  alternates: { canonical: `${BASE_URL}/guide/tire-cost` },
  openGraph: {
    title: '차종별 타이어 교체 비용·주기 총정리 (2026)',
    description: '경차부터 수입차까지 타이어 교체 비용, 교체 주기, 절약 방법을 비교했습니다.',
    url: `${BASE_URL}/guide/tire-cost`,
    type: 'website',
  },
};

// 차종별 타이어 데이터
const tireByCategory = [
  {
    category: '경차',
    models: '모닝, 레이',
    size: '155/65R14 ~ 175/65R14',
    inch: '14인치',
    domestic4: '28~40만 원',
    import4: '40~56만 원',
    cycle: '40,000~50,000km',
    years: '4~5년',
    note: '가벼운 차체로 마모가 느린 편',
    slugs: ['morning', 'ray'],
  },
  {
    category: '준중형',
    models: '아반떼, K3',
    size: '205/55R16 ~ 225/45R17',
    inch: '16~17인치',
    domestic4: '36~52만 원',
    import4: '52~80만 원',
    cycle: '40,000~50,000km',
    years: '3~5년',
    note: '가장 보편적인 규격, 가격 경쟁 치열',
    slugs: ['avante', 'k3'],
  },
  {
    category: '중형 세단',
    models: '쏘나타, K5',
    size: '215/55R17 ~ 235/45R18',
    inch: '17~18인치',
    domestic4: '44~64만 원',
    import4: '64~100만 원',
    cycle: '35,000~50,000km',
    years: '3~5년',
    note: '17인치 이상, 승차감과 정숙성 중요',
    slugs: ['sonata', 'k5'],
  },
  {
    category: '대형 세단',
    models: '그랜저, K8',
    size: '235/45R18 ~ 245/40R19',
    inch: '18~19인치',
    domestic4: '56~80만 원',
    import4: '80~120만 원',
    cycle: '30,000~45,000km',
    years: '3~4년',
    note: '대구경 타이어, 가격대 높음',
    slugs: ['grandeur', 'k8'],
  },
  {
    category: 'SUV',
    models: '투싼, 쏘렌토, 팰리세이드',
    size: '235/55R19 ~ 265/45R20',
    inch: '19~20인치',
    domestic4: '60~88만 원',
    import4: '88~130만 원',
    cycle: '35,000~50,000km',
    years: '3~5년',
    note: '하중이 높아 내구성 중요, SUV 전용 제품 선택',
    slugs: ['tucson', 'sorento', 'palisade'],
  },
  {
    category: '전기차',
    models: '아이오닉5, EV6, 테슬라 모델Y',
    size: '235/55R19 ~ 255/45R20',
    inch: '19~20인치',
    domestic4: '64~96만 원',
    import4: '96~140만 원',
    cycle: '30,000~40,000km',
    years: '3~4년',
    note: '차체가 무거워 마모가 빠름, EV 전용 타이어 추천',
    slugs: ['ioniq5', 'ev6', 'tesla-model-y'],
  },
  {
    category: '수입 세단',
    models: '벤츠 E, BMW 5, 아우디 A6',
    size: '245/40R19 ~ 275/35R20',
    inch: '19~20인치',
    domestic4: '72~100만 원',
    import4: '100~160만 원',
    cycle: '30,000~40,000km',
    years: '3~4년',
    note: 'OE 타이어 가격이 높음, 런플랫 장착 차량 주의',
    slugs: ['benz-e-class', 'bmw-5-series', 'audi-a6'],
  },
  {
    category: '수입 엔트리',
    models: '벤츠 C, BMW 3, 아우디 A4',
    size: '225/45R18 ~ 245/40R19',
    inch: '18~19인치',
    domestic4: '60~84만 원',
    import4: '84~130만 원',
    cycle: '30,000~45,000km',
    years: '3~4년',
    note: '국산 프리미엄 타이어로 대체 가능',
    slugs: ['benz-c-class', 'bmw-3-series', 'audi-a4'],
  },
];

// 브랜드별 가격 비교
const tireBrands = [
  { brand: '한국타이어', origin: '국산', range: '짝당 8~20만 원', strength: '내구성, 정숙성', popular: '벤투스 S2 AS, 키너지 GT', tier: '프리미엄 국산' },
  { brand: '금호타이어', origin: '국산', range: '짝당 7~17만 원', strength: '가성비, 승차감', popular: '마제스티9, 솔루스 TA31', tier: '가성비' },
  { brand: '넥센타이어', origin: '국산', range: '짝당 7~16만 원', strength: '가성비, SUV 전용', popular: '엔페라 AU7, 로디안 GTX', tier: '가성비' },
  { brand: '미쉐린', origin: '프랑스', range: '짝당 15~35만 원', strength: '정숙성, 승차감, 수명', popular: '프라이머시4, 파일럿 스포츠5', tier: '프리미엄' },
  { brand: '콘티넨탈', origin: '독일', range: '짝당 14~30만 원', strength: '제동력, 고속 안정성', popular: 'UC6, 스포츠컨택트7', tier: '프리미엄' },
  { brand: '브리지스톤', origin: '일본', range: '짝당 13~28만 원', strength: '내구성, 연비', popular: '투란자 T005, 에코피아', tier: '프리미엄' },
];

// 교체 주기 판단 기준
const replacementCriteria = [
  { criteria: '주행거리', standard: '40,000~50,000km', detail: '일반 승용차 기준. SUV·전기차는 30,000~40,000km로 더 짧음' },
  { criteria: '사용 연수', standard: '제조 후 4~5년', detail: '주행거리와 무관하게 고무 경화가 진행됨. 타이어 측면 DOT 코드로 제조일 확인' },
  { criteria: '트레드 깊이', standard: '1.6mm 이하 시 교체', detail: '법적 최소 기준. 안전을 위해 3mm 이하에서 교체 권장' },
  { criteria: '편마모', standard: '한쪽만 심하게 닳은 경우', detail: '휠 얼라인먼트 불량 시 발생. 교체 후 얼라인먼트 점검 필수' },
  { criteria: '균열·손상', standard: '측면 균열, 못 박힘 등', detail: '측면 손상은 수리 불가, 즉시 교체 필요' },
];

// 공임비
const laborCosts = [
  { size: '14~16인치 (경차·소형)', perTire: '1~1.5만 원', fourTires: '4~6만 원' },
  { size: '17~18인치 (중형)', perTire: '1.5~2만 원', fourTires: '6~8만 원' },
  { size: '19~20인치 (대형·SUV)', perTire: '2~2.5만 원', fourTires: '8~10만 원' },
  { size: '런플랫 타이어', perTire: '2.5~4만 원', fourTires: '10~16만 원' },
];

// FAQ
const faqItems = [
  {
    q: '타이어 4짝 교체 비용은 평균 얼마인가요?',
    a: '차종과 브랜드에 따라 다릅니다. 경차는 국산 기준 28~40만 원, 중형 세단은 44~64만 원, SUV는 60~88만 원, 수입차는 72~160만 원입니다. 공임비(4~10만 원)가 별도로 추가됩니다.',
  },
  {
    q: '타이어 교체 주기는 얼마나 되나요?',
    a: '일반적으로 주행거리 40,000~50,000km 또는 제조 후 4~5년 중 먼저 도래하는 시점에 교체합니다. 전기차와 SUV는 차체가 무거워 30,000~40,000km로 더 짧습니다.',
  },
  {
    q: '타이어 교체 비용을 줄이는 방법은?',
    a: '온라인에서 타이어를 구매하고 공임나라 등 장착 전문점에서 장착하면 20~30% 절약됩니다. 국산 프리미엄 브랜드(한국타이어, 금호)는 수입 브랜드 대비 30~40% 저렴하면서 품질도 우수합니다.',
  },
  {
    q: '전기차 타이어가 더 비싼 이유는?',
    a: '전기차는 배터리로 인해 차체가 무겁고, 높은 토크가 타이어에 부담을 줍니다. EV 전용 타이어는 하중지수가 높고 소음이 적은 특수 설계로, 일반 타이어보다 20~30% 비쌉니다.',
  },
  {
    q: '런플랫 타이어는 일반 타이어로 교체해도 되나요?',
    a: 'BMW 등 런플랫 장착 차량은 스페어타이어가 없으므로 런플랫 유지를 권장합니다. 일반 타이어로 교체할 경우 별도 응급 키트나 스페어를 준비해야 합니다.',
  },
  {
    q: '타이어 위치 교환은 얼마나 자주 해야 하나요?',
    a: '10,000~15,000km마다 위치 교환(로테이션)을 하면 편마모를 방지하고 타이어 수명을 20~30% 연장할 수 있습니다. 비용은 2~4만 원 수준입니다.',
  },
];

export default function TireCostGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '차종별 타이어 교체 비용·주기 총정리 (2026)',
          description: '경차부터 수입차까지 타이어 교체 비용, 교체 주기, 브랜드별 가격을 비교했습니다.',
          url: `${BASE_URL}/guide/tire-cost`,
          publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL },
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
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '가이드', item: `${BASE_URL}/guide` },
            { '@type': 'ListItem', position: 3, name: '타이어 교체 비용', item: `${BASE_URL}/guide/tire-cost` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">타이어 교체 비용·주기</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">유지비 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            차종별 타이어 교체 비용·주기 총정리
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            경차부터 수입차까지 차종별 타이어 규격, 4짝 교체 비용, 교체 주기를 비교했습니다.
            브랜드별 가격 차이와 공임비, 절약 방법까지 정리했습니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">경차 4짝</p>
              <p className="text-lg font-bold text-amber-600">28~40만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">중형 세단 4짝</p>
              <p className="text-lg font-bold text-amber-600">44~64만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">SUV 4짝</p>
              <p className="text-lg font-bold text-amber-600">60~88만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">수입차 4짝</p>
              <p className="text-lg font-bold text-amber-600">72~160만 원</p>
            </div>
          </div>
        </section>

        {/* ===== 차종별 브랜드 비교 바로가기 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">차종별 타이어 브랜드 비교</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { slug: 'compact', name: '경차 타이어', desc: '모닝·레이 14인치', emoji: '🚗' },
              { slug: 'subcompact', name: '준중형 타이어', desc: '아반떼·K3 16~17인치', emoji: '🚙' },
              { slug: 'midsize', name: '중형 세단 타이어', desc: '쏘나타·K5 17~18인치', emoji: '🚘' },
              { slug: 'fullsize', name: '대형 세단 타이어', desc: '그랜저·K8 18~19인치', emoji: '🚗' },
              { slug: 'suv', name: 'SUV 타이어', desc: '투싼·쏘렌토 19~20인치', emoji: '🚙' },
              { slug: 'ev', name: '전기차 타이어', desc: '아이오닉5·EV6 19~20인치', emoji: '⚡' },
              { slug: 'imported', name: '수입차 타이어', desc: '벤츠·BMW 18~20인치', emoji: '🔷' },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/guide/tire-cost/${item.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg hover:border-amber-200 transition-all group"
              >
                <div className="text-xl mb-1">{item.emoji}</div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                <p className="text-[10px] text-gray-400 mt-1">{item.desc}</p>
                <span className="text-amber-600 text-xs font-semibold mt-2 inline-block">브랜드 비교 →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== 차종별 타이어 비용 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">차종별 타이어 4짝 교체 비용 비교</h2>
          <p className="text-sm text-gray-500 mb-6">2026년 기준, 타이어 본체 가격만 표시 (공임비 별도 4~10만 원)</p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-left font-semibold">대표 모델</th>
                    <th className="px-4 py-3 text-left font-semibold">규격</th>
                    <th className="px-4 py-3 text-right font-semibold">국산 4짝</th>
                    <th className="px-4 py-3 text-right font-semibold">수입 4짝</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tireByCategory.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.category}</td>
                      <td className="px-4 py-3 text-gray-600">{row.models}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.inch}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.domestic4}</td>
                      <td className="px-4 py-3 text-right font-medium text-red-500">{row.import4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 국산: 한국타이어·금호·넥센 기준 / 수입: 미쉐린·콘티넨탈·브리지스톤 기준</p>
        </section>

        {/* ===== 차종별 교체 주기 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">차종별 타이어 교체 주기</h2>
          <p className="text-sm text-gray-500 mb-6">주행거리와 사용 연수 중 먼저 도래하는 시점에 교체</p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">주행거리 기준</th>
                    <th className="px-4 py-3 text-right font-semibold">연수 기준</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tireByCategory.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.category}</td>
                      <td className="px-4 py-3 text-right font-medium">{row.cycle}</td>
                      <td className="px-4 py-3 text-right">{row.years}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== 교체 시기 판단 기준 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">타이어 교체 시기 판단 기준 5가지</h2>
          <div className="space-y-3">
            {replacementCriteria.map((item, i) => (
              <div key={item.criteria} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{item.criteria}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{item.standard}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 타이어 측면의 DOT 코드 마지막 4자리가 제조 주차와 연도입니다. 예: &quot;2524&quot; = 2024년 25주차 생산. 제조 후 5년이 넘으면 외관이 멀쩡해도 교체를 고려하세요.
          </div>
        </section>

        {/* ===== 브랜드별 가격 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">타이어 브랜드별 가격·특징 비교</h2>
          <p className="text-sm text-gray-500 mb-6">17인치 중형 세단 기준 짝당 가격</p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-left font-semibold">원산지</th>
                    <th className="px-4 py-3 text-right font-semibold">짝당 가격</th>
                    <th className="px-4 py-3 text-left font-semibold">강점</th>
                    <th className="px-4 py-3 text-left font-semibold">인기 제품</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tireBrands.map((row) => (
                    <tr key={row.brand} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.brand}</td>
                      <td className="px-4 py-3 text-gray-600">{row.origin}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.range}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.strength}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.popular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 국산 프리미엄 라인(한국타이어 벤투스, 금호 마제스티)은 수입 중급 제품과 비슷한 성능을 30~40% 저렴한 가격에 제공</p>
        </section>

        {/* ===== 공임비 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">타이어 교체 공임비 (2026년 기준)</h2>
          <p className="text-sm text-gray-500 mb-6">타이어 탈착 + 밸런스 조정 기준. 휠 얼라인먼트는 별도</p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">타이어 크기</th>
                    <th className="px-4 py-3 text-right font-semibold">짝당 공임</th>
                    <th className="px-4 py-3 text-right font-semibold">4짝 공임</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {laborCosts.map((row) => (
                    <tr key={row.size} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.size}</td>
                      <td className="px-4 py-3 text-right font-medium">{row.perTire}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.fourTires}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>• <strong>추가 비용:</strong> TPMS 센서 리셋 1~2만 원, 폐타이어 처리비 짝당 3,000~5,000원</p>
            <p>• <strong>휠 얼라인먼트:</strong> 4~8만 원 (교체 시 함께 하면 주행 안정성 향상)</p>
          </div>
        </section>

        {/* ===== 절약 방법 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">타이어 교체 비용 절약 방법</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '온라인 구매 + 장착점 이용', desc: '다나와·네이버쇼핑에서 최저가 구매 후 공임나라·타이어뱅크에서 장착하면 20~30% 절약', icon: '🛒', saving: '20~30%' },
              { title: '국산 프리미엄 브랜드 선택', desc: '한국타이어 벤투스, 금호 마제스티 등은 수입 브랜드 대비 30~40% 저렴하면서 품질 우수', icon: '🇰🇷', saving: '30~40%' },
              { title: '위치 교환(로테이션)', desc: '10,000~15,000km마다 위치 교환하면 편마모 방지, 타이어 수명 20~30% 연장', icon: '🔄', saving: '수명 +30%' },
              { title: '코스트코·행사 기간 활용', desc: '코스트코는 4짝 구매 시 무료 장착 + 5년 펑크 수리. 행사 시 상품권 최대 14만 원 혜택', icon: '🏷️', saving: '장착비 무료' },
              { title: '적정 공기압 유지', desc: '월 1회 공기압 점검. 적정 공기압 유지 시 타이어 수명 10~15% 연장, 연비도 3~5% 향상', icon: '🔧', saving: '수명 +15%' },
              { title: '2짝씩 교체 고려', desc: '전륜·후륜 마모 차이가 있으면 2짝씩 교체 가능. 같은 축에는 동일 제품 장착 필수', icon: '💡', saving: '비용 50%↓' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{tip.icon}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{tip.saving}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 차량별 유지비 링크 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">차량별 유지비 상세 보기</h2>
          <p className="text-sm text-gray-500 mb-4">타이어 비용을 포함한 차량별 월간 유지비를 확인하세요</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { slug: 'morning', name: '모닝', emoji: '🚗' },
              { slug: 'avante', name: '아반떼', emoji: '🚙' },
              { slug: 'sonata', name: '쏘나타', emoji: '🚘' },
              { slug: 'grandeur', name: '그랜저', emoji: '🚗' },
              { slug: 'tucson', name: '투싼', emoji: '🚙' },
              { slug: 'palisade', name: '팰리세이드', emoji: '🚙' },
              { slug: 'ioniq5', name: '아이오닉5', emoji: '⚡' },
              { slug: 'benz-e-class', name: '벤츠 E클래스', emoji: '🔷' },
              { slug: 'bmw-5-series', name: 'BMW 5시리즈', emoji: '🔵' },
              { slug: 'tesla-model-y', name: '테슬라 모델Y', emoji: '⚡' },
              { slug: 'volvo-xc60', name: '볼보 XC60', emoji: '🔘' },
              { slug: 'audi-a6', name: '아우디 A6', emoji: '⚪' },
            ].map((car) => (
              <Link
                key={car.slug}
                href={`/models/${car.slug}/maintenance`}
                className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-amber-200 transition-all group"
              >
                <div className="text-xl mb-1">{car.emoji}</div>
                <span className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{car.name}</span>
                <p className="text-[10px] text-gray-400 mt-1">유지비 상세 →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">타이어 교체 자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
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

        {/* ===== CTA ===== */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              내 차 유지비를 직접 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              자동차세, 유류비, 보험료, 정비비까지 한눈에 확인합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/fuel-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                유류비 계산기
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
