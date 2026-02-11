import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 명의이전 방법 - 2026년 비용·서류·절차 총정리',
  description:
    '자동차 명의이전 절차, 필요 서류, 비용(취등록세·공채·수수료)을 정리했습니다. 개인 간 거래, 딜러 구매, 가족 간 이전 등 상황별 가이드를 확인하세요.',
  keywords: [
    '자동차 명의이전',
    '차량 명의이전',
    '명의이전 비용',
    '명의이전 서류',
    '명의이전 절차',
    '중고차 명의이전',
    '가족 명의이전',
    '자동차 이전 등록',
  ],
  alternates: { canonical: `${BASE_URL}/guide/ownership-transfer` },
  openGraph: {
    title: '자동차 명의이전 방법 - 2026년 비용·서류·절차 총정리',
    description: '자동차 명의이전 절차, 필요 서류, 비용을 정리했습니다.',
    url: `${BASE_URL}/guide/ownership-transfer`,
    type: 'website',
  },
};

const transferSteps = [
  { step: '1', title: '매매 계약서 작성', desc: '매도인과 매수인이 자동차 매매 계약서를 작성합니다. 차량 정보(차종, 연식, 차대번호), 매매 금액, 인수일을 명시합니다.', timing: '거래 당일' },
  { step: '2', title: '자동차보험 가입', desc: '매수인(새 소유자)이 자동차보험에 가입합니다. 보험 미가입 상태로는 명의이전이 불가합니다.', timing: '이전 등록 전' },
  { step: '3', title: '관할 관청 방문', desc: '차량 등록지 관할 시·군·구청 차량등록과를 방문합니다. 온라인(자동차민원 대국민포털)으로도 일부 절차 가능합니다.', timing: '인수 후 15일 이내' },
  { step: '4', title: '서류 제출', desc: '매매계약서, 양도인·양수인 신분증, 인감증명서, 자동차등록증 등 필요 서류를 제출합니다.', timing: '방문 시' },
  { step: '5', title: '비용 납부', desc: '취득세(차량 가격의 7%), 공채 매입비, 인지·증지대, 번호판 비용 등을 납부합니다.', timing: '서류 제출 시' },
  { step: '6', title: '명의이전 완료', desc: '서류 검토 후 즉시 명의이전이 완료됩니다. 새 자동차등록증을 발급받습니다.', timing: '당일 완료' },
];

const requiredDocs = {
  seller: [
    { doc: '자동차등록증 원본', required: true },
    { doc: '신분증 (주민등록증/운전면허증)', required: true },
    { doc: '인감증명서 1통', required: true },
    { doc: '인감도장', required: true },
    { doc: '자동차세 완납 증명서', required: false },
  ],
  buyer: [
    { doc: '신분증 (주민등록증/운전면허증)', required: true },
    { doc: '인감증명서 1통', required: true },
    { doc: '인감도장', required: true },
    { doc: '자동차보험 가입 증명서', required: true },
    { doc: '주민등록등본 1통', required: false },
  ],
  common: [
    { doc: '자동차 매매 계약서', required: true },
    { doc: '이전등록 신청서 (관청에서 작성)', required: true },
  ],
};

const costBreakdown = [
  { item: '취득세', formula: '차량 시가표준액 × 7%', example1000: '약 70만 원', example2000: '약 140만 원', example3000: '약 210만 원', note: '경차 면제, 전기차·하이브리드 감면' },
  { item: '공채 매입비', formula: '지역별 상이 (약 2~5%)', example1000: '약 20~50만 원', example2000: '약 40~100만 원', example3000: '약 60~150만 원', note: '할인 매도 시 실부담 적음' },
  { item: '인지·증지대', formula: '정액', example1000: '약 1만 원', example2000: '약 1만 원', example3000: '약 1만 원', note: '등록 수수료' },
  { item: '번호판 비용', formula: '정액 (교체 시)', example1000: '약 1~2만 원', example2000: '약 1~2만 원', example3000: '약 1~2만 원', note: '기존 번호판 유지 시 불필요' },
];

