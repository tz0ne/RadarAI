import StatCard from "@/components/dashboard/stat-card";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Welcome back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Your AI Sales Intelligence Workspace
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Companies Indexed"
          value="0"
          description="Ready for enrichment"
        />

        <StatCard
          title="Searches Today"
          value="0"
          description="No searches yet"
        />

        <StatCard
          title="Lead Score Avg."
          value="--"
          description="Waiting for data"
        />

        <StatCard
          title="AI Credits"
          value="∞"
          description="Development mode"
        />

      </div>

    </div>
  );
}
