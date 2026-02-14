'use client';

import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

/* ──────────────────────────────────────────────
   포맷 유틸
   ────────────────────────────────────────────── */
function formatNumberWithComma(value: string): string {
  const num = value.replace(/[^0-9]/g, '');
  if (!num) return '';
  return Number(num).toLocaleString('ko-KR');
}

function parseFormattedNumber(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
}

function formatWon(v: number): string {
  return Math.round(v).toLocaleString('ko-KR');
}

/* ──────────────────────────────────────────────
   보험료 계산 상수
   ────────────────────────────────────────────── */
type CarCategory = '경차' | '소형차' | '중형차' | '대형차' | 'SUV(소형)' | 'SUV(중대형)' | '수입차';
type AgeGroup = '20대' | '30대' | '40대' | '50대' | '60대 이상';
type Experience = '1년 미만' | '1~3년' | '3~5년' | '5~10년' | '10년 이상';
type AccidentHistory = '무사고' | '1회' | '2회' | '3회 이상';
type CoverageType = '대인/대물/자기차량' | '대인/대물만';

const BASE_RATES: Record<CarCategory, number> = {
  '경차': 350000,
  '소형차': 500000,
  '중형차': 650000,
  '대형차': 800000,
  'SUV(소형)': 600000,
  'SUV(중대형)': 750000,
  '수입차': 900000,
};

const AGE_MULTIPLIER: Record<AgeGroup, number> = {
  '20대': 1.5,
  '30대': 1.0,
  '40대': 0.9,
  '50대': 0.95,
  '60대 이상': 1.1,
};

const EXPERIENCE_MULTIPLIER: Record<Experience, number> = {
  '1년 미만': 1.4,
  '1~3년': 1.15,
  '3~5년': 1.0,
  '5~10년': 0.9,
  '10년 이상': 0.85,
};

const ACCIDENT_MULTIPLIER: Record<AccidentHistory, number> = {
  '무사고': 0.85,
  '1회': 1.0,
  '2회': 1.2,
  '3회 이상': 1.5,
};

const COVERAGE_MULTIPLIER: Record<CoverageType, number> = {
  '대인/대물/자기차량': 1.0,
  '대인/대물만': 0.7,
};

const DIRECT_DISCOUNT = 0.85;
const MILEAGE_DISCOUNT = 0.90;

/* ──────────────────────────────────────────────
   보험료 계산 함수
   ────────────────────────────────────────────── */
interface InsuranceResult {
  annualPremium: number;
  monthlyPremium: number;
  directPremium: number;
  mileagePremium: number;
}

function calculateInsurance(
  carCategory: CarCategory,
  ageGroup: AgeGroup,
  carPrice: number,
  experience: Experience,
  accidentHistory: AccidentHistory,
  coverageType: CoverageType,
): InsuranceResult {
  const base = BASE_RATES[carCategory];
  const ageMul = AGE_MULTIPLIER[ageGroup];
  const expMul = EXPERIENCE_MULTIPLIER[experience];
  const accMul = ACCIDENT_MULTIPLIER[accidentHistory];
  const covMul = COVERAGE_MULTIPLIER[coverageType];

  // 차량 가격 보정: 3000만원 초과분에 대해 1000만원당 5% 추가
  const priceInManwon = carPrice;
  let priceAdj = 1.0;
  if (priceInManwon > 3000) {
    priceAdj = 1 + Math.floor((priceInManwon - 3000) / 1000) * 0.05;
  }

  const annualPremium = base * ageMul * expMul * accMul * covMul * priceAdj;
  const monthlyPremium = annualPremium / 12;
  const directPremium = annualPremium * DIRECT_DISCOUNT;
  const mileagePremium = annualPremium * MILEAGE_DISCOUNT;

  return { annualPremium, monthlyPremium, directPremium, mileagePremium };
}

