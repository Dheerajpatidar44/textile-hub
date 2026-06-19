import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Award, Truck, Sliders, Headphones, ShieldCheck, ShoppingBag, Users, MapPin, Smile, Gavel, ClipboardCheck, ArrowUpRight } from 'lucide-react';

const C = {
  primary: '#43533D',        // Premium Olive Green
  primaryLight: '#576951',
  primaryDark: '#2E3A2B',
  accent: '#B8624E',         // Terracotta Accent
  accentLight: '#D3A196',
  gold: '#C2A478',
  bg: '#FAF8F5',             // Warm Soft Cream Background
  border: '#E6E4DF',
  stone: '#6B7866',          // Muted Sage Green
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png", bg: "#F4F7F6" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80", bg: "#FAF6F4" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80", bg: "#F7F5F9" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png", bg: "#FAF7F0" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png", bg: "#F4F7FA" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80", bg: "#FAF5F7" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80", bg: "#F5F7F8" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80", bg: "#FAF6F0" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/ethnic_wear.png", bg: "#FAF5F5" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png", bg: "#F5F7F5" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png", bg: "#FAF7F3" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80", bg: "#F6F5FA" }
];

const popularCollections = [
  { name: "Printed Fabrics", image: "/images/ethnic_wear.png", path: "/products?category=Formal%20%26%20Ethnic%20Wear%20for%20Women" },
  { name: "Plain Fabrics", image: "/images/popular_cotton_fabric.png", path: "/products?category=Shirting" },
  { name: "Ethnic Wear", image: "/images/popular_anarkali.png", path: "/products?category=Sarees" },
  { name: "Home Textiles", image: "/images/popular_bedsheet.png", path: "/products?category=Bedsheets%20%26%20Linen" },
  { name: "Kids Wear", image: "/images/children_ethnic_wear.png", path: "/products?category=Formal%20%26%20Ethnic%20Wear%20for%20Children" }
];


const slides = [
  {
    image: "/images/hero_woven_fabrics.png",
    title: <>Heritage <span className="font-serif italic font-light text-neutral-200">Woven</span>.<br />Tomorrow’s <span className="text-[#B8624E] font-semibold">Style</span>.</>,
    desc: "Premium textile collections crafted with tradition, designed for modern living.",
    cta: "EXPLORE COLLECTIONS",
    link: "/products"
  },
  {
    image: "/images/premium_fabrics.png",
    title: <>Crafted <span className="font-serif italic font-light text-neutral-200">Elegance</span>.<br />Timeless <span className="text-[#B8624E] font-semibold">Quality</span>.</>,
    desc: "Discover the finest silk, cotton, and linen fabrics woven by master artisans.",
    cta: "OUR PRODUCTS",
    link: "/products"
  },
  {
    image: "/images/ethnic_wear.png",
    title: <>Exquisite <span className="font-serif italic font-light text-neutral-200">Designs</span>.<br />Exclusive <span className="text-[#B8624E] font-semibold">Fabrics</span>.</>,
    desc: "From traditional sarees to contemporary ethnic wear, find your perfect style.",
    cta: "TRADE ENQUIRY",
    link: "/trade-enquiry"
  }
];

