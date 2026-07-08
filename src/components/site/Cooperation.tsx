"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

const heroStats = [
  { icon: "groups", num: "3", title: "Страны-партнёра", text: "Узбекистан, Япония, Германия" },
  { icon: "apartment", num: "200+", title: "Партнёрских организаций", text: "Университеты, компании и институты" },
  { icon: "handshake", num: "50+", title: "Активных программ", text: "Действующие проекты и инициативы" },
];

const network = [
  {
    name: "УЗБЕКИСТАН", c1: "#1EB1E7", c2: "#FFFFFF", c3: "#2BB673", dot: "transparent",
    text: "Сильная государственная поддержка и молодое талантливое население — двигатель международного сотрудничества.",
    list: ["Государственные институты", "Университеты и колледжи", "Учебные центры", "Частные компании"],
    img: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "ЯПОНИЯ", c1: "#FFFFFF", c2: "#FFFFFF", c3: "#FFFFFF", dot: "#C8102E",
    text: "Передовые технологии, качественное образование и ценный опыт открывают новые возможности для Узбекистана.",
    list: ["JICA и государство", "Японские компании", "Университеты и институты", "Отраслевые ассоциации"],
    img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "ГЕРМАНИЯ", c1: "#111111", c2: "#DD0000", c3: "#FFCC00", dot: "transparent",
    text: "Инновации, инженерное дело и профессиональное образование мирового уровня для устойчивого роста.",
    list: ["Государственные органы", "Немецкие компании", "Университеты и институты", "Палаты и ассоциации"],
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=70",
  },
];

const areas = [
  { icon: "school", label: "Образование и обучение" },
  { icon: "construction", label: "Профессиональное образование" },
  { icon: "work", label: "Возможности трудоустройства" },
  { icon: "settings", label: "Трансфер технологий" },
  { icon: "lightbulb", label: "Инновации и R&D" },
  { icon: "agriculture", label: "Агро- и фудтех" },
  { icon: "trending_up", label: "Инвестиции и бизнес" },
  { icon: "diversity_3", label: "Культурный обмен" },
];

const orgs = [
  { name: "JICA", sub: "Japan Int. Cooperation Agency", color: "#1B58B8", accent: "#E0453A" },
  { name: "JobStudy", sub: "Xususiy Bandlik Agentligi", color: "#16305E", accent: "#16305E" },
  { name: "INSTITUTE", sub: "Japanese Language & Vocational Competency", color: "#8A2B2B", accent: "#8A2B2B" },
  { name: "PROUD Co., Ltd.", sub: "", color: "#1B58B8", accent: "#E0453A" },
  { name: "MASUI Co., Ltd.", sub: "", color: "#3E4A5A", accent: "#6FA243" },
  { name: "TOMATEC Co., Ltd.", sub: "", color: "#C8102E", accent: "#C8102E" },
  { name: "TENSOR", sub: "", color: "#17604B", accent: "#17A05E" },
  { name: "MYKOS", sub: "", color: "#4B3AA6", accent: "#4B3AA6" },
  { name: "F.T.E", sub: "", color: "#17A05E", accent: "#F0B429" },
  { name: "YAKKASAROY", sub: "Tumani Hokimligi", color: "#12294F", accent: "#2BB673" },
  { name: "MIGRATION AGENCY", sub: "", color: "#12294F", accent: "#12294F" },
  { name: "QARSHI STATE", sub: "Technical University", color: "#12294F", accent: "#1D4E9E" },
  { name: "INTERNATIONAL", sub: "Innovation University", color: "#12294F", accent: "#1D4E9E" },
  { name: "GROW", sub: "JICA Project", color: "#17A05E", accent: "#C8102E" },
];

const projects = [
  { icon: "school", name: "Проект GROW", color: "#17A05E", text: "Развитие человеческих ресурсов и трудоустройство в Японии.", href: "Grow.dc.html" },
  { icon: "satellite_alt", name: "Проект TENSOR", color: "#1D4E9E", text: "ИИ, спутниковый мониторинг и умное сельское хозяйство.", href: "Home.dc.html#projects" },
  { icon: "psychiatry", name: "Проект MYKOS", color: "#4B3AA6", text: "Грибные биотехнологии и устойчивое земледелие.", href: "Home.dc.html#projects" },
  { icon: "compost", name: "Проект F.T.E", color: "#C8102E", text: "Инновационные технологии удобрений для высокой продуктивности.", href: "Home.dc.html#projects" },
];

const gallery = [
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=70",
];

const timeline = [
  { year: "2021", text: "Первые переговоры с японскими партнёрами" },
  { year: "2022", text: "Партнёрство с JICA, старт учебных программ" },
  { year: "2023", text: "Основан JobStudy, открыт институт" },
  { year: "2024", text: "Первые работники отправлены в Японию, новые проекты" },
  { year: "2025", text: "Расширение партнёрства с Германией" },
  { year: "2026+", text: "Больше программ, инноваций и глобального влияния" },
];

