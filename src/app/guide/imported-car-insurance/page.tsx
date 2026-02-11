import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '수입차 보험료 절약 가이드 - 2026년 브랜드별 비교·절약 방법 8가지 총정리',
  description:
    '수입차 보험료가 비싼 이유, 브랜드별·모델별 보험료 비교(18개 모델), 국산차 대비 보험료 차이, 보험료 절약 방법 8가지를 정리했습니다. 벤츠·BMW·아우디·볼보·렉서스·포르쉐 보험료와 연령대별 보험료 차이를 확인하세요.',
  keywords: [
    '수입차 보험료',
    '수입차 보험',
    '수입차 보험료 비교',
    '수입차 보험 절약',
    '벤츠 보험료',
    'BMW 보험료',
    '아우디 보험료',
    '수입차 다이렉트 보험',
    '수입차 마일리지 특약',
    '수입차 무사고 할인',
  ],
  alternates: { canonical: `${BASE_URL}/guide/imported-car-insurance` },
  openGraph: {
    title: '수입차 보험료 절약 가이드 - 2026년 브랜드별 비교·절약 방법 8가지 총정리',
    description:
      '수입차 보험료 비교와 절약 방법을 총정리했습니다. 18개 모델별 보험료, 국산차 대비 차이, 절약 방법 8가지를 확인하세요.',
    url: `${BASE_URL}/guide/imported-car-insurance`,
    type: 'website',
  },
};

interface ImportedCarInsurance {
  brand: string;
  model: string;
  segment: string;
  premium20s: string;
  premium30s: string;
  premium40s: string;
}

const importedCars: ImportedCarInsurance[] = [
  { brand: '미니', model: '쿠퍼', segment: '소형', premium20s: '약 180~275만 원', premium30s: '약 125~190만 원', premium40s: '약 100~155만 원' },
  { brand: '토요타', model: '캠리', segment: '중형 세단', premium20s: '약 165~250만 원', premium30s: '약 115~170만 원', premium40s: '약 95~140만 원' },
  { brand: '아우디', model: 'A4', segment: '중형 세단', premium20s: '약 235~350만 원', premium30s: '약 160~240만 원', premium40s: '약 130~200만 원' },
  { brand: '렉서스', model: 'ES', segment: '중형 세단', premium20s: '약 220~330만 원', premium30s: '약 150~225만 원', premium40s: '약 125~185만 원' },
  { brand: 'BMW', model: '3시리즈', segment: '중형 세단', premium20s: '약 240~365만 원', premium30s: '약 165~250만 원', premium40s: '약 135~205만 원' },
  { brand: '벤츠', model: 'C클래스', segment: '중형 세단', premium20s: '약 250~380만 원', premium30s: '약 170~260만 원', premium40s: '약 140~215만 원' },
  { brand: '폭스바겐', model: '티구안', segment: '중형 SUV', premium20s: '약 225~340만 원', premium30s: '약 155~230만 원', premium40s: '약 125~190만 원' },
  { brand: '볼보', model: 'XC60', segment: '중형 SUV', premium20s: '약 255~390만 원', premium30s: '약 175~265만 원', premium40s: '약 145~220만 원' },
  { brand: '아우디', model: 'A6', segment: '준대형 세단', premium20s: '약 275~415만 원', premium30s: '약 190~280만 원', premium40s: '약 155~235만 원' },
  { brand: 'BMW', model: '5시리즈', segment: '준대형 세단', premium20s: '약 285~425만 원', premium30s: '약 195~290만 원', premium40s: '약 160~240만 원' },
  { brand: '벤츠', model: 'E클래스', segment: '준대형 세단', premium20s: '약 290~440만 원', premium30s: '약 200~300만 원', premium40s: '약 165~250만 원' },
  { brand: 'BMW', model: 'X3', segment: '중형 SUV', premium20s: '약 270~405만 원', premium30s: '약 185~275만 원', premium40s: '약 155~230만 원' },
  { brand: '벤츠', model: 'GLC', segment: '중형 SUV', premium20s: '약 275~410만 원', premium30s: '약 190~280만 원', premium40s: '약 155~235만 원' },
  { brand: '렉서스', model: 'RX', segment: '중형 SUV', premium20s: '약 285~425만 원', premium30s: '약 195~290만 원', premium40s: '약 160~240만 원' },
  { brand: 'BMW', model: 'X5', segment: '대형 SUV', premium20s: '약 340~515만 원', premium30s: '약 235~350만 원', premium40s: '약 195~290만 원' },
  { brand: '벤츠', model: 'GLE', segment: '대형 SUV', premium20s: '약 335~500만 원', premium30s: '약 230~340만 원', premium40s: '약 190~280만 원' },
  { brand: 'BMW', model: 'iX', segment: '전기 SUV', premium20s: '약 320~485만 원', premium30s: '약 220~330만 원', premium40s: '약 180~275만 원' },
  { brand: '포르쉐', model: '카이엔', segment: '대형 SUV', premium20s: '약 435~650만 원', premium30s: '약 300~440만 원', premium40s: '약 245~365만 원' },
];

