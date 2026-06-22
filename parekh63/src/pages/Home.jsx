import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react';

const C = {
  primary: '#5E3B43',       // Burgundy
  primaryLight: '#8C5E6B',  // Medium Burgundy
  primaryDark: '#3B2329',   // Deep Charcoal Burgundy
  accent: '#BD9399',        // Pastel Rose
  gold: '#D4B26F',          // Champagne Gold
  bg: '#FAF6F6',            // Background
  stone: '#6E6466',         // Muted gray-rose text
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&auto=format&fit=crop&q=60" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=300&auto=format&fit=crop&q=60" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop&q=60" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&auto=format&fit=crop&q=60" },
  { name: "Shirting", image: "/images/popular_cotton_fabric.png" },
  { name: "Women Ethnic", image: "/images/popular_lehenga.png" },
  { name: "Men Ethnic", image: "/images/men_ethnic_wear.png" },
  { name: "Kids Ethnic", image: "/images/children_ethnic_wear.png" },
  { name: "Home Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      left: "/images/navya_hero_left.png",
      mid: "/images/navya_hero_mid.png",
      right: "/images/navya_hero_right.png",
    },
    {
      left: "/images/navya_hero_mid.png",
      mid: "/images/navya_hero_right.png",
      right: "/images/navya_hero_left.png",
    },
    {
      left: "/images/navya_hero_right.png",
      mid: "/images/navya_hero_left.png",
      right: "/images/navya_hero_mid.png",
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-[95px] md:pt-[105px] lg:pt-[110px] pb-16">
      
      {/* ── 1. HERO SECTION (3-PANEL SPLIT CAROUSEL) ── */}
      <section className="relative w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 mt-1.5">
        <div className="relative w-full overflow-hidden h-[320px] sm:h-[420px] lg:h-[480px] bg-transparent">
          
          {/* Slides with separate panel columns */}
          <div className="w-full h-full grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Left Image Column */}
            <div className="relative h-full overflow-hidden rounded-[16px] md:rounded-[28px] shadow-md bg-white border border-[#EFE6E7]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={`left-${activeSlide}`}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  src={slides[activeSlide].left}
                  alt="Left model banner"
                  className="absolute inset-0 w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-1000"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Center Image Column */}
            <div className="relative h-full overflow-hidden rounded-[16px] md:rounded-[28px] shadow-md bg-white border border-[#EFE6E7]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={`mid-${activeSlide}`}
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  src={slides[activeSlide].mid}
                  alt="Middle model banner"
                  className="absolute inset-0 w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-1000"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Image Column */}
            <div className="relative h-full overflow-hidden rounded-[16px] md:rounded-[28px] shadow-md bg-white border border-[#EFE6E7]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={`right-${activeSlide}`}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  src={slides[activeSlide].right}
                  alt="Right model banner"
                  className="absolute inset-0 w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-1000"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md text-[#5E3B43] hover:scale-105 active:scale-95 transition-all z-20 border-none cursor-pointer"
          >
            <ChevronLeft size={20} className="stroke-[2.5]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md text-[#5E3B43] hover:scale-105 active:scale-95 transition-all z-20 border-none cursor-pointer"
          >
            <ChevronRight size={20} className="stroke-[2.5]" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className="w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300"
                style={{
                  background: activeSlide === idx ? '#D4B26F' : 'rgba(255,255,255,0.4)',
                  width: activeSlide === idx ? '24px' : '10px'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. FEATURES ROW ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-2">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-[#EFE6E7] shadow-sm">
          {[
            { title: "Timeless Craftsmanship", desc: "Rooted in tradition, crafted to perfection.", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            )},
            { title: "Curated Elegance", desc: "Handpicked collections for every occasion.", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            )},
            { title: "Pure & Premium", desc: "Finest fabrics, unmatched quality.", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            )},
            { title: "Delivered with Care", desc: "Reliable delivery, every time.", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            )}
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start text-left p-2">
              <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center bg-[#FAF6F6] border border-[#EFE6E7]">
                {item.icon}
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#5E3B43] m-0 mb-1">{item.title}</h4>
                <p className="text-[12px] text-[#6E6466] m-0 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. SHOP BY CATEGORY ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <div className="flex justify-between items-end mb-6 pb-2 border-b border-[#EFE6E7]">
          <h2 className="text-[20px] md:text-[24px] font-bold text-[#5E3B43] font-serif tracking-wider m-0 uppercase">
            Shop by Category
          </h2>
          <Link
            to="/products"
            className="text-[11px] font-bold text-[#BD9399] hover:text-[#5E3B43] tracking-widest uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
          >
            <span>View All Categories</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Circular category items in slider without scrollbar */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center gap-3 shrink-0 text-decoration-none"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#EFE6E7] group-hover:border-[#D4B26F] transition-all duration-300 shadow-sm bg-white">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-wider text-[#5E3B43] uppercase group-hover:text-[#D4B26F] transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. MID-PROMO BANNER ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[24px] overflow-hidden shadow-lg group">
          <img
            src="/images/navya_promo.png"
            alt="Weave storytelling promotional fabric banner"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B2329]/85 via-[#5E3B43]/70 to-transparent" />
          
          <div className="absolute inset-y-0 left-6 sm:left-12 lg:left-16 flex flex-col justify-center items-start text-left z-10 max-w-[480px] sm:max-w-[600px] pr-4">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#D4B26F] uppercase mb-3">
              From Our Looms to Your Life
            </span>
            <h3 className="text-[26px] sm:text-[36px] lg:text-[44px] font-bold text-white font-serif m-0 mb-4 leading-tight">
              Woven with stories.<br/>Worn with pride.
            </h3>
            <p className="text-[13.5px] sm:text-[15.5px] text-[#FAF6F6] leading-relaxed mb-6 font-medium opacity-90">
              Each thread carries the legacy of skilled artisans and the promise of unmatched quality.
            </p>
            <Link
              to="/about"
              className="px-6 py-3 bg-[#D4B26F] hover:bg-white text-white hover:text-[#5E3B43] rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-md text-decoration-none"
            >
              Discover Our Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. MID-ARTISAN SECTION (REDICTS TO ABOUT US) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-2">
        <Link
          to="/about"
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-[#EFE6E7] rounded-[24px] p-6 md:p-10 shadow-sm text-left hover:shadow-md transition-shadow duration-300 block text-decoration-none text-current cursor-pointer group"
        >
          {/* Left: Showroom / Shop Image */}
          <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[16px] overflow-hidden shadow-sm relative bg-[#FAF6F6]">
            <img
              src="/images/navya_artisan_man.png"
              alt="Boutique retail clothing showroom with fabrics"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          {/* Right: Showroom Text Description */}
          <div className="flex flex-col py-2 lg:pl-4">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#BD9399] uppercase mb-3 block">
              Our Luxury Retail Experience
            </span>
            <h3 className="text-[26px] sm:text-[32px] font-bold text-[#5E3B43] font-serif m-0 mb-4 leading-tight">
              Step into a world of curated elegance.
            </h3>
            <p className="text-[14px] text-[#6E6466] leading-relaxed mb-6 font-medium">
              Visit our premium showrooms to feel the luxurious textures of our handloom silks and custom fabrics. Learn about our legacy of traditional weave craftsmanship.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              {[
                { title: "Bespoke Consultations", desc: "Expert stylings tailored specifically for your special occasions." },
                { title: "Touch & Feel the Quality", desc: "Experience the premium texture of authentic weaves first-hand." },
                { title: "Heritage Showrooms", desc: "Located in the heart of the country's prime textile hub in Surat." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center bg-[#F5EFEF] text-[#5E3B43]">
                    <Check size={12} className="stroke-[3.5]" />
                  </div>
                  <div>
                    <span className="text-[13px] font-bold text-[#5E3B43] block mb-0.5">{item.title}</span>
                    <span className="text-[12px] text-[#6E6466] font-medium block leading-snug">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <span
                className="inline-block px-6 py-3 bg-[#5E3B43] group-hover:bg-[#D4B26F] text-white rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
              >
                Explore Our Story &rarr;
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── 6. FROM OUR LOOKBOOK ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <div className="flex justify-between items-end mb-8 pb-2 border-b border-[#EFE6E7]">
          <h2 className="text-[20px] md:text-[24px] font-bold text-[#5E3B43] font-serif tracking-wider m-0 uppercase">
            From Our Lookbook
          </h2>
          <Link
            to="/products"
            className="text-[11px] font-bold text-[#BD9399] hover:text-[#5E3B43] tracking-widest uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
          >
            <span>View All Lookbook</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 4 columns layout lookbook cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Festive Collection '24", image: "/images/navya_hero_left.png" },
            { title: "Everyday Elegance", image: "/images/discover_kurtis.png" },
            { title: "Wedding Diaries", image: "/images/navya_hero_mid.png" },
            { title: "Heritage Weaves", image: "/images/navya_promo.png" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] rounded-[16px] overflow-hidden shadow-sm group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-6 text-left" />
              
              {/* Text content absolute */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col items-start">
                <h4 className="text-[18px] font-bold font-serif text-white mb-3">
                  {item.title}
                </h4>
                <Link
                  to="/products"
                  className="text-[10px] font-bold text-[#D4B26F] hover:text-white tracking-widest uppercase text-decoration-none flex items-center gap-1 transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
