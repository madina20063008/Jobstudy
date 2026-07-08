import { prisma } from "@/lib/db";
import { collection } from "@/lib/crud";
import { newsSchema } from "@/lib/schemas";

export const { GET, POST } = collection(prisma.news, newsSchema);
