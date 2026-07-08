import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

function Icon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  return (
    <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: size, lineHeight: 1, color }}>{name}</span>
  );
}

const KIND_LABEL: Record<string, string> = {
  consult: "Консультация",
  business: "Бизнес",
  event: "Событие",
  contact: "Контакт",
};

const STATUS_META: Record<string, { label: string; bg: string; fg: string }> = {
  new: { label: "Новая", bg: "#E7EFFB", fg: "#1D4E9E" },
  in_progress: { label: "В работе", bg: "#FDF2D9", fg: "#B7791F" },
  done: { label: "Готово", bg: "#DDF3E8", fg: "#1E9968" },
  spam: { label: "Спам", bg: "#EEF1F6", fg: "#64748b" },
};

const CARD_SHADOW = "0 6px 22px rgba(18,41,79,.05)";

export default async function Dashboard() {
  const [
    news, stories, projects, partners,
    applications, newApplications, portalLeads, contactRequests,
    recent, appKinds,
  ] = await Promise.all([
    prisma.news.count(),
    prisma.story.count(),
    prisma.project.count(),
    prisma.partner.count(),
    prisma.application.count(),
    prisma.application.count({ where: { status: "new" } }),
    prisma.portalLead.count(),
    prisma.contactRequest.count(),
    prisma.application.findMany({ orderBy: { createdAt: "desc" }, take: 6 }),
    prisma.application.findMany({ select: { kind: true } }),
  ]);

  const kindCounts = appKinds.reduce<Record<string, number>>((acc, a) => {
    acc[a.kind] = (acc[a.kind] || 0) + 1;
    return acc;
  }, {});
  const kindOrder = ["consult", "business", "event", "contact"];
  const maxKind = Math.max(1, ...kindOrder.map((k) => kindCounts[k] || 0));
  const kindColors: Record<string, string> = {
    consult: "#1D4E9E",
    business: "#6B7FF7",
    event: "#2BB673",
    contact: "#F0B429",
  };

  const statCards = [
    { label: "Заявки", value: applications, icon: "assignment", tint: "#1D4E9E", href: "/admin/applications", badge: newApplications > 0 ? `${newApplications} новых` : undefined },
    { label: "Портал (лиды)", value: portalLeads, icon: "badge", tint: "#6B7FF7", href: "/admin/portal-leads" },
    { label: "Обращения", value: contactRequests, icon: "mail", tint: "#3D56D6", href: "/admin/contact-requests" },
    { label: "Новости", value: news, icon: "campaign", tint: "#2BB673", href: "/admin/news" },
    { label: "Истории", value: stories, icon: "auto_stories", tint: "#F0B429", href: "/admin/stories" },
    { label: "Проекты", value: projects, icon: "hub", tint: "#1D4E9E", href: "/admin/projects" },
    { label: "Партнёры", value: partners, icon: "handshake", tint: "#6B7FF7", href: "/admin/partners" },
  ];

  return (
    <div className="mx-auto max-w-[1180px]">
      {/* Hero */}
      <div
        className="relative overflow-hidden rounded-2xl px-7 py-8 text-white"
        style={{ background: "linear-gradient(120deg,#0C2140 0%,#16305E 55%,#1D4E9E 100%)", boxShadow: "0 14px 40px rgba(18,41,79,.22)" }}
      >
        <div className="absolute -right-10 -top-14 h-52 w-52 rounded-full" style={{ background: "radial-gradient(circle,rgba(107,127,247,0.35),transparent 70%)" }} />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9DB2E8]">UZ · JAPAN · GERMANY</div>
            <h1 className="mt-2 text-[28px] font-extrabold tracking-tight">Добро пожаловать</h1>
            <p className="mt-1.5 text-[14.5px] font-medium text-white/70">Панель управления JobStudy</p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl" style={{ background: "rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}>
            <Image src="/logos/jobstudy-icon.png" alt="JobStudy" width={40} height={40} className="object-contain" />
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {statCards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group relative flex flex-col justify-between rounded-2xl bg-white p-5 transition-all hover:-translate-y-0.5"
            style={{ border: "1px solid #E7EDF6", boxShadow: CARD_SHADOW }}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${c.tint}14`, color: c.tint }}>
                <Icon name={c.icon} size={22} />
              </div>
              {c.badge && (
                <span className="rounded-full px-2 py-0.5 text-[10.5px] font-bold" style={{ background: "#E7EFFB", color: "#1D4E9E" }}>
                  {c.badge}
                </span>
              )}
            </div>
            <div className="mt-4">
              <div className="text-[30px] font-extrabold leading-none tracking-tight text-[#16305E]">{c.value}</div>
              <div className="mt-1.5 text-[13px] font-semibold text-[#64748b]">{c.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Bar chart */}
        <div className="rounded-2xl bg-white p-6 lg:col-span-1" style={{ border: "1px solid #E7EDF6", boxShadow: CARD_SHADOW }}>
          <div className="flex items-center gap-2">
            <Icon name="bar_chart" size={20} color="#1D4E9E" />
            <h2 className="text-[15px] font-extrabold text-[#16305E]">Заявки по типу</h2>
          </div>
          <div className="mt-6 flex h-44 items-end justify-between gap-3">
            {kindOrder.map((k) => {
              const val = kindCounts[k] || 0;
              const h = Math.round((val / maxKind) * 100);
              return (
                <div key={k} className="flex flex-1 flex-col items-center gap-2">
                  <div className="text-[13px] font-extrabold text-[#16305E]">{val}</div>
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-lg transition-all"
                      style={{ height: `${Math.max(h, 4)}%`, background: `linear-gradient(180deg,${kindColors[k]},${kindColors[k]}bb)`, minHeight: 6 }}
                    />
                  </div>
                  <div className="text-center text-[10.5px] font-semibold leading-tight text-[#64748b]">{KIND_LABEL[k]}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent applications */}
        <div className="overflow-hidden rounded-2xl bg-white lg:col-span-2" style={{ border: "1px solid #E7EDF6", boxShadow: CARD_SHADOW }}>
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid #E7EDF6" }}>
            <div className="flex items-center gap-2">
              <Icon name="schedule" size={20} color="#1D4E9E" />
              <h2 className="text-[15px] font-extrabold text-[#16305E]">Последние заявки</h2>
            </div>
            <Link href="/admin/applications" className="text-[12.5px] font-bold text-[#1D4E9E] hover:underline">
              Все →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="text-sm">
              <thead>
                <tr className="text-left text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
                  <th className="px-6 py-3">Имя</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Тип</th>
                  <th className="px-6 py-3">Статус</th>
                  <th className="px-6 py-3">Дата</th>
                </tr>
              </thead>
              <tbody>
                {recent.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-[#94a3b8]">Заявок пока нет</td>
                  </tr>
                )}
                {recent.map((r) => {
                  const st = STATUS_META[r.status] || STATUS_META.spam;
                  return (
                    <tr key={r.id} style={{ borderTop: "1px solid #EEF2F8" }} className="hover:bg-[#f6f8fb]">
                      <td className="px-6 py-3 font-semibold text-[#1e2536]">{r.name || "—"}</td>
                      <td className="px-6 py-3 text-[#64748b]">{r.email || "—"}</td>
                      <td className="px-6 py-3 text-[#64748b]">{KIND_LABEL[r.kind] || r.kind}</td>
                      <td className="px-6 py-3">
                        <span className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ background: st.bg, color: st.fg }}>
                          {st.label}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-[#94a3b8]">{new Date(r.createdAt).toLocaleDateString("ru-RU")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
