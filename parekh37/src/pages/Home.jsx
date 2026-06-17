import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Gavel, Users, BarChart3, Newspaper, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1a1a2e',
  accent: '#C9A455',
  bg: '#FDFBF7',
  sand: '#F5EED8',
  border: '#E8E0D0',
  textFaint: '#6B7280',
};

// ── 12 Categories (names & order preserved) ──
const categories = [
  { name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&auto=format&fit=crop&q=80" },
  { name: "Bedsheets & Linen", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Children", image: "https://images.unsplash.com/photo-1580656940647-8854a00547f0?w=400&auto=format&fit=crop&q=80" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80" }
];

const featuredCollections = [
  { title: "Festive Edit", subtitle: "Timeless Celebration", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80" },
  { title: "Wedding Edit", subtitle: "Elegance Redefined", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80" },
  { title: "Everyday Edit", subtitle: "Comfort & Style", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80" },
  { title: "Home Essentials", subtitle: "Luxury Living", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80" }
];

export default function Home() {
  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pb-0">
      
      {/* ═══════════════════════════════════════
          1. HERO SECTION (Redesigned)
      ═══════════════════════════════════════ */}
      <section className="relative w-full mb-16">
        <div className="relative w-full h-[450px] lg:h-[600px] flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('/images/hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
            }}
          />

          <div className="relative z-10 w-full h-full max-w-[90rem] mx-auto px-6 lg:px-14 flex items-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <div className="w-full lg:w-[50%] pt-32 lg:pt-0 flex flex-col items-start text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
                className="m-0 flex flex-col gap-2" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(46px, 5vw, 64px)', fontWeight: 600, color: C.primary, lineHeight: 1 }}>
                WEAVING TRADITION.
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(46px, 5vw, 64px)', fontWeight: 600, color: C.primary, lineHeight: 1 }}>
                DRESSING GENERATIONS.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary, fontSize: '24px', lineHeight: 1.5, marginTop: 24, marginBottom: 36, maxWidth: 500, fontWeight: 500 }}
            >
              India's Premier Textile Destination offering unmatched variety, quality & value since decades.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-3 rounded-full transition-all duration-300"
                style={{
                  background: C.accent,
                  color: '#ffffff',
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "'Cormorant Garamond', serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '16px 36px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.accent; }}
              >
                EXPLORE COLLECTIONS <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. QUICK LINKS / SERVICES
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {[
            { title: "e-Quotation", desc: "Get instant quotes", icon: FileText, link: "/e-quotation" },
            { title: "e-Auction", desc: "Live textile auctions", icon: Gavel, link: "/e-auction" },
            { title: "Trade Enquiry", desc: "Connect with experts", icon: Users, link: "/trade-enquiry" },
            { title: "Retail Management", desc: "Smart solutions", icon: BarChart3, link: "/retail-management" },
            { title: "Trade Circular", desc: "Latest updates", icon: Newspaper, link: "/trade-circular" }
          ].map((item, idx) => (
            <Link 
              key={idx} to={item.link}
              className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 bg-white"
              style={{ border: `1px solid ${C.border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = '0 12px 30px rgba(201,164,85,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)'; }}
            >
              <div className="mb-4 text-[#C9A455]">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: C.primary, marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontSize: 12, color: C.textFaint, margin: 0 }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. OUR CATEGORIES
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-10 mb-16 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ width: 40, height: 1, background: C.accent }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: C.primary }}>
              OUR CATEGORIES
            </h2>
            <div style={{ width: 40, height: 1, background: C.accent }} />
          </div>
          <p style={{ color: C.textFaint, fontSize: 14 }}>Explore our wide range of premium textile categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {categories.map((cat, idx) => (
            <Link key={idx} to={`/products?category=${encodeURIComponent(cat.name)}`} className="flex flex-col items-center group">
              <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden mb-4 border-4" style={{ borderColor: C.bg, boxShadow: '0 8px 24px rgba(0,0,0,0.08)', transition: 'all 0.3s' }}>
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-center text-[13px] font-bold tracking-wide uppercase transition-colors duration-300" style={{ color: C.primary }}>
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. FEATURED COLLECTIONS
      ═══════════════════════════════════════ */}
      <section className="bg-[#F5EED8]/30 py-20 mb-20 border-y" style={{ borderColor: C.border }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: C.primary }}>
                FEATURED COLLECTIONS
              </h2>
              <div style={{ width: 60, height: 1, background: C.accent }} />
            </div>
            <Link to="/products" className="mt-4 md:mt-0 text-[12px] font-bold uppercase tracking-widest px-6 py-2 rounded-full border transition-all" style={{ borderColor: C.accent, color: C.primary }}>
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((col, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl h-[400px]">
                <img src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-[20px] font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{col.title}</h3>
                  <p className="text-[#F0E4C2] text-[13px] mt-1">{col.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. STATS SECTION
      ═══════════════════════════════════════ */}
      <section className="max-w-[80rem] mx-auto px-6 lg:px-14 mb-24">
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24">
          {[
            { val: "35+", label: "Years of Trust" },
            { val: "500+", label: "Retail Outlets" },
            { val: "10K+", label: "Happy Retailers" },
            { val: "1Lakh+", label: "Products" },
            { val: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-[36px] font-bold mb-1" style={{ color: C.accent, fontFamily: "'Cormorant Garamond', serif" }}>{stat.val}</div>
              <div className="text-[12px] font-bold uppercase tracking-wider" style={{ color: C.primary }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. UPDATES & HIGHLIGHTS
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: C.primary }}>
            UPDATES & HIGHLIGHTS
          </h2>
          <div style={{ width: 40, height: 1, background: C.accent, margin: '16px auto 0' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Latest Blog", desc: "Trends, styles & industry insights", bg: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF0ZXN0JTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D", link: "/blog" },
            { title: "Notice Board", desc: "Important announcements", bg: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm90aWNlJTIwYm9hcmR8ZW58MHx8MHx8fDA%3D", link: "/notice-board" },
            { title: "Media Gallery", desc: "Events, coverage & brand moments", bg: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60", link: "/gallery" },
            { title: "Customer Reviews", desc: "Real stories from our happy partners", bg: "https://images.unsplash.com/photo-1717730798581-0061672774e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGplYW5zJTIwc2hpcnQlMjBtZW58ZW58MHx8MHx8fDA%3D" }
          ].map((item, i) => (
            <Link key={i} to={item.link} className="relative group overflow-hidden rounded-xl h-[280px]">
              <img src={item.bg} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-[22px] font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.title}</h3>
                <p className="text-white/80 text-[13px] mb-6">{item.desc}</p>
                <div className="text-[11px] font-bold tracking-widest uppercase border border-white/40 px-6 py-2 rounded-full text-white transition-all group-hover:bg-white group-hover:text-black">
                  Explore
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. CTA SECTION
      ═══════════════════════════════════════ */}
      <section className="bg-[#F5EED8]/40 py-24 border-t" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 700, color: C.primary, marginBottom: 16 }}>
            Let's Build Stronger Business Together
          </h2>
          <p style={{ color: C.textFaint, fontSize: 16, marginBottom: 32 }}>
            Connect with our team for partnerships, enquiries & support.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase transition-all duration-300"
            style={{ background: C.accent, color: '#ffffff' }}
            onMouseEnter={e => { e.currentTarget.style.background = C.primary; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.accent; }}
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

    </div>
  );
}
