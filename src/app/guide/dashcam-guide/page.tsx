import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '블랙박스 추천·설치 가이드 - 2026년 종류별 가격 비교',
  description:
    '2026년 블랙박스 추천 제품, 종류별 특징, 설치 비용, 주요 기능 선택 가이드, 보험 할인 정보, 관리 방법까지 총정리했습니다. 파인뷰·아이나비·팅크웨어 등 인기 제품 가격 비교.',
  keywords: [
    '블랙박스 추천',
    '블랙박스 설치 비용',
    '차량용 블랙박스',
    '블랙박스 가격 비교',
    '2채널 블랙박스',
    '4K 블랙박스',
    '블랙박스 보험 할인',
    '주차 모드 블랙박스',
    '블랙박스 종류',
    '블랙박스 설치',
  ],
  alternates: { canonical: `${BASE_URL}/guide/dashcam-guide` },
  openGraph: {
    title: '블랙박스 추천·설치 가이드 - 2026년 종류별 가격 비교',
    description:
      '블랙박스 종류, 추천 제품, 설치 비용, 보험 할인 정보를 정리했습니다.',
    url: `${BASE_URL}/guide/dashcam-guide`,
    type: 'website',
  },
};

const channelTypes = [
  {
    type: '1채널',
    cameras: '전방 1개',
    priceRange: '5~15만 원',
    pros: '저렴한 가격, 간편한 설치',
    cons: '후방·측면 사각지대',
    recommended: '보조 블랙박스, 오토바이',
  },
  {
    type: '2채널',
    cameras: '전방 + 후방',
    priceRange: '10~35만 원',
    pros: '전·후방 동시 촬영, 가성비 우수',
    cons: '측면 사각지대 존재',
    recommended: '대부분의 승용차 (가장 인기)',
  },
  {
    type: '4채널',
    cameras: '전방 + 후방 + 좌·우 측면',
    priceRange: '30~60만 원',
    pros: '360도 사각지대 없음',
    cons: '높은 가격, 복잡한 설치',
    recommended: 'SUV, 고급 차량, 영업용 차량',
  },
];

const resolutionComparison = [
  {
    resolution: 'FHD (1080p)',
    priceRange: '5~15만 원',
    pros: '저렴한 가격, 충분한 화질, 저장 공간 절약',
    cons: '번호판 인식 거리 짧음 (약 5m)',
  },
  {
    resolution: 'QHD (1440p)',
    priceRange: '12~30만 원',
    pros: '선명한 화질, 번호판 인식 약 8m, 가성비 최적',
    cons: 'FHD 대비 가격 상승',
  },
  {
    resolution: '4K (2160p)',
    priceRange: '25~50만 원',
    pros: '최고 화질, 번호판 인식 약 12m, 야간에도 선명',
    cons: '높은 가격, 큰 저장 용량 필요',
  },
];

