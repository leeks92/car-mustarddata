import type { EVChargerData, Region, Sigungu, EVCharger } from './ev-types';
import sampleData from '../../data/ev-chargers-sample.json';

function loadData(): EVChargerData {
  return sampleData as EVChargerData;
}

const data = loadData();

/** 전체 지역 목록 */
export function getRegions(): Region[] {
  return data.regions;
}

/** 시도 코드로 지역 조회 */
export function getRegionBySidoCode(sidoCode: string): Region | undefined {
  return data.regions.find((r) => r.sidoCode === sidoCode);
}

/** 시도 이름(슬러그)으로 지역 조회 */
export function getRegionBySlug(slug: string): Region | undefined {
  return data.regions.find((r) => sidoToSlug(r.sido) === slug);
}

/** 시군구 코드로 시군구 조회 */
export function getSigunguByCode(
  sidoSlug: string,
  sigunguSlug: string
): { region: Region; sigungu: Sigungu } | undefined {
  const region = getRegionBySlug(sidoSlug);
  if (!region) return undefined;
  const sigungu = region.sigungu.find(
    (s) => sigunguToSlug(s.name) === sigunguSlug
  );
  if (!sigungu) return undefined;
  return { region, sigungu };
}

/** 충전소 ID로 조회 */
export function getChargerById(
  id: string
): { charger: EVCharger; sigungu: Sigungu; region: Region } | undefined {
  for (const region of data.regions) {
    for (const sigungu of region.sigungu) {
      const charger = sigungu.chargers.find((c) => c.id === id);
      if (charger) return { charger, sigungu, region };
    }
  }
  return undefined;
}

/** 전체 충전소 목록 */
export function getAllChargers(): {
  charger: EVCharger;
  sigungu: Sigungu;
  region: Region;
}[] {
  const result: { charger: EVCharger; sigungu: Sigungu; region: Region }[] = [];
  for (const region of data.regions) {
    for (const sigungu of region.sigungu) {
      for (const charger of sigungu.chargers) {
        result.push({ charger, sigungu, region });
      }
    }
  }
  return result;
}

/** 전체 충전소 수 */
export function getTotalChargerCount(): number {
  let count = 0;
  for (const region of data.regions) {
    for (const sigungu of region.sigungu) {
      count += sigungu.chargers.length;
    }
  }
  return count;
}

/** 지역별 충전소 수 */
export function getRegionChargerCount(region: Region): number {
  return region.sigungu.reduce((sum, s) => sum + s.chargers.length, 0);
}

/** 지역별 급속/완속 충전소 수 */
export function getChargerTypeCount(chargers: EVCharger[]): {
  fast: number;
  slow: number;
} {
  return {
    fast: chargers.filter((c) => c.chargerType === '급속').length,
    slow: chargers.filter((c) => c.chargerType === '완속').length,
  };
}

/** 시도명 → URL 슬러그 변환 */
export function sidoToSlug(sido: string): string {
  const map: Record<string, string> = {
    서울특별시: 'seoul',
    부산광역시: 'busan',
    대구광역시: 'daegu',
    인천광역시: 'incheon',
    광주광역시: 'gwangju',
    대전광역시: 'daejeon',
    울산광역시: 'ulsan',
    세종특별자치시: 'sejong',
    경기도: 'gyeonggi',
    강원특별자치도: 'gangwon',
    충청북도: 'chungbuk',
    충청남도: 'chungnam',
    전북특별자치도: 'jeonbuk',
    전라남도: 'jeonnam',
    경상북도: 'gyeongbuk',
    경상남도: 'gyeongnam',
    제주특별자치도: 'jeju',
  };
  return map[sido] || sido;
}

/** URL 슬러그 → 시도명 변환 */
export function slugToSido(slug: string): string {
  const map: Record<string, string> = {
    seoul: '서울특별시',
    busan: '부산광역시',
    daegu: '대구광역시',
    incheon: '인천광역시',
    gwangju: '광주광역시',
    daejeon: '대전광역시',
    ulsan: '울산광역시',
    sejong: '세종특별자치시',
    gyeonggi: '경기도',
    gangwon: '강원특별자치도',
    chungbuk: '충청북도',
    chungnam: '충청남도',
    jeonbuk: '전북특별자치도',
    jeonnam: '전라남도',
    gyeongbuk: '경상북도',
    gyeongnam: '경상남도',
    jeju: '제주특별자치도',
  };
  return map[slug] || slug;
}

/** 시군구명 → URL 슬러그 변환 */
export function sigunguToSlug(name: string): string {
  return encodeURIComponent(name);
}

/** URL 슬러그 → 시군구명 변환 */
export function slugToSigungu(slug: string): string {
  return decodeURIComponent(slug);
}

/** generateStaticParams를 위한 전체 시도 슬러그 */
export function getAllSidoSlugs(): string[] {
  return data.regions.map((r) => sidoToSlug(r.sido));
}

/** generateStaticParams를 위한 전체 시도+시군구 슬러그 */
export function getAllSigunguParams(): { sido: string; sigungu: string }[] {
  const params: { sido: string; sigungu: string }[] = [];
  for (const region of data.regions) {
    for (const sigungu of region.sigungu) {
      params.push({
        sido: sidoToSlug(region.sido),
        sigungu: sigunguToSlug(sigungu.name),
      });
    }
  }
  return params;
}

/** generateStaticParams를 위한 전체 충전소 ID */
export function getAllChargerIds(): string[] {
  const ids: string[] = [];
  for (const region of data.regions) {
    for (const sigungu of region.sigungu) {
      for (const charger of sigungu.chargers) {
        ids.push(charger.id);
      }
    }
  }
  return ids;
}
