"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { RESOURCES, I18N_LANGS, type Field } from "@/lib/admin/resources";

const inputCls = "w-full border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#3b7bf0]";
const labelCls = "text-xs font-semibold uppercase tracking-wider text-neutral-500";
type State = Record<string, unknown>;

async function uploadFile(file: File): Promise<string | null> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: fd });
  if (!res.ok) return null;
  return (await res.json()).url as string;
}

function emptyI18n(): Record<string, string> {
  const o: Record<string, string> = {};
  I18N_LANGS.forEach(([k]) => (o[k] = ""));
  return o;
}

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [busy, setBusy] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder="URL yoki yuklang" className={inputCls} />
        <label className="shrink-0 cursor-pointer border border-neutral-300 px-3 py-2 text-sm font-medium transition hover:border-[#3b7bf0]">
          {busy ? "…" : "Yuklash"}
          <input type="file" accept="image/*" className="hidden" onChange={async (e) => {
            const f = e.target.files?.[0]; if (!f) return; setBusy(true);
            const url = await uploadFile(f); setBusy(false); if (url) onChange(url);
          }} />
        </label>
      </div>
      {value && /\.(jpe?g|png|webp|gif|svg)$/i.test(value) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="h-24 w-auto border border-neutral-200 object-cover" />
      )}
    </div>
  );
}

function I18nField({ value, onChange, area }: { value: Record<string, string>; onChange: (v: Record<string, string>) => void; area?: boolean }) {
  const val = value || emptyI18n();
  const set = (lang: string, v: string) => onChange({ ...val, [lang]: v });
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {I18N_LANGS.map(([k, lbl]) => (
        <label key={k} className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-neutral-400">{lbl}</span>
          {area
            ? <textarea rows={3} dir={k === "ar" ? "rtl" : "ltr"} value={val[k] || ""} onChange={(e) => set(k, e.target.value)} className={inputCls} />
            : <input dir={k === "ar" ? "rtl" : "ltr"} value={val[k] || ""} onChange={(e) => set(k, e.target.value)} className={inputCls} />}
        </label>
      ))}
    </div>
  );
}

function SpecsField({ value, onChange }: { value: { k: Record<string, string>; v: Record<string, string> }[]; onChange: (v: unknown[]) => void }) {
  const rows = value || [];
  const set = (i: number, key: "k" | "v", nv: Record<string, string>) => onChange(rows.map((r, j) => (j === i ? { ...r, [key]: nv } : r)));
  const add = () => onChange([...rows, { k: emptyI18n(), v: emptyI18n() }]);
  const del = (i: number) => onChange(rows.filter((_, j) => j !== i));
  return (
    <div className="flex flex-col gap-3">
      {rows.map((r, i) => (
        <div key={i} className="border border-neutral-200 bg-neutral-50 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500">#{i + 1}</span>
            <button type="button" onClick={() => del(i)} className="text-xs text-red-600">O&apos;chirish</button>
          </div>
          <div className="mb-1 text-[10px] font-bold text-neutral-400">Nomi (k)</div>
          <I18nField value={r.k} onChange={(nv) => set(i, "k", nv)} />
          <div className="mb-1 mt-2 text-[10px] font-bold text-neutral-400">Qiymat (v)</div>
          <I18nField value={r.v} onChange={(nv) => set(i, "v", nv)} />
        </div>
      ))}
      <button type="button" onClick={add} className="self-start border border-dashed border-neutral-400 px-3 py-1.5 text-sm">+ Qator qo&apos;shish</button>
    </div>
  );
}

