'use client';

import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

function formatNumberWithComma(value: string): string {
  const num = value.replace(/[^0-9]/g, '');
  if (!num) return '';
  return Number(num).toLocaleString('ko-KR');
}

function parseFormattedNumber(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
}

interface LoanResult {
  label: string;
  rate: number;
  principal: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  firstMonthInterest: number;
  lastMonthInterest: number;
}

function calculateEqualPrincipalInterest(principal: number, annualRate: number, months: number): LoanResult {
  const monthlyRate = annualRate / 100 / 12;
  let monthlyPayment: number;
  let totalPayment: number;

  if (monthlyRate === 0) {
    monthlyPayment = principal / months;
    totalPayment = principal;
  } else {
    monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    totalPayment = monthlyPayment * months;
  }

  const firstMonthInterest = principal * monthlyRate;
  let lastBalance = principal;
  for (let i = 1; i < months; i++) {
    const interest = lastBalance * monthlyRate;
    const principalPart = monthlyPayment - interest;
    lastBalance -= principalPart;
  }
  const lastMonthInterest = lastBalance * monthlyRate;

  return {
    label: '',
    rate: annualRate,
    principal,
    monthlyPayment: Math.round(monthlyPayment),
    totalInterest: Math.round(totalPayment - principal),
    totalPayment: Math.round(totalPayment),
    firstMonthInterest: Math.round(firstMonthInterest),
    lastMonthInterest: Math.round(Math.max(lastMonthInterest, 0)),
  };
}

function calculateEqualPrincipal(principal: number, annualRate: number, months: number): LoanResult {
  const monthlyRate = annualRate / 100 / 12;
  const monthlyPrincipal = principal / months;
  let totalInterest = 0;

  for (let i = 0; i < months; i++) {
    const remaining = principal - monthlyPrincipal * i;
    totalInterest += remaining * monthlyRate;
  }

  const firstMonthPayment = monthlyPrincipal + principal * monthlyRate;
  const lastRemaining = principal - monthlyPrincipal * (months - 1);
  const lastMonthInterest = lastRemaining * monthlyRate;

  return {
    label: '',
    rate: annualRate,
    principal,
    monthlyPayment: Math.round(firstMonthPayment),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(principal + totalInterest),
    firstMonthInterest: Math.round(principal * monthlyRate),
    lastMonthInterest: Math.round(lastMonthInterest),
  };
}

