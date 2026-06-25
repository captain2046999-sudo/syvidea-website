# Syvidea — Local AI Workstation Sourcing & Advisory Website

A static Astro + Tailwind CSS website for Syvidea, a sourcing and advisory service for local AI workstations built on the AMD Strix Halo / AI Max+ 395 platform. Serves customers in the US and Canada with a quote-based ordering flow.

## Stack

- **Astro 4** — static site generation
- **Tailwind CSS 3** — styling
- **TypeScript** — type safety
- **Tally** — request / quote form
- **Vercel** — hosting and deployment
- **GA4 + Microsoft Clarity** — analytics (optional, env-configured)

## Project structure

```
Syvidea-website/
├── public/                  # static assets (favicon, robots.txt)
├── src/
│   ├── components/          # Header, Footer, Hero, Section, FAQ, CTA
│   ├── data/                # TypeScript data files (platform, brands, FAQs, resources, site config)
│   ├── layouts/             # BaseLayout, PageLayout
│   ├── pages/               # All routes
│   │   ├── index.astro      # Home
│   │   ├── workstations/    # /workstations, /workstations/amd-strix-halo-platform, /workstations/[brand]
│   │   ├── resources/       # /resources, /resources/[slug]
│   │   ├── use-cases.astro
│   │   ├── how-it-works.astro
│   │   ├── faq.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── thank-you.astro
│   │   ├── shipping.astro
│   │   ├── warranty.astro
│   │   ├── refund-policy.astro
│   │   ├── terms.astro
│   │   ├── privacy.astro
│   │   └── 404.astro
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Setup

```bash
cd Syvidea-website
npm install
cp .env.example .env
# Edit .env with your Tally form ID, GA4 ID, Clarity ID
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # preview built site
```

## Environment variables

| Variable | Description |
| --- | --- |
| `PUBLIC_TALLY_QUOTE_FORM_ID` | Tally form ID for the request / quote form (default: `81ryAo`) |
| `PUBLIC_GA4_ID` | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXX`) |
| `PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |

All env vars are public (exposed to the client) and prefixed with `PUBLIC_`.

## Editing content

All editable content lives in `src/data/*.ts`. Edit those files to update:

- **Platform spec** → `src/data/platform.ts`
- **Partner brands** → `src/data/brands.ts` (also drives the 3 brand detail pages via dynamic routing)
- **Use cases** → `src/data/brands.ts` (`useCases` export)
- **FAQs** → `src/data/faqs.ts`
- **Resources** → `src/data/resources.ts` (drives the resource section pages)
- **Site config / nav / footer** → `src/data/site.ts`

## Deployment to Vercel

1. Push to GitHub: `git push origin main`
2. In Vercel → New Project → Import the GitHub repo
3. Framework preset: **Astro**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add env vars in Vercel project settings
7. Add custom domain `www.syvidea.com` in Vercel → Domains

## Quote-based ordering flow

This site intentionally has **no** add-to-cart, checkout, or payment logic. All order requests go through the Tally form, which feeds into the Syvidea team for manual follow-up, written quote, and payment-link / deposit arrangement.

## What Syvidea is not

The site never claims that Syvidea manufactures, designs, or assembles the workstations. All workstations are produced by hardware partners (Bosgame, PELAND, bitpc) and Syvidea acts as a sourcing and advisory layer.
