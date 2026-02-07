import type { Metadata } from 'next';
import { Suspense } from 'react';
import FuelCostCalculator from './FuelCostCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '유류비 계산기 - 주행거리, 연비별 주유비 계산',
  description:
    '주행 거리와 연비를 입력하면 예상 유류비를 계산합니다. 휘발유·경유·LPG 유종별 비교와 km당 비용도 확인하세요.',
  keywords: [
    '유류비 계산기',
    '주유비 계산',
    '연비 계산',
    '기름값 계산',
    '유가 비교',
    '전기차 충전비',
  ],
  alternates: { canonical: `${BASE_URL}/계산기/유류비` },
  openGraph: {
    title: '유류비 계산기 - 주행거리별 주유비 계산',
    description: '주행 거리와 연비로 예상 유류비를 계산합니다.',
    url: `${BASE_URL}/계산기/유류비`,
  },
};

export default function FuelCostPage() {
  return (
    <Suspense>
      <FuelCostCalculator />
    </Suspense>
  );
}
