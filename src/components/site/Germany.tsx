"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({
  fontFamily: "'Material Symbols Outlined'",
  fontSize: size,
  lineHeight: 1,
});

const heroStats = [
  { icon: "school", title: "Ausbildung", sub: "14+ секторов" },
  { icon: "engineering", title: "Квалифицированные кадры", sub: "Высокий спрос" },
  { icon: "apartment", title: "Надёжные партнёры", sub: "50+ компаний" },
];

const whyGermany = [
  { icon: "settings", label: "Технологии и инновации мирового уровня" },
  { icon: "trending_up", label: "Высокие зарплаты и карьерный рост" },
  { icon: "verified_user", label: "Безопасная и стабильная рабочая среда" },
  { icon: "approval", label: "Путь к постоянному виду на жительство" },
  { icon: "favorite", label: "Высокое качество жизни" },
];

const programs = [
  {
    icon: "construction",
    title: "Ausbildung (дуальное обучение)",
    text: "Дуальная система: практика на предприятии и теоретическое обучение.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "engineering",
    title: "Квалифицированные специалисты",
    text: "Возможности для специалистов в востребованных секторах Германии.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "menu_book",
    title: "Немецкий язык",
    text: "Курсы от A1 до B2 с подготовкой к экзаменам и сертификацией.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "precision_manufacturing",
    title: "Инженерные и технические карьеры",
    text: "Работа в инженерии, индустрии 4.0, автоматизации и технологиях.",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "favorite",
    title: "Уход и медицина",
    text: "Работа в учреждениях ухода и здравоохранения со стабильной карьерой.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: "approval",
    title: "Путь к переезду",
    text: "Долгосрочная карьера, ПМЖ и поддержка воссоединения семьи.",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=70",
  },
];

const sectors = [
  { icon: "precision_manufacturing", label: "Инженерия и производство" },
  { icon: "directions_car", label: "Автомобильная отрасль" },
  { icon: "computer", label: "Информационные технологии" },
  { icon: "ecg_heart", label: "Здравоохранение и уход" },
  { icon: "construction", label: "Строительство и ремёсла" },
  { icon: "local_shipping", label: "Логистика и транспорт" },
  { icon: "restaurant", label: "Гостеприимство и туризм" },
  { icon: "agriculture", label: "Агро- и пищевая промышленность" },
];

const howChecks = [
  "Бесплатная консультация и карьерное сопровождение",
  "Обучение немецкому языку (A1 – B2)",
  "Подготовка документов и оценка квалификации",
  "Собеседования с немецкими работодателями",
  "Оформление визы и поддержка при переезде",
  "Помощь с адаптацией и интеграцией в Германии",
];

const howSteps = [
  { n: "01", icon: "support_agent", title: "Консультация", text: "Анализируем ваши навыки и цели" },
  { n: "02", icon: "menu_book", title: "Языковая подготовка", text: "Учим немецкий шаг за шагом" },
  { n: "03", icon: "description", title: "Документы", text: "Готовим все необходимые документы" },
  { n: "04", icon: "record_voice_over", title: "Собеседование", text: "Связь с немецкими работодателями" },
  { n: "05", icon: "flight_takeoff", title: "Виза и вылет", text: "Виза и подготовка к переезду" },
  { n: "06", icon: "home_pin", title: "Прибытие и поддержка", text: "Сопровождение после приезда" },
];

const companies = [
  { name: "SIEMENS", img: "/logos/siemens.jpg" },
  { name: "BOSCH", img: "/logos/bosch.png" },
  { name: "Mercedes-Benz", img: "/logos/mercedes.jpg" },
  { name: "BMW", img: "/logos/bmw.png" },
  { name: "Volkswagen", img: "/logos/vw.jpg" },
  { name: "LIEBHERR", img: "/logos/liebherr.png" },
  { name: "FESTO", img: "/logos/festo.jpg" },
  { name: "DHL", img: "/logos/dhl.jpg" },
];

const bigStats = [
  {
    icon: "groups",
    bg: "#FDF3DC",
    color: "#D99A16",
    num: "50+",
    title: "немецких компаний",
    text: "Активные партнёрства с ведущими работодателями",
  },
  {
    icon: "account_balance",
    bg: "#EAF1FB",
    color: "#1D4E9E",
    num: "30+",
    title: "учебных заведений",
    text: "Профшколы и языковые центры в Германии",
  },
  {
    icon: "public",
    bg: "#EAF6EF",
    color: "#17A05E",
    num: "1000+",
    title: "вакансий",
    text: "Доступные позиции для специалистов и стажёров",
  },
];

