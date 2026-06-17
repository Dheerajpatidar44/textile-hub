import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#4A1942',
  primaryDark: '#2E1038',
  accent: '#8B5E3C',
  accentLight: '#C49A6C',
  bg: '#FAF6F1',
  sand: '#F5EDE4',
  sage: '#F3EAE0',
  border: '#E8DDD4',
  soil: '#3D1F35',
  stone: '#7A6670',
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

// 3 distinct images for the top 6 categories
const categoryImages = {
  "Sarees": [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616986491129-3e37cb654c82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhcmVlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhcmVlc3xlbnwwfHwwfHx8MA%3D%3D"
  ],
  "Leggings": [
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1650461970708-7bf32499516d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1763771522867-c26bf75f12bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlZ2dpbmd8ZW58MHwwfDB8fHww"
  ],
  "Kurtis": [
    "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1597983073540-684a10b15ab1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.latestkurtidesigns.com/wp-content/uploads/2019/05/banner.jpg"
  ],
  "Dress Suits": [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1661434624086-e02557c68815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJlc3MlMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1588186941799-f9a4fc54ff1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3MlMjBzdWl0cyUyMHdvbWVufGVufDB8MHwwfHx8MA%3D%3D"
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
  ]
};

// ── Hero Carousel Slides ──
const heroSlides = [
  {
    line1: 'Woven to Perfection,',
    line2: 'Inspired by',
    line3: 'Tradition',
    desc: "Discover timeless textiles that blend heritage with modern elegance.",
    btnText: 'Explore Collection',
    image: '/images/slide1.png',
    bgColor: '#F5EDE4'
  },
  {
    line1: 'Curated with',
    line2: 'Passion, Styled',
    line3: 'for Elegance',
    desc: "Premium handloom cottons and rich silk fabrics from India's finest artisans.",
    btnText: 'Explore Collection',
    image: '/images/slide2.png',
    bgColor: '#EDE3D8'
  },
  {
    line1: 'Crafted with',
    line2: 'Artistry, Designed',
    line3: 'for You',
    desc: "Premium designer fabrics, custom suiting materials, and ethnic textiles for all.",
    btnText: 'Explore Collection',
    image: '/images/slide3.png',
    bgColor: '#F3EAE0'
  }
];