interface DomesticVsImported {
  segment: string;
  domestic: string;
  domesticPremium: string;
  imported: string;
  importedPremium: string;
  ratio: string;
}

const domesticVsImported: DomesticVsImported[] = [
  { segment: '중형 세단', domestic: '현대 쏘나타', domesticPremium: '약 80~120만 원', imported: '벤츠 C클래스', importedPremium: '약 170~260만 원', ratio: '약 2.1배' },
  { segment: '준대형 세단', domestic: '현대 그랜저', domesticPremium: '약 100~150만 원', imported: '벤츠 E클래스', importedPremium: '약 200~300만 원', ratio: '약 2배' },
  { segment: '중형 SUV', domestic: '현대 투싼', domesticPremium: '약 85~125만 원', imported: 'BMW X3', importedPremium: '약 185~275만 원', ratio: '약 2.2배' },
  { segment: '대형 SUV', domestic: '현대 팰리세이드', domesticPremium: '약 120~180만 원', imported: 'BMW X5', importedPremium: '약 235~350만 원', ratio: '약 1.9배' },
];

const expensiveReasons = [
  {
    emoji: '🔩',
    title: '부품 가격이 높음',
    detail: '국산 대비 2~5배',
    desc: '수입차 부품은 해외에서 조달해야 하므로 국산차 대비 2~5배 비쌉니다. 사이드 미러 하나 교체에도 수십만 원이 들고, 범퍼 수리에는 100만 원 이상이 소요되는 경우가 많습니다. 이 높은 부품비가 보험료 산정에 직접 반영됩니다.',
  },
  {
    emoji: '🔧',
    title: '수리비가 높음',
    detail: '공임비 + 부품 대기 시간',
    desc: '수입차 공식 서비스센터의 시간당 공임비는 국산차 정비소의 2~3배입니다. 여기에 해외 부품 수급 대기 시간까지 더해지면 수리 기간이 길어져 대차(렌터카) 비용까지 추가됩니다. 일반 사설 정비소를 이용해도 수입차는 공임비가 추가됩니다.',
  },
  {
    emoji: '💰',
    title: '차량 가액이 높음',
    detail: '보험료 산정 기준',
    desc: '자동차보험료는 차량 가액(시가)을 기준으로 산정됩니다. 수입차는 국산차 대비 차량 가격이 높기 때문에 자기차량손해(자차) 보험의 보험료가 크게 높아집니다. 특히 신차일수록 차량 가액이 높아 보험료 부담이 큽니다.',
  },
  {
    emoji: '⏳',
    title: '사고 시 수리 기간이 김',
    detail: '부품 수급 문제',
    desc: '수입차 부품은 해외에서 주문·운송해야 하므로 입고까지 2~4주가 걸리는 경우가 많습니다. 그 기간 동안 대차 비용이 발생하고, 수리 기간이 길어질수록 보험회사의 비용 부담이 커져 보험료에 반영됩니다.',
  },
];

