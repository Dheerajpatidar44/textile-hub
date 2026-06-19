import { motion } from 'framer-motion';
import { Send, Building2, ShoppingBag } from 'lucide-react';

const C = {
  primary: '#e2b865',        // Gold
  primaryDark: '#0a0c10',
  soil: '#e2b865',
  sand: '#12151c',
  cream: '#12151c',
  border: '#2a3142',
  stone: '#a0aec0',
  accent: '#e2b865',         // Gold Accent
};

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-3xl mx-auto px-6 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '44px', fontWeight: 500, color: C.soil, margin: 0 }}>
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
            background: '#1b202c',
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            borderRadius: '0px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          }}
        >
          <div style={{
            padding: '24px 32px',
            borderBottom: `1px solid ${C.border}`,
            background: 'rgba(226, 184, 101, 0.04)',
          }} className="text-left">
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, fontWeight: 700, color: C.soil, margin: '0 0 4px' }}>
              Enquiry Form
            </h2>
            <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 500 }}>
              Our trade team will respond within 1–2 business days.
            </p>
          </div>

          <div style={{ padding: '32px' }} className="text-left">
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={e => e.preventDefault()}>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: '0 0 16px', paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
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
                      <input type={f.type} required className="form-input text-white border-b-2" style={{ borderColor: C.border }} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: '0 0 16px', paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ShoppingBag size={16} color={C.accent} /> Enquiry Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 600 }}>
                      Interested Categories
                    </label>
                    <select className="form-input text-white border-b-2 bg-[#1b202c]" style={{ borderColor: C.border, appearance: 'none', width: '100%', padding: '8px 0' }}>
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
                    <select className="form-input text-white border-b-2 bg-[#1b202c]" style={{ borderColor: C.border, appearance: 'none', width: '100%', padding: '8px 0' }}>
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
                      className="form-input text-white border-b-2"
                      style={{ borderColor: C.border, resize: 'none' }}
                      placeholder="Describe your requirements, custom specifications, delivery timeline..."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', padding: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: C.primary, color: '#12151c',
                  border: 'none',
                  fontSize: 12, fontWeight: 700,
                  borderRadius: '0px',
                  cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; }}
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
