import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const dynamic = undefined;

export const metadata: Metadata = {
  title: '차종별 자동차세 조회 - 2026년 국산차·수입차 자동차세 비교',
  description:
    '국산차와 수입차 인기 차종별 자동차세를 한눈에 비교하세요. 모닝, 쏘나타, BMW, 벤츠, 테슬라 등 주요 차종의 연간 자동차세와 지방교육세를 정리했습니다.',
  keywords: [
    '차종별 자동차세',
    '국산차 자동차세',
    '수입차 자동차세',
    '모닝 자동차세',
    '쏘나타 자동차세',
    'BMW 자동차세',
    '벤츠 자동차세',
    '테슬라 자동차세',
  ],
  alternates: { canonical: `${BASE_URL}/calculator/car-tax/models` },
  openGraph: {
    title: '차종별 자동차세 조회 - 2026년 국산차·수입차 자동차세 비교',
    description:
      '국산차와 수입차 인기 차종별 자동차세를 한눈에 비교하세요. 모닝, 쏘나타, BMW, 벤츠, 테슬라 등 주요 차종의 연간 자동차세와 지방교육세를 정리했습니다.',
    url: `${BASE_URL}/calculator/car-tax/models`,
  },
};

// 비영업용 승용차 세율: 1000cc 이하 80원/cc, 1600cc 이하 140원/cc, 1600cc 초과 200원/cc
function calcTax(cc: number): { baseTax: number; eduTax: number; total: number } {
  let baseTax = 0;
  if (cc <= 1000) {
    baseTax = cc * 80;
  } else if (cc <= 1600) {
    baseTax = cc * 140;
  } else {
    baseTax = cc * 200;
  }
  const eduTax = Math.floor(baseTax * 0.3);
  return { baseTax, eduTax, total: baseTax + eduTax };
}

const domesticCars = [
  { name: '모닝', cc: 998 },
  { name: '아반떼 1.6', cc: 1598 },
  { name: '쏘나타 2.0', cc: 1999 },
  { name: '그랜저 2.5', cc: 2497 },
  { name: '팰리세이드 3.8', cc: 3778 },
  { name: 'K3', cc: 1598 },
  { name: 'K5', cc: 1999 },
  { name: 'K8 2.5', cc: 2497 },
  { name: '셀토스', cc: 1598 },
  { name: '투싼', cc: 1598 },
  { name: '스포티지', cc: 1598 },
  { name: '카니발 3.5', cc: 3470 },
  { name: 'G80 2.5T', cc: 2497 },
  { name: 'GV70 2.5T', cc: 2497 },
];

const importedCars = [
  { name: 'BMW 320i', cc: 1998 },
  { name: 'BMW 520i', cc: 1998 },
  { name: '벤츠 C200', cc: 1999 },
  { name: '벤츠 E300', cc: 1991 },
  { name: '아우디 A4', cc: 1984 },
  { name: '아우디 A6', cc: 1984 },
  { name: '테슬라 모델3', cc: 0, isEV: true },
  { name: '테슬라 모델Y', cc: 0, isEV: true },
  { name: '볼보 XC60', cc: 1969 },
  { name: '렉서스 ES300h', cc: 2487 },
];

function formatWon(n: number) {
  return n.toLocaleString('ko-KR') + '원';
}

export default function CarTaxByModelsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '차종별 자동차세 조회',
          url: `${BASE_URL}/calculator/car-tax/models`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">
            홈
          </Link>
          <span className="mx-2">›</span>
          <Link href="/calculator/car-tax" className="hover:text-amber-600">
            자동차세 계산기
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">차종별 조회</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">차종별 자동차세 조회</h1>
        <p className="text-lg text-gray-600 mb-8">
          2026년 지방세법 기준, 국산차와 수입차 인기 차종별 연간 자동차세입니다. 차령(차량 연식)에 따라 최대 50%까지 경감됩니다.
        </p>

        {/* 국산 인기 차종 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">국산 인기 차종</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">차종</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">배기량</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">기본세</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">교육세(30%)</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-amber-600">연간 합계</th>
                </tr>
              </thead>
              <tbody>
                {domesticCars.map((car) => {
                  const tax = calcTax(car.cc);
                  return (
                    <tr key={car.name} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">{car.name}</td>
                      <td className="px-4 py-3 text-sm text-right text-gray-600">{car.cc.toLocaleString('ko-KR')}cc</td>
                      <td className="px-4 py-3 text-sm text-right text-gray-900">{formatWon(tax.baseTax)}</td>
                      <td className="px-4 py-3 text-sm text-right text-gray-600">{formatWon(tax.eduTax)}</td>
                      <td className="px-4 py-3 text-sm text-right font-bold text-amber-600">{formatWon(tax.total)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 신차(1년 미만) 기준이며, 차령에 따라 3년 이후부터 매년 5%씩 최대 50%까지 경감됩니다.
          </p>
        </section>

        {/* 수입 인기 차종 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">수입 인기 차종</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">차종</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">배기량</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">기본세</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">교육세(30%)</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-amber-600">연간 합계</th>
                </tr>
              </thead>
              <tbody>
                {importedCars.map((car) => {
                  if (car.isEV) {
                    return (
                      <tr key={car.name} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">{car.name}</td>
                        <td className="px-4 py-3 text-sm text-right text-gray-600">전기</td>
                        <td className="px-4 py-3 text-sm text-right text-gray-900">100,000원</td>
                        <td className="px-4 py-3 text-sm text-right text-gray-600">30,000원</td>
                        <td className="px-4 py-3 text-sm text-right font-bold text-amber-600">130,000원</td>
                      </tr>
                    );
                  }
                  const tax = calcTax(car.cc);
                  return (
                    <tr key={car.name} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">{car.name}</td>
                      <td className="px-4 py-3 text-sm text-right text-gray-600">{car.cc.toLocaleString('ko-KR')}cc</td>
                      <td className="px-4 py-3 text-sm text-right text-gray-900">{formatWon(tax.baseTax)}</td>
                      <td className="px-4 py-3 text-sm text-right text-gray-600">{formatWon(tax.eduTax)}</td>
                      <td className="px-4 py-3 text-sm text-right font-bold text-amber-600">{formatWon(tax.total)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 신차(1년 미만) 기준이며, 차령에 따라 3년 이후부터 매년 5%씩 최대 50%까지 경감됩니다.
          </p>
        </section>

        {/* 전기차·하이브리드 자동차세 설명 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">전기차·하이브리드 자동차세</h2>
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전기차</h3>
                <p className="text-gray-600">
                  전기차는 배기량과 관계없이 연간 <span className="font-semibold text-amber-600">13만원(기본세 10만원 + 교육세 3만원)</span>의 정액 자동차세가 부과됩니다.
                  배기량이 없어 세율이 적용되지 않으며, 차령에 따른 경감도 동일하게 적용됩니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">하이브리드</h3>
                <p className="text-gray-600">
                  하이브리드 차량은 내연기관의 배기량을 기준으로 일반 승용차와 동일한 세율이 적용됩니다.
                  예를 들어 렉서스 ES300h(2,487cc)의 경우 일반 승용차와 동일하게 배기량 기준으로 자동차세가 계산됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            href="/calculator/car-tax"
            className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
          >
            내 차 자동차세 계산하기 →
          </Link>
        </section>
      </div>
    </>
  );
}
