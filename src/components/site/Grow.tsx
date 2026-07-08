"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

const missions = [
  { n: "01", icon: "campaign", title: "Достоверное информирование", text: "Точная и надёжная информация для граждан Узбекистана о возможностях работы в Японии и для японской стороны — об Узбекистане." },
  { n: "02", icon: "school", title: "Укрепление системы подготовки", text: "Развитие обучения японскому языку, профессиональной подготовки и поддерживающих институтов через сетевое сотрудничество." },
  { n: "03", icon: "fact_check", title: "Расширение категорий SSW", text: "Расширение числа категорий экзаменов Specified Skilled Worker (SSW), доступных в Узбекистане, для новых карьерных возможностей." },
  { n: "04", icon: "diversity_3", title: "Поддержка вернувшихся", text: "Помощь вернувшимся специалистам в применении навыков в Узбекистане и укрепление ценности японского опыта работы." },
];

const impacts = [
  { icon: "groups", title: "Развитие квалифицированных кадров", text: "Через возможности трудоустройства в Японии" },
  { icon: "trending_up", title: "Вклад в промышленное развитие", text: "Применение полученных навыков после возвращения в Узбекистан" },
  { icon: "handshake", title: "Устойчивое сотрудничество", text: "Между Узбекистаном, Японией и Германией" },
  { icon: "public", title: "Долгосрочная ценность", text: "Для людей, компаний и общества" },
];

const growSteps = [
  { n: "1", icon: "info", title: "Информация и осведомлённость", text: "Достоверные сведения о возможностях в Японии" },
  { n: "2", icon: "menu_book", title: "Язык и навыки", text: "Японский язык, культура и профподготовка" },
  { n: "3", icon: "fact_check", title: "Подготовка к экзамену SSW", text: "Подготовка к экзаменам Specified Skilled Worker" },
  { n: "4", icon: "group_add", title: "Подбор работы в Японии", text: "Соединение кандидатов с японскими работодателями" },
  { n: "5", icon: "work", title: "Работа в Японии", text: "Работа, рост навыков и опыта" },
  { n: "6", icon: "apartment", title: "Возвращение и вклад", text: "Возвращение и вклад в развитие Узбекистана" },
];

const activities = [
  "Работа портала JAPAN CAREER PORTAL",
  "Укрепление учебных институтов в Узбекистане",
  "Поддержка проведения экзаменов SSW",
  "Развитие потенциала отправляющих организаций",
  "Карьерное консультирование и сопровождение",
  "Поддержка вернувшихся специалистов и реинтеграция",
];

const numbers = [
  { icon: "school", num: "200+", label: "студентов на обучении" },
  { icon: "workspace_premium", num: "70+", label: "обладателей JLPT" },
  { icon: "flag", num: "3", label: "ключевые миссии" },
  { icon: "checklist", num: "4", label: "основных направления" },
  { icon: "groups", num: "50+", label: "партнёров и организаций" },
  { icon: "handshake", num: "2", label: "страны-партнёра (Япония и Германия)" },
];

const partners = [
  { name: "JICA", sub: "", logo: "/logos/jica-square.png" },
  { name: "JobStudy", sub: "", logo: "/logos/jobstudy-logo.png" },
  { name: "DEOW JAPAN", sub: "", logo: "/logos/deow.png" },
  { name: "Project GROW", sub: "", logo: "/logos/grow.jpg" },
  { name: "INSTITUTE", sub: "Japanese Language & Vocational Competency", color: "#8A2B2B", accent: "#8A2B2B", logo: "" },
  { name: "PROUD Co., Ltd.", sub: "", color: "#1B58B8", accent: "#E0453A", logo: "" },
  { name: "JAPANESE COMPANIES", sub: "", color: "#3E4A5A", accent: "#C8102E", logo: "" },
  { name: "UZBEKISTAN GOVERNMENT", sub: "", color: "#12294F", accent: "#2BB673", logo: "" },
  { name: "GERMAN PARTNERS", sub: "", color: "#12294F", accent: "#F0B429", logo: "" },
].map((p) => Object.assign(p, { hasLogo: !!p.logo, noLogo: !p.logo }));

