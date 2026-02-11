import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '수입차 구매 완벽 가이드 - 2026년 공식 vs 병행수입, 브랜드별 가격, 절차 총정리',
  description:
    '수입차 구매 시 알아야 할 모든 정보를 정리했습니다. 공식 딜러와 병행수입 비교, 벤츠·BMW·아우디·렉서스 등 브랜드별 인기 모델 가격, 구매 절차 6단계, 추가 비용, 체크리스트까지 2026년 최신 정보를 확인하세요.',
  keywords: [
    '수입차 구매',
    '수입차 구매 가이드',
    '병행수입',
    '공식 딜러',
    '수입차 가격',
    '수입차 절차',
    '수입차 보증',
    '수입차 추천',
    '벤츠 가격',
    'BMW 가격',
  ],
  alternates: { canonical: `${BASE_URL}/guide/imported-car-buying` },
  openGraph: {
    title: '수입차 구매 완벽 가이드 - 2026년 공식 vs 병행수입, 브랜드별 가격, 절차 총정리',
    description:
      '수입차 구매 시 공식 딜러와 병행수입 비교, 브랜드별 인기 모델 가격, 절차, 비용을 총정리했습니다.',
    url: `${BASE_URL}/guide/imported-car-buying`,
    type: 'website',
  },
};

const officialVsParallel = [
  {
    category: '보증',
    official: '정품 보증 5년/10만km',
    parallel: '보증 제한적 (업체 자체 1~2년)',
  },
  {
    category: 'A/S',
    official: '전국 공식 서비스센터 이용 가능',
    parallel: '공식 서비스센터 이용 불가, 사설 정비소 이용',
  },
  {
    category: '가격',
    official: '제조사 권장 소비자가 (높음)',
    parallel: '공식 대비 15~30% 저렴',
  },
  {
    category: '옵션',
    official: '국내 출시 사양으로 제한',
    parallel: '해외 전용 옵션·사양 자유롭게 선택 가능',
  },
  {
    category: '리콜',
    official: '국내 리콜 자동 적용',
    parallel: '리콜 적용 불가 또는 지연',
  },
  {
    category: '잔존가치',
    official: '높음 (중고 시장에서 선호)',
    parallel: '낮음 (공식 대비 감가 큼)',
  },
];

const brandModels = [
  { brand: '벤츠', model: 'C클래스', price: '5,800만 원', link: '/models/benz-c-class' },
  { brand: '벤츠', model: 'E클래스', price: '7,200만 원', link: '/models/benz-e-class' },
  { brand: '벤츠', model: 'GLC', price: '6,300만 원', link: '/models/benz-glc' },
  { brand: '벤츠', model: 'GLE', price: '9,500만 원', link: '/models/benz-gle' },
  { brand: 'BMW', model: '3시리즈', price: '5,500만 원', link: '/models/bmw-3-series' },
  { brand: 'BMW', model: '5시리즈', price: '7,000만 원', link: '/models/bmw-5-series' },
  { brand: 'BMW', model: 'X3', price: '6,500만 원', link: '/models/bmw-x3' },
  { brand: 'BMW', model: 'X5', price: '1억 원', link: '/models/bmw-x5' },
  { brand: '아우디', model: 'A4', price: '5,300만 원', link: '/models/audi-a4' },
  { brand: '아우디', model: 'A6', price: '6,800만 원', link: '/models/audi-a6' },
  { brand: '렉서스', model: 'ES', price: '5,800만 원', link: '/models/lexus-es' },
  { brand: '렉서스', model: 'RX', price: '7,800만 원', link: '/models/lexus-rx' },
  { brand: '토요타', model: '캠리', price: '4,200만 원', link: '/models/toyota-camry' },
  { brand: '볼보', model: 'XC60', price: '6,500만 원', link: '/models/volvo-xc60' },
  { brand: '포르쉐', model: '카이엔', price: '1억 3,000만 원', link: '/models/porsche-cayenne' },
  { brand: '폭스바겐', model: '티구안', price: '5,000만 원', link: '/models/vw-tiguan' },
  { brand: '미니', model: '쿠퍼', price: '3,800만 원', link: '/models/mini-cooper' },
];

