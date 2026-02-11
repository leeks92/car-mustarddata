import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '브레이크 패드 교체 비용·시기 가이드 (2026) - 마모 확인법·정비소 비교',
  description:
    '브레이크 패드·디스크 교체 주기, 비용, 마모 확인법 5가지, 차종별·정비소별 가격 비교를 총정리했습니다. 앞바퀴·뒷바퀴 패드, 디스크 로터, 캘리퍼 교체 비용과 브레이크 수명 늘리는 운전 습관까지 안내합니다.',
  keywords: [
    '브레이크 패드 교체 비용',
    '브레이크 패드 교체 주기',
    '브레이크 디스크 교체 비용',
    '브레이크 패드 마모',
    '브레이크 경고등',
    '차종별 브레이크 패드 가격',
    '브레이크 정비 비용',
    '브레이크 수명',
    '브레이크 패드 교체 시기',
    '자동차 브레이크 정비',
  ],
  alternates: { canonical: `${BASE_URL}/guide/brake-pad-replacement` },
  openGraph: {
    title: '브레이크 패드 교체 비용·시기 가이드 (2026)',
    description: '브레이크 패드·디스크 교체 주기, 비용, 마모 확인법, 정비소 선택 가이드를 비교했습니다.',
    url: `${BASE_URL}/guide/brake-pad-replacement`,
    type: 'website',
  },
};

// 교체 주기 데이터
const replacementCycles = [
  { part: '앞바퀴 브레이크 패드', cycle: '30,000~50,000km', period: '2~3년', note: '전륜 제동력 분담 70%, 마모가 빠름' },
  { part: '뒷바퀴 브레이크 패드', cycle: '50,000~70,000km', period: '3~5년', note: '후륜 제동력 분담 30%, 상대적으로 느리게 마모' },
  { part: '브레이크 디스크(로터)', cycle: '60,000~100,000km', period: '4~7년', note: '패드 교체 2~3회당 1회 교체, 두께 측정 필수' },
  { part: '브레이크 캘리퍼', cycle: '100,000~200,000km', period: '7~15년', note: '고착·누유 발생 시 교체, 일반적으로 수리로 해결' },
  { part: '브레이크 오일(DOT4)', cycle: '40,000~60,000km', period: '2~3년', note: '수분 흡수로 끓는점 저하, 정기 교환 필수' },
];

// 마모 확인법 5가지
const wearCheckMethods = [
  {
    method: '패드 두께 육안 확인',
    icon: '1',
    desc: '휠 안쪽으로 브레이크 캘리퍼 사이의 패드를 확인합니다. 새 패드는 약 10~12mm이며, 3mm 이하이면 즉시 교체가 필요합니다.',
    detail: '새 패드 10~12mm → 교체 권장 4~5mm → 한계 3mm → 위험 2mm 이하',
    level: '직접 확인',
  },
  {
    method: '제동 시 소음 확인',
    icon: '2',
    desc: '브레이크를 밟을 때 "끽끽" 또는 "삐이" 하는 금속 마찰음이 나면 패드가 마모된 것입니다. 마모 인디케이터(금속 핀)가 디스크에 닿아 소리를 내는 원리입니다.',
    detail: '가벼운 소음(점검 시기) → 지속적 금속음(교체 필요) → 갈리는 소리(디스크 손상 위험)',
    level: '청각 확인',
  },
  {
    method: '제동거리 변화 체크',
    icon: '3',
    desc: '같은 속도에서 브레이크를 밟았을 때 멈추는 거리가 길어졌다면 패드 마모를 의심해야 합니다. 특히 고속에서 제동 시 차이가 뚜렷합니다.',
    detail: '평소보다 제동거리 10~20% 증가 시 점검 필요, 30% 이상이면 즉시 교체',
    level: '체감 확인',
  },
  {
    method: '브레이크 경고등 확인',
    icon: '4',
    desc: '계기판에 브레이크 경고등(원 안에 느낌표)이 점등되면 패드 마모 센서가 작동한 것입니다. 일부 차량은 "브레이크 패드 마모" 메시지를 표시합니다.',
    detail: '수입차·고급 차량은 전자식 마모 센서 장착, 국산 경제형은 기계식(소음) 방식',
    level: '계기판 확인',
  },
  {
    method: '페달 진동·떨림 확인',
    icon: '5',
    desc: '브레이크 페달이나 스티어링 휠에 진동이 느껴지면 디스크 표면이 불균일하거나 패드가 편마모된 것입니다. 고속 제동 시 더 뚜렷합니다.',
    detail: '페달 진동 → 디스크 표면 변형, 스티어링 진동 → 앞바퀴 디스크 문제 가능성',
    level: '촉각 확인',
  },
];