const recommendedProducts = [
  {
    brand: '파인뷰',
    model: 'LX7000 Power',
    resolution: 'QHD+QHD',
    price: '약 22만 원',
    features: 'Sony 센서, Wi-Fi, OTA 업데이트',
    parkingMode: '타임랩스 + 모션감지',
  },
  {
    brand: '아이나비',
    model: 'QXD5000 Mini',
    resolution: 'QHD+FHD',
    price: '약 25만 원',
    features: 'AI 나이트비전, 클라우드 연동',
    parkingMode: '저전력 상시녹화',
  },
  {
    brand: '팅크웨어',
    model: '아이패스 블랙 Q3',
    resolution: 'QHD+QHD',
    price: '약 20만 원',
    features: 'ADAS, GPS 내장, 음성 안내',
    parkingMode: '타임랩스 + 충격감지',
  },
  {
    brand: '뷰게라',
    model: 'VG-900V2',
    resolution: '4K+FHD',
    price: '약 35만 원',
    features: '4K 초고화질, HDR, 넓은 화각',
    parkingMode: '저전력 모션감지',
  },
  {
    brand: '만도',
    model: 'AX100',
    resolution: 'QHD+FHD',
    price: '약 18만 원',
    features: '초소형 디자인, Wi-Fi, 포맷프리',
    parkingMode: '충격감지 + 타임랩스',
  },
  {
    brand: '파인뷰',
    model: 'X7000 POWER',
    resolution: '4K+QHD',
    price: '약 30만 원',
    features: 'Sony STARVIS 2, 5GHz Wi-Fi',
    parkingMode: '저전력 상시녹화',
  },
  {
    brand: '아이나비',
    model: 'Z5000 Plus',
    resolution: 'QHD+QHD',
    price: '약 28만 원',
    features: 'AI 충격감지, 실시간 클라우드',
    parkingMode: '스마트 주차모드',
  },
  {
    brand: '팅크웨어',
    model: '아이패스 블랙 T10',
    resolution: '4K+4K',
    price: '약 45만 원',
    features: '전·후방 4K, eMMC 내장메모리',
    parkingMode: '상시녹화 + AI 감지',
  },
];

const installationCosts = [
  {
    type: 'DIY 설치 (노출형)',
    price: '0원',
    time: '30분~1시간',
    pros: '비용 절약',
    cons: '배선 노출, 외관 지저분할 수 있음',
  },
  {
    type: '전문점 노출 설치',
    price: '3~5만 원',
    time: '30분~1시간',
    pros: '깔끔한 설치, 전문가 작업',
    cons: '배선 일부 노출',
  },
  {
    type: '전문점 매립 설치',
    price: '5~10만 원',
    time: '1~2시간',
    pros: '배선 완전 숨김, 깔끔한 외관',
    cons: '비용 높음, 분해 필요',
  },
  {
    type: '4채널 매립 설치',
    price: '10~20만 원',
    time: '2~3시간',
    pros: '모든 배선 매립, 완벽한 외관',
    cons: '높은 비용, 시간 소요',
  },
];

const installationByCarType = [
  { carType: '경차 (모닝·레이)', twoChannel: '3~5만 원', fourChannel: '8~12만 원' },
  { carType: '준중형 (아반떼·K3)', twoChannel: '4~6만 원', fourChannel: '10~15만 원' },
  { carType: '중형 (쏘나타·K5)', twoChannel: '5~7만 원', fourChannel: '12~18만 원' },
  { carType: 'SUV (투싼·쏘렌토)', twoChannel: '5~8만 원', fourChannel: '12~18만 원' },
  { carType: '대형 SUV (팰리세이드)', twoChannel: '6~10만 원', fourChannel: '15~20만 원' },
  { carType: '수입차', twoChannel: '8~15만 원', fourChannel: '15~25만 원' },
];

