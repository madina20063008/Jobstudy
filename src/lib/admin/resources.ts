/* Config-driven admin. JobStudy content is authored in Russian (plain strings). */

export const I18N_LANGS: [string, string][] = [
  ["uz", "UZ"], ["ru", "RU"], ["en", "EN"],
];

export type FieldType =
  | "text" | "textarea" | "i18n" | "i18nArea" | "number" | "boolean"
  | "image" | "select" | "password" | "readonly" | "specs";

export interface Field {
  type: FieldType;
  name: string;
  label: string;
  options?: { value: string; label: string }[];
}

export interface Column {
  key: string;
  label: string;
  type?: "image" | "bool" | "i18n" | "date" | "status" | "text";
}

export interface ResourceConfig {
  key: string;
  label: string;
  icon: string; // Material Symbols icon name
  api: string;
  idType: "int" | "string";
  canCreate: boolean;
  columns: Column[];
  fields: Field[];
}

const order: Field = { type: "number", name: "order", label: "Порядок" };
const published: Field = { type: "boolean", name: "published", label: "Опубликовано" };
const statusOptions = [
  { value: "new", label: "Новая" }, { value: "in_progress", label: "В работе" },
  { value: "done", label: "Готово" }, { value: "spam", label: "Спам" },
];

export const RESOURCES: Record<string, ResourceConfig> = {
  news: {
    key: "news", label: "Новости", icon: "campaign", api: "/api/news", idType: "int", canCreate: true,
    columns: [{ key: "title", label: "Заголовок" }, { key: "date", label: "Дата" }, { key: "published", label: "Опубл.", type: "bool" }],
    fields: [
      { type: "text", name: "title", label: "Заголовок" },
      { type: "text", name: "date", label: "Дата (напр. 20 мая 2025)" },
      order, published,
    ],
  },
  stories: {
    key: "stories", label: "Истории успеха", icon: "auto_stories", api: "/api/stories", idType: "int", canCreate: true,
    columns: [{ key: "name", label: "Имя" }, { key: "role", label: "Направление" }, { key: "published", label: "Опубл.", type: "bool" }],
    fields: [
      { type: "text", name: "name", label: "Имя" },
      { type: "text", name: "role", label: "Направление / роль" },
      { type: "textarea", name: "quote", label: "Цитата" },
      { type: "image", name: "img", label: "Фото" },
      order, published,
    ],
  },
  projects: {
    key: "projects", label: "Проекты", icon: "hub", api: "/api/projects", idType: "int", canCreate: true,
    columns: [{ key: "name", label: "Название" }, { key: "published", label: "Опубл.", type: "bool" }],
    fields: [
      { type: "text", name: "name", label: "Название" },
      { type: "textarea", name: "text", label: "Описание" },
      { type: "image", name: "img", label: "Изображение" },
      order, published,
    ],
  },
  partners: {
    key: "partners", label: "Партнёры", icon: "handshake", api: "/api/partners", idType: "int", canCreate: true,
    columns: [{ key: "name", label: "Название" }, { key: "sub", label: "Подпись" }, { key: "published", label: "Опубл.", type: "bool" }],
    fields: [
      { type: "text", name: "name", label: "Название" },
      { type: "text", name: "sub", label: "Подпись (необязательно)" },
      { type: "image", name: "logo", label: "Логотип (или оставьте пустым)" },
      { type: "text", name: "mark", label: "Буква/символ (если нет логотипа)" },
      { type: "text", name: "markBg", label: "Цвет фона символа (#HEX)" },
      order, published,
    ],
  },
  applications: {
    key: "applications", label: "Заявки", icon: "assignment", api: "/api/applications", idType: "int", canCreate: false,
    columns: [{ key: "name", label: "Имя" }, { key: "email", label: "Email" }, { key: "kind", label: "Тип" }, { key: "status", label: "Статус", type: "status" }, { key: "createdAt", label: "Дата", type: "date" }],
    fields: [
      { type: "readonly", name: "name", label: "Имя" },
      { type: "readonly", name: "email", label: "Email" },
      { type: "readonly", name: "phone", label: "Телефон" },
      { type: "readonly", name: "kind", label: "Тип" },
      { type: "select", name: "status", label: "Статус", options: statusOptions },
    ],
  },
  "portal-leads": {
    key: "portal-leads", label: "Портал (лиды)", icon: "badge", api: "/api/portal-leads", idType: "int", canCreate: false,
    columns: [{ key: "name", label: "Имя" }, { key: "email", label: "Email" }, { key: "role", label: "Роль" }, { key: "kind", label: "Действие" }, { key: "createdAt", label: "Дата", type: "date" }],
    fields: [
      { type: "readonly", name: "name", label: "Имя" },
      { type: "readonly", name: "email", label: "Email" },
      { type: "readonly", name: "phone", label: "Телефон" },
      { type: "readonly", name: "role", label: "Роль" },
      { type: "readonly", name: "kind", label: "Действие" },
    ],
  },
  "contact-requests": {
    key: "contact-requests", label: "Обращения", icon: "mail", api: "/api/contact-requests", idType: "int", canCreate: false,
    columns: [{ key: "name", label: "Имя" }, { key: "email", label: "Email" }, { key: "phone", label: "Телефон" }, { key: "status", label: "Статус", type: "status" }, { key: "createdAt", label: "Дата", type: "date" }],
    fields: [
      { type: "readonly", name: "name", label: "Имя" },
      { type: "readonly", name: "email", label: "Email" },
      { type: "readonly", name: "phone", label: "Телефон" },
      { type: "textarea", name: "message", label: "Сообщение" },
      { type: "select", name: "status", label: "Статус", options: statusOptions },
    ],
  },
  users: {
    key: "users", label: "Пользователи", icon: "manage_accounts", api: "/api/users", idType: "string", canCreate: true,
    columns: [{ key: "email", label: "Email" }, { key: "name", label: "Имя" }, { key: "role", label: "Роль" }, { key: "active", label: "Активен", type: "bool" }],
    fields: [
      { type: "text", name: "email", label: "Email" },
      { type: "password", name: "password", label: "Пароль" },
      { type: "text", name: "name", label: "Имя" },
      { type: "select", name: "role", label: "Роль", options: [{ value: "admin", label: "Администратор" }, { value: "editor", label: "Редактор" }] },
      { type: "boolean", name: "active", label: "Активен" },
    ],
  },
};

export const RESOURCE_ORDER = [
  "news", "stories", "projects", "partners",
  "applications", "portal-leads", "contact-requests", "users",
];
