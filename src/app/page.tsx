import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CALCULATOR_PAGES, GUIDE_PAGES, INFO_PAGES, MODEL_PAGES, BASE_URL } from '@/lib/urls';

const faqs = [
  {
    question: '자동차세는 언제 납부하나요?',
    answer:
      '자동차세는 매년 6월(1기분)과 12월(2기분)에 납부합니다. 1월에 연납 신청을 하면 약 4.57% 할인을 받을 수 있습니다.',
  },
  {
    question: '신차 취등록세는 얼마인가요?',
    answer:
      '비영업용 승용차는 차량 가격의 7%가 취득세로 부과됩니다. 경차(1000cc 이하)는 4%, 화물차는 5%가 적용됩니다. 전기차는 최대 140만원, 하이브리드는 최대 40만원 감면됩니다.',
  },
  {
    question: '자동차 할부 이자율은 보통 얼마인가요?',
    answer:
      '2026년 기준 신차 할부 금리는 캐피탈사 기준 연 5~9%, 은행 자동차 대출은 연 4~7% 수준입니다. 제조사 프로모션을 통해 무이자 또는 저금리 할부를 이용할 수도 있습니다.',
  },
  {
    question: '교통 과태료와 범칙금의 차이는 무엇인가요?',
    answer:
      '범칙금은 직접 적발(교통경찰)되었을 때 부과되며, 과태료는 무인단속(CCTV 등)으로 적발되었을 때 부과됩니다. 범칙금에는 벌점이 함께 부과되지만, 과태료에는 벌점이 없습니다.',
  },
];

const features = [
  {
    icon: '🎯',
    title: '2026년 최신 기준',
    desc: '지방세법, 도로교통법 최신 개정사항 반영',
  },
  {
    icon: '⚡',
    title: '즉시 계산',
    desc: '입력 즉시 결과 확인, 회원가입 불필요',
  },
  {
    icon: '📱',
    title: '모바일 최적화',
    desc: '스마트폰에서도 편하게 이용',
  },
  {
    icon: '🔒',
    title: '개인정보 안전',
    desc: '모든 계산은 브라우저에서 처리',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: '자동차 계산기',
          url: BASE_URL,
          description:
            '자동차세, 취등록세, 할부금, 유류비, 감가상각, 과태료 등 자동차 관련 비용 계산기',
          publisher: {
            '@type': 'Organization',
            name: 'MustardData',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            자동차 비용,
            <br className="md:hidden" /> 한번에 계산하세요
          </h1>
          <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            자동차세, 취등록세, 할부금, 유류비, 감가상각까지.
            <br />
            2026년 최신 법령 기준으로 정확하게 계산합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/calculator/car-tax"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              자동차세 계산하기
            </Link>
            <Link
              href="/calculator/registration-tax"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              취등록세 계산하기
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          자동차 계산기 모음
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATOR_PAGES.map((calc) => (
            <Link
              key={calc.path}
              href={calc.path}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all"
            >
              <div className="text-4xl mb-4">{calc.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {calc.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {calc.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guide & Info */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          가이드 & 정보
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...GUIDE_PAGES, ...INFO_PAGES].map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all"
            >
              <div className="text-4xl mb-4">{page.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {page.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Car Models - 국산차 */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          국산차 유지비·세금 정보
        </h2>
        <p className="text-gray-500 text-center mb-8">현대·기아 인기 차종의 자동차세, 보험료, 취등록세를 한눈에 확인하세요</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {MODEL_PAGES.filter((m) => !m.path.includes('benz') && !m.path.includes('bmw') && !m.path.includes('audi') && !m.path.includes('volvo') && !m.path.includes('lexus') && !m.path.includes('toyota') && !m.path.includes('vw-') && !m.path.includes('porsche') && !m.path.includes('mini-')).map((model) => (
            <Link
              key={model.path}
              href={model.path}
              className="group bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg hover:border-amber-200 transition-all text-center"
            >
              <div className="text-2xl mb-2">{model.emoji}</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                {model.title.replace(' 유지비·세금', '')}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Car Models - 수입차 */}
      <section className="max-w-6xl mx-auto px-4 py-6 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          수입차 유지비·세금 정보
        </h2>
        <p className="text-gray-500 text-center mb-8">벤츠·BMW·아우디·렉서스·토요타·볼보·폭스바겐·포르쉐·미니 인기 모델의 보험료, 정비비, 유지비를 비교하세요</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {MODEL_PAGES.filter((m) => m.path.includes('benz') || m.path.includes('bmw') || m.path.includes('audi') || m.path.includes('volvo') || m.path.includes('lexus') || m.path.includes('toyota') || m.path.includes('vw-') || m.path.includes('porsche') || m.path.includes('mini-')).map((model) => (
            <Link
              key={model.path}
              href={model.path}
              className="group bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg hover:border-amber-200 transition-all text-center"
            >
              <div className="text-2xl mb-2">{model.emoji}</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                {model.title.replace(' 유지비·세금', '')}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            왜 자동차 계산기인가요?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          자동차 구매·유지에 필요한 비용 총정리
        </h2>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            자동차를 구매하거나 유지할 때는 차량 가격 외에도 다양한 비용이
            발생합니다. 신차를 구매하면 취득세(차량 가격의 7%)와 공채 매입비,
            등록비 등이 추가로 필요하고, 할부 구매 시에는 이자 비용도
            고려해야 합니다.
          </p>
          <p>
            자동차를 보유하는 동안에는 매년 자동차세(배기량 기준)를 납부해야
            하며, 주행에 따른 유류비, 보험료, 정비비 등 유지비가 지속적으로
            발생합니다. 또한 시간이 지남에 따라 차량의 가치는 감가상각되어
            감소합니다.
          </p>
          <p>
            이 사이트에서는 자동차세, 취등록세, 할부금, 유류비, 감가상각 등
            자동차와 관련된 각종 비용을 2026년 최신 법령 기준으로 정확하게
            계산할 수 있습니다. 모든 계산은 브라우저에서 처리되어 개인정보가
            외부로 전송되지 않습니다.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">자주 묻는 질문</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-6">
                <span className="text-gray-400 font-bold">A.</span> {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
