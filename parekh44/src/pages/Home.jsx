import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const C = {
  primary: '#222842',        // Slate Navy
  primaryLight: '#30375E',
  accent: '#8D6F97',         // Mauve
  accentLight: '#A485AD',
  gold: '#D4B26F',           // Gold
  bg: '#FAF9FC',             // Soft lavender-grey background
  border: '#EAE7ED',
  stone: '#5C627A',
};

const categories = [
  { name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80" },
  { name: "Bedsheets & Linen", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Men", image: "https://images.unsplash.com/photo-1724856604249-ca73680262e8?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Children", image: "https://images.unsplash.com/photo-1741992556912-3b2d62461e75?w=400&auto=format&fit=crop&q=80" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80" }
];

const heroSlides = [
  {
    title: "Fabrics that",
    highlight: "Feel Like You",
    desc: "Timeless textiles crafted for every story you tell.",
    image: "/images/hero_textiles.png"
  },
  {
    title: "Elegance in",
    highlight: "Every Thread",
    desc: "Discover premium fabrics curated for your refined taste.",
    image: "/images/premium_fabrics.png"
  },
  {
    title: "Crafted with",
    highlight: "Woven Passion",
    desc: "Experience the unmatched quality of sustainably sourced materials.",
    image: "/images/home_textiles.png"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full pt-2 lg:pt-3 pb-8 lg:pb-12 overflow-hidden bg-white">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 pt-0">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-normal leading-[1.08] text-[#222842] mb-6 tracking-tight">
                  {heroSlides[currentSlide].title} <br/> 
                  <span className="italic font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.accent }}>
                    {heroSlides[currentSlide].highlight}
                  </span>
                </h1>
                
                <p className="text-[15px] text-[#5C627A] mb-8 max-w-md leading-relaxed font-medium">
                  {heroSlides[currentSlide].desc}
                </p>

                <div className="flex items-center gap-6">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#222842] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#8D6F97] rounded-full shadow-lg"
                  >
                    EXPLORE COLLECTION 
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex items-center gap-2.5 mt-12">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#8D6F97]' : 'bg-[#EAE7ED]'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Image Oval Column */}
          <div className="lg:col-span-7 flex justify-center relative">
            {/* Slider controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#222842] hover:bg-[#8D6F97] hover:text-white transition-all shadow-md z-20 border border-[#EAE7ED]"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 lg:-left-auto lg:right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#222842] hover:bg-[#8D6F97] hover:text-white transition-all shadow-md z-20 border border-[#EAE7ED]"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>

            {/* Asymmetrical Oval Mask Container */}
            <div className="w-full max-w-[580px] aspect-[1.1] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full overflow-hidden"
                  style={{
                    borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%',
                    border: '1.5px solid rgba(141, 111, 151, 0.15)',
                    background: '#FAF9FC'
                  }}
                >
                  <img 
                    src={heroSlides[currentSlide].image} 
                    alt={heroSlides[currentSlide].highlight} 
                    className="w-full h-full object-cover scale-[1.02] hover:scale-[1.06] transition-transform duration-1000 ease-out"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BANNER ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 my-8">
        <div 
          className="w-full bg-[#222842] py-9 px-6 lg:px-12 rounded-[24px] text-white relative overflow-hidden"
          style={{ boxShadow: '0 20px 40px rgba(34, 40, 66, 0.08)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            {[
              {
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#D4B26F" strokeWidth="1.3" className="shrink-0">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M9 12.8V22l3-2 3 2v-9.2" />
                    <path d="M12 3a5 5 0 0 0-5 5c0 1.8 1 3.4 2.5 4.3" />
                  </svg>
                ),
                title: "PREMIUM QUALITY",
                desc: "Finest fabrics, unmatched quality"
              },
              {
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#D4B26F" strokeWidth="1.3" className="shrink-0">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "WIDE RANGE",
                desc: "Thousands of fabrics for every need"
              },
              {
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#D4B26F" strokeWidth="1.3" className="shrink-0">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M19 8l2 2 4-4" />
                  </svg>
                ),
                title: "TRUSTED BY MILLIONS",
                desc: "Loved by 1,00,000+ customers"
              },
              {
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#D4B26F" strokeWidth="1.3" className="shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 11l2 2 4-4" />
                  </svg>
                ),
                title: "ETHICAL & SUSTAINABLE",
                desc: "Responsibly sourced, crafted with care"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-row items-center gap-4 border-r border-white/10 last:border-0 justify-center lg:justify-start pr-4">
                {item.icon}
                <div className="text-left">
                  <h4 className="text-[11px] font-bold tracking-widest text-[#D4B26F] mb-1">{item.title}</h4>
                  <p className="text-[12px] text-white/85 font-semibold m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE TRADITION MEETS TREND ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-20 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-4 text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8D6F97] flex items-center gap-2 mb-3">
              CRAFTING COMFORT
              <div className="w-10 h-[1.5px] bg-[#8D6F97]" />
            </span>
            <h2 className="text-[44px] lg:text-[52px] font-normal leading-[1.1] text-[#222842] mb-6">
              Where Tradition <br />
              Meets <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.gold }}>Trend</span>
            </h2>
            <p className="text-[14px] text-[#5C627A] leading-relaxed mb-8 font-medium max-w-sm">
              From heritage weaves to modern designs, we bring together the best of both worlds. High-quality textiles crafted sustainably for your complete satisfaction.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#8D6F97] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#222842] transition-colors shadow-md"
            >
              DISCOVER MORE
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "FORMAL & ETHNIC WEAR FOR WOMEN", label: "Formal & Ethnic Wear for Women", image: "/images/ethnic_wear.png" },
              { title: "FORMAL & ETHNIC WEAR FOR MEN", label: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
              { title: "FORMAL & ETHNIC WEAR FOR CHILDREN", label: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" }
            ].map((card, index) => (
              <Link
                key={index}
                to={`/products?category=${encodeURIComponent(card.label)}`}
                className="group relative flex flex-col bg-white rounded-[20px] overflow-hidden border border-[#EAE7ED] shadow-sm hover:shadow-xl transition-all duration-300 h-[380px]"
              >
                {/* Image */}
                <div className="w-full h-[78%] overflow-hidden bg-[#FAF9FC]">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                {/* Detail */}
                <div className="p-5 flex-1 flex flex-col justify-center text-left bg-white z-10 border-t border-[#FAF9FC]">
                  <span className="text-[10px] font-bold tracking-widest text-[#5C627A] mb-1">{card.title}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-[#8D6F97] tracking-wide">Explore Now</span>
                    <ArrowRight size={12} className="text-[#8D6F97] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WIDE BANNER SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24">
        <div 
          className="rounded-[24px] overflow-hidden flex flex-col lg:flex-row relative bg-[#EAE7ED]" 
          style={{ minHeight: '380px', border: '1px solid rgba(141, 111, 151, 0.1)' }}
        >
          {/* Main Background Image Masked */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/new_arrivals_banner.png" 
              alt="Fresh Styles, New Inspirations" 
              className="w-full h-full object-cover opacity-95" 
            />
            {/* Soft Overlay - Reduced color/shadow strength */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent"></div>
          </div>

          {/* Left Text Content */}
          <div className="w-full lg:w-[48%] p-10 lg:p-16 flex flex-col justify-center items-start text-left relative z-10">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#8D6F97] uppercase mb-3">NEW ARRIVALS</span>
            <h2 className="text-[40px] lg:text-[48px] text-[#222842] leading-[1.15] mb-5 font-normal">
              Fresh Styles, <br />
              New Inspirations
            </h2>
            <p className="text-[#5C627A] text-[13px] leading-relaxed mb-8 font-semibold max-w-sm">
              Be the first to explore our latest organic cotton and heritage weave collection crafted for this season.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#222842] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#8D6F97] transition-colors shadow-md"
            >
              SHOP NEW ARRIVALS 
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8D6F97] flex items-center gap-2 mb-3">
              WHY CHOOSE US?
              <div className="w-10 h-[1.5px] bg-[#8D6F97]" />
            </span>
            <h2 className="text-[40px] lg:text-[48px] font-normal leading-[1.15] text-[#222842] mb-6">
              Quality You Can Feel, <br />
              Trust You Can Keep.
            </h2>
            <p className="text-[14px] text-[#5C627A] leading-relaxed mb-8 font-medium max-w-sm">
              We are committed to delivering the finest fabrics with a promise of trust, transparency, and timeless style. Every single thread is woven with maximum care.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#8D6F97] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#222842] transition-colors shadow-md"
            >
              OUR PROMISE
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Right Side Grid - Reduced box sizes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "EXPERTLY CURATED", desc: "Handpicked designs just for you.", color: 'rgba(141, 111, 151, 0.06)' },
              { title: "CUSTOMER FIRST", desc: "We put your needs at the heart.", color: 'rgba(212, 178, 111, 0.06)' },
              { title: "INNOVATIVE DESIGNS", desc: "Blending tradition with modern trends.", color: 'rgba(92, 98, 122, 0.05)' },
              { title: "PASSION FOR TEXTILES", desc: "Every thread, woven with passion.", color: 'rgba(141, 111, 151, 0.06)' }
            ].map((box, i) => (
              <div 
                key={i} 
                className="p-5 lg:p-6 rounded-[20px] border border-[#EAE7ED] text-left flex flex-col justify-center transition-all duration-300 hover:shadow-lg bg-white"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: box.color }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                </div>
                <h4 className="text-[13px] font-bold text-[#222842] tracking-wider mb-1.5">{box.title}</h4>
                <p className="text-[12px] text-[#5C627A] leading-relaxed font-semibold m-0">{box.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. BOTTOM LIFESTYLE GRID ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-16 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/images/hero_textiles.png",
            "/images/home_textiles.png",
            "/images/premium_fabrics.png",
            "/images/ethnic_wear.png"
          ].map((img, i) => (
            <div key={i} className="aspect-square w-full overflow-hidden relative group bg-[#FAF9FC] rounded-[16px] border border-[#EAE7ED] shadow-sm">
              <img 
                src={img} 
                alt="Textile lifestyle showcase" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#222842]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="px-5 py-2.5 bg-white text-[11px] font-bold tracking-widest text-[#222842] uppercase rounded-full shadow-md">
                  THREADSPHERE
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
