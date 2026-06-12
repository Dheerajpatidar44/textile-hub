import React, { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] overflow-hidden shadow-2xl"
          style={{
            border: '1.5px solid #24252F',
            background: '#121216',
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: 'linear-gradient(135deg, #0A0A0C 0%, #1E1F27 100%)' }}
          >
            {/* Theme accent top gold bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: '#C89B5F' }}
            />

            <div className="flex items-center gap-3">
              {/* Bot avatar */}
              <div
                className="w-9 h-9 flex items-center justify-center shrink-0 border border-[#C89B5F]/30 bg-white/5 text-[#C89B5F]"
              >
                <Sparkles size={15} />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Swastik Textile Mall Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-400" />
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
            style={{ background: '#0A0A0C' }}
          >
            {/* Bot message */}
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 flex items-center justify-center shrink-0 mt-0.5 bg-[#121216] border border-[#C89B5F]/20 text-[#C89B5F]"
              >
                <Sparkles size={11} />
              </div>
              <div
                className="px-4 py-3 max-w-[82%] shadow-sm bg-[#121216]"
                style={{ border: '1px solid #24252F' }}
              >
                <p className="text-[13px] leading-relaxed text-[#F3F4F6]">
                  Namaste! 🙏 Welcome to <strong>Swastik Textile Mall</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            {/* Quick reply chips */}
            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    background: '#181920',
                    border: '1.5px solid #24252F',
                    color: '#9CA3AF',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#C89B5F';
                    e.currentTarget.style.color = '#000000';
                    e.currentTarget.style.background = '#C89B5F';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#24252F';
                    e.currentTarget.style.color = '#9CA3AF';
                    e.currentTarget.style.background = '#181920';
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-[#121216]"
            style={{ borderColor: '#24252F' }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 text-[13px] outline-none transition-all duration-200"
              style={{
                background: '#0A0A0C',
                border: '1.5px solid #24252F',
                color: '#F3F4F6',
              }}
              onFocus={e => e.target.style.borderColor = '#C89B5F'}
              onBlur={e => e.target.style.borderColor = '#24252F'}
            />
            <button
              className="w-9 h-9 flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #C89B5F 0%, #A68A5D 100%)', boxShadow: '0 3px 10px rgba(200,155,95,0.2)' }}
            >
              <Send size={15} color="black" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat Assistant"
        className="flex items-center justify-center w-12 h-12 text-black transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
        style={{
          background: '#C89B5F',
          boxShadow: '0 4px 15px rgba(200, 155, 95, 0.4)',
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
