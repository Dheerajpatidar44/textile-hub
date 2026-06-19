import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#0D6E6E',        // Deep Teal
  primaryLight: '#E2F0ED',   // Light Mint/Teal background
  primaryDark: '#064040',    // Dark Forest Teal
  accent: '#C2A478',         // Elegant Gold
  bg: '#FCFCFA',             // Soft Linen Background
  stone: '#576F6F',          // Muted slate text
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
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full text-[#1A3030] pt-2 pb-16">
      
      {/* ── 1. HERO SECTION WITH SLIDER ── */}
      <section className="relative w-full max-w-[90rem] mx-auto px-2 sm:px-4 lg:px-6 pt-2 pb-6 overflow-hidden">
        <div className="relative w-full rounded-[32px] overflow-hidden h-[440px] sm:h-[360px] lg:h-[360px] shadow-sm border border-[#E3EBE9] bg-[#F3F8F7]">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.6 }}
              className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* Decorative Backdrop shape */}
              <div className="absolute top-0 right-0 w-[45%] h-full bg-[#E2F0ED] rounded-l-[100px] pointer-events-none hidden lg:block -z-0" />

              {/* Left Text Column */}
              <div className="lg:col-span-7 px-8 sm:px-12 lg:pl-16 lg:pr-8 py-8 text-left flex flex-col justify-center z-10 relative">
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#0D6E6E] uppercase mb-2 block">
                  {slides[current].tag}
                </span>
                <h1 
                  className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.1] text-primary-dark mb-4 font-display"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {slides[current].title}
                </h1>
                <p className="text-[13px] sm:text-[14px] text-[#576F6F] leading-relaxed max-w-[480px] mb-6 font-medium">
                  {slides[current].desc}
                </p>

                <div>
                  <Link
                    to={slides[current].link}
                    className="bg-[#0D6E6E] text-white hover:bg-[#064040] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-sm"
                  >
                    EXPLORE COLLECTION
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 h-[200px] sm:h-full lg:h-[360px] w-full relative z-10 overflow-hidden flex items-stretch">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-white border border-[#E3EBE9] flex items-center justify-center text-[#0D6E6E] hover:text-[#064040] cursor-pointer shadow-sm hover:scale-105 transition-all focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-white border border-[#E3EBE9] flex items-center justify-center text-[#0D6E6E] hover:text-[#064040] cursor-pointer shadow-sm hover:scale-105 transition-all focus:outline-none"
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
                className="w-2.5 h-2.5 rounded-full p-0 border-none transition-all duration-300 cursor-pointer"
                style={{
                  background: current === idx ? '#0D6E6E' : 'rgba(13, 110, 110, 0.2)',
                  transform: current === idx ? 'scale(1.2)' : 'scale(1)'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. EXPLORE OUR COLLECTIONS SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-4 lg:px-6 pt-6 pb-8">
        <div className="flex justify-between items-end mb-8 border-b border-[#E3EBE9] pb-4">
          <h2 className="text-2xl sm:text-3xl font-normal text-primary-dark font-display" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Explore Our Collections
          </h2>
          <Link 
            to="/products" 
            className="text-[11px] font-bold tracking-widest text-[#0D6E6E] hover:text-[#064040] uppercase flex items-center gap-1 transition-all"
          >
            VIEW ALL <ArrowRight size={12} />
          </Link>
        </div>

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
              className="group relative rounded-2xl overflow-hidden h-[320px] border border-[#E3EBE9] shadow-sm block"
            >
              {/* Full background image */}
              <div className="absolute inset-0 bg-gray-100 z-0">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
              </div>

              {/* Text bottom content */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                <h4 
                  className="text-white text-2xl font-normal font-display leading-tight mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.name}
                </h4>
                <p className="text-white/80 text-[10.5px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  {item.desc}
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
