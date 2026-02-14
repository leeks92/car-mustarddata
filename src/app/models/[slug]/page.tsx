import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';
import { CAR_MODELS, getCarModel, getAllSlugs } from '@/lib/car-models';
import { calculateCarTax, formatKoreanWon } from '@/lib/calculations';

export const dynamicParams = false;

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
  const title = `${car.name} 유지비·세금 총정리 (2026) - 자동차세·보험료·취등록세·월 유지비`;
  const description = `${car.name}(${car.isEV ? '전기차' : `${car.cc}cc`})의 자동차세, 보험료, 취등록세, 월간 유지비를 2026년 기준으로 정리했습니다. ${shortName} 연간 유지비 ${formatKoreanWon(0).replace('0원', '')}부터 보험료 비교까지 한눈에 확인하세요.`;

  return {
    title,
    description,
    keywords: [
      `${car.name} 유지비`, `${car.name} 자동차세`, `${car.name} 보험료`, `${car.name} 취등록세`,
      `${shortName} 유지비`, `${shortName} 자동차세`, `${shortName} 보험료`, `${shortName} 취등록세`,
      `${shortName} 연비`, `${shortName} 월 유지비`, `${car.name} 세금`, `${car.category} 유지비`,
      `${shortName} 보험료 비교`, `${shortName} 연간 유지비`,
    ],
    alternates: { canonical: `${BASE_URL}/models/${car.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/models/${car.slug}`,
      type: 'website',
    },
  };
}