const keyFeatures = [
  {
    emoji: '🅿️',
    title: '주차 모드',
    desc: '주차 중 충격이나 움직임이 감지되면 자동으로 녹화를 시작합니다. 뺑소니·문콕 사고 증거 확보에 필수적인 기능입니다. 타임랩스·모션감지·상시녹화 방식이 있으며, 보조 배터리를 연결하면 배터리 방전 걱정 없이 장시간 주차 녹화가 가능합니다.',
  },
  {
    emoji: '📡',
    title: 'GPS',
    desc: '주행 경로와 속도를 기록합니다. 사고 발생 시 정확한 위치와 시간을 증명할 수 있어 보험 처리에 유리합니다. 과속 카메라 알림 기능도 함께 제공되는 경우가 많습니다. GPS가 내장되지 않은 모델은 외장 GPS를 추가할 수 있습니다.',
  },
  {
    emoji: '☁️',
    title: '클라우드 연동',
    desc: '블랙박스 영상을 스마트폰 앱이나 클라우드 서버에 실시간 전송합니다. 차량 도난이나 사고 시 블랙박스가 파손되어도 영상이 보존됩니다. 아이나비·팅크웨어 등 주요 브랜드에서 자체 클라우드 서비스를 제공합니다. 월 구독료가 발생할 수 있습니다.',
  },
  {
    emoji: '🚗',
    title: 'ADAS (첨단 운전자 보조)',
    desc: '전방 추돌 경고(FCWS), 차선 이탈 경고(LDWS), 앞차 출발 알림(FVSA) 등 운전 보조 기능을 제공합니다. 완전한 자율주행 기능은 아니지만, 장거리 운전이나 졸음운전 예방에 도움이 됩니다.',
  },
  {
    emoji: '🎥',
    title: '실내 카메라',
    desc: '차량 실내를 촬영하는 기능으로, 택시·영업용 차량에서 주로 사용합니다. 카풀이나 차량 공유 시 분쟁 예방에도 유용합니다. 일부 2채널 모델에서 후방 카메라 대신 실내 카메라를 선택할 수 있습니다.',
  },
  {
    emoji: '🔋',
    title: '배터리 방전 방지',
    desc: '차량 배터리 전압이 일정 수준 이하로 떨어지면 자동으로 전원을 차단합니다. 장기 주차 시 배터리 방전을 방지하는 필수 기능입니다. 차단 전압은 보통 11.8V~12.0V로 설정하며, 블랙박스 설정에서 조절할 수 있습니다.',
  },
];

const insuranceDiscounts = [
  { company: '삼성화재', discount: '2~3%', condition: '블랙박스 장착 확인' },
  { company: 'KB손해보험', discount: '2~3%', condition: '블랙박스 장착 신고' },
  { company: '현대해상', discount: '2~4%', condition: '장착 사진 또는 영수증 제출' },
  { company: 'DB손해보험', discount: '2~3%', condition: '블랙박스 장착 확인' },
  { company: '메리츠화재', discount: '3~5%', condition: '장착 증빙 서류 제출' },
  { company: '한화손해보험', discount: '2~3%', condition: '블랙박스 장착 신고' },
];

const maintenanceTips = [
  {
    title: 'SD 카드 정기 교체',
    desc: 'SD 카드(또는 microSD)는 지속적인 읽기·쓰기로 수명이 제한됩니다. 일반 SD 카드는 6개월~1년, 블랙박스 전용 고내구성(MLC/pSLC) SD 카드는 1~2년마다 교체하는 것이 좋습니다. 포맷은 월 1~2회 해주면 안정적인 녹화가 가능합니다.',
    period: '6개월~2년마다',
  },
  {
    title: '펌웨어 업데이트',
    desc: '제조사에서 배포하는 펌웨어 업데이트를 정기적으로 적용하세요. 화질 개선, 버그 수정, 새로운 기능 추가, GPS 데이터 업데이트 등이 포함됩니다. Wi-Fi 지원 모델은 스마트폰 앱에서 간편하게 업데이트할 수 있습니다.',
    period: '분기별 확인',
  },
  {
    title: '중요 영상 즉시 백업',
    desc: '사고나 특이 상황 발생 시 영상을 즉시 백업하세요. 블랙박스는 저장 공간이 가득 차면 오래된 영상을 자동으로 덮어씁니다. Wi-Fi 연결 또는 SD 카드를 빼서 PC에 복사하는 방법이 있습니다. 이벤트 녹화 영상은 별도 폴더에 보관됩니다.',
    period: '사고 발생 즉시',
  },
  {
    title: '열 관리 및 직사광선 주의',
    desc: '여름철 차량 내부 온도는 70~80도까지 올라갑니다. 장시간 직사광선에 노출되면 블랙박스 수명이 단축되고, 심하면 고장의 원인이 됩니다. 햇빛 가리개를 사용하거나, 열에 강한 슈퍼 커패시터 타입 블랙박스를 선택하는 것이 좋습니다.',
    period: '여름철 상시',
  },
  {
    title: '보증 기간 및 A/S 확인',
    desc: '블랙박스 보증 기간은 보통 1~2년입니다. 구매 시 영수증과 보증서를 보관하고, A/S 센터 위치를 확인해두세요. 주요 브랜드(파인뷰·아이나비·팅크웨어)는 전국 A/S 네트워크를 갖추고 있어 수리·교환이 편리합니다.',
    period: '구매 시 확인',
  },
];

