import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Award, Heart, Users, Activity, Layers, Briefcase, Star, User } from 'lucide-react';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  accent: '#3B82F6',         // Periwinkle/Royal Blue Highlight
  accentLight: '#60A5FA',
  bgLight: '#F0F6FA',        // Ice Blue Background
  border: '#E2E8F0',
  stone: '#64748B',
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "/images/popular_cotton_fabric.png" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/popular_lehenga.png" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80" }
];

const heroImages = [
  { path: "/images/hero_saree.png", label: "Sarees" },
  { path: "/images/hero_kurti.png", label: "Kurtis" },
  { path: "/images/hero_lehenga.png", label: "Lehengas" },
  { path: "/images/hero_pink_lehenga.png", label: "Ethnic Wear" },
  { path: "/images/hero_green_suit.png", label: "Suits" },
];

const homeReviews = [
  { text: "Zari Bloom Textile Mall has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time and rework.", name: "Anita Desai", role: "Design Head, Mumbai", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div style={{ background: '#FAFBFD', fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION ── */}
      <section 
        className="w-full pt-6 pb-12 lg:pt-8 lg:pb-20 flex items-center overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, #F0F6FA 0%, #E3EDF7 100%)' }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left flex flex-col items-start z-10">
             
              <h1 className="text-[42px] sm:text-[54px] font-extrabold leading-[1.1] text-[#111E38] mb-6 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Threads of Tradition,<br />
                <span className="text-blue-500">Woven for the Future.</span>
              </h1>

              <p className="text-[14px] sm:text-[15px] text-slate-500 mb-8 leading-relaxed font-semibold max-w-md">
                Discover timeless textiles crafted with heritage, designed for generations to come. Explore our premium collections, custom e-Auctions, and e-Quotations.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-blue-500 text-white text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#111E38] rounded-full shadow-lg shadow-blue-500/20 group"
                >
                  EXPLORE COLLECTIONS
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center gap-2">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-blue-500 w-6' : 'bg-slate-300'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Visual Image Column: 5 Rounded Vertical Slices */}
            <div className="lg:col-span-7 flex justify-center w-full">
              <div className="flex gap-[3px] md:gap-[4px] justify-center w-full max-w-[750px] h-[340px] md:h-[440px]">
                {heroImages.map((img, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <motion.div
                      key={idx}
                      onMouseEnter={() => setActiveSlide(idx)}
                      animate={{
                        width: isActive ? '32%' : '17%',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="h-full rounded-2xl md:rounded-[24px] overflow-hidden cursor-pointer relative shadow-md group border border-white/60"
                      style={{ flexShrink: 0 }}
                    >
                      <img 
                        src={img.path}
                        alt={img.label} 
                        className="w-full h-full object-cover transition-transform duration-700" 
                        style={{ filter: isActive ? 'none' : 'brightness(0.85) grayscale(0.2)' }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85 pointer-events-none" />
                      
                      {/* Label */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-left">
                        {isActive ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col"
                          >
                            <span className="text-[14px] md:text-[18px] font-extrabold leading-tight">{img.label}</span>
                          </motion.div>
                        ) : (
                          <span className="text-[10px] md:text-[12px] font-extrabold uppercase tracking-widest rotate-180 writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
                            {img.label}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 3. SHOP BY CATEGORY SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full bg-blue-500" />
            <h2 className="text-[26px] md:text-[30px] font-extrabold text-[#111E38] tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Shop by Category
            </h2>
          </div>
          <Link
            to="/products"
            className="text-[11px] font-extrabold tracking-widest uppercase transition-colors flex items-center gap-1.5 text-blue-500 hover:text-slate-800"
          >
            VIEW ALL CATEGORIES <ChevronRight size={14} />
          </Link>
        </div>

        {/* Categories Grid - Rounded corner cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group bg-white border border-slate-100 p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-2xl"
            >
              <div 
                className="w-20 h-20 rounded-full overflow-hidden mb-4 border border-slate-100 bg-slate-50 flex items-center justify-center shadow-inner"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-[12.5px] font-extrabold text-slate-800 group-hover:text-blue-500 transition-colors leading-tight tracking-wide flex items-center gap-1 justify-center">
                {cat.name}
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. THREE PROMO CARDS (e-Auction, Bulk Orders, Trade Services) ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: e-Auction */}
          <div 
            className="p-8 text-white relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundImage: 'linear-gradient(rgba(78, 84, 200, 0.2), rgba(17, 30, 56, 0.55)), url("https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              minHeight: '360px'
            }}
          >
            <div className="z-10 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] opacity-80 mb-2.5 block" style={{ color: '#ffffff' }}>LIVE e-AUCTION</span>
              <h3 className="text-[28px] font-extrabold leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: '#ffffff' }}>
                Bid. Win. Grow. <br />
                Thrive. Achieve.
              </h3>
              <p className="text-[13px] opacity-85 mb-6 leading-relaxed max-w-xs font-semibold" style={{ color: '#ffffff' }}>
                Participate in live e-Auctions and unlock exclusive inventories at competitive rates.
              </p>
            </div>
            
            <div className="z-10 text-left">
              <Link
                to="/e-auction"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-indigo-700 text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#111E38] hover:text-white rounded-full shadow-md"
              >
                JOIN LIVE AUCTIONS <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 2: Bulk Orders */}
          <div 
            className="p-8 text-white relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2), rgba(17, 30, 56, 0.55)), url("https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              minHeight: '360px'
            }}
          >
            <div className="z-10 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] opacity-80 mb-2.5 block" style={{ color: '#ffffff' }}>BULK ORDERS</span>
              <h3 className="text-[28px] font-extrabold leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: '#ffffff' }}>
                Better Prices, <br />
                Greater Benefits!
              </h3>
              <p className="text-[13px] opacity-85 mb-6 leading-relaxed max-w-xs font-semibold" style={{ color: '#ffffff' }}>
                Special wholesale pricing and priority logistics for bulk retailers & volume buyers.
              </p>
            </div>
            
            <div className="z-10 text-left">
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-blue-600 text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#111E38] hover:text-white rounded-full shadow-md"
              >
                ENQUIRE NOW <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 3: Trade Services */}
          <div 
            className="p-8 text-white relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundImage: 'linear-gradient(rgba(17, 30, 56, 0.2), rgba(17, 30, 56, 0.55)), url("https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=600&auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              minHeight: '360px'
            }}
          >
            <div className="z-10 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2.5 block" style={{ color: '#60A5FA' }}>TRADE SERVICES</span>
              <h3 className="text-[28px] font-extrabold leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: '#ffffff' }}>
                Everything You Need, <br />
                All in One Place.
              </h3>
              <p className="text-[13px] opacity-85 mb-6 leading-relaxed max-w-xs font-semibold" style={{ color: '#ffffff' }}>
                End-to-end management systems, design consultation, and supply chain assistance.
              </p>
            </div>
            
            <div className="z-10 text-left">
              <Link
                to="/retail-management"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-slate-900 text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-full shadow-md"
              >
                EXPLORE SERVICES <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. WHY CHOOSE ZARI BLOOM SECTION ── */}
      <section className="bg-white border-y border-slate-100 py-16 mb-20 text-left">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="text-center mb-12">
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-blue-500 uppercase mb-2 block">
              Zari Bloom Excellence
            </span>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#111E38] tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Choose Zari Bloom?
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: Award, t: "Authentic Quality", d: "100% genuine weaving standards" },
              { icon: Users, t: "Ethical Sourcing", d: "Fair trade support for master weavers" },
              { icon: Layers, t: "Modern Infrastructure", d: "State-of-the-art warehouses and retail units" },
              { icon: Briefcase, t: "Skilled Craftsmanship", d: "Heritage methods preserved for generations" },
              { icon: Activity, t: "Sustainable Practices", d: "Eco-friendly dyes and organic material blends" },
              { icon: Heart, t: "Trusted by Thousands", d: "Preferred partner for global fashion brands" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col items-center justify-between shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/10">
                  <item.icon size={22} />
                </div>
                <h4 className="text-[13px] font-extrabold text-slate-800 mb-2 leading-snug">{item.t}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 7. TESTIMONIALS SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-20 text-left">
        <div className="text-center mb-12">
          <span className="text-[11px] font-extrabold tracking-[0.25em] text-blue-500 uppercase mb-2 block">
            Feedbacks
          </span>
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#111E38] tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Client Testimonials
          </h2>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeReviews.map((review, idx) => (
            <Link
              key={idx}
              to="/reviews"
              className="card-hover text-left bg-white relative block"
              style={{
                border: `1px solid ${C.border}`,
                padding: '26px 24px',
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(17, 30, 56, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Quote mark */}
                <div style={{
                  position: 'absolute', top: 12, right: 22,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 70, color: 'rgba(17, 30, 56, 0.08)', lineHeight: 1, fontWeight: 700,
                  userSelect: 'none',
                }}>
                  "
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={13} fill={C.accent} stroke="none" />
                  ))}
                </div>

                <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.7, margin: '0 0 18px', fontWeight: 500, fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: `1px solid ${C.border}` }}
                  />
                ) : (
                  <div style={{
                    width: 36, height: 36,
                    background: 'rgba(17, 30, 56, 0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: C.accent,
                    borderRadius: '50%'
                  }}>
                    <User size={16} />
                  </div>
                )}
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: C.primary, margin: 0 }}>{review.name}</p>
                  <p style={{ fontSize: 11, color: C.stone, margin: 0, fontWeight: 500 }}>{review.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
