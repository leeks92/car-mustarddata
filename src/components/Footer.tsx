import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-3 text-gray-900">자동차 계산기</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/계산기/자동차세" className="hover:text-amber-600">
                  자동차세 계산기
                </Link>
              </li>
              <li>
                <Link href="/계산기/취등록세" className="hover:text-amber-600">
                  취등록세 계산기
                </Link>
              </li>
              <li>
                <Link href="/계산기/할부금" className="hover:text-amber-600">
                  할부금 계산기
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-gray-900">비용 계산</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/계산기/유류비" className="hover:text-amber-600">
                  유류비 계산기
                </Link>
              </li>
              <li>
                <Link href="/계산기/감가상각" className="hover:text-amber-600">
                  감가상각 계산기
                </Link>
              </li>
              <li>
                <Link href="/계산기/과태료" className="hover:text-amber-600">
                  과태료·범칙금 조회
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-gray-900">유용한 사이트</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a
                  href="https://car365.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  자동차365
                </a>
              </li>
              <li>
                <a
                  href="https://www.wetax.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  위택스
                </a>
              </li>
              <li>
                <a
                  href="https://efine.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  교통범칙금 납부
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-gray-900">관련 서비스</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a
                  href="https://calc.mustarddata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  금융 계산기
                </a>
              </li>
              <li>
                <a
                  href="https://bus.mustarddata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  버스 시간표
                </a>
              </li>
              <li>
                <a
                  href="https://train.mustarddata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  기차 시간표
                </a>
              </li>
              <li>
                <a
                  href="https://apt.mustarddata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  부동산 실거래가
                </a>
              </li>
              <li>
                <a
                  href="https://rest.mustarddata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  고속도로 휴게소
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-600">
          <p>
            © {currentYear} MustardData. 본 사이트의 계산 결과는 참고용이며,
            정확한 세금 및 비용은 관할 관청에 문의하시기 바랍니다.
          </p>
          <p className="mt-2">
            자동차세·취등록세는 2026년 지방세법 기준, 과태료는 도로교통법 시행규칙
            기준입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
