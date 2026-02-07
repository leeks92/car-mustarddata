import type { Metadata } from 'next';
import { Suspense } from 'react';
import RegistrationTaxCalculator from './RegistrationTaxCalculator';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '취등록세 계산기 - 신차·중고차 취득세, 등록비용 계산',
  description:
    '자동차 구매 시 취득세와 등록비용을 계산합니다. 경차·전기차·하이브리드 감면, 다자녀 감면까지 2026년 기준으로 정확하게 계산합니다.',
  keywords: [
    '취등록세 계산기',
    '자동차 취득세',
    '자동차 등록비용',
    '신차 취등록세',
    '중고차 취등록세',
    '전기차 취득세 감면',
    '경차 취득세',
  ],
  alternates: {
    canonical: `${BASE_URL}/계산기/취등록세`,
  },
  openGraph: {
    title: '취등록세 계산기 - 신차·중고차 취득세 계산',
    description:
      '자동차 구매 시 취득세와 등록비용을 정확하게 계산합니다. 경차·전기차 감면 반영.',
    url: `${BASE_URL}/계산기/취등록세`,
  },
};

export default function RegistrationTaxPage() {
  return (
    <Suspense>
      <RegistrationTaxCalculator />
    </Suspense>
  );
}
