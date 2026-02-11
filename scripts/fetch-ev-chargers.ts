/**
 * 전기차 충전소 데이터 수집 스크립트
 *
 * 한국환경공단 전기자동차 충전소 정보 API (v1.22)에서 데이터를 가져와
 * data/ev-chargers.json으로 저장합니다.
 *
 * API: https://www.data.go.kr/data/15076352/openapi.do
 * 오퍼레이션: getChargerInfo (충전기 정보 조회)
 *
 * 전략:
 *   - 17개 시도(zcode)별로 요청하여 데이터를 분산 수집
 *   - zscode(지역상세코드) 기반으로 정확한 시군구 분류
 *   - 동일 충전소(statId)의 충전기들을 하나로 그룹핑
 *   - 삭제된 충전기(delYn=Y) 제외
 *
 * 사용법:
 *   EV_CHARGER_API_KEY=인증키 npx tsx scripts/fetch-ev-chargers.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const API_BASE_URL =
  'http://apis.data.go.kr/B552584/EvCharger/getChargerInfo';
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'ev-chargers');
const INDEX_PATH = path.join(OUTPUT_DIR, 'index.json');
const CHARGER_INDEX_PATH = path.join(OUTPUT_DIR, 'charger-index.json');
const SAMPLE_PATH = path.join(
  __dirname,
  '..',
  'data',
  'ev-chargers-sample.json'
);

/** 시도 코드 → 파일명용 영문 슬러그 */
const SIDO_SLUG_MAP: Record<string, string> = {
  '11': 'seoul',
  '26': 'busan',
  '27': 'daegu',
  '28': 'incheon',
  '29': 'gwangju',
  '30': 'daejeon',
  '31': 'ulsan',
  '36': 'sejong',
  '41': 'gyeonggi',
  '43': 'chungbuk',
  '44': 'chungnam',
  '46': 'jeonnam',
  '47': 'gyeongbuk',
  '48': 'gyeongnam',
  '50': 'jeju',
  '51': 'gangwon',
  '52': 'jeonbuk',
};

// ──────────────────────────────────────────────
// API 응답 타입 (가이드 v1.22 기준)
// ──────────────────────────────────────────────

interface APIChargerItem {
  statNm: string;
  statId: string;
  chgerId: string;
  chgerType: string;
  addr: string;
  addrDetail?: string;
  location?: string;
  useTime: string;
  lat: string;
  lng: string;
  busiId: string;
  bnm: string;
  busiNm: string;
  busiCall?: string;
  stat: string;
  statUpdDt?: string;
  output?: string;
  method?: string;
  zcode: string;
  zscode?: string;
  kind?: string;
  kindDetail?: string;
  parkingFree?: string;
  note?: string;
  limitYn?: string;
  limitDetail?: string;
  delYn?: string;
  delDetail?: string;
  trafficYn?: string;
  year?: string;
}

interface APIResponse {
  resultCode: string;
  resultMsg: string;
  totalCount: number;
  pageNo: number;
  numOfRows: number;
  items?: {
    item: APIChargerItem[] | APIChargerItem;
  };
}

// ──────────────────────────────────────────────
// 시도 코드 매핑 (가이드 v1.22 zcode 기준)
// ──────────────────────────────────────────────

const SIDO_MAP: Record<string, string> = {
  '11': '서울특별시',
  '26': '부산광역시',
  '27': '대구광역시',
  '28': '인천광역시',
  '29': '광주광역시',
  '30': '대전광역시',
  '31': '울산광역시',
  '36': '세종특별자치시',
  '41': '경기도',
  '43': '충청북도',
  '44': '충청남도',
  '46': '전라남도',
  '47': '경상북도',
  '48': '경상남도',
  '50': '제주특별자치도',
  '51': '강원특별자치도',
  '52': '전북특별자치도',
};

// ──────────────────────────────────────────────
// zscode → 시군구명 매핑 (가이드 v1.22 기준)
// ──────────────────────────────────────────────