export function Cooperation() {
  return (
    <div style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }} data-screen-label="Международное сотрудничество">
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="about" navTheme="light" />
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(180deg,#F7FAFE,#EFF4FB)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 24, bottom: 24, right: "2%", width: "48%", backgroundImage: "url('/assets/world-dots.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "26px 28px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "#8B99B3", fontWeight: 600, marginBottom: 36 }}>
            <span style={MI(15)}>home</span>
            <a href="Home.dc.html" style={{ color: "#8B99B3", textDecoration: "none" }}>Главная</a><span>›</span><span style={{ color: "#2E4165" }}>Международное сотрудничество</span>
          </div>
          <h1 style={{ margin: "0 0 18px", fontSize: 42, fontWeight: 800, color: "#12294F", letterSpacing: "0.5px", maxWidth: 640, lineHeight: 1.2 }}>МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО</h1>
          <p style={{ margin: "0 0 34px", fontSize: 14, lineHeight: 1.8, color: "#4A5C7E", maxWidth: 460 }}>Строим прочные мосты между Узбекистаном, Японией и Германией через образование, инновации и трудоустройство.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,240px)", gap: 18 }}>
            {heroStats.map((s) => (
              <div key={s.title} style={{ background: "#fff", border: "1px solid #E7EDF6", borderRadius: 14, padding: "22px 20px", boxShadow: "0 10px 26px rgba(18,41,79,0.08)" }}>
                <span style={{ ...MI(26), color: "#1D4E9E" }}>{s.icon}</span>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#12294F", margin: "8px 0 4px" }}>{s.num}</div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#2E4165" }}>{s.title}</div>
                <div style={{ fontSize: 11, color: "#68789A", lineHeight: 1.5, marginTop: 4 }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTNERSHIP NETWORK */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 6 }}>НАША ПАРТНЁРСКАЯ СЕТЬ</div>
        <div style={{ width: 44, height: 3, background: "#1D4E9E", borderRadius: 2, margin: "0 auto 30px" }}></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }}>
          {network.map((n) => (
            <HoverBox key={n.name} style={{ background: "#F0F5FC", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 18px 38px rgba(18,41,79,0.14)" }}>
              <div style={{ padding: "26px 24px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                  <div style={{ width: 32, height: 22, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                    <div style={{ flex: 1, background: n.c1 }}></div><div style={{ flex: 1, background: n.c2, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: n.dot }}></div></div><div style={{ flex: 1, background: n.c3 }}></div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "1.5px", color: "#12294F" }}>{n.name}</div>
                </div>
                <p style={{ margin: "0 0 16px", fontSize: 12.5, lineHeight: 1.7, color: "#4A5C7E" }}>{n.text}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {n.list.map((li) => (
                    <div key={li} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, fontWeight: 600, color: "#2E4165" }}>
                      <span style={{ ...MI(15), color: "#17A05E" }}>check</span>{li}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ height: 150, backgroundColor: "#C7D4E8", backgroundImage: `url('${n.img}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* AREAS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "10px 28px 60px" }}>
        <div style={{ textAlign: "center", fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#1D4E9E", marginBottom: 6 }}>НАПРАВЛЕНИЯ СОТРУДНИЧЕСТВА</div>
        <div style={{ width: 44, height: 3, background: "#1D4E9E", borderRadius: 2, margin: "0 auto 26px" }}></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 14 }}>
          {areas.map((a) => (
            <HoverBox key={a.label} style={{ background: "#fff", border: "1px solid #E7EDF6", borderRadius: 14, padding: "22px 10px", textAlign: "center", boxShadow: "0 6px 20px rgba(18,41,79,0.05)", transition: "transform .22s,border-color .22s" }} hoverStyle={{ transform: "translateY(-4px)", borderColor: "#1D4E9E" }}>
              <span style={{ ...MI(26), color: "#1D4E9E" }}>{a.icon}</span>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: "#2E4165", lineHeight: 1.4, marginTop: 10 }}>{a.label}</div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* KEY PARTNERS */}
      <div style={{ background: "#F4F7FC" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 28px" }}>
          <div style={{ textAlign: "center", fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#1D4E9E", marginBottom: 26 }}>КЛЮЧЕВЫЕ ПАРТНЁРСКИЕ ОРГАНИЗАЦИИ</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 13 }}>
            {orgs.map((o, i) => (
              <HoverBox key={i} style={{ background: "#fff", border: "1px solid #E7EDF6", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, padding: "16px 10px", minHeight: 86, textAlign: "center", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-4px)", boxShadow: "0 12px 26px rgba(18,41,79,0.1)" }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: o.accent }}></div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.8px", color: o.color, lineHeight: 1.2 }}>{o.name}</div>
                  <div style={{ fontSize: 8, color: "#8B99B3", fontWeight: 600, lineHeight: 1.35, marginTop: 3 }}>{o.sub}</div>
                </div>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS OVERVIEW */}
      <div id="projects" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px", display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: 36, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 20 }}>ОБЗОР МЕЖДУНАРОДНЫХ ПРОЕКТОВ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
            {projects.map((p) => (
              <HoverBox key={p.name} style={{ display: "flex", alignItems: "center", gap: 14, background: "#F4F7FC", borderRadius: 12, padding: "16px 18px", transition: "background .18s" }} hoverStyle={{ background: "#EAF0F9" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "#fff", border: "1px solid #E2E9F4", display: "flex", alignItems: "center", justifyContent: "center", color: p.color, flexShrink: 0 }}>
                  <span style={MI(19)}>{p.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#12294F" }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "#68789A", lineHeight: 1.5, marginTop: 2 }}>{p.text}</div>
                </div>
                <a href={p.href} style={{ fontSize: 11, fontWeight: 800, color: "#1D4E9E", textDecoration: "none", flexShrink: 0 }}>Подробнее →</a>
              </HoverBox>
            ))}
          </div>
          <HoverBox as="a" href="Grow.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.2)" }}>Все проекты <span style={MI(16)}>grid_view</span></HoverBox>
        </div>
        <div style={{ background: "#EFF4FB", borderRadius: 16, position: "relative", minHeight: 420, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 14, backgroundImage: "url('/assets/world-dots.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
          <div style={{ position: "absolute", right: 18, bottom: 18, background: "#fff", borderRadius: 12, padding: "16px 18px", boxShadow: "0 8px 24px rgba(18,41,79,0.14)" }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#12294F", marginBottom: 10 }}>Потоки сотрудничества</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 10.5, color: "#4A5C7E", fontWeight: 600 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 18, height: 2, background: "#C8102E" }}></div>Япония ⇄ Узбекистан</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 18, height: 2, background: "#F0B429" }}></div>Германия ⇄ Узбекистан</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 18, height: 2, background: "#17A05E" }}></div>Узбекистан ⇄ Глобальные партнёры</div>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 60px" }}>
        <div style={{ textAlign: "center", fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#1D4E9E", marginBottom: 26 }}>СОТРУДНИЧЕСТВО В ДЕЙСТВИИ</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 }}>
          {gallery.map((g, i) => (
            <HoverBox key={i} style={{ height: 130, borderRadius: 12, backgroundColor: "#C7D4E8", backgroundImage: `url('${g}')`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "scale(1.03)", boxShadow: "0 12px 28px rgba(18,41,79,0.18)" }}></HoverBox>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 22 }}>
          <HoverBox as="a" href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 12, fontWeight: 800, padding: "11px 20px", borderRadius: 8, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.2)" }}>Смотреть галерею <span style={MI(15)}>photo_library</span></HoverBox>
        </div>
      </div>

      {/* TIMELINE */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 64px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 44 }}>НАШ ПУТЬ СОТРУДНИЧЕСТВА</div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "3%", right: "3%", top: 5, height: 2, background: "#1D4E9E", opacity: 0.3 }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12, position: "relative" }}>
            {timeline.map((t) => (
              <div key={t.year} style={{ textAlign: "center" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", border: "3px solid #1D4E9E", margin: "0 auto 18px" }}></div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#12294F" }}>{t.year}</div>
                <div style={{ fontSize: 11.5, color: "#68789A", lineHeight: 1.6, marginTop: 8 }}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 64px" }}>
        <div data-keep="true" style={{ background: "linear-gradient(100deg,#0C2140,#123765)", borderRadius: 18, padding: "38px 40px", display: "flex", alignItems: "center", gap: 28, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "32%", backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=70')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.45, borderRadius: "0 18px 18px 0" }}></div>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}><span style={MI(26)}>public</span></div>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Вместе мы строим лучшее будущее</div>
            <div style={{ fontSize: 12.5, color: "#AFC2DE", marginTop: 6 }}>Крепкое сотрудничество сегодня — широкие возможности завтра.</div>
          </div>
          <div style={{ display: "flex", gap: 12, position: "relative" }}>
            <HoverBox as="a" href="#contact" style={{ background: "#1D4E9E", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 7, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.2)" }}>Стать партнёром <span style={MI(15)}>arrow_forward</span></HoverBox>
            <HoverBox as="a" href="#contact" style={{ border: "1px solid rgba(255,255,255,0.45)", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, transition: "background .18s" }} hoverStyle={{ background: "rgba(255,255,255,0.1)" }}>Связаться с нами</HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
