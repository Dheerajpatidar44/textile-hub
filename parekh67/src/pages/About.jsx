import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const C = {
  primary: '#6B2D3E',
  primaryDark: '#4A1E2B',
  accent: '#C4706A',
  accentLight: '#E8C4B8',
  bg: '#F8F0EC',
  bgAlt: '#F2E6E0',
  border: '#E0C8C0',
  stone: '#8A5D65',
  card: '#FDFAF8',
  text: '#3D1F28',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-8 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2 block" style={{ color: C.accent }}>
            Our Story
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 2, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, margin: '10px auto 0', borderRadius: 2 }} />
        </div>

        {/* Combined Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden shadow-lg"
          style={{ 
            borderRadius: 24, 
            border: `1px solid ${C.border}`,
            background: C.card,
          }}
        >
          {/* Image Side */}
          <div 
            className="relative overflow-hidden"
            style={{ minHeight: 420 }}
          >
            <img
              src="/images/pravaah_about.png"
              alt="Pravaah Fabrics Craftsmanship Showroom"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(74,30,43,0.7) 0%, rgba(107,45,62,0.3) 50%, transparent 100%)` }} />
            
            {/* Floating label */}
            <div className="absolute top-6 left-6">
              <div style={{ 
                background: 'rgba(253, 250, 248, 0.15)', 
                backdropFilter: 'blur(12px)',
                borderRadius: 12,
                padding: '10px 16px',
                border: '1px solid rgba(232,196,184,0.3)',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: C.accentLight }}>CRAFTSMANSHIP</span>
              </div>
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#FDFAF8', margin: '0 0 4px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                Woven by the Masters
              </h3>
              <p style={{ fontSize: 12, color: C.accentLight, margin: 0, fontWeight: 500 }}>
                25+ years of textile excellence
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 lg:p-12 text-left">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{ color: C.accent }}>Our Heritage</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, margin: '0 0 20px', lineHeight: 1.2, color: C.primary }}>
              Weaving Tradition,<br />
              <em style={{ color: C.accent, fontWeight: 500, fontStyle: 'italic' }}>Defining Style.</em>
            </h2>
            
            <p style={{ fontSize: 14, lineHeight: 1.75, color: C.stone, fontWeight: 400, margin: '0 0 24px' }}>
              <strong style={{ color: C.primary, fontWeight: 700 }}>Pravaah Fabrics</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
              {[
                { title: 'Authentic Quality', desc: 'Every thread selected represents generations of weave expertise and strict quality benchmarks.' },
                { title: 'Modern Procurement', desc: 'Leveraging e-Auctions and e-quotations for seamless, transparent and efficient trade.' },
                { title: 'Pan India Reach', desc: 'Connected with 500+ retail partners across 20+ cities in India.' },
                { title: 'Sustainable Practices', desc: 'Committed to ethical sourcing and eco-friendly manufacturing processes.' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent, flexShrink: 0 }} />
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: C.primary, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: 12.5, color: C.stone, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-8" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
              {[
                { value: '25+', label: 'Years' },
                { value: '500+', label: 'Partners' },
                { value: '1L+', label: 'Customers' },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: C.primary, lineHeight: 1 }}>{stat.value}</span>
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300"
              style={{ background: C.primary, textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = C.accent}
              onMouseLeave={e => e.currentTarget.style.background = C.primary}
            >
              Get in Touch <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
          {[
            { icon: '🧵', title: 'Premium Quality', desc: 'Assured material standard checks at every step of production.' },
            { icon: '🚀', title: 'Timely Delivery', desc: 'Fast, reliable logistics across India — on time, every time.' },
            { icon: '🤝', title: 'Trusted Partnership', desc: 'Bespoke solutions built on trust and long-term relationships.' },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-start gap-3 p-6 transition-all duration-300"
              style={{ 
                background: C.card, 
                borderRadius: 18, 
                border: `1px solid ${C.border}` 
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = `0 8px 24px rgba(196,112,106,0.12)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = ''; }}
            >
              <div className="text-2xl">{val.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: 0 }}>{val.title}</h3>
              <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
