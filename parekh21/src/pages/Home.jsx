import { Link } from 'react-router-dom';
import { ArrowRight, Quote, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const heroPanels = [
  {
    label: 'Sarees',
    subtitle: 'Timeless Drapes',
    desc: 'Explore our handpicked collection of luxurious silk and designer sarees.',
    image: '/images/hero1.png',
    path: '/products?category=Sarees'
  },
  {
    label: 'Fabrics',
    subtitle: 'Custom Weaves',
    desc: 'Premium suitings, shirtings and unstitched dress materials of finest threads.',
    image: '/images/hero2.png',
    path: '/products?category=Dress+Suits'
  },
  {
    label: 'Bedsheets',
    subtitle: 'Home Indulgence',
    desc: 'Luxe linens and bedsheets crafted from ultra-soft, long-staple cotton.',
    image: '/images/hero4.png',
    path: '/products?category=Bedsheets+%26+Linen'
  },
  {
    label: 'Lehengas',
    subtitle: 'Royal Couture',
    desc: 'Exquisite bridal and occasion wear designed for modern elegance.',
    image: '/images/hero5.png',
    path: '/products?category=Formal+%26+Ethnic+Wear+for+Women'
  }
];

const newArrivalProducts = [
  {
    name: 'Banarasi Silk Saree',
    category: 'Sarees',
    price: '₹4,299',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&fit=crop&q=80'
  },
  {
    name: 'Embroidered Anarkali Suit',
    category: 'Kurtis',
    price: '₹3,899',
    imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&fit=crop&q=80'
  },
  {
    name: 'Designer Lehenga',
    category: 'Formal & Ethnic Wear for Women',
    price: '₹8,999',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&fit=crop&q=80'
  },
  {
    name: 'Pure Kanchipuram Silk Fabric',
    category: 'Suiting',
    price: '₹1,699 / mtr',
    imageUrl: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&fit=crop&q=80'
  },
  {
    name: 'Luxury Cotton Bedsheet Set',
    category: 'Bedsheets & Linen',
    price: '₹2,299',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&fit=crop&q=80'
  },
  {
    name: 'Tussar Silk Saree',
    category: 'Sarees',
    price: '₹3,499',
    imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&fit=crop&q=80'
  }
];

const stats = [
  { value: '35+', label: 'Years of Trust' },
  { value: '1000+', label: 'Retail Outlets' },
  { value: '5000+', label: 'Products' },
  { value: '25K+', label: 'Happy Retailers' },
  { value: '24/7', label: 'Dedicated Support' },
];

const reviews = [
  { text: "Ethnic Elegance has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
];

const COLORS = {
  primary: '#721C2B',
  primaryDark: '#4A0E17',
  primaryLight: '#FCEEF1',
  accent: '#CDA75E',
  bg: '#FAF6F0',
  bgCard: '#FFFFFF',
  border: '#E6D8C5',
  textDark: '#330A10',
  textMid: '#554447',
  textMuted: '#7D6A6D',
};

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const activeIdx = hoveredIdx !== null ? hoveredIdx : 0;

  return (
    <div className="w-full pb-10" style={{ background: COLORS.bg, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="w-full" style={{ background: COLORS.bg }}>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div 
            className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[380px] lg:h-[440px] overflow-hidden"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {heroPanels.map((panel, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-out shadow-sm w-full md:w-auto"
                  style={{
                    flex: isActive ? '3.5' : '1',
                    minHeight: '180px',
                    height: '100%'
                  }}
                >
                  <img
                    src={panel.image}
                    alt={panel.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
                    style={{
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  {/* Shadow Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: isActive 
                        ? 'linear-gradient(to top, rgba(51,10,16,0.9) 0%, rgba(51,10,16,0.3) 60%, rgba(51,10,16,0.1) 100%)'
                        : 'linear-gradient(to top, rgba(51,10,16,0.7) 0%, rgba(51,10,16,0.4) 100%)',
                    }}
                  />
                  
                  {/* Panel Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left text-white">
                    <div className="flex flex-col">
                      <span className="text-[10px] md:text-[11px] font-black tracking-[0.25em] uppercase" style={{ color: COLORS.accent }}>
                        {panel.subtitle}
                      </span>
                      <h3 className="text-2xl md:text-3.5xl font-black mt-1 uppercase tracking-wide leading-none serif-title">
                        {panel.label}
                      </h3>
                      
                      {/* Animated details block when active */}
                      <div
                        className="overflow-hidden transition-all duration-700 ease-out"
                        style={{
                          maxHeight: isActive ? '160px' : '0px',
                          opacity: isActive ? '1' : '0',
                          marginTop: isActive ? '12px' : '0px'
                        }}
                      >
                        <p className="text-[13px] md:text-[14px] leading-relaxed mb-6 font-medium text-white/90 max-w-md">
                          {panel.desc}
                        </p>
                        <div>
                          <Link
                            to={panel.path}
                            className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-black tracking-widest uppercase px-5 py-3 rounded-xl transition-all duration-300 hover:shadow-lg border"
                            style={{
                              background: COLORS.accent,
                              borderColor: COLORS.accent,
                              color: '#330A10'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = '#FFFFFF';
                              e.currentTarget.style.borderColor = '#FFFFFF';
                              e.currentTarget.style.color = COLORS.primary;
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = COLORS.accent;
                              e.currentTarget.style.borderColor = COLORS.accent;
                              e.currentTarget.style.color = '#330A10';
                            }}
                          >
                            Shop Collection <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW ARRIVALS
      ══════════════════════════════════════════ */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10" style={{ background: COLORS.accent, opacity: 0.5 }} />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: COLORS.accent }}>
              &nbsp; Curated Masterpieces &nbsp;
            </span>
            <span className="h-px w-10" style={{ background: COLORS.accent, opacity: 0.5 }} />
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-wide uppercase serif-title" style={{ color: COLORS.textDark }}>
            New Arrivals
          </h2>
          <div className="w-16 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newArrivalProducts.slice(0,4).map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border text-left"
              style={{ borderColor: COLORS.border }}
            >
              {/* Product Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Accent Tag */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase text-white shadow-sm"
                  style={{ background: COLORS.primary }}
                >
                  NEW
                </div>
              </div>
              
              {/* Card Label */}
              <div className="p-4">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: COLORS.accent }}>
                  {product.category}
                </span>
                <h3 className="text-lg font-black mt-1 mb-2 leading-snug" style={{ color: COLORS.textDark }}>
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-4 pt-4 border-t" style={{ borderColor: `${COLORS.border}50` }}>
                  <Link
                    to={`/products?category=${encodeURIComponent(product.category)}`}
                    className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider uppercase transition-colors"
                    style={{ color: COLORS.textDark }}
                    onMouseEnter={e => e.currentTarget.style.color = COLORS.primary}
                    onMouseLeave={e => e.currentTarget.style.color = COLORS.textDark}
                  >
                    View Details <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 my-2 rounded-2xl border" style={{ background: COLORS.primaryLight, borderColor: `${COLORS.primary}20` }}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.primary }}>
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11.5px] font-bold uppercase tracking-wider mt-1 leading-tight" style={{ color: COLORS.textMuted }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROMO BANNERS ── */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Wholesale Banner */}
          <div
  className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[180px] text-left border"
  style={{ borderColor: COLORS.border }}
>
  <img
    src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1bGslMjBjbG90aGVzJTIwZmFicmljJTIwYmxvZ3N8ZW58MHx8MHx8fDA%3D"
    alt="Blog"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(51,10,16,0.85) 0%, rgba(51,10,16,0.2) 100%)' }} />
  <div className="relative z-10">
    <p className="text-[9px] font-black tracking-[0.25em] uppercase mb-2 text-white/80">
      LATEST STORIES
    </p>
    <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2 text-white serif-title">
      Blog<br/>Insights
    </h3>
    <p className="text-[13px] font-medium mb-5 text-white/90">
      Dive into industry trends and expert articles
    </p>
    <Link
      to="/blog"
      className="inline-flex items-center gap-2 text-[11px] font-black tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all"
      style={{ background: COLORS.primary, color: '#fff' }}
    >
      READ BLOG <ArrowRight size={12} />
    </Link>
  </div>
</div>

          {/* New Arrivals Banner */}
          <div
  className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[180px] text-left border"
  style={{ borderColor: COLORS.border }}
>
  <img
    src="https://plus.unsplash.com/premium_photo-1664372599811-0aa42648d1e6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Career"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(51,10,16,0.85) 0%, rgba(51,10,16,0.2) 100%)' }} />
  <div className="relative z-10">
    <p className="text-[9px] font-black tracking-[0.25em] uppercase mb-2 text-white/80">
      JOIN US
    </p>
    <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2 text-white serif-title">
      Career<br/>Opportunities
    </h3>
    <p className="text-[13px] font-medium mb-5 text-white/90">
      Become part of our innovative textile family
    </p>
    <Link
      to="/career"
      className="inline-flex items-center gap-2 text-[11px] font-black tracking-wider uppercase px-5 py-2.5 rounded-lg border transition-all text-white border-white hover:bg-white hover:text-black"
    >
      VIEW CAREERS <ArrowRight size={12} />
    </Link>
  </div>
</div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ── */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: COLORS.accent }}>Testimonials</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide serif-title" style={{ color: COLORS.textDark }}>
            What Our Customers Say
          </h2>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl flex flex-col bg-white transition-all duration-300 cursor-pointer border"
              style={{ borderColor: COLORS.border }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.primary; e.currentTarget.style.boxShadow = '0 4px 20px rgba(114,28,43,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div className="mb-4 text-left">
                <Quote size={24} style={{ color: `${COLORS.primary}40`, transform: 'rotate(180deg)' }} fill="currentColor" />
              </div>
              <p className="leading-relaxed text-[13.5px] mb-6 flex-grow text-left italic font-medium text-left" style={{ color: COLORS.textMid }}>
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t mt-auto" style={{ borderColor: `${COLORS.border}80` }}>
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover shadow-sm border" style={{ borderColor: COLORS.border }} />
                <div className="text-left">
                  <h4 className="font-black text-[13px] uppercase tracking-wide serif-title" style={{ color: COLORS.textDark }}>{review.name}</h4>
                  <p className="text-[10px] font-semibold" style={{ color: COLORS.textMuted }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT US / MAP CTA SECTION ── */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: COLORS.accent }}>Get In Touch</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide serif-title" style={{ color: COLORS.textDark }}>
            Connect With Us
          </h2>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-sm text-left flex flex-col justify-center border"
            style={{ background: '#FFFFFF', borderColor: COLORS.border }}
          >
            <div className="p-8 lg:p-10">
              <h2 className="font-black text-3xl mb-2 serif-title" style={{ color: COLORS.textDark }}>
                Contact Details
              </h2>
              <p className="text-[13px] mb-8 font-medium" style={{ color: COLORS.textMuted }}>
                We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
                  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
                  { icon: Mail, label: 'Email Enquiries', lines: ['info@ethnicelegance.com'] },
                  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{ background: 'rgba(114,28,43,0.06)', borderColor: 'rgba(114,28,43,0.1)' }}>
                      <Icon size={18} color={COLORS.primary} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-1" style={{ color: COLORS.accent }}>{label}</p>
                      {lines.map((line, i) => (
                        <p key={i} className="text-[14px] font-semibold" style={{ color: COLORS.textMid }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[12px] font-black tracking-wider uppercase text-white transition-all duration-300 shadow-sm"
                  style={{ background: COLORS.primary }}
                  onMouseEnter={e => e.currentTarget.style.background = COLORS.primaryDark}
                  onMouseLeave={e => e.currentTarget.style.background = COLORS.primary}
                >
                  VISIT CONTACT PAGE <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm min-h-[450px] border"
              style={{ borderColor: COLORS.border }}>
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ethnic Elegance Location Map"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