export function ResourceForm({ resourceKey, id }: { resourceKey: string; id: string }) {
  const cfg = RESOURCES[resourceKey];
  const router = useRouter();
  const isNew = id === "new";
  const [state, setState] = useState<State>({});
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const setField = useCallback((name: string, value: unknown) => setState((s) => ({ ...s, [name]: value })), []);

  useEffect(() => {
    if (isNew) {
      const init: State = {};
      cfg.fields.forEach((f) => {
        if (f.type === "i18n" || f.type === "i18nArea") init[f.name] = emptyI18n();
        else if (f.type === "boolean") init[f.name] = true;
        else if (f.type === "number") init[f.name] = 0;
        else if (f.type === "specs") init[f.name] = [];
        else if (f.type === "select") init[f.name] = f.options?.[0]?.value ?? "";
        else init[f.name] = "";
      });
      // defer to avoid synchronous setState in effect
      requestAnimationFrame(() => setState(init));
      return;
    }
    (async () => {
      const res = await fetch(`${cfg.api}/${id}`, { cache: "no-store" });
      if (res.ok) setState(await res.json());
      setLoading(false);
    })();
  }, [cfg, id, isNew]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setSaving(true);
    try {
      const payload: State = {};
      cfg.fields.forEach((f) => {
        if (f.type === "readonly") return;
        if (f.type === "number") payload[f.name] = Number(state[f.name] ?? 0);
        else if (f.type === "password") { if (state[f.name]) payload[f.name] = state[f.name]; }
        else if (f.type === "i18n" || f.type === "i18nArea") payload[f.name] = state[f.name] ?? emptyI18n();
        else if (f.type === "specs") payload[f.name] = state[f.name] ?? [];
        else payload[f.name] = state[f.name] ?? (f.type === "boolean" ? false : "");
      });
      const res = await fetch(isNew ? cfg.api : `${cfg.api}/${id}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) { const d = await res.json().catch(() => ({})); setError(d.error || "Saqlashda xatolik"); return; }
      router.push(`/admin/${resourceKey}`); router.refresh();
    } finally { setSaving(false); }
  }

  if (loading) return <div className="text-neutral-400">Yuklanmoqda…</div>;

  return (
    <div className="max-w-3xl">
      <button onClick={() => router.push(`/admin/${resourceKey}`)} className="mb-6 text-sm text-neutral-500 hover:text-neutral-900">← {cfg.label}</button>
      <h1 className="text-2xl font-bold">{isNew ? "Yangi yozuv" : "Tahrirlash"}</h1>
      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-5">
        {cfg.fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-1.5">
            <span className={labelCls}>{f.label}</span>
            {renderField(f, state, setField)}
          </div>
        ))}
        {error && <div className="border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-[#3b7bf0] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f6fed] disabled:opacity-60">{saving ? "Saqlanmoqda…" : "Saqlash"}</button>
          <button type="button" onClick={() => router.push(`/admin/${resourceKey}`)} className="border border-neutral-300 px-6 py-2.5 text-sm font-medium">Bekor qilish</button>
        </div>
      </form>
    </div>
  );
}

function renderField(f: Field, state: State, setField: (n: string, v: unknown) => void) {
  const val = (k: string) => (state[k] ?? "") as string;
  switch (f.type) {
    case "i18n": return <I18nField value={state[f.name] as Record<string, string>} onChange={(v) => setField(f.name, v)} />;
    case "i18nArea": return <I18nField value={state[f.name] as Record<string, string>} onChange={(v) => setField(f.name, v)} area />;
    case "textarea": return <textarea rows={4} value={val(f.name)} onChange={(e) => setField(f.name, e.target.value)} className={inputCls} />;
    case "number": return <input type="number" value={val(f.name)} onChange={(e) => setField(f.name, e.target.value)} className={`${inputCls} max-w-[140px]`} />;
    case "boolean": return (
      <label className="flex cursor-pointer items-center gap-2">
        <input type="checkbox" checked={!!state[f.name]} onChange={(e) => setField(f.name, e.target.checked)} className="h-4 w-4" />
        <span className="text-sm text-neutral-600">{state[f.name] ? "Ha" : "Yo'q"}</span>
      </label>
    );
    case "select": return (
      <select value={val(f.name)} onChange={(e) => setField(f.name, e.target.value)} className={`${inputCls} max-w-sm`}>
        {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    );
    case "password": return <input type="password" value={val(f.name)} onChange={(e) => setField(f.name, e.target.value)} placeholder="O'zgartirmaslik uchun bo'sh qoldiring" className={`${inputCls} max-w-sm`} />;
    case "image": return <ImageField value={val(f.name)} onChange={(v) => setField(f.name, v)} />;
    case "specs": return <SpecsField value={(state[f.name] as never) || []} onChange={(v) => setField(f.name, v)} />;
    case "readonly": return <div className="border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700">{val(f.name) || "—"}</div>;
    default: return <input value={val(f.name)} onChange={(e) => setField(f.name, e.target.value)} className={inputCls} />;
  }
}
