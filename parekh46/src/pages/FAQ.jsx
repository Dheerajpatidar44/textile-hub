import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  primaryLight: '#1E2D4A',
  soil: '#111E38',
  sand: '#FAF9F5',
  cream: '#FAF9F5',
  border: '#EAEAEA',
  stone: '#5A6F8F',
  accent: '#DE5B49',         // Terracotta Red
};

const faqs = [
  {
    question: "What types of fabrics do you specialize in?",
    answer: "We specialize in a wide range of premium textiles including pure silks, high-quality cottons, linens, and custom synthetic blends suitable for both traditional wear and modern fashion."
  },
  {
    question: "Do you accept wholesale or bulk orders?",
    answer: "Yes, we have a dedicated B2B division that handles wholesale and bulk orders. You can submit your requirements through our Trade Enquiry or e-Quotation pages for special pricing."
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
    answer: "Yes, Veda Weaves Textile Mall ships globally. International shipping charges and delivery times vary based on the destination and order volume."
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
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-3xl mx-auto px-6 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.soil, margin: 0 }}>
            Frequently Asked Questions
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: isOpen ? 700 : 600, color: C.soil, margin: 0, lineHeight: 1.4, transition: 'all 0.2s ease' }}>
                    {faq.question}
                  </h3>
                  <div style={{
                    flexShrink: 0, width: 32, height: 32,
                    display: 'flex', alignItems: 'center', justifyContainer: 'center',
                    background: isOpen ? C.accent : 'rgba(17, 30, 56, 0.08)',
                    transition: 'all 0.3s ease',
                    borderRadius: '50%'
                  }} className="flex items-center justify-center">
                    {isOpen ? <Minus size={14} color="white" /> : <Plus size={14} color={C.accent} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div style={{ padding: '16px 22px 20px', borderTop: `1px solid ${C.border}` }}>
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

        <div style={{ marginTop: 40, textAlign: 'center', padding: '24px', background: 'white', border: `1px solid ${C.border}`, borderRadius: 20 }}>
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