const faqItems = [
  {
    q: '블랙박스 1채널과 2채널 중 어떤 것을 선택해야 하나요?',
    a: '대부분의 운전자에게는 2채널 블랙박스를 추천합니다. 후방 추돌사고나 주차 중 뺑소니 등 후방 영상이 필요한 경우가 많기 때문입니다. 가격 차이도 5~10만 원 수준이므로 2채널이 가성비가 좋습니다. 오토바이나 보조용으로는 1채널도 충분합니다.',
  },
  {
    q: '블랙박스 해상도는 QHD와 4K 중 어떤 것이 좋나요?',
    a: 'QHD(1440p)가 가성비 면에서 가장 추천됩니다. 번호판 인식 거리가 약 8m로 충분하고, 가격도 합리적입니다. 4K는 화질이 뛰어나지만 저장 용량을 많이 차지하고 가격이 높습니다. 야간 주행이 많거나 고속도로 이용이 잦다면 4K를 고려해볼 만합니다.',
  },
  {
    q: '블랙박스 주차 모드를 사용하면 배터리가 방전되나요?',
    a: '네, 장기간 주차 모드를 사용하면 차량 배터리가 방전될 수 있습니다. 이를 방지하려면 배터리 방전 방지 기능의 차단 전압을 적절히 설정하거나(12.0V 이상 권장), 보조 배터리(외장 배터리팩)를 별도로 연결하는 방법이 있습니다. 보조 배터리는 3~10만 원 정도입니다.',
  },
  {
    q: '블랙박스 설치는 직접 할 수 있나요?',
    a: '노출 설치는 DIY가 가능합니다. 블랙박스를 앞 유리에 부착하고, 시거잭 케이블을 연결하면 됩니다. 다만 깔끔한 매립 설치를 원한다면 전문점을 이용하는 것이 좋습니다. 내장재 분해와 전기 배선 작업이 필요하기 때문입니다.',
  },
  {
    q: '블랙박스 장착 시 보험료 할인은 얼마나 되나요?',
    a: '보험사에 따라 연간 보험료의 2~5%가 할인됩니다. 보험료가 100만 원이라면 연 2~5만 원을 절약할 수 있습니다. 블랙박스 장착 사실을 보험사에 알리면 적용되며, 장착 사진이나 구매 영수증이 필요할 수 있습니다.',
  },
  {
    q: 'SD 카드는 일반 것을 사용해도 되나요?',
    a: '일반 SD 카드도 사용할 수 있지만, 블랙박스 전용 고내구성 SD 카드를 권장합니다. 블랙박스는 24시간 연속 읽기·쓰기를 하므로 일반 SD 카드는 3~6개월이면 수명이 다할 수 있습니다. MLC 또는 pSLC 방식의 전용 카드는 1~2년까지 사용 가능합니다. 용량은 64GB~128GB가 적당합니다.',
  },
  {
    q: '블랙박스 영상은 사고 증거로 법적 효력이 있나요?',
    a: '네, 블랙박스 영상은 교통사고 시 중요한 증거 자료로 인정됩니다. 보험사 과실 비율 산정, 경찰 사고 조사, 법원 소송 등에서 객관적 증거로 활용됩니다. GPS가 내장된 모델은 위치와 속도 정보까지 기록되어 증거력이 더 높습니다.',
  },
];

