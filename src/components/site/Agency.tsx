"use client";

import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HoverBox } from "./primitives";

const MI = (size: number): React.CSSProperties => ({
  fontFamily: "'Material Symbols Outlined'",
  fontSize: size,
  lineHeight: 1,
});

const CITIES = ["ТАШКЕНТ", "КАРШИ", "ШАХРИСАБЗ", "ДЕНОВ", "ТЕРМЕЗ"];

const HERO_FACTS = [
  { icon: "workspace_premium", title: "2025", sub: "Год основания" },
  { icon: "location_city", title: "Ташкент", sub: "Головной офис" },
  { icon: "apartment", title: "4 города", sub: "Региональные филиалы" },
  { icon: "database", title: "Тысячи", sub: "кандидатов в базе" },
];

const ABOUT_CHECKS = [
  "Лицензия и соответствие международным стандартам",
  "Опытная команда рекрутинга и сопровождения кандидатов",
  "Прочные партнёрства с миграционными агентствами и ассоциациями",
  "Полное сопровождение кандидатов и работодателей",
  "Приверженность прозрачности, этике и качеству",
];

const VMV = [
  {
    icon: "visibility",
    title: "Наше видение",
    text: "Быть самым надёжным мостом между талантами и глобальными возможностями.",
  },
  {
    icon: "target",
    title: "Наша миссия",
    text: "Давать людям навыки, знания и поддержку для успешной карьеры за рубежом.",
  },
  {
    icon: "diamond",
    title: "Наши ценности",
    text: "Честность, уважение, профессионализм, ответственность, забота.",
  },
];

const SERVICES = [
  {
    icon: "person_search",
    title: "Подбор кандидатов",
    text: "Поиск и отбор мотивированных и квалифицированных кандидатов по всему Узбекистану.",
  },
  {
    icon: "school",
    title: "Обучение и подготовка",
    text: "Языковая, профессиональная и культурная подготовка по международным стандартам.",
  },
  {
    icon: "description",
    title: "Поддержка с документами",
    text: "Помощь со всеми необходимыми документами и процессами подачи.",
  },
  {
    icon: "work",
    title: "Трудоустройство",
    text: "Соединение кандидатов с надёжными работодателями Японии и Германии.",
  },
  {
    icon: "support_agent",
    title: "Поддержка после трудоустройства",
    text: "Непрерывное сопровождение кандидатов во время и после трудоустройства.",
  },
];

const PROCESS = [
  { n: "01", icon: "app_registration", title: "Регистрация", text: "Кандидат подаёт заявку и первичные документы" },
  { n: "02", icon: "quiz", title: "Отбор", text: "Собеседование и оценка навыков" },
  { n: "03", icon: "menu_book", title: "Обучение", text: "Языковая и профессиональная подготовка" },
  { n: "04", icon: "description", title: "Документы", text: "Подготовка всех необходимых документов" },
  { n: "05", icon: "group_add", title: "Трудоустройство", text: "Подбор работодателя и получение оффера" },
  { n: "06", icon: "flight_takeoff", title: "Вылет", text: "Оформление визы и предвыездная подготовка" },
  { n: "07", icon: "support_agent", title: "Сопровождение", text: "Поддержка после прибытия и в процессе работы" },
];

const STATS = [
  { icon: "school", num: "200+", label: "студентов на обучении" },
  { icon: "workspace_premium", num: "70+", label: "обладателей JLPT" },
  { icon: "engineering", num: "50+", label: "работников в Японии" },
  { icon: "apartment", num: "4", label: "региональных филиала" },
  { icon: "groups", num: "1000+", label: "активных кандидатов" },
];

const TEAM = [
  {
    name: "Кобил Нормуродов",
    role: "Основатель и CEO",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
    text: "Руководит JobStudy с видением создавать реальные возможности для узбекских талантов в Японии и Германии через образование, подготовку и международное сотрудничество.",
  },
  {
    name: "Озод Алламуродов",
    role: "Сооснователь",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=70",
    text: "Эксперт в языковом образовании и профессиональном развитии с большим опытом в международных программах подготовки.",
  },
];