export default function Home() {
  const collectionRowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION (Premium Full-Width Background Slider) ── */}
      <section className="relative w-full overflow-hidden bg-black h-[400px] sm:h-[500px] lg:h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Cover Image */}
            <img
              src={slides[currentSlide].image}
              alt="CHETAN MANKER Textile Mall Banner"
              className="w-full h-full object-cover"
            />
            {/* Elegant dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:pl-6 lg:pr-14 w-full text-left relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-[32px] sm:text-[46px] lg:text-[58px] font-normal leading-[1.08] text-white mb-4 tracking-tight font-serif">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="text-[13px] sm:text-[15px] text-neutral-200 mb-6 leading-relaxed max-w-md font-medium">
                    {slides[currentSlide].desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to={slides[currentSlide].link}
                      className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#B8624E] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#43533D] rounded-full shadow-lg hover:scale-[1.02]"
                    >
                      {slides[currentSlide].cta}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#B8624E]/80 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white transition-all duration-300 z-20 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#B8624E]/80 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white transition-all duration-300 z-20 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === idx ? 'bg-[#B8624E] scale-110' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── 3. POPULAR COLLECTIONS SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left">
            <h2 className="text-[34px] sm:text-[40px] font-normal text-[#43533D] tracking-tight font-serif">
              POPULAR COLLECTIONS
            </h2>
            <div className="w-12 h-[2px] bg-[#B8624E] mt-3" />
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#43533D] text-[#43533D] hover:bg-[#43533D] hover:text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-full"
          >
            VIEW ALL COLLECTIONS
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularCollections.map((col, idx) => (
            <Link
              key={idx}
              to={col.path}
              className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#E6E4DF] hover:border-[#B8624E] bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="h-[280px] overflow-hidden relative">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#43533D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Label */}
              <div className="p-5 flex items-center justify-between border-t border-[#E6E4DF] bg-white text-left z-10">
                <span className="text-[13px] font-bold text-[#43533D] tracking-wide font-sans">{col.name}</span>
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-[#43533D] group-hover:bg-[#43533D] group-hover:text-white transition-all duration-300">
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. BULK ORDERS BANNER ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pb-16">
        <div 
          className="rounded-[28px] overflow-visible px-6 sm:px-10 lg:pl-12 lg:pr-64 py-6 lg:py-0 h-auto lg:h-[110px] flex flex-col lg:flex-row items-center justify-between gap-4 relative text-white"
          style={{ background: C.primary }}
        >
          {/* Left Block: Icon and Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2" />
                <path d="M12 6l-6 6 6 6 6-6-6-6z" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="1.5" fill="white" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal leading-tight font-serif text-left whitespace-nowrap" style={{ color: '#ffffff' }}>
              Bulk Orders<br />Made Simple
            </h3>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-8 bg-white/20 self-center mx-2" />

          {/* Description Block */}
          <p className="hidden md:block text-[12.5px] leading-relaxed text-white/80 font-medium text-left max-w-sm lg:max-w-[280px]">
            Special pricing, dedicated support<br />
            and seamless delivery for<br />
            businesses of all sizes.
          </p>

          {/* Action button */}
          <Link
            to="/about"
            className="border border-white/40 text-white hover:bg-white hover:text-[#43533D] text-[10.5px] font-bold tracking-widest uppercase transition-all duration-300 rounded-[12px] px-6 py-2.5 z-10 whitespace-nowrap"
          >
            KNOW MORE
          </Link>

          {/* Cart Image absolute right - clipped inside rounded-r-[28px] container */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[240px] h-full rounded-r-[28px] overflow-hidden z-0">
            <img
              src="/images/services_professionals.png"
              alt="Fabric collection banner image"
              className="w-full h-full object-cover opacity-95"
            />
          </div>
        </div>
      </section>

      {/* ── 5. STATS SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pb-16">
        <div 
          className="w-full rounded-[30px] py-10 px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-sm border border-[#E6E4DF] items-center text-center"
          style={{ background: '#FAF8F5' }}
        >
          {[
            { val: "20+", desc: "Years of Excellence", icon: Award },
            { val: "500+", desc: "Retail Partners", icon: Users },
            { val: "100+", desc: "Cities Pan India", icon: MapPin },
            { val: "1,00,000+", desc: "Happy Customers", icon: Smile }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-left sm:text-center md:flex-row lg:flex-col lg:text-center justify-center gap-4 px-4 border-r border-[#E6E4DF] last:border-0">
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center text-[#B8624E] shrink-0"
                style={{ background: 'rgba(184, 98, 78, 0.08)' }}
              >
                <stat.icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-normal text-[#43533D] font-serif mb-1">{stat.val}</h3>
                <p className="text-[12px] text-[#6B7866] font-semibold tracking-wide uppercase">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. "WHY CHETAN MANKER?" SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block */}
          <div className="lg:col-span-5 flex relative rounded-[32px] overflow-hidden border border-[#E6E4DF]">
            {/* Background Image of Vase */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1610189338175-0782dfdb0c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt="Decorative grass vase background"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="p-8 sm:p-12 text-left flex flex-col justify-end gap-6 relative z-10 w-full">
              <div>
              
                <h2 className="text-[34px] sm:text-[40px] font-normal leading-[1.2] text-white mb-5 font-serif" style={{ color: '#ffffff' }}>
                  More Than Fabric,<br />
                  A Relationship.
                </h2>
                <p className="text-[13.5px] text-white/90 leading-relaxed mb-0 font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Built on trust, craftsmanship and unwavering commitment to quality — for you, always.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B8624E] hover:bg-[#43533D] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-full w-fit"
              >
                ABOUT US
              </Link>
            </div>
          </div>

          {/* Right Block (4 Service Cards grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Trade Enquiry",
                desc: "Connect with our textile experts to discuss custom designs and bulk orders.",
                icon: ClipboardCheck,
                path: "/trade-enquiry"
              },
              {
                title: "e-Quotation",
                desc: "Quick and transparent wholesale quotations for all our fabric categories.",
                icon: ClipboardCheck,
                path: "/e-quotation"
              },
              {
                title: "e-Auction",
                desc: "Participate in live textile auctions for surplus stocks and custom lots.",
                icon: Gavel,
                path: "/e-auction"
              },
              {
                title: "Retail Management",
                desc: "Explore modern solutions to grow your retail branch and outlet networks.",
                icon: ShoppingBag,
                path: "/retail-management"
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="group rounded-[24px] border border-[#E6E4DF] p-7 flex flex-col justify-between bg-white hover:border-[#B8624E] transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  {/* Circle icon */}
                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[#43533D] mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(67, 83, 61, 0.06)' }}
                  >
                    <card.icon size={18} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-bold text-[#43533D] font-serif mb-2">{card.title}</h3>
                  <p className="text-[13px] text-[#6B7866] leading-relaxed font-medium mb-6">{card.desc}</p>
                </div>

                <Link
                  to={card.path}
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#B8624E] group-hover:text-[#43533D] transition-colors"
                >
                  Explore <ArrowUpRight size={12} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
