/**
 * Dynamic prompt builder with category detection for Auri
 * Detects user intent and generates context-aware system prompts using the 5 strategic content categories
 */

import {
  THEMES_AND_NARRATIVE,
  PRODUCT_POSITIONING,
  CLINICAL_PRACTICE,
  UNMET_NEEDS,
  KOL_INSIGHTS,
} from '../data/strategicContent';

// Category keyword mappings for intent detection
const CATEGORY_KEYWORDS = {
  themesAndNarrative: [
    'theme', 'themes', 'narrative', 'trend', 'trends', 'emerging', 'paradigm', 'momentum',
    'scientific theme', 'key themes', 'topic', 'discussion', 'evolution', 'shift',
    'landscape', 'development', 'what\'s new', 'latest', 'direction'
  ],
  productPositioning: [
    'competitor', 'competitors', 'competition', 'lifepearl', 'dc bead', 'hepasphere',
    'comparison', 'compare', 'positioning', 'visibility', 'versus', 'vs', 'market share',
    'boston scientific', 'merit medical', 'terumo', 'advantage', 'differentiation',
    'better', 'worse', 'superior', 'inferior', 'bead', 'beads', 'microsphere'
  ],
  clinicalPractice: [
    'practice', 'guideline', 'guidelines', 'algorithm', 'msl', 'clinical', 'treatment',
    'protocol', 'standard of care', 'recommendation', 'when to use', 'patient selection',
    'procedure', 'technique', 'bclc', 'indication', 'physician', 'decision', 'mdt',
    'real-world', 'real world', 'outcomes', 'safety', 'efficacy'
  ],
  unmetNeeds: [
    'gap', 'gaps', 'opportunity', 'opportunities', 'unmet', 'need', 'needs',
    'evidence', 'investment', 'differentiation', 'strategy', 'strategic',
    'missing', 'lacking', 'challenge', 'challenges', 'barrier', 'barriers',
    'future', 'priority', 'priorities'
  ],
  kolInsights: [
    'kol', 'kols', 'key opinion leader', 'key opinion leaders', 'speaker', 'speakers',
    'engagement', 'congress', 'expert', 'experts', 'author', 'professor', 'doctor',
    'influence', 'influential', 'top', 'leading', 'who', 'session', 'presentation',
    'stakeholder', 'advocate', 'champion'
  ]
};

/**
 * Detect which categories are relevant to the user's query
 * @param {string} query - User's question
 * @returns {Set} Set of relevant category keys
 */
export function detectCategories(query) {
  const lower = query.toLowerCase();
  const detected = new Set();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const match = keywords.some((kw) => lower.includes(kw));
    if (match) {
      detected.add(category);
    }
  }

  // If no specific category detected, include general themes
  if (detected.size === 0) {
    detected.add('themesAndNarrative');
  }

  return detected;
}

/**
 * Get few-shot examples for detected categories
 * @param {Set} categories - Detected category keys
 * @returns {string} Few-shot examples string
 */
function getFewShotExamples(categories) {
  const examples = [];

  if (categories.has('themesAndNarrative')) {
    examples.push(`Example Q: "What are the top themes at CIRSE 2025?"
Example A: The dominant themes at CIRSE 2025 include:
1. **TACE + Immunotherapy Combinations** (Momentum: High) - EMERALD-1 and LEAP-012 trials show significant PFS benefit
2. **Degradable vs Permanent Microspheres** (Momentum: High) - BioPearl introduces new retreatment paradigm
3. **Ablation Margin Assessment** - Software-aided guidance becoming standard practice`);
  }

  if (categories.has('productPositioning')) {
    examples.push(`Example Q: "How does LifePearl compare to DC Bead?"
Example A: **LifePearl vs DC Bead:**
| Feature | LifePearl | DC Bead |
|---------|-----------|---------|
| Suspension time | 357s (superior) | 172-185s |
| Material | PEG | PVA |
| Visibility | Standard | LUMI variant radiopaque |
| Evidence | 580-pt pooled analysis | PRECISION V (most extensive) |`);
  }

  if (categories.has('clinicalPractice')) {
    examples.push(`Example Q: "When should I choose LifePearl?"
Example A: **Choose LifePearl when:**
- Planning combination with systemic immunotherapy (controlled drug delivery)
- Retreatment candidates where vessel patency matters (consider BioPearl)
- Procedures requiring extended working time (357s suspension)
- Centers prioritizing standardized, reproducible technique`);
  }

  if (categories.has('kolInsights')) {
    examples.push(`Example Q: "Who are the top KOLs for combination therapy?"
Example A: **Top KOLs for TACE + Immunotherapy Combinations:**
1. Prof. Josep M. Llovet (Barcelona/Mount Sinai) - BCLC founder, global HCC thought leader
2. Prof. Bruno Sangro (Navarra) - Strong SIRT/immunotherapy focus
3. Prof. Masatoshi Kudo (Kindai) - Key Asian perspective on systemic + locoregional`);
  }

  if (categories.has('unmetNeeds')) {
    examples.push(`Example Q: "What are the evidence gaps for LifePearl?"
Example A: **Key evidence gaps and opportunities:**
1. **Head-to-head DEB comparisons** - No large RCT comparing LifePearl vs DC Bead vs HepaSphere
2. **Optimal combination protocols** - TACE + immunotherapy sequencing undefined
3. **Degradable bead indications** - When to use BioPearl vs permanent beads`);
  }

  return examples.length > 0 ? `\n\nFEW-SHOT EXAMPLES:\n${examples.join('\n\n')}` : '';
}

