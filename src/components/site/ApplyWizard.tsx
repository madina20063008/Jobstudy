"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { HoverBox } from "./primitives";
import { useJb } from "./JbProvider";

const MI = (size: number): CSSProperties => ({
  fontFamily: "'Material Symbols Outlined'",
  fontSize: size,
  lineHeight: 1,
});

/* ---- static data (verbatim from source) ---- */
const CONSULT_TYPES = [
  "Трудоустройство в Японии",
  "Трудоустройство в Германии",
  "Японский язык",
  "Немецкий язык",
  "Консультация по JLPT",
  "Профессиональное обучение",
  "Консультация для студентов",
  "Консультация для родителей",
  "Визовая консультация",
  "Консультация по документам",
  "Карьерное планирование",
  "Консультация для работодателей",
  "Инвестиционная консультация",
  "Общая информация",
];
const BTYPES = [
  "Государственное сотрудничество",
  "Сотрудничество с университетами",
  "Инвестиции",
  "Деловое партнёрство",
  "Подбор персонала",
  "Трансфер технологий",
  "Промышленное сотрудничество",
  "Сельское хозяйство",
  "Исследования",
  "Инновации",
  "Экспорт",
  "Импорт",
];

interface Office {
  city: string;
  address: string;
  c1: string;
  c2: string;
  specCount: number;
}
const OFFICES: Office[] = [
  {
    city: "Ташкент",
    address: "ул. Шота Руставели, 150, Яккасарайский район",
    c1: "#1D4E9E",
    c2: "#2E6FD0",
    specCount: 6,
  },
  {
    city: "Карши",
    address: "пр. Ислама Каримова, 24",
    c1: "#0D9488",
    c2: "#14B8A6",
    specCount: 4,
  },
  {
    city: "Шахрисабз",
    address: "ул. Ипак Йули, 12",
    c1: "#7C3AED",
    c2: "#9B5DE5",
    specCount: 3,
  },
  {
    city: "Денов",
    address: "ул. Бирлашган, 5",
    c1: "#B45309",
    c2: "#D97706",
    specCount: 3,
  },
  {
    city: "Термез",
    address: "пр. Мустакиллик, 40",
    c1: "#16305E",
    c2: "#2A5085",
    specCount: 4,
  },
];

interface Specialist {
  name: string;
  pos: string;
  langs: string;
  exp: string;
  avail: string;
  spec: string;
  color: string;
}
const SPECIALISTS: Specialist[] = [
  {
    name: "Азиза Каримова",
    pos: "Менеджер программы «Япония»",
    langs: "RU · UZ · JP",
    exp: "6 лет опыта",
    avail: "Свободна",
    spec: "Трудоустройство и стажировки в Японии",
    color: "#1D4E9E",
  },
  {
    name: "Дмитрий Ким",
    pos: "Менеджер программы «Германия»",
    langs: "RU · DE · EN",
    exp: "8 лет опыта",
    avail: "Свободен",
    spec: "Ausbildung и трудоустройство в Германии",
    color: "#0D9488",
  },
  {
    name: "Нилуфар Юсупова",
    pos: "Карьерный консультант",
    langs: "UZ · RU · EN",
    exp: "5 лет опыта",
    avail: "Свободна",
    spec: "Карьерное планирование и подготовка",
    color: "#7C3AED",
  },
  {
    name: "Бахтиёр Рахимов",
    pos: "Визовый специалист",
    langs: "UZ · RU · JP",
    exp: "7 лет опыта",
    avail: "Свободен",
    spec: "Визы и оформление документов",
    color: "#B45309",
  },
  {
    name: "Юки Танака",
    pos: "Преподаватель JLPT",
    langs: "JP · EN · RU",
    exp: "10 лет опыта",
    avail: "Свободна",
    spec: "Японский язык, подготовка к JLPT",
    color: "#E1132C",
  },
  {
    name: "Анна Мюллер",
    pos: "Преподаватель немецкого",
    langs: "DE · EN · RU",
    exp: "9 лет опыта",
    avail: "Свободна",
    spec: "Немецкий язык, подготовка к экзаменам",
    color: "#374151",
  },
  {
    name: "Сардор Алиев",
    pos: "HR-специалист",
    langs: "UZ · RU · EN",
    exp: "4 года опыта",
    avail: "Свободен",
    spec: "Подбор персонала и работодатели",
    color: "#059669",
  },
  {
    name: "Отабек Назаров",
    pos: "Менеджер по развитию бизнеса",
    langs: "UZ · RU · EN · JP",
    exp: "6 лет опыта",
    avail: "Свободен",
    spec: "Партнёрства и инвестиции",
    color: "#0369A1",
  },
  {
    name: "Феруза Хамидова",
    pos: "Директор",
    langs: "UZ · RU · EN",
    exp: "12 лет опыта",
    avail: "По записи",
    spec: "Общее руководство и сотрудничество",
    color: "#16305E",
  },
];

const FORMATS: [string, string, string][] = [
  ["Офис", "apartment", "#1D4E9E"],
  ["Онлайн", "videocam", "#0D9488"],
  ["Google Meet", "duo", "#059669"],
  ["Microsoft Teams", "groups", "#7C3AED"],
  ["Zoom", "video_camera_front", "#0369A1"],
  ["Телефонный звонок", "call", "#B45309"],
];
const SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "17:00",
];
const EVENTS: [string, string, string, string, string][] = [
  ["День карьеры Японии", "20 мая 2025", "Карьера", "work", "#1D4E9E"],
  ["День карьеры Германии", "27 мая 2025", "Карьера", "work", "#374151"],
  ["Семинар JLPT", "3 июня 2025", "Семинар", "menu_book", "#E1132C"],
  ["Семинар немецкого языка", "10 июня 2025", "Семинар", "translate", "#7C3AED"],
  ["Бизнес-форум", "17 июня 2025", "Форум", "forum", "#0D9488"],
  ["Конференция", "24 июня 2025", "Конференция", "co_present", "#0369A1"],
  ["Воркшоп", "1 июля 2025", "Воркшоп", "construction", "#059669"],
  ["Тренинг", "8 июля 2025", "Тренинг", "fitness_center", "#B45309"],
  ["День открытых дверей", "15 июля 2025", "Открытый", "meeting_room", "#DB2777"],
  ["Выставка", "22 июля 2025", "Выставка", "museum", "#475569"],
];
const LANGS = ["Узбекский", "Русский", "Английский", "Японский", "Немецкий"];
const COUNTRIES = ["Япония", "Германия", "Узбекистан"];
const DURATIONS = ["30 минут", "1 час", "1.5 часа", "2 часа"];
const ROOMS = ["Конференц-зал A", "Конференц-зал B", "Переговорная 1", "Онлайн"];
const WD = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const MONTHS = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

type Branch = "" | "consult" | "business" | "event" | "contact";
type Flow = "welcome" | "hub" | "branch";
type ScreenKey =
  | "welcome"
  | "hub"
  | "c_type"
  | "c_office"
  | "c_spec"
  | "date"
  | "time"
  | "format"
  | "btype"
  | "bdetails"
  | "epick"
  | "personal"
  | "kform"
  | "result";

interface Booking {
  id: string;
  type: Branch;
  ts: number;
  title: string;
  office: string;
  specialist: string;
  date: string;
  time: string;
  format: string;
  name: string;
  email: string;
  phone: string;
  meetingNo: string;
}

