export type TuningStageNumber = 1 | "1+" | 2 | 3;

export interface DynoPoint {
  rpm: number;
  stockHP: number;
  tunedHP: number;
  stockTorqueNM: number;
  tunedTorqueNM: number;
}

export interface TuningStageData {
  stage: TuningStageNumber;
  title: string;
  tagline: string;
  description: string;
  gainHPEstimate: number;
  gainTorqueEstimateNM: number;
  priceCLPNeto: number; // En ZRPM se especifica "Sin IVA"
  requiredHardware: string[];
  recommendedHardware: string[];
  isCustomDynoTuned: boolean;
}

export interface WorkshopService {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  iconName: string;
  priceFromCLP?: number;
}

export interface ImportQuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  partNumberOrLink: string;
  productDescription: string;
  targetBudgetCLP?: number;
  urgency: "standard" | "express";
}