export function Grow() {
  return (
    <div style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }} data-screen-label="Проект GROW">
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="projects" navTheme="light" />
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(180deg,#F6FBF7,#EFF6F0)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "46%", backgroundImage: "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1400&q=70')", backgroundSize: "cover", backgroundPosition: "center bottom" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#F2F8F3 0%,rgba(242,248,243,0) 40%)" }}></div>
        </div>
        <div style={{ position: "absolute", right: "30%", top: 60, width: "34%", height: 200, backgroundImage: "radial-gradient(#B9CDBE 1.2px, transparent 1.4px)", backgroundSize: "11px 11px", opacity: 0.6 }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "26px 28px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "#8B99B3", fontWeight: 600, marginBottom: 34 }}>
            <span style={MI(15)}>home</span>
            <a href="Home.dc.html" style={{ color: "#8B99B3", textDecoration: "none" }}>Главная</a><span>›</span><span>Проекты</span><span>›</span><span style={{ color: "#2E4165" }}>Проект GROW</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 40, alignItems: "center" }}>
            <div>
              <h1 style={{ margin: "0 0 16px", fontSize: 46, fontWeight: 800, letterSpacing: "1px" }}><span style={{ color: "#17A05E" }}>ПРОЕКТ</span> <span style={{ color: "#12294F" }}>GROW</span></h1>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#12294F", lineHeight: 1.5, marginBottom: 14 }}>Growing Industrial Human Resources in Uzbekistan — развитие кадров через возможности работы в Японии</div>
              <p style={{ margin: "0 0 26px", fontSize: 13, lineHeight: 1.8, color: "#4A5C7E", maxWidth: 480 }}>Инициатива при поддержке JICA по развитию квалифицированных кадров в Узбекистане через легальное трудоустройство в Японии и вклад в промышленное развитие страны.</p>
              <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 30 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/jica.jpg" alt="JICA" style={{ height: 44, objectFit: "contain", borderRadius: 8, display: "block" }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/jobstudy-logo.png" alt="JobStudy" style={{ height: 40, objectFit: "contain", display: "block" }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/deow.png" alt="DEOW Japan" style={{ height: 38, objectFit: "contain", display: "block" }} />
              </div>
              <div style={{ display: "flex", gap: 13 }}>
                <HoverBox as="a" href="#missions" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#17A05E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 24px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.1)", transform: "translateY(-1px)" }}>О проекте GROW <span style={MI(16)}>arrow_forward</span></HoverBox>
                <HoverBox as="a" href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #C9D6CD", background: "#fff", color: "#2E4165", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 24px", borderRadius: 8, transition: "border-color .18s" }} hoverStyle={{ borderColor: "#17A05E" }}>Скачать брошюру <span style={MI(16)}>download</span></HoverBox>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 230, height: 230, borderRadius: "50%", background: "#fff", boxShadow: "0 24px 56px rgba(23,96,75,0.22)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/grow.jpg" alt="Project GROW" style={{ width: 170, height: 170, objectFit: "contain", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSIONS */}
      <div id="missions" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 6 }}>МИССИИ GROW</div>
        <div style={{ width: 44, height: 3, background: "#17A05E", borderRadius: 2, margin: "0 auto 30px" }}></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {missions.map((m) => (
            <HoverBox key={m.n} style={{ border: "1px solid #E4EEE7", borderRadius: 14, padding: "26px 22px", boxShadow: "0 6px 22px rgba(23,96,75,0.06)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 16px 34px rgba(23,96,75,0.13)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#EAF6EF", color: "#17A05E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={MI(22)}>{m.icon}</span>
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#BFDECB" }}>{m.n}</div>
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: "#12294F", lineHeight: 1.45, marginBottom: 10 }}>{m.title}</div>
              <div style={{ fontSize: 11.5, color: "#68789A", lineHeight: 1.65 }}>{m.text}</div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* OBJECTIVE & IMPACT */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 60px" }}>
        <div style={{ background: "#F2F8F3", borderRadius: 18, overflow: "hidden", display: "grid", gridTemplateColumns: "1.7fr 1fr" }}>
          <div style={{ padding: "34px 34px 30px" }}>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 24 }}>НАША ЦЕЛЬ И ВЛИЯНИЕ</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
              {impacts.map((i) => (
                <div key={i.title} style={{ borderLeft: "1px solid #D8E7DC", paddingLeft: 16 }}>
                  <span style={{ ...MI(24), color: "#17A05E" }}>{i.icon}</span>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#12294F", lineHeight: 1.4, margin: "8px 0 6px" }}>{i.title}</div>
                  <div style={{ fontSize: 10.5, color: "#68789A", lineHeight: 1.55 }}>{i.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=70')", backgroundSize: "cover", backgroundPosition: "center", minHeight: 220 }}></div>
        </div>
      </div>

      {/* HOW GROW WORKS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 60px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 6 }}>КАК РАБОТАЕТ GROW</div>
        <div style={{ width: 44, height: 3, background: "#17A05E", borderRadius: 2, margin: "0 auto 42px" }}></div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "4%", right: "4%", top: 26, height: 2, background: "#D3E8DA" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 10, position: "relative" }}>
            {growSteps.map((g) => (
              <div key={g.n} style={{ textAlign: "center" }}>
                <div style={{ width: 54, height: 54, borderRadius: "50%", background: "#fff", border: "2px solid #8FCCA8", color: "#17A05E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                  <span style={MI(23)}>{g.icon}</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#17A05E", marginTop: 11 }}>{g.n}</div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#12294F", lineHeight: 1.4, marginTop: 4 }}>{g.title}</div>
                <div style={{ fontSize: 10, color: "#8B99B3", lineHeight: 1.5, marginTop: 5 }}>{g.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KEY ACTIVITIES + NUMBERS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 60px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 26, alignItems: "stretch" }}>
        <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 360 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(255,255,255,0.94),rgba(255,255,255,0.75) 55%,rgba(255,255,255,0.35))" }}></div>
          <div style={{ position: "relative", padding: "30px 30px" }}>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 20 }}>КЛЮЧЕВЫЕ АКТИВНОСТИ</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {activities.map((a) => (
                <div key={a} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12.5, fontWeight: 700, color: "#2E4165", lineHeight: 1.5 }}>
                  <span style={{ ...MI(17), color: "#17A05E", marginTop: 1 }}>check_circle</span>{a}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: "#F2F8F3", borderRadius: 16, padding: 26 }}>
          <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 18 }}>GROW В ЦИФРАХ</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            {numbers.map((n) => (
              <HoverBox key={n.label} style={{ background: "#fff", border: "1px solid #E0EDE4", borderRadius: 12, padding: "18px 12px", textAlign: "center", transition: "transform .22s" }} hoverStyle={{ transform: "translateY(-3px)" }}>
                <span style={{ ...MI(21), color: "#17A05E" }}>{n.icon}</span>
                <div style={{ fontSize: 21, fontWeight: 800, color: "#17604B", margin: "6px 0 3px" }}>{n.num}</div>
                <div style={{ fontSize: 10, color: "#68789A", fontWeight: 600, lineHeight: 1.45 }}>{n.label}</div>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 60px" }}>
        <div style={{ textAlign: "center", fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#1D4E9E", marginBottom: 26 }}>НАШИ ПАРТНЁРЫ В GROW</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 13 }}>
          {partners.map((p) => (
            <HoverBox key={p.name} style={{ border: "1px solid #E7EDF6", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, padding: "14px 10px", minHeight: 84, textAlign: "center", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-4px)", boxShadow: "0 12px 26px rgba(18,41,79,0.1)" }}>
              {p.hasLogo && (
                <div title={p.name} style={{ height: 44, width: 120, backgroundImage: `url('${p.logo}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: 6 }}></div>
              )}
              {p.noLogo && (
                <>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: p.accent }}></div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.8px", color: p.color, lineHeight: 1.25 }}>{p.name}</div>
                    <div style={{ fontSize: 8, color: "#8B99B3", fontWeight: 600, lineHeight: 1.35, marginTop: 3 }}>{p.sub}</div>
                  </div>
                </>
              )}
            </HoverBox>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 64px" }}>
        <div data-keep="true" style={{ background: "linear-gradient(100deg,#0E3B2A,#17604B)", borderRadius: 18, padding: "36px 40px", display: "flex", alignItems: "center", gap: 26, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "36%", backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }}></div>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Растём вместе. Побеждаем вместе.</div>
            <div style={{ fontSize: 12.5, color: "#BFE0CD", marginTop: 6 }}>Строим лучшее будущее через навыки, возможности и международное сотрудничество.</div>
          </div>
          <div style={{ display: "flex", gap: 12, position: "relative" }}>
            <HoverBox as="a" href="Career.dc.html" style={{ background: "#17A05E", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 7, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.12)" }}>Участвовать в программе <span style={MI(15)}>arrow_forward</span></HoverBox>
            <HoverBox as="a" href="#contact" style={{ border: "1px solid rgba(255,255,255,0.45)", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, transition: "background .18s" }} hoverStyle={{ background: "rgba(255,255,255,0.1)" }}>Связаться с нами</HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
