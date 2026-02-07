'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  calculateDepreciation,
  formatKoreanWon,
  formatNumber,
} from '@/lib/calculations';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

export default function DepreciationCalculator() {
  const [originalPrice, setOriginalPrice] = useState<string>('3,500');
  const [currentAge, setCurrentAge] = useState<string>('3');
  const [mileage, setMileage] = useState<string>('45,000');
  const [result, setResult] = useState<ReturnType<typeof calculateDepreciation> | null>(null);

  const handleCalculate = () => {
    const p = parseInt(originalPrice.replace(/,/g, '')) * 10000 || 0;
    const age = parseInt(currentAge) || 0;
    const m = parseInt(mileage.replace(/,/g, '')) || 0;
    if (p > 0 && age >= 0) {
      setResult(calculateDepreciation(p, age, m));
    }
  };

  const handlePriceChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue) setOriginalPrice(parseInt(numericValue).toLocaleString('ko-KR'));
    else setOriginalPrice('');
  };

  const handleMileageChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue) setMileage(parseInt(numericValue).toLocaleString('ko-KR'));
    else setMileage('');
  };

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '자동차 감가상각 계산기',
          description: '연식·주행거리별 자동차 예상 시세를 계산합니다.',
          url: `${BASE_URL}/계산기/감가상각`,
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
            { '@type': 'ListItem', position: 2, name: '감가상각 계산기', item: `${BASE_URL}/계산기/감가상각` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">감가상각 계산기</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">자동차 감가상각 계산기</h1>
          <p className="text-gray-600">차량 가격, 연식, 주행거리를 입력하면 현재 예상 시세를 계산합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">차량 정보</h2>

            <div className="mb-6">
              <label className="calculator-label">신차 출고 가격</label>
              <div className="relative">
                <input type="text" value={originalPrice} onChange={(e) => handlePriceChange(e.target.value)} className="calculator-input pr-16" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[2000, 3000, 3500, 4000, 5000, 7000].map((p) => (
                  <button key={p} onClick={() => setOriginalPrice(p.toLocaleString('ko-KR'))} className="quick-btn">
                    {p.toLocaleString()}만
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">차량 연식 (등록 후 경과 연수)</label>
              <div className="relative">
                <input type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} min="0" max="20" className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">년</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[1, 2, 3, 5, 7, 10].map((y) => (
                  <button key={y} onClick={() => setCurrentAge(y.toString())} className="quick-btn">
                    {y}년
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">현재 주행거리</label>
              <div className="relative">
                <input type="text" value={mileage} onChange={(e) => handleMileageChange(e.target.value)} className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[10000, 30000, 50000, 70000, 100000, 150000].map((m) => (
                  <button key={m} onClick={() => setMileage(m.toLocaleString('ko-KR'))} className="quick-btn">
                    {formatNumber(m)}km
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleCalculate} className="calculator-button">계산하기</button>
          </div>

          <div>
            {result ? (
              <div className="space-y-6">
                <div className="result-card">
                  <div className="text-center mb-6">
                    <div className="result-label mb-1">예상 현재 시세</div>
                    <div className="result-value">{formatKoreanWon(result.estimatedValue)}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      감가상각률 {result.depreciationRate}%
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">신차 가격</span>
                      <span className="font-semibold">{formatKoreanWon(result.originalPrice)}</span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">감가상각 금액</span>
                      <span className="font-semibold text-red-600">-{formatKoreanWon(result.depreciationAmount)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">연도별 가치 변화</h3>
                  <div className="space-y-2">
                    {result.yearlyValues.map((item) => (
                      <div key={item.year} className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-10 shrink-0">{item.year}년</span>
                        <div className="flex-1 bg-white rounded-full h-6 overflow-hidden">
                          <div
                            className="bg-amber-400 h-full rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${Math.max(100 - item.rate, 10)}%` }}
                          >
                            <span className="text-xs font-medium text-amber-900 whitespace-nowrap">
                              {formatKoreanWon(item.value)}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 w-10 shrink-0 text-right">-{item.rate}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">참고사항</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>* 연간 평균 주행거리 15,000km 기준으로 주행거리 보정이 적용됩니다.</li>
                    <li>* 실제 중고차 시세는 차종, 옵션, 사고이력, 지역 등에 따라 달라질 수 있습니다.</li>
                    <li>* 인기 차종은 감가율이 낮고, 비인기 차종은 감가율이 높을 수 있습니다.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">다른 계산기</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/계산기/취등록세" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      취등록세 계산기
                    </Link>
                    <Link href="/계산기/유류비" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      유류비 계산기
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-card text-center py-12">
                <div className="text-6xl mb-4">📉</div>
                <p className="text-gray-500">차량 정보를 입력하고<br />계산하기 버튼을 누르세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
