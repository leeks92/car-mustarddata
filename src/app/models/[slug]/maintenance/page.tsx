import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import { CAR_MODELS, getCarModel, getAllSlugs } from '@/lib/car-models';
import { calculateCarTax, formatKoreanWon } from '@/lib/calculations';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarModel(slug);
  if (!car) return {};

  const shortName = car.name.split(' ').slice(1).join(' ');
  const title = `${car.name} 유지비 - 2026년 월 ${car.maintenanceMonthly} 상세 내역·절약 방법`;
  const description = `${car.name}의 월간 유지비 ${car.maintenanceMonthly}의 상세 내역을 정리했습니다. ${car.isEV ? '충전비' : '유류비'}, 보험료, 자동차세, 정비비, 소모품 교체 주기까지 총정리.`;

  return {
    title,
    description,
    keywords: [
      `${car.name} 유지비`, `${shortName} 유지비`, `${shortName} 월 유지비`,
      `${shortName} 연간 유지비`, `${shortName} ${car.isEV ? '충전비' : '유류비'}`, `${shortName} 정비비`,
      `${car.category} 유지비`, `${shortName} 소모품`, `${shortName} 연비`,
    ],
    alternates: { canonical: `${BASE_URL}/models/${car.slug}/maintenance` },
    openGraph: { title, description, url: `${BASE_URL}/models/${car.slug}/maintenance`, type: 'website' },
  };
}

