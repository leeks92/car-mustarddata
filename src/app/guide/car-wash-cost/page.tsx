import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '세차 비용·종류 가이드 - 자동·손·셀프세차 가격 비교',
  description:
    '자동세차, 손세차, 셀프세차, 스팀세차, 출장세차 비용을 비교했습니다. 차종별 세차 가격, 디테일링·코팅 비용, 세차 주기, 셀프세차 방법까지 2026년 최신 기준 총정리.',
  keywords: [
    '세차 비용',
    '세차 가격',
    '자동세차 가격',
    '손세차 비용',
    '셀프세차 비용',
    '스팀세차 가격',
    '출장세차 비용',
    '디테일링 비용',
    '유리막코팅 가격',
    '세차 주기',
    '셀프세차 방법',
    '세차 종류',
  ],
  alternates: { canonical: `${BASE_URL}/guide/car-wash-cost` },
  openGraph: {
    title: '세차 비용·종류 가이드 - 자동·손·셀프세차 가격 비교',
    description: '자동세차부터 출장세차까지 세차 종류별 비용과 차종별 가격을 비교했습니다.',
    url: `${BASE_URL}/guide/car-wash-cost`,
    type: 'website',
  },
};

// 세차 종류별 비용 비교 데이터
const washTypes = [
  {
    type: '자동세차',
    price: '5,000~8,000원',
    duration: '5~10분',
    cleaning: '보통',
    convenience: '매우 높음',
    desc: '주유소·세차장 기계 자동 세차. 빠르고 편리하지만 잔 스크래치 위험',
  },
  {
    type: '셀프세차',
    price: '3,000~5,000원',
    duration: '30~60분',
    cleaning: '좋음',
    convenience: '보통',
    desc: '셀프세차장에서 직접 고압수·폼건으로 세차. 가성비 최고',
  },
  {
    type: '손세차',
    price: '30,000~50,000원',
    duration: '60~90분',
    cleaning: '매우 좋음',
    convenience: '높음',
    desc: '전문가가 직접 수작업 세차. 꼼꼼한 세척과 마무리',
  },
  {
    type: '스팀세차',
    price: '40,000~60,000원',
    duration: '60~120분',
    cleaning: '매우 좋음',
    convenience: '높음',
    desc: '고온 스팀으로 살균·세척. 실내 세차와 냄새 제거에 효과적',
  },
  {
    type: '출장세차',
    price: '30,000~50,000원',
    duration: '60~90분',
    cleaning: '매우 좋음',
    convenience: '매우 높음',
    desc: '원하는 장소로 방문하여 세차. 시간 절약, 예약제 운영',
  },
];

// 차종별 세차 비용
const washByCarType = [
  {
    type: '경차',
    models: '모닝, 레이, 스파크',
    handWash: '25,000~35,000원',
    detailing: '150,000~250,000원',
    note: '차체가 작아 가장 저렴',
  },
  {
    type: '세단',
    models: '아반떼, 쏘나타, 그랜저',
    handWash: '30,000~45,000원',
    detailing: '200,000~350,000원',
    note: '가장 보편적인 가격대',
  },
  {
    type: 'SUV',
    models: '투싼, 쏘렌토, 팰리세이드',
    handWash: '35,000~55,000원',
    detailing: '250,000~400,000원',
    note: '차체가 커서 세단 대비 20~30% 추가',
  },
  {
    type: '대형 SUV',
    models: '팰리세이드, 모하비, GLS',
    handWash: '45,000~65,000원',
    detailing: '300,000~500,000원',
    note: '루프 세차 추가 비용 발생 가능',
  },
  {
    type: '수입차',
    models: '벤츠, BMW, 아우디',
    handWash: '40,000~70,000원',
    detailing: '350,000~600,000원',
    note: '프리미엄 세제·장비 사용, 전문점 권장',
  },
];

