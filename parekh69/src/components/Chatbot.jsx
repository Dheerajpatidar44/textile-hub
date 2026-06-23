import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to LoomLine Retail Mall. How can I help you today?", isBot: true },
    { id: 2, text: "You can ask about our premium fabrics, submit a trade enquiry, or enquire about Quotations and Auctions.", isBot: true }
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

    setTimeout(() => {
      let botText = "Thank you for reaching out. An executive from LoomLine Retail Mall will review your message and connect with you shortly.";
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0A5F73] hover:bg-[#084E5F] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border border-white/10 rounded-full cursor-pointer"
        title="Chat with Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbox Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-[#EBF4F6] border border-[#0A5F73]/15 shadow-2xl z-50 flex flex-col overflow-hidden rounded-2xl"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-[#0A5F73] text-white px-5 py-3.5 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center font-bold text-sm bg-white/15 text-white">
                    L
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#0A5F73] rounded-full"></span>
                </div>
                <div className="text-left">
                  <h4 className="font-outfit text-xs tracking-wider uppercase font-semibold text-white">LoomLine Assistant</h4>
                  <p className="text-[9px] text-white/70 font-medium">Online &amp; Ready to Help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar" style={{ minHeight: '200px', maxHeight: '340px' }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 text-sm shadow-sm rounded-xl text-left font-outfit ${
                      msg.isBot
                        ? 'bg-white text-[#0C2E3A] border border-[#0A5F73]/10'
                        : 'bg-[#0A5F73] text-white font-medium'
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
              <div className="px-3 pb-2 pt-1 bg-white border-t border-[#0A5F73]/10 flex flex-wrap gap-2 shrink-0">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(reply.reply)}
                    className="text-[10px] uppercase tracking-wider font-semibold border border-[#0A5F73]/30 text-[#0A5F73] hover:bg-[#0A5F73] hover:text-white px-2.5 py-1.5 transition-colors cursor-pointer rounded-lg font-outfit"
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
              className="p-3 bg-white border-t border-[#0A5F73]/10 flex gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about fabrics, quotes..."
                className="flex-1 px-4 py-2.5 border border-[#0A5F73]/20 focus:outline-none focus:border-[#0A5F73] text-sm text-[#0C2E3A] bg-[#EBF4F6] rounded-xl placeholder-[#0C2E3A]/40"
              />
              <button
                type="submit"
                className="bg-[#0A5F73] text-white p-2.5 hover:bg-[#084E5F] transition-colors flex items-center justify-center cursor-pointer rounded-xl"
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
