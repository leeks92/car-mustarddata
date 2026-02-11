'use client';

import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

function formatNumberWithComma(value: string): string {
  const num = value.replace(/[^0-9]/g, '');
  if (!num) return '';
  return Number(num).toLocaleString('ko-KR');
}

function parseFormattedNumber(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
}

interface CommuteResult {
  car: {
    fuel: number;
    parking: number;
    depreciation: number;
    insurance: number;
    maintenance: number;
    total: number;
  };
  publicTransport: number;
  bicycle: number;
}

export default function CommuteCostCalculator() {
  const [oneWayDistance, setOneWayDistance] = useState('20');
  const [workDays, setWorkDays] = useState('22');
  const [efficiency, setEfficiency] = useState('12');
  const [fuelPrice, setFuelPrice] = useState('1,650');
  const [parkingCost, setParkingCost] = useState('100,000');
  const [transitPass, setTransitPass] = useState('55,000');
  const [bikeCost, setBikeCost] = useState('0');
  const [results, setResults] = useState<CommuteResult | null>(null);

  const handleCalculate = () => {
    const dist = parseFloat(oneWayDistance) || 0;
    const days = parseFloat(workDays) || 0;
    const eff = parseFloat(efficiency) || 0;
    const fuel = parseFormattedNumber(fuelPrice);
    const parking = parseFormattedNumber(parkingCost);
    const transit = parseFormattedNumber(transitPass);
    const bike = parseFormattedNumber(bikeCost);

    if (dist > 0 && days > 0 && eff > 0 && fuel > 0) {
      const monthlyFuel = Math.round((dist * 2 * days) / eff * fuel);
      const monthlyDepreciation = 300000;
      const monthlyInsurance = 83000;
      const monthlyMaintenance = 50000;
      const carTotal = monthlyFuel + parking + monthlyDepreciation + monthlyInsurance + monthlyMaintenance;

      setResults({
        car: {
          fuel: monthlyFuel,
          parking,
          depreciation: monthlyDepreciation,
          insurance: monthlyInsurance,
          maintenance: monthlyMaintenance,
          total: carTotal,
        },
        publicTransport: transit,
        bicycle: bike,
      });
    }
  };

  const formatWon = (v: number) => v.toLocaleString('ko-KR');
  const formatManWon = (v: number) => {
    if (v >= 10000) return `${Math.round(v / 10000)}만 ${formatWon(v % 10000)}원`;
    return `${formatWon(v)}원`;
  };

  const maxCost = results ? Math.max(results.car.total, results.publicTransport, results.bicycle || 1) : 1;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '출퇴근 비용 계산기',
          description: '출퇴근 수단별 월간·연간 교통비를 비교합니다.',
          url: `${BASE_URL}/calculator/commute-cost`,
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
            { '@type': 'ListItem', position: 2, name: '출퇴근 비용 계산기', item: `${BASE_URL}/calculator/commute-cost` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">출퇴근 비용 계산기</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">출퇴근 비용 계산기</h1>
          <p className="text-gray-600">자가용, 대중교통, 자전거 등 출퇴근 수단별 월간·연간 교통비를 비교해 보세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 입력 */}
          <div className="calculator-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">출퇴근 정보</h2>

            <div className="mb-6">
              <label className="calculator-label">편도 거리</label>
              <div className="relative">
                <input type="number" value={oneWayDistance} onChange={(e) => setOneWayDistance(e.target.value)} min="1" className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[5, 10, 20, 30, 50].map((d) => (
                  <button key={d} onClick={() => setOneWayDistance(d.toString())} className="quick-btn">{d}km</button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">월 출근일수</label>
              <div className="relative">
                <input type="number" value={workDays} onChange={(e) => setWorkDays(e.target.value)} min="1" max="31" className="calculator-input pr-12" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">일</span>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-700 mb-3 mt-8 border-t pt-4">자가용 정보</h3>

            <div className="mb-6">
              <label className="calculator-label">연비</label>
              <div className="relative">
                <input type="number" value={efficiency} onChange={(e) => setEfficiency(e.target.value)} step="0.1" min="1" className="calculator-input pr-16" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km/L</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">유가 (리터당)</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(formatNumberWithComma(e.target.value))}
                  className="calculator-input pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">원</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">월 주차비</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={parkingCost}
                  onChange={(e) => setParkingCost(formatNumberWithComma(e.target.value))}
                  className="calculator-input pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">원</span>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-700 mb-3 mt-8 border-t pt-4">대중교통·기타</h3>

            <div className="mb-6">
              <label className="calculator-label">대중교통 월 정기권/교통비</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={transitPass}
                  onChange={(e) => setTransitPass(formatNumberWithComma(e.target.value))}
                  className="calculator-input pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">원</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="calculator-label">자전거/도보 월 비용</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={bikeCost}
                  onChange={(e) => setBikeCost(formatNumberWithComma(e.target.value))}
                  className="calculator-input pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">원</span>
              </div>
            </div>

            <button onClick={handleCalculate} className="calculator-button">계산하기</button>
          </div>

          {/* 결과 */}
          <div>
            {results ? (
              <div className="space-y-6">
                <div className="result-card">
                  <div className="text-center mb-6">
                    <div className="result-label mb-1">자가용 월 출퇴근 비용</div>
                    <div className="result-value">{formatWon(results.car.total)}원</div>
                    <div className="text-sm text-gray-500 mt-1">연간 약 {formatWon(results.car.total * 12)}원</div>
                  </div>
                </div>

                {/* 수단별 비교 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">수단별 월 비용 비교</h3>
                  <div className="space-y-4">
                    {[
                      { label: '자가용', cost: results.car.total, color: 'bg-amber-500', emoji: '🚗' },
                      { label: '대중교통', cost: results.publicTransport, color: 'bg-blue-500', emoji: '🚌' },
                      { label: '자전거/도보', cost: results.bicycle, color: 'bg-green-500', emoji: '🚲' },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{item.emoji} {item.label}</span>
                          <span className="text-sm font-bold text-gray-900">{formatWon(item.cost)}원/월</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-4">
                          <div
                            className={`${item.color} h-4 rounded-full transition-all`}
                            style={{ width: `${Math.max((item.cost / maxCost) * 100, 2)}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 text-right">연간 {formatWon(item.cost * 12)}원</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 자가용 상세 */}
                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">자가용 비용 상세</h3>
                  <div className="space-y-2">
                    {[
                      { label: '유류비', value: results.car.fuel },
                      { label: '주차비', value: results.car.parking },
                      { label: '감가상각', value: results.car.depreciation },
                      { label: '보험료', value: results.car.insurance },
                      { label: '정비비', value: results.car.maintenance },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between py-2 px-4 bg-white rounded-lg">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-semibold">{formatWon(item.value)}원</span>
                      </div>
                    ))}
                    <div className="flex justify-between py-2 px-4 bg-amber-100 rounded-lg border border-amber-300 font-bold">
                      <span className="text-gray-900">합계</span>
                      <span className="text-amber-700">{formatWon(results.car.total)}원</span>
                    </div>
                  </div>
                </div>

                {/* 절약 금액 */}
                {results.car.total > results.publicTransport && (
                  <div className="bg-blue-50 rounded-2xl p-6 text-center">
                    <p className="text-sm text-blue-600 mb-1">대중교통 전환 시 월 절약 금액</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {formatWon(results.car.total - results.publicTransport)}원
                    </p>
                    <p className="text-sm text-blue-500 mt-1">연간 약 {formatWon((results.car.total - results.publicTransport) * 12)}원 절약</p>
                  </div>
                )}

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">다른 계산기</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/calculator/fuel-cost" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      유류비 계산기
                    </Link>
                    <Link href="/calculator/new-vs-used-car" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                      신차 vs 중고차 비교
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-card text-center py-12">
                <div className="text-6xl mb-4">🚗</div>
                <p className="text-gray-500">출퇴근 정보를 입력하고<br />계산하기 버튼을 누르세요.</p>
              </div>
            )}
          </div>
        </div>

        {/* 수단별 장단점 비교 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-12 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">출퇴근 수단별 장단점 비교</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50">
                  <th className="py-3 px-4 text-left font-semibold text-gray-900">항목</th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-900">자가용</th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-900">대중교통</th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-900">자전거/도보</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { item: '비용', car: '높음', transit: '보통', bike: '매우 낮음' },
                  { item: '시간', car: '빠름(주차 제외)', transit: '보통', bike: '거리에 따라 다름' },
                  { item: '편의성', car: '매우 높음', transit: '보통', bike: '날씨 영향' },
                  { item: '건강', car: '낮음', transit: '보통', bike: '매우 높음' },
                  { item: '환경', car: '높은 배출', transit: '보통', bike: '무배출' },
                  { item: '날씨 영향', car: '적음', transit: '적음', bike: '큼' },
                ].map((row) => (
                  <tr key={row.item}>
                    <td className="py-3 px-4 font-medium text-gray-900">{row.item}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.car}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.transit}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.bike}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 교통비 절약 팁 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">교통비 절약 팁 6가지</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '카풀 활용', desc: '동료와 카풀하면 유류비·주차비를 1/2~1/3으로 줄일 수 있습니다.' },
              { title: '대중교통 정기권', desc: '기후동행카드, K-패스 등 정기권을 이용하면 환급 혜택이 있습니다.' },
              { title: '유가 앱 활용', desc: '오피넷, 카카오맵 등으로 최저가 주유소를 찾아 주유하세요.' },
              { title: '경제 운전', desc: '급가속·급정거를 피하면 연비가 10~20% 향상됩니다.' },
              { title: '재택근무 활용', desc: '주 1~2일 재택근무만으로도 월 교통비 20~40% 절약이 가능합니다.' },
              { title: '자전거 병행', desc: '날씨 좋은 날 자전거를 활용하면 건강과 비용 두 마리 토끼를 잡을 수 있습니다.' },
            ].map((tip, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{tip.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
          <div className="space-y-3">
            {[
              { q: '자가용 출퇴근 비용에 감가상각도 포함해야 하나요?', a: '네, 자동차는 보유만 해도 가치가 떨어집니다. 월 평균 약 30만 원의 감가상각비가 발생하며, 이는 실제 출퇴근 비용에 포함됩니다.' },
              { q: '대중교통 기후동행카드는 얼마인가요?', a: '서울 기후동행카드는 월 65,000원(버스+지하철)이며, 따릉이 포함 시 월 66,200원입니다. 수도권 확장 시 추가 비용이 있습니다.' },
              { q: 'K-패스 환급률은 얼마인가요?', a: 'K-패스는 일반 20%, 청년 30%, 저소득 53%의 환급률을 제공합니다. 월 15회 이상 이용 시 적용됩니다.' },
              { q: '자가용과 대중교통의 손익분기 거리는?', a: '일반적으로 편도 10km 이내는 대중교통이, 30km 이상은 자가용이 시간 대비 효율적입니다. 다만 주차비에 따라 크게 달라집니다.' },
              { q: '전기차로 출퇴근하면 비용이 얼마나 줄어드나요?', a: '전기차는 내연기관 대비 유류비(충전비)가 약 1/3~1/2 수준입니다. 다만 차량 가격이 높아 감가상각이 크므로 종합적으로 비교해야 합니다.' },
              { q: '자전거 출퇴근 시 보험은 어떻게 하나요?', a: '자전거 보험은 월 1,000~3,000원 수준으로 가입 가능합니다. 일부 지자체에서는 무료 자전거 보험을 제공하기도 합니다.' },
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-100 rounded-xl">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-amber-50 rounded-xl transition-colors">
                  <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
