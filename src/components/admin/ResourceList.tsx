"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { RESOURCES, type Column } from "@/lib/admin/resources";

function Icon({ name, size = 18, color }: { name: string; size?: number; color?: string }) {
  return <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: size, lineHeight: 1, color }}>{name}</span>;
}

const STATUS_META: Record<string, { label: string; bg: string; fg: string }> = {
  new: { label: "Новая", bg: "#E7EFFB", fg: "#1D4E9E" },
  in_progress: { label: "В работе", bg: "#FDF2D9", fg: "#B7791F" },
  done: { label: "Готово", bg: "#DDF3E8", fg: "#1E9968" },
  spam: { label: "Спам", bg: "#EEF1F6", fg: "#64748b" },
};

function Cell({ col, row }: { col: Column; row: Record<string, unknown> }) {
  const v = row[col.key];
  if (col.type === "image") {
    return v ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={String(v)} alt="" className="h-10 w-14 rounded-lg object-cover" style={{ border: "1px solid #E7EDF6" }} />
    ) : (
      <span className="text-[#cbd5e1]">—</span>
    );
  }
  if (col.type === "i18n") {
    const o = (v || {}) as Record<string, string>;
    const txt = o.en || o.ru || o.uz || Object.values(o)[0] || "";
    return <span>{txt || <span className="text-[#cbd5e1]">—</span>}</span>;
  }
  if (col.type === "bool") {
    return v ? (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold" style={{ background: "#DDF3E8", color: "#1E9968" }}>
        <Icon name="check" size={13} /> Да
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold" style={{ background: "#EEF1F6", color: "#64748b" }}>
        <Icon name="close" size={13} /> Нет
      </span>
    );
  }
  if (col.type === "date" && v) return <span className="text-[#64748b]">{new Date(String(v)).toLocaleDateString("ru-RU")}</span>;
  if (col.type === "status") {
    const st = STATUS_META[String(v)] || { label: String(v), bg: "#EEF1F6", fg: "#64748b" };
    return (
      <span className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ background: st.bg, color: st.fg }}>
        {st.label}
      </span>
    );
  }
  return <span>{v == null || v === "" ? <span className="text-[#cbd5e1]">—</span> : String(v)}</span>;
}

export function ResourceList({ resourceKey }: { resourceKey: string }) {
  const cfg = RESOURCES[resourceKey];
  const [rows, setRows] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(cfg.api, { cache: "no-store" });
    setRows(res.ok ? await res.json() : []);
    setLoading(false);
  }, [cfg.api]);

  useEffect(() => {
    load();
  }, [load]);

  async function remove(id: string | number) {
    if (!confirm("Удалить эту запись?")) return;
    await fetch(`${cfg.api}/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="mx-auto max-w-[1180px]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "#1D4E9E14", color: "#1D4E9E" }}>
            <Icon name={cfg.icon} size={24} />
          </div>
          <div>
            <h1 className="text-[22px] font-extrabold tracking-tight text-[#16305E]">{cfg.label}</h1>
            <p className="text-[13px] font-semibold text-[#64748b]">{rows.length} записей</p>
          </div>
        </div>
        {cfg.canCreate && (
          <Link
            href={`/admin/${resourceKey}/new`}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13.5px] font-bold text-white transition-all hover:opacity-95"
            style={{ background: "linear-gradient(135deg,#1D4E9E,#3D56D6)", boxShadow: "0 6px 18px rgba(29,78,158,.25)" }}
          >
            <Icon name="add" size={19} /> Добавить
          </Link>
        )}
      </div>

      {/* Table card */}
      <div className="mt-5 overflow-hidden rounded-2xl bg-white" style={{ border: "1px solid #E7EDF6", boxShadow: "0 6px 22px rgba(18,41,79,.05)" }}>
        <div className="overflow-x-auto">
          <table className="text-sm">
            <thead>
              <tr className="text-left text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]" style={{ background: "#f6f8fb", borderBottom: "1px solid #E7EDF6" }}>
                {cfg.columns.map((c) => (
                  <th key={c.key} className="px-5 py-3.5">{c.label}</th>
                ))}
                <th className="px-5 py-3.5 text-right">Действия</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={cfg.columns.length + 1} className="px-5 py-12 text-center text-[#94a3b8]">Загрузка…</td>
                </tr>
              )}
              {!loading && rows.length === 0 && (
                <tr>
                  <td colSpan={cfg.columns.length + 1} className="px-5 py-14 text-center">
                    <div className="flex flex-col items-center gap-2 text-[#b4bccb]">
                      <Icon name="inbox" size={38} />
                      <span className="text-[13px] font-semibold">Записей нет</span>
                    </div>
                  </td>
                </tr>
              )}
              {!loading &&
                rows.map((row, i) => (
                  <tr
                    key={String(row.id)}
                    className="transition-colors hover:bg-[#f6f8fb]"
                    style={{ borderTop: i === 0 ? undefined : "1px solid #EEF2F8" }}
                  >
                    {cfg.columns.map((c) => (
                      <td key={c.key} className="px-5 py-3.5 text-[#1e2536]">
                        <Cell col={c} row={row} />
                      </td>
                    ))}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/${resourceKey}/${row.id}`}
                          className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[12px] font-bold text-[#1D4E9E] transition-all hover:bg-[#E7EFFB]"
                          style={{ border: "1px solid #d5e2f5" }}
                        >
                          <Icon name="edit" size={15} /> Изменить
                        </Link>
                        <button
                          onClick={() => remove(row.id as string | number)}
                          className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[12px] font-bold text-[#C22B3E] transition-all hover:bg-[#FBE9EB]"
                          style={{ border: "1px solid #f0d4d8" }}
                        >
                          <Icon name="delete" size={15} /> Удалить
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
