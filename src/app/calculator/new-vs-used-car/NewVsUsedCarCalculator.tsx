'use client';

import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

const faqItems = [
  {
    q: '신차와 중고차 중 어느 쪽이 더 경제적인가요?',
    a: '일반적으로 3~5년 된 중고차가 총비용 측면에서 경제적입니다. 신차는 첫 1~2년 감가상각이 20~35%로 매우 크지만, 중고차는 이미 감가가 진행되어 추가 감가율이 낮습니다. 다만 5년 이상 장기 보유 시에는 신차가 유리할 수 있습니다.',
  },
  {
    q: '중고차 감가상각은 어떻게 계산하나요?',
    a: '중고차 감가상각은 연간 약 8~10%씩 진행됩니다. 신차 대비 1년차 약 20%, 2년차 약 15%, 3년차 이후 매년 약 10%씩 가치가 하락합니다. 인기 차종은 감가율이 낮고, 수입차나 비인기 차종은 감가율이 높습니다.',
  },
  {
    q: '중고차 구매 시 추가 비용은 무엇이 있나요?',
    a: '중고차 구매 시 차량 가격 외에 취등록세(차량가의 7%), 이전등록비, 매도비(보통 30~50만 원), 자동차보험료, 정비비 등이 추가로 발생합니다. 딜러를 통한 구매 시 알선 수수료도 고려해야 합니다.',
  },
  {
    q: '인증중고차란 무엇인가요?',
    a: '인증중고차(CPO: Certified Pre-Owned)는 제조사나 공식 딜러가 엄격한 점검을 거쳐 품질을 보증하는 중고차입니다. 현대·기아, BMW, 벤츠 등에서 운영하며, 일반 중고차보다 가격이 높지만 보증 연장, 정비 이력 투명성 등의 장점이 있습니다.',
  },
  {
    q: '신차 할인을 받는 방법은?',
    a: '신차 할인은 월말·분기말·연말 구매, 재고 차량 선택, 카드사 프로모션 활용, 출고 대기 차량 구매 등으로 받을 수 있습니다. 또한 전시 차량이나 시승 차량도 5~10% 할인된 가격에 구매 가능합니다.',
  },
  {
    q: '중고차 보증은 어떻게 되나요?',
    a: '일반 중고차는 매매업체에서 1~3개월 보증을 제공합니다. 인증중고차는 제조사에서 1~2년 보증을 제공하며, 별도의 연장보증 상품도 가입할 수 있습니다. 개인 거래 시에는 보증이 없으므로 사전 점검이 중요합니다.',
  },
  {
    q: '리스 vs 구매 어떤 것이 유리한가요?',
    a: '리스는 초기 비용이 적고 월 납입금이 일정하며, 사업자의 경우 세금 혜택이 있습니다. 반면 구매는 차량 소유권을 갖고 감가상각 이후 잔존가치를 활용할 수 있습니다. 3년 이내 교체 계획이면 리스, 5년 이상 보유하면 구매가 유리합니다.',
  },
];

function formatManWon(value: number): string {
  if (value >= 10000) {
    const eok = Math.floor(value / 10000);
    const man = Math.round(value % 10000);
    if (man === 0) return `${eok}억 원`;
    return `${eok}억 ${man.toLocaleString('ko-KR')}만 원`;
  }
  return `${Math.round(value).toLocaleString('ko-KR')}만 원`;
}

interface CostBreakdown {
  purchasePrice: number;
  registrationTax: number;
  totalInsurance: number;
  totalFuel: number;
  totalMaintenance: number;
  depreciationCost: number;
  residualValue: number;
  totalCost: number;
}

