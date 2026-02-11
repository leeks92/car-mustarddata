import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '폐차 보상금·조기폐차 지원금 - 2026년 지원금 총정리',
  description:
    '폐차 보상금 종류, 조기폐차 지원금 대상·조건, 신청 절차를 총정리했습니다. 일반 폐차 보상금, 조기폐차 지원금(최대 300만원), 노후경유차 전환 지원금 정보를 확인하세요.',
  keywords: [
    '폐차 보상금',
    '조기폐차 지원금',
    '폐차 지원금',
    '노후경유차 폐차',
    '배출가스 5등급',
    '조기폐차 신청',
    '폐차 보조금',
    '노후차 지원금',
  ],
  alternates: { canonical: `${BASE_URL}/guide/scrap-car-subsidy` },
  openGraph: {
    title: '폐차 보상금·조기폐차 지원금 - 2026년 지원금 총정리',
    description: '폐차 보상금 종류, 조기폐차 지원금 대상·조건, 신청 절차를 총정리했습니다.',
    url: `${BASE_URL}/guide/scrap-car-subsidy`,
    type: 'website',
  },
};

const subsidyTypes = [
  {
    emoji: '♻️',
    title: '일반 폐차 보상금',
    amount: '30~100만 원',
    desc: '차량의 고철 가치를 기준으로 산정됩니다. 차량 크기·중량·상태에 따라 금액이 달라지며, 폐차장에서 직접 지급합니다.',
    highlight: '고철값 기준',
  },
  {
    emoji: '🌿',
    title: '조기폐차 지원금',
    amount: '최대 300만 원',
    desc: '배출가스 5등급(2005년 이전 등록 경유차) 차량을 조기에 폐차하면 정부에서 보상금을 지급합니다. 차량 잔존가치의 일정 비율로 산정됩니다.',
    highlight: '배출가스 5등급 차량 대상',
  },
  {
    emoji: '🚗',
    title: '노후경유차 전환 지원금',
    amount: '신차구매 보조금',
    desc: '조기폐차 후 신차(저공해차)를 구매하면 추가 보조금을 받을 수 있습니다. 전기차·하이브리드 구매 시 국고보조금과 중복 적용됩니다.',
    highlight: '신차 구매 시 추가 혜택',
  },
];

const eligibilityConditions = [
  { condition: '배출가스 등급', detail: '5등급 (2005년 이전 등록 경유차)' },
  { condition: '차량 상태', detail: '정상 운행 가능 차량 (자력 주행 가능)' },
  { condition: '소유 기간', detail: '6개월 이상 소유 (신청일 기준)' },
  { condition: '정기검사', detail: '정기검사 유효기간 내 차량' },
  { condition: '저공해 조치', detail: '저공해 미조치 차량 (DPF 미부착)' },
  { condition: '운행 제한', detail: '운행 제한 단속 이전 신청 차량' },
];

const applicationSteps = [
  {
    step: '1',
    title: '대상 확인',
    desc: '자동차배출가스등급제 사이트(emissiongrade.mecar.or.kr)에서 내 차량의 배출가스 등급을 확인합니다. 5등급 차량만 조기폐차 지원 대상입니다.',
  },
  {
    step: '2',
    title: '온라인 신청',
    desc: '한국자동차환경협회(aea.or.kr) 홈페이지에서 조기폐차 지원금을 온라인으로 신청합니다. 차량번호, 소유자 정보를 입력합니다.',
  },
  {
    step: '3',
    title: '서류 제출',
    desc: '자동차등록증 사본, 신분증 사본, 통장 사본 등 필요 서류를 제출합니다. 온라인 또는 방문 제출 가능합니다.',
  },
  {
    step: '4',
    title: '심사·승인',
    desc: '제출된 서류와 차량 상태를 확인합니다. 보통 2~4주 내에 승인 여부가 통보됩니다.',
  },
  {
    step: '5',
    title: '폐차 말소',
    desc: '승인 후 45일 이내에 인가된 폐차장에서 폐차를 진행하고 말소 등록을 완료합니다.',
  },
  {
    step: '6',
    title: '보상금 지급',
    desc: '폐차 말소 확인 후 지원금이 지정 계좌로 입금됩니다. 보통 말소 후 2~4주 소요됩니다.',
  },
];

