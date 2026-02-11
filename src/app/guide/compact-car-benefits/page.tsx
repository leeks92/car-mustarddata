import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '경차 혜택 총정리 2026 - 세금·통행료·주차·유류세 혜택 가이드',
  description:
    '2026년 경차 세금 혜택, 통행료 할인, 주차 혜택, 유류세 환급 등 모든 혜택을 정리했습니다. 경차 vs 소형차 연간 비용 비교와 2026년 경차 모델 정보도 확인하세요.',
  keywords: [
    '경차 혜택',
    '경차 세금 혜택',
    '경차 통행료 할인',
    '경차 주차 할인',
    '경차 유류세 환급',
    '경차 취등록세 면제',
    '경차 자동차세',
    '경차 vs 소형차',
    '모닝 혜택',
    '레이 혜택',
  ],
  alternates: { canonical: `${BASE_URL}/guide/compact-car-benefits` },
  openGraph: {
    title: '경차 혜택 총정리 2026 - 세금·통행료·주차·유류세 혜택 가이드',
    description: '2026년 경차 세금 혜택, 통행료 할인, 주차 혜택, 유류세 환급 등 모든 혜택을 정리했습니다.',
    url: `${BASE_URL}/guide/compact-car-benefits`,
  },
};

const taxBenefits = [
  {
    title: '취등록세 면제',
    description:
      '차량 가격 4,000만 원 이하 경차는 취득세가 면제됩니다. 최대 75만 원까지 감면받을 수 있어, 신차 구매 시 초기 비용을 크게 줄일 수 있습니다.',
  },
  {
    title: '자동차세 연 10.4만 원',
    description:
      '경차의 자동차세는 cc당 80원으로 계산됩니다. 998cc 기준 연간 약 10.4만 원으로, 중형차(연 40~50만 원) 대비 약 1/4 수준입니다.',
  },
  {
    title: '채권 매입 면제',
    description:
      '경차는 신규 등록 시 지역개발채권(도시철도채권) 매입 의무가 면제됩니다. 일반 승용차의 경우 차량 가격의 5~12%를 채권으로 매입해야 하므로 상당한 절약 효과가 있습니다.',
  },
  {
    title: '공채 할인',
    description:
      '경차는 공채 매입 의무가 없어 별도의 공채 할인율을 적용받지 않아도 됩니다. 일반 차량은 공채를 할인 매도할 경우 손실이 발생하지만, 경차는 해당 비용이 없습니다.',
  },
  {
    title: '개별소비세 면제',
    description:
      '경차는 개별소비세(차량 가격의 5%)가 면제됩니다. 1,500만 원 차량 기준 약 75만 원의 개별소비세가 면제되어 차량 구매 가격 자체가 낮아집니다.',
  },
];

const costComparison = [
  { item: '자동차세(연)', compact: '약 10.4만 원', subcompact: '약 29만 원' },
  { item: '취등록세', compact: '면제 (최대 75만 원)', subcompact: '약 100만 원' },
  { item: '보험료(연)', compact: '약 45만 원', subcompact: '약 65만 원' },
  { item: '유류비(연)', compact: '약 90만 원', subcompact: '약 130만 원' },
  { item: '통행료(연)', compact: '약 12만 원 (50% 할인)', subcompact: '약 24만 원' },
  { item: '주차비(연)', compact: '약 15만 원 (50% 할인)', subcompact: '약 30만 원' },
  { item: '총합(연)', compact: '약 172만 원', subcompact: '약 278만 원' },
];

const compactModels = [
  {
    name: '기아 모닝',
    engine: '998cc / 76마력',
    price: '1,415만 ~ 1,850만 원',
    fuel: '15.7km/L',
    features: '가장 인기 있는 경차. 다양한 트림, 넓은 딜러망, 저렴한 유지비가 장점.',
  },
  {
    name: '기아 레이',
    engine: '998cc / 76마력',
    price: '1,520만 ~ 1,930만 원',
    fuel: '13.0km/L',
    features: '박스카 디자인으로 실내 공간이 넓음. 캠핑카 개조, 화물 운반에 유리.',
  },
  {
    name: '쉐보레 스파크',
    engine: '999cc / 75마력',
    price: '단종 (중고차만 구매 가능)',
    fuel: '15.0km/L',
    features: '2022년 단종. 중고차 시장에서 저렴한 가격으로 구매 가능. 부품 수급 확인 필요.',
  },
];

