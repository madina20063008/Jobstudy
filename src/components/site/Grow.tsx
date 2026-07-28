"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({
  fontFamily: "'Material Symbols Outlined'",
  fontSize: size,
  lineHeight: 1,
});

const missions = [
  {
    n: "01",
    icon: "campaign",
    title: "Достоверное информирование",
    text: "Точная и надёжная информация для граждан Узбекистана о возможностях работы в Японии и для японской стороны — об Узбекистане.",
  },
  {
    n: "02",
    icon: "school",
    title: "Укрепление системы подготовки",
    text: "Развитие обучения японскому языку, профессиональной подготовки и поддерживающих институтов через сетевое сотрудничество.",
  },
  {
    n: "03",
    icon: "fact_check",
    title: "Расширение категорий SSW",
    text: "Расширение числа категорий экзаменов Specified Skilled Worker (SSW), доступных в Узбекистане, для новых карьерных возможностей.",
  },
  {
    n: "04",
    icon: "diversity_3",
    title: "Поддержка вернувшихся",
    text: "Помощь вернувшимся специалистам в применении навыков в Узбекистане и укрепление ценности японского опыта работы.",
  },
];

const impacts = [
  {
    icon: "groups",
    title: "Развитие квалифицированных кадров",
    text: "Через возможности трудоустройства в Японии",
  },
  {
    icon: "trending_up",
    title: "Вклад в промышленное развитие",
    text: "Применение полученных навыков после возвращения в Узбекистан",
  },
  {
    icon: "handshake",
    title: "Устойчивое сотрудничество",
    text: "Между Узбекистаном, Японией и Германией",
  },
  {
    icon: "public",
    title: "Долгосрочная ценность",
    text: "Для людей, компаний и общества",
  },
];

const growSteps = [
  {
    n: "1",
    icon: "info",
    title: "Информация и осведомлённость",
    text: "Достоверные сведения о возможностях в Японии",
  },
  {
    n: "2",
    icon: "menu_book",
    title: "Язык и навыки",
    text: "Японский язык, культура и профподготовка",
  },
  {
    n: "3",
    icon: "fact_check",
    title: "Подготовка к экзамену SSW",
    text: "Подготовка к экзаменам Specified Skilled Worker",
  },
  {
    n: "4",
    icon: "group_add",
    title: "Подбор работы в Японии",
    text: "Соединение кандидатов с японскими работодателями",
  },
  {
    n: "5",
    icon: "work",
    title: "Работа в Японии",
    text: "Работа, рост навыков и опыта",
  },
  {
    n: "6",
    icon: "apartment",
    title: "Возвращение и вклад",
    text: "Возвращение и вклад в развитие Узбекистана",
  },
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
  {
    name: "INSTITUTE",
    sub: "Japanese Language & Vocational Competency",
    color: "#8A2B2B",
    accent: "#8A2B2B",
    logo: "",
  },
  { name: "PROUD Co., Ltd.", sub: "", color: "#1B58B8", accent: "#E0453A", logo: "" },
  { name: "JAPANESE COMPANIES", sub: "", color: "#3E4A5A", accent: "#C8102E", logo: "" },
  { name: "UZBEKISTAN GOVERNMENT", sub: "", color: "#12294F", accent: "#2BB673", logo: "" },
  { name: "GERMAN PARTNERS", sub: "", color: "#12294F", accent: "#F0B429", logo: "" },
].map((p) => Object.assign(p, { hasLogo: !!p.logo, noLogo: !p.logo }));

