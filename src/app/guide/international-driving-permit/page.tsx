import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '국제운전면허증 발급 방법 - 2026년 발급 장소·비용·필요 서류 총정리',
  description:
    '국제운전면허증 발급 방법을 총정리했습니다. 발급 장소(면허시험장·경찰서·공항), 비용 7,500원, 필요 서류, 유효기간 1년, 국가별 사용 가능 여부, 해외 운전 팁, 렌터카 이용 가이드까지 한눈에 확인하세요.',
  keywords: [
    '국제운전면허증',
    '국제운전면허증 발급',
    '국제면허증 비용',
    '국제운전면허 필요서류',
    '해외 운전면허',
    '국제면허 발급 장소',
    '해외 렌터카',
    '국제운전면허 유효기간',
    '해외 운전 팁',
    '국제면허 국가',
  ],
  alternates: { canonical: `${BASE_URL}/guide/international-driving-permit` },
  openGraph: {
    title: '국제운전면허증 발급 방법 - 2026년 발급 장소·비용·필요 서류 총정리',
    description:
      '국제운전면허증 발급 장소, 비용, 필요 서류, 국가별 사용 가능 여부, 해외 운전 팁을 총정리했습니다.',
    url: `${BASE_URL}/guide/international-driving-permit`,
    type: 'website',
  },
};

const requiredDocs = [
  {
    item: '국내 운전면허증',
    detail: '1종 또는 2종 보통 이상 (원동기 면허 제외)',
    note: '유효기간 내 면허',
  },
  {
    item: '여권',
    detail: '유효기간 6개월 이상 남은 여권 원본',
    note: '여권 사본 불가',
  },
  {
    item: '여권용 사진 1매',
    detail: '3.5cm x 4.5cm, 6개월 이내 촬영',
    note: '현장 촬영 가능 (일부)',
  },
  {
    item: '발급 수수료',
    detail: '8,500원 (2026년 기준)',
    note: '현금·카드 모두 가능',
  },
  {
    item: '신분증',
    detail: '주민등록증 또는 운전면허증',
    note: '본인 확인용',
  },
];

const issuanceLocations = [
  {
    place: '운전면허시험장',
    duration: '즉시 발급 (약 10~20분)',
    hours: '평일 09:00~18:00',
    note: '가장 일반적인 발급 장소, 전국 25개 시험장',
  },
  {
    place: '경찰서 (민원실)',
    duration: '즉시 발급 (약 15~30분)',
    hours: '평일 09:00~18:00',
    note: '일부 경찰서만 가능, 사전 확인 필요',
  },
  {
    place: '인터넷 (안전운전 통합민원)',
    duration: '신청 후 우편 수령 (3~5일)',
    hours: '24시간 (연중무휴)',
    note: 'safedriving.or.kr, 공인인증서 필요',
  },
  {
    place: '인천공항 (출국장 내)',
    duration: '즉시 발급 (약 10분)',
    hours: '연중무휴 06:00~21:00',
    note: '출국 당일 긴급 발급 가능, 제1·2터미널 모두',
  },
  {
    place: '김포공항',
    duration: '즉시 발급 (약 10분)',
    hours: '평일 09:00~18:00',
    note: '국내선·국제선 터미널 경찰서',
  },
  {
    place: '김해공항',
    duration: '즉시 발급 (약 10분)',
    hours: '평일 09:00~18:00',
    note: '국제선 터미널 내',
  },
];