const additionalCosts = [
  {
    item: '취등록세',
    cost: '차량가의 7%',
    example: '7,000만 원 차량 → 약 490만 원',
    note: '비영업용 승용차 기준, 국산차와 동일 세율',
  },
  {
    item: '보험료 (연간)',
    cost: '약 150~400만 원',
    example: '국산 대비 1.5~3배 수준',
    note: '차량 가액·부품비가 높아 보험료 상승',
  },
  {
    item: '정비비 (연간)',
    cost: '약 80~300만 원',
    example: '국산 대비 1.5~3배 수준',
    note: '공식 서비스센터 기준, 사설은 30~50% 저렴',
  },
  {
    item: '타이어 (4개)',
    cost: '약 80~200만 원',
    example: '런플랫 타이어 시 추가 비용',
    note: '수입 규격 타이어, 국산 대비 약 2배',
  },
  {
    item: '부품비',
    cost: '부위별 상이',
    example: '국산 대비 2~5배',
    note: '정품 vs 호환 부품(OEM) 가격 차이 큼',
  },
  {
    item: '공채 매입비',
    cost: '지역별 상이',
    example: '약 10~30만 원',
    note: '서울·경기 기준, 지방은 더 저렴',
  },
];

const purchaseSteps = [
  {
    step: '1',
    title: '예산 수립',
    content:
      '차량 가격 외에 취등록세(차량가의 7%), 보험료(국산 대비 1.5~3배), 연간 유지비(정비비·타이어·부품비)까지 종합적으로 예산을 수립합니다. 총 구매 비용은 차량가의 약 115~120% 수준으로 계산하세요.',
    link: { href: '/calculator/registration-tax', text: '취등록세 계산하기 →' },
  },
  {
    step: '2',
    title: '브랜드 및 모델 선택',
    content:
      '운전 스타일, 주행 환경, 예산에 맞는 브랜드와 모델을 선택합니다. 잔존가치, 정비비, 보험료도 모델 선택 시 중요한 고려 요소입니다. 최소 2~3개 브랜드를 비교하는 것이 좋습니다.',
  },
  {
    step: '3',
    title: '딜러 방문 및 시승',
    content:
      '공식 딜러를 방문하여 실차를 확인하고 반드시 시승합니다. 승차감, 소음, 주행 성능, 편의 기능을 꼼꼼히 체크하세요. 최소 2개 브랜드 이상 시승하여 비교하는 것을 추천합니다.',
  },
  {
    step: '4',
    title: '계약 및 출고 대기',
    content:
      '모델과 옵션을 확정하고 계약금(보통 차량가의 10%)을 납부합니다. 인기 모델은 출고 대기 기간이 3~6개월 이상 걸릴 수 있으므로 미리 확인하세요. 계약서에 출고 예정일, 옵션 내역, 프로모션 조건을 명확히 기재합니다.',
  },
  {
    step: '5',
    title: '취등록세 납부 및 등록',
    content:
      '차량 출고 시 취득세(차량가의 7%)를 납부하고 차량을 등록합니다. 공채 매입비, 번호판 대금(약 12,000원), 인지세(약 3,000원) 등도 필요합니다. 딜러 등록 대행 시 수수료가 추가될 수 있습니다.',
    link: { href: '/calculator/registration-tax', text: '취등록세 계산하기 →' },
  },
  {
    step: '6',
    title: '보험 가입 및 인수',
    content:
      '출고 전 자동차보험에 가입해야 합니다. 수입차는 국산차 대비 보험료가 1.5~3배 높으므로 반드시 여러 보험사를 비교하세요. 인수 시 외관 상태, 옵션 장착 여부, 주행거리(0km 확인)를 꼼꼼히 점검합니다.',
    link: { href: '/guide/imported-car-insurance', text: '수입차 보험 가이드 →' },
  },
];

const checklist = [
  '총 구매 비용(차량가 + 취등록세 + 보험료)을 미리 계산한다',
  '공식수입과 병행수입의 장단점을 비교한다',
  '최소 2개 브랜드 이상 시승하고 비교한다',
  '3년 후 잔존가치(중고 시세)를 확인한다',
  '출고 대기 기간과 프로모션 조건을 확인한다',
  '보증 기간과 연장 프로그램을 검토한다',
  '수입차 보험료를 3개 이상 보험사에서 비교한다',
  '가까운 공식 서비스센터 위치를 확인한다',
  '월간 유지비(보험 + 유류 + 정비 + 세금)를 시뮬레이션한다',
];

