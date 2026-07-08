"use client";

import { HoverBox } from "./primitives";

const MI = (size = 17): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size, color: "#6E86AC" });
const linkStyle: React.CSSProperties = { color: "#9FB2CE", textDecoration: "none", fontSize: 12.5, transition: "color .18s" };

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <HoverBox as="a" href={href} style={linkStyle} hoverStyle={{ color: "#fff" }}>{children}</HoverBox>;
}

export function SiteFooter() {
  const socials = ["f", "in", "ig", "yt"];
  return (
    <footer id="contact" data-keep="true" style={{ background: "#0B1F3F", color: "#B9C8E0", fontFamily: "'Manrope',sans-serif" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 28px 32px", display: "grid", gridTemplateColumns: "1.35fr 0.8fr 0.9fr 0.8fr 1.2fr 1fr", gap: 36 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/jobstudy-icon.png" alt="JobStudy" style={{ width: 48, height: 48, objectFit: "contain", display: "block" }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "1.2px", color: "#fff" }}>JobStudy</div>
              <div style={{ fontSize: 8, letterSpacing: "1.9px", fontWeight: 600, color: "#8FA5C6" }}>INTERNATIONAL PLATFORM</div>
            </div>
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.75, margin: "0 0 18px", color: "#9FB2CE" }}>Соединяем таланты, образование и возможности между Узбекистаном, Японией и Германией ради лучшего будущего.</p>
          <div style={{ display: "flex", gap: 10 }}>
            {socials.map((s, i) => (
              <HoverBox as="a" href="#" key={i} style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#DCE6F5", textDecoration: "none", fontSize: 11.5, fontWeight: 800, transition: "background .18s" }} hoverStyle={{ background: "rgba(255,255,255,0.12)" }}>{s}</HoverBox>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "1.4px", color: "#fff", marginBottom: 16 }}>БЫСТРЫЕ ССЫЛКИ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <FLink href="About.dc.html">О нас</FLink>
            <FLink href="Japan.dc.html">Япония</FLink>
            <FLink href="Germany.dc.html">Германия</FLink>
            <FLink href="Institute.dc.html">Институт</FLink>
            <FLink href="Grow.dc.html">Проекты</FLink>
            <FLink href="Career.dc.html">Карьера</FLink>
            <FLink href="Cooperation.dc.html">Сотрудничество</FLink>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "1.4px", color: "#fff", marginBottom: 16 }}>ПРОГРАММЫ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <FLink href="Institute.dc.html">Японский язык</FLink>
            <FLink href="Institute.dc.html">Подготовка к JLPT</FLink>
            <FLink href="Japan.dc.html">Программа SSW</FLink>
            <FLink href="Germany.dc.html">Немецкий язык</FLink>
            <FLink href="Germany.dc.html">Ausbildung</FLink>
            <FLink href="Career.dc.html">Поддержка трудоустройства</FLink>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "1.4px", color: "#fff", marginBottom: 16 }}>ПРОЕКТЫ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <FLink href="Grow.dc.html">GROW</FLink>
            <FLink href="Home.dc.html#projects">TENSOR</FLink>
            <FLink href="Home.dc.html#projects">MYKOS</FLink>
            <FLink href="Home.dc.html#projects">F.T.E</FLink>
            <FLink href="Cooperation.dc.html">Все проекты</FLink>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "1.4px", color: "#fff", marginBottom: 16 }}>КОНТАКТЫ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 12.5, lineHeight: 1.6 }}>
            <div style={{ display: "flex", gap: 9 }}><span style={MI()}>location_on</span><span>г. Ташкент, Яккасарайский район,<br />ул. Шота Руставели, 150</span></div>
            <div style={{ display: "flex", gap: 9, alignItems: "center" }}><span style={MI()}>call</span><span>+998 95 961 09 90</span></div>
            <div style={{ display: "flex", gap: 9, alignItems: "center" }}><span style={MI()}>call</span><span>+998 77 769 09 90</span></div>
            <div style={{ display: "flex", gap: 9, alignItems: "center" }}><span style={MI()}>mail</span><span>info@jobstudy.uz</span></div>
            <div style={{ display: "flex", gap: 9, alignItems: "center" }}><span style={MI()}>schedule</span><span>Пн – Пт: 09:00 – 18:00</span></div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ flex: 1, minHeight: 130, borderRadius: 12, backgroundColor: "#12294F", backgroundImage: "url('/assets/world-dots.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", position: "relative", overflow: "hidden" }}></div>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <div style={{ width: 30, height: 20, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 0 0 1px rgba(255,255,255,0.15)" }}><div style={{ flex: 1, background: "#1EB1E7" }}></div><div style={{ flex: 1, background: "#fff", borderTop: "1.5px solid #CE1126", borderBottom: "1.5px solid #CE1126" }}></div><div style={{ flex: 1, background: "#2BB673" }}></div></div>
            <div style={{ width: 30, height: 20, borderRadius: 3, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 1px rgba(255,255,255,0.15)" }}><div style={{ width: 10, height: 10, borderRadius: "50%", background: "#C8102E" }}></div></div>
            <div style={{ width: 30, height: 20, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 0 0 1px rgba(255,255,255,0.15)" }}><div style={{ flex: 1, background: "#111" }}></div><div style={{ flex: 1, background: "#DD0000" }}></div><div style={{ flex: 1, background: "#FFCC00" }}></div></div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "18px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11.5, color: "#7C90B2" }}>
          <div>© 2025 JobStudy Xususiy Bandlik Agentligi. Все права защищены.</div>
          <div style={{ display: "flex", gap: 20 }}>
            <HoverBox as="a" href="#" style={{ color: "#7C90B2", textDecoration: "none", transition: "color .18s" }} hoverStyle={{ color: "#fff" }}>Политика конфиденциальности</HoverBox>
            <HoverBox as="a" href="#" style={{ color: "#7C90B2", textDecoration: "none", transition: "color .18s" }} hoverStyle={{ color: "#fff" }}>Условия использования</HoverBox>
          </div>
        </div>
      </div>
    </footer>
  );
}
