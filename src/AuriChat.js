import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader, RotateCcw, AlertCircle } from 'lucide-react';
import { getDemoContext } from './data/demoData';
import { askAuri, keywordFallback } from './api/auriApi';

const initialMessage = {
  role: 'assistant',
  content: "Hello! I'm Auri, your assistant for Congress & KOL Intelligence (LifePearl). Ask me about CIRSE 2024/2025, sentiment trends, KOLs, competitor visibility, themes, trials, or any data in the demo.",
};

function AuriChat() {
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const demoContext = getDemoContext();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const resetConversation = () => {
    setMessages([initialMessage]);
    setError(null);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);
    setError(null);

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await askAuri(userMessage);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setError('Unable to reach the assistant. Please try again.');
      const fallback = keywordFallback(userMessage, demoContext);
      setMessages((prev) => [...prev, { role: 'assistant', content: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#111111' }}>
      <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: '#2D2C2C' }}>
        <div>
          <div className="text-lg font-bold" style={{ color: '#00A8FF' }}>Auri</div>
          <div className="text-xs" style={{ color: '#8D8C8C' }}>Congress & KOL Intelligence · LifePearl</div>
        </div>
        <button
          onClick={resetConversation}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all hover:opacity-80 text-sm"
          style={{ backgroundColor: '#2D2C2C', color: '#8D8C8C' }}
          title="Reset conversation"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      {error && (
        <div className="mx-4 mt-4 p-3 rounded-lg flex items-center gap-2" style={{ backgroundColor: 'rgba(255,68,0,0.1)', border: '1px solid #FF4400' }}>
          <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#FF4400' }} />
          <span className="text-sm" style={{ color: '#FF4400' }}>{error}</span>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl mx-auto w-full">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2D2C2C' }}>
                <Bot className="w-5 h-5" style={{ color: '#00A8FF' }} />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
              }`}
              style={{
                backgroundColor: msg.role === 'user' ? '#00A8FF' : '#2D2C2C',
                color: '#FAFAFA',
              }}
            >
              <div>{msg.content}</div>
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2D2C2C' }}>
                <User className="w-5 h-5" style={{ color: '#8D8C8C' }} />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2D2C2C' }}>
              <Bot className="w-5 h-5" style={{ color: '#00A8FF' }} />
            </div>
            <div className="rounded-lg rounded-bl-none p-3" style={{ backgroundColor: '#2D2C2C', color: '#FAFAFA' }}>
              <Loader className="w-5 h-5 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 border-t max-w-3xl mx-auto w-full" style={{ borderColor: '#2D2C2C' }}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about LifePearl, CIRSE, KOLs, sentiment..."
            className="flex-1 px-4 py-2 rounded-lg"
            style={{ backgroundColor: '#2D2C2C', color: '#FAFAFA', border: '1px solid #2D2C2C' }}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 transition-all"
            style={{ backgroundColor: '#00A8FF', color: '#FAFAFA' }}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuriChat;
