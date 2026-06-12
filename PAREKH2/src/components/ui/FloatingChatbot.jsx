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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#f8fafc] w-[350px] sm:w-[380px] rounded-2xl shadow-2xl overflow-hidden mb-4 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-[#C48B5D] px-5 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-bold tracking-wide">Parekh AI Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 h-[320px] overflow-y-auto bg-[#f8fafc]">
              <div className="bg-white text-gray-700 p-4 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[85%]">
                <p className="text-[15px] leading-relaxed font-sans">
                  Namaste! 🙏 Welcome to ParekhTEX. How can I help you today?
                </p>
              </div>
            </div>

            {/* Footer Input */}
            <div className="p-4 bg-white border-t border-gray-200 flex items-center space-x-3">
              <input 
                type="text" 
                placeholder="Ask something..." 
                className="flex-grow bg-white border border-gray-200 rounded-full px-5 py-3 text-[15px] focus:outline-none focus:border-[#C48B5D] focus:ring-1 focus:ring-[#C48B5D] transition-all placeholder-gray-400 text-gray-700"
              />
              <button className="bg-[#C48B5D] text-white p-3 rounded-full hover:bg-[#a6744b] transition-colors shrink-0 shadow-sm flex items-center justify-center group">
                <Send className="w-5 h-5 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="bg-[#022c22] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(2,44,34,0.39)] hover:bg-[#064e3b] hover:-translate-y-1 transition-all flex items-center justify-center"
        aria-label="Open Chatbot"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquareText className="h-8 w-8" />
      </button>
    </div>
  );
};

export default FloatingChatbot;
