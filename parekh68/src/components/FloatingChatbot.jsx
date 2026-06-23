import { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const C = {
  primary: '#0b3329',       // Charcoal
  primaryLight: '#15473b',  // Medium Charcoal
  primaryDark: '#062c22',   // Deep Charcoal
  accent: '#bca374',        // Gold
  gold: '#bca374',
  bg: '#fcf8f2',
  border: '#eadacc',
  stone: '#4d5d59',
  soil: '#0b3329',
};

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] overflow-hidden border rounded-2xl animate-fade-in"
          style={{ borderColor: C.border, background: '#fcf8f2', boxShadow: '0 16px 48px rgba(43, 37, 32, 0.12)' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: C.primary }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: C.accent }}
              >
                <Sparkles size={15} color="white" />
              </div>
              <div className="text-left">
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Zariya House Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Online · Replies instantly
                  </span>
                </div>
              </div>
            </div>
 
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X size={18} />
            </button>
          </div>
 
          {/* Chat Body */}
          <div className="p-5 h-64 overflow-y-auto" style={{ background: C.bg }}>
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: C.accent }}
              >
                <Sparkles size={11} color="white" />
              </div>
              <div
                className="px-4 py-3 rounded-xl rounded-tl-none max-w-[82%] bg-white text-left border"
                style={{ borderColor: C.border }}
              >
                <p className="text-[13px] leading-relaxed" style={{ color: C.stone }}>
                  Namaste! 🙏 Welcome to <strong>Zariya House</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'e-Quotation info'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: '#FFFFFF', border: `1.5px solid ${C.border}`, color: C.stone }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; e.currentTarget.style.background = C.bg; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; e.currentTarget.style.background = '#FFFFFF'; }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-white"
            style={{ borderColor: C.border }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-full text-[13px] outline-none transition-all duration-200"
              style={{ background: C.bg, border: `1.5px solid ${C.border}`, color: C.soil }}
              onFocus={e => e.target.style.borderColor = C.accent}
              onBlur={e => e.target.style.borderColor = C.border}
            />
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 cursor-pointer border"
              style={{ background: C.primary, borderColor: C.border }}
            >
              <Send size={15} color="white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat Assistant"
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border"
        style={{
          background: isOpen ? C.soil : C.primary,
          borderColor: C.border,
          boxShadow: '0 4px 16px rgba(43, 37, 32, 0.2)'
        }}
      >
        {isOpen ? (
          <X size={22} color="white" />
        ) : (
          <MessageSquareText size={22} color="white" />
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