// 교체 비용 비교 (부위별)
const replacementCosts = [
  { part: '앞바퀴 패드 (좌우 1세트)', partCost: '3~6만 원', laborCost: '3~5만 원', totalCost: '6~11만 원', note: '가장 자주 교체, 국산 순정 기준' },
  { part: '뒷바퀴 패드 (좌우 1세트)', partCost: '3~5만 원', laborCost: '3~5만 원', totalCost: '6~10만 원', note: '앞바퀴 대비 마모 느림' },
  { part: '앞바퀴 디스크 로터 (좌우)', partCost: '6~12만 원', laborCost: '4~6만 원', totalCost: '10~18만 원', note: '패드와 동시 교체 시 공임 절약' },
  { part: '뒷바퀴 디스크 로터 (좌우)', partCost: '5~10만 원', laborCost: '4~6만 원', totalCost: '9~16만 원', note: '후륜 디스크 교체 빈도 낮음' },
  { part: '캘리퍼 (1개)', partCost: '8~20만 원', laborCost: '5~8만 원', totalCost: '13~28만 원', note: '고착·누유 시 교체, 리빌트 제품 가능' },
  { part: '브레이크 오일 교환', partCost: '1~2만 원', laborCost: '2~4만 원', totalCost: '3~6만 원', note: 'DOT4 기준, 전체 교환' },
];

// 차종별 가격 비교
const costByCarType = [
  { category: '경차', models: '모닝, 레이, 스파크', frontPad: '5~7만 원', rearPad: '5~6만 원', frontDisc: '8~12만 원', total4: '18~30만 원', note: '부품비 저렴, 공임도 낮은 편' },
  { category: '준중형', models: '아반떼, K3', frontPad: '6~9만 원', rearPad: '6~8만 원', frontDisc: '10~15만 원', total4: '22~38만 원', note: '가장 보편적 규격, 부품 구하기 쉬움' },
  { category: '중형', models: '쏘나타, K5, 캠리', frontPad: '7~11만 원', rearPad: '6~10만 원', frontDisc: '12~18만 원', total4: '25~45만 원', note: '16~17인치 디스크 기준' },
  { category: '대형', models: '그랜저, K8, G80', frontPad: '8~14만 원', rearPad: '7~12만 원', frontDisc: '14~22만 원', total4: '30~55만 원', note: '대구경 디스크, 부품비 높음' },
  { category: 'SUV', models: '투싼, 쏘렌토, 팰리세이드', frontPad: '8~13만 원', rearPad: '7~11만 원', frontDisc: '13~20만 원', total4: '28~50만 원', note: '차체 무거워 마모 빠른 편' },
  { category: '수입차 (일반)', models: '벤츠 C, BMW 3, 아우디 A4', frontPad: '12~22만 원', rearPad: '10~18만 원', frontDisc: '18~35만 원', total4: '45~85만 원', note: '순정 부품 기준, 사제 시 30~50% 절약' },
  { category: '수입차 (고급)', models: '벤츠 E/S, BMW 5/7, 포르쉐', frontPad: '18~35만 원', rearPad: '15~28만 원', frontDisc: '25~50만 원', total4: '65~130만 원', note: '고성능 브레이크, 부품비 높음' },
];

