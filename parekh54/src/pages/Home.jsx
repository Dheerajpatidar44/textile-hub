import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, MapPin, Smile, FileText, Gavel, ClipboardCheck, ShoppingBag, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

const C = {
  primary: '#5A1827',        // Royal Maroon/Burgundy
  primaryLight: '#7A2A39',
  primaryDark: '#3D0B15',
  accent: '#C2A478',         // Luxury Gold
  accentLight: '#E8DCC4',
  gold: '#C2A478',
  bg: '#FAF6F0',             // Warm Soft Cream Background
  border: '#E6E1D8',
  stone: '#6B5C5D',          // Slate Burgundy Gray
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

const features = [
  { title: "e-Quotation", desc: "Get instant quotes for your requirements", icon: FileText, path: "/e-quotation" },
  { title: "e-Auction", desc: "Participate in live textile auctions", icon: Gavel, path: "/e-auction" },
  { title: "Trade Enquiry", desc: "Connect with our expert team", icon: ClipboardCheck, path: "/trade-enquiry" },
  { title: "Retail Management", desc: "Smart solutions for retailers", icon: ShoppingBag, path: "/retail-management" },
  { title: "Trade Circular", desc: "Latest updates & announcements", icon: Award, path: "/trade-circular" },
];

const featuredCollections = [
  { name: "Wedding Edit", tag: "Timeless Traditions", image: "/images/wedding_collection.png" },
  { name: "Festival Collection", tag: "Celebrate in Style", image: "/images/festival_collection.png" },
  { name: "Everyday Elegance", tag: "Comfort & Class", image: "/images/everyday_elegance.png" },
  { name: "Home Essentials", tag: "Luxury Living", image: "/images/home_essentials.png" }
];

const slides = [
  {
    regularText: "Crafted in Tradition.",
    italicText: "Designed for Generations.",
    desc: "Discover unmatched quality, timeless traditions and trendsetting collections under one roof.",
    image: "/images/hero_saree_banner.png",
    path: "/products"
  },
  {
    regularText: "Luxurious Weaves.",
    italicText: "Handcrafted Heritage.",
    desc: "Explore our rich Banarasi, Kanjeevaram and festival edits made with pure love and precision.",
    image: "/images/festival_collection.png",
    path: "/products?category=Sarees"
  },
  {
    regularText: "Modern Silhouettes.",
    italicText: "Elegant Everyday Wear.",
    desc: "Redefine your style with contemporary kurtis, dress suits and premium fabrics tailored for comfort.",
    image: "/images/everyday_elegance.png",
    path: "/products?category=Kurtis"
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full pt-2 pb-8 sm:pt-4 sm:pb-10 lg:pt-6 lg:pb-12 px-4 sm:px-8 lg:px-14 bg-[#F5EFEB] overflow-hidden border-b border-[#E6E1D8]">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-radial-gradient(circle, rgba(90, 24, 39, 0.02) 0%, transparent 70%)" />
        
        <div className="max-w-[90rem] mx-auto relative z-10 min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] flex items-center">
          
          {/* Chevron Left Button */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 z-30 w-10 h-10 items-center justify-center rounded-full border border-[#5A1827]/20 text-[#5A1827] bg-white/90 hover:bg-[#5A1827] hover:text-white hover:border-[#5A1827] transition-all duration-300 shadow-md cursor-pointer -translate-x-2 lg:-translate-x-6"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={{
                enter: (dir) => ({
                  x: dir > 0 ? 100 : -100,
                  opacity: 0
                }),
                center: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }
                },
                exit: (dir) => ({
                  x: dir < 0 ? 100 : -100,
                  opacity: 0,
                  transition: {
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }
                })
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
            >
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 text-left space-y-5">
                <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.1] text-[#5A1827] tracking-tight font-serif">
                  {slides[current].regularText}<br />
                  <span className="font-serif italic font-light">{slides[current].italicText}</span>
                </h1>

                <p className="text-[13px] sm:text-[15px] text-[#6B5C5D] leading-relaxed max-w-xl font-medium">
                  {slides[current].desc}
                </p>

                <div className="pt-2">
                  <Link
                    to={slides[current].path}
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#5A1827] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#C2A478] rounded-[4px] shadow-md hover:scale-[1.01]"
                  >
                    EXPLORE COLLECTIONS
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Image Frame */}
              <div className="lg:col-span-5 flex justify-center w-full relative">
                <div className="w-full max-w-[380px] aspect-[4/5] rounded-[36px] overflow-hidden border border-[#E6E1D8] shadow-2xl relative bg-white">
                  <img
                    src={slides[current].image}
                    alt={slides[current].regularText}
                    className="w-full h-full object-cover scale-[1.01] hover:scale-[1.04] transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-[#5A1827]/5 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Chevron Right Button */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 z-30 w-10 h-10 items-center justify-center rounded-full border border-[#5A1827]/20 text-[#5A1827] bg-white/90 hover:bg-[#5A1827] hover:text-white hover:border-[#5A1827] transition-all duration-300 shadow-md cursor-pointer translate-x-2 lg:translate-x-6"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-14 relative z-20 flex gap-2.5 pt-2">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 border-none cursor-pointer p-0 ${idx === current ? 'bg-[#5A1827] scale-125' : 'bg-[#5A1827]/20 hover:bg-[#5A1827]/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── 2. SHOP BY CATEGORY SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 text-center border-b border-[#E6E1D8]">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-8 h-[1px] bg-[#C2A478]" />
          <h2 className="text-[26px] sm:text-[32px] font-normal text-[#5A1827] tracking-wider font-serif uppercase">
            SHOP BY CATEGORY
          </h2>
          <div className="w-8 h-[1px] bg-[#C2A478]" />
        </div>

        {/* 6-Column Grid responsive for 12 Categories */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name === 'Women Wear' ? 'Formal & Ethnic Wear for Women' : cat.name === 'Men Wear' ? 'Formal & Ethnic Wear for Men' : cat.name === 'Children Wear' ? 'Formal & Ethnic Wear for Children' : cat.name === 'Home Furnishing' ? 'Home Upholstery & Furnishing' : cat.name === 'Hosiery' ? 'Hosiery Items' : cat.name)}`}
              className="group flex flex-col items-center gap-3 transition-all duration-300"
            >
              {/* Circular Avatar with double border rings */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#C2A478]/30 p-1 transition-colors duration-300 group-hover:border-[#5A1827]/60">
                <div className="w-full h-full rounded-full border border-dashed border-[#C2A478]/50 p-1 group-hover:border-[#5A1827]/40 transition-colors duration-300 overflow-hidden bg-[#FAF6F0]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Label */}
              <span className="text-[12px] font-bold text-[#5A1827] tracking-wider font-sans group-hover:text-[#C2A478] transition-colors duration-300">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. SERVICES ROW SECTION ── */}
      <section className="bg-white border-b border-[#E6E1D8] py-8 lg:py-12">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E1D8] text-left">
            {features.map((feat, idx) => (
              <Link
                key={idx}
                to={feat.path}
                className="group flex gap-4 pt-6 sm:pt-0 sm:pl-6 first:pl-0 first:pt-0 items-start cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#C2A478] bg-[#C2A478]/10 group-hover:bg-[#5A1827] group-hover:text-white transition-colors duration-300">
                  <feat.icon size={18} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[13px] font-bold tracking-wide text-[#5A1827] font-sans group-hover:text-[#C2A478] transition-colors duration-200">
                    {feat.title}
                  </h4>
                  <p className="text-[11.5px] leading-relaxed text-[#6B5C5D] font-medium">
                    {feat.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THREE BANNER BLOCKS SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Wide Range of Premium Fabrics */}
          <div className="rounded-[24px] overflow-hidden p-8 flex flex-col justify-between h-[280px] relative text-white" style={{ background: C.primary }}>
            <div className="relative z-10 max-w-[200px] text-left space-y-3">
              <h3 className="text-xl sm:text-2xl font-normal leading-snug font-serif text-white">
                Wide Range Of Premium Fabrics For Every Need
              </h3>
              <p className="text-[12px] text-white/80 font-medium leading-relaxed">
                Experience luxury, quality and comfort in every thread.
              </p>
            </div>
            <div className="relative z-10 text-left">
              <Link to="/products" className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-[#C2A478] hover:text-white transition-colors">
                DISCOVER MORE <ArrowRight size={12} />
              </Link>
            </div>
            {/* Background fabric rolls */}
            <div className="absolute right-0 bottom-0 top-0 w-[180px] h-full z-0 overflow-hidden">
              <img
                src="/images/folded_fabrics.png"
                alt="Premium Fabrics Rolls"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5A1827] via-[#5A1827]/40 to-transparent" />
            </div>
          </div>

          {/* Card 2: Reliable. Transparent. Retailer Focused */}
          <div className="rounded-[24px] border border-[#E6E1D8] p-8 flex flex-col justify-between h-[280px] relative text-[#5A1827]" style={{ background: '#FAF6F0' }}>
            <div className="relative z-10 text-left space-y-3">
              <h3 className="text-xl sm:text-2xl font-normal leading-snug font-serif">
                Reliable. Transparent.<br />
                Retailer Focused.
              </h3>
              <p className="text-[12px] text-[#6B5C5D] font-medium leading-relaxed max-w-[240px]">
                Building stronger businesses together.
              </p>
            </div>
            
            <div className="relative z-10 text-left">
              <Link to="/about" className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-[#5A1827] hover:text-[#C2A478] transition-colors">
                OUR PROMISE <ArrowRight size={12} />
              </Link>
            </div>

            {/* Elegant Leaf vector / decoration in bottom right */}
            <div className="absolute right-4 bottom-4 w-28 h-28 opacity-20 pointer-events-none select-none text-[#C2A478] z-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M17 8C8 10 9 21 9 21s-8-10 1-13c5-1.6 7-3 7-3s-2 3-8 3" />
              </svg>
            </div>
          </div>

          {/* Card 3: Strengthening Businesses Together */}
          <div className="rounded-[24px] overflow-hidden p-8 flex flex-col justify-between h-[280px] relative text-white" style={{ background: C.primary }}>
            <div className="relative z-10 max-w-[200px] text-left space-y-3">
              <h3 className="text-xl sm:text-2xl font-normal leading-snug font-serif text-white">
                Strengthening Businesses Together
              </h3>
              <p className="text-[12px] text-white/80 font-medium leading-relaxed">
                Be a part of our growing retail network.
              </p>
            </div>
            <div className="relative z-10 text-left">
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-[#C2A478] hover:text-white transition-colors">
                JOIN NETWORK <ArrowRight size={12} />
              </Link>
            </div>
            {/* Handshake image background */}
            <div className="absolute right-0 bottom-0 top-0 w-[180px] h-full z-0 overflow-hidden">
              <img
                src="/images/handshake_partnership.png"
                alt="Partnership Handshake"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5A1827] via-[#5A1827]/40 to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. STATS STRIP SECTION ── */}
      <section className="w-full py-8 text-white select-none border-t border-b border-[#E6E1D8]" style={{ background: C.primary }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10 text-center">
            {[
              { val: "35+", desc: "Years of Trust" },
              { val: "1000+", desc: "Retail Outlets" },
              { val: "5000+", desc: "Products" },
              { val: "25K+", desc: "Happy Retailers" },
              { val: "24/7", desc: "Dedicated Support" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-4 lg:pt-0 first:pt-0">
                <h3 className="text-[28px] sm:text-[34px] font-normal font-serif text-[#C2A478] mb-0.5">{stat.val}</h3>
                <p className="text-[10px] sm:text-[11px] text-white/70 font-semibold tracking-widest uppercase">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FEATURED COLLECTIONS SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left flex items-center gap-4">
            <div className="w-6 h-[1.5px] bg-[#C2A478]" />
            <h2 className="text-[24px] sm:text-[28px] font-normal text-[#5A1827] tracking-wide font-serif uppercase">
              FEATURED COLLECTIONS
            </h2>
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#5A1827] hover:text-[#C2A478] uppercase transition-colors"
          >
            VIEW ALL
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* 4-Column Grid for collections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCollections.map((col, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(col.name === 'Home Essentials' ? 'Home Upholstery & Furnishing' : col.name === 'Everyday Elegance' ? 'Kurtis' : col.name === 'Festival Collection' ? 'Sarees' : 'Sarees')}`}
              className="group flex flex-col justify-end overflow-hidden rounded-[24px] border border-[#E6E1D8] bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1.5 aspect-[4/5] relative"
            >
              {/* Collection Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Text overlay bottom */}
              <div className="p-6 text-left relative z-10 space-y-1">
                <span className="text-[10px] font-bold text-[#C2A478] tracking-widest uppercase block">
                  {col.tag}
                </span>
                <h3 className="text-[18px] font-normal text-white leading-tight font-serif">
                  {col.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
