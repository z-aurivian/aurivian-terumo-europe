import OpenAI from 'openai';

function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY || '',
    dangerouslyAllowBrowser: true,
  });
}

/** Call OpenAI with a pre-built system prompt (e.g. from RAG). Used by Auri backend.
 * @param {string} userMessage - The current user message
 * @param {string} systemPrompt - System prompt with RAG context
 * @param {Array} conversationHistory - Optional array of previous messages for multi-turn context
 */
export const askOpenAIWithContext = async (userMessage, systemPrompt, conversationHistory = []) => {
  if (!process.env.REACT_APP_OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured.');
  }
  const openai = getOpenAIClient();

  try {
    // Build messages array: system prompt, then conversation history, then current user message
    const historyMessages = conversationHistory
      .filter((msg) => msg.content !== userMessage || msg.role !== 'user')
      .slice(0, -1)
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    const messages = [
      { role: 'system', content: systemPrompt },
      ...historyMessages,
      { role: 'user', content: userMessage },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages,
      max_tokens: 1024,
    });

    const text = completion.choices?.[0]?.message?.content;
    return text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error(`Failed to get response from OpenAI: ${error.message}`);
  }
};

/** Legacy: full demo context (no RAG). Kept for compatibility. */
export const askOpenAI = async (userMessage, demoContext) => {
  const systemContent = `You are Auri, a helpful assistant for the Terumo Europe Congress & KOL Intelligence demo. Focus on LifePearl (TACE/IO). Answer questions based on the following context only. Be concise and accurate.

CONGRESS: ${JSON.stringify(demoContext.congressOptions, null, 2)}
INGESTION: ${JSON.stringify(demoContext.ingestion, null, 2)}
THEMES: ${JSON.stringify(demoContext.themes, null, 2)}
COMPETITOR VISIBILITY: ${JSON.stringify(demoContext.competitorVisibility, null, 2)}
TOP KOLS: ${JSON.stringify(demoContext.topKols, null, 2)}
TRIALS: ${JSON.stringify(demoContext.trials, null, 2)}
SOCIAL: ${JSON.stringify(demoContext.social, null, 2)}
TREND SENTIMENT (CIRSE 2024 → 2025): ${JSON.stringify(demoContext.trendSentiment, null, 2)}
SCIENTIFIC ARTICLES: ${JSON.stringify(demoContext.scientificArticles, null, 2)}
SOCIAL TREND SOURCES: ${JSON.stringify(demoContext.socialTrendSources, null, 2)}

If the question is about data not in this context, politely say you can only answer questions about the Terumo Europe LifePearl congress & KOL intelligence data.`;
  return askOpenAIWithContext(userMessage, systemContent);
};
