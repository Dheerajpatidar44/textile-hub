import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

const C = {
  primary: '#7E1242',       // Premium Burgundy
  primaryLight: '#9C2A5C',
  primaryDark: '#5C0C2F',
  accent: '#C17D91',        // Dusty Rose
  accentLight: '#FAF5F7',   // Cream tint
  gold: '#Bfa37c',          // Warm Gold
  bg: '#FAF5F7',
  border: '#F0E5E9',
  stone: '#5F5558',
};

const bestsellers = [
  { name: "Banarasi Silk Saree", image: "/images/popular_banarasi_saree.png", category: "Sarees" },
  { name: "Premium Viscose Fabric", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80", category: "Fabrics" },
  { name: "Embroidered Kurti Set", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80", category: "Kurtis" },
  { name: "Designer Lehenga", image: "/images/popular_anarkali.png", category: "Lehengas" },
  { name: "Fancy Net Fabric", image: "/images/popular_bedsheet.png", category: "Dress Materials" }
];

const testimonials = [
  {
    quote: "KASTURI Textile Retail Mall has been our trusted partner for years. Their quality and service are simply unmatched in the textile market.",
    name: "Rajesh Mehta",
    role: "Retailer, Delhi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Their range, delivery, and customer support are exceptional. Highly recommended for bulk orders.",
    name: "Priya Shah",
    role: "Boutique Owner, Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "The fabrics are elegant and timeless. Our customers love the designs and texture.",
    name: "Anil Verma",
    role: "Wholesaler, Jaipur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
  }
];

const heroSlides = [
  {
    image: "/images/kasturi_hero_banner.png",
    subtitle: "Heritage. Craft. Culture.",
    title1: "Timeless Textiles,",
    title2: "Woven for Generations",
    desc: "Discover the finest fabrics that blend tradition, craftsmanship, and contemporary elegance."
  },
  {
    image: "/images/kasturi_hero_banner2.png",
    subtitle: "Heritage. Craft. Culture.",
    title1: "Timeless Textiles,",
    title2: "Woven for Generations",
    desc: "Discover the finest fabrics that blend tradition, craftsmanship, and contemporary elegance."
  },
  {
    image: "/images/kasturi_hero_banner3.png",
    subtitle: "Heritage. Craft. Culture.",
    title1: "Timeless Textiles,",
    title2: "Woven for Generations",
    desc: "Discover the finest fabrics that blend tradition, craftsmanship, and contemporary elegance."
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

export default function Home() {
  const bestsellerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right to left, -1 = left to right

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollBestsellers = (direction) => {
    if (bestsellerRef.current) {
      const scrollAmount = 320;
      bestsellerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToSlide = (idx) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  // Get index of previous and next slide for side previews
  const prevSlideIdx = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  const nextSlideIdx = (currentSlide + 1) % heroSlides.length;

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-0 pb-16">

      {/* ── 1. HERO SECTION (Custom side preview layout) ── */}
      <section className="relative w-full pt-1 pb-8 md:pt-2 md:pb-12 bg-white flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-[95rem] px-4 md:px-8 relative flex items-stretch justify-center">

          {/* Left Preview Slide (Tall, narrow strip, matching center height) */}
          <div
            onClick={prevSlide}
            className="hidden lg:flex w-[8%] max-w-[120px] rounded-[2rem] overflow-hidden relative opacity-60 hover:opacity-85 transition-all duration-300 cursor-pointer select-none items-center justify-center mr-4"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={prevSlideIdx}
                src={heroSlides[prevSlideIdx].image}
                alt="Prev Slide"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 220, damping: 26 },
                  opacity: { duration: 0.35 }
                }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
            {/* Dark overlay to match contrast */}
            <div className="absolute inset-0 bg-black/20 z-10" />

            {/* Navigation arrow inside preview */}
            <div className="relative z-20 w-11 h-11 rounded-full bg-white text-[#7E1242] flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
              <ChevronLeft size={22} strokeWidth={2.5} />
            </div>
          </div>

          {/* Center Main Slide (Completely clean banner with no text overlays) */}
          <div className="flex-1 aspect-[1.35/1] sm:aspect-[1.75/1] lg:aspect-[2.1/1] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden relative shadow-md bg-white">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentSlide}
                src={heroSlides[currentSlide].image}
                alt="KASTURI Main Banner"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 220, damping: 26 },
                  opacity: { duration: 0.35 }
                }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>

            {/* Mobile-only navigation arrows overlaid on the main slide */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 text-[#7E1242] hover:bg-[#7E1242] hover:text-white flex items-center justify-center transition-all shadow-md border-none cursor-pointer lg:hidden"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 text-[#7E1242] hover:bg-[#7E1242] hover:text-white flex items-center justify-center transition-all shadow-md border-none cursor-pointer lg:hidden"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right Preview Slide (Tall, narrow strip, matching center height) */}
          <div
            onClick={nextSlide}
            className="hidden lg:flex w-[8%] max-w-[120px] rounded-[2rem] overflow-hidden relative opacity-60 hover:opacity-85 transition-all duration-300 cursor-pointer select-none items-center justify-center ml-4"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={nextSlideIdx}
                src={heroSlides[nextSlideIdx].image}
                alt="Next Slide"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 220, damping: 26 },
                  opacity: { duration: 0.35 }
                }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
            {/* Dark overlay to match contrast */}
            <div className="absolute inset-0 bg-black/20 z-10" />

            {/* Navigation arrow inside preview */}
            <div className="relative z-20 w-11 h-11 rounded-full bg-white text-[#7E1242] flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
              <ChevronRight size={22} strokeWidth={2.5} />
            </div>
          </div>

        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer ${currentSlide === idx ? 'w-6 bg-[#7E1242]' : 'w-1.5 bg-[#7E1242]/30 hover:bg-[#7E1242]'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── 2. CAREER SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 py-4 md:py-6">
        <div className="bg-white rounded-3xl border border-[#F0E5E9] shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex-1 text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C17D91] uppercase block mb-1">
              CAREERS AT KASTURI
            </span>
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#7E1242] font-serif mb-2 leading-snug">
              Shape the Future of Textile Retail
            </h2>
            <p className="text-[13px] text-[#5F5558] font-medium leading-relaxed mb-6 max-w-xl">
              Join our creative team at India's most trusted textile group. We offer opportunities in textile design, operations, and fashion retail management.
            </p>
            <Link
              to="/career"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7E1242] hover:bg-[#5C0C2F] text-white text-[11px] font-bold tracking-wider uppercase rounded-xl transition-all border-none"
            >
              <span>Join Our Team</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="w-full md:w-[320px] lg:w-[360px] h-[200px] rounded-2xl overflow-hidden shadow-sm shrink-0 bg-[#FAF5F7] relative">
            <img
              src="/images/kasturi_careers.png"
              alt="Careers at Kasturi"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </div>
        </div>
      </section>

      {/* ── 4. PROMOTIONAL BLOCKS (e-Auction, e-Quotation, Trade Services Grid) ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Card 1: e-Auction */}
          <div className="bg-white rounded-2xl p-6 border border-[#F0E5E9] shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="w-[60%] text-left flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C17D91] uppercase block mb-1">
                  LIVE e-AUCTION
                </span>
                <h3 className="text-[20px] font-bold text-[#7E1242] font-serif mb-2 leading-snug">
                  Bid. Win. Grow.
                </h3>
                <p className="text-[12px] text-[#5F5558] font-medium leading-relaxed mb-4">
                  Participate in live auctions and win the best deals.
                </p>
              </div>
              <Link
                to="/e-auction"
                className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#7E1242] hover:bg-[#5C0C2F] text-white text-[10px] font-bold tracking-wider uppercase rounded-lg transition-colors border-none"
              >
                JOIN LIVE AUCTIONS
              </Link>
            </div>
            <div className="w-[35%] aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-[#FAF5F7]">
              <img
                src="/images/gavel_auction.png"
                alt="e-Auction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2: e-Quotation */}
          <div className="bg-white rounded-2xl p-6 border border-[#F0E5E9] shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="w-[60%] text-left flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C17D91] uppercase block mb-1">
                  e-QUOTATION
                </span>
                <h3 className="text-[20px] font-bold text-[#7E1242] font-serif mb-2 leading-snug">
                  Get Instant Quotes
                </h3>
                <p className="text-[12px] text-[#5F5558] font-medium leading-relaxed mb-4">
                  Request a quote and get the best pricing for bulk orders.
                </p>
              </div>
              <Link
                to="/e-quotation"
                className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#7E1242] hover:bg-[#5C0C2F] text-white text-[10px] font-bold tracking-wider uppercase rounded-lg transition-colors border-none"
              >
                REQUEST QUOTE
              </Link>
            </div>
            <div className="w-[35%] aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-[#FAF5F7]">
              <img
                src="/images/clipboard_quote.png"
                alt="e-Quotation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3: Trade Services */}
          <div className="bg-white rounded-2xl p-6 border border-[#F0E5E9] shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="w-[60%] text-left flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C17D91] uppercase block mb-1">
                  TRADE SERVICES
                </span>
                <h3 className="text-[20px] font-bold text-[#7E1242] font-serif mb-2 leading-snug">
                  All in One Place
                </h3>
                <p className="text-[12px] text-[#5F5558] font-medium leading-relaxed mb-4">
                  End-to-end solutions for your business.
                </p>
              </div>
              <Link
                to="/retail-management"
                className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#7E1242] hover:bg-[#5C0C2F] text-white text-[10px] font-bold tracking-wider uppercase rounded-lg transition-colors border-none"
              >
                EXPLORE SERVICES
              </Link>
            </div>
            <div className="w-[35%] aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-[#FAF5F7]">
              <img
                src="/images/fabrics_services.png"
                alt="Trade Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. BEST SELLERS SECTION (No prices, rounded cards, view details) ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 py-12 text-center">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#7E1242] tracking-wide font-serif uppercase m-0">
            OUR <span className="text-[#C17D91]">BEST SELLERS</span>
          </h2>
          <Link to="/products" className="text-[11px] font-bold tracking-widest text-[#C17D91] hover:text-[#7E1242] uppercase transition-colors flex items-center gap-1">
            VIEW ALL PRODUCTS <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scrollBestsellers('left')}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-[#7E1242] hover:bg-[#7E1242] hover:text-white transition-all hidden md:flex border border-[#F0E5E9]"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          <div ref={bestsellerRef} className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth">
            {bestsellers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#F0E5E9] overflow-hidden flex flex-col text-left w-[240px] shrink-0 hover:shadow-sm transition-shadow"
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-[#FAF5F7]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#C17D91] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-[16px] font-bold text-[#7E1242] font-serif leading-snug mb-4">
                      {item.name}
                    </h3>
                  </div>
                  <Link
                    to="/products"
                    className="w-full py-2.5 bg-transparent border border-[#F0E5E9] hover:bg-[#7E1242] hover:text-white text-[#7E1242] text-[10.5px] font-bold tracking-wider text-center uppercase rounded-lg transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollBestsellers('right')}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-[#7E1242] hover:bg-[#7E1242] hover:text-white transition-all hidden md:flex border border-[#F0E5E9]"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ── 6. CLIENT TESTIMONIALS ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 py-16 text-center bg-white border-y border-[#F0E5E9] rounded-3xl my-8">
        <div className="mb-10 text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#C17D91] uppercase block mb-1">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-[28px] font-normal text-[#7E1242] font-serif uppercase mt-0">
            Client Stories
          </h2>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#FAF5F7] rounded-2xl border border-[#F0E5E9] p-8 text-left hover:shadow-sm transition-shadow">
              <div className="text-[#C17D91] text-4xl font-serif mb-2">“</div>
              <p className="text-[13px] text-[#5F5558] leading-relaxed font-semibold mb-6 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover border border-[#F0E5E9]" />
                <div>
                  <h4 className="text-[13px] font-bold text-[#7E1242]">{item.name}</h4>
                  <p className="text-[11px] text-[#5F5558] font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
