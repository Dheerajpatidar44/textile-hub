import { motion } from 'framer-motion';
import { Gavel, Clock, UploadCloud, Send, Mail, TrendingUp } from 'lucide-react';

const C = {
  primary: '#1B2B3F',
  primaryDark: '#0F1E2D',
  primaryLight: '#243B55',
  accent: '#C9A455',
  accentLight: '#F0E4C2',
  bg: '#F8F5EF',
  sand: '#F5EED8',
  border: '#E8E0D0',
  soil: '#1a1a2e',
  stone: '#6B7280',
  cream: '#FDFBF7',
};

const upcomingAuctions = [
  {
    id: "AUC-26-081",
    title: "Surplus Silk Brocade Fabric",
    description: "End of season premium brocade fabric. Excellent condition, suitable for ethnic wear manufacturing.",
    quantity: "450 Meters",
    basePrice: "₹1,80,000",
    startDate: "Oct 20, 2026 - 10:00 AM",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: "AUC-26-082",
    title: "Assorted Linen Rolls (B-Grade)",
    description: "Minor weave variations. Ideal for lining or budget upholstery projects. Sold as a single lot.",
    quantity: "1,200 Meters",
    basePrice: "₹85,000",
    startDate: "Oct 25, 2026 - 11:30 AM",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=60"
  }
];

const scrollToForm = () =>
  document.getElementById('auction-reg-form')?.scrollIntoView({ behavior: 'smooth' });

export default function EAuction() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[70px] pb-24">

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 600, color: C.primary, margin: '0 0 12px', letterSpacing: '0.02em' }}>
            e-Auction
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 16, color: C.stone, fontWeight: 400, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Participate in our transparent bidding platform to procure surplus inventory, special lots, and discontinued lines at competitive prices.
        </p>


        {/* Upcoming Auctions */}
        <div className="text-left mb-8">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: C.soil, margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Clock size={24} color={C.accent} /> Upcoming Auctions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-20">
          {upcomingAuctions.map((auction) => (
            <motion.div
              key={auction.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row overflow-hidden"
              style={{
                background: 'white', borderRadius: 20,
                border: `1px solid ${C.border}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(27, 43, 63, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="w-full sm:w-[220px] h-[220px] sm:h-auto overflow-hidden shrink-0">
                <img src={auction.image} alt={auction.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 10, padding: '6px 12px', borderRadius: 20, background: 'rgba(201, 164, 85, 0.1)', color: C.accent, fontWeight: 700, letterSpacing: '0.1em' }}>
                    {auction.id}
                  </span>
                  <span style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>{auction.status}</span>
                </div>

                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
                  {auction.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, margin: '0 0 16px', lineHeight: 1.6, flex: 1 }}>
                  {auction.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                  <div style={{ background: C.bg, padding: '10px 14px', borderRadius: 10 }}>
                    <p style={{ fontSize: 10, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px', fontWeight: 600 }}>Quantity</p>
                    <p style={{ fontSize: 14, color: C.primary, fontWeight: 700, margin: 0 }}>{auction.quantity}</p>
                  </div>
                  <div style={{ background: C.bg, padding: '10px 14px', borderRadius: 10 }}>
                    <p style={{ fontSize: 10, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px', fontWeight: 600 }}>Base Price</p>
                    <p style={{ fontSize: 14, color: C.primary, fontWeight: 700, margin: 0 }}>{auction.basePrice}</p>
                  </div>
                </div>

                <button
                  onClick={scrollToForm}
                  style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.primary, color: 'white', border: 'none',
                    fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                    cursor: 'pointer', transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.05em',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.accent}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  <TrendingUp size={16} /> Register to Bid
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
        >
          <div style={{
            background: 'white', borderRadius: 20,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(27, 43, 63, 0.06)',
          }}>

            {/* Form Header */}
            <div style={{
              padding: '28px 36px',
              borderBottom: `1px solid ${C.border}`,
              background: '#F5EED8',
              display: 'flex', alignItems: 'center', gap: 16,
            }} className="text-left">
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'white',
                border: `1px solid rgba(201, 164, 85, 0.3)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Gavel size={24} color={C.accent} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 6px' }}>
                  Participation Registration
                </h2>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 400 }}>
                  Register your interest to participate in upcoming e-Auctions
                </p>
              </div>
            </div>

            {/* Form Body */}
            <div style={{ padding: '36px' }} className="text-left">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>

                {/* Text Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Name of the Participant *',       type: 'text'  },
                    { label: 'Legal Name of Business *',        type: 'text'  },
                    { label: 'Business Address with PIN Code *',type: 'text'  },
                    { label: 'GST No.',                         type: 'text'  },
                    { label: 'Mobile No. *',                    type: 'tel'   },
                    { label: 'Email ID *',                      type: 'email' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{
                        fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em',
                        color: C.stone, display: 'block', marginBottom: 8, fontWeight: 600,
                      }}>
                        {f.label}
                      </label>
                      <input type={f.type} required className="form-input" />
                    </div>
                  ))}
                </div>

                {/* File Upload */}
                <div className="mt-4">
                  <label style={{
                    fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em',
                    color: C.stone, display: 'block', marginBottom: 10, fontWeight: 600,
                  }}>
                    Upload GST Certificate
                  </label>
                  <label
                    style={{
                      width: '100%', border: `2px dashed ${C.border}`,
                      borderRadius: 16, padding: '48px 24px',
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      cursor: 'pointer', background: C.bg,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = C.accent;
                      e.currentTarget.style.background = 'rgba(201, 164, 85, 0.05)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.background = C.bg;
                    }}
                  >
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                    <UploadCloud size={36} color={C.accent} strokeWidth={1.5} style={{ marginBottom: 12 }} />
                    <p style={{ fontSize: 15, color: C.soil, margin: '0 0 6px', fontWeight: 600 }}>
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
                    width: '100%', padding: '16px', marginTop: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    background: C.accent, color: '#1B2B3F',
                    border: 'none', borderRadius: 12,
                    fontSize: 15, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                    cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = '#1B2B3F'; }}
                >
                  <Send size={18} /> Submit Registration
                </button>

                {/* Support Email */}
                <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16 }}>
                  <Mail size={14} color={C.accent} />
                  <a
                    href="mailto:hello@weavoratextiles.com"
                    style={{ fontSize: 13, color: C.primary, fontWeight: 500, textDecoration: 'none' }}
                  >
                    hello@weavoratextiles.com
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
