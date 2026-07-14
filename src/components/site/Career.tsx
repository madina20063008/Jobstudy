"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const heroChips = [
  {
    icon: "checklist",
    title: "Понятные шаги",
    sub: "Просто и прозрачно",
    bg: "#EAF1FB",
    color: "#1D4E9E",
  },
  {
    icon: "person_check",
    title: "Личная поддержка",
    sub: "Сопровождение на каждом шаге",
    bg: "#EDF8F1",
    color: "#17A05E",
  },
  {
    icon: "workspace_premium",
    title: "Проверенный процесс",
    sub: "Высокая успешность",
    bg: "#F5EEFB",
    color: "#8B4BC9",
  },
  {
    icon: "public",
    title: "Глобальные возможности",
    sub: "Япония и Германия",
    bg: "#FDF3EC",
    color: "#D07B4D",
  },
];

const steps = [
  {
    n: "01",
    color: "#1D4E9E",
    bg: "#EAF1FB",
    icon: "info",
    title: "Информирование",
    text: "Узнайте о возможностях в Японии и Германии через нашу платформу и события.",
  },
  {
    n: "02",
    color: "#17A05E",
    bg: "#EDF8F1",
    icon: "person_add",
    title: "Регистрация и профиль",
    text: "Создайте профиль, подайте базовую информацию и документы.",
  },
  {
    n: "03",
    color: "#8B4BC9",
    bg: "#F5EEFB",
    icon: "forum",
    title: "Оценка и консультация",
    text: "Эксперты оценят ваш профиль и дадут карьерную консультацию.",
  },
  {
    n: "04",
    color: "#D07B4D",
    bg: "#FDF3EC",
    icon: "menu_book",
    title: "Язык и навыки",
    text: "Курсы японского или немецкого и программы профподготовки.",
  },
  {
    n: "05",
    color: "#1D4E9E",
    bg: "#EAF1FB",
    icon: "workspace_premium",
    title: "Экзамены и сертификация",
    text: "Сдайте требуемые экзамены (JLPT, SSW и др.) и получите сертификаты.",
  },
  {
    n: "06",
    color: "#17A05E",
    bg: "#EDF8F1",
    icon: "group_add",
    title: "Подбор работы и интервью",
    text: "Подбор работодателя и собеседования онлайн или офлайн.",
  },
  {
    n: "07",
    color: "#8B4BC9",
    bg: "#F5EEFB",
    icon: "flightsmode",
    title: "Оффер и виза",
    text: "Получите оффер и подготовьте визу и документы для поездки.",
  },
  {
    n: "08",
    color: "#D07B4D",
    bg: "#FDF3EC",
    icon: "flight_takeoff",
    title: "Вылет и ориентация",
    text: "Предвыездная ориентация и поддержка для безопасной поездки.",
  },
  {
    n: "09",
    color: "#1D4E9E",
    bg: "#EAF1FB",
    icon: "trending_up",
    title: "Работа и карьерный рост",
    text: "Начните карьеру за рубежом и растите с постоянной поддержкой.",
  },
];

const tracker = [
  {
    icon: "check",
    label: "Профиль",
    bg: "#17A05E",
    ring: "#17A05E",
    color: "#fff",
    labelColor: "#17A05E",
  },
  {
    icon: "check",
    label: "Оценка",
    bg: "#17A05E",
    ring: "#17A05E",
    color: "#fff",
    labelColor: "#17A05E",
  },
  {
    icon: "radio_button_checked",
    label: "Обучение",
    bg: "#1D4E9E",
    ring: "#1D4E9E",
    color: "#fff",
    labelColor: "#1D4E9E",
  },
  {
    icon: "workspace_premium",
    label: "Сертификация",
    bg: "#fff",
    ring: "#D8E1EF",
    color: "#93A3BE",
    labelColor: "#8B99B3",
  },
  {
    icon: "record_voice_over",
    label: "Интервью",
    bg: "#fff",
    ring: "#D8E1EF",
    color: "#93A3BE",
    labelColor: "#8B99B3",
  },
  {
    icon: "mark_email_read",
    label: "Оффер",
    bg: "#fff",
    ring: "#D8E1EF",
    color: "#93A3BE",
    labelColor: "#8B99B3",
  },
  {
    icon: "flight_takeoff",
    label: "Вылет",
    bg: "#fff",
    ring: "#D8E1EF",
    color: "#93A3BE",
    labelColor: "#8B99B3",
  },
  {
    icon: "badge",
    label: "Работа",
    bg: "#fff",
    ring: "#D8E1EF",
    color: "#93A3BE",
    labelColor: "#8B99B3",
  },
];

