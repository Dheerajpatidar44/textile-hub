import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#e2b865',        // Gold
  primaryLight: '#1b202c',   // Surface Dark
  primaryDark: '#0a0c10',    // Deepest Midnight
  accent: '#e2b865',         // Gold Accent
  bg: '#12151c',             // Dark Background
  stone: '#a0aec0',          // Muted slate text
};

const slides = [
  {
    tag: "NEW COLLECTION 2024",
    title: "Threads of Heritage, Woven for You",
    desc: "Timeless weaves crafted with love, designed for every moment. Explore traditional Indian craftsmanship combined with modern refinement.",
    img: "/images/hero_sutrangi_woman.png",
    link: "/products"
  },
  {
    tag: "EXQUISITE ARTISTRY",
    title: "Heritage Handlooms, Timeless Drape",
    desc: "Celebrate the rich legacy of handwoven sarees and ethnic wear. Experience comfort, authenticity, and master craftsmanship.",
    img: "/images/ethnic_wear.png",
    link: "/products"
  },
  {
    tag: "LUXURIOUS COMFORT",
    title: "Premium Home Linen & Fabrics",
    desc: "Bring home premium quality bedsheets, upholstery, and fine fabrics tailored to enhance your modern living spaces.",
    img: "/images/popular_bedsheet.png",
    link: "/products"
  },
  {
    tag: "CLASSIC MENSWEAR",
    title: "Royal Weaves & Tailored Elegance",
    desc: "Discover premium suiting, shirting, and heritage ethnic wear for men. Tailored styles and royal fabrics crafted for the modern gentleman.",
    img: "/images/pritesh.png",
    link: "/products"
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: C.bg, fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="w-full text-[#e2e8f0] pb-16">

      {/* ── 1. HERO SECTION WITH SLIDER (FULL WIDTH, TOUCHING ALL SIDES) ── */}
      <section className="relative w-full overflow-hidden h-[440px] sm:h-[400px]">
        <div className="relative w-full h-full bg-[#1b202c] border-b border-[#2a3142]">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* Decorative Backdrop shape */}
              <div className="absolute top-0 right-0 w-[45%] h-full bg-[#12151c]/40 pointer-events-none hidden lg:block -z-0" />

              {/* Left Text Column */}
              <div className="lg:col-span-7 px-8 sm:px-12 lg:pl-16 lg:pr-8 py-8 text-left flex flex-col justify-center z-10 relative">
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#e2b865] uppercase mb-2 block">
                  {slides[current].tag}
                </span>
                <h1
                  className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.1] text-white mb-4 font-display"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {slides[current].title}
                </h1>
                <p className="text-[13px] sm:text-[14px] text-[#a0aec0] leading-relaxed max-w-[480px] mb-6 font-medium">
                  {slides[current].desc}
                </p>

                <div>
                  <Link
                    to={slides[current].link}
                    className="bg-[#e2b865] text-[#12151c] hover:bg-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none px-6 py-3 inline-flex items-center gap-2 shadow-sm"
                  >
                    EXPLORE COLLECTION
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 h-[200px] sm:h-full lg:h-full w-full relative z-10 overflow-hidden flex items-stretch">
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-full object-cover object-center select-none"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-none bg-[#12151c]/80 hover:bg-[#e2b865] border border-[#2a3142] flex items-center justify-center text-white hover:text-[#12151c] cursor-pointer shadow-sm hover:scale-105 transition-all focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-none bg-[#12151c]/80 hover:bg-[#e2b865] border border-[#2a3142] flex items-center justify-center text-white hover:text-[#12151c] cursor-pointer shadow-sm hover:scale-105 transition-all focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-8 sm:left-12 lg:left-16 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="w-3 h-3 rounded-none p-0 border-none transition-all duration-300 cursor-pointer"
                style={{
                  background: current === idx ? '#e2b865' : 'rgba(255, 255, 255, 0.2)',
                  transform: current === idx ? 'scale(1.1)' : 'scale(1)'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT US STORYTELLING SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8 border-b border-[#2a3142]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Story and Details */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#e2b865] uppercase mb-3 block">
              OUR HERITAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6 font-display leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
              Crafting Stories in Every Thread
            </h2>
            <p className="text-[#a0aec0] text-sm sm:text-base leading-relaxed mb-6 font-medium">
              At <strong className="text-[#e2b865]">Aura Weaves</strong>, we bridge the gap between generational handloom mastery and contemporary elegance. Every piece in our collection—from premium royal sarees and custom suitings to exquisite home linen—is curated to tell a story of dedication, authenticity, and unparalleled Indian craftsmanship.
            </p>
            <p className="text-[#a0aec0] text-sm sm:text-base leading-relaxed mb-8">
              By working hand-in-hand with traditional weavers across India, we bring you fabrics of royalty with modern design sensibilities, backed by wholesale e-auctioning transparency and convenience.
            </p>
            <Link
              to="/about"
              className="border border-[#e2b865] text-[#e2b865] hover:bg-[#e2b865] hover:text-[#12151c] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none px-6 py-3 inline-flex items-center gap-2"
            >
              LEARN MORE ABOUT US
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Right: Craftsmanship Image Display */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[#2a3142] p-4 bg-[#1b202c] rounded-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-none border border-[#2a3142]">
                <img
                  src="/images/about_us_weaving.png"
                  alt="Aura Weaves Loom Craft"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#e2b865]/5 mix-blend-overlay pointer-events-none" />
              </div>
            </div>
            {/* Background dashed border frame */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-dashed border-[#e2b865]/40 pointer-events-none -z-10" />
          </div>
        </div>
      </section>

      {/* ── 2. EXPLORE OUR COLLECTIONS SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-8">
        <div className="flex justify-between items-end mb-8 border-b border-[#2a3142] pb-4">
          <h2 className="text-2xl sm:text-3xl font-normal text-[#e2b865] font-display" style={{ fontFamily: "'Cinzel', serif" }}>
            Explore Our Collections
          </h2>
          <Link
            to="/products"
            className="text-[11px] font-bold tracking-widest text-[#e2b865] hover:text-white uppercase flex items-center gap-1 transition-all"
          >
            VIEW ALL <ArrowRight size={12} />
          </Link>
        </div>

        {/* Grid of Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Wedding Edit", desc: "Timeless Elegance", img: "/images/ethnic_wear.png" },
            { name: "Festive Collection", desc: "Celebrate in Style", img: "/images/popular_banarasi_saree.png" },
            { name: "Everyday Essentials", desc: "Comfort & Grace", img: "/images/popular_cotton_fabric.png" },
            { name: "Home Textiles", desc: "Luxury You Deserve", img: "/images/popular_bedsheet.png" }
          ].map((item, idx) => (
            <Link
              key={idx}
              to="/products"
              className="group flex flex-col rounded-none overflow-hidden border border-[#2a3142] bg-[#1b202c] shadow-sm block transition-all duration-300 hover:border-[#e2b865]"
            >
              {/* Image Container on Top */}
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-900 shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Text Content */}
              <div className="p-5 flex flex-col justify-between flex-grow text-left">
                <div>
                  <h4
                    className="text-[#e2b865] text-lg font-normal font-display leading-tight mb-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h4>
                  <p className="text-[#a0aec0] text-[12px] mb-4">
                    Experience our premium range designed for quality, sophistication, and heritage craft.
                  </p>
                </div>
                <span className="text-[#e2b865] group-hover:text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 transition-colors">
                  {item.desc}
                  <ArrowRight size={11} className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
