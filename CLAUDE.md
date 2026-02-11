# CLAUDE.md - car.mustarddata.com

Korean automotive calculator/guide static site.

## Development Commands

```bash
npm run dev          # Next.js dev server
npm run build        # Static export to out/
npm run lint         # ESLint (currently missing eslint.config.js)
# EV charger data fetch (requires API key)
EV_CHARGER_API_KEY=<key> npx tsx scripts/fetch-ev-chargers.ts
```

## Stack

- **Next.js 16** (App Router, static export via `output: 'export'`)
- **React 19**, **TypeScript 5**, **Tailwind CSS 4**
- Deployed to GitHub Pages at `https://car.mustarddata.com`

## Architecture

- **Static export only** — no server runtime. All pages pre-rendered at build time.
- **`trailingSlash: true`** in next.config.ts — all URLs end with `/`.
- **Server components** for pages (metadata, JSON-LD, static content). Client components (`'use client'`) only for interactive calculators and UI widgets.
- **Path alias**: `@/*` maps to `./src/*`.
- **Korean locale**: `<html lang="ko">`, all user-facing content in Korean.

### Page Patterns

- **Calculators** (`/calculator/*`): Interactive client components with `useState`-driven forms. Each exports `metadata` with JSON-LD (`WebApplication` or `FAQPage` schema).
- **Guides** (`/guide/*`): Long-form server-rendered content pages with SEO metadata.
- **Hub & Spoke model pages** (`/models/[slug]/*`): Hub page per car model with sub-pages for car-tax, insurance, registration-tax, maintenance. Uses `generateStaticParams()` from `car-models.ts`.
- **EV charger pages** (`/ev-charger/[sido]/[sigungu]`, `/ev-charger/station/[id]`): Dynamic routes with `generateStaticParams()` from `ev-data.ts`. Data sourced from Korea Environment Corporation API.
- **Tire guide** (`/guide/tire-cost/[category]`): Category sub-pages generated from slug array.

### EV Charger Data Pipeline

`scripts/fetch-ev-chargers.ts` → `data/ev-chargers/*.json` → `src/lib/ev-data.ts` (reads JSON at build time)

## Key Files

| File | Role |
|------|------|
| `src/lib/urls.ts` | **Single source of truth** for all page paths, titles, descriptions. Used by sitemap, navigation, and footer. |
| `src/lib/calculations.ts` | All calculator formulas (car tax, registration tax, installment, fuel cost, depreciation) |
| `src/lib/car-models.ts` | Car model data (specs, pricing) for `/models/*` pages |
| `src/lib/ev-data.ts` | EV charger data reader — `getRegions()`, `getChargersByRegion()`, `getAllChargerIds()` |
| `src/lib/ev-types.ts` | TypeScript types for EV charger data |
| `src/lib/tire-data.ts` | Tire pricing/specs data |
| `src/app/sitemap.ts` | Generates sitemap from `urls.ts` + EV charger dynamic routes |
| `src/app/layout.tsx` | Root layout — Pretendard font, Google Analytics, AdSense, Naver verification |

## Conventions

- **Metadata pattern**: Each page exports `metadata` (or `generateMetadata` for dynamic routes) with title, description, canonical URL, Open Graph, and keywords.
- **JSON-LD**: Structured data via `<JsonLd>` component. Common schemas: `WebApplication`, `FAQPage`, `Article`.
- **Dynamic routes**: Always pair `[param]` folders with `generateStaticParams()` for static export compatibility.
- **Adding new pages**: Add the path/title/description to the appropriate array in `urls.ts` first, then create the page component.
