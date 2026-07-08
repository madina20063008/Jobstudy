import { prisma } from "@/lib/db";
import { item } from "@/lib/crud";
import { storySchema } from "@/lib/schemas";

export const { GET, PUT, DELETE } = item(prisma.story, storySchema);
