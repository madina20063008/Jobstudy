"use client";

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import type { SiteData } from "@/lib/site-data";

export type Lang = "uz" | "ru" | "en" | "ja" | "de";
export type Page =
  | "Home" | "About" | "Japan" | "Germany" | "Institute"
  | "Career" | "Cooperation" | "Agency" | "Grow";

export interface Session { name?: string; email?: string; role?: string }

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark: boolean;
  toggleTheme: () => void;
  route: Page;
  go: (page: Page, frag?: string) => void;
  langOpen: boolean;
  setLangOpen: (v: boolean) => void;
  acctOpen: boolean;
  setAcctOpen: (v: boolean) => void;
  session: Session | null;
  logout: () => void;
  setSession: (s: Session | null) => void;
  // modals
  applyOpen: boolean;
  openApply: () => void;
  closeApply: () => void;
  portalOpen: boolean;
  portalMode: string;
  openPortal: (mode?: string) => void;
  closePortal: () => void;
  // translation of arbitrary russian string (for JS-computed labels)
  tr: (ru: string) => string;
  // live DB-bound content for the Home page (null → use static defaults)
  siteData: SiteData | null;
}

const JbContext = createContext<Ctx | null>(null);

// module-level dict cache (persists across route changes)
const dicts: Record<string, Record<string, string>> = {};

async function loadDict(lang: Lang): Promise<Record<string, string> | null> {
  if (lang === "ru") return null;
  if (dicts[lang]) return dicts[lang];
  try {
    const r = await fetch(`/i18n-${lang}.json`);
    dicts[lang] = await r.json();
    return dicts[lang];
  } catch {
    return null;
  }
}

