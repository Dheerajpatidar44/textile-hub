import { motion } from 'framer-motion';
import { Gavel, Clock, UploadCloud, Send, Mail, TrendingUp } from 'lucide-react';

const C = {
  primary: '#8C6239',       // Warm Camel Brown
  primaryLight: '#B08B6B',
  primaryDark: '#5E4023',
  accent: '#5B84B1',        // Slate/Dusty Blue
  gold: '#8C6239',          // Warm Camel Brown
  bg: '#FAF6F0',
  border: '#E8DFD8',
  stone: '#4A4A4A',
  soil: '#8C6239',
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
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            e-Auction
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: C.stone, fontWeight: 600, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Participate in our transparent bidding platform to procure surplus inventory, special lots, and discontinued lines at competitive prices.
        </p>

        {/* Upcoming Auctions */}
        <div className="text-left mb-8">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Clock size={22} color={C.accent} /> Upcoming Auctions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-20">
          {upcomingAuctions.map((auction) => (
            <motion.div
              key={auction.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 20px rgba(10, 24, 40, 0.02)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(10, 24, 40, 0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(10, 24, 40, 0.02)';
              }}
            >
              <div className="w-full sm:w-[200px] h-[200px] sm:h-auto overflow-hidden shrink-0 bg-[#FAF6F0]">
                <img src={auction.image} alt={auction.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 9, padding: '6px 12px', background: 'rgba(10, 24, 40, 0.06)', color: C.primary, fontWeight: 700, letterSpacing: '0.1em', borderRadius: '50px' }}>
                    {auction.id}
                  </span>
                  <span style={{ fontSize: 12, color: C.accent, fontWeight: 700 }}>{auction.status}</span>
                </div>

                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.primary, margin: '0 0 10px' }}>
                  {auction.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, margin: '0 0 16px', lineHeight: 1.6, flex: 1, fontWeight: 500 }}>
                  {auction.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginBottom: 16 }}>
                  <div style={{ background: C.bg, padding: '10px 14px', borderRadius: 8 }}>
                    <p style={{ fontSize: 9, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px', fontWeight: 700 }}>Quantity</p>
                    <p style={{ fontSize: 14, color: C.primary, fontWeight: 700, margin: 0 }}>{auction.quantity}</p>
                  </div>
                </div>

                <button
                  onClick={scrollToForm}
                  style={{
                    width: '100%', padding: '12px',
                    background: 'transparent', color: C.primary, border: `1.5px solid ${C.border}`,
                    borderRadius: 8,
                    fontSize: 11, fontWeight: 700, fontFamily: "'Outfit', sans-serif",
                    cursor: 'pointer', transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.05em',
                    display: 'flex', alignItems: 'center', justify: 'center', gap: 8,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}
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
            background: 'white',
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            borderRadius: 20,
            boxShadow: '0 12px 40px rgba(10, 24, 40, 0.03)',
          }}
        >
            {/* Form Header */}
            <div style={{
              padding: '28px 36px',
              borderBottom: `1px solid ${C.border}`,
              background: 'rgba(10, 24, 40, 0.03)',
              display: 'flex', alignItems: 'center', gap: 16,
            }} className="text-left">
              <div style={{
                width: 48, height: 48,
                background: 'white',
                border: `1px solid rgba(10, 24, 40, 0.1)`,
                display: 'flex', alignItems: 'center', justifycontent: 'center',
                flexShrink: 0,
                borderRadius: '50%'
              }}>
                <Gavel size={20} color={C.accent} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 4px' }}>
                  Participation Registration
                </h2>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 600 }}>
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
                        fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em',
                        color: C.stone, display: 'block', marginBottom: 8, fontWeight: 700,
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
                      borderRadius: 12
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = C.accent;
                      e.currentTarget.style.background = 'rgba(10, 24, 40, 0.04)';
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
                    display: 'flex', alignItems: 'center', justify: 'center', gap: 10,
                    background: C.primary, color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                    cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; }}
                >
                  <Send size={16} /> Submit Registration
                </button>

                {/* Support Email */}
                <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justify: 'center', gap: 8, marginTop: 16 }}>
                  <Mail size={14} color={C.accent} />
                  <a
                    href="mailto:info@tanabana.com"
                    style={{ fontSize: 13, color: C.primary, fontWeight: 600, textDecoration: 'none' }}
                  >
                    info@tanabana.com
                  </a>
                </div>

              </form>
            </div>
        </motion.div>

      </div>
    </div>
  );
}
