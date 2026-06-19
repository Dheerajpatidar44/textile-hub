import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const C = {
  primary: '#25524B',        // Deep Teal
  primaryLight: '#347067',
  primaryDark: '#193833',
  accent: '#C5A880',         // Soft Gold Accent
  accentLight: '#D5BFA0',
  gold: '#C5A880',
  bg: '#FAF8F5',             // Warm Soft Cream Background
  border: '#EFECE6',
  stone: '#5A6E6A',          // Muted Teal Grey
  soil: '#25524B',
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png", bg: "#F4F7F6" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80", bg: "#FAF6F4" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80", bg: "#F7F5F9" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png", bg: "#FAF7F0" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png", bg: "#F4F7FAF" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80", bg: "#FAF5F7" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80", bg: "#F5F7F8" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80", bg: "#FAF6F0" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/ethnic_wear.png", bg: "#FAF5F5" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png", bg: "#F5F7F5" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png", bg: "#FAF7F3" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80", bg: "#F6F5FAF" }
];

const popularCollections = [
  { name: "Classic Banarasi Silk Saree", category: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Fine Egyptian Giza Cotton", category: "Shirting", image: "/images/popular_cotton_fabric.png" },
  { name: "Premium Velvet Upholstery", category: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80" },
  { name: "Luxurious Egyptian Cotton Bedsheet", category: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Kid's Festive Cotton Dhoti Kurta", category: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
  { name: "Premium Silk Sherwani Set", category: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" }
];

const blogs = [
  { title: "Top 10 Saree Trends This Season", date: "May 18, 2026", image: "/images/popular_banarasi_saree.png" },
  { title: "How to Choose the Perfect Fabric", date: "May 10, 2026", image: "/images/premium_fabrics.png" },
  { title: "Sustainable Textiles: The Future", date: "May 05, 2026", image: "/images/popular_cotton_fabric.png" }
];

const heroSlides = [
  { image: "/images/hero_woman_saree_fabrics.png", alt: "Elegant Saree Fabric Curation" },
  { image: "/images/ethnic_wear.png", alt: "Timeless Weaves" },
  { image: "/images/popular_lehenga.png", alt: "Modern Elegance" },
  { image: "/images/men_ethnic_wear.png", alt: "Mens Ethnic Wear" },
  { image: "/images/popular_banarasi_saree.png", alt: "Classic Banarasi Silk Saree" }
];

export default function Home() {
  const collectionRowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollCollections = (direction) => {
    if (collectionRowRef.current) {
      const scrollAmount = 320;
      collectionRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION (Asymmetrical Premium Layout) ── */}
      <section className="relative w-full overflow-hidden bg-[#FAF8F5] py-10 lg:py-16">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C5A880] uppercase">
                  Crafting Luxury
                </span>
                <div className="w-8 h-[1px] bg-[#C5A880]" />
              </div>
              
              <h2 className="text-[44px] sm:text-[56px] lg:text-[68px] font-light leading-[1.1] text-[#25524B] mb-6 tracking-tight font-serif">
                Exceptional Fabrics, <br />
                <span className="font-serif">Timeless Quality,</span> <br />
                Endless <span style={{ color: C.accent }}>Possibilities.</span>
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#5A6E6A] mb-8 leading-relaxed max-w-md font-semibold">
                Explore India's largest collection of premium textiles crafted for every story. Beautifully woven heritage meets modern design.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#25524B] text-white text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#C5A880] rounded-full shadow-md"
                >
                  EXPLORE COLLECTIONS
                  <ArrowRight size={12} />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-[#25524B] text-[#25524B] text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#25524B] hover:text-white rounded-full"
                >
                  VIEW CATALOGUE
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Image Section */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[500px] aspect-[1.15/1]"
            >
              {/* Geometric leaf outline graphics behind image */}
              <div className="absolute -top-6 -left-6 w-16 h-16 opacity-10 bg-[#25524B] rounded-full" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-[0.03] bg-[#25524B] border-4 border-[#25524B] rounded-full" />
              
              {/* Asymmetrical shape mask container with Slider */}
              <div 
                className="w-full h-full overflow-hidden shadow-2xl border-4 border-white rounded-[120px_30px_120px_30px] relative bg-[#FAF8F5]"
                style={{ boxShadow: '0 24px 60px rgba(37,82,75,0.08)' }}
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Slider navigation dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className="w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 border border-white/20"
                      style={{
                        background: currentSlide === idx ? '#C5A880' : 'rgba(255, 255, 255, 0.4)',
                        transform: currentSlide === idx ? 'scale(1.2)' : 'scale(1)',
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── 2. CATEGORY LIST SECTION ── */}
      <section className="bg-white border-y border-[#EFECE6] py-14">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="text-left mb-10 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-[36px] sm:text-[44px] font-light text-[#25524B] tracking-tight font-serif leading-tight">
                Shop By Category
              </h2>
            </div>
            <Link to="/products" className="text-[11px] font-bold tracking-widest text-[#C5A880] hover:text-[#25524B] transition-colors mt-2 md:mt-0 flex items-center gap-1.5 uppercase">
              View All <ArrowRight size={12} />
            </Link>
          </div>

          {/* Grid of 12 categories with full image background card styling */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group relative overflow-hidden aspect-[4/5] rounded-[24px] border border-[#EFECE6] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:via-black/50 transition-colors duration-500" />
                
                {/* Text overlaid on the bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-left flex flex-col justify-end h-[60%]">
                  <span className="text-[14px] sm:text-[16px] font-bold text-white font-serif leading-tight tracking-wide group-hover:text-[#C5A880] transition-colors duration-300">
                    {cat.name}
                  </span>
                  
                  {/* Explore button indicator */}
                  <span className="inline-flex items-center gap-1 text-[9px] text-white/70 font-extrabold uppercase tracking-widest mt-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    Explore <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── 4. ABOUT / SERVICES / QUOTATION GRID SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Crafting Textiles, Building Trust (About Card) */}
          <div className="lg:col-span-4 flex">
            <div 
              className="w-full rounded-3xl p-8 flex flex-col justify-between border border-[#EFECE6] text-left"
              style={{ background: '#F5F5F3' }}
            >
              <div>
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#C5A880] uppercase mb-2 block">ABOUT US</span>
                <h3 className="text-[26px] font-normal leading-tight text-[#25524B] mb-4 font-serif">
                  Crafting Textiles, <br />
                  Building Trust
                </h3>
                <p className="text-[13px] text-[#5A6E6A] leading-relaxed mb-6 font-semibold">
                  At The Fabric Atelier, we blend tradition with innovation to deliver premium fabrics that inspire and endure.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25524B] text-white text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#C5A880] rounded-full shadow-sm"
                >
                  KNOW MORE ABOUT US
                </Link>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden h-40 border border-[#EFECE6]">
                <img
                  src="/images/about_atelier.png"
                  alt="Atelier textiles crafting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Solutions for Textile Professionals (Services Card) */}
          <div className="lg:col-span-4 flex">
            <div 
              className="w-full rounded-3xl p-8 flex flex-col justify-between border border-[#EFECE6] text-left"
              style={{ background: '#F8F4EE' }}
            >
              <div>
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#C5A880] uppercase mb-2 block">TRADE SERVICES</span>
                <h3 className="text-[26px] font-normal leading-tight text-[#25524B] mb-4 font-serif">
                  Solutions for <br />
                  Textile Professionals
                </h3>
                <p className="text-[13px] text-[#5A6E6A] leading-relaxed mb-6 font-semibold">
                  Explore our range of B2B services and customizable supply orders designed to grow your business operations.
                </p>
                <Link
                  to="/trade-enquiry"
                  className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest uppercase text-[#25524B] hover:text-[#C5A880] transition-colors"
                >
                  EXPLORE SERVICES <ArrowRight size={12} />
                </Link>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden h-40 border border-[#EFECE6]">
                <img
                  src="/images/services_professionals.png"
                  alt="Textile business solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Column 3: Quotation & Auction Rows */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top row: e-Quotation */}
            <div 
              className="flex-1 rounded-3xl p-7 flex items-center justify-between border border-[#EFECE6] text-left overflow-hidden relative"
              style={{ background: '#FFFDF9' }}
            >
              <div className="flex-1 pr-4 z-10">
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#C5A880] uppercase mb-1 block">e-QUOTATION</span>
                <h3 className="text-[20px] font-bold text-[#25524B] mb-1 font-serif">Get Instant Quotation</h3>
                <p className="text-[12px] text-[#5A6E6A] leading-normal mb-3 font-semibold">
                  Quick, transparent, and reliable wholesale quotation.
                </p>
                <Link
                  to="/e-quotation"
                  className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-widest uppercase text-[#25524B] hover:text-[#C5A880] transition-colors"
                >
                  REQUEST QUOTE <ArrowRight size={11} />
                </Link>
              </div>
              <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden border border-[#EFECE6] z-10 bg-white">
                <img
                  src="/images/quotation_form.png"
                  alt="Invoice clipboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom row: e-Auction */}
            <div 
              className="flex-1 rounded-3xl p-7 flex items-center justify-between border border-[#EFECE6] text-left overflow-hidden relative"
              style={{ background: '#F3F6FA' }}
            >
              <div className="flex-1 pr-4 z-10">
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#C5A880] uppercase mb-1 block">LIVE e-AUCTION</span>
                <h3 className="text-[20px] font-bold text-[#25524B] mb-1 font-serif">Join Live Textile Auctions</h3>
                <p className="text-[12px] text-[#5A6E6A] leading-normal mb-3 font-semibold">
                  Bid on premium surplus textile lots from verified sellers.
                </p>
                <Link
                  to="/e-auction"
                  className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-widest uppercase text-[#25524B] hover:text-[#C5A880] transition-colors"
                >
                  VIEW AUCTIONS <ArrowRight size={11} />
                </Link>
              </div>
              <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden border border-[#EFECE6] z-10 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=80"
                  alt="Auction gavel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. POPULAR COLLECTIONS SECTION ── */}
      <section className="bg-white border-y border-[#EFECE6] py-16">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#EFECE6]">
            <div>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#C5A880] uppercase mb-1 block">DISCOVER</span>
              <h2 className="text-[32px] font-normal text-[#25524B] tracking-tight font-serif">Our Popular Collections</h2>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => scrollCollections('left')}
                style={{ border: `1px solid ${C.border}`, color: C.primary }}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#25524B] hover:text-white transition-colors cursor-pointer bg-white"
                aria-label="Previous Collection"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => scrollCollections('right')}
                style={{ border: `1px solid ${C.border}`, color: C.primary }}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#25524B] hover:text-white transition-colors cursor-pointer bg-white"
                aria-label="Next Collection"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Scrolling Collection Row */}
          <div 
            ref={collectionRowRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {popularCollections.map((product, idx) => (
              <div 
                key={idx}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start group text-left rounded-3xl"
                style={{
                  overflow: 'hidden',
                  background: 'white', border: `1px solid ${C.border}`,
                  boxShadow: '0 4px 20px rgba(37,82,75,0.02)'
                }}
              >
                <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                  <img src={product.image} alt={product.name} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    className="transition-transform duration-1000 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#25524B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                </div>
                <div style={{ padding: '24px' }}>
                  <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.accent, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                    {product.category}
                  </span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.primary, margin: '0 0 20px', lineHeight: 1.4, fontFamily: "'Cormorant Garamond', serif" }}>
                    {product.name}
                  </h3>
                  <Link
                    to={`/products?category=${encodeURIComponent(product.category)}`}
                    style={{
                      display: 'block', textDecoration: 'none', textAlign: 'center',
                      width: '100%', padding: '12px 14px', fontSize: 11, fontWeight: 700,
                      cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                      border: `1.5px solid ${C.border}`,
                      borderRadius: 16,
                      background: 'transparent', color: C.primary,
                      transition: 'all 0.2s ease',
                      textTransform: 'uppercase', letterSpacing: '0.05em'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}
