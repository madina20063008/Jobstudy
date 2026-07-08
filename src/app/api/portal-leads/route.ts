import { prisma } from "@/lib/db";
import { ok, auth, handler } from "@/lib/api";

export const GET = handler(async () => {
  await auth();
  const items = await prisma.portalLead.findMany({ orderBy: { createdAt: "desc" } });
  return ok(items);
});