export default function DashcamGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '블랙박스 추천·설치 가이드 - 2026년 종류별 가격 비교',
          description:
            '블랙박스 종류, 추천 제품, 설치 비용, 보험 할인 정보를 정리했습니다.',
          url: `${BASE_URL}/guide/dashcam-guide`,
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
            {
              '@type': 'ListItem',
              position: 3,
              name: '블랙박스 추천·설치 가이드',
              item: `${BASE_URL}/guide/dashcam-guide`,
            },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">자동차 계산기</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/guide/new-car-buying" className="hover:text-amber-600">가이드</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">블랙박스 추천·설치 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            블랙박스 추천·설치 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            블랙박스(차량용 영상기록장치)는 교통사고 증거 확보, 주차 중 사고 기록,
            보험료 할인까지 받을 수 있는 <strong>필수 차량 액세서리</strong>입니다.
            2026년 기준 블랙박스 종류별 특징, 인기 제품 비교, 설치 비용, 주요 기능 선택법을 정리했습니다.
          </p>
        </section>

        {/* Section 1: 블랙박스 종류별 특징 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            블랙박스 종류별 특징
          </h2>
          <p className="text-gray-600 mb-6">
            블랙박스는 카메라 채널 수에 따라 1채널, 2채널, 4채널로 나뉩니다.
            채널이 많을수록 촬영 범위가 넓어지지만 가격도 올라갑니다.
          </p>

          {/* 채널별 비교 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">채널별 비교</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">종류</th>
                    <th className="px-4 py-3 text-left font-semibold">카메라 구성</th>
                    <th className="px-4 py-3 text-right font-semibold">가격대</th>
                    <th className="px-4 py-3 text-left font-semibold">장점</th>
                    <th className="px-4 py-3 text-left font-semibold">단점</th>
                    <th className="px-4 py-3 text-left font-semibold">추천 대상</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {channelTypes.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.cameras}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.priceRange}</td>
                      <td className="px-4 py-3 text-gray-600">{row.pros}</td>
                      <td className="px-4 py-3 text-gray-600">{row.cons}</td>
                      <td className="px-4 py-3 text-gray-600">{row.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 해상도별 비교 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">해상도별 비교</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">해상도</th>
                    <th className="px-4 py-3 text-right font-semibold">가격대 (2채널)</th>
                    <th className="px-4 py-3 text-left font-semibold">장점</th>
                    <th className="px-4 py-3 text-left font-semibold">단점</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {resolutionComparison.map((row) => (
                    <tr key={row.resolution} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.resolution}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.priceRange}</td>
                      <td className="px-4 py-3 text-gray-600">{row.pros}</td>
                      <td className="px-4 py-3 text-gray-600">{row.cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 가격대는 2채널 기준이며, 브랜드·모델에 따라 차이가 있습니다
          </p>
        </section>

        {/* Section 2: 2026년 인기 블랙박스 추천 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2026년 인기 블랙박스 추천 8선
          </h2>
          <p className="text-gray-600 mb-4">
            국내 인기 블랙박스 브랜드의 대표 제품을 비교했습니다. 모두 2채널 기준이며,
            주차 모드와 Wi-Fi 기능을 기본 탑재한 제품입니다.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">브랜드</th>
                    <th className="px-4 py-3 text-left font-semibold">모델명</th>
                    <th className="px-4 py-3 text-left font-semibold">해상도</th>
                    <th className="px-4 py-3 text-right font-semibold">가격</th>
                    <th className="px-4 py-3 text-left font-semibold">주요 기능</th>
                    <th className="px-4 py-3 text-left font-semibold">주차 모드</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recommendedProducts.map((row) => (
                    <tr key={row.model} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.brand}</td>
                      <td className="px-4 py-3 text-gray-600">{row.model}</td>
                      <td className="px-4 py-3 text-gray-600">{row.resolution}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.price}</td>
                      <td className="px-4 py-3 text-gray-600">{row.features}</td>
                      <td className="px-4 py-3 text-gray-600">{row.parkingMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 가격은 2026년 1월 기준 온라인 최저가이며, 설치비 별도입니다
          </p>
        </section>

        {/* Section 3: 블랙박스 설치 비용 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            블랙박스 설치 비용
          </h2>
          <p className="text-gray-600 mb-6">
            블랙박스 설치 비용은 설치 방식(DIY vs 전문점)과 배선 처리 방식(노출 vs 매립)에 따라 달라집니다.
            신차 출고 시 딜러에서 서비스로 설치해주는 경우도 있습니다.
          </p>

          {/* DIY vs 전문설치 비교 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">설치 방식별 비용 비교</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">설치 방식</th>
                    <th className="px-4 py-3 text-right font-semibold">비용</th>
                    <th className="px-4 py-3 text-left font-semibold">소요 시간</th>
                    <th className="px-4 py-3 text-left font-semibold">장점</th>
                    <th className="px-4 py-3 text-left font-semibold">단점</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {installationCosts.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.price}</td>
                      <td className="px-4 py-3 text-gray-600">{row.time}</td>
                      <td className="px-4 py-3 text-gray-600">{row.pros}</td>
                      <td className="px-4 py-3 text-gray-600">{row.cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 차종별 설치비 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">차종별 매립 설치비 (전문점 기준)</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">차종</th>
                    <th className="px-4 py-3 text-right font-semibold">2채널 매립</th>
                    <th className="px-4 py-3 text-right font-semibold">4채널 매립</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {installationByCarType.map((row) => (
                    <tr key={row.carType} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.carType}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.twoChannel}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.fourChannel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 수입차는 내장재 분해 난이도에 따라 추가 비용이 발생할 수 있습니다
          </p>
        </section>

        {/* Section 4: 주요 기능 선택 가이드 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            주요 기능 선택 가이드
          </h2>
          <p className="text-gray-600 mb-6">
            블랙박스 구매 시 확인해야 할 6가지 핵심 기능입니다.
            자신의 운전 환경과 용도에 맞는 기능을 선택하세요.
          </p>
          <div className="space-y-4">
            {keyFeatures.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{item.emoji}</span>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: 보험 할인 안내 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            블랙박스 장착 시 보험료 할인
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              블랙박스를 장착하면 자동차보험료의 <strong className="text-amber-600">2~5%</strong>를
              할인받을 수 있습니다. 연간 보험료가 100만 원이라면 <strong>2~5만 원</strong>을 절약할 수 있으며,
              블랙박스 구매 비용을 3~5년이면 회수할 수 있습니다.
            </p>
            <p className="text-sm text-gray-500">
              할인을 받으려면 보험사에 블랙박스 장착 사실을 신고하고, 장착 사진이나 구매 영수증 등
              증빙 서류를 제출해야 합니다. 보험 갱신 시 자동 적용되지 않으므로 반드시 직접 신청하세요.
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">보험사별 블랙박스 할인율</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">보험사</th>
                    <th className="px-4 py-3 text-right font-semibold">할인율</th>
                    <th className="px-4 py-3 text-left font-semibold">적용 조건</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {insuranceDiscounts.map((row) => (
                    <tr key={row.company} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.company}</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.discount}</td>
                      <td className="px-4 py-3 text-gray-600">{row.condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 할인율은 보험사 정책에 따라 변동될 수 있습니다. 정확한 할인율은 각 보험사에 문의하세요.
          </p>
        </section>

        {/* Section 6: 블랙박스 관리 방법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            블랙박스 관리 방법 5가지
          </h2>
          <p className="text-gray-600 mb-6">
            블랙박스를 오래 사용하고 항상 안정적으로 녹화하려면 정기적인 관리가 필요합니다.
          </p>
          <div className="space-y-4">
            {maintenanceTips.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
              사고 발생 시 대처 방법도 알아보세요
            </h2>
            <p className="text-amber-100 mb-6">
              블랙박스 영상 활용법, 보험 처리 절차, 과실 비율 기준까지 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/car-accident-process"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                교통사고 대처 가이드
              </Link>
              <Link
                href="/guide/car-insurance"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                자동차보험 비교 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