const countryInfo = [
  {
    country: '미국',
    available: '사용 가능',
    validity: '입국 후 최대 1년',
    note: '주(State)마다 규정 상이, 일부 주는 IDP 없이 한국 면허만으로 가능',
  },
  {
    country: '일본',
    available: '사용 불가 (별도 절차)',
    validity: '-',
    note: '제네바 협약 미가입. JAF에서 한국 면허 번역문 발급 필요 (약 3,000엔)',
  },
  {
    country: '영국',
    available: '사용 가능',
    validity: '입국 후 최대 12개월',
    note: '좌측통행 국가, IDP 소지 권장',
  },
  {
    country: '프랑스',
    available: '사용 가능',
    validity: '입국 후 최대 1년',
    note: '비엔나 협약 가입국, IDP 필수',
  },
  {
    country: '독일',
    available: '사용 가능',
    validity: '입국 후 최대 6개월',
    note: '아우토반 속도 무제한 구간 주의, IDP 필수',
  },
  {
    country: '이탈리아',
    available: '사용 가능',
    validity: '입국 후 최대 1년',
    note: 'ZTL(교통 제한 구역) 진입 시 과태료 주의',
  },
  {
    country: '호주',
    available: '사용 가능',
    validity: '입국 후 최대 3개월',
    note: '좌측통행 국가, 3개월 초과 시 현지 면허 필요',
  },
  {
    country: '태국',
    available: '사용 가능',
    validity: '입국 후 최대 90일',
    note: '좌측통행 국가, 현지 경찰이 IDP 요구하는 경우 많음',
  },
  {
    country: '베트남',
    available: '사용 불가',
    validity: '-',
    note: '제네바·비엔나 협약 미가입. 현지 임시 면허 별도 취득 필요',
  },
  {
    country: '캐나다',
    available: '사용 가능',
    validity: '입국 후 최대 3~6개월',
    note: '주(Province)마다 규정 상이, IDP 소지 권장',
  },
  {
    country: '뉴질랜드',
    available: '사용 가능',
    validity: '입국 후 최대 12개월',
    note: '좌측통행 국가, 영문 번역본 또는 IDP 필수',
  },
  {
    country: '필리핀',
    available: '사용 가능',
    validity: '입국 후 최대 90일',
    note: 'IDP와 한국 면허증 원본 함께 소지',
  },
  {
    country: '중국',
    available: '사용 불가',
    validity: '-',
    note: '제네바·비엔나 협약 미가입. 현지 임시 면허 별도 취득 필요 (시험 응시)',
  },
  {
    country: '하와이 (미국)',
    available: '사용 가능',
    validity: '입국 후 최대 1년',
    note: '한국 면허증만으로도 렌터카 가능, IDP 소지 권장',
  },
  {
    country: '괌 (미국)',
    available: '사용 가능',
    validity: '입국 후 최대 30일',
    note: '한국 면허증만으로 렌터카 가능, 30일 초과 시 괌 면허 필요',
  },
];

const drivingTips = [
  {
    title: '좌측통행 국가 대비하기',
    desc: '영국, 호주, 일본, 태국, 뉴질랜드 등은 좌측통행입니다. 우회전 시 좌측 차선으로 진입해야 하며, 라운드어바웃은 시계 방향으로 진행합니다. 출발 전 현지 교통 규칙 영상을 시청하고, 인적이 드문 도로에서 충분히 연습한 뒤 본격적으로 운전하세요.',
  },
  {
    title: '해외 자동차 보험 반드시 가입',
    desc: '국제운전면허증에는 보험이 포함되어 있지 않습니다. 렌터카 이용 시 CDW(차량 손해 면책), LI(대인 배상), TP(도난 보험)를 반드시 확인하세요. 한국에서 해외운전자보험(1일 약 2,000~5,000원)에 사전 가입하면 현지 보험보다 저렴합니다.',
  },
  {
    title: '현지 교통법규 숙지하기',
    desc: '국가마다 교통법규가 다릅니다. 유럽은 라운드어바웃(회전 교차로)이 매우 많고, 미국은 적색 신호에서 우회전이 가능한 경우가 있습니다. 음주운전 기준도 국가별로 다르니 반드시 확인하세요. 일부 국가는 주간에도 전조등 상시 점등이 의무입니다.',
  },
  {
    title: '국제운전면허증 + 국내 면허증 반드시 함께 소지',
    desc: '국제운전면허증은 단독으로 사용할 수 없습니다. 반드시 한국 국내 운전면허증 원본과 함께 소지해야 합니다. 검문 시 두 가지를 모두 제시하지 못하면 무면허 운전으로 처벌받을 수 있습니다.',
  },
  {
    title: 'GPS 네비게이션 사전 준비',
    desc: '구글 맵, 웨이즈(Waze) 등을 사전에 설치하고 오프라인 지도를 다운로드하세요. 현지 통신 환경에 따라 데이터가 불안정할 수 있으므로 오프라인 지도는 필수입니다. 내비 거치대도 미리 준비하면 안전 운전에 도움이 됩니다.',
  },
  {
    title: '유료 도로·주차 시스템 사전 파악',
    desc: '유럽의 비네트(Vignette), 미국의 톨 패스, 호주의 E-Tag 등 국가별 유료 도로 시스템이 다릅니다. 사전에 파악하지 않으면 높은 과태료가 부과될 수 있습니다. 이탈리아 ZTL, 런던 혼잡통행료 등 도시별 특수 규정도 확인하세요.',
  },
  {
    title: '비상 연락처 및 사고 대처법 준비',
    desc: '현지 경찰·구급 전화번호(유럽 112, 미국 911, 호주 000 등)를 메모해두세요. 사고 발생 시 현장 사진 촬영, 상대 운전자 정보 교환, 보험사 연락 절차는 한국과 동일합니다. 대사관·영사관 연락처도 저장해두면 긴급 상황에 도움이 됩니다.',
  },
  {
    title: '운전 피로 관리하기',
    desc: '장시간 해외 운전 시 시차와 피로에 주의하세요. 2시간마다 휴식을 취하고, 졸음이 오면 반드시 안전한 곳에 정차합니다. 유럽 고속도로의 휴게소(Aire, Rastplatz)와 미국의 Rest Area를 적극 활용하세요.',
  },
];

