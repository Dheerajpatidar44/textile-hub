import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Truck, ShieldCheck, Award, RotateCcw, Headphones, Sparkles, Heart, CheckCircle2, Globe, Shield } from 'lucide-react';

const C = {
  primary: '#1E3E37',        // Deep Forest Green
  primaryLight: '#2C5A50',
  primaryDark: '#112521',
  accent: '#E2A93E',         // Gold Accent
  accentLight: '#F0C265',
  gold: '#E2A93E',
  bg: '#FAF7F0',             // Warm Sand/Cream Background
  border: '#EFECE6',
  stone: '#536E67',          // Slate Sage Green
  soil: '#1E3E37',
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80" }
];

const heroSlides = [
  {
    title: "WEAVECRAFT TEXTILE MALL",
    titlePart1: "Elegance Woven",
    titlePart2: "For You",
    desc: "Premium collections crafted with care, tradition & perfection. Discover high-quality fabrics, heritage designs, and premium textiles.",
    image: "/images/image.png"
  },
  {
    title: "PREMIUM COOPERATIVE ECOSYSTEM",
    titlePart1: "Quality You",
    titlePart2: "Can Feel",
    desc: "Experience the unmatched quality of sustainably sourced, ethically crafted materials and custom weaves.",
    image: "/images/slider.png"
  },
  {
    title: "HERITAGE & CRAFTSMANSHIP",
    titlePart1: "Preserving",
    titlePart2: "Heritage",
    desc: "Generations of traditional Indian craftsmanship curated with modern styles and contemporary aesthetics.",
    image: "/images/slider1.png"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION (Full Background Image Overlay Slider) ── */}
      <section className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden bg-[#1E3E37]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          >
            {/* Content Container */}
            <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 h-full flex items-center justify-start relative z-10">
              <div className="max-w-2xl text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#E2A93E] uppercase mb-3.5 block">
                    {heroSlides[currentSlide].title}
                  </span>
                  <h2 className="text-[42px] sm:text-[54px] lg:text-[66px] font-light leading-[1.1] text-black mb-5 tracking-tight">
                    {heroSlides[currentSlide].titlePart1} <br />
                    <span className="italic font-normal font-serif text-[#E2A93E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {heroSlides[currentSlide].titlePart2}
                    </span>
                  </h2>

                  <p className="text-[14px] sm:text-[15px] text-black/90 mb-9 leading-relaxed font-semibold max-w-lg">
                    {heroSlides[currentSlide].desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-3 px-7 py-3 bg-[#E2A93E] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#1E3E37] rounded-full shadow-lg"
                    >
                      EXPLORE COLLECTION
                      <ArrowRight size={12} className="text-white" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left & Right Chevrons positioned at the sides of the slider */}
        <button
          onClick={prevSlide}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 hover:bg-[#1E3E37] text-[#1E3E37] hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg z-20 border border-[#EFECE6] backdrop-blur-sm cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 hover:bg-[#1E3E37] text-[#1E3E37] hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg z-20 border border-[#EFECE6] backdrop-blur-sm cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider Dots indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#E2A93E]' : 'bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>



      {/* ── 3. TWO-COLUMN SPLIT SECTION (SUMMER SPECIAL & CATEGORIES GRID) ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Summer Special Card (Deep Green) */}
          <div className="lg:col-span-5">
            <div
              className="w-full h-full rounded-[32px] p-6 lg:p-7 text-white relative overflow-hidden flex flex-col justify-between"
              style={{ background: '#1E3E37', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="text-left z-10 relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2A93E] mb-1.5 block">SUMMER SPECIAL</span>
                <h3 className="text-[28px] font-normal leading-tight mb-3 font-serif text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Fresh Styles <br />
                  Flat 30% Off*
                </h3>
                <p className="text-[12.5px] text-white/80 max-w-xs mb-4 leading-relaxed font-semibold">
                  Discover lightweight fabrics perfect for the season. Beautifully handwoven.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E2A93E] text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#FAF7F0] hover:text-[#1E3E37] rounded-full shadow-md"
                >
                  SHOP NOW <ArrowRight size={12} />
                </Link>
              </div>

              {/* Decorative Hanging Fabric Image Container */}
              <div className="mt-4 flex justify-end z-10 relative">
                <div className="w-[92%] h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
                  <img
                    src="/images/summer_special.png"
                    alt="Summer collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Background gradient graphics */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E2A93E]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Shop by Category Grid */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFECE6]">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#E2A93E] rounded-full" />
                <h2 className="text-[28px] font-normal text-[#1E3E37] tracking-tight font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Shop by Category
                </h2>
              </div>
              <Link
                to="/products"
                className="text-[11px] font-bold tracking-widest uppercase text-[#E2A93E] hover:text-[#1E3E37] transition-colors flex items-center gap-1.5"
              >
                VIEW ALL <ArrowRight size={12} />
              </Link>
            </div>

            {/* Categories Grid - Exact order of 12 categories, with slightly rounded cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="group bg-white border border-[#EFECE6] p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-[#EFECE6] bg-[#FAF7F0]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[12px] font-bold text-[#1E3E37] group-hover:text-[#E2A93E] transition-colors leading-tight tracking-wide">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. CUSTOM ORDERS / PROMO BANNER SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-16">
        <div
          className="rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative bg-white border border-[#EFECE6] shadow-sm"
          style={{ minHeight: '340px' }}
        >
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%] p-8 lg:p-12 flex flex-col justify-center items-start text-left relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#E2A93E] uppercase mb-3 block">TAILORED FOR YOU</span>
            <h2 className="text-[36px] lg:text-[44px] text-[#1E3E37] leading-tight mb-5 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Custom Orders, <br />
              Crafted for You!
            </h2>
            <p className="text-[#536E67] text-[13.5px] leading-relaxed mb-8 font-semibold max-w-sm">
              Get personalized stitching & bulk orders tailored to your exact needs. High-quality production.
            </p>
            <Link
              to="/trade-enquiry"
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#1E3E37] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#E2A93E] transition-all shadow-md"
            >
              ENQUIRE NOW <ArrowRight size={12} />
            </Link>
          </div>

          {/* Middle Details Grid */}
          <div className="w-full lg:w-[25%] p-8 lg:py-12 border-t lg:border-t-0 lg:border-x border-[#EFECE6] flex flex-col justify-center gap-6 text-left relative z-10 bg-[#FAF7F0]/40">
            {[
              { icon: Globe, title: "Wide Range", desc: "Thousands of fabrics for every need" },
              { icon: CheckCircle2, title: "Trusted by Thousands", desc: "Serving clients across India" },
              { icon: Shield, title: "Ethically Made", desc: "Sourced and crafted responsibly" }
            ].map((highlight, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <highlight.icon size={18} className="text-[#E2A93E] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[12px] font-bold text-[#1E3E37] mb-0.5 uppercase tracking-wide">{highlight.title}</h4>
                  <p className="text-[11px] text-[#536E67] font-semibold m-0 leading-snug">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-[25%] relative min-h-[200px] lg:min-h-0 bg-[#FAF7F0]">
            <img
              src="/images/custom_orders.png"
              alt="Custom crafting process"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT US SECTION ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-20">
        <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-sm border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Asymmetrical Image Shape (Luxury Rounded Design - smaller scale) */}
          <div className="lg:col-span-4 flex justify-center w-full">
            <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden shadow-md border border-[#EFECE6] rounded-[48px_16px_48px_16px]">
              <img
                src="/images/about_weavecraft.png"
                alt="WEAVECRAFT Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#1E3E37]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-8 text-left flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#E2A93E] uppercase mb-2 block">OUR HERITAGE</span>
            <h3
              className="text-[28px] sm:text-[34px] font-normal mb-4 leading-tight text-[#1E3E37] font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h3>

            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#536E67] font-semibold mb-6 max-w-2xl">
              <strong style={{ color: '#1E3E37' }}>WEAVECRAFT Textile Mall</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium fabrics that represent style, substance, and heritage.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3E37] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#E2A93E] transition-all duration-300 shadow-md"
            >
              Our Story <ArrowRight size={12} />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 5. FEATURES METRICS ROW (Bottom Position) ── */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mt-16 mb-12 relative z-10">
        <div
          className="w-full bg-white py-8 px-6 lg:px-8 rounded-[32px] border border-[#EFECE6]"
          style={{ boxShadow: '0 10px 30px rgba(30, 62, 55, 0.02)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-x-0 lg:divide-x divide-[#EFECE6]">
            {[
              { icon: Truck, title: "Free Delivery", desc: "On orders above ₹1999" },
              { icon: ShieldCheck, title: "Secure Payments", desc: "100% safe & secure checkout" },
              { icon: Award, title: "Premium Quality", desc: "Finest fabrics assured" },
              { icon: RotateCcw, title: "Easy Returns", desc: "Hassle-free returns within 7 days" },
              { icon: Headphones, title: "Customer Support", desc: "We are here to help you" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 px-0 lg:px-4 justify-start">
                <div className="w-10 h-10 rounded-full bg-[#E2A93E]/10 flex items-center justify-center text-[#E2A93E] shrink-0">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h4 className="text-[12px] font-bold text-[#1E3E37] tracking-wider uppercase mb-0.5">{item.title}</h4>
                  <p className="text-[11px] text-[#536E67] font-semibold m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
