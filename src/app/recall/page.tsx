import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '자동차 리콜 정보 조회 - 내 차 리콜 대상 확인',
  description:
    '내 차가 리콜 대상인지 확인하세요. 자동차 리콜이란 무엇인지, 리콜 조회 방법, 주요 리콜 사례를 정리했습니다.',
  keywords: ['자동차 리콜', '리콜 조회', '자동차 리콜 확인', '리콜 대상 조회', '자동차365 리콜'],
  alternates: { canonical: `${BASE_URL}/recall` },
  openGraph: {
    title: '자동차 리콜 정보 조회',
    description: '내 차가 리콜 대상인지 확인하세요. 리콜 조회 방법과 주요 리콜 사례를 정리했습니다.',
    url: `${BASE_URL}/recall`,
  },
};

const recentRecalls = [
  { brand: '현대', model: '아이오닉 5', reason: '배터리 관리 시스템(BMS) 소프트웨어 오류', period: '2022~2024년식' },
  { brand: '기아', model: 'EV6', reason: '전동식 파워 스티어링 제어 모듈 결함', period: '2022~2023년식' },
  { brand: 'BMW', model: '3시리즈', reason: 'EGR 쿨러 냉각수 누출', period: '2019~2021년식' },
  { brand: '벤츠', model: 'E-Class', reason: '에어백 전개 오류 가능성', period: '2020~2022년식' },
  { brand: '테슬라', model: '모델 Y', reason: '조향 연결부 볼트 체결 불량', period: '2023년식 일부' },
];

const faqItems = [
  {
    q: '리콜은 비용이 드나요?',
    a: '아닙니다. 리콜은 제조사의 결함으로 인한 것이므로 모든 수리 비용은 제조사가 부담합니다. 부품 교체, 수리, 점검 모두 무상입니다.',
  },
  {
    q: '리콜 통보를 받지 못했는데 어떻게 확인하나요?',
    a: '자동차365(car365.go.kr)에서 차량번호 또는 차대번호로 리콜 대상 여부를 조회할 수 있습니다.',
  },
  {
    q: '리콜을 받지 않으면 어떻게 되나요?',
    a: '리콜은 강제가 아닌 권고 사항이지만, 안전과 직결되는 문제이므로 반드시 받는 것이 좋습니다. 리콜을 받지 않아 발생한 사고는 보상을 받기 어려울 수 있습니다.',
  },
  {
    q: '리콜 기간이 지났는데 수리 받을 수 있나요?',
    a: '리콜에는 기간 제한이 없습니다. 리콜 공지 후 언제든지 가까운 제조사 서비스센터에서 무상 수리를 받을 수 있습니다.',
  },
];

export default function RecallPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '자동차 리콜 정보 조회',
          url: `${BASE_URL}/recall`,
          description: '내 차가 리콜 대상인지 확인하세요.',
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
          <span className="text-gray-900">리콜 정보 조회</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          자동차 리콜 정보 조회
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          내 차가 리콜 대상인지 확인하고, 무상 수리를 받으세요.
        </p>

        {/* 리콜 조회 CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">내 차 리콜 대상 확인하기</h2>
            <p className="text-amber-100 mb-6">
              국토교통부 자동차365에서 차량번호 또는 차대번호로 조회할 수 있습니다.
            </p>
            <a
              href="https://www.car365.go.kr/web/contents/recall.do"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              자동차365에서 리콜 조회 →
            </a>
          </div>
        </section>

        {/* 리콜이란 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">자동차 리콜이란?</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              자동차 리콜은 제조사가 설계·제조 과정에서 발생한 결함을 발견하여,
              해당 차량을 무상으로 수리하거나 부품을 교체하는 제도입니다.
              국토교통부가 관리·감독하며, 제조사가 자발적으로 실시하거나 국토교통부의 시정 명령에 따라 진행됩니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl mb-2">🔧</div>
                <div className="font-semibold text-gray-900">무상 수리</div>
                <div className="text-sm text-gray-500 mt-1">부품·공임 모두 무료</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl mb-2">📋</div>
                <div className="font-semibold text-gray-900">기간 무제한</div>
                <div className="text-sm text-gray-500 mt-1">공지 후 언제든 가능</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl mb-2">🏭</div>
                <div className="font-semibold text-gray-900">공식 서비스센터</div>
                <div className="text-sm text-gray-500 mt-1">가까운 서비스센터 방문</div>
              </div>
            </div>
          </div>
        </section>

        {/* 최근 주요 리콜 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">최근 주요 리콜 사례</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">브랜드</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">차종</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">리콜 사유</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-500">대상 연식</th>
                </tr>
              </thead>
              <tbody>
                {recentRecalls.map((r, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">{r.brand}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{r.model}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{r.reason}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{r.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ※ 예시 데이터이며, 최신 리콜 정보는 자동차365에서 확인하세요.
          </p>
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
              { emoji: '🔍', title: '자동차 검사 일정', href: '/inspection' },
              { emoji: '🏷️', title: '자동차세 계산기', href: '/calculator/car-tax' },
              { emoji: '📉', title: '감가상각 계산기', href: '/calculator/depreciation' },
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
