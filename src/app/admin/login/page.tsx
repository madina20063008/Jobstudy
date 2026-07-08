"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

function Icon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  return <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: size, lineHeight: 1, color }}>{name}</span>;
}

const FEATURES = [
  { icon: "workspace_premium", text: "Единая панель управления контентом" },
  { icon: "insights", text: "Заявки, лиды и обращения в реальном времени" },
  { icon: "public", text: "Узбекистан · Япония · Германия" },
];

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Не удалось войти");
        return;
      }
      router.replace(params.get("from") || "/admin");
      router.refresh();
    } catch {
      setError("Ошибка сети");
    } finally {
      setLoading(false);
    }
  }

  const inputWrap = "flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-3 transition-all";

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left brand panel */}
      <div
        className="relative hidden flex-col justify-between overflow-hidden p-12 text-white lg:flex"
        style={{ background: "linear-gradient(150deg,#0C2140 0%,#16305E 50%,#1D4E9E 100%)" }}
      >
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle,rgba(107,127,247,0.4),transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle,rgba(29,78,158,0.5),transparent 70%)" }} />

        <div className="relative flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl" style={{ background: "rgba(255,255,255,0.12)" }}>
            <Image src="/logos/jobstudy-icon.png" alt="JobStudy" width={32} height={32} className="object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-[18px] font-extrabold tracking-tight">JobStudy</div>
            <div className="text-[9px] font-bold tracking-[0.3em] text-[#9DB2E8]">INTERNATIONAL PLATFORM</div>
          </div>
        </div>

        <div className="relative">
          <h1 className="text-[34px] font-extrabold leading-tight tracking-tight">
            Панель<br />управления
          </h1>
          <p className="mt-3 text-[14px] font-semibold tracking-wide text-[#9DB2E8]">UZ · JAPAN · GERMANY</p>

          <ul className="mt-9 flex flex-col gap-4">
            {FEATURES.map((f) => (
              <li key={f.text} className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "rgba(107,127,247,0.22)", color: "#C9D2FF" }}>
                  <Icon name={f.icon} size={19} />
                </span>
                <span className="text-[14px] font-medium text-white/80">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative text-[12px] font-medium text-white/35">© JobStudy · Admin CMS</div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center bg-[#f6f8fb] px-6 py-12">
        <div className="w-full max-w-[400px]">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl" style={{ background: "#16305E" }}>
              <Image src="/logos/jobstudy-icon.png" alt="JobStudy" width={28} height={28} className="object-contain" />
            </div>
            <div className="text-[17px] font-extrabold tracking-tight text-[#16305E]">JobStudy</div>
          </div>

          <div className="rounded-2xl bg-white p-8" style={{ border: "1px solid #E7EDF6", boxShadow: "0 12px 40px rgba(18,41,79,.08)" }}>
            <h2 className="text-[22px] font-extrabold tracking-tight text-[#16305E]">Вход в панель</h2>
            <p className="mt-1.5 text-[14px] font-medium text-[#64748b]">Добро пожаловать в систему управления</p>

            <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Email</span>
                <div className={inputWrap} style={{ border: "1px solid #E7EDF6" }}>
                  <Icon name="mail" size={19} color="#94a3b8" />
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@jobstudy.uz"
                    className="w-full bg-transparent text-[14px] text-[#1e2536] outline-none placeholder:text-[#b4bccb]"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Пароль</span>
                <div className={inputWrap} style={{ border: "1px solid #E7EDF6" }}>
                  <Icon name="lock" size={19} color="#94a3b8" />
                  <input
                    type={show ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-[14px] text-[#1e2536] outline-none placeholder:text-[#b4bccb]"
                  />
                  <button type="button" onClick={() => setShow((s) => !s)} className="text-[#94a3b8] hover:text-[#1D4E9E]" aria-label="Показать пароль">
                    <Icon name={show ? "visibility_off" : "visibility"} size={19} />
                  </button>
                </div>
              </label>

              {error && (
                <div className="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold" style={{ background: "#FBE9EB", color: "#C22B3E" }}>
                  <Icon name="error" size={18} />
                  {error}
                </div>
              )}

              <button
                type="submit" disabled={loading}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[14px] font-bold text-white transition-all hover:opacity-95 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg,#1D4E9E,#3D56D6)", boxShadow: "0 8px 22px rgba(29,78,158,.28)" }}
              >
                {loading ? "Вход…" : "Войти"}
                {!loading && <Icon name="arrow_forward" size={19} />}
              </button>
            </form>
          </div>

          <p className="mt-5 text-center text-[12px] font-medium text-[#94a3b8]">Доступ только для авторизованных сотрудников</p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
