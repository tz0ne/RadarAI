import { NextResponse } from "next/server";
import { companyService } from "@/services/company.service";

export async function GET() {
  const companies = await companyService.getCompanies();

  return NextResponse.json(companies);
}
