"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { HoverBox } from "./primitives";
import { useJb } from "./JbProvider";

const MI = (size: number): React.CSSProperties => ({
  fontFamily: "'Material Symbols Outlined'",
  fontSize: size,
  lineHeight: 1,
});

type View = "roles" | "login" | "register" | "forgot" | "otp" | "success";

type Role = [key: string, icon: string, color: string, title: string, desc: string];

const ROLES: Role[] = [
  ["student", "school", "#2563EB", "Студент", "Обучение, курсы, JLPT и путь к карьере за рубежом."],
  ["candidate", "person_search", "#0D9488", "Кандидат", "Поиск вакансий и трудоустройство в Японии и Германии."],
  ["employer", "business_center", "#16305E", "Работодатель", "Публикация вакансий и подбор кандидатов."],
  ["jp_company", "apartment", "#E1132C", "Японская компания", "Наём специалистов и сотрудничество из Японии."],
  ["de_company", "domain", "#374151", "Немецкая компания", "Наём специалистов и программы Ausbildung."],
  ["government", "account_balance", "#7C3AED", "Государственная организация", "Совместные проекты и международное сотрудничество."],
  ["university", "cast_for_education", "#0369A1", "Университет", "Академическое партнёрство и обмен студентами."],
  ["partner", "handshake", "#B45309", "Международный партнёр", "Совместные программы и глобальные инициативы."],
  ["investor", "trending_up", "#059669", "Инвестор", "Инвестиционные возможности и проекты платформы."],
  ["teacher", "co_present", "#DB2777", "Преподаватель", "Преподавание, курсы и работа со студентами."],
  ["admin", "admin_panel_settings", "#475569", "Администратор", "Управление платформой, доступами и аналитикой."],
];

type Social = [name: string, mono: string, color: string];
const SOCIALS: Social[] = [
  ["Google", "G", "#4285F4"],
  ["Microsoft", "⊞", "#0A7CD4"],
  ["Apple", "", "#111827"],
  ["Telegram", "✈", "#229ED9"],
];

const BENEFITS: { icon: string; text: string }[] = [
  { icon: "group", text: "Единый вход для студентов, компаний, партнёров и государства" },
  { icon: "lock", text: "Защищённая проверка через OTP и подтверждение e-mail" },
  { icon: "translate", text: "Поддержка 5 языков: узбекский, русский, английский, японский, немецкий" },
];

