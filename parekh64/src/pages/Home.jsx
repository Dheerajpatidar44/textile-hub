import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Crown, 
  Users, 
  Smile, 
  MapPin,
  Quote, 
  ChevronRight,
} from 'lucide-react';

const C = {
  primary: '#2B2520',
  primaryLight: '#4A423F',
  accent: '#C5A880',
  gold: '#C5A880',
  bg: '#FDFBF7',
  border: '#EAE5DB',
  stone: '#6C625C',
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png", count: "120+ Designs" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&auto=format&fit=crop&q=60", count: "40+ Colors" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=300&auto=format&fit=crop&q=60", count: "85+ Patterns" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png", count: "90+ Styles" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png", count: "150+ Threadcounts" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop&q=60", count: "60+ Packs" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&auto=format&fit=crop&q=60", count: "200+ Fabrics" },
  { name: "Shirting", image: "/images/popular_cotton_fabric.png", count: "180+ Patterns" },
  { name: "Women Ethnic", image: "/images/popular_lehenga.png", count: "75+ Lehengas" },
  { name: "Men Ethnic", image: "/images/men_ethnic_wear.png", count: "50+ Sherwanis" },
  { name: "Kids Ethnic", image: "/images/children_ethnic_wear.png", count: "65+ Outfits" },
  { name: "Home Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60", count: "110+ Items" },
];

const blogs = [
  { title: "Top 5 Fabric Trends in Interior Design 2026", date: "April 20", image: "/images/popular_banarasi_saree.png", category: "Trends" },
  { title: "Sustainable Textiles: The Future of Interiors", date: "April 15", image: "/images/popular_bedsheet.png", category: "Sustainability" },
  { title: "Choosing the Right Fabrics for Hospitality Spaces", date: "April 10", image: "/images/popular_cotton_fabric.png", category: "Hospitality" },
];

