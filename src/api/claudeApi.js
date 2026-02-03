import Anthropic from '@anthropic-ai/sdk';

function getAnthropicClient() {
  return new Anthropic({
    apiKey: process.env.REACT_APP_ANTHROPIC_API_KEY || '',
    dangerouslyAllowBrowser: true, // Demo runs in browser; for production use a backend proxy so the key is never in the client.
  });
}

/** Call Claude with a pre-built context string (e.g. from RAG). Used by Auri backend.
 * @param {string} userMessage - The current user message
 * @param {string} systemPrompt - System prompt with RAG context
 * @param {Array} conversationHistory - Optional array of previous messages for multi-turn context
 */
export const askClaudeWithContext = async (userMessage, systemPrompt, conversationHistory = []) => {
  if (!process.env.REACT_APP_ANTHROPIC_API_KEY) {
    throw new Error('Anthropic API key not configured.');
  }
  const anthropic = getAnthropicClient();

  try {
    // Build messages array from conversation history (excluding the current message which we add separately)
    const historyMessages = conversationHistory
      .filter((msg) => msg.content !== userMessage || msg.role !== 'user') // Exclude current message if duplicated
      .slice(0, -1) // Remove the last message (current user message) if it was included
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    // Add current user message
    const messages = [...historyMessages, { role: 'user', content: userMessage }];

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    });

    const textContent = message.content.find((block) => block.type === 'text');
    return textContent ? textContent.text : "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Claude API error:', error);
    throw new Error(`Failed to get response from Claude: ${error.message}`);
  }
};

/** Legacy: full demo context (no RAG). Kept for compatibility. */
export const askClaude = async (userMessage, demoContext) => {
  const dataContext = `
You are Auri, a helpful assistant for the Terumo Europe Congress & KOL Intelligence demo. Focus on LifePearl (TACE/IO). Answer questions based on the following context only. Be concise and accurate.

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
  return askClaudeWithContext(userMessage, dataContext);
};
