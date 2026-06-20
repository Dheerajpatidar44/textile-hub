import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {  
  ArrowRight,  
  ChevronLeft,  
  ChevronRight,  
  Award,  
  ShoppingBag,  
  Truck,  
  Users,  
  Headphones,  
  Star  
} from 'lucide-react';

const C = {
  primary: '#BC4639',        // Deep Teal Green
  primaryLight: '#2C6E6E',
  primaryDark: '#103636',
  accent: '#C39A58',         // Luxury Gold Accent
  accentLight: '#F9F7F4',
  gold: '#C39A58',
  bg: '#FAF8F5',             // Warm Soft Cream Background
  border: '#E6E1D8',
  stone: '#4A5A59',          // Slate Teal Gray
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Women Wear", image: "/images/ethnic_wear.png" },
  { name: "Men Wear", image: "/images/men_ethnic_wear.png" },
  { name: "Children Wear", image: "/images/children_ethnic_wear.png" },
  { name: "Home Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80" }
];

const heroSlides = [
  {
    leftImage: "/images/hero_left.png",
    rightImage: "/images/hero_right.png",
  },
  {
    leftImage: "/images/popular_banarasi_saree.png",
    rightImage: "/images/festival_collection.png",
  },
  {
    leftImage: "/images/ethnic_wear.png",
    rightImage: "/images/everyday_elegance.png",
  },
];

