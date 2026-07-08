import { prisma } from "@/lib/db";
import { ok, fail, auth, handler } from "@/lib/api";

export const GET = handler(async (_req, ctx) => {
  await auth();
  const { id } = await ctx.params;
  const found = await prisma.portalLead.findUnique({ where: { id: Number(id) } });
  if (!found) return fail("Not found", 404);
  return ok(found);
});

export const DELETE = handler(async (_req, ctx) => {
  await auth();
  const { id } = await ctx.params;
  await prisma.portalLead.delete({ where: { id: Number(id) } });
  return ok({ success: true });
});
