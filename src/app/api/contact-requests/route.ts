import { prisma } from "@/lib/db";
import { ok, auth, handler, parse } from "@/lib/api";
import { contactRequestSchema } from "@/lib/schemas";

// Listing requires auth (admin only).
export const GET = handler(async () => {
  await auth();
  const items = await prisma.contactRequest.findMany({ orderBy: { createdAt: "desc" } });
  return ok(items);
});

// Public can submit the contact form.
export const POST = handler(async (req) => {
  const data = await parse(req, contactRequestSchema);
  const created = await prisma.contactRequest.create({ data: { ...data, email: data.email || "" } });
  return ok(created, 201);
});
