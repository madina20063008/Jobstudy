"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

const values = [
  "Честность и прозрачность",
  "Качественное образование",
  "Люди прежде всего",
  "Глобальное сотрудничество",
  "Инновации и развитие",
];

const whoStats = [
  { icon: "workspace_premium", num: "2025", label: "Основано в Ташкенте" },
  { icon: "apartment", num: "4", label: "Региональных филиала: Карши, Шахрисабз, Денов, Термез" },
  { icon: "groups", num: "1000+", label: "Активных кандидатов в базе" },
  { icon: "handshake", num: "20+", label: "Партнёров в Японии и Германии" },
];

const whatWeDo = [
  { icon: "school", title: "Образование", text: "Японский и немецкий язык, профессиональная подготовка и сертификация.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=70" },
  { icon: "work", title: "Трудоустройство", text: "Соединяем специалистов с надёжными работодателями Японии и Германии.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=70" },
  { icon: "public", title: "Международное сотрудничество", text: "Партнёрства с государством, университетами и частными организациями.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=70" },
  { icon: "lightbulb", title: "Инновации", text: "Внедрение передовых технологий и поддержка инновационных проектов.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=70" },
  { icon: "trending_up", title: "Инвестиции", text: "Привлечение инвестиционных возможностей и развитие бизнеса.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=70" },
  { icon: "support_agent", title: "Карьерная поддержка", text: "Сопровождение кандидатов на всём пути — от обучения до карьерного роста.", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=70" },
];

const achievements = [
  { icon: "school", num: "200+", label: "студентов на обучении" },
  { icon: "translate", num: "150+", label: "изучают японский язык" },
  { icon: "workspace_premium", num: "70+", label: "обладателей JLPT" },
  { icon: "engineering", num: "50+", label: "работников в Японии" },
  { icon: "public", num: "3", label: "международных проекта" },
  { icon: "handshake", num: "2", label: "страны-партнёра" },
];

const milestones = [
  { icon: "apartment", title: "Начало", text: "Первые партнёрства с Японией и местными институтами." },
  { icon: "groups", title: "Институт и программы", text: "Открыт японский институт, запущены языковые программы." },
  { icon: "handshake", title: "Глобальные партнёрства", text: "Партнёрства с JICA, японскими компаниями и немецкими организациями." },
  { icon: "flight_takeoff", title: "Первые отправки", text: "50+ кандидатов успешно отправлены на работу в Японию." },
  { icon: "rocket_launch", title: "Будущее расширение", text: "Расширение программ в Германию и на новые международные рынки." },
  { icon: "public", title: "Влияние на будущее", text: "Устойчивая экосистема развития человеческого капитала." },
];

const partnerLogos = [
  { name: "JICA", sub: "Japan International Cooperation Agency", color: "#1B58B8", accent: "#E0453A" },
  { name: "JobStudy", sub: "Xususiy Bandlik Agentligi", color: "#16305E", accent: "#16305E" },
  { name: "INSTITUTE", sub: "Japanese Language & Vocational Competency Development", color: "#8A2B2B", accent: "#8A2B2B" },
  { name: "PROUD Co., Ltd.", sub: "", color: "#1B58B8", accent: "#E0453A" },
  { name: "MASUI Co., Ltd.", sub: "", color: "#3E4A5A", accent: "#6FA243" },
  { name: "TOMATEC Co., Ltd.", sub: "", color: "#C8102E", accent: "#C8102E" },
  { name: "TENSOR", sub: "", color: "#17604B", accent: "#17A05E" },
  { name: "MYKOS", sub: "", color: "#4B3AA6", accent: "#4B3AA6" },
];

export function About() {
  return (
    <div style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }} data-screen-label="О платформе">
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="about" navTheme="light" />
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(180deg,#F4F7FC,#EDF2FA)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "52%", backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}><div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#F0F4FB 0%,rgba(240,244,251,0) 30%)" }}></div></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "26px 28px 60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "#8B99B3", fontWeight: 600, marginBottom: 36 }}>
            <span style={MI(15)}>home</span>
            <a href="Home.dc.html" style={{ color: "#8B99B3", textDecoration: "none" }}>Главная</a><span>›</span><span style={{ color: "#2E4165" }}>О платформе</span>
          </div>
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: "2px", color: "#1D4E9E", marginBottom: 16 }}>О ПЛАТФОРМЕ</div>
            <h1 style={{ margin: "0 0 22px", fontSize: 40, fontWeight: 800, color: "#12294F", lineHeight: 1.25 }}>Строим глобальные карьеры. Создаём лучшее будущее.</h1>
            <p style={{ margin: "0 0 34px", fontSize: 14, lineHeight: 1.8, color: "#4A5C7E" }}>JobStudy International Platform — мост между Узбекистаном, Японией и Германией, создающий новые возможности через образование, инновации, профессиональную подготовку и трудоустройство.</p>
            <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}><div style={{ width: 28, height: 19, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }}><div style={{ flex: 1, background: "#1EB1E7" }}></div><div style={{ flex: 1, background: "#fff" }}></div><div style={{ flex: 1, background: "#2BB673" }}></div></div><span style={{ fontSize: 12.5, fontWeight: 800, color: "#2E4165" }}>Узбекистан</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}><div style={{ width: 28, height: 19, borderRadius: 3, background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 9, height: 9, borderRadius: "50%", background: "#C8102E" }}></div></div><span style={{ fontSize: 12.5, fontWeight: 800, color: "#2E4165" }}>Япония</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}><div style={{ width: 28, height: 19, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }}><div style={{ flex: 1, background: "#111" }}></div><div style={{ flex: 1, background: "#DD0000" }}></div><div style={{ flex: 1, background: "#FFCC00" }}></div></div><span style={{ fontSize: 12.5, fontWeight: 800, color: "#2E4165" }}>Германия</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION / VISION / VALUES */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 28px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
        <div style={{ background: "#EFF4FC", borderRadius: 16, padding: "30px 28px", position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ ...MI(26), color: "#1D4E9E" }}>target</span>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F" }}>НАША МИССИЯ</div>
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: "#4A5C7E" }}>Развивать человеческий капитал, соединяя талантливых людей с глобальными возможностями в Японии и Германии, поддерживая устойчивый экономический рост и инновации в Узбекистане.</p>
        </div>
        <div style={{ background: "#EDF8F1", borderRadius: 16, padding: "30px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ ...MI(26), color: "#17A05E" }}>visibility</span>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F" }}>НАШЕ ВИДЕНИЕ</div>
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: "#4A5C7E" }}>Стать самой надёжной международной платформой образования, развития навыков и трудоустройства, признанной за вклад в людей, отрасли и сообщества.</p>
        </div>
        <div style={{ background: "#FDF6E7", borderRadius: 16, padding: "30px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ ...MI(26), color: "#D99A16" }}>diamond</span>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F" }}>НАШИ ЦЕННОСТИ</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {values.map((v) => (
              <div key={v} style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 12.5, fontWeight: 600, color: "#2E4165" }}>
                <span style={{ ...MI(16), color: "#D99A16" }}>check_circle</span>{v}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 28px 60px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: "2px", color: "#1D4E9E", marginBottom: 14 }}>КТО МЫ</div>
          <h2 style={{ margin: "0 0 18px", fontSize: 30, fontWeight: 800, color: "#12294F", lineHeight: 1.3 }}>Прочный фундамент глобального сотрудничества</h2>
          <p style={{ margin: "0 0 26px", fontSize: 13.5, lineHeight: 1.8, color: "#4A5C7E" }}>Мы — лицензированное частное агентство занятости и центр международного сотрудничества, работающий с государственными институтами, образовательными организациями и ведущими компаниями Японии и Германии.</p>
          <HoverBox as="a" href="Agency.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 24px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.2)", transform: "translateY(-1px)" }}>Подробнее <span style={MI(16)}>arrow_forward</span></HoverBox>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {whoStats.map((s) => (
            <HoverBox key={s.label} style={{ border: "1px solid #E7EDF6", borderRadius: 14, padding: "26px 16px", textAlign: "center", boxShadow: "0 6px 22px rgba(18,41,79,0.05)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 16px 34px rgba(18,41,79,0.12)" }}>
              <span style={{ ...MI(34), color: "#1D4E9E" }}>{s.icon}</span>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#12294F", margin: "10px 0 6px" }}>{s.num}</div>
              <div style={{ fontSize: 11.5, color: "#68789A", fontWeight: 600, lineHeight: 1.5 }}>{s.label}</div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <div style={{ background: "#F4F7FC" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px" }}>
          <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 6 }}>ЧЕМ МЫ ЗАНИМАЕМСЯ</div>
          <div style={{ width: 44, height: 3, background: "#1D4E9E", borderRadius: 2, margin: "0 auto 30px" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16 }}>
            {whatWeDo.map((w) => (
              <HoverBox key={w.title} style={{ background: "#fff", border: "1px solid #E7EDF6", borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 22px rgba(18,41,79,0.05)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 16px 34px rgba(18,41,79,0.12)" }}>
                <div style={{ height: 110, backgroundColor: "#D8E1EF", backgroundImage: `url('${w.img}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                  <div style={{ position: "absolute", left: "50%", bottom: -20, transform: "translateX(-50%)", width: 40, height: 40, borderRadius: "50%", background: "#1D4E9E", border: "3px solid #fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={MI(19)}>{w.icon}</span>
                  </div>
                </div>
                <div style={{ padding: "30px 14px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#12294F", marginBottom: 8 }}>{w.title}</div>
                  <div style={{ fontSize: 11, color: "#68789A", lineHeight: 1.6 }}>{w.text}</div>
                </div>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* KEY ACHIEVEMENTS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px 30px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 26 }}>КЛЮЧЕВЫЕ ДОСТИЖЕНИЯ</div>
        <div style={{ background: "#F4F7FC", borderRadius: 16, display: "grid", gridTemplateColumns: "repeat(6,1fr)", padding: "24px 16px", gap: 8 }}>
          {achievements.map((a) => (
            <div key={a.label} style={{ display: "flex", alignItems: "center", gap: 11, padding: "0 10px", borderRight: "1px solid #E2E9F4" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff", border: "1px solid #E2E9F4", color: "#1D4E9E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={MI(20)}>{a.icon}</span>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#12294F", lineHeight: 1.1 }}>{a.num}</div>
                <div style={{ fontSize: 10, color: "#68789A", fontWeight: 600, lineHeight: 1.35, marginTop: 2 }}>{a.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOURNEY */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "44px 28px 60px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F" }}>НАШ ПУТЬ</div>
        <div style={{ textAlign: "center", fontSize: 13, color: "#68789A", margin: "8px 0 40px" }}>С самого начала и в будущее — путь доверия, роста и глобального влияния.</div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "2%", right: "2%", top: 5, height: 2, background: "#1D4E9E", opacity: 0.35 }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16, position: "relative" }}>
            {milestones.map((m) => (
              <div key={m.title}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", border: "3px solid #1D4E9E", margin: "0 auto 22px" }}></div>
                <HoverBox style={{ background: "#F4F7FC", borderRadius: 14, padding: "22px 16px", textAlign: "center", height: "100%", boxSizing: "border-box", transition: "transform .22s" }} hoverStyle={{ transform: "translateY(-4px)" }}>
                  <span style={{ ...MI(28), color: "#1D4E9E" }}>{m.icon}</span>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#12294F", margin: "10px 0 8px" }}>{m.title}</div>
                  <div style={{ fontSize: 11, color: "#68789A", lineHeight: 1.6 }}>{m.text}</div>
                </HoverBox>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 64px", display: "grid", gridTemplateColumns: "1fr 2.4fr", gap: 20 }}>
        <div data-keep="true" style={{ background: "#0E2A52", borderRadius: 16, padding: "32px 28px", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ ...MI(30), color: "#8FB4E8", marginBottom: 16 }}>emoji_events</span>
          <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.4, marginBottom: 14 }}>Нам доверяют партнёры. Нас ведут результаты.</div>
          <p style={{ margin: "0 0 22px", fontSize: 12.5, lineHeight: 1.7, color: "#AFC2DE" }}>Мы гордимся работой с ведущими организациями, разделяющими наше видение лучшего будущего.</p>
          <HoverBox as="a" href="Cooperation.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1D4E9E", color: "#fff", textDecoration: "none", fontSize: 12, fontWeight: 800, padding: "11px 18px", borderRadius: 8, width: "max-content", transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.2)" }}>Наши партнёры <span style={MI(15)}>arrow_forward</span></HoverBox>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {partnerLogos.map((p) => (
            <HoverBox key={p.name} style={{ border: "1px solid #E7EDF6", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, padding: "18px 12px", minHeight: 78, boxShadow: "0 4px 16px rgba(18,41,79,0.04)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-4px)", boxShadow: "0 12px 26px rgba(18,41,79,0.1)" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: p.accent, flexShrink: 0 }}></div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 13.5, letterSpacing: "1px", color: p.color, lineHeight: 1.15 }}>{p.name}</div>
                <div style={{ fontSize: 8.5, color: "#8B99B3", fontWeight: 600, lineHeight: 1.3, maxWidth: 150 }}>{p.sub}</div>
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
