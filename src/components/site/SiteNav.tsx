"use client";

import { useJb, type Lang, type Page } from "./JbProvider";
import { HoverBox } from "./primitives";

const MI = (name: string, size = 15): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

const NAV_ITEMS: [string, string, Page | "", string][] = [
  ["home", "Главная", "Home", ""],
  ["about", "О нас", "About", ""],
  ["japan", "Япония", "Japan", ""],
  ["germany", "Германия", "Germany", ""],
  ["programs", "Программы", "Japan", "programs"],
  ["institute", "Институт", "Institute", ""],
  ["projects", "Проекты", "Grow", ""],
  ["career", "Карьера", "Career", ""],
  ["news", "Новости", "Home", "news"],
  ["contact", "Контакты", "", "contact"],
];

const LANGS: [Lang, string, string, string][] = [
  ["uz", "UZ", "O'zbekcha", "🇺🇿"],
  ["ru", "RU", "Русский", "🇷🇺"],
  ["en", "EN", "English", "🇬🇧"],
  ["ja", "JA", "日本語", "🇯🇵"],
  ["de", "DE", "Deutsch", "🇩🇪"],
];

const ROLE_LABELS: Record<string, string> = {
  student: "Студент", candidate: "Кандидат", employer: "Работодатель",
  jp_company: "Японская компания", de_company: "Немецкая компания", government: "Государственная организация",
  university: "Университет", partner: "Международный партнёр", investor: "Инвестор",
  teacher: "Преподаватель", admin: "Администратор",
};

