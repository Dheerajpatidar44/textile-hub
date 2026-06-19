import { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const C = {
  primary: '#e2b865',        // Gold
  primaryDark: '#0a0c10',
  soil: '#e2b865',
  sand: '#12151c',
  cream: '#1b202c',
  border: '#2a3142',
  stone: '#a0aec0',
  accent: '#e2b865',         // Gold Accent
};

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] overflow-hidden border rounded-none"
          style={{ borderColor: C.border, background: '#12151c', boxShadow: '0 16px 48px rgba(0,0,0,0.4)' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: C.cream }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-none flex items-center justify-center shrink-0 border"
                style={{ background: C.sand, borderColor: C.border }}
              >
                <Sparkles size={15} color={C.accent} />
              </div>
              <div className="text-left">
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Aura Weaves Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-none bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] tracking-wide" style={{ color: C.stone }}>
                    Online · Replies instantly
                  </span>
                </div>
              </div>
            </div>
 
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-none transition-colors text-white"
            >
              <X size={18} />
            </button>
          </div>
 
          {/* Chat Body */}
          <div className="p-5 h-64 overflow-y-auto" style={{ background: C.sand }}>
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-none flex items-center justify-center shrink-0 mt-0.5 border"
                style={{ background: C.cream, borderColor: C.border }}
              >
                <Sparkles size={11} color={C.accent} />
              </div>
              <div
                className="px-4 py-3 rounded-none max-w-[82%] bg-[#1b202c] text-left border"
                style={{ borderColor: C.border }}
              >
                <p className="text-[13px] leading-relaxed text-[#e2e8f0]">
                  Namaste! 🙏 Welcome to <strong>Aura Weaves</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'e-Quotation info'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-none transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: C.cream, border: `1.5px solid ${C.border}`, color: C.stone }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = 'white'; e.currentTarget.style.background = C.cream; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; e.currentTarget.style.background = C.cream; }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-[#1b202c]"
            style={{ borderColor: C.border }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-none text-[13px] outline-none transition-all duration-200 text-white border-b"
              style={{ background: 'transparent', borderColor: C.border }}
              onFocus={e => e.target.style.borderColor = C.accent}
              onBlur={e => e.target.style.borderColor = C.border}
            />
            <button
              className="w-9 h-9 rounded-none flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 cursor-pointer border"
              style={{ background: C.primary, borderColor: C.primary }}
            >
              <Send size={15} color="#12151c" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat Assistant"
        className="w-[52px] h-[52px] rounded-none flex items-center justify-center cursor-pointer transition-all duration-300 border"
        style={{
          background: C.primary,
          borderColor: C.primary,
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
        }}
      >
        {isOpen ? (
          <X size={22} color="#12151c" />
        ) : (
          <MessageSquareText size={22} color="#12151c" />
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
