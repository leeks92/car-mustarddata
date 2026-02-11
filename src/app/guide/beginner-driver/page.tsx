import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '초보운전 필수 가이드 - 2026년 면허 취득 후 알아야 할 모든 것',
  description:
    '초보운전자를 위한 필수 가이드입니다. 첫 차 구매 팁, 보험 가입, 주차 요령, 고속도로 진입, 사고 대처법 등 초보운전에 필요한 모든 정보를 정리했습니다.',
  keywords: [
    '초보운전',
    '초보운전 가이드',
    '초보운전 팁',
    '첫차 구매',
    '초보운전 보험',
    '초보운전 주차',
    '초보운전 고속도로',
    '면허 취득 후',
    '초보운전 사고',
  ],
  alternates: { canonical: `${BASE_URL}/guide/beginner-driver` },
  openGraph: {
    title: '초보운전 필수 가이드 - 2026년 면허 취득 후 알아야 할 모든 것',
    description: '초보운전자를 위한 필수 가이드. 첫 차 구매부터 사고 대처까지.',
    url: `${BASE_URL}/guide/beginner-driver`,
    type: 'website',
  },
};

const firstCarTips = [
  { emoji: '🚗', title: '중고 경차·준중형 추천', desc: '첫 차는 접촉 사고 가능성이 높으므로 중고 경차나 준중형이 경제적입니다. 모닝, 레이, 아반떼 등이 인기입니다. 차량 가격이 낮으면 보험료도 저렴합니다.' },
  { emoji: '🔄', title: '오토(자동) 변속기 선택', desc: '초보 운전자에게는 오토(자동) 변속기가 훨씬 편합니다. 클러치 조작 없이 브레이크와 가속 페달만 사용하므로 운전에 집중할 수 있습니다.' },
  { emoji: '🛡️', title: '안전 사양 확인', desc: '후방 카메라, 주차 센서, 차선 이탈 경고, 전방 충돌 방지 등 안전 사양이 있는 차량을 선택하면 사고 위험을 줄일 수 있습니다.' },
  { emoji: '📏', title: '차체 크기 고려', desc: '주차와 골목길 운전이 쉬운 소형~준중형 차량이 초보에게 유리합니다. SUV나 대형차는 차체 감각을 익힌 후 선택하는 것이 좋습니다.' },
];

const insuranceTips = [
  { title: '종합보험 필수 가입', desc: '초보 운전자는 사고 확률이 높으므로 자기차량손해를 포함한 종합보험에 가입하는 것이 안전합니다. 의무보험만으로는 내 차 수리비를 보상받을 수 없습니다.' },
  { title: '운전자 범위 설정', desc: '본인만 운전한다면 "1인 한정"으로 설정하면 보험료가 저렴합니다. 가족이 함께 운전한다면 "가족 한정"을 선택하세요.' },
  { title: '블랙박스 할인 활용', desc: '블랙박스를 설치하면 보험료 2~5% 할인을 받을 수 있습니다. 사고 시 증거 확보에도 필수입니다.' },
  { title: '마일리지 특약 검토', desc: '주행거리가 적다면 마일리지 특약으로 최대 30%까지 할인받을 수 있습니다. 주말에만 운전하는 경우 유리합니다.' },
];

const drivingEssentials = [
  {
    category: '기본 운전',
    items: [
      { title: '사이드미러·룸미러 조정', desc: '출발 전 사이드미러와 룸미러를 반드시 조정합니다. 사각지대를 최소화하는 각도로 맞추세요.' },
      { title: '안전거리 유지', desc: '앞차와 최소 2~3초 간격(시속 60km 기준 약 30~50m)을 유지합니다. 비가 오면 1.5배로 늘리세요.' },
      { title: '방향지시등 습관화', desc: '차선 변경, 회전, 주차 시 반드시 방향지시등을 켭니다. 최소 3초 전에 켜는 것이 안전합니다.' },
      { title: '급가속·급정거 자제', desc: '부드러운 가속과 감속이 안전하고 연비에도 좋습니다. 브레이크는 여유 있게 밟으세요.' },
    ],
  },
  {
    category: '주차',
    items: [
      { title: '후방 카메라 활용', desc: '후방 카메라가 있다면 적극 활용하되, 사이드미러와 직접 확인도 병행하세요.' },
      { title: '넓은 주차장에서 연습', desc: '처음에는 대형마트 옥상 등 넓은 주차장에서 연습합니다. 양옆에 차가 없는 곳에서 시작하세요.' },
      { title: '평행주차 요령', desc: '옆 차와 나란히 선 후 핸들을 끝까지 돌려 후진 → 45도 각도에서 반대로 핸들을 돌려 진입합니다. 연습이 가장 중요합니다.' },
      { title: '주차 센서 신뢰하되 과신 금지', desc: '주차 센서는 일부 장애물을 감지하지 못할 수 있습니다. 센서 경고음과 직접 확인을 병행하세요.' },
    ],
  },
  {
    category: '고속도로',
    items: [
      { title: '합류 시 충분히 가속', desc: '고속도로 진입 시 가속 차선에서 충분히 속도를 올린 후(80km/h 이상) 합류합니다. 느린 속도로 합류하면 위험합니다.' },
      { title: '주행 차선 유지', desc: '1차선(추월 차선)은 추월 시에만 사용하고, 평소에는 2~3차선(주행 차선)을 이용합니다.' },
      { title: '졸음운전 주의', desc: '2시간마다 휴게소에서 휴식합니다. 졸음이 오면 즉시 갓길이 아닌 휴게소나 졸음쉼터에 정차하세요.' },
      { title: '안전거리 확보', desc: '고속도로에서는 앞차와 100m 이상(시속 100km 기준) 안전거리를 유지합니다.' },
    ],
  },
];

