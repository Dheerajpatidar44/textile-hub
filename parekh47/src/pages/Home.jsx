import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Truck, ShieldCheck, Award, Headphones, Shield, Globe, Star, Eye } from 'lucide-react';

const C = {
  primary: '#0D3E3C',        // Elegant Deep Teal
  primaryLight: '#1E5957',
  primaryDark: '#061F1E',
  accent: '#A75D3F',         // Terracotta/Copper Accent
  accentLight: '#C67E5F',
  gold: '#A75D3F',
  bg: '#FAF8F5',             // Warm Cream Base
  border: '#E5ECE9',         // Soft Sage border
  stone: '#66807B',          // Sage Slate Grey
  soil: '#0D3E3C',
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    { image: "/images/hero_riwaayat.png", alt: "Crafted Heritage" },
    { image: "/images/hero_men_suit.png", alt: "Tailored Luxury Suit" },
    { image: "/images/ethnic_wear.png", alt: "Timeless Weaves" },
    { image: "/images/hero_men_casual.png", alt: "Modern Casual Shirt & Jeans" },
    { image: "/images/popular_lehenga.png", alt: "Modern Elegance" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full pt-4 pb-12 lg:pt-6 lg:pb-20 px-6 sm:px-8 lg:px-14 bg-[#FAF8F5]">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left flex flex-col items-start z-10">
            <span
              className="text-[14px] font-medium italic mb-2 tracking-wide block"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: C.accent }}
            >
              Crafted with Heritage,
            </span>
            <h1
              className="text-[44px] sm:text-[56px] lg:text-[68px] font-normal leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary }}
            >
              Made for <br />Modern Living.
            </h1>

            {/* Elegant wavy path divider line */}
            <div className="mb-6 opacity-85">
              <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                <path d="M1 4.5C6.5 1.5 8.5 1.5 14 4.5C19.5 7.5 21.5 7.5 27 4.5C32.5 1.5 34.5 1.5 40 4.5C45.5 7.5 47.5 7.5 53 4.5C56.5 2.5 58.5 3 59 3.5" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#66807B] mb-8 leading-relaxed max-w-md font-medium">
              Experience the finest quality fabrics, curated to bring elegance, comfort and tradition to your life.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-full shadow-md text-white"
                style={{ background: C.primary }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
              >
                EXPLORE COLLECTION
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-full border border-[#0D3E3C] text-[#0D3E3C]"
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; }}
              >
                VIEW CATALOGUE
              </Link>
            </div>
          </div>

          {/* Right Arched Image Column */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full relative">
            {/* Elegant Arch Image Container with swipe up vertical slider */}
            <div className="relative w-full max-w-[460px] aspect-[0.92] overflow-hidden rounded-t-[200px] shadow-sm border border-[#E5ECE9] bg-[#FAF8F5]">
              <div className="w-full h-full relative overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].alt}
                      className="w-full h-full object-cover scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-[#0D3E3C]/5 mix-blend-overlay"></div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider dots (vertical) */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className="w-2 transition-all duration-300 cursor-pointer rounded-full"
                    style={{
                      background: currentSlide === idx ? C.accent : 'rgba(255, 255, 255, 0.5)',
                      height: currentSlide === idx ? 20 : 8,
                      border: '1px solid rgba(0,0,0,0.05)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Visual leaf ornament graphic on left side */}
            <div className="absolute left-[-20px] bottom-10 opacity-30 select-none hidden sm:block pointer-events-none">
              <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
                <path d="M10 110C25 80 40 40 10 10C35 45 40 85 10 110Z" fill={C.accent} />
                <path d="M20 100C40 75 50 35 25 20C45 50 48 85 20 100Z" fill={C.primary} />
              </svg>
            </div>
          </div>

        </div>
      </section>



      {/* ── 3. TWO-COLUMN SPLIT PROMO SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Wider Card (Background Image Theme) */}
          <div className="lg:col-span-8">
            <div
              className="w-full h-full rounded-[32px] p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center min-h-[360px]"
              style={{ 
                border: '1px solid rgba(167, 93, 63, 0.12)', 
                boxShadow: '0 12px 30px rgba(167, 93, 63, 0.07)' 
              }}
            >
              {/* Background Image - static, no hover zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/summer_special.png"
                  alt="New Collection Background"
                  className="w-full h-full object-cover"
                />
                {/* Orange/Terracotta brand overlay for readability - softened */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A75D3F]/75 via-[#A75D3F]/45 to-black/20" />
              </div>

              {/* Content overlay */}
              <div className="text-left z-10 relative max-w-lg">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-95 mb-2.5 block">NEW COLLECTION</span>
                <h3 className="text-[32px] sm:text-[38px] font-normal leading-[1.15] mb-4 font-serif text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Timeless Weaves, <br />
                  Thoughtfully Designed.
                </h3>
                <p className="text-[13px] text-white/80 mb-8 leading-relaxed font-medium max-w-sm">
                  From everyday comfort to timeless elegance, our fabrics are designed to inspire and last.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#A75D3F] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#0D3E3C] rounded-full shadow-md"
                >
                  DISCOVER NOW
                </Link>
              </div>
            </div>
          </div>

          {/* Right Narrower Card (Sage Green Theme) */}
          <div className="lg:col-span-4">
            <div
              className="w-full h-full rounded-[32px] p-8 sm:p-10 text-[#0D3E3C] relative overflow-hidden flex flex-col justify-between"
              style={{ background: '#E5ECE9', border: '1px solid rgba(13,62,60,0.04)' }}
            >
              <div className="text-left z-10 relative flex flex-col h-full justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3E3C] mb-2.5 block">TRADE SERVICES</span>
                  <h3 className="text-[32px] font-normal leading-snug mb-4 font-serif text-[#0D3E3C]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Growing Together <br />
                    in Every Thread
                  </h3>
                  <p className="text-[13px] text-[#66807B] mb-8 leading-relaxed font-semibold">
                    We offer end-to-end textile solutions for your business growth and success.
                  </p>
                </div>
                <Link
                  to="/trade-enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 border border-[#0D3E3C] text-[#0D3E3C] hover:bg-[#0D3E3C] hover:text-white"
                >
                  EXPLORE SERVICES
                </Link>
              </div>
              {/* Soft Leaf watermark */}
              <div className="absolute bottom-2 right-2 opacity-15 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-1.5-4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. WHY CHOOSE RIWAAYAT HUB SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Title Column (col-span-3) */}
          <div className="lg:col-span-3 text-left flex flex-col items-start">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#A75D3F] mb-3 flex items-center gap-1.5"
            >
              WHY CHOOSE RIWAAYAT HUB
              <span className="opacity-40 text-neutral-400 text-[13px] tracking-normal font-normal">
                <svg width="24" height="6" viewBox="0 0 24 6" fill="none" className="inline-block">
                  <path d="M1 3C4 1 6 5 9 3C12 1 14 5 17 3C20 1 22 5 23 3" stroke="#A75D3F" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </span>
            <h2
              className="text-[34px] leading-[1.25] text-[#0D3E3C] font-serif font-medium tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A Commitment <br />
              Woven in Trust.
            </h2>

            {/* Elegant organic sage-green brush stroke underline */}
            <div className="w-full max-w-[200px] mt-4 opacity-80">
              <svg viewBox="0 0 200 12" fill="none" className="w-full h-2">
                <path d="M2 8C40 3 130 1 198 2" stroke="#66807B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Features Column (col-span-9) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {[
              {
                image: "/images/why_choose_heritage.png",
                title: "HERITAGE OF QUALITY",
                desc: "Decades of expertise in delivering world-class textiles.",
                isFirst: true
              },
              {
                image: "/images/why_choose_innovation.png",
                title: "INNOVATION IN EVERY FIBER",
                desc: "Blending tradition with modern technology for better tomorrow."
              },
              {
                image: "/images/why_choose_sustainability.png",
                title: "SUSTAINABLE & RESPONSIBLE",
                desc: "Committed to ethical practices and a greener planet."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col text-left md:px-6 ${idx > 0 ? 'md:border-l border-[#E5ECE9]' : ''}`}
              >
                {/* Image Container with rounded corners */}
                <div className="w-full aspect-[16/10] overflow-hidden rounded-[20px] mb-5 shadow-sm border border-[#E5ECE9]/40 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Title */}
                <h4 className="text-[11px] font-bold tracking-wider text-[#A75D3F] uppercase mb-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[13px] text-[#66807B] leading-relaxed m-0 font-medium max-w-[240px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. SHOP BY CATEGORY SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-20">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5ECE9]">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#A75D3F] rounded-full" />
            <h2 className="text-[28px] font-normal text-[#0D3E3C] tracking-tight font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Shop by Category
            </h2>
          </div>
          <Link
            to="/products"
            className="text-[11px] font-bold tracking-widest uppercase text-[#A75D3F] hover:text-[#0D3E3C] transition-colors flex items-center gap-1.5"
          >
            VIEW ALL <ArrowRight size={12} />
          </Link>
        </div>

        {/* Categories Grid - 12 Categories with rounded cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group bg-white border border-[#E5ECE9] p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-[#E5ECE9] bg-[#FAF8F5]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-[12px] font-bold text-[#0D3E3C] group-hover:text-[#A75D3F] transition-colors leading-tight tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 6. FEATURE BADGES ROW ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mt-8 mb-16 relative z-20">
        <div
          className="w-full bg-white py-8 px-6 lg:px-8 rounded-[32px] border border-[#E5ECE9] shadow-[0_15px_40px_rgba(13,62,60,0.03)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5ECE9]">
            {[
              { icon: Award, title: "Premium Quality", desc: "Finest fabrics with unmatched quality" },
              { icon: Truck, title: "Pan India Delivery", desc: "Safe & timely delivery across India" },
              { icon: Globe, title: "Wide Range", desc: "Diverse collection for every need" },
              { icon: Headphones, title: "Dedicated Support", desc: "24/7 assistance for all your queries" },
              { icon: ShieldCheck, title: "Secure & Trusted", desc: "Safe transactions, complete peace of mind" }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center px-4 ${idx >= 2 ? 'pt-6 md:pt-0' : ''} ${idx === 2 ? 'col-span-2 md:col-span-1' : ''} lg:pt-0`}>
                <div className="w-12 h-12 rounded-full border border-[#A75D3F]/50 bg-white flex items-center justify-center text-[#A75D3F] shrink-0 mb-3.5">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-[12px] font-bold text-[#0D3E3C] tracking-wider uppercase mb-1.5">{item.title}</h4>
                <p className="text-[12px] sm:text-[13px] text-[#66807B] m-0 leading-relaxed font-normal max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
