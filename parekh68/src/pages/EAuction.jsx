import { motion } from 'framer-motion';
import { Gavel, Clock, UploadCloud, Send, Mail, TrendingUp } from 'lucide-react';

const C = {
  primary: '#0b3329',       // Dark Charcoal
  primaryLight: '#15473b',  // Medium Charcoal
  primaryDark: '#062c22',   // Deep Charcoal
  accent: '#bca374',        // Champagne Gold
  gold: '#bca374',
  bg: '#fcf8f2',
  border: '#eadacc',
  stone: '#4d5d59',
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
    image: "/images/premium_fabrics.png"
  }
];

const scrollToForm = () =>
  document.getElementById('auction-reg-form')?.scrollIntoView({ behavior: 'smooth' });

export default function EAuction() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#bca374] uppercase mb-2 block">
            Bidding Engine
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            e-Auction
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: C.stone, fontWeight: 600, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Participate in our transparent bidding platform to procure surplus inventory, special lots, and discontinued lines at competitive prices.
        </p>

        {/* Upcoming Auctions Title */}
        <div className="text-left mb-8 max-w-5xl mx-auto">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Clock size={22} color={C.accent} /> Upcoming Auctions
          </h2>
        </div>

        {/* Upcoming Auctions Grid (Image on top, Details below) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-20 max-w-5xl mx-auto">
          {upcomingAuctions.map((auction) => (
            <motion.div
              key={auction.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col overflow-hidden rounded-2xl animate-fade-in"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 20px rgba(43, 37, 32, 0.02)',
                borderRadius: 24
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(43, 37, 32, 0.05)';
                e.currentTarget.style.borderColor = C.accent;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(43, 37, 32, 0.02)';
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              {/* Top Image block */}
              <div className="w-full h-[220px] overflow-hidden bg-[#f5eee6] relative">
                <img 
                  src={auction.image} 
                  alt={auction.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'rgba(43, 37, 32, 0.85)', backdropFilter: 'blur(6px)', padding: '6px 14px',
                  borderRadius: '50px', display: 'flex', alignItems: 'center'
                }}>
                  <span style={{ fontSize: 9, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
                    {auction.id}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Details block */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 11, color: C.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {auction.status}
                  </span>
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 600 }}>
                    Starts: {auction.startDate.split(' - ')[0]}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.primary, margin: '0 0 10px' }}>
                  {auction.title}
                </h3>
                
                <p style={{ fontSize: 13.5, color: C.stone, margin: '0 0 20px', lineHeight: 1.6, flex: 1, fontWeight: 500 }}>
                  {auction.description}
                </p>

                {/* Info and CTA row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
                  <div>
                    <span style={{ fontSize: 9, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', fontWeight: 700 }}>Lot Quantity</span>
                    <span style={{ fontSize: 15, color: C.primary, fontWeight: 700 }}>{auction.quantity}</span>
                  </div>
                  
                  <button
                    onClick={scrollToForm}
                    style={{
                      padding: '10px 22px',
                      background: 'transparent', color: C.primary, border: `1.5px solid ${C.border}`,
                      borderRadius: 50,
                      fontSize: 10, fontWeight: 750, fontFamily: "'Outfit', sans-serif",
                      cursor: 'pointer', transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.08em',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}
                  >
                    <TrendingUp size={13} />
                    <span>Register to Bid</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Redesigned Bidding Registration Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="auction-reg-form"
          className="max-w-4xl mx-auto scroll-mt-24"
        >
          <div style={{
            background: 'white',
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            borderRadius: 24,
            boxShadow: '0 12px 40px rgba(43, 37, 32, 0.04)',
          }}>
            {/* Form Header */}
            <div style={{
              padding: '32px 36px',
              borderBottom: `2px dashed ${C.accent}`,
              background: 'rgba(43, 37, 32, 0.01)',
              display: 'flex', alignItems: 'center', gap: 16,
            }} className="text-left">
              <div style={{
                width: 48, height: 48,
                background: '#f5eee6',
                border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                borderRadius: '50%'
              }}>
                <Gavel size={20} color={C.accent} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  Participation Registration
                </h2>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 600 }}>
                  Register your business details to receive authorization for upcoming active bidding rooms
                </p>
              </div>
            </div>

            {/* Form Body - Split into 2 columns */}
            <div style={{ padding: '36px' }} className="text-left">
              <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Left Column: Business Metadata */}
                  <div className="space-y-5">
                    <h3 style={{ fontSize: 12, fontWeight: 800, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16, borderLeft: `3px solid ${C.accent}`, paddingLeft: 10 }}>
                      Company Credentials
                    </h3>
                    
                    {[
                      { label: 'Name of the Participant *',       type: 'text'  },
                      { label: 'Legal Name of Business *',        type: 'text'  },
                      { label: 'Business Address with PIN Code *',type: 'text'  },
                      { label: 'GST No. (If applicable)',         type: 'text'  },
                    ].map((f, i) => (
                      <div key={i}>
                        <label style={{
                          fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em',
                          color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700,
                        }}>
                          {f.label}
                        </label>
                        <input type={f.type} required className="form-input" />
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Contact info & File Upload Dropzone */}
                  <div className="space-y-5">
                    <h3 style={{ fontSize: 12, fontWeight: 800, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16, borderLeft: `3px solid ${C.accent}`, paddingLeft: 10 }}>
                      Verification & Contacts
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Mobile No. *',                    type: 'tel'   },
                        { label: 'Email ID *',                      type: 'email' },
                      ].map((f, i) => (
                        <div key={i}>
                          <label style={{
                            fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em',
                            color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700,
                          }}>
                            {f.label}
                          </label>
                          <input type={f.type} required className="form-input" />
                        </div>
                      ))}
                    </div>

                    {/* File Upload Dropzone */}
                    <div>
                      <label style={{
                        fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em',
                        color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700,
                      }}>
                        Upload GST Certificate *
                      </label>
                      <label
                        style={{
                          width: '100%', border: `2px dashed ${C.border}`, padding: '24px 20px',
                          display: 'flex', flexDirection: 'column', alignItems: 'center',
                          cursor: 'pointer', background: C.bg,
                          transition: 'all 0.2s ease',
                          borderRadius: 16
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = C.accent;
                          e.currentTarget.style.background = 'rgba(197, 168, 128, 0.05)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = C.border;
                          e.currentTarget.style.background = C.bg;
                        }}
                      >
                        <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                        <UploadCloud size={28} color={C.accent} strokeWidth={1.5} style={{ marginBottom: 8 }} />
                        <p style={{ fontSize: 13, color: C.primary, margin: '0 0 2px', fontWeight: 700 }}>
                          Click to upload GST certificate file
                        </p>
                        <p style={{ fontSize: 11, color: C.stone, margin: 0 }}>
                          PDF, JPG, PNG up to 5MB
                        </p>
                      </label>
                    </div>
                  </div>

                </div>

                {/* Submit row */}
                <div className="pt-4 border-t border-[#eadacc]">
                  <button
                    type="submit"
                    style={{
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
                    <Send size={16} /> Submit Registration
                  </button>

                  {/* Support Email */}
                  <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20 }}>
                    <Mail size={14} color={C.accent} />
                    <a
                      href="mailto:info@pravaahfabrics.com"
                      style={{ fontSize: 13, color: C.primary, fontWeight: 600, textDecoration: 'none' }}
                    >
                      info@pravaahfabrics.com
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
