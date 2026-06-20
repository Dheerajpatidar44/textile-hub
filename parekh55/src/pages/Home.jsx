import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, Gavel, ClipboardCheck, ShoppingBag, Award, ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#043e3d',        // Deep Teal Green
  primaryLight: '#065452',
  primaryDark: '#022625',
  accent: '#C39A58',         // Luxury Gold
  accentLight: '#F6F1EA',
  gold: '#C39A58',
  bg: '#FAF6F0',             // Warm Soft Cream Background
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



const slides = [
  {
    regularText: "Heritage in Threads.",
    italicText: "Luxury in Every Weave.",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    const currentModulo = ((current % 3) + 3) % 3;
    let diff = index - currentModulo;
    if (diff > 1) diff -= 3;
    if (diff < -1) diff += 3;
    setCurrent((prev) => prev + diff);
  };

  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full pt-2 pb-8 sm:pt-4 sm:pb-10 lg:pt-6 lg:pb-12 px-4 sm:px-8 lg:px-14 bg-[#F5EFEB] overflow-hidden border-b border-[#E6E1D8]">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-radial-gradient(circle, rgba(4, 62, 61, 0.02) 0%, transparent 70%)" />
        
        <div className="max-w-[90rem] mx-auto relative z-10">
          
          <div className="relative min-h-[460px] lg:min-h-[520px] flex items-center">
            {/* Chevron Left Button */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-4 z-30 w-10 h-10 items-center justify-center rounded-full border border-white/20 text-white bg-[#043e3d]/80 hover:bg-[#C39A58] transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="w-full overflow-hidden py-4 -my-4 relative min-h-[460px] lg:min-h-[520px]">
              <motion.div
                className="w-full absolute inset-0"
                animate={{ x: `${9 - current * 84}%` }}
                transition={{ type: "spring", stiffness: 150, damping: 22 }}
              >
                {[current - 2, current - 1, current, current + 1, current + 2].map((idx) => {
                  const slideIdx = ((idx % 3) + 3) % 3;
                  const slide = slides[slideIdx];
                  const isActive = idx === current;
                  return (
                    <motion.div
                      key={idx}
                      className="w-[82%] absolute top-0 rounded-[24px] overflow-hidden border border-[#E6E1D8] bg-[#FAF6F0] shadow-xl grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]"
                      style={{ left: `${idx * 84}%` }}
                      animate={{
                        scale: isActive ? 1 : 0.94,
                        opacity: isActive ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {/* Left Side: Content Box (Desktop: Deep Teal Bg, Mobile: Cream Bg) */}
                      <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-left relative z-10 bg-[#043e3d] text-white lg:bg-[#043e3d] max-lg:bg-[#FAF6F0] max-lg:text-[#043e3d] space-y-6">
                        <div className="space-y-4">
                          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C39A58] uppercase block">
                            PARIDHI TEXTILES
                          </span>
                          <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal leading-[1.15] tracking-tight font-serif text-white max-lg:text-[#043e3d]">
                            {slide.regularText}<br />
                            <span className="font-serif italic font-light text-[#C39A58] max-lg:text-[#C39A58]">
                              {slide.italicText}
                            </span>
                          </h1>
                        </div>

                        <p className="text-[13px] sm:text-[15px] text-white/80 max-lg:text-[#4A5A59] leading-relaxed max-w-lg font-medium">
                          {slide.desc}
                        </p>

                        <div className="pt-4">
                          <Link
                            to={slide.path}
                            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#C39A58] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#043e3d] max-lg:bg-[#043e3d] max-lg:hover:bg-[#C39A58] rounded-full shadow-md hover:scale-[1.02]"
                          >
                            EXPLORE COLLECTIONS →
                          </Link>
                        </div>
                      </div>

                      {/* Right Side: Image Box */}
                      <div className="lg:col-span-5 relative w-full h-[320px] lg:h-full overflow-hidden bg-white max-lg:order-first">
                        <img
                          src={slide.image}
                          alt="Paridhi Textiles Banner"
                          className="w-full h-full object-cover"
                        />
                        {/* Blend overlays for desktop vs mobile */}
                        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#043e3d] to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Chevron Right Button */}
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-4 z-30 w-10 h-10 items-center justify-center rounded-full border border-white/20 text-white bg-[#043e3d]/80 hover:bg-[#C39A58] transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-2.5 justify-center mt-6">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 border-none cursor-pointer p-0 ${idx === ((current % 3) + 3) % 3 ? 'bg-[#043e3d] w-6' : 'bg-[#043e3d]/20 hover:bg-[#043e3d]/40'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. SHOP BY CATEGORY SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 text-center border-b border-[#E6E1D8]">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-8 h-[1px] bg-[#C39A58]" />
          <h2 className="text-[26px] sm:text-[32px] font-normal text-[#043e3d] tracking-wider font-serif uppercase">
            SHOP BY CATEGORY
          </h2>
          <div className="w-8 h-[1px] bg-[#C39A58]" />
        </div>

        {/* 6-Column Grid responsive for 12 Categories */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name === 'Women Wear' ? 'Formal & Ethnic Wear for Women' : cat.name === 'Men Wear' ? 'Formal & Ethnic Wear for Men' : cat.name === 'Children Wear' ? 'Formal & Ethnic Wear for Children' : cat.name === 'Home Furnishing' ? 'Home Upholstery & Furnishing' : cat.name === 'Hosiery' ? 'Hosiery Items' : cat.name)}`}
              className="group flex flex-col items-center gap-3 transition-all duration-300"
            >
              {/* Circular Avatar without borders */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#FAF6F0] shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Label */}
              <span className="text-[12px] font-bold text-[#043e3d] tracking-wider font-sans group-hover:text-[#C39A58] transition-colors duration-300">
                {cat.name}
              </span>
            </Link>
          ))}
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
              <Link to="/products" className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-[#C39A58] hover:text-white transition-colors">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#043e3d] via-[#043e3d]/40 to-transparent" />
            </div>
          </div>

          {/* Card 2: Reliable. Transparent. Retailer Focused */}
          <div className="rounded-[24px] border border-[#E6E1D8] p-8 flex flex-col justify-between h-[280px] relative text-[#043e3d]" style={{ background: '#FAF6F0' }}>
            <div className="relative z-10 text-left space-y-3">
              <h3 className="text-xl sm:text-2xl font-normal leading-snug font-serif">
                Reliable. Transparent.<br />
                Retailer Focused.
              </h3>
              <p className="text-[12px] text-[#4A5A59] font-medium leading-relaxed max-w-[240px]">
                Building stronger businesses together.
              </p>
            </div>
            
            <div className="relative z-10 text-left">
              <Link to="/about" className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-[#043e3d] hover:text-[#C39A58] transition-colors">
                OUR PROMISE <ArrowRight size={12} />
              </Link>
            </div>

            {/* Elegant Leaf vector / decoration in bottom right */}
            <div className="absolute right-4 bottom-4 w-28 h-28 opacity-20 pointer-events-none select-none text-[#C39A58] z-0">
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
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-[#C39A58] hover:text-white transition-colors">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#043e3d] via-[#043e3d]/40 to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. STATS STRIP SECTION ── */}
      <section className="w-full py-8 text-white select-none border-t border-b border-[#E6E1D8]/10" style={{ background: C.primary }}>
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
                <h3 className="text-[28px] sm:text-[34px] font-normal font-serif text-[#C39A58] mb-0.5">{stat.val}</h3>
                <p className="text-[10px] sm:text-[11px] text-white/70 font-semibold tracking-widest uppercase">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOMEPAGE CONTACT US SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16 border-t border-[#E6E1D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact Information (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-[24px] border border-[#E6E1D8] p-8 lg:p-10 shadow-sm space-y-8">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#C39A58] uppercase block">
                GET IN TOUCH
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-normal leading-[1.2] text-[#043e3d] font-serif">
                Paridhi Textiles
              </h2>
              <p className="text-[13px] text-[#4A5A59] leading-relaxed font-medium">
                Visit our experience center or contact our sales and support teams for retail inquiries, e-quotations, and trade circles.
              </p>
            </div>

            <div className="space-y-6 text-left">
              {/* Detail 1: Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#C39A58] bg-[#043e3d]/5 border border-[#C39A58]/20">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-bold tracking-widest text-[#043e3d] uppercase font-sans">Our Address</h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4A5A59] font-medium m-0">
                    456, Textile Boulevard, Surat, Gujarat, India - 395002
                  </p>
                </div>
              </div>

              {/* Detail 2: Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#C39A58] bg-[#043e3d]/5 border border-[#C39A58]/20">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-bold tracking-widest text-[#043e3d] uppercase font-sans">Call Us</h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4A5A59] font-medium m-0">
                    Toll Free: 1800 123 4567<br />
                    Mobile: +91 98765 01234
                  </p>
                </div>
              </div>

              {/* Detail 3: Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#C39A58] bg-[#043e3d]/5 border border-[#C39A58]/20">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-bold tracking-widest text-[#043e3d] uppercase font-sans">Email & Support</h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4A5A59] font-medium m-0">
                    info@paridhitextiles.com<br />
                    sales@paridhitextiles.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 text-left">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#043e3d] hover:text-[#C39A58] uppercase transition-colors"
              >
                VIEW FULL DETAILS <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right Side: Map Container (7 columns) */}
          <div className="lg:col-span-7 rounded-[24px] overflow-hidden border border-[#E6E1D8] shadow-sm relative min-h-[350px] lg:min-h-full bg-white flex">
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E6E1D8] shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#043e3d]">Surat Textile Market Location</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(1) contrast(1.05) opacity(0.95)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paridhi Textiles Location Map"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
