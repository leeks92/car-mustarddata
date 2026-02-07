import type { Metadata } from 'next';
import PenaltyLookup from './PenaltyLookup';
import { BASE_URL } from '@/lib/urls';

export const metadata: Metadata = {
  title: '교통 과태료·범칙금 조회 - 위반 유형별 과태료, 벌점 안내',
  description:
    '교통 위반 유형별 과태료, 범칙금, 벌점을 한눈에 확인합니다. 신호위반, 속도위반, 주정차위반, 안전벨트 등 2026년 도로교통법 기준.',
  keywords: [
    '교통 과태료',
    '범칙금',
    '벌점 조회',
    '교통위반 과태료',
    '신호위반 과태료',
    '속도위반 과태료',
    '주정차위반 과태료',
  ],
  alternates: { canonical: `${BASE_URL}/계산기/과태료` },
  openGraph: {
    title: '교통 과태료·범칙금 조회',
    description: '위반 유형별 과태료, 범칙금, 벌점을 한눈에 확인합니다.',
    url: `${BASE_URL}/계산기/과태료`,
  },
};

export default function PenaltyPage() {
  return <PenaltyLookup />;
}
