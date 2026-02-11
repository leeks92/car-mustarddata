// 타이어 카테고리별 상세 데이터
export interface TireBrand {
  brand: string;
  product: string;
  origin: string;
  size: string;
  price1: string; // 짝당
  price4: string; // 4짝
  treadwear: string;
  wetGrip: string;
  noise: string; // dB
  strength: string;
  weakness: string;
  rating: number; // 5점 만점
}

export interface TireCategory {
  slug: string;
  name: string;
  fullName: string;
  models: string;
  sizeRange: string;
  inchRange: string;
  domesticPrice4: string;
  importPrice4: string;
  cycle: string;
  years: string;
  description: string;
  tip: string;
  brands: TireBrand[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[]; // car model slugs
}

export const TIRE_CATEGORIES: TireCategory[] = [
  {
    slug: 'compact',
    name: '경차',
    fullName: '경차 타이어',
    models: '모닝, 레이, 스파크, 캐스퍼',
    sizeRange: '155/65R14 ~ 175/65R14',
    inchRange: '14인치',
    domesticPrice4: '28~40만 원',
    importPrice4: '40~56만 원',
    cycle: '40,000~50,000km',
    years: '4~5년',
    description: '경차는 차체가 가벼워 타이어 마모가 느리고, 14인치 소구경이라 가격이 저렴합니다. 국산 브랜드 기준 짝당 7~10만 원이면 충분히 좋은 제품을 선택할 수 있습니다.',
    tip: '경차는 타이어 가격 자체가 저렴하므로, 국산 중급 이상 제품을 선택하는 것이 가성비가 좋습니다. 수입 브랜드와 국산 프리미엄의 체감 차이가 크지 않습니다.',
    brands: [
      { brand: '한국타이어', product: '키너지 EX (H308)', origin: '국산', size: '175/65R14', price1: '7~9만 원', price4: '28~36만 원', treadwear: '500', wetGrip: 'B', noise: '69dB', strength: '정숙성, 승차감 우수', weakness: '고속 안정성 보통', rating: 4.2 },
      { brand: '금호타이어', product: '솔루스 TA31', origin: '국산', size: '175/65R14', price1: '6~8만 원', price4: '24~32만 원', treadwear: '480', wetGrip: 'B', noise: '70dB', strength: '가성비 최고, 내구성 좋음', weakness: '정숙성 보통', rating: 4.0 },
      { brand: '넥센타이어', product: '엔프리즈 AH8', origin: '국산', size: '175/65R14', price1: '6~8만 원', price4: '24~32만 원', treadwear: '460', wetGrip: 'B', noise: '70dB', strength: '가성비, 연비 우수', weakness: '브레이크 성능 보통', rating: 3.9 },
      { brand: '미쉐린', product: '에너지 세이버4', origin: '프랑스', size: '175/65R14', price1: '10~14만 원', price4: '40~56만 원', treadwear: '500', wetGrip: 'A', noise: '68dB', strength: '연비, 정숙성, 수명 모두 우수', weakness: '가격이 국산 대비 1.5배', rating: 4.5 },
      { brand: '콘티넨탈', product: '울트라컨택트 UC7', origin: '독일', size: '175/65R14', price1: '10~13만 원', price4: '40~52만 원', treadwear: '420', wetGrip: 'A', noise: '69dB', strength: '제동력 최상급', weakness: '마모 속도 약간 빠름', rating: 4.3 },
    ],
    faq: [
      { q: '모닝 타이어 4짝 교체 비용은 얼마인가요?', a: '국산 브랜드 기준 24~36만 원, 수입 브랜드 기준 40~56만 원입니다. 공임비 4~6만 원이 별도로 추가됩니다. 온라인 구매 후 장착점 이용 시 20~30% 절약 가능합니다.' },
      { q: '경차 타이어 교체 주기는 얼마인가요?', a: '경차는 차체가 가벼워 40,000~50,000km 또는 4~5년 중 먼저 도래하는 시점에 교체합니다. 주로 시내 주행이라면 마모보다 경화(고무 굳음)로 교체하는 경우가 많습니다.' },
      { q: '경차에 수입 타이어를 장착할 필요가 있나요?', a: '경차는 최고 속도와 하중이 낮아 국산 중급 이상 제품으로 충분합니다. 수입 브랜드와 체감 차이가 크지 않으므로 국산 프리미엄 라인이 가성비가 좋습니다.' },
      { q: '캐스퍼 타이어 규격은 무엇인가요?', a: '캐스퍼는 175/65R15 또는 185/55R16 규격을 사용합니다. 일반 경차(14인치)보다 한 단계 큰 15~16인치로, 타이어 가격이 짝당 1~2만 원 더 높습니다.' },
    ],
    relatedSlugs: ['morning', 'ray'],
  },
  {
    slug: 'subcompact',
    name: '준중형',
    fullName: '준중형 세단 타이어',
    models: '아반떼, K3, 쏘울',
    sizeRange: '205/55R16 ~ 225/45R17',
    inchRange: '16~17인치',
    domesticPrice4: '36~52만 원',
    importPrice4: '52~80만 원',
    cycle: '40,000~50,000km',
    years: '3~5년',
    description: '준중형 세단은 가장 보편적인 16~17인치 규격을 사용하며, 브랜드 간 가격 경쟁이 가장 치열한 구간입니다. 선택지가 넓어 가성비 좋은 제품을 고르기 좋습니다.',
    tip: '16인치와 17인치 사이에서 고민된다면, 16인치가 짝당 1~3만 원 저렴하고 승차감도 좋습니다. 17인치는 외관과 코너링에서 유리합니다.',
    brands: [
      { brand: '한국타이어', product: '벤투스 S2 AS (H462)', origin: '국산', size: '205/55R16', price1: '9~12만 원', price4: '36~48만 원', treadwear: '500', wetGrip: 'A', noise: '69dB', strength: '정숙성, 승차감, 수명 균형', weakness: '스포츠 주행 시 한계', rating: 4.4 },
      { brand: '금호타이어', product: '마제스티9 솔루스 TA91', origin: '국산', size: '205/55R16', price1: '9~11만 원', price4: '36~44만 원', treadwear: '480', wetGrip: 'A', noise: '67dB', strength: '정숙성 최상급, OE 채택', weakness: '가격이 금호 중 높은 편', rating: 4.5 },
      { brand: '넥센타이어', product: '엔페라 AU7', origin: '국산', size: '205/55R16', price1: '8~10만 원', price4: '32~40만 원', treadwear: '460', wetGrip: 'B', noise: '70dB', strength: '가성비 최고', weakness: '정숙성 보통', rating: 4.0 },
      { brand: '미쉐린', product: '프라이머시4+', origin: '프랑스', size: '205/55R16', price1: '13~17만 원', price4: '52~68만 원', treadwear: '460', wetGrip: 'A', noise: '68dB', strength: '마모 후에도 성능 유지, 정숙성', weakness: '가격 높음', rating: 4.6 },
      { brand: '콘티넨탈', product: '울트라컨택트 UC6', origin: '독일', size: '205/55R16', price1: '12~16만 원', price4: '48~64만 원', treadwear: '420', wetGrip: 'A', noise: '69dB', strength: '제동력, 조향 응답성', weakness: '마모 약간 빠름', rating: 4.4 },
      { brand: '브리지스톤', product: '투란자 T005', origin: '일본', size: '205/55R16', price1: '11~15만 원', price4: '44~60만 원', treadwear: '440', wetGrip: 'A', noise: '70dB', strength: '내구성, 안정감', weakness: '정숙성 보통', rating: 4.2 },
    ],
    faq: [
      { q: '아반떼 타이어 4짝 교체 비용은 얼마인가요?', a: '16인치 기준 국산 36~48만 원, 수입 48~68만 원입니다. 17인치 옵션은 짝당 2~4만 원 더 비쌉니다. 공임비 6~8만 원 별도.' },
      { q: '준중형에 가장 가성비 좋은 타이어는?', a: '넥센 엔페라 AU7이 짝당 8~10만 원으로 가성비가 가장 좋고, 금호 마제스티9은 정숙성까지 원한다면 좋은 선택입니다.' },
      { q: '16인치와 17인치 중 어떤 것이 좋나요?', a: '16인치가 짝당 1~3만 원 저렴하고 승차감이 좋습니다. 17인치는 코너링과 외관에서 유리하지만 노면 충격이 더 전달됩니다.' },
      { q: '아반떼 순정 타이어는 무엇인가요?', a: '아반떼 CN7은 금호 마제스티9 솔루스 TA91 또는 한국타이어 벤투스 프라임4가 순정(OE) 장착됩니다. 교체 시 동급 이상 제품을 선택하면 됩니다.' },
    ],
    relatedSlugs: ['avante', 'k3'],
  },
  {
    slug: 'midsize',
    name: '중형 세단',
    fullName: '중형 세단 타이어',
    models: '쏘나타, K5, 말리부',
    sizeRange: '215/55R17 ~ 235/45R18',
    inchRange: '17~18인치',
    domesticPrice4: '44~64만 원',
    importPrice4: '64~100만 원',
    cycle: '35,000~50,000km',
    years: '3~5년',
    description: '중형 세단은 17~18인치 규격이 주류이며, 승차감과 정숙성이 중요한 구간입니다. 국산 프리미엄 라인과 수입 브랜드의 성능 차이가 줄어드는 구간이기도 합니다.',
    tip: '쏘나타·K5 오너라면 금호 마제스티9이 순정(OE) 타이어로 검증된 선택입니다. 정숙성을 더 원한다면 미쉐린 프라이머시4+가 한 단계 위입니다.',
    brands: [
      { brand: '한국타이어', product: '벤투스 S2 AS (H462)', origin: '국산', size: '225/45R17', price1: '11~15만 원', price4: '44~60만 원', treadwear: '500', wetGrip: 'A', noise: '69dB', strength: '올라운드 성능, 수명 우수', weakness: '극한 성능은 수입 대비 부족', rating: 4.4 },
      { brand: '금호타이어', product: '마제스티9 솔루스 TA91', origin: '국산', size: '225/45R17', price1: '11~14만 원', price4: '44~56만 원', treadwear: '480', wetGrip: 'A', noise: '67dB', strength: '정숙성 최고, 쏘나타·K5 OE', weakness: '고속 코너링 보통', rating: 4.5 },
      { brand: '넥센타이어', product: '엔페라 AU7', origin: '국산', size: '225/45R17', price1: '10~13만 원', price4: '40~52만 원', treadwear: '460', wetGrip: 'B', noise: '70dB', strength: '가성비, 내구성', weakness: '정숙성 보통', rating: 4.0 },
      { brand: '미쉐린', product: '프라이머시4+', origin: '프랑스', size: '225/45R17', price1: '16~21만 원', price4: '64~84만 원', treadwear: '460', wetGrip: 'A', noise: '68dB', strength: '정숙성·안전성 최상급', weakness: '가격 높음', rating: 4.7 },
      { brand: '콘티넨탈', product: '프리미엄컨택트7', origin: '독일', size: '225/45R17', price1: '15~20만 원', price4: '60~80만 원', treadwear: '400', wetGrip: 'A', noise: '69dB', strength: '제동력, 핸들링 최상급', weakness: '마모 빠른 편', rating: 4.5 },
      { brand: '브리지스톤', product: '투란자 T005A', origin: '일본', size: '225/45R17', price1: '14~18만 원', price4: '56~72만 원', treadwear: '440', wetGrip: 'A', noise: '70dB', strength: '안정감, 내구성', weakness: '정숙성 보통', rating: 4.3 },
    ],
    faq: [
      { q: '쏘나타 타이어 4짝 교체 비용은 얼마인가요?', a: '17인치 기준 국산 44~60만 원, 수입 60~84만 원입니다. 18인치 옵션은 짝당 3~5만 원 추가됩니다. 공임비 6~8만 원 별도.' },
      { q: '쏘나타 순정 타이어는 무엇인가요?', a: '쏘나타 DN8은 금호 마제스티9 솔루스 TA91(225/45R17)이 기본 OE 타이어입니다. 교체 시 동급 이상 제품을 선택하면 됩니다.' },
      { q: '중형 세단에 가장 정숙한 타이어는?', a: '금호 마제스티9(67dB)이 국산 중 가장 정숙하고, 미쉐린 프라이머시4+(68dB)가 전체 1위입니다. 두 제품 모두 중형 세단에 최적화되어 있습니다.' },
      { q: '17인치와 18인치 중 어떤 것이 좋나요?', a: '17인치가 승차감·정숙성·가격 모두 유리합니다. 18인치는 외관과 코너링에서 좋지만 짝당 3~5만 원 비싸고 노면 충격이 더 전달됩니다.' },
    ],
    relatedSlugs: ['sonata', 'k5'],
  },
  {
    slug: 'fullsize',
    name: '대형 세단',
    fullName: '대형 세단 타이어',
    models: '그랜저, K8, 제네시스 G80',
    sizeRange: '235/45R18 ~ 245/40R19',
    inchRange: '18~19인치',
    domesticPrice4: '56~80만 원',
    importPrice4: '80~120만 원',
    cycle: '30,000~45,000km',
    years: '3~4년',
    description: '대형 세단은 18~19인치 대구경 타이어를 사용하며, 정숙성과 승차감이 핵심입니다. 차량 가격대가 높은 만큼 프리미엄 타이어를 선택하는 비율이 높습니다.',
    tip: '그랜저·K8은 정숙성이 핵심이므로 미쉐린 프라이머시4+나 금호 마제스티9을 추천합니다. 제네시스 G80은 콘티넨탈이나 미쉐린이 OE로 많이 장착됩니다.',
    brands: [
      { brand: '한국타이어', product: '벤투스 S2 AS (H462)', origin: '국산', size: '235/45R18', price1: '14~18만 원', price4: '56~72만 원', treadwear: '500', wetGrip: 'A', noise: '70dB', strength: '수명 우수, 안정감', weakness: '정숙성 미쉐린 대비 부족', rating: 4.3 },
      { brand: '금호타이어', product: '마제스티9 솔루스 TA91', origin: '국산', size: '235/45R18', price1: '14~17만 원', price4: '56~68만 원', treadwear: '480', wetGrip: 'A', noise: '68dB', strength: '정숙성 국산 최고, 그랜저 OE', weakness: '스포츠 성능 보통', rating: 4.5 },
      { brand: '미쉐린', product: '프라이머시4+', origin: '프랑스', size: '235/45R18', price1: '20~26만 원', price4: '80~104만 원', treadwear: '460', wetGrip: 'A', noise: '68dB', strength: '정숙성·안전성·수명 최상급', weakness: '가격 높음', rating: 4.8 },
      { brand: '콘티넨탈', product: '프리미엄컨택트7', origin: '독일', size: '235/45R18', price1: '19~24만 원', price4: '76~96만 원', treadwear: '400', wetGrip: 'A', noise: '69dB', strength: '제동력·핸들링 최상급', weakness: '마모 빠른 편', rating: 4.6 },
      { brand: '브리지스톤', product: '투란자 T005A', origin: '일본', size: '235/45R18', price1: '17~22만 원', price4: '68~88만 원', treadwear: '440', wetGrip: 'A', noise: '70dB', strength: '안정감, 내구성, G80 OE', weakness: '정숙성 보통', rating: 4.3 },
      { brand: '피렐리', product: '친투라토 P7C2', origin: '이탈리아', size: '235/45R18', price1: '18~23만 원', price4: '72~92만 원', treadwear: '400', wetGrip: 'A', noise: '70dB', strength: '핸들링, 고속 안정성', weakness: '정숙성 보통, 마모 빠름', rating: 4.2 },
    ],
    faq: [
      { q: '그랜저 타이어 4짝 교체 비용은 얼마인가요?', a: '18인치 기준 국산 56~72만 원, 수입 76~104만 원입니다. 19인치 옵션은 짝당 4~6만 원 추가됩니다. 공임비 8~10만 원 별도.' },
      { q: '그랜저에 가장 정숙한 타이어는?', a: '미쉐린 프라이머시4+(68dB)와 금호 마제스티9(68dB)이 동급 최고입니다. 그랜저 GN7 순정은 금호 마제스티9입니다.' },
      { q: 'K8 순정 타이어는 무엇인가요?', a: 'K8은 금호 마제스티9 솔루스 TA91(235/45R18)이 기본 OE 타이어입니다. 19인치 옵션은 245/40R19 규격입니다.' },
      { q: '대형 세단 타이어 교체 주기가 짧은 이유는?', a: '차체가 무겁고(1.7~2톤) 대구경 타이어는 접지면이 넓어 마모가 빠릅니다. 30,000~45,000km 또는 3~4년 주기로 교체합니다.' },
    ],
    relatedSlugs: ['grandeur', 'k8'],
  },
  {
    slug: 'suv',
    name: 'SUV',
    fullName: 'SUV 타이어',
    models: '투싼, 쏘렌토, 팰리세이드, 싼타페',
    sizeRange: '235/55R19 ~ 265/45R20',
    inchRange: '19~20인치',
    domesticPrice4: '60~88만 원',
    importPrice4: '88~130만 원',
    cycle: '35,000~50,000km',
    years: '3~5년',
    description: 'SUV는 차체가 무겁고 하중이 높아 내구성이 중요합니다. SUV 전용 타이어는 하중지수(LI)가 높고 사이드월이 강화되어 있으며, 일반 승용 타이어보다 10~20% 비쌉니다.',
    tip: 'SUV는 반드시 SUV 전용 또는 하중지수가 높은 제품을 선택해야 합니다. 승용차용 타이어를 장착하면 하중 초과로 사이드월 파손 위험이 있습니다.',
    brands: [
      { brand: '한국타이어', product: '다이나프로 HPX (RA33D)', origin: '국산', size: '235/55R19', price1: '15~20만 원', price4: '60~80만 원', treadwear: '500', wetGrip: 'A', noise: '71dB', strength: '내구성, 수명 우수, SUV 전용', weakness: '정숙성 보통', rating: 4.3 },
      { brand: '금호타이어', product: '크루젠 HP71', origin: '국산', size: '235/55R19', price1: '14~18만 원', price4: '56~72만 원', treadwear: '480', wetGrip: 'A', noise: '70dB', strength: '가성비, 정숙성, 투싼 OE', weakness: '고속 안정성 보통', rating: 4.2 },
      { brand: '넥센타이어', product: '로디안 GTX', origin: '국산', size: '235/55R19', price1: '13~17만 원', price4: '52~68만 원', treadwear: '460', wetGrip: 'B', noise: '71dB', strength: '가성비 최고, SUV 전용', weakness: '웻 그립 보통', rating: 4.0 },
      { brand: '미쉐린', product: '프라이머시 SUV+', origin: '프랑스', size: '235/55R19', price1: '22~28만 원', price4: '88~112만 원', treadwear: '460', wetGrip: 'A', noise: '69dB', strength: '정숙성·안전성 SUV 최고', weakness: '가격 높음', rating: 4.7 },
      { brand: '콘티넨탈', product: '프리미엄컨택트6 SUV', origin: '독일', size: '235/55R19', price1: '20~26만 원', price4: '80~104만 원', treadwear: '420', wetGrip: 'A', noise: '70dB', strength: '제동력, 핸들링', weakness: '마모 빠른 편', rating: 4.5 },
      { brand: '브리지스톤', product: '알렌자 001', origin: '일본', size: '235/55R19', price1: '19~24만 원', price4: '76~96만 원', treadwear: '440', wetGrip: 'A', noise: '71dB', strength: '안정감, 팰리세이드 OE', weakness: '가격 높음', rating: 4.4 },
    ],
    faq: [
      { q: '투싼 타이어 4짝 교체 비용은 얼마인가요?', a: '19인치 기준 국산 56~80만 원, 수입 80~112만 원입니다. 공임비 8~10만 원 별도. 온라인 구매 시 20~30% 절약 가능합니다.' },
      { q: 'SUV에 승용차 타이어를 장착해도 되나요?', a: '권장하지 않습니다. SUV는 차체가 무거워 하중지수(LI)가 높은 SUV 전용 타이어가 필요합니다. 승용차용 장착 시 사이드월 파손 위험이 있습니다.' },
      { q: '팰리세이드 타이어 규격은 무엇인가요?', a: '팰리세이드는 245/50R20(20인치)이 기본이며, 일부 트림은 235/55R19(19인치)입니다. 20인치는 짝당 3~5만 원 더 비쌉니다.' },
      { q: 'SUV 타이어 교체 주기가 짧은 이유는?', a: 'SUV는 차체 중량이 1.8~2.3톤으로 무겁고, 높은 무게중심으로 타이어에 부담이 큽니다. 35,000~50,000km 또는 3~5년 주기로 교체합니다.' },
    ],
    relatedSlugs: ['tucson', 'sorento', 'palisade'],
  },
  {
    slug: 'ev',
    name: '전기차',
    fullName: '전기차 타이어',
    models: '아이오닉5, EV6, 테슬라 모델Y, BMW iX',
    sizeRange: '235/55R19 ~ 255/45R20',
    inchRange: '19~20인치',
    domesticPrice4: '64~96만 원',
    importPrice4: '96~140만 원',
    cycle: '30,000~40,000km',
    years: '3~4년',
    description: '전기차는 배터리로 인해 차체가 무겁고(2~2.5톤), 높은 순간 토크가 타이어에 부담을 줍니다. EV 전용 타이어는 하중지수가 높고, 소음이 적으며, 회전저항이 낮아 주행거리를 늘려줍니다.',
    tip: '전기차에는 반드시 EV 전용 또는 EV 호환 타이어를 선택하세요. 일반 타이어 대비 마모가 20~30% 빠르고, EV 전용은 소음 저감 기술(폼 인사이드)이 적용되어 실내 정숙성이 크게 향상됩니다.',
    brands: [
      { brand: '한국타이어', product: 'iON 에보 (IH01)', origin: '국산', size: '255/45R20', price1: '16~22만 원', price4: '64~88만 원', treadwear: '460', wetGrip: 'A', noise: '68dB', strength: 'EV 전용 설계, 정숙성, 주행거리 최적화', weakness: '일반 타이어 대비 가격 높음', rating: 4.5 },
      { brand: '금호타이어', product: 'ECSTA PS71 EV', origin: '국산', size: '255/45R20', price1: '15~20만 원', price4: '60~80만 원', treadwear: '440', wetGrip: 'A', noise: '69dB', strength: 'EV 전용, 가성비, 아이오닉5 OE', weakness: '수명 보통', rating: 4.3 },
      { brand: '넥센타이어', product: 'N FERA 프라임 EV', origin: '국산', size: '255/45R20', price1: '14~19만 원', price4: '56~76만 원', treadwear: '420', wetGrip: 'B', noise: '70dB', strength: 'EV 전용, 가성비 최고', weakness: '정숙성 보통', rating: 4.0 },
      { brand: '미쉐린', product: 'e프라이머시', origin: '프랑스', size: '255/45R20', price1: '24~32만 원', price4: '96~128만 원', treadwear: '460', wetGrip: 'A', noise: '67dB', strength: 'EV 최적화, 주행거리 +7%, 정숙성 최고', weakness: '가격 매우 높음', rating: 4.8 },
      { brand: '콘티넨탈', product: 'EcoContact 6Q', origin: '독일', size: '255/45R20', price1: '22~28만 원', price4: '88~112만 원', treadwear: '400', wetGrip: 'A', noise: '68dB', strength: '제동력, 테슬라 OE', weakness: '마모 빠른 편', rating: 4.5 },
      { brand: '피렐리', product: 'P Zero E', origin: '이탈리아', size: '255/45R20', price1: '23~30만 원', price4: '92~120만 원', treadwear: '380', wetGrip: 'A', noise: '69dB', strength: '핸들링, BMW iX OE', weakness: '마모 빠름, 가격 높음', rating: 4.4 },
    ],
    faq: [
      { q: '전기차 타이어가 일반 타이어보다 비싼 이유는?', a: '전기차 전용 타이어는 높은 하중지수, 소음 저감 폼, 낮은 회전저항 등 특수 기술이 적용됩니다. 일반 타이어 대비 20~30% 비싸지만, 주행거리와 정숙성에서 확실한 차이가 있습니다.' },
      { q: '아이오닉5 타이어 4짝 교체 비용은 얼마인가요?', a: '20인치 기준 국산 EV 전용 60~88만 원, 수입 88~128만 원입니다. 19인치 옵션은 짝당 3~5만 원 저렴합니다. 공임비 8~10만 원 별도.' },
      { q: '전기차에 일반 타이어를 장착해도 되나요?', a: '장착은 가능하지만 권장하지 않습니다. 일반 타이어는 전기차의 무게와 토크를 감당하기 어려워 마모가 30~40% 빨라지고, 소음도 크게 증가합니다.' },
      { q: '전기차 타이어 교체 주기가 짧은 이유는?', a: '전기차는 배터리로 인해 차체가 2~2.5톤으로 무겁고, 순간 토크가 높아 출발 시 타이어에 큰 부담을 줍니다. 30,000~40,000km 또는 3~4년 주기로 교체합니다.' },
    ],
    relatedSlugs: ['ioniq5', 'ev6', 'tesla-model-y', 'bmw-ix'],
  },
  {
    slug: 'imported',
    name: '수입차',
    fullName: '수입차 타이어',
    models: '벤츠 E/C/GLC/GLE, BMW 3/5/X3/X5, 아우디 A4/A6, 볼보 XC60, 렉서스 ES/RX, 토요타 캠리, 폭스바겐 티구안, 포르쉐 카이엔, 미니 쿠퍼',
    sizeRange: '195/55R16 ~ 295/35R21',
    inchRange: '16~21인치',
    domesticPrice4: '48~120만 원',
    importPrice4: '72~200만 원',
    cycle: '25,000~40,000km',
    years: '2.5~4년',
    description: '수입차는 OE(순정) 타이어가 대부분 수입 프리미엄 브랜드이며, 런플랫 타이어 장착 차량이 많습니다. 독일 3사(벤츠·BMW·아우디)는 고성능 스포츠 타이어가 기본이라 마모가 빠르고 가격이 높습니다. 일본차(렉서스·토요타)는 컴포트 타이어 위주로 비교적 저렴합니다. 국산 프리미엄 타이어로 대체하면 30~40% 비용을 절약할 수 있습니다.',
    tip: 'BMW는 대부분 런플랫 타이어가 기본이므로, 일반 타이어로 교체 시 스페어타이어나 응급 키트를 별도로 준비해야 합니다. 벤츠·아우디는 일반 타이어 교체가 자유롭습니다. 렉서스·토요타는 국산 컴포트 타이어도 잘 맞으며, 포르쉐 카이엔은 N-등급(포르쉐 인증) 타이어 장착을 권장합니다.',
    brands: [
      { brand: '한국타이어', product: '벤투스 S1 evo3 (K127)', origin: '국산', size: '245/40R19', price1: '15~22만 원', price4: '60~88만 원', treadwear: '320', wetGrip: 'A', noise: '70dB', strength: '벤츠·BMW OE 채택, 가성비', weakness: '수명 짧은 편 (스포츠)', rating: 4.4 },
      { brand: '금호타이어', product: 'ECSTA PS71', origin: '국산', size: '245/40R19', price1: '14~20만 원', price4: '56~80만 원', treadwear: '340', wetGrip: 'A', noise: '71dB', strength: '가성비 최고, 수입차 대체용', weakness: '브랜드 인지도', rating: 4.1 },
      { brand: '넥센타이어', product: 'N FERA SU1', origin: '국산', size: '245/40R19', price1: '12~18만 원', price4: '48~72만 원', treadwear: '300', wetGrip: 'A', noise: '72dB', strength: '국산 중 가장 저렴, 합리적 성능', weakness: '소음 다소 큼', rating: 3.9 },
      { brand: '미쉐린', product: '파일럿 스포츠5', origin: '프랑스', size: '245/40R19', price1: '25~35만 원', price4: '100~140만 원', treadwear: '340', wetGrip: 'A', noise: '69dB', strength: '핸들링·제동력·수명 최상급', weakness: '가격 매우 높음', rating: 4.9 },
      { brand: '미쉐린', product: '프라이머시4+ (컴포트)', origin: '프랑스', size: '235/45R18', price1: '20~26만 원', price4: '80~104만 원', treadwear: '460', wetGrip: 'A', noise: '68dB', strength: '정숙성 최고, 렉서스·캠리에 최적', weakness: '스포츠 성능 보통', rating: 4.7 },
      { brand: '콘티넨탈', product: '스포츠컨택트7', origin: '독일', size: '245/40R19', price1: '23~32만 원', price4: '92~128만 원', treadwear: '300', wetGrip: 'A', noise: '70dB', strength: '제동력 세계 최고, BMW OE', weakness: '마모 빠름', rating: 4.7 },
      { brand: '브리지스톤', product: '포텐자 스포츠', origin: '일본', size: '245/40R19', price1: '21~28만 원', price4: '84~112만 원', treadwear: '320', wetGrip: 'A', noise: '71dB', strength: '안정감, 내구성, 렉서스 OE', weakness: '정숙성 보통', rating: 4.3 },
      { brand: '피렐리', product: 'P Zero PZ4', origin: '이탈리아', size: '245/40R19', price1: '22~30만 원', price4: '88~120만 원', treadwear: '300', wetGrip: 'A', noise: '71dB', strength: '핸들링 최상급, 벤츠·BMW·포르쉐 OE', weakness: '마모 빠름, 소음', rating: 4.5 },
      { brand: '피렐리', product: 'P Zero PZ4 (N-등급)', origin: '이탈리아', size: '275/40R20', price1: '35~45만 원', price4: '140~180만 원', treadwear: '280', wetGrip: 'A', noise: '72dB', strength: '포르쉐 공식 인증, 카이엔 전용', weakness: '최고가, 마모 빠름', rating: 4.6 },
      { brand: '콘티넨탈', product: '프리미엄컨택트6 SUV', origin: '독일', size: '255/50R19', price1: '20~26만 원', price4: '80~104만 원', treadwear: '420', wetGrip: 'A', noise: '70dB', strength: '수입 SUV 최적화, GLC·X3에 적합', weakness: '스포츠 성능 보통', rating: 4.5 },
    ],
    faq: [
      { q: '벤츠 E클래스 타이어 4짝 교체 비용은 얼마인가요?', a: '19인치 기준 국산 60~88만 원, 수입 88~140만 원입니다. 20인치 AMG 패키지는 짝당 5~10만 원 추가됩니다. 공임비 8~10만 원 별도.' },
      { q: '벤츠 GLC 타이어 4짝 교체 비용은 얼마인가요?', a: '19인치 기준 국산 64~92만 원, 수입 92~130만 원입니다. GLC AMG 20인치는 짝당 5~8만 원 추가됩니다. SUV 전용 타이어를 선택해야 하중을 감당할 수 있습니다.' },
      { q: 'BMW X3, X5 타이어 교체 비용은 얼마인가요?', a: 'X3(19인치): 국산 60~88만 원, 수입 88~128만 원 / X5(20인치): 국산 80~110만 원, 수입 110~160만 원입니다. BMW는 런플랫 기본이므로 일반 교체 시 30~40% 절약 가능합니다.' },
      { q: '수입차에 국산 타이어를 장착해도 되나요?', a: '한국타이어 벤투스 S1 evo3는 벤츠·BMW 등에 OE(순정)로 납품되는 제품입니다. 국산 프리미엄 라인은 수입차에도 충분한 성능을 제공하며 30~40% 저렴합니다.' },
      { q: 'BMW 런플랫 타이어를 일반 타이어로 교체해도 되나요?', a: 'BMW는 스페어타이어가 없으므로 런플랫 유지를 권장합니다. 일반 타이어로 교체 시 응급 키트나 스페어를 별도 준비해야 합니다. 런플랫은 일반 대비 30~50% 비쌉니다.' },
      { q: '렉서스·토요타 타이어 교체 비용은 독일차보다 저렴한가요?', a: '렉서스 ES·토요타 캠리는 컴포트 타이어(17~18인치)가 기본이라 독일차 대비 30~40% 저렴합니다. 국산 4짝 48~72만 원, 수입 68~100만 원 수준입니다. 렉서스 RX는 19~20인치로 독일차와 비슷합니다.' },
      { q: '폭스바겐 티구안 타이어 교체 비용은 얼마인가요?', a: '18인치 기준 국산 52~76만 원, 수입 76~108만 원입니다. 독일 3사(벤츠·BMW·아우디) 대비 한 단계 작은 규격이라 20~30% 저렴합니다.' },
      { q: '포르쉐 카이엔 타이어 교체 비용은 얼마인가요?', a: '20인치 기준 국산 96~130만 원, 수입 130~200만 원입니다. 포르쉐 인증 N-등급 타이어 장착 시 짝당 35~45만 원으로 수입차 중 최고가입니다. 21인치 옵션은 짝당 10만 원 이상 추가됩니다.' },
      { q: '미니 쿠퍼 타이어 교체 비용은 얼마인가요?', a: '16인치 기준 국산 40~56만 원, 수입 56~80만 원입니다. 17인치 스포츠 패키지는 짝당 2~4만 원 추가됩니다. 수입차 중에서는 타이어 비용이 가장 저렴한 편입니다.' },
      { q: '수입차 타이어 교체 주기가 짧은 이유는?', a: '수입차는 고성능 스포츠 타이어가 기본이라 마모가 빠릅니다. 독일차는 25,000~35,000km, 일본차는 35,000~45,000km가 일반적입니다. 포르쉐 카이엔은 20,000~30,000km로 가장 짧습니다.' },
    ],
    relatedSlugs: ['benz-e-class', 'benz-c-class', 'benz-glc', 'benz-gle', 'bmw-5-series', 'bmw-3-series', 'bmw-x3', 'bmw-x5', 'audi-a6', 'audi-a4', 'volvo-xc60', 'lexus-es', 'lexus-rx', 'toyota-camry', 'vw-tiguan', 'porsche-cayenne', 'mini-cooper'],
  },
];

export function getTireCategory(slug: string): TireCategory | undefined {
  return TIRE_CATEGORIES.find((c) => c.slug === slug);
}

export function getAllTireSlugs(): string[] {
  return TIRE_CATEGORIES.map((c) => c.slug);
}