const savingMethods = [
  {
    title: '다이렉트 보험 가입',
    saving: '15~20% 절약',
    desc: '온라인·모바일로 직접 가입하면 대리점 수수료가 없어 15~20% 저렴합니다. 삼성화재 다이렉트, KB다이렉트, 현대해상 하이카다이렉트, DB손해보험 다이렉트 등에서 수입차도 가입 가능합니다. 보험료가 200만 원이면 30~40만 원을 절약할 수 있습니다.',
  },
  {
    title: '마일리지 특약 활용',
    saving: '최대 30% 절약',
    desc: '연간 주행거리가 적으면(3,000~5,000km 이하) 최대 30%까지 할인됩니다. 수입차는 보험료 자체가 높기 때문에 절약 금액이 더 크게 체감됩니다. 보험료 200만 원 기준 최대 60만 원까지 절약 가능합니다. 재택근무자나 세컨카 운전자에게 특히 유리합니다.',
  },
  {
    title: '블랙박스 할인 적용',
    saving: '2~5% 절약',
    desc: '블랙박스를 장착하면 보험사에서 2~5% 할인을 적용합니다. 수입차 보험료 200만 원 기준 4~10만 원 절약됩니다. 대부분의 수입차는 순정 블랙박스가 없으므로 별도 장착이 필요하지만, 보험 할인으로 장착 비용을 1~2년 내 회수할 수 있습니다.',
  },
  {
    title: '무사고 할인 유지',
    saving: '최대 62% 절약',
    desc: '무사고 기간이 길수록 보험료가 크게 할인됩니다. 1년 무사고 시 약 10%, 3년 무사고 시 약 30%, 5년 이상 무사고 시 최대 62%까지 할인됩니다. 수입차 보험료 300만 원 기준으로 최대 186만 원까지 절약 가능합니다. 작은 사고는 자비 처리하는 것이 장기적으로 유리할 수 있습니다.',
  },
  {
    title: '운전자 한정 특약',
    saving: '10~30% 절약',
    desc: '운전자를 본인 한정으로 설정하면 약 20~30%, 부부 한정은 약 15~20%, 가족 한정은 약 10~15% 할인됩니다. 다만 지정 외 운전자가 사고 시 보상에 제한이 있으므로 실제 운전 패턴을 고려해 설정해야 합니다.',
  },
  {
    title: '자기차량손해 높은 자기부담금 설정',
    saving: '10~20% 절약',
    desc: '자기부담금을 20만 원에서 50만 원 또는 100만 원으로 올리면 보험료를 10~20% 절약할 수 있습니다. 안전 운전에 자신 있고 무사고 경력이 긴 운전자에게 효과적입니다. 수입차 보험료 250만 원 기준 25~50만 원 절약됩니다.',
  },
  {
    title: '국산 부품 동의 특약 (대물)',
    saving: '상황별 상이',
    desc: '사고 시 수입 정품 부품 대신 국산 호환 부품(대체부품)을 사용하는 데 동의하면 보험료를 절약할 수 있는 특약입니다. 상대방 차량 수리 시 국산 부품을 사용하므로 대물 보험료가 낮아집니다. 다만 내 차의 수리에는 적용되지 않습니다.',
  },
  {
    title: '다년 계약 할인',
    saving: '3~5% 절약',
    desc: '2~3년 장기 계약을 하면 매년 갱신하는 것보다 3~5% 저렴합니다. 보험료 인상 위험을 막을 수 있고, 갱신 번거로움도 줄어듭니다. 다만 중간에 차량을 변경하면 계약 조건이 변경될 수 있으므로 장기 보유 계획이 확실한 경우에 추천합니다.',
  },
];

interface AgePremium {
  age: string;
  example: string;
  premiumRange: string;
  note: string;
}