export function SiteNav({ active = "home", navTheme = "light" }: { active?: string; navTheme?: "light" | "dark" }) {
  const jb = useJb();
  const dark = navTheme === "dark";
  const base = dark ? "#B9C8E0" : "#3A4C6E";
  const act = dark ? "#FFFFFF" : "#1D4E9E";
  const navBg = dark ? "#0C2140" : "#FFFFFF";
  const navBorder = dark ? "rgba(255,255,255,0.08)" : "#E7EDF6";
  const navShadow = dark ? "none" : "0 2px 14px rgba(18,41,79,0.05)";
  const logoColor = dark ? "#FFFFFF" : "#16305E";
  const logoSub = dark ? "#8FA5C6" : "#7C8DA9";
  const pillBorder = dark ? "rgba(255,255,255,0.3)" : "#D8E1EF";
  const pillColor = dark ? "#DCE6F5" : "#3A4C6E";
  const btnBg = dark ? "#1D4E9E" : "#16305E";

  const curLang = LANGS.find((l) => l[0] === jb.lang) || LANGS[1];
  const sess = jb.session;
  const acctName = sess ? (sess.name || sess.email || "Пользователь") : "";
  const acctInitial = sess ? (sess.name || sess.email || "U").trim().charAt(0).toUpperCase() : "";
  const acctRole = sess ? (ROLE_LABELS[sess.role || ""] || "Участник") : "";

  return (
    <div data-keep={dark ? "true" : "false"} style={{ position: "relative", zIndex: 90, background: navBg, borderBottom: `1px solid ${navBorder}`, fontFamily: "'Manrope',sans-serif", boxShadow: navShadow }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px", height: 68, display: "flex", alignItems: "center", gap: 18 }}>
        <a href="Home.dc.html" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/jobstudy-icon.png" alt="JobStudy" style={{ width: 46, height: 46, objectFit: "contain", display: "block" }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 16.5, letterSpacing: "1.2px", color: logoColor, lineHeight: 1.15 }}>JobStudy</div>
            <div style={{ fontSize: 8, letterSpacing: "1.9px", fontWeight: 600, color: logoSub }}>INTERNATIONAL PLATFORM</div>
          </div>
        </a>
        <nav style={{ display: "flex", gap: "clamp(8px,1.4vw,20px)", marginLeft: "auto", alignItems: "center", minWidth: 0, overflowX: "auto", scrollbarWidth: "none" }}>
          {NAV_ITEMS.map(([key, label]) => {
            const isActive = key === active;
            return (
              <HoverBox as="a" key={key} href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                const it = NAV_ITEMS.find((n) => n[0] === key)!;
                if (it[2]) jb.go(it[2], it[3]); else if (it[3]) { const el = document.getElementById(it[3]); if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - 66); }
              }}
                style={{ textDecoration: "none", whiteSpace: "nowrap", fontSize: 13, fontWeight: 700, color: isActive ? act : base, padding: "24px 1px 20px", borderBottom: `2px solid ${isActive ? (dark ? "#FFFFFF" : "#1D4E9E") : "transparent"}`, transition: "color .18s" }}
                hoverStyle={{ color: act }}>{label}</HoverBox>
            );
          })}
        </nav>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <HoverBox onClick={() => jb.setLangOpen(!jb.langOpen)} style={{ display: "flex", alignItems: "center", gap: 5, border: `1px solid ${pillBorder}`, borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: pillColor, cursor: "pointer", transition: "border-color .18s" }} hoverStyle={{ borderColor: "#1D4E9E" }}>
            <span style={MI("language")}>language</span>
            {curLang[1]}
            <span style={MI("expand_more")}>expand_more</span>
          </HoverBox>
          {jb.langOpen && (
            <div style={{ position: "absolute", top: 42, right: 0, background: "#fff", border: "1px solid #E3EAF4", borderRadius: 12, boxShadow: "0 14px 34px rgba(18,41,79,0.18)", padding: 6, display: "flex", flexDirection: "column", gap: 2, minWidth: 160, zIndex: 99 }}>
              {LANGS.map((l) => (
                <HoverBox key={l[0]} onClick={() => jb.setLang(l[0])} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, cursor: "pointer", fontSize: 12.5, fontWeight: 700, color: l[0] === jb.lang ? "#1D4E9E" : "#2E4165", background: l[0] === jb.lang ? "#EAF1FB" : "transparent", transition: "background .15s" }} hoverStyle={{ background: "#F0F4FB" }}>
                  <span style={{ fontSize: 13 }}>{l[3]}</span>{l[2]}
                </HoverBox>
              ))}
            </div>
          )}
        </div>
        <HoverBox onClick={jb.toggleTheme} title="Светлая / тёмная тема" style={{ width: 34, height: 34, borderRadius: "50%", border: `1px solid ${pillBorder}`, display: "flex", alignItems: "center", justifyContent: "center", color: pillColor, cursor: "pointer", flexShrink: 0, transition: "background .18s" }} hoverStyle={{ background: "rgba(128,150,190,0.15)" }}>
          <span style={MI(jb.dark ? "light_mode" : "dark_mode", 17)}>{jb.dark ? "light_mode" : "dark_mode"}</span>
        </HoverBox>
        {sess && (
          <div style={{ position: "relative", flexShrink: 0 }}>
            <HoverBox onClick={() => jb.setAcctOpen(!jb.acctOpen)} style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid ${pillBorder}`, borderRadius: 999, padding: "5px 12px 5px 5px", cursor: "pointer", transition: "border-color .18s" }} hoverStyle={{ borderColor: "#1D4E9E" }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "#1D4E9E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12.5, fontWeight: 800 }}>{acctInitial}</span>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: pillColor, maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{acctName}</span>
              <span style={{ ...MI("expand_more"), color: pillColor }}>expand_more</span>
            </HoverBox>
            {jb.acctOpen && (
              <div style={{ position: "absolute", top: 46, right: 0, background: "#fff", border: "1px solid #E3EAF4", borderRadius: 14, boxShadow: "0 16px 40px rgba(18,41,79,0.20)", padding: 8, minWidth: 210, zIndex: 99 }}>
                <div style={{ padding: "8px 12px 10px", borderBottom: "1px solid #EEF2F8", marginBottom: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#16305E" }}>{acctName}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#8FA5C6", marginTop: 2 }}>{acctRole}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 9, fontSize: 12.5, fontWeight: 700, color: "#B0BACb", cursor: "default" }}>
                  <span style={MI("dashboard", 17)}>dashboard</span>Личный кабинет скоро
                </div>
                <HoverBox onClick={jb.logout} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 9, fontSize: 12.5, fontWeight: 700, color: "#C22B3E", cursor: "pointer", transition: "background .15s" }} hoverStyle={{ background: "#FCEFF1" }}>
                  <span style={MI("logout", 17)}>logout</span>Выйти
                </HoverBox>
              </div>
            )}
          </div>
        )}
        <HoverBox onClick={jb.openApply} style={{ background: btnBg, color: "#fff", fontSize: 12.5, fontWeight: 800, padding: "10px 20px", borderRadius: 8, flexShrink: 0, cursor: "pointer", transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.15)", transform: "translateY(-1px)" }}>Подать заявку</HoverBox>
      </div>
    </div>
  );
}
