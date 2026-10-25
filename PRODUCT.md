# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences of equal priority (confirmed by the company):

- **Individuals and families in Libya** looking for cover: motor (compulsory third-party and comprehensive), health, travel, personal accident, home, life.
- **Companies and institutions** looking for business cover: marine cargo and hull, engineering / contractors' all risks, fire and property, liability, group medical, inland transit, oil and energy, money.

Their jobs on the site: understand which cover fits them, request a quote, call or visit a branch, and download claim or application forms to fill in and hand to a branch.

## Product Purpose

Corporate website of العربية الكبرى للتأمين المساهمة (The Great Arabia Insurance Company), a Libyan joint-stock insurance company. It presents the company and its products for individuals and businesses, offers downloadable forms, and collects quote requests and messages through a contact form that the backend stores (and can email to a company inbox). Success: a visitor from either audience finds their cover and reaches the company (quote request, phone call, or branch visit).

## Positioning

Confirmed differentiators, in the company's words:

- **Branch reach:** 30+ branches and approved agents.
- **Long experience:** 15+ years in the Libyan market.
- **Large-company and sector cover:** experience insuring oil and energy, contracting and construction, marine trade, industry and other major sectors.

Not confirmed as a differentiator: faster claims settlement than competitors. Do not elevate it into a positioning claim.

Copy decision (confirmed by the company during the redesign): the existing site copy from the manager's reference is kept as written, including lines that mention competitive prices, simplified claims and quick or fair compensation ("أسعار تنافسية", "سرعة في صرف التعويضات", "بخدمة سريعة وتعويضات عادلة", "إجراءات مطالبات مبسّطة"). Keep those lines; do not add new claims of that kind.

## Operating Context

- Market: Libya. Arabic is the primary language; the site is right-to-left. An English version is planned but not built (the "English" control currently announces it as coming soon).
- Forms are paper-first: visitors download a PDF, fill it in, and deliver it to the nearest branch.
- Contact: phone +218 91-2345678, email info@a-kobrah.ly, head office in Libya, hours Sunday to Thursday, 8:00 to 15:00.

## Capabilities and Constraints

- Stack: React + Vite frontend (`front/front-kobrah`), Laravel JSON API (`back/backend`), MySQL. Products, sectors, forms and site settings come from the API with bundled fallback data in `front/front-kobrah/src/data/`.
- Pages: home, about, personal insurance, business insurance, forms library (search and category filter), contact (form + map link), 404.
- Contact form fields: name, phone, optional email, insurance type, message; Arabic validation on both client and server; rate-limited.
- No online purchase, policy issuance, payments or customer portal.
- Pending from the company: PDF files for the 10 forms, social media accounts (icons shown without links until then), the inbox for contact-form email.

## Brand Commitments

- Name: العربية الكبرى للتأمين المساهمة / The Great Arabia Insurance Company.
- Logo: three slanted bars in a cyan-to-navy gradient plus the Arabic wordmark (`front/front-kobrah/src/assets/logo/`).
- Brand colours pinned by the company: navy #1A1C95, blue #0072CE, sky #00A8E8, cyan #22C3F3, and the logo's cyan-to-navy gradient.
- The company asked for a modern design with no AI-template look.

## Evidence on Hand

- Figures confirmed by the company: 15+ years of experience, 25,000+ clients, 30+ branches and agents, 14 insurance products.
- Product catalogue (14 products with descriptions and benefits), 8 sectors served, 10 form titles: `back/backend/database/seeders/`.
- No photography of offices, branches, staff or customers exists yet. No testimonials, ratings, licences, partner logos or awards are on hand: do not fabricate any of them.

## Product Principles

1. Individuals and businesses get an equally direct path to their cover.
2. Reach and experience are the proof: show the branch network and years in the market rather than generic promises.
3. Every page leads to a person: a quote request, a phone call, or a branch.
4. Respect the paper-to-branch reality: forms are found fast and their next step is clear.
5. Arabic first, built to receive the English version without redesign.
