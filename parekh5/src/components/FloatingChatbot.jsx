import React, { useState } from 'react';
import { MessageSquareText, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-[340px] sm:w-[370px] shadow-2xl overflow-hidden mb-4 border border-gray-200 rounded-2xl"
          >
            {/* Header */}
            <div className="bg-[#1B484E] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#A8C6B6] animate-pulse rounded-full shadow-sm" />
                <span className="text-white text-sm font-bold tracking-widest uppercase">Textile Mall Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 h-72 overflow-y-auto bg-gray-50/50">
              <div className="bg-white border border-gray-100 p-4 max-w-[85%] shadow-sm rounded-2xl rounded-tl-sm">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  Namaste! 🙏 Welcome to Textile Mall. How can I help you today?
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
              <input
                type="text"
                placeholder="Ask something..."
                className="flex-grow border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#A8C6B6] transition-colors placeholder-gray-400 text-gray-700 bg-gray-50"
              />
              <button className="bg-[#1B484E] text-white p-2.5 rounded-xl hover:bg-[#153a3f] transition-all duration-300 shrink-0">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="bg-[#1B484E] text-white w-14 h-14 shadow-xl hover:bg-[#A8C6B6] hover:text-[#1B484E] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center rounded-full border-2 border-white"
        aria-label="Open Chatbot"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquareText size={26} />
      </button>
    </div>
  );
};

export default FloatingChatbot;