const regionalSubsidies = [
  { region: '서울', maxAmount: '300만 원', note: '예산 조기 소진 주의' },
  { region: '경기', maxAmount: '300만 원', note: '시·군별 추가 지원 있음' },
  { region: '부산', maxAmount: '300만 원', note: '예산 규모 중간' },
  { region: '대구', maxAmount: '300만 원', note: '신청 경쟁 보통' },
  { region: '인천', maxAmount: '300만 원', note: '시·군별 추가 지원 가능' },
  { region: '광주', maxAmount: '300만 원', note: '예산 소진 빠름' },
  { region: '대전', maxAmount: '300만 원', note: '비교적 여유' },
  { region: '울산', maxAmount: '300만 원', note: '경유차 비율 높아 경쟁 있음' },
];

const scrapVsSellCriteria = [
  {
    category: '폐차가 유리한 경우',
    emoji: '♻️',
    items: [
      '차량 연식 15년 이상',
      '주행거리 20만km 이상',
      '사고 이력이 많은 차량',
      '중고 시세가 100만 원 이하',
      '배출가스 5등급 → 조기폐차 지원금 대상',
      '수리비가 차량 가치를 초과',
    ],
  },
  {
    category: '중고 판매가 유리한 경우',
    emoji: '🚗',
    items: [
      '차량 연식 10년 이하',
      '주행거리 15만km 이하',
      '사고 이력 없거나 적은 차량',
      '인기 차종 (중고 수요 있음)',
      '중고 시세가 폐차 보상금보다 높음',
      '차량 상태 양호 (외관·엔진)',
    ],
  },
];

const requiredDocuments = [
  { doc: '자동차등록증', note: '원본 또는 사본' },
  { doc: '신분증', note: '차량 소유자 본인 주민등록증 또는 운전면허증' },
  { doc: '인감증명서', note: '폐차 위임 시 필요 (직접 방문 시 불필요)' },
  { doc: '자동차세 완납증명서', note: '미납 세금이 있으면 폐차 불가' },
  { doc: '통장 사본', note: '보상금 입금용 (소유자 본인 명의)' },
  { doc: '자동차 저당·압류 해제 서류', note: '저당·압류가 있는 경우 해제 필요' },
];

const faqItems = [
  {
    q: '조기폐차 지원금은 얼마까지 받을 수 있나요?',
    a: '조기폐차 지원금은 차량 잔존가치에 따라 산정되며, 최대 300만 원까지 지급됩니다. 차량의 종류, 연식, 상태에 따라 실제 지급액은 달라집니다. 여기에 폐차장에서 지급하는 고철값(30~100만 원)이 별도로 추가됩니다.',
  },
  {
    q: '내 차가 조기폐차 대상인지 어떻게 확인하나요?',
    a: '자동차배출가스등급제 사이트(emissiongrade.mecar.or.kr)에서 차량번호를 입력하면 배출가스 등급을 확인할 수 있습니다. 5등급으로 분류된 차량이 조기폐차 지원 대상입니다. 주로 2005년 이전 등록된 경유 차량이 해당됩니다.',
  },
  {
    q: '폐차 후 말소 등록은 어떻게 하나요?',
    a: '인가된 폐차장에서 폐차를 진행하면 폐차장에서 말소 등록을 대행해 줍니다. 직접 하려면 관할 차량등록사업소에 폐차인수증명서, 자동차등록증, 번호판을 가지고 방문하면 됩니다. 폐차 후 15일 이내에 말소 등록을 완료해야 합니다.',
  },
  {
    q: '폐차 보상금은 언제 지급되나요?',
    a: '일반 폐차 보상금(고철값)은 폐차장에서 차량 인수 시 즉시 또는 1~3일 내에 지급됩니다. 조기폐차 지원금은 말소 등록 완료 후 2~4주 이내에 지정 계좌로 입금됩니다.',
  },
  {
    q: '조기폐차 후 신차 구매 추가 지원금이 있나요?',
    a: '네, 조기폐차 후 저공해차(전기차·하이브리드 등)를 구매하면 추가 보조금을 받을 수 있습니다. 전기차의 경우 국고보조금과 지자체 보조금에 더해 조기폐차 추가 인센티브가 적용됩니다. 지역과 차종에 따라 금액이 다르므로 관할 지자체에 확인하세요.',
  },
  {
    q: '압류/저당이 있는 차도 폐차할 수 있나요?',
    a: '원칙적으로 압류나 저당이 설정된 차량은 폐차할 수 없습니다. 먼저 압류를 해제하고 저당을 말소해야 합니다. 다만, 일부 지자체에서는 노후 차량의 경우 압류 해제 지원 프로그램을 운영하기도 합니다. 관할 구청이나 차량등록사업소에 문의하세요.',
  },
  {
    q: '사고 차량도 폐차 보상금을 받을 수 있나요?',
    a: '네, 사고 차량도 폐차 보상금(고철값)을 받을 수 있습니다. 다만 조기폐차 지원금은 "정상 운행 가능한 차량"이 조건이므로, 자력 주행이 불가능한 사고 차량은 조기폐차 지원금 대상에서 제외될 수 있습니다. 일반 폐차만 가능한 경우에도 고철값은 지급됩니다.',
  },
  {
    q: '폐차장은 어떻게 선택하나요?',
    a: '반드시 환경부 인가 폐차장(허가된 폐차 재활용업체)을 이용해야 합니다. 한국자동차환경협회 사이트에서 지역별 인가 폐차장 목록을 확인할 수 있습니다. 여러 곳에서 견적을 받아 비교하고, 말소 등록 대행 여부, 추가 비용 유무를 확인하세요.',
  },
];

