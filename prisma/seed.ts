import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const workspace = await prisma.workspace.upsert({
    where: {
      id: "demo-workspace",
    },
    update: {},
    create: {
      id: "demo-workspace",
      name: "RadarAI Demo Workspace",
    },
  });

  const companies = [
    {
      name: "Microsoft",
      website: "https://microsoft.com",
      industry: "Software",
      country: "USA",
      city: "Redmond",
    },
    {
      name: "OpenAI",
      website: "https://openai.com",
      industry: "Artificial Intelligence",
      country: "USA",
      city: "San Francisco",
    },
    {
      name: "Google",
      website: "https://google.com",
      industry: "Software",
      country: "USA",
      city: "Mountain View",
    },
    {
      name: "Amazon",
      website: "https://amazon.com",
      industry: "Cloud",
      country: "USA",
      city: "Seattle",
    },
    {
      name: "Stripe",
      website: "https://stripe.com",
      industry: "FinTech",
      country: "USA",
      city: "San Francisco",
    },
  ];

  for (const company of companies) {
    await prisma.company.create({
      data: {
        ...company,
        workspaceId: workspace.id,
      },
    });
  }

  console.log("✅ Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
