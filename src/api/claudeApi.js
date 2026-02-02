import Anthropic from '@anthropic-ai/sdk';

function getAnthropicClient() {
  return new Anthropic({
    apiKey: process.env.REACT_APP_ANTHROPIC_API_KEY || '',
    dangerouslyAllowBrowser: true, // Demo runs in browser; for production use a backend proxy so the key is never in the client.
  });
}

/** Call Claude with a pre-built context string (e.g. from RAG). Used by Auri backend. */
export const askClaudeWithContext = async (userMessage, systemPrompt) => {
  if (!process.env.REACT_APP_ANTHROPIC_API_KEY) {
    throw new Error('Anthropic API key not configured.');
  }
  const anthropic = getAnthropicClient();

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      messages: [{ role: 'user', content: `${systemPrompt}\n\nUser question: ${userMessage}` }],
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
