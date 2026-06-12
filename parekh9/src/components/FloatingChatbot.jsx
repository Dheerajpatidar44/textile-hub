import React, { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] rounded-2xl overflow-hidden shadow-2xl"
          style={{
            border: '1.5px solid #EADCD2',
            background: '#FFFFFF',
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: 'linear-gradient(135deg, #772629 0%, #3C3430 100%)' }}
          >
            {/* Theme accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: '#A24E51' }}
            />

            <div className="flex items-center gap-3">
              {/* Bot avatar */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #A24E51 0%, #772629 100%)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Sparkles size={15} color="white" />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Vastramall Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
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
            style={{ background: '#FCF5F0' }}
          >
            {/* Bot message */}
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: 'linear-gradient(135deg, #A24E51 0%, #772629 100%)' }}
              >
                <Sparkles size={11} color="white" />
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-tl-sm max-w-[82%] shadow-sm bg-white"
                style={{ border: '1px solid #EADCD2' }}
              >
                <p className="text-[13px] leading-relaxed text-[#3C3430]">
                  Namaste! 🙏 Welcome to <strong>Vastramall</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            {/* Quick reply chips */}
            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #EADCD2',
                    color: '#554D48',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#A24E51';
                    e.currentTarget.style.color = '#A24E51';
                    e.currentTarget.style.background = '#FCF5F0';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#EADCD2';
                    e.currentTarget.style.color = '#554D48';
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
            style={{ borderColor: 'rgba(162,78,81,0.15)' }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all duration-200"
              style={{
                background: '#FCF5F0',
                border: '1.5px solid #EADCD2',
                color: '#3C3430',
              }}
              onFocus={e => e.target.style.borderColor = '#A24E51'}
              onBlur={e => e.target.style.borderColor = '#EADCD2'}
            />
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #A24E51 0%, #772629 100%)', boxShadow: '0 3px 10px rgba(162,78,81,0.2)' }}
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
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #772629 0%, #A24E51 100%)'
            : 'linear-gradient(135deg, #A24E51 0%, #3C3430 100%)',
          border: '2px solid rgba(255,255,255,0.4)',
          boxShadow: '0 6px 20px rgba(162,78,81,0.35)',
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
