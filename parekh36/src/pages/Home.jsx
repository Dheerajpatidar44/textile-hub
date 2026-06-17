import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

// ── 12 Categories (names & order preserved) ──
const categories = [
  { name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&auto=format&fit=crop&q=80" },
  { name: "Bedsheets & Linen", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Children", image: "https://images.unsplash.com/photo-1580656940647-8854a00547f0?w=400&auto=format&fit=crop&q=80" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80" }
];

export default function Home() {
  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-0 pb-20">

      {/* ═══════════════════════════════════════
          1. HERO SECTION (Static Image with Content Overlay)
      ═══════════════════════════════════════ */}
      <section className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center mb-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />


        <div className="max-w-[95rem] mx-auto w-full px-6 lg:px-12 relative z-10 flex flex-col items-start justify-center h-full">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%] text-left flex flex-col items-start"
          >
            <h1 className="flex flex-col m-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                TIMELESS
              </span>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: 'rgba(255,255,255,0.6)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                WEAVES
              </span>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: '#ffffff', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                MODERN
              </span>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: '#C9A455', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                ELEGANCE
              </span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.6, marginTop: 24, marginBottom: 36, maxWidth: 500 }}>
              Explore handcrafted textiles that blend tradition, quality and contemporary design. Bringing the finest legacy directly to your curated wardrobe.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 transition-all duration-300 rounded-lg group"
              style={{
                background: C.accent,
                color: '#1B2B3F',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '16px 32px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ffffff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.accent;
              }}
            >
              EXPLORE COLLECTIONS <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. EXPLORE OUR COLLECTIONS
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            EXPLORE OUR COLLECTIONS
          </h2>
          <Link
            to="/products"
            className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-2"
            style={{ color: '#1B2B3F' }}
          >
            VIEW ALL COLLECTIONS <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="relative group overflow-hidden rounded-xl bg-gray-100 block aspect-[4/5] shadow-sm hover:shadow-xl transition-shadow"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <h3 className="text-white text-[12px] font-bold tracking-wider uppercase text-center w-full leading-tight">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