// 정비소 선택 가이드
const shopComparison = [
  {
    type: '공식 서비스센터',
    price: '높음 (기준가 100%)',
    partQuality: '순정 부품',
    warranty: '정비 보증 6~12개월',
    waitTime: '예약 1~7일, 작업 1~2시간',
    strength: '품질 보장, 보증 유지, 정비 이력 관리',
    weakness: '가격 비쌈, 대기 시간 김',
    recommended: '보증기간 내 차량, 수입차',
  },
  {
    type: '사설 정비소 (카센터)',
    price: '저렴 (기준가 50~70%)',
    partQuality: '순정·사제 선택 가능',
    warranty: '정비소별 상이 (1~3개월)',
    waitTime: '당일 가능, 작업 30분~1시간',
    strength: '가격 저렴, 빠른 작업, 부품 선택 자유',
    weakness: '품질 편차 큼, 보증 제한적',
    recommended: '보증 만료 국산차, 가성비 중시',
  },
  {
    type: '프랜차이즈 (공임나라·오토큐 등)',
    price: '중간 (기준가 60~80%)',
    partQuality: '제휴 브랜드 부품',
    warranty: '체인 보증 3~6개월',
    waitTime: '예약 당일~1일, 작업 1시간',
    strength: '가격 투명, 균일한 품질, 체인 보증',
    weakness: '서비스센터보다 전문성 부족할 수 있음',
    recommended: '합리적 가격과 안정적 품질 원할 때',
  },
];

// 브레이크 수명 늘리는 운전 습관 7가지
const drivingTips = [
  {
    title: '예측 운전으로 급제동 줄이기',
    desc: '전방 신호와 차간 거리를 미리 파악하여 서서히 감속합니다. 급제동 1회는 일반 제동 10회 분의 마모를 유발합니다.',
    saving: '패드 수명 30~50% 연장',
  },
  {
    title: '엔진 브레이크 활용하기',
    desc: '내리막길이나 감속 시 기어를 한 단 낮춰 엔진 브레이크를 사용합니다. 브레이크 패드 마모와 열 발생을 줄여줍니다.',
    saving: '산악·내리막 주행 시 마모 50% 감소',
  },
  {
    title: '적정 차간 거리 유지',
    desc: '앞차와 충분한 거리(시속 60km 기준 40m 이상)를 유지하면 급제동 상황을 줄일 수 있습니다.',
    saving: '급제동 빈도 60~70% 감소',
  },
  {
    title: '고속에서 미리 감속 시작',
    desc: '고속도로 톨게이트, 출구 접근 시 미리 가속 페달에서 발을 떼고 관성 주행 후 제동합니다. 고속 제동은 패드 마모가 큽니다.',
    saving: '고속 주행 패드 마모 40% 감소',
  },
  {
    title: '한쪽 발 운전 습관 들이기',
    desc: '왼발로 브레이크를 밟는 습관(투 페달 운전)은 불필요한 브레이크 접촉을 유발합니다. 오른발로 가속·제동을 번갈아 조작하세요.',
    saving: '불필요한 마모·열 발생 방지',
  },
  {
    title: '과적·과중 적재 피하기',
    desc: '차량 정원·적재량을 초과하면 제동 시 브레이크에 가해지는 부하가 급격히 늘어납니다. 트렁크의 불필요한 짐도 정리하세요.',
    saving: '적재량 10% 감소 시 패드 수명 5~10% 연장',
  },
  {
    title: '정기적인 브레이크 오일 교환',
    desc: '브레이크 오일(DOT4)은 수분을 흡수하여 끓는점이 낮아집니다. 2~3년 또는 4~6만km마다 교환하면 제동 성능을 유지할 수 있습니다.',
    saving: '제동 성능 유지, 캘리퍼·피스톤 수명 연장',
  },
];

