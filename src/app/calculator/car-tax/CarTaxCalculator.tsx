'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  calculateCarTax,
  formatWon,
  formatKoreanWon,
  type CarType,
} from '@/lib/calculations';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

const carTaxFaqs = [
  {
    question: '자동차세 연납 할인은 얼마인가요?',
    answer:
      '2026년 기준 1월 연납 시 약 4.57% 할인, 3월 3.76%, 6월 2.52%, 9월 1.26% 할인이 적용됩니다.',
  },
  {
    question: '전기차 자동차세는 얼마인가요?',
    answer:
      '전기차는 배기량이 없어 연 10만원의 정액 자동차세가 부과됩니다. 지방교육세(30%)를 포함하면 연 13만원입니다.',
  },
  {
    question: '차령 경감은 어떻게 적용되나요?',
    answer:
      '차량 등록 후 3년차부터 매년 5%씩 경감되며, 최대 50%까지 경감됩니다. 12년 이상 된 차량은 50% 경감이 적용됩니다.',
  },
  {
    question: '자동차세는 어디서 납부하나요?',
    answer:
      '위택스(wetax.go.kr), 인터넷 지로(giro.or.kr), 각 지방자치단체 세무 포털, 은행 CD/ATM에서 납부할 수 있습니다.',
  },
];