const faqs = [
  {
    question: '경차의 기준은 무엇인가요?',
    answer:
      '경차는 배기량 1,000cc 이하, 길이 3.6m 이하, 너비 1.6m 이하, 높이 2.0m 이하를 모두 충족하는 차량입니다. 이 기준은 자동차관리법 시행규칙에 정해져 있으며, 4가지 조건을 모두 만족해야 경차로 분류됩니다.',
  },
  {
    question: '경차 유류세 환급은 어떻게 신청하나요?',
    answer:
      '경차 유류세 환급 카드를 발급받아 주유 시 사용하면 자동으로 환급됩니다. 신한·현대·롯데카드 등에서 경차 유류세 환급 전용 카드를 발급받을 수 있으며, 카드사 홈페이지나 고객센터에서 신청 가능합니다. 1세대 1경차 소유자가 대상입니다.',
  },
  {
    question: '경차도 고속도로를 탈 수 있나요?',
    answer:
      '네, 경차도 고속도로 주행이 가능합니다. 고속도로 최저 속도(50km/h) 이상 주행이 가능하므로 법적으로 문제없습니다. 또한 고속도로 통행료가 50% 할인되어 장거리 주행 시에도 경제적입니다.',
  },
  {
    question: '경차 보험료는 얼마나 저렴한가요?',
    answer:
      '경차의 보험료는 중형차 대비 약 30~40% 저렴합니다. 차량 가격이 낮아 차량 손해 보험료가 적고, 사고 시 수리비도 적게 들어 전체 보험료가 낮습니다. 연간 약 40~50만 원 수준으로, 중형차(70~100만 원) 대비 상당히 저렴합니다.',
  },
  {
    question: '경차 혜택은 1세대 1대만 받을 수 있나요?',
    answer:
      '유류세 환급, 취등록세 면제 등 주요 경차 혜택은 1세대 1경차 기준으로 적용됩니다. 세대원 중 다른 승용차를 보유하고 있으면 일부 혜택을 받을 수 없습니다. 다만 고속도로 통행료 할인, 공영주차장 할인 등은 차량 기준으로 적용되어 별도 제한이 없습니다.',
  },
  {
    question: '전기 경차도 경차 혜택을 받나요?',
    answer:
      '전기 경차도 경차 크기 기준을 충족하면 경차 혜택을 받을 수 있습니다. 추가로 전기차 보조금(국비+지방비), 자동차세 면제(비영업용), 충전 요금 할인 등 전기차 고유 혜택도 함께 받을 수 있어 이중 혜택이 가능합니다.',
  },
  {
    question: '경차 안전성은 괜찮은가요?',
    answer:
      '최신 경차는 안전 기술이 크게 향상되었습니다. 기아 모닝은 6에어백, 전방 충돌 방지 보조(FCA), 차선 이탈 경고(LDW), 후방 교차 충돌 경고 등 다양한 첨단 안전 장치를 기본 또는 옵션으로 제공합니다. 다만 차체 크기의 한계로 대형차와의 충돌 시에는 상대적으로 불리할 수 있습니다.',
  },
];

