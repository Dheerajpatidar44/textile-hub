import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Quote,
  ChevronRight,
  Play,
} from 'lucide-react';

const C = {
  primary: '#6B2D3E',
  primaryLight: '#8B4455',
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

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png", count: "120+ Designs" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&auto=format&fit=crop&q=60", count: "40+ Colors" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=300&auto=format&fit=crop&q=60", count: "85+ Patterns" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png", count: "90+ Styles" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png", count: "150+ Threadcounts" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop&q=60", count: "60+ Packs" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&auto=format&fit=crop&q=60", count: "200+ Fabrics" },
  { name: "Shirting", image: "/images/popular_cotton_fabric.png", count: "180+ Patterns" },
  { name: "Women Ethnic", image: "/images/popular_lehenga.png", count: "75+ Lehengas" },
  { name: "Men Ethnic", image: "/images/men_ethnic_wear.png", count: "50+ Sherwanis" },
  { name: "Kids Ethnic", image: "/images/children_ethnic_wear.png", count: "65+ Outfits" },
  { name: "Home Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60", count: "110+ Items" },
];

const tradeServices = [
  { name: 'e-Quotation', desc: 'Get best quote for your business needs.', path: '/e-quotation', icon: '📋' },
  { name: 'e-Auction', desc: 'Online bidding for the best prices.', path: '/e-auction', icon: '🔨' },
  { name: 'Trade Circular', desc: 'Stay updated with latest offers & market circulars.', path: '/trade-circular', icon: '📢' },
  { name: 'Private Label', desc: 'Custom branding tailored for your brand.', path: '/retail-management', icon: '🏷️' },
];

