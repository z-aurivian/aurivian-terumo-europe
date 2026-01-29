# Terumo Europe – Congress & KOL Intelligence Demo

**“AI Attends the Congress”** – A focused demo for Terumo Europe combining Congress Intelligence and KOL Intelligence.

## What it shows

1. **Congress & Publication Data Ingestion**
   - One historical congress (CIRSE 2025) with agendas, abstracts, posters, speakers, and linked publications.
   - Content tagged to LifePearl (TACE/IO) and Terumo cardiology assets (cross-asset view).
   - Congress dropdown: CIRSE 2025 (active); CIRSE 2026, EuroPCR, ASCO (coming soon).

2. **Data modules (scope of capabilities)**
   - Congress & Publications (connected).
   - Clinical Trials, Claims, Registries, Social & Digital (available).

3. **KOL Graph & Enrichment**
   - Speakers/authors identified; entity resolution and enrichment; influence clustering by indication, product, region.

4. **Insight outputs (“The Wow”)**
   - Key scientific themes and momentum.
   - Competitor product visibility at congress.
   - Actionable Top 10 KOL engagement list (LifePearl + cardiology).

## Real data used

- **CIRSE 2026**: September 5–9, Copenhagen, Denmark ([CIRSE Congress](https://cirsecongress.cirse.org/about/theannualcongress/)).
- Congress metadata and stats (participants, lectures) aligned with CIRSE’s public messaging.
- All session/abstract/KOL content is mock data; real API feeds can be added later.

## Run locally

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deploy

Deploy the `build` folder to Vercel (or any static host). See root `DEMO_URLS.md` for deployment notes.
