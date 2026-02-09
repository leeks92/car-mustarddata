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
  const sido = sidoSlug;
  const sigungu = region.sigungu.find(
    (s) => sigunguToSlug(s.name, sido) === sigunguSlug
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

/**
 * 전국 시군구 영문 슬러그 매핑
 * 키: "시도슬러그:시군구명" (동명 시군구 구별을 위해 시도 포함)
 */
const SIGUNGU_SLUG_ENTRIES: [string, string, string][] = [
  // [시도슬러그, 시군구명, 영문슬러그]
  // 서울특별시
  ['seoul', '종로구', 'jongno'], ['seoul', '중구', 'jung'],
  ['seoul', '용산구', 'yongsan'], ['seoul', '성동구', 'seongdong'],
  ['seoul', '광진구', 'gwangjin'], ['seoul', '동대문구', 'dongdaemun'],
  ['seoul', '중랑구', 'jungnang'], ['seoul', '성북구', 'seongbuk'],
  ['seoul', '강북구', 'gangbuk'], ['seoul', '도봉구', 'dobong'],
  ['seoul', '노원구', 'nowon'], ['seoul', '은평구', 'eunpyeong'],
  ['seoul', '서대문구', 'seodaemun'], ['seoul', '마포구', 'mapo'],
  ['seoul', '양천구', 'yangcheon'], ['seoul', '강서구', 'gangseo'],
  ['seoul', '구로구', 'guro'], ['seoul', '금천구', 'geumcheon'],
  ['seoul', '영등포구', 'yeongdeungpo'], ['seoul', '동작구', 'dongjak'],
  ['seoul', '관악구', 'gwanak'], ['seoul', '서초구', 'seocho'],
  ['seoul', '강남구', 'gangnam'], ['seoul', '송파구', 'songpa'],
  ['seoul', '강동구', 'gangdong'],
  // 부산광역시
  ['busan', '중구', 'jung'], ['busan', '서구', 'seo'],
  ['busan', '동구', 'dong'], ['busan', '영도구', 'yeongdo'],
  ['busan', '부산진구', 'busanjin'], ['busan', '동래구', 'dongnae'],
  ['busan', '남구', 'nam'], ['busan', '북구', 'buk'],
  ['busan', '해운대구', 'haeundae'], ['busan', '사하구', 'saha'],
  ['busan', '금정구', 'geumjeong'], ['busan', '강서구', 'gangseo'],
  ['busan', '연제구', 'yeonje'], ['busan', '수영구', 'suyeong'],
  ['busan', '사상구', 'sasang'], ['busan', '기장군', 'gijang'],
  // 대구광역시
  ['daegu', '중구', 'jung'], ['daegu', '동구', 'dong'],
  ['daegu', '서구', 'seo'], ['daegu', '남구', 'nam'],
  ['daegu', '북구', 'buk'], ['daegu', '수성구', 'suseong'],
  ['daegu', '달서구', 'dalseo'], ['daegu', '달성군', 'dalseong'],
  ['daegu', '군위군', 'gunwi'],
  // 인천광역시
  ['incheon', '중구', 'jung'], ['incheon', '동구', 'dong'],
  ['incheon', '미추홀구', 'michuhol'], ['incheon', '연수구', 'yeonsu'],
  ['incheon', '남동구', 'namdong'], ['incheon', '부평구', 'bupyeong'],
  ['incheon', '계양구', 'gyeyang'], ['incheon', '서구', 'seo'],
  ['incheon', '강화군', 'ganghwa'], ['incheon', '옹진군', 'ongjin'],
  // 광주광역시
  ['gwangju', '동구', 'dong'], ['gwangju', '서구', 'seo'],
  ['gwangju', '남구', 'nam'], ['gwangju', '북구', 'buk'],
  ['gwangju', '광산구', 'gwangsan'],
  // 대전광역시
  ['daejeon', '동구', 'dong'], ['daejeon', '중구', 'jung'],
  ['daejeon', '서구', 'seo'], ['daejeon', '유성구', 'yuseong'],
  ['daejeon', '대덕구', 'daedeok'],
  // 울산광역시
  ['ulsan', '중구', 'jung'], ['ulsan', '남구', 'nam'],
  ['ulsan', '동구', 'dong'], ['ulsan', '북구', 'buk'],
  ['ulsan', '울주군', 'ulju'],
  // 세종특별자치시
  ['sejong', '세종시', 'sejong-si'],
  // 경기도
  ['gyeonggi', '수원시', 'suwon'], ['gyeonggi', '성남시', 'seongnam'],
  ['gyeonggi', '의정부시', 'uijeongbu'], ['gyeonggi', '안양시', 'anyang'],
  ['gyeonggi', '부천시', 'bucheon'], ['gyeonggi', '광명시', 'gwangmyeong'],
  ['gyeonggi', '평택시', 'pyeongtaek'], ['gyeonggi', '동두천시', 'dongducheon'],
  ['gyeonggi', '안산시', 'ansan'], ['gyeonggi', '고양시', 'goyang'],
  ['gyeonggi', '과천시', 'gwacheon'], ['gyeonggi', '구리시', 'guri'],
  ['gyeonggi', '남양주시', 'namyangju'], ['gyeonggi', '오산시', 'osan'],
  ['gyeonggi', '시흥시', 'siheung'], ['gyeonggi', '군포시', 'gunpo'],
  ['gyeonggi', '의왕시', 'uiwang'], ['gyeonggi', '하남시', 'hanam'],
  ['gyeonggi', '용인시', 'yongin'], ['gyeonggi', '파주시', 'paju'],
  ['gyeonggi', '이천시', 'icheon'], ['gyeonggi', '안성시', 'anseong'],
  ['gyeonggi', '김포시', 'gimpo'], ['gyeonggi', '화성시', 'hwaseong'],
  ['gyeonggi', '광주시', 'gwangju-si'], ['gyeonggi', '양주시', 'yangju'],
  ['gyeonggi', '포천시', 'pocheon'], ['gyeonggi', '여주시', 'yeoju'],
  ['gyeonggi', '연천군', 'yeoncheon'], ['gyeonggi', '가평군', 'gapyeong'],
  ['gyeonggi', '양평군', 'yangpyeong'],
  // 강원특별자치도
  ['gangwon', '춘천시', 'chuncheon'], ['gangwon', '원주시', 'wonju'],
  ['gangwon', '강릉시', 'gangneung'], ['gangwon', '동해시', 'donghae'],
  ['gangwon', '태백시', 'taebaek'], ['gangwon', '속초시', 'sokcho'],
  ['gangwon', '삼척시', 'samcheok'], ['gangwon', '홍천군', 'hongcheon'],
  ['gangwon', '횡성군', 'hoengseong'], ['gangwon', '영월군', 'yeongwol'],
  ['gangwon', '평창군', 'pyeongchang'], ['gangwon', '정선군', 'jeongseon'],
  ['gangwon', '철원군', 'cheorwon'], ['gangwon', '화천군', 'hwacheon'],
  ['gangwon', '양구군', 'yanggu'], ['gangwon', '인제군', 'inje'],
  ['gangwon', '고성군', 'goseong'], ['gangwon', '양양군', 'yangyang'],
  // 충청북도
  ['chungbuk', '청주시', 'cheongju'], ['chungbuk', '충주시', 'chungju'],
  ['chungbuk', '제천시', 'jecheon'], ['chungbuk', '보은군', 'boeun'],
  ['chungbuk', '옥천군', 'okcheon'], ['chungbuk', '영동군', 'yeongdong'],
  ['chungbuk', '증평군', 'jeungpyeong'], ['chungbuk', '진천군', 'jincheon'],
  ['chungbuk', '괴산군', 'goesan'], ['chungbuk', '음성군', 'eumseong'],
  ['chungbuk', '단양군', 'danyang'],
  // 충청남도
  ['chungnam', '천안시', 'cheonan'], ['chungnam', '공주시', 'gongju'],
  ['chungnam', '보령시', 'boryeong'], ['chungnam', '아산시', 'asan'],
  ['chungnam', '서산시', 'seosan'], ['chungnam', '논산시', 'nonsan'],
  ['chungnam', '계룡시', 'gyeryong'], ['chungnam', '당진시', 'dangjin'],
  ['chungnam', '금산군', 'geumsan'], ['chungnam', '부여군', 'buyeo'],
  ['chungnam', '서천군', 'seocheon'], ['chungnam', '청양군', 'cheongyang'],
  ['chungnam', '홍성군', 'hongseong'], ['chungnam', '예산군', 'yesan'],
  ['chungnam', '태안군', 'taean'],
  // 전북특별자치도
  ['jeonbuk', '전주시', 'jeonju'], ['jeonbuk', '군산시', 'gunsan'],
  ['jeonbuk', '익산시', 'iksan'], ['jeonbuk', '정읍시', 'jeongeup'],
  ['jeonbuk', '남원시', 'namwon'], ['jeonbuk', '김제시', 'gimje'],
  ['jeonbuk', '완주군', 'wanju'], ['jeonbuk', '진안군', 'jinan'],
  ['jeonbuk', '무주군', 'muju'], ['jeonbuk', '장수군', 'jangsu'],
  ['jeonbuk', '임실군', 'imsil'], ['jeonbuk', '순창군', 'sunchang'],
  ['jeonbuk', '고창군', 'gochang'], ['jeonbuk', '부안군', 'buan'],
  // 전라남도
  ['jeonnam', '목포시', 'mokpo'], ['jeonnam', '여수시', 'yeosu'],
  ['jeonnam', '순천시', 'suncheon'], ['jeonnam', '나주시', 'naju'],
  ['jeonnam', '광양시', 'gwangyang'], ['jeonnam', '담양군', 'damyang'],
  ['jeonnam', '곡성군', 'gokseong'], ['jeonnam', '구례군', 'gurye'],
  ['jeonnam', '고흥군', 'goheung'], ['jeonnam', '보성군', 'boseong'],
  ['jeonnam', '화순군', 'hwasun'], ['jeonnam', '장흥군', 'jangheung'],
  ['jeonnam', '강진군', 'gangjin'], ['jeonnam', '해남군', 'haenam'],
  ['jeonnam', '영암군', 'yeongam'], ['jeonnam', '무안군', 'muan'],
  ['jeonnam', '함평군', 'hampyeong'], ['jeonnam', '영광군', 'yeonggwang'],
  ['jeonnam', '장성군', 'jangseong'], ['jeonnam', '완도군', 'wando'],
  ['jeonnam', '진도군', 'jindo'], ['jeonnam', '신안군', 'sinan'],
  // 경상북도
  ['gyeongbuk', '포항시', 'pohang'], ['gyeongbuk', '경주시', 'gyeongju'],
  ['gyeongbuk', '김천시', 'gimcheon'], ['gyeongbuk', '안동시', 'andong'],
  ['gyeongbuk', '구미시', 'gumi'], ['gyeongbuk', '영주시', 'yeongju'],
  ['gyeongbuk', '영천시', 'yeongcheon'], ['gyeongbuk', '상주시', 'sangju'],
  ['gyeongbuk', '문경시', 'mungyeong'], ['gyeongbuk', '경산시', 'gyeongsan'],
  ['gyeongbuk', '의성군', 'uiseong'], ['gyeongbuk', '청송군', 'cheongsong'],
  ['gyeongbuk', '영양군', 'yeongyang'], ['gyeongbuk', '영덕군', 'yeongdeok'],
  ['gyeongbuk', '청도군', 'cheongdo'], ['gyeongbuk', '고령군', 'goryeong'],
  ['gyeongbuk', '성주군', 'seongju'], ['gyeongbuk', '칠곡군', 'chilgok'],
  ['gyeongbuk', '예천군', 'yecheon'], ['gyeongbuk', '봉화군', 'bonghwa'],
  ['gyeongbuk', '울진군', 'uljin'], ['gyeongbuk', '울릉군', 'ulleung'],
  // 경상남도
  ['gyeongnam', '창원시', 'changwon'], ['gyeongnam', '진주시', 'jinju'],
  ['gyeongnam', '통영시', 'tongyeong'], ['gyeongnam', '사천시', 'sacheon'],
  ['gyeongnam', '김해시', 'gimhae'], ['gyeongnam', '밀양시', 'miryang'],
  ['gyeongnam', '거제시', 'geoje'], ['gyeongnam', '양산시', 'yangsan'],
  ['gyeongnam', '의령군', 'uiryeong'], ['gyeongnam', '함안군', 'haman'],
  ['gyeongnam', '창녕군', 'changnyeong'], ['gyeongnam', '고성군', 'goseong'],
  ['gyeongnam', '남해군', 'namhae'], ['gyeongnam', '하동군', 'hadong'],
  ['gyeongnam', '산청군', 'sancheong'], ['gyeongnam', '함양군', 'hamyang'],
  ['gyeongnam', '거창군', 'geochang'], ['gyeongnam', '합천군', 'hapcheon'],
  // 제주특별자치도
  ['jeju', '제주시', 'jeju-si'], ['jeju', '서귀포시', 'seogwipo'],
];

/** "시도슬러그:시군구명" → 영문슬러그 */
const SIGUNGU_TO_SLUG = new Map<string, string>(
  SIGUNGU_SLUG_ENTRIES.map(([sido, name, slug]) => [`${sido}:${name}`, slug])
);

/** "시도슬러그:영문슬러그" → 시군구명 */
const SLUG_TO_SIGUNGU = new Map<string, string>(
  SIGUNGU_SLUG_ENTRIES.map(([sido, name, slug]) => [`${sido}:${slug}`, name])
);

/** 시군구명 → 영문 슬러그 변환 (시도 컨텍스트 필요) */
export function sigunguToSlug(name: string, sidoSlug?: string): string {
  if (sidoSlug) {
    const slug = SIGUNGU_TO_SLUG.get(`${sidoSlug}:${name}`);
    if (slug) return slug;
  }
  // 시도 없이 조회 (유일한 이름인 경우 대응)
  for (const [sido, n, slug] of SIGUNGU_SLUG_ENTRIES) {
    if (n === name) return slug;
  }
  return name.replace(/\s+/g, '-').toLowerCase();
}

/** 영문 슬러그 → 시군구명 변환 (시도 컨텍스트 필요) */
export function slugToSigungu(slug: string, sidoSlug?: string): string {
  if (sidoSlug) {
    const name = SLUG_TO_SIGUNGU.get(`${sidoSlug}:${slug}`);
    if (name) return name;
  }
  for (const [, n, s] of SIGUNGU_SLUG_ENTRIES) {
    if (s === slug) return n;
  }
  return slug;
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
      const sidoSlug = sidoToSlug(region.sido);
      params.push({
        sido: sidoSlug,
        sigungu: sigunguToSlug(sigungu.name, sidoSlug),
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
