import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send, Mail, Calendar, Package } from 'lucide-react';

const C = {
  primary: '#222842',        // Slate Navy
  primaryDark: '#16192C',
  primaryLight: '#30375E',
  accent: '#8D6F97',         // Mauve
  accentLight: '#A485AD',
  bg: '#FAF9FC',
  sand: '#FAF9FC',
  border: '#EAE7ED',
  soil: '#222842',
  stone: '#5C627A',
  cream: '#FFFFFF',
};

const quotations = [
  {
    id: "EQ-2026-004",
    title: "Premium Combed Cotton Fabric",
    specifications: "100% Cotton, 60/60 Count, 180 GSM, plain weave, dyed white. Required certificate of quality standard.",
    quantity: "15,000 Meters",
    closingDate: "June 25, 2026",
  },
  {
    id: "EQ-2026-005",
    title: "Organic Mulberry Silk Yarn",
    specifications: "Grade A Mulberry Silk Yarn, count: 20/22 D, unbleached, ready for custom dyeing process.",
    quantity: "2,000 Kilograms",
    closingDate: "June 30, 2026",
  },
  {
    id: "EQ-2026-006",
    title: "Linen Polyester Upholstery Blend",
    specifications: "55% Linen / 45% Polyester blend fabric, 320 GSM, textured weave, fire retardant coated.",
    quantity: "8,500 Meters",
    closingDate: "July 05, 2026",
  },
];

export default function EQuotation() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-10 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            e-Quotation
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '12px auto 0' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 15, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Digital procurement and transparent quotation system across our corporate ecosystem.
        </p>

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }} className="text-left">
            <ClipboardCheck size={22} color={C.accent} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: C.soil, margin: 0 }}>
              Active Quotation Requests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {quotations.map((item) => (
              <div
                key={item.id}
                className="text-left group"
                style={{ overflow: 'hidden',
                  background: 'white',
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  display: 'flex', flexDirection: 'column',
                  padding: '28px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(34, 40, 66, 0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* ID + date row */}
                <div style={{ display: 'flex', alignItems: 'center', justifycontent: 'space-between', marginBottom: 16 }}>
                  <span style={{
                    fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em',
                    padding: '6px 12px',
                    background: 'rgba(141, 111, 151, 0.08)',
                    color: C.accent, fontWeight: 700,
                    borderRadius: '50px'
                  }}>
                    {item.id}
                  </span>
                  <div className="flex-1" />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Calendar size={14} color={C.stone} />
                    <span style={{ fontSize: 12, color: C.stone, fontWeight: 500 }}>{item.closingDate}</span>
                  </div>
                </div>

                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.soil, margin: '0 0 12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: '0 0 20px', fontWeight: 500, flex: 1 }}>
                  {item.specifications}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: C.bg, marginBottom: 20,
                  borderRadius: 12
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Package size={16} color={C.accent} />
                    <span style={{ fontSize: 12, color: C.stone, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Required</span>
                  </div>
                  <span style={{ fontSize: 14, color: C.primary, fontWeight: 700 }}>{item.quantity}</span>
                </div>

                <button
                  onClick={() => document.getElementById('quote-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    width: '100%', padding: '12px',
                    background: 'transparent', color: C.primary, border: `1.5px solid ${C.border}`,
                    borderRadius: '50px',
                    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                    cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}
                >
                  Submit Bid
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          id="quote-form-section"
          className="max-w-3xl mx-auto scroll-mt-24"
        >
          <div style={{
            background: 'white',
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            borderRadius: 20,
            boxShadow: '0 12px 40px rgba(34, 40, 66, 0.03)',
          }}>
            {/* Form header */}
            <div style={{
              padding: '28px 36px',
              borderBottom: `1px solid ${C.border}`,
              background: 'rgba(141, 111, 151, 0.04)',
              display: 'flex', alignItems: 'center', gap: 16,
            }} className="text-left">
              <div style={{
                width: 48, height: 48,
                background: 'white',
                border: `1px solid rgba(141, 111, 151, 0.2)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%'
              }}>
                <FileText size={20} color={C.accent} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 4px' }}>
                  Request a Price Quote
                </h2>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 500 }}>
                  Fill in your details below to receive a quotation
                </p>
              </div>
            </div>

            <div style={{ padding: '36px' }} className="text-left">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Name of the Trader *', type: 'text' },
                    { label: 'Business Name *', type: 'text' },
                    { label: 'Business Address with PIN Code *', type: 'text' },
                    { label: 'GST No.', type: 'text' },
                    { label: 'Mobile No. *', type: 'tel' },
                    { label: 'Email ID *', type: 'email' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 600 }}>
                        {f.label}
                      </label>
                      <input type={f.type} className="form-input" required />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 600 }}>
                    Options *
                  </label>
                  <select className="form-input" style={{ appearance: 'none' }}>
                    <option value="" disabled>Select Option</option>
                    <option>Textile Products</option>
                    <option>Raw Materials</option>
                    <option>Corporate Gifting</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 600 }}>
                    Particulars of the Products *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter product details, GSM, quantity, color, specifications..."
                    className="form-input" style={{ resize: 'none' }}
                    required
                  />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '14px', marginTop: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: C.primary, color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                  cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; }}
                >
                  <Send size={16} /> Submit Quotation Request
                </button>

                <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifycontent: 'center', gap: 8, marginTop: 16 }}>
                  <Mail size={14} color={C.accent} />
                  <a href="mailto:hello@threadspheretextile.com" style={{ fontSize: 13, color: C.primary, fontWeight: 500, textDecoration: 'none' }}>
                    hello@threadspheretextile.com
                  </a>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