const testimonials = [
  {
    quote: "Sutradhar Hub has been our trusted partner for years. Their quality and service are simply unmatched in the textile market.",
    name: "Rajesh Mehta",
    role: "Retailer, Delhi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Their range, delivery, and customer support are exceptional. Highly recommended for bulk orders.",
    name: "Priya Shah",
    role: "Boutique Owner, Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "The fabrics are elegant and timeless. Our customers love the designs and texture.",
    name: "Anil Verma",
    role: "Wholesaler, Jaipur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
  }
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevHero = () => {
    setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextHero = () => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full pt-1.5 pb-8 lg:pb-12 px-4 sm:px-8 lg:px-14 bg-[#FDFBF7] overflow-hidden border-b border-[#E6E1D8]">
        <div className="max-w-[95rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[auto] lg:min-h-[485px]">
                        
            {/* Left Image Column (Capsule Shape on Desktop, Rounded on Mobile) */}
            <div className="block lg:col-span-4 relative h-[350px] sm:h-[400px] lg:h-[480px] w-full group mb-2 lg:mb-0">
              <div  
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-white/95 text-[#BC4639] shadow-md hover:bg-[#C39A58] hover:text-white transition-all duration-300 cursor-pointer"
                onClick={handlePrevHero}
              >
                <ChevronLeft size={16} />
              </div>
              <div  
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex lg:hidden items-center justify-center rounded-full bg-white/95 text-[#BC4639] shadow-md hover:bg-[#C39A58] hover:text-white transition-all duration-300 cursor-pointer"
                onClick={handleNextHero}
              >
                <ChevronRight size={16} />
              </div>
              <div  
                className="w-full h-full overflow-hidden shadow-lg transition-all duration-700 ease-in-out rounded-[60px] lg:rounded-l-[160px] lg:rounded-r-[20px]"
                style={{ border: `1.5px solid ${C.border}` }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroIndex}
                    src={heroSlides[heroIndex].leftImage}
                    alt="Sutradhar Hub Textiles Left"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Middle Content Column */}
            <div className="col-span-1 lg:col-span-4 flex flex-col justify-center items-center text-center px-2 lg:px-4 space-y-4 lg:space-y-6">
                            
              {/* Top Badge */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C39A58] uppercase">
                  — Heritage in Every Thread —
                </span>
              </div>

              {/* Headings */}
              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.15] tracking-tight font-serif text-[#BC4639]">
                Timeless Textiles,<br />
                <span className="font-serif italic font-light text-[#BC4639]">
                  Crafted for Generations
                </span>
              </h1>

              {/* Description */}
              <p className="hidden sm:block text-[13.5px] sm:text-[14.5px] text-[#4A5A59] leading-relaxed max-w-sm font-medium">
                Discover the finest fabrics that blend tradition, innovation and unmatched quality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 lg:gap-4 justify-center items-center pt-1 lg:pt-2">
                <Link
                  to="/products"
                  className="px-6 py-3 bg-[#BC4639] text-white text-[10px] lg:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#C39A58] rounded-md shadow-sm"
                >
                  Explore Collections
                </Link>
                <Link
                  to="/contact"
                  className="hidden sm:inline-flex px-6 py-3 border border-[#BC4639] text-[#BC4639] text-[10px] lg:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#BC4639] hover:text-white rounded-md bg-transparent"
                >
                  Contact Us
                </Link>
              </div>

              {/* Slider Dots */}
              <div className="flex gap-2.5 justify-center pt-2 lg:pt-4">
                {heroSlides.map((_, idx) => (
                  <button  
                    key={idx}  
                    onClick={() => setHeroIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 border-none cursor-pointer p-0 ${idx === heroIndex ? 'bg-[#BC4639] w-5' : 'bg-[#BC4639]/20 hover:bg-[#BC4639]/40'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* Right Image Column (Capsule Shape) */}
            <div className="hidden lg:block lg:col-span-4 relative h-[480px] w-full group">
              <div  
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/95 text-[#BC4639] shadow-md hover:bg-[#C39A58] hover:text-white transition-all duration-300 cursor-pointer"
                onClick={handleNextHero}
              >
                <ChevronRight size={16} />
              </div>
              <div  
                className="w-full h-full overflow-hidden shadow-lg transition-all duration-700 ease-in-out"
                style={{ borderRadius: '20px 160px 160px 20px', border: `1.5px solid ${C.border}` }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroIndex}
                    src={heroSlides[heroIndex].rightImage}
                    alt="Sutradhar Hub Textiles Right"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 3. SHOP BY CATEGORY SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 text-center border-b border-[#E6E1D8]">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="text-left">
            <h2 className="text-[26px] sm:text-[30px] font-normal text-[#BC4639] tracking-wider font-serif uppercase m-0">
              SHOP BY CATEGORY
            </h2>
          </div>
          <Link  
            to="/products"  
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#C39A58] hover:text-[#BC4639] uppercase transition-colors"
          >
            VIEW ALL CATEGORIES →
          </Link>
        </div>

        {/* Inline style for the marquee animation */}
        <style>{`
          @keyframes categoryMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .category-marquee-inner {
            display: flex;
            width: max-content;
            animation: categoryMarquee 40s linear infinite;
          }
          .category-marquee-container:hover .category-marquee-inner {
            animation-play-state: paused;
          }
        `}</style>

        {/* Infinite Category Slider Row */}
        <div className="relative w-full overflow-hidden py-4 category-marquee-container">
          <div className="category-marquee-inner flex gap-6">
            {[...categories, ...categories].map((cat, idx) => {
              const encodedCatName = encodeURIComponent(
                cat.name === 'Women Wear' ? 'Formal & Ethnic Wear for Women' :
                cat.name === 'Men Wear' ? 'Formal & Ethnic Wear for Men' :
                cat.name === 'Children Wear' ? 'Formal & Ethnic Wear for Children' :
                cat.name === 'Home Furnishing' ? 'Home Upholstery & Furnishing' :
                cat.name === 'Hosiery' ? 'Hosiery Items' :
                cat.name
              );
              return (
                <Link
                  key={idx}
                  to={`/products?category=${encodedCatName}`}
                  className="group bg-white rounded-xl border border-[#E6E1D8] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left w-[160px] sm:w-[200px] shrink-0"
                >
                  {/* Image Container */}
                  <div className="w-full aspect-square overflow-hidden relative bg-[#FAF8F5]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Footer Strip */}
                  <div className="p-3 flex justify-between items-center bg-white border-t border-[#E6E1D8]/40">
                    <span className="text-[11px] font-bold text-[#BC4639] tracking-wider font-sans uppercase truncate mr-2">
                      {cat.name}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#BC4639]/5 text-[#BC4639] flex items-center justify-center shrink-0 group-hover:bg-[#BC4639] group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. THREE B2B SERVICES BANNER BLOCKS ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 border-b border-[#E6E1D8]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
          {/* Card 1: e-Auction (Cream Background) */}
          <div className="rounded-xl border border-[#E6E1D8] p-6 flex flex-col justify-between h-[190px] relative text-[#BC4639]" style={{ background: '#FAF8F5' }}>
            <div className="relative z-10 max-w-[210px] text-left space-y-2">
              <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C39A58]">
                e-AUCTION
              </span>
              <h3 className="text-lg sm:text-xl font-normal leading-snug font-serif text-[#BC4639]">
                Bid. Win. Grow.
              </h3>
              <p className="text-[11.5px] text-[#4A5A59] font-medium leading-relaxed">
                Participate in live auctions and win the best deals.
              </p>
            </div>
            <div className="relative z-10 text-left">
              <Link  
                to="/e-auction"  
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#BC4639] text-[#BC4639] text-[10px] font-bold uppercase tracking-widest rounded-md hover:bg-[#BC4639] hover:text-white transition-all bg-transparent"
              >
                JOIN LIVE AUCTIONS
              </Link>
            </div>
          </div>

          {/* Card 2: e-Quotation (Cream Background) */}
          <div className="rounded-xl border border-[#E6E1D8] p-6 flex flex-col justify-between h-[190px] relative text-[#BC4639]" style={{ background: '#FAF8F5' }}>
            <div className="relative z-10 max-w-[210px] text-left space-y-2">
              <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C39A58]">
                e-QUOTATION
              </span>
              <h3 className="text-lg sm:text-xl font-normal leading-snug font-serif">
                Get Instant Quotes
              </h3>
              <p className="text-[11.5px] text-[#4A5A59] font-medium leading-relaxed">
                Request a quote and get the best pricing for bulk orders.
              </p>
            </div>
                        
            <div className="relative z-10 text-left">
              <Link  
                to="/e-quotation"  
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#BC4639] text-[#BC4639] text-[10px] font-bold uppercase tracking-widest rounded-md hover:bg-[#BC4639] hover:text-white transition-all bg-transparent"
              >
                REQUEST QUOTE
              </Link>
            </div>
          </div>

          {/* Card 3: Trade Services (Cream Background) */}
          <div className="rounded-xl border border-[#E6E1D8] p-6 flex flex-col justify-between h-[190px] relative text-[#BC4639]" style={{ background: '#FAF8F5' }}>
            <div className="relative z-10 max-w-[210px] text-left space-y-2">
              <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C39A58] uppercase">
                TRADE SERVICES
              </span>
              <h3 className="text-lg sm:text-xl font-normal leading-snug font-serif text-[#BC4639]">
                Everything You Need
              </h3>
              <p className="text-[11.5px] text-[#4A5A59] font-medium leading-relaxed">
                End-to-end services and logistics for your business.
              </p>
            </div>
            <div className="relative z-10 text-left">
              <Link  
                to="/retail-management"  
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#BC4639] text-[#BC4639] text-[10px] font-bold uppercase tracking-widest rounded-md hover:bg-[#BC4639] hover:text-white transition-all bg-transparent"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 text-center border-b border-[#E6E1D8]">
        <div className="mb-10 text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#C39A58] uppercase block mb-1">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-[26px] sm:text-[30px] font-normal text-[#BC4639] tracking-wider font-serif uppercase m-0">
            Client Testimonials
          </h2>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div  
              key={idx}
              className="bg-white rounded-xl border border-[#E6E1D8] p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-[#C39A58]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>
                {/* Testimonial Quote */}
                <p className="text-[13px] text-[#4A5A59] leading-relaxed font-medium italic">
                  "{item.quote}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#E6E1D8]/45">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[12.5px] font-bold text-[#BC4639] m-0">{item.name}</h4>
                  <p className="text-[11px] text-[#4A5A59] font-medium m-0">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. ABOUT US STRIP (MINIMAL PREVIEW) ── */}
      <section className="max-w-[95rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 border-t border-[#E6E1D8]/60">
        <div className="bg-white rounded-xl border border-[#E6E1D8] p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Text Column */}
          <div className="flex-1 text-left space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#C39A58] uppercase block">
              OUR STORY
            </span>
            <h2 className="text-[26px] sm:text-[30px] font-normal leading-tight text-[#BC4639] font-serif uppercase">
              ABOUT SUTRADHAR HUB
            </h2>
            <p className="text-[13px] text-[#4A5A59] leading-relaxed font-medium max-w-xl">
              Sutradhar Hub brings together centuries of Indian weaving craftsmanship with contemporary design. We partner directly with master artisans to supply high-quality textiles, ethnic wear, and premium home linen to businesses and retail clients nationwide.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#BC4639] text-white text-[10.5px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#C39A58] rounded-md shadow-sm"
              >
                READ OUR FULL STORY
              </Link>
            </div>
          </div>

          {/* Right Small Image */}
          <div className="w-full md:w-[320px] shrink-0">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E6E1D8] shadow-sm bg-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=500&auto=format&fit=crop&q=80"
                alt="Sutradhar Hub Loom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