export default function CarLoanComparisonCalculator() {
  const [carPrice, setCarPrice] = useState('3,000');
  const [downPayment, setDownPayment] = useState('500');
  const [loanMonths, setLoanMonths] = useState(48);
  const [bankRate, setBankRate] = useState('4.5');
  const [capitalRate, setCapitalRate] = useState('6.5');
  const [dealerRate, setDealerRate] = useState('8.0');
  const [repaymentType, setRepaymentType] = useState<'equal-pi' | 'equal-p'>('equal-pi');
  const [results, setResults] = useState<LoanResult[] | null>(null);

  const handleCalculate = () => {
    const price = parseFormattedNumber(carPrice) * 10000;
    const down = parseFormattedNumber(downPayment) * 10000;
    const principal = price - down;

    if (principal <= 0) return;

    const calcFn = repaymentType === 'equal-pi' ? calculateEqualPrincipalInterest : calculateEqualPrincipal;

    const bank = { ...calcFn(principal, parseFloat(bankRate) || 0, loanMonths), label: '은행 대출' };
    const capital = { ...calcFn(principal, parseFloat(capitalRate) || 0, loanMonths), label: '캐피탈 대출' };
    const dealer = { ...calcFn(principal, parseFloat(dealerRate) || 0, loanMonths), label: '딜러 할부' };

    setResults([bank, capital, dealer]);
  };

  const formatWon = (v: number) => v.toLocaleString('ko-KR');
  const bestResult = results ? results.reduce((a, b) => (a.totalInterest < b.totalInterest ? a : b)) : null;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '자동차 대출 비교 계산기',
          description: '은행·캐피탈·딜러 자동차 대출을 비교합니다.',
          url: `${BASE_URL}/calculator/car-loan-comparison`,
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
            { '@type': 'ListItem', position: 2, name: '자동차 대출 비교', item: `${BASE_URL}/calculator/car-loan-comparison` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">자동차 대출 비교 계산기</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">자동차 대출 비교 계산기</h1>
          <p className="text-gray-600">은행, 캐피탈, 딜러 대출의 금리와 월 납입금, 총 이자를 한눈에 비교하세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 입력 */}
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">대출 정보</h2>

            <div className="mb-6">
              <label className="calculator-label">차량 가격 (만원)</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={carPrice}
                  onChange={(e) => setCarPrice(formatNumberWithComma(e.target.value))}
                  className="calculator-input pr-16"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[2000, 3000, 4000, 5000, 7000].map((p) => (
                  <button key={p} onClick={() => setCarPrice(formatNumberWithComma(p.toString()))} className="quick-btn">
                    {p.toLocaleString()}만
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">선수금/계약금 (만원)</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={downPayment}
                  onChange={(e) => setDownPayment(formatNumberWithComma(e.target.value))}
                  className="calculator-input pr-16"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">대출 기간</label>
              <div className="grid grid-cols-4 gap-2">
                {[24, 36, 48, 60].map((m) => (
                  <button
                    key={m}
                    onClick={() => setLoanMonths(m)}
                    className={`py-2 px-3 rounded-lg border transition-colors text-sm ${
                      loanMonths === m
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    {m}개월
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">상환 방식</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'equal-pi' as const, label: '원리금균등' },
                  { value: 'equal-p' as const, label: '원금균등' },
                ].map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setRepaymentType(t.value)}
                    className={`py-2 px-3 rounded-lg border transition-colors text-sm ${
                      repaymentType === t.value
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-700 mb-3 mt-8 border-t pt-4">대출 유형별 금리 (%)</h3>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">은행</label>
                <input type="number" value={bankRate} onChange={(e) => setBankRate(e.target.value)} step="0.1" min="0" className="calculator-input text-center" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">캐피탈</label>
                <input type="number" value={capitalRate} onChange={(e) => setCapitalRate(e.target.value)} step="0.1" min="0" className="calculator-input text-center" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">딜러</label>
                <input type="number" value={dealerRate} onChange={(e) => setDealerRate(e.target.value)} step="0.1" min="0" className="calculator-input text-center" />
              </div>
            </div>

            <button onClick={handleCalculate} className="calculator-button">비교하기</button>
          </div>

          {/* 결과 */}
          <div>
            {results ? (
              <div className="space-y-6">
                {/* 3종 비교 카드 */}
                {results.map((r) => {
                  const isBest = r.label === bestResult?.label;
                  return (
                    <div
                      key={r.label}
                      className={`rounded-2xl p-5 ${
                        isBest
                          ? 'bg-amber-50 border-2 border-amber-400'
                          : 'bg-white border border-gray-100 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">{r.label}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">연 {r.rate}%</span>
                          {isBest && (
                            <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">최저</span>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <p className="text-xs text-gray-500">월 납입금</p>
                          <p className="text-lg font-bold text-gray-900">{formatWon(r.monthlyPayment)}<span className="text-sm font-normal">원</span></p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">총 이자</p>
                          <p className="text-lg font-bold text-red-600">{formatWon(r.totalInterest)}<span className="text-sm font-normal">원</span></p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">총 상환액</p>
                          <p className="text-lg font-bold text-gray-900">{formatWon(r.totalPayment)}<span className="text-sm font-normal">원</span></p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* 이자 차이 */}
                {results.length >= 2 && (
                  <div className="bg-blue-50 rounded-2xl p-5 text-center">
                    <p className="text-sm text-blue-600 mb-1">은행 vs 딜러 이자 차이</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {formatWon(results[2].totalInterest - results[0].totalInterest)}원
                    </p>
                    <p className="text-sm text-blue-500 mt-1">
                      은행 대출 선택 시 {formatWon(results[2].totalInterest - results[0].totalInterest)}원 절약
                    </p>
                  </div>
                )}

                {/* 상환 스케줄 요약 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">상환 스케줄 요약</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="py-2 px-3 text-left">유형</th>
                          <th className="py-2 px-3 text-right">첫 달 이자</th>
                          <th className="py-2 px-3 text-right">마지막 달 이자</th>
                          <th className="py-2 px-3 text-right">총 이자</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {results.map((r) => (
                          <tr key={r.label}>
                            <td className="py-2 px-3 font-medium">{r.label}</td>
                            <td className="py-2 px-3 text-right">{formatWon(r.firstMonthInterest)}원</td>
                            <td className="py-2 px-3 text-right">{formatWon(r.lastMonthInterest)}원</td>
                            <td className="py-2 px-3 text-right font-semibold text-red-600">{formatWon(r.totalInterest)}원</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">다른 계산기</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/calculator/installment" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      할부금 계산기
                    </Link>
                    <Link href="/calculator/registration-tax" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      취등록세 계산기
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-card text-center py-12">
                <div className="text-6xl mb-4">🏦</div>
                <p className="text-gray-500">대출 정보를 입력하고<br />비교하기 버튼을 누르세요.</p>
              </div>
            )}
          </div>
        </div>

        {/* 대출 유형별 특징 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-12 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">대출 유형별 특징 비교</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50">
                  <th className="py-3 px-4 text-left font-semibold">항목</th>
                  <th className="py-3 px-4 text-center font-semibold">은행 대출</th>
                  <th className="py-3 px-4 text-center font-semibold">캐피탈 대출</th>
                  <th className="py-3 px-4 text-center font-semibold">딜러 할부</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { item: '금리 범위', bank: '3.5~6%', capital: '5~9%', dealer: '6~12%' },
                  { item: '심사 기간', bank: '3~7일', capital: '1~3일', dealer: '당일~1일' },
                  { item: '심사 난이도', bank: '까다로움', capital: '보통', dealer: '쉬움' },
                  { item: '필요 서류', bank: '소득증빙 필수', capital: '간소화 가능', dealer: '최소한' },
                  { item: '중도상환 수수료', bank: '0~1.5%', capital: '1~2%', dealer: '2~3%' },
                  { item: '추천 대상', bank: '신용 우수, 시간 여유', capital: '빠른 승인 필요', dealer: '편의성 우선' },
                ].map((row) => (
                  <tr key={row.item}>
                    <td className="py-3 px-4 font-medium text-gray-900">{row.item}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.bank}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.capital}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.dealer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 체크리스트 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">자동차 대출 체크리스트</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '신용점수 확인', desc: '대출 신청 전 신용점수를 확인하세요. 점수가 높을수록 금리가 낮아집니다.' },
              { title: '금리 비교 필수', desc: '최소 3곳 이상 금리를 비교하세요. 같은 은행도 지점마다 다를 수 있습니다.' },
              { title: '중도상환 수수료 확인', desc: '조기 상환 계획이 있다면 중도상환 수수료가 낮은 곳을 선택하세요.' },
              { title: '총 상환액 비교', desc: '월 납입금이 아닌 총 상환액을 기준으로 비교하세요.' },
              { title: '숨은 비용 확인', desc: '인지세, 보증료, 근저당 설정비 등 부대비용을 확인하세요.' },
              { title: '무이자 할부 조건 확인', desc: '딜러 무이자 할부는 차량 할인이 제한될 수 있으니 총비용을 비교하세요.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
          <div className="space-y-3">
            {[
              { q: '자동차 대출과 할부의 차이는?', a: '대출은 금융기관에서 돈을 빌려 차를 사는 것이고, 할부는 딜러나 카드사가 차량 대금을 나눠 받는 것입니다. 대출은 차량이 본인 명의로 바로 등록되고, 할부는 완납 전까지 소유권이 할부사에 있을 수 있습니다.' },
              { q: '원리금균등과 원금균등 중 어느 것이 유리한가요?', a: '총 이자 부담은 원금균등이 적지만, 초기 부담이 큽니다. 원리금균등은 매달 동일 금액을 내므로 예산 관리가 편합니다. 자금 여유가 있다면 원금균등이 유리합니다.' },
              { q: '신차와 중고차 대출 금리가 다른가요?', a: '네, 중고차 대출은 신차보다 금리가 1~3%p 높은 것이 일반적입니다. 중고차는 담보 가치 하락이 빠르기 때문입니다.' },
              { q: '무이자 할부는 정말 이자가 없나요?', a: '대출 이자는 없지만, 무이자 할부 시 차량 할인이 제한되는 경우가 많습니다. 할인 포기 금액과 이자를 비교해야 합니다.' },
              { q: '자동차 대출 시 신용등급에 영향이 있나요?', a: '대출 실행 자체는 단기적으로 신용점수를 소폭 낮출 수 있지만, 꾸준히 상환하면 오히려 신용점수가 올라갑니다.' },
              { q: '중도상환 시 수수료는 얼마인가요?', a: '은행은 0~1.5%, 캐피탈은 1~2%, 딜러는 2~3% 수준입니다. 대출 후 3년이 지나면 중도상환 수수료가 면제되는 곳도 있습니다.' },
              { q: '보증금(선수금)은 얼마가 적당한가요?', a: '일반적으로 차량 가격의 20~30%를 선수금으로 내면 금리 협상에 유리합니다. 선수금이 높을수록 총 이자 부담이 줄어듭니다.' },
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-100 rounded-xl">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-amber-50 rounded-xl transition-colors">
                  <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
