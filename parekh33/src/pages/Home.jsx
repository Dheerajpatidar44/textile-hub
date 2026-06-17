import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronLeft, ChevronRight,
  Award, Layers, Smile, Truck, Headphones,
  Tag, Compass, HelpCircle, Users, MapPin, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#0a1c3a',        // Primary Navy
  primaryDark: '#050e1d',   // Deep Navy
  accent: '#d27265',         // Accent Coral/Terracotta
  bg: '#ffffff',
  sand: '#f7efe5',           // Soft Warm Sand/Beige
  sage: '#e9f0f8',           // Soft Pastel Blue
  border: '#ebdcd8',         // Soft Warm Border
  soil: '#0a1c3a',           // Deep Slate Navy
  stone: '#536476',          // Muted Slate Text
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

// ── Category Details Mapping (preserving count data and adding appropriate images) ──
const categoryDetails = {
  "Sarees": { count: "1200+ Items", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=70" },
  "Leggings": { count: "800+ Items", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=70" },
  "Kurtis": { count: "1500+ Items", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=70" },
  "Dress Suits": { count: "1800+ Items", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=70" },
  "Bedsheets & Linen": { count: "2200+ Items", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=70" },
  "Hosiery Items": { count: "1000+ Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=70" },
  "Suiting": { count: "2500+ Items", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=70" },
  "Shirting": { count: "3000+ Items", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=70" },
  "Formal & Ethnic Wear for Women": { count: "2800+ Items", image: "/images/ethnic_women.png" },
  "Formal & Ethnic Wear for Men": { count: "2000+ Items", image: "/images/ethnic_men.png" },
  "Formal & Ethnic Wear for Children": { count: "1200+ Items", image: "/images/ethnic_children.png" },
  "Home Upholstery & Furnishing": { count: "1600+ Items", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=70" }
};

// ── Hero Carousel Slides (Matching Mockup Look) ──
const heroSlides = [
  {
    line1: 'Woven with',
    line2: 'Heritage, Made',
    line3: 'for Today',
    desc: "Experience the finest collections of premium handloom and retail textiles crafted meticulously for comfort, durability, and timeless style. Embrace the legacy of Loomera in every thread and weave.",
    btnText: 'Explore Collection',
    image: '/images/slide1.png',
    bgColor: '#fae5e1' // Soft Peach
  },
  {
    line1: 'Curated with',
    line2: 'Passion, Styled',
    line3: 'for Elegance',
    desc: "Discover our premium handloom cottons and rich silk fabrics, carefully selected from India's finest artisans. Perfect for contemporary fashion, bridal wear, and versatile everyday styling.",
    btnText: 'Explore Collection',
    image: '/images/slide2.png',
    bgColor: '#f7efe5' // Soft Warm Sand
  },
  {
    line1: 'Crafted with',
    line2: 'Artistry, Designed',
    line3: 'for You',
    desc: "Explore a rich variety of premium designer fabrics, custom suiting materials, and ethnic textiles tailored for all business partnerships, bespoke tailoring, and retail fashion store needs.",
    btnText: 'Explore Collection',
    image: '/images/slide3.png',
    bgColor: '#e9f0f8' // Soft Pastel Blue
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next (right to left), -1 = prev (left to right)
  const categoriesContainerRef = useRef(null);

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

  const scrollCategories = (direction) => {
    if (categoriesContainerRef.current) {
      const { scrollLeft, clientWidth } = categoriesContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      categoriesContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const slide = heroSlides[currentSlide];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0
    })
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ═══════════════════════════════════════
          1. HERO CAROUSEL SECTION
      ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[500px] lg:min-h-[540px] flex items-center justify-between" style={{ background: slide.bgColor }}>
        
        {/* Soft Organic Background Shapes */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 450, height: '100%', background: 'radial-gradient(circle, rgba(210, 114, 101, 0.08) 0%, transparent 80%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -50, right: 0, width: 350, height: 350, background: 'rgba(210,114,101,0.04)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />

        {/* Content Container (Left Side Text) */}
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
                  fontSize: 'clamp(38px, 4.5vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: '0 0 20px'
                }}>
                  <span style={{ color: C.soil, display: 'block' }}>{slide.line1}</span>
                  <span style={{ color: C.accent, display: 'block' }}>{slide.line2}</span>
                  <span style={{ color: C.accent, display: 'block' }}>{slide.line3}</span>
                </h1>
                
                <p style={{ color: C.stone, fontSize: '15px', lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
                  {slide.desc}
                </p>

                {/* Explore Collection Action Button */}
                <div>
                  <Link
                    to="/products"
                    className="inline-flex items-center transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg"
                    style={{
                      background: C.primary,
                      color: '#ffffff',
                      borderRadius: 30,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      textDecoration: 'none',
                    }}
                  >
                    <span className="pl-6 pr-4 py-3.5">{slide.btnText}</span>
                    <span
                      style={{
                        background: C.accent,
                        color: '#ffffff',
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

                {/* Mobile Curved Image Card (Stacked below on mobile) */}
                <div className="block lg:hidden w-full h-[260px] rounded-[36px_36px_16px_16px] overflow-hidden mt-8 shadow-md border-2 border-white">
                  <img
                    src={slide.image}
                    alt="Loomera Textile Showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator below */}
            <div className="flex items-center gap-2 mt-10">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentSlide ? 1 : -1);
                    setCurrentSlide(idx);
                  }}
                  style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: currentSlide === idx ? C.accent : '#ffffff',
                    border: currentSlide === idx ? 'none' : '1px solid rgba(10, 28, 58, 0.15)',
                    cursor: 'pointer', padding: 0,
                    transition: 'all 0.3s'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image (Full Height Curved Mask on Desktop) */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="hidden lg:block absolute right-0 top-0 bottom-0 w-[53%] h-full"
            style={{
              clipPath: 'ellipse(95% 100% at 100% 50%)',
              zIndex: 5,
            }}
          >
            <img
              src={slide.image}
              alt="Loomera Textile Retail Showcase"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Left/Right Carousel Nav Arrows */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: '50%',
            background: '#ffffff', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)', zIndex: 20
          }}
          className="hover:scale-105 hover:bg-slate-50 transition-all"
        >
          <ChevronLeft size={20} color={C.primary} />
        </button>
        <button
          onClick={handleNext}
          style={{
            position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: '50%',
            background: '#ffffff', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)', zIndex: 20
          }}
          className="hover:scale-105 hover:bg-slate-50 transition-all"
        >
          <ChevronRight size={20} color={C.primary} />
        </button>
      </section>

      {/* ═══════════════════════════════════════
          2. KEY FEATURES STRIP
      ═══════════════════════════════════════ */}
      {/* ═══════════════════════════════════════
          3. PROMO GRID SECTION (Trending / Bulk)
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Promo Card: Trending Now */}
          <div style={{
            background: C.primary,
            borderRadius: '20px',
            color: '#ffffff',
            overflow: 'hidden',
            minHeight: '200px',
            position: 'relative'
          }} className="flex flex-col sm:flex-row justify-between text-left p-6 sm:p-7 shadow-sm">
            <div className="w-full sm:w-[58%] flex flex-col justify-center relative z-10">
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: '6px' }}>
                TRENDING NOW
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.25, marginBottom: 8 }}>
                Fresh Fabrics, New Possibilities
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12.5px', margin: 0, lineHeight: 1.45 }}>
                Explore vibrant prints, rich textures and timeless elegance.
              </p>
            </div>
            
            {/* Folded Fabrics and Vase Illustration image on the right */}
            <div className="w-full sm:w-[40%] mt-4 sm:mt-0 flex justify-end items-center relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=70"
                alt="Stacked folded fabrics"
                style={{
                  width: '100%',
                  height: '130px',
                  objectFit: 'cover',
                  borderRadius: 12,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              />
            </div>
          </div>

          {/* Right Promo Card: Bulk Orders Made Easy */}
          <div style={{
            background: C.sand,
            borderRadius: '20px',
            color: C.soil,
            overflow: 'hidden',
            minHeight: '200px',
            position: 'relative'
          }} className="flex flex-col sm:flex-row justify-between text-left p-6 sm:p-7 shadow-sm">
            <div className="w-full sm:w-[58%] flex flex-col justify-center relative z-10">
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: '6px' }}>
                BULK ENQUIRIES
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: C.soil, margin: 0, lineHeight: 1.25, marginBottom: 8 }}>
                Bulk Orders Made Easy
              </h2>
              <p style={{ color: C.stone, fontSize: '12.5px', margin: 0, lineHeight: 1.45 }}>
                Special custom pricing, catalog selections, and direct support for retailers & businesses.
              </p>
            </div>
            
            {/* Warehouse Manager photo on the right */}
            <div className="w-full sm:w-[40%] mt-4 sm:mt-0 flex justify-end items-center relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&auto=format&fit=crop&q=70"
                alt="Bulk orders client support"
                style={{
                  width: '100%',
                  height: '130px',
                  objectFit: 'cover',
                  borderRadius: 12,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. THREE SERVICES CARDS ROW
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Custom Solutions */}
          <div style={{ background: C.sage, borderRadius: 20, position: 'relative', overflow: 'hidden' }} className="flex justify-between items-stretch p-6 text-left group shadow-sm hover:shadow-md transition-all">
            <div className="w-[60%] flex flex-col justify-between py-2">
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
                  Custom Solutions for Your Brand
                </h3>
                <p style={{ fontSize: 12.5, color: C.stone, margin: 0, lineHeight: 1.45 }}>
                  Tailored textiles to match your unique needs.
                </p>
              </div>
              <div className="mt-4">
                <Link to="/contact" className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider transition-all" style={{ fontSize: 10.5, color: C.primary, textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.primary}
                >
                  Get in Touch <ArrowRight size={12} />
                </Link>
              </div>
            </div>
            <div className="w-[40%] flex justify-end items-end relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&auto=format&fit=crop&q=70"
                alt="Mannequin design layout"
                style={{ width: '85%', height: 120, objectFit: 'cover', borderRadius: 12 }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Sustainably Crafted */}
          <div style={{ background: '#fcece9', borderRadius: 20, position: 'relative', overflow: 'hidden' }} className="flex justify-between items-stretch p-6 text-left group shadow-sm hover:shadow-md transition-all">
            <div className="w-[60%] flex flex-col justify-between py-2">
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
                  Sustainably Crafted Textiles
                </h3>
                <p style={{ fontSize: 12.5, color: C.stone, margin: 0, lineHeight: 1.45 }}>
                  Ethically sourced fabrics for a better tomorrow.
                </p>
              </div>
              <div className="mt-4">
                <Link to="/products" className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider transition-all" style={{ fontSize: 10.5, color: C.primary, textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.primary}
                >
                  Discover More <ArrowRight size={12} />
                </Link>
              </div>
            </div>
            <div className="w-[40%] flex justify-end items-end relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=500&auto=format&fit=crop&q=70"
                alt="Fabric roll detail"
                style={{ width: '85%', height: 120, objectFit: 'cover', borderRadius: 12 }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 3: Our Retail Management */}
          <div style={{ background: '#f4f0fa', borderRadius: 20, position: 'relative', overflow: 'hidden' }} className="flex justify-between items-stretch p-6 text-left group shadow-sm hover:shadow-md transition-all">
            <div className="w-[60%] flex flex-col justify-between py-2">
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
                  Our Retail Management
                </h3>
                <p style={{ fontSize: 12.5, color: C.stone, margin: 0, lineHeight: 1.45 }}>
                  End-to-end operation, stock, and inventory services for showrooms.
                </p>
              </div>
              <div className="mt-4">
                <Link to="/retail-management" className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider transition-all" style={{ fontSize: 10.5, color: C.primary, textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.primary}
                >
                  Explore Management <ArrowRight size={12} />
                </Link>
              </div>
            </div>
            <div className="w-[40%] flex justify-end items-end relative overflow-hidden">
              <img
                src="/images/retail_management_card.png"
                alt="Boutique retail management counter"
                style={{ width: '85%', height: 120, objectFit: 'cover', borderRadius: 12 }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. SHOP OUR COLLECTIONS (Categories Carousel)
      ═══════════════════════════════════════ */}
      <section className="px-6 lg:px-14 py-12 bg-white" style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto">
          
          {/* Header Row */}
          <div className="flex justify-between items-center mb-10 text-left">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, color: C.soil, margin: 0 }}>
                Shop Our Collections
              </h2>
              <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, marginTop: 10 }} />
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/products" style={{ fontSize: 12, fontWeight: 700, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                className="hover:underline"
              >
                View All Collections <ArrowRight size={13} />
              </Link>
              
              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCategories('left')}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    border: `1.5px solid ${C.border}`, background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  className="hover:bg-slate-50 transition-all"
                >
                  <ChevronLeft size={15} color={C.primary} />
                </button>
                <button
                  onClick={() => scrollCategories('right')}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    border: `1.5px solid ${C.border}`, background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  className="hover:bg-slate-50 transition-all"
                >
                  <ChevronRight size={15} color={C.primary} />
                </button>
              </div>
            </div>
          </div>

          {/* Categories Carousel List */}
          <div
            ref={categoriesContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => {
              const details = categoryDetails[cat] || { count: "1000+ Items", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500" };
              return (
                <Link
                  key={cat}
                  to={`/products?category=${encodeURIComponent(cat)}`}
                  className="snap-start shrink-0 text-center block w-[260px] category-card"
                  style={{
                    textDecoration: 'none',
                    borderRadius: 16,
                    overflow: 'hidden',
                    border: `1px solid ${C.border}`,
                    background: '#ffffff',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(210, 114, 101, 0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ height: 190, overflow: 'hidden', position: 'relative', background: '#f7efe5' }}>
                    <img
                      src={details.image}
                      alt={cat}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60px' }}>
                    <h3 style={{ margin: 0, fontSize: 13.5, fontWeight: 700, color: C.soil, fontFamily: "'Playfair Display', serif", lineHeight: 1.35 }}>
                      {cat}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. WHY CHOOSE US & STATISTICS SECTION
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 text-left" style={{ background: '#ffffff' }}>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side Showcase Image */}
          <div className="w-full lg:w-1/2 relative">
            <div style={{
              position: 'absolute', inset: '-12px',
              border: `1.5px solid ${C.border}`, borderRadius: '24px',
              pointerEvents: 'none', transform: 'rotate(-1.5deg)'
            }} />
            <div style={{
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              height: 380, border: '4px solid #ffffff', position: 'relative', zIndex: 2
            }}>
              <img
                src="/images/why_choose_us.png"
                alt="LOOMERA Textile Showcase"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: '8px' }}>
              WHY CHOOSE US ───
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: C.soil, margin: '0 0 16px', lineHeight: 1.2 }}>
              More Than Fabric, It's a Relationship
            </h2>
            <p style={{ color: C.stone, fontSize: '14px', lineHeight: 1.7, marginBottom: 30, maxWidth: 500 }}>
              We believe in building trust through quality, transparency, and timeless service. Discover a retail partner dedicated to matching you with standard-setting textiles.
            </p>
            
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
                style={{
                  background: C.primary,
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: 24,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
              >
                About Us <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
