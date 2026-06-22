import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = {
  primary: '#6B4226',
  primaryLight: '#9B6B4A',
  primaryDark: '#3D2010',
  accent: '#C8966A',
  gold: '#C8966A',
  bg: '#F7F2EC',
  stone: '#7A6558',
  border: '#E8DDD0',
};

const categories = [
  { id: '01', name: "Sarees", sub: "Timeless Tradition", image: "/images/popular_banarasi_saree.png" },
  { id: '02', name: "Leggings", sub: "Everyday Comfort", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&auto=format&fit=crop&q=60" },
  { id: '03', name: "Kurtis", sub: "Everyday Grace", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=300&auto=format&fit=crop&q=60" },
  { id: '04', name: "Dress Suits", sub: "Style Redefined", image: "/images/popular_anarkali.png" },
  { id: '05', name: "Bedsheets & Linen", sub: "Pure. Natural.", image: "/images/popular_bedsheet.png" },
  { id: '06', name: "Hosiery Items", sub: "Soft. Breathable.", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop&q=60" },
  { id: '07', name: "Suiting", sub: "Formal Excellence", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&auto=format&fit=crop&q=60" },
  { id: '08', name: "Shirting", sub: "Crisp. Sharp.", image: "/images/popular_cotton_fabric.png" },
  { id: '09', name: "Women Ethnic", sub: "Woven Grandeur", image: "/images/popular_lehenga.png" },
  { id: '10', name: "Men Ethnic", sub: "Plush & Premium", image: "/images/men_ethnic_wear.png" },
  { id: '11', name: "Kids Ethnic", sub: "Trendy & Versatile", image: "/images/children_ethnic_wear.png" },
  { id: '12', name: "Home Furnishing", sub: "Completing Styles", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60" },
];


const services = [
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ), 
    title: "e-Quotation", 
    desc: "Fast & easy quotation for your business needs.",
    path: "/e-quotation"
  },
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14 13-5 5" />
        <path d="m3 21 3-3" />
        <path d="M9.6 7.4 16.6 14.4l-3 3L6.6 10.4z" />
        <path d="m16.5 4.5 3 3" />
        <path d="M6 21h12" />
      </svg>
    ), 
    title: "e-Auction", 
    desc: "Transparent bidding for the best prices.",
    path: "/e-auction"
  },
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        <path d="M3 13.5v-3C3 8.6 4.6 7 6.5 7H13l6-4v18l-6-4H6.5C4.6 17 3 15.4 3 13.5z" />
      </svg>
    ), 
    title: "Trade Circular", 
    desc: "Stay updated with latest offers & market circulars.",
    path: "/trade-circular"
  },
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ), 
    title: "Private Label", 
    desc: "Custom branding tailored for your brand.",
    path: "/retail-management"
  },
];

