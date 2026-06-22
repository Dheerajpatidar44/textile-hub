import { motion } from 'framer-motion';
import { Send, Building2, ShoppingBag } from 'lucide-react';

const C = {
  primary: '#1C362B',
  primaryLight: '#2A4F40',
  primaryDark: '#12241D',
  accent: '#B8A9CB',
  gold: '#Bfa37c',
  bg: '#F9F6F0',
  border: '#D5DBCB',
  stone: '#4A4A4A',
  soil: '#1C362B',
};

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-3xl mx-auto px-6 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Trade Enquiry
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 15, lineHeight: 1.8, color: C.stone, marginBottom: 36, fontWeight: 400 }}>
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'white',
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            borderRadius: 20,
            boxShadow: '0 12px 40px rgba(10, 24, 40, 0.03)',
          }}
        >
          <div style={{
            padding: '24px 32px',
            borderBottom: `1px solid ${C.border}`,
            background: 'rgba(10, 24, 40, 0.03)',
          }} className="text-left">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.soil, margin: '0 0 4px' }}>
              Enquiry Form
            </h2>
            <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 500 }}>
              Our trade team will respond within 1–2 business days.
            </p>
          </div>

          <div style={{ padding: '32px' }} className="text-left">
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={e => e.preventDefault()}>

              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: '0 0 16px', paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Building2 size={16} color={C.accent} /> Company Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Company Name *', type: 'text' },
                    { label: 'Contact Person *', type: 'text' },
                    { label: 'Email Address *', type: 'email' },
                    { label: 'Phone Number *', type: 'tel' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 600 }}>
                        {f.label}
                      </label>
                      <input type={f.type} required className="form-input" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: '0 0 16px', paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ShoppingBag size={16} color={C.accent} /> Enquiry Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 600 }}>
                      Interested Categories
                    </label>
                    <select className="form-input" style={{ appearance: 'none' }}>
                      {categories.map(cat => (
                        <option key={cat}>{cat}</option>
                      ))}
                      <option>Multiple / Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 600 }}>
                      Expected Order Volume
                    </label>
                    <select className="form-input" style={{ appearance: 'none' }}>
                      <option>Small (Below 1000 meters / units)</option>
                      <option>Medium (1000 - 5000 meters / units)</option>
                      <option>Large (5000+ meters / units)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 600 }}>
                      Additional Requirements / Message
                    </label>
                    <textarea
                      rows={5}
                      className="form-input"
                      style={{ resize: 'none' }}
                      placeholder="Describe your requirements, custom specifications, delivery timeline..."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', padding: '12px',
                  display: 'flex', alignItems: 'center', justify: 'center', gap: 8,
                  background: C.primary, color: 'white',
                  border: 'none',
                  fontSize: 12, fontWeight: 700,
                  borderRadius: 8,
                  cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={e => e.currentTarget.style.background = C.accent}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                <Send size={14} /> Submit Trade Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
