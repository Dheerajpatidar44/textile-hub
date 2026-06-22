import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

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

const stats = [
  { icon: "👑", value: "25+", label: "Years of Legacy" },
  { icon: "🤝", value: "500+", label: "Retail Partners" },
  { icon: "😊", value: "1L+", label: "Happy Customers" },
  { icon: "📍", value: "20+", label: "Cities Connected" },
];

const services = [
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ), 
    title: "e-Quotation", 
    desc: "Fast & easy quotation for your business needs.",
    path: "/e-quotation"
  },
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ), 
    title: "e-Auction", 
    desc: "Transparent bidding for the best prices.",
    path: "/e-auction"
  },
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ), 
    title: "Trade Circular", 
    desc: "Stay updated with latest offers & market circulars.",
    path: "/trade-circular"
  },
  { 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ), 
    title: "Private Label", 
    desc: "Custom branding tailored for your brand.",
    path: "/retail-management"
  },
];

const testimonials = [
  { 
    text: "The quality and consistency Meraki provides is unmatched. Highly recommended!",
    name: "Meena Collection",
    location: "Delhi",
    rating: 5
  },
  { 
    text: "Best variety, best prices and a very professional team. Great experience!",
    name: "Sagar Textiles",
    location: "Mumbai",
    rating: 5
  },
  { 
    text: "A partner we can rely on for every season and every trend.",
    name: "Rajesh Traders",
    location: "Surat",
    rating: 5
  },
];