const agePremiums: AgePremium[] = [
  { age: '20대 초반 (만 20~24세)', example: '벤츠 C클래스 기준', premiumRange: '약 300~450만 원', note: '면허 취득 후 경력이 짧아 가장 높은 보험료. 할증 요인이 많음' },
  { age: '20대 후반 (만 25~29세)', example: '벤츠 C클래스 기준', premiumRange: '약 250~380만 원', note: '20대 초반 대비 소폭 하락. 무사고 경력 쌓이면 추가 할인' },
  { age: '30대 (만 30~39세)', example: '벤츠 C클래스 기준', premiumRange: '약 170~260만 원', note: '보험료가 크게 낮아지는 구간. 무사고 할인 본격 적용' },
  { age: '40대 (만 40~49세)', example: '벤츠 C클래스 기준', premiumRange: '약 140~215만 원', note: '가장 저렴한 보험료 구간. 장기 무사고 할인 극대화' },
  { age: '50대 (만 50~59세)', example: '벤츠 C클래스 기준', premiumRange: '약 155~235만 원', note: '소폭 상승 시작. 고연령 할증이 점차 적용' },
  { age: '60대 이상', example: '벤츠 C클래스 기준', premiumRange: '약 185~280만 원', note: '고연령 할증 본격 적용. 운전자 한정 특약 활용 추천' },
];

const faqItems = [
  {
    q: '수입차 보험료가 국산차보다 얼마나 비싼가요?',
    a: '같은 등급 기준으로 수입차 보험료는 국산차의 약 1.9~2.2배입니다. 중형 세단 기준 국산차(쏘나타)가 80~120만 원인 반면, 수입차(벤츠 C클래스)는 170~260만 원 수준입니다. 부품 가격, 수리비, 차량 가액이 모두 높기 때문에 이 정도 차이가 발생합니다.',
  },
  {
    q: '수입차 다이렉트 보험 가입이 가능한가요?',
    a: '네, 대부분의 수입차도 다이렉트 보험 가입이 가능합니다. 삼성화재 다이렉트, KB다이렉트, 현대해상 하이카다이렉트 등에서 온라인으로 가입할 수 있으며, 대리점 가입 대비 15~20% 저렴합니다. 다만 일부 초고가 차종(슈퍼카, 1억 원 이상)은 다이렉트 가입이 제한될 수 있습니다.',
  },
  {
    q: '수입차 중 보험료가 가장 저렴한 브랜드는 어디인가요?',
    a: '일반적으로 일본 브랜드(토요타 캠리, 렉서스 ES)가 수입차 중 보험료가 가장 저렴합니다. 부품 가격이 유럽 브랜드보다 낮고, 부품 수급 기간도 짧기 때문입니다. 유럽 브랜드 중에서는 미니 쿠퍼와 폭스바겐 티구안이 상대적으로 보험료가 낮은 편입니다.',
  },
  {
    q: '수입차 자차 보험(자기차량손해)은 꼭 가입해야 하나요?',
    a: '수입차는 수리비가 매우 높기 때문에 자기차량손해(자차) 보험 가입을 강력히 권장합니다. 사소한 접촉사고에도 범퍼 교체 100만 원 이상, 도어 수리 200만 원 이상이 들 수 있습니다. 자기부담금을 50~100만 원으로 높여 보험료를 절약하면서 자차 보험은 유지하는 것이 현명합니다.',
  },
  {
    q: '무사고 할인은 최대 몇 %까지 적용되나요?',
    a: '무사고 할인은 최대 62%까지 적용됩니다. 1년 무사고 약 10%, 3년 무사고 약 30%, 5년 이상 무사고 시 최대 62%입니다. 수입차 보험료가 300만 원이라면 무사고 최대 할인 시 약 114만 원까지 낮출 수 있습니다. 작은 사고는 자비 처리하여 무사고 등급을 유지하는 것이 장기적으로 유리합니다.',
  },
  {
    q: '수입차 보험 갱신 시 주의할 점은 무엇인가요?',
    a: '① 만기일 2~4주 전에 갱신하여 무사고 연속 할인을 유지하세요. ② 최소 3개 이상 보험사의 견적을 비교하세요(보험다모아 활용). ③ 마일리지 특약, 블랙박스 할인, 운전자 한정 등 적용 가능한 할인을 모두 확인하세요. ④ 차량 연식이 높아지면 자기부담금을 상향하여 보험료를 절약하세요. ⑤ 다이렉트 전환 시 추가 15~20% 절약 가능합니다.',
  },
  {
    q: '전기 수입차(BMW iX 등)의 보험료는 어느 정도인가요?',
    a: 'BMW iX 기준 30대 운전자의 보험료는 약 220~330만 원으로, 같은 브랜드의 내연기관 SUV(X5)보다는 약간 낮지만 여전히 높은 수준입니다. 전기차는 배터리 수리 비용이 높아 자차 보험료가 높게 책정되지만, 일부 보험사에서 친환경차 할인을 제공하므로 비교 견적 시 확인해보세요.',
  },
  {
    q: '포르쉐 같은 고급 수입차도 다이렉트 보험 가입이 되나요?',
    a: '포르쉐 카이엔, 마칸 등 일부 모델은 다이렉트 보험 가입이 가능합니다. 다만 차량 가액이 1억 원을 초과하는 911, 타이칸 등은 다이렉트 가입이 제한될 수 있으며, 대리점(설계사)을 통한 가입이 필요할 수 있습니다. 고가 차종일수록 보험사 간 보험료 차이가 크므로 반드시 여러 곳을 비교하세요.',
  },
];

