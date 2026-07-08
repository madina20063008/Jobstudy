import { prisma } from "@/lib/db";
import { item } from "@/lib/crud";
import { newsSchema } from "@/lib/schemas";

export const { GET, PUT, DELETE } = item(prisma.news, newsSchema);