export default async function MaintenanceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarModel(slug);
  if (!car) notFound();

  const shortName = car.name.split(' ').slice(1).join(' ');

  const taxResult = calculateCarTax(car.cc, 1, car.isEV ? 'ev' : 'sedan');

  // 유류비 계산
  const monthlyDistance = 1000;
  let fuelPricePerUnit = 0;
  let fuelUnit = '';
  if (car.fuelType === '휘발유') { fuelPricePerUnit = 1650; fuelUnit = 'L'; }
  else if (car.fuelType === '경유') { fuelPricePerUnit = 1500; fuelUnit = 'L'; }
  else if (car.fuelType === 'LPG') { fuelPricePerUnit = 1050; fuelUnit = 'L'; }
  else { fuelPricePerUnit = 300; fuelUnit = 'kWh'; }

  const monthlyFuelCost = Math.round((monthlyDistance / car.fuelEfficiency) * fuelPricePerUnit);
  const monthlyFuelConsumption = Math.round(monthlyDistance / car.fuelEfficiency * 10) / 10;

  const annualTax = taxResult.totalTax;
  const annualFuel = monthlyFuelCost * 12;
  const annualInsurance30s = car.insurance30s.includes('~')
    ? Math.round((parseInt(car.insurance30s.replace(/[^0-9~]/g, '').split('~')[0]) + parseInt(car.insurance30s.replace(/[^0-9~]/g, '').split('~')[1])) / 2) * 10000
    : 800000;
  const annualMaintenance = parseInt(car.maintenanceMonthly.replace(/[^0-9]/g, '')) * 10000 * 12;
  const annualTotal = annualTax + annualFuel + annualInsurance30s + annualMaintenance;

  // 소모품 교체 주기
  const consumables = car.isEV
    ? [
        { item: '타이어', cycle: '40,000~50,000km', cost: '60~100만 원', note: '전기차는 무거워 마모가 빠름' },
        { item: '와이퍼 블레이드', cycle: '6~12개월', cost: '2~5만 원', note: '시야 확보를 위해 주기적 교체' },
        { item: '에어컨 필터', cycle: '15,000~20,000km', cost: '1~3만 원', note: '실내 공기질 관리' },
        { item: '브레이크 패드', cycle: '80,000~100,000km', cost: '15~25만 원', note: '회생제동으로 마모가 적음' },
        { item: '냉각수', cycle: '40,000~60,000km', cost: '5~10만 원', note: '배터리 냉각 시스템용' },
        { item: '12V 보조배터리', cycle: '3~5년', cost: '15~25만 원', note: '시동 및 전자장비용' },
      ]
    : [
        { item: '엔진오일', cycle: '10,000~15,000km', cost: '5~10만 원', note: car.fuelType === '경유' ? '디젤은 교체 주기가 짧음' : '합성유 기준' },
        { item: '에어필터', cycle: '15,000~20,000km', cost: '1~3만 원', note: '엔진 흡기 필터' },
        { item: '에어컨 필터', cycle: '15,000~20,000km', cost: '1~3만 원', note: '실내 공기질 관리' },
        { item: '브레이크 패드', cycle: '30,000~50,000km', cost: '10~20만 원', note: '전륜/후륜 별도' },
        { item: '타이어', cycle: '40,000~50,000km', cost: '40~80만 원', note: '4개 기준' },
        { item: '배터리', cycle: '3~5년', cost: '8~15만 원', note: '시동용 배터리' },
        { item: '점화플러그', cycle: '40,000~60,000km', cost: '3~8만 원', note: '이리듐 기준' },
        { item: '미션오일', cycle: '60,000~80,000km', cost: '5~10만 원', note: 'ATF 교체' },
      ];

  // 주행거리별 유지비
  const distanceScenarios = [500, 1000, 1500, 2000].map((km) => {
    const fuel = Math.round((km / car.fuelEfficiency) * fuelPricePerUnit);
    const monthlyTotal = Math.round(annualTax / 12) + fuel + Math.round(annualInsurance30s / 12) + Math.round(annualMaintenance / 12);
    return { km, fuel, monthlyTotal };
  });

  // 경쟁 모델
  const competitors = car.competitors
    .map((s) => CAR_MODELS.find((m) => m.slug === s))
    .filter(Boolean);

  const faqItems = [
    {
      q: `${car.name} 월 유지비는 얼마인가요?`,
      a: `월 1,000km 주행 기준, ${car.name}의 월간 유지비는 ${car.maintenanceMonthly}입니다. 자동차세(월 ${formatKoreanWon(Math.round(annualTax / 12))}), ${car.isEV ? '충전비' : '유류비'}(${formatKoreanWon(monthlyFuelCost)}), 보험료, 정비비가 포함됩니다.`,
    },
    {
      q: `${car.name} 연간 유지비는 얼마인가요?`,
      a: `${car.name}의 연간 총 유지비는 약 ${formatKoreanWon(annualTotal)}입니다.`,
    },
    {
      q: `${car.name} ${car.isEV ? '충전비' : '유류비'}는 월 얼마인가요?`,
      a: `월 1,000km 주행 시 ${car.fuelType} 기준 약 ${formatKoreanWon(monthlyFuelCost)}입니다. 연비 ${car.fuelEfficiency}${car.isEV ? 'km/kWh' : 'km/L'}, ${car.fuelType} 가격 ${fuelPricePerUnit.toLocaleString()}원/${fuelUnit} 기준입니다.`,
    },
    {
      q: `${car.name} 유지비를 줄이는 방법은?`,
      a: car.isEV
        ? '완속 충전(가정용) 이용, 심야 충전, 에코 모드 운전, 타이어 공기압 관리 등으로 유지비를 줄일 수 있습니다.'
        : '경제 운전(급가속·급제동 자제), 정기 정비, 자동차세 연납 할인, 다이렉트 보험 가입 등으로 유지비를 절약할 수 있습니다.',
    },
  ];

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: `${car.name} 유지비 상세 - 2026년`, description: `${car.name}의 유지비를 상세히 정리했습니다.`, url: `${BASE_URL}/models/${car.slug}/maintenance`, publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL } }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: car.name, item: `${BASE_URL}/models/${car.slug}` },
        { '@type': 'ListItem', position: 3, name: '유지비', item: `${BASE_URL}/models/${car.slug}/maintenance` },
      ] }} />

      <main className="min-h-screen bg-gray-50">
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href={`/models/${car.slug}`} className="hover:text-amber-600">{car.name}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">유지비</li>
          </ol>
        </nav>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{car.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{car.name} 유지비</h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            {car.name}의 월간 유지비 {car.maintenanceMonthly}의 상세 내역을 정리했습니다.
            {car.isEV ? ' 충전비' : ' 유류비'}, 보험료, 자동차세, 정비비, 소모품 교체 주기까지 확인하세요.
          </p>
        </section>

        {/* 월간 유지비 상세 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 월간 유지비 상세 내역 (1,000km 기준)</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">① 자동차세 (월 환산)</span>
                <span className="font-medium">{formatKoreanWon(Math.round(annualTax / 12))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">② {car.isEV ? '충전비' : '유류비'} ({car.fuelType}, {car.fuelEfficiency}{car.isEV ? 'km/kWh' : 'km/L'})</span>
                <span className="font-medium">{formatKoreanWon(monthlyFuelCost)}</span>
              </div>
              <div className="flex justify-between pl-4 text-xs text-gray-400">
                <span>월 {monthlyFuelConsumption}{fuelUnit} × {fuelPricePerUnit.toLocaleString()}원/{fuelUnit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">③ 보험료 (월 환산, 30대)</span>
                <span className="font-medium">약 {formatKoreanWon(Math.round(annualInsurance30s / 12))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">④ 정비비·소모품 (월 평균)</span>
                <span className="font-medium">약 {formatKoreanWon(Math.round(annualMaintenance / 12))}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base">
                <span className="font-bold text-gray-900">월간 유지비 합계</span>
                <span className="font-bold text-amber-600">{car.maintenanceMonthly}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>연간 유지비</span>
                <span>약 {formatKoreanWon(annualTotal)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 주행거리별 유지비 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 주행거리별 월 유지비</h2>
          <p className="text-sm text-gray-600 mb-4">주행거리에 따라 {car.isEV ? '충전비' : '유류비'}가 달라집니다. 본인의 월 주행거리에 맞는 유지비를 확인하세요.</p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50 text-gray-900">
                  <th className="px-4 py-3 text-left font-semibold">월 주행거리</th>
                  <th className="px-4 py-3 text-right font-semibold">{car.isEV ? '충전비' : '유류비'}</th>
                  <th className="px-4 py-3 text-right font-semibold">월 유지비 합계</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {distanceScenarios.map((row) => (
                  <tr key={row.km} className={`hover:bg-gray-50 ${row.km === 1000 ? 'bg-amber-50/30' : ''}`}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.km.toLocaleString()}km {row.km === 1000 && <span className="text-xs text-amber-600">(평균)</span>}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(row.fuel)}</td>
                    <td className="px-4 py-3 text-right font-bold text-amber-600">약 {formatKoreanWon(row.monthlyTotal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 소모품 교체 주기 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 소모품 교체 주기·비용</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50 text-gray-900">
                  <th className="px-4 py-3 text-left font-semibold">소모품</th>
                  <th className="px-4 py-3 text-left font-semibold">교체 주기</th>
                  <th className="px-4 py-3 text-right font-semibold">예상 비용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {consumables.map((item) => (
                  <tr key={item.item} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-900">{item.item}</span>
                      <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{item.cycle}</td>
                    <td className="px-4 py-3 text-right font-medium">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {car.isEV && (
            <div className="mt-4 bg-green-50 rounded-xl p-4 text-sm text-green-800">
              <strong>전기차 정비 장점:</strong> 엔진오일, 미션오일, 점화플러그 등이 필요 없어 내연기관 대비 정비 비용이 30~50% 절감됩니다.
            </div>
          )}
        </section>

        {/* 경쟁 모델 유지비 비교 */}
        {competitors.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {shortName} vs {competitors.map((c) => c!.name.split(' ').slice(1).join(' ')).join(' vs ')} 유지비 비교
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">연비</th>
                    <th className="px-4 py-3 text-right font-semibold">월 {car.isEV ? '충전비' : '유류비'}</th>
                    <th className="px-4 py-3 text-right font-semibold">월 유지비</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-amber-50/30">
                    <td className="px-4 py-3 font-bold text-gray-900">{car.name}</td>
                    <td className="px-4 py-3 text-right">{car.fuelEfficiency}{car.isEV ? 'km/kWh' : 'km/L'}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(monthlyFuelCost)}</td>
                    <td className="px-4 py-3 text-right font-bold text-amber-600">{car.maintenanceMonthly}</td>
                  </tr>
                  {competitors.map((comp) => {
                    if (!comp) return null;
                    let compFuelPrice = 0;
                    if (comp.fuelType === '휘발유') compFuelPrice = 1650;
                    else if (comp.fuelType === '경유') compFuelPrice = 1500;
                    else if (comp.fuelType === 'LPG') compFuelPrice = 1050;
                    else compFuelPrice = 300;
                    const compFuel = Math.round((1000 / comp.fuelEfficiency) * compFuelPrice);
                    return (
                      <tr key={comp.slug} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium"><Link href={`/models/${comp.slug}/maintenance`} className="text-amber-600 hover:underline">{comp.name}</Link></td>
                        <td className="px-4 py-3 text-right">{comp.fuelEfficiency}{comp.isEV ? 'km/kWh' : 'km/L'}</td>
                        <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(compFuel)}</td>
                        <td className="px-4 py-3 text-right font-medium">{comp.maintenanceMonthly}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 유지비 절약 팁 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 유지비 절약 방법</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(car.isEV ? [
              { title: '완속 충전 활용', desc: '가정용 완속 충전은 급속 충전 대비 50~60% 저렴합니다.', icon: '🔌' },
              { title: '심야 충전', desc: '심야 전력(23시~09시) 이용 시 충전비를 추가 절약할 수 있습니다.', icon: '🌙' },
              { title: '에코 모드 운전', desc: '에코 모드와 회생제동을 적극 활용하면 전비가 10~15% 향상됩니다.', icon: '🌿' },
              { title: '타이어 공기압 관리', desc: '적정 공기압 유지 시 전비가 3~5% 향상됩니다.', icon: '🔧' },
            ] : [
              { title: '경제 운전', desc: '급가속·급제동을 자제하면 연비가 10~20% 향상됩니다.', icon: '🚗' },
              { title: '자동차세 연납', desc: '1월 연납 시 4.57% 할인됩니다.', icon: '💰' },
              { title: '다이렉트 보험', desc: '온라인 가입 시 보험료 10~20% 절약 가능합니다.', icon: '📱' },
              { title: '정기 정비', desc: '제때 정비하면 큰 수리비를 예방할 수 있습니다.', icon: '🔧' },
            ]).map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 유지비 자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-amber-600 transition-colors">{item.q}</summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{car.name} 유류비를 직접 계산해보세요</h2>
            <p className="text-amber-100 mb-6">주행거리, 연비, 유종을 입력하면 정확한 유류비를 계산합니다</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/calculator/fuel-cost" className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">유류비 계산기</Link>
              <Link href={`/models/${car.slug}`} className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors">{shortName} 전체 비용 보기</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
