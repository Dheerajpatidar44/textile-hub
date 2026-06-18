import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#8B1A4A',
  primaryDark: '#5E0F30',
  accent: '#C4956A',
  accentLight: '#E0B88A',
  bg: '#FDF8F4',
  sand: '#F5EBE0',
  sage: '#F2E8DF',
  border: '#E8D8CC',
  soil: '#2C1A1A',
  stone: '#7A5E5E',
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

// ── Hero Carousel Slides ──
const heroSlides = [
  {
    line1: 'Woven to Perfection,',
    line2: 'Inspired by',
    line3: 'Tradition',
    desc: "Discover timeless textiles that blend heritage with modern elegance.",
    btnText: 'Explore Collections',
    mainImage: '/images/hero_saree.png',
    img2: '/images/hero_fabric.png',
    img3: '/images/hero_bedroom.png',
    bgColor: '#FDF8F4',
  },
  {
    line1: 'Curated with',
    line2: 'Passion, Styled',
    line3: 'for Elegance',
    desc: "Premium handloom cottons and rich silk fabrics from India's finest artisans.",
    btnText: 'Explore Collections',
    mainImage: 'https://images.unsplash.com/photo-1731577506564-464f7b301f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
    img2: 'https://images.unsplash.com/photo-1590736969955-71cb949ab164?w=500&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?w=500&auto=format&fit=crop&q=80',
    bgColor: '#FDF8F4',
  },
  {
    line1: 'Crafted with',
    line2: 'Artistry, Designed',
    line3: 'for You',
    desc: "Premium designer fabrics, custom suiting materials, and ethnic textiles for all.",
    btnText: 'Explore Collections',
    mainImage: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500&auto=format&fit=crop&q=80',
    bgColor: '#FDF8F4',
  }
];

// ── Feature Cards (3 promo cards below hero) ──
const featureCards = [
  {
    tag: 'Live e-Auction',
    title: 'Bid. Win. Grow.',
    desc: 'Participate in live auctions and unlock great deals.',
    btnText: 'Join Live Auctions',
    path: '/e-auction',
    image: '/images/1.png',
  },
  {
    tag: 'Bulk Orders',
    title: 'Better Prices, Greater Benefits!',
    desc: 'Special pricing for bulk buyers & retailers.',
    btnText: 'Enquire Now',
    path: '/trade-enquiry',
    image: '/images/2.png',
  },
  {
    tag: 'Trade Services',
    title: 'Everything You Need, All in One Place.',
    desc: 'End-to-end solutions for your business.',
    btnText: 'Explore Services',
    path: '/retail-management',
    image: '/images/3.png',
  },
];

