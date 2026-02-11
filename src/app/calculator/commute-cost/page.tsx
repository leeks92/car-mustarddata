import type { Metadata } from 'next';
import { Suspense } from 'react';
import CommuteCostCalculator from './CommuteCostCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '출퇴근 비용 계산기 - 자가용·대중교통 교통비 비교',
  description:
    '자가용, 대중교통, 자전거 등 출퇴근 수단별 월간·연간 교통비를 계산하고 비교합니다. 유류비, 주차비, 감가상각까지 포함한 실제 비용을 확인하세요.',
  keywords: [
    '출퇴근 비용',
    '교통비 계산',
    '자가용 출퇴근',
    '대중교통 비용',
    '출퇴근 교통비 비교',
    '통근 비용',
    '출퇴근 유류비',
    '교통비 절약',
  ],
  alternates: { canonical: `${BASE_URL}/calculator/commute-cost` },
  openGraph: {
    title: '출퇴근 비용 계산기 - 수단별 교통비 비교',
    description: '출퇴근 수단별 월간·연간 교통비를 비교합니다.',
    url: `${BASE_URL}/calculator/commute-cost`,
  },
};

export default function CommuteCostPage() {
  return (
    <Suspense>
      <CommuteCostCalculator />
    </Suspense>
  );
}
