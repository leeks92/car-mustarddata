// ============================================================
// 숫자 포맷 유틸리티
// ============================================================

export function formatNumber(num: number): string {
  return num.toLocaleString('ko-KR');
}

export function formatWon(num: number): string {
  return `${num.toLocaleString('ko-KR')}원`;
}

export function formatKoreanWon(num: number): string {
  if (num >= 100000000) {
    const eok = Math.floor(num / 100000000);
    const remainder = num % 100000000;
    if (remainder >= 10000) {
      const man = Math.floor(remainder / 10000);
      return `${eok}억 ${formatNumber(man)}만원`;
    }
    return `${eok}억원`;
  }
  if (num >= 10000) {
    const man = Math.floor(num / 10000);
    const remainder = num % 10000;
    if (remainder > 0) {
      return `${formatNumber(man)}만 ${formatNumber(remainder)}원`;
    }
    return `${formatNumber(man)}만원`;
  }
  return formatWon(num);
}

// ============================================================
// 1. 자동차세 계산
// ============================================================

export interface CarTaxResult {
  displacement: number;
  carAge: number;
  baseTax: number;
  localEducationTax: number;
  totalTax: number;
  discountRate: number;
  firstHalfTax: number;
  secondHalfTax: number;
  annualPaymentDiscount: number;
  annualPaymentAmounts: { month: string; discount: number; amount: number }[];
}

export type CarType =
  | 'sedan'
  | 'suv'
  | 'ev'
  | 'hybrid'
  | 'commercial';

export function calculateCarTax(
  displacement: number,
  carAge: number,
  carType: CarType
): CarTaxResult {
  let baseTax = 0;

  if (carType === 'ev') {
    baseTax = 100000;
  } else if (carType === 'commercial') {
    if (displacement <= 1600) {
      baseTax = displacement * 18;
    } else {
      baseTax = 1600 * 18 + (displacement - 1600) * 19;
    }
  } else {
    if (displacement <= 1000) {
      baseTax = displacement * 80;
    } else if (displacement <= 1600) {
      baseTax = displacement * 140;
    } else {
      baseTax = displacement * 200;
    }
  }

  // 차령 경감 (3년차부터 5%씩, 최대 50%)
  let discountRate = 0;
  if (carAge >= 3) {
    discountRate = Math.min((carAge - 2) * 5, 50);
  }

  baseTax = Math.round(baseTax * (1 - discountRate / 100));
  const localEducationTax = Math.round(baseTax * 0.3);
  const totalTax = baseTax + localEducationTax;

  // 연납 할인 (월별)
  const annualPaymentAmounts = [
    { month: '1월', discount: 4.57, amount: Math.round(totalTax * (1 - 0.0457)) },
    { month: '3월', discount: 3.76, amount: Math.round(totalTax * (1 - 0.0376)) },
    { month: '6월', discount: 2.52, amount: Math.round(totalTax * (1 - 0.0252)) },
    { month: '9월', discount: 1.26, amount: Math.round(totalTax * (1 - 0.0126)) },
  ];

  const annualPaymentDiscount = totalTax - annualPaymentAmounts[0].amount;

  // 분할 납부
  const halfTax = Math.round(totalTax / 2);

  return {
    displacement,
    carAge,
    baseTax,
    localEducationTax,
    totalTax,
    discountRate,
    firstHalfTax: halfTax,
    secondHalfTax: totalTax - halfTax,
    annualPaymentDiscount,
    annualPaymentAmounts,
  };
}

// ============================================================
// 2. 취등록세 계산
// ============================================================

export interface RegistrationTaxResult {
  vehiclePrice: number;
  acquisitionTaxRate: number;
  acquisitionTax: number;
  registrationTax: number;
  publicBond: number;
  stampTax: number;
  plateNumberFee: number;
  totalCost: number;
  reductions: string[];
}

export type VehicleCategory =
  | 'passenger'     // 승용차 (비영업용)
  | 'compact'       // 경차 (1000cc 이하)
  | 'commercial'    // 영업용
  | 'truck'         // 화물·특수
  | 'ev'            // 전기차
  | 'hybrid';       // 하이브리드

