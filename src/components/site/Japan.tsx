"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

const heroStats = [
  { icon: "school", num: "150+", label: "студентов на обучении" },
  { icon: "workspace_premium", num: "70+", label: "обладателей JLPT" },
  { icon: "engineering", num: "50+", label: "работников в Японии" },
];

const programs = [
  { icon: "menu_book", title: "Японский язык", text: "Качественное обучение японскому языку от начального до продвинутого уровня.", href: "Institute.dc.html", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=70" },
  { icon: "quiz", title: "Подготовка к JLPT", text: "Комплексная подготовка к экзаменам JLPT (N5 – N1) с опытными преподавателями.", href: "Institute.dc.html", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=70" },
  { icon: "badge", title: "Specified Skilled Worker (SSW)", text: "Возможность работать в Японии по визовой программе Specified Skilled Worker.", href: "Career.dc.html", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=70" },
  { icon: "public", title: "Программы JICA", text: "Различные программы обучения и развития потенциала при поддержке JICA.", href: "Grow.dc.html", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=70" },
  { icon: "trending_up", title: "Проект GROW", text: "Проект развития человеческих ресурсов для устойчивого промышленного роста.", href: "Grow.dc.html", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=70" },
  { icon: "handshake", title: "JobStudy и трудоустройство", text: "Соединяем квалифицированных кандидатов с надёжными японскими работодателями.", href: "Agency.dc.html", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=70" },
];

const sectors = [
  { icon: "precision_manufacturing", title: "Промышленность и производство", text: "Работа в производстве, строительстве, электронике, автомобильной отрасли и др.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=70" },
  { icon: "agriculture", title: "Сельское хозяйство", text: "Современное сельское хозяйство с японскими технологиями и стандартами.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=70" },
  { icon: "favorite", title: "Уход (Kaigo)", text: "Подготовка и трудоустройство в секторе ухода за пожилыми в Японии.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=70" },
  { icon: "restaurant", title: "Гостиницы и общепит", text: "Работа в отелях, ресторанах и индустрии питания.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=70" },
  { icon: "directions_boat", title: "Судостроение и обслуживание", text: "Квалифицированная работа в судостроении, автосервисе и смежных областях.", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=70" },
];

const whyJapan = [
  "Передовые технологии и отрасли мирового уровня",
  "Высокие стандарты труда и безопасная рабочая среда",
  "Карьерный рост и развитие навыков",
  "Конкурентная зарплата и льготы",
  "Возможность познакомиться с японской культурой",
  "Путь к долгосрочной карьере и переезду",
];

const japanStats = [
  { icon: "trending_up", num: "4-я", label: "экономика мира" },
  { icon: "work", num: "14+", label: "доступных секторов SSW" },
  { icon: "groups", num: "Высокий спрос", label: "на иностранных специалистов" },
  { icon: "verified_user", num: "Надёжно", label: "безопасная среда и правовая защита" },
];

const steps = [
  { n: "01", icon: "app_registration", title: "Регистрация", text: "Подайте заявку" },
  { n: "02", icon: "translate", title: "Языковая подготовка", text: "Изучайте японский" },
  { n: "03", icon: "quiz", title: "Экзамен JLPT", text: "Сдайте JLPT (N5 и выше)" },
  { n: "04", icon: "construction", title: "Обучение SSW", text: "Пройдите проф. подготовку" },
  { n: "05", icon: "record_voice_over", title: "Собеседование", text: "С японскими работодателями" },
  { n: "06", icon: "mark_email_read", title: "Оффер", text: "Получите предложение" },
  { n: "07", icon: "description", title: "Виза и документы", text: "Подготовка документов" },
  { n: "08", icon: "flight_takeoff", title: "Вылет", text: "Перелёт в Японию" },
  { n: "09", icon: "badge", title: "Работа", text: "Начало карьеры в Японии" },
  { n: "10", icon: "trending_up", title: "Карьерный рост", text: "Стройте своё будущее" },
];

const institutions = [
  { icon: "public", title: "JICA", sub: "Японское агентство международного сотрудничества" },
  { icon: "apartment", title: "Японские компании и работодатели", sub: "" },
  { icon: "school", title: "Университеты и языковые школы", sub: "" },
  { icon: "hub", title: "Отраслевые ассоциации", sub: "" },
  { icon: "account_balance", title: "Местные власти и организации", sub: "" },
];

export function Japan() {
  return (
    <div style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }} data-screen-label="Программы Японии">
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="japan" navTheme="light" />
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(180deg,#FDF7F7,#F8EFEF)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "56%", backgroundImage: "url('https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1600&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}><div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#FBF3F3 0%,rgba(251,243,243,0) 35%)" }}></div></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "26px 28px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "#8B99B3", fontWeight: 600, marginBottom: 36 }}>
            <span style={MI(15)}>home</span>
            <a href="Home.dc.html" style={{ color: "#8B99B3", textDecoration: "none" }}>Главная</a><span>›</span><span style={{ color: "#2E4165" }}>Программы Японии</span>
          </div>
          <div style={{ maxWidth: 480 }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: "2px", color: "#C8102E", marginBottom: 14 }}>ПРОГРАММЫ ЯПОНИИ</div>
            <h1 style={{ margin: "0 0 20px", fontSize: 44, fontWeight: 800, color: "#12294F", lineHeight: 1.2 }}>Ваше будущее в Японии</h1>
            <p style={{ margin: "0 0 30px", fontSize: 14, lineHeight: 1.8, color: "#4A5C7E" }}>Широкие возможности образования, обучения и трудоустройства в Японии через надёжные партнёрства и проверенные программы.</p>
            <div style={{ display: "flex", gap: 14, marginBottom: 30 }}>
              {heroStats.map((s) => (
                <div key={s.label} style={{ background: "#fff", border: "1px solid #F0E2E2", borderRadius: 12, padding: "16px 18px", boxShadow: "0 8px 22px rgba(140,30,45,0.08)", minWidth: 120 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ ...MI(19), color: "#C8102E" }}>{s.icon}</span>
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#12294F" }}>{s.num}</span>
                  </div>
                  <div style={{ fontSize: 10.5, color: "#68789A", fontWeight: 600, lineHeight: 1.4, marginTop: 5 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <HoverBox as="a" href="#programs" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C8102E", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 800, padding: "13px 26px", borderRadius: 8, transition: "filter .18s,transform .18s" }} hoverStyle={{ filter: "brightness(1.15)", transform: "translateY(-1px)" }}>Смотреть программы <span style={MI(16)}>arrow_forward</span></HoverBox>
          </div>
        </div>
      </div>

      {/* PROGRAMS */}
      <div id="programs" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px 20px" }}>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 6 }}>НАШИ ПРОГРАММЫ В ЯПОНИИ</div>
        <div style={{ width: 44, height: 3, background: "#C8102E", borderRadius: 2, margin: "0 auto 30px" }}></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 15 }}>
          {programs.map((p) => (
            <HoverBox key={p.title} style={{ background: "#fff", border: "1px solid #EFE4E4", borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 22px rgba(140,30,45,0.06)", display: "flex", flexDirection: "column", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 16px 34px rgba(140,30,45,0.14)" }}>
              <div style={{ height: 105, backgroundColor: "#E7D5D5", backgroundImage: `url('${p.img}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <div style={{ position: "absolute", left: "50%", bottom: -19, transform: "translateX(-50%)", width: 38, height: 38, borderRadius: "50%", background: "#C8102E", border: "3px solid #fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={MI(18)}>{p.icon}</span>
                </div>
              </div>
              <div style={{ padding: "28px 13px 18px", textAlign: "center", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: "#12294F", lineHeight: 1.4, marginBottom: 7 }}>{p.title}</div>
                <div style={{ fontSize: 10.5, color: "#68789A", lineHeight: 1.6, flex: 1 }}>{p.text}</div>
                <HoverBox as="a" href={p.href} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 5, marginTop: 12, border: "1px solid #E8CFD2", color: "#C8102E", textDecoration: "none", fontSize: 10.5, fontWeight: 800, padding: "7px 12px", borderRadius: 7, transition: "background .18s,color .18s" }} hoverStyle={{ background: "#C8102E", color: "#fff" }}>Подробнее <span style={MI(13)}>arrow_forward</span></HoverBox>
              </div>
            </HoverBox>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 15, marginTop: 15 }}>
          {sectors.map((p) => (
            <HoverBox key={p.title} style={{ background: "#fff", border: "1px solid #EFE4E4", borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 22px rgba(140,30,45,0.06)", display: "flex", flexDirection: "column", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-5px)", boxShadow: "0 16px 34px rgba(140,30,45,0.14)" }}>
              <div style={{ height: 115, backgroundColor: "#E7D5D5", backgroundImage: `url('${p.img}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <div style={{ position: "absolute", left: "50%", bottom: -19, transform: "translateX(-50%)", width: 38, height: 38, borderRadius: "50%", background: "#C8102E", border: "3px solid #fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={MI(18)}>{p.icon}</span>
                </div>
              </div>
              <div style={{ padding: "28px 14px 18px", textAlign: "center", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#12294F", lineHeight: 1.4, marginBottom: 7 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: "#68789A", lineHeight: 1.6, flex: 1 }}>{p.text}</div>
                <HoverBox as="a" href="Career.dc.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 5, marginTop: 12, border: "1px solid #E8CFD2", color: "#C8102E", textDecoration: "none", fontSize: 10.5, fontWeight: 800, padding: "7px 12px", borderRadius: 7, transition: "background .18s,color .18s" }} hoverStyle={{ background: "#C8102E", color: "#fff" }}>Подробнее <span style={MI(13)}>arrow_forward</span></HoverBox>
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* WHY JAPAN */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 44, alignItems: "center" }}>
        <div>
          <h2 style={{ margin: "0 0 22px", fontSize: 26, fontWeight: 800, letterSpacing: "0.5px", color: "#12294F" }}>ПОЧЕМУ ЯПОНИЯ?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {whyJapan.map((w) => (
              <div key={w} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, fontWeight: 600, color: "#2E4165", lineHeight: 1.5 }}>
                <span style={{ ...MI(18), color: "#C8102E", marginTop: 1 }}>check_circle</span>{w}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#FBF1F1", borderRadius: 16, padding: "34px 26px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
          {japanStats.map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "0 8px", borderRight: "1px solid #EFDCDC" }}>
              <span style={{ ...MI(30), color: "#C8102E" }}>{s.icon}</span>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#12294F", margin: "8px 0 4px", lineHeight: 1.2 }}>{s.num}</div>
              <div style={{ fontSize: 10.5, color: "#68789A", fontWeight: 600, lineHeight: 1.45 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* JOURNEY */}
      <div style={{ background: "#FDFAFA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 28px" }}>
          <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, letterSpacing: "1.5px", color: "#12294F", marginBottom: 6 }}>ВАШ ПУТЬ В ЯПОНИЮ</div>
          <div style={{ width: 44, height: 3, background: "#C8102E", borderRadius: 2, margin: "0 auto 42px" }}></div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "2%", right: "2%", top: 21, height: 2, background: "linear-gradient(90deg,#F2D8DB,#C8102E,#F2D8DB)" }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", gap: 6, position: "relative" }}>
              {steps.map((st) => (
                <div key={st.n} style={{ textAlign: "center" }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#C8102E", border: "3px solid #fff", boxShadow: "0 0 0 2px #C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                    <span style={MI(19)}>{st.icon}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#C8102E", marginTop: 10 }}>{st.n}</div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#12294F", lineHeight: 1.35, marginTop: 3 }}>{st.title}</div>
                  <div style={{ fontSize: 9.5, color: "#8B99B3", lineHeight: 1.4, marginTop: 4 }}>{st.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PARTNER INSTITUTIONS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 28px 30px" }}>
        <div style={{ textAlign: "center", fontSize: 16, fontWeight: 800, letterSpacing: "1.5px", color: "#1D4E9E", marginBottom: 26 }}>НАШИ ПАРТНЁРСКИЕ ИНСТИТУТЫ В ЯПОНИИ</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 15 }}>
          {institutions.map((i) => (
            <HoverBox key={i.title} style={{ border: "1px solid #E7EDF6", borderRadius: 14, padding: "26px 16px", textAlign: "center", boxShadow: "0 6px 20px rgba(18,41,79,0.05)", transition: "transform .22s,box-shadow .22s" }} hoverStyle={{ transform: "translateY(-4px)", boxShadow: "0 14px 30px rgba(18,41,79,0.12)" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#FBF1F1", color: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <span style={MI(26)}>{i.icon}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#12294F", lineHeight: 1.45 }}>{i.title}</div>
              <div style={{ fontSize: 10.5, color: "#8B99B3", fontWeight: 600, marginTop: 6, lineHeight: 1.5 }}>{i.sub}</div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* PARTNERSHIP BAND */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "30px 28px 20px" }}>
        <div data-keep="true" style={{ background: "#0C2140", borderRadius: 18, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1.1fr", minHeight: 230 }}>
          <div style={{ padding: "38px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 21, fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: 14 }}>Строим крепкие партнёрства ради лучшего будущего</div>
            <p style={{ margin: "0 0 22px", fontSize: 12.5, lineHeight: 1.7, color: "#AFC2DE" }}>Мы тесно работаем с государственными институтами, университетами, компаниями и организациями Японии, создавая устойчивые возможности для молодёжи Узбекистана.</p>
            <HoverBox as="a" href="Cooperation.dc.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C8102E", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, width: "max-content", transition: "filter .18s" }} hoverStyle={{ filter: "brightness(1.15)" }}>Стать партнёром <span style={MI(15)}>arrow_forward</span></HoverBox>
          </div>
          <div style={{ backgroundImage: "linear-gradient(90deg,#0C2140 0%,rgba(12,33,64,0) 40%),url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=70')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </div>
      </div>

      {/* RED CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 28px 64px" }}>
        <div data-keep="true" style={{ background: "linear-gradient(100deg,#C8102E,#A50D26)", borderRadius: 18, padding: "34px 40px", display: "flex", alignItems: "center", gap: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -30, top: -30, width: 190, height: 190, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }}></div>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}><span style={MI(26)}>send</span></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 21, fontWeight: 800, color: "#fff" }}>Начните свой путь в Японию сегодня!</div>
            <div style={{ fontSize: 12.5, color: "#F5D4D9", marginTop: 6 }}>Сотни возможностей ждут вас. Мы поможем построить ваше будущее в Японии.</div>
          </div>
          <div style={{ display: "flex", gap: 12, position: "relative" }}>
            <HoverBox as="a" href="Career.dc.html" style={{ background: "#fff", color: "#C8102E", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 7, transition: "transform .18s" }} hoverStyle={{ transform: "translateY(-1px)" }}>Подать заявку <span style={MI(15)}>arrow_forward</span></HoverBox>
            <HoverBox as="a" href="#contact" style={{ border: "1px solid rgba(255,255,255,0.55)", color: "#fff", textDecoration: "none", fontSize: 12.5, fontWeight: 800, padding: "12px 22px", borderRadius: 8, transition: "background .18s" }} hoverStyle={{ background: "rgba(255,255,255,0.12)" }}>Связаться с нами</HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
