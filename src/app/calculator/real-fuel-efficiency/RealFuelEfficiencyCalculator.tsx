'use client';

import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

type FuelType = 'gasoline' | 'diesel' | 'lpg';

const FUEL_LABELS: Record<FuelType, string> = {
  gasoline: '휘발유',
  diesel: '경유',
  lpg: 'LPG',
};

const DEFAULT_PRICES: Record<FuelType, number> = {
  gasoline: 1650,
  diesel: 1450,
  lpg: 1050,
};

const MONTHLY_AVG_KM = 1200;

const averageEfficiencyData = [
  { model: '모닝', efficiency: '14.2km/L' },
  { model: '아반떼', efficiency: '11.8km/L' },
  { model: '쏘나타', efficiency: '10.5km/L' },
  { model: '쏘나타 HEV', efficiency: '18.2km/L' },
  { model: 'K5', efficiency: '10.8km/L' },
  { model: '그랜저', efficiency: '9.2km/L' },
  { model: '투싼', efficiency: '10.1km/L' },
  { model: '팰리세이드', efficiency: '8.5km/L' },
  { model: '아이오닉5', efficiency: '5.5km/kWh' },
];

const efficiencyTips = [
  { title: '경제속도 유지 (60~80km/h)', desc: '경제속도 구간에서 주행하면 연료 효율이 가장 높습니다. 100km/h 이상에서는 공기저항이 급격히 증가하여 연비가 크게 떨어집니다.' },
  { title: '급가속·급제동 자제', desc: '급가속 시 순간 연료 소모량이 일반 가속 대비 2~3배 증가합니다. 부드러운 가속과 엔진 브레이크 활용이 연비 향상의 핵심입니다.' },
  { title: '타이어 공기압 관리', desc: '적정 공기압보다 10% 부족하면 연비가 약 3% 감소합니다. 월 1회 이상 공기압을 점검하고, 제조사 권장 수치를 유지하세요.' },
  { title: '에어컨 적절 사용', desc: '에어컨 가동 시 연비가 약 10~20% 감소합니다. 시내 주행 시 창문을 열고, 고속 주행 시에만 에어컨을 사용하면 효율적입니다.' },
  { title: '불필요한 짐 제거', desc: '차량 무게가 50kg 증가할 때마다 연비가 약 2% 감소합니다. 트렁크에 불필요한 짐을 정리하고 루프박스도 미사용 시 제거하세요.' },
  { title: '정속 주행 (크루즈컨트롤)', desc: '고속도로에서 크루즈컨트롤을 사용하면 일정한 속도를 유지하여 연비가 약 5~10% 향상됩니다.' },
  { title: '엔진오일 정기 교체', desc: '오래된 엔진오일은 마찰 저항을 증가시켜 연비를 떨어뜨립니다. 제조사 권장 주기에 맞춰 교체하고, 저점도 오일을 사용하면 연비에 도움이 됩니다.' },
  { title: '공회전 최소화', desc: '공회전 시 시간당 약 0.6~1L의 연료가 소모됩니다. 1분 이상 정차 시에는 시동을 끄는 것이 경제적입니다.' },
];