const supports = [
  {
    title: "Личный консультант",
    text: "Персональный советник для сопровождения и поддержки.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=70",
  },
  {
    title: "Учебные ресурсы",
    text: "Доступ к учебникам, материалам и онлайн-платформам.",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=70",
  },
  {
    title: "Поддержка с документами",
    text: "Помощь со всеми необходимыми документами и заявками.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=70",
  },
  {
    title: "Подготовка к интервью",
    text: "Улучшайте навыки коммуникации и собеседований.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=70",
  },
  {
    title: "Виза и переезд",
    text: "Полная поддержка визового процесса и организации поездки.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=70",
  },
  {
    title: "Поддержка после прибытия",
    text: "Помощь с адаптацией и интеграцией после переезда.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=70",
  },
];

const stories = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=70",
    quote:
      "JobStudy помог осуществить мечту о работе в Японии. Обучение и поддержка были превосходными!",
    name: "Акмаль С.",
    role: "Работает в Японии (IT-инженер)",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=70",
    quote:
      "Благодаря JobStudy я выучила японский, сдала JLPT N3 и получила оффер в Осаке. Моя жизнь изменилась!",
    name: "Малика К.",
    role: "Работает в Японии (уход)",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=70",
    quote:
      "Команда поддерживала меня на каждом шаге — от изучения языка до получения визы в Германию.",
    name: "Дилшод Р.",
    role: "Работает в Германии (техник)",
  },
];

const bandStats = [
  { icon: "groups", num: "3500+", label: "кандидатов получили сопровождение" },
  { icon: "work", num: "1200+", label: "кандидатов трудоустроено" },
  { icon: "verified_user", num: "98%", label: "успешность получения визы" },
  { icon: "apartment", num: "25+", label: "компаний-партнёров" },
  { icon: "star", num: "4.8/5", label: "удовлетворённость кандидатов" },
];

