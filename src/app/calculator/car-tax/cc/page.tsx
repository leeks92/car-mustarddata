import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '배기량별 자동차세 조회 - 1000cc, 1600cc, 2000cc, 3000cc',
  description:
    '배기량별 자동차세를 한눈에 비교하세요. 1000cc부터 5000cc까지, 승용차·SUV 배기량에 따른 자동차세와 지방교육세를 정리했습니다.',
  keywords: [
    '배기량별 자동차세',
    '1600cc 자동차세',
    '2000cc 자동차세',
    '3000cc 자동차세',
    '자동차세 배기량',
    '자동차세 얼마',
  ],
  alternates: { canonical: `${BASE_URL}/calculator/car-tax/cc` },
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

const ccList = [
  { cc: 998, label: '998cc (경차)', type: '모닝, 스파크, 레이' },
  { cc: 1000, label: '1,000cc', type: '경차 기준' },
  { cc: 1353, label: '1,353cc', type: '아반떼 1.4' },
  { cc: 1598, label: '1,598cc', type: '아반떼 1.6, K3' },
  { cc: 1999, label: '1,999cc', type: '쏘나타, K5' },
  { cc: 2359, label: '2,359cc', type: '그랜저, K8' },
  { cc: 2497, label: '2,497cc', type: 'G80 2.5T' },
  { cc: 2997, label: '2,997cc', type: 'G80 3.0, 팰리세이드' },
  { cc: 3470, label: '3,470cc', type: 'G90 3.5T' },
  { cc: 3778, label: '3,778cc', type: 'GV80 3.8' },
  { cc: 4969, label: '4,969cc', type: 'BMW 550i, 벤츠 S500' },
];

function formatWon(n: number) {
  return n.toLocaleString('ko-KR') + '원';
}

export default function CarTaxByCCPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '배기량별 자동차세 조회',
          url: `${BASE_URL}/calculator/car-tax/cc`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-2">›</span>
          <Link href="/calculator/car-tax" className="hover:text-amber-600">자동차세 계산기</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">배기량별 조회</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          배기량별 자동차세 조회
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          2026년 지방세법 기준, 비영업용 승용차의 배기량별 연간 자동차세입니다.
          차령(차량 연식)에 따라 최대 50%까지 경감됩니다.
        </p>

        {/* 세율 기준 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">세율 기준</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 text-center">
              <div className="text-2xl font-bold text-amber-600">80원/cc</div>
              <div className="text-sm text-gray-600 mt-1">1,000cc 이하</div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 text-center">
              <div className="text-2xl font-bold text-amber-600">140원/cc</div>
              <div className="text-sm text-gray-600 mt-1">1,600cc 이하</div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 text-center">
              <div className="text-2xl font-bold text-amber-600">200원/cc</div>
              <div className="text-sm text-gray-600 mt-1">1,600cc 초과</div>
            </div>
          </div>
        </section>

        {/* 배기량별 테이블 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">배기량별 자동차세 표</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">배기량</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-500">대표 차종</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">기본세</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">교육세(30%)</th>
                  <th className="text-right px-4 py-3 text-sm font-semibold text-amber-600">연간 합계</th>
                </tr>
              </thead>
              <tbody>
                {ccList.map((item) => {
                  const tax = calcTax(item.cc);
                  return (
                    <tr key={item.cc} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">{item.label}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.type}</td>
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

        {/* 차령별 경감율 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">차령별 경감율</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-sm font-semibold text-gray-900">차령</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-900">경감율</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-500">2,000cc 기준 연세액</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: '1~2년', rate: '0%', tax: '520,000원' },
                  { age: '3년', rate: '5%', tax: '494,000원' },
                  { age: '4년', rate: '10%', tax: '468,000원' },
                  { age: '5년', rate: '15%', tax: '442,000원' },
                  { age: '6년', rate: '20%', tax: '416,000원' },
                  { age: '7년', rate: '25%', tax: '390,000원' },
                  { age: '8년', rate: '30%', tax: '364,000원' },
                  { age: '9년', rate: '35%', tax: '338,000원' },
                  { age: '10년', rate: '40%', tax: '312,000원' },
                  { age: '11년', rate: '45%', tax: '286,000원' },
                  { age: '12년 이상', rate: '50%', tax: '260,000원' },
                ].map((row) => (
                  <tr key={row.age} className="border-t border-gray-100">
                    <td className="px-4 py-2 text-sm text-center text-gray-900">{row.age}</td>
                    <td className="px-4 py-2 text-sm text-center text-amber-600 font-semibold">{row.rate}</td>
                    <td className="px-4 py-2 text-sm text-center text-gray-600">{row.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
