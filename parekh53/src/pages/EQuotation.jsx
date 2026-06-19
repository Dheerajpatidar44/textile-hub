import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send, Mail, Calendar, Package } from 'lucide-react';

const C = {
  primary: '#e2b865',        // Gold
  primaryDark: '#0a0c10',
  primaryLight: '#1b202c',
  accent: '#e2b865',         // Gold Accent
  accentLight: '#f5dfb8',
  bg: '#12151c',
  sand: '#12151c',
  border: '#2a3142',
  soil: '#e2b865',
  stone: '#a0aec0',
  cream: '#1b202c',
};

const quotations = [
  {
    id: "eQ-2026-004",
    title: "Premium Combed Cotton Fabric",
    specifications: "100% Cotton, 60/60 Count, 180 GSM, plain weave, dyed white. Required certificate of quality standard.",
    quantity: "15,000 Meters",
    closingDate: "June 25, 2026",
  },
  {
    id: "eQ-2026-005",
    title: "Organic Mulberry Silk Yarn",
    specifications: "Grade A Mulberry Silk Yarn, count: 20/22 D, unbleached, ready for custom dyeing process.",
    quantity: "2,000 Kilograms",
    closingDate: "June 30, 2026",
  },
  {
    id: "eQ-2026-006",
    title: "Linen Polyester Upholstery Blend",
    specifications: "55% Linen / 45% Polyester blend fabric, 320 GSM, textured weave, fire retardant coated.",
    quantity: "8,500 Meters",
    closingDate: "July 05, 2026",
  },
];

export default function EQuotation() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: 'lowercase' }}>e</span>
            <span style={{ fontFamily: "'Cinzel', serif" }}>-Quotation</span>
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: C.stone, marginBottom: 40, fontWeight: 600, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Digital procurement and transparent quotation system across our corporate ecosystem.
        </p>

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }} className="text-left">
            <ClipboardCheck size={22} color={C.accent} />
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, fontWeight: 700, color: C.primary, margin: 0 }}>
              Active Quotation Requests
            </h2>
          </div>

          {/* Changed from md:grid-cols-2 lg:grid-cols-3 to flex flex-col */}
          <div className="flex flex-col gap-6 mb-20 w-full">
            {quotations.map((item) => (
              <div
                key={item.id}
                className="text-left group rounded-none"
                style={{
                  overflow: 'hidden',
                  background: C.cream,
                  border: `1px solid ${C.border}`,
                  display: 'flex', flexDirection: 'col md:flex-row',
                  padding: '28px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between w-full gap-6">
                  {/* Info block */}
                  <div className="flex-grow">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <span style={{
                        fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em',
                        padding: '6px 12px',
                        background: 'rgba(226, 184, 101, 0.08)',
                        color: C.primary, fontWeight: 700,
                        borderRadius: '0px'
                      }}>
                        {item.id}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Calendar size={14} color={C.stone} />
                        <span style={{ fontSize: 12, color: C.stone, fontWeight: 500 }}>Closing: {item.closingDate}</span>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                      {item.specifications}
                    </p>
                  </div>

                  {/* Quantity Block */}
                  <div style={{
                    display: 'flex', flexDirection: 'column', justifycontent: 'center',
                    padding: '16px 24px',
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: '0px',
                    minWidth: '180px'
                  }}>
                    <span style={{ fontSize: 9, color: C.stone, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Required Quantity</span>
                    <span style={{ fontSize: 18, color: C.primary, fontWeight: 800 }}>{item.quantity}</span>
                  </div>

                  {/* Action button */}
                  <div className="flex items-center">
                    <button
                      onClick={() => document.getElementById('quote-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{
                        padding: '14px 28px',
                        background: C.primary, color: '#12151c', border: `1.5px solid ${C.primary}`,
                        borderRadius: '0px',
                        fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                        cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                        transition: 'all 0.2s ease',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = 'white'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = C.primary; }}
                    >
                      Submit Bid
                    </button>
                  </div>
                </div>
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
            background: C.cream,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            borderRadius: '0px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          }}>
            {/* Form header */}
            <div style={{
              padding: '28px 36px',
              borderBottom: `1px solid ${C.border}`,
              background: 'rgba(226, 184, 101, 0.04)',
              display: 'flex', alignItems: 'center', gap: 16,
            }} className="text-left">
              <div style={{
                width: 48, height: 48,
                background: C.bg,
                border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifycontent: 'center',
                borderRadius: '0px'
              }}>
                <FileText size={20} color={C.accent} />
              </div>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 4px' }}>
                  <span style={{ fontFamily: "'Cinzel', serif" }}>Request a Price </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: 'lowercase' }}>e</span>
                  <span style={{ fontFamily: "'Cinzel', serif" }}>-Quotation</span>
                </h2>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 600 }}>
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
                      <label style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700 }}>
                        {f.label}
                      </label>
                      <input type={f.type} className="form-input text-white border-b-2" style={{ borderColor: C.border }} required />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700 }}>
                    Options *
                  </label>
                  <select className="form-input text-white border-b-2 bg-[#1b202c]" style={{ borderColor: C.border, appearance: 'none', width: '100%', padding: '8px 0' }}>
                    <option value="" disabled>Select Option</option>
                    <option>Textile Products</option>
                    <option>Raw Materials</option>
                    <option>Corporate Gifting</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700 }}>
                    Particulars of the Products *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter product details, GSM, quantity, color, specifications..."
                    className="form-input text-white border-b-2" style={{ borderColor: C.border, resize: 'none', borderRadius: 0 }}
                    required
                  />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '14px', marginTop: 12,
                  display: 'flex', alignItems: 'center', justifycontent: 'center', gap: 10,
                  background: C.primary, color: '#12151c',
                  border: 'none',
                  borderRadius: '0px',
                  fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                  cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; }}
                >
                  <Send size={16} /> Submit Quotation Request
                </button>

                <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifycontent: 'center', gap: 8, marginTop: 16 }}>
                  <Mail size={14} color={C.accent} />
                  <a href="mailto:info@auraweaves.com" style={{ fontSize: 13, color: C.primary, fontWeight: 600, textDecoration: 'none' }}>
                    info@auraweaves.com
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
