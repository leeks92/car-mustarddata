export interface EVCharger {
  id: string;
  name: string;
  address: string;
  chargerType: '급속' | '완속';
  output: string;
  operator: string;
  available24h: boolean;
  lat: number;
  lng: number;
  connectorTypes: string[];
  parkingFree: boolean;
  fee: string;
}

export interface Sigungu {
  name: string;
  code: string;
  chargers: EVCharger[];
}

export interface Region {
  sido: string;
  sidoCode: string;
  sigungu: Sigungu[];
}

export interface EVChargerData {
  regions: Region[];
}

/** 인덱스 파일의 시군구 요약 정보 */
export interface SigunguIndexEntry {
  name: string;
  code: string;
  slug: string;
  chargerCount: number;
  fastCount: number;
  slowCount: number;
}

/** 인덱스 파일의 지역 요약 정보 */
export interface RegionIndexEntry {
  sido: string;
  sidoCode: string;
  slug: string;
  file: string;
  sigunguCount: number;
  chargerCount: number;
  fastCount: number;
  slowCount: number;
  sigungu: SigunguIndexEntry[];
}

/** 인덱스 파일 구조 */
export interface EVChargerIndex {
  generatedAt: string;
  totalRegions: number;
  totalChargers: number;
  totalFast: number;
  totalSlow: number;
  regions: RegionIndexEntry[];
}

/** 충전소 ID → 위치 매핑 (charger-index.json) */
export interface ChargerLocationEntry {
  /** 지역 slug (예: 'seoul') */
  r: string;
  /** 시군구 slug (예: 'gangnam') */
  s: string;
}

/** charger-index.json 구조 */
export interface ChargerIndex {
  [chargerId: string]: ChargerLocationEntry;
}