// FAQ
const faqItems = [
  {
    q: '브레이크 패드 교체 비용은 평균 얼마인가요?',
    a: '국산 중형차(쏘나타·K5) 기준 앞바퀴 패드 교체 비용은 부품비 4~6만 원 + 공임 3~5만 원 = 총 7~11만 원입니다. 뒷바퀴는 6~10만 원이며, 4바퀴 모두 교체 시 25~45만 원입니다. 수입차는 순정 부품 기준 앞뒤 합산 45~85만 원으로 국산차의 2~3배 수준입니다.',
  },
  {
    q: '브레이크 패드 교체 주기는 얼마나 되나요?',
    a: '일반적으로 앞바퀴 패드는 3~5만km, 뒷바퀴 패드는 5~7만km마다 교체합니다. 다만 시내 주행이 많거나 급제동이 잦은 운전 습관이라면 2~3만km에 마모될 수 있습니다. 고속도로 주행 비율이 높으면 6~8만km까지 사용할 수 있습니다. 주행거리뿐 아니라 패드 두께(3mm 이하 시 교체)를 직접 확인하는 것이 가장 정확합니다.',
  },
  {
    q: '브레이크 패드와 디스크를 같이 교체해야 하나요?',
    a: '반드시 동시에 교체할 필요는 없습니다. 디스크는 패드보다 수명이 2~3배 길어서 패드 교체 2~3회에 디스크 1회 교체가 일반적입니다. 다만 디스크 표면에 깊은 홈, 균열, 심한 편마모가 있거나, 최소 두께(차량별 상이, 보통 원래 두께 대비 1~2mm 이하) 미만이면 함께 교체합니다. 동시 교체 시 공임을 절약할 수 있습니다.',
  },
  {
    q: '브레이크에서 소리가 나면 바로 교체해야 하나요?',
    a: '비 온 직후나 장기 주차 후 일시적인 소음은 디스크 표면 녹(산화) 때문이며 몇 번 제동하면 사라집니다. 그러나 제동 시 지속적으로 "끽끽" 금속음이 들리면 마모 인디케이터가 작동하는 것으로 빠른 시일 내 점검·교체가 필요합니다. "갈리는 소리"가 나면 패드가 완전히 닳아 디스크가 손상되고 있는 상태이므로 즉시 정비소에 방문하세요.',
  },
  {
    q: '사제(비순정) 브레이크 패드를 사용해도 되나요?',
    a: '네, 가능합니다. 국내외 유명 사제 브랜드(상신, 한국후꼬꾸, 만도, 보쉬, ATE, 브렘보 등)는 순정 부품과 동등하거나 더 높은 성능을 제공하기도 합니다. 다만 출처 불명의 저가 제품은 제동력 부족, 소음, 디스크 손상 위험이 있으므로 피해야 합니다. 수입차의 경우 사제 부품을 사용하면 순정 대비 30~50%까지 절약할 수 있습니다.',
  },
  {
    q: '브레이크 경고등이 켜졌는데 바로 위험한 건가요?',
    a: '브레이크 경고등은 크게 두 가지입니다. 원 안에 느낌표(!)는 브레이크액 부족이나 시스템 이상으로 즉시 점검이 필요합니다. "BRAKE PAD" 또는 패드 마모 아이콘은 패드 잔량이 한계치에 도달한 것으로 가급적 빨리(1~2주 내) 교체해야 합니다. 경고등 점등 후에도 바로 제동 불능은 아니지만 제동거리가 길어지고 디스크 손상 위험이 높아지므로 빠른 조치가 안전합니다.',
  },
  {
    q: '전기차 브레이크 패드 교체 주기도 같은가요?',
    a: '전기차는 회생 제동 시스템 덕분에 기계식 브레이크 사용 빈도가 크게 줄어 패드 수명이 8~15만km로 내연기관 대비 2~3배 깁니다. 다만 브레이크를 오래 사용하지 않아 디스크에 녹이 발생하거나 캘리퍼가 고착될 수 있으므로, 주기적으로 브레이크를 의도적으로 사용(세게 밟기)하여 녹을 제거하는 것이 좋습니다. 브레이크 오일 교환은 내연기관과 동일한 주기를 유지하세요.',
  },
];