const faqItems = [
  {
    q: '공인연비와 실연비 차이가 나는 이유는?',
    a: '공인연비는 표준화된 실험실 환경에서 측정되기 때문에 실제 도로 조건과 차이가 있습니다. 교통 체증, 급가속/급제동, 에어컨 사용, 탑승 인원, 도로 경사 등 다양한 요인으로 실연비는 공인연비보다 평균 10~30% 낮게 나타납니다.',
  },
  {
    q: '실연비를 정확하게 측정하는 방법은?',
    a: '가장 정확한 방법은 "만탱크법"입니다. 연료를 가득 채운 후 주행하고, 다시 가득 채울 때의 주유량과 주행거리를 기록합니다. 이를 3~5회 반복하면 정확한 평균 실연비를 구할 수 있습니다. 계기판 표시 연비는 실제와 5~10% 차이가 날 수 있습니다.',
  },
  {
    q: '연비 좋은 운전 습관은 무엇인가요?',
    a: '경제속도(60~80km/h) 유지, 급가속·급제동 자제, 정속 주행이 가장 효과적입니다. 또한 타이어 공기압을 적정 수준으로 유지하고, 불필요한 짐을 줄이며, 에어컨 사용을 최소화하면 연비가 10~20% 향상될 수 있습니다.',
  },
  {
    q: '계절별 연비 차이가 있나요?',
    a: '네, 계절에 따라 연비 차이가 있습니다. 여름에는 에어컨 사용으로 약 10~20% 연비가 감소하고, 겨울에는 엔진 예열 시간 증가와 히터 사용으로 약 15~25% 감소합니다. 봄·가을이 가장 연비가 좋은 시기입니다.',
  },
  {
    q: '에어컨 사용이 연비에 미치는 영향은?',
    a: '에어컨을 가동하면 엔진에 추가 부하가 걸려 연비가 약 10~20% 감소합니다. 시내 주행(저속)에서는 창문을 열고, 고속 주행에서는 창문을 닫고 에어컨을 사용하는 것이 효율적입니다. 에어컨 온도를 23~25도로 설정하면 연비 손실을 줄일 수 있습니다.',
  },
  {
    q: '고속도로와 시내 연비 차이는?',
    a: '일반적으로 고속도로 연비가 시내 연비보다 20~40% 높습니다. 시내 주행은 잦은 정차와 가속 때문에 연료 소모가 많고, 고속도로는 정속 주행이 가능하여 효율이 높습니다. 다만 120km/h 이상에서는 공기저항 증가로 연비가 다시 떨어집니다.',
  },
];

function formatNumber(num: number): string {
  return Math.round(num).toLocaleString('ko-KR');
}

