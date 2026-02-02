/**
 * Lightweight RAG over the demo data folder (getDemoContext).
 * Chunks by section and retrieves by keyword overlap so the LLM gets relevant context only.
 * No embeddings; keyword-based selection to keep it lightweight.
 */

const SECTION_KEYS = [
  'congressOptions',
  'ingestion',
  'themes',
  'competitorVisibility',
  'topKols',
  'trials',
  'social',
  'trendSentiment',
  'scientificArticles',
  'socialTrendSources',
];

// Keywords that indicate which sections are relevant (section key -> list of trigger terms)
const SECTION_KEYWORDS = {
  congressOptions: ['congress', 'cirse', 'lisbon', 'barcelona', 'copenhagen', 'event', 'meeting', 'annual'],
  ingestion: ['ingestion', 'abstract', 'poster', 'speaker', 'agenda', 'publication', 'session', 'data ingest'],
  themes: ['theme', 'momentum', 'scientific theme', 'emerging', 'tace', 'io', 'immuno', 'degradable', 'bead', 'tkis'],
  competitorVisibility: ['competitor', 'visibility', 'share', 'dc bead', 'hepasphere', 'boston scientific', 'merit', 'market'],
  topKols: ['kol', 'key opinion', 'expert', 'engagement', 'top 10', 'influence', 'speaker', 'author', 'professor', 'doctor'],
  trials: ['trial', 'clinical trial', 'nct', 'phase', 'recruiting', 'sponsor', 'indication'],
  social: ['social', 'twitter', 'linkedin', 'platform', 'signal', 'mention'],
  trendSentiment: ['sentiment', 'trend', 'over time', '2024', '2025', 'scientific sentiment', 'social sentiment'],
  scientificArticles: ['article', 'paper', 'publication', 'journal', 'abstract', 'literature', 'cardiovasc', 'eur radiol'],
  socialTrendSources: ['source', 'post', 'backchannel', 'conference takeaway'],
};

function getQueryKeywords(query) {
  const lower = query.toLowerCase().replace(/[^\w\s]/g, ' ');
  return lower.split(/\s+/).filter((w) => w.length > 2);
}

/**
 * Score which sections are relevant to the query (keyword overlap).
 * Returns a set of section keys to include. Always includes congressOptions and ingestion as base.
 */
function getRelevantSectionKeys(query) {
  const queryWords = getQueryKeywords(query);
  const relevant = new Set(['congressOptions', 'ingestion']);

  for (const [sectionKey, keywords] of Object.entries(SECTION_KEYWORDS)) {
    const match = queryWords.some((w) => keywords.some((k) => k.includes(w) || w.includes(k))) ||
      keywords.some((k) => query.toLowerCase().includes(k));
    if (match) relevant.add(sectionKey);
  }

  // If query is very short or few sections matched, include all (full context)
  if (queryWords.length <= 2 || relevant.size <= 3) {
    SECTION_KEYS.forEach((k) => relevant.add(k));
  }

  return relevant;
}

/**
 * Build RAG context string from demoContext, selecting sections relevant to the query.
 * Used by the backend to build the prompt for Claude/OpenAI.
 */
export function getRelevantContext(demoContext, query) {
  const keysToInclude = getRelevantSectionKeys(query);
  const parts = [];

  const labels = {
    congressOptions: 'CONGRESS OPTIONS',
    ingestion: 'CONGRESS & PUBLICATION INGESTION',
    themes: 'KEY SCIENTIFIC THEMES',
    competitorVisibility: 'COMPETITOR VISIBILITY AT CONGRESS',
    topKols: 'TOP KOLS (ENGAGEMENT LIST)',
    trials: 'CLINICAL TRIALS',
    social: 'SOCIAL & DIGITAL SIGNALS',
    trendSentiment: 'TREND SENTIMENT (CIRSE 2024 → 2025)',
    scientificArticles: 'SCIENTIFIC ARTICLES (TREND SOURCES)',
    socialTrendSources: 'SOCIAL POSTS (TREND SOURCES)',
  };

  for (const key of SECTION_KEYS) {
    if (!keysToInclude.has(key) || !demoContext[key]) continue;
    const label = labels[key] || key;
    parts.push(`${label}:\n${JSON.stringify(demoContext[key], null, 2)}`);
  }

  return parts.join('\n\n');
}