export function Grow() {
  return (
    <div
      style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }}
      data-screen-label="Проект GROW"
    >
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="projects" navTheme="light" />
      </div>

      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(180deg,#F6FBF7,#EFF6F0)",
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
            width: "46%",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1400&q=70')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,#F2F8F3 0%,rgba(242,248,243,0) 40%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            right: "30%",
            top: 60,
            width: "34%",
            height: 200,
            backgroundImage:
              "radial-gradient(#B9CDBE 1.2px, transparent 1.4px)",
            backgroundSize: "11px 11px",
            opacity: 0.6,
          }}
        ></div>
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
              marginBottom: 34,
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
            <span>Проекты</span>
            <span>›</span>
            <span style={{ color: "#2E4165" }}>Проект GROW</span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 30,
              alignItems: "center",
            }}
          >
            <div>
              <h1
                style={{
                  margin: "0 0 14px",
                  fontSize: "clamp(32px, 6vw, 46px)",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                <span style={{ color: "#17A05E" }}>ПРОЕКТ</span>{" "}
                <span style={{ color: "#12294F" }}>GROW</span>
              </h1>
              <div
                style={{
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                  fontWeight: 800,
                  color: "#12294F",
                  lineHeight: 1.5,
                  marginBottom: 12,
                }}
              >
                Growing Industrial Human Resources in Uzbekistan — развитие
                кадров через возможности работы в Японии
              </div>
              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: "clamp(12px, 1.2vw, 13px)",
                  lineHeight: 1.8,
                  color: "#4A5C7E",
                  maxWidth: 480,
                }}
              >
                Инициатива при поддержке JICA по развитию квалифицированных
                кадров в Узбекистане через легальное трудоустройство в Японии и
                вклад в промышленное развитие страны.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  marginBottom: 24,
                  flexWrap: "wrap",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/jica.jpg"
                  alt="JICA"
                  style={{
                    height: 38,
                    objectFit: "contain",
                    borderRadius: 6,
                    display: "block",
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/jobstudy-logo.png"
                  alt="JobStudy"
                  style={{
                    height: 34,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/deow.png"
                  alt="DEOW Japan"
                  style={{
                    height: 32,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <HoverBox
                  as="a"
                  href="#missions"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "#17A05E",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "clamp(12px, 1.2vw, 13px)",
                    fontWeight: 800,
                    padding: "11px 18px",
                    borderRadius: 8,
                    transition: "filter .18s,transform .18s",
                  }}
                  hoverStyle={{
                    filter: "brightness(1.1)",
                    transform: "translateY(-1px)",
                  }}
                >
                  О проекте GROW <span style={MI(15)}>arrow_forward</span>
                </HoverBox>
                <HoverBox
                  as="a"
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    border: "1px solid #C9D6CD",
                    background: "#fff",
                    color: "#2E4165",
                    textDecoration: "none",
                    fontSize: "clamp(12px, 1.2vw, 13px)",
                    fontWeight: 800,
                    padding: "11px 18px",
                    borderRadius: 8,
                    transition: "border-color .18s",
                  }}
                  hoverStyle={{ borderColor: "#17A05E" }}
                >
                  Скачать брошюру <span style={MI(15)}>download</span>
                </HoverBox>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                data-keep="true"
                style={{
                  width: "clamp(160px, 25vw, 230px)",
                  height: "clamp(160px, 25vw, 230px)",
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 24px 56px rgba(23,96,75,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/grow.jpg"
                  alt="Project GROW"
                  style={{
                    width: "clamp(120px, 18vw, 170px)",
                    height: "clamp(120px, 18vw, 170px)",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSIONS */}
      <div id="missions" style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 28px" }}>
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
          МИССИИ GROW
        </div>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#17A05E",
            borderRadius: 2,
            margin: "0 auto 26px",
          }}
        ></div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {missions.map((m) => (
            <HoverBox
              key={m.n}
              style={{
                border: "1px solid #E4EEE7",
                borderRadius: 14,
                padding: "22px 18px",
                boxShadow: "0 6px 22px rgba(23,96,75,0.06)",
                transition: "transform .22s,box-shadow .22s",
              }}
              hoverStyle={{
                transform: "translateY(-5px)",
                boxShadow: "0 16px 34px rgba(23,96,75,0.13)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#EAF6EF",
                    color: "#17A05E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={MI(20)}>{m.icon}</span>
                </div>
                <div
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 24px)",
                    fontWeight: 800,
                    color: "#BFDECB",
                  }}
                >
                  {m.n}
                </div>
              </div>
              <div
                style={{
                  fontSize: "clamp(12.5px, 1.3vw, 13.5px)",
                  fontWeight: 800,
                  color: "#12294F",
                  lineHeight: 1.45,
                  marginBottom: 8,
                }}
              >
                {m.title}
              </div>
              <div
                style={{
                  fontSize: "clamp(10.5px, 1.1vw, 11.5px)",
                  color: "#68789A",
                  lineHeight: 1.65,
                }}
              >
                {m.text}
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* OBJECTIVE & IMPACT */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 48px" }}>
        <div
          style={{
            background: "#F2F8F3",
            borderRadius: 16,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div style={{ padding: "clamp(24px, 3vw, 34px)" }}>
            <div
              style={{
                fontSize: "clamp(13px, 1.4vw, 14px)",
                fontWeight: 800,
                letterSpacing: "1.5px",
                color: "#12294F",
                marginBottom: 20,
              }}
            >
              НАША ЦЕЛЬ И ВЛИЯНИЕ
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 16,
              }}
            >
              {impacts.map((i) => (
                <div
                  key={i.title}
                  style={{
                    borderLeft: "1px solid #D8E7DC",
                    paddingLeft: 14,
                  }}
                >
                  <span style={{ ...MI(22), color: "#17A05E" }}>{i.icon}</span>
                  <div
                    style={{
                      fontSize: "clamp(11px, 1.2vw, 12px)",
                      fontWeight: 800,
                      color: "#12294F",
                      lineHeight: 1.4,
                      margin: "6px 0 4px",
                    }}
                  >
                    {i.title}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(9.5px, 1vw, 10.5px)",
                      color: "#68789A",
                      lineHeight: 1.55,
                    }}
                  >
                    {i.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 180,
            }}
          ></div>
        </div>
      </div>

      {/* HOW GROW WORKS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 48px" }}>
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
          КАК РАБОТАЕТ GROW
        </div>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#17A05E",
            borderRadius: 2,
            margin: "0 auto 34px",
          }}
        ></div>
        <div style={{ position: "relative", overflowX: "auto" }}>
          <div style={{ position: "relative", minWidth: 520 }}>
            <div
              style={{
                position: "absolute",
                left: "4%",
                right: "4%",
                top: 24,
                height: 2,
                background: "#D3E8DA",
              }}
            ></div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6,1fr)",
                gap: 8,
                position: "relative",
              }}
            >
              {growSteps.map((g) => (
                <div key={g.n} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      background: "#fff",
                      border: "2px solid #8FCCA8",
                      color: "#17A05E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    <span style={MI(20)}>{g.icon}</span>
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(10px, 1.1vw, 12px)",
                      fontWeight: 800,
                      color: "#17A05E",
                      marginTop: 10,
                    }}
                  >
                    {g.n}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(10px, 1.1vw, 12px)",
                      fontWeight: 800,
                      color: "#12294F",
                      lineHeight: 1.4,
                      marginTop: 2,
                    }}
                  >
                    {g.title}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(8.5px, 0.9vw, 10px)",
                      color: "#8B99B3",
                      lineHeight: 1.5,
                      marginTop: 4,
                    }}
                  >
                    {g.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* KEY ACTIVITIES + NUMBERS */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            position: "relative",
            minHeight: 320,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(255,255,255,0.94),rgba(255,255,255,0.75) 55%,rgba(255,255,255,0.35))",
            }}
          ></div>
          <div style={{ position: "relative", padding: "clamp(24px, 3vw, 30px)" }}>
            <div
              style={{
                fontSize: "clamp(13px, 1.4vw, 14px)",
                fontWeight: 800,
                letterSpacing: "1.5px",
                color: "#12294F",
                marginBottom: 16,
              }}
            >
              КЛЮЧЕВЫЕ АКТИВНОСТИ
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {activities.map((a) => (
                <div
                  key={a}
                  style={{
                    display: "flex",
                    gap: 9,
                    alignItems: "flex-start",
                    fontSize: "clamp(11.5px, 1.2vw, 12.5px)",
                    fontWeight: 700,
                    color: "#2E4165",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{ ...MI(16), color: "#17A05E", marginTop: 1 }}
                  >
                    check_circle
                  </span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#F2F8F3",
            borderRadius: 14,
            padding: "clamp(20px, 3vw, 26px)",
          }}
        >
          <div
            style={{
              fontSize: "clamp(13px, 1.4vw, 14px)",
              fontWeight: 800,
              letterSpacing: "1.5px",
              color: "#12294F",
              marginBottom: 16,
            }}
          >
            GROW В ЦИФРАХ
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: 10,
            }}
          >
            {numbers.map((n) => (
              <HoverBox
                key={n.label}
                style={{
                  background: "#fff",
                  border: "1px solid #E0EDE4",
                  borderRadius: 10,
                  padding: "14px 10px",
                  textAlign: "center",
                  transition: "transform .22s",
                }}
                hoverStyle={{ transform: "translateY(-3px)" }}
              >
                <span style={{ ...MI(19), color: "#17A05E" }}>{n.icon}</span>
                <div
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 21px)",
                    fontWeight: 800,
                    color: "#17604B",
                    margin: "4px 0 2px",
                  }}
                >
                  {n.num}
                </div>
                <div
                  style={{
                    fontSize: "clamp(8.5px, 0.9vw, 10px)",
                    color: "#68789A",
                    fontWeight: 600,
                    lineHeight: 1.45,
                  }}
                >
                  {n.label}
                </div>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 48px" }}>
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
          НАШИ ПАРТНЁРЫ В GROW
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 12,
          }}
        >
          {partners.map((p) => (
            <HoverBox
              key={p.name}
              style={{
                border: "1px solid #E7EDF6",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "12px 8px",
                minHeight: 72,
                textAlign: "center",
                transition: "transform .22s,box-shadow .22s",
              }}
              hoverStyle={{
                transform: "translateY(-4px)",
                boxShadow: "0 12px 26px rgba(18,41,79,0.1)",
              }}
            >
              {p.hasLogo && (
                <div
                  title={p.name}
                  style={{
                    height: 38,
                    width: 100,
                    backgroundImage: `url('${p.logo}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                  }}
                ></div>
              )}
              {p.noLogo && (
                <>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: p.accent,
                    }}
                  ></div>
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "clamp(10px, 1.1vw, 12px)",
                        letterSpacing: "0.8px",
                        color: p.color,
                        lineHeight: 1.25,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(7px, 0.8vw, 8px)",
                        color: "#8B99B3",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        marginTop: 2,
                      }}
                    >
                      {p.sub}
                    </div>
                  </div>
                </>
              )}
            </HoverBox>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 52px" }}>
        <div
          data-keep="true"
          style={{
            background: "linear-gradient(100deg,#0E3B2A,#17604B)",
            borderRadius: 16,
            padding: "clamp(28px, 4vw, 36px) clamp(24px, 4vw, 40px)",
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
              right: 0,
              top: 0,
              bottom: 0,
              width: "36%",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.35,
            }}
          ></div>
          <div style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                fontSize: "clamp(20px, 3vw, 22px)",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              Растём вместе. Побеждаем вместе.
            </div>
            <div
              style={{
                fontSize: "clamp(12px, 1.2vw, 12.5px)",
                color: "#BFE0CD",
                marginTop: 4,
              }}
            >
              Строим лучшее будущее через навыки, возможности и международное
              сотрудничество.
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
                background: "#17A05E",
                color: "#fff",
                textDecoration: "none",
                fontSize: "clamp(11.5px, 1.1vw, 12.5px)",
                fontWeight: 800,
                padding: "10px 18px",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "filter .18s",
              }}
              hoverStyle={{ filter: "brightness(1.12)" }}
            >
              Участвовать в программе{" "}
              <span style={MI(14)}>arrow_forward</span>
            </HoverBox>
            <HoverBox
              as="a"
              href="#contact"
              style={{
                border: "1px solid rgba(255,255,255,0.45)",
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

      <SiteFooter />
    </div>
  );
}