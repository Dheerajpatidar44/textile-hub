import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Layers,
  Heart,
  Truck,
  Headphones,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#56513E',
  primaryDark: '#3b372a',
  accent: '#a87c5e',
  bg: '#fdfaf6',
  sand: '#efe3d5',
  sage: '#f0ede4',
  border: '#e6dacb',
  soil: '#3b2314',
  stone: '#7c6a5e',
  cream: '#fffdfb',
};

const heroSlides = [
  {
    image: "/images/slide1.png",
    subtitle: "WOVEN WITH HERITAGE,",
    titleNormal: "Crafted for",
    titleItalic: "Generations",
    desc: "Experience the richness of handcrafted textiles that blend tradition with elegance."
  },
  {
    image: "/images/slide2.png",
    subtitle: "ARTISANAL EXCELLENCE,",
    titleNormal: "Timeless Weaves,",
    titleItalic: "Modern Grace",
    desc: "Curated collection of authentic handloom silk, banarasi and premium cotton textiles."
  },
  {
    image: "/images/slide3.png",
    subtitle: "LEGACY OF LUXURY,",
    titleNormal: "Threads of",
    titleItalic: "Pure Tradition",
    desc: "Bringing the finest legacy of Indian weavers directly to your curated wardrobe."
  }
];


// ── 12 Categories (names & order preserved) ──
const categories = [
  { name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&auto=format&fit=crop&q=80" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=200&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=200&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=200&auto=format&fit=crop&q=80" },
  { name: "Bedsheets & Linen", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&auto=format&fit=crop&q=80" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=200&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=200&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=200&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Children", image: "https://images.unsplash.com/photo-1580656940647-8854a00547f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHwwfDB8fHww" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&auto=format&fit=crop&q=80" }
];

// Testimonials data
const testimonials = [
  { text: "Aavanika Textiles has been our trusted partner for premium quality fabrics. Their commitment to quality and service is exceptional!", author: "Neha Agrawal", role: "Boutique Owner" },
  { text: "The variety of traditional weaves and prompt supply coordination has transformed our boutique collections completely.", author: "Preeti Sinha", role: "Fashion Designer" },
  { text: "Exceptional design heritage, beautiful handloom details and flawless retail support.", author: "Amit Verma", role: "Retail partner, Mumbai" }
];

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ═══════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#efe3d5] min-h-[500px] lg:min-h-[580px] flex items-center">
        {/* Slides Background Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'right center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                inset: 0,
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            />
          ))}

        </div>



        {/* Content Container (Overlaid on top of background) */}
        <div className="max-w-[90rem] mx-auto w-full px-6 sm:px-8 lg:px-14 relative z-10 flex items-center">
          <div className="w-full lg:w-1/2 text-left flex flex-col items-start py-12 lg:py-20">

            {/* Ornament line */}
            <div className="flex items-center gap-2 mb-4">
              <div style={{ width: 18, height: 1.5, background: C.primary }} />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="5" y="0.5" width="6.3" height="6.3" transform="rotate(45 5 0.5)" stroke={C.primary} strokeWidth="1" fill="none" />
              </svg>
              <div style={{ width: 40, height: 1.5, background: C.primary }} />
            </div>

            <span style={{ color: C.primary }} className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
              {heroSlides[currentSlide].subtitle}
            </span>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(38px, 4.8vw, 58px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: C.primaryDark,
              margin: '0 0 14px'
            }}>
              {heroSlides[currentSlide].titleNormal}<br />
              <span style={{ fontStyle: 'italic', fontWeight: 600, color: C.accent }}>
                {heroSlides[currentSlide].titleItalic}
              </span>
            </h1>

            {/* Bottom Ornament line */}
            <div className="flex items-center gap-2 mb-6">
              <div style={{ width: 40, height: 1.5, background: C.primary }} />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="5" y="0.5" width="6.3" height="6.3" transform="rotate(45 5 0.5)" stroke={C.primary} strokeWidth="1" fill="none" />
              </svg>
              <div style={{ width: 18, height: 1.5, background: C.primary }} />
            </div>

            <p style={{ color: C.soil, fontSize: '15px', lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }} className="font-normal opacity-90">
              {heroSlides[currentSlide].desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                style={{
                  background: C.primary,
                  color: '#ffffff',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  padding: '16px 28px',
                }}
                onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                Explore Collection <ArrowRight size={14} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: C.primary,
                  border: `1.5px solid ${C.primary}`,
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  padding: '14px 26px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(86, 81, 62, 0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                Our Story <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>

        {/* Center-aligned bottom indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              style={{
                width: 8, height: 8, borderRadius: '50%',
                background: currentSlide === dot ? C.primary : 'transparent',
                border: `1.5px solid ${C.primary}`,
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
              aria-label={`Slide ${dot + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. FEATURE BAR
      ═══════════════════════════════════════ */}
      <section className="relative z-20 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 -mt-8 sm:-mt-12 mb-14">
        <div
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: C.border }}
        >
          {[
            { icon: Award, title: "Premium Quality", desc: "Finest fabrics, unmatched quality" },
            { icon: Layers, title: "Wide Range", desc: "Thousands of fabrics for every need" },
            { icon: Heart, title: "Customer First", desc: "Your satisfaction is our priority" },
            { icon: Truck, title: "Pan India Delivery", desc: "Timely delivery across India" },
            { icon: Headphones, title: "Dedicated Support", desc: "We are here to help you anytime" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 md:first:pl-0 md:pl-4 text-left"
              style={{ borderLeftColor: 'rgba(230,218,203,0.6)' }}
            >
              <div
                style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: '#f5ede4',
                  border: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                }}
              >
                <item.icon size={18} style={{ color: C.accent }} />
              </div>
              <h4 className="text-[13px] font-bold tracking-wide uppercase mb-1.5" style={{ color: C.soil }}>
                {item.title}
              </h4>
              <p className="text-[11.5px] leading-relaxed" style={{ color: C.stone }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. SHOP BY CATEGORY
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-8 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b" style={{ borderBottomColor: C.border }}>
          <div className="flex items-center gap-3">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: C.soil, margin: 0 }}>
              Shop by Category
            </h2>
            <div className="flex items-center gap-1">
              <div style={{ width: 14, height: 1.5, background: C.accent }} />
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                <rect x="3" width="4.2" height="4.2" transform="rotate(45 3 0)" fill={C.accent} />
              </svg>
              <div style={{ width: 14, height: 1.5, background: C.accent }} />
            </div>
          </div>

          <Link
            to="/products"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-colors"
            style={{ color: C.primary }}
            onMouseEnter={e => e.currentTarget.style.color = C.accent}
            onMouseLeave={e => e.currentTarget.style.color = C.primary}
          >
            View All Categories <ArrowRight size={14} />
          </Link>
        </div>

        {/* Categories Grid (preserving all 12 categories in order) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="flex flex-col items-center text-center group transition-all duration-300"
            >
              <div
                className="w-24 h-24 rounded-full overflow-hidden mb-4 transition-all duration-300 shadow-sm group-hover:shadow-md border"
                style={{
                  borderColor: C.border,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = C.accent;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-[12.5px] font-bold tracking-wide transition-colors leading-tight" style={{ color: C.soil }}>
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. ACTION PANELS (e-Auction & Bulk)
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Card 1: Live e-Auction */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between text-left text-white relative overflow-hidden"
            style={{
              background: '#56513e', // Olive/Green-brown custom tone
              minHeight: 320,
            }}
          >
            {/* Background design */}
            <div style={{ position: 'absolute', bottom: -20, right: -20, width: 220, height: 220, opacity: 0.12, borderRadius: '50%', border: '6px solid white' }} />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-emerald-300">Live now</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-bold mb-4">
                Live e-Auction
              </h3>
              <p className="text-sm opacity-90 leading-relaxed max-w-[220px]">
                Exclusive textiles at unbeatable prices.
              </p>
            </div>

            <div className="flex justify-between items-end relative z-10 mt-6">
              <Link
                to="/e-auction"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[11.5px] font-bold uppercase tracking-wider transition-all duration-300 bg-white"
                style={{ color: '#56513e' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                View Live Auctions <ArrowRight size={13} />
              </Link>

              {/* Wooden Gavel Image */}
              <div className="w-24 h-24 opacity-90 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&auto=format&fit=crop&q=80"
                  alt="Gavel"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Card 2: e-Quotation */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between text-left border relative overflow-hidden"
            style={{
              background: '#efe3d5', // Sand custom tone
              borderColor: C.border,
              minHeight: 320,
            }}
          >
            {/* Background design */}
            <div style={{ position: 'absolute', bottom: -20, left: -20, width: 180, height: 180, opacity: 0.1, borderRadius: '50%', border: '4px solid #56513E' }} />

            <div>
              <div className="flex items-center gap-1.5 mb-4">
                <div style={{ width: 10, height: 1.5, background: C.accent }} />
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase" style={{ color: C.accent }}>B2B Fabric Sourcing</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl font-bold mb-4">
                e-Quotation
              </h3>
              <p className="text-sm opacity-90 leading-relaxed max-w-[220px]" style={{ color: C.stone }}>
                Request custom pricing quotes for bulk fabric orders and tailored specifications.
              </p>
            </div>

            <div className="flex justify-between items-end relative z-10 mt-6">
              <Link
                to="/e-quotation"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[11.5px] font-bold uppercase tracking-wider transition-all duration-300 text-white"
                style={{ background: C.primary }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primaryDark; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Request Quotation <ArrowRight size={13} />
              </Link>

              {/* Textile Swatch / Document Image */}
              <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-white/40">
                <img
                  src="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=300&auto=format&fit=crop&q=80"
                  alt="Textile swatches"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Bulk Orders */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between text-left text-white relative overflow-hidden"
            style={{
              background: '#8d6349', // Terracotta-brown custom tone
              minHeight: 320,
            }}
          >
            {/* Background design */}
            <div style={{ position: 'absolute', top: -30, left: -30, width: 160, height: 160, opacity: 0.1, borderRadius: '50%', background: 'white' }} />

            <div>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-amber-200 mb-3 block">
                Wholesale & B2B
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-bold mb-4">
                Bulk Orders<br />Better Benefits
              </h3>
              <p className="text-sm opacity-90 leading-relaxed max-w-[200px]">
                Special pricing for bulk orders and retailers.
              </p>
            </div>

            <div className="flex justify-between items-end relative z-10 mt-6">
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[11.5px] font-bold uppercase tracking-wider transition-all duration-300 bg-white"
                style={{ color: '#8d6349' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Enquire Now <ArrowRight size={13} />
              </Link>

              {/* Stacked fabrics with a vase image */}
              <div className="w-28 h-24 shrink-0 overflow-hidden rounded-xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1606744824163-985d376605aa?w=300&auto=format&fit=crop&q=80"
                  alt="Fabric stacked next to vase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. WHAT OUR CLIENTS SAY (Testimonials)
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">

        {/* Centered title with ornaments */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div style={{ width: 40, height: 1.5, background: C.accent }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect x="4" width="5.6" height="5.6" transform="rotate(45 4 0)" fill={C.accent} />
          </svg>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl font-bold">
            What Our Clients Say
          </h2>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect x="4" width="5.6" height="5.6" transform="rotate(45 4 0)" fill={C.accent} />
          </svg>
          <div style={{ width: 40, height: 1.5, background: C.accent }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="text-left relative flex flex-col justify-between"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: '30px 24px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(86, 81, 62, 0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Quote symbol decoration */}
                <div style={{
                  position: 'absolute', top: 12, right: 22,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 60, color: '#fcf8f2', lineHeight: 1, fontWeight: 700,
                  userSelect: 'none',
                  zIndex: 0,
                }}>
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="13" height="13" viewBox="0 0 24 24" fill={C.accent} stroke="none">
                      <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
                    </svg>
                  ))}
                </div>

                <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.7, margin: '0 0 24px', fontStyle: 'italic', position: 'relative', zIndex: 10 }}>
                  "{test.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="relative z-10">
                {/* Avatar with initial letter */}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#efe3d5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: C.soil, fontWeight: 700,
                }}>
                  {test.author[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: C.soil, margin: 0 }}>
                    {test.author}
                  </h4>
                  <p style={{ fontSize: 11, color: C.accent, margin: 0, fontWeight: 500 }}>
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
