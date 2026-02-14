import type { Metadata } from 'next';
import { Suspense } from 'react';
import DepreciationCalculator from './DepreciationCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '자동차 감가상각 계산기 - 연식·주행거리별 예상 시세',
  description:
    '차량 가격, 연식, 주행거리를 입력하면 현재 예상 시세와 감가상각률을 계산합니다. 연도별 가치 변화 추이도 확인하세요.',
  keywords: [
    '자동차 감가상각',
    '자동차 감가상각 계산기',
    '중고차 시세 계산',
    '차량 잔존가치',
    '자동차 가치 하락',
  ],
  alternates: { canonical: `${BASE_URL}/calculator/depreciation` },
  openGraph: {
    title: '자동차 감가상각 계산기',
    description: '연식·주행거리별 자동차 예상 시세를 계산합니다.',
    url: `${BASE_URL}/calculator/depreciation`,
  },
};

export default function DepreciationPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-10 animate-pulse"><div className="h-8 bg-gray-200 rounded w-1/3 mb-6" /><div className="space-y-4"><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /><div className="h-12 bg-gray-100 rounded-xl" /></div></div>}>
      <DepreciationCalculator />
    </Suspense>
  );
}
