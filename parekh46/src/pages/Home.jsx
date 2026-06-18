import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play, CheckCircle2, Globe, Shield, Award, Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  primaryLight: '#1E2D4A',
  accent: '#DE5B49',         // Terracotta Red
  accentLight: '#EB7C6E',
  sage: '#527C68',           // Sage Green (replacing yellow)
  bg: '#FAF9F5',             // Warm Ivory Background
  border: '#EAEAEA',
  stone: '#5A6F8F',
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80" }
];

export default function Home() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. SPLIT HERO SECTION (Matching the reference image) ── */}
      <section 
        className="w-full py-10 lg:py-16 flex items-center overflow-hidden" 
        style={{ background: '#E6F1F7' }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left flex flex-col items-start z-10">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#5A6F8F] uppercase mb-3 block">
                Heritage. Handcrafted. Heartfelt.
              </span>
              
              <h1 className="text-[44px] sm:text-[56px] font-light leading-[1.1] text-[#111E38] mb-5 tracking-tight">
                Timeless Textiles,<br />
                <span style={{ color: C.accent, fontWeight: 500 }} className="italic font-serif">
                  Woven for <br />
                  Generations.
                </span>
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#5A6F8F] mb-8 leading-relaxed font-medium max-w-md">
                Discover the finest fabrics that blend heritage craftsmanship with modern elegance.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-4 px-8 py-3.5 bg-[#111E38] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#DE5B49] rounded-full shadow-lg group"
                >
                  EXPLORE COLLECTIONS
                  <div className="w-6 h-6 rounded-full bg-[#DE5B49] group-hover:bg-white flex items-center justify-center transition-colors">
                    <ArrowRight size={10} className="text-white group-hover:text-[#DE5B49]" />
                  </div>
                </Link>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <button
                    key={dot}
                    onClick={() => setActiveDot(dot)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeDot === dot ? 'bg-[#111E38] w-6' : 'bg-[#111E38]/20'}`}
                    aria-label={`Go to slide ${dot + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Visual Image Stack Column: Redesigned into 2x2 grid of landscape rounded images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3 max-w-[520px] mx-auto lg:mr-0 w-full">
              {/* Image 1: Indigo Textile details */}
              <div 
                className="w-full aspect-[4/3] overflow-hidden shadow-lg"
                style={{ borderRadius: '16px', border: '3px solid #ffffff' }}
              >
                <img 
                  src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Premium woven textile threads" 
                  className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-700" 
                />
              </div>

              {/* Image 2: Traditional Saree embroidery details */}
              <div 
                className="w-full aspect-[4/3] overflow-hidden shadow-lg"
                style={{ borderRadius: '16px', border: '3px solid #ffffff' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Embroidery and golden threads on traditional saree fabric" 
                  className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-700" 
                />
              </div>

              {/* Image 3: Premium Bedroom setup */}
              <div 
                className="w-full aspect-[4/3] overflow-hidden shadow-lg"
                style={{ borderRadius: '16px', border: '3px solid #ffffff' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80" 
                  alt="Cozy styled bedroom linen setting" 
                  className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-700" 
                />
              </div>

              {/* Image 4: Modern home curtains/interior fabrics */}
              <div 
                className="w-full aspect-[4/3] overflow-hidden shadow-lg"
                style={{ borderRadius: '16px', border: '3px solid #ffffff' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=80" 
                  alt="Luxury home curtains and furniture textiles layout" 
                  className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-700" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 3. SHOP BY CATEGORY SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAEAEA]">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full" style={{ background: C.accent }} />
            <h2 className="text-[28px] font-normal text-[#111E38] tracking-tight font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Shop by Category
            </h2>
          </div>
          <Link
            to="/products"
            className="text-[11px] font-bold tracking-widest uppercase transition-colors flex items-center gap-1.5"
            style={{ color: C.accent }}
            onMouseEnter={e => e.currentTarget.style.color = C.primary}
            onMouseLeave={e => e.currentTarget.style.color = C.accent}
          >
            VIEW ALL CATEGORIES <ChevronRight size={14} />
          </Link>
        </div>

        {/* Categories Horizontal Scrolling Wrap - cards are slightly rounded */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group bg-white border border-[#EAEAEA] p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: '16px' }}
            >
              <div 
                className="w-20 h-20 rounded-full overflow-hidden mb-3 border border-[#EAEAEA] bg-[#FAF9F5] flex items-center justify-center"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-[12px] font-bold text-[#111E38] group-hover:text-[#DE5B49] transition-colors leading-tight tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. THREE PROMO CARDS (e-Auction, Bulk Orders, Trade Services) ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: e-Auction (Terracotta Red background image overlay) */}
          <div 
            className="p-8 text-white relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundImage: 'linear-gradient(rgba(222, 91, 73, 0.78), rgba(222, 91, 73, 0.93)), url("/images/image copy.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              minHeight: '360px'
            }}
          >
            <div className="z-10 text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2 block">LIVE e-AUCTION</span>
              <h3 className="text-[28px] font-normal leading-tight mb-4 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Bid. Win. Grow. <br />
                Thrive. Achieve.
              </h3>
              <p className="text-[12.5px] opacity-80 mb-6 leading-relaxed max-w-xs font-semibold">
                Participate in live auctions and unlock great deals.
              </p>
            </div>
            
            <div className="z-10 text-left">
              <Link
                to="/e-auction"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#DE5B49] text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#111E38] hover:text-white rounded-full shadow-md"
              >
                JOIN LIVE AUCTIONS <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 2: Bulk Orders (Premium Sage Green replacing Yellow) */}
          <div 
            className="p-8 text-white relative overflow-hidden flex flex-col justify-between"
            style={{ background: C.sage, borderRadius: '24px', minHeight: '360px' }}
          >
            <div className="z-10 text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2 block">BULK ORDERS</span>
              <h3 className="text-[28px] font-normal leading-tight mb-4 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Better Prices, <br />
                Greater Benefits!
              </h3>
              <p className="text-[12.5px] opacity-80 mb-6 leading-relaxed max-w-xs font-semibold">
                Special pricing for bulk buyers & retailers.
              </p>
            </div>
            
            <div className="z-10 text-left">
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#527C68] text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#111E38] hover:text-white rounded-full shadow-md"
              >
                ENQUIRE NOW <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 3: Trade Services (Navy Blue background image overlay) */}
          <div 
            className="p-8 text-white relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundImage: 'linear-gradient(rgba(17, 30, 56, 0.78), rgba(17, 30, 56, 0.93)), url("/images/image.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              minHeight: '360px'
            }}
          >
            <div className="z-10 text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)] mb-2 block">TRADE SERVICES</span>
              <h3 className="text-[28px] font-normal leading-tight mb-4 font-serif text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Everything You Need, <br />
                All in One Place.
              </h3>
              <p className="text-[12.5px] text-[rgba(255,255,255,0.8)] mb-6 leading-relaxed max-w-xs font-semibold">
                End-to-end solutions for your business.
              </p>
            </div>
            
            <div className="z-10 text-left">
              <Link
                to="/retail-management"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#111E38] text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#DE5B49] hover:text-white rounded-full shadow-md"
              >
                EXPLORE SERVICES <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ── 6. PROMISE, BADGES, & STORY VIDEO SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Our Promise checklist */}
          <div className="lg:col-span-4 bg-white p-8 border border-[#EAEAEA] flex flex-col justify-between text-left" style={{ borderRadius: '24px' }}>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#5A6F8F] uppercase mb-2 block">OUR PROMISE</span>
              <h3 className="text-[28px] font-normal text-[#111E38] mb-4 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Committed to Excellence.
              </h3>
              <p className="text-[12.5px] text-[#5A6F8F] mb-8 leading-relaxed font-semibold">
                We are committed to delivering excellence in every thread, every time.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Premium Quality Assurance",
                  "Timely & Safe Delivery",
                  "Transparent Business Practices",
                  "Customer-Centric Approach"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#DE5B49] shrink-0" />
                    <span className="text-[13px] text-[#111E38] font-bold tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111E38] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#DE5B49] rounded-full shadow-md w-full"
            >
              KNOW MORE ABOUT US <ArrowRight size={12} />
            </Link>
          </div>

          {/* Column 2: Stats Badge Overlay on Indigo Fabric Pattern */}
          <div className="lg:col-span-4 relative min-h-[360px] overflow-hidden" style={{ borderRadius: '24px' }}>
            <img 
              src="https://plus.unsplash.com/premium_photo-1701701278891-b23c73052bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRibHVlJTIwY29sb3J8ZW58MHx8MHx8fDA%3D" 
              alt="Indigo traditional fabric design pattern" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            {/* Navy overlay badge */}
            <div 
              className="absolute inset-x-6 bottom-6 md:inset-y-6 md:right-6 md:left-auto md:w-[220px] p-8 text-white flex flex-col justify-center gap-6 text-center" 
              style={{ background: 'rgba(17, 30, 56, 0.95)', backdropFilter: 'blur(4px)', borderRadius: '16px' }}
            >
              <div>
                <h4 className="text-[28px] font-light leading-none m-0 font-serif" style={{ color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>36+</h4>
                <p className="text-[10px] tracking-widest uppercase opacity-70 m-0 mt-1 font-bold">Years of Trust</p>
              </div>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <h4 className="text-[28px] font-light leading-none m-0 font-serif" style={{ color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>500+</h4>
                <p className="text-[10px] tracking-widest uppercase opacity-70 m-0 mt-1 font-bold">Retail Outlets</p>
              </div>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <h4 className="text-[28px] font-light leading-none m-0 font-serif" style={{ color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>10K+</h4>
                <p className="text-[10px] tracking-widest uppercase opacity-70 m-0 mt-1 font-bold">Happy Retailers</p>
              </div>
            </div>
          </div>

          {/* Column 3: Our Craft image & Watch Story Link */}
          <div className="lg:col-span-4 bg-white border border-[#EAEAEA] flex flex-col justify-between overflow-hidden" style={{ borderRadius: '24px' }}>
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1608962714006-25d2c0926d8b?w=800&auto=format&fit=crop&q=80" 
                alt="Artisan fabric modeling traditional ethnic dress" 
                className="w-full h-full object-cover" 
              />
              {/* Play overlay button */}
              <div className="absolute inset-0 bg-[#111E38]/20 flex items-center justify-center">
                <button 
                  className="w-14 h-14 rounded-full bg-white text-[#DE5B49] flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer border-none"
                  aria-label="Play video"
                >
                  <Play size={20} fill="#DE5B49" style={{ marginLeft: 3 }} />
                </button>
              </div>
            </div>

            <div className="p-8 text-left flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-[22px] font-normal text-[#111E38] mb-3 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Our Craft. Our Pride.
                </h3>
                <p className="text-[12.5px] text-[#5A6F8F] m-0 mb-6 leading-relaxed font-semibold">
                  Every piece of fabric tells a story of tradition, skill, and passion.
                </p>
              </div>

              <a 
                href="#story" 
                className="text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5 transition-colors"
                style={{ color: C.accent }}
                onMouseEnter={e => e.currentTarget.style.color = C.primary}
                onMouseLeave={e => e.currentTarget.style.color = C.accent}
              >
                WATCH OUR STORY <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