function calculateCosts(
  newCarPrice: number,
  newCarEfficiency: number,
  usedCarPrice: number,
  usedCarAge: number,
  usedCarEfficiency: number,
  holdingPeriod: number,
  annualDistance: number,
  fuelPrice: number,
): { newCar: CostBreakdown; usedCar: CostBreakdown } {
  // --- New car ---
  const newRegTax = Math.round(newCarPrice * 0.07);
  let newInsuranceTotal = 0;
  let newInsurancePremium = 80; // 첫해 80만원
  for (let y = 0; y < holdingPeriod; y++) {
    newInsuranceTotal += newInsurancePremium;
    newInsurancePremium = Math.round(newInsurancePremium * 0.95 * 100) / 100;
  }

  const newFuelAnnual = Math.round((annualDistance / newCarEfficiency) * fuelPrice / 10000 * 100) / 100;
  const newFuelTotal = Math.round(newFuelAnnual * holdingPeriod * 100) / 100;

  let newMaintenanceTotal = 0;
  for (let y = 1; y <= holdingPeriod; y++) {
    if (y <= 2) newMaintenanceTotal += 30;
    else newMaintenanceTotal += 50;
  }

  let newRemainingValue = newCarPrice;
  for (let y = 1; y <= holdingPeriod; y++) {
    if (y === 1) newRemainingValue *= 0.80;
    else if (y === 2) newRemainingValue *= 0.85;
    else newRemainingValue *= 0.90;
  }
  newRemainingValue = Math.round(newRemainingValue);
  const newDepreciation = newCarPrice - newRemainingValue;

  const newTotalCost = Math.round(
    newCarPrice + newRegTax + newInsuranceTotal + newFuelTotal + newMaintenanceTotal - newRemainingValue
  );

  // --- Used car ---
  const usedRegTax = Math.round(usedCarPrice * 0.07);
  let usedInsuranceTotal = 0;
  let usedInsurancePremium = 65; // 첫해 65만원
  for (let y = 0; y < holdingPeriod; y++) {
    usedInsuranceTotal += usedInsurancePremium;
    usedInsurancePremium = Math.round(usedInsurancePremium * 0.95 * 100) / 100;
  }

  const usedFuelAnnual = Math.round((annualDistance / usedCarEfficiency) * fuelPrice / 10000 * 100) / 100;
  const usedFuelTotal = Math.round(usedFuelAnnual * holdingPeriod * 100) / 100;

  let usedMaintenanceTotal = 0;
  for (let y = 1; y <= holdingPeriod; y++) {
    const maintenanceCost = 60 + (y - 1) * 10;
    usedMaintenanceTotal += maintenanceCost;
  }

  let usedRemainingValue = usedCarPrice;
  for (let y = 1; y <= holdingPeriod; y++) {
    usedRemainingValue *= 0.92;
  }
  usedRemainingValue = Math.round(usedRemainingValue);
  const usedDepreciation = usedCarPrice - usedRemainingValue;

  const usedTotalCost = Math.round(
    usedCarPrice + usedRegTax + usedInsuranceTotal + usedFuelTotal + usedMaintenanceTotal - usedRemainingValue
  );

  return {
    newCar: {
      purchasePrice: newCarPrice,
      registrationTax: newRegTax,
      totalInsurance: Math.round(newInsuranceTotal),
      totalFuel: Math.round(newFuelTotal),
      totalMaintenance: newMaintenanceTotal,
      depreciationCost: newDepreciation,
      residualValue: newRemainingValue,
      totalCost: newTotalCost,
    },
    usedCar: {
      purchasePrice: usedCarPrice,
      registrationTax: usedRegTax,
      totalInsurance: Math.round(usedInsuranceTotal),
      totalFuel: Math.round(usedFuelTotal),
      totalMaintenance: usedMaintenanceTotal,
      depreciationCost: usedDepreciation,
      residualValue: usedRemainingValue,
      totalCost: usedTotalCost,
    },
  };
}