const ZSCODE_MAP: Record<string, string> = {
  // 서울
  '11110': '종로구', '11140': '중구', '11170': '용산구', '11200': '성동구',
  '11215': '광진구', '11230': '동대문구', '11260': '중랑구', '11290': '성북구',
  '11305': '강북구', '11320': '도봉구', '11350': '노원구', '11380': '은평구',
  '11410': '서대문구', '11440': '마포구', '11470': '양천구', '11500': '강서구',
  '11530': '구로구', '11545': '금천구', '11560': '영등포구', '11590': '동작구',
  '11620': '관악구', '11650': '서초구', '11680': '강남구', '11710': '송파구',
  '11740': '강동구',
  // 부산
  '26110': '중구', '26140': '서구', '26170': '동구', '26200': '영도구',
  '26230': '부산진구', '26260': '동래구', '26290': '남구', '26320': '북구',
  '26350': '해운대구', '26380': '사하구', '26410': '금정구', '26440': '강서구',
  '26470': '연제구', '26500': '수영구', '26530': '사상구', '26710': '기장군',
  // 대구
  '27110': '중구', '27140': '동구', '27170': '서구', '27200': '남구',
  '27230': '북구', '27260': '수성구', '27290': '달서구', '27710': '달성군',
  '27720': '군위군',
  // 인천
  '28110': '중구', '28140': '동구', '28177': '미추홀구', '28185': '연수구',
  '28200': '남동구', '28237': '부평구', '28245': '계양구', '28260': '서구',
  '28710': '강화군', '28720': '옹진군',
  // 광주
  '29110': '동구', '29140': '서구', '29155': '남구', '29170': '북구',
  '29200': '광산구',
  // 대전
  '30110': '동구', '30140': '중구', '30170': '서구', '30200': '유성구',
  '30230': '대덕구',
  // 울산
  '31110': '중구', '31140': '남구', '31170': '동구', '31200': '북구',
  '31710': '울주군',
  // 세종
  '36110': '세종특별자치시',
  // 경기
  '41110': '수원시', '41130': '성남시', '41150': '의정부시', '41170': '안양시',
  '41190': '부천시', '41210': '광명시', '41220': '평택시', '41250': '동두천시',
  '41270': '안산시', '41280': '고양시', '41290': '과천시', '41310': '구리시',
  '41360': '남양주시', '41370': '오산시', '41390': '시흥시', '41410': '군포시',
  '41430': '의왕시', '41450': '하남시', '41460': '용인시', '41480': '파주시',
  '41500': '이천시', '41550': '안성시', '41570': '김포시', '41590': '화성시',
  '41610': '광주시', '41630': '양주시', '41650': '포천시', '41670': '여주시',
  '41800': '연천군', '41820': '가평군', '41830': '양평군',
  // 충북
  '43110': '청주시', '43130': '충주시', '43150': '제천시',
  '43720': '보은군', '43730': '옥천군', '43740': '영동군', '43745': '증평군',
  '43750': '진천군', '43760': '괴산군', '43770': '음성군', '43800': '단양군',
  // 충남
  '44130': '천안시', '44150': '공주시', '44180': '보령시', '44200': '아산시',
  '44210': '서산시', '44230': '논산시', '44250': '계룡시', '44270': '당진시',
  '44710': '금산군', '44760': '부여군', '44770': '서천군', '44790': '청양군',
  '44800': '홍성군', '44810': '예산군', '44825': '태안군',
  // 전남
  '46110': '목포시', '46130': '여수시', '46150': '순천시', '46170': '나주시',
  '46230': '광양시', '46710': '담양군', '46720': '곡성군', '46730': '구례군',
  '46770': '고흥군', '46780': '보성군', '46790': '화순군', '46800': '장흥군',
  '46810': '강진군', '46820': '해남군', '46830': '영암군', '46840': '무안군',
  '46860': '함평군', '46870': '영광군', '46880': '장성군', '46890': '완도군',
  '46900': '진도군', '46910': '신안군',
  // 경북
  '47110': '포항시', '47130': '경주시', '47150': '김천시', '47170': '안동시',
  '47190': '구미시', '47210': '영주시', '47230': '영천시', '47250': '상주시',
  '47280': '문경시', '47290': '경산시', '47720': '군위군', '47730': '의성군',
  '47750': '청송군', '47760': '영양군', '47770': '영덕군', '47820': '청도군',
  '47830': '고령군', '47840': '성주군', '47850': '칠곡군', '47900': '예천군',
  '47920': '봉화군', '47930': '울진군', '47940': '울릉군',
  // 경남
  '48120': '창원시', '48170': '진주시', '48220': '통영시', '48240': '사천시',
  '48250': '김해시', '48270': '밀양시', '48310': '거제시', '48330': '양산시',
  '48720': '의령군', '48730': '함안군', '48740': '창녕군', '48820': '고성군',
  '48840': '남해군', '48850': '하동군', '48860': '산청군', '48870': '함양군',
  '48880': '거창군', '48890': '합천군',
  // 제주
  '50110': '제주시', '50130': '서귀포시',
  // 강원
  '51110': '춘천시', '51130': '원주시', '51150': '강릉시', '51170': '동해시',
  '51190': '태백시', '51210': '속초시', '51230': '삼척시', '51720': '홍천군',
  '51730': '횡성군', '51750': '영월군', '51760': '평창군', '51770': '정선군',
  '51780': '철원군', '51790': '화천군', '51800': '양구군', '51810': '인제군',
  '51820': '고성군', '51830': '양양군',
  // 전북
  '52110': '전주시', '52130': '군산시', '52140': '익산시', '52180': '정읍시',
  '52190': '남원시', '52210': '김제시', '52710': '완주군', '52720': '진안군',
  '52730': '무주군', '52740': '장수군', '52750': '임실군', '52770': '순창군',
  '52790': '고창군', '52800': '부안군',
};

