import { prisma } from "@/lib/db";
import { ok, fail, auth, handler, parse } from "@/lib/api";
import { applicationSchema } from "@/lib/schemas";

export const GET = handler(async (_req, ctx) => {
  await auth();
  const { id } = await ctx.params;
  const found = await prisma.application.findUnique({ where: { id: Number(id) } });
  if (!found) return fail("Not found", 404);
  return ok(found);
});

export const PUT = handler(async (req, ctx) => {
  await auth();
  const { id } = await ctx.params;
  const data = await parse(req, applicationSchema.partial());
  const updated = await prisma.application.update({ where: { id: Number(id) }, data: { status: data.status } });
  return ok(updated);
});

export const DELETE = handler(async (_req, ctx) => {
  await auth();
  const { id } = await ctx.params;
  await prisma.application.delete({ where: { id: Number(id) } });
  return ok({ success: true });
});
