"use client";

import { useQuery } from "@tanstack/react-query";

export type Company = {
  id: string;
  name: string;
  industry: string | null;
  country: string | null;
  website: string | null;
};

export function useCompanies() {
  return useQuery({
    queryKey: ["companies"],
    queryFn: async (): Promise<Company[]> => {
      const res = await fetch("/api/companies");

      if (!res.ok) {
        throw new Error("Failed to load companies");
      }

      return res.json();
    },
  });
}
