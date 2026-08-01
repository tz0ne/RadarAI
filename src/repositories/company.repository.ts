import { prisma } from "@/lib/prisma";

export class CompanyRepository {
  async findAll() {
    return prisma.company.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async create(data: {
    name: string;
    website?: string;
    industry?: string;
    country?: string;
    city?: string;
    workspaceId: string;
  }) {
    return prisma.company.create({
      data,
    });
  }
}

export const companyRepository = new CompanyRepository();
