import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1b3252',
  primaryDark: '#0e192c',
  primaryLight: '#243b61',
  accent: '#b08e5b',
  accentLight: '#ebdcb9',
  bg: '#fdfbf7',
  sand: '#f2e8dc',
  sage: '#e3dbd3',
  border: '#e6dfd5',
  soil: '#1a2538',
  stone: '#63738a',
};

// ── 12 Categories (names & order preserved) ──
const categories = [
  "Sarees",
  "Leggings",
  "Kurtis",
  "Dress Suits",
  "Bedsheets & Linen",
  "Hosiery Items",
  "Suiting",
  "Shirting",
  "Formal & Ethnic Wear for Women",
  "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children",
  "Home Upholstery & Furnishing"
];

const categoryImages = {
  "Sarees": [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616986491129-3e37cb654c82?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?w=600&auto=format&fit=crop&q=60"
  ],
  "Leggings": [
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1650461970708-7bf32499516d?q=80&w=627&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1763771522867-c26bf75f12bc?w=600&auto=format&fit=crop&q=60"
  ],
  "Kurtis": [
    "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1597983073540-684a10b15ab1?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&auto=format&fit=crop&q=60"
  ],
  "Dress Suits": [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1661434624086-e02557c68815?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1588186941799-f9a4fc54ff1e?w=600&auto=format&fit=crop&q=60"
  ],
  "Bedsheets & Linen": [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&auto=format&fit=crop&q=80"
  ],
  "Hosiery Items": [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&auto=format&fit=crop&q=80"
  ],
};

// ── Hero Images (5 grid images matching reference layout) ──
const heroImages = {
  mainSaree: '/images/hero_saree.png',
  fabric: '/images/hero_fabric.png',
  bedroom: '/images/hero_bedroom.png',
  fabrics2: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=80',
  childDress: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&auto=format&fit=crop&q=80',
};

// ── Feature Cards (3 promo cards below hero) ──
const featureCards = [
  {
    tag: 'New Collection',
    title: <>Timeless Handcrafted<br />Fabrics</>,
    btnText: 'SHOP NOW',
    path: '/products',
    image: '/images/1.png',
    bg: '#1a2f50',
    dark: false,
  },
  {
    tag: 'Special Offer',
    title: <>Season Sale Up to<br />30% Off</>,
    sub: 'LIMITED TIME ONLY!',
    btnText: 'SHOP OFFER',
    path: '/trade-enquiry',
    image: '/images/2.png',
    bg: '#f5ede0',
    dark: false,
  },
  {
    tag: 'Fresh Arrivals',
    title: <>Discover Our Latest<br />Trends</>,
    btnText: 'EXPLORE NOW',
    path: '/products',
    image: '/images/3.png',
    bg: '#dfe8e0',
    dark: false,
  },
];