// ──────────────────────────────────────────────
// 시군구명 → 영문 슬러그 매핑 (ev-data.ts와 동기화)
// ──────────────────────────────────────────────

const SIGUNGU_SLUG_MAP: [string, string, string][] = [
  // [시도슬러그, 시군구명, 영문슬러그]
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
  ['busan', '중구', 'jung'], ['busan', '서구', 'seo'],
  ['busan', '동구', 'dong'], ['busan', '영도구', 'yeongdo'],
  ['busan', '부산진구', 'busanjin'], ['busan', '동래구', 'dongnae'],
  ['busan', '남구', 'nam'], ['busan', '북구', 'buk'],
  ['busan', '해운대구', 'haeundae'], ['busan', '사하구', 'saha'],
  ['busan', '금정구', 'geumjeong'], ['busan', '강서구', 'gangseo'],
  ['busan', '연제구', 'yeonje'], ['busan', '수영구', 'suyeong'],
  ['busan', '사상구', 'sasang'], ['busan', '기장군', 'gijang'],
  ['daegu', '중구', 'jung'], ['daegu', '동구', 'dong'],
  ['daegu', '서구', 'seo'], ['daegu', '남구', 'nam'],
  ['daegu', '북구', 'buk'], ['daegu', '수성구', 'suseong'],
  ['daegu', '달서구', 'dalseo'], ['daegu', '달성군', 'dalseong'],
  ['daegu', '군위군', 'gunwi'],
  ['incheon', '중구', 'jung'], ['incheon', '동구', 'dong'],
  ['incheon', '미추홀구', 'michuhol'], ['incheon', '연수구', 'yeonsu'],
  ['incheon', '남동구', 'namdong'], ['incheon', '부평구', 'bupyeong'],
  ['incheon', '계양구', 'gyeyang'], ['incheon', '서구', 'seo'],
  ['incheon', '강화군', 'ganghwa'], ['incheon', '옹진군', 'ongjin'],
  ['gwangju', '동구', 'dong'], ['gwangju', '서구', 'seo'],
  ['gwangju', '남구', 'nam'], ['gwangju', '북구', 'buk'],
  ['gwangju', '광산구', 'gwangsan'],
  ['daejeon', '동구', 'dong'], ['daejeon', '중구', 'jung'],
  ['daejeon', '서구', 'seo'], ['daejeon', '유성구', 'yuseong'],
  ['daejeon', '대덕구', 'daedeok'],
  ['ulsan', '중구', 'jung'], ['ulsan', '남구', 'nam'],
  ['ulsan', '동구', 'dong'], ['ulsan', '북구', 'buk'],
  ['ulsan', '울주군', 'ulju'],
  ['sejong', '세종시', 'sejong-si'], ['sejong', '세종특별자치시', 'sejong-si'],
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
  ['gangwon', '춘천시', 'chuncheon'], ['gangwon', '원주시', 'wonju'],
  ['gangwon', '강릉시', 'gangneung'], ['gangwon', '동해시', 'donghae'],
  ['gangwon', '태백시', 'taebaek'], ['gangwon', '속초시', 'sokcho'],
  ['gangwon', '삼척시', 'samcheok'], ['gangwon', '홍천군', 'hongcheon'],
  ['gangwon', '횡성군', 'hoengseong'], ['gangwon', '영월군', 'yeongwol'],
  ['gangwon', '평창군', 'pyeongchang'], ['gangwon', '정선군', 'jeongseon'],
  ['gangwon', '철원군', 'cheorwon'], ['gangwon', '화천군', 'hwacheon'],
  ['gangwon', '양구군', 'yanggu'], ['gangwon', '인제군', 'inje'],
  ['gangwon', '고성군', 'goseong'], ['gangwon', '양양군', 'yangyang'],
  ['chungbuk', '청주시', 'cheongju'], ['chungbuk', '충주시', 'chungju'],
  ['chungbuk', '제천시', 'jecheon'], ['chungbuk', '보은군', 'boeun'],
  ['chungbuk', '옥천군', 'okcheon'], ['chungbuk', '영동군', 'yeongdong'],
  ['chungbuk', '증평군', 'jeungpyeong'], ['chungbuk', '진천군', 'jincheon'],
  ['chungbuk', '괴산군', 'goesan'], ['chungbuk', '음성군', 'eumseong'],
  ['chungbuk', '단양군', 'danyang'],
  ['chungnam', '천안시', 'cheonan'], ['chungnam', '공주시', 'gongju'],
  ['chungnam', '보령시', 'boryeong'], ['chungnam', '아산시', 'asan'],
  ['chungnam', '서산시', 'seosan'], ['chungnam', '논산시', 'nonsan'],
  ['chungnam', '계룡시', 'gyeryong'], ['chungnam', '당진시', 'dangjin'],
  ['chungnam', '금산군', 'geumsan'], ['chungnam', '부여군', 'buyeo'],
  ['chungnam', '서천군', 'seocheon'], ['chungnam', '청양군', 'cheongyang'],
  ['chungnam', '홍성군', 'hongseong'], ['chungnam', '예산군', 'yesan'],
  ['chungnam', '태안군', 'taean'],
  ['jeonbuk', '전주시', 'jeonju'], ['jeonbuk', '군산시', 'gunsan'],
  ['jeonbuk', '익산시', 'iksan'], ['jeonbuk', '정읍시', 'jeongeup'],
  ['jeonbuk', '남원시', 'namwon'], ['jeonbuk', '김제시', 'gimje'],
  ['jeonbuk', '완주군', 'wanju'], ['jeonbuk', '진안군', 'jinan'],
  ['jeonbuk', '무주군', 'muju'], ['jeonbuk', '장수군', 'jangsu'],
  ['jeonbuk', '임실군', 'imsil'], ['jeonbuk', '순창군', 'sunchang'],
  ['jeonbuk', '고창군', 'gochang'], ['jeonbuk', '부안군', 'buan'],
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
  ['gyeongnam', '창원시', 'changwon'], ['gyeongnam', '진주시', 'jinju'],
  ['gyeongnam', '통영시', 'tongyeong'], ['gyeongnam', '사천시', 'sacheon'],
  ['gyeongnam', '김해시', 'gimhae'], ['gyeongnam', '밀양시', 'miryang'],
  ['gyeongnam', '거제시', 'geoje'], ['gyeongnam', '양산시', 'yangsan'],
  ['gyeongnam', '의령군', 'uiryeong'], ['gyeongnam', '함안군', 'haman'],
  ['gyeongnam', '창녕군', 'changnyeong'], ['gyeongnam', '고성군', 'goseong'],
  ['gyeongnam', '남해군', 'namhae'], ['gyeongnam', '하동군', 'hadong'],
  ['gyeongnam', '산청군', 'sancheong'], ['gyeongnam', '함양군', 'hamyang'],
  ['gyeongnam', '거창군', 'geochang'], ['gyeongnam', '합천군', 'hapcheon'],
  ['jeju', '제주시', 'jeju-si'], ['jeju', '서귀포시', 'seogwipo'],
];