/* ──────────────────────────────────────────────
   나이대별·차종별 평균 보험료 데이터
   ────────────────────────────────────────────── */
const AGE_AVERAGE_TABLE: { age: string; avg: string; range: string }[] = [
  { age: '20대', avg: '약 95~120만 원', range: '경차 60만~수입차 150만' },
  { age: '30대', avg: '약 55~75만 원', range: '경차 35만~수입차 90만' },
  { age: '40대', avg: '약 48~65만 원', range: '경차 30만~수입차 80만' },
  { age: '50대', avg: '약 52~70만 원', range: '경차 33만~수입차 85만' },
  { age: '60대 이상', avg: '약 60~80만 원', range: '경차 38만~수입차 100만' },
];

const CAR_AVERAGE_TABLE: { car: string; avg: string; note: string }[] = [
  { car: '경차 (모닝, 레이)', avg: '약 30~50만 원', note: '보험료 최저 구간' },
  { car: '소형차 (아반떼, K3)', avg: '약 45~70만 원', note: '가성비 구간' },
  { car: '중형차 (쏘나타, K5)', avg: '약 55~85만 원', note: '가장 많은 가입자' },
  { car: '대형차 (그랜저, K8)', avg: '약 65~100만 원', note: '수리비 반영' },
  { car: 'SUV 소형 (투싼, 셀토스)', avg: '약 50~80만 원', note: '사고율 반영' },
  { car: 'SUV 중대형 (쏘렌토, 팰리세이드)', avg: '약 60~95만 원', note: '차량 가격 반영' },
  { car: '수입차 (벤츠, BMW)', avg: '약 80~130만 원', note: '부품비·수리비 높음' },
];

/* ──────────────────────────────────────────────
   보험료 절약 팁
   ────────────────────────────────────────────── */
const SAVING_TIPS = [
  { title: '다이렉트 보험 가입', desc: '설계사 없이 온라인/앱으로 직접 가입하면 10~15% 할인받을 수 있습니다.' },
  { title: '마일리지 특약 가입', desc: '연간 주행거리가 적다면(1만km 이하) 마일리지 특약으로 5~10% 할인 가능합니다.' },
  { title: '블랙박스 할인', desc: '블랙박스를 장착하면 보험사에 따라 2~5% 추가 할인이 적용됩니다.' },
  { title: '무사고 경력 유지', desc: '3년 이상 무사고 시 최대 40% 이상 할인(보험료 할인·할증 등급)을 받을 수 있습니다.' },
  { title: '보험사 비교 견적', desc: '최소 3~4개 보험사의 견적을 비교하세요. 같은 조건이라도 보험사별로 10~20% 차이가 날 수 있습니다.' },
  { title: '불필요한 특약 제거', desc: '자기차량손해, 자기신체사고 등 불필요한 특약을 점검하고, 꼭 필요한 항목만 가입하세요.' },
  { title: '가족 한정 운전자', desc: '운전자 범위를 "가족 한정"으로 설정하면 "누구나 운전" 대비 보험료가 크게 줄어듭니다.' },
  { title: '차량 등급 고려', desc: '보험료가 높은 고가 차량, 사고율 높은 차종을 피하면 장기적으로 보험료를 절약할 수 있습니다.' },
];

/* ──────────────────────────────────────────────
   FAQ 데이터
   ────────────────────────────────────────────── */