function hex(c: string, a: number): string {
  const n = parseInt(c.slice(1), 16);
  return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
}
function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((s || "").trim());
}
function gen(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

const inputStyle: CSSProperties = {
  marginTop: 6,
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 14px",
  border: "1px solid #D8E1EF",
  borderRadius: 10,
  fontSize: 13.5,
  fontFamily: "inherit",
  background: "#F8FAFD",
  outline: "none",
  transition: "border-color .16s,background .16s",
};

/* Input that replicates style-focus (border+background swap on focus). */
function FocusInput({
  style,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { style?: CSSProperties }) {
  const [focus, setFocus] = useState(false);
  const focusStyle: CSSProperties = focus ? { borderColor: "#1D4E9E", background: "#fff" } : {};
  return (
    <input
      {...rest}
      style={{ ...style, ...focusStyle }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
}

export function AccessPortal() {
  const jb = useJb();

  const [entered, setEntered] = useState(false);
  const [view, setView] = useState<View>("roles");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [remember, setRemember] = useState(true);
  const [agree, setAgree] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [demoCode, setDemoCode] = useState("");
  const [pending, setPending] = useState<View>("login");
  const [successName, setSuccessName] = useState("");
  const [resendIn, setResendIn] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startResend = useCallback(() => {
    clearTimer();
    setResendIn(30);
    timerRef.current = setInterval(() => {
      setResendIn((n) => {
        if (n <= 1) {
          clearTimer();
          return 0;
        }
        return n - 1;
      });
    }, 1000);
  }, [clearTimer]);

  // Sync local view/state to provider when the modal opens; run enter animation.
  useEffect(() => {
    if (!jb.portalOpen) return;
    const v = jb.portalMode === "login" || jb.portalMode === "register" ? (jb.portalMode as View) : "roles";
    // Defer state updates to avoid synchronous setState within effect
    let rafInner: number | null = null;
    requestAnimationFrame(() => {
      setEntered(false);
      setView(v);
      setError("");
      setForgotSent(false);
      document.documentElement.style.overflow = "hidden";
      rafInner = requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
    });
    return () => {
      if (rafInner != null) cancelAnimationFrame(rafInner);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jb.portalOpen]);

  const close = useCallback(() => {
    clearTimer();
    setEntered(false);
    setTimeout(() => {
      setView("roles");
      setRole("");
      setName("");
      setEmail("");
      setPhone("");
      setPass("");
      setConfirm("");
      setAgree(false);
      setError("");
      setLoading(false);
      setForgotSent(false);
      setResendIn(0);
      jb.closePortal();
    }, 260);
  }, [clearTimer, jb]);

  // Esc closes
  useEffect(() => {
    if (!jb.portalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [jb.portalOpen, close]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const roleObj: Role = ROLES.find((r) => r[0] === role) || [
    "",
    "person",
    "#1D4E9E",
    "Роль",
    "",
  ];

  const finalize = useCallback(
    (profile: { name: string; email: string; provider: string }) => {
      // best-effort persistence via provider (replaces localStorage jb-session + jb:session event)
      jb.setSession({ name: profile.name, email: profile.email, role });
      clearTimer();
      setLoading(false);
      setSuccessName(profile.name.split(" ").slice(-1)[0] || profile.name);
      setView("success");
    },
    [jb, role, clearTimer]
  );

  const pickRole = (key: string) => {
    setRole(key);
    setView("login");
    setError("");
  };
  const backToRoles = () => {
    setView("roles");
    setError("");
  };
  const goLogin = () => {
    setView("login");
    setError("");
  };
  const goRegister = () => {
    setView("register");
    setError("");
  };
  const goForgot = () => {
    setView("forgot");
    setError("");
    setForgotSent(false);
  };

  const submitAuth = useCallback(async () => {
    if (loading) return;
    if (view === "register") {
      if (!name.trim()) return setError("Введите ваше имя");
      if (!isEmail(email)) return setError("Введите корректный e-mail");
      if (pass.length < 6) return setError("Пароль должен быть не менее 6 символов");
      if (pass !== confirm) return setError("Пароли не совпадают");
      if (!agree) return setError("Примите условия использования");
    } else {
      if (!isEmail(email)) return setError("Введите корректный e-mail");
      if (pass.length < 6) return setError("Пароль должен быть не менее 6 символов");
    }
    setLoading(true);
    setError("");
    // best-effort network call — never blocks the flow
    const endpoint = view === "register" ? "/api/portal/register" : "/api/portal/login";
    try {
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          view === "register"
            ? { name, email, phone, password: pass, role }
            : { email, password: pass, role }
        ),
      }).catch(() => {});
    } catch {
      /* ignore */
    }
    const currentView = view;
    setTimeout(() => {
      setLoading(false);
      setPending(currentView);
      setDemoCode(gen());
      setError("");
      setView("otp");
      startResend();
    }, 750);
  }, [loading, view, name, email, phone, pass, confirm, agree, role, startResend]);

  const submitForgot = () => {
    if (!isEmail(email)) return setError("Введите корректный e-mail");
    setError("");
    setForgotSent(true);
  };

  const doSocial = (provider: string) => {
    if (loading) return;
    setLoading(true);
    setError("");
    setTimeout(
      () =>
        finalize({
          name: "Пользователь " + provider,
          email: "user@" + provider.toLowerCase() + ".com",
          provider,
        }),
      800
    );
  };

  const onOtpInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const v = target.value.replace(/\D/g, "");
    target.value = v.slice(0, 1);
    if (error) setError("");
    const next = target.nextElementSibling as HTMLElement | null;
    if (v && next && next.tagName === "INPUT") next.focus();
  };
  const onOtpKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const prev = target.previousElementSibling as HTMLElement | null;
    if (e.key === "Backspace" && !target.value && prev) prev.focus();
  };
  const verifyOtp = () => {
    if (loading) return;
    const wrap = document.querySelector("[data-otp-wrap]");
    const code = wrap
      ? Array.from(wrap.querySelectorAll("input"))
          .map((i) => (i as HTMLInputElement).value)
          .join("")
      : "";
    if (code.length < 6) return setError("Введите код полностью");
    if (code !== demoCode) return setError("Неверный код. Попробуйте снова.");
    setLoading(true);
    setError("");
    setTimeout(() => {
      const nm =
        pending === "register" ? name.trim() : email.split("@")[0] || "Пользователь";
      finalize({ name: nm, email, provider: "email" });
    }, 500);
  };
  const resend = () => {
    if (resendIn > 0) return;
    setDemoCode(gen());
    setError("");
    const wrap = document.querySelector("[data-otp-wrap]");
    if (wrap) wrap.querySelectorAll("input").forEach((i) => {
      (i as HTMLInputElement).value = "";
    });
    startResend();
  };

  if (!jb.portalOpen) return null;

  const isRoles = view === "roles";
  const isAuth = view === "login" || view === "register";
  const isLogin = view === "login";
  const isRegister = view === "register";
  const isForgot = view === "forgot";
  const forgotForm = view === "forgot" && !forgotSent;
  const isOtp = view === "otp";
  const isSuccess = view === "success";
  const showRoleInfo = view !== "roles" && !!role;

  const railTitle =
    view === "roles"
      ? "Единый вход на международную платформу"
      : view === "success"
      ? "Вы успешно вошли"
      : view === "otp"
      ? "Почти готово"
      : view === "forgot"
      ? "Забыли пароль?"
      : "Добро пожаловать";
  const railSub =
    view === "roles"
      ? "Один аккаунт для обучения, трудоустройства, сотрудничества и инвестиций между Узбекистаном, Японией и Германией."
      : "Быстрый и защищённый доступ к вашему рабочему пространству.";

  const emailTrim = email.trim();
  let masked = "ваш e-mail";
  if (emailTrim.indexOf("@") > 0) {
    const [u, d] = emailTrim.split("@");
    masked = u.charAt(0) + "•••@" + d;
  }

  const overlayStyle: CSSProperties = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    height: "100vh",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    boxSizing: "border-box",
    background: `rgba(8,16,32,${entered ? 0.58 : 0})`,
    backdropFilter: `blur(${entered ? 6 : 0}px)`,
    WebkitBackdropFilter: `blur(${entered ? 6 : 0}px)`,
    transition: "background .3s ease,backdrop-filter .3s ease",
  };
  const panelStyle: CSSProperties = {
    width: "min(1120px,100%)",
    maxHeight: "min(760px,95vh)",
    background: "#fff",
    borderRadius: 22,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 40px 120px rgba(6,14,30,.5)",
    opacity: entered ? 1 : 0,
    transform: `translateY(${entered ? 0 : 14}px) scale(${entered ? 1 : 0.975})`,
    transition: "opacity .32s ease,transform .38s cubic-bezier(.2,.85,.25,1)",
    fontFamily: "'Manrope',sans-serif",
  };

  const loginTabColor = view === "login" ? "#16305E" : "#94A3B8";
  const loginTabLine = view === "login" ? "#1D4E9E" : "transparent";
  const regTabColor = view === "register" ? "#16305E" : "#94A3B8";
  const regTabLine = view === "register" ? "#1D4E9E" : "transparent";

  const submitLabel = view === "register" ? "Создать аккаунт" : "Войти";
  const canResend = resendIn === 0;
  const resendText =
    resendIn > 0
      ? "Отправить код повторно можно через " + resendIn + " с"
      : "Не получили код?";

  return (
    <>
      <style>{`
@keyframes jbFadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes jbSpin{to{transform:rotate(360deg)}}
@keyframes jbPop{0%{transform:scale(.4);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}
@keyframes jbRing{0%{transform:scale(.5);opacity:.0}100%{transform:scale(1);opacity:1}}
.rail-desktop{display:none}
.success-actions{flex-direction:column}
@media (min-width: 480px){.rail-desktop{display:flex}.success-actions{flex-direction:row}}
`}</style>
      <div onClick={close} style={overlayStyle}>
        <div onClick={(e) => e.stopPropagation()} style={panelStyle}>
          <HoverBox
            onClick={close}
            title="Закрыть"
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 5,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              transition: "background .18s",
            }}
            hoverStyle={{ background: "rgba(255,255,255,0.28)" }}
          >
            <span style={MI(20)}>close</span>
          </HoverBox>

          {/* LEFT RAIL - hidden on small screens, shown on larger */}
          <div
            style={{
              display: "none",
              flex: "0 0 320px",
              maxWidth: 320,
              background: "linear-gradient(160deg,#16305E 0%,#1D4E9E 100%)",
              color: "#fff",
              padding: "34px 28px",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
            className="rail-desktop"
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: -80,
                left: -40,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/jobstudy-icon.png"
                alt="JobStudy"
                style={{
                  width: 44,
                  height: 44,
                  objectFit: "contain",
                  display: "block",
                  background: "#fff",
                  borderRadius: 12,
                  padding: 3,
                }}
              />
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 16,
                    letterSpacing: "1px",
                    lineHeight: 1.1,
                  }}
                >
                  JobStudy
                </div>
                <div
                  style={{
                    fontSize: 8.5,
                    letterSpacing: "2px",
                    fontWeight: 700,
                    color: "#B9CBEA",
                  }}
                >
                  SMART ACCESS
                </div>
              </div>
            </div>

            <div style={{ marginTop: "auto", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.18,
                  letterSpacing: "-0.5px",
                }}
              >
                {railTitle}
              </div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "#C6D5EE",
                  marginTop: 12,
                }}
              >
                {railSub}
              </div>

              {isRoles && (
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {BENEFITS.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 11,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.16)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          ...MI(15),
                          color: "#fff",
                        }}
                      >
                        {b.icon}
                      </span>
                      <span
                        style={{
                          fontSize: 12.5,
                          lineHeight: 1.5,
                          color: "#DCE7F7",
                          paddingTop: 2,
                        }}
                      >
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {showRoleInfo && (
                <div
                  style={{
                    marginTop: 24,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: 16,
                    padding: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ...MI(24),
                        color: "#fff",
                      }}
                    >
                      {roleObj[1]}
                    </span>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 800 }}>
                        {roleObj[3]}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#B9CBEA",
                          fontWeight: 600,
                          letterSpacing: ".3px",
                        }}
                      >
                        Выбранная роль
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.55,
                      color: "#D3E0F4",
                      marginTop: 12,
                    }}
                  >
                    {roleObj[4]}
                  </div>
                  <HoverBox
                    onClick={backToRoles}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 14,
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fff",
                      cursor: "pointer",
                      opacity: 0.9,
                    }}
                    hoverStyle={{ opacity: 1 }}
                  >
                    <span style={MI(16)}>arrow_back</span>Сменить роль
                  </HoverBox>
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: 24,
                fontSize: 10.5,
                color: "#8FA8D2",
                letterSpacing: ".3px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Демо-режим — данные хранятся в вашем браузере
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              background: "#fff",
            }}
          >
            <div
              key={view}
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "clamp(20px, 5vw, 44px) clamp(16px, 4vw, 46px)",
                animation: "jbFadeUp .34s ease both",
              }}
            >
              {/* ROLES */}
              {isRoles && (
                <>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "2px",
                      color: "#1D4E9E",
                    }}
                  >
                    ВХОД НА ПЛАТФОРМУ
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(20px, 4vw, 25px)",
                      fontWeight: 800,
                      color: "#16305E",
                      marginTop: 6,
                      letterSpacing: "-0.4px",
                    }}
                  >
                    Выберите вашу роль
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#64748B",
                      marginTop: 4,
                      lineHeight: 1.5,
                    }}
                  >
                    Выберите роль, чтобы продолжить в подходящий рабочий процесс.
                  </div>
                  <div
                    style={{
                      marginTop: 24,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))",
                      gap: 12,
                    }}
                  >
                    {ROLES.map((c) => (
                      <HoverBox
                        key={c[0]}
                        onClick={() => pickRole(c[0])}
                        style={{
                          background: "#fff",
                          border: "1px solid #E7EDF6",
                          borderRadius: 14,
                          padding: "14px 14px 12px",
                          cursor: "pointer",
                          transition:
                            "transform .18s ease,box-shadow .18s ease,border-color .18s ease",
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                        hoverStyle={{
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 34px rgba(18,41,79,0.13)",
                          borderColor: "#C7D6EE",
                        }}
                      >
                        <span
                          style={{
                            width: 42,
                            height: 42,
                            borderRadius: 12,
                            background: hex(c[2], 0.12),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            ...MI(22),
                            color: c[2],
                          }}
                        >
                          {c[1]}
                        </span>
                        <div
                          style={{
                            fontSize: 13.5,
                            fontWeight: 800,
                            color: "#16305E",
                            lineHeight: 1.25,
                          }}
                        >
                          {c[3]}
                        </div>
                        <div
                          style={{
                            fontSize: 11.5,
                            color: "#6B7A93",
                            lineHeight: 1.5,
                            flex: 1,
                          }}
                        >
                          {c[4]}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 11,
                            fontWeight: 800,
                            color: "#1D4E9E",
                          }}
                        >
                          Выбрать<span style={MI(14)}>arrow_forward</span>
                        </div>
                      </HoverBox>
                    ))}
                  </div>
                </>
              )}

              {/* LOGIN / REGISTER */}
              {isAuth && (
                <div style={{ maxWidth: 420, margin: "0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      borderBottom: "1px solid #EAEFF6",
                      marginBottom: 22,
                    }}
                  >
                    <div
                      onClick={goLogin}
                      style={{
                        padding: "0 2px 11px",
                        fontSize: 14,
                        fontWeight: 800,
                        cursor: "pointer",
                        color: loginTabColor,
                        borderBottom: `2.5px solid ${loginTabLine}`,
                        marginBottom: -1,
                        transition: "color .18s",
                      }}
                    >
                      Вход
                    </div>
                    <div
                      onClick={goRegister}
                      style={{
                        padding: "0 2px 11px",
                        fontSize: 14,
                        fontWeight: 800,
                        cursor: "pointer",
                        color: regTabColor,
                        borderBottom: `2.5px solid ${regTabLine}`,
                        marginBottom: -1,
                        transition: "color .18s",
                      }}
                    >
                      Регистрация
                    </div>
                  </div>

                  {isRegister && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <label
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#64748B",
                          letterSpacing: ".3px",
                          display: "block",
                        }}
                      >
                        Полное имя
                        <FocusInput
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setError("");
                          }}
                          placeholder="Иван Иванов"
                          style={inputStyle}
                        />
                      </label>
                      <label
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#64748B",
                          letterSpacing: ".3px",
                          display: "block",
                        }}
                      >
                        Телефон
                        <FocusInput
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            setError("");
                          }}
                          placeholder="+998 90 123 45 67"
                          style={inputStyle}
                        />
                      </label>
                    </div>
                  )}

                  <label
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#64748B",
                      letterSpacing: ".3px",
                      display: "block",
                      marginTop: isRegister ? 0 : 0,
                    }}
                  >
                    Электронная почта
                    <FocusInput
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      type="email"
                      placeholder="you@example.com"
                      style={inputStyle}
                    />
                  </label>

                  <label
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#64748B",
                      letterSpacing: ".3px",
                      display: "block",
                      marginTop: 14,
                    }}
                  >
                    Пароль
                    <span
                      style={{
                        position: "relative",
                        display: "block",
                        marginTop: 6,
                      }}
                    >
                      <FocusInput
                        value={pass}
                        onChange={(e) => {
                          setPass(e.target.value);
                          setError("");
                        }}
                        type={showPass ? "text" : "password"}
                        placeholder="••••••••"
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "12px 44px 12px 14px",
                          border: "1px solid #D8E1EF",
                          borderRadius: 10,
                          fontSize: 13.5,
                          fontFamily: "inherit",
                          background: "#F8FAFD",
                          outline: "none",
                          transition: "border-color .16s,background .16s",
                        }}
                      />
                      <span
                        onClick={() => setShowPass((v) => !v)}
                        style={{
                          position: "absolute",
                          right: 12,
                          top: "50%",
                          transform: "translateY(-50%)",
                          ...MI(19),
                          color: "#94A3B8",
                          cursor: "pointer",
                        }}
                      >
                        {showPass ? "visibility_off" : "visibility"}
                      </span>
                    </span>
                  </label>

                  {isRegister && (
                    <label
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#64748B",
                        letterSpacing: ".3px",
                        display: "block",
                        marginTop: 14,
                      }}
                    >
                      Подтвердите пароль
                      <FocusInput
                        value={confirm}
                        onChange={(e) => {
                          setConfirm(e.target.value);
                          setError("");
                        }}
                        type="password"
                        placeholder="••••••••"
                        style={inputStyle}
                      />
                    </label>
                  )}

                  {isLogin && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 14,
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#475569",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={remember}
                          onChange={() => setRemember((v) => !v)}
                          style={{
                            width: 16,
                            height: 16,
                            accentColor: "#1D4E9E",
                            cursor: "pointer",
                          }}
                        />
                        Запомнить меня
                      </label>
                      <span
                        onClick={goForgot}
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#1D4E9E",
                          cursor: "pointer",
                        }}
                      >
                        Забыли пароль?
                      </span>
                    </div>
                  )}

                  {isRegister && (
                    <label
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 9,
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: "#475569",
                        cursor: "pointer",
                        marginTop: 16,
                        lineHeight: 1.45,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={() => setAgree((v) => !v)}
                        style={{
                          width: 16,
                          height: 16,
                          marginTop: 1,
                          accentColor: "#1D4E9E",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      />
                      Я принимаю условия использования и политику конфиденциальности
                    </label>
                  )}

                  {!!error && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 14,
                        background: "#FDECEE",
                        border: "1px solid #F7C9CF",
                        borderRadius: 9,
                        padding: "10px 12px",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#C22B3E",
                      }}
                    >
                      <span style={MI(17)}>error</span>
                      {error}
                    </div>
                  )}

                  <HoverBox
                    onClick={submitAuth}
                    style={{
                      marginTop: 18,
                      width: "100%",
                      boxSizing: "border-box",
                      background: "linear-gradient(135deg,#16305E,#1D4E9E)",
                      color: "#fff",
                      borderRadius: 10,
                      padding: 14,
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: 800,
                      cursor: "pointer",
                      transition: "filter .18s,transform .18s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                    hoverStyle={{ filter: "brightness(1.12)", transform: "translateY(-1px)" }}
                  >
                    {loading && (
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          border: "2px solid rgba(255,255,255,0.4)",
                          borderTopColor: "#fff",
                          borderRadius: "50%",
                          animation: "jbSpin .7s linear infinite",
                          display: "inline-block",
                        }}
                      ></span>
                    )}
                    {submitLabel}
                  </HoverBox>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      margin: "20px 0 16px",
                      color: "#9AA7BC",
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ flex: 1, height: 1, background: "#E7EDF6" }}></span>
                    или продолжить через
                    <span style={{ flex: 1, height: 1, background: "#E7EDF6" }}></span>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                    }}
                  >
                    {SOCIALS.map((s) => (
                      <HoverBox
                        key={s[0]}
                        onClick={() => doSocial(s[0])}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          border: "1px solid #E2E8F0",
                          borderRadius: 10,
                          padding: 10,
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#334155",
                          cursor: "pointer",
                          background: "#fff",
                          transition: "background .16s,border-color .16s",
                        }}
                        hoverStyle={{ background: "#F5F8FD", borderColor: "#C7D6EE" }}
                      >
                        <span
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            background: s[2],
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 11,
                            fontWeight: 800,
                          }}
                        >
                          {s[1]}
                        </span>
                        {s[0]}
                      </HoverBox>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      marginTop: 12,
                      border: "1px dashed #D8E1EF",
                      borderRadius: 10,
                      padding: 10,
                      fontSize: 11.5,
                      fontWeight: 700,
                      color: "#94A3B8",
                      background: "#FBFCFE",
                    }}
                  >
                    <span style={MI(16)}>verified_user</span>OneID — скоро
                  </div>
                </div>
              )}

              {/* FORGOT */}
              {isForgot && (
                <div style={{ maxWidth: 400, margin: "0 auto" }}>
                  <div
                    onClick={goLogin}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#1D4E9E",
                      cursor: "pointer",
                      marginBottom: 20,
                    }}
                  >
                    <span style={MI(16)}>arrow_back</span>Вернуться ко входу
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(20px, 4vw, 22px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Восстановление пароля
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#64748B",
                      marginTop: 6,
                      lineHeight: 1.55,
                    }}
                  >
                    Введите e-mail, и мы отправим ссылку для сброса пароля.
                  </div>
                  {forgotSent && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 9,
                        marginTop: 20,
                        background: "#EAF6EE",
                        border: "1px solid #BEE3CA",
                        borderRadius: 10,
                        padding: 12,
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "#1E7A45",
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={MI(19)}>mark_email_read</span>
                      Ссылка для сброса отправлена на {email}
                    </div>
                  )}
                  {forgotForm && (
                    <>
                      <label
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#64748B",
                          letterSpacing: ".3px",
                          display: "block",
                          marginTop: 20,
                        }}
                      >
                        Электронная почта
                        <FocusInput
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                          }}
                          type="email"
                          placeholder="you@example.com"
                          style={{
                            marginTop: 6,
                            width: "100%",
                            boxSizing: "border-box",
                            padding: "12px 14px",
                            border: "1px solid #D8E1EF",
                            borderRadius: 10,
                            fontSize: 13.5,
                            fontFamily: "inherit",
                            background: "#F8FAFD",
                            outline: "none",
                          }}
                        />
                      </label>
                      {!!error && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginTop: 12,
                            background: "#FDECEE",
                            border: "1px solid #F7C9CF",
                            borderRadius: 9,
                            padding: "10px 12px",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#C22B3E",
                          }}
                        >
                          <span style={MI(17)}>error</span>
                          {error}
                        </div>
                      )}
                      <HoverBox
                        onClick={submitForgot}
                        style={{
                          marginTop: 18,
                          background: "linear-gradient(135deg,#16305E,#1D4E9E)",
                          color: "#fff",
                          borderRadius: 10,
                          padding: 14,
                          textAlign: "center",
                          fontSize: 14,
                          fontWeight: 800,
                          cursor: "pointer",
                          transition: "filter .18s",
                        }}
                        hoverStyle={{ filter: "brightness(1.12)" }}
                      >
                        Отправить ссылку
                      </HoverBox>
                    </>
                  )}
                </div>
              )}

              {/* OTP */}
              {isOtp && (
                <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
                  <span
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "#EAF1FB",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ...MI(28),
                      color: "#1D4E9E",
                      animation: "jbPop .4s ease both",
                    }}
                  >
                    sms
                  </span>
                  <div
                    style={{
                      fontSize: "clamp(20px, 4vw, 22px)",
                      fontWeight: 800,
                      color: "#16305E",
                      marginTop: 16,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Подтверждение входа
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#64748B",
                      marginTop: 6,
                      lineHeight: 1.55,
                    }}
                  >
                    Мы отправили 6-значный код на {masked}
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      marginTop: 10,
                      background: "#FFF7E6",
                      border: "1px solid #FBE1A8",
                      borderRadius: 8,
                      padding: "6px 12px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#A16207",
                    }}
                  >
                    <span style={MI(16)}>info</span>Для демонстрации код: {demoCode}
                  </div>
                  <div
                    data-otp-wrap="1"
                    style={{
                      display: "flex",
                      gap: 8,
                      justifyContent: "center",
                      marginTop: 22,
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5].map((c) => (
                      <input
                        key={c}
                        inputMode="numeric"
                        maxLength={1}
                        onInput={onOtpInput}
                        onKeyDown={onOtpKey}
                        style={{
                          width: "clamp(38px, 10vw, 46px)",
                          height: "clamp(48px, 10vw, 56px)",
                          textAlign: "center",
                          fontSize: 20,
                          fontWeight: 800,
                          color: "#16305E",
                          border: "1.5px solid #D8E1EF",
                          borderRadius: 10,
                          background: "#F8FAFD",
                          outline: "none",
                          fontFamily: "inherit",
                          transition: "border-color .16s,background .16s",
                        }}
                      />
                    ))}
                  </div>
                  {!!error && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        marginTop: 14,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#C22B3E",
                      }}
                    >
                      <span style={MI(16)}>error</span>
                      {error}
                    </div>
                  )}
                  <HoverBox
                    onClick={verifyOtp}
                    style={{
                      marginTop: 20,
                      background: "linear-gradient(135deg,#16305E,#1D4E9E)",
                      color: "#fff",
                      borderRadius: 10,
                      padding: 14,
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: 800,
                      cursor: "pointer",
                      transition: "filter .18s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                    hoverStyle={{ filter: "brightness(1.12)" }}
                  >
                    {loading && (
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          border: "2px solid rgba(255,255,255,0.4)",
                          borderTopColor: "#fff",
                          borderRadius: "50%",
                          animation: "jbSpin .7s linear infinite",
                          display: "inline-block",
                        }}
                      ></span>
                    )}
                    Подтвердить
                  </HoverBox>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    {resendText}
                    {canResend && (
                      <span
                        onClick={resend}
                        style={{
                          fontWeight: 800,
                          color: "#1D4E9E",
                          cursor: "pointer",
                          marginLeft: 4,
                        }}
                      >
                        Отправить код повторно
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* SUCCESS */}
              {isSuccess && (
                <div
                  style={{
                    maxWidth: 400,
                    margin: "0 auto",
                    textAlign: "center",
                    paddingTop: 8,
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      width: 80,
                      height: 80,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "#EAF6EE",
                        animation: "jbRing .5s ease both",
                      }}
                    ></span>
                    <span
                      style={{
                        position: "relative",
                        ...MI(44),
                        color: "#1E9E52",
                        animation: "jbPop .5s .1s ease both",
                      }}
                    >
                      check_circle
                    </span>
                  </span>
                  <div
                    style={{
                      fontSize: "clamp(20px, 4vw, 24px)",
                      fontWeight: 800,
                      color: "#16305E",
                      marginTop: 16,
                      letterSpacing: "-0.4px",
                    }}
                  >
                    Добро пожаловать, {successName}!
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 12,
                      background: "#EAF1FB",
                      borderRadius: 999,
                      padding: "6px 14px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#1D4E9E",
                    }}
                  >
                    <span style={MI(17)}>{roleObj[1]}</span>Вы вошли как {roleObj[3]}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "#64748B",
                      marginTop: 14,
                      lineHeight: 1.55,
                    }}
                  >
                    Личный кабинет скоро будет доступен. Ваш профиль сохранён в этом
                    браузере.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      marginTop: 24,
                      flexDirection: "column",
                    }}
                    className="success-actions"
                  >
                    <div
                      style={{
                        flex: 1,
                        background: "#F1F5FA",
                        color: "#B0BAC9",
                        borderRadius: 10,
                        padding: 13,
                        textAlign: "center",
                        fontSize: 13,
                        fontWeight: 800,
                        cursor: "default",
                      }}
                    >
                      Перейти в кабинет
                    </div>
                    <HoverBox
                      onClick={close}
                      style={{
                        flex: 1,
                        background: "linear-gradient(135deg,#16305E,#1D4E9E)",
                        color: "#fff",
                        borderRadius: 10,
                        padding: 13,
                        textAlign: "center",
                        fontSize: 13,
                        fontWeight: 800,
                        cursor: "pointer",
                        transition: "filter .18s",
                      }}
                      hoverStyle={{ filter: "brightness(1.12)" }}
                    >
                      Готово
                    </HoverBox>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}