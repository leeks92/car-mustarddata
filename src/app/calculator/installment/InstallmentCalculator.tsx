'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  calculateInstallment,
  formatWon,
  formatKoreanWon,
  formatNumber,
  type RepaymentType,
} from '@/lib/calculations';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

export default function InstallmentCalculator() {
  const [principal, setPrincipal] = useState<string>('3,000');
  const [annualRate, setAnnualRate] = useState<string>('5.9');
  const [months, setMonths] = useState<string>('60');
  const [repaymentType, setRepaymentType] = useState<RepaymentType>('equal-payment');
  const [showSchedule, setShowSchedule] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof calculateInstallment> | null>(null);

  const handleCalculate = () => {
    const p = parseInt(principal.replace(/,/g, '')) * 10000 || 0;
    const r = parseFloat(annualRate) || 0;
    const m = parseInt(months) || 0;
    if (p > 0 && r >= 0 && m > 0) {
      setResult(calculateInstallment(p, r, m, repaymentType));
      setShowSchedule(false);
    }
  };

  const handlePrincipalChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue) {
      setPrincipal(parseInt(numericValue).toLocaleString('ko-KR'));
    } else {
      setPrincipal('');
    }
  };

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '자동차 할부금 계산기',
          description: '자동차 할부 월 납입금과 이자를 계산합니다.',
          url: `${BASE_URL}/calculator/installment`,
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
            { '@type': 'ListItem', position: 2, name: '할부금 계산기', item: `${BASE_URL}/calculator/installment` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">할부금 계산기</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">자동차 할부금 계산기</h1>
          <p className="text-gray-600">할부 원금, 금리, 기간을 입력하면 월 납입금과 총 이자를 계산합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">할부 정보</h2>

            <div className="mb-6">
              <label htmlFor="installmentPrincipal" className="calculator-label">할부 원금 (차량 가격 - 선수금)</label>
              <div className="relative">
                <input id="installmentPrincipal" type="text" value={principal} onChange={(e) => handlePrincipalChange(e.target.value)} className="calculator-input pr-16" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[1000, 2000, 3000, 4000, 5000].map((p) => (
                  <button key={p} onClick={() => setPrincipal(p.toLocaleString('ko-KR'))} className="quick-btn">
                    {p.toLocaleString()}만
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="annualRate" className="calculator-label">연 금리</label>
              <div className="relative">
                <input id="annualRate" type="number" value={annualRate} onChange={(e) => setAnnualRate(e.target.value)} step="0.1" min="0" max="30" className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">%</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[3.9, 4.9, 5.9, 6.9, 7.9, 8.9].map((r) => (
                  <button key={r} onClick={() => setAnnualRate(r.toString())} className="quick-btn">
                    {r}%
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="installmentMonths" className="calculator-label">할부 기간</label>
              <div className="relative">
                <input id="installmentMonths" type="number" value={months} onChange={(e) => setMonths(e.target.value)} min="6" max="120" className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">개월</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[12, 24, 36, 48, 60, 72].map((m) => (
                  <button key={m} onClick={() => setMonths(m.toString())} className="quick-btn">
                    {m}개월 ({m / 12}년)
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">상환 방식</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setRepaymentType('equal-payment')}
                  className={`py-3 px-4 rounded-lg border transition-colors text-sm ${
                    repaymentType === 'equal-payment'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="font-medium">원리금균등</div>
                  <div className={`text-xs mt-0.5 ${repaymentType === 'equal-payment' ? 'text-amber-100' : 'text-gray-400'}`}>매월 동일 금액</div>
                </button>
                <button
                  onClick={() => setRepaymentType('equal-principal')}
                  className={`py-3 px-4 rounded-lg border transition-colors text-sm ${
                    repaymentType === 'equal-principal'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="font-medium">원금균등</div>
                  <div className={`text-xs mt-0.5 ${repaymentType === 'equal-principal' ? 'text-amber-100' : 'text-gray-400'}`}>점점 줄어드는 금액</div>
                </button>
              </div>
            </div>

            <button onClick={handleCalculate} className="calculator-button">계산하기</button>
          </div>

          <div>
            {result ? (
              <div className="space-y-6">
                <div className="result-card">
                  <div className="text-center mb-6">
                    <div className="result-label mb-1">
                      {repaymentType === 'equal-payment' ? '월 납입금' : '첫 달 납입금'}
                    </div>
                    <div className="result-value">{formatKoreanWon(result.monthlyPayment)}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">할부 원금</span>
                      <span className="font-semibold">{formatKoreanWon(result.principal)}</span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">총 이자</span>
                      <span className="font-semibold text-red-600">{formatKoreanWon(result.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4 font-bold">
                      <span className="text-gray-800">총 상환금</span>
                      <span>{formatKoreanWon(result.totalPayment)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">상환 스케줄</h3>
                    <button
                      onClick={() => setShowSchedule(!showSchedule)}
                      className="text-sm text-amber-600 hover:text-amber-800"
                    >
                      {showSchedule ? '접기' : '펼치기'}
                    </button>
                  </div>
                  {showSchedule && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-amber-200">
                            <th className="py-2 text-center">회차</th>
                            <th className="py-2 text-right">납입금</th>
                            <th className="py-2 text-right">원금</th>
                            <th className="py-2 text-right">이자</th>
                            <th className="py-2 text-right">잔액</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.schedule.map((item) => (
                            <tr key={item.month} className="border-b border-amber-100">
                              <td className="py-1.5 text-center">{item.month}</td>
                              <td className="py-1.5 text-right">{formatNumber(item.payment)}</td>
                              <td className="py-1.5 text-right">{formatNumber(item.principal)}</td>
                              <td className="py-1.5 text-right text-red-600">{formatNumber(item.interest)}</td>
                              <td className="py-1.5 text-right">{formatNumber(item.remainingBalance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">다른 계산기</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/calculator/registration-tax" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      취등록세 계산기
                    </Link>
                    <Link href="/calculator/fuel-cost" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      유류비 계산기
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-card text-center py-12">
                <div className="text-6xl mb-4">💳</div>
                <p className="text-gray-500">할부 정보를 입력하고<br />계산하기 버튼을 누르세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