/* ---- helpers ---- */
function hex(c: string, a: number): string {
  const n = parseInt(c.slice(1), 16);
  return (
    "rgba(" +
    ((n >> 16) & 255) +
    "," +
    ((n >> 8) & 255) +
    "," +
    (n & 255) +
    "," +
    a +
    ")"
  );
}
function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((s || "").trim());
}
function pad(n: number): string {
  return n < 10 ? "0" + n : "" + n;
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
  fontWeight: 600,
  color: "#28374F",
};
const inputFocus: CSSProperties = { borderColor: "#1D4E9E", background: "#fff" };
const selectStyle: CSSProperties = {
  marginTop: 6,
  width: "100%",
  boxSizing: "border-box",
  padding: 12,
  border: "1px solid #D8E1EF",
  borderRadius: 10,
  fontSize: 13.5,
  fontFamily: "inherit",
  background: "#fff",
  outline: "none",
};

function stepsFor(branch: Branch): ScreenKey[] {
  if (branch === "consult")
    return ["c_type", "c_office", "c_spec", "date", "time", "format", "personal", "result"];
  if (branch === "business") return ["btype", "bdetails", "date", "time", "personal", "result"];
  if (branch === "event") return ["epick", "personal", "result"];
  if (branch === "contact") return ["kform", "result"];
  return [];
}

/* Focusable input/textarea that apply the source style-focus rules. */
function FInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [foc, setFoc] = useState(false);
  return (
    <input
      {...props}
      style={{ ...inputStyle, ...(foc ? inputFocus : {}) }}
      onFocus={() => setFoc(true)}
      onBlur={() => setFoc(false)}
    />
  );
}
function FTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [foc, setFoc] = useState(false);
  return (
    <textarea
      {...props}
      style={{
        marginTop: 6,
        width: "100%",
        boxSizing: "border-box",
        padding: 12,
        border: "1px solid #D8E1EF",
        borderRadius: 10,
        fontSize: 13.5,
        fontFamily: "inherit",
        background: foc ? "#fff" : "#F8FAFD",
        outline: "none",
        resize: "vertical",
        ...(foc ? { borderColor: "#1D4E9E" } : {}),
      }}
      onFocus={() => setFoc(true)}
      onBlur={() => setFoc(false)}
    />
  );
}