export default function Home() {

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden">

      {/* ── 1. HERO SECTION (Full-width, Navbar overlapping) ── */}
      <section className="relative w-full" style={{ minHeight: '100vh' }}>
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/mainhero.png"
            alt="Meraki Ethnic Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(61,32,16,0.82) 0%, rgba(61,32,16,0.65) 40%, rgba(61,32,16,0.15) 70%, transparent 100%)'
          }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full" style={{ minHeight: '100vh' }}>
          <div className="max-w-[95rem] mx-auto px-6 sm:px-8 lg:px-16 w-full pt-32 pb-16 lg:pt-40 lg:pb-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-[580px] text-left"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4 block"
                  style={{ color: '#C8966A' }}
                >
                  Premium Textiles. Curated for You.
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-[46px] sm:text-[56px] lg:text-[64px] font-bold text-white leading-[1.1] m-0 mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Threads that<br />
                  Tell Stories,<br />
                  <span style={{ color: '#C8966A', fontStyle: 'italic' }}>Woven with Care.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[15px] font-medium mb-8 leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  Luxurious fabrics. Timeless designs.<br />
                  Inspired by tradition, made for today.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="flex flex-wrap gap-4 items-center"
                >
                  <Link
                    to="/products"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-[12px] font-bold tracking-wider uppercase text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                    style={{ background: '#C8966A', border: 'none' }}
                  >
                    Explore Collections
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/about"
                    className="text-[12px] font-bold tracking-widest uppercase transition-all duration-300 hover:text-[#C8966A] text-decoration-none border-b border-white/30 hover:border-[#C8966A] pb-1 ml-4"
                    style={{ color: 'rgba(255,255,255,0.9)' }}
                  >
                    Watch Our Story
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── 2. EXPLORE COLLECTIONS SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div style={{ width: 40, height: 1, background: C.accent }} />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: C.accent }}>
              Explore Our 12 Signature Collections
            </span>
            <div style={{ width: 40, height: 1, background: C.accent }} />
          </div>
        </div>

        {/* Category circles grid - 6+6 layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center gap-3 text-decoration-none"
            >
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-sm bg-white"
                  style={{ borderColor: C.border }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
                  onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

              </div>
              <div className="text-center">
                <span className="text-[11px] sm:text-[12px] font-bold tracking-wider uppercase block transition-colors"
                  style={{ color: C.primary }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.primary}
                >
                  {cat.name}
                </span>
                <span className="text-[9px] font-medium block mt-0.5" style={{ color: C.stone }}>
                  {cat.sub}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. ABOUT + SERVICES + NETWORK SECTION (3-column) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* About Column */}
          <div className="rounded-2xl p-8 border text-left flex flex-col justify-between transition-all duration-300 hover:shadow-md" 
            style={{ 
              borderColor: C.border, 
              borderTop: `4px solid ${C.accent}`,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 100%)' 
            }}
          >
            <div>
              {/* Premium Ornament */}
              <div className="mb-4" style={{ color: C.accent }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6a6 6 0 0 0-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6a6 6 0 0 0-6-6z" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: C.accent }}>About Meraki Ethnic</span>
              <h2 className="text-[28px] font-bold leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary }}>
                Where Craftsmanship<br />Meets Commitment.
              </h2>
              <p className="text-[13px] leading-relaxed mb-6" style={{ color: C.stone }}>
                We blend heritage with innovation to create fabrics that inspire and endure.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-decoration-none transition-all duration-300 self-start"
              style={{
                background: C.primary,
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(107, 66, 38, 0.15)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Know More <ArrowRight size={12} />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((svc, idx) => (
              <Link
                key={idx}
                to={svc.path}
                className="bg-white rounded-2xl p-5 border text-left flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-decoration-none"
                style={{ borderColor: C.border }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(107,66,38,0.07)', color: C.primary }}>
                  {svc.icon}
                </div>
                <div>
                  <h4 className="text-[13px] font-bold mb-1" style={{ color: C.primary, fontFamily: "'Cormorant Garamond', serif" }}>
                    {svc.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed m-0" style={{ color: C.stone }}>
                    {svc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Network Column */}
          <div className="rounded-2xl p-8 border text-left flex flex-col justify-between transition-all duration-300 hover:shadow-md" 
            style={{ 
              borderColor: C.border,
              borderTop: `4px solid ${C.accent}`,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 100%)'
            }}
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: C.accent }}>Our Network</span>
              <h2 className="text-[28px] font-bold leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary }}>
                Pan India.<br />Present Everywhere.
              </h2>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: C.stone }}>
                Connecting businesses across the nation.
              </p>
              {/* Network Map Image */}
              <div className="rounded-xl overflow-hidden shadow-inner border border-[#E8DDD0] relative" style={{ height: 160 }}>
                <img 
                  src="/images/meraki_network_map.png" 
                  alt="Meraki Network Map" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-decoration-none transition-all duration-300 self-start mt-4"
              style={{
                background: C.primary,
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(107, 66, 38, 0.15)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              View All Locations <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PROMO BANNER (Designed for every mood) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div 
          className="relative w-full rounded-[32px] overflow-hidden border border-[#E8DDD0] shadow-xl flex items-center" 
          style={{ minHeight: 480 }}
        >
          {/* Background Image */}
          <img
            src="/images/meraki_promo_banner.png"
            alt="Meraki Ethnic Promo Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(46, 24, 11, 0.92) 0%, rgba(46, 24, 11, 0.75) 45%, rgba(46, 24, 11, 0.35) 75%, rgba(46, 24, 11, 0.2) 100%)'
          }} />

          {/* Banner content */}
          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left: Premium Glassmorphism Text Card */}
            <div 
              className="max-w-[500px] text-left rounded-3xl p-8 sm:p-10 border transition-all duration-300 hover:shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8966A]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: C.accent }}>
                  For Every Mood & Moment
                </span>
              </div>
              <h2 
                className="text-[38px] sm:text-[46px] font-bold text-white leading-[1.1] m-0 mb-4" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Designed for<br />
                Every Mood<br />
                <span style={{ color: '#C8966A', fontStyle: 'italic' }}>& Moment.</span>
              </h2>
              <p className="text-[13px] text-white/80 mb-8 font-medium leading-relaxed">
                Experience the heritage of rich Indian craftsmanship. Fabrics that complement your space, your style, and your unique story.
              </p>
              
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase text-decoration-none transition-all duration-300"
                style={{
                  background: '#C8966A',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(200, 150, 106, 0.3)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#6B4226'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C8966A'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                View Lookbook <ArrowRight size={12} />
              </Link>
            </div>

            {/* Right: Floating Artistic Lookbook Collage */}
            <div className="hidden lg:flex flex-1 items-center justify-end gap-6 pr-6">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-6 transform translate-y-4">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 group" 
                  style={{ 
                    width: 170, 
                    height: 220, 
                    border: '1px solid rgba(255,255,255,0.15)',
                    transform: 'rotate(-2deg)'
                  }}
                >
                  <img src="/images/navya_hero_left.png" alt="lookbook 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 group" 
                  style={{ 
                    width: 170, 
                    height: 170, 
                    border: '1px solid rgba(255,255,255,0.15)',
                    transform: 'rotate(1deg)'
                  }}
                >
                  <img src="/images/navya_hero_right.png" alt="lookbook 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6 transform -translate-y-4">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 group" 
                  style={{ 
                    width: 170, 
                    height: 170, 
                    border: '1px solid rgba(255,255,255,0.15)',
                    transform: 'rotate(2deg)'
                  }}
                >
                  <img src="/images/navya_hero_mid.png" alt="lookbook 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 group" 
                  style={{ 
                    width: 170, 
                    height: 220, 
                    border: '1px solid rgba(255,255,255,0.15)',
                    transform: 'rotate(-1deg)'
                  }}
                >
                  <img src="/images/popular_lehenga.png" alt="lookbook 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