const rentalTips = [
  {
    title: '예약 팁',
    items: [
      '출발 2~4주 전에 온라인 예약하면 현장 예약보다 30~50% 저렴',
      '렌탈카스닷컴, 오토유럽 등 비교 사이트에서 최저가 검색',
      '성수기(7~8월, 연말)에는 최소 1개월 전 예약 필수',
      '소형차가 가격·연비·주차 모든 면에서 유리 (유럽 골목 운전 시 필수)',
      '25세 미만은 영 드라이버 추가 요금(1일 약 $10~25) 발생',
    ],
  },
  {
    title: '보험 선택 가이드',
    items: [
      'CDW (Collision Damage Waiver): 차량 손상 면책 - 필수 가입',
      'TP (Theft Protection): 도난 보험 - 유럽 여행 시 강력 권장',
      'LI (Liability Insurance): 대인·대물 배상 - 대부분 기본 포함',
      '슈퍼 CDW: 자기부담금 0원으로 낮추는 추가 보험 - 권장',
      '국내 해외운전자보험 사전 가입 시 현지 보험비 절약 가능',
      '신용카드 렌터카 보험 혜택 확인 (프리미엄 카드 한정)',
    ],
  },
  {
    title: '차량 인수 시 체크리스트',
    items: [
      '차량 외관 흠집·손상을 사진·동영상으로 꼼꼼히 촬영',
      '연료 잔량, 주행거리(마일/km), 타이어 상태 확인',
      '계기판 경고등 점검 (엔진·브레이크·ABS 등)',
      '인수 서류에 기존 손상 기록 여부 확인 후 서명',
      '비상 장비(삼각대, 반사조끼) 구비 여부 확인 (유럽 필수)',
    ],
  },
  {
    title: '반납 시 주의사항',
    items: [
      '연료 정책 확인: Full-to-Full이 가장 경제적',
      '반납 시간 초과 시 1일 추가 요금 부과 가능',
      '반납 전 차량 내·외부 사진 촬영 (분쟁 대비)',
      '다른 지점 반납(One-Way) 시 편도 요금 추가 확인',
      '반납 영수증 반드시 수령 및 보관 (최소 3개월)',
      '교통 위반 과태료는 귀국 후 신용카드로 청구될 수 있음',
    ],
  },
];