const whyUs = [
  { icon: "⭐", title: "Premium Quality Assured" },
  { icon: "🚚", title: "Timely Delivery Across India" },
  { icon: "🌿", title: "Ethical Sourcing, Sustainable Future" },
  { icon: "💼", title: "Customer First, Always" },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
                    className="flex items-center gap-3 text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:gap-4 text-decoration-none"
                    style={{ color: 'rgba(255,255,255,0.9)' }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 bg-white/10 hover:bg-white/20 transition-all">
                      <Play size={12} fill="white" />
                    </div>
                    Watch Our Story
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right: Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="hidden lg:flex flex-col gap-4"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      minWidth: 200,
                    }}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <div className="text-[22px] font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-semibold tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: C.accent }}>
                  {cat.id}
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
          <div className="bg-white rounded-2xl p-8 border text-left flex flex-col justify-between" style={{ borderColor: C.border }}>
            <div>
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
              className="flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-decoration-none transition-colors"
              style={{ color: C.primary }}
              onMouseEnter={e => e.currentTarget.style.color = C.accent}
              onMouseLeave={e => e.currentTarget.style.color = C.primary}
            >
              Know More <ArrowRight size={13} />
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
          <div className="bg-white rounded-2xl p-8 border text-left flex flex-col justify-between" style={{ borderColor: C.border }}>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: C.accent }}>Our Network</span>
              <h2 className="text-[28px] font-bold leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary }}>
                Pan India.<br />Present Everywhere.
              </h2>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: C.stone }}>
                Connecting businesses across the nation.
              </p>
              {/* India map placeholder */}
              <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(107,66,38,0.05)', padding: '20px', textAlign: 'center' }}>
                <svg viewBox="0 0 200 220" width="120" style={{ margin: '0 auto', display: 'block', opacity: 0.4 }}>
                  <path d="M100 10 L130 30 L150 20 L160 50 L180 60 L175 90 L190 110 L170 130 L175 160 L150 175 L130 200 L100 210 L70 200 L50 175 L25 160 L30 130 L10 110 L25 90 L20 60 L40 50 L50 20 L70 30 Z" 
                    fill="none" stroke="#C8966A" strokeWidth="2" />
                  <circle cx="100" cy="110" r="4" fill="#C8966A" />
                  <circle cx="80" cy="90" r="3" fill="#6B4226" />
                  <circle cx="120" cy="130" r="3" fill="#6B4226" />
                  <circle cx="60" cy="140" r="3" fill="#6B4226" />
                  <circle cx="140" cy="80" r="3" fill="#6B4226" />
                </svg>
              </div>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-decoration-none transition-colors mt-4"
              style={{ color: C.primary }}
              onMouseEnter={e => e.currentTarget.style.color = C.accent}
              onMouseLeave={e => e.currentTarget.style.color = C.primary}
            >
              View All Locations <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PROMO BANNER (Designed for every mood) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: 340 }}>
          <img
            src="/images/meraki_promo_banner.png"
            alt="Meraki Ethnic Promo"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(61,32,16,0.88) 0%, rgba(61,32,16,0.6) 50%, rgba(61,32,16,0.1) 100%)'
          }} />

          {/* Image gallery thumbnails on right */}
          <div className="absolute inset-0 flex">
            <div className="flex flex-col justify-center text-left z-10 px-8 sm:px-14 lg:px-16 py-12 max-w-xl">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: C.accent }}>
                For Every Mood & Moment
              </span>
              <h2 className="text-[34px] sm:text-[42px] font-bold text-white leading-tight m-0 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Designed<br />
                for Every<br />
                Mood &<br />
                Moment
              </h2>
              <p className="text-[13px] text-white/80 mb-6 font-medium leading-relaxed">
                Fabrics that complement your space, your style, your story.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-decoration-none transition-colors"
                style={{ color: C.accent }}
                onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={e => e.currentTarget.style.color = C.accent}
              >
                View Lookbook <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right photo collage */}
            <div className="hidden lg:flex flex-1 items-center justify-end pr-12 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ width: 160, height: 200 }}>
                  <img src="/images/navya_hero_left.png" alt="lookbook 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ width: 160, height: 150 }}>
                  <img src="/images/navya_hero_right.png" alt="lookbook 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ width: 160, height: 150 }}>
                  <img src="/images/navya_hero_mid.png" alt="lookbook 3" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ width: 160, height: 200 }}>
                  <img src="/images/popular_lehenga.png" alt="lookbook 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHY PARTNER + TESTIMONIALS + IMPACT (3-column) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Why Partner Us */}
          <div className="bg-white rounded-2xl p-8 border text-left" style={{ borderColor: C.border }}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-4" style={{ color: C.accent }}>
              Why Partner With Us?
            </span>
            <div className="flex flex-col gap-4">
              {whyUs.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: 'rgba(200,150,106,0.1)' }}>
                    {item.icon}
                  </div>
                  <span className="text-[13px] font-semibold" style={{ color: C.primary }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-2xl p-8 border text-left" style={{ borderColor: C.border }}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-6 text-center" style={{ color: C.accent }}>
              What Our Clients Say
            </span>
            <div className="relative min-h-[180px]">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: activeTestimonial === idx ? 1 : 0, y: activeTestimonial === idx ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                  style={{ display: activeTestimonial === idx ? 'block' : 'none' }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-[14px]" style={{ color: C.accent }}>★</span>
                    ))}
                  </div>
                  <p className="text-[13.5px] leading-relaxed mb-5 italic" style={{ color: C.stone }}>
                    "{t.text}"
                  </p>
                  <div>
                    <span className="text-[13px] font-bold block" style={{ color: C.primary }}>{t.name}</span>
                    <span className="text-[11px]" style={{ color: C.stone }}>{t.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className="transition-all duration-300 border-none cursor-pointer"
                  style={{
                    width: activeTestimonial === idx ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: activeTestimonial === idx ? C.accent : 'rgba(107,66,38,0.2)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Our Impact */}
          <div className="rounded-2xl p-8 text-left flex flex-col justify-between" style={{ background: C.primary }}>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-4" style={{ color: '#C8966A' }}>
                Our Impact
              </span>
              <h3 className="text-[22px] font-bold text-white leading-snug mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Sustainable choices<br />for a better tomorrow.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="text-[30px] font-bold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>100+</div>
                <div className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.65)' }}>Ethical Vendors</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="text-[30px] font-bold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>1M+</div>
                <div className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.65)' }}>Meters of Fabric Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM TRUST BADGES ── */}
      <section className="border-t" style={{ borderColor: C.border, background: 'rgba(107,66,38,0.03)' }}>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "🏆", title: "Premium Fabrics", sub: "Handpicked Quality" },
              { icon: "✨", title: "Modern Designs", sub: "Trend Collections" },
              { icon: "🌏", title: "Pan India Network", sub: "Widespread Presence" },
              { icon: "🤝", title: "Trusted Partnerships", sub: "Growing Together" },
              { icon: "💡", title: "Innovation & Style", sub: "Redefining Textiles" },
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-[12px] font-bold" style={{ color: C.primary }}>{badge.title}</span>
                <span className="text-[10px] font-medium" style={{ color: C.stone }}>{badge.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
