import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronRight, ChevronLeft, FileText, Gavel, Phone, Users, 
  BookOpen, Bell, ShieldCheck, CreditCard, Truck, Headphones, 
  RotateCcw, Sparkles, Layers, Scissors, Feather, Bed, Heart, Briefcase, Shirt, 
  Flower2, User, Baby, Sofa, Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: 'Sarees', icon: Sparkles },
  { name: 'Leggings', icon: Scissors },
  { name: 'Kurtis', icon: Layers },
  { name: 'Dress Suits', icon: Feather },
  { name: 'Bedsheets & Linen', icon: Bed },
  { name: 'Hosiery Items', icon: Heart },
  { name: 'Suiting', icon: Briefcase },
  { name: 'Shirting', icon: Shirt },
  { name: 'Formal & Ethnic Wear for Women', icon: Flower2 },
  { name: 'Formal & Ethnic Wear for Men', icon: User },
  { name: 'Formal & Ethnic Wear for Children', icon: Baby },
  { name: 'Home Upholstery & Furnishing', icon: Sofa },
];

const featuredCollections = [
  { name: 'Festive Collection', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800' },
  { name: 'Wedding Collection', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
  { name: 'Everyday Essentials', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&auto=format&fit=crop&q=80' },
  { name: 'New Arrivals', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80' },
];

const trustBadges = [
  { text: '100% Genuine Products', icon: ShieldCheck },
  { text: 'Secure Payments', icon: CreditCard },
  { text: 'Pan India Delivery', icon: Truck },
  { text: 'Dedicated Support', icon: Headphones },
  { text: 'Easy Return Policy', icon: RotateCcw },
  { text: 'Trusted by Thousands', icon: Users },
];

const heroSlides = [
  {
    image: '/images/heroimage.png',
    titleMain: 'Where Tradition',
    titleAccent: 'Meets Elegance',
  },
  {
    image: '/images/heromenwomen.png',
    titleMain: 'Exquisite Weaves',
    titleAccent: 'For Every Occasion',
  },
  {
    image: '/images/hero3.png',
    titleMain: 'Crafted Heritage',
    titleAccent: 'Styled for Modernity',
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="w-full pb-16 bg-[#FAF6F0]" style={{ fontFamily: "'Outfit', sans-serif" }}>
      
      {/* ── HERO BANNER & CATEGORY LAYOUT ── */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* LEFT SIDEBAR: Shop by Category */}
          <aside className="lg:col-span-1 flex flex-col justify-between bg-[#2A083E] border border-[rgba(197,160,89,0.3)] overflow-hidden shadow-sm h-[520px] rounded-2xl">
            <div className="p-5 flex items-center gap-3 border-b border-[rgba(197,160,89,0.2)] bg-[#1C032B]">
              <Menu size={18} className="text-[#C5A059]" />
              <h3 className="font-extrabold text-base tracking-wide text-white uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Shop by Category
              </h3>
            </div>
            
            {/* Scrollable category list */}
            <div className="flex-grow overflow-y-auto px-2 py-3 scrollbar-thin">
              <ul className="space-y-1">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/products?category=${encodeURIComponent(cat.name)}`}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#1C032B]/50 transition-colors group text-left rounded-lg"
                    >
                      <div className="w-8 h-8 bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center shrink-0 border border-[rgba(197,160,89,0.2)] group-hover:bg-[#C5A059] group-hover:text-[#1C032B] transition-colors duration-200 rounded-md">
                        <cat.icon size={15} />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-[13px] font-bold text-[#FAF6F0] truncate group-hover:text-[#C5A059] transition-colors">{cat.name}</p>
                      </div>
                      <ChevronRight size={13} className="text-[#C5A059] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#1C032B] border-t border-[rgba(197,160,89,0.2)]">
              <Link
                to="/products"
                className="w-full py-3 px-4 text-xs font-bold text-center text-[#1C032B] bg-[#C5A059] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 tracking-wider uppercase rounded-lg"
              >
                View All Categories <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          {/* RIGHT HERO SLIDER */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-sm h-[520px] bg-[#FAF6F0] border border-[#EADBC8]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.6 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={heroSlides[currentSlide].image}
                  alt="Textile Mall Banner"
                  className="absolute inset-0 w-full h-full object-cover object-center filter saturate-[0.95]"
                />
                
                {/* Visual Premium Gradient Mask */}
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: 'linear-gradient(to right, rgba(28, 3, 43, 0.95) 0%, rgba(28, 3, 43, 0.5) 60%, rgba(28, 3, 43, 0.1) 100%)'
                  }} 
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                {/* Slider Inner Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12 md:p-16 text-left z-10 max-w-2xl">
                  
                  <div className="mt-8">
                    <p className="text-[#C5A059] text-[11px] font-extrabold tracking-[0.25em] uppercase mb-3">
                      Welcome to Mayura Royal Textile Mall
                    </p>
                    
                    <h1 className="leading-[1.1] mb-5 flex flex-col text-left">
                      <span className="text-[#FAF6F0] text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {heroSlides[currentSlide].titleMain}
                      </span>
                      <span className="text-[#C5A059] text-4xl sm:text-5xl md:text-6xl font-light italic mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {heroSlides[currentSlide].titleAccent}
                      </span>
                    </h1>

                    <p className="text-[#FAF6F0]/80 text-xs sm:text-sm font-light tracking-wide leading-relaxed mb-8 max-w-md">
                      India's most trusted heritage textile destination for quality, variety and value. Weaving royal craftsmanship with contemporary style.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/products"
                        className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-extrabold tracking-wider uppercase text-[#1C032B] bg-[#C5A059] hover:bg-[#D4AF37] transition-all hover:scale-105 shadow-md shadow-[#C5A059]/20 rounded-lg"
                      >
                        Explore Collections &rarr;
                      </Link>
                      <Link
                        to="/trade-enquiry"
                        className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-extrabold tracking-wider uppercase text-[#FAF6F0] bg-[#2A083E] border-2 border-[rgba(197,160,89,0.3)] hover:bg-[#1C032B] transition-all hover:scale-105 rounded-lg"
                      >
                        Trade Enquiry
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Arrows */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center shadow-md transition-all z-20 cursor-pointer hover:scale-110 rounded-full"
              style={{
                background: '#1C032B',
                border: '1.5px solid #C5A059',
                color: '#C5A059',
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center shadow-md transition-all z-20 cursor-pointer hover:scale-110 rounded-full"
              style={{
                background: '#1C032B',
                border: '1.5px solid #C5A059',
                color: '#C5A059',
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>

            {/* Pagination Indicators "01 02 03" */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 z-20 flex items-center gap-4 text-xs font-bold text-[#FAF6F0]">
              {heroSlides.map((_, i) => {
                const isActive = i === currentSlide;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 py-1 border-b-2 tracking-widest ${
                      isActive ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-white/40'
                    }`}
                  >
                    0{i + 1}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── GRID DETAILS: WHY CHOOSE & FEATURED ── */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Column 1 (Why Choose): Width 3/12 */}
            <div className="lg:col-span-3 flex flex-col justify-between bg-[#2A083E] border border-[#C5A059]/30 text-white p-8 shadow-sm text-left relative overflow-hidden rounded-2xl">
              {/* Elegant floral outline SVG decoration background */}
              <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none translate-x-1/4 translate-y-1/4">
                <svg width="250" height="250" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C40 30 10 40 0 50 C10 60 40 70 50 100 C60 70 90 60 100 50 C90 40 60 30 50 0 Z" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-normal leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Why Choose<br/>Mayura Royal Textile Mall?
                </h3>
                
                <ul className="space-y-4">
                  {[
                    'Unmatched Quality',
                    'Vast Product Range',
                    'Best Wholesale Prices',
                    'Timely Deliveries',
                    'Pan India Presence'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="w-5 h-5 bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0 rounded">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 relative z-10">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center w-full py-3.5 px-6 bg-[#C5A059] text-[#1C032B] hover:bg-[#D4AF37] transition-all text-xs font-bold tracking-wider uppercase shadow-md shadow-black/10 rounded-lg"
                >
                  Know More &rarr;
                </Link>
              </div>
            </div>

            {/* Column 2 (Featured): Width 9/12 */}
            <div className="lg:col-span-9 flex flex-col bg-white border border-[#EADBC8] p-6 rounded-2xl shadow-sm text-left justify-between min-h-[380px]">
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#EADBC8]/60">
                <h3 className="font-extrabold text-lg tracking-wide text-[#2A083E] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Featured Collections
                </h3>
                <Link to="/products" className="text-xs font-bold text-[#C5A059] hover:underline flex items-center gap-1">
                  View All &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
                {featuredCollections.map((col, idx) => (
                  <Link
                    to="/products"
                    key={idx}
                    className="group relative rounded-xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-full block shadow-sm border border-[#EADBC8]/40"
                  >
                    <img
                      src={col.image}
                      alt={col.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C032B]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <h4 className="text-white text-sm font-extrabold leading-tight tracking-wide uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {col.name.split(' ')[0]} <br/> {col.name.split(' ')[1] || 'Collection'}
                      </h4>
                      <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] mt-2 group-hover:bg-[#2A083E] transition-colors">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── TRUST BADGES ROW BANNER ── */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 border-y border-[#EADBC8]/60 my-4 bg-white shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-9 h-9 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-[12px] font-bold text-[#2A083E] tracking-wide uppercase text-left leading-tight">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── BOTTOM CARDS GRID (B2B PORTALS) ── */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: E-Quotation */}
          <div className="border border-[rgba(197,160,89,0.3)] overflow-hidden flex flex-row items-center justify-between shadow-sm h-60 hover:shadow-md transition-all duration-300 relative group bg-gradient-to-r from-[#2A083E] to-[#1C032B] rounded-2xl">
            <div className="w-[55%] h-full flex flex-col justify-between p-6 sm:p-8 relative z-10 text-left">
              <div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  e-Quotation
                </h3>
                <p className="text-xs text-[#FAF6F0]/90 font-light leading-relaxed">
                  Get instant wholesale prices in seconds.
                </p>
              </div>
              <Link
                to="/e-quotation"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-xs font-bold bg-[#C5A059] text-[#1C032B] border border-[#C5A059] hover:bg-[#D4AF37] transition-all self-start shadow-sm rounded-lg"
              >
                Get Quote &rarr;
              </Link>
            </div>
            <div className="w-[45%] h-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&fit=crop&q=80"
                alt="e-Quotation clipboard"
                className="absolute inset-0 w-full h-full object-cover object-left"
              />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1C032B] to-transparent z-10" />
            </div>
          </div>

          {/* Card 2: E-Auction */}
          <div className="border border-[rgba(197,160,89,0.3)] overflow-hidden flex flex-row items-center justify-between shadow-sm h-60 hover:shadow-md transition-all duration-300 relative group bg-gradient-to-r from-[#2A083E] to-[#1C032B] rounded-2xl">
            <div className="w-[55%] h-full flex flex-col justify-between p-6 sm:p-8 relative z-10 text-left text-white">
              <div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  e-Auction
                </h3>
                <p className="text-xs text-[#FAF6F0]/90 font-light leading-relaxed">
                  Bid & win premium products.
                </p>
              </div>
              <Link
                to="/e-auction"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-xs font-bold bg-[#C5A059] text-[#1C032B] border border-[#C5A059] hover:bg-[#D4AF37] transition-all self-start shadow-sm rounded-lg"
              >
                Join Auction &rarr;
              </Link>
            </div>
            <div className="w-[45%] h-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&fit=crop&q=80"
                alt="E-Auction Gavel"
                className="absolute inset-0 w-full h-full object-cover object-left"
              />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1C032B] to-transparent z-10" />
            </div>
          </div>

          {/* Card 3: Trade Circular */}
          <div className="border border-[rgba(197,160,89,0.3)] overflow-hidden flex flex-row items-center justify-between shadow-sm h-60 hover:shadow-md transition-all duration-300 relative group bg-gradient-to-r from-[#2A083E] to-[#1C032B] rounded-2xl">
            <div className="w-[55%] h-full flex flex-col justify-between p-6 sm:p-8 relative z-10 text-left">
              <div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Trade Circular
                </h3>
                <p className="text-xs text-[#FAF6F0]/90 font-light leading-relaxed">
                  Stay updated with latest offers & schemes.
                </p>
              </div>
              <Link
                to="/trade-circular"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-xs font-bold bg-[#C5A059] text-[#1C032B] border border-[#C5A059] hover:bg-[#D4AF37] transition-all self-start shadow-sm rounded-lg"
              >
                View Updates &rarr;
              </Link>
            </div>
            <div className="w-[45%] h-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&fit=crop&q=80"
                alt="Trade Circular Bell"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1C032B] to-transparent z-10" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
