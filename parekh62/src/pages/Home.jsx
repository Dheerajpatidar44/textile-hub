import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';

const C = {
  primary: '#96BADE',       // Dark Classic Blue
  primaryLight: '#4B70F5',
  primaryDark: '#000B58',
  accent: '#3FA2F6',        // Sky Blue
  gold: '#96BADE',          
  bg: '#F4F8FC',
  border: '#D0E1FD',
  stone: '#4A5568',
  soil: '#96BADE',
};

const reviews = [
  { text: "Saanjh Textiles has been our trusted partner for years. The quality, and B2B quotation services are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time and rework.", name: "Anita Desai", role: "Design Head, Mumbai", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
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
    "/images/image.png",
    "/images/image copy.png",
    "/images/image copy 2.png",
    "/images/image copy 3.png",
    "/images/image copy 4.png"
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
    <div style={{ background: '#F4F8FC', fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-12 md:pt-16 pb-16">
      
      {/* ── 1. HERO SECTION (3D STACKED CAROUSEL) ── */}
      <section className="w-full py-4 md:py-6 relative z-10 px-0 overflow-hidden">
        
        {/* Absolute Left & Right Navigation Chevrons */}
        <button 
          onClick={handlePrevHero}
          className="absolute left-2 sm:left-4 md:left-6 top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg text-[#96BADE] hover:text-[#4B70F5] hover:scale-105 active:scale-95 transition-all z-30 border-none cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNextHero}
          className="absolute right-2 sm:right-4 md:right-6 top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg text-[#96BADE] hover:text-[#4B70F5] hover:scale-105 active:scale-95 transition-all z-30 border-none cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <div className="relative w-full h-[230px] sm:h-[320px] lg:h-[450px] perspective-[1000px] mt-2 mb-4">
          {heroImages.map((src, index) => {
            return (
              <motion.div
                key={index}
                animate={getPosition(index, heroIdx)}
                variants={slideVariants}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="absolute left-0 right-0 mx-auto top-0 w-[82%] sm:w-[70%] lg:w-[58%] h-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl bg-[#D0E1FD]"
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
                  ? '#96BADE' 
                  : '#D0E1FD'
              }}
            />
          ))}
        </div>
      </section>


      {/* ── 3. RETAIL MANAGEMENT PROMO BANNER ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-8">
        <Link 
          to="/retail-management"
          className="relative w-full h-[260px] sm:h-[340px] rounded-[24px] overflow-hidden shadow-md group block"
        >
          {/* Background Image */}
          <img 
            src="/images/image copy 2.png" 
            alt="Retail Management background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay color */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000B58]/80 via-[#96BADE]/75 to-transparent transition-opacity duration-300" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center items-start text-left z-10">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#3FA2F6] uppercase mb-2">
              OUR RETAIL MANAGEMENT
            </span>
            <h3 className="text-[24px] sm:text-[34px] font-bold text-white font-serif m-0 mb-3 leading-tight">
              Decades of Textile Excellence
            </h3>
            <p className="text-[14px] sm:text-[17px] text-[#E6F0FA] max-w-[420px] sm:max-w-[580px] leading-relaxed mb-0 font-medium opacity-95">
              Administered by highly skilled management to govern our retail outlets. Discover our operations, goals, and values.
            </p>
          </div>
          
          {/* CTA icon / link indicator */}
          <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-10 z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#96BADE] flex items-center justify-center transition-all duration-300 shadow-md">
              <ArrowRight size={18} />
            </div>
          </div>
        </Link>
      </section>

      {/* ── 5. FEATURED COLLECTION SECTION (NO PRICES OR CARTS) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-10">
        <div className="flex justify-between items-end mb-8 border-b border-[#D0E1FD] pb-4">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-[#000B58] font-serif uppercase tracking-wider m-0">
            FEATURED COLLECTION
          </h2>
          <Link 
            to="/products"
            className="text-[11px] font-bold text-[#96BADE] hover:text-[#3FA2F6] tracking-widest uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
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
              className="group flex flex-col text-left rounded-2xl overflow-hidden bg-white border border-[#D0E1FD] shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-[#F4F8FC] relative">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Body (NO price and NO cart icons) */}
              <div className="p-4 flex flex-col flex-grow bg-white">
                <span className="text-[9px] font-bold text-[#3FA2F6] uppercase tracking-wider mb-1">
                  {prod.category}
                </span>
                <h4 className="text-[13px] font-bold text-[#000B58] m-0 mb-3 leading-snug font-serif line-clamp-1">
                  {prod.name}
                </h4>
                <Link
                  to={`/products?category=${encodeURIComponent(prod.category)}`}
                  className="w-full py-2 bg-transparent text-[#96BADE] hover:bg-[#96BADE] hover:text-white border border-[#D0E1FD] rounded-xl text-[10px] font-bold tracking-widest uppercase text-center text-decoration-none transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. CUSTOMER REVIEWS SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-10 pb-16">
        <div className="flex justify-between items-end mb-8 border-b border-[#D0E1FD] pb-4">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-[#000B58] font-serif uppercase tracking-wider m-0">
            Customer Reviews
          </h2>
          <Link 
            to="/reviews"
            className="text-[11px] font-bold text-[#96BADE] hover:text-[#3FA2F6] tracking-widest uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
          >
            <span>VIEW ALL REVIEWS</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 4 Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="group flex flex-col justify-between text-left rounded-2xl overflow-hidden bg-white border border-[#D0E1FD] shadow-sm p-6 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-[#3FA2F6]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[13px] text-[#4A5568] leading-relaxed font-semibold italic">
                  "{review.text}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="flex items-center gap-3.5 pt-4 mt-6 border-t border-[#D0E1FD]/45">
                {review.avatar && (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#D0E1FD]"
                  />
                )}
                <div>
                  <h4 className="text-[12px] font-bold text-[#000B58] m-0">{review.name}</h4>
                  <p className="text-[11px] text-[#4A5568] font-medium m-0">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
