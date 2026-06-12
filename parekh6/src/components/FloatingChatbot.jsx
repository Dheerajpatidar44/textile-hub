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
            className="bg-vastram-cream w-[340px] sm:w-[370px] shadow-2xl overflow-hidden mb-4 border border-vastram-border rounded-none"
          >
            {/* Header */}
            <div className="bg-vastram-brown px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-vastram-gold animate-pulse rounded-none" />
                <span className="text-vastram-gold text-sm font-bold tracking-widest uppercase">Vastram Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-vastram-gold/50 hover:text-vastram-gold transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 h-72 overflow-y-auto">
              <div className="bg-vastram-light border border-vastram-border p-4 max-w-[85%] shadow-sm rounded-none">
                <p className="text-sm text-vastram-text leading-relaxed font-medium">
                  Namaste! 🙏 Welcome to Vastram Textile Retail Mall. How can I help you today?
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-vastram-light border-t border-vastram-border flex items-center gap-3">
              <input
                type="text"
                placeholder="Ask something..."
                className="flex-grow border border-vastram-border px-4 py-2.5 text-sm focus:outline-none focus:border-vastram-gold transition-colors placeholder-vastram-text/50 text-vastram-text bg-vastram-cream rounded-none"
              />
              <button className="bg-vastram-gold text-vastram-brown p-2.5 hover:bg-vastram-brown hover:text-vastram-gold transition-all duration-300 shrink-0 rounded-none">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="bg-vastram-brown text-vastram-gold w-14 h-14 shadow-xl hover:bg-vastram-gold hover:text-vastram-brown hover:-translate-y-1 transition-all duration-300 flex items-center justify-center rounded-none border border-vastram-gold"
        aria-label="Open Chatbot"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquareText size={28} />
      </button>
    </div>
  );
};

export default FloatingChatbot;
