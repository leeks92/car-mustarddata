/**
 * 전기차 충전소 데이터 수집 스크립트
 *
 * 한국환경공단 전기차 충전소 API에서 데이터를 가져와
 * data/ev-chargers.json으로 저장합니다.
 *
 * 사용법:
 *   npx tsx scripts/fetch-ev-chargers.ts
 *
 * 환경 변수:
 *   EV_CHARGER_API_KEY - 한국환경공단 API 인증키
 *
 * API 키가 없으면 샘플 데이터(data/ev-chargers-sample.json)를 복사합니다.
 */

import * as fs from 'fs';
import * as path from 'path';

const API_BASE_URL =
  'http://apis.data.go.kr/B552584/EvCharger/getChargerInfo';
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'ev-chargers.json');
const SAMPLE_PATH = path.join(
  __dirname,
  '..',
  'data',
  'ev-chargers-sample.json'
);

interface APICharger {
  statId: string;
  statNm: string;
  addr: string;
  chgerType: string; // 01: DC차데모, 02: AC완속, 03: DC차데모+AC3상, 04: DC콤보, 05: DC콤보+DC차데모, 06: DC콤보+AC3상, 07: AC3상
  output: string;
  busiNm: string;
  useTime: string;
  lat: string;
  lng: string;
  parkingFree: string; // Y or N
  zcode: string; // 시도코드
}

function mapChargerType(code: string): '급속' | '완속' {
  // AC완속(02)만 완속, 나머지는 급속
  return code === '02' ? '완속' : '급속';
}

function mapConnectorTypes(code: string): string[] {
  const map: Record<string, string[]> = {
    '01': ['CHAdeMO'],
    '02': ['AC완속'],
    '03': ['CHAdeMO', 'AC3상'],
    '04': ['DC콤보'],
    '05': ['DC콤보', 'CHAdeMO'],
    '06': ['DC콤보', 'AC3상'],
    '07': ['AC3상'],
  };
  return map[code] || ['기타'];
}

async function fetchFromAPI(apiKey: string): Promise<void> {
  console.log('API에서 전기차 충전소 데이터를 가져오는 중...');

  const params = new URLSearchParams({
    serviceKey: apiKey,
    pageNo: '1',
    numOfRows: '9999',
    dataType: 'JSON',
  });

  const response = await fetch(`${API_BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  const items: APICharger[] = json?.items?.item || [];

  if (items.length === 0) {
    throw new Error('API에서 데이터를 받지 못했습니다.');
  }

  console.log(`총 ${items.length}개 충전소 데이터 수신`);

  // 시도 코드 → 시도명 매핑
  const sidoMap: Record<string, string> = {
    '11': '서울특별시',
    '26': '부산광역시',
    '27': '대구광역시',
    '28': '인천광역시',
    '29': '광주광역시',
    '30': '대전광역시',
    '31': '울산광역시',
    '36': '세종특별자치시',
    '41': '경기도',
    '42': '강원특별자치도',
    '43': '충청북도',
    '44': '충청남도',
    '45': '전북특별자치도',
    '46': '전라남도',
    '47': '경상북도',
    '48': '경상남도',
    '50': '제주특별자치도',
  };

  // 지역별로 그룹화
  const regionMap = new Map<
    string,
    Map<string, Array<(typeof items)[0]>>
  >();

  for (const item of items) {
    const sidoCode = item.zcode?.substring(0, 2);
    if (!sidoCode || !sidoMap[sidoCode]) continue;

    if (!regionMap.has(sidoCode)) {
      regionMap.set(sidoCode, new Map());
    }

    // 주소에서 시군구명 추출
    const addrParts = item.addr.split(' ');
    const sigunguName = addrParts[1] || '기타';

    const sidoRegions = regionMap.get(sidoCode)!;
    if (!sidoRegions.has(sigunguName)) {
      sidoRegions.set(sigunguName, []);
    }
    sidoRegions.get(sigunguName)!.push(item);
  }

  // 출력 형식으로 변환
  const regions = Array.from(regionMap.entries()).map(
    ([sidoCode, sigunguMap]) => ({
      sido: sidoMap[sidoCode],
      sidoCode,
      sigungu: Array.from(sigunguMap.entries()).map(
        ([name, chargers]) => ({
          name,
          code: sidoCode + '000',
          chargers: chargers.map((c) => ({
            id: c.statId,
            name: c.statNm,
            address: c.addr,
            chargerType: mapChargerType(c.chgerType),
            output: c.output ? `${c.output}kW` : '정보 없음',
            operator: c.busiNm,
            available24h: c.useTime?.includes('24시간') ?? false,
            lat: parseFloat(c.lat) || 0,
            lng: parseFloat(c.lng) || 0,
            connectorTypes: mapConnectorTypes(c.chgerType),
            parkingFree: c.parkingFree === 'Y',
            fee: '정보 없음',
          })),
        })
      ),
    })
  );

  const outputData = { regions };
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(outputData, null, 2), 'utf-8');
  console.log(`데이터 저장 완료: ${OUTPUT_PATH}`);
  console.log(
    `총 ${regions.length}개 시도, ${regions.reduce((s, r) => s + r.sigungu.length, 0)}개 시군구`
  );
}

function copySampleData(): void {
  console.log('API 키가 설정되지 않았습니다. 샘플 데이터를 사용합니다.');
  const sample = fs.readFileSync(SAMPLE_PATH, 'utf-8');
  fs.writeFileSync(OUTPUT_PATH, sample, 'utf-8');
  console.log(`샘플 데이터 복사 완료: ${OUTPUT_PATH}`);
}

async function main(): Promise<void> {
  const apiKey = process.env.EV_CHARGER_API_KEY;

  // data 디렉토리 확인
  const dataDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (apiKey) {
    try {
      await fetchFromAPI(apiKey);
    } catch (error) {
      console.error('API 호출 실패:', error);
      console.log('샘플 데이터로 대체합니다.');
      copySampleData();
    }
  } else {
    copySampleData();
  }
}

main().catch(console.error);
