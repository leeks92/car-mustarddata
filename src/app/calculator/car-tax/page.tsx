import type { Metadata } from 'next';
import { Suspense } from 'react';
import CarTaxCalculator from './CarTaxCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '자동차세 계산기 - 2026년 배기량별 자동차세 자동 계산',
  description:
    '배기량과 차령을 입력하면 2026년 기준 자동차세를 자동으로 계산합니다. 연납 할인, 분할 납부 금액, 전기차·하이브리드 세금도 확인하세요.',
  keywords: [
    '자동차세 계산기',
    '자동차세 계산',
    '자동차세 연납',
    '자동차세 납부',
    '배기량별 자동차세',
    '전기차 자동차세',
    '2026 자동차세',
  ],
  alternates: {
    canonical: `${BASE_URL}/calculator/car-tax`,
  },
  openGraph: {
    title: '자동차세 계산기 - 2026년 기준 자동 계산',
    description:
      '배기량과 차령으로 연간 자동차세를 계산합니다. 연납 할인, 분할 납부 금액도 확인하세요.',
    url: `${BASE_URL}/calculator/car-tax`,
  },
};

export default function CarTaxPage() {
  return (
    <Suspense>
      <CarTaxCalculator />
    </Suspense>
  );
}
