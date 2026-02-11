import Link from 'next/link';
import SisterSites from './SisterSites';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-3 text-gray-900">자동차 계산기</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/calculator/car-tax" className="hover:text-amber-600">
                  자동차세 계산기
                </Link>
              </li>
              <li>
                <Link href="/calculator/registration-tax" className="hover:text-amber-600">
                  취등록세 계산기
                </Link>
              </li>
              <li>
                <Link href="/calculator/installment" className="hover:text-amber-600">
                  할부금 계산기
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-gray-900">비용 계산</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/calculator/fuel-cost" className="hover:text-amber-600">
                  유류비 계산기
                </Link>
              </li>
              <li>
                <Link href="/calculator/depreciation" className="hover:text-amber-600">
                  감가상각 계산기
                </Link>
              </li>
              <li>
                <Link href="/calculator/penalty" className="hover:text-amber-600">
                  과태료·범칙금 조회
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-gray-900">전기차 충전소</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/ev-charger" className="hover:text-amber-600">
                  전국 충전소 찾기
                </Link>
              </li>
              <li>
                <Link href="/ev-charger/seoul" className="hover:text-amber-600">
                  서울 충전소
                </Link>
              </li>
              <li>
                <Link href="/ev-charger/gyeonggi" className="hover:text-amber-600">
                  경기 충전소
                </Link>
              </li>
              <li>
                <Link href="/ev-charger/busan" className="hover:text-amber-600">
                  부산 충전소
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-gray-900">연관 서비스</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a
                  href="https://parking.mustarddata.com"
                  className="hover:text-amber-600"
                >
                  주차장 찾기
                </a>
              </li>
              <li>
                <a
                  href="https://parking.mustarddata.com/free"
                  className="hover:text-amber-600"
                >
                  무료 주차장
                </a>
              </li>
              <li>
                <a
                  href="https://parking.mustarddata.com/compare"
                  className="hover:text-amber-600"
                >
                  주차 요금 비교
                </a>
              </li>
            </ul>
            <h3 className="font-bold mb-3 mt-5 text-gray-900">유용한 사이트</h3>
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
            <SisterSites currentSite="car" />
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
          <p className="mt-2">
            전기차 충전소 데이터 출처:{' '}
            <a
              href="https://www.data.go.kr/data/15076352/openapi.do"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-600"
            >
              한국환경공단 전기자동차 충전소 정보
            </a>{' '}
            (공공데이터포털)
          </p>
        </div>
      </div>
    </footer>
  );
}
