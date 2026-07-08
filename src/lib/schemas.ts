import { z } from "zod";

const order = z.number().int().optional();
const published = z.boolean().optional();
const str = z.string().min(1);
const opt = z.string().optional().nullable();

export const newsSchema = z.object({
  title: str, date: str, order, published,
});

export const storySchema = z.object({
  name: str, role: str, quote: str, img: opt, order, published,
});

export const projectSchema = z.object({
  name: str, text: str, img: opt, order, published,
});

export const partnerSchema = z.object({
  name: str, sub: opt, logo: opt, mark: opt, markBg: opt, order, published,
});

export const applicationSchema = z.object({
  kind: z.string().optional(),
  name: z.string().optional().nullable(),
  email: opt,
  phone: opt,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: z.any().optional(),
  status: z.enum(["new", "in_progress", "done", "spam"]).optional(),
});

export const portalLeadSchema = z.object({
  name: opt,
  email: z.string().email().or(z.literal("")).optional(),
  phone: opt,
  role: opt,
  kind: z.string().optional(),
});

export const contactRequestSchema = z.object({
  name: str,
  email: z.string().email().or(z.literal("")).optional(),
  phone: opt,
  message: opt,
  status: z.enum(["new", "in_progress", "done", "spam"]).optional(),
});

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: opt,
  role: z.enum(["admin", "editor"]).optional(),
  active: z.boolean().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const settingSchema = z.object({ key: str, valueJson: z.any() });
