import React, { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] overflow-hidden shadow-2xl rounded-2xl"
          style={{
            border: '1.5px solid #EADBC8',
            background: '#FFFFFF',
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: 'linear-gradient(135deg, #1C032B 0%, #2A083E 100%)' }}
          >
            {/* Theme accent top gold bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: '#C5A059' }}
            />

            <div className="flex items-center gap-3">
              {/* Bot avatar */}
              <div
                className="w-9 h-9 flex items-center justify-center shrink-0 border border-[#C5A059]/30 bg-white/5 text-[#C5A059] rounded-full"
              >
                <Sparkles size={15} />
              </div>
              <div className="text-left">
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Mayura Royal Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-[10px] tracking-wide text-white/60">
                    Online · Replies instantly
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="transition-all duration-200 hover:rotate-90 hover:scale-110 text-white/70 hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div
            className="p-5 h-64 overflow-y-auto"
            style={{ background: '#FAF6F0' }}
          >
            {/* Bot message */}
            <div className="flex items-start gap-2.5 mb-4 text-left">
              <div
                className="w-7 h-7 flex items-center justify-center shrink-0 mt-0.5 bg-white border border-[#C5A059]/20 text-[#C5A059] rounded-full"
              >
                <Sparkles size={11} />
              </div>
              <div
                className="px-4 py-3 max-w-[82%] shadow-sm bg-white rounded-xl"
                style={{ border: '1px solid #EADBC8' }}
              >
                <p className="text-[13px] leading-relaxed text-[#2A083E]">
                  Namaste! 🙏 Welcome to <strong>Mayura Royal Textile Mall</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            {/* Quick reply chips */}
            <div className="flex flex-wrap gap-2 mt-3 pl-9 text-left">
              {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer rounded-lg"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #EADBC8',
                    color: '#786B80',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#C5A059';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.background = '#C5A059';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#EADBC8';
                    e.currentTarget.style.color = '#786B80';
                    e.currentTarget.style.background = '#FFFFFF';
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-white"
            style={{ borderColor: '#EADBC8' }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 text-[13px] outline-none transition-all duration-200 rounded-xl"
              style={{
                background: '#FAF6F0',
                border: '1.5px solid #EADBC8',
                color: '#2A083E',
              }}
              onFocus={e => e.target.style.borderColor = '#C5A059'}
              onBlur={e => e.target.style.borderColor = '#EADBC8'}
            />
            <button
              className="w-9 h-9 flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer rounded-lg"
              style={{ background: 'linear-gradient(135deg, #C5A059 0%, #D4AF37 100%)', boxShadow: '0 3px 10px rgba(197,160,89,0.2)' }}
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
        className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer rounded-full"
        style={{
          background: '#C5A059',
          boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)',
        }}
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <MessageSquareText size={22} />
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