const featuredCollections = [
  { name: "Kurtis", desc: "Fresh Styles, Timeless Appeal", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=60", path: "/products?category=Kurtis" },
  { name: "Sarees", desc: "Grace in Every Drape", image: "/images/popular_banarasi_saree.png", path: "/products?category=Sarees" },
  { name: "Linen", desc: "Breathe Natural, Live Natural", image: "/images/popular_bedsheet.png", path: "/products?category=Bedsheets & Linen" },
  { name: "Home Textiles", desc: "Comfort Woven Beautifully", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=60", path: "/products?category=Home Furnishing" },
  { name: "New Arrivals", desc: "Discover the Latest Drops", image: "/images/popular_anarkali.png", path: "/products" },
];

const testimonials = [
  { quote: "Pravaah Fabrics offers the best quality fabrics with a wide range of designs. Perfect for our retail outlets!", author: "Meera Collection", city: "Delhi", stars: 5 },
  { quote: "Best variety, best prices and a very professional team. Great experience!", author: "Sagar Textiles", city: "Mumbai", stars: 5 },
  { quote: "A partner we can rely on for every season and every trend.", author: "Rajesh Traders", city: "Surat", stars: 5 },
];

// Decorative leaf SVG
function LeafDecor({ style, flip }) {
  return (
    <svg
      width="80" height="120" viewBox="0 0 80 120" fill="none"
      style={{ ...style, transform: flip ? 'scaleX(-1)' : undefined, opacity: 0.18 }}
    >
      <path d="M40 110 C40 110 10 80 15 50 C20 20 40 10 40 10 C40 10 60 20 65 50 C70 80 40 110 40 110Z"
        stroke={C.accent} strokeWidth="1.5" fill="none" />
      <path d="M40 10 L40 110" stroke={C.accent} strokeWidth="1" strokeDasharray="4 3" />
      <path d="M40 35 C30 38 22 44 20 52" stroke={C.accent} strokeWidth="1" />
      <path d="M40 50 C30 53 24 60 22 68" stroke={C.accent} strokeWidth="1" />
      <path d="M40 65 C30 68 26 75 24 82" stroke={C.accent} strokeWidth="1" />
      <path d="M40 35 C50 38 58 44 60 52" stroke={C.accent} strokeWidth="1" />
      <path d="M40 50 C50 53 56 60 58 68" stroke={C.accent} strokeWidth="1" />
      <path d="M40 65 C50 68 54 75 56 82" stroke={C.accent} strokeWidth="1" />
    </svg>
  );
}

export default function Home() {
  const sliderRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const setupSlider = (ref, speed) => {
      const el = ref.current;
      if (!el) return () => {};
      let animFrame;
      let paused = false;
      const scroll = () => {
        if (!paused && el) {
          el.scrollLeft += speed;
          if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
        }
        animFrame = requestAnimationFrame(scroll);
      };
      animFrame = requestAnimationFrame(scroll);
      const pause = () => { paused = true; };
      const resume = () => { paused = false; };
      el.addEventListener('mouseenter', pause);
      el.addEventListener('mouseleave', resume);
      return () => {
        cancelAnimationFrame(animFrame);
        el.removeEventListener('mouseenter', pause);
        el.removeEventListener('mouseleave', resume);
      };
    };

    const cleanup1 = setupSlider(sliderRef, 0.6);
    const cleanup2 = setupSlider(stripRef, 0.8);
    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);

  const stripImages = [
    "/images/popular_banarasi_saree.png",
    "/images/popular_cotton_fabric.png",
    "/images/men_ethnic_wear.png",
    "/images/popular_bedsheet.png",
    "/images/popular_anarkali.png",
    "/images/popular_lehenga.png",
  ];
  // Duplicate enough times to ensure it's wider than the largest monitor
  const loopedStripImages = [...stripImages, ...stripImages, ...stripImages, ...stripImages, ...stripImages, ...stripImages];

  const loopedCategories = [...categories, ...categories, ...categories, ...categories];

  return (
    <div
      style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }}
      className="w-full overflow-x-hidden"
    >

      {/* ══════════════════════════════════════════
          1. HERO SECTION — matches reference image
         ══════════════════════════════════════════ */}
      <section
        style={{
          background: C.bg,
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Decorative botanical leaves */}
        <LeafDecor style={{ position: 'absolute', left: -20, top: '18%', pointerEvents: 'none', zIndex: 0 }} />
        <LeafDecor style={{ position: 'absolute', right: -20, top: '22%', pointerEvents: 'none', zIndex: 0 }} flip />

        {/* Soft radial glow in background center */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 55% at 50% 48%, rgba(196,112,106,0.08) 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div
          className="w-full max-w-[95rem] mx-auto relative"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'center',
            gap: 0,
            padding: '100px 24px 48px',
            zIndex: 1,
          }}
        >

          {/* ── LEFT COLUMN: Hero Text ── */}
          <div style={{ paddingRight: 32, textAlign: 'left' }}>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: C.stone,
                margin: '0 0 18px',
                lineHeight: 1.5,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Premium Textiles.<br />Crafted for Generations.
              </p>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(42px, 4.8vw, 66px)',
                fontWeight: 700,
                color: C.text,
                margin: '0 0 6px',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              Where Every<br />Thread Tells
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(42px, 4.8vw, 66px)',
                fontWeight: 500,
                fontStyle: 'italic',
                color: C.accent,
                margin: '0 0 28px',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              a Story.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              style={{
                fontSize: 14,
                color: C.stone,
                lineHeight: 1.75,
                margin: '0 0 36px',
                fontWeight: 400,
              }}
            >
              Timeless fabrics. Thoughtful designs.<br />
              Made for comfort. Made to last.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
            >
              {/* Primary Button */}
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '13px 28px',
                  background: C.primary,
                  color: '#fff',
                  borderRadius: 50,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 20px rgba(107,45,62,0.28)',
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.boxShadow = '0 6px 24px rgba(196,112,106,0.38)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.boxShadow = '0 4px 20px rgba(107,45,62,0.28)'; }}
              >
                Explore Collections <ArrowRight size={13} />
              </Link>

              {/* Watch film link */}
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <span style={{
                  width: 38, height: 38,
                  borderRadius: '50%',
                  border: `1.5px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: C.card,
                  boxShadow: '0 2px 8px rgba(107,45,62,0.08)',
                }}>
                  <Play size={12} fill={C.accent} color={C.accent} />
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.stone }}>Watch Our Film</span>
              </button>
            </motion.div>
          </div>

          {/* ── CENTER COLUMN: Hero Image ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* Soft blurred blob behind image */}
            <div style={{
              position: 'absolute',
              width: '70%',
              height: '70%',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(196,112,106,0.12) 0%, transparent 70%)`,
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }} />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ position: 'relative', width: '100%', maxWidth: 480, marginLeft: 0, marginRight: 'auto' }}
            >
              <img
                src="/images/pravaah_hero_v2.png"
                alt="Pravaah Fabrics — Premium Textile Collection"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 50px rgba(107,45,62,0.18))',
                }}
              />
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Second Hero Image ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* Soft blurred blob behind image */}
            <div style={{
              position: 'absolute',
              width: '70%',
              height: '70%',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(196,112,106,0.12) 0%, transparent 70%)`,
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }} />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              style={{ position: 'relative', width: '100%', maxWidth: 480, marginLeft: 'auto', marginRight: 0 }}
            >
              <img
                src="/images/pravaah_hero_right.png"
                alt="Pravaah Fabrics — Premium Fabric Detail"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 50px rgba(107,45,62,0.18))',
                }}
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. EXPLORE OUR 12 SIGNATURE COLLECTIONS
         ══════════════════════════════════════════ */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="py-10">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-8">
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 6 }}>
              Explore Our
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: C.text, margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              12 Signature Collections
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12 }}>
              <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: C.accent }} />
              <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
            </div>
          </div>

          {/* Infinite auto-scroll circular slider */}
          <div
            ref={sliderRef}
            className="no-scrollbar"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 28, overflowX: 'hidden', paddingBottom: 8, userSelect: 'none', cursor: 'default' }}
          >
            {loopedCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}
                className="group"
              >
                <div
                  style={{
                    width: 100, height: 100,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2.5px solid ${C.border}`,
                    background: C.card,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(107,45,62,0.06)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,112,106,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = '0 2px 8px rgba(107,45,62,0.06)'; }}
                >
                  <img src={cat.image} alt={cat.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-110"
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.text, display: 'block', lineHeight: 1.3 }}>
                    {cat.name}
                  </span>
                  <span style={{ fontSize: 9.5, color: C.stone, display: 'block', marginTop: 2 }}>{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ABOUT + TRADE SERVICES + NETWORK
         ══════════════════════════════════════════ */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* About Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone }}>About Pravaah</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: C.text, margin: 0, lineHeight: 1.25 }}>
              Crafted with Passion.<br />Delivered with Pride.
            </h2>
            <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
              We blend heritage with innovation to create textiles that inspire and endure.
            </p>
            <Link
              to="/about"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.primary, textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = C.accent}
              onMouseLeave={e => e.currentTarget.style.color = C.primary}
            >
              Know More <ArrowRight size={12} />
            </Link>
          </div>

          {/* Trade Services */}
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 16 }}>Our Trade Services</span>
            <div className="grid grid-cols-2 gap-3">
              {tradeServices.map((svc, idx) => (
                <Link
                  key={idx}
                  to={svc.path}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '16px 12px', background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, textDecoration: 'none', textAlign: 'center', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(196,112,106,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: C.bgAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                    {svc.icon}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.primary, fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>
                    {svc.name.toLowerCase().startsWith('e-') ? <><span style={{ textTransform: 'lowercase' }}>e</span>{svc.name.slice(1)}</> : svc.name}
                  </span>
                  <p style={{ fontSize: 10.5, color: C.stone, margin: 0, lineHeight: 1.5 }}>{svc.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Network */}
          <div
            style={{ background: C.primaryDark, borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280, position: 'relative', overflow: 'hidden' }}
          >
            <div>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.accentLight, opacity: 0.8, display: 'block', marginBottom: 12 }}>Our Network</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#FDFAF8', margin: '0 0 12px', lineHeight: 1.25 }}>
                Pan India.<br />Present Everywhere.
              </h3>
              <p style={{ fontSize: 13, color: C.accentLight, opacity: 0.75, margin: 0, lineHeight: 1.65, fontWeight: 400 }}>
                Connecting businesses across the nation.
              </p>
            </div>
            <div className="flex opacity-25 justify-center my-4">
              <svg width="130" height="110" viewBox="0 0 130 110" fill="none">
                <path d="M65 10 L82 20 L100 35 L104 55 L95 75 L80 92 L65 105 L50 92 L35 75 L26 55 L30 35 L48 20 Z" stroke={C.accentLight} strokeWidth="1.5" fill={C.accent} fillOpacity="0.15" />
                {[...Array(7)].map((_, i) => (
                  <circle key={i} cx={38 + (i * 12) % 70} cy={28 + (i * 16) % 58} r="3" fill={C.accentLight} opacity="0.9" />
                ))}
              </svg>
            </div>
            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.accentLight, textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = C.accentLight}
            >
              View All Locations <ArrowRight size={12} />
            </Link>
            <div style={{ position: 'absolute', right: -24, bottom: -24, width: 120, height: 120, borderRadius: '50%', background: C.accent, opacity: 0.08, filter: 'blur(30px)' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. CURATED FOR YOU
         ══════════════════════════════════════════ */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="py-10">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-8">
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 8 }}>Curated For You</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 1.5, background: C.accent }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />
              <div style={{ width: 32, height: 1.5, background: C.accent }} />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {featuredCollections.map((col, idx) => (
              <Link
                key={idx}
                to={col.path}
                className="group relative overflow-hidden block"
                style={{
                  borderRadius: (idx === 0 || idx === 4) ? '80px 80px 20px 20px' : 20,
                  textDecoration: 'none',
                  aspectRatio: '3/4',
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  transition: 'border-color 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <img src={col.image} alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(74,30,43,0.85) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, textAlign: 'left' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{col.name}</h3>
                  <p style={{ fontSize: 10, color: C.accentLight, margin: 0, fontWeight: 500 }}>{col.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 8, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: C.accentLight }}>
                    Explore <ChevronRight size={9} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════
          6. TEXTURE GALLERY STRIP
         ══════════════════════════════════════════ */}
      <div style={{ borderTop: `1px solid ${C.border}` }}>
        <div
          ref={stripRef}
          className="no-scrollbar"
          style={{ display: 'flex', gap: 0, overflowX: 'hidden', userSelect: 'none', cursor: 'default' }}
        >
          {loopedStripImages.map((img, idx) => (
            <div key={idx} style={{ flexShrink: 0, height: 140, overflow: 'hidden', position: 'relative' }}>
              <img src={img} alt=""
                style={{ height: '100%', width: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
