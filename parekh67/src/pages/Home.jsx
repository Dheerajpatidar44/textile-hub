import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Play,
  FileText,
  Gavel,
  Megaphone,
  Tag,
  Star,
  User,
} from 'lucide-react';

const C = {
  primary: '#0b3329',
  primaryLight: '#15473b',
  primaryDark: '#062c22',
  accent: '#bca374',
  accentLight: '#f2ece1',
  bg: '#fcf8f2',
  bgAlt: '#f5eee6',
  border: '#eadacc',
  stone: '#4d5d59',
  card: '#ffffff',
  text: '#0d241f',
};

// Keep original categories in exact order and original names as requested
const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png", count: "Timeless Tradition", num: "01" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&auto=format&fit=crop&q=60", count: "Everyday Comfort", num: "02" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=300&auto=format&fit=crop&q=60", count: "Everyday Grace", num: "03" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png", count: "Style Redefined", num: "04" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png", count: "Pure Comfort", num: "05" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop&q=60", count: "Premium Essentials", num: "06" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&auto=format&fit=crop&q=60", count: "Sharp Fabrics", num: "07" },
  { name: "Shirting", image: "/images/popular_cotton_fabric.png", count: "Classic Weaves", num: "08" },
  { name: "Women Ethnic", image: "/images/popular_lehenga.png", count: "Festive Splendor", num: "09" },
  { name: "Men Ethnic", image: "/images/men_ethnic_wear.png", count: "Royal Heritage", num: "10" },
  { name: "Kids Ethnic", image: "/images/children_ethnic_wear.png", count: "Joyful Prints", num: "11" },
  { name: "Home Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60", count: "Woven Comfort", num: "12" },
];

const heroImages = [
  "/images/pravaah_hero_v2.png",
  "/images/premium_fabrics.png",
  "/images/popular_banarasi_saree.png",
  "/images/popular_lehenga.png",
  "/images/men_ethnic_wear.png",
  "/images/popular_anarkali.png"
];

const tradeServices = [
  { name: 'e-Quotation', desc: 'Fast & easy quotation for your business needs.', path: '/e-quotation', icon: FileText },
  { name: 'e-Auction', desc: 'Transparent bidding for the best prices.', path: '/e-auction', icon: Gavel },
  { name: 'Trade Circular', desc: 'Stay updated with latest offers & market circulars.', path: '/trade-circular', icon: Megaphone },
  { name: 'Private Label', desc: 'Custom branding tailored for your brand.', path: '/retail-management', icon: Tag },
];

