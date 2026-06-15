import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft, FileText, Gavel, Phone, Users, Clipboard, Link as LinkIcon, Quote, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const shopCategories = [
  { name: 'Sarees', imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=180&h=180&fit=crop&q=80' },
  { name: 'Kurtis', imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=180&h=180&fit=crop&q=80' },
  { name: 'Leggings', imageUrl: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=180&h=180&fit=crop&q=80' },
  { name: 'Dress Suits', imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=180&h=180&fit=crop&q=80' },
  { name: 'Bedsheets & Linen', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=180&h=180&fit=crop&q=80' },
  { name: 'Hosiery', imageUrl: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=180&h=180&fit=crop&q=80' },
  { name: 'Suiting', imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=180&h=180&fit=crop&q=80' },
  { name: 'Shirting', imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=180&h=180&fit=crop&q=80' },
  { name: 'Women Wear', imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=180&h=180&fit=crop&q=80' },
  { name: 'Men Wear', imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=180&h=180&fit=crop&q=80' },
  { name: 'Children Wear', imageUrl: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=180&h=180&fit=crop&q=80' },
  { name: 'Home Furnishing', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=180&h=180&fit=crop&q=80' },
];

const featuredCollections = [
  { name: 'Wedding Edit', desc: 'Timeless Elegance', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
  { name: 'Festive Collection', desc: 'Celebrate in Style', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800' },
  { name: 'Everyday Essentials', desc: 'Comfort & Grace', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&auto=format&fit=crop&q=80' },
  { name: 'Home Essentials', desc: 'Luxury Living', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80' },
  { name: 'Luxury Silks', desc: 'Rich Heritage Weaves', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80' },
  { name: 'Kids Edition', desc: 'Playful & Soft Cottons', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80' },
];

const stats = [
  { value: '35+', label: 'Years of Trust' },
  { value: '1000+', label: 'Retail Outlets' },
  { value: '5000+', label: 'Products' },
  { value: '25K+', label: 'Happy Retailers' },
  { value: '24/7', label: 'Dedicated Support' },
];

const blogPosts = [
  { title: 'Top 10 Fabric Trends in 2026', date: 'May 20, 2026', image: 'https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=500&fit=crop&q=80' },
  { title: 'How to Choose the Perfect Saree', date: 'May 18, 2026', image: 'https://images.unsplash.com/photo-1599753931952-654e960af582?w=500&fit=crop&q=80' },
  { title: 'Benefits of Partnering with a Trusted Textile Mall', date: 'May 15, 2026', image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=500&fit=crop&q=80' },
  { title: 'Retail Business Growth Strategies', date: 'May 10, 2026', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&fit=crop&q=80' },
];

const reviews = [
  { text: "Urban Fashion Textile has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
];

export default function Home() {
  return (
    <div className="w-full pb-10" style={{ background: '#FAF9F6', fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden flex items-center justify-start">
        <img
          src="/images/hero1.png"
          alt="Urban Fashion Textile Banner"
          className="absolute inset-0 w-full h-full object-cover object-top filter saturate-[0.85]"
        />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 mb-4 text-[#A3855E] tracking-[0.3em] text-[10px] font-extrabold uppercase">
            <span className="w-6 h-px bg-[#A3855E]"></span>
            <span>PREMIUM BY TRADITION</span>
            <span className="w-6 h-px bg-[#A3855E]"></span>
          </div>

          <h1 className="leading-[1.2] mb-6 flex flex-col items-start">
            <span className="text-[#152E47] text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.05em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              Woven with <br/>Heritage,
            </span>
            <span className="text-[#A3855E] text-3xl sm:text-5xl lg:text-6xl font-light italic mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Designed for You
            </span>
          </h1>

          <p className="text-[#393E46] text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium tracking-wide">
            Discover luxury textiles crafted with tradition, passion and perfection. Weaving heritage craftsmanship with contemporary designs to define your personal style.
          </p>

          <div className="flex gap-4 font-sans">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg bg-[#244C73] hover:bg-[#1E3A5F] border border-[#244C73]/20"
            >
              SHOP COLLECTION
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase text-[#244C73] transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md border border-[#244C73] hover:bg-[#244C73] hover:text-white"
            >
              EXPLORE MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#152E47] uppercase tracking-widest flex items-center justify-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#C5A880]/30">♦</span> Shop By Category <span className="text-[#C5A880]/30">♦</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-6 justify-center items-start font-sans">
          {shopCategories.map((cat, idx) => (
            <Link
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              key={idx}
              className="group flex flex-col items-center text-center transition-all duration-300"
            >
              <div
                className="w-22 h-22 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-sm border border-[#E8E5DC]"
              >
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-[11.5px] sm:text-[12px] font-bold text-[#152E47] tracking-wide mt-3 group-hover:text-[#244C73] transition-colors leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 border-y border-[#E8E5DC] my-4 font-sans">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-[#244C73]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11.5px] font-bold text-[#6B7280] uppercase tracking-wider mt-1 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED COLLECTIONS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative flex items-center justify-center mb-8 border-b border-[#E8E5DC]/60 pb-5">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#152E47] uppercase tracking-widest flex items-center justify-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#C5A880]/40">♦</span>
            Featured Collections
            <span className="text-[#C5A880]/40">♦</span>
          </h2>
          <Link
            to="/products"
            className="absolute right-0 text-[10.5px] font-bold text-[#244C73] hover:text-white hover:bg-[#244C73] transition-all border border-[#244C73]/30 rounded-lg px-4 py-1.5 uppercase tracking-wider shrink-0 font-sans"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="relative px-2 sm:px-0">
          <button
            onClick={() => {
              document.getElementById('featured-slider').scrollBy({ left: -320, behavior: 'smooth' });
            }}
            className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#E8E5DC] flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#FAF9F6] transition-all z-20 cursor-pointer hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} className="text-[#152E47]" />
          </button>

          <button
            onClick={() => {
              document.getElementById('featured-slider').scrollBy({ left: 320, behavior: 'smooth' });
            }}
            className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#E8E5DC] flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#FAF9F6] transition-all z-20 cursor-pointer hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight size={16} className="text-[#152E47]" />
          </button>

          <div
            id="featured-slider"
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredCollections.map((col, idx) => (
              <Link
                to="/products"
                key={idx}
                className="group relative flex-none w-[78%] sm:w-[45%] lg:w-[23.6%] aspect-[16/10] sm:aspect-[1.58/1] rounded-2xl overflow-hidden block shadow-sm hover:shadow-md transition-all duration-300 snap-start font-sans"
              >
                <img
                  src={col.image}
                  alt={col.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(21,46,71,0.92) 0%, rgba(21,46,71,0.4) 50%, transparent 100%)'
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4 w-full text-left">
                  <h3
                    className="text-white text-base sm:text-lg font-bold leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {col.name}
                  </h3>
                  <p className="text-[#FAF9F6]/85 text-[10px] font-semibold tracking-wider mt-0.5 uppercase">
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
        <div className="relative flex items-center justify-center mb-8 border-b border-[#E8E5DC]/60 pb-5">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#152E47] uppercase tracking-widest flex items-center justify-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#C5A880]/40">♦</span>
            Latest Blogs
            <span className="text-[#C5A880]/40">♦</span>
          </h2>
          <Link
            to="/blog"
            className="absolute right-0 text-[10.5px] font-bold text-[#244C73] hover:text-white hover:bg-[#244C73] transition-all border border-[#244C73]/30 rounded-lg px-4 py-1.5 uppercase tracking-wider shrink-0 font-sans"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              to="/blog"
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E5DC] hover:border-[#244C73] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group text-left"
            >
              <div className="h-44 w-full relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-wider">{post.date}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-lg font-bold text-[#152E47] mt-1 line-clamp-2 leading-snug uppercase group-hover:text-[#244C73] transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-[#244C73] tracking-wider uppercase">
                  READ MORE <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-1 font-sans">Testimonials</p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#152E47] uppercase tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Customers Say
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 font-sans">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl flex flex-col bg-white border border-[#E8E5DC] hover:border-[#244C73] hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <Quote size={24} className="text-[#244C73]/30 rotate-180" fill="currentColor" />
              </div>
              <p className="leading-relaxed text-[#393E46] text-[13.5px] mb-6 flex-grow text-left italic font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E5DC]/40 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover shadow-sm border border-[#E8E5DC]"
                />
                <div className="text-left">
                  <h4 className="font-bold text-[13px] text-[#152E47] uppercase tracking-wide">{review.name}</h4>
                  <p className="text-[10px] text-[#6B7280] font-semibold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LET'S GROW YOUR BUSINESS TOGETHER CTA SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 font-sans">
        <div className="bg-[#E8F1FA]/80 border border-[#244C73]/10 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left max-w-2xl">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl sm:text-3.5xl font-bold text-[#152E47] leading-tight mb-2">
              Let's grow your business together
            </h2>
            <p className="text-[#4B5563] text-sm font-semibold">
              Connect with our team for inquiries, partnerships & support.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#244C73] text-white rounded-full text-xs font-bold tracking-wider uppercase hover:bg-[#1E3A5F] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              GET IN TOUCH <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
