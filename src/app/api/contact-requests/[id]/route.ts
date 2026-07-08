import { prisma } from "@/lib/db";
import { item } from "@/lib/crud";
import { contactRequestSchema } from "@/lib/schemas";

export const { GET, PUT, DELETE } = item(prisma.contactRequest, contactRequestSchema);