export default function Home() {
  const sliderRef = useRef(null);

  // Auto-infinite scroll slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let animFrame;
    let speed = 0.6; // px per frame
    let paused = false;

    const scroll = () => {
      if (!paused && slider) {
        slider.scrollLeft += speed;
        // Reset to start seamlessly (duplicated items)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animFrame = requestAnimationFrame(scroll);
    };

    animFrame = requestAnimationFrame(scroll);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    slider.addEventListener('mouseenter', pause);
    slider.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animFrame);
      slider.removeEventListener('mouseenter', pause);
      slider.removeEventListener('mouseleave', resume);
    };
  }, []);

  // Duplicate categories for seamless loop
  const loopedCategories = [...categories, ...categories];

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-[80px] md:pt-[88px] lg:pt-[92px] pb-16">

      {/* ── 1. HERO SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-4 lg:py-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-3 block">
            For Spaces That Inspire
          </span>
          <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-[#2B2520] font-serif m-0 mb-4 leading-[1.08]">
            Textiles That <br/>
            <span className="text-[#C5A880] italic font-normal">Transform</span> <br/>
            Every Space
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#6C625C] leading-relaxed mb-6 max-w-[400px] font-medium">
            Premium fabrics for interiors that blend beauty, comfort & durability. Designed for spaces that demand the extraordinary.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link
              to="/products"
              className="px-7 py-3 bg-[#C5A880] hover:bg-[#2B2520] text-white rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <span>Explore Collections</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 border border-[#EAE5DB] hover:border-[#C5A880] text-[#2B2520] hover:text-[#C5A880] rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 bg-white"
            >
              <span>Contact Us</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Center Column: Arched Hero Image — pushed up with negative margin */}
        <div className="lg:col-span-4 flex justify-center items-start" style={{ marginTop: '-20px' }}>
          <div
            className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[4/5] bg-[#FAF7F2] p-1.5 border border-[#EAE5DB] shadow-lg"
            style={{ borderRadius: '160px 160px 20px 20px' }}
          >
            <div
              className="w-full h-full overflow-hidden relative"
              style={{ borderRadius: '152px 152px 14px 14px' }}
            >
              <img
                src="/images/aarohi_hero.png"
                alt="Aarohi Fabrics Hero Saree Showcase"
                className="w-full h-full object-cover object-top hover:scale-[1.04] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#C5A880]/10 -z-10 blur-xl" />
          </div>
        </div>

        {/* Right Column: Compact Stat Cards */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          {[
            { value: "25+", label: "Years of Legacy", icon: Crown },
            { value: "500+", label: "Retail Partners", icon: Users },
            { value: "1L+", label: "Happy Customers", icon: Smile },
            { value: "20+", label: "Cities Connected", icon: MapPin },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-[#EAE5DB] px-4 py-3 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md hover:border-[#C5A880] hover:translate-y-[-1px] transition-all duration-300 text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#EAE5DB] flex items-center justify-center text-[#C5A880] shrink-0">
                <stat.icon size={15} />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[18px] font-bold text-[#2B2520] leading-none">{stat.value}</span>
                <span className="text-[10px] font-bold text-[#C5A880] tracking-wide uppercase leading-none">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ── 2. SHOP BY CATEGORY (Auto-Scrolling Slider) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 pt-4 pb-10 text-left">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
            Discover
          </span>
          <h2 className="text-[30px] font-bold text-[#2B2520] font-serif m-0 uppercase tracking-wide">
            Shop by Category
          </h2>
          <div className="w-10 h-0.5 bg-[#C5A880] mx-auto mt-3" />
        </div>

        {/* Infinite Slider */}
        <div
          ref={sliderRef}
          className="flex items-center gap-6 overflow-x-hidden pb-4"
          style={{ cursor: 'default', userSelect: 'none' }}
        >
          {loopedCategories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center gap-2.5 shrink-0 text-decoration-none text-center"
            >
              {/* Single border circle */}
              <div
                className="w-24 h-24 sm:w-[104px] sm:h-[104px] rounded-full overflow-hidden border border-[#EAE5DB] group-hover:border-[#C5A880] transition-all duration-300 shadow-sm bg-white"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="text-[11.5px] font-bold tracking-wider text-[#2B2520] uppercase group-hover:text-[#C5A880] transition-colors block leading-tight">
                  {cat.name}
                </span>
                <span className="text-[9.5px] text-[#6C625C] tracking-wide block mt-0.5">
                  {cat.count}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. WHY CHOOSE AAROHI ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* Column 1: Bullet list */}
          <div className="bg-white border border-[#EAE5DB] p-7 rounded-2xl flex flex-col justify-center">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-3 block">
              Why Choose Aarohi?
            </span>
            <h3 className="text-[26px] font-bold text-[#2B2520] font-serif m-0 mb-5 leading-tight">
              Crafted to perfection. Built for trust.
            </h3>
            <div className="space-y-3.5">
              {[
                { title: "Premium Quality", desc: "Assured material standard checks." },
                { title: "Timely Delivery", desc: "Fast logistics across India." },
                { title: "Custom Solutions", desc: "Bespoke options for all needs." },
                { title: "Sustainable & Ethical", desc: "Eco-friendly weaving practices." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#C5A880] flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#2B2520] m-0">{item.title}</h4>
                    <p className="text-[11.5px] text-[#6C625C] m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Dark card */}
          <div className="bg-[#2B2520] text-white p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-3 block">
                Designed for Professionals
              </span>
              <h3 className="text-[28px] font-bold font-serif text-white m-0 mb-3 leading-tight">
                Solutions for Designers. Value for Every Project.
              </h3>
              <p className="text-[13px] text-[#FAF7F2] opacity-80 leading-relaxed font-medium">
                We work alongside decorators and space designers to source custom quantities, unique patterns, and highly durable commercial textiles.
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A880] hover:bg-white text-white hover:text-[#2B2520] rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 text-decoration-none shadow-sm"
              >
                <span>Know More</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Column 3: Partner with Us Image Card */}
          <div className="relative rounded-2xl overflow-hidden group border border-[#EAE5DB] shadow-sm" style={{ minHeight: '280px' }}>
            <img
              src="/images/yellow_chair.png"
              alt="Designer Armchair Showcase"
              className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2520]/80 via-[#2B2520]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 z-10 flex flex-col items-start">
              <span className="text-[11px] font-bold text-[#C5A880] tracking-widest uppercase mb-1 block">
                For Designers & Architects
              </span>
              <h3 className="text-[24px] font-bold font-serif text-white m-0 mb-4">
                Partner With Us for Your Next Masterpiece.
              </h3>
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-white hover:bg-[#C5A880] text-[#2B2520] hover:text-white rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 text-decoration-none"
              >
                Become a Partner &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. CLIENTS, MEDIA & BLOGS ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-8 text-left grid grid-cols-1 lg:grid-cols-3 gap-6 items-start" id="story">

        {/* Column 1: Customer Reviews */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
              Testimonials
            </span>
            <h3 className="text-[26px] font-bold text-[#2B2520] font-serif m-0 mb-4 uppercase tracking-wide">
              What Our Clients Say
            </h3>
          </div>

          {[
            {
              quote: "Aarohi Fabrics offers the best quality fabrics with a wide range of designs. Perfect for our retail outlets!",
              author: "Studio HBA",
              city: "Mumbai"
            },
            {
              quote: "Their professional approach, timely delivery & fabric quality are unmatched in the textile industry.",
              author: "Design Plus",
              city: "Bangalore"
            },
            {
              quote: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time.",
              author: "Vikram Associates",
              city: "Delhi"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#EAE5DB] p-5 rounded-2xl relative shadow-sm hover:border-[#C5A880] hover:shadow-md transition-all duration-300">
              <Quote size={18} className="text-[#C5A880]/20 absolute top-4 right-4" />
              <p className="text-[12.5px] text-[#6C625C] leading-relaxed italic m-0 mb-3 font-medium">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#C5A880] flex items-center justify-center font-bold text-[#2B2520] text-[10px] shrink-0">
                  {item.author[0]}
                </div>
                <div>
                  <span className="text-[12px] font-bold text-[#2B2520] block leading-none">{item.author}</span>
                  <span className="text-[9.5px] text-[#C5A880] block mt-0.5 font-bold tracking-wider uppercase">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Media Gallery First Image */}
        <div className="bg-white border border-[#EAE5DB] rounded-2xl overflow-hidden shadow-sm">
          <div className="pt-6 px-6 pb-4">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
              Moments of Excellence
            </span>
            <h3 className="text-[26px] font-bold text-[#2B2520] font-serif m-0 mb-2 leading-tight">
              Milestones That Define Our Journey.
            </h3>
            <p className="text-[12.5px] text-[#6C625C] leading-relaxed font-medium m-0">
              Global events, award ceremonies, and industry milestones that mark our excellence.
            </p>
          </div>

          {/* Gallery First Image — fills width, fixed height */}
          <div className="relative mx-4 rounded-xl overflow-hidden group" style={{ height: '220px' }}>
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60"
              alt="Global Textile Summit 2026"
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2520]/70 via-[#2B2520]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 z-10">
              <span className="text-[9px] font-bold text-[#C5A880] tracking-widest uppercase block mb-0.5">Event</span>
              <span className="text-[13px] font-bold text-white font-serif leading-tight block">Global Textile Summit 2026</span>
            </div>
          </div>

          <div className="px-6 py-5">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF7F2] border border-[#EAE5DB] hover:border-[#C5A880] text-[#2B2520] hover:text-[#C5A880] rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-200 text-decoration-none"
            >
              <span>View Gallery</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Column 3: Latest Blog Articles */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
              Insights & Trends
            </span>
            <h3 className="text-[26px] font-bold text-[#2B2520] font-serif m-0 mb-4 uppercase tracking-wide">
              Latest Articles
            </h3>
          </div>

          {blogs.slice(0, 2).map((blog, idx) => (
            <Link
              key={idx}
              to="/blog"
              className="group relative rounded-2xl overflow-hidden border border-[#EAE5DB] hover:border-[#C5A880] shadow-sm transition-all duration-300 text-decoration-none block"
              style={{ height: '160px' }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2520]/85 via-[#2B2520]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 z-10">
                <span className="text-[9px] font-bold text-[#C5A880] tracking-widest uppercase block mb-1">
                  {blog.category} · {blog.date}
                </span>
                <h4 className="text-[13.5px] font-bold text-white font-serif m-0 leading-snug group-hover:text-[#C5A880] transition-colors">
                  {blog.title}
                </h4>
                <span className="text-[9px] font-bold text-white/70 tracking-widest uppercase mt-1.5 inline-flex items-center gap-1">
                  Read Article <ChevronRight size={9} />
                </span>
              </div>
            </Link>
          ))}

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-bold text-[#C5A880] hover:text-[#2B2520] tracking-widest uppercase transition-colors text-decoration-none mt-1"
          >
            <span>View All Articles</span>
            <ArrowRight size={12} />
          </Link>
        </div>

      </section>

      {/* ── 5. TRADE SERVICES — Contact Us Card (Full Width) ── */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-14 py-8 text-left">
        <div className="relative rounded-2xl overflow-hidden group shadow-sm border border-[#EAE5DB]" style={{ minHeight: '280px' }}>
          <img
            src="/images/fabric_connect.png"
            alt="Folded Fabrics Close Up"
            className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B2520]/90 via-[#2B2520]/60 to-[#2B2520]/30" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between p-8 lg:p-14 gap-8 h-full">
            <div className="max-w-[580px]">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-3 block">
                Partner Utilities
              </span>
              <h2 className="text-[32px] lg:text-[44px] font-bold font-serif text-white m-0 mb-4 leading-tight">
                Let's Create Spaces That Inspire.
              </h2>
              <p className="text-[14px] text-[#FAF7F2] opacity-80 leading-relaxed font-medium m-0">
                Connect with our trade team for bulk orders, custom requirements, wholesale partnerships, and premium textiles.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A880] hover:bg-white text-white hover:text-[#2B2520] rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 text-decoration-none shadow-md whitespace-nowrap"
              >
                <span>Connect With Us</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/40 hover:border-[#C5A880] text-white hover:text-[#C5A880] rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 text-decoration-none whitespace-nowrap"
              >
                <span>Trade Enquiry</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