const faqItems = [
  {
    q: '수입차 처음 사는데 어떤 브랜드가 좋나요?',
    a: '처음 수입차를 구매한다면 렉서스나 볼보를 추천합니다. 렉서스는 고장률이 매우 낮고 정비비가 수입차 중 가장 저렴하며, 볼보는 안전성이 뛰어나고 가격 대비 옵션이 풍부합니다. 독일차(벤츠·BMW·아우디)는 프리미엄 감성은 좋지만 유지비가 높으므로 예산에 여유가 있는 경우 추천합니다.',
  },
  {
    q: '병행수입이 정말 싼가요? 총비용은 어떤가요?',
    a: '병행수입은 공식수입 대비 15~30% 저렴할 수 있지만 숨겨진 비용이 있습니다. 공식 보증을 받을 수 없어 고장 시 수리비가 전액 자기 부담이며, A/S는 사설 정비소를 이용해야 합니다. 리콜 적용도 안 되고 중고 매각 시 감가도 더 큽니다. 총 소유 비용(TCO)으로 보면 공식수입과 큰 차이가 없을 수 있습니다.',
  },
  {
    q: '수입차 취등록세는 국산차와 다른가요?',
    a: '취등록세율은 국산차와 동일하게 비영업용 승용차 기준 7%입니다. 다만 수입차는 차량 가격 자체가 높기 때문에 절대 금액이 커집니다. 예를 들어 7,000만 원 수입차의 취득세는 490만 원으로, 3,000만 원 국산차(210만 원)보다 280만 원 더 많습니다.',
  },
  {
    q: '수입차 보험료는 얼마나 비싼가요?',
    a: '수입차 보험료는 국산차 대비 1.5~3배 높습니다. 중형 기준 국산차 연 80~120만 원인 반면, 수입차는 연 170~400만 원 수준입니다. 차량 가액과 부품비가 높아 보험료가 상승하는 구조입니다. 다이렉트 보험, 마일리지 특약 등을 활용하면 10~30% 절약할 수 있습니다.',
  },
  {
    q: '수입차 리콜은 어떻게 확인하나요?',
    a: '한국교통안전공단 자동차리콜센터(recall.car.go.kr)에서 차량 번호 또는 차대번호로 리콜 대상 여부를 확인할 수 있습니다. 공식수입 차량은 리콜이 자동 적용되지만, 병행수입 차량은 리콜 대상에서 제외될 수 있으므로 주의가 필요합니다.',
  },
  {
    q: '수입차 구매 시 가장 중요한 것은 무엇인가요?',
    a: '수입차 구매 시 가장 중요한 것은 "총 소유 비용(TCO)" 계산입니다. 차량 가격뿐 아니라 취등록세, 보험료, 정비비, 타이어비, 감가상각까지 5년 기준으로 총비용을 계산해보세요. 같은 가격대의 다른 브랜드와 비교하면 합리적인 선택을 할 수 있습니다.',
  },
];