export default function BrakePadReplacementGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '브레이크 패드 교체 비용·시기 가이드 (2026)',
          description: '브레이크 패드·디스크 교체 주기, 비용, 마모 확인법, 정비소 선택 가이드를 총정리했습니다.',
          url: `${BASE_URL}/guide/brake-pad-replacement`,
          publisher: { '@type': 'Organization', name: 'MustardData', url: BASE_URL },
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
            { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '가이드', item: `${BASE_URL}/guide` },
            { '@type': 'ListItem', position: 3, name: '브레이크 패드 교체', item: `${BASE_URL}/guide/brake-pad-replacement` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href="/guide/maintenance-cost" className="hover:text-amber-600">가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">브레이크 패드 교체</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">정비 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            브레이크 패드 교체 비용·시기 가이드
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            브레이크 패드와 디스크 교체 주기, 부위별·차종별 비용, 마모 확인법 5가지,
            정비소 선택 기준, 수명을 늘리는 운전 습관까지 한눈에 정리했습니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">앞바퀴 패드 (국산)</p>
              <p className="text-lg font-bold text-amber-600">6~11만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">패드+디스크 (국산)</p>
              <p className="text-lg font-bold text-amber-600">16~29만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">수입차 (순정)</p>
              <p className="text-lg font-bold text-amber-600">45~130만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">교체 주기</p>
              <p className="text-lg font-bold text-green-600">3~5만km</p>
            </div>
          </div>
        </section>

        {/* ===== Section 1: 교체 주기 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">브레이크 패드 교체 주기</h2>
            <p className="text-sm text-gray-500 mb-6">앞바퀴 패드는 3~5만km, 디스크는 6~10만km가 일반적인 교체 주기입니다</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">부위</th>
                    <th className="px-4 py-3 text-right font-semibold">주행거리</th>
                    <th className="px-4 py-3 text-right font-semibold">기간</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {replacementCycles.map((row) => (
                    <tr key={row.part} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.part}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.cycle}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.period}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p><strong>주의:</strong> 주행거리와 기간 중 먼저 도래하는 시점에 점검·교체하세요.</p>
              <p><strong>가혹 조건:</strong> 시내 정체 구간 위주, 산악·내리막 주행, 급제동이 잦은 경우 교체 주기가 30~50% 단축됩니다.</p>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>TIP:</strong> 전기차는 회생 제동으로 기계식 브레이크 사용이 적어 패드 수명이 8~15만km로 2~3배 길어집니다. 단, 디스크 표면 녹 발생에 주의하세요.
            </div>
          </div>
        </section>

        {/* ===== Section 2: 마모 확인법 5가지 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">브레이크 패드 마모 확인법 5가지</h2>
            <div className="space-y-4">
              {wearCheckMethods.map((item) => (
                <div key={item.method} className="flex items-start gap-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{item.method}</h3>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{item.level}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                    <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-red-50 rounded-xl p-4 text-sm text-red-700">
              <strong>경고:</strong> 브레이크 패드가 완전히 닳은 채로 주행하면 금속과 금속이 직접 마찰하여 디스크가 손상됩니다.
              디스크 교체 비용(10~18만 원)이 추가되므로 패드 교체 시기를 놓치지 마세요.
            </div>
          </div>
        </section>

        {/* ===== Section 3: 부위별 교체 비용 비교표 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">부위별 교체 비용 비교표</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 국산 중형차(쏘나타·K5급) 순정 부품 기준</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">부위</th>
                    <th className="px-4 py-3 text-right font-semibold">부품비</th>
                    <th className="px-4 py-3 text-right font-semibold">공임</th>
                    <th className="px-4 py-3 text-right font-semibold">총비용</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {replacementCosts.map((row) => (
                    <tr key={row.part} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.part}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.partCost}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.laborCost}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600 whitespace-nowrap">{row.totalCost}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>* <strong>앞뒤 패드 + 앞 디스크 동시 교체:</strong> 총 22~39만 원 (국산 중형 기준)</p>
              <p>* <strong>4바퀴 패드 + 디스크 전부 교체:</strong> 총 31~55만 원 (국산 중형 기준)</p>
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 사설 정비소(공임나라 등)는 공식 서비스센터 대비 30~40% 저렴합니다</p>
          </div>
        </section>

        {/* ===== Section 4: 차종별 가격 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">차종별 브레이크 정비 비용 비교</h2>
            <p className="text-sm text-gray-500 mb-6">2026년 기준, 사설 정비소 순정·호환 부품 기준 (공임 포함)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-left font-semibold">대표 모델</th>
                    <th className="px-4 py-3 text-right font-semibold">앞패드</th>
                    <th className="px-4 py-3 text-right font-semibold">뒷패드</th>
                    <th className="px-4 py-3 text-right font-semibold">앞디스크</th>
                    <th className="px-4 py-3 text-right font-semibold">전체 교체</th>
                    <th className="px-4 py-3 text-left font-semibold">참고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {costByCarType.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.category}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.models}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-medium whitespace-nowrap">{row.frontPad}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-medium whitespace-nowrap">{row.rearPad}</td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap">{row.frontDisc}</td>
                      <td className="px-4 py-3 text-right font-bold text-red-500 whitespace-nowrap">{row.total4}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>절약 TIP:</strong> 수입차는 사제 브랜드(보쉬, ATE, 브렘보 등)를 사용하면 순정 대비 30~50% 절약할 수 있습니다.
              국산차는 상신, 만도, 한국후꼬꾸 등 국내 제조 사제 부품이 순정과 동등한 품질을 제공합니다.
            </div>
          </div>
        </section>

        {/* ===== Section 5: 정비소 선택 가이드 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">정비소 선택 가이드</h2>
            <p className="text-sm text-gray-500 mb-6">공식 서비스센터 vs 사설 정비소 vs 프랜차이즈 비교</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    {shopComparison.map((shop) => (
                      <th key={shop.type} className="px-4 py-3 text-left font-semibold">{shop.type}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">가격 수준</td>
                    {shopComparison.map((shop) => (
                      <td key={`price-${shop.type}`} className="px-4 py-3 text-gray-700 text-xs">{shop.price}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">부품 품질</td>
                    {shopComparison.map((shop) => (
                      <td key={`part-${shop.type}`} className="px-4 py-3 text-gray-700 text-xs">{shop.partQuality}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">보증</td>
                    {shopComparison.map((shop) => (
                      <td key={`warranty-${shop.type}`} className="px-4 py-3 text-gray-700 text-xs">{shop.warranty}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">소요 시간</td>
                    {shopComparison.map((shop) => (
                      <td key={`wait-${shop.type}`} className="px-4 py-3 text-gray-700 text-xs">{shop.waitTime}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">장점</td>
                    {shopComparison.map((shop) => (
                      <td key={`str-${shop.type}`} className="px-4 py-3 text-green-600 text-xs">{shop.strength}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">단점</td>
                    {shopComparison.map((shop) => (
                      <td key={`weak-${shop.type}`} className="px-4 py-3 text-red-500 text-xs">{shop.weakness}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">추천 대상</td>
                    {shopComparison.map((shop) => (
                      <td key={`rec-${shop.type}`} className="px-4 py-3 text-amber-700 text-xs font-medium">{shop.recommended}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>* <strong>보증기간 내 차량:</strong> 공식 서비스센터에서 순정 부품으로 교체하면 차량 보증 유지에 유리합니다</p>
              <p>* <strong>보증 만료 후:</strong> 사설 정비소나 프랜차이즈에서 사제 부품을 사용하면 30~50% 절약 가능합니다</p>
            </div>
          </div>
        </section>

        {/* ===== Section 6: 브레이크 수명 늘리는 운전 습관 7가지 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">브레이크 수명 늘리는 운전 습관 7가지</h2>
            <p className="text-sm text-gray-500 mb-6">운전 습관만 바꿔도 브레이크 패드 수명을 30~50% 연장할 수 있습니다</p>
            <div className="space-y-4">
              {drivingTips.map((item, index) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                    <div className="bg-green-50 rounded-lg px-3 py-2 text-xs text-green-700">
                      <strong>효과:</strong> {item.saving}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <strong>종합 절약 효과:</strong> 위 습관들을 실천하면 패드 교체 주기를 3만km에서 5만km 이상으로 늘릴 수 있습니다.
              연간 약 3~5만 원의 정비 비용을 절약할 수 있으며, 안전 운전에도 도움이 됩니다.
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">브레이크 패드 교체 자주 묻는 질문</h2>
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

        {/* ===== CTA ===== */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              내 차 유지비를 직접 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              브레이크, 타이어, 엔진오일, 보험료까지 한눈에 비교합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                차종별 유지비 비교
              </Link>
              <Link
                href="/guide/engine-oil-change"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                엔진오일 교체 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
