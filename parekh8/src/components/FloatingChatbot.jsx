import React, { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-[340px] sm:w-[370px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              border: '1px solid rgba(225,77,42,0.25)',
              background: '#FFFFFF',
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ background: 'linear-gradient(135deg, #E14D2A 0%, #303030 100%)' }}
            >
              {/* Gold accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, #E14D2A, #E14D2A, #E14D2A, #E14D2A, #E14D2A)' }}
              />

              <div className="flex items-center gap-3">
                {/* Bot avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #E14D2A, #E14D2A)' }}
                >
                  <Sparkles size={16} color="#E14D2A" />
                </div>
                <div>
                  <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                    Textile Mall Assistant
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] tracking-wide" style={{ color: '#6B6B6B' }}>
                      Online · Typically replies instantly
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="transition-all duration-200 hover:rotate-90 hover:scale-110"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E14D2A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div
              className="p-5 h-64 overflow-y-auto"
              style={{ background: '#FAF4EE' }}
            >
              {/* Bot message */}
              <div className="flex items-start gap-2.5 mb-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #E14D2A, #E14D2A)' }}
                >
                  <Sparkles size={12} color="#E14D2A" />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-tl-sm max-w-[82%] shadow-sm"
                  style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.2)' }}
                >
                  <p className="text-[13px] leading-relaxed" style={{ color: '#303030' }}>
                    Namaste! 🙏 Welcome to <strong>Textile Mall</strong>. How can I assist you today?
                  </p>
                </div>
              </div>

              {/* Quick reply chips */}
              <div className="flex flex-wrap gap-2 mt-3 pl-9">
                {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                  <button
                    key={chip}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(225,77,42,0.1)',
                      border: '1px solid rgba(225,77,42,0.35)',
                      color: '#6B6B6B',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(225,77,42,0.08)';
                      e.currentTarget.style.borderColor = 'rgba(225,77,42,0.35)';
                      e.currentTarget.style.color = '#E14D2A';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(225,77,42,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(225,77,42,0.35)';
                      e.currentTarget.style.color = '#6B6B6B';
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div
              className="p-3 flex items-center gap-2.5 border-t"
              style={{ background: '#FFFFFF', borderColor: 'rgba(225,77,42,0.15)' }}
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="flex-grow px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all duration-200"
                style={{
                  background: '#FAF4EE',
                  border: '1.5px solid rgba(225,77,42,0.2)',
                  color: '#303030',
                }}
                onFocus={e => e.target.style.borderColor = '#E14D2A'}
                onBlur={e => e.target.style.borderColor = 'rgba(225,77,42,0.2)'}
              />
              <button
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #E14D2A, #E14D2A)', boxShadow: '0 3px 10px rgba(225,77,42,0.3)' }}
              >
                <Send size={15} color="white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat Assistant"
        className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #E14D2A, #E14D2A)'
            : 'linear-gradient(135deg, #E14D2A, #303030)',
          border: '2px solid rgba(225,77,42,0.4)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
        }}
      >
        {/* Gold ring pulse when closed */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: '#E14D2A' }}
          />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} color="#E14D2A" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquareText size={22} color="#E14D2A" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingChatbot;
