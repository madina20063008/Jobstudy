"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

const heroChecks = [
  { icon: "workspace_premium", label: "Качественное образование" },
  { icon: "quiz", label: "Подготовка к JLPT" },
  { icon: "groups", label: "Опытные преподаватели" },
  { icon: "temple_buddhist", label: "Японская культура" },
  { icon: "flight_takeoff", label: "Путь в Японию" },
];

const heroStats = [
  { icon: "groups", num: "1500+", label: "студентов обучено" },
  { icon: "co_present", num: "15+", label: "опытных преподавателей" },
  { icon: "military_tech", num: "95%", label: "успешность на JLPT" },
  { icon: "apartment", num: "Modern", label: "учебная среда" },
];

const aboutChecks = [
  "Учебная программа по стандартам JLPT",
  "Квалифицированные и носители-преподаватели",
  "Малые группы и индивидуальный подход",
  "Современные классы и цифровые инструменты",
  "Культурные мероприятия и живая практика",
];

const courses = [
  { n: "01", title: "Общий японский", text: "От начального до продвинутого уровня (N5 – N1).", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=70" },
  { n: "02", title: "Подготовка к JLPT", text: "Комплексная подготовка к N5, N4, N3, N2, N1.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=70" },
  { n: "03", title: "Деловой японский", text: "Японский для работы и делового общения.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=70" },
  { n: "04", title: "Японская культура", text: "Культура, традиции и обычаи Японии.", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=70" },
  { n: "05", title: "Краткие и интенсивные курсы", text: "Гибкие программы для быстрого прогресса.", img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=500&q=70" },
];

const whyItems = [
  { icon: "trending_up", title: "Стабильные результаты", text: "Высокий процент сдачи JLPT каждый год" },
  { icon: "co_present", title: "Эксперты-преподаватели", text: "Сертифицированные и опытные наставники" },
  { icon: "forum", title: "Практический подход", text: "Фокус на разговоре и реальных ситуациях" },
  { icon: "work", title: "Карьерные возможности", text: "Работа, учёба и жизнь в Японии" },
  { icon: "flight_takeoff", title: "Путь в Японию", text: "Поддержка обучения и трудоустройства" },
  { icon: "diversity_3", title: "Студенческое сообщество", text: "Живое международное сообщество" },
];

const levels = [
  { n: "N5", ring: "#8FB4E8", title: "Начальный", text: "Базовые разговорные фразы и выражения" },
  { n: "N4", ring: "#6E9BD9", title: "Элементарный", text: "Понимание простого повседневного японского" },
  { n: "N3", ring: "#4A7CC4", title: "Средний", text: "Японский в повседневной жизни и на работе" },
  { n: "N2", ring: "#2B5CA8", title: "Выше среднего", text: "Понимание сложного японского в разных ситуациях" },
  { n: "N1", ring: "#16305E", title: "Продвинутый", text: "Свободное владение на профессиональном уровне" },
];

const jlpt = ["Регулярные пробные экзамены", "Учебные материалы и ресурсы", "Воркшопы по стратегии экзамена", "Индивидуальное сопровождение"];

const bandStats = [
  { icon: "groups", num: "1500+", label: "студентов обучено" },
  { icon: "co_present", num: "15+", label: "преподавателей" },
  { icon: "meeting_room", num: "8", label: "классов" },
  { icon: "headphones", num: "3", label: "языковые лаборатории" },
  { icon: "sentiment_satisfied", num: "98%", label: "удовлетворённость студентов" },
  { icon: "military_tech", num: "5", label: "лет успешной работы" },
];

const facilities = [
  { label: "Современные классы", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=70" },
  { label: "Языковая лаборатория", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=70" },
  { label: "Библиотека и ресурсный центр", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=70" },
  { label: "Зона самостоятельной работы", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=70" },
  { label: "Кабинет культурных занятий", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=70" },
  { label: "Платформа онлайн-обучения", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=70" },
];

const support = [
  { icon: "school", title: "Академическое консультирование", text: "Личное сопровождение к успеху" },
  { icon: "description", title: "Визовая поддержка", text: "Помощь со студенческой визой и документами" },
  { icon: "apartment", title: "Жильё", text: "Помощь в поиске безопасного и комфортного жилья" },
  { icon: "work", title: "Карьерное сопровождение", text: "Поддержка с работой и стажировкой в Японии" },
  { icon: "flight_takeoff", title: "Ориентация «Жизнь в Японии»", text: "Подготовка к новой жизни в Японии" },
  { icon: "support_agent", title: "Поддержка 24/7", text: "Наша команда всегда готова помочь" },
  { icon: "diversity_3", title: "Сообщество", text: "Мероприятия и клубы для студентов" },
];

const stories = [
  { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=70", quote: "Благодаря институту я сдал JLPT N2 и получил оффер в Японии. Преподаватели потрясающие и очень поддерживают.", name: "Акмаль Саидов", role: "JLPT N2 / Работает в Токио" },
  { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=70", quote: "Уроки очень практичные. Я быстро улучшила японский и теперь учусь в университете Осаки.", name: "Дилдора Хамидова", role: "Студентка университета Осаки" },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=70", quote: "Отличная атмосфера, прекрасные преподаватели и полезные культурные занятия. Очень рекомендую этот институт!", name: "Азизбек Турсунов", role: "JLPT N1 / Работает в Нагое" },
];

export function Institute() {
  return (
    <div style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }} data-screen-label="Институт японского языка">
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="institute" navTheme="light" />
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(180deg,#F7FAFE,#F1F5FB)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "58%", backgroundImage: "url('https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1600&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}><div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#F4F7FC 0%,rgba(244,247,252,0) 30%)" }}></div></div>
        <div style={{ position: "absolute", right: 36, bottom: 44, background: "rgba(255,255,255,0.94)", borderRadius: 12, padding: "16px 18px", boxShadow: "0 12px 32px rgba(18,41,79,0.16)", backdropFilter: "blur(4px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {heroChecks.map((h) => (
              <div key={h.label} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 11.5, fontWeight: 800, color: "#2E4165" }}>
                <span style={{ ...MI(16), color: "#1D4E9E" }}>{h.icon}</span>{h.label}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "26px 28px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "#8B99B3", fontWeight: 600, marginBottom: 34 }}>
            <span style={MI(15)}>home</span>
            <a href="Home.dc.html" style={{ color: "#8B99B3", textDecoration: "none" }}>Главная</a><span>›</span><span>Институт</span><span>›</span><span style={{ color: "#2E4165" }}>Институт японского языка</span>
          </div>
          <div style={{ maxWidth: 500 }}>
            <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: "2px", color: "#5A6B87" }}>ИНСТИТУТ</div>
            <h1 style={{ margin: "2px 0 10px", fontSize: 42, fontWeight: 800, letterSpacing: "1px", color: "#12294F" }}>ЯПОНСКОГО ЯЗЫКА</h1>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#C8102E", marginBottom: 16 }}>Ворота в Японию. Будущее в ваших руках.</div>
            <p style={{ margin: "0 0 28px", fontSize: 13.5, lineHeight: 1.8, color: "#4A5C7E" }}>Качественное обучение японскому языку и знакомство с культурой — подготовка к учёбе, работе и жизни в Японии.</p>
            <div style={{ display: "flex", gap: 13, marginBottom: 30 }}>
              {heroStats.map((s) => (
                <div key={s.label} style={{ background: "#fff", border: "1px solid #E7EDF6", borderRadius: 12, padding: "14px 16px", boxShadow: "0 8px 22px rgba(18,41,79,0.07)", minWidth: 100, textAlign: "center" }}>
                  <span style={{ ...MI(20), color: "#1D4E9E" }}>{s.icon}</span>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#12294F", marginTop: 4 }}>{s.num}</div>
                  <div style={{ fontSize: 9.5, color: "#68789A", fontWeight: 600, lineHeight: 1.4, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 13 }}>
              <HoverBox as="a" href="#courses" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 24px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.2)", transform: "translateY(-1px)" }}>Наши курсы <span style={MI(16)}>arrow_forward</span></HoverBox>
              <HoverBox as="a" href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #D8E1EF", background: "#fff", color: "#2E4165", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 24px", borderRadius: 8, transition: "border-color .18s" }} hoverStyle={{ borderColor: "#1D4E9E" }}>Скачать брошюру <span style={MI(16)}>download</span></HoverBox>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT + COURSES */}
      <div id="courses" style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 28px", display: "grid", gridTemplateColumns: "1fr 2.6fr", gap: 38, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 16 }}>ОБ ИНСТИТУТЕ</div>
          <p style={{ margin: "0 0 20px", fontSize: 12.5, lineHeight: 1.8, color: "#4A5C7E" }}>Институт обучает японскому языку и культуре с практическим подходом. Мы развиваем навыки для академического, профессионального и повседневного общения в Японии.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {aboutChecks.map((a) => (
              <div key={a} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 12, fontWeight: 700, color: "#2E4165", lineHeight: 1.5 }}>
                <span style={{ ...MI(16), color: "#C8102E", marginTop: 1 }}>check_circle</span>{a}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 16 }}>НАШИ КУРСЫ</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 13 }}>
            {courses.map((c) => (
              <HoverBox key={c.n} style={{ border: "1px solid #E7EDF6", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 6px 20px rgba(18,41,79,0.05)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 16px 32px rgba(18,41,79,0.12)" }}>
                <div style={{ height: 92, backgroundColor: "#D8E1EF", backgroundImage: `url('${c.img}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                  <div style={{ position: "absolute", left: 10, bottom: -14, width: 28, height: 28, borderRadius: "50%", background: "#C8102E", border: "2px solid #fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 800 }}>{c.n}</div>
                </div>
                <div style={{ padding: "22px 12px 16px", textAlign: "center", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#12294F", lineHeight: 1.4, marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 10, color: "#68789A", lineHeight: 1.55, flex: 1 }}>{c.text}</div>
                  <a href="Career.dc.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 5, marginTop: 10, color: "#C8102E", textDecoration: "none", fontSize: 10, fontWeight: 800 }}>Подробнее <span style={MI(12)}>arrow_forward</span></a>
                </div>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* WHY LEARN */}
      <div style={{ background: "#F8FAFD" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "50px 28px" }}>
          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 26 }}>ПОЧЕМУ УЧИТЬ ЯПОНСКИЙ У НАС?</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}>
            {whyItems.map((w) => (
              <HoverBox key={w.title} style={{ textAlign: "center", padding: "18px 10px", background: "#fff", border: "1px solid #E7EDF6", borderRadius: 14, transition: "transform .22s" }} hoverStyle={{ transform: "translateY(-4px)" }}>
                <span style={{ ...MI(27), color: "#1D4E9E" }}>{w.icon}</span>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#12294F", margin: "9px 0 5px", lineHeight: 1.35 }}>{w.title}</div>
                <div style={{ fontSize: 10, color: "#8B99B3", lineHeight: 1.5, fontWeight: 600 }}>{w.text}</div>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* PROFICIENCY PATH */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 28px", display: "grid", gridTemplateColumns: "2.3fr 1fr", gap: 30, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 40 }}>ПУТЬ ВЛАДЕНИЯ ЯПОНСКИМ ЯЗЫКОМ</div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "4%", right: "4%", top: 24, height: 2, background: "#D5DFF0" }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, position: "relative" }}>
              {levels.map((l) => (
                <div key={l.n} style={{ textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#fff", border: `2px solid ${l.ring}`, color: l.ring, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontSize: 14, fontWeight: 800 }}>{l.n}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: "#12294F", marginTop: 11 }}>{l.title}</div>
                  <div style={{ fontSize: 10, color: "#8B99B3", lineHeight: 1.5, marginTop: 4, fontWeight: 600 }}>{l.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: "#F4F7FC", borderRadius: 16, padding: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -30, bottom: -30, width: 130, height: 130, borderRadius: "50%", border: "14px solid rgba(29,78,158,0.08)" }}></div>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "1px", color: "#12294F", marginBottom: 16 }}>ПОДДЕРЖКА НА ЭКЗАМЕНЕ JLPT</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
            {jlpt.map((j) => (
              <div key={j} style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 11.5, fontWeight: 700, color: "#2E4165" }}>
                <span style={{ ...MI(15), color: "#17A05E" }}>check</span>{j}
              </div>
            ))}
          </div>
          <a href="Career.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, color: "#C8102E", textDecoration: "none", fontSize: 11.5, fontWeight: 800 }}>Подробнее <span style={MI(13)}>arrow_forward</span></a>
        </div>
      </div>

      {/* NAVY STATS BAND */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 56px" }}>
        <div data-keep="true" style={{ background: "#0E2A52", borderRadius: 16, display: "grid", gridTemplateColumns: "repeat(6,1fr)", padding: "26px 14px", gap: 8 }}>
          {bandStats.map((b) => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 11, padding: "0 12px", borderRight: "1px solid rgba(255,255,255,0.12)" }}>
              <span style={{ ...MI(24), color: "#8FB4E8" }}>{b.icon}</span>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{b.num}</div>
                <div style={{ fontSize: 10, color: "#9FB2CE", fontWeight: 600, lineHeight: 1.35, marginTop: 2 }}>{b.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FACILITIES */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 56px" }}>
        <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 22 }}>УСЛОВИЯ И УЧЕБНАЯ СРЕДА</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}>
          {facilities.map((f) => (
            <HoverBox key={f.label} style={{ border: "1px solid #E7EDF6", borderRadius: 12, overflow: "hidden", boxShadow: "0 5px 18px rgba(18,41,79,0.05)", transition: "transform .22s" }} hoverStyle={{ transform: "translateY(-4px)" }}>
              <div style={{ height: 110, backgroundColor: "#D8E1EF", backgroundImage: `url('${f.img}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ padding: "11px 10px", textAlign: "center", fontSize: 11, fontWeight: 800, color: "#2E4165", lineHeight: 1.4 }}>{f.label}</div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* SUPPORT */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 56px" }}>
        <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 22 }}>ПОДДЕРЖКА СТУДЕНТОВ</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 12 }}>
          {support.map((s) => (
            <div key={s.title} style={{ textAlign: "center", padding: "16px 8px", borderRight: "1px solid #EDF1F8" }}>
              <span style={{ ...MI(25), color: "#1D4E9E" }}>{s.icon}</span>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: "#12294F", margin: "8px 0 4px", lineHeight: 1.35 }}>{s.title}</div>
              <div style={{ fontSize: 9.5, color: "#8B99B3", lineHeight: 1.5, fontWeight: 600 }}>{s.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STORIES */}
      <div id="stories" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 56px" }}>
        <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 22 }}>ИСТОРИИ УСПЕХА</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {stories.map((st) => (
            <HoverBox key={st.name} style={{ background: "#F4F7FC", borderRadius: 14, padding: 22, display: "flex", gap: 16, alignItems: "flex-start", transition: "transform .22s" }} hoverStyle={{ transform: "translateY(-4px)" }}>
              <div style={{ width: 64, height: 64, borderRadius: 12, backgroundColor: "#D8E1EF", backgroundImage: `url('${st.img}')`, backgroundSize: "cover", backgroundPosition: "center top", flexShrink: 0 }}></div>
              <div>
                <div style={{ fontSize: 11.5, color: "#4A5C7E", lineHeight: 1.65, fontStyle: "italic", marginBottom: 10 }}>«{st.quote}»</div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#12294F" }}>{st.name}</div>
                <div style={{ fontSize: 10, color: "#8B99B3", fontWeight: 600, marginTop: 2 }}>{st.role}</div>
              </div>
            </HoverBox>
          ))}
        </div>
        <div style={{ textAlign: "right", marginTop: 16 }}>
          <HoverBox as="a" href="Career.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#16305E", color: "#fff", textDecoration: "none", fontSize: 11.5, fontWeight: 800, padding: "10px 18px", borderRadius: 8, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.2)" }}>Больше историй <span style={MI(14)}>arrow_forward</span></HoverBox>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 64px" }}>
        <div data-keep="true" style={{ background: "#0C2140", borderRadius: 18, padding: "36px 40px", display: "flex", alignItems: "center", gap: 26, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1600&q=70')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.32 }}></div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(8,22,45,0.9),rgba(8,22,45,0.5))" }}></div>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ fontSize: 23, fontWeight: 800, color: "#fff" }}>Начните свой японский путь сегодня!</div>
            <div style={{ fontSize: 12.5, color: "#C3D2E8", marginTop: 6 }}>Учитесь. Растите. Добивайтесь успеха в Японии.</div>
          </div>
          <div style={{ display: "flex", gap: 12, position: "relative" }}>
            <HoverBox as="a" href="Career.dc.html" style={{ background: "#C8102E", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 7, transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.15)" }}>Подать заявку <span style={MI(15)}>arrow_forward</span></HoverBox>
            <HoverBox as="a" href="#contact" style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 7, transition: "background .18s" }} hoverStyle={{ background: "rgba(255,255,255,0.12)" }}>Связаться с нами <span style={MI(15)}>arrow_forward</span></HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
