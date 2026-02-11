'use client';

import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

function formatNumberWithComma(value: number): string {
  return value.toLocaleString('ko-KR');
}

function parseFormattedNumber(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}

function formatManWon(value: number): string {
  if (value >= 10000) {
    const eok = Math.floor(value / 10000);
    const man = Math.round(value % 10000);
    if (man === 0) return `${eok}억 원`;
    return `${eok}억 ${man.toLocaleString('ko-KR')}만 원`;
  }
  return `${Math.round(value).toLocaleString('ko-KR')}만 원`;
}

const FUEL_PRICES: Record<string, number> = {
  gasoline: 1650,
  diesel: 1500,
  lpg: 1000,
};

const FUEL_LABELS: Record<string, string> = {
  gasoline: '휘발유',
  diesel: '경유',
  lpg: 'LPG',
};

interface CostBreakdown {
  registrationTax: number;
  carTax: number;
  insurance: number;
  fuel: number;
  maintenance: number;
  depreciation: number;
  parking: number;
  total: number;
}

interface YearlyCost {
  year: number;
  annual: number;
  cumulative: number;
}

function calculateTCO(
  carPrice: number,
  holdingPeriod: number,
  annualDistance: number,
  fuelEfficiency: number,
  fuelPrice: number,
): { breakdown: CostBreakdown; yearly: YearlyCost[] } {
  const registrationTax = Math.round(carPrice * 0.07);

  const annualCarTax = 30; // 중형 기준 연간 약 30만원
  const carTax = annualCarTax * holdingPeriod;

  const annualInsurance = 80; // 연간 약 80만원
  const insurance = annualInsurance * holdingPeriod;

  const annualFuel = Math.round((annualDistance / fuelEfficiency) * fuelPrice / 10000 * 100) / 100;
  const fuel = Math.round(annualFuel * holdingPeriod);

  const annualMaintenance = 50; // 연간 약 50만원
  const maintenance = annualMaintenance * holdingPeriod;

  // 감가상각: 1년차 20%, 2년차 15%, 3년차 이후 연 10%
  let remainingValue = carPrice;
  for (let y = 1; y <= holdingPeriod; y++) {
    if (y === 1) remainingValue *= 0.80;
    else if (y === 2) remainingValue *= 0.85;
    else remainingValue *= 0.90;
  }
  const depreciation = Math.round(carPrice - remainingValue);

  const annualParking = 60; // 연간 약 60만원
  const parking = annualParking * holdingPeriod;

  const total = registrationTax + carTax + insurance + fuel + maintenance + depreciation + parking;

  // 연차별 비용 추이
  const yearly: YearlyCost[] = [];
  let cumulative = registrationTax; // 첫해에 취등록세 포함
  for (let y = 1; y <= holdingPeriod; y++) {
    let yearDepreciation: number;
    if (y === 1) yearDepreciation = Math.round(carPrice * 0.20);
    else if (y === 2) yearDepreciation = Math.round(carPrice * 0.80 * 0.15);
    else {
      let val = carPrice * 0.80 * 0.85;
      for (let k = 3; k < y; k++) val *= 0.90;
      yearDepreciation = Math.round(val * 0.10);
    }

    const yearlyMaintenance = y <= 2 ? 30 : 50 + (y - 3) * 10;
    const annual = annualCarTax + annualInsurance + Math.round(annualFuel) + yearlyMaintenance + yearDepreciation + annualParking +
      (y === 1 ? registrationTax : 0);

    cumulative += (y === 1 ? annual - registrationTax : annual);
    // 첫해 취등록세는 cumulative 초기값에 이미 포함
    if (y === 1) {
      cumulative = annual;
    }

    yearly.push({ year: y, annual, cumulative });
  }

  return { breakdown: { registrationTax, carTax, insurance, fuel, maintenance, depreciation, parking, total }, yearly };
}

