/**
 * Single backend for Auri: lightweight RAG over demo data + Claude/OpenAI (user does not choose).
 * Tries Claude first, then OpenAI; falls back to keyword answers if no keys or both fail.
 */

import { getDemoContext } from '../data/demoData';
import { getRelevantContext } from './rag';
import { askClaudeWithContext } from './claudeApi';
import { askOpenAIWithContext } from './openaiApi';
import { buildDynamicPrompt } from './promptBuilder';

export function keywordFallback(userMessage, demoContext) {
  const lower = userMessage.toLowerCase();
  if (lower.includes('lifepearl') && (lower.includes('sentiment') || lower.includes('trend'))) {
    return 'LifePearl scientific sentiment rises from 62 (Post-CIRSE 2024) to 85 at CIRSE 2025; social sentiment from 58 to 82. Trends are driven by scientific articles and social posts between the two congresses.';
  }
  if (lower.includes('cirse 2024') || lower.includes('cirse 2025')) {
    return 'CIRSE 2024 was in Lisbon, Portugal (Sept 14–18, 2024). CIRSE 2025 is in Barcelona (Sept 6–10, 2025). We track sentiment and visibility between the two; CIRSE 2026 (Copenhagen) will be added as the congress approaches.';
  }
  if (lower.includes('kol') || lower.includes('key opinion')) {
    const top = demoContext.topKols.slice(0, 3).map((k) => `${k.name} (${k.institution}, score ${k.score})`).join('; ');
    return `Top KOLs for LifePearl: ${top}. There are 10 in the actionable engagement list, ranked by influence, congress presence, and publication alignment.`;
  }
  if (lower.includes('competitor') || lower.includes('visibility') || (lower.includes('compare') && (lower.includes('lifepearl') || lower.includes('dc bead') || lower.includes('hepasphere') || lower.includes('congress')))) {
    const v = demoContext.competitorVisibility;
    return `At congress: LifePearl (Terumo) ${v[0].share}% share, DC Bead/LUMI ${v[1].share}%, HepaSphere ${v[2].share}%, Other ${v[3].share}%. LifePearl has ${v[0].mentions} mentions; DC Bead/LUMI ${v[1].mentions}; HepaSphere ${v[2].mentions}.`;
  }
  if (lower.includes('theme') || lower.includes('momentum')) {
    const t = demoContext.themes[0];
    return `Key themes include "${t.theme}" (momentum ${t.momentum}, ${t.mentions} mentions). Others: degradable vs permanent beads, sequencing with TKIs, device selection.`;
  }
  if (lower.includes('trial') || lower.includes('nct')) {
    const { trials } = demoContext;
    const matches = (trials?.sample || []).filter(
      (t) => lower.includes(t.nctId.toLowerCase())
    );
    if (matches.length > 0) {
      return matches.map((t) => `**${t.nctId}**: ${t.title} (${t.phase}, ${t.product}, ${t.indication}, ${t.status})`).join('\n\n');
    }
    const list = (trials?.sample || []).slice(0, 4).map((t) => `${t.nctId}: ${t.title} — ${t.product}, ${t.indication}`).join('\n');
    return `From the demo data, sample clinical trials:\n\n${list}\n\nTotal: ${trials?.total ?? 0} trials; ${trials?.linkedToKOLs ?? 0} linked to KOLs.`;
  }
  if (lower.includes('help') || lower.includes('what can you do')) {
    return 'I can answer questions about: CIRSE 2024/2025 and trend analysis, LifePearl and competitor sentiment, top KOLs, scientific themes, clinical trials, and social signals.';
  }
  return 'I can help with LifePearl congress & KOL intelligence: CIRSE 2024/2025, sentiment trends, KOLs, competitor visibility, and themes. Ask me a specific question.';
}

/**
 * Single entry point for Auri. Uses RAG over demo data, then Claude or OpenAI on the backend.
 * User never sees or selects provider. Falls back to keyword answers if no API keys or both fail.
 * @param {string} userMessage - The current user message
 * @param {Array} conversationHistory - Optional array of previous messages (sliding window of last 10)
 */
export async function askAuri(userMessage, conversationHistory = []) {
  const demoContext = getDemoContext();
  const ragContext = getRelevantContext(demoContext, userMessage);

  // Use dynamic prompt builder with category detection and strategic content
  const systemPrompt = buildDynamicPrompt(userMessage, ragContext);

  const hasClaude = !!process.env.REACT_APP_ANTHROPIC_API_KEY;
  const hasOpenAI = !!process.env.REACT_APP_OPENAI_API_KEY;

  let claudeError = null;

  if (hasClaude) {
    try {
      return await askClaudeWithContext(userMessage, systemPrompt, conversationHistory);
    } catch (err) {
      claudeError = err;
      // Try OpenAI as fallback
    }
  }

  if (hasOpenAI) {
    try {
      return await askOpenAIWithContext(userMessage, systemPrompt, conversationHistory);
    } catch (_) {
      // Fall through to keyword fallback
    }
  }

  // No API worked; if Claude was tried and failed, surface that error so the user can fix the key
  if (claudeError) {
    throw claudeError;
  }

  return keywordFallback(userMessage, demoContext);
}
