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
  alternates: { canonical: `${BASE_URL}/계산기/감가상각` },
  openGraph: {
    title: '자동차 감가상각 계산기',
    description: '연식·주행거리별 자동차 예상 시세를 계산합니다.',
    url: `${BASE_URL}/계산기/감가상각`,
  },
};

export default function DepreciationPage() {
  return (
    <Suspense>
      <DepreciationCalculator />
    </Suspense>
  );
}
