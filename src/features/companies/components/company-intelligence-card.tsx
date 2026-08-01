type Props = {
  leadScore: number;
  growthScore: number;
  hiringScore: number;
  updatedAt?: string | null;
};

export default function CompanyIntelligenceCard({
  leadScore,
  growthScore,
  hiringScore,
  updatedAt,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Company Intelligence
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <Metric title="Lead Score" value={`${leadScore}/100`} />
        <Metric title="Growth Score" value={`${growthScore}/100`} />
        <Metric title="Hiring Score" value={`${hiringScore}/100`} />
        <Metric
          title="Last Analysis"
          value={updatedAt ?? "Never"}
        />

      </div>

    </div>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border p-4">

      <div className="text-sm text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-2xl font-bold">
        {value}
      </div>

    </div>
  );
}