// 디테일링·코팅 비용
const detailingOptions = [
  {
    type: '유리막코팅',
    price: '200,000~500,000원',
    duration: '6개월~1년',
    effect: '발수·광택 효과, 오염 방지',
    note: '가장 보편적인 코팅. 정기적 재시공 필요',
  },
  {
    type: '세라믹코팅',
    price: '500,000~1,500,000원',
    duration: '2~5년',
    effect: '강력한 경도, 스크래치 방지, 장기 광택',
    note: '고가이지만 내구성이 뛰어남. 전문점 시공 필수',
  },
  {
    type: 'PPF (페인트 보호필름)',
    price: '1,500,000~5,000,000원',
    duration: '5~10년',
    effect: '물리적 스크래치·석칩 완벽 방지',
    note: '부위별 시공 가능. 전체 시공 시 300~500만 원',
  },
  {
    type: '광택 (폴리싱)',
    price: '100,000~300,000원',
    duration: '1~3개월',
    effect: '잔 스크래치 제거, 도장면 복원',
    note: '코팅 전 기본 작업. 단독 시공도 가능',
  },
];

// FAQ 데이터
const faqItems = [
  {
    q: '세차는 얼마나 자주 해야 하나요?',
    a: '일반적으로 2~4주에 1회가 적당합니다. 코팅 차량은 4~6주, 비포장 도로나 해안가 주행이 잦으면 1~2주에 1회를 권장합니다. 겨울철 염화칼슘 도로 주행 후에는 즉시 하부 세차가 필요합니다.',
  },
  {
    q: '자동세차가 차에 흠집을 내나요?',
    a: '브러시 방식 자동세차는 미세한 스크래치(스월마크)가 발생할 수 있습니다. 노터치(비접촉) 방식은 스크래치 위험이 적지만 세척력이 약합니다. 코팅 차량이나 수입차는 손세차를 권장합니다.',
  },
  {
    q: '셀프세차장 이용 비용은 얼마인가요?',
    a: '기본 코스(고압수+폼+헹굼) 3,000~4,000원, 왁스·실내청소까지 포함하면 5,000~7,000원 수준입니다. 별도로 타월·세제를 가져가면 추가 비용을 줄일 수 있습니다.',
  },
  {
    q: '유리막코팅과 세라믹코팅의 차이는?',
    a: '유리막코팅은 20~50만 원으로 가성비가 좋지만 6개월~1년마다 재시공이 필요합니다. 세라믹코팅은 50~150만 원으로 비싸지만 2~5년 지속되어 장기적으로는 경제적일 수 있습니다.',
  },
  {
    q: '손세차와 디테일링의 차이는 뭔가요?',
    a: '손세차는 외부 세척과 기본 실내 청소(3~5만 원)입니다. 디테일링은 손세차에 더해 광택, 타르 제거, 휠 클리닝, 실내 스팀, 가죽 크리닝 등 정밀 관리를 포함하며 15~40만 원 수준입니다.',
  },
  {
    q: '출장세차는 어떻게 이용하나요?',
    a: '네이버 예약, 숨고, 세차왕 등 앱을 통해 예약합니다. 비용은 손세차와 비슷한 3~5만 원이며, 주로 아파트 주차장이나 회사 주차장에서 진행됩니다. 물 사용이 제한된 곳에서는 스팀세차로 진행합니다.',
  },
  {
    q: '새 차를 사면 코팅을 꼭 해야 하나요?',
    a: '필수는 아니지만 코팅을 하면 도장면 보호, 세차 편의성, 광택 유지에 유리합니다. 신차 출고 시 바로 시공하는 것이 가장 효과적이며, 최소 유리막코팅(20~50만 원)은 권장합니다.',
  },
];

