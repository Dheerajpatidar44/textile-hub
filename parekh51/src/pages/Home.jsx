import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Users, MapPin, Smile, ShieldCheck, Truck, Headphones, Sliders, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const C = {
  primary: '#321437',        // Premium Olive Green
  primaryLight: '#4E2A52',
  primaryDark: '#200C24',
  accent: '#B8624E',         // Terracotta Accent
  accentLight: '#D3A196',
  gold: '#C2A478',
  bg: '#FAF8F5',             // Warm Soft Cream Background
  border: '#E6E4DF',
  stone: '#6C576E',          // Muted Sage Green
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png", bg: "#F4F7F6" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80", bg: "#FAF6F4" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80", bg: "#F7F5F9" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png", bg: "#FAF7F0" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png", bg: "#F4F7FA" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80", bg: "#FAF5F7" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80", bg: "#F5F7F8" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80", bg: "#FAF6F0" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/ethnic_wear.png", bg: "#FAF5F5" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png", bg: "#F5F7F5" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png", bg: "#FAF7F3" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80", bg: "#F6F5FA" }
];

export default function Home() {
  const categoriesScrollRef = useRef(null);

  const heroImages = [
    { name: "Sarees", image: "/images/ethnic_wear.png" },
    { name: "Men's Wear", image: "/images/hero_ethnic_man.png" },
    { name: "Bedsheets", image: "/images/hero_bedspread.png" },
    { name: "Suits", image: "/images/why_choose_family.png" },
    { name: "Dress Suits", image: "/images/popular_anarkali.png" }
  ];

  const extendedImages = [...heroImages, ...heroImages, ...heroImages];

  const [activeIndex, setActiveIndex] = useState(7); // Bedsheets (index 2 of middle set, i.e., index 7) starts as center active card
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      nextHero();
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, isTransitioning]);

  const nextHero = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev + 1);
  };

  const prevHero = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (activeIndex >= 10) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex - 5);
    } else if (activeIndex < 5) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex + 5);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const scrollLeft = () => {
    if (categoriesScrollRef.current) {
      categoriesScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (categoriesScrollRef.current) {
      categoriesScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-4">

      {/* ── 1. HERO SECTION (5 Premium Portrait Showcase Slider) ── */}
      <section className="relative w-full overflow-hidden pt-1 pb-10 [--card-width:180px] sm:[--card-width:240px] [--gap:16px] sm:[--gap:24px]">
        {/* Slider Wrapper */}
        <div className="relative w-full flex items-center justify-center max-w-[90rem] mx-auto px-6">
          
          {/* Prev Arrow */}
          <button 
            onClick={prevHero}
            className="absolute left-6 z-30 w-12 h-12 rounded-full border border-[#E6E4DF] bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#321437] hover:bg-[#321437] hover:text-white transition-all cursor-pointer shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Showcase Viewport Container */}
          <div className="w-full overflow-visible pt-1 pb-8 flex justify-center">
            
            {/* Sliding Track */}
            <div 
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(50% - var(--card-width) / 2 - (var(--card-width) + var(--gap)) * ${activeIndex}))`,
                transition: isTransitioning ? 'transform 0.75s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
              }}
              className="flex gap-[var(--gap)] w-max"
            >
              {extendedImages.map((item, idx) => {
                const isCenter = idx === activeIndex;
                const originalIndex = idx % 5;
                
                return (
                  <div
                    key={idx}
                    className={`relative overflow-hidden transition-all duration-700 shrink-0 w-[var(--card-width)] h-[430px] sm:h-[520px] translate-y-0 ${
                      isCenter 
                        ? 'z-20'
                        : 'z-10'
                    }`}
                    style={{
                      borderRadius: '24px',
                      backgroundColor: '#321437',
                      transitionProperty: 'transform, box-shadow',
                      boxShadow: isCenter 
                        ? '0 20px 40px -8px rgba(50, 20, 55, 0.5)' 
                        : '0 10px 24px -6px rgba(50, 20, 55, 0.38)'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full h-full object-cover select-none transition-opacity duration-700 ${
                        isCenter ? 'opacity-100' : 'opacity-60'
                      }`}
                    />
                    

                    {/* Active label in the center card only */}
                    {isCenter && (
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
                        <span className="bg-[#B8624E] text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-lg">
                          {item.name}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Next Arrow */}
          <button 
            onClick={nextHero}
            className="absolute right-6 z-30 w-12 h-12 rounded-full border border-[#E6E4DF] bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#321437] hover:bg-[#321437] hover:text-white transition-all cursor-pointer shadow-md"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </section>

      {/* ── 2. STATS SECTION (Pill Shaped horizontal box) ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-[40px] py-7 px-8 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-sm border border-[#E6E4DF] items-center text-center bg-white"
        >
          {[
            { val: "20+", desc: "Years of Excellence", icon: Award },
            { val: "500+", desc: "Retail Partners", icon: Users },
            { val: "100+", desc: "Cities Pan India", icon: MapPin },
            { val: "1,00,000+", desc: "Happy Customers", icon: Smile }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:flex-row lg:flex-row justify-center gap-4 border-r border-[#E6E4DF]/60 last:border-0 px-2">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#B8624E] shrink-0 bg-[#B8624E]/8"
              >
                <stat.icon size={16} strokeWidth={2} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl sm:text-3xl font-normal text-[#321437] font-serif mb-0.5 leading-none">{stat.val}</h3>
                <p className="text-[10px] text-[#6C576E] font-bold tracking-wider uppercase">{stat.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 3. WE SERVE / CATEGORIES SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pb-16">
        
        <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
          
          {/* Left Block: Green Wavy Banner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[32%] rounded-[60px_20px_60px_20px] p-8 sm:p-10 flex flex-col justify-between items-start text-white text-left overflow-hidden relative shadow-md shrink-0"
            style={{ background: C.primary }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="z-10">
              <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#C2A478] mb-4 block">WE SERVE</span>
              <h2 className="text-[34px] sm:text-[40px] font-normal leading-[1.1] font-serif mb-5 text-white">
                Every Industry, <br /> Every Need.
              </h2>
              <p className="text-[13px] text-white/80 leading-relaxed font-medium mb-8">
                From fashion to furnishings, we provide premium fabrics that bring creative design ideas to life.
              </p>
            </div>
            
            <Link
              to="/products"
              className="z-10 bg-white text-[#321437] hover:bg-[#B8624E] hover:text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-full px-7 py-3.5 inline-flex items-center gap-2"
            >
              EXPLORE SOLUTIONS
              <ArrowRight size={12} />
            </Link>
          </motion.div>

          {/* Right Block: 12 Category Cards Carousel / Row */}
          <div className="flex-1 min-w-0 flex flex-col justify-between relative">
            
            {/* Header controls for slider */}
            <div className="flex justify-between items-end mb-6 z-10">
              <h3 className="text-xl sm:text-2xl font-normal text-[#321437] font-serif ml-2">
                Browse Categories
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={scrollLeft}
                  className="w-10 h-10 rounded-full border border-[#E6E4DF] bg-white flex items-center justify-center text-[#321437] hover:bg-[#321437] hover:text-white transition-all cursor-pointer shadow-sm"
                  aria-label="Scroll left"
                >
                  <ArrowRight size={14} className="rotate-180" />
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-10 h-10 rounded-full border border-[#E6E4DF] bg-white flex items-center justify-center text-[#321437] hover:bg-[#321437] hover:text-white transition-all cursor-pointer shadow-sm"
                  aria-label="Scroll right"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Horizontally scrollable row of categories */}
            <div 
              ref={categoriesScrollRef}
              className="flex gap-5 overflow-x-auto pb-4 pt-1 px-2 scrollbar-none custom-sidebar-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', scrollSnapType: 'x mandatory' }}
            >
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="group flex-shrink-0 w-[240px] aspect-[1/1.25] rounded-[24px] border border-[#E6E4DF] bg-white overflow-hidden relative transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 snap-start"
                >
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>

                  {/* Centered pill label at bottom */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10 px-4">
                    <div className="bg-white text-[#321437] text-[10.5px] font-bold tracking-wide uppercase px-5 py-2.5 rounded-full shadow-md text-center max-w-full truncate transition-all duration-300 group-hover:bg-[#B8624E] group-hover:text-white">
                      {cat.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. WHY CHOOSE GHARANA WEAVES SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#B8624E] mb-3 block">
              WHY CHOOSE GHARANA WEAVES
            </span>
            <h2 className="text-[34px] sm:text-[42px] font-normal leading-[1.15] text-[#321437] mb-5 font-serif">
              Quality You Can Feel, <br /> Service You Can Trust.
            </h2>
            <p className="text-[13.5px] text-[#6C576E] leading-relaxed mb-8 font-semibold">
              We combine generations of traditional weaving wisdom with modern service standards to deliver premium fabrics that inspire confidence and stand the test of time.
            </p>

            <ul className="space-y-4">
              {[
                "Trusted by textile professionals across India",
                "Ethical & sustainable weaver community practices",
                "Innovation and strict checks in every weave"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-[#321437] text-[13px]">
                  <div className="w-5 h-5 rounded-full bg-[#321437]/8 flex items-center justify-center text-[#B8624E] shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Elegant Vertical Divider Column for Desktop */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center relative min-h-[300px]">
            <div className="w-[1px] h-[250px] bg-gradient-to-b from-transparent via-[#E6E4DF] to-transparent" />
            <div className="absolute w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E6E4DF] flex items-center justify-center shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C2A478]" />
            </div>
          </div>

          {/* Right Block (Wavy Terracotta Arch + images) */}
          <div className="lg:col-span-6 flex flex-row items-center justify-center gap-6 relative">
            
            {/* Soft decorative backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#B8624E]/6 rounded-full blur-[60px] -z-10 pointer-events-none" />

            {/* Terracotta Curved Text Arch banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-[200px] sm:w-[240px] aspect-[1/1.2] rounded-[120px_120px_20px_20px] bg-[#B8624E] p-8 flex flex-col justify-end text-white text-left shadow-lg shrink-0 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
              <div className="z-10 mb-4">
                <span className="text-[8px] tracking-[0.3em] font-bold text-white/60 uppercase mb-2 block">Since 2006</span>
                <p className="text-lg sm:text-xl font-normal font-serif text-white leading-snug">
                  Heritage in Every Thread, Excellence in Every Fabric.
                </p>
              </div>
              <div className="w-8 h-[1px] bg-white/40 z-10" />
            </motion.div>
 
            <div className="flex flex-col gap-6">
              {/* Image 1: Fabrics Stack */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-[140px] sm:w-[170px] aspect-[1/1.1] rounded-[24px] overflow-hidden border-4 border-white shadow-lg"
              >
                <img
                  src="/images/why_choose_fabrics.png"
                  alt="Aesthetic stacks of printed floral fabrics"
                  className="w-full h-full object-cover"
                />
              </motion.div>
 
              {/* Image 2: Traditional Family */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-[150px] sm:w-[180px] aspect-[1/1.2] rounded-[90px_90px_20px_20px] overflow-hidden border-4 border-white shadow-lg"
              >
                <img
                  src="/images/why_choose_family.png"
                  alt="Mother and daughter smiling in traditional ethnic dresses"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
 
          </div>

        </div>
      </section>


    </div>
  );
}
