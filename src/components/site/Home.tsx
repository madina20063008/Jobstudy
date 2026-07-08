"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox, CountUp } from "./primitives";
import { useJb } from "./JbProvider";

const MI = (size: number): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

const COUNTRIES = [
  { name: "УЗБЕКИСТАН", sub: "Образование и развитие", href: "Cooperation.dc.html", c1: "#1EB1E7", c2: "#FFFFFF", c3: "#2BB673", dot: "transparent", img: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=600&q=70" },
  { name: "ЯПОНИЯ", sub: "Образование и карьера", href: "Japan.dc.html", c1: "#FFFFFF", c2: "#FFFFFF", c3: "#FFFFFF", dot: "#C8102E", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=70" },
  { name: "ГЕРМАНИЯ", sub: "Образование и карьера", href: "Germany.dc.html", c1: "#111111", c2: "#DD0000", c3: "#FFCC00", dot: "transparent", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=70" },
];

const STATS: [string, number, string, string][] = [
  ["school", 200, "+", "студентов на обучении"],
  ["translate", 150, "+", "изучают японский язык"],
  ["workspace_premium", 70, "+", "обладателей сертификата JLPT"],
  ["engineering", 50, "+", "работников отправлено в Японию"],
  ["public", 3, "", "международных проекта"],
  ["handshake", 2, "", "страны-стратегических партнёра"],
];

const partnersBase = [
  { name: "JICA", sub: "", logo: "/logos/jica.jpg" },
  { name: "JobStudy", sub: "", logo: "/logos/jobstudy-logo.png" },
  { name: "Project GROW", sub: "", logo: "/logos/grow.jpg" },
  { name: "DEOW JAPAN", sub: "", logo: "/logos/deow.png" },
  { name: "INSTITUTE", sub: "Japanese Language & Vocational Competency Development", color: "#8A2B2B", markBg: "#8A2B2B", ch: "学", chSize: "15px", logo: "" },
  { name: "PROUD Co., Ltd.", sub: "", color: "#1B58B8", markBg: "#1B58B8", ch: "P", chSize: "15px", logo: "" },
  { name: "MASUI Co., Ltd.", sub: "", color: "#3E4A5A", markBg: "#6FA243", ch: "M", chSize: "15px", logo: "" },
  { name: "TOMATEC Co., Ltd.", sub: "", color: "#C8102E", markBg: "#C8102E", ch: "T", chSize: "15px", logo: "" },
];
const PARTNERS = partnersBase.concat(partnersBase);

const WHY = [
  { icon: "diversity_3", title: "Молодые и талантливые", text: "60% населения младше 30 лет" },
  { icon: "psychology", title: "Трудолюбие и дисциплина", text: "Быстро обучаемые и образованные кадры" },
  { icon: "translate", title: "Многоязычные специалисты", text: "Владение узбекским, русским и английским" },
  { icon: "category", title: "Разные отрасли", text: "Строительство, производство, сельское хозяйство, сервис" },
  { icon: "verified_user", title: "Надёжность и доверие", text: "Государственная поддержка и международное признание" },
];

const ABOUT_CHECKS = [
  "Головной офис: Ташкент",
  "Филиалы: Карши, Шахрисабз, Денов, Термез",
  "Партнёрство с государственными органами и профессиональными ассоциациями",
  "Большая база кандидатов, готовых к работе",
];

const JOURNEY = [
  { n: "1", icon: "app_registration", label: "Регистрация" },
  { n: "2", icon: "translate", label: "Языковая подготовка" },
  { n: "3", icon: "construction", label: "Проф. обучение" },
  { n: "4", icon: "quiz", label: "Экзамен JLPT" },
  { n: "5", icon: "fact_check", label: "Экзамен SSW" },
  { n: "6", icon: "record_voice_over", label: "Собеседование" },
  { n: "7", icon: "mark_email_read", label: "Оффер" },
  { n: "8", icon: "description", label: "Визовый процесс" },
  { n: "9", icon: "flight_takeoff", label: "Вылет" },
  { n: "10", icon: "badge", label: "Работа в Японии/Германии" },
  { n: "11", icon: "trending_up", label: "Карьерный рост" },
  { n: "12", icon: "volunteer_activism", label: "Возвращение и вклад" },
];

const INST_CHECKS = [
  "Японский язык и культура",
  "Подготовка к JLPT (N5 – N1)",
  "Подготовка к SSW (Specified Skilled Worker)",
  "Профессиональные навыки",
  "Подготовка к собеседованиям",
  "Карьерное консультирование и поддержка",
];

const PROJECTS = [
  { name: "TENSOR", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=70", text: "ИИ, спутниковый мониторинг и цифровые решения для умного сельского хозяйства." },
  { name: "MYKOS", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=70", text: "Биотехнологии и грибные решения для плодородия почв и засушливых земель." },
  { name: "F.T.E", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=70", text: "Японские технологии удобрений медленного высвобождения для устойчивого земледелия." },
];

const STORIES = [
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=70", quote: "Горжусь работой в Японии и ценным опытом.", name: "Дилшод А.", role: "Строительство" },
  { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=70", quote: "Спасибо JobStudy и преподавателям, которые верили в меня.", name: "Мадина К.", role: "Уход, Япония" },
  { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=70", quote: "Я улучшил навыки, и теперь у меня ясное будущее.", name: "Сарвар Б.", role: "Производство" },
  { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=70", quote: "Использую свой опыт для развития Узбекистана.", name: "Азиза Р.", role: "Вернувшийся специалист" },
];

const NEWS = [
  { title: "Ярмарка вакансий в Ташкенте с японскими компаниями", date: "20 мая 2025" },
  { title: "Визит делегации JICA Tsukuba", date: "15 мая 2025" },
  { title: "Новый набор студентов на курсы JLPT", date: "10 мая 2025" },
  { title: "Партнёрская встреча с немецкими организациями", date: "05 мая 2025" },
];

export function Home() {
  const { siteData } = useJb();
  const NEWS_L = siteData?.news?.length ? siteData.news : NEWS;
  const STORIES_L = siteData?.stories?.length ? siteData.stories.map((s) => ({ ...s, img: s.img || "" })) : STORIES;
  const PROJECTS_L = siteData?.projects?.length ? siteData.projects.map((p) => ({ ...p, img: p.img || "" })) : PROJECTS;
  const partnersDb = siteData?.partners?.length
    ? siteData.partners.map((p) => ({ name: p.name, sub: p.sub || "", logo: p.logo || "", color: p.markBg || "#1B58B8", markBg: p.markBg || "#1B58B8", ch: p.mark || "", chSize: "15px" }))
    : partnersBase;
  const PARTNERS_L = partnersDb.concat(partnersDb);
  return (
    <div style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }} data-screen-label="Главная">
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="home" navTheme="dark" />
      </div>

      {/* HERO */}
      <div data-keep="true" style={{ position: "relative", background: "#0A1E3C", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "0 0 0 24%", backgroundImage: "url('/assets/hero-people.png')", backgroundSize: "cover", backgroundPosition: "center right" }}></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #070C1F 0%, rgba(7,12,31,0.97) 28%, rgba(7,12,31,0.6) 42%, rgba(7,12,31,0.08) 58%, rgba(7,12,31,0))" }}></div>
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "64px 40px 196px" }}>
          <div style={{ maxWidth: 600, animation: "fadeUp .8s ease both" }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "3.5px", color: "#8FA9E8", marginBottom: 24 }}>УЗБЕКИСТАН – ЯПОНИЯ – ГЕРМАНИЯ</div>
            <h1 style={{ margin: 0, fontSize: 60, fontWeight: 800, lineHeight: 1.08, color: "#fff", letterSpacing: "1px" }}>СТРОИМ ГЛОБАЛЬНЫЕ <span style={{ color: "#6B7FF7" }}>КАРЬЕРЫ</span></h1>
            <div style={{ fontFamily: "'Caveat',cursive", fontSize: 33, color: "#C9D6F5", marginTop: 16 }}>Создаём лучшее будущее вместе</div>
            <p style={{ margin: "12px 0 32px", fontSize: 14.5, lineHeight: 1.75, color: "#AFC0E4", maxWidth: 440 }}>Соединяем талантливых людей с образовательными и карьерными возможностями в Японии и Германии</p>
            <div style={{ display: "flex", gap: 14 }}>
              <HoverBox as="a" href="Career.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#3D56D6", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 800, padding: "14px 28px", borderRadius: 10, boxShadow: "0 12px 30px rgba(61,86,214,0.4)", transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.15)", transform: "translateY(-1px)" }}>Подать заявку <span style={MI(17)}>arrow_forward</span></HoverBox>
              <HoverBox as="a" href="About.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 9, border: "1px solid rgba(255,255,255,0.35)", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 800, padding: "14px 26px", borderRadius: 10, transition: "background .18s" }} hoverStyle={{ background: "rgba(255,255,255,0.1)" }}>Узнать больше <span style={MI(19)}>play_circle</span></HoverBox>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginTop: 40, flexWrap: "wrap", marginRight: -26 }}>
            {COUNTRIES.map((c) => (
              <HoverBox as="a" key={c.name} href={c.href} style={{ display: "flex", alignItems: "center", gap: 13, background: "rgba(9,17,38,0.72)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 14, padding: 12, backdropFilter: "blur(8px)", width: 295, textDecoration: "none", boxShadow: "0 14px 34px rgba(0,0,0,0.35)", transition: "transform .22s,border-color .22s" }} hoverStyle={{ transform: "translateY(-4px)", borderColor: "rgba(255,255,255,0.4)" }}>
                <div style={{ width: 94, height: 76, borderRadius: 10, backgroundColor: "#1B3357", backgroundImage: `url('${c.img}')`, backgroundSize: "cover", backgroundPosition: "center", flexShrink: 0 }}></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                    <div style={{ width: 24, height: 16, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 0 0 1px rgba(255,255,255,0.25)", flexShrink: 0 }}>
                      <div style={{ flex: 1, background: c.c1 }}></div><div style={{ flex: 1, background: c.c2, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 7, height: 7, borderRadius: "50%", background: c.dot }}></div></div><div style={{ flex: 1, background: c.c3 }}></div>
                    </div>
                    <div style={{ color: "#fff", fontWeight: 800, fontSize: 13, letterSpacing: "1px", whiteSpace: "nowrap" }}>{c.name}</div>
                  </div>
                  <div style={{ fontSize: 11.5, color: "#9FB2D6", lineHeight: 1.45, fontWeight: 600 }}>{c.sub}</div>
                </div>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                  <span style={MI(16)}>chevron_right</span>
                </div>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ maxWidth: 1280, margin: "-168px auto 0", padding: "0 28px", position: "relative", zIndex: 5 }}>
        <div data-keep="true" style={{ background: "rgba(11,20,44,0.94)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", borderRadius: 18, boxShadow: "0 22px 50px rgba(4,10,25,0.5)", display: "grid", gridTemplateColumns: "repeat(6,1fr)", padding: "28px 18px", gap: 8 }}>
          {STATS.map((s) => (
            <div key={s[3]} style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 10px", borderRight: "1px solid rgba(255,255,255,0.09)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#4D66E8", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 18px rgba(77,102,232,0.4)" }}>
                <span style={MI(21)}>{s[0]}</span>
              </div>
              <div>
                <div style={{ fontSize: 23, fontWeight: 800, color: "#fff", lineHeight: 1.1 }}><CountUp to={s[1]} suffix={s[2]} /></div>
                <div style={{ fontSize: 10.5, color: "#9FB2CE", fontWeight: 600, lineHeight: 1.35, marginTop: 2 }}>{s[3]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px 30px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 26 }}>НАШИ ПАРТНЁРЫ И ОРГАНИЗАЦИИ</div>
        <div style={{ border: "1px solid #E7EDF6", borderRadius: 14, padding: "20px 26px", display: "flex", alignItems: "center", gap: 18, boxShadow: "0 6px 22px rgba(18,41,79,0.05)" }}>
          <span style={{ ...MI(20), color: "#93A3BE" }}>chevron_left</span>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div style={{ display: "flex", gap: 64, width: "max-content", animation: "marquee 32s linear infinite" }}>
              {PARTNERS_L.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
                  {p.logo ? (
                    <div title={p.name} style={{ height: 48, width: 150, backgroundImage: `url('${p.logo}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: 8 }}></div>
                  ) : (
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: p.markBg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: p.chSize, boxShadow: "0 3px 10px rgba(18,41,79,0.18)", flexShrink: 0 }}>{p.ch}</div>
                  )}
                  <div style={{ display: p.logo ? "none" : "block" }}>
                    <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: "1.5px", color: p.color, lineHeight: 1.1 }}>{p.name}</div>
                    <div style={{ fontSize: 8.5, color: "#8B99B3", fontWeight: 600, letterSpacing: "0.4px", maxWidth: 170, lineHeight: 1.3 }}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span style={{ ...MI(20), color: "#93A3BE" }}>chevron_right</span>
        </div>
      </div>

      {/* WHY PARTNER */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "34px 28px 64px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 26 }}>ПОЧЕМУ ВЫБИРАЮТ НАС?</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 18 }}>
          {WHY.map((w) => (
            <HoverBox key={w.title} style={{ background: "#fff", border: "1px solid #E7EDF6", borderRadius: 14, padding: "26px 18px", textAlign: "center", boxShadow: "0 6px 22px rgba(18,41,79,0.05)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 16px 34px rgba(18,41,79,0.12)" }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#EDF3FC", color: "#1D4E9E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <span style={MI(23)}>{w.icon}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1D4E9E", marginBottom: 8, lineHeight: 1.35 }}>{w.title}</div>
              <div style={{ fontSize: 12, color: "#68789A", lineHeight: 1.55 }}>{w.text}</div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div style={{ background: "#EDF1FE" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 52, alignItems: "center" }}>
          <div>
            <h2 style={{ margin: "0 0 18px", fontSize: 30, fontWeight: 800, letterSpacing: "1px", color: "#12294F" }}>О НАС</h2>
            <p style={{ margin: "0 0 20px", fontSize: 14, lineHeight: 1.8, color: "#4A5C7E" }}>JobStudy — лицензированное частное агентство занятости в Узбекистане, основанное в 2025 году. Мы готовим, обучаем и соединяем квалифицированных специалистов с надёжными работодателями в Японии и Германии.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
              {ABOUT_CHECKS.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, fontWeight: 600, color: "#2E4165", lineHeight: 1.5 }}>
                  <span style={{ ...MI(18), color: "#1D4E9E", marginTop: 1 }}>check_circle</span>{a}
                </div>
              ))}
            </div>
            <HoverBox as="a" href="Agency.dc.html" style={{ display: "inline-block", background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 26px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.2)", transform: "translateY(-1px)" }}>Подробнее о нас</HoverBox>
          </div>
          <div style={{ height: 390, borderRadius: 16, backgroundColor: "#D8E1EF", backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=70')", backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0 18px 40px rgba(11,31,63,0.16)" }}></div>
        </div>
      </div>

      {/* COOPERATION */}
      <div id="cooperation" style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F" }}>МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО</div>
        <div style={{ textAlign: "center", fontSize: 13, color: "#68789A", margin: "8px 0 30px" }}>Строим прочные мосты между Узбекистаном, Японией и Германией</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 34px 1fr 34px 1fr", gap: 14, alignItems: "center" }}>
          <div style={{ background: "#F4F7FC", borderRadius: 14, padding: "28px 26px", borderLeft: "4px solid #C8102E", minHeight: 190 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 14, height: 14, borderRadius: "50%", background: "#C8102E" }}></div></div>
              <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "1.5px", color: "#12294F" }}>ЯПОНИЯ</div>
            </div>
            <p style={{ margin: "0 0 18px", fontSize: 12.5, lineHeight: 1.7, color: "#4A5C7E" }}>Через JICA и проект GROW мы развиваем человеческий капитал и создаём возможности трудоустройства в Японии.</p>
            <HoverBox as="a" href="Japan.dc.html" style={{ display: "inline-block", border: "1px solid #C9D6EA", color: "#2E4165", textDecoration: "none", fontSize: 11.5, fontWeight: 700, padding: "8px 16px", borderRadius: 8, background: "#fff", transition: "border-color .18s,color .18s" }} hoverStyle={{ borderColor: "#1D4E9E", color: "#1D4E9E" }}>Программы Японии</HoverBox>
          </div>
          <span style={{ ...MI(30), color: "#1D4E9E", textAlign: "center" }}>sync_alt</span>
          <div style={{ background: "#F4F7FC", borderRadius: 14, padding: "28px 26px", borderLeft: "4px solid #2BB673", minHeight: 190 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 34, height: 24, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}><div style={{ flex: 1, background: "#1EB1E7" }}></div><div style={{ flex: 1, background: "#fff" }}></div><div style={{ flex: 1, background: "#2BB673" }}></div></div>
              <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "1.5px", color: "#12294F" }}>УЗБЕКИСТАН</div>
            </div>
            <p style={{ margin: "0 0 18px", fontSize: 12.5, lineHeight: 1.7, color: "#4A5C7E" }}>Мы инвестируем в образование, языковую подготовку и профессиональные навыки, чтобы раскрыть потенциал молодёжи.</p>
            <HoverBox as="a" href="Cooperation.dc.html" style={{ display: "inline-block", border: "1px solid #C9D6EA", color: "#2E4165", textDecoration: "none", fontSize: 11.5, fontWeight: 700, padding: "8px 16px", borderRadius: 8, background: "#fff", transition: "border-color .18s,color .18s" }} hoverStyle={{ borderColor: "#1D4E9E", color: "#1D4E9E" }}>Узбекистан</HoverBox>
          </div>
          <span style={{ ...MI(30), color: "#1D4E9E", textAlign: "center" }}>sync_alt</span>
          <div style={{ background: "#F4F7FC", borderRadius: 14, padding: "28px 26px", borderLeft: "4px solid #F0B429", minHeight: 190 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 34, height: 24, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}><div style={{ flex: 1, background: "#111" }}></div><div style={{ flex: 1, background: "#DD0000" }}></div><div style={{ flex: 1, background: "#FFCC00" }}></div></div>
              <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "1.5px", color: "#12294F" }}>ГЕРМАНИЯ</div>
            </div>
            <p style={{ margin: "0 0 18px", fontSize: 12.5, lineHeight: 1.7, color: "#4A5C7E" }}>Сотрудничаем с немецкими организациями: программы Ausbildung и пути квалифицированного трудоустройства.</p>
            <HoverBox as="a" href="Germany.dc.html" style={{ display: "inline-block", border: "1px solid #C9D6EA", color: "#2E4165", textDecoration: "none", fontSize: 11.5, fontWeight: 700, padding: "8px 16px", borderRadius: 8, background: "#fff", transition: "border-color .18s,color .18s" }} hoverStyle={{ borderColor: "#1D4E9E", color: "#1D4E9E" }}>Программы Германии</HoverBox>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 22 }}>
          <a href="Cooperation.dc.html" style={{ color: "#1D4E9E", fontSize: 12.5, fontWeight: 800, textDecoration: "none" }}>Все направления сотрудничества →</a>
        </div>
      </div>

      {/* JOURNEY */}
      <div style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "34px 28px 64px" }}>
          <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 44 }}>ВАШ ПУТЬ К УСПЕХУ</div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "2%", right: "2%", top: 23, height: 2, background: "linear-gradient(90deg,#D5DFF0,#1D4E9E,#D5DFF0)" }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 6, position: "relative" }}>
              {JOURNEY.map((j) => (
                <div key={j.n} style={{ textAlign: "center" }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#1D4E9E", border: "3px solid #fff", boxShadow: "0 0 0 2px #1D4E9E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                    <span style={MI(21)}>{j.icon}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#1D4E9E", marginTop: 10 }}>{j.n}</div>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: "#2E4165", lineHeight: 1.35, marginTop: 3 }}>{j.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 38 }}>
            <HoverBox as="a" href="Career.dc.html" style={{ display: "inline-block", background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 28px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.2)", transform: "translateY(-1px)" }}>Начните свой путь сегодня</HoverBox>
          </div>
        </div>
      </div>

      {/* INSTITUTE */}
      <div style={{ background: "#F4F7FC" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px", display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 52, alignItems: "center" }}>
          <div>
            <h2 style={{ margin: "0 0 18px", fontSize: 24, fontWeight: 800, letterSpacing: "0.5px", color: "#12294F", lineHeight: 1.35 }}>ИНСТИТУТ ЯПОНСКОГО ЯЗЫКА И ПРОФЕССИОНАЛЬНОЙ ПОДГОТОВКИ</h2>
            <p style={{ margin: "0 0 20px", fontSize: 13.5, lineHeight: 1.8, color: "#4A5C7E" }}>Наш институт даёт качественное образование по японскому языку и профессиональную подготовку по международным стандартам.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 26 }}>
              {INST_CHECKS.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, fontWeight: 600, color: "#2E4165", lineHeight: 1.5 }}>
                  <span style={{ ...MI(18), color: "#1D4E9E", marginTop: 1 }}>check_circle</span>{c}
                </div>
              ))}
            </div>
            <HoverBox as="a" href="Institute.dc.html" style={{ display: "inline-block", background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 26px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.2)", transform: "translateY(-1px)" }}>Узнать больше</HoverBox>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gridTemplateRows: "190px 190px", gap: 14 }}>
            <div style={{ gridRow: "span 2", borderRadius: 14, backgroundColor: "#D8E1EF", backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div style={{ borderRadius: 14, backgroundColor: "#D8E1EF", backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div style={{ borderRadius: 14, backgroundColor: "#D8E1EF", backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div style={{ borderRadius: 14, backgroundColor: "#D8E1EF", backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div style={{ borderRadius: 14, backgroundColor: "#D8E1EF", backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F" }}>НАШИ ИННОВАЦИОННЫЕ ПРОЕКТЫ</div>
        <div style={{ textAlign: "center", fontSize: 13, color: "#68789A", margin: "8px 0 30px" }}>Развиваем аграрные и технологические инновации ради лучшего будущего</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {PROJECTS_L.map((p) => (
            <HoverBox as="a" key={p.name} href="Cooperation.dc.html" style={{ position: "relative", display: "block", height: 280, borderRadius: 16, overflow: "hidden", textDecoration: "none", backgroundColor: "#12294F", backgroundImage: `url('${p.img}')`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform .25s,box-shadow .25s" }} hoverStyle={{ transform: "translateY(-6px)", boxShadow: "0 22px 44px rgba(11,31,63,0.22)" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(8,22,45,0.1) 30%, rgba(8,22,45,0.82))" }}></div>
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: 22 }}>
                <div style={{ fontSize: 21, fontWeight: 800, letterSpacing: "1.5px", color: "#fff", marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#D3DEF0", lineHeight: 1.6, marginBottom: 14 }}>{p.text}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 800, padding: "7px 14px", borderRadius: 7, backdropFilter: "blur(4px)" }}>Подробнее <span style={MI(14)}>arrow_forward</span></div>
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* STORIES + NEWS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "10px 28px 64px", display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56 }}>
        <div>
          <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", textAlign: "center" }}>ИСТОРИИ УСПЕХА</div>
          <div style={{ fontSize: 13, color: "#68789A", margin: "8px 0 24px", textAlign: "center" }}>Реальные люди. Реальные результаты.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {STORIES_L.map((s) => (
              <HoverBox key={s.name} style={{ background: "#fff", border: "1px solid #E7EDF6", borderRadius: 14, padding: "16px 13px", textAlign: "center", boxShadow: "0 6px 22px rgba(18,41,79,0.05)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-4px)", boxShadow: "0 14px 30px rgba(18,41,79,0.12)" }}>
                <div style={{ width: 58, height: 58, borderRadius: 12, margin: "0 auto 12px", backgroundColor: "#D8E1EF", backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center top" }}></div>
                <div style={{ fontSize: 10.5, color: "#4A5C7E", lineHeight: 1.55, fontStyle: "italic", marginBottom: 10 }}>«{s.quote}»</div>
                <div style={{ fontSize: 11.5, fontWeight: 800, color: "#12294F" }}>{s.name}</div>
                <div style={{ fontSize: 9.5, color: "#8B99B3", fontWeight: 600, marginTop: 2 }}>{s.role}</div>
              </HoverBox>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <HoverBox as="a" href="Career.dc.html" style={{ display: "inline-block", background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 11.5, fontWeight: 800, padding: "10px 20px", borderRadius: 8, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.2)" }}>Все истории</HoverBox>
          </div>
        </div>
        <div id="news">
          <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", textAlign: "center" }}>ПОСЛЕДНИЕ НОВОСТИ</div>
          <div style={{ fontSize: 13, color: "#68789A", margin: "8px 0 24px", textAlign: "center" }}>Следите за нашими событиями и мероприятиями.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NEWS_L.map((n, i) => (
              <HoverBox key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: "#F4F7FC", borderRadius: 10, padding: "13px 16px", transition: "background .18s" }} hoverStyle={{ background: "#EAF0F9" }}>
                <span style={{ ...MI(18), color: "#1D4E9E" }}>campaign</span>
                <div style={{ flex: 1, fontSize: 12.5, fontWeight: 700, color: "#2E4165", lineHeight: 1.4 }}>{n.title}</div>
                <div style={{ fontSize: 11, color: "#8B99B3", fontWeight: 600, flexShrink: 0 }}>{n.date}</div>
              </HoverBox>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <HoverBox as="a" href="#news" style={{ display: "inline-block", background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 11.5, fontWeight: 800, padding: "10px 20px", borderRadius: 8, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.2)" }}>Все новости</HoverBox>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div data-keep="true" style={{ background: "#0C2140", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "0 72% 0 0", backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=70')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }}></div>
        <div style={{ position: "absolute", inset: "0 0 0 72%", backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=70')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }}></div>
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", padding: "64px 28px", textAlign: "center" }}>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "1.5px", color: "#fff" }}>ВАШЕ БУДУЩЕЕ НАЧИНАЕТСЯ ЗДЕСЬ</div>
          <p style={{ fontSize: 13.5, color: "#AFC2DE", lineHeight: 1.7, margin: "14px 0 28px" }}>Присоединяйтесь к тысячам молодых специалистов, строящих карьеру в Японии и Германии.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            <HoverBox as="a" href="Career.dc.html" style={{ background: "#C8102E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 26px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.15)", transform: "translateY(-1px)" }}>Подать заявку</HoverBox>
            <HoverBox as="a" href="#contact" style={{ border: "1px solid rgba(255,255,255,0.45)", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 26px", borderRadius: 8, transition: "background .18s" }} hoverStyle={{ background: "rgba(255,255,255,0.1)" }}>Связаться с нами</HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
