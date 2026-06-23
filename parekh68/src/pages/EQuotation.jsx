import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send, Mail, Calendar, Package } from 'lucide-react';

const C = {
  primary: '#3F5241',
  primaryLight: '#536755',
  primaryDark: '#2C3A2D',
  accent: '#BBA178',
  gold: '#BBA178',
  bg: '#FAF8F5',
  border: '#E3DAD0',
  stone: '#5A665B',
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
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            e-Quotation
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 14, color: C.stone, marginBottom: 40, fontWeight: 600, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Digital procurement and transparent quotation system across our corporate ecosystem.
        </p>

        {/* Active Quotations - Horizontal Lists */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }} className="text-left">
            <ClipboardCheck size={22} color={C.accent} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: 0 }}>
              Active Quotation Requests
            </h2>
          </div>

          {/* Full-Width Rows Stack */}
          <div className="flex flex-col gap-5">
            {quotations.map((item) => (
              <div
                key={item.id}
                className="text-left group flex flex-col lg:flex-row lg:items-center gap-6 p-6 md:p-8 hover:translate-y-[-2px] transition-all"
                style={{ 
                  background: 'white',
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  boxShadow: '0 4px 20px rgba(43, 37, 32, 0.02)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(43, 37, 32, 0.05)';
                  e.currentTarget.style.borderColor = C.accent;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(43, 37, 32, 0.02)';
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                {/* ID & Closing Date (Left Segment) */}
                <div className="lg:w-1/5 shrink-0 flex flex-col gap-2">
                  <span style={{
                    fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em',
                    padding: '6px 12px',
                    background: 'rgba(197, 168, 128, 0.12)',
                    color: C.primary, fontWeight: 700,
                    borderRadius: '50px',
                    width: 'fit-content'
                  }}>
                    {item.id}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                    <Calendar size={13} color={C.accent} />
                    <span style={{ fontSize: 12, color: C.stone, fontWeight: 600 }}>Closes: {item.closingDate}</span>
                  </div>
                </div>

                {/* Title & Specifications (Center Segment) */}
                <div className="flex-grow">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {item.specifications}
                  </p>
                </div>

                {/* Quantity Required (Middle Right Segment) */}
                <div className="lg:w-1/5 shrink-0 flex flex-col justify-center bg-[#F5EFE6] p-4 rounded-xl border border-[#E3DAD0]">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <Package size={14} color={C.accent} />
                    <span style={{ fontSize: 9, color: C.stone, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Volume Required</span>
                  </div>
                  <span style={{ fontSize: 16, color: C.primary, fontWeight: 700 }}>{item.quantity}</span>
                </div>

                {/* Submit Bid Button (Right Segment) */}
                <div className="lg:w-1/6 shrink-0">
                  <button
                    onClick={() => document.getElementById('quote-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      width: '100%', padding: '12px 20px',
                      background: 'transparent', color: C.primary, border: `1.5px solid ${C.border}`,
                      borderRadius: 50,
                      fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                      cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}
                  >
                    Submit Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Redesigned Form ── */}
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
            borderRadius: 24,
            boxShadow: '0 12px 40px rgba(43, 37, 32, 0.04)',
          }}>
            {/* Form Header with Double border and gold highlight */}
            <div style={{
              padding: '32px 36px',
              background: 'rgba(43, 37, 32, 0.01)',
              borderBottom: `2px dashed ${C.accent}`,
              display: 'flex', alignItems: 'center', gap: 16,
            }} className="text-left">
              <div style={{
                width: 48, height: 48,
                background: '#F5EFE6',
                border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%'
              }}>
                <FileText size={20} color={C.accent} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  Request an e-quotation
                </h2>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 600 }}>
                  Fill in your details below to receive a custom quotation from our trade managers
                </p>
              </div>
            </div>

            {/* Divided Form Body */}
            <div style={{ padding: '36px' }} className="text-left">
              <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                
                {/* Section 1: Business Metadata */}
                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 800, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20, borderLeft: `3px solid ${C.accent}`, paddingLeft: 10 }}>
                    1. Business Metadata
                  </h3>
                  
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
                        <input type={f.type} className="form-input" required />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Material Specifications */}
                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 800, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20, borderLeft: `3px solid ${C.accent}`, paddingLeft: 10 }}>
                    2. Material Specifications
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700 }}>
                        Select Category *
                      </label>
                      <select className="form-input" style={{ appearance: 'none' }}>
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
                        placeholder="Enter detailed description: GSM, weave pattern, target dimensions, quantity metrics, and color codes..."
                        className="form-input" style={{ resize: 'none', borderRadius: 0 }}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Action button & footer info */}
                <div className="pt-4 border-t border-[#E3DAD0]">
                  <button type="submit" style={{
                    width: '100%', padding: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    background: C.primary, color: 'white',
                    border: 'none',
                    borderRadius: 50,
                    fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                    cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                    transition: 'all 0.2s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
                  >
                    <Send size={16} /> Submit Quotation Request
                  </button>

                  <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20 }}>
                    <Mail size={14} color={C.accent} />
                    <a href="mailto:info@alankritthreads.com" style={{ fontSize: 13, color: C.primary, fontWeight: 600, textDecoration: 'none' }}>
                      info@alankritthreads.com
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