export function calculateRegistrationTax(
  vehiclePrice: number,
  category: VehicleCategory,
  isUsed: boolean,
  isMultiChild: boolean = false
): RegistrationTaxResult {
  const reductions: string[] = [];

  // 취득세율 결정
  let acquisitionTaxRate = 7; // 기본 승용차 7%

  if (category === 'compact') {
    acquisitionTaxRate = 4;
    reductions.push('경차 취득세율 4% 적용');
  } else if (category === 'commercial') {
    acquisitionTaxRate = 4;
    reductions.push('영업용 취득세율 4% 적용');
  } else if (category === 'truck') {
    acquisitionTaxRate = 5;
    reductions.push('화물·특수차량 취득세율 5% 적용');
  }

  let acquisitionTax = Math.round(vehiclePrice * (acquisitionTaxRate / 100));

  // 전기차 감면 (취득세 최대 140만원 감면)
  if (category === 'ev') {
    const evReduction = Math.min(acquisitionTax, 1400000);
    acquisitionTax -= evReduction;
    reductions.push(`전기차 취득세 감면 ${formatKoreanWon(evReduction)}`);
  }

  // 하이브리드 감면 (취득세 최대 40만원 감면)
  if (category === 'hybrid') {
    const hybridReduction = Math.min(acquisitionTax, 400000);
    acquisitionTax -= hybridReduction;
    reductions.push(`하이브리드 취득세 감면 ${formatKoreanWon(hybridReduction)}`);
  }

  // 다자녀 감면 (18세 미만 3자녀 이상, 취득세 면제 최대 200만원)
  if (isMultiChild) {
    const multiChildReduction = Math.min(acquisitionTax, 2000000);
    acquisitionTax -= multiChildReduction;
    reductions.push(`다자녀 취득세 감면 ${formatKoreanWon(multiChildReduction)}`);
  }

  // 공채 매입비 (시·도별 상이, 서울 기준 약 4~5%)
  // 승용차 기준 차량 가격의 약 4%를 공채로 매입하고 할인 매도 시 약 40% 손실
  const bondRate = category === 'compact' ? 0.02 : 0.04;
  const bondDiscountRate = 0.4; // 할인 매도 시 손실률
  const publicBond = Math.round(vehiclePrice * bondRate * bondDiscountRate);

  // 등록세 (인지세·증지)
  const stampTax = 3000; // 인지세
  const plateNumberFee = isUsed ? 12000 : 12000; // 번호판 대금

  // 등록비용 (등록면허세: 비영업용 승용 15,000원)
  const registrationTax = 15000;

  const totalCost =
    acquisitionTax + registrationTax + publicBond + stampTax + plateNumberFee;

  return {
    vehiclePrice,
    acquisitionTaxRate,
    acquisitionTax,
    registrationTax,
    publicBond,
    stampTax,
    plateNumberFee,
    totalCost,
    reductions,
  };
}

// ============================================================
// 3. 할부금 계산
// ============================================================

export interface InstallmentResult {
  principal: number;
  annualRate: number;
  months: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  schedule: InstallmentScheduleItem[];
}

