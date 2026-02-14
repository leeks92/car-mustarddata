import type { Metadata } from 'next';
import { Suspense } from 'react';
import CarOwnershipCostCalculator from './CarOwnershipCostCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '자동차 총 소유비용(TCO) 계산기 - 구입부터 유지비까지 총비용 계산',
  description: '차량 구입비, 취등록세, 보험료, 유류비, 정비비, 감가상각까지 자동차 총 소유비용(TCO)을 한번에 계산합니다.',
  keywords: ['자동차 총비용', 'TCO 계산기', '자동차 유지비', '차량 소유비용', '자동차 비용 계산', '5년 총비용', '자동차 감가상각', '차량 유지비 계산'],
  alternates: { canonical: `${BASE_URL}/calculator/car-ownership-cost` },
  openGraph: {
    title: '자동차 총 소유비용(TCO) 계산기',
    description: '차량 구입비부터 유지비까지 자동차 총 소유비용을 계산합니다.',
    url: `${BASE_URL}/calculator/car-ownership-cost`,
  },
};

export default function CarOwnershipCostPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-10 animate-pulse"><div className="h-8 bg-gray-200 rounded w-1/3 mb-6" /><div className="space-y-4"><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /></div></div>}>
      <CarOwnershipCostCalculator />
    </Suspense>
  );
}