function getSigunguSlug(sidoSlug: string, sigunguName: string): string {
  for (const [sido, name, slug] of SIGUNGU_SLUG_MAP) {
    if (sido === sidoSlug && name === sigunguName) return slug;
  }
  return sigunguName.replace(/\s+/g, '-').toLowerCase();
}

/** zscode 또는 주소에서 시군구명 추출 */
function getSigunguName(item: APIChargerItem): string {
  // 1) zscode가 있으면 코드 매핑 사용 (가장 정확)
  if (item.zscode && ZSCODE_MAP[item.zscode]) {
    return ZSCODE_MAP[item.zscode];
  }

  // 2) 세종시는 시군구 없음 → 통합
  if (item.zcode === '36') {
    return '세종특별자치시';
  }

  // 3) 주소에서 추출 (fallback)
  const parts = item.addr.split(' ');
  if (parts.length >= 2) {
    return parts[1];
  }

  return '기타';
}

// ──────────────────────────────────────────────
// 충전기 타입 매핑 (가이드 v1.22 기준)
// ──────────────────────────────────────────────

function mapChargerType(code: string): '급속' | '완속' {
  return code === '02' || code === '08' ? '완속' : '급속';
}

function mapConnectorTypes(code: string): string[] {
  const map: Record<string, string[]> = {
    '01': ['DC차데모'],
    '02': ['AC완속'],
    '03': ['DC차데모', 'AC3상'],
    '04': ['DC콤보'],
    '05': ['DC차데모', 'DC콤보'],
    '06': ['DC차데모', 'AC3상', 'DC콤보'],
    '07': ['AC3상'],
    '08': ['DC콤보(완속)'],
    '09': ['NACS'],
    '10': ['DC콤보', 'NACS'],
    '11': ['DC콤보2(버스전용)'],
  };
  return map[code] || ['기타'];
}