export function Career() {
  return (
    <div
      style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }}
      data-screen-label="Путь кандидата"
    >
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="career" navTheme="light" />
      </div>

      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(180deg,#F7FAFE,#EFF4FB)",
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
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=70')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,#F2F6FC 0%,rgba(242,246,252,0) 35%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "26px 28px 52px",
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
            <span
              style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 15 }}
            >
              home
            </span>
            <a
              href="Home.dc.html"
              style={{ color: "#8B99B3", textDecoration: "none" }}
            >
              Главная
            </a>
            <span>›</span>
            <span>Карьера</span>
            <span>›</span>
            <span style={{ color: "#2E4165" }}>Путь кандидата</span>
          </div>
          <div style={{ maxWidth: 520 }}>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#17A05E",
                marginBottom: 14,
              }}
            >
              ВАШ ПУТЬ К ГЛОБАЛЬНОЙ КАРЬЕРЕ
            </div>
            <h1
              style={{
                margin: "0 0 18px",
                fontSize: "clamp(30px, 6vw, 44px)",
                fontWeight: 800,
                letterSpacing: "1.5px",
                color: "#12294F",
              }}
            >
              ПУТЬ КАНДИДАТА
            </h1>
            <p
              style={{
                margin: "0 0 30px",
                fontSize: 14,
                lineHeight: 1.8,
                color: "#4A5C7E",
              }}
            >
              От первого шага до успешной карьеры в Японии или Германии. Мы
              рядом на каждом этапе.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gap: 12,
              }}
            >
              {heroChips.map((c) => (
                <div key={c.title} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: c.bg,
                      color: c.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Material Symbols Outlined'",
                        fontSize: 22,
                      }}
                    >
                      {c.icon}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(10px, 1.1vw, 11.5px)",
                      fontWeight: 800,
                      color: "#12294F",
                      lineHeight: 1.3,
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(8.5px, 0.9vw, 9.5px)",
                      color: "#8B99B3",
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 9 STEPS */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 28px 16px" }}>
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
          9 ШАГОВ К ВАШЕМУ БУДУЩЕМУ
        </div>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#17A05E",
            borderRadius: 2,
            margin: "0 auto 32px",
          }}
        ></div>
        <div style={{ position: "relative", overflowX: "auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
              position: "relative",
              minWidth: 700,
            }}
          >
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#fff",
                    border: `2px solid ${s.color}`,
                    color: s.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: "clamp(10px, 1.1vw, 11.5px)",
                    fontWeight: 800,
                    color: "#12294F",
                    lineHeight: 1.35,
                    marginTop: 8,
                    minHeight: 28,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: s.bg,
                    color: s.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px auto 8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Material Symbols Outlined'",
                      fontSize: 18,
                    }}
                  >
                    {s.icon}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "clamp(8.5px, 0.9vw, 9.5px)",
                    color: "#8B99B3",
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {s.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRESS TRACKER */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "32px 28px" }}>
        <div
          style={{
            border: "1px solid #E7EDF6",
            borderRadius: 16,
            padding: "clamp(18px, 2.5vw, 24px) clamp(16px, 3vw, 28px)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            boxShadow: "0 8px 26px rgba(18,41,79,0.06)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(14px, 1.8vw, 15px)",
                fontWeight: 800,
                color: "#12294F",
                lineHeight: 1.4,
              }}
            >
              Где вы на своём пути?
            </div>
            <div
              style={{
                fontSize: "clamp(11px, 1.1vw, 11.5px)",
                color: "#68789A",
                lineHeight: 1.6,
                marginTop: 4,
              }}
            >
              Отслеживайте прогресс и получайте персональные рекомендации.
            </div>
          </div>
          <div style={{ position: "relative", overflowX: "auto" }}>
            <div style={{ position: "relative", minWidth: 500 }}>
              <div
                style={{
                  position: "absolute",
                  left: "4%",
                  right: "4%",
                  top: 13,
                  height: 3,
                  background: "#E9EEF6",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "4%",
                  top: 13,
                  height: 3,
                  width: "29%",
                  background: "#17A05E",
                }}
              ></div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(8,1fr)",
                  position: "relative",
                }}
              >
                {tracker.map((t) => (
                  <div key={t.label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: t.bg,
                        border: `2px solid ${t.ring}`,
                        color: t.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Material Symbols Outlined'",
                          fontSize: 14,
                        }}
                      >
                        {t.icon}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(8px, 0.9vw, 9.5px)",
                        fontWeight: 800,
                        color: t.labelColor,
                        marginTop: 6,
                      }}
                    >
                      {t.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <HoverBox
              as="a"
              href="#contact"
              style={{
                background: "#16305E",
                color: "#fff",
                textDecoration: "none",
                fontSize: "clamp(11px, 1.1vw, 12px)",
                fontWeight: 800,
                padding: "10px 18px",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "filter .18s",
              }}
              hoverStyle={{ filter: "brightness(1.2)" }}
            >
              Мой прогресс{" "}
              <span
                style={{
                  fontFamily: "'Material Symbols Outlined'",
                  fontSize: 14,
                }}
              >
                arrow_forward
              </span>
            </HoverBox>
          </div>
        </div>
      </div>

      {/* SUPPORT */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 28px 48px" }}>
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
          МЫ ПОДДЕРЖИВАЕМ ВАС НА КАЖДОМ ШАГЕ
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
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 14,
          }}
        >
          {supports.map((s) => (
            <HoverBox
              key={s.title}
              style={{
                background: "#fff",
                border: "1px solid #E7EDF6",
                borderRadius: 14,
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0 6px 20px rgba(18,41,79,0.05)",
                transition: "transform .22s,box-shadow .22s",
              }}
              hoverStyle={{
                transform: "translateY(-5px)",
                boxShadow: "0 16px 32px rgba(18,41,79,0.12)",
              }}
            >
              <div
                style={{
                  height: 100,
                  backgroundColor: "#E4EBF5",
                  backgroundImage: `url('${s.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div style={{ padding: "14px 10px" }}>
                <div
                  style={{
                    fontSize: "clamp(11px, 1.1vw, 12.5px)",
                    fontWeight: 800,
                    color: "#12294F",
                    lineHeight: 1.4,
                    marginBottom: 6,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(9.5px, 1vw, 10.5px)",
                    color: "#68789A",
                    lineHeight: 1.6,
                  }}
                >
                  {s.text}
                </div>
              </div>
            </HoverBox>
          ))}
        </div>
      </div>

      {/* STORIES + HELP */}
      <div
        id="stories"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 22,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "clamp(14px, 1.6vw, 16px)",
              fontWeight: 800,
              letterSpacing: "1.5px",
              color: "#12294F",
              marginBottom: 16,
            }}
          >
            ИСТОРИИ УСПЕХА
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {stories.map((st) => (
              <HoverBox
                key={st.name}
                style={{
                  background: "#F4F7FC",
                  borderRadius: 14,
                  padding: 18,
                  transition: "transform .22s",
                }}
                hoverStyle={{ transform: "translateY(-4px)" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      backgroundColor: "#D8E1EF",
                      backgroundImage: `url('${st.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                      flexShrink: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: "clamp(10px, 1vw, 11px)",
                      color: "#4A5C7E",
                      lineHeight: 1.65,
                      fontStyle: "italic",
                    }}
                  >
                    «{st.quote}»
                  </div>
                </div>
                <div style={{ marginTop: 10 }}>
                  <div
                    style={{
                      fontSize: "clamp(11px, 1.1vw, 12px)",
                      fontWeight: 800,
                      color: "#12294F",
                    }}
                  >
                    {st.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(9px, 0.9vw, 10px)",
                      color: "#8B99B3",
                      fontWeight: 600,
                      marginTop: 1,
                    }}
                  >
                    {st.role}
                  </div>
                </div>
              </HoverBox>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <HoverBox
              as="a"
              href="Institute.dc.html#stories"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                border: "1px solid #D8E1EF",
                color: "#2E4165",
                textDecoration: "none",
                fontSize: "clamp(10.5px, 1.1vw, 11.5px)",
                fontWeight: 800,
                padding: "8px 16px",
                borderRadius: 8,
                background: "#fff",
                transition: "border-color .18s,color .18s",
              }}
              hoverStyle={{ borderColor: "#1D4E9E", color: "#1D4E9E" }}
            >
              Больше историй{" "}
              <span
                style={{
                  fontFamily: "'Material Symbols Outlined'",
                  fontSize: 14,
                }}
              >
                arrow_forward
              </span>
            </HoverBox>
          </div>
        </div>
        <div
          style={{
            background: "#EDF8F1",
            borderRadius: 16,
            padding: "clamp(20px, 3vw, 24px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -16,
              bottom: -16,
              color: "#CDE8D8",
            }}
          >
            <span
              style={{
                fontFamily: "'Material Symbols Outlined'",
                fontSize: 80,
              }}
            >
              support_agent
            </span>
          </div>
          <div
            style={{
              fontSize: "clamp(14px, 1.6vw, 15px)",
              fontWeight: 800,
              color: "#12294F",
              marginBottom: 8,
              position: "relative",
            }}
          >
            Нужна помощь?
          </div>
          <div
            style={{
              fontSize: "clamp(11px, 1.1vw, 11.5px)",
              color: "#4A5C7E",
              lineHeight: 1.7,
              marginBottom: 16,
              position: "relative",
            }}
          >
            Наша команда готова ответить на ваши вопросы и помочь начать ваш
            путь уже сегодня.
          </div>
          <HoverBox
            as="a"
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#17A05E",
              color: "#fff",
              textDecoration: "none",
              fontSize: "clamp(10.5px, 1.1vw, 11.5px)",
              fontWeight: 800,
              padding: "8px 16px",
              borderRadius: 8,
              position: "relative",
              transition: "filter .18s",
            }}
            hoverStyle={{ filter: "brightness(1.1)" }}
          >
            Связаться с нами{" "}
            <span
              style={{
                fontFamily: "'Material Symbols Outlined'",
                fontSize: 14,
              }}
            >
              arrow_forward
            </span>
          </HoverBox>
        </div>
      </div>

      {/* NAVY STATS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 48px" }}>
        <div
          data-keep="true"
          style={{
            background: "#0E2A52",
            borderRadius: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            padding: "clamp(18px, 2vw, 26px) clamp(12px, 2vw, 14px)",
            gap: 12,
          }}
        >
          {bandStats.map((b) => (
            <div
              key={b.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0 8px",
                borderRight: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Material Symbols Outlined'",
                  fontSize: "clamp(22px, 2.5vw, 26px)",
                  color: "#8FB4E8",
                }}
              >
                {b.icon}
              </span>
              <div>
                <div
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 22px)",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  {b.num}
                </div>
                <div
                  style={{
                    fontSize: "clamp(9px, 0.9vw, 10.5px)",
                    color: "#9FB2CE",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    marginTop: 1,
                  }}
                >
                  {b.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 52px" }}>
        <div
          data-keep="true"
          style={{
            background: "#0C2140",
            borderRadius: 18,
            padding: "clamp(28px, 4vw, 38px) clamp(24px, 4vw, 42px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
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
              width: "40%",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1000&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          ></div>
          <div style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                fontSize: "clamp(20px, 3vw, 23px)",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              Ваше будущее начинается с одного шага
            </div>
            <div
              style={{
                fontSize: "clamp(12px, 1.3vw, 12.5px)",
                color: "#AFC2DE",
                marginTop: 6,
                maxWidth: 460,
                lineHeight: 1.6,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Присоединяйтесь к тысячам кандидатов, строящих успешную карьеру в
              Японии и Германии вместе с JobStudy.
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
              href="#contact"
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
              hoverStyle={{ filter: "brightness(1.1)" }}
            >
              Зарегистрироваться{" "}
              <span
                style={{
                  fontFamily: "'Material Symbols Outlined'",
                  fontSize: 14,
                }}
              >
                arrow_forward
              </span>
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
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "background .18s",
              }}
              hoverStyle={{ background: "rgba(255,255,255,0.1)" }}
            >
              Записаться на консультацию{" "}
              <span
                style={{
                  fontFamily: "'Material Symbols Outlined'",
                  fontSize: 14,
                }}
              >
                arrow_forward
              </span>
            </HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}