export function ApplyWizard() {
  const jb = useJb();
  const open = jb.applyOpen;

  const [entered, setEntered] = useState(false);
  const [flow, setFlow] = useState<Flow>("welcome");
  const [branch, setBranch] = useState<Branch>("");
  const [step, setStep] = useState(0);
  const [monthOffset, setMonthOffset] = useState(0);

  const [cType, setCType] = useState("");
  const [office, setOffice] = useState("");
  const [spec, setSpec] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [format, setFormat] = useState("");

  const [bType, setBType] = useState("");
  const [bCountry, setBCountry] = useState("Япония");
  const [bLang, setBLang] = useState("Русский");
  const [bParticipants, setBParticipants] = useState("");
  const [bDuration, setBDuration] = useState("1 час");
  const [bRoom, setBRoom] = useState("Конференц-зал A");

  const [event, setEvent] = useState("");

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [prefLang, setPrefLang] = useState("Русский");
  const [purpose, setPurpose] = useState("");
  const [notes, setNotes] = useState("");
  const [fileName, setFileName] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<Booking | null>(null);

  const enterRaf = useRef<number | null>(null);

  /* open → reset + enter animation; lock scroll */
  useEffect(() => {
    if (!open) return;
    // Defer state reset to avoid synchronous setState inside effect
    requestAnimationFrame(() => {
      setEntered(false);
      setFlow("welcome");
      setBranch("");
      setStep(0);
      setError("");
      setBooking(null);
      document.documentElement.style.overflow = "hidden";
      const r1 = requestAnimationFrame(() => {
        const r2 = requestAnimationFrame(() => setEntered(true));
        enterRaf.current = r2;
      });
      enterRaf.current = r1;
    });
    return () => {
      document.documentElement.style.overflow = "";
      if (enterRaf.current != null) cancelAnimationFrame(enterRaf.current);
    };
  }, [open]);

  /* Escape closes */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* Translate freshly-rendered modal content (the global [route,lang]
     translation effect doesn't fire when only the modal state changes). */
  useEffect(() => {
    if (open) jb.retranslate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, flow, branch, step, booking, jb.lang]);

  function resetAll() {
    setFlow("welcome");
    setBranch("");
    setStep(0);
    setCType("");
    setOffice("");
    setSpec("");
    setDate("");
    setTime("");
    setFormat("");
    setBType("");
    setEvent("");
    setFName("");
    setLName("");
    setPhone("");
    setEmail("");
    setCountry("");
    setCity("");
    setAge("");
    setPurpose("");
    setNotes("");
    setFileName("");
    setError("");
    setLoading(false);
    setBooking(null);
  }

  function close() {
    setEntered(false);
    document.documentElement.style.overflow = "";
    jb.closeApply();
    setTimeout(() => {
      resetAll();
    }, 250);
  }

  function go(nextBranch: Branch, presetType?: string) {
    setFlow("branch");
    setBranch(nextBranch);
    setError("");
    if (nextBranch === "consult" && presetType) {
      setCType(presetType);
      setStep(1);
    } else if (nextBranch === "business" && presetType) {
      setBType(presetType);
      setStep(1);
    } else setStep(0);
  }

  const steps = stepsFor(branch);
  const screen: ScreenKey =
    flow === "welcome" ? "welcome" : flow === "hub" ? "hub" : steps[step] || "welcome";

  function canNext(sc: ScreenKey): true | string {
    if (sc === "c_type") return !!cType || "Выберите тип консультации";
    if (sc === "c_office") return !!office || "Выберите офис";
    if (sc === "c_spec") return !!spec || "Выберите специалиста";
    if (sc === "date") return !!date || "Выберите дату";
    if (sc === "time") return !!time || "Выберите время";
    if (sc === "format") return !!format || "Выберите формат встречи";
    if (sc === "btype") return !!bType || "Выберите тип встречи";
    if (sc === "bdetails")
      return (!!bCountry && !!bLang && !!bParticipants) || "Заполните детали встречи";
    if (sc === "epick") return !!event || "Выберите мероприятие";
    if (sc === "personal") {
      if (!fName.trim() || !lName.trim()) return "Укажите имя и фамилию";
      if (!phone.trim()) return "Укажите телефон";
      if (!isEmail(email)) return "Введите корректный e-mail";
      return true;
    }
    if (sc === "kform") {
      if (!fName.trim()) return "Укажите имя";
      if (!isEmail(email)) return "Введите корректный e-mail";
      if (!notes.trim()) return "Напишите сообщение";
      return true;
    }
    return true;
  }

  function next() {
    if (loading) return;
    if (flow === "welcome") {
      setFlow("hub");
      setError("");
      return;
    }
    const cur = steps[step];
    const ok = canNext(cur);
    if (ok !== true) {
      setError(ok);
      return;
    }
    const nextKey = steps[step + 1];
    if (nextKey === "result") {
      finalize();
      return;
    }
    setStep(step + 1);
    setError("");
  }

  function back() {
    if (flow === "hub") {
      setFlow("welcome");
      setError("");
      return;
    }
    if (step > 0) {
      setStep(step - 1);
      setError("");
      return;
    }
    setFlow("hub");
    setBranch("");
    setError("");
  }

  function genId(prefix: string): string {
    const d = new Date();
    const r = Math.floor(1000 + Math.random() * 9000);
    return prefix + "-" + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + "-" + r;
  }

  function finalize() {
    setLoading(true);
    setError("");
    setTimeout(() => {
      const b = branch;
      const prefix =
        b === "consult" ? "JB-C" : b === "business" ? "JB-B" : b === "event" ? "JB-E" : "JB-M";
      const id = genId(prefix);
      const bk: Booking = {
        id,
        type: b,
        ts: Date.now(),
        title: b === "consult" ? cType : b === "business" ? bType : b === "event" ? event : "Обращение",
        office,
        specialist: spec,
        date,
        time,
        format,
        name: (fName + " " + lName).trim(),
        email,
        phone,
        meetingNo: "MTG-" + Math.floor(100000 + Math.random() * 900000),
      };
      // persist locally (matches the original client-only behavior)
      try {
        const arr = JSON.parse(localStorage.getItem("jb-bookings") || "[]");
        arr.push(bk);
        localStorage.setItem("jb-bookings", JSON.stringify(arr));
      } catch {
        /* ignore */
      }
      // best-effort POST of the full application; never block success on the network
      try {
        void fetch("/api/applications", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...bk,
            branch: b,
            cType,
            bType,
            event,
            bCountry,
            bLang,
            bParticipants,
            bDuration,
            bRoom,
            country,
            city,
            age,
            prefLang,
            purpose,
            notes,
            fileName,
          }),
        }).catch(() => {});
      } catch {
        /* ignore */
      }
      // register a lightweight session for the applicant
      if (bk.name || bk.email)
        jb.setSession({ name: bk.name || undefined, email: bk.email || undefined });

      setLoading(false);
      setBooking(bk);
      const rs = stepsFor(b);
      setStep(rs.indexOf("result"));
      setTimeout(() => drawQR(id + "|" + bk.title), 120);
    }, 850);
  }

  function drawQR(text: string) {
    const c = document.getElementById("jb-qr") as HTMLCanvasElement | null;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const N = 25,
      size = 132,
      m = size / N;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, size, size);
    let h = 0;
    for (let i = 0; i < text.length; i++) h = (h * 131 + text.charCodeAt(i)) >>> 0;
    const rnd = () => {
      h = (h * 1103515245 + 12345) & 0x7fffffff;
      return h / 0x7fffffff;
    };
    const grid = Array.from({ length: N }, () => new Array<boolean>(N).fill(false));
    const finder = (r: number, cc: number) => {
      for (let y = 0; y < 7; y++)
        for (let x = 0; x < 7; x++) {
          const on =
            x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4);
          grid[r + y][cc + x] = on;
        }
    };
    const reserved = (r: number, cc: number) =>
      (r < 8 && cc < 8) || (r < 8 && cc >= N - 8) || (r >= N - 8 && cc < 8);
    finder(0, 0);
    finder(0, N - 7);
    finder(N - 7, 0);
    for (let i = 8; i < N - 8; i++) {
      grid[6][i] = i % 2 === 0;
      grid[i][6] = i % 2 === 0;
    }
    for (let r = 0; r < N; r++)
      for (let cc = 0; cc < N; cc++) {
        if (!reserved(r, cc) && !(r === 6 || cc === 6)) grid[r][cc] = rnd() > 0.52;
      }
    for (let y = 0; y < 5; y++)
      for (let x = 0; x < 5; x++) {
        const on = x === 0 || x === 4 || y === 0 || y === 4 || (x === 2 && y === 2);
        grid[N - 9 + y][N - 9 + x] = on;
      }
    ctx.fillStyle = "#16305E";
    for (let r = 0; r < N; r++)
      for (let cc = 0; cc < N; cc++) if (grid[r][cc]) ctx.fillRect(cc * m, r * m, m + 0.5, m + 0.5);
  }

  function downloadIcs() {
    const b = booking;
    if (!b) return;
    const dt = new Date();
    const stamp = dt.getFullYear() + pad(dt.getMonth() + 1) + pad(dt.getDate()) + "T090000";
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//JobStudy//RU",
      "BEGIN:VEVENT",
      "UID:" + b.id + "@jobstudy",
      "DTSTAMP:" + stamp,
      "SUMMARY:" + b.title + " — JobStudy",
      "DESCRIPTION:" + b.id + " / " + (b.meetingNo || ""),
      "LOCATION:" + (b.office || "JobStudy"),
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = b.id + ".ics";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* month/calendar computation (mirrors monthData) */
  function monthData() {
    const base = new Date();
    base.setDate(1);
    const dt = new Date(base.getFullYear(), base.getMonth() + monthOffset, 1);
    const y = dt.getFullYear(),
      mo = dt.getMonth();
    const first = new Date(y, mo, 1);
    const startDow = (first.getDay() + 6) % 7;
    const days = new Date(y, mo + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const holidays = ["1-1", "3-8", "3-21", "9-1", "12-8"];
    const cells: (
      | { d: number; iso: string; disabled: boolean; holiday: boolean; label: string }
      | null
    )[] = [];
    for (let i = 0; i < startDow; i++) cells.push(null);
    for (let d = 1; d <= days; d++) {
      const dd = new Date(y, mo, d);
      const dow = (dd.getDay() + 6) % 7;
      const iso = y + "-" + pad(mo + 1) + "-" + pad(d);
      const past = dd < today;
      const weekend = dow >= 5;
      const holiday = holidays.indexOf((mo + 1) + "-" + d) !== -1;
      cells.push({
        d,
        iso,
        disabled: past || weekend || holiday,
        holiday,
        label: d + " " + MONTHS[mo],
      });
    }
    return {
      y,
      mo,
      label: MONTHS[mo][0].toUpperCase() + MONTHS[mo].slice(1) + " " + y,
      cells,
    };
  }

  if (!open) return null;

  const md = monthData();
  const dateObj = date ? new Date(date) : null;
  const dateLabel = dateObj
    ? dateObj.getDate() + " " + MONTHS[dateObj.getMonth()] + " " + dateObj.getFullYear()
    : "";

  /* step rail */
  const labelMap: Record<string, string> = {
    c_type: "Тип консультации",
    c_office: "Офис",
    c_spec: "Специалист",
    date: "Дата",
    time: "Время",
    format: "Формат",
    personal: "Ваши данные",
    result: "Подтверждение",
    btype: "Тип встречи",
    bdetails: "Детали встречи",
    epick: "Мероприятие",
    kform: "Сообщение",
  };
  const curIdx = step;
  const stepList = steps.map((k, i) => ({
    label: labelMap[k],
    mark: i < curIdx ? "check" : i + 1 + "",
    dotBg: i < curIdx ? "#2BD07A" : i === curIdx ? "#fff" : "rgba(255,255,255,0.08)",
    dotColor: i < curIdx ? "#0C3D22" : i === curIdx ? "#16305E" : "#9FB6DC",
    dotBorder: i <= curIdx ? "transparent" : "rgba(255,255,255,0.25)",
    color: i === curIdx ? "#fff" : i < curIdx ? "#DCE7F7" : "#8FA8D2",
    weight: (i === curIdx ? 800 : 600) as number,
  }));

  const branchTitleMap: Record<string, string> = {
    consult: "Бронирование консультации",
    business: "Деловая встреча",
    event: "Регистрация",
    contact: "Обращение",
  };
  const showSteps = flow === "branch";
  const introTitle = flow === "welcome" ? "Ваш путь начинается здесь" : "Чем мы можем помочь?";
  const introSub =
    flow === "welcome"
      ? "Пройдите несколько простых шагов, чтобы подать заявку, записаться на консультацию или встречу."
      : "Выберите нужное действие справа — мы подберём подходящий сценарий.";

  const welcomeBadges = [
    { icon: "school", label: "Обучение" },
    { icon: "flight_takeoff", label: "Работа" },
    { icon: "handshake", label: "Партнёрство" },
  ];

  const hubDefs: [string, string, string, () => void][] = [
    ["work", "Заявка на программу Японии", "#1D4E9E", () => go("consult", "Трудоустройство в Японии")],
    ["work", "Заявка на программу Германии", "#374151", () => go("consult", "Трудоустройство в Германии")],
    ["support_agent", "Записаться на консультацию", "#0D9488", () => go("consult")],
    ["groups", "Деловая встреча", "#7C3AED", () => go("business")],
    ["confirmation_number", "Регистрация на мероприятие", "#DB2777", () => go("event")],
    ["business_center", "Стать работодателем", "#059669", () => go("business", "Подбор персонала")],
    ["handshake", "Стать международным партнёром", "#B45309", () => go("business", "Деловое партнёрство")],
    ["trending_up", "Стать инвестором", "#0369A1", () => go("business", "Инвестиции")],
    ["mail", "Связаться с институтом", "#16305E", () => go("contact")],
  ];

  /* result summary */
  let resultTitle = "",
    resultSub = "",
    idLabel = "НОМЕР БРОНИ";
  let summaryRows: { k: string; v: string }[] = [];
  if (booking) {
    const b = booking;
    if (b.type === "consult") {
      resultTitle = "Бронирование подтверждено";
      resultSub = "Ваша консультация успешно забронирована.";
      summaryRows = [
        { k: "Тип", v: b.title },
        { k: "Офис", v: b.office },
        { k: "Специалист", v: b.specialist },
        { k: "Дата и время", v: dateLabel + ", " + b.time },
        { k: "Формат", v: b.format },
      ];
    } else if (b.type === "business") {
      resultTitle = "Встреча запланирована";
      resultSub = "Ваша деловая встреча успешно запланирована.";
      idLabel = "НОМЕР ВСТРЕЧИ";
      summaryRows = [
        { k: "Тип", v: b.title },
        { k: "Страна", v: bCountry },
        { k: "Язык", v: bLang },
        { k: "Дата и время", v: dateLabel + ", " + b.time },
        { k: "Длительность", v: bDuration },
      ];
    } else if (b.type === "event") {
      resultTitle = "Вы зарегистрированы";
      resultSub = "Ваш цифровой билет готов.";
      idLabel = "НОМЕР БИЛЕТА";
      summaryRows = [
        { k: "Мероприятие", v: b.title },
        { k: "Участник", v: b.name },
        { k: "Email", v: b.email },
      ];
    } else {
      resultTitle = "Сообщение отправлено";
      resultSub = "Мы свяжемся с вами в ближайшее время.";
      idLabel = "НОМЕР ОБРАЩЕНИЯ";
      summaryRows = [
        { k: "Имя", v: b.name || fName },
        { k: "Email", v: b.email },
      ];
    }
  }

  const isLast = steps[step + 1] === "result";
  const showNav = screen !== "result";
  const nextLabel =
    flow === "welcome"
      ? "Начать"
      : isLast
      ? branch === "contact"
        ? "Отправить"
        : "Подтвердить"
      : "Далее";
  const nextIcon = isLast ? "check" : "arrow_forward";

  const overlayStyle: CSSProperties = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    height: "100vh",
    zIndex: 2100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    boxSizing: "border-box",
    background: `rgba(8,16,32,${entered ? 0.6 : 0})`,
    backdropFilter: `blur(${entered ? 7 : 0}px)`,
    WebkitBackdropFilter: `blur(${entered ? 7 : 0}px)`,
    transition: "background .3s ease,backdrop-filter .3s ease",
  };
  const panelStyle: CSSProperties = {
    width: "min(1160px,100%)",
    maxHeight: "min(800px,95vh)",
    background: "#F7F9FC",
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

  return (
    <>
      <style>{`
@keyframes jbWzFade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes jbWzSpin{to{transform:rotate(360deg)}}
@keyframes jbWzPop{0%{opacity:0;transform:scale(.5)}60%{transform:scale(1.12)}100%{opacity:1;transform:scale(1)}}
@keyframes jbWzRing{0%{transform:scale(.5);opacity:0}100%{transform:scale(1);opacity:1}}
.rail-desktop{display:none}
.result-actions{flex-direction:column}
@media (min-width:768px){.rail-desktop{display:flex}}
@media (min-width:480px){.result-actions{flex-direction:row}}
`}</style>
      <div onClick={close} style={overlayStyle}>
        <div onClick={(e) => e.stopPropagation()} style={panelStyle}>
          <HoverBox
            as="button"
            onClick={close}
            title="Закрыть"
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 6,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.16)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              transition: "background .18s",
              border: "none",
              padding: 0,
            }}
            hoverStyle={{ background: "rgba(255,255,255,0.3)" }}
          >
            <span style={MI(20)}>close</span>
          </HoverBox>

          {/* LEFT RAIL - hidden on mobile, shown on larger screens */}
          <div
            style={{
              display: "none",
              flex: "0 0 280px",
              maxWidth: 280,
              background: "linear-gradient(165deg,#16305E 0%,#1D4E9E 100%)",
              color: "#fff",
              padding: "28px 24px",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
            className="rail-desktop"
          >
            <div
              style={{
                position: "absolute",
                top: -70,
                right: -70,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/jobstudy-icon.png"
                alt="JobStudy"
                style={{
                  width: 38,
                  height: 38,
                  objectFit: "contain",
                  background: "#fff",
                  borderRadius: 10,
                  padding: 2,
                }}
              />
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 14.5,
                    letterSpacing: ".6px",
                    lineHeight: 1.1,
                  }}
                >
                  JobStudy
                </div>
                <div
                  style={{
                    fontSize: 7.5,
                    letterSpacing: "2px",
                    fontWeight: 700,
                    color: "#B9CBEA",
                  }}
                >
                  ЦЕНТР ЗАЯВОК
                </div>
              </div>
            </div>

            {showSteps && (
              <div style={{ marginTop: 28, position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".4px",
                    color: "#9FB6DC",
                    marginBottom: 14,
                  }}
                >
                  {branchTitleMap[branch] || ""}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {stepList.map((st, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "7px 0",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 800,
                          background: st.dotBg,
                          color: st.dotColor,
                          border: "1.5px solid " + st.dotBorder,
                          fontFamily: "'Material Symbols Outlined'",
                        }}
                      >
                        {st.mark}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: st.weight,
                          color: st.color,
                        }}
                      >
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!showSteps && (
              <div style={{ marginTop: "auto", position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 24px)",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: "-0.4px",
                  }}
                >
                  {introTitle}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.6,
                    color: "#C6D5EE",
                    marginTop: 10,
                  }}
                >
                  {introSub}
                </div>
              </div>
            )}

            <div
              style={{
                marginTop: "auto",
                paddingTop: 20,
                fontSize: 10,
                color: "#8FA8D2",
                position: "relative",
                zIndex: 1,
              }}
            >
              Демо-режим — заявки сохраняются в браузере
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              background: "#F7F9FC",
            }}
          >
            <div
              key={screen}
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "clamp(20px, 4vw, 40px) clamp(16px, 4vw, 44px)",
                animation: "jbWzFade .32s ease both",
              }}
            >
              {/* WELCOME */}
              {screen === "welcome" && (
                <div style={{ maxWidth: 560, margin: "4px auto 0", textAlign: "center" }}>
                  <span
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 18,
                      background: "linear-gradient(135deg,#EAF1FB,#D6E4FA)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Material Symbols Outlined'",
                      fontSize: 34,
                      color: "#1D4E9E",
                      animation: "jbWzPop .6s ease both",
                    }}
                  >
                    public
                  </span>
                  <div
                    style={{
                      fontSize: "clamp(22px, 4vw, 28px)",
                      fontWeight: 800,
                      color: "#16305E",
                      marginTop: 20,
                      letterSpacing: "-0.6px",
                      lineHeight: 1.2,
                    }}
                  >
                    Добро пожаловать на Платформу международного сотрудничества
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(13px, 1.5vw, 15px)",
                      color: "#5B6B85",
                      marginTop: 12,
                      lineHeight: 1.6,
                    }}
                  >
                    Начните свой путь с Японией, Германией и будущими
                    международными возможностями.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 20,
                      marginTop: 28,
                      flexWrap: "wrap",
                    }}
                  >
                    {welcomeBadges.map((w, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <span
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: "#fff",
                            boxShadow: "0 8px 22px rgba(18,41,79,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Material Symbols Outlined'",
                            fontSize: 22,
                            color: "#1D4E9E",
                          }}
                        >
                          {w.icon}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#3A4C6E",
                          }}
                        >
                          {w.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HUB */}
              {screen === "hub" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 22px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    Что вы хотите сделать?
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12.5px, 1.3vw, 13.5px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Выберите один вариант, чтобы продолжить.
                  </div>
                  <div
                    style={{
                      marginTop: 20,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))",
                      gap: 12,
                    }}
                  >
                    {hubDefs.map((h, i) => (
                      <HoverBox
                        key={i}
                        onClick={h[3]}
                        style={{
                          background: "#fff",
                          border: "1px solid #E7EDF6",
                          borderRadius: 14,
                          padding: 14,
                          cursor: "pointer",
                          transition: "transform .18s,box-shadow .18s,border-color .18s",
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                        hoverStyle={{
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 34px rgba(18,41,79,0.13)",
                          borderColor: "#C7D6EE",
                        }}
                      >
                        <span
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 11,
                            background: hex(h[2], 0.12),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Material Symbols Outlined'",
                            fontSize: 20,
                            color: h[2],
                          }}
                        >
                          {h[0]}
                        </span>
                        <div
                          style={{
                            fontSize: "clamp(12.5px, 1.2vw, 14.5px)",
                            fontWeight: 800,
                            color: "#16305E",
                            lineHeight: 1.3,
                          }}
                        >
                          {h[1]}
                        </div>
                      </HoverBox>
                    ))}
                  </div>
                </>
              )}

              {/* CONSULT TYPE */}
              {screen === "c_type" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Тип консультации
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Выберите направление, которое вас интересует.
                  </div>
                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
                      gap: 10,
                    }}
                  >
                    {CONSULT_TYPES.map((t) => {
                      const on = cType === t;
                      return (
                        <HoverBox
                          key={t}
                          onClick={() => {
                            setCType(t);
                            setError("");
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            background: "#fff",
                            border: "1.5px solid " + (on ? "#1D4E9E" : "#E7EDF6"),
                            borderRadius: 11,
                            padding: "12px 13px",
                            cursor: "pointer",
                            transition: "border-color .16s,box-shadow .16s",
                          }}
                          hoverStyle={{
                            borderColor: "#1D4E9E",
                            boxShadow: "0 8px 20px rgba(18,41,79,0.08)",
                          }}
                        >
                          <span
                            style={{
                              flexShrink: 0,
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              border: "2px solid " + (on ? "#1D4E9E" : "#C7D0DE"),
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <span
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: on ? "#1D4E9E" : "transparent",
                              }}
                            />
                          </span>
                          <span
                            style={{
                              fontSize: "clamp(12px, 1.2vw, 13.5px)",
                              fontWeight: 700,
                              color: "#28374F",
                              lineHeight: 1.3,
                            }}
                          >
                            {t}
                          </span>
                        </HoverBox>
                      );
                    })}
                  </div>
                </>
              )}

              {/* OFFICE */}
              {screen === "c_office" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Выберите офис
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Все офисы работают Пн–Пт, 09:00–18:00.
                  </div>
                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
                      gap: 14,
                    }}
                  >
                    {OFFICES.map((o) => {
                      const on = office === o.city;
                      return (
                        <HoverBox
                          key={o.city}
                          onClick={() => {
                            setOffice(o.city);
                            setError("");
                          }}
                          style={{
                            background: "#fff",
                            border: "1.5px solid " + (on ? "#1D4E9E" : "#E7EDF6"),
                            borderRadius: 14,
                            overflow: "hidden",
                            cursor: "pointer",
                            transition: "border-color .16s,box-shadow .16s",
                          }}
                          hoverStyle={{
                            borderColor: "#1D4E9E",
                            boxShadow: "0 12px 28px rgba(18,41,79,0.1)",
                          }}
                        >
                          <div
                            style={{
                              height: 80,
                              background: "linear-gradient(135deg," + o.c1 + "," + o.c2 + ")",
                              position: "relative",
                              display: "flex",
                              alignItems: "flex-end",
                              padding: "10px 12px",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                fontFamily: "'Material Symbols Outlined'",
                                fontSize: 18,
                                color: "rgba(255,255,255,0.9)",
                              }}
                            >
                              location_city
                            </span>
                            <span
                              style={{
                                fontSize: 15,
                                fontWeight: 800,
                                color: "#fff",
                                textShadow: "0 1px 8px rgba(0,0,0,0.25)",
                              }}
                            >
                              {o.city}
                            </span>
                          </div>
                          <div style={{ padding: "12px 14px" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 6,
                                fontSize: 11.5,
                                color: "#4A5B78",
                                lineHeight: 1.5,
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Material Symbols Outlined'",
                                  fontSize: 15,
                                  color: "#1D4E9E",
                                }}
                              >
                                place
                              </span>
                              {o.address}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 10,
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 10.5,
                                  fontWeight: 700,
                                  color: "#1E9E52",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 4,
                                }}
                              >
                                <span
                                  style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#1E9E52",
                                  }}
                                />
                                {o.specCount} специалистов
                              </span>
                              <span
                                style={{
                                  fontSize: 10.5,
                                  fontWeight: 800,
                                  color: "#1D4E9E",
                                }}
                              >
                                Выбрать →
                              </span>
                            </div>
                          </div>
                        </HoverBox>
                      );
                    })}
                  </div>
                </>
              )}

              {/* SPECIALIST */}
              {screen === "c_spec" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Выберите специалиста
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Доступные консультанты в офисе {office}.
                  </div>
                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
                      gap: 12,
                    }}
                  >
                    {SPECIALISTS.map((p) => {
                      const on = spec === p.name;
                      const initials = p.name
                        .split(" ")
                        .map((x) => x[0])
                        .join("")
                        .slice(0, 2);
                      return (
                        <HoverBox
                          key={p.name}
                          onClick={() => {
                            setSpec(p.name);
                            setError("");
                          }}
                          style={{
                            background: "#fff",
                            border: "1.5px solid " + (on ? "#1D4E9E" : "#E7EDF6"),
                            borderRadius: 14,
                            padding: 14,
                            cursor: "pointer",
                            transition: "border-color .16s,box-shadow .16s",
                            display: "flex",
                            gap: 12,
                          }}
                          hoverStyle={{
                            borderColor: "#1D4E9E",
                            boxShadow: "0 12px 28px rgba(18,41,79,0.1)",
                          }}
                        >
                          <span
                            style={{
                              flexShrink: 0,
                              width: 44,
                              height: 44,
                              borderRadius: 12,
                              background: p.color,
                              color: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 16,
                              fontWeight: 800,
                            }}
                          >
                            {initials}
                          </span>
                          <div style={{ minWidth: 0 }}>
                            <div
                              style={{
                                fontSize: "clamp(13px, 1.3vw, 14.5px)",
                                fontWeight: 800,
                                color: "#16305E",
                              }}
                            >
                              {p.name}
                            </div>
                            <div
                              style={{
                                fontSize: "clamp(10.5px, 1vw, 12px)",
                                fontWeight: 700,
                                color: "#1D4E9E",
                                marginTop: 1,
                              }}
                            >
                              {p.pos}
                            </div>
                            <div
                              style={{
                                fontSize: "clamp(10px, 1vw, 11.5px)",
                                color: "#6B7A93",
                                marginTop: 5,
                                lineHeight: 1.5,
                              }}
                            >
                              {p.spec}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 4,
                                marginTop: 7,
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 9,
                                  fontWeight: 700,
                                  color: "#3A4C6E",
                                  background: "#EEF3FA",
                                  borderRadius: 5,
                                  padding: "2px 6px",
                                }}
                              >
                                {p.langs}
                              </span>
                              <span
                                style={{
                                  fontSize: 9,
                                  fontWeight: 700,
                                  color: "#8A5A00",
                                  background: "#FFF3DC",
                                  borderRadius: 5,
                                  padding: "2px 6px",
                                }}
                              >
                                {p.exp}
                              </span>
                              <span
                                style={{
                                  fontSize: 9,
                                  fontWeight: 700,
                                  color: "#1E9E52",
                                  background: "#E7F6EC",
                                  borderRadius: 5,
                                  padding: "2px 6px",
                                }}
                              >
                                {p.avail}
                              </span>
                            </div>
                          </div>
                        </HoverBox>
                      );
                    })}
                  </div>
                </>
              )}

              {/* DATE */}
              {screen === "date" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Выберите дату
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Рабочие часы: Пн–Пт, 09:00–18:00. Выходные и праздники
                    недоступны.
                  </div>
                  <div
                    style={{
                      maxWidth: 440,
                      margin: "18px auto 0",
                      background: "#fff",
                      border: "1px solid #E7EDF6",
                      borderRadius: 16,
                      padding: 16,
                      boxShadow: "0 12px 30px rgba(18,41,79,0.07)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <span
                        onClick={() => {
                          if (monthOffset > 0) setMonthOffset(monthOffset - 1);
                        }}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "#F1F5FA",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontFamily: "'Material Symbols Outlined'",
                          fontSize: 17,
                          color: monthOffset > 0 ? "#1D4E9E" : "#C7D0DE",
                        }}
                      >
                        chevron_left
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 800,
                          color: "#16305E",
                        }}
                      >
                        {md.label}
                      </span>
                      <span
                        onClick={() => {
                          if (monthOffset < 3) setMonthOffset(monthOffset + 1);
                        }}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "#F1F5FA",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontFamily: "'Material Symbols Outlined'",
                          fontSize: 17,
                          color: monthOffset < 3 ? "#1D4E9E" : "#C7D0DE",
                        }}
                      >
                        chevron_right
                      </span>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7,1fr)",
                        gap: 3,
                        marginBottom: 4,
                      }}
                    >
                      {WD.map((wd) => (
                        <div
                          key={wd}
                          style={{
                            textAlign: "center",
                            fontSize: 10,
                            fontWeight: 800,
                            color: "#9AA7BC",
                            padding: "3px 0",
                          }}
                        >
                          {wd}
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7,1fr)",
                        gap: 3,
                      }}
                    >
                      {md.cells.map((c, i) => {
                        if (!c) return <div key={i} style={{ height: 34 }} />;
                        const sel = date === c.iso;
                        let bg = "#fff",
                          col = "#28374F";
                        const bd = "1px solid transparent";
                        let cur = "pointer";
                        if (c.disabled) {
                          bg = c.holiday ? "#FDE7C8" : "#F1F3F7";
                          col = c.holiday ? "#B4740E" : "#B7C0CE";
                          cur = "not-allowed";
                        }
                        if (sel) {
                          bg = "#1D4E9E";
                          col = "#fff";
                        }
                        return (
                          <div
                            key={i}
                            onClick={() => {
                              if (!c.disabled) {
                                setDate(c.iso);
                                setTime("");
                                setError("");
                              }
                            }}
                            style={{
                              height: 34,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 8,
                              fontSize: 12,
                              fontWeight: 700,
                              background: bg,
                              color: col,
                              border: bd,
                              cursor: cur,
                              transition: "background .14s",
                            }}
                          >
                            {c.d}
                          </div>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 12,
                        marginTop: 12,
                        fontSize: 10,
                        color: "#6B7A93",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 2,
                            background: "#1D4E9E",
                          }}
                        />
                        Выбрано
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 2,
                            background: "#FDE7C8",
                          }}
                        />
                        Праздник
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 2,
                            background: "#EEF1F6",
                          }}
                        />
                        Недоступно
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* TIME */}
              {screen === "time" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Выберите время
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Доступные слоты на {dateLabel}. Занятые слоты недоступны.
                  </div>
                  <div
                    style={{
                      maxWidth: 520,
                      margin: "18px auto 0",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(80px,1fr))",
                      gap: 10,
                    }}
                  >
                    {SLOTS.map((t) => {
                      let hh = 0;
                      const keyStr = (date || "") + t;
                      for (let i = 0; i < keyStr.length; i++)
                        hh = (hh * 31 + keyStr.charCodeAt(i)) >>> 0;
                      const occupied = hh % 3 === 0;
                      const sel = time === t;
                      let bg = sel ? "#1D4E9E" : "#fff",
                        col = sel ? "#fff" : "#28374F",
                        bd = sel ? "#1D4E9E" : "#E2E8F0",
                        cur = "pointer";
                      if (occupied) {
                        bg = "#F1F3F7";
                        col = "#B7C0CE";
                        bd = "#EEF1F6";
                        cur = "not-allowed";
                      }
                      return (
                        <div
                          key={t}
                          onClick={() => {
                            if (!occupied) {
                              setTime(t);
                              setError("");
                            }
                          }}
                          style={{
                            padding: "10px 0",
                            textAlign: "center",
                            borderRadius: 8,
                            fontSize: 12.5,
                            fontWeight: 800,
                            background: bg,
                            color: col,
                            border: "1.5px solid " + bd,
                            cursor: cur,
                            transition: "all .14s",
                          }}
                        >
                          {t}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* FORMAT */}
              {screen === "format" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Формат встречи
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Как вам удобнее провести встречу?
                  </div>
                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
                      gap: 10,
                    }}
                  >
                    {FORMATS.map((f) => {
                      const on = format === f[0];
                      return (
                        <HoverBox
                          key={f[0]}
                          onClick={() => {
                            setFormat(f[0]);
                            setError("");
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 11,
                            background: "#fff",
                            border: "1.5px solid " + (on ? "#1D4E9E" : "#E7EDF6"),
                            borderRadius: 12,
                            padding: 13,
                            cursor: "pointer",
                            transition: "border-color .16s,box-shadow .16s",
                          }}
                          hoverStyle={{
                            borderColor: "#1D4E9E",
                            boxShadow: "0 8px 20px rgba(18,41,79,0.08)",
                          }}
                        >
                          <span
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 9,
                              background: hex(f[2], 0.13),
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontFamily: "'Material Symbols Outlined'",
                              fontSize: 18,
                              color: f[2],
                            }}
                          >
                            {f[1]}
                          </span>
                          <span
                            style={{
                              fontSize: "clamp(12px, 1.2vw, 14px)",
                              fontWeight: 800,
                              color: "#28374F",
                            }}
                          >
                            {f[0]}
                          </span>
                        </HoverBox>
                      );
                    })}
                  </div>
                </>
              )}

              {/* BUSINESS TYPE */}
              {screen === "btype" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Тип деловой встречи
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Выберите направление сотрудничества.
                  </div>
                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
                      gap: 10,
                    }}
                  >
                    {BTYPES.map((t) => {
                      const on = bType === t;
                      return (
                        <HoverBox
                          key={t}
                          onClick={() => {
                            setBType(t);
                            setError("");
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            background: "#fff",
                            border: "1.5px solid " + (on ? "#1D4E9E" : "#E7EDF6"),
                            borderRadius: 11,
                            padding: "12px 13px",
                            cursor: "pointer",
                            transition: "border-color .16s,box-shadow .16s",
                          }}
                          hoverStyle={{
                            borderColor: "#1D4E9E",
                            boxShadow: "0 8px 20px rgba(18,41,79,0.08)",
                          }}
                        >
                          <span
                            style={{
                              flexShrink: 0,
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              border: "2px solid " + (on ? "#1D4E9E" : "#C7D0DE"),
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <span
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: on ? "#1D4E9E" : "transparent",
                              }}
                            />
                          </span>
                          <span
                            style={{
                              fontSize: "clamp(12px, 1.2vw, 13.5px)",
                              fontWeight: 700,
                              color: "#28374F",
                              lineHeight: 1.3,
                            }}
                          >
                            {t}
                          </span>
                        </HoverBox>
                      );
                    })}
                  </div>
                </>
              )}

              {/* BUSINESS DETAILS */}
              {screen === "bdetails" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Детали встречи
                  </div>
                  <div
                    style={{
                      maxWidth: 560,
                      marginTop: 16,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        letterSpacing: ".3px",
                      }}
                    >
                      Страна
                      <select
                        value={bCountry}
                        onChange={(e) => setBCountry(e.target.value)}
                        style={selectStyle}
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        letterSpacing: ".3px",
                      }}
                    >
                      Язык встречи
                      <select
                        value={bLang}
                        onChange={(e) => setBLang(e.target.value)}
                        style={selectStyle}
                      >
                        {LANGS.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        letterSpacing: ".3px",
                      }}
                    >
                      Участников
                      <input
                        value={bParticipants}
                        onChange={(e) => {
                          setBParticipants(e.target.value);
                          setError("");
                        }}
                        type="number"
                        min={1}
                        placeholder="3"
                        style={selectStyle}
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        letterSpacing: ".3px",
                      }}
                    >
                      Длительность
                      <select
                        value={bDuration}
                        onChange={(e) => setBDuration(e.target.value)}
                        style={selectStyle}
                      >
                        {DURATIONS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        letterSpacing: ".3px",
                        gridColumn: "1/3",
                      }}
                    >
                      Место / зал
                      <select
                        value={bRoom}
                        onChange={(e) => setBRoom(e.target.value)}
                        style={selectStyle}
                      >
                        {ROOMS.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </>
              )}

              {/* EVENT PICK */}
              {screen === "epick" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Регистрация на мероприятие
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Выберите мероприятие для регистрации.
                  </div>
                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                      gap: 12,
                    }}
                  >
                    {EVENTS.map((e) => {
                      const on = event === e[0];
                      return (
                        <HoverBox
                          key={e[0]}
                          onClick={() => {
                            setEvent(e[0]);
                            setError("");
                          }}
                          style={{
                            background: "#fff",
                            border: "1.5px solid " + (on ? "#1D4E9E" : "#E7EDF6"),
                            borderRadius: 14,
                            padding: 14,
                            cursor: "pointer",
                            transition: "border-color .16s,box-shadow .16s",
                          }}
                          hoverStyle={{
                            borderColor: "#1D4E9E",
                            boxShadow: "0 12px 26px rgba(18,41,79,0.1)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <span
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: 9,
                                background: hex(e[4], 0.12),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Material Symbols Outlined'",
                                fontSize: 18,
                                color: e[4],
                              }}
                            >
                              {e[3]}
                            </span>
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: 800,
                                color: e[4],
                                background: hex(e[4], 0.12),
                                borderRadius: 5,
                                padding: "3px 7px",
                              }}
                            >
                              {e[2]}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: "clamp(13px, 1.3vw, 14.5px)",
                              fontWeight: 800,
                              color: "#16305E",
                              marginTop: 10,
                              lineHeight: 1.3,
                            }}
                          >
                            {e[0]}
                          </div>
                          <div
                            style={{
                              fontSize: "clamp(11px, 1.1vw, 12px)",
                              color: "#6B7A93",
                              marginTop: 4,
                              display: "flex",
                              alignItems: "center",
                              gap: 4,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "'Material Symbols Outlined'",
                                fontSize: 14,
                              }}
                            >
                              event
                            </span>
                            {e[1]}
                          </div>
                        </HoverBox>
                      );
                    })}
                  </div>
                </>
              )}

              {/* PERSONAL */}
              {screen === "personal" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Ваши данные
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Заполните контактную информацию для подтверждения.
                  </div>
                  <div
                    style={{
                      maxWidth: 600,
                      marginTop: 16,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Имя *
                      <FInput
                        value={fName}
                        onChange={(e) => {
                          setFName(e.target.value);
                          setError("");
                        }}
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Фамилия *
                      <FInput
                        value={lName}
                        onChange={(e) => {
                          setLName(e.target.value);
                          setError("");
                        }}
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Телефон *
                      <FInput
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setError("");
                        }}
                        placeholder="+998 90 123 45 67"
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Email *
                      <FInput
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        type="email"
                        placeholder="you@example.com"
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Страна
                      <FInput
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Город
                      <FInput
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Возраст
                      <FInput
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Предпочитаемый язык
                      <select
                        value={prefLang}
                        onChange={(e) => setPrefLang(e.target.value)}
                        style={selectStyle}
                      >
                        {LANGS.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        gridColumn: "1/3",
                      }}
                    >
                      Цель обращения
                      <FInput
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        gridColumn: "1/3",
                      }}
                    >
                      Дополнительные заметки
                      <FTextarea
                        value={notes}
                        onChange={(e) => {
                          setNotes(e.target.value);
                          setError("");
                        }}
                        rows={3}
                      />
                    </label>
                    <label
                      style={{
                        gridColumn: "1/3",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        border: "1.5px dashed #C7D6EE",
                        borderRadius: 11,
                        padding: 12,
                        cursor: "pointer",
                        background: "#fff",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Material Symbols Outlined'",
                          fontSize: 20,
                          color: "#1D4E9E",
                        }}
                      >
                        upload_file
                      </span>
                      <span
                        style={{
                          fontSize: 11.5,
                          fontWeight: 700,
                          color: "#3A4C6E",
                        }}
                      >
                        {fileName || "Прикрепить документы"}
                      </span>
                      <input
                        type="file"
                        onChange={(e) =>
                          setFileName(
                            e.target.files && e.target.files[0]
                              ? e.target.files[0].name
                              : ""
                          )
                        }
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </>
              )}

              {/* CONTACT FORM */}
              {screen === "kform" && (
                <>
                  <div
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      fontWeight: 800,
                      color: "#16305E",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Связаться с институтом
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#5B6B85",
                      marginTop: 4,
                    }}
                  >
                    Напишите нам, и мы свяжемся с вами.
                  </div>
                  <div
                    style={{
                      maxWidth: 520,
                      marginTop: 16,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Имя *
                      <FInput
                        value={fName}
                        onChange={(e) => {
                          setFName(e.target.value);
                          setError("");
                        }}
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                      }}
                    >
                      Email *
                      <FInput
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        type="email"
                      />
                    </label>
                    <label
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#64748B",
                        gridColumn: "1/3",
                      }}
                    >
                      Сообщение *
                      <FTextarea
                        value={notes}
                        onChange={(e) => {
                          setNotes(e.target.value);
                          setError("");
                        }}
                        rows={5}
                      />
                    </label>
                  </div>
                </>
              )}

              {/* RESULT */}
              {screen === "result" && (
                <div
                  style={{
                    maxWidth: 560,
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      width: 72,
                      height: 72,
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
                        background: "#E7F6EC",
                        animation: "jbWzRing .5s ease both",
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        fontFamily: "'Material Symbols Outlined'",
                        fontSize: 40,
                        color: "#1E9E52",
                        animation: "jbWzPop .5s .1s ease both",
                      }}
                    >
                      check_circle
                    </span>
                  </span>
                  <div
                    style={{
                      fontSize: "clamp(20px, 3vw, 24px)",
                      fontWeight: 800,
                      color: "#16305E",
                      marginTop: 14,
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {resultTitle}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.3vw, 13.5px)",
                      color: "#5B6B85",
                      marginTop: 6,
                      lineHeight: 1.55,
                    }}
                  >
                    {resultSub}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      marginTop: 20,
                      textAlign: "left",
                      background: "#fff",
                      border: "1px solid #E7EDF6",
                      borderRadius: 16,
                      padding: 18,
                      boxShadow: "0 12px 30px rgba(18,41,79,0.07)",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: "1px",
                          color: "#9AA7BC",
                        }}
                      >
                        {idLabel}
                      </div>
                      <div
                        style={{
                          fontSize: 17,
                          fontWeight: 800,
                          color: "#1D4E9E",
                          marginTop: 2,
                          letterSpacing: ".5px",
                        }}
                      >
                        {booking ? booking.id : ""}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 6,
                      }}
                    >
                      {summaryRows.map((r, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            gap: 8,
                            fontSize: 11.5,
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              color: "#8695AD",
                              minWidth: 80,
                              fontWeight: 600,
                            }}
                          >
                            {r.k}
                          </span>
                          <span
                            style={{
                              color: "#28374F",
                              fontWeight: 700,
                              wordBreak: "break-word",
                            }}
                          >
                            {r.v}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 4 }}>
                      <canvas
                        id="jb-qr"
                        width={120}
                        height={120}
                        style={{
                          borderRadius: 8,
                          border: "1px solid #E7EDF6",
                          display: "block",
                          margin: "0 auto",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                      <div
                        style={{
                          fontSize: 9,
                          color: "#9AA7BC",
                          marginTop: 4,
                          fontWeight: 700,
                        }}
                      >
                        {booking ? booking.meetingNo : ""}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      justifyContent: "center",
                      marginTop: 14,
                      fontSize: 11,
                      color: "#6B7A93",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Material Symbols Outlined'",
                        fontSize: 15,
                        color: "#1E9E52",
                      }}
                    >
                      mark_email_read
                    </span>
                    Подтверждение отправлено на e-mail. SMS, Telegram, WhatsApp —
                    скоро.
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      marginTop: 18,
                      flexDirection: "column",
                    }}
                    className="result-actions"
                  >
                    <HoverBox
                      onClick={downloadIcs}
                      style={{
                        flex: 1,
                        background: "#EEF3FA",
                        color: "#1D4E9E",
                        borderRadius: 10,
                        padding: 12,
                        fontSize: 12.5,
                        fontWeight: 800,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        transition: "background .16s",
                      }}
                      hoverStyle={{ background: "#E1EAF7" }}
                    >
                      <span
                        style={{
                          fontFamily: "'Material Symbols Outlined'",
                          fontSize: 16,
                        }}
                      >
                        calendar_add_on
                      </span>
                      В календарь
                    </HoverBox>
                    <HoverBox
                      onClick={close}
                      style={{
                        flex: 1,
                        background: "linear-gradient(135deg,#16305E,#1D4E9E)",
                        color: "#fff",
                        borderRadius: 10,
                        padding: 12,
                        fontSize: 12.5,
                        fontWeight: 800,
                        cursor: "pointer",
                        transition: "filter .16s",
                        textAlign: "center",
                      }}
                      hoverStyle={{ filter: "brightness(1.12)" }}
                    >
                      Готово
                    </HoverBox>
                  </div>
                </div>
              )}

              {!!error && (
                <div
                  style={{
                    maxWidth: 600,
                    margin: "14px auto 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#FDECEE",
                    border: "1px solid #F7C9CF",
                    borderRadius: 8,
                    padding: "8px 11px",
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: "#C22B3E",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Material Symbols Outlined'",
                      fontSize: 16,
                    }}
                  >
                    error
                  </span>
                  {error}
                </div>
              )}
            </div>

            {/* FOOTER NAV */}
            {showNav && (
              <div
                style={{
                  flexShrink: 0,
                  borderTop: "1px solid #E7EDF6",
                  background: "#fff",
                  padding: "12px clamp(16px, 4vw, 44px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <HoverBox
                  onClick={back}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: "clamp(12px, 1.2vw, 13.5px)",
                    fontWeight: 800,
                    color: "#5B6B85",
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: 8,
                    transition: "background .16s",
                  }}
                  hoverStyle={{ background: "#F1F5FA" }}
                >
                  <span
                    style={{
                      fontFamily: "'Material Symbols Outlined'",
                      fontSize: 16,
                    }}
                  >
                    arrow_back
                  </span>
                  Назад
                </HoverBox>
                <HoverBox
                  onClick={next}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "linear-gradient(135deg,#16305E,#1D4E9E)",
                    color: "#fff",
                    fontSize: "clamp(12px, 1.2vw, 14px)",
                    fontWeight: 800,
                    padding: "10px 18px",
                    borderRadius: 9,
                    cursor: "pointer",
                    transition: "filter .18s,transform .18s",
                  }}
                  hoverStyle={{
                    filter: "brightness(1.12)",
                    transform: "translateY(-1px)",
                  }}
                >
                  {loading && (
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        animation: "jbWzSpin .7s linear infinite",
                        display: "inline-block",
                      }}
                    />
                  )}
                  {nextLabel}
                  <span
                    style={{
                      fontFamily: "'Material Symbols Outlined'",
                      fontSize: 16,
                    }}
                  >
                    {nextIcon}
                  </span>
                </HoverBox>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}