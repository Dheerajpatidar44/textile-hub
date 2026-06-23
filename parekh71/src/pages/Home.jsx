import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Play,
  FileText,
  Gavel,
  Globe,
  Users,
  Star,
  User,
  MapPin
} from 'lucide-react';

const C = {
  primary: '#3B4755',
  primaryLight: '#4E5D6F',
  primaryDark: '#2C3540',
  accent: '#D4B26F',
  gold: '#D4B26F',
  bg: '#F5F6F8',
  border: '#E2E8F0',
  stone: '#5E6A7E',
  soil: '#3B4755',
};

// Testimonials data
const testimonials = [
  {
    quote: "The quality, service & timely delivery make Kumavati Textile House our trusted partner since years.",
    name: "Meena Collection",
    role: "Mumbai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Exceptional variety and premium quality fabrics. Their e-quotation system made bulk ordering seamless.",
    name: "Priya Creations",
    role: "Boutique Owner",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Highly reliable wholesale partners. Their transparent e-Auction services always give the best prices.",
    name: "Vardhman Textiles",
    role: "Distributor",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [radius, setRadius] = useState(142);
  const [heroIdx, setHeroIdx] = useState(0);

  const heroImages = [
    "/images/kumavati_hero.png",
    "/images/kumavati_hero_2.png",
    "/images/kumavati_hero_3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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

  // Preserved exactly as existing (12 categories)
  const categoriesList = [
    { name: "Sarees", title: "Luxurious Sarees", desc: "Traditional elegance hand-woven with pure metallic zari threads.", image: "/images/popular_banarasi_saree.png", link: "/products?category=Sarees" },
    { name: "Leggings", title: "Premium Leggings", desc: "Super-soft, stretchable, and perfectly styled leggings for daily comfort.", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60", link: "/products?category=Leggings" },
    { name: "Kurtis", title: "Elegant Kurtis", desc: "Light, elegant, and effortless kurtis designed for premium comfort.", image: "/images/discover_kurtis.png", link: "/products?category=Kurtis" },
    { name: "Dress Suits", title: "Festive Suits", desc: "Beautifully tailored suits with exquisite embroidery and craftsmanship.", image: "/images/popular_anarkali.png", link: "/products?category=Dress Suits" },
    { name: "Bedsheets & Linen", title: "Premium Linen", desc: "Breathable and natural fabrics, hand-finished to premium quality standards.", image: "/images/popular_bedsheet.png", link: "/products?category=Bedsheets & Linen" },
    { name: "Hosiery Items", title: "Comfy Hosiery", desc: "Everyday essentials crafted in breathable hosiery cotton.", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60", link: "/products?category=Hosiery Items" },
    { name: "Suiting", title: "Classic Suiting", desc: "Formal wear and suit fabrics woven to perfection.", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60", link: "/products?category=Suiting" },
    { name: "Shirting", title: "Premium Shirting", desc: "Fine cotton and linen blends for a perfect custom tailored shirt.", image: "/images/popular_cotton_fabric.png", link: "/products?category=Shirting" },
    { name: "Formal & Ethnic Wear for Women", title: "Women's Ethnic Wear", desc: "Designer lehengas and ethnic wear for festive occasions.", image: "/images/popular_lehenga.png", link: "/products?category=Formal & Ethnic Wear for Women" },
    { name: "Formal & Ethnic Wear for Men", title: "Men's Heritage Wear", desc: "Classic cuts, sherwanis, and kurtas crafted for the modern gentleman.", image: "/images/men_ethnic_wear.png", link: "/products?category=Formal & Ethnic Wear for Men" },
    { name: "Formal & Ethnic Wear for Children", title: "Kids Festive Wear", desc: "Playful designs crafted in super-soft ethnic cotton.", image: "/images/children_ethnic_wear.png", link: "/products?category=Formal & Ethnic Wear for Children" },
    { name: "Home Upholstery & Furnishing", title: "Cozy Furnishings", desc: "Designed for beautiful living rooms, bedrooms, and dining spaces.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60", link: "/products?category=Home Upholstery & Furnishing" }
  ];

  return (
    <div style={{ background: C.bg, fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="w-full overflow-x-hidden pt-0 pb-16">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative min-h-screen bg-[#3B4755] overflow-hidden flex items-center pt-24 pb-12">

        {/* Subtle radial golden glow for background depth */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(214, 178, 111, 0.08) 0%, transparent 70%)'
          }}
        />

        <div className="max-w-[108rem] mx-auto px-6 sm:px-10 lg:px-16 w-full grid grid-cols-2 lg:grid-cols-10 gap-8 lg:gap-12 items-center relative z-10">

          {/* Hero Left Image Slider */}
          <div className="col-span-1 lg:col-span-3 flex justify-center lg:justify-start items-center lg:pl-2 order-2 lg:order-1 transform lg:-translate-x-8 xl:-translate-x-16 2xl:-translate-x-24 transition-transform duration-500">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
              className="relative w-full max-w-[520px] aspect-[4/5] lg:max-h-[650px] overflow-hidden rounded-[36px] shadow-2xl z-10 bg-[#FAF7EE]"
            >
              <AnimatePresence>
                <motion.img
                  key={heroIdx}
                  src={heroImages[heroIdx]}
                  alt={`Kumavati Hero Saree ${heroIdx + 1}`}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Hero Center Content */}
          <div className="col-span-2 lg:col-span-4 flex flex-col justify-center items-center text-center px-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#D4B26F] uppercase block mb-3">
              KUMAVATI TEXTILE HOUSE
            </span>
            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-white leading-tight font-serif uppercase m-0">
              Elegance in<br />
              <span className="text-[#D4B26F] italic font-normal" style={{ fontFamily: "'Playfair Display', serif", textTransform: 'none' }}>every</span> Thread
            </h1>
            <div className="w-16 h-[1.5px] bg-[#D4B26F] my-6" />
            <p className="text-[14px] text-white/80 font-medium leading-relaxed max-w-md m-0 mb-8">
              Discover a handpicked collection of premium sarees, designer fabrics, and luxury textiles crafted to perfection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#D4B26F] hover:bg-white text-white hover:text-[#3B4755] text-[11px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 gap-2 border-none shadow-md"
              >
                <span>Explore Now</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent hover:bg-white/10 text-white text-[11px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 gap-2 border border-white/20"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Hero Right Image Slider */}
          <div className="col-span-1 lg:col-span-3 flex justify-center lg:justify-end items-center lg:pr-2 order-3 lg:order-3 transform lg:translate-x-8 xl:translate-x-16 2xl:translate-x-24 transition-transform duration-500">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
              className="relative w-full max-w-[520px] aspect-[4/5] lg:max-h-[650px] overflow-hidden rounded-[36px] shadow-2xl z-10 bg-[#FAF7EE]"
            >
              <AnimatePresence>
                <motion.img
                  key={(heroIdx + 1) % heroImages.length}
                  src={heroImages[(heroIdx + 1) % heroImages.length]}
                  alt={`Kumavati Hero Saree ${((heroIdx + 1) % heroImages.length) + 1}`}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. DISCOVER BY CATEGORIES ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20">

        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D4B26F] uppercase block mb-2">DISCOVER BY</span>
          <h2 className="text-[34px] sm:text-[42px] font-bold text-[#3B4755] font-serif uppercase m-0 leading-tight">
            CATEGORIES
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D4B26F] my-6" />
          <p className="text-[14px] text-[#5E6A7E] font-medium leading-relaxed max-w-md text-center">
            Every fabric tells a story woven with tradition & perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Elegant Selector Wheel */}
          <div className="flex justify-center items-center py-10 relative">
            <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full flex items-center justify-center">

              {/* Decorative faint background ring */}
              <div className="absolute inset-10 border border-[#3B4755]/5 rounded-full pointer-events-none" />

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
                    className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full flex flex-col items-center justify-center cursor-pointer border-none transition-all duration-300"
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${active ? 1.15 : 1})`,
                      background: active ? '#3B4755' : '#ffffff',
                      color: active ? '#ffffff' : '#3B4755',
                      boxShadow: active ? '0 10px 30px rgba(59, 71, 85, 0.2)' : '0 4px 15px rgba(0,0,0,0.03)',
                      zIndex: active ? 10 : 1
                    }}
                  >
                    <div className="mb-1 opacity-70">
                      {/* Decorative small icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest leading-tight text-center px-2 uppercase">
                      {cat.name}
                    </span>
                  </button>
                );
              })}

              {/* Central Logo Ring */}
              <div className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] rounded-full bg-[#3B4755] text-white flex flex-col items-center justify-center p-4 text-center border-[6px] border-[#F5F6F8] shadow-xl relative z-10">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" className="mb-2">
                  <circle cx="12" cy="12" r="9" stroke={C.gold} strokeWidth="1.5" />
                  <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 10" stroke="#ffffff" strokeWidth="1" />
                </svg>
                <span className="text-[15px] font-serif font-extrabold tracking-widest uppercase">KUMAVATI</span>
                <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-[#D4B26F] mt-1">Textile House</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Showcase Banner Card */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#D4B26F] rounded-[32px] overflow-hidden flex flex-col text-left h-[460px] w-full max-w-[500px] relative text-[#3B4755] shadow-lg"
              >
                {/* Background image cover for right half */}
                <div className="absolute top-0 right-0 w-[55%] h-full">
                  <img
                    src={categoriesList[activeCategory].image}
                    alt={categoriesList[activeCategory].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4B26F] via-[#D4B26F]/80 to-transparent" />
                </div>

                {/* Card Text & details */}
                <div className="p-10 flex flex-col justify-center h-full relative z-10 w-[70%]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3B4755] block mb-3 opacity-70">
                    NEW ARRIVAL
                  </span>
                  <h3 className="text-[32px] font-serif font-bold mb-5 leading-snug">
                    {categoriesList[activeCategory].title}
                  </h3>
                  <p className="text-[13.5px] opacity-85 leading-relaxed font-medium mb-8">
                    {categoriesList[activeCategory].desc}
                  </p>

                  <Link
                    to={categoriesList[activeCategory].link}
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-[#3B4755] hover:text-white text-[#3B4755] text-[11px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 gap-2 w-fit border-none shadow-md"
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

      {/* ── 3. CURATED COLLECTIONS ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D4B26F] uppercase block mb-2">CURATED FOR YOU</span>
          <h2 className="text-[34px] sm:text-[42px] font-bold text-[#3B4755] font-serif uppercase m-0 leading-tight">
            Popular Collections
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D4B26F] mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* Card 1 */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden relative aspect-[3/4] bg-[#3B4755] group border border-transparent hover:border-[#D4B26F]/50 hover:shadow-xl transition-all duration-300">
            <img src="/images/popular_banarasi_saree.png" alt="Sarees" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start text-white">
              <h3 className="text-[18px] font-serif font-bold mb-2 uppercase">LUXURY SAREES</h3>
              <p className="text-[12px] opacity-80 mb-4">Elegance redefined.</p>
              <Link to="/products?category=Sarees" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3B4755] hover:bg-[#D4B26F] transition-colors"><ArrowRight size={14} /></Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden relative aspect-[3/4] bg-[#F5F6F8] group border border-transparent hover:border-[#D4B26F]/50 hover:shadow-xl transition-all duration-300">
            <img src="/images/discover_kurtis.png" alt="Kurtis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start bg-gradient-to-t from-white/90 to-white/0">
              <h3 className="text-[18px] font-serif font-bold text-[#3B4755] mb-2 uppercase">DAILY WEAR KURTIS</h3>
              <p className="text-[12px] text-[#5E6A7E] mb-4">Comfort meets style.</p>
              <Link to="/products?category=Kurtis" className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#3B4755] hover:bg-[#3B4755] hover:text-white transition-colors"><ArrowRight size={14} /></Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden relative aspect-[3/4] bg-[#D4B26F] group border border-transparent hover:border-[#D4B26F]/50 hover:shadow-xl transition-all duration-300">
            <img src="/images/popular_bedsheet.png" alt="Linen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start text-white bg-gradient-to-t from-[#D4B26F] to-transparent">
              <h3 className="text-[18px] font-serif font-bold mb-2 uppercase">PREMIUM LINEN</h3>
              <p className="text-[12px] opacity-90 mb-4">Pure. Natural. Timeless.</p>
              <Link to="/products?category=Bedsheets & Linen" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3B4755] hover:bg-[#3B4755] hover:text-white transition-colors"><ArrowRight size={14} /></Link>
            </div>
          </div>
          {/* Card 4 */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden relative aspect-[3/4] bg-[#F5F6F8] group border border-transparent hover:border-[#D4B26F]/50 hover:shadow-xl transition-all duration-300">
            <img src="/images/men_ethnic_wear.png" alt="Men" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start bg-gradient-to-t from-white/90 to-white/0">
              <h3 className="text-[18px] font-serif font-bold text-[#3B4755] mb-2 uppercase">MEN'S COLLECTION</h3>
              <p className="text-[12px] text-[#5E6A7E] mb-4">Classic looks, crafted.</p>
              <Link to="/products?category=Formal & Ethnic Wear for Men" className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#3B4755] hover:bg-[#3B4755] hover:text-white transition-colors"><ArrowRight size={14} /></Link>
            </div>
          </div>
          {/* Card 5 */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden relative aspect-[3/4] bg-[#3B4755] group p-6 flex flex-col justify-between text-white border border-transparent hover:border-[#D4B26F]/50 hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="text-[20px] font-serif font-bold mb-3 uppercase">HOME TEXTILES</h3>
              <p className="text-[13px] opacity-80">Designed for beautiful living.</p>
              <Link to="/products?category=Home Upholstery & Furnishing" className="w-10 h-10 mt-6 rounded-full bg-[#D4B26F] flex items-center justify-center text-white hover:bg-white hover:text-[#3B4755] transition-colors border-none"><ArrowRight size={16} /></Link>
            </div>
            <div className="mt-auto pt-8">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60" alt="Home" className="w-full h-32 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TRADE SERVICES ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
          <div className="lg:col-span-1 bg-[#D4B26F] p-8 rounded-[24px] flex flex-col justify-center text-[#3B4755]">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block opacity-80">TRADE SERVICES</span>
            <h2 className="text-[28px] font-serif font-bold m-0 leading-tight">
              Solutions for Every Business
            </h2>
          </div>

          <div className="lg:col-span-4 border border-[#FAF7EE] bg-white rounded-[24px] p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full items-center">
              {[
                { title: "e-Quotation", desc: "Fast & easy quotation for your business needs.", icon: <FileText size={28} />, link: "/e-quotation" },
                { title: "e-Auction", desc: "Transparent bidding for the best prices.", icon: <Gavel size={28} />, link: "/e-Auction" },
                { title: "Trade Circular", desc: "Stay updated with latest offers & market circulars.", icon: <Globe size={28} />, link: "/trade-circular" },
                { title: "Bulk Enquiry", desc: "Personal assistance for bulk & custom requirements.", icon: <Users size={28} />, link: "/trade-enquiry" }
              ].map((svc, i) => (
                <Link to={svc.link} key={i} className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-3 lg:gap-4 p-4 hover:bg-[#F5F6F8] rounded-xl transition-colors text-decoration-none group text-center sm:text-left h-full">
                  <div className="w-12 h-12 flex items-center justify-center text-[#3B4755] group-hover:text-[#D4B26F] transition-colors shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#3B4755] mb-1.5">{svc.title}</h4>
                    <p className="text-[12.5px] text-[#5E6A7E] leading-relaxed m-0">{svc.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM SECTION (Map + Testimonials + Gallery side by side) ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Pan India Presence */}
          <div className="bg-[#3B4755] rounded-[24px] p-8 flex flex-col relative overflow-hidden group text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4E5D6F] to-[#2C3540] opacity-90 z-0"></div>
            {/* Decorative glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[200px] h-[200px] bg-[#D4B26F]/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[150px] h-[150px] bg-[#D4B26F]/20 rounded-full blur-2xl z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4B26F] uppercase block mb-1">OUR NETWORK</span>
              <h2 className="text-[28px] font-serif font-bold text-white m-0 mb-8 leading-tight">Pan India<br />Presence</h2>

              <div className="flex-1 flex flex-col gap-5 justify-center mb-8">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm transform group-hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#D4B26F]/20 rounded-full flex items-center justify-center text-[#D4B26F] shrink-0">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h4 className="text-[22px] font-bold text-white leading-none mb-1">500+</h4>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold m-0">Cities Covered</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  <div className="w-12 h-12 bg-[#D4B26F]/20 rounded-full flex items-center justify-center text-[#D4B26F] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-[22px] font-bold text-white leading-none mb-1">10,000+</h4>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold m-0">Pincodes Delivered</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="px-6 py-3 bg-[#D4B26F] hover:bg-white text-[#3B4755] text-[11px] font-bold tracking-widest uppercase rounded-full w-fit flex items-center gap-2 border-none transition-colors mt-auto shadow-lg">
                View Locations <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-8 flex flex-col justify-between hover:border-[#D4B26F]/60 hover:shadow-lg transition-all duration-300">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#5E6A7E] uppercase block mb-1">WHAT OUR CLIENTS SAY</span>
              <h2 className="text-[24px] font-serif font-bold text-[#3B4755] m-0 mb-6">Trusted by Thousands</h2>

              <AnimatePresence mode="wait">
                <motion.div key={testimonialIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-[140px]">
                  <Link to="/reviews" className="block text-decoration-none hover:opacity-80 transition-opacity cursor-pointer">
                    <h1 className="text-6xl text-[#D4B26F] font-serif leading-none m-0 mb-4 opacity-50">"</h1>
                    <p className="text-[14px] text-[#5E6A7E] font-semibold italic mb-6">
                      {testimonials[testimonialIdx].quote}
                    </p>
                    <div className="flex items-center gap-1 text-[#D4B26F] mb-4">
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={testimonials[testimonialIdx].avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="text-[13px] font-bold text-[#3B4755] m-0">{testimonials[testimonialIdx].name}</h4>
                        <p className="text-[11px] text-[#5E6A7E] m-0">{testimonials[testimonialIdx].role}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots & Link */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button key={idx} onClick={() => setTestimonialIdx(idx)} className={`h-1.5 rounded-full border-none cursor-pointer transition-all ${testimonialIdx === idx ? 'w-5 bg-[#3B4755]' : 'w-1.5 bg-[#E2E8F0]'}`} />
                ))}
              </div>
              <Link to="/reviews" className="text-[11px] font-bold text-[#3B4755] hover:text-[#D4B26F] tracking-widest uppercase transition-colors flex items-center gap-1 text-decoration-none">
                Read All <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Milestones / Gallery */}
          <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-8 flex flex-col hover:border-[#D4B26F]/60 hover:shadow-lg transition-all duration-300">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#5E6A7E] uppercase block mb-1">MOMENTS OF EXCELLENCE</span>
            <h2 className="text-[24px] font-serif font-bold text-[#3B4755] m-0 mb-6">Milestones We Cherish</h2>
            <Link to="/gallery" className="grid grid-cols-2 gap-3 flex-1 mb-6 group text-decoration-none cursor-pointer">
              <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery" />
              </div>
              <div className="rounded-xl overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery" />
              </div>
              <div className="rounded-xl overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery" />
              </div>
            </Link>
            <Link to="/gallery" className="px-6 py-3 bg-[#3B4755] hover:bg-[#D4B26F] text-white text-[11px] font-bold tracking-widest uppercase rounded-full w-fit flex items-center gap-2 border-none transition-colors mt-auto">
              View Gallery <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