const faqItems = [
  {
    q: '국제운전면허증 발급 비용은 얼마인가요?',
    a: '2026년 기준 발급 수수료는 8,500원입니다. 여권용 사진 1매가 필요하며, 현장에서 촬영할 경우 약 5,000원이 추가됩니다. 온라인 신청 시 우편 배송비(약 3,000원)가 별도로 발생합니다. 총비용은 약 8,500~16,500원 수준입니다.',
  },
  {
    q: '국제운전면허증의 유효기간은 얼마인가요?',
    a: '국제운전면허증의 유효기간은 발급일로부터 1년입니다. 단, 국내 운전면허증의 유효기간이 1년 미만으로 남아 있으면 국내 면허 만료일까지만 유효합니다. 또한 입국일 기준으로 현지 국가에서 인정하는 기간(3개월~1년)이 별도로 적용되므로 방문국의 규정을 확인하세요.',
  },
  {
    q: '국제운전면허증을 갱신(재발급)할 수 있나요?',
    a: '국제운전면허증은 갱신 개념이 아니라 재발급입니다. 유효기간 만료 전후 관계없이 동일한 서류와 수수료(8,500원)로 새로 발급받을 수 있습니다. 기존 국제운전면허증은 새 면허 발급 시 자동으로 효력을 잃습니다.',
  },
  {
    q: '일본에서 한국 면허로 운전할 수 있나요?',
    a: '일본은 제네바 협약에 가입하지 않아 한국 국제운전면허증으로 운전할 수 없습니다. 대신 JAF(일본자동차연맹)에서 한국 면허증 일본어 번역문을 발급(약 3,000엔, 약 3만원)받으면 입국 후 최대 1년간 운전이 가능합니다. 번역문은 한국 내 JAF 대행 기관이나 일본 현지 JAF 사무소에서 발급받을 수 있습니다.',
  },
  {
    q: '국제운전면허증 없이 해외에서 운전하면 어떻게 되나요?',
    a: 'IDP가 필요한 국가에서 미소지 상태로 운전하면 무면허 운전으로 간주됩니다. 현지 경찰 검문 시 벌금 부과(국가별 상이, 수백 달러~수천 유로), 차량 압류, 현지 구금 등의 조치가 가능합니다. 또한 사고 발생 시 보험 적용이 거부될 수 있어 모든 손해를 본인이 부담해야 합니다.',
  },
  {
    q: '공항에서 당일 발급이 가능한가요?',
    a: '네, 인천국제공항 제1터미널과 제2터미널 출국장 내 경찰서 민원실에서 즉시 발급이 가능합니다. 운영시간은 06:00~21:00(연중무휴)이며, 소요시간은 약 10분입니다. 다만 출국 수속 후 시간이 촉박할 수 있으므로 가급적 사전 발급을 권장합니다. 김포공항·김해공항에서도 발급 가능하지만 평일에만 운영됩니다.',
  },
  {
    q: '국제운전면허증으로 오토바이도 운전할 수 있나요?',
    a: '국제운전면허증에는 차량 종류별 카테고리가 기재됩니다. 한국에서 2종 소형(원동기) 또는 1종 보통 이상 면허를 보유하고 있으면 해당 카테고리가 IDP에 포함됩니다. 다만 동남아 등에서 오토바이 사고가 빈번하므로 현지 오토바이 보험 가입 여부를 반드시 확인하세요. 125cc 이상 오토바이는 2종 소형면허가 필요합니다.',
  },
  {
    q: '제네바 협약과 비엔나 협약의 차이는 무엇인가요?',
    a: '제네바 협약(1949년)은 한국이 가입한 협약으로, 이 협약 가입국에서 한국 국제운전면허증을 사용할 수 있습니다. 비엔나 협약(1968년)은 유럽 중심의 협약으로, 한국은 미가입 상태이지만 대부분의 비엔나 협약 가입국은 제네바 협약도 함께 가입하고 있어 한국 IDP를 인정합니다. 다만 일부 국가(중국, 베트남 등)는 두 협약 모두 미가입이므로 IDP 사용이 불가합니다.',
  },
];

