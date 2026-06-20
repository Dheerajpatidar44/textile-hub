import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Award,
  Users,
  Building,
  Globe,
  FileText,
  Gavel,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  User
} from 'lucide-react';

const C = {
  primary: '#0C1929',       // Deep Navy
  primaryLight: '#162a43',  // Lighter Navy
  primaryDark: '#040a12',   // Dark Navy
  accent: '#D79F88',        // Soft Peach
  accentLight: '#FAF6F0',   // Cream Background
  gold: '#Bfa37c',          // Gold Accent
  bg: '#FAF6F0',
  border: '#E8D5C4',
  stone: '#4A4A4A',         // Gray text
};

// Testimonials data
const testimonials = [
  {
    quote: "The quality, service & timely delivery make Aurora Textile House our trusted partner since years.",
    name: "Meena Collection",
    role: "Retailer, Delhi",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Exceptional variety and premium quality fabrics. Their e-Quotation system made bulk ordering seamless.",
    name: "Priya Creations",
    role: "Boutique Owner, Mumbai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Highly reliable wholesale partners. Their transparent e-Auction services always give the best prices.",
    name: "Vardhman Textiles",
    role: "Distributor, Ludhiana",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

// Blog posts data
const blogPosts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [radius, setRadius] = useState(142);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth >= 640 ? 215 : 142);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Category details for interactive category wheel
  const categoriesList = [
    { 
      name: "Sarees", 
      title: "Luxurious Sarees", 
      desc: "Traditional elegance hand-woven with pure metallic zari threads.",
      image: "/images/popular_banarasi_saree.png", 
      link: "/products?category=Sarees" 
    },
    { 
      name: "Leggings", 
      title: "Premium Leggings", 
      desc: "Super-soft, stretchable, and perfectly styled leggings for daily comfort.",
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60", 
      link: "/products?category=Leggings" 
    },
    { 
      name: "Kurtis", 
      title: "Elegant Kurtis", 
      desc: "Light, elegant, and effortless kurtis designed for premium comfort.",
      image: "/images/discover_kurtis.png", 
      link: "/products?category=Kurtis" 
    },
    { 
      name: "Dress Suits", 
      title: "Festive Suits", 
      desc: "Beautifully tailored suits with exquisite embroidery and craftsmanship.",
      image: "/images/popular_anarkali.png", 
      link: "/products?category=Dress Suits" 
    },
    { 
      name: "Bedsheets & Linen", 
      title: "Premium Linen", 
      desc: "Breathable and natural fabrics, hand-finished to premium quality standards.",
      image: "/images/popular_bedsheet.png", 
      link: "/products?category=Bedsheets & Linen" 
    },
    { 
      name: "Hosiery Items", 
      title: "Comfy Hosiery", 
      desc: "Everyday essentials crafted in breathable hosiery cotton.",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60", 
      link: "/products?category=Hosiery Items" 
    },
    { 
      name: "Suiting", 
      title: "Classic Suiting", 
      desc: "Formal wear and suit fabrics woven to perfection.",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60", 
      link: "/products?category=Suiting" 
    },
    { 
      name: "Shirting", 
      title: "Premium Shirting", 
      desc: "Fine cotton and linen blends for a perfect custom tailored shirt.",
      image: "/images/popular_cotton_fabric.png", 
      link: "/products?category=Shirting" 
    },
    { 
      name: "Formal & Ethnic Wear for Women", 
      title: "Women's Ethnic Wear", 
      desc: "Designer lehengas and ethnic wear for festive occasions.",
      image: "/images/popular_lehenga.png", 
      link: "/products?category=Formal & Ethnic Wear for Women" 
    },
    { 
      name: "Formal & Ethnic Wear for Men", 
      title: "Men's Heritage Wear", 
      desc: "Classic cuts, sherwanis, and kurtas crafted for the modern gentleman.",
      image: "/images/men_ethnic_wear.png", 
      link: "/products?category=Formal & Ethnic Wear for Men" 
    },
    { 
      name: "Formal & Ethnic Wear for Children", 
      title: "Kids Festive Wear", 
      desc: "Playful designs crafted in super-soft ethnic cotton.",
      image: "/images/children_ethnic_wear.png", 
      link: "/products?category=Formal & Ethnic Wear for Children" 
    },
    { 
      name: "Home Upholstery & Furnishing", 
      title: "Cozy Furnishings", 
      desc: "Designed for beautiful living rooms, bedrooms, and dining spaces.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60", 
      link: "/products?category=Home Upholstery & Furnishing" 
    }
  ];

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-0 pb-16">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative min-h-[90vh] bg-[#0C1929] text-white overflow-hidden flex items-center pt-28 pb-36">
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[155px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1134,120,1053,110.5,985.66,92.83Z" fill="#FAF6F0" />
          </svg>
        </div>

        <div className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
       
            <h1 className="text-[44px] sm:text-[54px] lg:text-[62px] font-bold leading-[1.08] mb-6 font-serif tracking-tight" style={{ color: '#ffffff' }}>
              Woven with Heritage.<br />
              <span className="italic font-light text-[#D79F88]">Designed for Tomorrow.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] text-white/70 leading-relaxed mb-8 max-w-lg font-medium">
              From timeless weaves to contemporary designs – empowering style, inspiring generations. Discover high-end fabrics, heritage craftsmanship, and premium textures.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-4">
              <Link 
                to="/products"
                className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#D79F88] hover:text-white text-[#0a1828] text-[11px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 border-none"
              >
                <span>Explore Collections</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Hero Center Circular Image Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
              className="relative w-full max-w-[400px] sm:max-w-[440px] aspect-square rounded-full border border-white/10 p-3 sm:p-4 bg-white/5"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[#D79F88]/30 animate-[spinSlow_25s_linear_infinite]" />
              
              {/* Inner cropped image */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#Bfa37c] shadow-2xl relative bg-[#0C1929]">
                <img 
                  src="/images/aurora_hero.png" 
                  alt="Aurora Saree Model Showcase" 
                  className="w-full h-full object-cover scale-102 hover:scale-106 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#0C1929]/5 mix-blend-multiply" />
              </div>
            </motion.div>
          </div>

          {/* Hero Right Features */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center gap-6">
            {[
              { title: "Premium Fabrics", desc: "Finest silk, cotton, linen & wool blend." },
              { title: "Modern Craftsmanship", desc: "Heritage values, contemporary cuts." },
              { title: "Enduring Trust", desc: "Uncompromised quality for decades." }
            ].map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-[200px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#Bfa37c] mb-2.5" />
                <h4 className="text-[14px] font-bold text-white tracking-widest uppercase mb-1 font-sans">{feat.title}</h4>
                <p className="text-[11px] text-white/50 leading-relaxed font-medium">{feat.desc}</p>
              </div>
            ))}
            
            {/* Small floral mandala decoration */}
            <div className="mt-6 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-white/5 text-[#Bfa37c]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 10" strokeWidth="0.8" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. DISCOVER BY CATEGORIES SECTION (Cream layout with Selector Wheel) ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 pt-4 pb-20">
        
        {/* Section Heading */}
        <div className="text-left mb-12 flex flex-col items-start">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D79F88] uppercase block mb-1">OUR CATALOG</span>
          <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0a1828] font-serif uppercase m-0 leading-tight">
            Discover by Categories
          </h2>
          <div className="w-12 h-[1px] bg-[#Bfa37c] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Center Column: Elegant Selector Wheel */}
          <div className="lg:col-span-7 flex justify-center items-center py-6">
            <div className="relative w-[360px] h-[360px] sm:w-[530px] sm:h-[530px] rounded-full border border-[#E8D5C4] flex items-center justify-center bg-white shadow-xs">
              
              {/* Category buttons plotted in a circle */}
              {categoriesList.map((cat, idx) => {
                const total = categoriesList.length;
                const angle = (idx * 360) / total;
                const x = radius * Math.cos((angle - 90) * Math.PI / 180);
                const y = radius * Math.sin((angle - 90) * Math.PI / 180);
                const active = activeCategory === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(idx)}
                    className="absolute w-[68px] h-[68px] sm:w-[94px] sm:h-[94px] rounded-full flex flex-col items-center justify-center cursor-pointer border border-[#E8D5C4] transition-all duration-300 shadow-xs"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      background: active ? '#0a1828' : '#FAF6F0',
                      color: active ? '#ffffff' : '#0a1828',
                      boxShadow: active ? '0 10px 20px rgba(10, 24, 40, 0.15)' : 'none',
                      borderColor: active ? '#0a1828' : '#E8D5C4'
                    }}
                  >
                    <span className="text-[9.5px] sm:text-[11.5px] font-bold tracking-tighter leading-tight text-center px-1.5 break-words">
                      {cat.name}
                    </span>
                  </button>
                );
              })}

              {/* Central Logo Ring */}
              <div className="w-[100px] h-[100px] sm:w-[136px] sm:h-[136px] rounded-full bg-[#0a1828] text-white flex flex-col items-center justify-center p-3 text-center border-4 border-white shadow-md relative z-10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" className="mb-1">
                  <circle cx="12" cy="12" r="9" stroke={C.gold} strokeWidth="1.5" />
                  <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 10" stroke="#ffffff" strokeWidth="1" />
                </svg>
                <span className="text-[10px] font-extrabold tracking-widest uppercase">AURORA</span>
                <span className="text-[6.5px] uppercase font-bold tracking-[0.15em] text-[#D79F88] mt-0.5">Textile House</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Showcase Banner Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl border border-[#E8D5C4] shadow-xs overflow-hidden flex flex-col text-left h-[440px] justify-between relative"
              >
                {/* Background image cover */}
                <div className="w-full h-[220px] overflow-hidden bg-[#FAF6F0] relative">
                  <img 
                    src={categoriesList[activeCategory].image} 
                    alt={categoriesList[activeCategory].title} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-radial from-transparent to-[#0a1828]/10" />
                </div>

                {/* Card Text & details */}
                <div className="p-8 flex flex-col flex-grow justify-between bg-white relative z-10">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D79F88] block mb-1">
                      NEW COLLECTION
                    </span>
                    <h3 className="text-[22px] font-serif font-bold text-[#0a1828] mb-2 leading-snug">
                      {categoriesList[activeCategory].title}
                    </h3>
                    <p className="text-[13px] text-[#4A4A4A] leading-relaxed font-medium mb-6">
                      {categoriesList[activeCategory].desc}
                    </p>
                  </div>

                  <Link
                    to={categoriesList[activeCategory].link}
                    className="inline-flex items-center justify-center w-full py-3.5 bg-[#0a1828] hover:bg-[#162a43] text-white text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all duration-300 gap-2 border-none"
                  >
                    <span>Explore Now</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── 3. CURATED COLLECTIONS GRID (5 tiles matching reference UI style) ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        
        {/* Section Heading */}
        <div className="text-left mb-10">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D79F88] uppercase block mb-1">HANDPICKED FOR YOU</span>
          <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0a1828] font-serif uppercase m-0 leading-tight">
            Curated Collections
          </h2>
          <div className="w-12 h-[1px] bg-[#Bfa37c] mt-4" />
        </div>

        {/* 5 Tile Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Tile 1: Luxurious Sarees (Grace in every weave) */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-xs relative aspect-[4/5] bg-[#0a1828] group">
            <img 
              src="/images/popular_banarasi_saree.png" 
              alt="Luxurious Sarees" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1828]/85 via-[#0a1828]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end items-start text-left">
              <span className="text-[8px] font-bold tracking-widest text-[#D79F88] uppercase mb-1">EXCLUSIVE</span>
              <h3 className="text-[17px] font-serif font-bold text-white mb-1">LUXURIOUS SAREES</h3>
              <p className="text-[11px] text-white/70 font-medium mb-3">Grace in every weave.</p>
              <Link to="/products" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0a1828] hover:bg-[#D79F88] hover:text-white transition-colors">
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Tile 2: Elegant Kurtis (Everyday Elegance) */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-xs relative aspect-[4/5] bg-[#0a1828] group">
            <img 
              src="/images/discover_kurtis.png" 
              alt="Elegant Kurtis" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1828]/85 via-[#0a1828]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end items-start text-left">
              <span className="text-[8px] font-bold tracking-widest text-[#D79F88] uppercase mb-1">SUMMER EDIT</span>
              <h3 className="text-[17px] font-serif font-bold text-white mb-1">ELEGANT KURTIS</h3>
              <p className="text-[11px] text-white/70 font-medium mb-3">Everyday Elegance.</p>
              <Link to="/products" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0a1828] hover:bg-[#D79F88] hover:text-white transition-colors">
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Tile 3: Premium Linen (Pure. Natural. Timeless.) */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-xs relative aspect-[4/5] bg-[#0a1828] group">
            <img 
              src="/images/popular_bedsheet.png" 
              alt="Premium Linen" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1828]/85 via-[#0a1828]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end items-start text-left">
              <span className="text-[8px] font-bold tracking-widest text-[#D79F88] uppercase mb-1">ORGANIC</span>
              <h3 className="text-[17px] font-serif font-bold text-white mb-1">PREMIUM LINEN</h3>
              <p className="text-[11px] text-white/70 font-medium mb-3">Pure. Natural. Timeless.</p>
              <Link to="/products" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0a1828] hover:bg-[#D79F88] hover:text-white transition-colors">
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Tile 4: Men's Elegance (Classic looks, crafted for you.) */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-xs relative aspect-[4/5] bg-[#0a1828] group">
            <img 
              src="/images/men_ethnic_wear.png" 
              alt="Men's Elegance" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1828]/85 via-[#0a1828]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end items-start text-left">
              <span className="text-[8px] font-bold tracking-widest text-[#D79F88] uppercase mb-1">TRADITIONAL</span>
              <h3 className="text-[17px] font-serif font-bold text-white mb-1">MEN'S ELEGANCE</h3>
              <p className="text-[11px] text-white/70 font-medium mb-3">Classic looks for you.</p>
              <Link to="/products" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0a1828] hover:bg-[#D79F88] hover:text-white transition-colors">
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Tile 5: Home Furnishing (Designed for beautiful living) */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-xs relative aspect-[4/5] bg-[#0a1828] group">
            <img 
              src="/images/popular_bedsheet.png" 
              alt="Home Furnishing" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1828]/85 via-[#0a1828]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end items-start text-left">
              <span className="text-[8px] font-bold tracking-widest text-[#D79F88] uppercase mb-1">LIFESTYLE</span>
              <h3 className="text-[17px] font-serif font-bold text-white mb-1">HOME FURNISHING</h3>
              <p className="text-[11px] text-white/70 font-medium mb-3">Designed for beautiful living.</p>
              <Link to="/products" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0a1828] hover:bg-[#D79F88] hover:text-white transition-colors">
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. TRADE SERVICES / BUILT FOR BUSINESSES ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="bg-white rounded-3xl border border-[#E8D5C4] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Dark Column */}
          <div className="lg:col-span-4 bg-[#0a1828] text-white p-10 flex flex-col justify-center text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-radial from-[#D79F88]/10 to-transparent blur-[50px] pointer-events-none" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D79F88] uppercase mb-3 block">TRADE SERVICES</span>
            <h2 className="text-[32px] font-serif font-bold mb-4 leading-tight">
              Built for Businesses
            </h2>
            <p className="text-[13px] text-white/60 leading-relaxed font-medium">
              We leverage modern procurement methods like transparent e-auctions, e-quotations, and fast circular dispatches to simplify business transactions.
            </p>
          </div>

          {/* Right Services Grid */}
          <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-left">
              
              {/* Item 1: e-Quotation */}
              <Link 
                to="/e-quotation"
                className="flex gap-4 items-start p-4 rounded-2xl hover:bg-[#FAF6F0]/60 border border-transparent hover:border-[#E8D5C4] transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#E8D5C4] flex items-center justify-center text-[#0a1828] shrink-0 group-hover:bg-[#0a1828] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a1828] group-hover:text-[#D79F88] tracking-wider mb-2 font-sans transition-colors duration-300">e-Quotation</h3>
                  <p className="text-[12.5px] text-[#4A4A4A] leading-relaxed font-medium">Fast & easy quotation processes tailored for your custom business queries.</p>
                </div>
              </Link>

              {/* Item 2: e-Auction */}
              <Link 
                to="/e-auction"
                className="flex gap-4 items-start p-4 rounded-2xl hover:bg-[#FAF6F0]/60 border border-transparent hover:border-[#E8D5C4] transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#E8D5C4] flex items-center justify-center text-[#0a1828] shrink-0 group-hover:bg-[#0a1828] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Gavel size={20} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a1828] group-hover:text-[#D79F88] tracking-wider mb-2 font-sans transition-colors duration-300">e-Auction</h3>
                  <p className="text-[12.5px] text-[#4A4A4A] leading-relaxed font-medium">Transparent bidding system to secure the best industry fabrics pricing.</p>
                </div>
              </Link>

              {/* Item 3: Trade Circular */}
              <Link 
                to="/trade-circular"
                className="flex gap-4 items-start p-4 rounded-2xl hover:bg-[#FAF6F0]/60 border border-transparent hover:border-[#E8D5C4] transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#E8D5C4] flex items-center justify-center text-[#0a1828] shrink-0 group-hover:bg-[#0a1828] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a1828] group-hover:text-[#D79F88] tracking-wider mb-2 font-sans transition-colors duration-300">Trade Circular</h3>
                  <p className="text-[12.5px] text-[#4A4A4A] leading-relaxed font-medium">Stay updated with latest catalog rollouts, wholesale offers & notices.</p>
                </div>
              </Link>

              {/* Item 4: Bulk Enquiry */}
              <Link 
                to="/trade-enquiry"
                className="flex gap-4 items-start p-4 rounded-2xl hover:bg-[#FAF6F0]/60 border border-transparent hover:border-[#E8D5C4] transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#E8D5C4] flex items-center justify-center text-[#0a1828] shrink-0 group-hover:bg-[#0a1828] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a1828] group-hover:text-[#D79F88] tracking-wider mb-2 font-sans transition-colors duration-300">Bulk Enquiry</h3>
                  <p className="text-[12.5px] text-[#4A4A4A] leading-relaxed font-medium">Personal assistance for specialized requirements, bulk orders, and shipping terms.</p>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* ── 5. NETWORK MAP SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D79F88] uppercase block mb-1">OUR NETWORK</span>
          <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0a1828] font-serif uppercase m-0 leading-tight">
            Pan India Presence
          </h2>
          <div className="w-12 h-[1px] bg-[#Bfa37c] mt-4 mb-6" />
          
          <p className="text-[13.5px] text-[#4A4A4A] leading-relaxed font-medium mb-8">
            AURORA Textile House reaches retail partners and happy clients in more than 20 cities across the length and breadth of India. Delivering heritage quality, timely.
          </p>

          <Link
            to="/contact"
            className="px-6 py-3 bg-[#0a1828] hover:bg-[#162a43] text-white text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all duration-300 w-fit flex items-center gap-2 border-none"
          >
            <span>View All Locations</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Right Side Map Visual (Contact map style iframe) */}
        <div className="lg:col-span-7 w-full rounded-3xl overflow-hidden border border-[#E8D5C4] shadow-xs relative bg-white h-[360px]">
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none', filter: 'sepia(0.1) contrast(1.02) opacity(0.95)' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AURORA Textile House Location Map"
          />
        </div>
      </section>

      {/* ── 6. TESTIMONIALS SLIDER ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-16 bg-[#FAF6F0] border border-[#E8D5C4] rounded-3xl my-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D79F88] uppercase block mb-1">WHAT OUR CLIENTS SAY</span>
          <h2 className="text-[34px] font-serif font-bold text-[#0a1828] uppercase mt-0 mb-8">
            Trusted by Thousands
          </h2>

          {/* Testimonial detail carousel */}
          <div className="w-full max-w-2xl min-h-[220px] flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full bg-white rounded-2xl border border-[#E8D5C4] p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 text-[#D79F88]">
                    {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" stroke="none" className="fill-current" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed font-semibold italic">
                    "{testimonials[testimonialIdx].quote}"
                  </p>
                </div>

                {/* User Profile Footer */}
                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#E8D5C4]/45">
                  {testimonials[testimonialIdx].avatar ? (
                    <img
                      src={testimonials[testimonialIdx].avatar}
                      alt={testimonials[testimonialIdx].name}
                      className="w-10 h-10 rounded-full object-cover border border-[#E8D5C4]"
                    />
                  ) : (
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-neutral-100 text-[#D79F88]"
                    >
                      <User size={16} />
                    </div>
                  )}
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0a1828] m-0">{testimonials[testimonialIdx].name}</h4>
                    <p className="text-[11px] text-[#4A4A4A]/60 font-medium m-0">{testimonials[testimonialIdx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIdx(idx)}
                className={`h-1.5 rounded-full border-none cursor-pointer transition-all duration-300 ${testimonialIdx === idx ? 'w-5 bg-[#0a1828]' : 'w-1.5 bg-[#0a1828]/20 hover:bg-[#0a1828]'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. BLOGS SECTION (MOMENTS OF EXCELLENCE) ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-12 text-center">
        
        {/* Section Heading */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10 border-b border-[#E8D5C4] pb-6">
          <div className="text-left">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#D79F88] uppercase block mb-1">MOMENTS OF EXCELLENCE</span>
            <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0C1929] font-serif uppercase m-0 leading-tight">
              Blog & Insights
            </h2>
          </div>
          <Link
            to="/blog"
            className="px-6 py-3 border border-[#E8D5C4] hover:bg-[#0C1929] hover:text-white text-[#0C1929] text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center gap-2"
          >
            <span>Read All Blogs</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {blogPosts.map((post, idx) => (
            <Link 
              key={idx}
              to="/blog"
              className="bg-white border border-[#E8D5C4] rounded-2xl overflow-hidden text-left hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-full aspect-[16/10] bg-[#FAF6F0] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-[#4A4A4A] uppercase tracking-wider block mb-2 font-bold">{post.date}</span>
                  <h3 className="text-[16px] font-bold text-[#0C1929] mb-4 line-clamp-2 leading-snug font-serif">{post.title}</h3>
                </div>
              </div>
              <div className="px-6 pb-6">
                <span className="text-[11px] font-bold text-[#D79F88] tracking-widest uppercase flex items-center gap-1 group-hover:text-[#Bfa37c] transition-colors">
                  READ MORE <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </section>

    </div>
  );
}
