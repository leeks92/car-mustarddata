'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  calculateFuelCost,
  formatWon,
  formatKoreanWon,
  DEFAULT_FUEL_PRICES,
  FUEL_TYPE_LABELS,
  type FuelType,
} from '@/lib/calculations';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

const fuelTypes: { value: FuelType; defaultEfficiency: number }[] = [
  { value: 'gasoline', defaultEfficiency: 12 },
  { value: 'diesel', defaultEfficiency: 14 },
  { value: 'lpg', defaultEfficiency: 9 },
  { value: 'electric', defaultEfficiency: 6 }, // km/kWh
];

function formatNumberWithComma(value: string): string {
  const num = value.replace(/[^0-9]/g, '');
  if (!num) return '';
  return Number(num).toLocaleString('ko-KR');
}

function parseFormattedNumber(value: string): string {
  return value.replace(/[^0-9]/g, '');
}

export default function FuelCostCalculator() {
  const [distance, setDistance] = useState<string>('300');
  const [fuelType, setFuelType] = useState<FuelType>('gasoline');
  const [efficiency, setEfficiency] = useState<string>('12');
  const [fuelPrice, setFuelPrice] = useState<string>(formatNumberWithComma(DEFAULT_FUEL_PRICES.gasoline.toString()));
  const [results, setResults] = useState<ReturnType<typeof calculateFuelCost>[] | null>(null);

  const handleFuelTypeChange = (type: FuelType) => {
    setFuelType(type);
    setFuelPrice(formatNumberWithComma(DEFAULT_FUEL_PRICES[type].toString()));
    const ft = fuelTypes.find((f) => f.value === type);
    if (ft) setEfficiency(ft.defaultEfficiency.toString());
  };

  const handleFuelPriceChange = (value: string) => {
    const raw = parseFormattedNumber(value);
    setFuelPrice(raw ? formatNumberWithComma(raw) : '');
  };

  const handleCalculate = () => {
    const d = parseFloat(distance) || 0;
    const e = parseFloat(efficiency) || 0;
    const p = parseFloat(parseFormattedNumber(fuelPrice)) || 0;
    if (d > 0 && e > 0 && p > 0) {
      // 선택한 유종 결과 + 다른 유종 비교
      const allResults = fuelTypes.map((ft) => {
        const price = ft.value === fuelType ? p : DEFAULT_FUEL_PRICES[ft.value];
        const eff = ft.value === fuelType ? e : ft.defaultEfficiency;
        return calculateFuelCost(d, eff, price, ft.value);
      });
      setResults(allResults);
    }
  };

  const mainResult = results?.find((r) => r.fuelType === FUEL_TYPE_LABELS[fuelType]);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '유류비 계산기',
          description: '주행 거리와 연비로 예상 유류비를 계산합니다.',
          url: `${BASE_URL}/calculator/fuel-cost`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '자동차 계산기', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '유류비 계산기', item: `${BASE_URL}/calculator/fuel-cost` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">유류비 계산기</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">유류비 계산기</h1>
          <p className="text-gray-600">주행 거리, 연비, 유가를 입력하면 예상 유류비를 계산합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">주행 정보</h2>

            <div className="mb-6">
              <label className="calculator-label">주행 거리</label>
              <div className="relative">
                <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} min="1" className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[50, 100, 200, 300, 500, 1000].map((d) => (
                  <button key={d} onClick={() => setDistance(d.toString())} className="quick-btn">
                    {d}km
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">유종</label>
              <div className="grid grid-cols-2 gap-2">
                {fuelTypes.map((ft) => (
                  <button
                    key={ft.value}
                    onClick={() => handleFuelTypeChange(ft.value)}
                    className={`py-2 px-3 rounded-lg border transition-colors text-sm ${
                      fuelType === ft.value
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    {FUEL_TYPE_LABELS[ft.value]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">
                연비 ({fuelType === 'electric' ? 'km/kWh' : 'km/L'})
              </label>
              <div className="relative">
                <input type="number" value={efficiency} onChange={(e) => setEfficiency(e.target.value)} step="0.1" min="1" className="calculator-input pr-20" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {fuelType === 'electric' ? 'km/kWh' : 'km/L'}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">
                {fuelType === 'electric' ? 'kWh당 단가' : '리터당 유가'}
              </label>
              <div className="relative">
                <input type="text" inputMode="numeric" value={fuelPrice} onChange={(e) => handleFuelPriceChange(e.target.value)} className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">원</span>
              </div>
            </div>

            <button onClick={handleCalculate} className="calculator-button">계산하기</button>
          </div>

          <div>
            {mainResult ? (
              <div className="space-y-6">
                <div className="result-card">
                  <div className="text-center mb-6">
                    <div className="result-label mb-1">예상 유류비</div>
                    <div className="result-value">{formatKoreanWon(mainResult.totalCost)}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">필요 연료량</span>
                      <span className="font-semibold">
                        {mainResult.fuelNeeded}{fuelType === 'electric' ? 'kWh' : 'L'}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">km당 비용</span>
                      <span className="font-semibold">{mainResult.costPerKm}원/km</span>
                    </div>
                  </div>
                </div>

                {results && (
                  <div className="bg-amber-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">유종별 비교</h3>
                    <div className="space-y-3">
                      {results.map((r) => (
                        <div
                          key={r.fuelType}
                          className={`flex justify-between items-center py-3 px-4 rounded-xl ${
                            r.fuelType === mainResult.fuelType
                              ? 'bg-amber-100 border border-amber-300'
                              : 'bg-white'
                          }`}
                        >
                          <div>
                            <span className="font-medium text-gray-900">{r.fuelType}</span>
                            <span className="text-xs text-gray-500 ml-2">
                              ({r.costPerKm}원/km)
                            </span>
                          </div>
                          <span className="font-bold text-gray-900">
                            {formatKoreanWon(r.totalCost)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">다른 계산기</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/calculator/depreciation" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      감가상각 계산기
                    </Link>
                    <Link href="/calculator/car-tax" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      자동차세 계산기
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-card text-center py-12">
                <div className="text-6xl mb-4">⛽</div>
                <p className="text-gray-500">주행 정보를 입력하고<br />계산하기 버튼을 누르세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
