import type { Metadata } from 'next';
import { Suspense } from 'react';
import NewVsUsedCarCalculator from './NewVsUsedCarCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '신차 vs 중고차 총비용 비교 계산기 - 5년 비용 비교',
  description: '신차와 중고차의 5년 총비용을 비교합니다. 구입비, 취등록세, 보험료, 유류비, 정비비, 감가상각까지 모든 비용을 계산합니다.',
  keywords: ['신차 vs 중고차', '신차 중고차 비교', '자동차 총비용', '신차 구매', '중고차 구매', '자동차 감가상각', '자동차 유지비 비교'],
  alternates: { canonical: `${BASE_URL}/calculator/new-vs-used-car` },
  openGraph: {
    title: '신차 vs 중고차 총비용 비교 계산기',
    description: '신차와 중고차의 5년 총비용을 비교 계산합니다.',
    url: `${BASE_URL}/calculator/new-vs-used-car`,
  },
};

export default function NewVsUsedCarPage() {
  return (
    <Suspense>
      <NewVsUsedCarCalculator />
    </Suspense>
  );
}
