"use client";

import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { Company } from "./use-companies";

export function useCompanySearch(companies: Company[]) {
  const [search, setSearch] = useState("");

  const [value] = useDebounce(search, 200);

  const filtered = useMemo(() => {
    const q = value.toLowerCase();

    return companies.filter((c) =>
      [
        c.name,
        c.industry,
        c.country,
        c.website,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [companies, value]);

  return {
    search,
    setSearch,
    filtered,
  };
}
