import { PrismaClient } from "@prisma/client";
import { seedDatabase } from "../src/lib/seed-core";

const prisma = new PrismaClient();

seedDatabase(prisma)
  .then(async () => {
    console.log("🌱 Seed complete — admin + content created.");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
