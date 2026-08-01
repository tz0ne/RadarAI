export interface CollectedData {
  company: string;
  website?: string;

  websiteText?: string;
  news?: string[];
  technologies?: string[];

  country?: string;
  industry?: string;
}

export interface IntelligenceResult {
  summary: string;

  leadScore: number;
  growthScore: number;
  hiringScore: number;

  buyingSignals: string[];
}
