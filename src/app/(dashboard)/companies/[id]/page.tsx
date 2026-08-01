import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CompanyPage({ params }: Props) {
  const { id } = await params;

  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });

  if (!company) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          {company.name}
        </h1>

        <p className="text-slate-500">
          {company.industry}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 space-y-4">

        <div>
          <strong>Website:</strong>{" "}
          {company.website ?? "-"}
        </div>

        <div>
          <strong>Country:</strong>{" "}
          {company.country ?? "-"}
        </div>

        <div>
          <strong>City:</strong>{" "}
          {company.city ?? "-"}
        </div>

      </div>

      <div className="rounded-xl border bg-white p-6">

        <h2 className="text-xl font-bold mb-3">
          AI Summary
        </h2>

        <p className="text-slate-500">
          AI Summary will be generated in BUILD-011.
        </p>

      </div>

    </div>
  );
}
