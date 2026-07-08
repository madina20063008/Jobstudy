import { prisma } from "./db";

export interface SiteData {
  news: { title: string; date: string }[];
  stories: { name: string; role: string; quote: string; img: string | null }[];
  projects: { name: string; text: string; img: string | null }[];
  partners: { name: string; sub: string | null; logo: string | null; mark: string | null; markBg: string | null }[];
}

/** Loads the editable Home-page lists from the DB. null → static fallback in components. */
export async function getSiteData(): Promise<SiteData | null> {
  try {
    const ORDER = [{ order: "asc" as const }, { id: "asc" as const }];
    const [news, stories, projects, partners] = await Promise.all([
      prisma.news.findMany({ where: { published: true }, orderBy: ORDER }),
      prisma.story.findMany({ where: { published: true }, orderBy: ORDER }),
      prisma.project.findMany({ where: { published: true }, orderBy: ORDER }),
      prisma.partner.findMany({ where: { published: true }, orderBy: ORDER }),
    ]);
    if (!news.length && !stories.length && !projects.length && !partners.length) return null;
    return {
      news: news.map((n) => ({ title: n.title, date: n.date })),
      stories: stories.map((s) => ({ name: s.name, role: s.role, quote: s.quote, img: s.img })),
      projects: projects.map((p) => ({ name: p.name, text: p.text, img: p.img })),
      partners: partners.map((p) => ({ name: p.name, sub: p.sub, logo: p.logo, mark: p.mark, markBg: p.markBg })),
    };
  } catch (e) {
    console.error("[site-data]", e);
    return null;
  }
}