export default function NewVsUsedCarCalculator() {
  const [newCarPrice, setNewCarPrice] = useState('3000');
  const [newCarEfficiency, setNewCarEfficiency] = useState('12');
  const [usedCarPrice, setUsedCarPrice] = useState('1800');
  const [usedCarAge, setUsedCarAge] = useState('3');
  const [usedCarEfficiency, setUsedCarEfficiency] = useState('11');
  const [holdingPeriod, setHoldingPeriod] = useState('5');
  const [annualDistance, setAnnualDistance] = useState('15000');
  const [fuelPrice, setFuelPrice] = useState('1650');

  const [result, setResult] = useState<ReturnType<typeof calculateCosts> | null>(null);

  const handleCalculate = () => {
    const np = parseInt(newCarPrice.replace(/,/g, '')) || 0;
    const ne = parseFloat(newCarEfficiency) || 0;
    const up = parseInt(usedCarPrice.replace(/,/g, '')) || 0;
    const ua = parseInt(usedCarAge) || 0;
    const ue = parseFloat(usedCarEfficiency) || 0;
    const hp = parseInt(holdingPeriod) || 0;
    const ad = parseInt(annualDistance.replace(/,/g, '')) || 0;
    const fp = parseInt(fuelPrice.replace(/,/g, '')) || 0;

    if (np > 0 && ne > 0 && up > 0 && ue > 0 && hp > 0 && ad > 0 && fp > 0) {
      setResult(calculateCosts(np, ne, up, ua, ue, hp, ad, fp));
    }
  };

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

  const maxTotal = result
    ? Math.max(result.newCar.totalCost, result.usedCar.totalCost)
    : 0;

  const costItems: { label: string; newKey: keyof CostBreakdown; usedKey: keyof CostBreakdown }[] = [
    { label: '구입비', newKey: 'purchasePrice', usedKey: 'purchasePrice' },
    { label: '취등록세', newKey: 'registrationTax', usedKey: 'registrationTax' },
    { label: '보험료 합계', newKey: 'totalInsurance', usedKey: 'totalInsurance' },
    { label: '유류비 합계', newKey: 'totalFuel', usedKey: 'totalFuel' },
    { label: '정비비 합계', newKey: 'totalMaintenance', usedKey: 'totalMaintenance' },
    { label: '감가상각 비용', newKey: 'depreciationCost', usedKey: 'depreciationCost' },
  ];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '신차 vs 중고차 총비용 비교 계산기',
          description: '신차와 중고차의 5년 총비용을 비교 계산합니다.',
          url: `${BASE_URL}/calculator/new-vs-used-car`,
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
            { '@type': 'ListItem', position: 2, name: '신차 vs 중고차 비교', item: `${BASE_URL}/calculator/new-vs-used-car` },
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
              <li className="text-gray-900 font-medium">신차 vs 중고차 비교</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">신차 vs 중고차 총비용 비교 계산기</h1>
            <p className="text-gray-600">신차와 중고차의 총비용을 비교합니다. 구입비, 취등록세, 보험료, 유류비, 정비비, 감가상각까지 모든 비용을 계산합니다.</p>
          </div>

          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* New Car Inputs */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">신차 정보</h2>
              <p className="text-sm text-gray-500 mb-5">새 차량의 가격과 연비를 입력하세요</p>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">차량 가격</label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={newCarPrice}
                    onChange={(e) => handleNumericInput(e.target.value, setNewCarPrice, true)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-16"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[2000, 3000, 4000, 5000].map((p) => (
                    <button key={p} onClick={() => setNewCarPrice(p.toLocaleString('ko-KR'))} className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 text-gray-600 rounded-lg transition-colors">
                      {p.toLocaleString()}만
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">연비 (km/L)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={newCarEfficiency}
                    onChange={(e) => setNewCarEfficiency(e.target.value)}
                    step="0.1"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-16"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km/L</span>
                </div>
              </div>
            </div>

            {/* Used Car Inputs */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">중고차 정보</h2>
              <p className="text-sm text-gray-500 mb-5">중고 차량의 가격, 연식, 연비를 입력하세요</p>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">차량 가격</label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={usedCarPrice}
                    onChange={(e) => handleNumericInput(e.target.value, setUsedCarPrice, true)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-16"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[1000, 1500, 1800, 2500].map((p) => (
                    <button key={p} onClick={() => setUsedCarPrice(p.toLocaleString('ko-KR'))} className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 text-gray-600 rounded-lg transition-colors">
                      {p.toLocaleString()}만
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">차량 연식</label>
                <div className="relative">
                  <input
                    type="number"
                    value={usedCarAge}
                    onChange={(e) => setUsedCarAge(e.target.value)}
                    min="1"
                    max="15"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">년</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[1, 2, 3, 5].map((y) => (
                    <button key={y} onClick={() => setUsedCarAge(y.toString())} className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 text-gray-600 rounded-lg transition-colors">
                      {y}년
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">연비 (km/L)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={usedCarEfficiency}
                    onChange={(e) => setUsedCarEfficiency(e.target.value)}
                    step="0.1"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-16"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km/L</span>
                </div>
              </div>
            </div>
          </div>

          {/* Common Inputs */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">공통 조건</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">보유 기간</label>
                <div className="relative">
                  <input
                    type="number"
                    value={holdingPeriod}
                    onChange={(e) => setHoldingPeriod(e.target.value)}
                    min="1"
                    max="10"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">년</span>
                </div>
              </div>
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
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">유가 (원/L)</label>
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
            비교 계산하기
          </button>

          {/* Results */}
          {result ? (
            <div className="space-y-8 mb-12">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
                  <div className="text-center">
                    <div className="text-sm text-blue-600 font-semibold mb-1">신차 총비용</div>
                    <div className="text-3xl font-bold text-gray-900">{formatManWon(result.newCar.totalCost)}</div>
                    <div className="text-xs text-gray-500 mt-1">{parseInt(holdingPeriod)}년 기준 실질 비용</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
                  <div className="text-center">
                    <div className="text-sm text-green-600 font-semibold mb-1">중고차 총비용</div>
                    <div className="text-3xl font-bold text-gray-900">{formatManWon(result.usedCar.totalCost)}</div>
                    <div className="text-xs text-gray-500 mt-1">{parseInt(holdingPeriod)}년 기준 실질 비용</div>
                  </div>
                </div>
              </div>

              {/* Difference & Recommendation */}
              <div className="bg-amber-50 rounded-2xl p-6 text-center">
                <div className="text-sm text-amber-700 font-medium mb-2">비용 차이</div>
                <div className="text-2xl font-bold text-amber-900 mb-2">
                  {formatManWon(Math.abs(result.newCar.totalCost - result.usedCar.totalCost))}
                </div>
                <div className="text-amber-800">
                  {result.newCar.totalCost > result.usedCar.totalCost ? (
                    <span><strong>중고차</strong>가 <strong>{formatManWon(result.newCar.totalCost - result.usedCar.totalCost)}</strong> 더 경제적입니다</span>
                  ) : result.usedCar.totalCost > result.newCar.totalCost ? (
                    <span><strong>신차</strong>가 <strong>{formatManWon(result.usedCar.totalCost - result.newCar.totalCost)}</strong> 더 경제적입니다</span>
                  ) : (
                    <span>신차와 중고차의 총비용이 동일합니다</span>
                  )}
                </div>
              </div>

              {/* Detailed Comparison */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">항목별 비용 비교</h3>
                <div className="space-y-4">
                  {costItems.map((item) => {
                    const newVal = result.newCar[item.newKey];
                    const usedVal = result.usedCar[item.usedKey];
                    return (
                      <div key={item.label}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                          <div className="flex gap-4 text-sm">
                            <span className="text-blue-600 font-semibold">{formatManWon(newVal)}</span>
                            <span className="text-green-600 font-semibold">{formatManWon(usedVal)}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                              <div
                                className="bg-blue-400 h-full rounded-full transition-all duration-500"
                                style={{ width: `${maxTotal > 0 ? (newVal / maxTotal) * 100 : 0}%` }}
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                              <div
                                className="bg-green-400 h-full rounded-full transition-all duration-500"
                                style={{ width: `${maxTotal > 0 ? (usedVal / maxTotal) * 100 : 0}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-900">총비용 (실질비용)</span>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-700 font-bold">{formatManWon(result.newCar.totalCost)}</span>
                        <span className="text-green-700 font-bold">{formatManWon(result.usedCar.totalCost)}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-full h-5 overflow-hidden">
                          <div
                            className="bg-blue-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${maxTotal > 0 ? (result.newCar.totalCost / maxTotal) * 100 : 0}%` }}
                          />
                        </div>
                        <div className="text-xs text-center text-blue-600 mt-1">신차</div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-full h-5 overflow-hidden">
                          <div
                            className="bg-green-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${maxTotal > 0 ? (result.usedCar.totalCost / maxTotal) * 100 : 0}%` }}
                          />
                        </div>
                        <div className="text-xs text-center text-green-600 mt-1">중고차</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">참고사항</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>* 취등록세는 차량가의 7% 기준이며, 경차/하이브리드/전기차는 감면이 적용될 수 있습니다.</li>
                  <li>* 보험료는 평균적인 수치이며, 운전자 경력·나이·차종에 따라 달라집니다.</li>
                  <li>* 중고차의 경우 매매 수수료, 정비 이력에 따른 추가 비용이 발생할 수 있습니다.</li>
                  <li>* 감가상각은 일반적인 비율을 적용한 것으로, 인기 차종은 감가율이 낮을 수 있습니다.</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 text-center py-16 mb-12">
              <div className="text-6xl mb-4">&#x1F697;&#x21C6;&#x1F699;</div>
              <p className="text-gray-500">차량 정보를 입력하고<br />비교 계산하기 버튼을 누르세요</p>
            </div>
          )}

          {/* Situation Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">상황별 추천</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-blue-900 text-lg mb-4">신차 추천</h3>
                <ul className="space-y-3">
                  {[
                    { title: '장기 보유 계획 (5년+)', desc: '오래 탈수록 신차의 초기 비용이 분산되어 유리합니다' },
                    { title: '최신 안전사양 중요', desc: 'ADAS, 에어백 등 최신 안전 기술을 원할 때' },
                    { title: '리스/할부 이용 시', desc: '신차 전용 저금리 할부, 잔가 보장 리스 활용 가능' },
                    { title: '신차 딜 활용 시', desc: '월말/분기말 프로모션, 전시차 할인 등 활용 가능' },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      <div>
                        <div className="font-medium text-blue-900 text-sm">{item.title}</div>
                        <div className="text-xs text-blue-700">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-bold text-green-900 text-lg mb-4">중고차 추천</h3>
                <ul className="space-y-3">
                  {[
                    { title: '첫 차 구매', desc: '운전 미숙으로 인한 사고 부담을 줄일 수 있습니다' },
                    { title: '3년 이내 교체 예정', desc: '단기 보유 시 감가상각 부담이 적습니다' },
                    { title: '현금 구매', desc: '목돈이 있다면 이자 부담 없이 저렴하게 구매 가능' },
                    { title: '감가상각 부담 줄이고 싶을 때', desc: '이미 감가가 진행된 차량으로 추가 손실 최소화' },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      <div>
                        <div className="font-medium text-green-900 text-sm">{item.title}</div>
                        <div className="text-xs text-green-700">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Year Guide */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">연식별 중고차 가이드</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  range: '1~2년',
                  title: '인증중고차 추천',
                  desc: '거의 신차 상태, 20~30% 저렴',
                  color: 'bg-emerald-50 border-emerald-100',
                  textColor: 'text-emerald-900',
                  descColor: 'text-emerald-700',
                },
                {
                  range: '3~5년',
                  title: '가성비 최적 구간',
                  desc: '안정기 진입, 40~50% 저렴',
                  color: 'bg-amber-50 border-amber-100',
                  textColor: 'text-amber-900',
                  descColor: 'text-amber-700',
                },
                {
                  range: '5~7년',
                  title: '꼼꼼한 점검 필수',
                  desc: '정비 이력 확인 필수',
                  color: 'bg-orange-50 border-orange-100',
                  textColor: 'text-orange-900',
                  descColor: 'text-orange-700',
                },
                {
                  range: '7년+',
                  title: '폐차 고려 구간',
                  desc: '수리비 vs 차량 가치 비교 필요',
                  color: 'bg-red-50 border-red-100',
                  textColor: 'text-red-900',
                  descColor: 'text-red-700',
                },
              ].map((item) => (
                <div key={item.range} className={`${item.color} rounded-2xl p-5 border`}>
                  <div className="text-xs font-bold text-gray-500 mb-1">{item.range}</div>
                  <div className={`font-bold ${item.textColor} mb-1`}>{item.title}</div>
                  <div className={`text-sm ${item.descColor}`}>{item.desc}</div>
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
              <p className="text-amber-100 mb-6">감가상각 계산기와 중고차 구매 체크리스트를 확인해보세요</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/calculator/depreciation"
                  className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  감가상각 계산기
                </Link>
                <Link
                  href="/guide/used-car-buying-checklist"
                  className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                >
                  중고차 구매 체크리스트
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
