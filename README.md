# Qarshi Sement Zavodi — Full-Stack Platform

A modern **Next.js 16 (App Router)** rebuild of the Qarshi Sement Zavodi investment portal,
with a complete **Admin Panel (CMS)** and a **REST backend** (auth, CRUD, file upload, DB).

The public site is a **pixel-identical** port of the original design — same layout, colors,
typography, dark/light theming, animations and responsiveness. Content is **5-language**
(en / ru / uz / ar / de, with full RTL for Arabic).

## Tech stack

| Layer       | Technology                                              |
|-------------|---------------------------------------------------------|
| Framework   | Next.js 16 (App Router, TypeScript, `src/`, Turbopack)  |
| UI (public) | Inline styles ported verbatim + CSS-variable theming    |
| UI (admin)  | Tailwind CSS v4 (utilities, preflight disabled)         |
| Database    | Prisma — SQLite (dev) / PostgreSQL (prod)               |
| Auth        | Custom JWT (`jose`) httpOnly cookie + `bcryptjs`        |
| Validation  | Zod                                                     |
| Uploads     | Local `public/uploads`                                  |

## Run locally

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed        # admin user + all content
npm run dev            # http://localhost:3000
```

- **Public site:** http://localhost:3000
- **Admin panel:** http://localhost:3000/admin
- **Admin login:** `ats@ats-systems.net` / `ats-c89475630a`

## Deploy to Vercel (PostgreSQL)

1. Vercel → Storage → **Create Database → Neon (Postgres)** → Connect (sets `DATABASE_URL`).
2. The `vercel-build` script swaps the Prisma provider to `postgresql`, creates the tables,
   and the admin user is auto-created on first login.
3. (Optional) seed the cloud DB from your machine: set the Neon `DATABASE_URL` in `.env`,
   then `npx prisma db push && npm run db:seed`.

## Content model

Localized text is stored as JSON `{ en, ru, uz, ar, de }` per field. Models:
`Project`, `NewsItem`, `Sector`, `FezZone`, `Incentive`, `Testimonial`, `Faq`,
`ContactRequest`, `Subscriber`, `User`, `Setting`, `MediaAsset`.

## REST API

Writes require an admin session cookie; reads are public (except `users`,
contact-requests list, subscribers list).

- `POST /api/auth/login` · `POST /api/auth/logout` · `GET /api/auth/me`
- CRUD: `/api/projects` `/api/news` `/api/sectors` `/api/fez` `/api/incentives`
  `/api/testimonials` `/api/faq` (each + `/[id]`)
- `/api/contact-requests`, `/api/subscribers` (public POST), `/api/users`,
  `/api/settings`, `/api/upload`, `/api/health`

## Admin modules

Login → Dashboard (stats) → sidebar: **Projects, News, Sectors, Free Economic Zones,
Incentives, Testimonials, FAQ, Contact Requests, Subscribers, Users, Site Settings.**
Each content module is a config-driven CRUD with **5-language** form fields (Arabic RTL),
image upload, ordering and publish toggle.

## Security

bcrypt passwords (never returned), HS256 JWT in an httpOnly SameSite=Lax cookie,
`middleware.ts` gates `/admin/*`, every write re-checks the session, Zod validation on all
bodies, upload MIME/size limits. Set a strong `JWT_SECRET` and change the admin password
before production.