export default function ScrapCarSubsidyPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '폐차 보상금·조기폐차 지원금 - 2026년 지원금 총정리',
          description: '폐차 보상금 종류, 조기폐차 지원금 대상·조건, 신청 절차를 총정리했습니다.',
          url: `${BASE_URL}/guide/scrap-car-subsidy`,
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
            { '@type': 'ListItem', position: 2, name: '폐차 보상금·조기폐차 지원금', item: `${BASE_URL}/guide/scrap-car-subsidy` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">홈</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">폐차 보상금·조기폐차 지원금</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            폐차 보상금·조기폐차 지원금
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            노후 차량을 폐차할 때 받을 수 있는 보상금과 지원금을 총정리했습니다.
            특히 <strong>배출가스 5등급 경유차</strong>는 조기폐차 지원금으로
            최대 <strong>300만 원</strong>까지 받을 수 있으므로 반드시 확인하세요.
          </p>
        </section>

        {/* 지원금 종류 3가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            지원금 종류 3가지
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {subsidyTypes.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-lg font-bold text-amber-600 mb-3">{item.amount}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <p className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg inline-block">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 조기폐차 대상·조건 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            조기폐차 대상·조건
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">조건 항목</th>
                    <th className="px-4 py-3 text-left font-semibold">세부 기준</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {eligibilityConditions.map((row) => (
                    <tr key={row.condition} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.condition}</td>
                      <td className="px-4 py-3 text-gray-700">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 세부 조건은 연도 및 지자체에 따라 변경될 수 있습니다. 신청 전 한국자동차환경협회에서 최신 기준을 확인하세요.
          </p>
        </section>

        {/* 신청 절차 6단계 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            신청 절차 6단계
          </h2>
          <div className="space-y-4">
            {applicationSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 지역별 지원금 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            지역별 지원금 비교
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">지역</th>
                    <th className="px-4 py-3 text-right font-semibold">최대 지원금</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {regionalSubsidies.map((row) => (
                    <tr key={row.region} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.region}</td>
                      <td className="px-4 py-3 text-right font-bold text-amber-600">{row.maxAmount}</td>
                      <td className="px-4 py-3 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 최대 지원금은 차량 잔존가치 기준이며, 지역별 예산 소진 시 조기 마감될 수 있습니다. 각 지자체 환경과에 확인하세요.
          </p>
        </section>

        {/* 폐차 vs 중고 판매 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            폐차 vs 중고 판매 비교
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scrapVsSellCriteria.map((group) => (
              <div
                key={group.category}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="text-3xl mb-3">{group.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 mt-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>판단 기준:</strong> 중고차 시세 사이트(KB차차차, 엔카 등)에서 내 차의 시세를
              먼저 확인하세요. 중고 시세가 폐차 보상금(고철값 + 조기폐차 지원금)보다 높으면
              중고 판매가, 낮으면 폐차가 유리합니다.
            </p>
          </div>
        </section>

        {/* 폐차 시 필요 서류 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            폐차 시 필요 서류
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <ul className="space-y-3">
              {requiredDocuments.map((item) => (
                <li key={item.doc} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <div>
                    <span className="font-medium text-gray-900">{item.doc}</span>
                    <span className="text-sm text-gray-500 ml-2">— {item.note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
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
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              내 차의 현재 시세를 확인해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              폐차와 중고 판매 중 어떤 것이 유리한지 감가상각 계산기로 비교하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/depreciation"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                감가상각 계산하기
              </Link>
              <Link
                href="/guide/car-tax-refund"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                자동차세 환급 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