export function Agency() {
  return (
    <div
      style={{ fontFamily: "'Manrope',sans-serif", color: "#1A2B49" }}
      data-screen-label="Агентство JobStudy"
    >
      <div style={{ position: "sticky", top: 0, zIndex: 95 }}>
        <SiteNav active="about" navTheme="light" />
      </div>

      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(180deg,#FBF7F3,#F6EFE8)",
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
            width: "52%",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,#F9F4EE 0%,rgba(249,244,238,0) 35%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 16,
            top: 100,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            zIndex: 2,
          }}
          className="cities-badge"
        >
          {CITIES.map((c) => (
            <div
              key={c}
              data-keep="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(10,25,48,0.85)",
                color: "#fff",
                fontSize: "clamp(9px, 1.2vw, 11px)",
                fontWeight: 800,
                letterSpacing: "1.5px",
                padding: "6px 12px",
                borderRadius: 6,
                backdropFilter: "blur(4px)",
              }}
            >
              <span style={{ ...MI(12), color: "#E0A46B" }}>location_on</span>
              {c}
            </div>
          ))}
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
            <a
              href="About.dc.html"
              style={{ color: "#8B99B3", textDecoration: "none" }}
            >
              О нас
            </a>
            <span>›</span>
            <span style={{ color: "#2E4165" }}>JobStudy</span>
          </div>
          <div style={{ maxWidth: 480 }}>
            <h1
              style={{
                margin: "0 0 8px",
                fontSize: "clamp(34px, 8vw, 52px)",
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#12294F",
              }}
            >
              JobStudy
            </h1>
            <div
              style={{
                fontSize: "clamp(13px, 2vw, 17px)",
                fontWeight: 800,
                letterSpacing: "2.5px",
                color: "#D07B4D",
                marginBottom: 16,
              }}
            >
              ЧАСТНОЕ АГЕНТСТВО ЗАНЯТОСТИ
            </div>
            <p
              style={{
                margin: "0 0 24px",
                fontSize: "clamp(13px, 1.5vw, 14.5px)",
                lineHeight: 1.8,
                color: "#4A5C7E",
              }}
            >
              Соединяем таланты, образование и возможности между Узбекистаном,
              Японией и Германией ради лучшего будущего.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                gap: 0,
                marginBottom: 24,
                background: "#fff",
                border: "1px solid #EFE3D6",
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(120,70,30,0.07)",
                width: "100%",
                maxWidth: 500,
              }}
            >
              {HERO_FACTS.map((f, idx) => (
                <div
                  key={f.title}
                  style={{
                    padding: "12px 10px",
                    borderRight:
                      idx < HERO_FACTS.length - 1 ? "1px solid #F2E8DC" : "none",
                    textAlign: "center",
                  }}
                >
                  <span style={{ ...MI(17), color: "#D07B4D" }}>{f.icon}</span>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#12294F",
                      marginTop: 4,
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontSize: 8.5,
                      color: "#8B99B3",
                      fontWeight: 600,
                      marginTop: 1,
                    }}
                  >
                    {f.sub}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <HoverBox
                as="a"
                href="About.dc.html"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#16305E",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "clamp(12px, 1.2vw, 13px)",
                  fontWeight: 800,
                  padding: "12px 20px",
                  borderRadius: 8,
                  transition: "filter .18s,transform .18s",
                }}
                hoverStyle={{
                  filter: "brightness(1.2)",
                  transform: "translateY(-1px)",
                }}
              >
                О нас <span style={MI(16)}>arrow_forward</span>
              </HoverBox>
              <HoverBox
                as="a"
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid #E3D4C2",
                  background: "#fff",
                  color: "#2E4165",
                  textDecoration: "none",
                  fontSize: "clamp(12px, 1.2vw, 13px)",
                  fontWeight: 800,
                  padding: "12px 20px",
                  borderRadius: 8,
                  transition: "border-color .18s",
                }}
                hoverStyle={{ borderColor: "#D07B4D" }}
              >
                Профиль компании <span style={MI(16)}>download</span>
              </HoverBox>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "44px 28px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 36,
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "clamp(20px, 2.5vw, 22px)",
              fontWeight: 800,
              letterSpacing: "1px",
              color: "#12294F",
            }}
          >
            ОБ АГЕНТСТВЕ JobStudy
          </h2>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#D07B4D",
              borderRadius: 2,
              marginBottom: 18,
            }}
          ></div>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: 13,
              lineHeight: 1.85,
              color: "#4A5C7E",
            }}
          >
            JobStudy — частное агентство занятости, основанное в 2025 году. Наша
            миссия — находить, обучать и соединять талантливых узбекских
            специалистов с надёжными работодателями в Японии и Германии. Мы
            тесно работаем с государственными институтами, образовательными
            организациями и международными партнёрами, обеспечивая легальное,
            безопасное и успешное трудоустройство.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ABOUT_CHECKS.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  fontSize: "clamp(11.5px, 1.2vw, 12.5px)",
                  fontWeight: 700,
                  color: "#2E4165",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{ ...MI(17), color: "#D07B4D", marginTop: 1 }}
                >
                  check_circle
                </span>
                {a}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              height: 220,
              borderRadius: 16,
              backgroundColor: "#E3D9CC",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 16px 38px rgba(60,40,20,0.14)",
            }}
          ></div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 12,
              marginTop: -30,
              padding: "0 12px",
              position: "relative",
            }}
          >
            {VMV.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  border: "1px solid #F0E7DA",
                  borderRadius: 12,
                  padding: "14px 14px",
                  boxShadow: "0 10px 26px rgba(60,40,20,0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  <span style={{ ...MI(16), color: "#D07B4D" }}>{v.icon}</span>
                  <div
                    style={{
                      fontSize: "clamp(10px, 1.1vw, 11.5px)",
                      fontWeight: 800,
                      color: "#12294F",
                    }}
                  >
                    {v.title}
                  </div>
                </div>
                <div
                  style={{
                    width: 22,
                    height: 2,
                    background: "#D07B4D",
                    borderRadius: 2,
                    marginBottom: 6,
                  }}
                ></div>
                <div
                  style={{
                    fontSize: "clamp(9.5px, 1vw, 10.5px)",
                    color: "#68789A",
                    lineHeight: 1.6,
                  }}
                >
                  {v.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ background: "#FBF8F4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 28px" }}>
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "clamp(20px, 2.5vw, 22px)",
              fontWeight: 800,
              letterSpacing: "1px",
              color: "#12294F",
            }}
          >
            НАШИ УСЛУГИ
          </h2>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#D07B4D",
              borderRadius: 2,
              marginBottom: 24,
            }}
          ></div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 14,
            }}
          >
            {SERVICES.map((s) => (
              <HoverBox
                key={s.title}
                style={{
                  background: "#fff",
                  border: "1px solid #F0E7DA",
                  borderRadius: 14,
                  padding: "22px 14px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 6px 20px rgba(60,40,20,0.05)",
                  transition: "transform .22s,box-shadow .22s",
                }}
                hoverStyle={{
                  transform: "translateY(-5px)",
                  boxShadow: "0 16px 34px rgba(60,40,20,0.12)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#FAF0E6",
                    color: "#D07B4D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <span style={MI(22)}>{s.icon}</span>
                </div>
                <div
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 13px)",
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
                    fontSize: "clamp(10px, 1vw, 11px)",
                    color: "#68789A",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {s.text}
                </div>
                <HoverBox
                  as="a"
                  href="Career.dc.html"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    marginTop: 12,
                    border: "1px solid #EBDCC8",
                    color: "#B0692F",
                    textDecoration: "none",
                    fontSize: "clamp(9.5px, 1vw, 10.5px)",
                    fontWeight: 800,
                    padding: "6px 12px",
                    borderRadius: 7,
                    transition: "background .18s,color .18s",
                  }}
                  hoverStyle={{ background: "#D07B4D", color: "#fff" }}
                >
                  Подробнее <span style={MI(13)}>arrow_forward</span>
                </HoverBox>
              </HoverBox>
            ))}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 28px 32px" }}>
        <h2
          style={{
            margin: "0 0 8px",
            fontSize: "clamp(20px, 2.5vw, 22px)",
            fontWeight: 800,
            letterSpacing: "1px",
            color: "#12294F",
          }}
        >
          НАШ ПРОЦЕСС
        </h2>
        <div
          style={{
            width: 44,
            height: 3,
            background: "#D07B4D",
            borderRadius: 2,
            marginBottom: 32,
          }}
        ></div>
        <div style={{ position: "relative", overflowX: "auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
              gap: 12,
              position: "relative",
              minWidth: 700,
            }}
          >
            {PROCESS.map((p) => (
              <div key={p.n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#FAF0E6",
                    border: "2px solid #E4C4A5",
                    color: "#B0692F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <span style={MI(20)}>{p.icon}</span>
                </div>
                <div
                  style={{
                    fontSize: "clamp(10px, 1vw, 12px)",
                    fontWeight: 800,
                    color: "#D07B4D",
                    marginTop: 8,
                  }}
                >
                  {p.n}
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
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(8.5px, 0.9vw, 10px)",
                    color: "#8B99B3",
                    lineHeight: 1.5,
                    marginTop: 2,
                  }}
                >
                  {p.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 48px" }}>
        <div
          style={{
            background: "#FBF8F4",
            borderRadius: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            padding: "20px 14px",
            gap: 12,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0 8px",
                borderRight: "1px solid #F0E5D5",
              }}
            >
              <span style={{ ...MI(22), color: "#D07B4D" }}>{s.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: "clamp(18px, 2vw, 21px)",
                    fontWeight: 800,
                    color: "#12294F",
                    lineHeight: 1.1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "clamp(9px, 0.9vw, 10.5px)",
                    color: "#68789A",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    marginTop: 1,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {TEAM.map((t) => (
          <HoverBox
            key={t.name}
            style={{
              border: "1px solid #F0E7DA",
              borderRadius: 16,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr",
              boxShadow: "0 8px 26px rgba(60,40,20,0.07)",
              transition: "transform .22s,box-shadow .22s",
            }}
            hoverStyle={{
              transform: "translateY(-4px)",
              boxShadow: "0 18px 38px rgba(60,40,20,0.13)",
            }}
          >
            <div
              style={{
                backgroundColor: "#E3D9CC",
                backgroundImage: `url('${t.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                minHeight: 200,
              }}
            ></div>
            <div
              style={{
                padding: "20px 20px 18px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(16px, 1.8vw, 18px)",
                  fontWeight: 800,
                  color: "#12294F",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontSize: "clamp(11px, 1.1vw, 12px)",
                  fontWeight: 800,
                  color: "#D07B4D",
                  margin: "4px 0 10px",
                }}
              >
                {t.role}
              </div>
              <div
                style={{
                  fontSize: "clamp(11px, 1.1vw, 12px)",
                  color: "#4A5C7E",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {t.text}
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    border: "1px solid #EBDCC8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#B0692F",
                  }}
                >
                  in
                </div>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    border: "1px solid #EBDCC8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B0692F",
                  }}
                >
                  <span style={MI(14)}>mail</span>
                </div>
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
            background: "linear-gradient(100deg,#101F3C,#1B3157)",
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
              right: -40,
              bottom: -60,
              width: 240,
              height: 240,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(224,164,107,0.25),transparent 70%)",
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
              Построим лучшее будущее вместе
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
              Присоединяйтесь к тысячам мотивированных людей, которые уже
              готовятся к успешной карьере в Японии и Германии.
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
                background: "#D07B4D",
                color: "#fff",
                textDecoration: "none",
                fontSize: "clamp(11.5px, 1.1vw, 12.5px)",
                fontWeight: 800,
                padding: "11px 20px",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                transition: "filter .18s",
              }}
              hoverStyle={{ filter: "brightness(1.12)" }}
            >
              Подать заявку <span style={MI(15)}>arrow_forward</span>
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
                padding: "11px 20px",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                transition: "background .18s",
              }}
              hoverStyle={{ background: "rgba(255,255,255,0.1)" }}
            >
              Связаться с нами <span style={MI(15)}>arrow_forward</span>
            </HoverBox>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}