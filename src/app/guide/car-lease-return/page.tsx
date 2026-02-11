import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '리스 만기 반납·인수 가이드 - 2026년 비용·절차 총정리',
  description:
    '자동차 리스 만기 시 반납, 인수, 재리스 3가지 선택지의 비용과 절차를 비교했습니다. 잔존가치 계산, 초과 주행 패널티, 원상복구 비용, 인수 시 취등록세까지 총정리.',
  keywords: [
    '리스 만기',
    '리스 반납',
    '리스 인수',
    '리스 잔존가치',
    '리스 만기 비용',
    '재리스',
    '리스 초과주행',
    '리스 원상복구',
    '자동차 리스 인수',
    '리스 명의이전',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-lease-return` },
  openGraph: {
    title: '리스 만기 반납·인수 가이드 - 2026년 비용·절차 총정리',
    description:
      '리스 만기 시 반납, 인수, 재리스 선택 기준과 비용 비교를 정리했습니다.',
    url: `${BASE_URL}/guide/car-lease-return`,
    type: 'website',
  },
};

const optionComparison = [
  {
    category: '소유권',
    returnOption: '리스사에 반환',
    purchase: '본인 소유로 이전',
    releaseLease: '리스사 소유 유지',
  },
  {
    category: '추가 비용',
    returnOption: '원상복구비·초과주행비',
    purchase: '잔존가치+취등록세+보험',
    releaseLease: '새 리스료 (보증금 조정)',
  },
  {
    category: '차량 상태 검수',
    returnOption: '필수 (감정 평가)',
    purchase: '불필요',
    releaseLease: '간단 점검',
  },
  {
    category: '번호판',
    returnOption: '반납',
    purchase: '일반 번호판으로 변경',
    releaseLease: '기존 유지',
  },
  {
    category: '주행거리 제한',
    returnOption: '초과 시 패널티 부과',
    purchase: '제한 없음',
    releaseLease: '새 계약 기준 적용',
  },
  {
    category: '적합한 경우',
    returnOption: '새 차로 교체 희망 시',
    purchase: '잔존가치 < 시세일 때',
    releaseLease: '현 차량 유지 + 부담 분산',
  },
  {
    category: '소요 기간',
    returnOption: '반납 당일 완료',
    purchase: '명의이전 3~7일',
    releaseLease: '재계약 1~3일',
  },
];

const purchaseCosts = [
  {
    item: '잔존가치 (인수가)',
    example3000: '약 900~1,200만 원',
    example5000: '약 1,500~2,000만 원',
    note: '계약서에 명시된 금액',
  },
  {
    item: '취득세 (7%)',
    example3000: '약 63~84만 원',
    example5000: '약 105~140만 원',
    note: '잔존가치 기준 부과',
  },
  {
    item: '공채 매입비',
    example3000: '약 18~36만 원',
    example5000: '약 30~60만 원',
    note: '지역별 상이',
  },
  {
    item: '자동차보험 가입',
    example3000: '약 60~100만 원',
    example5000: '약 80~150만 원',
    note: '개인 명의로 신규 가입',
  },
  {
    item: '명의이전 수수료',
    example3000: '약 1~2만 원',
    example5000: '약 1~2만 원',
    note: '인지·증지대 포함',
  },
  {
    item: '번호판 교체비',
    example3000: '약 1~2만 원',
    example5000: '약 1~2만 원',
    note: '기존 번호판 유지 시 불필요',
  },
];

const returnWarnings = [
  {
    item: '외관 손상 (스크래치·덴트)',
    standard: '1cm 이상 스크래치, 2cm 이상 덴트',
    cost: '건당 5~30만 원',
    note: '부위·크기별 차등 적용',
  },
  {
    item: '실내 오염·손상',
    standard: '시트 찢어짐, 심한 오염, 악취',
    cost: '10~50만 원',
    note: '흡연 차량 별도 클리닝비',
  },
  {
    item: '타이어 마모',
    standard: '잔여 홈 깊이 1.6mm 미만',
    cost: '개당 10~25만 원',
    note: '4개 전부 교체 시 40~100만 원',
  },
  {
    item: '유리 파손·균열',
    standard: '균열 또는 수리 불가 손상',
    cost: '전면 30~80만 원',
    note: '수입차는 100만 원 이상',
  },
  {
    item: '초과 주행거리',
    standard: '계약 주행거리 초과분',
    cost: 'km당 100~200원',
    note: '1만 km 초과 시 100~200만 원',
  },
  {
    item: '순정 부품 미장착',
    standard: '애프터마켓 부품 장착 상태',
    cost: '부품별 10~50만 원',
    note: '순정 복원 후 반납 권장',
  },
];

const releaseVsNewLease = [
  {
    category: '보증금',
    releaseLease: '기존 조건 유지 또는 재조정',
    newLease: '차량가의 10~30% 신규 납입',
  },
  {
    category: '월 리스료',
    releaseLease: '현 시세 기준 재산정 (보통 인하)',
    newLease: '신차 가격 기준 산정',
  },
  {
    category: '차량 상태',
    releaseLease: '현재 차량 그대로 사용',
    newLease: '신차 출고 (최신 사양)',
  },
  {
    category: '계약 심사',
    releaseLease: '간소화 (기존 거래 이력 반영)',
    newLease: '신규 심사 (신용조회)',
  },
  {
    category: '대기 기간',
    releaseLease: '즉시 연장 가능',
    newLease: '출고 대기 1~6개월',
  },
  {
    category: '절세 효과 (사업자)',
    releaseLease: '비용 처리 계속 가능',
    newLease: '신차 기준 비용 처리 가능',
  },
];

const purchaseVsUsedCar = [
  {
    category: '차량 이력',
    purchase: '직접 관리한 차량 (이력 100% 파악)',
    usedCar: '타인 관리 차량 (사고·정비 이력 확인 필요)',
  },
  {
    category: '가격',
    purchase: '잔존가치 (계약 시 확정)',
    usedCar: '시세 변동 (협상 가능)',
  },
  {
    category: '취등록세 기준',
    purchase: '잔존가치 기준',
    usedCar: '시가표준액 기준',
  },
  {
    category: '보증 기간',
    purchase: '제조사 보증 잔여분만 적용',
    usedCar: '딜러 보증 추가 가능',
  },
  {
    category: '추가 검수 비용',
    purchase: '불필요 (본인이 관리)',
    usedCar: '성능 점검·감정 비용 발생',
  },
  {
    category: '유리한 경우',
    purchase: '잔존가치 < 시세 (절약 효과)',
    usedCar: '잔존가치 > 시세 (인수 불리)',
  },
];

const checklist = [
  {
    emoji: '1',
    title: '계약서 잔존가치 확인',
    desc: '리스 계약서에 명시된 잔존가치(인수가)를 확인합니다. 이 금액이 인수 시 지불해야 할 차량 대금입니다.',
  },
  {
    emoji: '2',
    title: '중고차 시세 비교',
    desc: '동일 차종·연식·주행거리의 중고차 시세를 엔카, KB차차차 등에서 조회합니다. 잔존가치와 시세 차이가 인수·반납 판단 기준입니다.',
  },
  {
    emoji: '3',
    title: '누적 주행거리 점검',
    desc: '계약 시 약정한 총 주행거리 한도를 확인하고, 현재 누적 주행거리와 비교합니다. 초과 시 km당 100~200원의 패널티가 발생합니다.',
  },
  {
    emoji: '4',
    title: '차량 외관·실내 상태 점검',
    desc: '스크래치, 덴트, 시트 손상, 유리 균열 등을 사전에 점검합니다. 경미한 손상은 반납 전 자체 수리가 비용 절감에 유리합니다.',
  },
  {
    emoji: '5',
    title: '순정 부품 복원 확인',
    desc: '애프터마켓 휠, 에어필터, 머플러 등을 장착했다면 순정 부품으로 복원합니다. 미복원 시 별도 비용이 청구됩니다.',
  },
  {
    emoji: '6',
    title: '보험·자동차세 정산 확인',
    desc: '리스 기간 중 납부한 보험료와 자동차세의 정산 내역을 확인합니다. 인수 시 새로운 보험 가입이 필요합니다.',
  },
  {
    emoji: '7',
    title: '리스사 만기 안내 확인',
    desc: '만기 2~3개월 전에 리스사에서 발송하는 만기 안내서를 확인합니다. 인수·반납·재리스 의사를 기한 내에 통보해야 합니다.',
  },
  {
    emoji: '8',
    title: '인수 시 자금 계획 수립',
    desc: '잔존가치 + 취등록세 + 보험료 등 인수 총비용을 산출하고, 현금·할부·오토론 등 자금 조달 방법을 결정합니다.',
  },
];

const faqItems = [
  {
    q: '리스 만기 후 인수하면 소유권은 바로 넘어오나요?',
    a: '잔존가치를 완납하고 명의이전 절차를 완료하면 소유권이 이전됩니다. 관할 시·군·구청 차량등록과에서 이전 등록을 진행하며, 보통 3~7일 소요됩니다. 취득세(잔존가치의 7%)와 공채 매입비 등 추가 비용이 발생합니다.',
  },
  {
    q: '잔존가치가 중고차 시세보다 높으면 어떻게 해야 하나요?',
    a: '잔존가치가 시세보다 높다면 인수보다 반납이 유리합니다. 동일 차종의 중고차를 시세로 구매하는 것이 경제적입니다. 다만 차량 상태가 양호하고 반납 시 원상복구 비용이 크다면, 종합적으로 비교하여 결정하세요.',
  },
  {
    q: '리스 반납 시 차량 검수는 어떻게 진행되나요?',
    a: '리스사 지정 검수 업체(보통 감정평가사)가 외관, 실내, 타이어, 유리 등을 점검합니다. 정상 마모(자연 감가)는 비용이 부과되지 않지만, 과도한 손상이나 수리 흔적은 원상복구 비용이 청구됩니다. 검수 전에 자체 점검 및 수리를 권장합니다.',
  },
  {
    q: '초과 주행 패널티는 얼마인가요?',
    a: '계약서에 명시된 약정 주행거리를 초과하면 km당 100~200원의 패널티가 부과됩니다. 예를 들어 약정 6만 km에서 7만 km를 주행했다면 1만 km 초과로 100~200만 원의 추가 비용이 발생합니다. 초과가 예상되면 사전에 리스사와 주행거리 한도 증가를 협의하세요.',
  },
  {
    q: '재리스는 어떤 경우에 유리한가요?',
    a: '현재 차량에 만족하면서 목돈(잔존가치) 부담을 피하고 싶을 때 유리합니다. 재리스 시 월 납입금은 잔존가치 기준으로 재산정되어 기존보다 낮아지는 경우가 많습니다. 다만 차량 노후화에 따른 정비비 증가를 고려해야 합니다.',
  },
  {
    q: '리스 인수 후 바로 되팔 수 있나요?',
    a: '법적으로는 가능합니다. 잔존가치로 인수한 뒤 중고차 시세로 매각하면 차익을 얻을 수도 있습니다. 다만 취등록세(잔존가치의 7%), 명의이전 비용, 매각 시 추가 이전 비용 등을 제외한 순이익을 계산해야 합니다. 최근에는 리스사에서 인수 후 일정 기간 매각 제한 조항을 두는 경우도 있으니 계약서를 확인하세요.',
  },
  {
    q: '만기 전에 반납하거나 인수할 수 있나요?',
    a: '가능하지만 중도 해지 위약금이 발생합니다. 보통 잔여 리스료의 30~50%가 위약금으로 부과됩니다. 중도 인수 시에는 잔여 리스료를 일시불로 납부하고 잔존가치를 지불해야 합니다. 만기 6개월 이내라면 위약금이 줄어드는 리스사도 있으니 사전 문의를 권장합니다.',
  },
];

export default function CarLeaseReturnPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '리스 만기 반납·인수 가이드 - 2026년 비용·절차 총정리',
          description:
            '리스 만기 시 반납, 인수, 재리스 선택 기준과 비용 비교를 정리했습니다.',
          url: `${BASE_URL}/guide/car-lease-return`,
          publisher: {
            '@type': 'Organization',
            name: 'MustardData',
            url: BASE_URL,
          },
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
              name: '가이드',
              item: `${BASE_URL}/guide`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: '리스 만기 반납·인수 가이드',
              item: `${BASE_URL}/guide/car-lease-return`,
            },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">
                홈
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/guide" className="hover:text-amber-600">
                가이드
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              리스 만기 반납·인수 가이드
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            리스 만기 반납·인수 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            자동차 리스 계약이 만기에 도달하면{' '}
            <strong>반납, 인수, 재리스</strong> 중 하나를 선택해야 합니다.
            잔존가치와 중고차 시세 비교, 반납 시 검수 기준, 인수 시 필요한
            비용까지 꼼꼼하게 정리했습니다. 만기 2~3개월 전에 미리 준비하면
            불필요한 비용을 줄일 수 있습니다.
          </p>
        </section>

        {/* Section 1: 3가지 선택지 비교 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            리스 만기 시 3가지 선택지 비교
          </h2>
          <p className="text-gray-600 mb-6">
            각 선택지의 특징을 한눈에 비교하여 나에게 맞는 방법을 찾아보세요.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      반납
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      인수 (매입)
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      재리스
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {optionComparison.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{row.returnOption}</td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.purchase}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.releaseLease}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 잔존가치는 리스 계약 시 설정한 금액이며, 통상 차량 가격의 30~40%
            수준입니다 (3~5년 계약 기준).
          </p>
        </section>

        {/* Section 2: 인수 시 비용 총정리 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            리스 인수 시 비용 총정리
          </h2>
          <p className="text-gray-600 mb-6">
            잔존가치 외에도 취등록세, 보험, 명의이전 비용이 추가됩니다. 차량
            가격대별 예상 비용을 확인하세요.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">
                      비용 항목
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      3,000만 원 차량
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      5,000만 원 차량
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {purchaseCosts.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {row.example3000}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {row.example5000}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50 font-bold">
                    <td className="px-4 py-3 text-gray-900">
                      인수 총비용 (예상)
                    </td>
                    <td className="px-4 py-3 text-right text-amber-600">
                      약 1,043~1,444만 원
                    </td>
                    <td className="px-4 py-3 text-right text-amber-600">
                      약 1,716~2,353만 원
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      잔존가치 포함 총액
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">
              인수 시 자금 조달 방법
            </h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>
                &#x2022; <strong>현금 일시불</strong> : 가장 경제적. 이자 부담 없음
              </li>
              <li>
                &#x2022; <strong>오토론 (자동차 담보대출)</strong> : 잔존가치의
                80~100% 대출 가능, 금리 연 5~8% 수준 (2026년 기준)
              </li>
              <li>
                &#x2022; <strong>캐피탈 할부</strong> : 12~60개월 할부 가능, 금리 연
                6~10% 수준
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: 반납 시 주의사항 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            리스 반납 시 주의사항
          </h2>
          <p className="text-gray-600 mb-6">
            반납 시 차량 상태 검수가 진행되며, 기준 초과 손상이나 초과 주행에
            대해 별도 비용이 부과됩니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">
                      검수 항목
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      부과 기준
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      예상 비용
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {returnWarnings.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.standard}
                      </td>
                      <td className="px-4 py-3 text-right text-red-600 font-semibold">
                        {row.cost}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h4 className="font-bold text-gray-900 mb-3">
                반납 전 셀프 점검 TIP
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>&#x2022; 경미한 스크래치는 컴파운드로 자체 제거 (1~3만 원)</li>
                <li>&#x2022; 소형 덴트는 PDR 수리 이용 (3~10만 원)</li>
                <li>&#x2022; 실내 시트 클리닝 사전 실시 (5~10만 원)</li>
                <li>&#x2022; 흡연 차량은 전문 탈취 서비스 이용</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h4 className="font-bold text-gray-900 mb-3">
                비용이 면제되는 경우
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>&#x2022; 자연 마모에 해당하는 경미한 사용 흔적</li>
                <li>&#x2022; 정상적인 타이어 마모 (홈 깊이 1.6mm 이상)</li>
                <li>&#x2022; 사전 합의된 내장재 교체 (시트 커버 등)</li>
                <li>&#x2022; 제조사 리콜 대상 부품의 결함</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: 재리스 vs 신규 리스 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            재리스 vs 신규 리스 비교
          </h2>
          <p className="text-gray-600 mb-6">
            현재 차량을 재리스할지, 새 차로 신규 리스를 시작할지 고민된다면 아래
            비교표를 참고하세요.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      재리스 (현 차량)
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      신규 리스 (새 차)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {releaseVsNewLease.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.releaseLease}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.newLease}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">
                재리스가 유리한 경우
              </h3>
              <ul className="space-y-2 text-sm text-amber-900">
                <li>&#x2022; 현재 차량 상태가 양호하고 만족도가 높을 때</li>
                <li>&#x2022; 월 납입금 부담을 줄이고 싶을 때</li>
                <li>&#x2022; 신차 출고 대기가 길어 즉시 이용이 필요할 때</li>
                <li>&#x2022; 차량 변경에 따른 보험료 인상을 피하고 싶을 때</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">
                신규 리스가 유리한 경우
              </h3>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>&#x2022; 최신 안전·편의 사양이 필요할 때</li>
                <li>&#x2022; 현 차량의 정비비가 증가하기 시작했을 때</li>
                <li>&#x2022; 차종 변경 (SUV &#x2192; 세단 등)이 필요할 때</li>
                <li>&#x2022; 전기차·하이브리드로 전환을 고려 중일 때</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: 인수 vs 중고차 구매 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            리스 인수 vs 중고차 구매 비교
          </h2>
          <p className="text-gray-600 mb-6">
            리스 차량을 인수하는 것과 별도로 중고차를 구매하는 것 중 어떤 것이
            유리한지 비교합니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      리스 인수
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      중고차 구매
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {purchaseVsUsedCar.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.purchase}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.usedCar}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 rounded-2xl p-5">
            <h4 className="font-bold text-gray-900 mb-2">
              핵심 판단 기준: 잔존가치 vs 중고차 시세
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm font-semibold text-green-700 mb-1">
                  잔존가치 &lt; 시세 = 인수가 유리
                </p>
                <p className="text-xs text-gray-600">
                  예) 잔존가치 1,000만 원인데 시세가 1,300만 원이면 인수 시 약
                  300만 원 이득 (취등록세 별도)
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm font-semibold text-red-700 mb-1">
                  잔존가치 &gt; 시세 = 반납이 유리
                </p>
                <p className="text-xs text-gray-600">
                  예) 잔존가치 1,200만 원인데 시세가 900만 원이면 인수하면 약
                  300만 원 손해
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: 만기 전 체크리스트 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            리스 만기 전 체크리스트 8항목
          </h2>
          <p className="text-gray-600 mb-6">
            만기 2~3개월 전부터 아래 항목을 순서대로 점검하세요. 미리 준비할수록
            비용 절감과 합리적인 선택이 가능합니다.
          </p>
          <div className="space-y-4">
            {checklist.map((item) => (
              <div
                key={item.emoji}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자주 묻는 질문
          </h2>
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
              리스·할부 비용을 미리 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              인수 시 취등록세, 할부금 시뮬레이션으로 총비용을 비교할 수 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/registration-tax"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                취등록세 계산하기
              </Link>
              <Link
                href="/guide/lease-vs-rent"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                리스 vs 장기렌트 비교
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
