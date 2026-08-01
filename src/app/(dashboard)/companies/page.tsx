"use client";

import CompanyTable from "@/features/companies/components/company-table";
import { useCompanies } from "@/features/companies/hooks/use-companies";

export default function CompaniesPage() {
  const { data, isLoading, error } = useCompanies();

  if (isLoading) {
    return <div className="p-8">Loading companies...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-red-600">
        Failed to load companies.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Companies
        </h1>

        <p className="text-slate-500">
          RadarAI Company Database
        </p>
      </div>

      <CompanyTable companies={data ?? []} />
    </div>
  );
}
