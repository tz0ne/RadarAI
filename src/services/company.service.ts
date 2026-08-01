import { companyRepository } from "@/repositories/company.repository";

export class CompanyService {
  async getCompanies() {
    return companyRepository.findAll();
  }

  async createCompany(data: {
    name: string;
    website?: string;
    industry?: string;
    country?: string;
    city?: string;
    workspaceId: string;
  }) {
    return companyRepository.create(data);
  }
}

export const companyService = new CompanyService();
