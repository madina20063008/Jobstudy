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
  {
    icon: "menu_book",
    title: "Японский язык",
    text: "Качественное обучение японскому языку от начального до продвинутого уровня.",
    href: "Institute.dc.html",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "quiz",
    title: "Подготовка к JLPT",
    text: "Комплексная подготовка к экзаменам JLPT (N5 – N1) с опытными преподавателями.",
    href: "Institute.dc.html",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "badge",
    title: "Specified Skilled Worker (SSW)",
    text: "Возможность работать в Японии по визовой программе Specified Skilled Worker.",
    href: "Career.dc.html",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "public",
    title: "Программы JICA",
    text: "Различные программы обучения и развития потенциала при поддержке JICA.",
    href: "Grow.dc.html",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "trending_up",
    title: "Проект GROW",
    text: "Проект развития человеческих ресурсов для устойчивого промышленного роста.",
    href: "Grow.dc.html",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "handshake",
    title: "JobStudy и трудоустройство",
    text: "Соединяем квалифицированных кандидатов с надёжными японскими работодателями.",
    href: "Agency.dc.html",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=70",
  },
];

const sectors = [
  {
    icon: "precision_manufacturing",
    title: "Промышленность и производство",
    text: "Работа в производстве, строительстве, электронике, автомобильной отрасли и др.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "agriculture",
    title: "Сельское хозяйство",
    text: "Современное сельское хозяйство с японскими технологиями и стандартами.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "favorite",
    title: "Уход (Kaigo)",
    text: "Подготовка и трудоустройство в секторе ухода за пожилыми в Японии.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "restaurant",
    title: "Гостиницы и общепит",
    text: "Работа в отелях, ресторанах и индустрии питания.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "directions_boat",
    title: "Судостроение и обслуживание",
    text: "Квалифицированная работа в судостроении, автосервисе и смежных областях.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=70",
  },
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
    <div
      style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }}
      data-screen-label="Программы Японии"
    >
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="japan" navTheme="light" />
      </div>

      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(180deg,#FDF7F7,#F8EFEF)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "56%",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1600&q=70')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,#FBF3F3 0%,rgba(251,243,243,0) 35%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "26px 28px 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 11.5,
              color: "#8B99B3",
              fontWeight: 600,
              marginBottom: 36,
              flexWrap: "wrap",
            }}
          >
            <span style={MI(15)}>home</span>
            <a
              href="Home.dc.html"
              style={{ color: "#8B99B3", textDecoration: "none" }}
            >
              Главная
            </a>
            <span>›</span>
            <span style={{ color: "#2E4165" }}>Программы Японии</span>
          </div>
          <div style={{ maxWidth: 480 }}>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#C8102E",
                marginBottom: 14,
              }}
            >
              ПРОГРАММЫ ЯПОНИИ
            </div>
            <h1
              style={{
                margin: "0 0 18px",
                fontSize: "clamp(32px, 6vw, 44px)",
                fontWeight: 800,
                color: "#12294F",
                lineHeight: 1.2,
              }}
            >
              Ваше будущее в Японии
            </h1>
            <p
              style={{
                margin: "0 0 26px",
                fontSize: "clamp(13px, 1.3vw, 14px)",
                lineHeight: 1.8,
                color: "#4A5C7E",
              }}
            >
              Широкие возможности образования, обучения и трудоустройства в
              Японии через надёжные партнёрства и проверенные программы.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: 10,
                marginBottom: 28,
              }}
            >
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "#fff",
                    border: "1px solid #F0E2E2",
                    borderRadius: 10,
                    padding: "12px 14px",
                    boxShadow: "0 8px 22px rgba(140,30,45,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ ...MI(17), color: "#C8102E" }}>
                      {s.icon}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(17px, 2vw, 20px)",
                        fontWeight: 800,
                        color: "#12294F",
                      }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(9px, 0.9vw, 10.5px)",
                      color: "#68789A",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <HoverBox
              as="a"
              href="#programs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#C8102E",
                color: "#fff",
                textDecoration: "none",
                fontSize: "clamp(12px, 1.2vw, 13px)",
                fontWeight: 800,
                padding: "11px 20px",
                borderRadius: 8,
                transition: "filter .18s,transform .18s",
              }}
              hoverStyle={{
                filter: "brightness(1.15)",
                transform: "translateY(-1px)",
              }}
            >
              Смотреть программы <span style={MI(15)}>arrow_forward</span>
            </HoverBox>
          </div>
        </div>
      </div>

      {/* PROGRAMS */}
      <div
        id="programs"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "48px 28px 16px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "clamp(18px, 2.5vw, 19px)",
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: "#12294F",
            marginBottom: 6,
          }}
        >
          НАШИ ПРОГРАММЫ В ЯПОНИИ
        </div>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#C8102E",
            borderRadius: 2,
            margin: "0 auto 26px",
          }}
        ></div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
          }}
        >
          {programs.map((p) => (
            <HoverBox
              key={p.title}
              style={{
                background: "#fff",
                border: "1px solid #EFE4E4",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 6px 22px rgba(140,30,45,0.06)",
                display: "flex",
                flexDirection: "column",
                transition: "transform .22s,box-shadow .22s",
              }}
              hoverStyle={{
                transform: "translateY(-5px)",
                boxShadow: "0 16px 34px rgba(140,30,45,0.14)",
              }}
            >
              <div
                style={{
                  height: 90,
                  backgroundColor: "#E7D5D5",
                  backgroundImage: `url('${p.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: -17,
                    transform: "translateX(-50%)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#C8102E",
                    border: "3px solid #fff",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={MI(16)}>{p.icon}</span>
                </div>
              </div>
              <div
                style={{
                  padding: "24px 10px 14px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(11px, 1.1vw, 12.5px)",
                    fontWeight: 800,
                    color: "#12294F",
                    lineHeight: 1.4,
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(9.5px, 0.9vw, 10.5px)",
                    color: "#68789A",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {p.text}
                </div>
                <HoverBox
                  as="a"
                  href={p.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    marginTop: 10,
                    border: "1px solid #E8CFD2",
                    color: "#C8102E",
                    textDecoration: "none",
                    fontSize: "clamp(9.5px, 0.9vw, 10.5px)",
                    fontWeight: 800,
                    padding: "6px 10px",
                    borderRadius: 6,
                    transition: "background .18s,color .18s",
                  }}
                  hoverStyle={{ background: "#C8102E", color: "#fff" }}
                >
                  Подробнее <span style={MI(12)}>arrow_forward</span>
                </HoverBox>
              </div>
            </HoverBox>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
            marginTop: 14,
          }}
        >
          {sectors.map((p) => (
            <HoverBox
              key={p.title}
              style={{
                background: "#fff",
                border: "1px solid #EFE4E4",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 6px 22px rgba(140,30,45,0.06)",
                display: "flex",
                flexDirection: "column",
                transition: "transform .22s,box-shadow .22s",
              }}
              hoverStyle={{
                transform: "translateY(-5px)",
                boxShadow: "0 16px 34px rgba(140,30,45,0.14)",
              }}
            >
              <div
                style={{
                  height: 96,
                  backgroundColor: "#E7D5D5",
                  backgroundImage: `url('${p.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: -17,
                    transform: "translateX(-50%)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#C8102E",
                    border: "3px solid #fff",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={MI(16)}>{p.icon}</span>
                </div>
              </div>
              <div
                style={{
                  padding: "24px 10px 14px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(11.5px, 1.2vw, 13px)",
                    fontWeight: 800,
                    color: "#12294F",
                    lineHeight: 1.4,
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(10px, 1vw, 11px)",
                    color: "#68789A",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {p.text}
                </div>
                <HoverBox
                  as="a"
                  href="Career.dc.html"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    marginTop: 10,
                    border: "1px solid #E8CFD2",
                    color: "#C8102E",
                    textDecoration: "none",
                    fontSize: "clamp(9.5px, 0.9vw, 10.5px)",
                    fontWeight: 800,
                    padding: "6px 10px",
                    borderRadius: 6,
                    transition: "background .18s,color .18s",
                  }}
                  hoverStyle={{ background: "#C8102E", color: "#fff" }}
                >
                  Подробнее <span style={MI(12)}>arrow_forward</span>
                </HoverBox>
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* WHY JAPAN */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "48px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 36,
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(22px, 3vw, 26px)",
              fontWeight: 800,
              letterSpacing: "0.5px",
              color: "#12294F",
            }}
          >
            ПОЧЕМУ ЯПОНИЯ?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {whyJapan.map((w) => (
              <div
                key={w}
                style={{
                  display: "flex",
                  gap: 9,
                  alignItems: "flex-start",
                  fontSize: "clamp(12px, 1.2vw, 13px)",
                  fontWeight: 600,
                  color: "#2E4165",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{ ...MI(17), color: "#C8102E", marginTop: 1 }}
                >
                  check_circle
                </span>
                {w}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            background: "#FBF1F1",
            borderRadius: 14,
            padding: "clamp(24px, 3vw, 34px) clamp(18px, 2.5vw, 26px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 10,
          }}
        >
          {japanStats.map((s) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                padding: "0 6px",
                borderRight: "1px solid #EFDCDC",
              }}
            >
              <span style={{ ...MI(26), color: "#C8102E" }}>{s.icon}</span>
              <div
                style={{
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  fontWeight: 800,
                  color: "#12294F",
                  margin: "6px 0 3px",
                  lineHeight: 1.2,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "clamp(9.5px, 1vw, 10.5px)",
                  color: "#68789A",
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOURNEY */}
      <div style={{ background: "#FDFAFA" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "48px 28px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "clamp(18px, 2.5vw, 19px)",
              fontWeight: 800,
              letterSpacing: "1.5px",
              color: "#12294F",
              marginBottom: 6,
            }}
          >
            ВАШ ПУТЬ В ЯПОНИЮ
          </div>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#C8102E",
              borderRadius: 2,
              margin: "0 auto 34px",
            }}
          ></div>
          <div style={{ position: "relative", overflowX: "auto" }}>
            <div style={{ position: "relative", minWidth: 700 }}>
              <div
                style={{
                  position: "absolute",
                  left: "2%",
                  right: "2%",
                  top: 19,
                  height: 2,
                  background:
                    "linear-gradient(90deg,#F2D8DB,#C8102E,#F2D8DB)",
                }}
              ></div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(10,1fr)",
                  gap: 4,
                  position: "relative",
                }}
              >
                {steps.map((st) => (
                  <div key={st.n} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "#C8102E",
                        border: "3px solid #fff",
                        boxShadow: "0 0 0 2px #C8102E",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <span style={MI(16)}>{st.icon}</span>
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(9px, 1vw, 11px)",
                        fontWeight: 800,
                        color: "#C8102E",
                        marginTop: 8,
                      }}
                    >
                      {st.n}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(9px, 1vw, 11px)",
                        fontWeight: 800,
                        color: "#12294F",
                        lineHeight: 1.35,
                        marginTop: 2,
                      }}
                    >
                      {st.title}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(8px, 0.8vw, 9.5px)",
                        color: "#8B99B3",
                        lineHeight: 1.4,
                        marginTop: 2,
                      }}
                    >
                      {st.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNER INSTITUTIONS */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "48px 28px 24px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: "#1D4E9E",
            marginBottom: 22,
          }}
        >
          НАШИ ПАРТНЁРСКИЕ ИНСТИТУТЫ В ЯПОНИИ
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 14,
          }}
        >
          {institutions.map((i) => (
            <HoverBox
              key={i.title}
              style={{
                border: "1px solid #E7EDF6",
                borderRadius: 12,
                padding: "22px 12px",
                textAlign: "center",
                boxShadow: "0 6px 20px rgba(18,41,79,0.05)",
                transition: "transform .22s,box-shadow .22s",
              }}
              hoverStyle={{
                transform: "translateY(-4px)",
                boxShadow: "0 14px 30px rgba(18,41,79,0.12)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#FBF1F1",
                  color: "#C8102E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 10px",
                }}
              >
                <span style={MI(22)}>{i.icon}</span>
              </div>
              <div
                style={{
                  fontSize: "clamp(11.5px, 1.2vw, 13px)",
                  fontWeight: 800,
                  color: "#12294F",
                  lineHeight: 1.45,
                }}
              >
                {i.title}
              </div>
              <div
                style={{
                  fontSize: "clamp(9.5px, 1vw, 10.5px)",
                  color: "#8B99B3",
                  fontWeight: 600,
                  marginTop: 4,
                  lineHeight: 1.5,
                }}
              >
                {i.sub}
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* PARTNERSHIP BAND */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "24px 28px 16px",
        }}
      >
        <div
          data-keep="true"
          style={{
            background: "#0C2140",
            borderRadius: 16,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            minHeight: 200,
          }}
        >
          <div
            style={{
              padding: "clamp(28px, 4vw, 38px) clamp(24px, 4vw, 36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "clamp(18px, 2.5vw, 21px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.4,
                marginBottom: 12,
              }}
            >
              Строим крепкие партнёрства ради лучшего будущего
            </div>
            <p
              style={{
                margin: "0 0 18px",
                fontSize: "clamp(11.5px, 1.2vw, 12.5px)",
                lineHeight: 1.7,
                color: "#AFC2DE",
              }}
            >
              Мы тесно работаем с государственными институтами,
              университетами, компаниями и организациями Японии, создавая
              устойчивые возможности для молодёжи Узбекистана.
            </p>
            <HoverBox
              as="a"
              href="Cooperation.dc.html"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#C8102E",
                color: "#fff",
                textDecoration: "none",
                fontSize: "clamp(11.5px, 1.1vw, 12.5px)",
                fontWeight: 800,
                padding: "10px 18px",
                borderRadius: 8,
                width: "max-content",
                transition: "filter .18s",
              }}
              hoverStyle={{ filter: "brightness(1.15)" }}
            >
              Стать партнёром <span style={MI(14)}>arrow_forward</span>
            </HoverBox>
          </div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg,#0C2140 0%,rgba(12,33,64,0) 40%),url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 160,
            }}
          ></div>
        </div>
      </div>

      {/* RED CTA */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px 28px 52px",
        }}
      >
        <div
          data-keep="true"
          style={{
            background: "linear-gradient(100deg,#C8102E,#A50D26)",
            borderRadius: 16,
            padding: "clamp(28px, 4vw, 34px) clamp(24px, 4vw, 40px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -30,
              top: -30,
              width: 190,
              height: 190,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.07)",
            }}
          ></div>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <span style={MI(24)}>send</span>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                fontSize: "clamp(18px, 2.8vw, 21px)",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              Начните свой путь в Японию сегодня!
            </div>
            <div
              style={{
                fontSize: "clamp(11.5px, 1.2vw, 12.5px)",
                color: "#F5D4D9",
                marginTop: 4,
              }}
            >
              Сотни возможностей ждут вас. Мы поможем построить ваше будущее в
              Японии.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              position: "relative",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <HoverBox
              as="a"
              href="Career.dc.html"
              style={{
                background: "#fff",
                color: "#C8102E",
                textDecoration: "none",
                fontSize: "clamp(11.5px, 1.1vw, 12.5px)",
                fontWeight: 800,
                padding: "10px 18px",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "transform .18s",
              }}
              hoverStyle={{ transform: "translateY(-1px)" }}
            >
              Подать заявку <span style={MI(14)}>arrow_forward</span>
            </HoverBox>
            <HoverBox
              as="a"
              href="#contact"
              style={{
                border: "1px solid rgba(255,255,255,0.55)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "clamp(11.5px, 1.1vw, 12.5px)",
                fontWeight: 800,
                padding: "10px 18px",
                borderRadius: 8,
                transition: "background .18s",
              }}
              hoverStyle={{ background: "rgba(255,255,255,0.12)" }}
            >
              Связаться с нами
            </HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}