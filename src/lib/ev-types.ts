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
