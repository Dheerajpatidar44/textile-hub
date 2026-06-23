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
  primary: '#3F5241',
  primaryLight: '#536755',
  primaryDark: '#2C3A2D',
  accent: '#BBA178',
  accentLight: '#FAF5EB',
  bg: '#FAF8F5',
  bgAlt: '#F5EFE6',
  border: '#E3DAD0',
  stone: '#5A665B',
  card: '#ffffff',
  text: '#2C2520',
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
          paddingTop: '80px',
        }}
      >
        <LeafDecor style={{ position: 'absolute', left: -20, top: '18%', pointerEvents: 'none', zIndex: 0 }} />
        <LeafDecor style={{ position: 'absolute', right: -20, top: '22%', pointerEvents: 'none', zIndex: 0 }} flip />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 55% at 50% 48%, rgba(187,161,120,0.06) 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div
          className="w-full max-w-[95rem] mx-auto relative px-6 md:px-14 py-8"
          style={{ zIndex: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ── COLUMN 1: Hero Text (5 cols on lg) ── */}
            <div className="lg:col-span-5 text-left">
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
                  fontSize: 'clamp(38px, 3.8vw, 56px)',
                  fontWeight: 700,
                  color: C.text,
                  margin: '0 0 4px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                Where Every
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(38px, 3.8vw, 56px)',
                  fontWeight: 700,
                  color: C.text,
                  margin: '0 0 4px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                Thread Tells
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(38px, 3.8vw, 56px)',
                  fontWeight: 500,
                  color: C.primary,
                  margin: '0 0 24px',
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
                transition={{ duration: 0.5, delay: 0.24 }}
                style={{
                  fontSize: 14.5,
                  color: C.stone,
                  lineHeight: 1.7,
                  margin: '0 0 36px',
                  fontWeight: 500,
                }}
              >
                Timeless fabrics. Thoughtful designs.<br />Made for comfort. Made to last.
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
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 20px rgba(63,82,65,0.2)',
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
                    boxShadow: '0 2px 8px rgba(63,82,65,0.04)',
                  }}>
                    <Play size={12} fill={C.accent} color={C.accent} />
                  </span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: C.stone, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Watch Our Film</span>
                </button>
              </motion.div>
            </div>

            {/* ── COLUMN 2: Arched Hero Image (4 cols on lg) ── */}
            <div className="lg:col-span-4 flex justify-center items-center relative">
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(187,161,120,0.08) 0%, transparent 70%)`,
                filter: 'blur(30px)',
                pointerEvents: 'none',
                zIndex: 0,
              }} />

              {/* Arched Border Box exactly matching the reference image layout */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: 360,
                height: 480,
                borderRadius: '180px 180px 24px 24px', // Perfect Archway Shape
                overflow: 'hidden',
                background: C.bgAlt,
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 20px 40px rgba(63,82,65,0.06)',
                zIndex: 1,
              }}>
                <img
                  src="/images/alankrit_hero.png"
                  alt="Alankrit Threads Premium Textiles"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

            {/* ── COLUMN 3: Statistics Stack (3 cols on lg) ── */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div
                style={{
                  background: 'rgba(245,239,230,0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  border: `1px solid ${C.border}`,
                  padding: '32px 28px',
                  width: '100%',
                  maxWidth: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  boxShadow: '0 10px 30px rgba(63,82,65,0.03)',
                  textAlign: 'left'
                }}
              >
                {/* Stat 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.card, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.accent, flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: C.primary, margin: 0, lineHeight: 1.1 }}>25+</h4>
                    <p style={{ fontSize: 11, color: C.stone, fontWeight: 600, margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Years of Legacy</p>
                  </div>
                </div>

                <div style={{ height: 1, background: C.border, opacity: 0.6 }} />

                {/* Stat 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.card, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.accent, flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: C.primary, margin: 0, lineHeight: 1.1 }}>500+</h4>
                    <p style={{ fontSize: 11, color: C.stone, fontWeight: 600, margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Retail Partners</p>
                  </div>
                </div>

                <div style={{ height: 1, background: C.border, opacity: 0.6 }} />

                {/* Stat 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.card, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.accent, flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: C.primary, margin: 0, lineHeight: 1.1 }}>1L+</h4>
                    <p style={{ fontSize: 11, color: C.stone, fontWeight: 600, margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Happy Customers</p>
                  </div>
                </div>

                <div style={{ height: 1, background: C.border, opacity: 0.6 }} />

                {/* Stat 4 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.card, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.accent, flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: C.primary, margin: 0, lineHeight: 1.1 }}>20+</h4>
                    <p style={{ fontSize: 11, color: C.stone, fontWeight: 600, margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Cities Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. SIGNATURE COLLECTIONS GRID
         ══════════════════════════════════════════ */}
      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="py-16">
        <div className="max-w-[95rem] mx-auto px-6 md:px-14">
          
          {/* Mockup styled Header with leaf ornaments */}
          <div className="text-center mb-12">
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 4 }}>
              EXPLORE OUR
            </span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              {/* Leaf branch Left SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" style={{ transform: 'rotate(-45deg)', opacity: 0.8 }}>
                <path d="M12 2a15 15 0 0 0-3 9 15 15 0 0 0 3 9 15 15 0 0 0 3-9 15 15 0 0 0-3-9z"/>
                <path d="M12 2v18M12 7c2-1 4-1 5 1M12 11c2-1 4-1 5 1M12 15c2-1 4-1 5 1M12 7c-2-1-4-1-5 1M12 11c-2-1-4-1-5 1M12 15c-2-1-4-1-5 1"/>
              </svg>
              
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 2.5vw, 36px)', fontWeight: 700, color: C.text, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                12 Signature Collections
              </h2>

              {/* Leaf branch Right SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" style={{ transform: 'scaleX(-1) rotate(-45deg)', opacity: 0.8 }}>
                <path d="M12 2a15 15 0 0 0-3 9 15 15 0 0 0 3 9 15 15 0 0 0 3-9 15 15 0 0 0-3-9z"/>
                <path d="M12 2v18M12 7c2-1 4-1 5 1M12 11c2-1 4-1 5 1M12 15c2-1 4-1 5 1M12 7c-2-1-4-1-5 1M12 11c-2-1-4-1-5 1M12 15c-2-1-4-1-5 1"/>
              </svg>
            </div>
          </div>

          {/* Redesigned 12 Arched Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FAF6F0',
                  borderRadius: '24px',
                  border: `1px solid ${C.border}`,
                  padding: '16px 16px 20px',
                  textDecoration: 'none',
                  transition: 'all 0.35s ease',
                  boxShadow: '0 4px 15px rgba(63,82,65,0.02)',
                }}
                className="group card-hover"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.accent;
                  e.currentTarget.style.background = '#FFFFFF';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = '#FAF6F0';
                }}
              >
                {/* Header row with Num and Name */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, fontFamily: "'Outfit', sans-serif" }}>
                    {cat.num || `0${idx + 1}`}
                  </span>
                  <h4 style={{
                    fontSize: 12.5,
                    fontWeight: 750,
                    color: C.primary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    margin: 0,
                    textAlign: 'right',
                    fontFamily: "'Outfit', sans-serif"
                  }}>
                    {cat.name}
                  </h4>
                </div>

                {/* Subtitle */}
                <div style={{ textAlign: 'right', marginBottom: 14 }}>
                  <span style={{ fontSize: 10, color: C.stone, fontStyle: 'italic', fontWeight: 500 }}>
                    {cat.count || "Premium Fabrics"}
                  </span>
                </div>

                {/* Arched image container */}
                <div style={{
                  height: 150,
                  overflow: 'hidden',
                  borderRadius: '40px 40px 16px 16px',
                  border: `1px solid ${C.border}`,
                  background: C.bg
                }}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="group-hover:scale-106"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ABOUT + TRADE SERVICES + NETWORK
         ══════════════════════════════════════════ */}
      <section className="max-w-[95rem] mx-auto px-6 md:px-14 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
          
          {/* About Column (4 cols on xl) */}
          <div className="xl:col-span-4" style={{
            background: C.primaryDark,
            borderRadius: 24,
            border: `1px solid ${C.border}`,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(63,82,65,0.04)',
          }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: 16 }}>ABOUT ALANKRIT</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: '#FFFFFF', margin: '0 0 16px', lineHeight: 1.25 }}>
                Crafted with Passion.<br />Delivered with Pride.
              </h2>
              <p style={{ fontSize: 13.5, color: '#E3DAD0', opacity: 0.9, lineHeight: 1.7, margin: '0 0 24px', fontWeight: 400 }}>
                We blend heritage with innovation to create premium textiles that inspire, comfort, and endure for generations. We deliver unmatched quality across India.
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
              <Link
                to="/about"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.accent, textDecoration: 'none', transition: 'color 0.2s ease', borderBottom: `1.5px solid ${C.accent}`, paddingBottom: 4 }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = C.accent}
              >
                KNOW MORE →
              </Link>
              
              {/* Elegant white vase illustration overlapping */}
              <div style={{ width: 90, height: 110, opacity: 0.85, transform: 'translate(10px, 15px)' }}>
                <svg viewBox="0 0 100 120" fill="none">
                  {/* Stems & Flowers */}
                  <path d="M50 80 Q45 40 30 20" stroke="#FAF5EB" strokeWidth="1.5"/>
                  <path d="M50 80 Q55 50 65 30" stroke="#FAF5EB" strokeWidth="1.5"/>
                  <path d="M50 80 Q50 35 50 15" stroke="#FAF5EB" strokeWidth="1.5"/>
                  <circle cx="30" cy="20" r="4" fill={C.accent}/>
                  <circle cx="65" cy="30" r="4" fill={C.accent}/>
                  <circle cx="50" cy="15" r="4.5" fill={C.accent}/>
                  {/* Vase Body */}
                  <path d="M35 110 C35 70 42 60 50 60 C58 60 65 70 65 110 Z" fill="#FFFFFF" stroke={C.accent} strokeWidth="1.5"/>
                  <ellipse cx="50" cy="60" rx="8" ry="2" fill="#E3DAD0"/>
                </svg>
              </div>
            </div>
            
            {/* Subtle glow background */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: 150, height: 150, borderRadius: '50%', background: C.accent, opacity: 0.05, filter: 'blur(40px)' }} />
          </div>

          {/* Trade Services Column (5 cols on xl) */}
          <div className="xl:col-span-5" style={{
            background: '#FAF6F0',
            borderRadius: 24,
            border: `1px solid ${C.border}`,
            padding: '36px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(63,82,65,0.04)',
          }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 24 }}>OUR TRADE SERVICES</span>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-left">
              {tradeServices.map((svc, idx) => {
                const IconComponent = svc.icon;
                return (
                  <Link
                    key={idx}
                    to={svc.path}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                      textDecoration: 'none',
                      background: '#FFFFFF',
                      border: `1px solid ${C.border}`,
                      borderRadius: 16,
                      padding: '16px',
                      transition: 'all 0.3s ease'
                    }}
                    className="group"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = '0 6px 16px rgba(63,82,65,0.03)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: C.bgAlt,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: C.primary,
                      flexShrink: 0,
                    }}>
                      <IconComponent size={16} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 12.5, fontWeight: 750, color: C.primary, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                        {svc.name.toLowerCase().startsWith('e-') ? <><span style={{ textTransform: 'lowercase' }}>e</span>-{svc.name.slice(2)}</> : svc.name}
                      </h4>
                      <p style={{ fontSize: 11, color: C.stone, margin: 0, lineHeight: 1.4, fontWeight: 500 }}>{svc.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Network Column (3 cols on xl) */}
          <div className="xl:col-span-3" style={{
            background: C.primaryDark,
            borderRadius: 24,
            border: `1px solid ${C.border}`,
            padding: '36px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(63,82,65,0.04)',
          }}>
            <div>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: 14 }}>OUR NETWORK</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: '#ffffff', margin: '0 0 10px', lineHeight: 1.25 }}>
                Pan India.<br />Present Everywhere.
              </h3>
              <p style={{ fontSize: 13, color: '#E3DAD0', opacity: 0.85, margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
                Connecting businesses across the nation with reliable supply chains.
              </p>
            </div>
            
            {/* India Map stylized graphic container */}
            <div style={{ height: 110, width: '100%', overflow: 'hidden', borderRadius: 16, margin: '14px 0', border: `1px solid rgba(187,161,120,0.3)`, position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&auto=format&fit=crop&q=80"
                alt="Our Network"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(44, 58, 45, 0.4), rgba(44, 58, 45, 0.8))` }} />
              {/* Dots representing network locations */}
              <div style={{ position: 'absolute', top: '35%', left: '38%', width: 8, height: 8, borderRadius: '50%', background: C.accent, boxShadow: `0 0 8px ${C.accent}` }} className="green-pulse" />
              <div style={{ position: 'absolute', top: '65%', left: '42%', width: 8, height: 8, borderRadius: '50%', background: C.accent, boxShadow: `0 0 8px ${C.accent}` }} className="green-pulse" />
              <div style={{ position: 'absolute', top: '50%', left: '55%', width: 8, height: 8, borderRadius: '50%', background: C.accent, boxShadow: `0 0 8px ${C.accent}` }} className="green-pulse" />
            </div>
            
            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.accent, textDecoration: 'none', transition: 'color 0.2s ease', borderBottom: `1.5px solid ${C.accent}`, paddingBottom: 4, width: 'fit-content' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = C.accent}
            >
              VIEW ALL LOCATIONS →
            </Link>
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

      <section className="max-w-[95rem] mx-auto px-6 md:px-14 py-16">
        <div className="text-center mb-12">
          <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 4 }}>
            REVIEWS
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 2.5vw, 36px)', fontWeight: 700, color: C.text, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            What Our Clients Say
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12 }}>
            <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />
            <div style={{ width: 36, height: 1.5, background: C.accent, borderRadius: 2 }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Testimonials Column (8 cols on lg) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <div
                key={idx}
                className="bg-white hover:shadow-md transition-shadow duration-300"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: `1px solid ${C.border}`,
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  textAlign: 'left'
                }}
              >
                <div className="space-y-4">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 text-[#bca374]" style={{ display: 'flex', gap: 2, color: C.accent }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, fontWeight: 500, fontStyle: 'italic', margin: '8px 0 0' }}>
                    "{review.text}"
                  </p>
                </div>

                {/* User Profile Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, marginTop: 20, borderTop: `1px solid ${C.border}` }}>
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: `1px solid ${C.border}` }}
                    />
                  ) : (
                    <div 
                      style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(43, 37, 32, 0.04)', color: C.accent }}
                    >
                      <User size={14} />
                    </div>
                  )}
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 700, color: C.primary, margin: 0 }}>{review.name}</h4>
                    <p style={{ fontSize: 10.5, color: C.stone, fontWeight: 500, margin: 0 }}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Impact Column (4 cols on lg) */}
          <div className="lg:col-span-4" style={{
            background: '#FAF6F0',
            borderRadius: '20px',
            border: `1px solid ${C.border}`,
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(63,82,65,0.03)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 10 }}>OUR IMPACT</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 16px', lineHeight: 1.3 }}>
                Sustainable choices for a better tomorrow.
              </h3>
            </div>

            {/* Clay pot plant illustration */}
            <div style={{ height: 110, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '8px 0 20px' }}>
              <svg viewBox="0 0 100 100" fill="none" style={{ height: '100%' }}>
                {/* Branches */}
                <path d="M50 75 Q40 45 28 35" stroke={C.primary} strokeWidth="1.2"/>
                <path d="M50 75 Q60 50 68 40" stroke={C.primary} strokeWidth="1.2"/>
                <path d="M50 75 Q50 40 45 25" stroke={C.primary} strokeWidth="1.2"/>
                {/* Leaves */}
                <path d="M28 35 C20 38 18 30 28 35 Z" fill={C.primaryLight}/>
                <path d="M68 40 C75 42 78 35 68 40 Z" fill={C.primaryLight}/>
                <path d="M45 25 C40 20 48 18 45 25 Z" fill={C.primaryLight}/>
                {/* Clay Pot */}
                <path d="M40 90 C40 75 44 75 50 75 C56 75 60 75 60 90 Z" fill={C.accent} opacity="0.8"/>
                <ellipse cx="50" cy="75" rx="10" ry="2.5" fill={C.accent}/>
              </svg>
            </div>

            {/* Impact stats */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
              <div>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.primary, display: 'block', lineHeight: 1.1 }}>100+</span>
                <span style={{ fontSize: 10, color: C.stone, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Ethical Vendors</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.primary, display: 'block', lineHeight: 1.1 }}>1M+</span>
                <span style={{ fontSize: 10, color: C.stone, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Fabric Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. BRAND TEXTURE GALLERY BANNER
         ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF6F0', borderTop: `1px solid ${C.border}`, padding: '40px 0 24px' }}>
        <div className="w-full text-center">
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', color: C.stone, display: 'block', marginBottom: 20 }}>
            INSPIRED BY TEXTURE. DRIVEN BY DESIGN.
          </span>
          
          {/* Sliced trapezoidal texture banner */}
          <div className="w-full flex justify-center items-center overflow-hidden" style={{ height: 160, gap: '4px', padding: '0 8px' }}>
            {[
              "/images/pravaah_hero_v2.png",
              "/images/premium_fabrics.png",
              "/images/popular_banarasi_saree.png",
              "/images/popular_lehenga.png",
              "/images/men_ethnic_wear.png",
              "/images/popular_anarkali.png"
            ].map((imgUrl, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer'
                }}
                className="hover:flex-[1.5] transition-all"
              >
                <img
                  src={imgUrl}
                  alt={`Texture ${i+1}`}
                  style={{
                    width: '120%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    left: '-10%',
                    top: 0
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