export default async function CarModelPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarModel(slug);
  if (!car) notFound();

  const shortName = car.name.split(' ').slice(1).join(' ');

  // 자동차세 계산
  const taxResult = calculateCarTax(
    car.cc,
    1,
    car.isEV ? 'ev' : 'sedan'
  );

  // 취등록세 계산
  const priceWon = car.price * 10000;
  const acquisitionTaxRate = car.isEV ? 7 : (car.cc <= 1000 ? 4 : 7);
  const acquisitionTax = Math.round(priceWon * (acquisitionTaxRate / 100));
  const evReduction = car.isEV ? Math.min(acquisitionTax, 1400000) : 0;
  const compactExemption = (!car.isEV && car.cc <= 1000) ? acquisitionTax : 0;
  const actualAcquisitionTax = acquisitionTax - evReduction - compactExemption;

  // 유류비 계산 (월 1,000km 기준)
  const monthlyDistance = 1000;
  let fuelPricePerUnit = 0;
  if (car.fuelType === '휘발유') fuelPricePerUnit = 1650;
  else if (car.fuelType === '경유') fuelPricePerUnit = 1500;
  else if (car.fuelType === 'LPG') fuelPricePerUnit = 1050;
  else fuelPricePerUnit = 300;

  const monthlyFuelCost = Math.round((monthlyDistance / car.fuelEfficiency) * fuelPricePerUnit);

  // 연간 유지비 합산
  const annualTax = taxResult.totalTax;
  const annualFuel = monthlyFuelCost * 12;
  const annualInsurance30s = car.insurance30s.includes('~')
    ? Math.round((parseInt(car.insurance30s.replace(/[^0-9~]/g, '').split('~')[0]) + parseInt(car.insurance30s.replace(/[^0-9~]/g, '').split('~')[1])) / 2) * 10000
    : 800000;
  const annualMaintenance = parseInt(car.maintenanceMonthly.replace(/[^0-9]/g, '')) * 10000 * 12;
  const annualTotal = annualTax + annualFuel + annualInsurance30s + annualMaintenance;

  // 경쟁 모델
  const competitors = car.competitors
    .map((s) => CAR_MODELS.find((m) => m.slug === s))
    .filter(Boolean);

  // FAQ - 허브 페이지용 종합 FAQ
  const faqItems = [
    {
      q: `${car.name} 자동차세는 얼마인가요?`,
      a: car.isEV
        ? `${car.name}는 전기차로 자동차세가 연 ${formatKoreanWon(taxResult.totalTax)}(교육세 포함)으로 정액 부과됩니다.`
        : `${car.name}(${car.cc.toLocaleString()}cc)의 자동차세는 연 ${formatKoreanWon(taxResult.totalTax)}(교육세 포함)입니다. 1월 연납 시 약 ${formatKoreanWon(taxResult.annualPaymentDiscount)}을 할인받을 수 있습니다.`,
    },
    {
      q: `${car.name} 보험료는 얼마인가요?`,
      a: `30대 무사고 기준, ${car.name}의 종합보험료는 연 ${car.insurance30s}입니다. 20대는 ${car.insurance20s}, 40대는 ${car.insurance40s} 수준입니다.`,
    },
    {
      q: `${car.name} 취등록세는 얼마인가요?`,
      a: car.isEV
        ? `${car.name}(${car.price.toLocaleString()}만 원)의 취득세는 ${formatKoreanWon(acquisitionTax)}이지만, 전기차 감면으로 실제 부담은 ${formatKoreanWon(actualAcquisitionTax)}입니다.`
        : car.cc <= 1000
        ? `${car.name}는 경차로 취득세가 면제됩니다. 공채 매입비와 등록 수수료만 부담하면 됩니다.`
        : `${car.name}(${car.price.toLocaleString()}만 원)의 취득세는 차량 가격의 7%인 ${formatKoreanWon(acquisitionTax)}입니다.`,
    },
    {
      q: `${car.name} 월 유지비는 얼마인가요?`,
      a: `월 1,000km 주행 기준, ${car.name}의 월간 유지비는 ${car.maintenanceMonthly}입니다. 자동차세, ${car.isEV ? '충전비' : '유류비'}, 보험료, 정비비가 포함됩니다.`,
    },
    {
      q: `${car.name} 연간 총 유지비는 얼마인가요?`,
      a: `${car.name}의 연간 총 유지비는 약 ${formatKoreanWon(annualTotal)}입니다. 자동차세 ${formatKoreanWon(annualTax)}, ${car.isEV ? '충전비' : '유류비'} ${formatKoreanWon(annualFuel)}, 보험료 약 ${formatKoreanWon(annualInsurance30s)}, 정비비 약 ${formatKoreanWon(annualMaintenance)}으로 구성됩니다.`,
    },
  ];

  // 서브 페이지 목록
  const subPages = [
    { path: `/models/${car.slug}/car-tax`, label: `${shortName} 자동차세`, desc: '연납 할인, 차령별 감면, 납부 방법' },
    { path: `/models/${car.slug}/insurance`, label: `${shortName} 보험료`, desc: '연령별 보험료, 다이렉트 할인, 절약 방법' },
    { path: `/models/${car.slug}/registration-tax`, label: `${shortName} 취등록세`, desc: '취득세, 공채, 등록비 상세 내역' },
    { path: `/models/${car.slug}/maintenance`, label: `${shortName} 유지비`, desc: '유류비, 정비비, 소모품 교체 주기' },
  ];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${car.name} 유지비·세금 총정리 - 2026년`,
          description: `${car.name}의 자동차세, 보험료, 취등록세, 월간 유지비를 정리했습니다.`,
          url: `${BASE_URL}/models/${car.slug}`,
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
            { '@type': 'ListItem', position: 2, name: '차량별 정보', item: `${BASE_URL}/models` },
            { '@type': 'ListItem', position: 3, name: car.name, item: `${BASE_URL}/models/${car.slug}` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{car.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{car.emoji}</span>
            <div>
              <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{car.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                {car.name} 유지비·세금 총정리
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {car.name}({car.isEV ? '전기차' : `${car.cc.toLocaleString()}cc, ${car.fuelType}`})의
            자동차세, 보험료, 취등록세, 월간 유지비를 2026년 기준으로 정리했습니다.
            각 항목별 상세 내용은 아래 링크에서 확인할 수 있습니다.
          </p>
        </section>

        {/* 핵심 요약 카드 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href={`/models/${car.slug}/car-tax`} className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-amber-200 transition-all">
              <p className="text-xs text-gray-500 mb-1">연간 자동차세</p>
              <p className="text-lg font-bold text-amber-600">{formatKoreanWon(taxResult.totalTax)}</p>
              <p className="text-[10px] text-gray-400 mt-1">상세 보기 →</p>
            </Link>
            <Link href={`/models/${car.slug}/insurance`} className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-amber-200 transition-all">
              <p className="text-xs text-gray-500 mb-1">연간 보험료 (30대)</p>
              <p className="text-lg font-bold text-amber-600">{car.insurance30s}</p>
              <p className="text-[10px] text-gray-400 mt-1">상세 보기 →</p>
            </Link>
            <Link href={`/models/${car.slug}/registration-tax`} className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-amber-200 transition-all">
              <p className="text-xs text-gray-500 mb-1">취등록세</p>
              <p className="text-lg font-bold text-amber-600">약 {formatKoreanWon(Math.round(actualAcquisitionTax + priceWon * (car.cc <= 1000 ? 0.008 : 0.016) + 30000))}</p>
              <p className="text-[10px] text-gray-400 mt-1">상세 보기 →</p>
            </Link>
            <Link href={`/models/${car.slug}/maintenance`} className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-amber-200 transition-all">
              <p className="text-xs text-gray-500 mb-1">월간 유지비</p>
              <p className="text-lg font-bold text-amber-600">{car.maintenanceMonthly}</p>
              <p className="text-[10px] text-gray-400 mt-1">상세 보기 →</p>
            </Link>
          </div>
        </section>

        {/* 상세 페이지 바로가기 */}
        <section className="max-w-4xl mx-auto px-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{car.name} 비용 항목별 상세 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subPages.map((sp) => (
              <Link
                key={sp.path}
                href={sp.path}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{sp.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{sp.desc}</p>
                <span className="text-amber-600 text-sm font-semibold mt-2 inline-block">자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== 자동차세 요약 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {car.name} 자동차세 - {car.isEV ? '전기차 정액 과세' : `${car.cc.toLocaleString()}cc 기준`}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {car.isEV
              ? `전기차는 배기량과 관계없이 연 10만 원(교육세 포함 ${formatKoreanWon(taxResult.totalTax)})이 부과됩니다.`
              : `${car.cc.toLocaleString()}cc 기준, 연간 자동차세는 ${formatKoreanWon(taxResult.totalTax)}이며 1월 연납 시 4.57% 할인됩니다.`
            }
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-3 text-sm">
              {!car.isEV && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">배기량</span>
                    <span className="font-medium">{car.cc.toLocaleString()}cc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">cc당 세율</span>
                    <span className="font-medium">{car.cc <= 1000 ? '80원/cc' : car.cc <= 1600 ? '140원/cc' : '200원/cc'}</span>
                  </div>
                </>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">본세</span>
                <span className="font-medium">{formatKoreanWon(taxResult.baseTax)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">지방교육세 (30%)</span>
                <span className="font-medium">{formatKoreanWon(taxResult.localEducationTax)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base">
                <span className="font-bold text-gray-900">연간 자동차세</span>
                <span className="font-bold text-amber-600">{formatKoreanWon(taxResult.totalTax)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>1월 연납 시</span>
                <span className="font-medium">{formatKoreanWon(taxResult.annualPaymentAmounts[0].amount)} (4.57% 할인)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/models/${car.slug}/car-tax`} className="text-amber-600 text-sm font-semibold hover:text-amber-700">
              {shortName} 자동차세 상세 보기 →
            </Link>
            <Link href="/calculator/car-tax" className="text-gray-500 text-sm hover:text-amber-600">
              자동차세 계산기 →
            </Link>
          </div>
        </section>

        {/* ===== 취등록세 요약 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {car.name} 취등록세 - {car.isEV ? '전기차 감면 적용' : car.cc <= 1000 ? '경차 면제 대상' : `${car.price.toLocaleString()}만 원 기준`}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {car.isEV
              ? `전기차는 취득세 최대 140만 원 감면이 적용됩니다. ${car.name}의 실제 취등록세 부담은 약 ${formatKoreanWon(Math.round(actualAcquisitionTax + priceWon * 0.016 + 30000))}입니다.`
              : car.cc <= 1000
              ? `경차는 취득세가 면제됩니다. 공채 매입비와 등록 수수료만 부담하면 됩니다.`
              : `${car.name}(${car.price.toLocaleString()}만 원)의 취득세는 차량 가격의 7%인 ${formatKoreanWon(acquisitionTax)}입니다.`
            }
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">차량 가격</span>
                <span className="font-medium">{car.price.toLocaleString()}만 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">취득세 ({acquisitionTaxRate}%)</span>
                <span className="font-medium">{formatKoreanWon(acquisitionTax)}</span>
              </div>
              {car.isEV && (
                <div className="flex justify-between text-green-600">
                  <span>전기차 감면</span>
                  <span className="font-medium">-{formatKoreanWon(evReduction)}</span>
                </div>
              )}
              {compactExemption > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>경차 취득세 면제</span>
                  <span className="font-medium">-{formatKoreanWon(compactExemption)}</span>
                </div>
              )}
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base">
                <span className="font-bold text-gray-900">예상 총 취등록세</span>
                <span className="font-bold text-amber-600">
                  약 {formatKoreanWon(Math.round(actualAcquisitionTax + priceWon * (car.cc <= 1000 ? 0.008 : 0.016) + 30000))}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/models/${car.slug}/registration-tax`} className="text-amber-600 text-sm font-semibold hover:text-amber-700">
              {shortName} 취등록세 상세 보기 →
            </Link>
            <Link href="/calculator/registration-tax" className="text-gray-500 text-sm hover:text-amber-600">
              취등록세 계산기 →
            </Link>
          </div>
        </section>

        {/* ===== 보험료 요약 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {car.name} 보험료 - 연령대별 종합보험 비교
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {car.name}의 종합보험료(자기차량손해 포함)를 연령대별로 비교했습니다. 다이렉트 보험 가입 시 10~20% 추가 할인이 가능합니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">연령대</th>
                    <th className="px-4 py-3 text-right font-semibold">예상 연간 보험료</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">20대 (경력 1~3년)</td>
                    <td className="px-4 py-3 text-right text-red-500 font-medium">{car.insurance20s}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">30대 (경력 5~10년)</td>
                    <td className="px-4 py-3 text-right text-amber-600 font-medium">{car.insurance30s}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">40대 (경력 10~20년)</td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium">{car.insurance40s}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 종합보험(자기차량손해 포함), 대인 II 무한, 대물 1억 기준. 무사고 3년 이상 가정.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/models/${car.slug}/insurance`} className="text-amber-600 text-sm font-semibold hover:text-amber-700">
              {shortName} 보험료 상세 보기 →
            </Link>
            <Link href="/guide/car-insurance" className="text-gray-500 text-sm hover:text-amber-600">
              보험료 절약 가이드 →
            </Link>
          </div>
        </section>

        {/* ===== 월간 유지비 요약 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {car.name} 월 유지비 - 월 1,000km 기준 {car.maintenanceMonthly}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            자동차세, {car.isEV ? '충전비' : '유류비'}, 보험료, 정비비를 합산한 월간 유지비입니다. 연간 총 유지비는 약 {formatKoreanWon(annualTotal)}입니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">자동차세 (월 환산)</span>
                <span className="font-medium">{formatKoreanWon(Math.round(annualTax / 12))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{car.fuelType === '전기' ? '충전비' : '유류비'} ({car.fuelType}, {car.fuelEfficiency}{car.fuelType === '전기' ? 'km/kWh' : 'km/L'})</span>
                <span className="font-medium">{formatKoreanWon(monthlyFuelCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">보험료 (월 환산, 30대)</span>
                <span className="font-medium">약 {formatKoreanWon(Math.round(annualInsurance30s / 12))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">정비비 (월 평균)</span>
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
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/models/${car.slug}/maintenance`} className="text-amber-600 text-sm font-semibold hover:text-amber-700">
              {shortName} 유지비 상세 보기 →
            </Link>
            <Link href="/guide/maintenance-cost" className="text-gray-500 text-sm hover:text-amber-600">
              차종별 유지비 비교 →
            </Link>
          </div>
        </section>

        {/* ===== 비용 특징 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {car.name} 비용 특징 및 절약 포인트
          </h2>
          <div className="space-y-3">
            {car.features.map((feature) => (
              <div
                key={feature}
                className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3"
              >
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 경쟁 모델 비교 ===== */}
        {competitors.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {car.name} vs {competitors.map((c) => c!.name).join(' vs ')} 비교
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              {car.name}과 경쟁 모델의 유지비를 비교합니다. 각 차량 페이지에서 상세 비용을 확인할 수 있습니다.
            </p>
            {/* 비교 테이블 */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-amber-50 text-gray-900">
                      <th className="px-4 py-3 text-left font-semibold">항목</th>
                      <th className="px-4 py-3 text-right font-semibold">{shortName}</th>
                      {competitors.map((comp) => comp && (
                        <th key={comp.slug} className="px-4 py-3 text-right font-semibold">{comp.name.split(' ').slice(1).join(' ')}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">가격</td>
                      <td className="px-4 py-3 text-right font-medium">{car.price.toLocaleString()}만</td>
                      {competitors.map((comp) => comp && (
                        <td key={comp.slug} className="px-4 py-3 text-right font-medium">{comp.price.toLocaleString()}만</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">자동차세</td>
                      <td className="px-4 py-3 text-right font-medium">{formatKoreanWon(taxResult.totalTax)}</td>
                      {competitors.map((comp) => {
                        if (!comp) return null;
                        const compTax = calculateCarTax(comp.cc, 1, comp.isEV ? 'ev' : 'sedan');
                        return <td key={comp.slug} className="px-4 py-3 text-right font-medium">{formatKoreanWon(compTax.totalTax)}</td>;
                      })}
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">보험료 (30대)</td>
                      <td className="px-4 py-3 text-right font-medium">{car.insurance30s}</td>
                      {competitors.map((comp) => comp && (
                        <td key={comp.slug} className="px-4 py-3 text-right font-medium">{comp.insurance30s}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">월 유지비</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{car.maintenanceMonthly}</td>
                      {competitors.map((comp) => comp && (
                        <td key={comp.slug} className="px-4 py-3 text-right font-medium">{comp.maintenanceMonthly}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {competitors.map((comp) => comp && (
                <Link
                  key={comp.slug}
                  href={`/models/${comp.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all"
                >
                  <div className="text-2xl mb-2">{comp.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{comp.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{comp.category} · {comp.price.toLocaleString()}만 원</p>
                  <p className="text-sm text-amber-600 font-medium">월 유지비 {comp.maintenanceMonthly}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{car.name} 자주 묻는 질문</h2>
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
              {car.name} 비용을 직접 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              자동차세, 취등록세, 할부금, 유류비를 정확하게 계산합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/car-tax"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                자동차세 계산하기
              </Link>
              <Link
                href="/calculator/registration-tax"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                취등록세 계산하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