const faqItems = [
  {
    q: 'TCO(Total Cost of Ownership)란 무엇인가요?',
    a: 'TCO는 자동차를 구매하고 보유하는 동안 발생하는 모든 비용의 합계입니다. 차량 구입비뿐만 아니라 취등록세, 보험료, 유류비, 정비비, 감가상각, 주차비 등을 모두 포함합니다. TCO를 계산하면 실제 자동차 소유에 드는 비용을 정확하게 파악할 수 있습니다.',
  },
  {
    q: '자동차 감가상각은 어떻게 계산하나요?',
    a: '일반적으로 신차 기준 1년차에 약 20%, 2년차에 약 15%, 3년차 이후 매년 약 10%씩 감가됩니다. 예를 들어 3,000만 원 차량은 1년 후 약 2,400만 원, 2년 후 약 2,040만 원, 3년 후 약 1,836만 원으로 가치가 하락합니다.',
  },
  {
    q: '연간 자동차 유지비는 얼마나 드나요?',
    a: '중형차 기준 연간 약 400~600만 원이 소요됩니다. 유류비 약 200만 원, 보험료 약 80만 원, 자동차세 약 30만 원, 정비비 약 50만 원, 주차비 약 60만 원 등이 포함됩니다. 차종, 주행거리, 지역에 따라 크게 달라질 수 있습니다.',
  },
  {
    q: '경차와 중형차의 TCO 차이는 얼마나 되나요?',
    a: '5년 기준 경차는 약 2,000~2,500만 원, 중형차는 약 3,500~4,500만 원의 TCO가 발생합니다. 경차는 취등록세 감면, 자동차세 절감, 높은 연비, 통행료 할인 등의 혜택이 있어 약 40~50% 저렴합니다.',
  },
  {
    q: '전기차의 TCO는 내연기관차보다 저렴한가요?',
    a: '5년 이상 보유 시 전기차의 TCO가 내연기관차보다 저렴해질 수 있습니다. 전기차는 충전비가 유류비의 약 30~50%이고, 정비비도 약 50% 적습니다. 다만 초기 구매 가격이 높고 배터리 교체 비용을 고려해야 합니다.',
  },
  {
    q: '자동차 보험료를 줄이는 방법은?',
    a: '무사고 할인(최대 3년 무사고 시 약 30% 할인), 블랙박스 할인(5~7%), 마일리지 특약(주행거리에 따라 최대 30%), 다이렉트 보험 가입(10~15% 절감) 등을 활용할 수 있습니다. 또한 불필요한 특약을 제거하면 추가 절약이 가능합니다.',
  },
  {
    q: '중고차와 신차 중 TCO가 더 낮은 쪽은?',
    a: '일반적으로 3~5년 된 중고차가 5년 TCO 기준 약 20~30% 저렴합니다. 중고차는 이미 큰 폭의 감가상각이 진행되어 추가 감가율이 낮기 때문입니다. 다만 정비비가 더 많이 들 수 있으므로 상태가 좋은 인증 중고차를 선택하는 것이 좋습니다.',
  },
];

const savingTips = [
  {
    icon: '⛽',
    title: '연비 운전 습관',
    desc: '급가속·급제동을 피하고, 경제 속도(60~80km/h)를 유지하면 연비를 15~20% 개선할 수 있습니다.',
  },
  {
    icon: '🛡️',
    title: '보험료 절약',
    desc: '다이렉트 보험 가입, 마일리지 특약, 블랙박스 할인을 활용하면 연간 20~30만 원을 절약할 수 있습니다.',
  },
  {
    icon: '🔧',
    title: '정비 주기 준수',
    desc: '제조사 권장 정비 주기를 지키면 큰 수리를 예방하고 장기적으로 정비비를 30~40% 줄일 수 있습니다.',
  },
  {
    icon: '💸',
    title: '자동차세 연납 할인',
    desc: '1월에 자동차세를 일시납하면 약 5% 할인을 받을 수 있습니다. 연간 1~2만 원 절약 가능합니다.',
  },
  {
    icon: '🅿️',
    title: '주차비 절약',
    desc: '월정액 주차, 공영주차장 이용, 아파트 내 주차 활용 등으로 연간 20~30만 원을 절약할 수 있습니다.',
  },
  {
    icon: '📉',
    title: '감가상각 최소화',
    desc: '인기 차종 선택, 적정 주행거리 유지, 외관 관리를 통해 중고차 매도 시 더 높은 가격을 받을 수 있습니다.',
  },
];