const featuredCollections = [
  { name: "Kurtis", desc: "Fresh Styles, Timeless Appeal", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=60", path: "/products?category=Kurtis" },
  { name: "Sarees", desc: "Grace in Every Drape", image: "/images/popular_banarasi_saree.png", path: "/products?category=Sarees" },
  { name: "Linen", desc: "Breathe Natural, Live Natural", image: "/images/popular_bedsheet.png", path: "/products?category=Bedsheets & Linen" },
  { name: "Home Textiles", desc: "Comfort Woven Beautifully", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=60", path: "/products?category=Home Furnishing" },
  { name: "New Arrivals", desc: "Discover the Latest Drops", image: "/images/popular_anarkali.png", path: "/products" },
];

const testimonials = [
  { text: "The quality and consistency Zariya House provides is unmatched. Highly recommended!", name: "Meena Collection", role: "Retailer, Delhi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { text: "Best variety, best prices and a very professional team. Great experience!", name: "Sagar Textiles", role: "Wholesale, Mumbai", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
  { text: "A partner we can rely on for every season and every trend.", name: "Rajesh Traders", role: "Partner, Surat", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
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
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }}
      className="w-full overflow-x-hidden"
    >
      {/* ══════════════════════════════════════════
          1. HERO SECTION
         ══════════════════════════════════════════ */}
      <section
        style={{
          background: C.bg,
          minHeight: '92vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '64px',
        }}
      >
        <LeafDecor style={{ position: 'absolute', left: -20, top: '18%', pointerEvents: 'none', zIndex: 0 }} />
        <LeafDecor style={{ position: 'absolute', right: -20, top: '22%', pointerEvents: 'none', zIndex: 0 }} flip />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 55% at 50% 48%, rgba(188,163,116,0.05) 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div
          className="w-full max-w-[95rem] mx-auto relative px-6 md:px-14 py-12"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            alignItems: 'center',
            gap: '24px',
            zIndex: 1,
          }}
        >
          {/* ── LEFT COLUMN: Hero Text ── */}
          <div style={{ textAlign: 'left', paddingRight: '20px' }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: C.stone,
                margin: '0 0 16px',
                lineHeight: 1.5,
              }}>
                Premium Textiles. Crafted for Generations.
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(42px, 4.2vw, 60px)',
                fontWeight: 700,
                color: C.text,
                margin: '0 0 6px',
                lineHeight: 1.1,
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(42px, 4.2vw, 60px)',
                fontWeight: 500,
                color: C.accent,
                margin: '0 0 28px',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              <span style={{ fontStyle: 'italic', position: 'relative', display: 'inline-block' }}>
                a Story.
                <span style={{ position: 'absolute', bottom: 4, left: 0, width: '100%', height: '1.5px', background: C.accent }} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              style={{
                fontSize: 14.5,
                color: C.stone,
                lineHeight: 1.7,
                margin: '0 0 36px',
                fontWeight: 400,
              }}
            >
              Timeless fabrics, thoughtful designs, made for comfort. Made to last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
            >
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  background: C.primary,
                  color: '#fff',
                  borderRadius: 50,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 20px rgba(11,51,41,0.25)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
              >
                Explore Collections →
              </Link>

              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span style={{
                  width: 38, height: 38,
                  borderRadius: '50%',
                  border: `1.5px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: C.card,
                  boxShadow: '0 2px 8px rgba(11,51,41,0.04)',
                }}>
                  <Play size={12} fill={C.accent} color={C.accent} />
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.stone }}>Watch Our Film</span>
              </button>
            </motion.div>
          </div>

          {/* ── CENTER COLUMN: Hero Image Slot A (Sliding Saree / Fabric) ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(188,163,116,0.1) 0%, transparent 70%)`,
              filter: 'blur(30px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 380,
              height: 440,
              borderRadius: 24,
              overflow: 'hidden',
              background: C.bgAlt,
              border: `1.5px solid ${C.border}`,
              boxShadow: '0 20px 40px rgba(11,51,41,0.08)',
              zIndex: 1,
            }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIdx}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  src={heroImages[currentIdx]}
                  alt="Zariya House Premium Textiles"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Hero Image Slot B (Sliding Saree / Fabric) ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(188,163,116,0.1) 0%, transparent 70%)`,
              filter: 'blur(30px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 380,
              height: 440,
              borderRadius: 24,
              overflow: 'hidden',
              background: C.bgAlt,
              border: `1.5px solid ${C.border}`,
              boxShadow: '0 20px 40px rgba(11,51,41,0.08)',
              zIndex: 1,
            }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={(currentIdx + 1) % heroImages.length}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  src={heroImages[(currentIdx + 1) % heroImages.length]}
                  alt="Zariya House Fashion"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. SIGNATURE COLLECTIONS GRID
         ══════════════════════════════════════════ */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="py-14">
        <div className="max-w-[95rem] mx-auto px-6 md:px-14">
          <div className="text-center mb-10">
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 6 }}>
              Explore Our
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: C.text, margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Signature Collections
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12 }}>
              <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />
              <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
            </div>
          </div>

          {/* Grid Layout replacing horizontal scroller */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: C.card,
                  borderRadius: 16,
                  border: `1.5px solid ${C.border}`,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(11,51,41,0.03)',
                }}
                className="group card-hover"
              >
                <div style={{ height: 120, overflow: 'hidden', relative: true }}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-105"
                  />
                </div>
                <div style={{ padding: '16px 14px', textAlign: 'center' }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.02em', margin: 0, lineHeight: 1.2 }}>{cat.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ABOUT + TRADE SERVICES + NETWORK
         ══════════════════════════════════════════ */}
      <section className="max-w-[95rem] mx-auto px-6 md:px-14 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* About Column */}
          <div style={{
            background: C.card,
            borderRadius: 24,
            border: `1.5px solid ${C.border}`,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            justifyContent: 'center',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(11,51,41,0.03)',
          }}>
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone }}>About Zariya House</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: C.text, margin: 0, lineHeight: 1.2 }}>
              Crafted with Passion.<br />Delivered with Pride.
            </h2>
            <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
              We blend heritage with innovation to create premium textiles that inspire, comfort, and endure for generations.
            </p>
            <Link
              to="/about"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.primary, textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = C.accent}
              onMouseLeave={e => e.currentTarget.style.color = C.primary}
            >
              Know More →
            </Link>
          </div>

          {/* Trade Services */}
          <div style={{
            background: C.card,
            borderRadius: 24,
            border: `1.5px solid ${C.border}`,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            justifyContent: 'center',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(11,51,41,0.03)',
          }}>
            <div>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 20 }}>Our Trade Services</span>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                {tradeServices.map((svc, idx) => {
                  const IconComponent = svc.icon;
                  return (
                    <Link
                      key={idx}
                      to={svc.path}
                      style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', transition: 'all 0.2s' }}
                      className="group"
                    >
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: 'rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000000',
                        flexShrink: 0,
                      }}>
                        <IconComponent size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 13, fontWeight: 700, color: C.primary, margin: 0 }}>
                          {svc.name.toLowerCase().startsWith('e-') ? <><span style={{ textTransform: 'lowercase' }}>e</span>-{svc.name.slice(2)}</> : svc.name}
                        </h4>
                        <p style={{ fontSize: 11, color: C.stone, margin: 0 }}>{svc.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Network */}
          <div
            style={{ background: C.primaryDark, borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280, position: 'relative', overflow: 'hidden', textAlign: 'left' }}
          >
            <div>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: 12 }}>Our Network</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: '#ffffff', margin: '0 0 12px', lineHeight: 1.2 }}>
                Pan India.<br />Present Everywhere.
              </h3>
              <p style={{ fontSize: 13, color: C.accentLight, opacity: 0.8, margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
                Connecting businesses across the nation with reliable supply chains.
              </p>
            </div>
            <div style={{ height: 110, width: '100%', overflow: 'hidden', borderRadius: 16, margin: '12px 0', border: `1px solid rgba(188,163,116,0.3)` }}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&auto=format&fit=crop&q=80"
                alt="Our Network"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.accent, textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = C.accent}
            >
              View All Locations →
            </Link>
            <div style={{ position: 'absolute', right: -24, bottom: -24, width: 120, height: 120, borderRadius: '50%', background: C.accent, opacity: 0.08, filter: 'blur(30px)' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. CURATED FOR YOU
         ══════════════════════════════════════════ */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="py-14">
        <div className="max-w-[95rem] mx-auto px-6 md:px-14">
          <div className="text-center mb-10">
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 6 }}>Curated For You</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 1.5, background: C.accent }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />
              <div style={{ width: 32, height: 1.5, background: C.accent }} />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredCollections.map((col, idx) => (
              <Link
                key={idx}
                to={col.path}
                className="group relative overflow-hidden block"
                style={{
                  borderRadius: '120px 120px 16px 16px', // Capsule top curve as requested
                  textDecoration: 'none',
                  aspectRatio: '3/4.2',
                  background: C.card,
                  border: `1.5px solid ${C.border}`,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(11,51,41,0.03)',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <img src={col.image} alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,44,34,0.8) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>{col.name}</h3>
                  <p style={{ fontSize: 10, color: C.accentLight, margin: 0, fontWeight: 500, opacity: 0.9 }}>{col.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 8, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: C.accent }}>
                    Explore <ChevronRight size={9} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. WHAT OUR CLIENTS SAY
         ══════════════════════════════════════════ */}
      <section className="max-w-[95rem] mx-auto px-6 md:px-14 py-16">
        <div className="text-center mb-10">
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 6 }}>
            Reviews
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: C.text, margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            What Our Clients Say
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12 }}>
            <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />
            <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#eadacc] p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              style={{ background: '#ffffff', borderRadius: 24, border: `1px solid ${C.border}`, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' }}
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-[#bca374]" style={{ display: 'flex', gap: 2, color: C.accent }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Quote Text */}
                <p style={{ fontSize: 13, color: '#4d5d59', lineHeight: 1.6, fontWeight: 600, fontStyle: 'italic', margin: '12px 0 0' }}>
                  "{review.text}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 20, marginTop: 24, borderTop: `1px solid ${C.border}` }}>
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: `1px solid ${C.border}` }}
                  />
                ) : (
                  <div 
                    style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(43, 37, 32, 0.04)', color: C.accent }}
                  >
                    <User size={16} />
                  </div>
                )}
                <div>
                  <h4 style={{ fontSize: 12.5, fontWeight: 700, color: '#0b3329', margin: 0 }}>{review.name}</h4>
                  <p style={{ fontSize: 11, color: '#4d5d59', fontWeight: 500, margin: 0 }}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
