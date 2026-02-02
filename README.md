# Terumo Europe – Congress & KOL Intelligence Demo

**“AI Attends the Congress”** – A focused demo for Terumo Europe combining Congress Intelligence and KOL Intelligence, centered on **LifePearl (TACE/IO)**.

## What it shows

1. **Congress & Publication Data Ingestion**
   - CIRSE 2024 (Lisbon, Portugal), CIRSE 2025 (Barcelona), and **Trend: 2024 → 2025** (sentiment over time).
   - Content tagged to LifePearl and competitor products.
   - Congress dropdown: CIRSE 2024, CIRSE 2025, Trend: 2024 → 2025 (active); CIRSE 2026, EuroPCR, ASCO (coming soon).

2. **Sentiment trend (CIRSE 2024 → 2025)**
   - Scientific and social sentiment over time for LifePearl vs competitors.
   - Trends derived from scientific articles and social posts; optional Sources panel (sample articles and posts).
   - CIRSE 2026 will be added as the congress approaches.

3. **Data modules (scope of capabilities)**
   - Congress & Publications (connected); Clinical Trials, Claims, Registries, Social & Digital (available).

4. **KOL Graph & Enrichment**
   - Speakers/authors identified; entity resolution and enrichment; influence clustering by indication (HCC, mCRC, ICC).

5. **Insight outputs**
   - Key scientific themes and momentum; competitor visibility at congress; actionable Top 10 KOL engagement list (LifePearl).

6. **Auri chatbot**
   - Ask questions about the demo data. Users do not see or select any AI provider. The backend uses a **lightweight RAG** over the demo data folder (`src/data/`) to retrieve relevant context, then may use Claude or OpenAI internally; answers can also draw on pre-trained knowledge about Terumo, LifePearl, and its competitors (e.g. DC Bead, HepaSphere). Keyword fallback when no API keys are set.

7. **Dashboard**
   - Visualizations: sentiment over time, competitor visibility, themes momentum, Top KOLs, congress ingestion, data modules scope.

## Run locally

```bash
npm install
npm start
```

## Auri (chatbot) API keys (optional, backend only)

Auri uses Claude and/or OpenAI on the backend only; users never see or choose a provider. To enable full AI answers, copy `.env.example` to `.env` and set one or both:

- `REACT_APP_ANTHROPIC_API_KEY` – Claude (tried first)
- `REACT_APP_OPENAI_API_KEY` – OpenAI (used if Claude is unavailable)

Do not commit `.env`. Without keys, Auri uses a keyword-based fallback so the demo still works.

## Build

```bash
npm run build
```

## Deploy

Deploy the `build` folder to Vercel (or any static host). See root `DEMO_URLS.md` for deployment notes.

## Real data used

- **CIRSE 2024**: Lisbon, Portugal, September 14–18, 2024 ([CIRSE 2024 timetable](https://cirsecongress.cirse.org/wp-content/uploads/sites/4/2024/08/cirse2024_timetable_V3_prod.pdf)); congress library and abstracts at [library.cirse.org/cirse2024](https://library.cirse.org/cirse2024).
- **CIRSE 2025**: [CIRSE 2025 Book of Abstracts](https://pubmed.ncbi.nlm.nih.gov/41222632/) (Cardiovasc Intervent Radiol. 2025 Nov;48(Suppl 4):381-1857, PMID: 41222632).
- **CIRSE** congress metadata and future dates from [CIRSE Congress](https://cirsecongress.cirse.org/about/theannualcongress/).
- **Terumo**: Demo focuses on LifePearl (TACE/IO) for Terumo Europe; [Terumo Interventional Systems](https://www.terumois.com/) (education, embolization, procedural solutions) for context.
- All session/abstract/KOL/sentiment content is mock data; real API feeds can be added later.
