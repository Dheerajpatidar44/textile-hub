import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft, FileText, Gavel, Phone, Users, Clipboard, Link as LinkIcon, Quote, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const shopCategories = [
  { name: 'Sarees', imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=180&h=180&fit=crop&q=80' },
  { name: 'Leggings', imageUrl: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=180&h=180&fit=crop&q=80' },
  { name: 'Kurtis', imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=180&h=180&fit=crop&q=80' },
  { name: 'Dress Suits', imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=180&h=180&fit=crop&q=80' },
  { name: 'Bedsheets & Linen', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=180&h=180&fit=crop&q=80' },
  { name: 'Hosiery Items', imageUrl: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=180&h=180&fit=crop&q=80' },
  { name: 'Suiting', imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=180&h=180&fit=crop&q=80' },
  { name: 'Shirting', imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=180&h=180&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Women', imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=180&h=180&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Men', imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=180&h=180&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Children', imageUrl: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=180&h=180&fit=crop&q=80' },
  { name: 'Home Upholstery & Furnishing', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=180&h=180&fit=crop&q=80' },
];

const featuredCollections = [
  { name: 'Wedding Edit', desc: 'Timeless Elegance', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
  { name: 'Festive Collection', desc: 'Celebrate in Style', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800' },
  { name: 'Everyday Essentials', desc: 'Comfort & Grace', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&auto=format&fit=crop&q=80' },
  { name: 'Home Essentials', desc: 'Luxury Living', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80' },
  { name: 'Luxury Silks', desc: 'Rich Heritage Weaves', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80' },
  { name: 'Kids Edition', desc: 'Playful & Soft Cottons', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80' },
];

const promoBanners = [
  {
    tag: 'WIDE RANGE OF',
    title: 'Premium Fabrics\nFor Every Need',
    desc: 'Discover luxury, quality and comfort in every thread.',
    buttonText: 'DISCOVER MORE',
    bgImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
    bgColor: '#772729',
    textColor: '#FFFFFF',
    overlay: 'linear-gradient(to right, rgba(119,39,41,0.95) 0%, rgba(119,39,41,0.7) 50%, transparent 100%)'
  },
  {
    tag: 'OUR PROMISE',
    title: 'Reliable.\nTransparent.\nRetailer Focused.',
    desc: 'Building stronger businesses together.',
    buttonText: 'OUR PROMISE',
    bgImage: 'https://images.unsplash.com/photo-1606836591695-4d58a73efa1e?w=600&auto=format&fit=crop&q=80',
    bgColor: '#FAF3EE',
    textColor: '#3C3430',
    overlay: 'linear-gradient(to right, rgba(250,243,238,0.95) 0%, rgba(250,243,238,0.8) 60%, transparent 100%)'
  },
  {
    tag: 'JOIN US',
    title: 'Strengthening\nBusinesses\nTogether',
    desc: 'Be a part of our growing retail network.',
    buttonText: 'JOIN NETWORK',
    bgImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80',
    bgColor: '#A24E51',
    textColor: '#FFFFFF',
    overlay: 'linear-gradient(to right, rgba(162,78,81,0.95) 0%, rgba(162,78,81,0.7) 50%, transparent 100%)'
  }
];

const quickLinks = [
  { name: 'e-Quotation', icon: FileText, path: '/e-quotation', desc: 'Get instant quotes' },
  { name: 'e-Auction', icon: Gavel, path: '/e-auction', desc: 'Participate in live auctions' },
  { name: 'Trade Enquiry', icon: Phone, path: '/trade-enquiry', desc: 'Connect with our expert team' },
  { name: 'Retail Management', icon: Users, path: '/retail-management', desc: 'Smart solutions for retailers' },
  { name: 'Trade Circular', icon: LinkIcon, path: '/trade-circular', desc: 'Latest updates & announcements' },
];

const stats = [
  { value: '35+', label: 'Years of Trust' },
  { value: '1000+', label: 'Retail Outlets' },
  { value: '5000+', label: 'Products' },
  { value: '25K+', label: 'Happy Retailers' },
  { value: '24/7', label: 'Dedicated Support' },
];

const blogPosts = [
  { title: 'Top 10 Fabric Trends in 2026', date: 'May 20, 2024', image: 'https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=300&h=200&fit=crop&q=80' },
  { title: 'How to Choose the Perfect Saree', date: 'May 16, 2024', image: 'https://images.unsplash.com/photo-1599753931952-654e960af582?w=300&h=200&fit=crop&q=80' },
  { title: 'Benefits of Partnering with a Trusted Textile Mall', date: 'May 12, 2024', image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=300&h=200&fit=crop&q=80' },
];

const reviews = [
  { text: "Vastramall has been our trusted partner since years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
];

export default function Home() {
  return (
    <div className="w-full pb-10" style={{ background: '#FCF5F0', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden">
        <img
          src="/images/heromens.png"
          alt="VASTRAMALL Textile Banner"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 flex items-center">
          <div className="max-w-xl bg-white/50 backdrop-blur-[6px] border border-white/40 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col items-start text-left">
            <h1
              className="leading-[1.15] mb-4 text-[#3C3430]"
              style={{
                fontFamily: "'Marcellus', serif",
                fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
              }}
            >
              Threads that<br />
              <span className="italic text-[#A24E51]">Tell Stories</span>
            </h1>

            <p className="text-[#3C3430] text-[14px] sm:text-[16px] leading-[1.6] mb-8 font-semibold max-w-md">
              Discover unmatched quality, timeless traditions and trendsetting collections under one roof. Our exclusive range weaves luxury into every celebration.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg text-white btn-primary"
              >
                EXPLORE COLLECTIONS <ArrowRight size={15} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#3C3430] uppercase tracking-widest flex items-center justify-center gap-3"
            style={{ fontFamily: "'Marcellus', serif" }}
          >
            <span className="text-[#A24E51]/30">♦</span> Shop By Category <span className="text-[#A24E51]/30">♦</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#A24E51] mx-auto mt-3 rounded-full" />
        </div>

        {/* Circular Grid layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-6 justify-center items-start">
          {shopCategories.map((cat, idx) => (
            <Link
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              key={idx}
              className="group flex flex-col items-center text-center transition-all duration-300"
            >
              <div
                className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-sm group-hover:shadow-md"
                style={{
                  border: '1.5px solid #EADCD2'
                }}
              >
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold text-[#3C3430] tracking-wide mt-3 group-hover:text-[#A24E51] transition-colors leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── QUICK LINKS SECTION (GRID) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        {/* Desktop Grid (5 columns) */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {quickLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.path}
                className="bg-white p-5 rounded-2xl border border-[#EADCD2] hover:border-[#A24E51] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-[130px]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#F8ECE9] text-[#A24E51] group-hover:bg-[#A24E51] group-hover:text-white transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                  <ArrowUpRight size={15} className="text-[#908882] group-hover:text-[#A24E51] transition-colors" />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-[#3C3430] mb-0.5 tracking-wide">{item.name}</h3>
                  <p className="text-[10px] text-[#706863] font-medium leading-tight">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile List view */}
        <div className="block md:hidden bg-white rounded-2xl border border-[#EADCD2] overflow-hidden shadow-sm">
          {quickLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.path}
                className={`flex items-center justify-between p-4 transition-colors ${
                  idx !== quickLinks.length - 1 ? 'border-b border-gray-100' : ''
                } hover:bg-gray-50`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#F8ECE9] text-[#A24E51]">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-[12.5px] font-bold text-[#3C3430] tracking-wide leading-none">{item.name}</h3>
                    <p className="text-[10.5px] text-[#706863] mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#908882]" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── PROMO BANNERS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {promoBanners.map((promo, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-[220px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center p-7"
              style={{ background: promo.bgColor }}
            >
              {/* Background cover image */}
              <img
                src={promo.bgImage}
                alt={promo.tag}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
              />
              <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: promo.overlay }} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <p
                    className="text-[9.5px] font-bold tracking-[0.2em] uppercase mb-2"
                    style={{ color: promo.textColor === '#FFFFFF' ? '#F2E2E1' : '#A24E51' }}
                  >
                    {promo.tag}
                  </p>
                  <h3
                    className="text-[20px] font-bold leading-snug whitespace-pre-line"
                    style={{ color: promo.textColor, fontFamily: "'Marcellus', serif" }}
                  >
                    {promo.title}
                  </h3>
                  <p className="text-[11.5px] mt-2 font-medium opacity-85" style={{ color: promo.textColor }}>
                    {promo.desc}
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase border-b pb-0.5 hover:opacity-80 transition-all"
                    style={{
                      color: promo.textColor,
                      borderColor: promo.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.4)' : 'rgba(60,52,48,0.4)'
                    }}
                  >
                    {promo.buttonText} <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 border-y border-[#EADCD2] my-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-[#A24E51]" style={{ fontFamily: "'Marcellus', serif" }}>
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11.5px] font-bold text-[#706863] uppercase tracking-wider mt-1 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED COLLECTIONS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative flex items-center justify-center mb-8 border-b border-[#EADCD2]/60 pb-5">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#3C3430] uppercase tracking-widest flex items-center justify-center gap-3"
            style={{ fontFamily: "'Marcellus', serif" }}
          >
            <span className="text-[#A24E51]/40">♦</span>
            Featured Collections
            <span className="text-[#A24E51]/40">♦</span>
          </h2>
          <Link
            to="/products"
            className="absolute right-0 text-[10.5px] font-bold text-[#A24E51] hover:text-white hover:bg-[#A24E51] transition-all border border-[#A24E51]/30 rounded-lg px-4 py-1.5 uppercase tracking-wider shrink-0"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="relative px-2 sm:px-0">
          {/* Left Arrow Button */}
          <button
            onClick={() => {
              document.getElementById('featured-slider').scrollBy({ left: -320, behavior: 'smooth' });
            }}
            className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#FAF3EE] transition-all z-20 cursor-pointer hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} className="text-[#3C3430]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => {
              document.getElementById('featured-slider').scrollBy({ left: 320, behavior: 'smooth' });
            }}
            className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#FAF3EE] transition-all z-20 cursor-pointer hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight size={16} className="text-[#3C3430]" />
          </button>

          {/* Slider Wrapper */}
          <div
            id="featured-slider"
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredCollections.map((col, idx) => (
              <Link
                to="/products"
                key={idx}
                className="group relative flex-none w-[78%] sm:w-[45%] lg:w-[23.6%] aspect-[16/10] sm:aspect-[1.58/1] rounded-2xl overflow-hidden block shadow-sm hover:shadow-md transition-all duration-300 snap-start"
              >
                <img
                  src={col.image}
                  alt={col.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Premium dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(35,28,24,0.92) 0%, rgba(35,28,24,0.4) 50%, transparent 100%)'
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4 w-full text-left">
                  <h3
                    className="text-white text-base sm:text-lg font-bold leading-tight"
                    style={{ fontFamily: "'Marcellus', serif" }}
                  >
                    {col.name}
                  </h3>
                  <p className="text-[#DFCCBF] text-[10px] font-semibold tracking-wider mt-0.5 uppercase">
                    {col.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST BLOGS SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative flex items-center justify-center mb-8 border-b border-[#EADCD2]/60 pb-5">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#3C3430] uppercase tracking-widest flex items-center justify-center gap-3"
            style={{ fontFamily: "'Marcellus', serif" }}
          >
            <span className="text-[#A24E51]/40">♦</span>
            Latest Blogs
            <span className="text-[#A24E51]/40">♦</span>
          </h2>
          <Link
            to="/blog"
            className="absolute right-0 text-[10.5px] font-bold text-[#A24E51] hover:text-white hover:bg-[#A24E51] transition-all border border-[#A24E51]/30 rounded-lg px-4 py-1.5 uppercase tracking-wider shrink-0"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              to="/blog"
              className="bg-white rounded-2xl overflow-hidden border border-[#EADCD2] hover:border-[#A24E51] shadow-sm hover:shadow-md transition-all duration-300 flex"
            >
              <div className="w-24 sm:w-28 h-24 sm:h-auto shrink-0 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col justify-center flex-grow text-left">
                <span className="text-[10px] font-semibold text-[#A24E51] uppercase tracking-wider">{post.date}</span>
                <h3 className="text-[12.5px] font-bold text-[#3C3430] mt-1 line-clamp-2 leading-tight uppercase group-hover:text-[#A24E51] transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#A24E51] uppercase mb-1">Testimonials</p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#3C3430] uppercase tracking-wider"
            style={{ fontFamily: "'Marcellus', serif" }}
          >
            What Our Customers Say
          </h2>
          <div className="w-12 h-0.5 bg-[#A24E51] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl flex flex-col bg-white border border-[#EADCD2] hover:border-[#A24E51] hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <Quote size={24} className="text-[#A24E51]/30 rotate-180" fill="currentColor" />
              </div>
              <p className="leading-relaxed text-[#554D48] text-[13.5px] mb-6 flex-grow text-left italic font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover shadow-sm border border-[#EADCD2]"
                />
                <div className="text-left">
                  <h4 className="font-bold text-[13px] text-[#3C3430] uppercase tracking-wide">{review.name}</h4>
                  <p className="text-[10px] text-[#908882] font-semibold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT US CARD SECTION (REPLACED CONTACT SECTION) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div
          className="rounded-3xl overflow-hidden shadow-md border border-[#EADCD2] flex flex-col md:flex-row bg-white"
        >
          <div className="p-8 sm:p-10 lg:p-12 md:w-1/2 flex flex-col justify-center text-left">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#A24E51] uppercase mb-1">Our Heritage</p>
            <h2
              className="text-2xl sm:text-3.5xl font-bold mb-4 text-[#3C3430]"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              A Legacy of Excellence
            </h2>
            <p className="text-[#554D48] text-[14px] leading-relaxed mb-6 font-medium">
              Since our inception, VASTRAMALL has been synonymous with uncompromised quality and visionary design in the textile industry. We began with a simple mission: to weave elegance into the very fabric of everyday life.
            </p>
            <p className="text-[#554D48] text-[14px] leading-relaxed mb-6 font-medium">
              Today, we stand as a beacon of premium manufacturing, utilizing state-of-the-art technology while honoring traditional craftsmanship. Our deep-rooted partnerships with skilled weavers allow us to bring you the finest materials, blending durability with unmatched aesthetic appeal.
            </p>
            <div>
              <Link
                to="/about"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-95 text-white"
              >
                LEARN MORE ABOUT US <ArrowRight size={13} className="ml-1.5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[300px] relative">
            <img
              src="images/hero.png"
              alt="Vastramall Legacy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft border accent overlap on desktop */}
            <div className="hidden lg:block absolute inset-4 border border-white/20 pointer-events-none rounded-xl" />
          </div>
        </div>
      </section>

      {/* ── BOTTOM RESPONSIVE GET IN TOUCH BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <Link
          to="/contact"
          className="bg-[#A24E51] text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold tracking-wider uppercase text-xs sm:text-sm hover:bg-[#8C3336] transition-colors shadow-sm"
        >
          <Phone size={14} /> GET IN TOUCH WITH US
        </Link>
      </section>

    </div>
  );
}
