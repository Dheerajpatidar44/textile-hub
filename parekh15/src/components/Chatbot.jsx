import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Urban Textile Hub. How can I help you today?", isBot: true },
    { id: 2, text: "You can ask about our fabrics, submit a trade enquiry, or enquire about Quotations and Auctions.", isBot: true }
  ]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  const quickReplies = [
    { text: "View Products", reply: "I would like to know more about your fabrics and products." },
    { text: "Trade Enquiry", reply: "How can I submit a bulk trade enquiry?" },
    { text: "e-Quotation info", reply: "What is the process to get an e-Quotation?" }
  ];

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    const userMsg = { id: Date.now(), text: textToSend, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputVal("");

    // Bot Response Logic
    setTimeout(() => {
      let botText = "Thank you for reaching out. An executive from Urban Textile Hub will review your message and connect with you shortly.";
      const lower = textToSend.toLowerCase();

      if (lower.includes("product") || lower.includes("saree") || lower.includes("fabric") || lower.includes("collection") || lower.includes("kurti")) {
        botText = "We manufacture a premium catalog of Sarees, Kurtis, Leggings, Suiting, Shirting, and Home Furnishings. You can browse the active catalogue on our Product Page!";
      } else if (lower.includes("enquiry") || lower.includes("bulk") || lower.includes("wholesale")) {
        botText = "For wholesale quantities, bulk styling, or custom manufacturing, please fill out the form on our Trade Enquiry page. Our sales team will get back to you within 24 hours.";
      } else if (lower.includes("quote") || lower.includes("quotation") || lower.includes("price")) {
        botText = "You can request a bulk price quote by visiting our e-Quotation page and filling out the quote request form.";
      } else if (lower.includes("auction") || lower.includes("bid")) {
        botText = "Our e-Auction portal is used for digital liquidation of stocks. Register your business and upload your GST certificate on our e-Auction page to join.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, isBot: true }]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-rosegold-500 hover:bg-rosegold-400 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border border-rosegold-300/20 cursor-pointer"
        title="Chat with Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbox Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[480px] bg-white border border-gray-200 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-rosegold-500 text-white px-6 py-4 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center font-playfair font-bold text-sm bg-white/10">
                    U
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-rosegold-500 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-playfair text-xs tracking-wider uppercase font-semibold">Urban Assistant</h4>
                  <p className="text-[9px] text-pearl-100/70 font-medium">Online & Ready to Help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-pearl-100 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 text-sm shadow-sm ${msg.isBot
                        ? 'bg-white text-gray-800 border border-gray-250'
                        : 'bg-rosegold-500 text-white font-medium'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 2 && (
              <div className="p-3 bg-white border-t border-gray-150 flex flex-wrap gap-2 shrink-0">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(reply.reply)}
                    className="text-[10px] uppercase tracking-wider font-semibold border border-rosegold-500/30 text-rosegold-500 hover:bg-rosegold-500/5 px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-3 bg-white border-t border-gray-150 flex gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about fabrics, quotes, sales..."
                className="flex-1 px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-rosegold-500 text-sm text-gray-800 bg-pearl-100"
              />
              <button
                type="submit"
                className="bg-rosegold-500 text-white p-2.5 hover:bg-rosegold-400 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
