'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatWon } from '@/lib/calculations';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/urls';

interface PenaltyItem {
  category: string;
  violation: string;
  fine: number;       // 과태료 (무인단속)
  penalty: number;    // 범칙금 (직접적발)
  points: number;     // 벌점
  note?: string;
}

const penaltyData: PenaltyItem[] = [
  // 신호·지시 위반
  { category: '신호·지시', violation: '신호위반', fine: 70000, penalty: 60000, points: 15 },
  { category: '신호·지시', violation: '지시위반', fine: 70000, penalty: 60000, points: 15 },
  // 속도위반
  { category: '속도위반', violation: '20km/h 이하 초과', fine: 40000, penalty: 30000, points: 0 },
  { category: '속도위반', violation: '20~40km/h 초과', fine: 70000, penalty: 60000, points: 15 },
  { category: '속도위반', violation: '40~60km/h 초과', fine: 100000, penalty: 90000, points: 30 },
  { category: '속도위반', violation: '60~80km/h 초과', fine: 130000, penalty: 120000, points: 60 },
  { category: '속도위반', violation: '80km/h 초과', fine: 170000, penalty: 150000, points: 80, note: '면허정지' },
  // 주정차
  { category: '주정차', violation: '주정차위반 (일반)', fine: 40000, penalty: 40000, points: 0 },
  { category: '주정차', violation: '주정차위반 (소방시설 5m 이내)', fine: 50000, penalty: 50000, points: 0 },
  { category: '주정차', violation: '어린이보호구역 주정차', fine: 80000, penalty: 80000, points: 0 },
  // 안전운전
  { category: '안전운전', violation: '안전벨트 미착용', fine: 30000, penalty: 30000, points: 0 },
  { category: '안전운전', violation: '핸드폰 사용 (운전 중)', fine: 70000, penalty: 60000, points: 15 },
  { category: '안전운전', violation: '끼어들기', fine: 60000, penalty: 50000, points: 10 },
  { category: '안전운전', violation: '진로변경 방법위반', fine: 60000, penalty: 50000, points: 10 },
  // 보행자 보호
  { category: '보행자 보호', violation: '횡단보도 보행자 보호의무 위반', fine: 100000, penalty: 80000, points: 20 },
  { category: '보행자 보호', violation: '어린이보호구역 서행·일시정지 위반', fine: 120000, penalty: 120000, points: 30 },
  // 기타
  { category: '기타', violation: '무면허 운전', fine: 0, penalty: 0, points: 0, note: '형사처벌 (1년 이하 징역 또는 300만원 이하 벌금)' },
  { category: '기타', violation: '음주운전 (0.03% 이상)', fine: 0, penalty: 0, points: 100, note: '형사처벌 / 면허취소' },
  { category: '기타', violation: '뺑소니', fine: 0, penalty: 0, points: 100, note: '형사처벌 / 면허취소' },
];

const categories = [...new Set(penaltyData.map((item) => item.category))];

export default function PenaltyLookup() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const filteredData =
    selectedCategory === '전체'
      ? penaltyData
      : penaltyData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '교통 과태료·범칙금 조회',
          description: '교통 위반 유형별 과태료, 범칙금, 벌점을 확인합니다.',
          url: `${BASE_URL}/계산기/과태료`,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '자동차 계산기', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: '과태료·범칙금 조회', item: `${BASE_URL}/계산기/과태료` },
          ],
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">자동차 계산기</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">과태료·범칙금 조회</li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">교통 과태료·범칙금 조회</h1>
          <p className="text-gray-600">교통 위반 유형별 과태료, 범칙금, 벌점을 확인합니다. (2026년 도로교통법 기준, 승용차 기준)</p>
        </div>

        {/* 과태료 vs 범칙금 설명 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-red-50 rounded-2xl p-6">
            <h2 className="font-bold text-red-800 mb-2">과태료</h2>
            <p className="text-sm text-red-700">
              무인단속(CCTV, 이동식 카메라 등)으로 적발된 경우 부과됩니다. 차량 소유자에게 부과되며, <strong>벌점이 없습니다.</strong>
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6">
            <h2 className="font-bold text-blue-800 mb-2">범칙금</h2>
            <p className="text-sm text-blue-700">
              교통경찰에 의해 직접 적발된 경우 부과됩니다. 운전자에게 부과되며, <strong>벌점이 함께 부과됩니다.</strong>
            </p>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory('전체')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === '전체'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            전체
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 테이블 */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-gray-500 font-medium">위반 유형</th>
                  <th className="py-3 px-4 text-center text-red-500 font-medium">과태료</th>
                  <th className="py-3 px-4 text-center text-blue-500 font-medium">범칙금</th>
                  <th className="py-3 px-4 text-center text-gray-500 font-medium">벌점</th>
                  <th className="py-3 px-4 text-left text-gray-500 font-medium">비고</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{item.violation}</div>
                      <div className="text-xs text-gray-400">{item.category}</div>
                    </td>
                    <td className="py-3 px-4 text-center font-medium text-red-600">
                      {item.fine > 0 ? formatWon(item.fine) : '-'}
                    </td>
                    <td className="py-3 px-4 text-center font-medium text-blue-600">
                      {item.penalty > 0 ? formatWon(item.penalty) : '-'}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {item.points > 0 ? (
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                          item.points >= 60 ? 'bg-red-100 text-red-700' :
                          item.points >= 15 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.points}
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-500">{item.note || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 벌점 누적 기준 */}
        <section className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">벌점 누적 기준</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left text-gray-500 font-medium">누적 벌점</th>
                  <th className="py-3 text-left text-gray-500 font-medium">처분 내용</th>
                  <th className="py-3 text-left text-gray-500 font-medium">기간</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 font-medium">40점 이상</td>
                  <td className="py-3">면허 정지</td>
                  <td className="py-3">1점 = 1일 (40점 = 40일 정지)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 font-medium">1년간 121점 이상</td>
                  <td className="py-3 text-red-600 font-medium">면허 취소</td>
                  <td className="py-3">-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 font-medium">2년간 201점 이상</td>
                  <td className="py-3 text-red-600 font-medium">면허 취소</td>
                  <td className="py-3">-</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">3년간 271점 이상</td>
                  <td className="py-3 text-red-600 font-medium">면허 취소</td>
                  <td className="py-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            * 처분벌점은 위반·사고 벌점의 합이며, 교통안전교육 이수 시 벌점 감경 가능
          </p>
        </section>

        {/* 관련 계산기 */}
        <div className="mt-8 bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-900 mb-3">다른 계산기</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/계산기/자동차세" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
              자동차세 계산기
            </Link>
            <Link href="/계산기/유류비" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
              유류비 계산기
            </Link>
            <Link href="/계산기/할부금" className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-amber-50 hover:border-amber-300 transition-colors">
              할부금 계산기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
