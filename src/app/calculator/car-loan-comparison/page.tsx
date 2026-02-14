import type { Metadata } from 'next';
import { Suspense } from 'react';
import CarLoanComparisonCalculator from './CarLoanComparisonCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '자동차 대출 비교 계산기 - 은행·캐피탈 금리·월납입금 비교',
  description:
    '은행, 캐피탈, 딜러 자동차 대출의 금리, 월 납입금, 총 이자를 한눈에 비교합니다. 원리금균등·원금균등 상환 방식별 비교도 가능합니다.',
  keywords: [
    '자동차 대출',
    '자동차 대출 금리',
    '자동차 할부 비교',
    '캐피탈 대출',
    '신차 대출',
    '중고차 대출',
    '자동차 대출 계산기',
    '자동차 할부 이자',
  ],
  alternates: { canonical: `${BASE_URL}/calculator/car-loan-comparison` },
  openGraph: {
    title: '자동차 대출 비교 계산기 - 금리·월납입금 비교',
    description: '자동차 대출 금리와 월 납입금을 비교합니다.',
    url: `${BASE_URL}/calculator/car-loan-comparison`,
  },
};

export default function CarLoanComparisonPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-10 animate-pulse"><div className="h-8 bg-gray-200 rounded w-1/3 mb-6" /><div className="space-y-4"><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /></div></div>}>
      <CarLoanComparisonCalculator />
    </Suspense>
  );
}
