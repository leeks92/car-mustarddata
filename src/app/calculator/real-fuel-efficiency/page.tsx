import type { Metadata } from 'next';
import { Suspense } from 'react';
import RealFuelEfficiencyCalculator from './RealFuelEfficiencyCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '실연비 계산기 - 내 차 실제 연비 측정',
  description: '실제 주행거리와 주유량을 입력하면 내 차의 실연비를 정확하게 계산합니다. 차종별 평균 연비 비교와 연비 향상 팁도 확인하세요.',
  keywords: ['실연비 계산기', '실연비 측정', '연비 계산', '자동차 연비', '연비 비교', '유류비 절약', '연비 향상'],
  alternates: { canonical: `${BASE_URL}/calculator/real-fuel-efficiency` },
  openGraph: {
    title: '실연비 계산기 - 내 차 실제 연비 측정',
    description: '실제 주행거리와 주유량으로 내 차의 실연비를 계산합니다.',
    url: `${BASE_URL}/calculator/real-fuel-efficiency`,
  },
};

export default function RealFuelEfficiencyPage() {
  return (
    <Suspense>
      <RealFuelEfficiencyCalculator />
    </Suspense>
  );
}
