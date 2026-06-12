import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronRight, ChevronLeft, FileText, Gavel, Phone, Users, 
  BookOpen, Bell, Map, ShieldCheck, CreditCard, Truck, Headphones, 
  RotateCcw, Star, Quote, ArrowUpRight, Menu,
  Sparkles, Layers, Scissors, Feather, Bed, Heart, Briefcase, Shirt, 
  Flower2, User, Baby, Sofa
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

const quickAccessItems = [
  { name: 'E-Quotation', subtitle: 'Get Instant Quote', icon: FileText, path: '/e-quotation' },
  { name: 'E-Auction', subtitle: 'B2B Auction Platform', icon: Gavel, path: '/e-auction' },
  { name: 'Trade Enquiry', subtitle: 'Connect With Us', icon: Phone, path: '/trade-enquiry' },
  { name: 'Retail Management', subtitle: 'Smart Solutions', icon: Users, path: '/retail-management' },
  { name: 'Trade Circular', subtitle: 'Latest Updates', icon: BookOpen, path: '/trade-circular' },
  { name: 'Notice Board', subtitle: 'Important Notices', icon: Bell, path: '/notice-board' },
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
    <div className="w-full pb-16 bg-[#FDFBF7]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* ── HERO BANNER & CATEGORY LAYOUT ── */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* LEFT SIDEBAR: Shop by Category */}
          <aside className="lg:col-span-1 flex flex-col justify-between bg-white rounded-3xl border border-[#EAE3D9] overflow-hidden shadow-sm h-[520px]">
            <div className="p-5 flex items-center gap-3 border-b border-[#EAE3D9]/60 bg-[#FDFBF7]">
              <Menu size={18} className="text-[#4E6C50]" />
              <h3 className="font-extrabold text-base tracking-wide text-[#2C362B] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
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
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-[#F5EFE6] transition-colors group text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#4E6C50]/10 text-[#4E6C50] flex items-center justify-center shrink-0 border border-[#EAE3D9]/60 group-hover:bg-[#4E6C50] group-hover:text-white transition-colors duration-200">
                        <cat.icon size={15} />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-[13px] font-bold text-[#2C362B] truncate group-hover:text-[#4E6C50] transition-colors">{cat.name}</p>
                      </div>
                      <ChevronRight size={13} className="text-[#8A6F4E] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#FDFBF7] border-t border-[#EAE3D9]/60">
              <Link
                to="/products"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center text-white bg-[#4E6C50] hover:bg-[#3D4A3C] transition-all flex items-center justify-center gap-2 tracking-wider uppercase"
              >
                View All Categories <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          {/* RIGHT HERO SLIDER */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-sm h-[520px] bg-[#EAE3D9]">
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
                    background: 'linear-gradient(to right, rgba(253, 251, 247, 0.9) 0%, rgba(253, 251, 247, 0.4) 50%, rgba(253, 251, 247, 0.1) 100%)'
                  }} 
                />

                {/* Slider Inner Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12 md:p-16 text-left z-10 max-w-2xl">
                  
                  <div className="mt-8">
                    <p className="text-[#8A6F4E] text-[11px] font-extrabold tracking-[0.25em] uppercase mb-3">
                      Welcome to Textile Mall
                    </p>
                    
                    <h1 className="leading-[1.1] mb-5 flex flex-col text-left">
                      <span className="text-[#2C362B] text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {heroSlides[currentSlide].titleMain}
                      </span>
                      <span className="text-[#8A6F4E] text-4xl sm:text-5xl md:text-6xl font-light italic mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {heroSlides[currentSlide].titleAccent}
                      </span>
                    </h1>

                    <p className="text-[#5D645D] text-xs sm:text-sm font-semibold tracking-wide leading-relaxed mb-8 max-w-md">
                      India's most trusted textile destination for quality, variety and value. Weaving heritage craftsmanship with contemporary style.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/products"
                        className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-extrabold tracking-wider uppercase text-white bg-[#4E6C50] hover:bg-[#3D4A3C] transition-all hover:scale-105 shadow-md shadow-[#4E6C50]/20"
                      >
                        Explore Collections &rarr;
                      </Link>
                      <Link
                        to="/trade-enquiry"
                        className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-extrabold tracking-wider uppercase text-[#2C362B] bg-white border-2 border-[#EAE3D9] hover:bg-[#FDFBF7] transition-all hover:scale-105"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-[#EAE3D9] flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#FDFBF7] transition-all z-20 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} className="text-[#2C362B]" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-[#EAE3D9] flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#FDFBF7] transition-all z-20 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} className="text-[#2C362B]" />
            </button>

            {/* Pagination Indicators "01 02 03" */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 z-20 flex items-center gap-4 text-xs font-bold text-[#2C362B]">
              {heroSlides.map((_, i) => {
                const isActive = i === currentSlide;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 py-1 border-b-2 tracking-widest ${
                      isActive ? 'border-[#4E6C50] text-[#4E6C50]' : 'border-transparent text-[#2C362B]/50'
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
            <div className="lg:col-span-3 flex flex-col justify-between bg-[#4E6C50] text-white p-8 rounded-3xl shadow-sm text-left relative overflow-hidden">
              {/* Elegant floral outline SVG decoration background */}
              <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none translate-x-1/4 translate-y-1/4">
                <svg width="250" height="250" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C40 30 10 40 0 50 C10 60 40 70 50 100 C60 70 90 60 100 50 C90 40 60 30 50 0 Z" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-normal leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why Choose<br/>Textile Mall?
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
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 relative z-10">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-white text-[#4E6C50] hover:bg-[#FDFBF7] transition-all text-xs font-bold tracking-wider uppercase shadow-md shadow-black/10"
                >
                  Know More &rarr;
                </Link>
              </div>
            </div>

            {/* Column 2 (Featured): Width 9/12 */}
            <div className="lg:col-span-9 flex flex-col bg-white border border-[#EAE3D9] p-6 rounded-3xl shadow-sm text-left justify-between min-h-[380px]">
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#EAE3D9]/60">
                <h3 className="font-extrabold text-lg tracking-wide text-[#2C362B] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Featured Collections
                </h3>
                <Link to="/products" className="text-xs font-bold text-[#4E6C50] hover:underline flex items-center gap-1">
                  View All &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
                {featuredCollections.map((col, idx) => (
                  <Link
                    to="/products"
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-full block shadow-sm border border-[#EAE3D9]/40"
                  >
                    <img
                      src={col.image}
                      alt={col.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <h4 className="text-white text-sm font-extrabold leading-tight tracking-wide uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {col.name.split(' ')[0]} <br/> {col.name.split(' ')[1] || 'Collection'}
                      </h4>
                      <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] mt-2 group-hover:bg-[#4E6C50] transition-colors">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── TRUST BADGES ROW BANNER ── */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 border-y border-[#EAE3D9]/60 my-4 bg-white shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-9 h-9 rounded-full bg-[#8A6F4E]/10 text-[#8A6F4E] flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-[12px] font-bold text-[#2C362B] tracking-wide uppercase text-left leading-tight">
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
          <div className="rounded-3xl border border-[#EAE3D9] overflow-hidden flex flex-row items-center justify-between shadow-sm h-60 hover:shadow-md transition-all duration-300 relative group bg-gradient-to-r from-[#EAE3D9] to-[#F5EFE6]">
            <div className="w-[55%] h-full flex flex-col justify-between p-6 sm:p-8 relative z-10 text-left">
              <div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#2C362B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  e-Quotation
                </h3>
                <p className="text-xs text-[#5D645D] font-semibold leading-relaxed">
                  Get instant wholesale prices in seconds.
                </p>
              </div>
              <Link
                to="/e-quotation"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold bg-white text-[#2C362B] border border-[#EAE3D9] hover:bg-[#FDFBF7] transition-all self-start shadow-sm"
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
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10" />
            </div>
          </div>

          {/* Card 2: E-Auction */}
          <div className="rounded-3xl border border-[#EAE3D9] overflow-hidden flex flex-row items-center justify-between shadow-sm h-60 hover:shadow-md transition-all duration-300 relative group bg-gradient-to-r from-[#4E6C50] to-[#3D4A3C]">
            <div className="w-[55%] h-full flex flex-col justify-between p-6 sm:p-8 relative z-10 text-left text-white">
              <div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  e-Auction
                </h3>
                <p className="text-xs text-[#FAF8F5]/90 font-semibold leading-relaxed">
                  Bid & win premium products.
                </p>
              </div>
              <Link
                to="/e-auction"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold bg-white text-[#2C362B] border border-white hover:bg-[#FAF8F5] transition-all self-start shadow-sm"
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
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#3D4A3C] to-transparent z-10" />
            </div>
          </div>

          {/* Card 3: Trade Circular */}
          <div className="rounded-3xl border border-[#EAE3D9] overflow-hidden flex flex-row items-center justify-between shadow-sm h-60 hover:shadow-md transition-all duration-300 relative group bg-gradient-to-r from-[#EAE3D9] to-[#F5EFE6]">
            <div className="w-[55%] h-full flex flex-col justify-between p-6 sm:p-8 relative z-10 text-left">
              <div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#2C362B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Trade Circular
                </h3>
                <p className="text-xs text-[#5D645D] font-semibold leading-relaxed">
                  Stay updated with latest offers & schemes.
                </p>
              </div>
              <Link
                to="/trade-circular"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold bg-white text-[#2C362B] border border-[#EAE3D9] hover:bg-[#FDFBF7] transition-all self-start shadow-sm"
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
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