export default function ImportedCarBuyingGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '수입차 구매 완벽 가이드 - 2026년 공식 vs 병행수입, 브랜드별 가격, 절차 총정리',
          description:
            '수입차 구매 시 공식 딜러와 병행수입 비교, 브랜드별 인기 모델 가격, 절차, 비용을 총정리했습니다.',
          url: `${BASE_URL}/guide/imported-car-buying`,
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
            {
              '@type': 'ListItem',
              position: 2,
              name: '수입차 구매 완벽 가이드',
              item: `${BASE_URL}/guide/imported-car-buying`,
            },
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
            <li className="text-gray-900 font-medium">수입차 구매 완벽 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            수입차 구매 완벽 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            수입차 구매를 처음 고려하시는 분부터 경험자까지, 공식 딜러와 병행수입의 차이,
            브랜드별 인기 모델과 가격, 구매 절차 6단계, 추가 비용, 체크리스트까지{' '}
            <strong>2026년 최신 기준</strong>으로 총정리했습니다.
          </p>
        </section>

        {/* 공식 딜러 vs 병행수입 비교표 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            공식 딜러 vs 병행수입 비교
          </h2>
          <p className="text-gray-600 mb-4">
            수입차는 크게 공식 딜러(국내 법인을 통한 정식 수입)와 병행수입(해외에서 직접 구매 후
            국내 반입)으로 나뉩니다. 각각의 장단점을 비교해보세요.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">비교 항목</th>
                    <th className="px-4 py-3 text-left font-semibold">공식 딜러</th>
                    <th className="px-4 py-3 text-left font-semibold">병행수입</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {officialVsParallel.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.category}</td>
                      <td className="px-4 py-3 text-gray-600">{row.official}</td>
                      <td className="px-4 py-3 text-gray-600">{row.parallel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 첫 수입차 구매라면 공식 딜러를 추천합니다. 정품 보증 5년/10만km와 전국 A/S 네트워크로 예상치 못한 비용 부담을 줄일 수 있습니다.
          </p>
        </section>

        {/* 브랜드별 인기 모델 & 가격대 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            브랜드별 인기 모델 & 가격대
          </h2>
          <p className="text-gray-600 mb-4">
            2026년 한국에서 인기 있는 수입차 브랜드별 주요 모델과 시작 가격입니다.
            각 모델명을 클릭하면 상세 유지비 정보를 확인할 수 있습니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-left font-semibold">모델</th>
                    <th className="px-4 py-3 text-right font-semibold">시작 가격</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {brandModels.map((row) => (
                    <tr key={`${row.brand}-${row.model}`} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {row.brand}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={row.link}
                          className="text-amber-600 font-semibold hover:text-amber-700"
                        >
                          {row.model}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-900 font-semibold whitespace-nowrap">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 가격은 2026년 국내 공식수입 기본 모델 기준이며, 옵션·트림에 따라 달라집니다.
          </p>
        </section>

        {/* 수입차 구매 시 추가 비용 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            수입차 구매 시 추가 비용
          </h2>
          <p className="text-gray-600 mb-4">
            수입차는 차량 가격 외에도 국산차 대비 높은 추가 비용이 발생합니다.
            구매 전 반드시 확인하고 예산에 반영하세요.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">비용 항목</th>
                    <th className="px-4 py-3 text-right font-semibold">예상 비용</th>
                    <th className="px-4 py-3 text-left font-semibold">예시</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {additionalCosts.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold whitespace-nowrap">
                        {row.cost}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.example}</td>
                      <td className="px-4 py-3 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/calculator/registration-tax"
              className="text-sm bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-medium hover:bg-amber-200 transition-colors"
            >
              취등록세 계산하기 →
            </Link>
            <Link
              href="/calculator/car-tax"
              className="text-sm bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-medium hover:bg-amber-200 transition-colors"
            >
              자동차세 계산하기 →
            </Link>
          </div>
        </section>

        {/* 수입차 구매 절차 6단계 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            수입차 구매 절차 6단계
          </h2>
          <div className="space-y-4">
            {purchaseSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.content}</p>
                    {s.link && (
                      <Link
                        href={s.link.href}
                        className="inline-block mt-3 text-amber-600 font-semibold hover:text-amber-700"
                      >
                        {s.link.text}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 수입차 구매 전 체크리스트 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            수입차 구매 전 체크리스트
          </h2>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <ul className="space-y-3 text-gray-700">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  <span>{item}</span>
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
              수입차 유지비와 보험료도 확인하세요
            </h2>
            <p className="text-amber-100 mb-6">
              구매 후 실제 유지비와 보험료를 미리 파악하고 합리적인 수입차 구매 결정을 내리세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/imported-car-maintenance"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                수입차 유지비 가이드
              </Link>
              <Link
                href="/guide/imported-car-insurance"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                수입차 보험료 가이드
              </Link>
            </div>
          </div>
        </section>

        {/* 관련 모델 페이지 링크 */}
        <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            인기 수입차 모델별 상세 정보
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: '벤츠 E클래스', href: '/models/benz-e-class' },
              { name: '벤츠 C클래스', href: '/models/benz-c-class' },
              { name: '벤츠 GLC', href: '/models/benz-glc' },
              { name: '벤츠 GLE', href: '/models/benz-gle' },
              { name: 'BMW 5시리즈', href: '/models/bmw-5-series' },
              { name: 'BMW 3시리즈', href: '/models/bmw-3-series' },
              { name: 'BMW X3', href: '/models/bmw-x3' },
              { name: 'BMW X5', href: '/models/bmw-x5' },
              { name: '아우디 A6', href: '/models/audi-a6' },
              { name: '아우디 A4', href: '/models/audi-a4' },
              { name: '렉서스 ES', href: '/models/lexus-es' },
              { name: '렉서스 RX', href: '/models/lexus-rx' },
              { name: '토요타 캠리', href: '/models/toyota-camry' },
              { name: '볼보 XC60', href: '/models/volvo-xc60' },
              { name: '포르쉐 카이엔', href: '/models/porsche-cayenne' },
              { name: '폭스바겐 티구안', href: '/models/vw-tiguan' },
              { name: '미니 쿠퍼', href: '/models/mini-cooper' },
            ].map((model) => (
              <Link
                key={model.href}
                href={model.href}
                className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-sm font-semibold text-gray-900">{model.name}</span>
                <span className="block text-xs text-amber-600 mt-1">유지비 보기 →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
