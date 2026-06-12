import React, { useState } from 'react';
import { MessageSquareText, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#FAF7F0] w-[340px] sm:w-[370px] shadow-[0_20px_60px_rgba(11,28,62,0.25)] overflow-hidden mb-4 border border-[#0B1C3E]/10"
          >
            {/* Header */}
            <div className="bg-[#0B1C3E] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4A853] rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium tracking-wide">Lumina AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 h-72 overflow-y-auto">
              <div className="bg-white border border-[#D4A853]/20 p-4 max-w-[85%] shadow-sm">
                <p className="text-sm text-[#0B1C3E] leading-relaxed font-light">
                  Namaste! 🙏 Welcome to Lumina tex. How can I help you today?
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-[#0B1C3E]/8 flex items-center gap-3">
              <input
                type="text"
                placeholder="Ask something..."
                className="flex-grow border border-[#0B1C3E]/15 px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4A853] transition-colors placeholder-[#6B7A99] text-[#0B1C3E] bg-[#FAF7F0]"
              />
              <button className="bg-[#D4A853] text-[#0B1C3E] p-2.5 hover:bg-[#0B1C3E] hover:text-white transition-all duration-300 shrink-0">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="bg-[#0B1C3E] text-white p-4 shadow-[0_8px_30px_rgba(11,28,62,0.4)] hover:bg-[#D4A853] hover:text-[#0B1C3E] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
        aria-label="Open Chatbot"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquareText size={26} />
      </button>
    </div>
  );
};

export default FloatingChatbot;
