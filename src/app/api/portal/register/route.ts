import { prisma } from "@/lib/db";
import { ok, handler, parse } from "@/lib/api";
import { portalLeadSchema } from "@/lib/schemas";

// Public: AccessPortal registration — stored as a lead.
export const POST = handler(async (req) => {
  const data = await parse(req, portalLeadSchema);
  const created = await prisma.portalLead.create({
    data: { name: data.name || null, email: data.email || "", phone: data.phone || null, role: data.role || null, kind: "register" },
  });
  return ok(created, 201);
});
