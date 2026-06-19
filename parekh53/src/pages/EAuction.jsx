import { motion } from 'framer-motion';
import { Gavel, Clock, UploadCloud, Send, Mail, TrendingUp } from 'lucide-react';

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

const upcomingAuctions = [
  {
    id: "AUC-26-081",
    title: "Surplus Silk Brocade Fabric",
    description: "End of season premium brocade fabric. Excellent condition, suitable for ethnic wear manufacturing.",
    quantity: "450 Meters",
    startDate: "Oct 20, 2026 - 10:00 AM",
    status: "Upcoming",
    image: "/images/ethnic_wear.png"
  },
  {
    id: "AUC-26-082",
    title: "Assorted Linen Rolls (B-Grade)",
    description: "Minor weave variations. Ideal for lining or budget upholstery projects. Sold as a single lot.",
    quantity: "1,200 Meters",
    startDate: "Oct 25, 2026 - 11:30 AM",
    status: "Upcoming",
    image: "/images/popular_bedsheet.png"
  }
];

const scrollToForm = () =>
  document.getElementById('auction-reg-form')?.scrollIntoView({ behavior: 'smooth' });

export default function EAuction() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: 'lowercase' }}>e</span>
            <span style={{ fontFamily: "'Cinzel', serif" }}>-Auction</span>
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: C.stone, fontWeight: 600, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Participate in our transparent bidding platform to procure surplus inventory, special lots, and discontinued lines at competitive prices.
        </p>

        {/* Upcoming Auctions */}
        <div className="text-left mb-8">
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, fontWeight: 700, color: C.primary, margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Clock size={22} color={C.accent} /> Upcoming Auctions
          </h2>
        </div>

        {/* Changed from lg:grid-cols-2 to flex-col w-full */}
        <div className="flex flex-col gap-8 text-left mb-20 w-full">
          {upcomingAuctions.map((auction) => (
            <motion.div
              key={auction.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row overflow-hidden rounded-none"
              style={{
                background: C.cream,
                border: `1px solid ${C.border}`,
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
              <div className="w-full md:w-[300px] h-[220px] md:h-auto overflow-hidden shrink-0 bg-gray-950">
                <img src={auction.image} alt={auction.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 9, padding: '6px 12px', background: 'rgba(226, 184, 101, 0.08)', color: C.primary, fontWeight: 700, letterSpacing: '0.1em', borderRadius: '0px' }}>
                    {auction.id}
                  </span>
                  <span style={{ fontSize: 12, color: C.accent, fontWeight: 700 }}>{auction.status}</span>
                </div>

                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, fontWeight: 700, color: C.primary, margin: '0 0 10px' }}>
                  {auction.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, margin: '0 0 16px', lineHeight: 1.6, flex: 1, fontWeight: 500 }}>
                  {auction.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginBottom: 16 }}>
                  <div style={{ background: C.bg, padding: '10px 14px', borderRadius: '0px' }}>
                    <p style={{ fontSize: 9, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px', fontWeight: 700 }}>Quantity</p>
                    <p style={{ fontSize: 14, color: C.primary, fontWeight: 700, margin: 0 }}>{auction.quantity}</p>
                  </div>
                </div>

                <button
                  onClick={scrollToForm}
                  style={{
                    width: '100%', padding: '12px',
                    background: C.primary, color: '#12151c', border: `1.5px solid ${C.primary}`,
                    borderRadius: '0px',
                    fontSize: 11, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif",
                    cursor: 'pointer', transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.05em',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = C.primary; }}
                >
                  <TrendingUp size={14} /> Register to Bid
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Registration Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="auction-reg-form"
          className="max-w-3xl mx-auto scroll-mt-24"
          style={{
            background: C.cream,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            borderRadius: '0px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          }}
        >
          {/* Form Header */}
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
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              borderRadius: '0px'
            }}>
              <Gavel size={20} color={C.accent} />
            </div>
            <div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 4px' }}>
                Participation Registration
              </h2>
              <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 600 }}>
                Register your interest to participate in upcoming e-auctions
              </p>
            </div>
          </div>

          {/* Form Body */}
          <div style={{ padding: '36px' }} className="text-left">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>

              {/* Text Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Name of the Participant *', type: 'text' },
                  { label: 'Legal Name of Business *', type: 'text' },
                  { label: 'Business Address with PIN Code *', type: 'text' },
                  { label: 'GST No.', type: 'text' },
                  { label: 'Mobile No. *', type: 'tel' },
                  { label: 'Email ID *', type: 'email' },
                ].map((f, i) => (
                  <div key={i}>
                    <label style={{
                      fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em',
                      color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700,
                    }}>
                      {f.label}
                    </label>
                    <input type={f.type} required className="form-input text-white border-b-2" style={{ borderColor: C.border, background: 'transparent', width: '100%', padding: '8px 0' }} />
                  </div>
                ))}
              </div>

              {/* File Upload */}
              <div className="mt-4">
                <label style={{
                  fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em',
                  color: C.stone, display: 'block', marginBottom: 10, fontWeight: 700,
                }}>
                  Upload GST Certificate
                </label>
                <label
                  style={{
                    width: '100%', border: `2px dashed ${C.border}`, padding: '40px 24px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    cursor: 'pointer', background: C.bg,
                    transition: 'all 0.2s ease',
                    borderRadius: '0px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.background = 'rgba(226, 184, 101, 0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = C.bg;
                  }}
                >
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={32} color={C.accent} strokeWidth={1.5} style={{ marginBottom: 12 }} />
                  <p style={{ fontSize: 14, color: C.primary, margin: '0 0 4px', fontWeight: 700 }}>
                    Click to upload GST Certificate
                  </p>
                  <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 400 }}>
                    PDF, JPG, PNG accepted
                  </p>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%', padding: '14px', marginTop: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
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
                <Send size={16} /> Submit Registration
              </button>

              {/* Support Email */}
              <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16 }}>
                <Mail size={14} color={C.accent} />
                <a
                  href="mailto:info@auraweaves.com"
                  style={{ fontSize: 13, color: C.primary, fontWeight: 600, textDecoration: 'none' }}
                >
                  info@auraweaves.com
                </a>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
