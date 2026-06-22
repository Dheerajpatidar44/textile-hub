import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const C = {
  primary: '#2B2520',       // Dark Charcoal
  primaryLight: '#4A423F',  // Medium Charcoal
  primaryDark: '#1E1A17',   // Deep Charcoal
  accent: '#C5A880',        // Champagne Gold
  gold: '#C5A880',
  bg: '#FDFBF7',
  border: '#EAE5DB',
  stone: '#6C625C',
  soil: '#2B2520',
};

const faqs = [
  {
    question: "What types of fabrics do you specialize in?",
    answer: "We specialize in a wide range of premium textiles including pure silks, high-quality cottons, linens, and custom synthetic blends suitable for both traditional wear and modern fashion."
  },
  {
    question: "Do you accept wholesale or bulk orders?",
    answer: "Yes, we have a dedicated B2B division that handles wholesale and bulk orders. You can submit your requirements through our Trade Enquiry or e-quotation pages for special pricing."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you will receive a tracking link via email and SMS. You can also track your order status directly from our website."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We offer a hassle-free 7-day return and exchange policy for unstitched and unused products. Please ensure the original tags and packaging are intact."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, Aarohi Fabrics ships globally. International shipping charges and delivery times vary based on the destination and order volume."
  },
  {
    question: "Can I request custom fabric weaving or dyeing?",
    answer: "Absolutely. Our manufacturing units are equipped to handle custom weaving and dyeing requests for bulk orders. Please reach out to our Trade Enquiry team to discuss your specific requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-3xl mx-auto px-6 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
            Questions
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Frequently Asked Questions
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                key={index}
                style={{
                  background: 'white',
                  border: `1px solid ${isOpen ? C.accent : C.border}`,
                  overflow: 'hidden',
                  borderRadius: 16,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  if (!isOpen) e.currentTarget.style.borderColor = C.accent;
                }}
                onMouseLeave={e => {
                  if (!isOpen) e.currentTarget.style.borderColor = C.border;
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '24px 22px',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: isOpen ? 700 : 600, color: C.soil, margin: 0, lineHeight: 1.4, transition: 'all 0.2s ease' }}>
                    {faq.question}
                  </h3>
                  <div style={{
                    flexShrink: 0, width: 32, height: 32,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isOpen ? C.accent : 'rgba(43, 37, 32, 0.04)',
                    color: isOpen ? 'white' : C.accent,
                    transition: 'all 0.3s ease',
                    borderRadius: '50%'
                  }}>
                    <ChevronDown 
                      size={16} 
                      className="transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div style={{ padding: '16px 22px 24px', borderTop: `1px solid ${C.border}`, background: 'rgba(43, 37, 32, 0.01)' }}>
                        <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.75, margin: 0, fontWeight: 500 }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center', padding: '24px', background: 'white', border: `1px solid ${C.border}`, borderRadius: 16 }}>
          <p style={{ fontSize: 13.5, color: C.stone, margin: 0, fontWeight: 500 }}>
            Still have questions?{' '}
            <a href="/contact" style={{ color: C.accent, fontWeight: 700, textDecoration: 'none', borderBottom: `1.5px solid ${C.accent}` }}>
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
