import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryLight: '#C49272',
  soil: '#231F20',
  sand: '#F4EDE4',
  cream: '#FAF8F5',
  border: '#EAE5DE',
  stone: '#5B5653',
  accent: '#A3704C',
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
    answer: "LoomCraft India supports direct status coordination. Since we focus on wholesale B2B distribution and commercial trade, our support team directly supplies shipment tracking details via email for every dispatch."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We offer a hassle-free 7-day return and exchange policy for unstitched and unused products. Please ensure the original tags and packaging are intact."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, LoomCraft India ships globally. International shipping charges and delivery times vary based on the destination and order volume."
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }} className="pt-[110px] pb-20">

      {/* Page Title inside section with minimal gap */}
      <div className="max-w-3xl mx-auto px-6 mb-8 text-left">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
          Frequently Asked Questions
        </h1>
        <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginTop: 10 }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-2">
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
                  borderRadius: 12,
                  border: `1px solid ${isOpen ? C.accent : C.border}`,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 4px 16px rgba(163,112,76,0.06)' : 'none',
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '20px 22px',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: isOpen ? 700 : 600, color: C.soil, margin: 0, lineHeight: 1.4, transition: 'all 0.2s ease' }}>
                    {faq.question}
                  </h3>
                  <div style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isOpen ? C.accent : 'rgba(163, 112, 76, 0.08)',
                    transition: 'all 0.3s ease',
                  }}>
                    {isOpen ? <Minus size={14} color="white" /> : <Plus size={14} color={C.accent} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div style={{ padding: '16px 22px 20px', borderTop: `1px solid ${C.border}` }}>
                        <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
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

        <div style={{ marginTop: 40, textAlign: 'center', padding: '24px', background: C.sand, borderRadius: 16, border: `1px solid ${C.border}` }}>
          <p style={{ fontSize: 14, color: C.stone, margin: 0, fontWeight: 400 }}>
            Still have questions?{' '}
            <Link to="/contact" style={{ color: C.primary, fontWeight: 600, textDecoration: 'none', borderBottom: `1.5px solid ${C.accent}`, paddingBottom: 1 }}>
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
