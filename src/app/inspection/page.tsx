import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 검사 일정 조회 - 정기검사·종합검사 기간 확인',
  description:
    '내 차의 자동차 검사 일정을 확인하세요. 정기검사, 종합검사 주기, 검사 비용, 과태료 정보를 한눈에 정리했습니다.',
  keywords: ['자동차 검사', '자동차 정기검사', '자동차 종합검사', '자동차 검사 기간', '자동차 검사 비용'],
  alternates: { canonical: `${BASE_URL}/inspection` },
  openGraph: {
    title: '자동차 검사 일정 조회',
    description: '자동차 정기검사·종합검사 주기, 비용, 과태료 정보를 정리했습니다.',
    url: `${BASE_URL}/inspection`,
  },
};

const inspectionSchedule = [
  { type: '비영업용 승용차', first: '신차 등록 후 4년', cycle: '2년마다', inspType: '정기검사' },
  { type: '비영업용 승합차 (9인 이하)', first: '신차 등록 후 4년', cycle: '2년마다', inspType: '정기검사' },
  { type: '비영업용 화물차', first: '신차 등록 후 3년', cycle: '2년마다', inspType: '정기검사' },
  { type: '영업용 승용차', first: '신차 등록 후 2년', cycle: '1년마다', inspType: '정기검사' },
  { type: '경형·소형 승합차 (영업용)', first: '신차 등록 후 2년', cycle: '1년마다', inspType: '정기검사' },
  { type: '사업용 대형 화물차', first: '신차 등록 후 2년', cycle: '1년마다 (6개월마다 가능)', inspType: '종합검사' },
];

const costs = [
  { item: '정기검사 (소형)', cost: '약 25,000원' },
  { item: '정기검사 (중형)', cost: '약 30,000원' },
  { item: '정기검사 (대형)', cost: '약 40,000원' },
  { item: '종합검사 (소형)', cost: '약 52,000원' },
  { item: '종합검사 (중형)', cost: '약 60,000원' },
  { item: '종합검사 (대형)', cost: '약 72,000원' },
];

const penalties = [
  { period: '검사 기간 경과', fine: '과태료 없음 (기간 내 검사 완료 시)' },
  { period: '30일 이내 지연', fine: '2만 원' },
  { period: '30일 초과 ~ 6개월', fine: '매 31일마다 1만 원 추가' },
  { period: '6개월 초과 ~ 1년', fine: '매 31일마다 2만 원 추가' },
  { period: '1년 초과 ~ 2년', fine: '매 31일마다 3만 원 추가' },
  { period: '미검사 운행 적발', fine: '30만 원 이하 과태료 + 번호판 영치 가능' },
];

const faqItems = [
  {
    q: '자동차 검사는 어디서 받나요?',
    a: '교통안전공단(TS) 검사소 또는 지정정비사업자(민간 검사소)에서 받을 수 있습니다. 한국교통안전공단 홈페이지에서 가까운 검사소를 찾을 수 있습니다.',
  },
  {
    q: '검사 유효기간 전에 미리 받을 수 있나요?',
    a: '검사 만료일 전후 31일 이내에 받으면 됩니다. 만료일 31일 전부터 검사가 가능하며, 만료일이 지나도 31일 이내에 받으면 과태료가 부과되지 않습니다.',
  },
  {
    q: '검사에 불합격하면 어떻게 되나요?',
    a: '불합격 사유를 수리한 후 재검사를 받으면 됩니다. 재검사는 불합격일로부터 정해진 기한 내에 받아야 하며, 재검사 비용은 별도로 부과됩니다.',
  },
];

export default function InspectionPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '자동차 검사 일정 조회',
          url: `${BASE_URL}/inspection`,
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

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">자동차 검사 일정</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          자동차 검사 일정 조회
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          자동차 정기검사·종합검사 주기, 비용, 과태료 정보를 정리했습니다.
        </p>

        {/* 검사 조회 CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">내 차 검사 일정 확인하기</h2>
            <p className="text-amber-100 mb-6">
              한국교통안전공단(TS)에서 차량번호로 검사 만료일을 조회할 수 있습니다.
            </p>
            <a
              href="https://www.car365.go.kr/web/contents/inspection.do"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              자동차365에서 검사 조회 →
            </a>
          </div>
        </section>

        {/* 검사 주기 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">차종별 검사 주기</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">차종</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-900">최초 검사</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-900">검사 주기</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-500">검사 종류</th>
                </tr>
              </thead>
              <tbody>
                {inspectionSchedule.map((row) => (
                  <tr key={row.type} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm text-gray-900">{row.type}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-900">{row.first}</td>
                    <td className="px-4 py-3 text-sm text-center text-amber-600 font-semibold">{row.cycle}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-500">{row.inspType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 검사 비용 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">검사 비용</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {costs.map((c) => (
              <div key={c.item} className="bg-white rounded-2xl border border-gray-100 p-4 flex justify-between items-center">
                <span className="text-sm text-gray-900">{c.item}</span>
                <span className="text-sm font-semibold text-amber-600">{c.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 검사소별로 비용이 다를 수 있으며, 재검사 시 추가 비용이 발생합니다.
          </p>
        </section>

        {/* 과태료 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">미검사 과태료</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-red-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">지연 기간</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">과태료</th>
                </tr>
              </thead>
              <tbody>
                {penalties.map((p) => (
                  <tr key={p.period} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm text-gray-900">{p.period}</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-semibold">{p.fine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0">Q.</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">
                  <span className="text-gray-400 font-bold">A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 관련 페이지 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 페이지</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: '🚨', title: '과태료·범칙금 조회', href: '/calculator/penalty' },
              { emoji: '📢', title: '리콜 정보 조회', href: '/recall' },
              { emoji: '🏷️', title: '자동차세 계산기', href: '/calculator/car-tax' },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-amber-200 transition-all text-center"
              >
                <div className="text-3xl mb-2">{p.emoji}</div>
                <div className="font-semibold text-gray-900">{p.title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