export default function CarOwnershipCostCalculator() {
  const [carPrice, setCarPrice] = useState('3,000');
  const [holdingPeriod, setHoldingPeriod] = useState('5');
  const [annualDistance, setAnnualDistance] = useState('15,000');
  const [fuelEfficiency, setFuelEfficiency] = useState('12');
  const [fuelType, setFuelType] = useState('gasoline');
  const [fuelPrice, setFuelPrice] = useState('1,650');

  const [result, setResult] = useState<ReturnType<typeof calculateTCO> | null>(null);

  const handleNumericInput = (
    value: string,
    setter: (v: string) => void,
    useComma = false,
  ) => {
    const raw = value.replace(/[^0-9]/g, '');
    if (useComma && raw) {
      setter(parseInt(raw).toLocaleString('ko-KR'));
    } else {
      setter(raw);
    }
  };

  const handleFuelTypeChange = (type: string) => {
    setFuelType(type);
    setFuelPrice(formatNumberWithComma(FUEL_PRICES[type]));
  };

  const handleCalculate = () => {
    const price = parseFormattedNumber(carPrice);
    const period = parseInt(holdingPeriod) || 0;
    const distance = parseFormattedNumber(annualDistance);
    const efficiency = parseFloat(fuelEfficiency) || 0;
    const fuel = parseFormattedNumber(fuelPrice);

    if (price > 0 && period > 0 && distance > 0 && efficiency > 0 && fuel > 0) {
      setResult(calculateTCO(price, period, distance, efficiency, fuel));
    }
  };

  const breakdownItems: { label: string; key: keyof CostBreakdown; color: string }[] = [
    { label: '취등록세', key: 'registrationTax', color: 'bg-red-400' },
    { label: '자동차세', key: 'carTax', color: 'bg-orange-400' },
    { label: '보험료', key: 'insurance', color: 'bg-yellow-400' },
    { label: '유류비', key: 'fuel', color: 'bg-green-400' },
    { label: '정비비', key: 'maintenance', color: 'bg-teal-400' },
    { label: '감가상각', key: 'depreciation', color: 'bg-blue-400' },
    { label: '주차비', key: 'parking', color: 'bg-purple-400' },
  ];

  const period = parseInt(holdingPeriod) || 5;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '자동차 총 소유비용(TCO) 계산기',
          description: '차량 구입비부터 유지비까지 자동차 총 소유비용을 계산합니다.',
          url: `${BASE_URL}/calculator/car-ownership-cost`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
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
            { '@type': 'ListItem', position: 1, name: '자동차 계산기', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'TCO 계산기', item: `${BASE_URL}/calculator/car-ownership-cost` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-500">
              <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">TCO 계산기</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">자동차 총 소유비용(TCO) 계산기</h1>
            <p className="text-gray-600">차량 구입비, 취등록세, 보험료, 유류비, 정비비, 감가상각까지 자동차 총 소유비용을 한번에 계산합니다.</p>
          </div>

          {/* Input Section */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">차량 정보 입력</h2>
            <p className="text-sm text-gray-500 mb-5">차량 가격과 운행 조건을 입력하세요</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* 차량 가격 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">차량 가격</label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={carPrice}
                    onChange={(e) => handleNumericInput(e.target.value, setCarPrice, true)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-16"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[2000, 3000, 4000, 5000].map((p) => (
                    <button key={p} onClick={() => setCarPrice(p.toLocaleString('ko-KR'))} className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 text-gray-600 rounded-lg transition-colors">
                      {p.toLocaleString()}만
                    </button>
                  ))}
                </div>
              </div>

              {/* 보유 기간 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">보유 기간</label>
                <div className="relative">
                  <input
                    type="number"
                    value={holdingPeriod}
                    onChange={(e) => setHoldingPeriod(e.target.value)}
                    min="1"
                    max="15"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">년</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[3, 5, 7, 10].map((y) => (
                    <button key={y} onClick={() => setHoldingPeriod(y.toString())} className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 text-gray-600 rounded-lg transition-colors">
                      {y}년
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* 연간 주행거리 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">연간 주행거리</label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={annualDistance}
                    onChange={(e) => handleNumericInput(e.target.value, setAnnualDistance, true)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[10000, 15000, 20000, 30000].map((d) => (
                    <button key={d} onClick={() => setAnnualDistance(d.toLocaleString('ko-KR'))} className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 text-gray-600 rounded-lg transition-colors">
                      {d.toLocaleString()}km
                    </button>
                  ))}
                </div>
              </div>

              {/* 연비 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">연비</label>
                <div className="relative">
                  <input
                    type="number"
                    value={fuelEfficiency}
                    onChange={(e) => setFuelEfficiency(e.target.value)}
                    step="0.1"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-16"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km/L</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[8, 10, 12, 15].map((e) => (
                    <button key={e} onClick={() => setFuelEfficiency(e.toString())} className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 text-gray-600 rounded-lg transition-colors">
                      {e}km/L
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 유종 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">유종</label>
                <select
                  value={fuelType}
                  onChange={(e) => handleFuelTypeChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                >
                  <option value="gasoline">휘발유</option>
                  <option value="diesel">경유</option>
                  <option value="lpg">LPG</option>
                </select>
              </div>

              {/* 유가 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">유가</label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={fuelPrice}
                    onChange={(e) => handleNumericInput(e.target.value, setFuelPrice, true)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">원/L</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl transition-colors text-lg mb-8"
          >
            TCO 계산하기
          </button>

          {/* Results */}
          {result ? (
            <div className="space-y-8 mb-12">
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl border-2 border-amber-200 p-5">
                  <div className="text-center">
                    <div className="text-xs text-amber-600 font-semibold mb-1">총 소유비용 (TCO)</div>
                    <div className="text-2xl font-bold text-gray-900">{formatManWon(result.breakdown.total)}</div>
                    <div className="text-xs text-gray-500 mt-1">{period}년 기준</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 font-semibold mb-1">연간 평균 비용</div>
                    <div className="text-2xl font-bold text-gray-900">{formatManWon(Math.round(result.breakdown.total / period))}</div>
                    <div className="text-xs text-gray-500 mt-1">연평균</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 font-semibold mb-1">월 평균 비용</div>
                    <div className="text-2xl font-bold text-gray-900">{formatManWon(Math.round(result.breakdown.total / period / 12))}</div>
                    <div className="text-xs text-gray-500 mt-1">월평균</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 font-semibold mb-1">km당 비용</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatNumberWithComma(Math.round(result.breakdown.total * 10000 / (parseFormattedNumber(annualDistance) * period)))}원
                    </div>
                    <div className="text-xs text-gray-500 mt-1">km당</div>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown Table */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">비용 항목별 상세 내역</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 text-gray-500 font-medium">항목</th>
                        <th className="text-right py-3 px-2 text-gray-500 font-medium">금액</th>
                        <th className="text-right py-3 px-2 text-gray-500 font-medium">비중</th>
                        <th className="text-left py-3 px-2 text-gray-500 font-medium w-1/3">산출 기준</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">취등록세</td>
                        <td className="py-3 px-2 text-right font-semibold text-gray-900">{formatManWon(result.breakdown.registrationTax)}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{Math.round(result.breakdown.registrationTax / result.breakdown.total * 100)}%</td>
                        <td className="py-3 px-2 text-gray-500">차량가 x 7%</td>
                      </tr>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">자동차세</td>
                        <td className="py-3 px-2 text-right font-semibold text-gray-900">{formatManWon(result.breakdown.carTax)}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{Math.round(result.breakdown.carTax / result.breakdown.total * 100)}%</td>
                        <td className="py-3 px-2 text-gray-500">연 30만원 x {period}년</td>
                      </tr>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">보험료</td>
                        <td className="py-3 px-2 text-right font-semibold text-gray-900">{formatManWon(result.breakdown.insurance)}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{Math.round(result.breakdown.insurance / result.breakdown.total * 100)}%</td>
                        <td className="py-3 px-2 text-gray-500">연 80만원 x {period}년</td>
                      </tr>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">유류비</td>
                        <td className="py-3 px-2 text-right font-semibold text-gray-900">{formatManWon(result.breakdown.fuel)}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{Math.round(result.breakdown.fuel / result.breakdown.total * 100)}%</td>
                        <td className="py-3 px-2 text-gray-500">{FUEL_LABELS[fuelType]} {fuelPrice}원/L 기준</td>
                      </tr>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">정비비</td>
                        <td className="py-3 px-2 text-right font-semibold text-gray-900">{formatManWon(result.breakdown.maintenance)}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{Math.round(result.breakdown.maintenance / result.breakdown.total * 100)}%</td>
                        <td className="py-3 px-2 text-gray-500">연 50만원 x {period}년</td>
                      </tr>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">감가상각</td>
                        <td className="py-3 px-2 text-right font-semibold text-gray-900">{formatManWon(result.breakdown.depreciation)}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{Math.round(result.breakdown.depreciation / result.breakdown.total * 100)}%</td>
                        <td className="py-3 px-2 text-gray-500">1년 20%, 2년 15%, 이후 10%</td>
                      </tr>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">주차비</td>
                        <td className="py-3 px-2 text-right font-semibold text-gray-900">{formatManWon(result.breakdown.parking)}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{Math.round(result.breakdown.parking / result.breakdown.total * 100)}%</td>
                        <td className="py-3 px-2 text-gray-500">연 60만원 x {period}년</td>
                      </tr>
                      <tr className="border-t-2 border-gray-200">
                        <td className="py-3 px-2 font-bold text-gray-900">합계</td>
                        <td className="py-3 px-2 text-right font-bold text-amber-600 text-base">{formatManWon(result.breakdown.total)}</td>
                        <td className="py-3 px-2 text-right font-bold text-gray-900">100%</td>
                        <td className="py-3 px-2 text-gray-500">{period}년 총 소유비용</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Visual Bar Chart */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">비용 구성 비율</h3>
                <div className="space-y-3">
                  {breakdownItems.map((item) => {
                    const value = result.breakdown[item.key];
                    const percentage = Math.round((value / result.breakdown.total) * 100);
                    return (
                      <div key={item.key}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-900">{formatManWon(value)}</span>
                            <span className="text-xs text-gray-500">({percentage}%)</span>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-full h-5 overflow-hidden">
                          <div
                            className={`${item.color} h-full rounded-full transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Stacked Bar */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="text-sm font-medium text-gray-700 mb-2">전체 비율</div>
                  <div className="flex h-8 rounded-full overflow-hidden">
                    {breakdownItems.map((item) => {
                      const percentage = (result.breakdown[item.key] / result.breakdown.total) * 100;
                      if (percentage < 1) return null;
                      return (
                        <div
                          key={item.key}
                          className={`${item.color} relative group`}
                          style={{ width: `${percentage}%` }}
                          title={`${item.label}: ${Math.round(percentage)}%`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {breakdownItems.map((item) => (
                      <div key={item.key} className="flex items-center gap-1.5">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-xs text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Yearly Cost Trend */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">연차별 비용 추이</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-3 text-gray-500 font-medium">연차</th>
                        <th className="text-right py-3 px-3 text-gray-500 font-medium">해당연도 비용</th>
                        <th className="text-right py-3 px-3 text-gray-500 font-medium">누적 비용</th>
                        <th className="text-left py-3 px-3 text-gray-500 font-medium w-1/3">누적 비율</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearly.map((y) => (
                        <tr key={y.year} className="border-b border-gray-50">
                          <td className="py-3 px-3 font-medium text-gray-900">{y.year}년차</td>
                          <td className="py-3 px-3 text-right font-semibold text-gray-900">{formatManWon(y.annual)}</td>
                          <td className="py-3 px-3 text-right font-semibold text-amber-600">{formatManWon(y.cumulative)}</td>
                          <td className="py-3 px-3">
                            <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                              <div
                                className="bg-amber-400 h-full rounded-full transition-all duration-500"
                                style={{ width: `${Math.min((y.cumulative / result.breakdown.total) * 100, 100)}%` }}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">참고사항</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>* 취등록세는 차량가의 7% 기준이며, 경차(4%)/전기차/하이브리드는 감면이 적용될 수 있습니다.</li>
                  <li>* 자동차세는 중형 세단(1,600~2,000cc) 기준 연간 약 30만 원으로 추정하였습니다.</li>
                  <li>* 보험료는 30대 운전자, 무사고 기준 평균치이며 실제와 다를 수 있습니다.</li>
                  <li>* 감가상각은 일반적인 비율이며, 인기 차종이나 수입차는 감가율이 다를 수 있습니다.</li>
                  <li>* 정비비는 소모품 교체, 점검비 등 평균 비용이며 차종에 따라 달라집니다.</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 text-center py-16 mb-12">
              <div className="text-6xl mb-4">&#x1F4B0;</div>
              <p className="text-gray-500">차량 정보를 입력하고<br />TCO 계산하기 버튼을 누르세요</p>
            </div>
          )}

          {/* Saving Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">TCO 절약 팁 6가지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savingTips.map((tip) => (
                <div key={tip.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-amber-200 transition-colors">
                  <div className="text-2xl mb-3">{tip.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{tip.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
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

          {/* CTA */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">더 자세한 비용 분석이 필요하신가요?</h2>
              <p className="text-amber-100 mb-6">감가상각 계산기와 유류비 계산기로 세부 비용을 확인해보세요</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/calculator/depreciation"
                  className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  감가상각 계산기
                </Link>
                <Link
                  href="/calculator/fuel-cost"
                  className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                >
                  유류비 계산기
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