// ── Blog posts for homepage ──
const blogPosts = [
  { title: 'The Art of Handloom — Keeping Tradition Alive', date: '30 May 2026', image: 'https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=400&auto=format&fit=crop&q=60' },
  { title: 'How to Choose the Perfect Fabric', date: '15 May 2026', image: 'https://images.unsplash.com/photo-1599753931952-654e960af582?w=400&auto=format&fit=crop&q=60' },
  { title: 'Sustainable Textiles for a Better Tomorrow', date: '10 May 2026', image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=400&auto=format&fit=crop&q=60' },
  { title: 'Trends to Watch in Home Furnishing', date: '22 Apr 2026', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&auto=format&fit=crop&q=60' },
];

// ── Gallery items from Media Gallery page ──
const galleryItems = [
  { title: "Global Textile Summit 2026", desc: "Our leadership team presenting the future...", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "New Manufacturing Unit Inauguration", desc: "Expanding our footprint with a state-of-the-art facility...", category: "Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" },
  { title: "Award for Excellence in Exports", desc: "Receiving the national award for outstanding contribution...", category: "Achievement", image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60" },
  { title: "Annual Retailers Meet", desc: "Celebrating success and building stronger bonds...", category: "Community", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60" },
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
      const amount = 340;
      galleryRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  const slide = heroSlides[currentSlide];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 })
  };

  // Show first 6 categories for the grid display
  const displayCategories = categories.slice(0, 6);

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ═══════════════════════════════════════
          1. HERO CAROUSEL SECTION
      ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[500px] lg:min-h-[560px] flex items-center" style={{ background: slide.bgColor, transition: 'background 0.5s ease' }}>
        
        {/* Decorative shapes */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 400, height: '100%', background: 'radial-gradient(circle, rgba(74,25,66,0.04) 0%, transparent 80%)', pointerEvents: 'none' }} />

        <div className="max-w-[90rem] mx-auto w-full px-6 sm:px-8 lg:px-14 flex items-center h-full relative z-10">
          <div className="w-full lg:w-1/2 text-left flex flex-col items-start pr-0 lg:pr-12 py-16">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(34px, 4.5vw, 54px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: '0 0 20px'
                }}>
                  <span style={{ color: C.soil, display: 'block' }}>{slide.line1}</span>
                  <span style={{ color: '#AE546C', display: 'block' }}>{slide.line2}</span>
                  <span style={{ color: '#AE546C', display: 'block' }}>{slide.line3}</span>
                </h1>

                {/* Decorative Line */}
                <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                  <div style={{ width: 40, height: 2, background: '#AE546C' }} />
                  <div style={{ flex: 1, height: 1, background: 'rgba(174, 84, 108, 0.2)', maxWidth: 200 }} />
                </div>
                
                <p style={{ color: C.soil, fontSize: '15px', lineHeight: 1.7, marginBottom: 32, maxWidth: 400 }}>
                  {slide.desc}
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                    style={{
                      background: C.primaryDark,
                      color: '#ffffff',
                      borderRadius: 8,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      textDecoration: 'none',
                      padding: '14px 24px',
                    }}
                  >
                    {slide.btnText}
                  </Link>
                  <Link
                    to="/products"
                    className="flex items-center justify-center rounded-full transition-all hover:bg-[rgba(174,84,108,0.05)]"
                    style={{
                      width: 40, height: 40,
                      border: '1px solid #AE546C',
                      color: '#AE546C',
                    }}
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Mobile image */}
                <div className="block lg:hidden w-full h-[260px] rounded-[36px_36px_16px_16px] overflow-hidden mt-8 shadow-md border-2 border-white">
                  <img src={slide.image} alt="THREADORA Textile" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation controls */}
            <div className="flex items-center gap-4 mt-10">
              <button onClick={handlePrev} style={{ width: 36, height: 36, borderRadius: '50%', background: C.primaryDark, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowLeft size={16} color="#ffffff" />
              </button>
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setDirection(idx > currentSlide ? 1 : -1); setCurrentSlide(idx); }}
                    style={{
                      width: 10, height: 10, borderRadius: '50%',
                      background: 'transparent',
                      border: currentSlide === idx ? `2px solid #AE546C` : `1px solid ${C.stone}`,
                      cursor: 'pointer', padding: 0,
                      transition: 'all 0.3s'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button onClick={handleNext} style={{ width: 36, height: 36, borderRadius: '50%', background: C.primaryDark, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={16} color="#ffffff" />
              </button>
            </div>
          </div>
        </div>

        {/* Right side hero images */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[50%] h-full items-center justify-center gap-4 p-8"
            style={{ zIndex: 5 }}
          >
            <div className="w-[55%] h-[85%] rounded-3xl overflow-hidden shadow-lg">
              <img src={slide.image} alt="THREADORA Textile Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="w-[40%] flex flex-col gap-4 h-[85%]">
              <div className="flex-1 rounded-3xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=60" alt="Textile detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-1 rounded-3xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=60" alt="Textile detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ═══════════════════════════════════════
          2. CATEGORIES GRID + STORY PANEL
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left: Category grid (3 columns) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayCategories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="group text-left"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{
                  position: 'relative', overflow: 'hidden',
                  borderRadius: 16, border: `1px solid ${C.border}`,
                  background: '#ffffff',
                  display: 'flex', flexDirection: 'column',
                  height: '100%',
                }}>
                  <div className="flex gap-2 p-2 h-[220px]">
                    <div className="w-[55%] h-full rounded-xl overflow-hidden">
                      <img src={categoryImages[cat][0]} alt={cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="w-[45%] flex flex-col gap-2 h-full">
                      <div className="flex-1 rounded-xl overflow-hidden">
                        <img src={categoryImages[cat][1]} alt={cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 rounded-xl overflow-hidden">
                        <img src={categoryImages[cat][2]} alt={cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '10px 14px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: C.soil, fontFamily: "'Playfair Display', serif" }}>{cat}</span>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.sand, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ArrowRight size={12} color={C.soil} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right: Story panel */}
          <div className="lg:col-span-1 flex flex-col justify-end rounded-[20px] overflow-hidden relative" style={{ 
            minHeight: 400,
            background: C.primary,
          }}>
            <img 
              src="https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" 
              alt="Textile story"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* No color overlay, per user request */}
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, color: '#000000', margin: '0 0 12px', lineHeight: 1.15, fontStyle: 'italic' }}>
                Crafting Stories Through Textiles
              </h2>
              <p style={{ color: '#000000', fontSize: 13, lineHeight: 1.6, marginBottom: 24, fontWeight: 500 }}>
                Every thread weaves a story of culture, artistry and unmatched craftsmanship.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2"
                style={{
                  padding: '10px 20px', borderRadius: 30,
                  border: '1.5px solid rgba(0,0,0,0.5)',
                  color: '#000000', fontSize: 11, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  textDecoration: 'none', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.8)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.5)'; }}
              >
                Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. MEDIA GALLERY
      ═══════════════════════════════════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: '#ffffff' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: C.soil, margin: 0 }}>
                Media Gallery
              </h2>
              <div style={{ width: 24, height: 2, background: C.accent, borderRadius: 2 }} />
            </div>
            <div className="flex gap-2">
              <button onClick={() => scrollGallery('left')} style={{ width: 34, height: 34, borderRadius: '50%', border: `1px solid ${C.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronLeft size={16} color={C.soil} />
              </button>
              <button onClick={() => scrollGallery('right')} style={{ width: 34, height: 34, borderRadius: '50%', border: `1px solid ${C.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronRight size={16} color={C.soil} />
              </button>
            </div>
          </div>
          <div
            ref={galleryRef}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryItems.map((item, idx) => (
              <Link to="/gallery" key={idx} className="shrink-0 relative group cursor-pointer" style={{ width: 300, borderRadius: 16, border: `1px solid ${C.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                <div style={{ width: '100%', height: 180, overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(74, 25, 66, 0.85)', backdropFilter: 'blur(6px)', borderRadius: 20, padding: '4px 12px' }}>
                    <span style={{ fontSize: 9, color: '#FAF6F1', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>{item.category}</span>
                  </div>
                </div>
                <div style={{ padding: '16px', background: 'white', flex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: C.soil, margin: '0 0 6px', lineHeight: 1.4 }}>{item.title}</h3>
                  <p style={{ fontSize: 12, color: C.stone, lineHeight: 1.5, margin: 0, fontWeight: 400 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. BLOG SECTION
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-14">
        <div className="flex items-center gap-3 mb-6">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: C.soil, margin: 0, fontStyle: 'italic' }}>
            From Our Blog
          </h2>
          <div style={{ width: 24, height: 2, background: C.accent, borderRadius: 2 }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, idx) => (
            <Link to="/blog" key={idx} className="group text-left" style={{ textDecoration: 'none' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', height: 160, marginBottom: 12, border: `1px solid ${C.border}` }}>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p style={{ fontSize: 11, color: C.stone, margin: '0 0 6px' }}>{post.date}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: C.soil, margin: '0 0 8px', lineHeight: 1.4, fontFamily: "'Playfair Display', serif" }}>{post.title}</p>
              <span style={{ fontSize: 12, color: C.accent, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                READ MORE <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