// ── Gallery items ──
const galleryItems = [
  { title: "Global Textile Summit 2026", desc: "Our leadership team joining industry leaders.", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "New Manufacturing Unit Inauguration", desc: "Expanding with a state-of-the-art facility.", category: "Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" },
  { title: "Award for Excellence in Exports", desc: "Recognised for outstanding performance.", category: "Achievement", image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60" },
  { title: "Annual Retailers Meet", desc: "Connecting & growing as a strong textile family.", category: "Community", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60" },
];

// ── Blog posts ──
const blogPosts = [
  { title: 'The Art of Handloom — Keeping Tradition Alive', date: '30 May 2026', image: 'https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=400&auto=format&fit=crop&q=60' },
  { title: 'How to Choose the Perfect Fabric', date: '15 May 2026', image: 'https://images.unsplash.com/photo-1599753931952-654e960af582?w=400&auto=format&fit=crop&q=60' },
  { title: 'Sustainable Textiles for a Better Tomorrow', date: '10 May 2026', image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=400&auto=format&fit=crop&q=60' },
  { title: 'Trends to Watch in Home Furnishing', date: '22 Apr 2026', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&auto=format&fit=crop&q=60' },
];

// ── Trust badges ──
const trustBadges = [
  { icon: '👥', title: 'Trusted by Thousands', desc: 'Happy customers across India' },
  { icon: '🌿', title: 'Authentic & Ethical', desc: 'Sourced responsibly, crafted ethically' },
  { icon: '↩️', title: 'Easy Returns', desc: 'Hassle-free returns within 7 days' },
  { icon: '📦', title: 'Secure Packaging', desc: 'Safety in every order delivered' },
  { icon: '⭐', title: '100% Satisfaction', desc: 'Your satisfaction is our priority' },
];

export default function Home() {
  const galleryRef = useRef(null);

  const scrollGallery = (dir) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
    }
  };

  // Show first 6 categories
  const displayCategories = categories.slice(0, 6);

  // Category icons using simple SVG symbols
  const catIcons = ['👘', '🧣', '👗', '🥻', '🛏️', '🧴'];

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden">

      {/* ═══════════════════════════════════════
          1. HERO SECTION — 5-image asymmetric grid matching reference
      ═══════════════════════════════════════ */}
      <section
        className="relative w-full"
        style={{ background: '#fdfbf7', paddingTop: 'calc(44px + 64px + 16px)', paddingBottom: 24 }}
      >
        <div className="max-w-[90rem] mx-auto w-full px-6 sm:px-8 lg:px-14">

          {/* ── Main hero row: fixed 420px height ── */}
          <div
            className="flex flex-col lg:flex-row gap-4"
            style={{ height: 420 }}
          >
            {/* ── Left: Text Content — full height of container ── */}
            <div
              className="w-full lg:w-[38%] flex flex-col justify-center relative shrink-0"
              style={{
                background: 'linear-gradient(135deg, #fdfbf7 0%, #f5ede0 100%)',
                borderRadius: 16,
                padding: '32px 30px',
                border: `1px solid ${C.border}`,
                overflow: 'hidden',
                height: '100%',
              }}
            >
              {/* Botanical leaf — top-left */}
              <div style={{ position: 'absolute', top: 0, left: 0, opacity: 0.07, pointerEvents: 'none' }}>
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <path d="M10 130 Q30 80 70 40 Q100 10 130 10" stroke="#b08e5b" strokeWidth="1" fill="none" />
                  <path d="M10 110 Q40 70 80 30" stroke="#b08e5b" strokeWidth="0.8" fill="none" />
                  <path d="M30 130 Q50 90 80 60" stroke="#b08e5b" strokeWidth="0.8" fill="none" />
                  <ellipse cx="90" cy="28" rx="20" ry="10" fill="#b08e5b" opacity="0.5" transform="rotate(-45 90 28)" />
                  <ellipse cx="65" cy="53" rx="18" ry="9" fill="#b08e5b" opacity="0.4" transform="rotate(-45 65 53)" />
                </svg>
              </div>
              {/* Botanical leaf — bottom-right */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0.07, pointerEvents: 'none', transform: 'rotate(180deg)' }}>
                <svg width="120" height="120" viewBox="0 0 140 140">
                  <path d="M10 130 Q30 80 70 40 Q100 10 130 10" stroke="#b08e5b" strokeWidth="1" fill="none" />
                  <ellipse cx="90" cy="28" rx="20" ry="10" fill="#b08e5b" opacity="0.5" transform="rotate(-45 90 28)" />
                </svg>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p style={{ fontSize: 13, color: C.stone, fontStyle: 'italic', margin: '0 0 6px', letterSpacing: '0.02em' }}>
                  Celebrate Tradition,
                </p>
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(30px, 3.8vw, 50px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: C.soil,
                  margin: '0 0 14px',
                }}>
                  Embrace<br />Elegance
                </h1>

                {/* Gold diamond divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0 16px' }}>
                  <div style={{ height: 1, width: 40, background: C.accent }} />
                  <div style={{ width: 7, height: 7, background: C.accent, transform: 'rotate(45deg)', borderRadius: 1 }} />
                  <div style={{ height: 1, width: 40, background: C.accent }} />
                </div>

                <p style={{ color: C.stone, fontSize: 13, lineHeight: 1.75, marginBottom: 24, maxWidth: 320 }}>
                  Premium textiles crafted with heritage, designed for you.
                </p>

                <Link
                  to="/products"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: C.primary, color: '#ffffff',
                    borderRadius: 8, fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    textDecoration: 'none', padding: '11px 22px',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 16px rgba(27,50,82,0.25)',
                    border: `2px solid ${C.primary}`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.borderColor = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.borderColor = C.primary; }}
                >
                  Explore Collection <ArrowRight size={13} />
                </Link>
              </motion.div>
            </div>

            {/* ── Right: 5-Image Asymmetric Grid — 62% width, 420px height ── */}
            <div
              className="hidden lg:flex flex-col gap-2"
              style={{ flex: 1, height: '100%' }}
            >
              {/* Top row: 2 images — 232px tall */}
              <div className="flex gap-2" style={{ height: 232, flexShrink: 0 }}>
                <div style={{ flex: '0 0 58%', borderRadius: 14, overflow: 'hidden', background: '#e0d8d0' }}>
                  <img
                    src={heroImages.mainSaree}
                    alt="Premium Saree"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ flex: 1, borderRadius: 14, overflow: 'hidden', background: '#d8e0e8' }}>
                  <img
                    src={heroImages.fabric}
                    alt="Premium Fabric"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              {/* Bottom row: 3 equal images — fills remaining height */}
              <div className="flex gap-2" style={{ flex: 1, minHeight: 0 }}>
                <div style={{ flex: 1, borderRadius: 14, overflow: 'hidden', background: '#e0e8e0' }}>
                  <img
                    src={heroImages.bedroom}
                    alt="Home Textile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ flex: 1, borderRadius: 14, overflow: 'hidden', background: '#f0e8d8' }}>
                  <img
                    src={heroImages.fabrics2}
                    alt="Stacked Fabrics"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ flex: 1, borderRadius: 14, overflow: 'hidden', background: '#e8ece8' }}>
                  <img
                    src={heroImages.childDress}
                    alt="Ethnic Wear"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile: single hero image */}
            <div className="block lg:hidden w-full rounded-xl overflow-hidden" style={{ height: 240 }}>
              <img src={heroImages.mainSaree} alt="RUHANI WEAVES" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </section>



      {/* ═══════════════════════════════════════
          3. SHOP BY CATEGORY
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff', borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Left: title + button */}
            <div className="lg:w-[22%] shrink-0">
              <p style={{ fontSize: 11, color: C.accent, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 8px' }}>Collections</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: C.soil, margin: '0 0 8px', lineHeight: 1.2 }}>
                Shop by<br />Category
              </h2>
              <div style={{ width: 40, height: 2, background: C.accent, borderRadius: 2, margin: '10px 0 16px' }} />
              <Link
                to="/products"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 20px', borderRadius: 8,
                  background: C.primary, color: '#ffffff',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = C.accent}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                View All Categories <ArrowRight size={11} />
              </Link>
            </div>

            {/* Right: Category icons in a row */}
            <div className="flex-1 grid grid-cols-3 sm:grid-cols-6 gap-4">
              {displayCategories.map((cat, idx) => (
                <Link
                  key={cat}
                  to={`/products?category=${encodeURIComponent(cat)}`}
                  className="group text-center"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      width: '100%', aspectRatio: '1',
                      borderRadius: 12, overflow: 'hidden',
                      border: `1px solid ${C.border}`,
                      background: '#ffffff',
                      marginBottom: 8,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(27,50,82,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = C.border; }}
                  >
                    <img
                      src={categoryImages[cat] ? categoryImages[cat][0] : `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60`}
                      alt={cat}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: C.soil, margin: 0, lineHeight: 1.3, textAlign: 'center' }}>{cat}</p>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. PROMO FEATURE CARDS (3 cards)
      ═══════════════════════════════════════ */}
      <section style={{ background: C.bg }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featureCards.map((card, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 14, overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', minHeight: 220,
                  transition: 'all 0.3s ease',
                  background: `url(${card.image}) center/cover no-repeat`,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(27,50,82,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  position: 'relative', zIndex: 2, padding: '28px 24px',
                  flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: card.dark === false ? (i === 0 ? '#000000' : C.stone) : 'rgba(255,255,255,0.8)',
                    display: 'block', marginBottom: 8,
                  }}>
                    {card.tag}
                  </span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 19, fontWeight: 700,
                    color: card.dark === false ? (i === 0 ? '#000000' : C.soil) : '#ffffff',
                    margin: '0 0 10px', lineHeight: 1.25,
                  }}>
                    {card.title}
                  </h3>
                  {card.sub && (
                    <p style={{ fontSize: 11, color: C.stone, margin: '0 0 14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {card.sub}
                    </p>
                  )}
                  <div>
                    <Link
                      to={card.path}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 11, fontWeight: 700,
                        color: card.dark === false ? (i === 0 ? '#000000' : C.soil) : '#ffffff',
                        textDecoration: 'none', textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        borderBottom: card.dark === false ? (i === 0 ? '1.5px solid #000000' : `1.5px solid ${C.soil}`) : 'rgba(255,255,255,0.6)',
                        paddingBottom: 2, transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = C.accent; }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = card.dark === false ? (i === 0 ? '#000000' : C.soil) : '#ffffff';
                        e.currentTarget.style.borderColor = card.dark === false ? (i === 0 ? '#000000' : C.soil) : 'rgba(255,255,255,0.6)';
                      }}
                    >
                      {card.btnText} <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════
          6. CONTACT QUICK SECTION (Replaces Media Gallery & Blog)
      ═══════════════════════════════════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: '#ffffff' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 text-center">
          <p style={{ fontSize: 11, color: C.accent, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Get In Touch
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: C.soil, margin: '0 0 16px', lineHeight: 1.2 }}>
            We'd Love to Hear From You
          </h2>
          <div style={{ width: 40, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto 28px' }} />
          
          <p style={{ color: C.stone, fontSize: 14.5, lineHeight: 1.75, marginBottom: 36, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Have questions about our premium fabrics, custom manufacturing, or retail partnerships? Reach out to us directly or visit our headquarters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left mb-12">
            {[
              { icon: MapPin, label: 'Our Headquarters', lines: ['RUHANI WEAVES Textile mall', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
              { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
              { icon: Mail, label: 'Email Us', lines: ['hello@ruhaniweaves.com', 'sales@ruhaniweaves.com'] }
            ].map((box, idx) => {
              const IconComponent = box.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 14,
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    boxShadow: '0 2px 10px rgba(27,50,82,0.02)'
                  }}
                >
                  <IconComponent size={22} color="#1a2538" style={{ marginBottom: 2 }} />
                  <p style={{ fontSize: 13, fontWeight: 700, color: C.soil, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{box.label}</p>
                  <div style={{ fontSize: 13, color: C.stone, lineHeight: 1.5 }}>
                    {box.lines.map((l, li) => <p key={li} style={{ margin: 0 }}>{l}</p>)}
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: C.primary, color: '#ffffff',
              borderRadius: 8, fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none', padding: '13px 28px',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(27,50,82,0.25)',
              border: `2px solid ${C.primary}`,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.borderColor = C.accent; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.borderColor = C.primary; }}
          >
            Go to Contact Page <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