/**
 * Get strategic context for detected categories (condensed for token efficiency)
 * @param {Set} categories - Detected category keys
 * @returns {string} Strategic context string
 */
function getStrategicContext(categories) {
  const parts = [];

  if (categories.has('themesAndNarrative')) {
    const themes = THEMES_AND_NARRATIVE.dominantThemes.slice(0, 3).map((t) =>
      `${t.rank}. ${t.theme} (Momentum: ${t.momentum}) - ${t.description.slice(0, 150)}...`
    );
    parts.push(`STRATEGIC THEMES:\n${themes.join('\n')}\n\nEmerging narrative: ${THEMES_AND_NARRATIVE.emergingNarrative.headline}`);
  }

  if (categories.has('productPositioning')) {
    const visibility = PRODUCT_POSITIONING.positioningAnalysis.visibilityComparison.data
      .map((p) => `${p.product}: ${p.share}% share, ${p.mentions} mentions, ${p.trend}`)
      .join('\n');
    const comparisons = PRODUCT_POSITIONING.positioningAnalysis.competitiveComparisons.comparisons
      .slice(0, 3)
      .map((c) => `- ${c.comparison}: ${c.finding} (${c.classification})`)
      .join('\n');
    parts.push(`PRODUCT POSITIONING:\nVisibility at Congress:\n${visibility}\n\nKey Comparisons:\n${comparisons}`);
  }

  if (categories.has('clinicalPractice')) {
    const takeaways = CLINICAL_PRACTICE.mslTakeaways.statements.slice(0, 2)
      .map((t) => `- ${t.framing} ${t.takeaway}`)
      .join('\n');
    const whenLifePearl = CLINICAL_PRACTICE.clinicalDecisionPoints.whenToChooseLifePearl.join('; ');
    parts.push(`CLINICAL PRACTICE:\nMSL Takeaways:\n${takeaways}\n\nWhen to choose LifePearl: ${whenLifePearl}`);
  }

  if (categories.has('unmetNeeds')) {
    const priorities = UNMET_NEEDS.priorityRanking.ranking
      .slice(0, 4)
      .map((n) => `${n.rank}. ${n.need} - ${n.relevance}`)
      .join('\n');
    parts.push(`UNMET NEEDS (Priority):\n${priorities}`);
  }

  if (categories.has('kolInsights')) {
    const topKols = KOL_INSIGHTS.topKOLs.kols.slice(0, 5)
      .map((k) => `${k.rank}. ${k.name} (${k.institution}, ${k.country}) - Score: ${k.score}, Focus: ${k.focusAreas.slice(0, 2).join(', ')}`)
      .join('\n');
    const byProduct = `LifePearl-aligned: ${KOL_INSIGHTS.kolMapping.byProduct.lifePearlAligned.join(', ')}`;
    parts.push(`KOL INSIGHTS:\nTop KOLs:\n${topKols}\n\n${byProduct}`);
  }

  return parts.join('\n\n---\n\n');
}

/**
 * Build a dynamic system prompt based on detected user intent
 * @param {string} query - User's question
 * @param {string} ragContext - RAG-retrieved demo data context
 * @returns {string} Complete system prompt
 */
export function buildDynamicPrompt(query, ragContext) {
  const categories = detectCategories(query);
  const strategicContext = getStrategicContext(categories);
  const fewShotExamples = getFewShotExamples(categories);

  const preTrainedKnowledge = `
You may also use your pre-trained knowledge about Terumo (medical devices, interventional systems), LifePearl (drug-eluting beads for TACE/DEB-TACE in HCC and interventional oncology), and its competitors (e.g. DC Bead / DC Bead LUMI by BTG/Boston Scientific, HepaSphere by Merit Medical) to enrich your answers when the provided data does not fully address the question. Stay concise and accurate; prefer the provided context when it answers the question.`;

  return `You are Auri, a helpful assistant for the Terumo Europe Congress & KOL Intelligence demo. Focus on LifePearl (TACE/IO). Answer using the following retrieved data and strategic content when applicable. Be concise, accurate, and format responses with markdown tables and bullet points where appropriate.

${preTrainedKnowledge}

STRATEGIC CONTENT (pre-analyzed intelligence from CIRSE 2024/2025, ECIO):
${strategicContext}

RETRIEVED DATA (from demo data):
${ragContext}
${fewShotExamples}

If the question is outside this scope, politely say you can only help with Terumo Europe LifePearl congress & KOL intelligence.`;
}

const promptBuilder = { detectCategories, buildDynamicPrompt };
export default promptBuilder;
