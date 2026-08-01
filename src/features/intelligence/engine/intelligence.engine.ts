import { CollectedData, IntelligenceResult } from "../types";

export async function runIntelligence(
  data: CollectedData
): Promise<IntelligenceResult> {

  return {

    summary:
      `${data.company} analysis placeholder.`,

    leadScore: 50,

    growthScore: 50,

    hiringScore: 50,

    buyingSignals: [],

  };
}
