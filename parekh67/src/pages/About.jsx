import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const C = {
  primary: '#0b3329',
  primaryDark: '#062c22',
  accent: '#bca374',
  accentLight: '#f2ece1',
  bg: '#fcf8f2',
  border: '#eadacc',
  stone: '#4d5d59',
  card: '#ffffff',
  text: '#0d241f',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-12">
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">

        {/* Minimal gap Page Title */}
        <div className="text-center mb-6 mt-1">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1 block" style={{ color: C.accent }}>
            Our Journey
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Zariya House
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '6px auto 0', borderRadius: 2 }} />
        </div>

        {/* Single Cohesive Div Layout (Mockup aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ 
            borderRadius: 24, 
            border: `1.5px solid ${C.border}`,
            background: C.card,
            overflow: 'hidden',
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-sm"
        >
          {/* Content Side: 7 columns */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{ color: C.accent }}>Our Heritage</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 700, margin: '0 0 20px', lineHeight: 1.15, color: C.primary }}>
              Weaving Tradition,<br />
              <span style={{ color: C.accent, fontStyle: 'italic' }}>Defining Elegance.</span>
            </h2>
            
            <p style={{ fontSize: 14, lineHeight: 1.7, color: C.stone, fontWeight: 400, margin: '0 0 24px' }}>
              <strong style={{ color: C.primary, fontWeight: 700 }}>Zariya House</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
              {[
                { title: 'Authentic Quality', desc: 'Every thread selected represents generations of weave expertise.' },
                { title: 'Modern Procurement', desc: 'Leveraging e-Auctions and e-quotations for seamless trade.' },
                { title: 'Pan India Reach', desc: 'Connected with 500+ retail partners across 20+ cities.' },
                { title: 'Sustainable Sourcing', desc: 'Committed to ethical sourcing and eco-friendly practices.' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />
                    <h4 style={{ fontSize: 12.5, fontWeight: 700, color: C.primary, margin: 0 }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: 12, color: C.stone, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 mb-8" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 18 }}>
              {[
                { value: '25+', label: 'Years' },
                { value: '500+', label: 'Partners' },
                { value: '1L+', label: 'Customers' },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: C.primary, lineHeight: 1 }}>{stat.value}</span>
                  <span style={{ fontSize: 10, color: C.stone, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 }}>{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
              style={{ background: C.primary, textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = C.accent}
              onMouseLeave={e => e.currentTarget.style.background = C.primary}
            >
              Get in Touch <ArrowRight size={12} />
            </Link>
          </div>

          {/* Image Side: 5 columns with a beautiful arched cutout style */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden">
            <img
              src="/images/premium_fabrics.png"
              alt="Zariya House Premium Fabrics"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              className="absolute inset-0"
            />
            {/* Visual gradient overlay matching dark green theme */}
            <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(6,44,34,0.1), rgba(6,44,34,0.4))` }} />
            
            {/* Styled Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5" style={{ background: 'rgba(255,255,255,0.92)', borderRadius: 16, border: `1px solid ${C.border}`, textAlign: 'left' }}>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.primary, margin: 0 }}>
                Premium Fabrics
              </h4>
              <p style={{ fontSize: 11, color: C.stone, margin: '4px 0 0', fontWeight: 500 }}>
                Finest raw materials woven with heritage expertise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Small three cards info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
          {[
            { icon: '🧵', title: 'Premium Quality', desc: 'Strict standard checks at every step of fabrication.' },
            { icon: '🚀', title: 'Timely Delivery', desc: 'Fast, reliable shipping channels across Indian cities.' },
            { icon: '🤝', title: 'Trusted Network', desc: 'Custom options built on reliable long-term partnerships.' },
          ].map((val, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-2.5 p-5 transition-all duration-300"
              style={{ 
                background: C.card, 
                borderRadius: 16, 
                border: `1.5px solid ${C.border}` 
              }}
            >
              <div className="text-xl">{val.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: 0 }}>{val.title}</h3>
              <p style={{ fontSize: 12.5, color: C.stone, lineHeight: 1.5, margin: 0, textAlign: 'left' }}>{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
