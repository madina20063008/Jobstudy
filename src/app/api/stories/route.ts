import { prisma } from "@/lib/db";
import { collection } from "@/lib/crud";
import { storySchema } from "@/lib/schemas";

export const { GET, POST } = collection(prisma.story, storySchema);