export default function ImportedCarInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '수입차 보험료 절약 가이드 - 2026년 브랜드별 비교·절약 방법 8가지 총정리',
          description:
            '수입차 보험료가 비싼 이유, 브랜드별·모델별 보험료 비교, 국산차 대비 보험료 차이, 절약 방법 8가지를 총정리했습니다.',
          url: `${BASE_URL}/guide/imported-car-insurance`,
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
            { '@type': 'ListItem', position: 2, name: '자동차보험료 가이드', item: `${BASE_URL}/guide/car-insurance` },
            {
              '@type': 'ListItem',
              position: 3,
              name: '수입차 보험료 절약 가이드',
              item: `${BASE_URL}/guide/imported-car-insurance`,
            },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li><Link href="/guide/car-insurance" className="hover:text-amber-600">자동차보험료 가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">수입차 보험료 절약 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            수입차 보험료 절약 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            수입차는 국산차 대비 보험료가 <strong>약 2배</strong> 비쌉니다.
            부품비, 수리비, 차량 가액이 모두 높기 때문인데, 올바른 방법으로 가입하면 연간 <strong>수십만 원에서 100만 원 이상</strong>을 절약할 수 있습니다.
            2026년 기준 18개 모델별 보험료 비교, 국산차 대비 차이, 절약 방법 8가지를 정리했습니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#why-expensive" className="text-sm px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">비싼 이유</a>
            <a href="#brand-comparison" className="text-sm px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">브랜드별 비교</a>
            <a href="#vs-domestic" className="text-sm px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">국산차 비교</a>
            <a href="#saving-methods" className="text-sm px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">절약 방법 8가지</a>
            <a href="#age-comparison" className="text-sm px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">연령대별 차이</a>
            <a href="#faq" className="text-sm px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">FAQ</a>
          </div>
        </section>

        {/* 수입차 보험료가 비싼 이유 4가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8" id="why-expensive">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            수입차 보험료가 비싼 이유 4가지
          </h2>
          <div className="space-y-4">
            {expensiveReasons.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                      이유 {index + 1}
                    </span>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                      {item.detail}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-red-50 rounded-2xl p-5 border border-red-100">
            <h4 className="font-bold text-red-800 mb-2">핵심 요약</h4>
            <p className="text-sm text-red-700 leading-relaxed">
              수입차 보험료가 비싼 가장 큰 이유는 <strong>부품비와 수리비</strong>입니다. 사소한 접촉사고에도 수리비가 수백만 원에 달할 수 있고,
              이 비용이 보험료에 직접 반영됩니다. 같은 가격대의 국산차 대비 약 <strong>1.9~2.2배</strong> 높은 보험료가 책정됩니다.
            </p>
          </div>
        </section>

        {/* 브랜드별·모델별 보험료 비교표 */}
        <section className="max-w-4xl mx-auto px-4 py-8" id="brand-comparison">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            브랜드별·모델별 보험료 비교표 (18개 모델)
          </h2>
          <p className="text-gray-600 mb-6">
            종합보험(자기차량손해 포함), 대인 II 무한, 대물 1억 기준입니다.
            무사고 3년 이상 가정이며, 실제 보험료는 사고 이력·특약·보험사에 따라 달라집니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-3 py-3 text-left font-semibold">모델</th>
                    <th className="px-3 py-3 text-left font-semibold hidden sm:table-cell">세그먼트</th>
                    <th className="px-3 py-3 text-right font-semibold">20대</th>
                    <th className="px-3 py-3 text-right font-semibold">30대</th>
                    <th className="px-3 py-3 text-right font-semibold">40대</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {importedCars.map((car) => (
                    <tr key={`${car.brand}-${car.model}`} className="hover:bg-gray-50">
                      <td className="px-3 py-3 text-gray-500 text-xs">{car.brand}</td>
                      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">{car.model}</td>
                      <td className="px-3 py-3 text-gray-400 text-xs hidden sm:table-cell">{car.segment}</td>
                      <td className="px-3 py-3 text-right text-red-500 font-medium whitespace-nowrap">{car.premium20s}</td>
                      <td className="px-3 py-3 text-right text-amber-600 font-medium whitespace-nowrap">{car.premium30s}</td>
                      <td className="px-3 py-3 text-right text-green-600 font-medium whitespace-nowrap">{car.premium40s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 종합보험(자기차량손해 포함), 대인 II 무한, 대물 1억 기준. 무사고 3년 이상 가정. 실제 보험료는 사고 이력, 특약, 보험사에 따라 달라집니다.
          </p>
          <div className="mt-6 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">보험료 비교 포인트</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• 일본 브랜드(토요타 캠리, 렉서스 ES)가 유럽 브랜드(벤츠, BMW, 아우디)보다 보험료가 20~30% 낮습니다</li>
              <li>• 같은 브랜드라도 SUV 모델은 세단보다 보험료가 5~15% 높습니다</li>
              <li>• 20대는 30대 대비 약 40~50% 높은 보험료가 책정됩니다</li>
              <li>• 40대는 30대 대비 약 15~20% 낮은 보험료를 적용받습니다</li>
              <li>• 포르쉐 카이엔은 30대 기준 300~440만 원으로 가장 높은 보험료 구간입니다</li>
              <li>• 전기차(BMW iX)는 내연기관 대비 보험료가 약간 낮지만, 배터리 수리비로 인해 여전히 높은 편입니다</li>
            </ul>
          </div>
        </section>

        {/* 국산차 대비 보험료 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8" id="vs-domestic">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            국산차 대비 보험료 비교
          </h2>
          <p className="text-gray-600 mb-6">
            같은 세그먼트, 비슷한 등급의 국산차와 수입차를 비교했습니다.
            30대 무사고 운전자 기준이며, 수입차는 국산차 대비 평균 <strong>약 2배</strong> 높은 보험료가 책정됩니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold">세그먼트</th>
                    <th className="px-3 py-3 text-left font-semibold">국산차</th>
                    <th className="px-3 py-3 text-right font-semibold">국산 보험료</th>
                    <th className="px-3 py-3 text-left font-semibold">수입차</th>
                    <th className="px-3 py-3 text-right font-semibold">수입 보험료</th>
                    <th className="px-3 py-3 text-right font-semibold">배수</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {domesticVsImported.map((row) => (
                    <tr key={row.segment} className="hover:bg-gray-50">
                      <td className="px-3 py-3 text-gray-500 text-xs">{row.segment}</td>
                      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">{row.domestic}</td>
                      <td className="px-3 py-3 text-right text-green-600 font-medium whitespace-nowrap">{row.domesticPremium}</td>
                      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">{row.imported}</td>
                      <td className="px-3 py-3 text-right text-red-500 font-medium whitespace-nowrap">{row.importedPremium}</td>
                      <td className="px-3 py-3 text-right text-amber-600 font-semibold whitespace-nowrap">{row.ratio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 bg-red-50 rounded-2xl p-5 border border-red-100">
            <h4 className="font-bold text-red-800 mb-2">왜 이렇게 차이가 날까요?</h4>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• 수입차 부품 가격은 국산차의 2~5배 수준입니다</li>
              <li>• 공식 서비스센터 공임비가 일반 정비소의 2~3배입니다</li>
              <li>• 부품 수급에 2~4주가 걸려 수리 기간이 길고, 대차 비용이 추가됩니다</li>
              <li>• 차량 가액 자체가 높아 자기차량손해 보험료가 크게 올라갑니다</li>
              <li>• 중형 SUV(투싼 vs BMW X3)에서 약 2.2배로 가장 큰 차이가 납니다</li>
            </ul>
          </div>
        </section>

        {/* 수입차 보험료 절약 방법 8가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8" id="saving-methods">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            수입차 보험료 절약 방법 8가지
          </h2>
          <p className="text-gray-600 mb-6">
            아래 방법들을 조합하면 수입차 보험료를 <strong>30~50%</strong>까지 절약할 수 있습니다.
            특히 다이렉트 가입 + 마일리지 특약 + 무사고 할인 조합이 가장 효과적입니다.
          </p>
          <div className="space-y-4">
            {savingMethods.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      {item.saving}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-green-50 rounded-2xl p-5 border border-green-100">
            <h4 className="font-bold text-green-800 mb-2">절약 시뮬레이션 예시 (벤츠 C클래스, 30대 기준)</h4>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• 기본 보험료: 약 250만 원</li>
              <li>• 다이렉트 가입 (-15%): → 약 212만 원 (38만 원 절약)</li>
              <li>• 마일리지 특약 (-20%): → 약 170만 원 (42만 원 추가 절약)</li>
              <li>• 운전자 본인 한정 (-20%): → 약 136만 원 (34만 원 추가 절약)</li>
              <li>• <strong>최종 예상 보험료: 약 136만 원 (총 114만 원 절약, 46% 할인)</strong></li>
            </ul>
            <p className="text-xs text-green-600 mt-3">
              ※ 위 계산은 단순 시뮬레이션이며, 할인 항목은 중복 적용 시 할인율이 달라질 수 있습니다.
            </p>
          </div>
        </section>

        {/* 연령대별 보험료 차이 */}
        <section className="max-w-4xl mx-auto px-4 py-8" id="age-comparison">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            연령대별 수입차 보험료 차이
          </h2>
          <p className="text-gray-600 mb-6">
            운전자 연령은 보험료에 큰 영향을 미칩니다.
            20대 초반은 40대 대비 약 <strong>2배 이상</strong> 높은 보험료가 책정됩니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-3 py-3 text-left font-semibold">연령대</th>
                    <th className="px-3 py-3 text-right font-semibold">예상 보험료</th>
                    <th className="px-3 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {agePremiums.map((row) => (
                    <tr key={row.age} className="hover:bg-gray-50">
                      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">{row.age}</td>
                      <td className="px-3 py-3 text-right text-amber-600 font-semibold whitespace-nowrap">{row.premiumRange}</td>
                      <td className="px-3 py-3 text-gray-600 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 벤츠 C클래스 기준, 종합보험(자기차량손해 포함), 무사고 3년 이상 가정. 실제 보험료는 개인 조건에 따라 달라집니다.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-bold text-red-500 mb-1">20대</div>
              <p className="text-sm text-gray-600">가장 높은 보험료</p>
              <p className="text-xs text-gray-400 mt-1">경력 짧고 사고율 높음</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-bold text-amber-500 mb-1">30대</div>
              <p className="text-sm text-gray-600">보험료 급감 구간</p>
              <p className="text-xs text-gray-400 mt-1">무사고 할인 본격 적용</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-bold text-green-500 mb-1">40대</div>
              <p className="text-sm text-gray-600">가장 저렴한 보험료</p>
              <p className="text-xs text-gray-400 mt-1">장기 무사고 할인 극대화</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8" id="faq">
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
              수입차 관련 가이드를 더 확인해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              수입차 구매부터 유지보수, 보험까지 한 번에 알아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/imported-car-buying"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                수입차 구매 가이드
              </Link>
              <Link
                href="/guide/imported-car-maintenance"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                수입차 유지비 가이드
              </Link>
              <Link
                href="/guide/car-insurance"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                자동차보험료 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
