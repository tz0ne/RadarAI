import { CollectedData } from "../types";

export async function collectWebsite(
  company: {
    name: string;
    website: string | null;
    industry: string | null;
    country: string | null;
  }
): Promise<CollectedData> {

  return {
    company: company.name,
    website: company.website ?? undefined,

    websiteText:
      "Website collector not implemented yet.",

    industry: company.industry ?? undefined,
    country: company.country ?? undefined,

    news: [],
    technologies: [],
  };
}
