import { Link } from 'react-router-dom';
import { ArrowRight, Quote, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// ── Same categories as parekh19 in same order ──
const shopCategories = [
  { name: 'Sarees', imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop&q=80' },
  { name: 'Leggings', imageUrl: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&h=300&fit=crop&q=80' },
  { name: 'Kurtis', imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&h=300&fit=crop&q=80' },
  { name: 'Dress Suits', imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=300&fit=crop&q=80' },
  { name: 'Bedsheets & Linen', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop&q=80' },
  { name: 'Hosiery Items', imageUrl: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&h=300&fit=crop&q=80' },
  { name: 'Suiting', imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop&q=80' },
  { name: 'Shirting', imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Women', imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=300&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Men', imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=300&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Children', imageUrl: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=300&fit=crop&q=80' },
  { name: 'Home Upholstery & Furnishing', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop&q=80' },
];

// Hero slides — 4 image panels like the reference image
const heroImagePanels = [
  {
    label: 'Women',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop&q=80',
    path: '/products?category=Women+Wear',
  },
  {
    label: 'Fabrics',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop&q=80',
    path: '/products?category=Dress+Suits',
  },
  {
    label: 'Kids Wear',
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=500&fit=crop&q=80',
    path: '/products?category=Children+Wear',
  },
  {
    label: 'Bedsheets',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=500&fit=crop&q=80',
    path: '/products?category=Bedsheets',
  },
];

const stats = [
  { value: '35+', label: 'Years of Trust' },
  { value: '1000+', label: 'Retail Outlets' },
  { value: '5000+', label: 'Products' },
  { value: '25K+', label: 'Happy Retailers' },
  { value: '24/7', label: 'Dedicated Support' },
];

const reviews = [
  { text: "Grand Textile Mart has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
];

const COLORS = {
  primary: '#5F6F5E',
  primaryDark: '#3B4A32',
  primaryLight: '#EFF3EB',
  accent: '#C5A880',
  bg: '#F8F5EF',
  bgCard: '#FFFFFF',
  border: '#E2D9CC',
  textDark: '#2A3325',
  textMid: '#3D3D30',
  textMuted: '#6B7280',
};

export default function Home() {
  return (
    <div className="w-full pb-10" style={{ background: COLORS.bg, fontFamily: "'Outfit', sans-serif" }}>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="w-full" style={{ background: '#F8F5EF' }}>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-5 gap-3 h-[250px] sm:h-[350px] lg:h-[450px]">
            {[
              { label: 'Sarees', image: '/images/hero1.png', path: '/products?category=Sarees' },
              { label: 'Fabrics', image: '/images/hero2.png', path: '/products?category=Dress+Suits' },
              { label: 'Kids Wear', image: '/images/hero3.png', path: '/products?category=Children+Wear' },
              { label: 'Bedsheets', image: '/images/hero4.png', path: '/products?category=Bedsheets+%26+Linen' },
              { label: 'Women Wear', image: '/images/hero5.png', path: '/products?category=Women+Wear' },
            ].map((panel, idx) => (
              <Link
                key={idx}
                to={panel.path}
                className="group relative rounded-2xl overflow-hidden block w-full h-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={panel.image}
                  alt={panel.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SHOP BY CATEGORY
      ══════════════════════════════════════════ */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10" style={{ background: COLORS.accent, opacity: 0.5 }} />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: COLORS.accent }}>
              ⬥ Shop By Category ⬥
            </span>
            <span className="h-px w-10" style={{ background: COLORS.accent, opacity: 0.5 }} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wide uppercase" style={{ color: COLORS.textDark }}>
            Browse Our Collections
          </h2>
          <div className="w-16 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {shopCategories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 block"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              {/* Category Image */}
              <div className="relative h-28 sm:h-32 overflow-hidden">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(42,51,37,0.7) 0%, rgba(42,51,37,0.1) 60%, transparent 100%)' }}
                />
                {/* Arrow button */}
                <div
                  className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  style={{ background: COLORS.accent }}
                >
                  <ArrowRight size={10} color="white" />
                </div>
              </div>
              {/* Card Label */}
              <div className="p-3 text-center" style={{ background: '#FFFFFF' }}>
                <p className="text-[12px] font-black tracking-wide leading-tight" style={{ color: COLORS.textDark }}>
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 my-2 rounded-2xl" style={{ background: COLORS.primaryLight, border: `1px solid ${COLORS.primary}20` }}>
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
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[180px]"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVsayUyMGNsb3RoZXMlMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
              alt="Wholesale"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(42,51,37,0.85) 0%, rgba(42,51,37,0.2) 100%)' }} />
            <div className="relative z-10">
              <p className="text-[9px] font-black tracking-[0.25em] uppercase mb-2 text-white/80">
                EXCLUSIVE OFFER
              </p>
              <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2 text-white">
                Wholesale<br />Excellence
              </h3>
              <p className="text-[13px] font-medium mb-5 text-white/90">
                Special pricing for retailers & bulk buyers
              </p>
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2 text-[11px] font-black tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all"
                style={{ background: COLORS.primary, color: '#fff' }}
              >
                ENQUIRE NOW <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* New Arrivals Banner */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[180px]"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <img
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=300&fit=crop&q=80"
              alt="New Arrivals"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(42,51,37,0.85) 0%, rgba(42,51,37,0.2) 100%)' }} />
            <div className="relative z-10">
              <p className="text-[9px] font-black tracking-[0.25em] uppercase mb-2 text-white/80">
                NEW ARRIVALS
              </p>
              <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2 text-white">
                Discover Our<br />Latest Collection
              </h3>
              <p className="text-[13px] font-medium mb-5 text-white/90">
                Explore the finest addition to our store
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[11px] font-black tracking-wider uppercase px-5 py-2.5 rounded-lg border transition-all text-white border-white hover:bg-white hover:text-black"
              >
                SHOP NEW ARRIVALS <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ── */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: COLORS.accent }}>Testimonials</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide" style={{ color: COLORS.textDark }}>
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
              className="p-6 rounded-2xl flex flex-col bg-white transition-all duration-300 cursor-pointer"
              style={{ border: `1px solid ${COLORS.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.primary; e.currentTarget.style.boxShadow = '0 4px 20px rgba(95,111,94,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div className="mb-4">
                <Quote size={24} style={{ color: `${COLORS.primary}40`, transform: 'rotate(180deg)' }} fill="currentColor" />
              </div>
              <p className="leading-relaxed text-[13.5px] mb-6 flex-grow text-left italic font-medium" style={{ color: COLORS.textMid }}>
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t mt-auto" style={{ borderColor: `${COLORS.border}80` }}>
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover shadow-sm" style={{ border: `1px solid ${COLORS.border}` }} />
                <div className="text-left">
                  <h4 className="font-black text-[13px] uppercase tracking-wide" style={{ color: COLORS.textDark }}>{review.name}</h4>
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
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide" style={{ color: COLORS.textDark }}>
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
            className="rounded-3xl overflow-hidden shadow-sm text-left flex flex-col justify-center"
            style={{ background: '#FFFFFF', border: `1.5px solid ${COLORS.border}` }}
          >
            <div className="p-8 lg:p-10">
              <h2 className="font-black text-3xl mb-2" style={{ color: COLORS.textDark }}>
                Contact Details
              </h2>
              <p className="text-[13px] mb-8 font-medium" style={{ color: '#4B5563' }}>
                We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
                  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
                  { icon: Mail, label: 'Email Enquiries', lines: ['info@grandtextilemart.com'] },
                  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
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
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm min-h-[450px]"
              style={{ border: `1.5px solid ${COLORS.border}` }}>
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Textile Mart Location Map"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
