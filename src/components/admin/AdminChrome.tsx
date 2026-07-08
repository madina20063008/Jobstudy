"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { RESOURCES, RESOURCE_ORDER } from "@/lib/admin/resources";

interface Props {
  user: { email: string; name?: string | null; role: string };
  children: React.ReactNode;
}

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <span
      style={{ fontFamily: "'Material Symbols Outlined'", fontSize: size, lineHeight: 1 }}
      className="shrink-0"
    >
      {name}
    </span>
  );
}

const CONTENT_KEYS = ["news", "stories", "projects", "partners"];
const CRM_KEYS = ["applications", "portal-leads", "contact-requests", "users"];

const ROLE_LABEL: Record<string, string> = { admin: "Администратор", editor: "Редактор" };

export function AdminChrome({ user, children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  // Current section title for the topbar
  const sectionTitle = (() => {
    if (pathname === "/admin") return "Панель управления";
    if (pathname.startsWith("/admin/settings")) return "Настройки сайта";
    const seg = pathname.split("/")[2];
    return RESOURCES[seg]?.label ?? "Панель";
  })();

  const NavLink = ({ href, label, icon, exact }: { href: string; label: string; icon: string; exact: boolean }) => {
    const active = isActive(href, exact);
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] font-semibold transition-all"
        style={{
          color: active ? "#ffffff" : "rgba(255,255,255,0.62)",
          background: active ? "rgba(107,127,247,0.20)" : "transparent",
        }}
      >
        {active && (
          <span
            className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full"
            style={{ background: "#6B7FF7", boxShadow: "0 0 10px rgba(107,127,247,0.8)" }}
          />
        )}
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-all"
          style={{
            background: active ? "rgba(107,127,247,0.28)" : "rgba(255,255,255,0.05)",
            color: active ? "#C9D2FF" : "rgba(255,255,255,0.55)",
          }}
        >
          <Icon name={icon} size={19} />
        </span>
        <span className="truncate">{label}</span>
      </Link>
    );
  };

  const Caption = ({ text }: { text: string }) => (
    <div className="px-3 pb-1 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">{text}</div>
  );

  const initial = (user.name || user.email || "?").trim().charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[268px] transform flex-col transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "linear-gradient(180deg,#0C2140 0%,#16305E 100%)",
          boxShadow: "inset -1px 0 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Brand lockup */}
        <div className="flex h-[74px] items-center gap-3 px-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl"
            style={{ background: "rgba(255,255,255,0.10)", boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}
          >
            <Image src="/logos/jobstudy-icon.png" alt="JobStudy" width={30} height={30} className="object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-[16px] font-extrabold tracking-tight text-white">JobStudy</div>
            <div className="text-[9px] font-bold tracking-[0.32em] text-[#6B7FF7]">ADMIN</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-6">
          <div className="pt-3">
            <NavLink href="/admin" label="Панель" icon="dashboard" exact />
          </div>

          <Caption text="Контент" />
          {CONTENT_KEYS.map((k) => (
            <NavLink key={k} href={`/admin/${k}`} label={RESOURCES[k].label} icon={RESOURCES[k].icon} exact={false} />
          ))}

          <Caption text="CRM" />
          {CRM_KEYS.map((k) => (
            <NavLink key={k} href={`/admin/${k}`} label={RESOURCES[k].label} icon={RESOURCES[k].icon} exact={false} />
          ))}

          <div className="mt-4 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <NavLink href="/admin/settings" label="Настройки сайта" icon="settings" exact />
          </div>
        </nav>

        <div className="px-5 py-4 text-[10px] font-medium tracking-wide text-white/30" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          UZ · JAPAN · GERMANY
        </div>
      </aside>

      {open && <div className="fixed inset-0 z-30 bg-[#0C2140]/60 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header
          className="sticky top-0 z-20 flex h-[68px] items-center justify-between gap-4 bg-white px-5 lg:px-8"
          style={{ borderBottom: "1px solid #E7EDF6", boxShadow: "0 1px 3px rgba(18,41,79,0.03)" }}
        >
          <div className="flex items-center gap-3">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#16305E] hover:bg-[#f6f8fb] lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Меню"
            >
              <Icon name="menu" size={24} />
            </button>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#64748b]">JobStudy CMS</div>
              <h1 className="text-[17px] font-extrabold tracking-tight text-[#16305E]">{sectionTitle}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 rounded-full py-1 pl-1 pr-4 sm:flex" style={{ background: "#f6f8fb", border: "1px solid #E7EDF6" }}>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg,#1D4E9E,#6B7FF7)" }}
              >
                {initial}
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-bold text-[#1e2536]">{user.name || user.email}</div>
                <div className="text-[11px] font-medium text-[#64748b]">{ROLE_LABEL[user.role] || user.role}</div>
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-[#C22B3E] transition-all hover:bg-[#C22B3E]/8"
              style={{ border: "1px solid #f0d4d8" }}
            >
              <Icon name="logout" size={18} />
              <span className="hidden sm:inline">Выйти</span>
            </button>
          </div>
        </header>

        <main className="admin-fade flex-1 p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