const FAQS = [
  {
    q: '자동차보험료는 어떻게 결정되나요?',
    a: '자동차보험료는 운전자 나이, 성별, 운전 경력, 사고 이력, 차종, 차량 가격, 보장 범위 등 여러 요소를 종합적으로 반영하여 산출됩니다. 보험개발원의 참조순보험료를 기준으로 각 보험사가 자체적으로 요율을 조정합니다.',
  },
  {
    q: '20대 보험료가 비싼 이유는 무엇인가요?',
    a: '20대는 통계적으로 사고율이 높아 보험료가 가장 비쌉니다. 특히 만 26세 미만은 "연령 특약" 적용이 어려워 보험료가 30~50% 이상 할증될 수 있습니다. 운전 경력이 쌓이면 점차 보험료가 낮아집니다.',
  },
  {
    q: '다이렉트 보험이 더 저렴한 이유는?',
    a: '다이렉트 보험은 설계사를 거치지 않고 온라인/앱으로 직접 가입하므로 중간 수수료(설계사 수당)가 절감됩니다. 이 절감분이 보험료 할인으로 반영되어 일반적으로 10~15% 저렴합니다.',
  },
  {
    q: '자동차보험 갱신 시 보험사를 변경해도 되나요?',
    a: '네, 보험 만기 시 다른 보험사로 자유롭게 변경할 수 있습니다. 무사고 할인 등급(보험료 할인·할증 등급)은 보험사 간 이동 시에도 그대로 유지됩니다.',
  },
  {
    q: '보험료 할인·할증 등급은 무엇인가요?',
    a: '교통사고 유무에 따라 1~26등급으로 나뉩니다. 무사고를 유지할수록 등급이 올라가 할인율이 커지고, 사고가 발생하면 등급이 내려가 보험료가 할증됩니다. 최대 할인은 약 40% 이상입니다.',
  },
  {
    q: '수입차 보험료가 비싼 이유는?',
    a: '수입차는 부품 가격, 공임비, 수리비가 국산차보다 높아 보험사 입장에서 사고 시 보상 비용이 큽니다. 따라서 같은 배기량·차급이라도 수입차의 보험료가 20~50% 더 높게 책정됩니다.',
  },
  {
    q: '이 계산기의 결과는 실제 보험료와 동일한가요?',
    a: '이 계산기는 주요 요인을 반영한 간편 견적으로, 실제 보험료와 차이가 있을 수 있습니다. 정확한 보험료는 각 보험사의 공식 견적을 통해 확인하시기 바랍니다. 성별, 차량 모델, 특약 등 세부 요소에 따라 달라질 수 있습니다.',
  },
];

/* ──────────────────────────────────────────────
   컴포넌트
   ────────────────────────────────────────────── */
