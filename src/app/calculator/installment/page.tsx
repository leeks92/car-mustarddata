import type { Metadata } from 'next';
import { Suspense } from 'react';
import InstallmentCalculator from './InstallmentCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '자동차 할부금 계산기 - 월 납입금, 이자, 상환 스케줄 계산',
  description:
    '자동차 할부 구매 시 월 납입금, 총 이자, 상환 스케줄을 계산합니다. 원리금균등·원금균등 상환 방식 비교가 가능합니다.',
  keywords: [
    '자동차 할부 계산기',
    '할부 이자 계산',
    '월 납입금 계산',
    '자동차 할부 금리',
    '원리금균등',
    '원금균등',
  ],
  alternates: { canonical: `${BASE_URL}/calculator/installment` },
  openGraph: {
    title: '자동차 할부금 계산기',
    description: '자동차 할부 월 납입금과 이자를 계산합니다.',
    url: `${BASE_URL}/calculator/installment`,
  },
};

export default function InstallmentPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-10 animate-pulse"><div className="h-8 bg-gray-200 rounded w-1/3 mb-6" /><div className="space-y-4"><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /></div></div>}>
      <InstallmentCalculator />
    </Suspense>
  );
}