export default function RealFuelEfficiencyCalculator() {
  const [distance, setDistance] = useState<string>('300');
  const [fuelAmount, setFuelAmount] = useState<string>('30');
  const [fuelType, setFuelType] = useState<FuelType>('gasoline');
  const [fuelPrice, setFuelPrice] = useState<string>('1,650');

  const handleFuelTypeChange = (type: FuelType) => {
    setFuelType(type);
    setFuelPrice(DEFAULT_PRICES[type].toLocaleString('ko-KR'));
  };

  const handleFuelPriceChange = (value: string) => {
    const raw = value.replace(/[^0-9]/g, '');
    if (!raw) {
      setFuelPrice('');
      return;
    }
    setFuelPrice(Number(raw).toLocaleString('ko-KR'));
  };

  const parsedDistance = parseFloat(distance) || 0;
  const parsedFuelAmount = parseFloat(fuelAmount) || 0;
  const parsedPrice = parseFloat(fuelPrice.replace(/[^0-9]/g, '')) || 0;

  const realEfficiency = parsedFuelAmount > 0 ? parsedDistance / parsedFuelAmount : 0;
  const costPerKm = realEfficiency > 0 ? parsedPrice / realEfficiency : 0;
  const monthlyCost = costPerKm * MONTHLY_AVG_KM;
  const annualCost = monthlyCost * 12;

  const hasResult = parsedDistance > 0 && parsedFuelAmount > 0;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '실연비 계산기',
          description: '실제 주행거리와 주유량으로 내 차의 실연비를 계산합니다.',
          url: `${BASE_URL}/calculator/real-fuel-efficiency`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '자동차 계산기', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '실연비 계산기', item: `${BASE_URL}/calculator/real-fuel-efficiency` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-500">
              <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">실연비 계산기</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">실연비 계산기</h1>
            <p className="text-gray-600">실제 주행거리와 주유량을 입력하면 내 차의 실연비를 정확하게 계산합니다.</p>
          </div>

          {/* Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Input */}
            <div className="calculator-card">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">주행 정보 입력</h2>

              <div className="mb-6">
                <label className="calculator-label">주행거리</label>
                <div className="relative">
                  <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    min="1"
                    className="calculator-input pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">km</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[100, 200, 300, 500, 1000].map((d) => (
                    <button key={d} onClick={() => setDistance(d.toString())} className="quick-btn">
                      {d}km
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="calculator-label">주유량</label>
                <div className="relative">
                  <input
                    type="number"
                    value={fuelAmount}
                    onChange={(e) => setFuelAmount(e.target.value)}
                    min="1"
                    step="0.1"
                    className="calculator-input pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">L</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[10, 20, 30, 40, 50].map((a) => (
                    <button key={a} onClick={() => setFuelAmount(a.toString())} className="quick-btn">
                      {a}L
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="calculator-label">유종</label>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(FUEL_LABELS) as FuelType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => handleFuelTypeChange(type)}
                      className={`py-2 px-3 rounded-lg border transition-colors text-sm ${
                        fuelType === type
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      {FUEL_LABELS[type]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="calculator-label">유가 (리터당)</label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={fuelPrice}
                    onChange={(e) => handleFuelPriceChange(e.target.value)}
                    className="calculator-input pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">원/L</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              {hasResult ? (
                <div className="space-y-4">
                  {/* Main result */}
                  <div className="result-card">
                    <div className="text-center mb-6">
                      <div className="result-label mb-1">내 차 실연비</div>
                      <div className="result-value">{realEfficiency.toFixed(1)} km/L</div>
                    </div>
                  </div>

                  {/* Detail cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                      <div className="text-sm text-gray-500 mb-1">km당 비용</div>
                      <div className="text-xl font-bold text-gray-900">
                        {formatNumber(costPerKm)}<span className="text-sm font-normal text-gray-500 ml-1">원</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                      <div className="text-sm text-gray-500 mb-1">월간 예상 유류비</div>
                      <div className="text-xl font-bold text-amber-600">
                        {formatNumber(monthlyCost)}<span className="text-sm font-normal text-gray-500 ml-1">원</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">월 {MONTHLY_AVG_KM.toLocaleString()}km 기준</div>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                      <div className="text-sm text-gray-500 mb-1">연간 예상 유류비</div>
                      <div className="text-xl font-bold text-gray-900">
                        {formatNumber(annualCost)}<span className="text-sm font-normal text-gray-500 ml-1">원</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">약 {(annualCost / 10000).toFixed(0)}만 원</div>
                    </div>
                  </div>

                  {/* Other calculators */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">다른 계산기</h4>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/calculator/fuel-cost" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                        유류비 계산기
                      </Link>
                      <Link href="/calculator/depreciation" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
                        감가상각 계산기
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="calculator-card text-center py-12">
                  <div className="text-6xl mb-4">&#9981;</div>
                  <p className="text-gray-500">주행거리와 주유량을 입력하면<br />실연비를 계산합니다.</p>
                </div>
              )}
            </div>
          </div>

          {/* 차종별 평균 실연비 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">차종별 평균 실연비</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-amber-50 text-gray-900">
                      <th className="px-4 py-3 text-left font-semibold">차종</th>
                      <th className="px-4 py-3 text-right font-semibold">평균 실연비</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {averageEfficiencyData.map((car) => (
                      <tr key={car.model} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{car.model}</td>
                        <td className="px-4 py-3 text-right text-amber-600 font-semibold">{car.efficiency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              ※ 실제 연비는 운전 습관, 도로 조건, 계절 등에 따라 달라질 수 있습니다.
            </p>
          </section>

          {/* 연비 향상 팁 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">연비 향상 팁 8가지</h2>
            <div className="space-y-4">
              {efficiencyTips.map((tip, index) => (
                <div
                  key={tip.title}
                  className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-amber-600 transition-colors">
                    {item.q}
                  </summary>
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                자동차 유지비도 계산해 보세요
              </h2>
              <p className="text-amber-100 mb-6">
                유류비, 보험료, 정비비 등 내 차의 월간 유지비를 한눈에 확인할 수 있습니다
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/calculator/fuel-cost"
                  className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  유류비 계산기
                </Link>
                <Link
                  href="/guide/maintenance-cost"
                  className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                >
                  유지비 가이드 보기
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