/* Walk all text nodes under <body> (excluding admin) and swap russian → target. */
function translateDom(lang: Lang) {
  if (typeof document === "undefined") return;
  const dict = lang === "ru" ? null : dicts[lang];
  if (lang !== "ru" && !dict) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      // skip anything inside the admin panel
      let el = node.parentElement;
      while (el) {
        if (el.classList && el.classList.contains("admin-scope")) return NodeFilter.FILTER_REJECT;
        el = el.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let n: Node | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  while ((n = walker.nextNode())) {
    const node = n as Text & { __jb?: string };
    const orig = node.__jb !== undefined ? node.__jb : node.nodeValue || "";
    const key = orig.trim();
    if (!key) continue;
    if (!dict) {
      if (node.__jb !== undefined && node.nodeValue !== orig) node.nodeValue = orig;
      continue;
    }
    const t = dict[key];
    if (t) {
      if (node.__jb === undefined) node.__jb = orig;
      const nv = orig.replace(key, t);
      if (node.nodeValue !== nv) node.nodeValue = nv;
    } else if (node.__jb !== undefined && node.nodeValue !== orig) {
      node.nodeValue = orig;
    }
  }
}

export function JbProvider({ children, content = null }: { children: React.ReactNode; content?: SiteData | null }) {
  const [lang, setLangState] = useState<Lang>("ru");
  const [dark, setDark] = useState(false);
  const [route, setRoute] = useState<Page>("Home");
  const [langOpen, setLangOpen] = useState(false);
  const [acctOpen, setAcctOpen] = useState(false);
  const [session, setSessionState] = useState<Session | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalMode, setPortalMode] = useState("roles");
  const pendingFrag = useRef<string>("");

  // hydrate persisted theme / lang / session
  useEffect(() => {
    let d = false, l: Lang = "ru";
    let s: Session | null = null;
    try {
      d = localStorage.getItem("jb-theme") === "dark";
      l = (localStorage.getItem("jb-lang") as Lang) || "ru";
      s = JSON.parse(localStorage.getItem("jb-session") || "null");
    } catch {}
    document.documentElement.classList.toggle("jb-dark", d);
    // Defer React state updates to avoid synchronous setState within effect
    requestAnimationFrame(() => {
      setDark(d);
      if (s) setSessionState(s);
      if (l !== "ru") { setLangState(l); loadDict(l).then(() => translateDom(l)); }
    });
  }, []);

  // re-translate whenever the page or language changes (after DOM paints)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (lang !== "ru") await loadDict(lang);
      if (cancelled) return;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        translateDom(lang);
        if (pendingFrag.current) {
          const el = document.getElementById(pendingFrag.current);
          if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 66; window.scrollTo(0, y < 0 ? 0 : y); }
          pendingFrag.current = "";
        }
      }));
    })();
    return () => { cancelled = true; };
  }, [route, lang]);

  // URL <-> route sync: deep-links, refresh, and browser back/forward
  useEffect(() => {
    const VALID: Page[] = ["Home", "About", "Japan", "Germany", "Institute", "Career", "Cooperation", "Agency", "Grow"];
    const sync = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) { pendingFrag.current = ""; setRoute("Home"); requestAnimationFrame(() => window.scrollTo(0, 0)); return; }
      const [name, frag] = raw.split("#");
      if ((VALID as string[]).includes(name)) {
        pendingFrag.current = frag || "";
        setRoute(name as Page);
        // no fragment → scroll to top; a fragment is scrolled to by the [route,lang] effect
        if (!frag) requestAnimationFrame(() => window.scrollTo(0, 0));
      } else {
        // an in-page anchor (#contact, #news…) — smooth-scroll, keep current page
        requestAnimationFrame(() => {
          const el = document.getElementById(name);
          if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - 66), behavior: "smooth" });
        });
      }
    };
    sync(); // initial (deep-link / refresh)
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => { window.removeEventListener("popstate", sync); window.removeEventListener("hashchange", sync); };
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l); setLangOpen(false);
    try { localStorage.setItem("jb-lang", l); } catch {}
    document.documentElement.lang = l;
  }, []);

  const toggleTheme = useCallback(() => {
    setDark((prev) => {
      const d = !prev;
      document.documentElement.classList.toggle("jb-dark", d);
      try { localStorage.setItem("jb-theme", d ? "dark" : "light"); } catch {}
      return d;
    });
  }, []);

  const go = useCallback((page: Page, frag?: string) => {
    setLangOpen(false); setAcctOpen(false);
    const target = frag ? `${page}#${frag}` : page;
    const cur = window.location.hash.replace(/^#/, "");
    if (cur === target) {
      // URL already matches — hashchange won't fire, so drive the update directly
      pendingFrag.current = frag || "";
      setRoute(page);
      if (!frag) requestAnimationFrame(() => window.scrollTo(0, 0));
    } else {
      // updates the address bar AND fires `hashchange` -> the sync handler routes + scrolls
      window.location.hash = target;
    }
  }, []);

  const setSession = useCallback((s: Session | null) => {
    setSessionState(s);
    try { s ? localStorage.setItem("jb-session", JSON.stringify(s)) : localStorage.removeItem("jb-session"); } catch {}
  }, []);
  const logout = useCallback(() => { setSession(null); setAcctOpen(false); }, [setSession]);

  const openApply = useCallback(() => setApplyOpen(true), []);
  const closeApply = useCallback(() => setApplyOpen(false), []);
  const openPortal = useCallback((mode?: string) => { setPortalMode(mode || "roles"); setPortalOpen(true); }, []);
  const closePortal = useCallback(() => setPortalOpen(false), []);

  const tr = useCallback((ru: string) => {
    if (lang === "ru") return ru;
    const d = dicts[lang];
    return (d && d[ru.trim()]) || ru;
  }, [lang]);

  return (
    <JbContext.Provider value={{
      lang, setLang, dark, toggleTheme, route, go,
      langOpen, setLangOpen, acctOpen, setAcctOpen,
      session, logout, setSession,
      applyOpen, openApply, closeApply,
      portalOpen, portalMode, openPortal, closePortal,
      tr, siteData: content,
    }}>
      {children}
    </JbContext.Provider>
  );
}

export function useJb(): Ctx {
  const ctx = useContext(JbContext);
  if (!ctx) throw new Error("useJb must be used within JbProvider");
  return ctx;
}