const specialCases = [
  {
    emoji: '👨‍👩‍👧',
    title: '가족 간 명의이전',
    desc: '가족 간 이전도 일반 명의이전과 동일한 절차입니다. 취득세는 시가표준액 기준으로 부과되며, 매매 금액과 무관합니다. 다만 배우자 간 이전 시 일부 지자체에서 취득세 감면 혜택이 있을 수 있습니다.',
    tip: '가족 간 거래라도 매매계약서 작성 필수',
  },
  {
    emoji: '🏪',
    title: '딜러(매매상) 구매',
    desc: '중고차 딜러에서 구매하면 딜러가 명의이전을 대행해주는 것이 일반적입니다. 대행 수수료(약 3~10만 원)가 추가되지만, 서류 준비와 관청 방문 부담이 줄어듭니다.',
    tip: '대행 수수료와 포함 서비스 범위 사전 확인',
  },
  {
    emoji: '🤝',
    title: '개인 간 직거래',
    desc: '개인 간 직거래 시에는 매수인이 직접 명의이전을 진행해야 합니다. 매매계약서를 꼼꼼히 작성하고, 차량 상태(사고 이력, 압류, 저당 여부)를 반드시 확인하세요.',
    tip: '자동차365(car365.go.kr)에서 차량 이력 조회 가능',
  },
  {
    emoji: '🏦',
    title: '할부·리스 차량 이전',
    desc: '할부금이 남아있거나 리스 차량인 경우, 금융사(캐피탈·리스사)의 동의가 필요합니다. 잔여 할부금을 완납하거나 금융사와 협의하여 승계 절차를 진행해야 합니다.',
    tip: '금융사 동의 없이 이전 불가',
  },
];

const penalties = [
  { period: '15일 이내', penalty: '없음 (정상 기한)', note: '인수일로부터 15일 이내 이전 등록 완료' },
  { period: '16~30일', penalty: '약 10만 원', note: '지연 과태료 부과 시작' },
  { period: '31~60일', penalty: '약 20만 원', note: '과태료 누적' },
  { period: '60일 초과', penalty: '약 50만 원', note: '최대 과태료 + 추가 불이익 가능' },
];

const faqItems = [
  {
    q: '명의이전은 어디서 하나요?',
    a: '차량 등록지 관할 시·군·구청 차량등록과에서 할 수 있습니다. 또는 자동차민원 대국민포털(ecar.go.kr)에서 일부 온라인 처리가 가능합니다. 딜러 구매 시에는 딜러가 대행하는 것이 일반적입니다.',
  },
  {
    q: '명의이전 비용은 누가 부담하나요?',
    a: '일반적으로 매수인(새 소유자)이 부담합니다. 취득세, 공채 매입비, 등록 수수료 등 모든 이전 비용은 매수인이 납부합니다. 다만 매도인과 매수인 간 합의로 분담할 수도 있습니다.',
  },
  {
    q: '명의이전 기한을 넘기면 어떻게 되나요?',
    a: '인수일로부터 15일 이내에 이전 등록을 완료해야 합니다. 기한을 넘기면 10만~50만 원의 과태료가 부과됩니다. 장기간 미이전 시 자동차세 체납, 범칙금 전가 등 추가 문제가 발생할 수 있습니다.',
  },
  {
    q: '온라인으로 명의이전이 가능한가요?',
    a: '자동차민원 대국민포털(ecar.go.kr)에서 일부 절차를 온라인으로 처리할 수 있지만, 완전한 온라인 이전은 아직 제한적입니다. 서류 제출과 비용 납부는 관할 관청 방문이 필요한 경우가 많습니다.',
  },
  {
    q: '압류·저당이 있는 차량도 명의이전이 가능한가요?',
    a: '압류가 있는 차량은 압류 해제 후에만 명의이전이 가능합니다. 저당(할부)이 설정된 차량은 금융사의 동의가 필요합니다. 구매 전 자동차365에서 차량 이력을 반드시 확인하세요.',
  },
];

