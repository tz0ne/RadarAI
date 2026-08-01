import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let workspace = await prisma.workspace.findFirst();

  if (!workspace) {
    workspace = await prisma.workspace.create({
      data: {
        name: "RadarAI Demo",
      },
    });
  }

  const companies = [
    {
      name: "Microsoft",
      website: "https://microsoft.com",
      industry: "Software",
      country: "USA",
      city: "Redmond",
    },
    {
      name: "Google",
      website: "https://google.com",
      industry: "Software",
      country: "USA",
      city: "Mountain View",
    },
    {
      name: "OpenAI",
      website: "https://openai.com",
      industry: "Artificial Intelligence",
      country: "USA",
      city: "San Francisco",
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
    const exists = await prisma.company.findFirst({
      where: {
        name: company.name,
      },
    });

    if (!exists) {
      await prisma.company.create({
        data: {
          ...company,
          workspaceId: workspace.id,
        },
      });
    }
  }

  console.log("✅ Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