export default function CarWashCostGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '세차 비용·종류 가이드 - 자동·손·셀프세차 가격 비교 (2026)',
          description:
            '자동세차, 손세차, 셀프세차, 스팀세차, 출장세차 비용을 비교했습니다. 차종별 세차 가격, 디테일링·코팅 비용, 세차 주기까지 총정리.',
          url: `${BASE_URL}/guide/car-wash-cost`,
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
            { '@type': 'ListItem', position: 1, name: '자동차 계산기', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '가이드', item: `${BASE_URL}/guide` },
            { '@type': 'ListItem', position: 3, name: '세차 비용·종류 가이드', item: `${BASE_URL}/guide/car-wash-cost` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li><Link href="/" className="hover:text-amber-600">가이드</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">세차 비용·종류 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <span className="text-sm bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">관리 가이드</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            세차 비용·종류 가이드
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            자동세차, 손세차, 셀프세차, 스팀세차, 출장세차까지 세차 종류별 비용을 비교했습니다.
            차종별 세차 가격, 디테일링·코팅 비용, 세차 주기, 셀프세차 방법까지 총정리했습니다.
          </p>
        </section>

        {/* 핵심 요약 */}
        <section className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">자동세차</p>
              <p className="text-lg font-bold text-amber-600">5,000~8,000원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">셀프세차</p>
              <p className="text-lg font-bold text-amber-600">3,000~5,000원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">손세차</p>
              <p className="text-lg font-bold text-amber-600">3~5만 원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">스팀세차</p>
              <p className="text-lg font-bold text-amber-600">4~6만 원</p>
            </div>
          </div>
        </section>

        {/* ===== 1. 세차 종류별 비용 비교 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">세차 종류별 비용 비교</h2>
          <p className="text-sm text-gray-500 mb-6">2026년 기준, 중형 세단(쏘나타급) 1회 세차 비용</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">세차 종류</th>
                    <th className="px-4 py-3 text-right font-semibold">비용</th>
                    <th className="px-4 py-3 text-right font-semibold">소요시간</th>
                    <th className="px-4 py-3 text-center font-semibold">세척력</th>
                    <th className="px-4 py-3 text-center font-semibold">편의성</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {washTypes.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.price}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.duration}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.cleaning}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.convenience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-3">
            {washTypes.map((row) => (
              <div key={row.type} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">{row.type}</h3>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{row.price}</span>
                </div>
                <p className="text-sm text-gray-600">{row.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">※ 차종, 지역, 업체에 따라 가격이 다를 수 있습니다. 실내 세차 포함 시 추가 비용 발생</p>
        </section>

        {/* ===== 2. 차종별 세차 비용 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">차종별 세차 비용</h2>
          <p className="text-sm text-gray-500 mb-6">손세차 기준 1회 비용과 디테일링(광택+실내+외부 정밀세차) 비용</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-left font-semibold">대표 모델</th>
                    <th className="px-4 py-3 text-right font-semibold">손세차 1회</th>
                    <th className="px-4 py-3 text-right font-semibold">디테일링 1회</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {washByCarType.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.models}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.handWash}</td>
                      <td className="px-4 py-3 text-right font-medium text-red-500">{row.detailing}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>TIP:</strong> 월 정기권을 이용하면 1회당 비용을 30~50% 절약할 수 있습니다. 월 2회 손세차 기준, 정기권은 월 5~7만 원 수준입니다.
          </div>
        </section>

        {/* ===== 3. 디테일링·코팅 비용 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">디테일링·코팅 비용</h2>
          <p className="text-sm text-gray-500 mb-6">중형 세단 기준 시공 비용. 차량 크기에 따라 20~50% 가감</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">종류</th>
                    <th className="px-4 py-3 text-right font-semibold">가격대</th>
                    <th className="px-4 py-3 text-right font-semibold">지속기간</th>
                    <th className="px-4 py-3 text-left font-semibold">효과</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {detailingOptions.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-right font-medium text-amber-600">{row.price}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.duration}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-3">
            {detailingOptions.map((row) => (
              <div key={row.type} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">{row.type}</h3>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{row.duration} 지속</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{row.effect}</p>
                <p className="text-xs text-gray-400">{row.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 4. 세차 주기 가이드 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">세차 주기 가이드</h2>

          {/* 계절별 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">계절별 추천 세차 주기</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">계절</th>
                    <th className="px-4 py-3 text-center font-semibold">추천 주기</th>
                    <th className="px-4 py-3 text-left font-semibold">주의사항</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">봄 (3~5월)</td>
                    <td className="px-4 py-3 text-center font-medium text-amber-600">2주에 1회</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">황사·미세먼지·꽃가루가 도장면 손상 유발. 물세차 위주로 자주 세차</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">여름 (6~8월)</td>
                    <td className="px-4 py-3 text-center font-medium text-amber-600">2~3주에 1회</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">벌레 사체·나무 수액 빠른 제거 필요. 장마철 후 하부 세차 권장</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">가을 (9~11월)</td>
                    <td className="px-4 py-3 text-center font-medium text-amber-600">3~4주에 1회</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">낙엽·나무 열매 오염 주의. 겨울 대비 코팅 점검·재시공 추천</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">겨울 (12~2월)</td>
                    <td className="px-4 py-3 text-center font-medium text-amber-600">1~2주에 1회</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">염화칼슘이 하부·휠에 부식 유발. 하부 세차 필수, 영하에서는 실내 세차장 이용</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 코팅 상태별 / 주행 환경별 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">코팅 상태별 세차 주기</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-700">코팅 없는 차량</span>
                  <span className="text-sm font-bold text-amber-600">2주에 1회</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-700">유리막코팅 차량</span>
                  <span className="text-sm font-bold text-amber-600">3~4주에 1회</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-700">세라믹코팅 차량</span>
                  <span className="text-sm font-bold text-amber-600">4~6주에 1회</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">PPF 시공 차량</span>
                  <span className="text-sm font-bold text-amber-600">4~6주에 1회</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">주행 환경별 세차 주기</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-700">도심 출퇴근 위주</span>
                  <span className="text-sm font-bold text-amber-600">3~4주에 1회</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-700">야외 주차 (실외)</span>
                  <span className="text-sm font-bold text-amber-600">2주에 1회</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-700">비포장·공사 현장</span>
                  <span className="text-sm font-bold text-amber-600">1~2주에 1회</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">해안가·소금기 지역</span>
                  <span className="text-sm font-bold text-amber-600">1주에 1회</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. 셀프세차 방법 6단계 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">셀프세차 방법 6단계</h2>
          <div className="space-y-3">
            {[
              {
                step: 1,
                title: '준비물 챙기기',
                desc: '세차 전용 버킷 2개, 카샴푸, 워시미트(세차 장갑), 마이크로파이버 타월 3~4장, 드라잉 타월, 휠 클리너를 준비합니다. 셀프세차장 비치 용품만으로도 기본 세차는 가능합니다.',
                tip: '가정용 세제(주방세제 등)는 코팅을 벗기므로 반드시 카샴푸를 사용하세요.',
              },
              {
                step: 2,
                title: '고압수 프리워시',
                desc: '차량 상단부터 하단 순서로 고압수를 뿌려 모래, 먼지, 흙 등 이물질을 먼저 제거합니다. 이 과정을 생략하면 세차 시 이물질로 인한 스크래치가 발생합니다.',
                tip: '노즐과 차체 간격을 30cm 이상 유지하세요. 너무 가까우면 도장면 손상 가능.',
              },
              {
                step: 3,
                title: '폼 또는 카샴푸 본세차',
                desc: '폼건으로 차량 전체에 거품을 도포하고 2~3분 불린 후, 워시미트에 카샴푸를 묻혀 상단(루프)부터 하단(하부 패널) 순서로 닦습니다. 직선 방향으로 닦아야 스월마크를 줄일 수 있습니다.',
                tip: '투 버킷 방식(세차용+헹굼용 버킷 분리)을 사용하면 이물질 재부착을 방지합니다.',
              },
              {
                step: 4,
                title: '깨끗한 물로 헹굼',
                desc: '카샴푸 잔여물이 남지 않도록 상단부터 충분히 헹굽니다. 특히 사이드미러 하단, 도어 몰딩, 트렁크 틈새 등 잔여물이 남기 쉬운 부분을 꼼꼼히 헹궈주세요.',
                tip: '헹굼이 부족하면 물때 자국(워터스팟)이 남으므로 충분히 헹기세요.',
              },
              {
                step: 5,
                title: '물기 제거 (드라잉)',
                desc: '드라잉 타월이나 에어블로워로 물기를 제거합니다. 직사광선에서 자연 건조하면 워터스팟이 남으므로 반드시 타월로 닦아줍니다. 도어 틈새, 사이드미러 안쪽도 물기를 제거하세요.',
                tip: '마이크로파이버 드라잉 타월은 흡수력이 뛰어나 1~2장이면 충분합니다.',
              },
              {
                step: 6,
                title: '마무리 (타이어·유리·실내)',
                desc: '타이어 광택제를 도포하고, 유리 세정제로 앞·뒤 유리를 닦습니다. 실내는 먼지를 털어내고 대시보드 클리너를 뿌려 마무리합니다. 방향제 교체나 시트 클리닝도 이때 함께 합니다.',
                tip: '타이어 광택제는 수성 제품이 고무 열화가 적어 추천합니다.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4">
                <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                    <strong>TIP:</strong> {item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <strong>셀프세차 총 소요시간:</strong> 약 40~60분 (초보 기준 60~90분). 비용은 코스 선택에 따라 3,000~7,000원 수준입니다.
          </div>
        </section>

        {/* ===== 6. 세차 업체 선택 팁 ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">세차 업체 선택 팁 5가지</h2>
          <div className="space-y-3">
            {[
              {
                num: 1,
                title: '시설과 장비 확인',
                desc: '세차 베이 조명, 고압수 수압, 폼건 상태, 에어건 유무를 확인하세요. 밝은 조명과 높은 수압이 세차 품질에 직결됩니다. 실내 세차 공간이 별도로 있는 곳이 좋습니다.',
              },
              {
                num: 2,
                title: '사용 세제 종류 확인',
                desc: 'pH 중성 카샴푸를 사용하는지 확인하세요. 저가 업체는 알칼리성 세제를 사용해 코팅이 빨리 벗겨질 수 있습니다. 프리미엄 업체는 세제 브랜드를 명시하는 경우가 많습니다.',
              },
              {
                num: 3,
                title: '후기와 평점 확인',
                desc: '네이버 플레이스, 카카오맵 후기를 확인하세요. 특히 "스크래치 발생", "대충 세차", "시간이 너무 짧다"는 후기가 있으면 피하는 것이 좋습니다. 사진 후기가 많은 업체가 신뢰도가 높습니다.',
              },
              {
                num: 4,
                title: '정기권·할인 혜택 비교',
                desc: '월 정기권(월 2~4회)을 이용하면 1회당 30~50% 할인됩니다. 네이버 예약 쿠폰, 카드사 할인도 활용하세요. 일부 업체는 회원 등급제로 세차할수록 할인율이 높아집니다.',
              },
              {
                num: 5,
                title: '코팅·디테일링 서비스 유무',
                desc: '세차와 함께 코팅 유지 관리(탑코트 시공)를 해주는 업체가 이상적입니다. 코팅 전문 업체에서 세차까지 받으면 코팅 수명을 더 오래 유지할 수 있습니다.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4">
                <span className="bg-amber-100 text-amber-700 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">세차 비용 자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
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
              내 차 관리 비용을 더 알아보세요
            </h2>
            <p className="text-amber-100 mb-6">
              유지비, 정비비, 흠집 수리비까지 한눈에 확인합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/maintenance-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                자동차 유지비 가이드
              </Link>
              <Link
                href="/guide/car-scratch-repair-cost"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                흠집·판금 수리 비용
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