export default function CompactCarBenefitsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '경차 혜택 총정리 2026 - 세금·통행료·주차·유류세 혜택 가이드',
          description:
            '2026년 경차 세금 혜택, 통행료 할인, 주차 혜택, 유류세 환급 등 모든 혜택을 정리했습니다.',
          url: `${BASE_URL}/guide/compact-car-benefits`,
          publisher: { '@type': 'Organization', name: 'MustardData' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: '홈',
              item: BASE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '경차 혜택 총정리 2026',
              item: `${BASE_URL}/guide/compact-car-benefits`,
            },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">
            홈
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">경차 혜택 총정리 2026</span>
        </nav>

        {/* Hero */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">경차 혜택 총정리 2026</h1>
        <p className="text-lg text-gray-600 mb-10">
          2026년 기준, 경차를 소유하면 받을 수 있는 모든 혜택을 정리했습니다. 세금 감면부터 통행료 할인, 주차 혜택, 유류세 환급까지
          경차의 경제적 이점을 한눈에 확인하세요.
        </p>

        {/* 1. 세금 혜택 5종 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">세금 혜택 5종</h2>
          <div className="space-y-4">
            {taxBenefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 통행료 할인 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">통행료 할인</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">고속도로 통행료 50% 할인</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                경차는 전국 고속도로 통행료가 50% 할인됩니다. 하이패스 또는 일반 요금소 모두 적용되며, 별도 신청 없이 경차로 등록된 차량에 자동 적용됩니다.
              </p>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">연간 절약 예시:</span> 서울-부산 왕복(약 25,000원) 기준 월 1회 이용 시 연간 약 15만 원 절약
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">도시 터널 통행료 면제</h3>
              <p className="text-gray-600 leading-relaxed">
                서울 남산1·3호 터널, 우면산 터널 등 유료 터널의 통행료가 면제됩니다. 출퇴근 시 터널을 이용하는 경우 연간 수십만 원을 절약할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">혼잡통행료 면제</h3>
              <p className="text-gray-600 leading-relaxed">
                서울 도심 혼잡통행료(남산 1·3호 터널 등) 부과 대상에서 경차는 제외됩니다. 혼잡통행료는 1회 2,000원이므로, 매일 출퇴근 시 이용하면 월 약 8만 원, 연간 약 100만 원을 절약할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 주차 혜택 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">주차 혜택</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">공영주차장 50% 할인</h3>
              <p className="text-gray-600 leading-relaxed">
                전국 공영주차장(지자체 운영) 주차 요금이 50% 할인됩니다. 노상·노외 공영주차장 모두 적용되며, 일부 지자체에서는 최대 80%까지 할인해 주기도 합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">아파트 경차 전용 구역</h3>
              <p className="text-gray-600 leading-relaxed">
                일부 아파트 단지에서는 경차 전용 주차 구역을 별도로 지정하여 운영합니다. 좁은 주차 공간에서도 경차는 주차가 용이하여 실질적인 편의성도 높습니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">주요 도시별 주차 혜택</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-amber-50">
                      <th className="text-left px-4 py-2 text-sm font-semibold text-gray-900">도시</th>
                      <th className="text-left px-4 py-2 text-sm font-semibold text-gray-900">할인 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">서울</td>
                      <td className="px-4 py-2 text-sm text-gray-600">공영주차장 50% 할인, 거주자우선주차 50% 할인</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">부산</td>
                      <td className="px-4 py-2 text-sm text-gray-600">공영주차장 50% 할인</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">대구</td>
                      <td className="px-4 py-2 text-sm text-gray-600">공영주차장 50% 할인, 경차 전용 구역 운영</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">인천</td>
                      <td className="px-4 py-2 text-sm text-gray-600">공영주차장 50% 할인</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">세종</td>
                      <td className="px-4 py-2 text-sm text-gray-600">공영주차장 80% 할인</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 유류세 환급 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">유류세 환급</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">경차 유류세 환급 카드</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                경차 유류세 환급 전용 카드로 주유하면 휘발유·경유 리터당 250원이 환급됩니다. 연간 최대 30만 원까지 환급받을 수 있으며, LPG 차량은 리터당 161원이 환급됩니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-1">환급 금액</p>
                  <p className="text-amber-600 font-bold text-lg">리터당 250원</p>
                  <p className="text-xs text-gray-500">휘발유·경유 기준</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-1">연간 한도</p>
                  <p className="text-amber-600 font-bold text-lg">최대 30만 원</p>
                  <p className="text-xs text-gray-500">2026년 기준</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">신청 방법</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">1</div>
                  <p className="text-gray-600 text-sm">신한·현대·롯데카드 등 경차 유류세 환급 전용 카드 발급 신청</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">2</div>
                  <p className="text-gray-600 text-sm">카드 수령 후 주유 시 해당 카드로 결제</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">3</div>
                  <p className="text-gray-600 text-sm">유류세 환급분이 카드 청구 시 자동 차감</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-amber-700">대상 조건:</span> 경차 소유자 본인 명의 1세대 1차량, 배기량 1,000cc 이하,
                유가보조금 수혜 대상이 아닌 차량. 법인 차량 및 장애인 유류세 지원 대상자는 제외됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 5. 경차 vs 소형차 연간 비용 비교 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">경차 vs 소형차 연간 비용 비교</h2>
          <p className="text-gray-600 mb-4">
            기아 모닝(경차)과 현대 아반떼(소형차)의 연간 유지 비용을 항목별로 비교했습니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-900">항목</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">경차 (모닝)</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-900">소형차 (아반떼)</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr
                    key={row.item}
                    className={`border-t border-gray-100 ${row.item === '총합(연)' ? 'bg-amber-50 font-bold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-6 py-3 text-sm text-gray-900 font-medium">{row.item}</td>
                    <td className={`px-6 py-3 text-sm text-right ${row.item === '총합(연)' ? 'text-amber-600 font-bold' : 'text-gray-900'}`}>
                      {row.compact}
                    </td>
                    <td className="px-6 py-3 text-sm text-right text-gray-600">{row.subcompact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 연 12,000km 주행 기준. 보험료는 30대 무사고 기준. 실제 비용은 운전 경력, 지역, 주행 습관에 따라 달라질 수 있습니다.
          </p>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mt-4">
            <p className="text-amber-800 font-semibold text-lg mb-1">연간 약 106만 원 절약!</p>
            <p className="text-sm text-gray-700">
              경차는 소형차 대비 연간 약 106만 원, 5년 기준 약 530만 원의 비용을 절약할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 6. 2026년 경차 모델 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2026년 경차 모델 비교</h2>
          <div className="space-y-4">
            {compactModels.map((model) => (
              <div key={model.name} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{model.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">엔진</p>
                    <p className="text-sm font-semibold text-gray-900">{model.engine}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">가격</p>
                    <p className="text-sm font-semibold text-gray-900">{model.price}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">연비</p>
                    <p className="text-sm font-semibold text-gray-900">{model.fuel}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{model.features}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-amber-600 transition-colors">
                  {faq.question}
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 서비스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/models/morning"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all text-center"
            >
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-semibold text-gray-900 mb-1">기아 모닝 유지비·세금</div>
              <div className="text-sm text-gray-500">모닝의 자동차세, 보험료, 유지비 확인</div>
            </Link>
            <Link
              href="/calculator/car-tax"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all text-center"
            >
              <div className="text-3xl mb-2">🏷️</div>
              <div className="font-semibold text-gray-900 mb-1">자동차세 계산기</div>
              <div className="text-sm text-gray-500">경차 자동차세 직접 계산해 보기</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
