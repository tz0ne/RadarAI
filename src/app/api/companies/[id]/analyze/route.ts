import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { collectWebsite } from "@/features/intelligence/collectors/website.collector";
import { runIntelligence } from "@/features/intelligence/engine/intelligence.engine";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const company = await prisma.company.findUnique({
    where: { id },
  });

  if (!company) {
    return NextResponse.json(
      { error: "Company not found" },
      { status: 404 }
    );
  }

  const collectedData = await collectWebsite({
    name: company.name,
    website: company.website,
    industry: company.industry,
    country: company.country,
  });

  const intelligence = await runIntelligence(collectedData);

  await prisma.company.update({
    where: { id },
    data: {
      aiSummary: intelligence.summary,
      leadScore: intelligence.leadScore,
      growthScore: intelligence.growthScore,
      hiringScore: intelligence.hiringScore,
      buyingSignals: intelligence.buyingSignals,
      lastEnrichedAt: new Date(),
    },
  });

  return NextResponse.json({
    success: true,
  });
}