export interface InstallmentScheduleItem {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export type RepaymentType = 'equal-payment' | 'equal-principal';

export function calculateInstallment(
  principal: number,
  annualRate: number,
  months: number,
  repaymentType: RepaymentType
): InstallmentResult {
  const monthlyRate = annualRate / 100 / 12;
  const schedule: InstallmentScheduleItem[] = [];
  let totalInterest = 0;
  let remainingBalance = principal;

  if (repaymentType === 'equal-payment') {
    // 원리금균등상환
    const monthlyPayment =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

    for (let i = 1; i <= months; i++) {
      const interest = Math.round(remainingBalance * monthlyRate);
      const principalPayment = Math.round(monthlyPayment) - interest;
      remainingBalance -= principalPayment;

      if (i === months) {
        remainingBalance = 0;
      }

      totalInterest += interest;
      schedule.push({
        month: i,
        payment: Math.round(monthlyPayment),
        principal: principalPayment,
        interest,
        remainingBalance: Math.max(0, remainingBalance),
      });
    }

    return {
      principal,
      annualRate,
      months,
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest,
      totalPayment: principal + totalInterest,
      schedule,
    };
  } else {
    // 원금균등상환
    const monthlyPrincipal = Math.round(principal / months);

    for (let i = 1; i <= months; i++) {
      const interest = Math.round(remainingBalance * monthlyRate);
      const actualPrincipal =
        i === months ? remainingBalance : monthlyPrincipal;
      remainingBalance -= actualPrincipal;

      totalInterest += interest;
      schedule.push({
        month: i,
        payment: actualPrincipal + interest,
        principal: actualPrincipal,
        interest,
        remainingBalance: Math.max(0, remainingBalance),
      });
    }

    return {
      principal,
      annualRate,
      months,
      monthlyPayment: schedule[0].payment,
      totalInterest,
      totalPayment: principal + totalInterest,
      schedule,
    };
  }
}

// ============================================================
// 4. 유류비 계산
// ============================================================

export interface FuelCostResult {
  distance: number;
  fuelEfficiency: number;
  fuelPrice: number;
  fuelType: string;
  fuelNeeded: number;
  totalCost: number;
  costPerKm: number;
}

export type FuelType = 'gasoline' | 'diesel' | 'lpg' | 'electric';

// 참고용 전국 평균 유가 (2026년 1월 기준, 빌드 시 갱신 가능)
export const DEFAULT_FUEL_PRICES: Record<FuelType, number> = {
  gasoline: 1650,
  diesel: 1500,
  lpg: 1050,
  electric: 300, // kWh당
};

export const FUEL_TYPE_LABELS: Record<FuelType, string> = {
  gasoline: '휘발유',
  diesel: '경유',
  lpg: 'LPG',
  electric: '전기',
};

export function calculateFuelCost(
  distance: number,
  fuelEfficiency: number,
  fuelPrice: number,
  fuelType: FuelType
): FuelCostResult {
  const fuelNeeded = distance / fuelEfficiency;
  const totalCost = Math.round(fuelNeeded * fuelPrice);
  const costPerKm = Math.round((totalCost / distance) * 10) / 10;

  return {
    distance,
    fuelEfficiency,
    fuelPrice,
    fuelType: FUEL_TYPE_LABELS[fuelType],
    fuelNeeded: Math.round(fuelNeeded * 100) / 100,
    totalCost,
    costPerKm,
  };
}

// ============================================================
// 5. 감가상각 계산
// ============================================================

export interface DepreciationResult {
  originalPrice: number;
  currentAge: number;
  mileage: number;
  estimatedValue: number;
  depreciationRate: number;
  depreciationAmount: number;
  yearlyValues: { year: number; value: number; rate: number }[];
}

export function calculateDepreciation(
  originalPrice: number,
  currentAge: number,
  mileage: number
): DepreciationResult {
  // 연식별 감가율 (정률법 기반, 중고차 시장 실무 반영)
  const yearlyRates = [
    0,      // 0년 (신차)
    0.20,   // 1년 20%
    0.15,   // 2년 15%
    0.12,   // 3년 12%
    0.10,   // 4년 10%
    0.08,   // 5년 8%
    0.07,   // 6년 7%
    0.06,   // 7년 6%
    0.05,   // 8년 5%
    0.04,   // 9년 4%
    0.04,   // 10년 4%
  ];

  const yearlyValues: { year: number; value: number; rate: number }[] = [];
  let currentValue = originalPrice;

  for (let year = 0; year <= Math.min(currentAge, 15); year++) {
    if (year > 0) {
      const rate = year <= 10 ? yearlyRates[year] : 0.03;
      currentValue = Math.round(currentValue * (1 - rate));
    }
    yearlyValues.push({
      year,
      value: currentValue,
      rate: Math.round(((originalPrice - currentValue) / originalPrice) * 100),
    });
  }

  // 주행거리 보정 (연간 평균 15,000km 기준)
  const expectedMileage = currentAge * 15000;
  const mileageDiff = mileage - expectedMileage;
  let mileageAdjustment = 1;

  if (mileageDiff > 0) {
    // 평균보다 많이 주행 → 가치 하락
    mileageAdjustment = 1 - Math.min(mileageDiff / 100000, 0.15);
  } else if (mileageDiff < 0) {
    // 평균보다 적게 주행 → 가치 상승
    mileageAdjustment = 1 + Math.min(Math.abs(mileageDiff) / 100000, 0.10);
  }

  const estimatedValue = Math.round(currentValue * mileageAdjustment);
  const depreciationAmount = originalPrice - estimatedValue;
  const depreciationRate = Math.round((depreciationAmount / originalPrice) * 100);

  return {
    originalPrice,
    currentAge,
    mileage,
    estimatedValue,
    depreciationRate,
    depreciationAmount,
    yearlyValues,
  };
}
