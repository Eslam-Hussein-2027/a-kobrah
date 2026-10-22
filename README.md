# العربية الكبرى للتأمين المساهمة — Company Website

Official website of **The Great Arabia Insurance Company** (Arabic, RTL).

| Part     | Stack                         | Folder               |
| -------- | ----------------------------- | -------------------- |
| Frontend | React 19 + Vite + React Router | `front/front-kobrah` |
| Backend  | Laravel 13 (JSON API)          | `back/backend`       |

The frontend renders immediately with bundled content and then loads live data from the API
(site settings, products, sectors, forms). If the API is down, the site still works with the bundled copy;
only the contact form needs the backend.

---

## Folder structure

```
a-kobrah/
├── front/front-kobrah/                 React app
│   ├── public/favicon.png
│   ├── index.html                      lang="ar" dir="rtl", Tajawal font
│   ├── vite.config.js                  dev proxy: /api → Laravel
│   └── src/
│       ├── main.jsx · App.jsx          entry + routes
│       ├── assets/logo/                logo-mark / logo-ar / logo-full (cropped from the official logo)
│       ├── styles/                     design tokens, reset, shared utilities, keyframes
│       ├── config/                     routes & navigation, toast messages
│       ├── data/                       fallback content (mirrors the API responses)
│       ├── services/api.js             fetch wrapper for the Laravel API
│       ├── context/                    content (API data), toast, app-ready (preloader)
│       ├── hooks/                      scroll position, sliding indicator, rotator, spotlight
│       ├── utils/                      tel/mail/maps links, motion preferences
│       ├── components/
│       │   ├── layout/                 Layout, Topbar, Header, MobileDrawer, Footer, CtaBanner,
│       │   │                           Preloader, ScrollProgress, BackToTop
│       │   ├── ui/                     Button, Icon, Logo, Reveal, PageHero, SectionHead, CheckList, …
│       │   └── products/               ProductCard, ProductGrid
│       └── pages/
│           ├── home/                   Hero, QuickServices, AboutPreview, ServicesTabs, StatsBand, WhyUs, ClaimSteps
│           ├── about/  personal/  business/  forms/  contact/
│           └── NotFoundPage.jsx
│
└── back/backend/                       Laravel API
    ├── app/
    │   ├── Enums/                      ProductType, FormCategory (with Arabic labels)
    │   ├── Http/Controllers/Api/       Site, Product, Sector, DownloadableForm, ContactMessage
    │   ├── Http/Requests/              StoreContactMessageRequest (Arabic validation messages)
    │   ├── Http/Resources/             JSON shapes returned to the frontend
    │   ├── Mail/ContactMessageReceived.php
    │   └── Models/                     Product, Sector, DownloadableForm, ContactMessage
    ├── config/site.php                 company phone, email, address, hours, social links, stats
    ├── config/cors.php                 allowed frontend origins
    ├── database/migrations/ · seeders/ website content (products, sectors, forms)
    ├── routes/api.php
    └── tests/Feature/Api/              API feature tests
```

Each component keeps its styles next to it (`Header.jsx` + `Header.css`); only tokens and shared helpers live in
`src/styles/`.

---

## Run it locally

**Requirements:** PHP 8.4+ (the committed `composer.lock` uses Symfony 8), Composer, Node 20+.

### 1. Backend (http://127.0.0.1:8000)

```bash
cd back/backend
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
php artisan serve
```

### 2. Frontend (http://localhost:5173)

```bash
cd front/front-kobrah
npm install
npm run dev
```

During development Vite forwards `/api/*` to `http://127.0.0.1:8000`, so no CORS setup is needed.

### Checks

```bash
cd back/backend && php artisan test && vendor/bin/pint --test
cd front/front-kobrah && npm run lint && npm run build
```

---

## API

| Method | Endpoint                    | Purpose                                                    |
| ------ | --------------------------- | ---------------------------------------------------------- |
| GET    | `/api/site`                 | Company details, social links, home-page stats             |
| GET    | `/api/products?type=`       | Insurance products (`personal` \| `business`, optional)    |
| GET    | `/api/sectors`              | Business sectors (business page marquee)                   |
| GET    | `/api/forms`                | Downloadable forms + category labels                       |
| GET    | `/api/forms/{id}/download`  | Download a form's PDF (404 until a file is attached)       |
| POST   | `/api/contact`              | Contact form — stored in `contact_messages`, rate-limited 5/min per IP |

`POST /api/contact` body: `name`, `phone`, `email` (optional), `insurance_type`, `message`.
Validation errors come back as HTTP 422 with Arabic messages, which the form shows under each field.

---

## Editing content

| What                                   | Where                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------- |
| Phone, email, address, hours, map      | `back/backend/.env` → `SITE_*` (defaults in `config/site.php`)                        |
| Facebook / Instagram / LinkedIn links  | `.env` → `SITE_FACEBOOK_URL`, `SITE_INSTAGRAM_URL`, `SITE_LINKEDIN_URL`               |
| Home-page counters (years, clients…)   | `.env` → `SITE_STAT_*`                                                                |
| Inbox for contact-form emails          | `.env` → `SITE_CONTACT_RECIPIENT` + the `MAIL_*` settings                             |
| Products, sectors, forms               | `database/seeders/*Seeder.php`, then `php artisan db:seed` (safe to re-run)           |
| Form PDF files                         | Put the file in `storage/app/private/forms/` and set the form's `file_path`, e.g. `forms/motor-claim.pdf` |
| Page texts (hero, about, why us, …)    | The matching component in `front/front-kobrah/src/pages/`                             |

When you change seeded content, also update the fallback copy in `front/front-kobrah/src/data/` so the first
paint matches.

---

## Deployment notes

1. **Build the frontend:** `npm run build` → static files in `front/front-kobrah/dist/`.
   The site uses real URLs (`/about`, `/contact`, …), so the web server must fall back to `index.html`
   for unknown paths (Nginx: `try_files $uri /index.html;`).
2. **Same domain (recommended):** serve `dist/` and route `/api/*` to Laravel's `public/index.php`. Leave
   `VITE_API_URL` empty.
3. **Separate API domain:** build with `VITE_API_URL=https://api.example.ly` and set
   `CORS_ALLOWED_ORIGINS=https://www.example.ly` in the backend `.env`.
4. Backend: `APP_ENV=production`, `APP_DEBUG=false`, real database (`DB_CONNECTION=mysql` / `pgsql`;
   Oracle works through the `yajra/laravel-oci8` package), then `php artisan migrate --seed --force`.

---

## Still needed from the company

These are placeholders copied from the reference design — please confirm before going live:

- [x] Phone number: `+218 91-2345678`
- [ ] Official email, head-office address, working hours
- [ ] Facebook / Instagram / LinkedIn URLs (the icons are shown without links until real accounts are set in `.env`)
- [ ] Real figures for the counters (15 years, 25,000 clients, 30 branches)
- [ ] PDF files for the 10 forms on the Forms page
- [ ] Which inbox should receive contact-form messages + SMTP details
- [ ] Final list / wording of insurance products
- [ ] English version (the "English" button currently shows "coming soon", as in the reference)