export default function InternationalDrivingPermitPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            '국제운전면허증 발급 방법 - 2026년 발급 장소·비용·필요 서류 총정리',
          description:
            '국제운전면허증 발급 장소, 비용, 필요 서류, 국가별 사용 가능 여부, 해외 운전 팁을 총정리했습니다.',
          url: `${BASE_URL}/guide/international-driving-permit`,
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
              name: '국제운전면허증 발급',
              item: `${BASE_URL}/guide/international-driving-permit`,
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
              <Link href="/" className="hover:text-amber-600">
                가이드
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              국제운전면허증 발급
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            국제운전면허증 발급 방법 총정리
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            해외 여행이나 출장에서 직접 운전하려면{' '}
            <strong>국제운전면허증(IDP, International Driving Permit)</strong>이
            필요합니다. 발급 비용은{' '}
            <strong className="text-amber-600">8,500원</strong>, 유효기간은{' '}
            <strong>1년</strong>이며, 면허시험장·경찰서·공항에서 즉시 발급받을 수
            있습니다. 2026년 기준 발급 절차, 필요 서류, 국가별 사용 가능 여부,
            해외 운전 팁, 렌터카 이용 가이드를 한눈에 정리했습니다.
          </p>
        </section>

        {/* 섹션 1: 국제운전면허증이란? */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            국제운전면허증이란?
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              국제운전면허증(IDP)은 국내 운전면허증을 기반으로 해외에서 운전할 수
              있도록 발급하는 <strong>국제 공인 번역 문서</strong>입니다. 그
              자체가 독립된 면허가 아니라, 국내 면허증의 내용을 여러 언어로
              번역·공증한 문서이므로{' '}
              <strong>반드시 국내 면허증 원본과 함께 소지</strong>해야 합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-amber-800 mb-2">
                  제네바 협약 (1949년)
                </h3>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>
                    • <strong>한국 가입 협약</strong> - 한국 IDP의 법적 근거
                  </li>
                  <li>• 약 100여 개국 가입</li>
                  <li>• 미국, 캐나다, 호주, 동남아 등 대부분 국가 포함</li>
                  <li>• IDP 유효기간: 발급일로부터 1년</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">
                  비엔나 협약 (1968년)
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    • <strong>한국 미가입</strong> - 유럽 중심 협약
                  </li>
                  <li>• 약 80여 개국 가입</li>
                  <li>
                    • 대부분 제네바 협약도 함께 가입 → 한국 IDP 인정
                  </li>
                  <li>• IDP 유효기간: 발급일로부터 3년</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-sm text-blue-700">
                <strong>핵심 포인트:</strong> 한국은 제네바 협약 가입국이므로,
                제네바 협약 가입국에서 한국 IDP를 사용할 수 있습니다. 비엔나 협약만
                가입한 국가에서는 사용이 제한될 수 있으나, 실제로 대부분의 비엔나
                협약 가입국은 제네바 협약도 함께 가입하고 있어 큰 문제가 없습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 2: 발급 자격·필요 서류·비용 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            발급 자격·필요 서류·비용
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 border-b border-gray-100">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      필요 항목
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      상세 내용
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      비고
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requiredDocs.map((doc) => (
                    <tr
                      key={doc.item}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {doc.item}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{doc.detail}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {doc.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
              * 2026년 기준. 원동기장치자전거 면허(원동기 면허)로는 국제운전면허증
              발급이 불가합니다.
            </div>
          </div>
          <div className="mt-4 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">발급 자격 요약</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>
                • <strong>면허 종류:</strong> 1종 보통, 2종 보통, 1종 대형 등
                (원동기 면허 제외)
              </li>
              <li>
                • <strong>면허 상태:</strong> 유효기간 내, 정지·취소 상태가 아닌
                면허
              </li>
              <li>
                • <strong>연령 제한:</strong> 만 18세 이상 (렌터카 이용 시 만
                21~25세 이상 요구하는 국가 있음)
              </li>
              <li>
                • <strong>대리 발급:</strong> 불가 - 반드시 본인이 직접 신청
              </li>
            </ul>
          </div>
        </section>

        {/* 섹션 3: 발급 장소별 안내 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            발급 장소별 안내
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 border-b border-gray-100">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      장소
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      소요시간
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      운영시간
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      비고
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {issuanceLocations.map((loc) => (
                    <tr
                      key={loc.place}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {loc.place}
                      </td>
                      <td className="px-4 py-3 text-center text-amber-600 font-semibold">
                        {loc.duration}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-600">
                        {loc.hours}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {loc.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
              * 인터넷 발급은 안전운전 통합민원(safedriving.or.kr)에서
              가능합니다. 공인인증서 또는 간편인증 필요.
            </div>
          </div>
          <div className="mt-4 bg-white rounded-2xl border border-gray-100 p-5">
            <h4 className="font-bold text-gray-900 mb-2">
              장소별 추천
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-amber-50 rounded-xl p-4">
                <div className="font-semibold text-amber-800 mb-1">
                  여유 있게 준비
                </div>
                <div className="text-amber-700">
                  운전면허시험장 방문 또는 인터넷 신청
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="font-semibold text-blue-800 mb-1">
                  집 근처에서 빠르게
                </div>
                <div className="text-blue-700">
                  가까운 경찰서 방문 (사전 확인)
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="font-semibold text-red-800 mb-1">
                  출국 당일 긴급
                </div>
                <div className="text-red-700">
                  인천공항 출국장 내 발급
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 섹션 4: 국가별 사용 가능 여부 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            국가별 사용 가능 여부
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 border-b border-gray-100">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      국가/지역
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      사용 가능 여부
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">
                      유효기간
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      주의사항
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countryInfo.map((item) => (
                    <tr
                      key={item.country}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {item.country}
                      </td>
                      <td
                        className={`px-4 py-3 text-center font-semibold ${
                          item.available.includes('불가')
                            ? 'text-red-500'
                            : 'text-green-600'
                        }`}
                      >
                        {item.available}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-600">
                        {item.validity}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {item.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
              * 2026년 기준 정보이며, 각 국가의 규정은 변경될 수 있으므로 출발
              전 반드시 해당 국가 대사관이나 관광청에서 최신 정보를 확인하세요.
            </div>
          </div>
          <div className="mt-4 bg-red-50 rounded-2xl p-5 border border-red-100">
            <h4 className="font-bold text-red-800 mb-2">
              IDP 사용 불가 국가 주의
            </h4>
            <p className="text-sm text-red-700 leading-relaxed">
              <strong>일본</strong>은 제네바 협약 미가입으로 IDP 사용이
              불가합니다. JAF 번역문을 별도로 발급받아야 합니다.{' '}
              <strong>중국, 베트남</strong> 등은 두 협약 모두 미가입으로 현지 임시
              면허를 별도로 취득해야 합니다. 이들 국가에서 IDP만으로 운전하면
              무면허로 처벌받을 수 있습니다.
            </p>
          </div>
        </section>

        {/* 섹션 5: 해외 운전 팁 8가지 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            해외 운전 팁 8가지
          </h2>
          <div className="space-y-4">
            {drivingTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 섹션 6: 해외 렌터카 이용 가이드 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            해외 렌터카 이용 가이드
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rentalTips.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-amber-500 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">
              렌터카 예약 전 체크리스트
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amber-700">
              <div>• 국제운전면허증 유효기간 확인</div>
              <div>• 여권 유효기간 6개월 이상 확인</div>
              <div>• 신용카드 준비 (보증금 결제용)</div>
              <div>• 렌터카 업체 연령 제한 확인</div>
              <div>• 해외운전자보험 사전 가입</div>
              <div>• 현지 교통법규·도로 상황 사전 조사</div>
            </div>
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
              해외 운전, 준비가 절반입니다
            </h2>
            <p className="text-amber-100 mb-6">
              국제운전면허증 발급과 함께 운전면허 비용, 초보운전 가이드도
              확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/driver-license-cost"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                운전면허 취득 비용
              </Link>
              <Link
                href="/guide/long-distance-driving"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                장거리 운전 체크리스트
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
