"use client";

export type Company = {
  id: string;
  name: string;
  industry: string | null;
  country: string | null;
  website: string | null;
};

type Props = {
  companies: Company[];
};

export default function CompanyTable({ companies }: Props) {
  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50 border-b">
          <tr>
            <th className="text-left p-4">Company</th>
            <th className="text-left p-4">Industry</th>
            <th className="text-left p-4">Country</th>
            <th className="text-left p-4">Website</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company) => (
            <tr
              key={company.id}
              className="border-b hover:bg-slate-50"
            >
              <td className="p-4 font-medium">
                {company.name}
              </td>

              <td className="p-4">
                {company.industry ?? "-"}
              </td>

              <td className="p-4">
                {company.country ?? "-"}
              </td>

              <td className="p-4">
                {company.website ? (
                  <a
                    href={company.website}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    {company.website}
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}

          {companies.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="p-10 text-center text-slate-500"
              >
                No companies found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
