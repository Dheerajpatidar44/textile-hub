import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
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

const heroGroups = [
  // Group 0: Men (casual denim, traditional kurta, formal blazer, wedding sherwani)
  [
    "/images/hero_man_jeans.png",
    "/images/hero_man_kurta.png",
    "/images/hero_man_suit.png",
    "/images/hero_man_sherwani.png"
  ],
  // Group 1: Women (kurti, pant shirt, Banarasi saree, leggings)
  [
    "/images/hero_woman_kurti.png",
    "/images/hero_woman_pant.png",
    "/images/hero_woman_saree.png",
    "/images/hero_woman_leggings.png"
  ],
  // Group 2: Kids (jeans shirt, kurta pajama, t-shirt/lower, half-shorts)
  [
    "/images/hero_kid_jeans.png",
    "/images/hero_kid_kurta.png",
    "/images/hero_kid_tshirt.png",
    "/images/hero_kid_shorts.png"
  ]
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
  { text: "Alankrit Threads has been our trusted partner for years. The quality, and B2B quotation services are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time and rework.", name: "Anita Desai", role: "Design Head, Mumbai", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
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
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % heroGroups.length);
    }, 5000);
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
          <div className="flex justify-center items-center relative w-full">
            {/* Decorative radial glows */}
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

            {/* Symmetrical gallery of 4 sliding arched images side-by-side */}
            <div style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              zIndex: 1,
            }}>
              {/* Slot 1: Active Image 1 (Always visible, centered on mobile) */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: 290,
                height: 430,
                borderRadius: '150px 150px 24px 24px', // Perfect Archway Shape
                overflow: 'hidden',
                background: C.bgAlt,
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 20px 40px rgba(63,82,65,0.06)',
              }}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={groupIndex + '-0'}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={heroGroups[groupIndex][0]}
                    alt="Alankrit Threads Premium Fabrics 1"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Slot 2: Image 2 (Hidden on mobile) */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: 290,
                height: 430,
                borderRadius: '150px 150px 24px 24px', // Perfect Archway Shape
                overflow: 'hidden',
                background: C.bgAlt,
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 20px 40px rgba(63,82,65,0.06)',
              }}
                className="hidden sm:block sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={groupIndex + '-1'}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={heroGroups[groupIndex][1]}
                    alt="Alankrit Threads Premium Fabrics 2"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Slot 3: Image 3 (Hidden on mobile and sm) */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: 290,
                height: 430,
                borderRadius: '150px 150px 24px 24px', // Perfect Archway Shape
                overflow: 'hidden',
                background: C.bgAlt,
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 20px 40px rgba(63,82,65,0.06)',
              }}
                className="hidden md:block md:w-1/3 lg:w-1/4"
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={groupIndex + '-2'}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={heroGroups[groupIndex][2]}
                    alt="Alankrit Threads Premium Fabrics 3"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Slot 4: Image 4 (Hidden on mobile, sm, and md) */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: 290,
                height: 430,
                borderRadius: '150px 150px 24px 24px', // Perfect Archway Shape
                overflow: 'hidden',
                background: C.bgAlt,
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 20px 40px rgba(63,82,65,0.06)',
              }}
                className="hidden lg:block lg:w-1/4"
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={groupIndex + '-3'}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={heroGroups[groupIndex][3]}
                    alt="Alankrit Threads Premium Fabrics 4"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. SIGNATURE COLLECTIONS GRID
         ══════════════════════════════════════════ */}
      <section style={{ background: C.bg }} className="py-16">
        <div className="max-w-[95rem] mx-auto px-6 md:px-14">

          {/* Mockup styled Header with leaf ornaments */}
          <div className="text-center mb-12">
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.stone, display: 'block', marginBottom: 4 }}>
              EXPLORE OUR
            </span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 2.5vw, 36px)', fontWeight: 700, color: C.text, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Categories
              </h2>
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
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="group"
              >
                {/* The main image container with overflow hidden and arched corners */}
                <div style={{
                  height: 180,
                  overflow: 'hidden',
                  borderRadius: '40px 40px 16px 16px',
                  background: C.bg,
                  marginBottom: 12,
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease, border-color 0.4s ease',
                  border: `1.5px solid ${C.border}`,
                }}
                  className="category-image-wrapper"
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(63, 82, 69, 0.12)';
                    e.currentTarget.style.borderColor = C.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = C.border;
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    className="category-img"
                  />
                </div>

                {/* Category Name */}
                <h4 style={{
                  fontSize: 12,
                  fontWeight: 750,
                  color: C.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  margin: 0,
                  textAlign: 'center',
                  fontFamily: "'Outfit', sans-serif",
                  transition: 'color 0.25s ease',
                }}
                  className="group-hover:text-[#BBA178]"
                >
                  {cat.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[95rem] mx-auto px-6 md:px-14 py-12">
        <div className="w-full text-center">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 2.5vw, 36px)', fontWeight: 700, color: C.text, margin: '0 0 32px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Our Trade Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {tradeServices.map((svc, idx) => {
              const IconComponent = svc.icon;
              return (
                <Link
                  key={idx}
                  to={svc.path}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    textDecoration: 'none',
                    background: '#FFFFFF',
                    border: `1.5px solid ${C.border}`,
                    borderRadius: 20,
                    padding: '28px 24px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(63,82,65,0.02)',
                  }}
                  className="group"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = '0 12px 30px rgba(63, 82, 69, 0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = '0 4px 15px rgba(63,82,65,0.02)'; }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: C.bgAlt,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: C.primary,
                    flexShrink: 0,
                  }}>
                    <IconComponent size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 750, color: C.primary, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                      {svc.name.toLowerCase().startsWith('e-') ? <><span style={{ textTransform: 'lowercase' }}>e</span>-{svc.name.slice(2)}</> : svc.name}
                    </h4>
                    <p style={{ fontSize: 11.5, color: C.stone, margin: 0, lineHeight: 1.45, fontWeight: 500 }}>{svc.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. CURATED FOR YOU
         ══════════════════════════════════════════ */}
      <section style={{ background: C.bgAlt }} className="py-14">
        <div className="max-w-[95rem] mx-auto px-6 md:px-14">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 2.5vw, 36px)', fontWeight: 700, color: C.text, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Curated For You
            </h2>
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

        <div style={{ overflow: 'hidden', width: '100%', padding: '12px 0', position: 'relative' }}>
          {/* Left/Right soft fade overlays for premium B2B look */}
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #FAF8F5, transparent)', zIndex: 5, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #FAF8F5, transparent)', zIndex: 5, pointerEvents: 'none' }} />

          <div className="reviews-ticker-track" style={{ gap: '24px' }}>
            {[...testimonials, ...testimonials].map((review, idx) => (
              <div
                key={idx}
                style={{
                  width: '350px',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                }}
              >
                <div
                  className="bg-white hover:shadow-md transition-shadow duration-300 h-full"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    border: `1px solid ${C.border}`,
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '270px',
                    textAlign: 'left'
                  }}
                >
                  <div className="space-y-4">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-0.5 text-[#BBA178]" style={{ display: 'flex', gap: 2, color: C.accent }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" stroke="none" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.6, fontWeight: 550, fontStyle: 'italic', margin: '8px 0 0', whiteSpace: 'normal' }}>
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
                      <h4 style={{ fontSize: 12.5, fontWeight: 700, color: C.primary, margin: 0, whiteSpace: 'normal' }}>{review.name}</h4>
                      <p style={{ fontSize: 11, color: C.stone, fontWeight: 500, margin: 0, whiteSpace: 'normal' }}>{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>


    </div>
  );
}
