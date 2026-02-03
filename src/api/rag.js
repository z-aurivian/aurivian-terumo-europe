/**
 * Lightweight RAG over the demo data folder (getDemoContext) and strategic content.
 * Chunks by section and retrieves by keyword overlap so the LLM gets relevant context only.
 * No embeddings; keyword-based selection to keep it lightweight.
 */

import {
  THEMES_AND_NARRATIVE,
  PRODUCT_POSITIONING,
  CLINICAL_PRACTICE,
  UNMET_NEEDS,
  KOL_INSIGHTS,
} from '../data/strategicContent';

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
  // Strategic content sections
  'strategicThemes',
  'productPositioning',
  'clinicalPractice',
  'unmetNeeds',
  'kolInsightsDeep',
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
  // Strategic content keywords
  strategicThemes: ['narrative', 'paradigm', 'shift', 'emerging', 'evolution', 'landscape', 'combination therapy', 'immunotherapy'],
  productPositioning: ['lifepearl', 'compare', 'comparison', 'versus', 'vs', 'competitor', 'positioning', 'differentiation', 'advantage'],
  clinicalPractice: ['guideline', 'algorithm', 'msl', 'clinical decision', 'practice', 'when to use', 'standard of care', 'patient selection'],
  unmetNeeds: ['gap', 'opportunity', 'unmet need', 'evidence gap', 'investment', 'strategy', 'priority', 'challenge'],
  kolInsightsDeep: ['who', 'expert', 'leader', 'speaker', 'engagement', 'regional', 'combination therapy kol', 'top kol'],
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
 * Get condensed strategic content for a specific key
 * @param {string} key - Strategic content section key
 * @returns {string|null} Condensed content or null
 */
function getStrategicContent(key) {
  switch (key) {
    case 'strategicThemes': {
      // Top 3 themes with descriptions only
      const themes = THEMES_AND_NARRATIVE.dominantThemes.slice(0, 3).map((t) => ({
        rank: t.rank,
        theme: t.theme,
        momentum: t.momentum,
        description: t.description,
        relevanceToLifePearl: t.relevanceToLifePearl,
      }));
      return JSON.stringify({ themes, emergingNarrative: THEMES_AND_NARRATIVE.emergingNarrative.headline }, null, 2);
    }
    case 'productPositioning': {
      // Comparison table only
      const comparison = PRODUCT_POSITIONING.positioningAnalysis.visibilityComparison;
      const comparisons = PRODUCT_POSITIONING.positioningAnalysis.competitiveComparisons.comparisons;
      return JSON.stringify({ visibility: comparison, keyComparisons: comparisons }, null, 2);
    }
    case 'clinicalPractice': {
      // Decision points and MSL takeaways (condensed)
      const decisionPoints = CLINICAL_PRACTICE.clinicalDecisionPoints;
      const takeaways = CLINICAL_PRACTICE.mslTakeaways.statements.slice(0, 3).map((s) => ({
        framing: s.framing,
        takeaway: s.takeaway,
      }));
      return JSON.stringify({ decisionPoints, mslTakeaways: takeaways }, null, 2);
    }
    case 'unmetNeeds': {
      // Gap name and relevance only
      const priorities = UNMET_NEEDS.priorityRanking.ranking;
      const topGaps = UNMET_NEEDS.evidenceGaps.gaps.slice(0, 3).map((g) => ({
        gap: g.gap,
        strategicRelevance: g.strategicRelevance,
        opportunityForTerumo: g.opportunityForTerumo,
      }));
      return JSON.stringify({ priorities, topGaps }, null, 2);
    }
    case 'kolInsightsDeep': {
      // Name, institution, score, focus areas only
      const topKols = KOL_INSIGHTS.topKOLs.kols.slice(0, 10).map((k) => ({
        rank: k.rank,
        name: k.name,
        institution: k.institution,
        country: k.country,
        score: k.score,
        focusAreas: k.focusAreas,
        engagementPriority: k.engagementPriority,
      }));
      const byProduct = KOL_INSIGHTS.kolMapping.byProduct;
      const byTheme = KOL_INSIGHTS.kolMapping.byTheme;
      return JSON.stringify({ topKols, kolMapping: { byProduct, byTheme } }, null, 2);
    }
    default:
      return null;
  }
}

/**
 * Build RAG context string from demoContext and strategic content, selecting sections relevant to the query.
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
    // Strategic content labels
    strategicThemes: 'STRATEGIC THEMES & NARRATIVE (CIRSE/ECIO Analysis)',
    productPositioning: 'PRODUCT & COMPETITOR POSITIONING',
    clinicalPractice: 'CLINICAL PRACTICE & MSL GUIDANCE',
    unmetNeeds: 'UNMET NEEDS & EVIDENCE GAPS',
    kolInsightsDeep: 'KOL DEEP INSIGHTS & MAPPING',
  };

  // Strategic content keys
  const strategicKeys = ['strategicThemes', 'productPositioning', 'clinicalPractice', 'unmetNeeds', 'kolInsightsDeep'];

  for (const key of SECTION_KEYS) {
    if (!keysToInclude.has(key)) continue;

    const label = labels[key] || key;

    // Check if it's a strategic content key
    if (strategicKeys.includes(key)) {
      const content = getStrategicContent(key);
      if (content) {
        parts.push(`${label}:\n${content}`);
      }
    } else if (demoContext[key]) {
      // Regular demo data
      parts.push(`${label}:\n${JSON.stringify(demoContext[key], null, 2)}`);
    }
  }

  return parts.join('\n\n');
}
