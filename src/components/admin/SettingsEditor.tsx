"use client";

import { useEffect, useState } from "react";

export function SettingsEditor() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/settings?key=site", { cache: "no-store" });
      const data = res.ok ? await res.json() : null;
      setText(JSON.stringify(data ?? {}, null, 2));
      setLoading(false);
    })();
  }, []);

  async function save() {
    setMsg(""); setError("");
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      setError("JSON formati noto'g'ri");
      return;
    }
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "site", valueJson: parsed }),
    });
    if (res.ok) setMsg("Saqlandi ✓");
    else setError("Saqlashda xatolik");
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold">Sayt sozlamalari</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Saytning statik matnlari (sarlavhalar, hero, about, kontaktlar) — trilingual JSON ko&apos;rinishida.
        Ro&apos;yxatli kontent (loyihalar, mahsulotlar, yangiliklar…) tegishli bo&apos;limlardan boshqariladi.
      </p>

      {loading ? (
        <div className="mt-6 text-neutral-400">Yuklanmoqda…</div>
      ) : (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
            className="mt-5 h-[60vh] w-full border border-neutral-300 bg-white p-4 font-mono text-xs leading-relaxed outline-none focus:border-[#3b7bf0]"
          />
          <div className="mt-3 flex items-center gap-3">
            <button onClick={save} className="bg-[#3b7bf0] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f6fed]">Saqlash</button>
            {msg && <span className="text-sm text-green-600">{msg}</span>}
            {error && <span className="text-sm text-red-600">{error}</span>}
          </div>
        </>
      )}
    </div>
  );
}
