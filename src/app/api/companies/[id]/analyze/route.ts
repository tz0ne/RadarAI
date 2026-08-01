import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

  await prisma.company.update({
    where: { id },
    data: {
      aiSummary:
        `${company.name} is a promising company that matches the RadarAI demo analysis.`,
      leadScore: 82,
      growthScore: 75,
      hiringScore: 68,
      lastEnrichedAt: new Date(),
    },
  });

  return NextResponse.json({
    success: true,
  });
}
