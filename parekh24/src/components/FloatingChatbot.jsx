import { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end" style={{ fontFamily: "'Jost', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] rounded-2xl overflow-hidden border"
          style={{ borderColor: '#E8E2D7', background: '#FFFFFF' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: '#C5A377' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: '#3D3025' }}
              >
                <Sparkles size={15} color="white" />
              </div>
              <div className="text-left">
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Shree Textile Mall Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-200 animate-pulse" />
                  <span className="text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Online · Replies instantly
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-5 h-64 overflow-y-auto" style={{ background: '#F6F1EA' }}>
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: '#C5A377' }}
              >
                <Sparkles size={11} color="white" />
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-tl-sm max-w-[82%] bg-white text-left border"
                style={{ borderColor: '#E8E2D7' }}
              >
                <p className="text-[13px] leading-relaxed" style={{ color: '#3D3025' }}>
                  Namaste! 🙏 Welcome to <strong>Shree Textile Mall</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: '#FFFFFF', border: '1.5px solid #E8E2D7', color: '#3D3025' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C5A377'; e.currentTarget.style.color = '#C5A377'; e.currentTarget.style.background = '#F6F1EA'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E2D7'; e.currentTarget.style.color = '#3D3025'; e.currentTarget.style.background = '#FFFFFF'; }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-white"
            style={{ borderColor: 'rgba(197,163,119,0.15)' }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all duration-200"
              style={{ background: '#F6F1EA', border: '1.5px solid #E8E2D7', color: '#3D3025' }}
              onFocus={e => e.target.style.borderColor = '#C5A377'}
              onBlur={e => e.target.style.borderColor = '#E8E2D7'}
            />
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 cursor-pointer border"
              style={{ background: '#C5A377', borderColor: '#E8E2D7' }}
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
          background: isOpen ? '#3D3025' : '#C5A377',
          borderColor: '#E8E2D7',
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