export default function InsuranceEstimateCalculator() {
  const [ageGroup, setAgeGroup] = useState<AgeGroup>('30대');
  const [carCategory, setCarCategory] = useState<CarCategory>('중형차');
  const [carPrice, setCarPrice] = useState('3,000');
  const [experience, setExperience] = useState<Experience>('3~5년');
  const [accidentHistory, setAccidentHistory] = useState<AccidentHistory>('무사고');
  const [coverageType, setCoverageType] = useState<CoverageType>('대인/대물/자기차량');
  const [result, setResult] = useState<InsuranceResult | null>(null);

  const handleCalculate = () => {
    const price = parseFormattedNumber(carPrice);
    if (price <= 0) return;
    const res = calculateInsurance(carCategory, ageGroup, price, experience, accidentHistory, coverageType);
    setResult(res);
  };

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '자동차보험료 간편 견적 계산기',
          description: '나이, 차종, 운전 경력 등을 입력하면 예상 자동차보험료를 간편하게 견적합니다.',
          url: `${BASE_URL}/calculator/insurance-estimate`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '자동차 계산기', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '보험료 견적 계산기', item: `${BASE_URL}/calculator/insurance-estimate` },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">보험료 견적 계산기</li>
          </ol>
        </nav>

        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">자동차보험료 간편 견적 계산기</h1>
          <p className="text-gray-600">나이, 차종, 운전 경력, 사고 이력 등을 입력하면 예상 자동차보험료를 간편하게 견적합니다.</p>
        </div>

        {/* 계산기 입력 + 결과 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── 입력 폼 ── */}
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">보험 정보 입력</h2>

            {/* 운전자 나이 */}
            <div className="mb-5">
              <label htmlFor="driverAgeGroup" className="calculator-label">운전자 나이</label>
              <select
                id="driverAgeGroup"
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
                className="calculator-input"
              >
                {(['20대', '30대', '40대', '50대', '60대 이상'] as AgeGroup[]).map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* 차종 분류 */}
            <div className="mb-5">
              <label htmlFor="carCategory" className="calculator-label">차종 분류</label>
              <select
                id="carCategory"
                value={carCategory}
                onChange={(e) => setCarCategory(e.target.value as CarCategory)}
                className="calculator-input"
              >
                {(['경차', '소형차', '중형차', '대형차', 'SUV(소형)', 'SUV(중대형)', '수입차'] as CarCategory[]).map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* 차량 가격 */}
            <div className="mb-5">
              <label htmlFor="insuranceCarPrice" className="calculator-label">차량 가격 (만 원)</label>
              <div className="relative">
                <input
                  id="insuranceCarPrice"
                  type="text"
                  inputMode="numeric"
                  value={carPrice}
                  onChange={(e) => setCarPrice(formatNumberWithComma(e.target.value))}
                  className="calculator-input pr-16"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">만원</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[1500, 2500, 3500, 5000, 7000].map((p) => (
                  <button
                    key={p}
                    onClick={() => setCarPrice(formatNumberWithComma(p.toString()))}
                    className="quick-btn"
                  >
                    {p.toLocaleString()}만
                  </button>
                ))}
              </div>
            </div>

            {/* 운전 경력 */}
            <div className="mb-5">
              <label htmlFor="drivingExperience" className="calculator-label">운전 경력</label>
              <select
                id="drivingExperience"
                value={experience}
                onChange={(e) => setExperience(e.target.value as Experience)}
                className="calculator-input"
              >
                {(['1년 미만', '1~3년', '3~5년', '5~10년', '10년 이상'] as Experience[]).map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* 사고 이력 */}
            <div className="mb-5">
              <label htmlFor="accidentHistory" className="calculator-label">사고 이력 (최근 3년)</label>
              <select
                id="accidentHistory"
                value={accidentHistory}
                onChange={(e) => setAccidentHistory(e.target.value as AccidentHistory)}
                className="calculator-input"
              >
                {(['무사고', '1회', '2회', '3회 이상'] as AccidentHistory[]).map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* 가입 유형 */}
            <div className="mb-6">
              <label className="calculator-label">가입 유형</label>
              <div className="grid grid-cols-2 gap-2">
                {(['대인/대물/자기차량', '대인/대물만'] as CoverageType[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setCoverageType(v)}
                    className={`py-2 px-3 rounded-lg border transition-colors text-sm ${
                      coverageType === v
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              보험료 견적하기
            </button>
          </div>

          {/* ── 결과 카드 ── */}
          <div>
            {result ? (
              <div className="space-y-4">
                {/* 예상 연간 보험료 */}
                <div className="calculator-card border-amber-200 bg-amber-50">
                  <p className="text-sm text-amber-700 font-medium mb-1">예상 연간 보험료</p>
                  <p className="text-3xl font-bold text-amber-900">{formatWon(result.annualPremium)}원</p>
                  <p className="text-xs text-amber-600 mt-1">주요 요인을 반영한 간편 견적 금액입니다</p>
                </div>

                {/* 월 납입 예상액 */}
                <div className="calculator-card">
                  <p className="text-sm text-gray-500 font-medium mb-1">월 납입 예상액</p>
                  <p className="text-2xl font-bold text-gray-900">{formatWon(result.monthlyPremium)}원</p>
                  <p className="text-xs text-gray-400 mt-1">연간 보험료를 12개월로 나눈 금액</p>
                </div>

                {/* 다이렉트 보험 할인 */}
                <div className="calculator-card border-green-200 bg-green-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700 font-medium mb-1">다이렉트 보험 할인 적용 시</p>
                      <p className="text-2xl font-bold text-green-900">{formatWon(result.directPremium)}원</p>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">15% 할인</span>
                  </div>
                  <p className="text-xs text-green-600 mt-2">
                    일반 대비 <strong>{formatWon(result.annualPremium - result.directPremium)}원</strong> 절약
                  </p>
                </div>

                {/* 마일리지 특약 할인 */}
                <div className="calculator-card border-blue-200 bg-blue-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-700 font-medium mb-1">마일리지 특약 적용 시</p>
                      <p className="text-2xl font-bold text-blue-900">{formatWon(result.mileagePremium)}원</p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">10% 할인</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-2">
                    연간 주행거리 1만km 이하 시 적용 가능
                  </p>
                </div>

                <p className="text-xs text-gray-400 text-center mt-2">
                  * 위 금액은 간편 견적이며, 실제 보험료는 보험사별로 다를 수 있습니다.
                </p>
              </div>
            ) : (
              <div className="calculator-card flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <p className="text-gray-500 text-lg font-medium mb-2">보험 정보를 입력하세요</p>
                <p className="text-gray-400 text-sm">나이, 차종, 경력 등을 선택하고<br />견적하기 버튼을 누르면 예상 보험료를 확인할 수 있습니다.</p>
              </div>
            )}
          </div>
        </div>

        {/* ── 나이대별 평균 보험료 ── */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">나이대별 평균 자동차보험료</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">나이대</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">평균 보험료 (연간)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">차종별 범위</th>
                </tr>
              </thead>
              <tbody>
                {AGE_AVERAGE_TABLE.map((row) => (
                  <tr key={row.age} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">{row.age}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">{row.avg}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-500">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* 중형차 기준, 3년 무사고, 운전경력 3~5년 기준 평균값입니다.</p>
        </section>

        {/* ── 차종별 평균 보험료 ── */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">차종별 평균 자동차보험료</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">차종</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">평균 보험료 (연간)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">비고</th>
                </tr>
              </thead>
              <tbody>
                {CAR_AVERAGE_TABLE.map((row) => (
                  <tr key={row.car} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">{row.car}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">{row.avg}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* 30대, 3년 무사고, 대인/대물/자기차량 기준 평균값입니다.</p>
        </section>

        {/* ── 보험료 절약 팁 ── */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자동차보험료 절약 팁 8가지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAVING_TIPS.map((tip, idx) => (
              <div key={idx} className="calculator-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자동차보험료 자주 묻는 질문</h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group calculator-card">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-gray-900">
                  <span className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">Q.</span>
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA 섹션 ── */}
        <section className="mt-12 mb-8">
          <div className="calculator-card bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">더 정확한 보험료가 궁금하신가요?</h2>
            <p className="text-gray-600 mb-6">
              간편 견적으로 대략적인 보험료를 확인하셨다면,<br />
              각 보험사의 공식 견적 서비스에서 정확한 금액을 비교해 보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/car-insurance"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                자동차보험 비교 가이드 보기
              </Link>
              <Link
                href="/guide/insurance-by-car"
                className="inline-block bg-white hover:bg-gray-50 text-amber-700 font-semibold py-3 px-6 rounded-lg border border-amber-300 transition-colors"
              >
                차종별 보험료 비교
              </Link>
            </div>
          </div>
        </section>

        {/* ── 관련 계산기 ── */}
        <section className="mt-8 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">관련 계산기</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: '/calculator/car-tax', label: '자동차세 계산기', emoji: '🏷️' },
              { href: '/calculator/registration-tax', label: '취등록세 계산기', emoji: '📋' },
              { href: '/calculator/depreciation', label: '감가상각 계산기', emoji: '📉' },
              { href: '/calculator/fuel-cost', label: '유류비 계산기', emoji: '⛽' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="calculator-card hover:shadow-md transition-shadow text-center py-4"
              >
                <span className="text-2xl block mb-1">{item.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
