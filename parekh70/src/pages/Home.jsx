import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = {
  primary: '#1B2A4A',
  primaryLight: '#2E4070',
  primaryDark: '#0D1828',
  accent: '#D4A842',
  crimson: '#8B1A2D',
  crimsonLight: '#B52540',
  bg: '#F8F7F4',
  stone: '#5A5560',
  border: '#E2DDDA',
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


export default function Home() {

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden">

      {/* ── 1. HERO SECTION (Full-width, Navbar overlapping) ── */}
      <section className="relative w-full" style={{ minHeight: '100vh' }}>
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/image.png"
            alt="Meraki Ethnic Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(13,24,40,0.88) 0%, rgba(27,42,74,0.72) 40%, rgba(27,42,74,0.2) 70%, transparent 100%)'
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
                  style={{ color: '#D4A842' }}
                >
                  Premium Textiles. Curated for You.
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-[46px] sm:text-[56px] lg:text-[64px] font-bold text-white leading-[1.1] m-0 mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Threads that<br />
                  Tell Stories,<br />
                  <span style={{ color: '#D4A842', fontStyle: 'italic' }}>Woven with Care.</span>
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
                    style={{ background: '#D4A842', border: 'none' }}
                  >
                    Explore Collections
                    <ArrowRight size={14} />
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


      {/* ── 3. COMPACT ABOUT SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-16">
        <div
          className="relative w-full rounded-3xl overflow-hidden border flex items-center justify-center text-center"
          style={{
            borderColor: C.border,
            minHeight: '340px',
            boxShadow: '0 8px 40px rgba(27,42,74,0.1)',
          }}
        >
          {/* Background Image */}
          <img
            src="/images/aboouthome.png"
            alt="Meraki Ethnic Craftsmanship"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            style={{ objectPosition: 'center' }}
          />
          
          {/* Dark Overlay for readability */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(13, 24, 40, 0.65), rgba(27, 42, 74, 0.85))' }}
          />

          {/* Content on top */}
          <div className="relative z-10 p-8 sm:p-12 flex flex-col items-center max-w-2xl mx-auto">
            <h2
              className="text-[32px] sm:text-[40px] font-bold leading-tight mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where Craftsmanship<br />
              <span style={{ color: C.accent, fontStyle: 'italic' }}>Meets Commitment.</span>
            </h2>

            <p className="text-[14px] leading-relaxed mb-8 text-white/90">
              Meraki Ethnic is India's premier destination for handcrafted textiles and premium apparel — blending generations of traditional craftsmanship with modern aesthetics.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-decoration-none transition-all duration-300"
              style={{ background: C.accent, color: '#FFFFFF', boxShadow: '0 6px 20px rgba(212, 168, 66, 0.25)', border: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = C.primary; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Discover Our Story <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>



      {/* ── 4. PROMO BANNER (Designed for every mood) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div 
          className="relative w-full rounded-[32px] overflow-hidden border border-[#E2DDDA] shadow-xl flex items-center" 
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
            background: 'linear-gradient(to right, rgba(13, 24, 40, 0.92) 0%, rgba(27, 42, 74, 0.75) 45%, rgba(27, 42, 74, 0.35) 75%, rgba(27, 42, 74, 0.2) 100%)'
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A842]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: C.accent }}>
                  For Every Mood & Moment
                </span>
              </div>
              <h2 
                className="text-[38px] sm:text-[46px] font-bold text-white leading-[1.1] m-0 mb-4" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Designed for<br />
                Every Mood<br />
                <span style={{ color: '#D4A842', fontStyle: 'italic' }}>& Moment.</span>
              </h2>
              <p className="text-[13px] text-white/80 mb-8 font-medium leading-relaxed">
                Experience the heritage of rich Indian craftsmanship. Fabrics that complement your space, your style, and your unique story.
              </p>
              
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase text-decoration-none transition-all duration-300"
                style={{
                  background: '#D4A842',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(212, 168, 66, 0.3)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#1B2A4A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#D4A842'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