export default function OwnershipTransferPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '자동차 명의이전 방법 - 2026년 비용·서류·절차 총정리',
          description: '자동차 명의이전 절차, 필요 서류, 비용을 정리했습니다.',
          url: `${BASE_URL}/guide/ownership-transfer`,
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
            { '@type': 'ListItem', position: 2, name: '자동차 명의이전 방법', item: `${BASE_URL}/guide/ownership-transfer` },
          ],
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">홈</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">자동차 명의이전 방법</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자동차 명의이전 방법
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            중고차를 구매하거나 가족 간 차량을 이전할 때 반드시 거쳐야 하는 명의이전.
            인수일로부터 <strong>15일 이내</strong>에 완료해야 하며, 기한을 넘기면 과태료가 부과됩니다.
            절차, 필요 서류, 비용을 한눈에 정리했습니다.
          </p>
        </section>

        {/* 절차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            명의이전 절차 (6단계)
          </h2>
          <div className="space-y-4">
            {transferSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{item.timing}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 필요 서류 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            필요 서류
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* 매도인 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">📤</span> 매도인 (파는 사람)
              </h3>
              <ul className="space-y-2">
                {requiredDocs.seller.map((item) => (
                  <li key={item.doc} className="flex items-center gap-2 text-sm">
                    <span className={`w-5 h-5 rounded flex items-center justify-center text-xs flex-shrink-0 ${item.required ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400'}`}>
                      {item.required ? '필' : '선'}
                    </span>
                    <span className={item.required ? 'text-gray-900' : 'text-gray-500'}>{item.doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* 매수인 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">📥</span> 매수인 (사는 사람)
              </h3>
              <ul className="space-y-2">
                {requiredDocs.buyer.map((item) => (
                  <li key={item.doc} className="flex items-center gap-2 text-sm">
                    <span className={`w-5 h-5 rounded flex items-center justify-center text-xs flex-shrink-0 ${item.required ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400'}`}>
                      {item.required ? '필' : '선'}
                    </span>
                    <span className={item.required ? 'text-gray-900' : 'text-gray-500'}>{item.doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">공통 서류</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              {requiredDocs.common.map((item) => (
                <li key={item.doc}>• {item.doc}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 비용 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            명의이전 비용
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">항목</th>
                    <th className="px-4 py-3 text-right font-semibold">1,000만 원</th>
                    <th className="px-4 py-3 text-right font-semibold">2,000만 원</th>
                    <th className="px-4 py-3 text-right font-semibold">3,000만 원</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {costBreakdown.map((row) => (
                    <tr key={row.item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.example1000}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.example2000}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.example3000}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50 font-bold">
                    <td className="px-4 py-3 text-gray-900">합계 (예상)</td>
                    <td className="px-4 py-3 text-right text-amber-600">약 92~123만 원</td>
                    <td className="px-4 py-3 text-right text-amber-600">약 182~243만 원</td>
                    <td className="px-4 py-3 text-right text-amber-600">약 272~363만 원</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">지역·차종에 따라 상이</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 비영업용 승용차 기준. 경차(1000cc 미만)는 취득세 면제. 전기차·하이브리드는 취득세 감면 혜택 적용 가능.
          </p>
        </section>

        {/* 상황별 가이드 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            상황별 명의이전 가이드
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialCases.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <p className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg inline-block">
                  TIP: {item.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 지연 과태료 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            명의이전 지연 시 과태료
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">지연 기간</th>
                    <th className="px-4 py-3 text-right font-semibold">과태료</th>
                    <th className="px-4 py-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {penalties.map((row) => (
                    <tr key={row.period} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.period}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${row.penalty === '없음 (정상 기한)' ? 'text-green-600' : 'text-red-600'}`}>
                        {row.penalty}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              명의이전 비용을 미리 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              차량 가격과 유형을 입력하면 취득세, 공채, 총비용을 자동으로 계산합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator/registration-tax"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                취등록세 계산하기
              </Link>
              <Link
                href="/calculator/registration-tax/used-car"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                중고차 취등록세 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