// ── Gallery items ──
const galleryItems = [
  { title: "Global Textile Summit 2026", desc: "Our leadership team joining industry leaders from around the world.", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "New Manufacturing Unit Inauguration", desc: "Expanding our footprint with a state-of-the-art facility.", category: "Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" },
  { title: "Award for Excellence in Exports", desc: "Recognised for outstanding performance in global markets.", category: "Achievement", image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60" },
  { title: "Annual Retailers Meet", desc: "Connecting, engaging & growing together as a strong textile family.", category: "Community", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60" },
];

// ── Blog posts ──
const blogPosts = [
  { title: 'The Art of Handloom — Keeping Tradition Alive', date: '30 May 2026', image: 'https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=400&auto=format&fit=crop&q=60' },
  { title: 'How to Choose the Perfect Fabric', date: '15 May 2026', image: 'https://images.unsplash.com/photo-1599753931952-654e960af582?w=400&auto=format&fit=crop&q=60' },
  { title: 'Sustainable Textiles for a Better Tomorrow', date: '10 May 2026', image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=400&auto=format&fit=crop&q=60' },
  { title: 'Trends to Watch in Home Furnishing', date: '22 Apr 2026', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&auto=format&fit=crop&q=60' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const galleryRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollGallery = (dir) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
    }
  };

  const slide = heroSlides[currentSlide];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 })
  };

  // Show first 6 categories
  const displayCategories = categories.slice(0, 6);

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ═══════════════════════════════════════
          1. HERO SECTION — Vastramall Style Layout
      ═══════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden pt-[58px]"
        style={{ background: slide.bgColor, minHeight: '520px' }}
      >
        <div className="max-w-[90rem] mx-auto w-full px-6 sm:px-8 lg:px-14 flex items-center relative z-10"
          style={{ minHeight: '520px' }}
        >
          {/* Left: Text content */}
          <div className="w-full lg:w-[45%] text-left flex flex-col items-start py-14 pr-0 lg:pr-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full"
              >
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(30px, 4vw, 50px)',
                  fontWeight: 700,
                  lineHeight: 1.18,
                  margin: '0 0 16px',
                }}>
                  <span style={{ color: C.soil, display: 'block' }}>{slide.line1}</span>
                  <span style={{ color: C.primary, display: 'block', fontStyle: 'italic' }}>{slide.line2}</span>
                  <span style={{ color: C.primary, display: 'block', fontStyle: 'italic' }}>{slide.line3}</span>
                </h1>

                {/* Thin decorative line */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '16px 0' }}>
                  <div style={{ width: 36, height: 2, background: C.primary, borderRadius: 2 }} />
                  <div style={{ width: 80, height: 1, background: 'rgba(139,26,74,0.2)', borderRadius: 1 }} />
                </div>

                <p style={{ color: C.stone, fontSize: '14px', lineHeight: 1.7, marginBottom: 28, maxWidth: 380 }}>
                  {slide.desc}
                </p>

                <Link
                  to="/products"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: C.primaryDark,
                    color: '#ffffff',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                    padding: '13px 24px',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 16px rgba(139,26,74,0.25)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primaryDark; }}
                >
                  {slide.btnText}
                  <ArrowRight size={14} />
                </Link>

                {/* Mobile image */}
                <div className="block lg:hidden w-full h-[240px] rounded-2xl overflow-hidden mt-8 shadow-md border border-[#E8D8CC]">
                  <img src={slide.mainImage} alt="Ananta Fabrics" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel controls */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(139,26,74,0.1)', border: `1px solid rgba(139,26,74,0.2)`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,26,74,0.1)'; }}
              >
                <ChevronLeft size={16} color={C.primary} />
              </button>
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setDirection(idx > currentSlide ? 1 : -1); setCurrentSlide(idx); }}
                    style={{
                      width: currentSlide === idx ? 20 : 8,
                      height: 8, borderRadius: 4,
                      background: currentSlide === idx ? C.primary : 'rgba(139,26,74,0.2)',
                      border: 'none', cursor: 'pointer', padding: 0,
                      transition: 'all 0.3s',
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(139,26,74,0.1)', border: `1px solid rgba(139,26,74,0.2)`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,26,74,0.1)'; }}
              >
                <ChevronRight size={16} color={C.primary} />
              </button>
            </div>
          </div>

          {/* Right: Image grid — Vastramall style: 1 tall main + 2 stacked */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[55%] h-full items-center gap-3 p-6 pl-0"
              style={{ zIndex: 5 }}
            >
              {/* Main tall image */}
              <div className="w-[60%] h-[88%] rounded-[28px_28px_28px_28px] overflow-hidden shadow-xl">
                <img
                  src={slide.mainImage}
                  alt="Ananta Fabrics"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Two stacked images */}
              <div className="w-[37%] flex flex-col gap-3 h-[88%]">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={slide.img2}
                    alt="Fabric detail"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={slide.img3}
                    alt="Home textile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. SHOP BY CATEGORY — Vastramall grid style
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-10">
          {/* Section header */}
          <div className="flex items-center justify-between mb-6">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: C.soil, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Shop by Category
            </h2>
            <Link
              to="/products"
              style={{ fontSize: 12, fontWeight: 600, color: C.accent, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}
              onMouseEnter={e => e.currentTarget.style.color = C.primary}
              onMouseLeave={e => e.currentTarget.style.color = C.accent}
            >
              View All Categories <ArrowRight size={12} />
            </Link>
          </div>

          {/* Category cards — exactly 6, in a row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {displayCategories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="group text-left"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                    border: `1px solid ${C.border}`,
                    background: '#ffffff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(139,26,74,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {/* 2-image mosaic like Vastramall */}
                  <div className="flex gap-1 p-1.5" style={{ height: 130 }}>
                    <div className="w-[56%] h-full rounded-lg overflow-hidden">
                      <img src={categoryImages[cat] ? categoryImages[cat][0] : `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60`} alt={cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="w-[42%] flex flex-col gap-1 h-full">
                      <div className="flex-1 rounded-lg overflow-hidden">
                        <img src={categoryImages[cat] ? categoryImages[cat][1] : `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60`} alt={cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 rounded-lg overflow-hidden">
                        <img src={categoryImages[cat] ? categoryImages[cat][2] : `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60`} alt={cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                  {/* Category name + arrow */}
                  <div style={{ padding: '8px 12px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.soil, fontFamily: "'Playfair Display', serif" }}>{cat}</span>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: C.sand, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ArrowRight size={10} color={C.primary} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. PROMO FEATURE CARDS (3 cards)
      ═══════════════════════════════════════ */}
      <section style={{ background: C.bg }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featureCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: `url(${card.image}) center/cover no-repeat`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  minHeight: 220,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Text content */}
                <div style={{ position: 'relative', zIndex: 2, padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#000000', display: 'block', marginBottom: 8 }}>
                    {card.tag}
                  </span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: '#000000', margin: '0 0 10px', lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 13, color: '#000000', margin: '0 0 20px', lineHeight: 1.6, fontWeight: 500 }}>
                    {card.desc}
                  </p>
                  <div>
                    <Link
                      to={card.path}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 11.5, fontWeight: 700, color: '#000000',
                        textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
                        transition: 'all 0.2s',
                        borderBottom: '1.5px solid #000000',
                        paddingBottom: 2,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.primary; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
                    >
                      {card.btnText} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. MEDIA GALLERY
      ═══════════════════════════════════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: '#ffffff' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: C.soil, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Media Gallery
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Link
                to="/gallery"
                style={{ fontSize: 12, fontWeight: 600, color: C.accent, textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase', marginRight: 8 }}
                onMouseEnter={e => e.currentTarget.style.color = C.primary}
                onMouseLeave={e => e.currentTarget.style.color = C.accent}
              >
                View All
              </Link>
              <button onClick={() => scrollGallery('left')} style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${C.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronLeft size={15} color={C.soil} />
              </button>
              <button onClick={() => scrollGallery('right')} style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${C.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronRight size={15} color={C.soil} />
              </button>
            </div>
          </div>
          <div
            ref={galleryRef}
            className="flex gap-5 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryItems.map((item, idx) => (
              <Link to="/gallery" key={idx} className="shrink-0 group cursor-pointer" style={{ width: 280, borderRadius: 12, border: `1px solid ${C.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', background: '#fff', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(139,26,74,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: '100%', height: 168, overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(139,26,74,0.85)', backdropFilter: 'blur(6px)', borderRadius: 20, padding: '3px 10px' }}>
                    <span style={{ fontSize: 9, color: '#FDF8F4', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>{item.category}</span>
                  </div>
                </div>
                <div style={{ padding: '14px', background: 'white', flex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: C.soil, margin: '0 0 5px', lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 11.5, color: C.stone, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. BLOG SECTION
      ═══════════════════════════════════════ */}
      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: C.soil, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              From Our Blog
            </h2>
            <Link
              to="/blog"
              style={{ fontSize: 12, fontWeight: 600, color: C.accent, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}
              onMouseEnter={e => e.currentTarget.style.color = C.primary}
              onMouseLeave={e => e.currentTarget.style.color = C.accent}
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.map((post, idx) => (
              <Link to="/blog" key={idx} className="group text-left" style={{ textDecoration: 'none' }}>
                <div style={{ borderRadius: 12, overflow: 'hidden', height: 155, marginBottom: 10, border: `1px solid ${C.border}` }}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p style={{ fontSize: 10, color: C.stone, margin: '0 0 5px', letterSpacing: '0.05em' }}>{post.date}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.soil, margin: '0 0 8px', lineHeight: 1.35, fontFamily: "'Playfair Display', serif" }}>{post.title}</p>
                <span style={{ fontSize: 11, color: C.accent, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Read More <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