const accidentGuide = [
  { step: '1', title: '안전 확보', desc: '비상등을 켜고, 가능하면 차량을 안전한 곳(갓길, 주차장)으로 이동합니다. 고속도로에서는 차량 뒤 100m 지점에 삼각대를 설치합니다.' },
  { step: '2', title: '부상자 확인', desc: '부상자가 있으면 즉시 119에 신고합니다. 부상자를 함부로 이동시키지 마세요.' },
  { step: '3', title: '경찰 신고 (112)', desc: '사고 현장을 보존하고 경찰에 신고합니다. 경미한 접촉 사고라도 신고하는 것이 보험 처리에 유리합니다.' },
  { step: '4', title: '사고 현장 촬영', desc: '차량 손상 부위, 상대 차량, 사고 현장 전체를 사진·동영상으로 촬영합니다. 블랙박스 영상도 보존하세요.' },
  { step: '5', title: '상대방 정보 교환', desc: '상대 운전자의 이름, 연락처, 차량 번호, 보험사를 확인합니다. 목격자가 있으면 연락처를 받아두세요.' },
  { step: '6', title: '보험사 접수', desc: '자신의 보험사에 사고를 접수합니다. 보험사 긴급출동 서비스를 이용하면 현장에서 도움을 받을 수 있습니다.' },
];

const faqItems = [
  {
    q: '초보운전 스티커는 꼭 붙여야 하나요?',
    a: '법적 의무는 아니지만, 붙이는 것을 강력히 권장합니다. 주변 차량이 양보해주고, 사고 시 상대방의 이해를 구하기 쉽습니다. 면허 취득 후 1~2년간은 붙여두는 것이 좋습니다.',
  },
  {
    q: '초보운전자 보험료는 얼마나 비싼가요?',
    a: '20대 초보 운전자(경력 1~2년)의 종합보험료는 연 약 120~200만 원으로, 경력 10년 이상 운전자(약 60~100만 원) 대비 약 2배 비쌉니다. 무사고 경력이 쌓이면 매년 보험료가 낮아집니다.',
  },
  {
    q: '첫 차로 SUV를 사도 되나요?',
    a: '가능하지만, 초보에게는 소형~준중형 세단이 더 유리합니다. SUV는 차체가 크고 사각지대가 넓어 주차와 골목길 운전이 어렵습니다. 운전에 익숙해진 후 SUV로 바꾸는 것이 안전합니다.',
  },
  {
    q: '운전 연수를 받는 것이 좋나요?',
    a: '면허 취득 후 실제 도로 운전에 불안하다면 운전 연수를 받는 것이 좋습니다. 전문 강사와 함께 실제 도로에서 연습하면 자신감이 빨리 붙습니다. 보통 10~20시간 연수를 받으면 기본적인 도로 운전이 가능해집니다.',
  },
  {
    q: '초보 때 사고가 나면 보험료가 많이 오르나요?',
    a: '사고 시 보험료 할증이 적용됩니다. 1건 사고 시 다음 해 보험료가 약 10~20% 올라갈 수 있습니다. 경미한 사고는 자비 처리하는 것이 장기적으로 유리할 수 있으므로, 수리비와 할증 금액을 비교해보세요.',
  },
];

export default function BeginnerDriverPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '초보운전 필수 가이드 - 2026년 면허 취득 후 알아야 할 모든 것',
          description: '초보운전자를 위한 필수 가이드. 첫 차 구매부터 사고 대처까지.',
          url: `${BASE_URL}/guide/beginner-driver`,
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
            { '@type': 'ListItem', position: 2, name: '초보운전 가이드', item: `${BASE_URL}/guide/beginner-driver` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">초보운전 가이드</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            초보운전 필수 가이드
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            면허를 취득하고 처음 도로에 나서면 학원에서 배우지 못한 것들이 많습니다.
            첫 차 선택, 보험 가입, 주차 요령, 고속도로 진입, 사고 대처법까지
            <strong> 초보운전자가 알아야 할 모든 것</strong>을 정리했습니다.
          </p>
        </section>

        {/* 첫 차 선택 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            첫 차 선택 가이드
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {firstCarTips.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 보험 가이드 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            초보운전 보험 가이드
          </h2>
          <div className="space-y-4">
            {insuranceTips.map((tip, index) => (
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
          <div className="mt-4">
            <Link
              href="/guide/car-insurance"
              className="text-amber-600 font-semibold text-sm hover:text-amber-700"
            >
              자동차보험료 비교 가이드 보기 →
            </Link>
          </div>
        </section>

        {/* 운전 필수 지식 */}
        {drivingEssentials.map((section) => (
          <section key={section.category} className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {section.category === '기본 운전' && '기본 운전 요령'}
              {section.category === '주차' && '주차 요령'}
              {section.category === '고속도로' && '고속도로 운전 요령'}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* 사고 대처법 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            교통사고 발생 시 대처법
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <ol className="space-y-4">
              {accidentGuide.map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-4 bg-red-50 rounded-2xl p-5 border border-red-100">
            <h4 className="font-bold text-red-800 mb-2">절대 하지 말아야 할 것</h4>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• 뺑소니 (사고 후 도주) — 형사 처벌 대상</li>
              <li>• 현장에서 합의 — 나중에 분쟁 발생 가능, 보험사를 통해 처리</li>
              <li>• 사고 현장 임의 이동 — 증거 보존을 위해 촬영 후 이동</li>
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
              자동차 관련 비용을 미리 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              보험료, 취등록세, 할부금, 유류비 등 자동차 비용을 한번에 계산합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/guide/new-car-buying"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                신차 구매 가이드
              </Link>
              <Link
                href="/calculator/installment"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                할부금 계산하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
