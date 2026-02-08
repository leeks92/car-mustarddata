import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/urls';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '중고차 취등록세 계산 - 2026년 중고차 이전 등록 비용 총정리',
  description:
    '중고차 구매 시 취득세, 이전 등록비, 공채 매입비 등 총비용을 정리했습니다. 차량 가격별 취등록세 예시와 절약 방법을 확인하세요.',
  keywords: [
    '중고차 취등록세',
    '중고차 이전 등록비',
    '중고차 취득세',
    '중고차 구매 비용',
    '중고차 명의이전',
    '중고차 등록비용',
  ],
  alternates: {
    canonical: `${BASE_URL}/calculator/registration-tax/used-car`,
  },
  openGraph: {
    title: '중고차 취등록세 계산 - 2026년 중고차 이전 등록 비용 총정리',
    description:
      '중고차 구매 시 취득세, 이전 등록비, 공채 매입비 등 총비용을 정리했습니다.',
    url: `${BASE_URL}/calculator/registration-tax/used-car`,
    type: 'website',
  },
};

interface UsedCarExample {
  label: string;
  price: number;
  acquisitionTax: number;
  bond: number;
  stampFee: number;
  plateFee: number;
  total: number;
}

const EXAMPLES: UsedCarExample[] = [
  {
    label: '500만원 (경차·소형)',
    price: 500,
    acquisitionTax: 35,
    bond: 15,
    stampFee: 1,
    plateFee: 2,
    total: 53,
  },
  {
    label: '1,000만원 (준중형)',
    price: 1000,
    acquisitionTax: 70,
    bond: 30,
    stampFee: 1,
    plateFee: 2,
    total: 103,
  },
  {
    label: '1,500만원 (중형)',
    price: 1500,
    acquisitionTax: 105,
    bond: 45,
    stampFee: 1,
    plateFee: 2,
    total: 153,
  },
  {
    label: '2,000만원 (중형·SUV)',
    price: 2000,
    acquisitionTax: 140,
    bond: 60,
    stampFee: 1,
    plateFee: 2,
    total: 203,
  },
  {
    label: '3,000만원 (대형·수입)',
    price: 3000,
    acquisitionTax: 210,
    bond: 90,
    stampFee: 1,
    plateFee: 2,
    total: 303,
  },
  {
    label: '5,000만원 (수입 세단)',
    price: 5000,
    acquisitionTax: 350,
    bond: 150,
    stampFee: 1,
    plateFee: 2,
    total: 503,
  },
];

export default function UsedCarRegistrationTaxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '중고차 취등록세 계산 - 2026년 중고차 이전 등록 비용 총정리',
    description:
      '중고차 구매 시 취득세, 이전 등록비, 공채 매입비 등 총비용을 정리했습니다.',
    url: `${BASE_URL}/calculator/registration-tax/used-car`,
    publisher: {
      '@type': 'Organization',
      name: '머스타드데이터',
      url: BASE_URL,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '중고차 취등록세는 어떤 기준으로 계산되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '중고차 취등록세는 차량 시가표준액(과세표준)의 7%로 계산됩니다. 시가표준액은 국세청에서 차량 모델, 연식, 등급 등을 기반으로 산정한 금액입니다.',
        },
      },
      {
        '@type': 'Question',
        name: '중고차를 직거래하면 취등록세를 절약할 수 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '아닙니다. 취등록세는 매매 방식(직거래, 딜러)에 관계없이 시가표준액 기준으로 동일하게 부과됩니다. 다만 경차(1000cc 미만)는 취득세 면제, 하이브리드·전기차는 감면 혜택이 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '명의이전 기한을 넘기면 어떻게 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '중고차 구매(인수) 후 15일 이내에 이전 등록을 완료해야 합니다. 기한을 넘기면 과태료(10만~50만원)가 부과되며, 하루 지날 때마다 추가 과태료가 발생할 수 있습니다.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '취등록세 계산기',
        item: `${BASE_URL}/calculator/registration-tax`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '중고차 취등록세',
        item: `${BASE_URL}/calculator/registration-tax/used-car`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

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
              <Link
                href="/calculator/registration-tax"
                className="hover:text-amber-600"
              >
                취등록세 계산기
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">중고차 취등록세</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            중고차 취등록세 계산
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            중고차를 구매하면 취득세·이전 등록비·공채 매입비 등 다양한 부대비용이
            발생합니다. 차량 가격 대비 약 <strong>7~10%</strong>의 추가 비용이
            필요하므로 예산에 반드시 포함해야 합니다.
          </p>
        </section>

        {/* 비용 구성 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            중고차 이전 등록 비용 구성
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                emoji: '💰',
                title: '취득세 (7%)',
                desc: '시가표준액의 7%. 중고차 비용의 가장 큰 비중을 차지합니다. 경차는 면제, 하이브리드·전기차는 감면 혜택이 있습니다.',
              },
              {
                emoji: '📄',
                title: '공채 매입비 (약 2~3%)',
                desc: '지역에 따라 도시철도채권 또는 지역개발채권을 매입해야 합니다. 매입 후 즉시 할인 매도하는 것이 일반적입니다.',
              },
              {
                emoji: '📝',
                title: '인지·증지대',
                desc: '등록신청 수수료로 약 1만원 내외입니다. 관할 관청에서 납부합니다.',
              },
              {
                emoji: '🔢',
                title: '번호판 비용',
                desc: '신규 번호판 발급 시 약 1~2만원이 필요합니다. 기존 번호판을 유지하면 발생하지 않을 수 있습니다.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 가격대별 취등록세 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            가격대별 중고차 취등록세 예시
          </h2>
          <p className="text-gray-600 mb-4">
            아래는 차량 가격에 따른 대략적인 취등록세 예시입니다. 공채는 할인
            매도 기준이며, 실제 금액은 지역 및 차종에 따라 달라질 수 있습니다.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-50 text-gray-900">
                    <th className="px-4 py-3 text-left font-semibold">
                      차량 가격
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      취득세 (7%)
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      공채 (약3%)
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      인지·증지
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      번호판
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-amber-600">
                      합계
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {EXAMPLES.map((ex) => (
                    <tr key={ex.label} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {ex.label}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {ex.acquisitionTax}만원
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {ex.bond}만원
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {ex.stampFee}만원
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {ex.plateFee}만원
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-amber-600">
                        약 {ex.total}만원
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 경차(1000cc 미만)는 취득세 면제. 전기차·하이브리드는 취득세 감면
            혜택 적용 가능
          </p>
        </section>

        {/* 감면 혜택 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            중고차 취등록세 감면 대상
          </h2>
          <div className="space-y-4">
            {[
              {
                emoji: '🚙',
                title: '경차 (1000cc 미만)',
                desc: '취득세 전액 면제. 모닝, 레이, 스파크 등이 해당됩니다.',
              },
              {
                emoji: '⚡',
                title: '전기차',
                desc: '취득세 최대 140만원 감면 (2026년 기준). 테슬라, 아이오닉5, EV6 등.',
              },
              {
                emoji: '🌿',
                title: '하이브리드',
                desc: '취득세 최대 40만원 감면 (2026년 기준). 쏘나타 HEV, 그랜저 HEV 등.',
              },
              {
                emoji: '♿',
                title: '장애인 차량',
                desc: '배기량 2000cc 이하(승용), 승합·화물차 취득세 면제.',
              },
              {
                emoji: '👨‍👩‍👧‍👦',
                title: '다자녀 가구 (3자녀 이상)',
                desc: '취득세 감면 혜택 적용 (지자체별 차이 있음).',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="text-2xl flex-shrink-0">{item.emoji}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 명의이전 절차 */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            중고차 명의이전 절차
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <ol className="space-y-4">
              {[
                {
                  step: '1',
                  title: '매매 계약 체결',
                  desc: '매도인과 매수인이 차량 매매 계약서를 작성합니다.',
                },
                {
                  step: '2',
                  title: '보험 가입',
                  desc: '자동차 보험에 가입해야 이전 등록이 가능합니다.',
                },
                {
                  step: '3',
                  title: '관할 관청 방문',
                  desc: '차량 등록지 관할 시·군·구청 차량등록과를 방문합니다.',
                },
                {
                  step: '4',
                  title: '서류 제출 및 비용 납부',
                  desc: '매매계약서, 인감증명서, 신분증 등을 제출하고 취득세·공채 등을 납부합니다.',
                },
                {
                  step: '5',
                  title: '이전 등록 완료',
                  desc: '서류 검토 후 즉시 명의이전이 완료됩니다. 인수일로부터 15일 이내에 완료해야 합니다.',
                },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
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
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {[
              {
                q: '중고차 취등록세는 어떤 기준으로 계산되나요?',
                a: '중고차 취등록세는 차량 시가표준액(과세표준)의 7%로 계산됩니다. 시가표준액은 국세청에서 차량 모델, 연식, 등급 등을 기반으로 산정한 금액으로, 실제 매매 가격과 다를 수 있습니다.',
              },
              {
                q: '중고차를 직거래하면 취등록세를 절약할 수 있나요?',
                a: '아닙니다. 취등록세는 매매 방식(직거래, 딜러)에 관계없이 시가표준액 기준으로 동일하게 부과됩니다. 다만 경차(1000cc 미만)는 취득세 면제, 하이브리드·전기차는 감면 혜택이 있습니다.',
              },
              {
                q: '명의이전 기한을 넘기면 어떻게 되나요?',
                a: '중고차 구매(인수) 후 15일 이내에 이전 등록을 완료해야 합니다. 기한을 넘기면 과태료(10만~50만원)가 부과되며, 하루 지날 때마다 추가 과태료가 발생할 수 있습니다.',
              },
            ].map((item) => (
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
              내 차의 정확한 취등록세를 계산해보세요
            </h2>
            <p className="text-amber-100 mb-6">
              차량 가격과 유형을 입력하면 취득세, 공채, 총비용을 자동으로
              계산합니다
            </p>
            <Link
              href="/calculator/registration-tax"
              className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors"
            >
              취등록세 계산하기
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
