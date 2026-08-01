"use client";

type AnalyzeCompanyButtonProps = {
  companyId: string;
};

export default function AnalyzeCompanyButton({ companyId }: AnalyzeCompanyButtonProps) {
  return (
    <button
      onClick={async () => {
        await fetch(`/api/companies/${companyId}/analyze`, {
          method: "POST",
        });

        location.reload();
      }}
      className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
    >
      Analyze Company
    </button>
  );
}
