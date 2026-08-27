# M DOT IT SOLUZIONE - PRD

## Original Problem Statement
Build a premium corporate marketing/landing website for M DOT IT SOLUZIONE — an Italian enterprise IT hardware & networking company. Awwwards Site-of-the-Day quality: kinetic hero with masked line-by-line reveal, framer-motion scroll reveals, lenis smooth scroll, editorial marquee, numbered manifesto chapters, blue-only brand palette matching provided logo. High-converting Google Ads landing page. 18+ pages (Home, About, Products, Services, Brands, Industries, Why, Corporate, Sell Equipment, Request Quote, Gallery, Blog list/detail, FAQ, Testimonials, Contact, Privacy/Terms/Disclaimer).

## User Personas
- CIOs & IT Directors of European mid/enterprise businesses
- Corporate procurement leads
- Resellers and channel partners
- Individual buyers researching enterprise IT

## Tech Stack
- Frontend: React 19 + React Router 7 + Tailwind CSS + framer-motion + lenis + sonner + shadcn/ui
- Backend: FastAPI + Motor (MongoDB async)
- Fonts: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (accents)

## Implemented (Dec 2025)
- Full site with 18 routes; kinetic hero (word reveal + parallax bg + orbiting logo mark echoing brand)
- 30 enterprise products with category filter and search on /products
- Backend endpoints: POST /api/inquiries, POST /api/sell-equipment, POST /api/newsletter, GET lists
- Sticky glass nav with adaptive light/dark text, mega-menu products dropdown
- Floating action button (Call, WhatsApp, Quote)
- Sonner toasts, contact/quote/sell forms, embedded Google Map
- Legal pages (Privacy, Terms, Disclaimer), Gallery masonry, Blog list + detail

## Backlog (P1/P2)
- P1: Real business contact details (currently placeholder Milan/Segrate)
- P1: Italian language toggle (currently English only)
- P2: Full admin CMS for blog/testimonials
- P2: Email notifications on form submissions (Resend integration)
- P2: More real product photography (currently high-quality Unsplash)
