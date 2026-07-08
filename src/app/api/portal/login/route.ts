import { prisma } from "@/lib/db";
import { ok, handler, parse } from "@/lib/api";
import { portalLeadSchema } from "@/lib/schemas";

// Public: AccessPortal login attempt — recorded as a lead (no real auth on the public portal).
export const POST = handler(async (req) => {
  const data = await parse(req, portalLeadSchema);
  const created = await prisma.portalLead.create({
    data: { name: data.name || null, email: data.email || "", phone: data.phone || null, role: data.role || null, kind: "login" },
  });
  return ok(created, 201);
});
