import { prisma } from "@/lib/db";
import { ok, auth, handler, parse } from "@/lib/api";
import { applicationSchema } from "@/lib/schemas";

// Admin-only listing.
export const GET = handler(async () => {
  await auth();
  const items = await prisma.application.findMany({ orderBy: { createdAt: "desc" } });
  return ok(items);
});

// Public: the ApplyWizard submits here.
export const POST = handler(async (req) => {
  const data = await parse(req, applicationSchema);
  const created = await prisma.application.create({
    data: {
      kind: data.kind || "consult",
      name: data.name || "—",
      email: data.email || null,
      phone: data.phone || null,
      payload: (data.payload ?? {}) as object,
    },
  });
  return ok(created, 201);
});
