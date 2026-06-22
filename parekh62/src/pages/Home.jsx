import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Layers,
  Truck,
  Heart,
  Headphones,
} from 'lucide-react';

const C = {
  primary: '#8C6239',       // Warm Camel Brown
  primaryLight: '#B08B6B',
  primaryDark: '#5E4023',
  accent: '#5B84B1',        // Slate/Dusty Blue
  gold: '#8C6239',          // Warm Camel Brown
  bg: '#FAF6F0',
  border: '#E8DFD8',
  stone: '#4A4A4A',
  soil: '#8C6239',
};

// Blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Weaving",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Elegance in Threads: The Fall Collection",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Behind the Scenes: Crafting the Perfect Saree",
    date: "May 15, 2026",
    image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Trends to Watch in Home Furnishing",
    date: "Apr 22, 2026",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60",
  }
];

// All products list from Products page
const allProducts = [
  { id: 101, name: "Classic Banarasi Silk Saree", category: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { id: 102, name: "Super-Stretch Cotton Leggings", category: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60" },
  { id: 103, name: "Handcrafted Chikankari Kurti", category: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60" },
  { id: 104, name: "Anarkali Embroidered Dress Suit", category: "Dress Suits", image: "/images/popular_anarkali.png" },
  { id: 105, name: "Luxurious Egyptian Cotton Bedsheet", category: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { id: 106, name: "Soft Premium Cotton Hosiery Set", category: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60" },
  { id: 107, name: "Italian Wool Blend Suiting Fabric", category: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60" },
  { id: 108, name: "Fine Egyptian Giza Cotton Shirting", category: "Shirting", image: "/images/popular_cotton_fabric.png" },
  { id: 109, name: "Designer Georgette Lehenga Choli", category: "Formal & Ethnic Wear for Women", image: "/images/popular_lehenga.png" },
  { id: 110, name: "Premium Silk Sherwani Set", category: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
  { id: 111, name: "Kid's Festive Cotton Dhoti Kurta", category: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
  { id: 112, name: "Premium Velvet Upholstery Fabric", category: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60" },
];

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const heroIdx = page;

  const heroImages = [
    "/images/tanaban_hero.png",
    "/images/popular_banarasi_saree.png",
    "/images/ethnic_wear.png",
    "/images/premium_fabrics.png",
    "/images/discover_kurtis.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => [(prev[0] + 1) % heroImages.length, 1]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevHero = () => {
    setPage((prev) => [(prev[0] - 1 + heroImages.length) % heroImages.length, -1]);
  };

  const handleNextHero = () => {
    setPage((prev) => [(prev[0] + 1) % heroImages.length, 1]);
  };

  const getPosition = (index, current) => {
    const len = heroImages.length;
    let normalized = index - current;
    if (normalized < -Math.floor(len / 2)) normalized += len;
    if (normalized > Math.floor(len / 2)) normalized -= len;

    if (normalized === 0) return 'center';
    if (normalized === -1) return 'left';
    if (normalized === 1) return 'right';
    if (normalized < -1) return 'hiddenLeft';
    if (normalized > 1) return 'hiddenRight';
    return 'hiddenRight';
  };

  const slideVariants = {
    center: { x: '0%', scale: 1, zIndex: 5, opacity: 1, filter: "brightness(100%)" },
    left: { x: '-101.5%', scale: 1, zIndex: 3, opacity: 0.85, filter: "brightness(100%)" },
    right: { x: '101.5%', scale: 1, zIndex: 3, opacity: 0.85, filter: "brightness(100%)" },
    hiddenLeft: { x: '-203%', scale: 1, zIndex: 1, opacity: 0, filter: "brightness(100%)" },
    hiddenRight: { x: '203%', scale: 1, zIndex: 1, opacity: 0, filter: "brightness(100%)" },
  };

  return (
    <div style={{ background: '#FAF6F0', fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-12 md:pt-16 pb-16">
      
      {/* ── 1. HERO SECTION (3D STACKED CAROUSEL) ── */}
      <section className="w-full py-4 md:py-6 relative z-10 px-0 overflow-hidden">
        
        {/* Absolute Left & Right Navigation Chevrons */}
        <button 
          onClick={handlePrevHero}
          className="absolute left-2 sm:left-4 md:left-6 top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg text-stone-700 hover:text-stone-900 hover:scale-105 active:scale-95 transition-all z-30 border-none cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNextHero}
          className="absolute right-2 sm:right-4 md:right-6 top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg text-stone-700 hover:text-stone-900 hover:scale-105 active:scale-95 transition-all z-30 border-none cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[520px] perspective-[1000px] mt-2 mb-4">
          {heroImages.map((src, index) => {
            return (
              <motion.div
                key={index}
                animate={getPosition(index, heroIdx)}
                variants={slideVariants}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="absolute left-0 right-0 mx-auto top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl bg-[#E8DFD8]"
                onClick={() => setPage([index, index > heroIdx ? 1 : -1])}
                style={{ cursor: getPosition(index, heroIdx) === 'center' ? 'default' : 'pointer' }}
              >
                <img
                  src={src}
                  alt={`Hero ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Indicators underneath */}
        <div className="flex justify-center items-center gap-2 mt-6 relative z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > heroIdx ? 1 : -1])}
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border-none cursor-pointer transition-all"
              style={{
                background: heroIdx === idx 
                  ? '#8C6239' 
                  : '#E0D8D0'
              }}
            />
          ))}
        </div>
      </section>

      {/* ── 2. VALUE PROPOSITIONS SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-8">
        <div className="bg-[#FAF6F0] border border-[#E8DFD8] rounded-[24px] py-8 px-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            
            {/* Prop 1 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8C6239] shadow-sm mb-3">
                <Shield size={20} />
              </div>
              <h4 className="text-[12px] font-bold tracking-widest text-[#5E4023] uppercase mb-1">PREMIUM QUALITY</h4>
              <p className="text-[11px] text-stone-500 max-w-[160px] leading-tight m-0">Finest fabrics, unmatched quality</p>
            </div>

            {/* Prop 2 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8C6239] shadow-sm mb-3">
                <Layers size={20} />
              </div>
              <h4 className="text-[12px] font-bold tracking-widest text-[#5E4023] uppercase mb-1">WIDE RANGE</h4>
              <p className="text-[11px] text-stone-500 max-w-[160px] leading-tight m-0">Thousands of fabrics for every need</p>
            </div>

            {/* Prop 3 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8C6239] shadow-sm mb-3">
                <Truck size={20} />
              </div>
              <h4 className="text-[12px] font-bold tracking-widest text-[#5E4023] uppercase mb-1">PAN INDIA DELIVERY</h4>
              <p className="text-[11px] text-stone-500 max-w-[160px] leading-tight m-0">Timely delivery across India</p>
            </div>

            {/* Prop 4 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8C6239] shadow-sm mb-3">
                <Heart size={20} />
              </div>
              <h4 className="text-[12px] font-bold tracking-widest text-[#5E4023] uppercase mb-1">CUSTOMER FIRST</h4>
              <p className="text-[11px] text-stone-500 max-w-[160px] leading-tight m-0">Your satisfaction is our priority</p>
            </div>

            {/* Prop 5 */}
            <div className="flex flex-col items-center col-span-2 md:col-span-1 mx-auto lg:mx-0">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8C6239] shadow-sm mb-3">
                <Headphones size={20} />
              </div>
              <h4 className="text-[12px] font-bold tracking-widest text-[#5E4023] uppercase mb-1">DEDICATED SUPPORT</h4>
              <p className="text-[11px] text-stone-500 max-w-[160px] leading-tight m-0">We are here to help you anytime</p>
            </div>

          </div>
        </div>
      </section>



      {/* ── 4. TRADE SERVICES PROMO BLOCKS (3 COLUMNS) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Live e-Auction */}
          <div className="bg-[#FAF6F0] border border-[#E8DFD8] rounded-[24px] p-8 flex flex-col justify-between text-left relative overflow-hidden group shadow-sm h-full">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#8C6239]  block mb-2">LIVE e-AUCTION</span>
                <h3 className="text-[22px] font-bold font-serif text-[#5E4023] m-0 mb-3 leading-snug">Bid. Win. Grow.</h3>
                <p className="text-[13px] text-[#4A4A4A] leading-relaxed mb-6 font-medium">
                  Participate in live auctions and win the best deals.
                </p>
              </div>
              <Link 
                to="/e-auction" 
                className="px-6 py-3 text-white text-[11px] font-bold tracking-widest uppercase rounded-full w-fit border-none shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
                style={{ background: '#8C6239' }}
              >
                <span>JOIN LIVE AUCTIONS</span>
                <ArrowRight size={12} />
              </Link>
            </div>
            
            {/* Blurry background image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="/images/ethnic_wear.png" 
                alt="" 
                className="w-full h-full object-cover filter blur-[8px] opacity-[0.1] transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Card 2: e-Quotation */}
          <div className="bg-[#FAF6F0] border border-[#E8DFD8] rounded-[24px] p-8 flex flex-col justify-between text-left relative overflow-hidden group shadow-sm h-full">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#5B84B1]  block mb-2">e-QUOTATION</span>
                <h3 className="text-[22px] font-bold font-serif text-[#5E4023] m-0 mb-3 leading-snug">Get Instant Quotes.</h3>
                <p className="text-[13px] text-[#4A4A4A] leading-relaxed mb-6 font-medium">
                  Request a quote and get the best pricing for bulk orders.
                </p>
              </div>
              <Link 
                to="/e-quotation" 
                className="px-6 py-3 text-white text-[11px] font-bold tracking-widest uppercase rounded-full w-fit border-none shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
                style={{ background: '#5B84B1' }}
              >
                <span>REQUEST QUOTE</span>
                <ArrowRight size={12} />
              </Link>
            </div>
            
            {/* Blurry background image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="/images/popular_cotton_fabric.png" 
                alt="" 
                className="w-full h-full object-cover filter blur-[8px] opacity-[0.1] transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Card 3: Trade Services */}
          <div className="bg-[#FAF6F0] border border-[#E8DFD8] rounded-[24px] p-8 flex flex-col justify-between text-left relative overflow-hidden group shadow-sm h-full">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#777777] uppercase block mb-2">TRADE SERVICES</span>
                <h3 className="text-[22px] font-bold font-serif text-[#5E4023] m-0 mb-3 leading-snug">Everything You Need.</h3>
                <p className="text-[13px] text-[#4A4A4A] leading-relaxed mb-6 font-medium">
                  End-to-end solutions for your business operations.
                </p>
              </div>
              <Link 
                to="/retail-management" 
                className="px-6 py-3 text-white text-[11px] font-bold tracking-widest uppercase rounded-full w-fit border-none shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
                style={{ background: '#777777' }}
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight size={12} />
              </Link>
            </div>
            
            {/* Blurry background image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="/images/premium_fabrics.png" 
                alt="" 
                className="w-full h-full object-cover filter blur-[8px] opacity-[0.1] transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. FEATURED COLLECTION SECTION (NO PRICES OR CARTS) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-10">
        <div className="flex justify-between items-end mb-8 border-b border-[#E8DFD8] pb-4">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-[#5E4023] font-serif uppercase tracking-wider m-0">
            FEATURED COLLECTION
          </h2>
          <Link 
            to="/products"
            className="text-[11px] font-bold text-[#8C6239] hover:text-[#5B84B1] tracking-widest uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Grid of Featured Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {allProducts.slice(0, 6).map((prod, idx) => (
            <div 
              key={prod.id || idx}
              className="group flex flex-col text-left rounded-2xl overflow-hidden bg-white border border-[#E8DFD8] shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-[#FAF6F0] relative">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Body (NO price and NO cart icons) */}
              <div className="p-4 flex flex-col flex-grow bg-white">
                <span className="text-[9px] font-bold text-[#5B84B1] uppercase tracking-wider mb-1">
                  {prod.category}
                </span>
                <h4 className="text-[13px] font-bold text-[#5E4023] m-0 mb-3 leading-snug font-serif line-clamp-1">
                  {prod.name}
                </h4>
                <Link
                  to={`/products?category=${encodeURIComponent(prod.category)}`}
                  className="w-full py-2 bg-transparent text-[#8C6239] hover:bg-[#8C6239] hover:text-white border border-[#E8DFD8] rounded-xl text-[10px] font-bold tracking-widest uppercase text-center text-decoration-none transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. FROM OUR BLOG SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-10 pb-16">
        <div className="flex justify-between items-end mb-8 border-b border-[#E8DFD8] pb-4">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-[#5E4023] font-serif uppercase tracking-wider m-0">
            FROM OUR BLOG
          </h2>
          <Link 
            to="/blog"
            className="text-[11px] font-bold text-[#8C6239] hover:text-[#5B84B1] tracking-widest uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
          >
            <span>VIEW ALL ARTICLES</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="group flex flex-col text-left rounded-2xl overflow-hidden bg-white border border-[#E8DFD8] shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF6F0]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-[#5B84B1] uppercase tracking-wider mb-2">
                  {post.date}
                </span>
                <h4 className="text-[14px] font-bold text-[#5E4023] m-0 mb-4 font-serif leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <Link
                  to="/blog"
                  className="text-[10.5px] font-bold text-[#8C6239] hover:text-[#5B84B1] tracking-widest uppercase text-decoration-none transition-colors mt-auto flex items-center gap-1"
                >
                  <span>READ MORE</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
