import type { Metadata } from 'next';
import { Suspense } from 'react';
import InsuranceEstimateCalculator from './InsuranceEstimateCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '자동차보험료 간편 견적 계산기 - 나이·차종별 예상 보험료',
  description: '나이, 차종, 운전 경력, 사고 이력 등을 입력하면 예상 자동차보험료를 간편하게 견적합니다.',
  keywords: ['자동차보험료 계산', '보험료 견적', '자동차보험 가격', '보험료 비교', '다이렉트 보험', '자동차보험 나이', '보험료 할인', '운전자 보험'],
  alternates: { canonical: `${BASE_URL}/calculator/insurance-estimate` },
  openGraph: {
    title: '자동차보험료 간편 견적 계산기',
    description: '나이, 차종별 예상 자동차보험료를 간편하게 견적합니다.',
    url: `${BASE_URL}/calculator/insurance-estimate`,
  },
};

export default function InsuranceEstimatePage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-10 animate-pulse"><div className="h-8 bg-gray-200 rounded w-1/3 mb-6" /><div className="space-y-4"><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /></div></div>}>
      <InsuranceEstimateCalculator />
    </Suspense>
  );
}
