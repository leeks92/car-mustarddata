'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  calculateRegistrationTax,
  formatWon,
  formatKoreanWon,
  type VehicleCategory,
} from '@/lib/calculations';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

const categoryOptions: { value: VehicleCategory; label: string; desc: string }[] = [
  { value: 'passenger', label: '승용차', desc: '비영업용 7%' },
  { value: 'compact', label: '경차', desc: '1000cc 이하 4%' },
  { value: 'truck', label: '화물·특수', desc: '5%' },
  { value: 'ev', label: '전기차', desc: '7% (최대 140만원 감면)' },
  { value: 'hybrid', label: '하이브리드', desc: '7% (최대 40만원 감면)' },
  { value: 'commercial', label: '영업용', desc: '4%' },
];

export default function RegistrationTaxCalculator() {
  const [price, setPrice] = useState<string>('3,000');
  const [category, setCategory] = useState<VehicleCategory>('passenger');
  const [isUsed, setIsUsed] = useState(false);
  const [isMultiChild, setIsMultiChild] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof calculateRegistrationTax> | null>(null);

  const handleCalculate = () => {
    const p = parseInt(price.replace(/,/g, '')) * 10000 || 0;
    if (p > 0) {
      setResult(calculateRegistrationTax(p, category, isUsed, isMultiChild));
    }
  };

  const handlePriceChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue) {
      setPrice(parseInt(numericValue).toLocaleString('ko-KR'));
    } else {
      setPrice('');
    }
  };

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '취등록세 계산기',
          description: '자동차 구매 시 취득세와 등록비용을 계산합니다.',
          url: `${BASE_URL}/calculator/registration-tax`,
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
            { '@type': 'ListItem', position: 2, name: '취등록세 계산기', item: `${BASE_URL}/calculator/registration-tax` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">취등록세 계산기</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">취등록세 계산기</h1>
          <p className="text-gray-600">자동차 구매 시 취득세와 등록비용을 계산합니다. (2026년 기준)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">차량 정보</h2>

            <div className="mb-6">
              <label className="calculator-label">차량 가격</label>
              <div className="relative">
                <input
                  type="text"
                  value={price}
                  onChange={(e) => handlePriceChange(e.target.value)}
                  className="calculator-input pr-16"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[1500, 2000, 3000, 4000, 5000, 7000, 10000].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPrice(p.toLocaleString('ko-KR'))}
                    className="quick-btn"
                  >
                    {p >= 10000 ? `${p / 10000}억` : `${p.toLocaleString()}만`}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">차량 유형</label>
              <div className="grid grid-cols-2 gap-2">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCategory(opt.value)}
                    className={`py-2 px-3 rounded-lg border transition-colors text-left ${
                      category === opt.value
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="text-sm font-medium">{opt.label}</div>
                    <div className={`text-xs ${category === opt.value ? 'text-amber-100' : 'text-gray-400'}`}>
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isUsed}
                  onChange={(e) => setIsUsed(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="text-sm text-gray-700">중고차</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMultiChild}
                  onChange={(e) => setIsMultiChild(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="text-sm text-gray-700">다자녀 가구 (18세 미만 3자녀 이상)</span>
              </label>
            </div>

            <button onClick={handleCalculate} className="calculator-button">계산하기</button>
          </div>

          <div>
            {result ? (
              <div className="space-y-6">
                <div className="result-card">
                  <div className="text-center mb-6">
                    <div className="result-label mb-1">총 등록 비용</div>
                    <div className="result-value">{formatKoreanWon(result.totalCost)}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">취득세 ({result.acquisitionTaxRate}%)</span>
                      <span className="font-semibold">{formatWon(result.acquisitionTax)}</span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">공채할인비용</span>
                      <span className="font-semibold">{formatWon(result.publicBond)}</span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">등록면허세</span>
                      <span className="font-semibold">{formatWon(result.registrationTax)}</span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">인지세</span>
                      <span className="font-semibold">{formatWon(result.stampTax)}</span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">번호판 대금</span>
                      <span className="font-semibold">{formatWon(result.plateNumberFee)}</span>
                    </div>
                  </div>
                </div>

                {result.reductions.length > 0 && (
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">적용된 감면</h3>
                    <ul className="space-y-2">
                      {result.reductions.map((r, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-green-700">
                          <span className="text-green-500">✓</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">차량 구매 총비용 예상</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">차량 가격</span>
                      <span className="font-medium">{formatKoreanWon(result.vehiclePrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">취등록비용</span>
                      <span className="font-medium">{formatKoreanWon(result.totalCost)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-amber-700">
                      <span>합계</span>
                      <span>{formatKoreanWon(result.vehiclePrice + result.totalCost)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">다른 계산기</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/calculator/installment" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      할부금 계산기
                    </Link>
                    <Link href="/calculator/car-tax" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      자동차세 계산기
                    </Link>
                    <Link href="/calculator/depreciation" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      감가상각 계산기
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-card text-center py-12">
                <div className="text-6xl mb-4">📋</div>
                <p className="text-gray-500">
                  차량 가격과 유형을 선택하고<br />계산하기 버튼을 누르세요.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 세율표 */}
        <section className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">차량 유형별 취득세율</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left text-gray-500 font-medium">차량 유형</th>
                  <th className="py-3 text-center text-gray-500 font-medium">취득세율</th>
                  <th className="py-3 text-center text-gray-500 font-medium">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3">비영업용 승용차</td>
                  <td className="py-3 text-center font-medium">7%</td>
                  <td className="py-3 text-center text-gray-500">-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">경차 (1000cc 이하)</td>
                  <td className="py-3 text-center font-medium">4%</td>
                  <td className="py-3 text-center text-green-600">세율 우대</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">화물·특수차</td>
                  <td className="py-3 text-center font-medium">5%</td>
                  <td className="py-3 text-center text-gray-500">-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">전기차</td>
                  <td className="py-3 text-center font-medium">7%</td>
                  <td className="py-3 text-center text-green-600">최대 140만원 감면</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">하이브리드</td>
                  <td className="py-3 text-center font-medium">7%</td>
                  <td className="py-3 text-center text-green-600">최대 40만원 감면</td>
                </tr>
                <tr>
                  <td className="py-3">영업용</td>
                  <td className="py-3 text-center font-medium">4%</td>
                  <td className="py-3 text-center text-gray-500">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
