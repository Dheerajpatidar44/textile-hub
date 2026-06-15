import React, { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: '1.5px solid #E2D9CC', background: '#FFFFFF' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: 'linear-gradient(135deg, #5F6F5E 0%, #3B4A32 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: '#C5A880' }} />

            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Sparkles size={15} color="white" />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Grand Textile Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Online · Replies instantly
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="transition-all duration-200 hover:rotate-90 hover:scale-110 cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-5 h-64 overflow-y-auto" style={{ background: '#F8F5EF' }}>
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: 'linear-gradient(135deg, #5F6F5E 0%, #3B4A32 100%)' }}
              >
                <Sparkles size={11} color="white" />
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-tl-sm max-w-[82%] shadow-sm bg-white"
                style={{ border: '1px solid #E2D9CC' }}
              >
                <p className="text-[13px] leading-relaxed" style={{ color: '#2A3325' }}>
                  Namaste! 🙏 Welcome to <strong>Grand Textile Mart</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: '#FFFFFF', border: '1.5px solid #E2D9CC', color: '#4B5563' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#5F6F5E'; e.currentTarget.style.color = '#5F6F5E'; e.currentTarget.style.background = '#EFF3EB'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2D9CC'; e.currentTarget.style.color = '#4B5563'; e.currentTarget.style.background = '#FFFFFF'; }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-white"
            style={{ borderColor: 'rgba(95,111,94,0.15)' }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all duration-200"
              style={{ background: '#F8F5EF', border: '1.5px solid #E2D9CC', color: '#2A3325' }}
              onFocus={e => e.target.style.borderColor = '#5F6F5E'}
              onBlur={e => e.target.style.borderColor = '#E2D9CC'}
            />
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #5F6F5E 0%, #3B4A32 100%)', boxShadow: '0 3px 10px rgba(95,111,94,0.25)' }}
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
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #3B4A32 0%, #5F6F5E 100%)'
            : 'linear-gradient(135deg, #5F6F5E 0%, #3B4A32 100%)',
          border: '2px solid rgba(255,255,255,0.4)',
          boxShadow: '0 6px 20px rgba(95,111,94,0.35)',
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