export default function CarTaxCalculator() {
  const [displacement, setDisplacement] = useState<string>('2,000');
  const [carAge, setCarAge] = useState<string>('1');
  const [carType, setCarType] = useState<CarType>('sedan');
  const [result, setResult] = useState<ReturnType<typeof calculateCarTax> | null>(null);

  const handleCalculate = () => {
    const cc = parseInt(displacement.replace(/,/g, '')) || 0;
    const age = parseInt(carAge) || 1;
    if (cc > 0 || carType === 'ev') {
      setResult(calculateCarTax(cc, age, carType));
    }
  };

  const handleDisplacementChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue) {
      setDisplacement(parseInt(numericValue).toLocaleString('ko-KR'));
    } else {
      setDisplacement('');
    }
  };

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '자동차세 계산기',
          description:
            '배기량과 차령을 입력하면 자동차세를 자동으로 계산합니다.',
          url: `${BASE_URL}/calculator/car-tax`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: '자동차 계산기',
              item: BASE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '자동차세 계산기',
              item: `${BASE_URL}/calculator/car-tax`,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: carTaxFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">
                자동차 계산기
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">자동차세 계산기</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            자동차세 계산기
          </h1>
          <p className="text-gray-600">
            배기량과 차령을 입력하면 연간 자동차세를 계산합니다. (2026년 기준)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 입력 */}
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              차량 정보
            </h2>

            <div className="mb-6">
              <label className="calculator-label">차량 유형</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {([
                  { value: 'sedan', label: '승용차' },
                  { value: 'suv', label: 'SUV' },
                  { value: 'ev', label: '전기차' },
                  { value: 'hybrid', label: '하이브리드' },
                  { value: 'commercial', label: '영업용' },
                ] as { value: CarType; label: string }[]).map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setCarType(type.value)}
                    className={`py-2 px-3 rounded-lg border transition-colors text-sm ${
                      carType === type.value
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {carType !== 'ev' && (
              <div className="mb-6">
                <label htmlFor="displacement" className="calculator-label">배기량</label>
                <div className="relative">
                  <input
                    id="displacement"
                    type="text"
                    value={displacement}
                    onChange={(e) => handleDisplacementChange(e.target.value)}
                    className="calculator-input pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    cc
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[998, 1000, 1600, 2000, 2500, 3000, 3500].map((cc) => (
                    <button
                      key={cc}
                      onClick={() =>
                        setDisplacement(cc.toLocaleString('ko-KR'))
                      }
                      className="quick-btn"
                    >
                      {cc.toLocaleString()}cc
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="carAge" className="calculator-label">
                차령 (등록 후 경과 연수)
              </label>
              <div className="relative">
                <input
                  id="carAge"
                  type="number"
                  value={carAge}
                  onChange={(e) => setCarAge(e.target.value)}
                  min="1"
                  max="30"
                  className="calculator-input pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  년
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[1, 3, 5, 7, 10, 12, 15].map((age) => (
                  <button
                    key={age}
                    onClick={() => setCarAge(age.toString())}
                    className="quick-btn"
                  >
                    {age}년
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleCalculate} className="calculator-button">
              계산하기
            </button>
          </div>

          {/* 결과 */}
          <div>
            {result ? (
              <div className="space-y-6">
                <div className="result-card">
                  <div className="text-center mb-6">
                    <div className="result-label mb-1">연간 자동차세</div>
                    <div className="result-value">
                      {formatKoreanWon(result.totalTax)}
                    </div>
                    {result.discountRate > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        차령 경감 {result.discountRate}% 적용
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">자동차세</span>
                      <span className="font-semibold">
                        {formatWon(result.baseTax)}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 bg-white rounded-lg px-4">
                      <span className="text-gray-600">
                        지방교육세 (30%)
                      </span>
                      <span className="font-semibold">
                        {formatWon(result.localEducationTax)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    연납 할인
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {result.annualPaymentAmounts.map((item) => (
                      <div
                        key={item.month}
                        className="bg-white rounded-xl p-3 text-center"
                      >
                        <div className="text-xs text-gray-500 mb-1">
                          {item.month} 연납
                        </div>
                        <div className="text-base font-bold text-green-600">
                          {formatKoreanWon(item.amount)}
                        </div>
                        <div className="text-xs text-green-600 mt-0.5">
                          -{item.discount}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    분할 납부
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-sm text-gray-500 mb-1">
                        1기분 (6월)
                      </div>
                      <div className="text-lg font-bold text-amber-600">
                        {formatKoreanWon(result.firstHalfTax)}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-sm text-gray-500 mb-1">
                        2기분 (12월)
                      </div>
                      <div className="text-lg font-bold text-amber-600">
                        {formatKoreanWon(result.secondHalfTax)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">
                    다른 계산기
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/calculator/registration-tax"
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors"
                    >
                      취등록세 계산기
                    </Link>
                    <Link
                      href="/calculator/installment"
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors"
                    >
                      할부금 계산기
                    </Link>
                    <Link
                      href="/calculator/fuel-cost"
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors"
                    >
                      유류비 계산기
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-card text-center py-12">
                <div className="text-6xl mb-4">🏷️</div>
                <p className="text-gray-500">
                  차량 정보를 입력하고
                  <br />
                  계산하기 버튼을 누르세요.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 세율표 */}
        <section className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자동차세율 안내 (비영업용)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left text-gray-500 font-medium">
                    배기량
                  </th>
                  <th className="py-3 text-center text-gray-500 font-medium">
                    cc당 세율
                  </th>
                  <th className="py-3 text-center text-gray-500 font-medium">
                    예시 (연간)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3">1,000cc 이하</td>
                  <td className="py-3 text-center font-medium">80원</td>
                  <td className="py-3 text-center">998cc = 79,840원</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">1,001cc ~ 1,600cc</td>
                  <td className="py-3 text-center font-medium">140원</td>
                  <td className="py-3 text-center">1,600cc = 224,000원</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">1,601cc 이상</td>
                  <td className="py-3 text-center font-medium">200원</td>
                  <td className="py-3 text-center">2,000cc = 400,000원</td>
                </tr>
                <tr>
                  <td className="py-3">전기차</td>
                  <td className="py-3 text-center font-medium">정액</td>
                  <td className="py-3 text-center text-green-600 font-medium">
                    100,000원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            * 지방교육세(30%) 별도 / 차령 3년 이상 시 매년 5%씩 경감 (최대
            50%)
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            {carTaxFaqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-amber-500 font-bold">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">
                  <span className="text-gray-400 font-bold">A.</span>{' '}
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