// ──────────────────────────────────────────────
// API 호출
// ──────────────────────────────────────────────

const NUM_OF_ROWS = 9999;

async function fetchPage(
  apiKey: string,
  pageNo: number,
  zcode?: string
): Promise<{ items: APIChargerItem[]; totalCount: number }> {
  const params = new URLSearchParams({
    pageNo: String(pageNo),
    numOfRows: String(NUM_OF_ROWS),
    dataType: 'JSON',
  });
  if (zcode) params.set('zcode', zcode);

  const url = `${API_BASE_URL}?serviceKey=${apiKey}&${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`API ${response.status}: ${body.substring(0, 200)}`);
  }

  const json: APIResponse = await response.json();
  if (json.resultCode !== '00') {
    throw new Error(`API 에러: [${json.resultCode}] ${json.resultMsg}`);
  }

  if (!json.items?.item) {
    return { items: [], totalCount: json.totalCount || 0 };
  }

  const items = Array.isArray(json.items.item)
    ? json.items.item
    : [json.items.item];

  return { items, totalCount: json.totalCount };
}

async function fetchBySido(
  apiKey: string,
  zcode: string,
  sidoName: string
): Promise<APIChargerItem[]> {
  const first = await fetchPage(apiKey, 1, zcode);
  const allItems = [...first.items];
  const totalPages = Math.ceil(first.totalCount / NUM_OF_ROWS);

  console.log(
    `  [${sidoName}] ${first.totalCount.toLocaleString()}건 (${totalPages}페이지)`
  );

  for (let page = 2; page <= totalPages; page++) {
    const { items } = await fetchPage(apiKey, page, zcode);
    allItems.push(...items);
  }

  return allItems;
}

// ──────────────────────────────────────────────
// 데이터 변환 및 저장
// ──────────────────────────────────────────────

/** 시도 데이터를 개별 Region 객체로 변환 */
function transformSido(sidoCode: string, allChargers: APIChargerItem[]) {
  // 삭제된 충전기 제외
  const active = allChargers.filter((c) => c.delYn !== 'Y');

  // zscode 기반으로 시군구 분류
  const sigunguMap = new Map<string, APIChargerItem[]>();
  for (const item of active) {
    const sgName = getSigunguName(item);
    if (!sigunguMap.has(sgName)) sigunguMap.set(sgName, []);
    sigunguMap.get(sgName)!.push(item);
  }

  return {
    sido: SIDO_MAP[sidoCode],
    sidoCode,
    sigungu: Array.from(sigunguMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([sgName, chargers]) => {
        // statId 기준 충전소 그룹핑
        const stationMap = new Map<string, APIChargerItem[]>();
        for (const c of chargers) {
          if (!stationMap.has(c.statId)) stationMap.set(c.statId, []);
          stationMap.get(c.statId)!.push(c);
        }

        return {
          name: sgName,
          code: chargers[0]?.zscode || sidoCode + '000',
          chargers: Array.from(stationMap.entries()).map(
            ([statId, stChargers]) => {
              const rep = stChargers[0];
              const connectors = new Set<string>();
              for (const sc of stChargers) {
                for (const ct of mapConnectorTypes(sc.chgerType)) {
                  connectors.add(ct);
                }
              }
              const maxOutput = Math.max(
                ...stChargers.map(
                  (sc) => parseFloat(sc.output || '0') || 0
                )
              );
              const hasRapid = stChargers.some(
                (sc) => mapChargerType(sc.chgerType) === '급속'
              );

              return {
                id: statId,
                name: rep.statNm,
                address: rep.addr,
                addressDetail:
                  rep.addrDetail && rep.addrDetail !== 'null'
                    ? rep.addrDetail
                    : '',
                chargerType: hasRapid ? '급속' : ('완속' as const),
                output:
                  maxOutput > 0 ? `${maxOutput}kW` : '정보 없음',
                operator: rep.busiNm,
                operatorId: rep.busiId,
                available24h:
                  rep.useTime?.includes('24시간') ?? false,
                useTime: rep.useTime || '',
                lat: parseFloat(rep.lat) || 0,
                lng: parseFloat(rep.lng) || 0,
                connectorTypes: Array.from(connectors),
                chargerCount: stChargers.length,
                parkingFree: rep.parkingFree === 'Y',
                limitYn: rep.limitYn === 'Y',
                kind: rep.kind || '',
                kindDetail: rep.kindDetail || '',
                fee: '정보 없음',
              };
            }
          ),
        };
      }),
  };
}

/**
 * 지역별 개별 JSON 파일 + 인덱스 파일로 저장
 *
 * 구조:
 *   data/ev-chargers/
 *     index.json          ← 지역 목록 + 요약 통계 (경량)
 *     seoul.json           ← 서울 상세 데이터
 *     busan.json           ← 부산 상세 데이터
 *     ...
 */
function transformAndSave(
  sidoData: Map<string, APIChargerItem[]>
): void {
  // 출력 디렉토리 생성
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const indexEntries: {
    sido: string;
    sidoCode: string;
    slug: string;
    file: string;
    sigunguCount: number;
    chargerCount: number;
    fastCount: number;
    slowCount: number;
    sigungu: { name: string; code: string; slug: string; chargerCount: number; fastCount: number; slowCount: number }[];
  }[] = [];

  // 충전소 ID → 위치 매핑 (charger-index.json)
  const chargerIndex: Record<string, { r: string; s: string }> = {};

  const sortedEntries = Array.from(sidoData.entries()).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  for (const [sidoCode, allChargers] of sortedEntries) {
    const region = transformSido(sidoCode, allChargers);
    const slug = SIDO_SLUG_MAP[sidoCode];
    const fileName = `${slug}.json`;
    const filePath = path.join(OUTPUT_DIR, fileName);

    // 지역별 개별 파일 저장
    fs.writeFileSync(filePath, JSON.stringify(region, null, 2), 'utf-8');

    const sigunguEntries: { name: string; code: string; slug: string; chargerCount: number; fastCount: number; slowCount: number }[] = [];

    for (const sg of region.sigungu) {
      const sgSlug = getSigunguSlug(slug, sg.name);
      const sgFast = sg.chargers.filter((c: { chargerType: string }) => c.chargerType === '급속').length;
      const sgSlow = sg.chargers.length - sgFast;

      sigunguEntries.push({
        name: sg.name,
        code: sg.code,
        slug: sgSlug,
        chargerCount: sg.chargers.length,
        fastCount: sgFast,
        slowCount: sgSlow,
      });

      // 충전소 ID → 위치 매핑 추가
      for (const charger of sg.chargers) {
        chargerIndex[charger.id] = { r: slug, s: sgSlug };
      }
    }

    const chargerCount = sigunguEntries.reduce((s, e) => s + e.chargerCount, 0);
    const fastCount = sigunguEntries.reduce((s, e) => s + e.fastCount, 0);

    indexEntries.push({
      sido: region.sido,
      sidoCode: region.sidoCode,
      slug,
      file: fileName,
      sigunguCount: region.sigungu.length,
      chargerCount,
      fastCount,
      slowCount: chargerCount - fastCount,
      sigungu: sigunguEntries,
    });

    const sizeKB = (
      Buffer.byteLength(JSON.stringify(region, null, 2)) / 1024
    ).toFixed(0);
    console.log(
      `  ${region.sido}: ${region.sigungu.length}개 시군구, ${chargerCount.toLocaleString()}개 충전소 → ${fileName} (${sizeKB}KB)`
    );
  }

  // 인덱스 파일 저장
  const indexData = {
    generatedAt: new Date().toISOString(),
    totalRegions: indexEntries.length,
    totalChargers: indexEntries.reduce((s, e) => s + e.chargerCount, 0),
    totalFast: indexEntries.reduce((s, e) => s + e.fastCount, 0),
    totalSlow: indexEntries.reduce((s, e) => s + e.slowCount, 0),
    regions: indexEntries,
  };
  fs.writeFileSync(INDEX_PATH, JSON.stringify(indexData, null, 2), 'utf-8');

  // 충전소 ID → 위치 매핑 파일 저장
  fs.writeFileSync(CHARGER_INDEX_PATH, JSON.stringify(chargerIndex), 'utf-8');
  const chargerIndexSizeKB = (
    Buffer.byteLength(JSON.stringify(chargerIndex)) / 1024
  ).toFixed(0);

  console.log(`\n=== 저장 완료 ===`);
  console.log(`디렉토리: ${OUTPUT_DIR}`);
  console.log(
    `${indexData.totalRegions}개 시도 / ${indexEntries.reduce((s, e) => s + e.sigunguCount, 0)}개 시군구 / ${indexData.totalChargers.toLocaleString()}개 충전소`
  );
  console.log(
    `파일 수: ${indexEntries.length}개 지역 파일 + index.json + charger-index.json (${chargerIndexSizeKB}KB)`
  );
}

// ──────────────────────────────────────────────

/**
 * 샘플 데이터를 분할 구조로 변환하여 저장
 * (API 키 없이 개발할 때 사용)
 */
function copySampleData(): void {
  console.log('API 키가 설정되지 않았습니다. 샘플 데이터를 사용합니다.');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const sample = JSON.parse(fs.readFileSync(SAMPLE_PATH, 'utf-8'));

  // 샘플 데이터도 분할 구조로 저장
  if (sample.regions && Array.isArray(sample.regions)) {
    const indexEntries: {
      sido: string;
      sidoCode: string;
      slug: string;
      file: string;
      sigunguCount: number;
      chargerCount: number;
      fastCount: number;
      slowCount: number;
      sigungu: { name: string; code: string; slug: string; chargerCount: number; fastCount: number; slowCount: number }[];
    }[] = [];

    const chargerIndex: Record<string, { r: string; s: string }> = {};

    for (const region of sample.regions) {
      const slug = SIDO_SLUG_MAP[region.sidoCode] || region.sidoCode;
      const fileName = `${slug}.json`;
      const filePath = path.join(OUTPUT_DIR, fileName);
      fs.writeFileSync(filePath, JSON.stringify(region, null, 2), 'utf-8');

      const sigunguEntries: { name: string; code: string; slug: string; chargerCount: number; fastCount: number; slowCount: number }[] = [];

      for (const sg of region.sigungu) {
        const sgSlug = getSigunguSlug(slug, sg.name);
        const sgFast = sg.chargers.filter((c: { chargerType: string }) => c.chargerType === '급속').length;

        sigunguEntries.push({
          name: sg.name,
          code: sg.code,
          slug: sgSlug,
          chargerCount: sg.chargers.length,
          fastCount: sgFast,
          slowCount: sg.chargers.length - sgFast,
        });

        for (const charger of sg.chargers) {
          chargerIndex[charger.id] = { r: slug, s: sgSlug };
        }
      }

      const chargerCount = sigunguEntries.reduce((s, e) => s + e.chargerCount, 0);
      const fastCount = sigunguEntries.reduce((s, e) => s + e.fastCount, 0);

      indexEntries.push({
        sido: region.sido,
        sidoCode: region.sidoCode,
        slug,
        file: fileName,
        sigunguCount: region.sigungu.length,
        chargerCount,
        fastCount,
        slowCount: chargerCount - fastCount,
        sigungu: sigunguEntries,
      });
    }

    const indexData = {
      generatedAt: new Date().toISOString(),
      totalRegions: indexEntries.length,
      totalChargers: indexEntries.reduce((s, e) => s + e.chargerCount, 0),
      totalFast: indexEntries.reduce((s, e) => s + e.fastCount, 0),
      totalSlow: indexEntries.reduce((s, e) => s + e.slowCount, 0),
      regions: indexEntries,
    };
    fs.writeFileSync(INDEX_PATH, JSON.stringify(indexData, null, 2), 'utf-8');
    fs.writeFileSync(CHARGER_INDEX_PATH, JSON.stringify(chargerIndex), 'utf-8');
    console.log(`샘플 데이터 분할 저장 완료: ${OUTPUT_DIR}`);
  } else {
    // 샘플 데이터가 구 형식이면 그대로 복사
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'sample-fallback.json'),
      JSON.stringify(sample, null, 2),
      'utf-8'
    );
    console.log(`샘플 데이터 복사 완료: ${OUTPUT_DIR}`);
  }
}

async function main(): Promise<void> {
  const apiKey = process.env.EV_CHARGER_API_KEY;

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  if (!apiKey) {
    copySampleData();
    return;
  }

  console.log('=== 전기차 충전소 데이터 수집 시작 ===\n');

  try {
    const sidoData = new Map<string, APIChargerItem[]>();
    const sidoCodes = Object.keys(SIDO_MAP);

    // 시도별 순차 호출
    for (const zcode of sidoCodes) {
      const items = await fetchBySido(apiKey, zcode, SIDO_MAP[zcode]);
      sidoData.set(zcode, items);
    }

    const totalChargers = Array.from(sidoData.values()).reduce(
      (s, items) => s + items.length,
      0
    );
    console.log(
      `\n전체 충전기: ${totalChargers.toLocaleString()}건 수신`
    );

    transformAndSave(sidoData);
  } catch (error) {
    console.error('\nAPI 호출 실패:', error);
    console.log('샘플 데이터로 대체합니다.');
    copySampleData();
  }
}

main().catch(console.error);