export function Germany() {
  return (
    <div
      style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }}
      data-screen-label="Программы Германии"
    >
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="germany" navTheme="light" />
      </div>

      {/* HERO */}
      <div style={{ maxWidth: 1320, margin: "14px auto 0", padding: "0 14px" }}>
        <div
          data-keep="true"
          style={{
            background: "#0C2140",
            borderRadius: 18,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1800&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.55,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,rgba(8,22,45,0.92) 0%,rgba(8,22,45,0.55) 55%,rgba(8,22,45,0.35))",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              padding: "clamp(20px, 3vw, 30px) clamp(20px, 4vw, 42px) clamp(32px, 4vw, 46px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 30,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 11.5,
                  color: "#93A7C6",
                  fontWeight: 600,
                  marginBottom: 28,
                  flexWrap: "wrap",
                }}
              >
                <span style={MI(15)}>home</span>
                <a
                  href="Home.dc.html"
                  style={{ color: "#93A7C6", textDecoration: "none" }}
                >
                  Главная
                </a>
                <span>›</span>
                <span style={{ color: "#D7E2F2" }}>Программы Германии</span>
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  color: "#F0B429",
                  marginBottom: 12,
                }}
              >
                ПРОГРАММЫ ГЕРМАНИИ
              </div>
              <h1
                style={{
                  margin: "0 0 16px",
                  fontSize: "clamp(30px, 6vw, 44px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                Постройте карьеру в Германии
              </h1>
              <p
                style={{
                  margin: "0 0 24px",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#C3D2E8",
                  maxWidth: 420,
                }}
              >
                Качественное образование, профессиональная подготовка и
                возможности трудоустройства в Германии.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: 0,
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 12,
                  overflow: "hidden",
                  marginBottom: 24,
                  backdropFilter: "blur(6px)",
                }}
              >
                {heroStats.map((s, idx) => (
                  <div
                    key={s.title}
                    style={{
                      padding: "12px 16px",
                      background: "rgba(12,33,64,0.4)",
                      borderRight:
                        idx < heroStats.length - 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#F0B429",
                      }}
                    >
                      <span style={MI(16)}>{s.icon}</span>
                      <span
                        style={{
                          fontSize: "clamp(11px, 1.1vw, 12.5px)",
                          fontWeight: 800,
                          color: "#fff",
                        }}
                      >
                        {s.title}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(9px, 0.9vw, 10.5px)",
                        color: "#AFC2DE",
                        fontWeight: 600,
                        marginTop: 4,
                      }}
                    >
                      {s.sub}
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
                  background: "#F0B429",
                  color: "#231A02",
                  textDecoration: "none",
                  fontSize: "clamp(12px, 1.2vw, 13px)",
                  fontWeight: 800,
                  padding: "11px 20px",
                  borderRadius: 8,
                  transition: "filter .18s,transform .18s",
                }}
                hoverStyle={{
                  filter: "brightness(1.08)",
                  transform: "translateY(-1px)",
                }}
              >
                Программы Германии{" "}
                <span style={MI(15)}>arrow_forward</span>
              </HoverBox>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "clamp(20px, 3vw, 26px) clamp(20px, 3vw, 28px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  width: "100%",
                  maxWidth: 300,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(12px, 1.3vw, 14px)",
                    fontWeight: 800,
                    letterSpacing: "1px",
                    color: "#12294F",
                    marginBottom: 14,
                  }}
                >
                  ПОЧЕМУ ГЕРМАНИЯ?
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {whyGermany.map((w) => (
                    <div
                      key={w.label}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "#FDF3DC",
                          color: "#D99A16",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span style={MI(14)}>{w.icon}</span>
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(11px, 1.1vw, 12px)",
                          fontWeight: 700,
                          color: "#2E4165",
                          lineHeight: 1.45,
                          paddingTop: 3,
                        }}
                      >
                        {w.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                    marginTop: 14,
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#F0B429",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#E7DDC7",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#E7DDC7",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#E7DDC7",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAMS */}
      <div id="programs" style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 28px 16px" }}>
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
          ПОПУЛЯРНЫЕ ПРОГРАММЫ И ВОЗМОЖНОСТИ
        </div>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#F0B429",
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
                border: "1px solid #EFEAE0",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 6px 22px rgba(120,90,20,0.07)",
                display: "flex",
                flexDirection: "column",
                transition: "transform .22s,box-shadow .22s",
              }}
              hoverStyle={{
                transform: "translateY(-5px)",
                boxShadow: "0 16px 34px rgba(120,90,20,0.15)",
              }}
            >
              <div
                style={{
                  height: 96,
                  backgroundColor: "#E7E0D0",
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
                    background: "#F0B429",
                    border: "3px solid #fff",
                    color: "#3A2B05",
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
                  padding: "24px 12px 16px",
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
                  href="Career.dc.html"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    marginTop: 10,
                    border: "1px solid #EBD9A8",
                    color: "#B07E0A",
                    textDecoration: "none",
                    fontSize: "clamp(9.5px, 0.9vw, 10.5px)",
                    fontWeight: 800,
                    padding: "6px 10px",
                    borderRadius: 6,
                    transition: "background .18s,color .18s",
                  }}
                  hoverStyle={{ background: "#F0B429", color: "#231A02" }}
                >
                  Подробнее <span style={MI(12)}>arrow_forward</span>
                </HoverBox>
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* SECTORS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 28px" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: "#C8102E",
            marginBottom: 6,
          }}
        >
          ВОСТРЕБОВАННЫЕ СЕКТОРЫ ГЕРМАНИИ
        </div>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#C8102E",
            borderRadius: 2,
            margin: "0 auto 22px",
          }}
        ></div>
        <div
          style={{
            border: "1px solid #E7EDF6",
            borderRadius: 14,
            padding: "clamp(14px, 2vw, 22px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
            gap: 10,
            boxShadow: "0 6px 22px rgba(18,41,79,0.05)",
          }}
        >
          {sectors.map((s) => (
            <HoverBox
              key={s.label}
              style={{
                textAlign: "center",
                padding: "12px 4px",
                borderRadius: 10,
                transition: "background .18s",
              }}
              hoverStyle={{ background: "#F7F9FD" }}
            >
              <span style={{ ...MI(24), color: "#1D4E9E" }}>{s.icon}</span>
              <div
                style={{
                  fontSize: "clamp(9.5px, 1vw, 11px)",
                  fontWeight: 800,
                  color: "#2E4165",
                  lineHeight: 1.4,
                  marginTop: 7,
                }}
              >
                {s.label}
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background: "#F8FAFD" }}>
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
                fontSize: "clamp(20px, 2.5vw, 24px)",
                fontWeight: 800,
                letterSpacing: "0.5px",
                color: "#12294F",
              }}
            >
              КАК ЭТО РАБОТАЕТ
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 11,
                marginBottom: 22,
              }}
            >
              {howChecks.map((h) => (
                <div
                  key={h}
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
                  {h}
                </div>
              ))}
            </div>
            <HoverBox
              as="a"
              href="Career.dc.html"
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
              Начать путь <span style={MI(15)}>arrow_forward</span>
            </HoverBox>
          </div>
          <div style={{ position: "relative", overflowX: "auto" }}>
            <div style={{ position: "relative", minWidth: 500 }}>
              <div
                style={{
                  position: "absolute",
                  left: "4%",
                  right: "4%",
                  top: 24,
                  height: 2,
                  background: "#E5CDD1",
                }}
              ></div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6,1fr)",
                  gap: 6,
                  position: "relative",
                }}
              >
                {howSteps.map((st) => (
                  <div key={st.n} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#fff",
                        border: "2px solid #E3A5AE",
                        color: "#C8102E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <span style={MI(18)}>{st.icon}</span>
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(11px, 1.1vw, 13px)",
                        fontWeight: 800,
                        color: "#C8102E",
                        marginTop: 10,
                      }}
                    >
                      {st.n}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(10px, 1vw, 11.5px)",
                        fontWeight: 800,
                        color: "#12294F",
                        lineHeight: 1.35,
                        marginTop: 3,
                      }}
                    >
                      {st.title}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(8.5px, 0.9vw, 10px)",
                        color: "#8B99B3",
                        lineHeight: 1.45,
                        marginTop: 3,
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

      {/* PARTNER COMPANIES */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 28px 24px" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: "#12294F",
            marginBottom: 6,
          }}
        >
          НАШИ ПАРТНЁРСКИЕ КОМПАНИИ В ГЕРМАНИИ
        </div>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#C8102E",
            borderRadius: 2,
            margin: "0 auto 22px",
          }}
        ></div>
        <div
          style={{
            border: "1px solid #E7EDF6",
            borderRadius: 14,
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            boxShadow: "0 6px 22px rgba(18,41,79,0.05)",
            overflowX: "auto",
          }}
        >
          <span style={{ ...MI(18), color: "#93A3BE", flexShrink: 0 }}>
            chevron_left
          </span>
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: 4,
              minWidth: 400,
            }}
          >
            {companies.map((c) => (
              <HoverBox
                key={c.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 6px",
                  borderRight: "1px solid #EFF3F9",
                  transition: "transform .18s",
                }}
                hoverStyle={{ transform: "scale(1.06)" }}
              >
                <div
                  title={c.name}
                  style={{
                    height: 28,
                    width: 80,
                    backgroundImage: `url('${c.img}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                  }}
                ></div>
              </HoverBox>
            ))}
          </div>
          <span style={{ ...MI(18), color: "#93A3BE", flexShrink: 0 }}>
            chevron_right
          </span>
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px 28px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {bigStats.map((b) => (
          <HoverBox
            key={b.title}
            style={{
              border: "1px solid #E7EDF6",
              borderRadius: 14,
              padding: "clamp(18px, 2.5vw, 26px)",
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxShadow: "0 6px 22px rgba(18,41,79,0.05)",
              transition: "transform .22s",
            }}
            hoverStyle={{ transform: "translateY(-4px)" }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: b.bg,
                color: b.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={MI(24)}>{b.icon}</span>
            </div>
            <div>
              <div
                style={{
                  fontSize: "clamp(22px, 2.8vw, 26px)",
                  fontWeight: 800,
                  color: "#12294F",
                }}
              >
                {b.num}
              </div>
              <div
                style={{
                  fontSize: "clamp(11px, 1.1vw, 12px)",
                  fontWeight: 800,
                  color: "#2E4165",
                  marginTop: 1,
                }}
              >
                {b.title}
              </div>
              <div
                style={{
                  fontSize: "clamp(10px, 1vw, 11px)",
                  color: "#8B99B3",
                  lineHeight: 1.5,
                  marginTop: 2,
                }}
              >
                {b.text}
              </div>
            </div>
          </HoverBox>
        ))}
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 52px" }}>
        <div
          data-keep="true"
          style={{
            background: "#0C2140",
            borderRadius: 18,
            position: "relative",
            overflow: "hidden",
            padding: "clamp(32px, 5vw, 52px) clamp(24px, 4vw, 46px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?auto=format&fit=crop&w=1600&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.42,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,rgba(8,22,45,0.9),rgba(8,22,45,0.35))",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              maxWidth: 520,
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontSize: "clamp(22px, 3.5vw, 26px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.35,
              }}
            >
              Откройте двери в своё будущее в Германии
            </div>
            <p
              style={{
                margin: "12px 0 22px",
                fontSize: "clamp(12px, 1.3vw, 13px)",
                lineHeight: 1.7,
                color: "#C3D2E8",
              }}
            >
              Присоединяйтесь к тысячам талантливых людей, которые уже строят
              успешную карьеру в Германии.
            </p>
            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <HoverBox
                as="a"
                href="Career.dc.html"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#F0B429",
                  color: "#231A02",
                  textDecoration: "none",
                  fontSize: "clamp(11.5px, 1.1vw, 12.5px)",
                  fontWeight: 800,
                  padding: "10px 18px",
                  borderRadius: 8,
                  transition: "filter .18s,transform .18s",
                }}
                hoverStyle={{
                  filter: "brightness(1.08)",
                  transform: "translateY(-1px)",
                }}
              >
                Подать заявку <span style={MI(14)}>arrow_forward</span>
              </HoverBox>
              <HoverBox
                as="a"
                href="#contact"
                style={{
                  border: "1px solid rgba(255,255,255,0.5)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "clamp(11.5px, 1.1vw, 12.5px)",
                  fontWeight: 800,
                  padding: "10px 18px",
                  borderRadius: 8,
                  transition: "background .18s",
                }}
                hoverStyle={{ background: "rgba(255,255,255,0.1)" }}
              >
                Связаться с нами
              </HoverBox>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}