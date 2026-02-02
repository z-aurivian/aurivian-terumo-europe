/**
 * Single backend for Auri: lightweight RAG over demo data + Claude/OpenAI (user does not choose).
 * Tries Claude first, then OpenAI; falls back to keyword answers if no keys or both fail.
 */

import { getDemoContext } from '../data/demoData';
import { getRelevantContext } from './rag';
import { askClaudeWithContext } from './claudeApi';
import { askOpenAIWithContext } from './openaiApi';

const PRE_TRAINED_KNOWLEDGE_INSTRUCTION = `
You may also use your pre-trained knowledge about Terumo (medical devices, interventional systems), LifePearl (drug-eluting beads for TACE/DEB-TACE in HCC and interventional oncology), and its competitors (e.g. DC Bead / DC Bead LUMI by BTG/Boston Scientific, HepaSphere by Merit Medical) to enrich your answers when the provided data does not fully address the question. Stay concise and accurate; prefer the provided RAG context when it answers the question.
`;

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
  if (lower.includes('competitor') || lower.includes('visibility')) {
    const v = demoContext.competitorVisibility;
    return `At congress: LifePearl (Terumo) ${v[0].share}% share, DC Bead/LUMI ${v[1].share}%, HepaSphere ${v[2].share}%, Other ${v[3].share}%.`;
  }
  if (lower.includes('theme') || lower.includes('momentum')) {
    const t = demoContext.themes[0];
    return `Key themes include "${t.theme}" (momentum ${t.momentum}, ${t.mentions} mentions). Others: degradable vs permanent beads, sequencing with TKIs, device selection.`;
  }
  if (lower.includes('help') || lower.includes('what can you do')) {
    return 'I can answer questions about: CIRSE 2024/2025 and trend analysis, LifePearl and competitor sentiment, top KOLs, scientific themes, clinical trials, and social signals.';
  }
  return 'I can help with LifePearl congress & KOL intelligence: CIRSE 2024/2025, sentiment trends, KOLs, competitor visibility, and themes. Ask me a specific question.';
}

/**
 * Single entry point for Auri. Uses RAG over demo data, then Claude or OpenAI on the backend.
 * User never sees or selects provider. Falls back to keyword answers if no API keys or both fail.
 */
export async function askAuri(userMessage) {
  const demoContext = getDemoContext();
  const ragContext = getRelevantContext(demoContext, userMessage);

  const systemPrompt = `You are Auri, a helpful assistant for the Terumo Europe Congress & KOL Intelligence demo. Focus on LifePearl (TACE/IO). Answer using the following retrieved data when it applies. Be concise and accurate.

${PRE_TRAINED_KNOWLEDGE_INSTRUCTION}

RETRIEVED DATA (from demo data folder):
${ragContext}

If the question is outside this scope, politely say you can only help with Terumo Europe LifePearl congress & KOL intelligence.`;

  const hasClaude = !!process.env.REACT_APP_ANTHROPIC_API_KEY;
  const hasOpenAI = !!process.env.REACT_APP_OPENAI_API_KEY;

  let claudeError = null;

  if (hasClaude) {
    try {
      return await askClaudeWithContext(userMessage, systemPrompt);
    } catch (err) {
      claudeError = err;
      // Try OpenAI as fallback
    }
  }

  if (hasOpenAI) {
    try {
      return await askOpenAIWithContext(userMessage, systemPrompt);
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
