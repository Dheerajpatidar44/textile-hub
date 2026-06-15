import { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: '1.5px solid #E6D8C5', background: '#FFFFFF' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: 'linear-gradient(135deg, #721C2B 0%, #4A0E17 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: '#CDA75E' }} />

            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Sparkles size={15} color="white" />
              </div>
              <div className="text-left">
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Ethnic Elegance Assistant
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
          <div className="p-5 h-64 overflow-y-auto" style={{ background: '#FAF6F0' }}>
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: 'linear-gradient(135deg, #721C2B 0%, #4A0E17 100%)' }}
              >
                <Sparkles size={11} color="white" />
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-tl-sm max-w-[82%] shadow-sm bg-white text-left"
                style={{ border: '1px solid #E6D8C5' }}
              >
                <p className="text-[13px] leading-relaxed" style={{ color: '#330A10' }}>
                  Namaste! 🙏 Welcome to <strong>Ethnic Elegance</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: '#FFFFFF', border: '1.5px solid #E6D8C5', color: '#554447' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#721C2B'; e.currentTarget.style.color = '#721C2B'; e.currentTarget.style.background = '#FCEEF1'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E6D8C5'; e.currentTarget.style.color = '#554447'; e.currentTarget.style.background = '#FFFFFF'; }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-white"
            style={{ borderColor: 'rgba(114,28,43,0.15)' }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all duration-200"
              style={{ background: '#FAF6F0', border: '1.5px solid #E6D8C5', color: '#330A10' }}
              onFocus={e => e.target.style.borderColor = '#721C2B'}
              onBlur={e => e.target.style.borderColor = '#E6D8C5'}
            />
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #721C2B 0%, #4A0E17 100%)', boxShadow: '0 3px 10px rgba(114,28,43,0.25)' }}
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
            ? 'linear-gradient(135deg, #4A0E17 0%, #721C2B 100%)'
            : 'linear-gradient(135deg, #721C2B 0%, #4A0E17 100%)',
          border: '2px solid rgba(255,255,255,0.4)',
          boxShadow: '0 6px 20px rgba(114,28,43,0.35)',
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
