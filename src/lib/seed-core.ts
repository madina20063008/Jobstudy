import type { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "./db";

const NEWS = [
  { title: "Ярмарка вакансий в Ташкенте с японскими компаниями", date: "20 мая 2025" },
  { title: "Визит делегации JICA Tsukuba", date: "15 мая 2025" },
  { title: "Новый набор студентов на курсы JLPT", date: "10 мая 2025" },
  { title: "Партнёрская встреча с немецкими организациями", date: "05 мая 2025" },
];

const STORIES = [
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=70", quote: "Горжусь работой в Японии и ценным опытом.", name: "Дилшод А.", role: "Строительство" },
  { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=70", quote: "Спасибо JobStudy и преподавателям, которые верили в меня.", name: "Мадина К.", role: "Уход, Япония" },
  { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=70", quote: "Я улучшил навыки, и теперь у меня ясное будущее.", name: "Сарвар Б.", role: "Производство" },
  { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=70", quote: "Использую свой опыт для развития Узбекистана.", name: "Азиза Р.", role: "Вернувшийся специалист" },
];

const PROJECTS = [
  { name: "TENSOR", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=70", text: "ИИ, спутниковый мониторинг и цифровые решения для умного сельского хозяйства." },
  { name: "MYKOS", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=70", text: "Биотехнологии и грибные решения для плодородия почв и засушливых земель." },
  { name: "F.T.E", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=70", text: "Японские технологии удобрений медленного высвобождения для устойчивого земледелия." },
];

const PARTNERS = [
  { name: "JICA", sub: "", logo: "/logos/jica.jpg", mark: null, markBg: null },
  { name: "JobStudy", sub: "", logo: "/logos/jobstudy-logo.png", mark: null, markBg: null },
  { name: "Project GROW", sub: "", logo: "/logos/grow.jpg", mark: null, markBg: null },
  { name: "DEOW JAPAN", sub: "", logo: "/logos/deow.png", mark: null, markBg: null },
  { name: "INSTITUTE", sub: "Japanese Language & Vocational Competency Development", logo: null, mark: "学", markBg: "#8A2B2B" },
  { name: "PROUD Co., Ltd.", sub: "", logo: null, mark: "P", markBg: "#1B58B8" },
  { name: "MASUI Co., Ltd.", sub: "", logo: null, mark: "M", markBg: "#6FA243" },
  { name: "TOMATEC Co., Ltd.", sub: "", logo: null, mark: "T", markBg: "#C8102E" },
];

/** Idempotent: fills the database with the admin user + starting content. */
export async function seedDatabase(db: PrismaClient = prisma) {
  const email = process.env.ADMIN_EMAIL || "ats@ats-systems.net";
  const password = process.env.ADMIN_PASSWORD || "ats-c89475630a";
  const hash = await bcrypt.hash(password, 10);
  await db.user.upsert({
    where: { email },
    update: { password: hash, role: "admin", active: true },
    create: { email, password: hash, name: "ATS Admin", role: "admin" },
  });

  await db.news.deleteMany();
  for (let i = 0; i < NEWS.length; i++) await db.news.create({ data: { ...NEWS[i], order: i } });

  await db.story.deleteMany();
  for (let i = 0; i < STORIES.length; i++) await db.story.create({ data: { ...STORIES[i], order: i } });

  await db.project.deleteMany();
  for (let i = 0; i < PROJECTS.length; i++) await db.project.create({ data: { ...PROJECTS[i], order: i } });

  await db.partner.deleteMany();
  for (let i = 0; i < PARTNERS.length; i++) await db.partner.create({ data: { ...PARTNERS[i], order: i } });
}

let seedPromise: Promise<void> | null = null;
export async function ensureSeeded() {
  try {
    const count = await prisma.user.count();
    if (count > 0) return;
    if (!seedPromise) seedPromise = seedDatabase().then(() => undefined);
    await seedPromise;
  } catch (e) {
    seedPromise = null;
    console.error("[ensureSeeded]", e);
  }
}
