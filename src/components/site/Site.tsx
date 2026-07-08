"use client";

import { useEffect } from "react";
import { useJb, type Page } from "./JbProvider";
import { Home } from "./Home";
import { About } from "./About";
import { Japan } from "./Japan";
import { Germany } from "./Germany";
import { Institute } from "./Institute";
import { Career } from "./Career";
import { Cooperation } from "./Cooperation";
import { Agency } from "./Agency";
import { Grow } from "./Grow";
import { IntroSplash } from "./IntroSplash";
import { AccessPortal } from "./AccessPortal";
import { ApplyWizard } from "./ApplyWizard";

const PAGES: Record<Page, React.ComponentType> = {
  Home, About, Japan, Germany, Institute, Career, Cooperation, Agency, Grow,
};
const VALID: Page[] = ["Home", "About", "Japan", "Germany", "Institute", "Career", "Cooperation", "Agency", "Grow"];

export function Site() {
  const jb = useJb();

  // global link interception — maps "X.dc.html#frag" and "#frag" to SPA routing
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const a = t.closest ? t.closest("a") : null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const m = href.match(/^([A-Za-z]+)\.dc\.html(?:#(.+))?$/);
      if (m) {
        e.preventDefault();
        let page = m[1] as Page;
        const frag = m[2] || "";
        if (VALID.indexOf(page) === -1) page = "Home";
        jb.go(page, frag);
        return;
      }
      const hm = href.match(/^#(.+)$/);
      if (hm) {
        e.preventDefault();
        const el = document.getElementById(hm[1]);
        if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 66; window.scrollTo(0, y < 0 ? 0 : y); }
        return;
      }
      if (href === "#" || href === "") e.preventDefault();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [jb]);

  // scroll-reveal for sections below the fold (mimics the source setupReveal)
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        (e.target as HTMLElement).style.opacity = "1";
        (e.target as HTMLElement).style.transform = "translateY(0px)";
        io.unobserve(e.target);
      }
    }), { threshold: 0.06 });
    const setup = () => {
      const wrap = document.querySelector("[data-screen-label]");
      if (!wrap) return;
      Array.from(wrap.children).forEach((el) => {
        const h = el as HTMLElement;
        if (h.dataset.jbReveal) return;
        const r = h.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.92 && r.height > 40) {
          h.dataset.jbReveal = "1";
          h.style.transition = "opacity .65s ease, transform .65s ease";
          h.style.opacity = "0";
          h.style.transform = "translateY(28px)";
          io.observe(h);
        }
      });
    };
    const t1 = setTimeout(setup, 400);
    const t2 = setTimeout(setup, 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); io.disconnect(); };
  }, [jb.route]);

  const Current = PAGES[jb.route] || Home;

  return (
    <>
      <Current />
      <IntroSplash />
      <AccessPortal />
      <ApplyWizard />
    </>
  );
}
