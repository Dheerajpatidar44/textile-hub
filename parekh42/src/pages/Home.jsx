import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryDark: '#231F20',  // Dark charcoal
  accent: '#A3704C',       // Accent gold
  accentLight: '#F4EFEA',  // Soft gold/beige
  bg: '#FAF8F5',           // Cream background
  sand: '#F4EDE4',         // Soft sand
  sage: '#E8E2D9',
  border: '#EAE5DE',
  soil: '#231F20',
  stone: '#5B5653',
};

// ── 12 Categories (names & order strictly preserved) ──
const categories = [
  "Sarees",
  "Leggings",
  "Kurtis",
  "Dress Suits",
  "Bedsheets & Linen",
  "Hosiery Items",
  "Suiting",
  "Shirting",
  "Formal & Ethnic Wear for Women",
  "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children",
  "Home Upholstery & Furnishing"
];

const categoryImages = {
  "Sarees": [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616986491129-3e37cb654c82?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?w=600&auto=format&fit=crop&q=60"
  ],
  "Leggings": [
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1650461970708-7bf32499516d?q=80&w=627&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1763771522867-c26bf75f12bc?w=600&auto=format&fit=crop&q=60"
  ],
  "Kurtis": [
    "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1597983073540-684a10b15ab1?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&auto=format&fit=crop&q=60"
  ],
  "Dress Suits": [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1661434624086-e02557c68815?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1588186941799-f9a4fc54ff1e?w=600&auto=format&fit=crop&q=60"
  ],
  "Bedsheets & Linen": [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&auto=format&fit=crop&q=80"
  ],
  "Hosiery Items": [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&auto=format&fit=crop&q=80"
  ],
  "Suiting": [
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1593030103076-0f279e5ff341?w=600&auto=format&fit=crop&q=60"
  ],
};

// ── Hero Carousel Slides (Matching the reference layout) ──
const heroSlides = [
  {
    line1: 'Threads of Tradition,',
    line2: 'WOVEN FOR',
    line3: 'GENERATIONS.',
    desc: "Discover the finest textiles that blend heritage craftsmanship with modern elegance.",
    btnText: 'Explore Collections',
    mainImage: '/images/loomcraft_hero_saree.png',
    img2: '/images/loomcraft_hero_fabric.png',
    img3: '/images/loomcraft_hero_bedroom.png',
    bgColor: '#FAF8F5',
  },
  {
    line1: 'Artisan Craftsmanship,',
    line2: 'REFINED FOR',
    line3: 'MODERN LIVING.',
    desc: "Premium handloom cottons and rich silk fabrics sourced directly from India's finest weavers.",
    btnText: 'Explore Collections',
    mainImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60',
    img3: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=60',
    bgColor: '#FAF8F5',
  },
  {
    line1: 'Loomed With Care,',
    line2: 'DESIGNED FOR',
    line3: 'ELEGANT HOMES.',
    desc: "Explore bespoke upholstery, organic linen bedsheets, and custom suiting materials.",
    btnText: 'Explore Collections',
    mainImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60',
    img3: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60',
    bgColor: '#FAF8F5',
  }
];

// ── Promo Feature Cards (Exact layout and colors from image) ──
const featureCards = [
  {
    tag: 'LIVE e-AUCTION',
    title: 'Bid. Win. Grow.',
    desc: 'Participate in live auctions and unlock great deals.',
    btnText: 'Join Live Auctions',
    path: '/e-auction',
    bg: '#3F2A3C', // Plum/wine color banner from image
    textColor: '#FAF8F5',
    btnBg: '#FAF8F5',
    btnColor: '#3F2A3C',
    hasGavel: true
  },
  {
    tag: 'BULK ORDERS',
    title: 'Better Prices, Greater Benefits!',
    desc: 'Special pricing for bulk buyers & retailers.',
    btnText: 'Enquire Now',
    path: '/trade-enquiry',
    bg: '#E5D5C5', // Camel/beige banner from image
    textColor: '#231F20',
    btnBg: '#231F20',
    btnColor: '#FAF8F5',
    hasFabrics: true
  },
  {
    tag: 'TRADE SERVICES',
    title: 'Everything You Need, All in One Place.',
    desc: 'End-to-end solutions for your business.',
    btnText: 'Explore Services',
    path: '/retail-management',
    bg: '#6A7B70', // Sage green banner from image
    textColor: '#FAF8F5',
    btnBg: '#FAF8F5',
    btnColor: '#6A7B70',
    hasLeaf: true
  },
];

// ── Customer Reviews (adapted for premium presentation) ──
const reviews = [
  { 
    text: "Partnering with LoomCraft India has elevated our business standards. The exquisite quality, competitive wholesale pricing, and seamless distribution support remain unmatched in the textile market.", 
    name: "Rajesh Sharma", 
    role: "Retailer, Delhi"
  },
  { 
    text: "Their world-class export compliance and exceptional weave durability are unmatched. The zero-defect shipping policy has optimized our international supply chain and enhanced our brand value.", 
    name: "Ahmed Al-Sayed", 
    role: "Gulf Textiles, UAE"
  },
  { 
    text: "Extremely impressed by their textile innovation and engineering. The high-tenacity custom fabrics they custom-designed exceeded all our institutional strength and durability benchmarks.", 
    name: "Vikas Kulkarni", 
    role: "National Solutions"
  },
  { 
    text: "An exquisite attention to craft and detail. Every consignment of silk and linen we receive is flawlessly woven, saving us substantial production time and maximizing design efficiency.", 
    name: "Anita Desai", 
    role: "Design Head, Mumbai"
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const slideVariants = {
    enter: { x: 80, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -80, opacity: 0 }
  };

  // Show first 7 categories in order: Sarees, Leggings, Kurtis, Dress Suits, Bedsheets & Linen, Hosiery Items, Suiting
  const displayCategories = [
    { name: "SAREES", slug: "Sarees" },
    { name: "LEGGINGS", slug: "Leggings" },
    { name: "KURTIS", slug: "Kurtis" },
    { name: "DRESS SUITS", slug: "Dress Suits" },
    { name: "BEDSHEETS & LINEN", slug: "Bedsheets & Linen" },
    { name: "HOSIERY ITEMS", slug: "Hosiery Items" },
    { name: "SUITING", slug: "Suiting" }
  ];

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-[98px]">

      {/* ═══════════════════════════════════════
          1. HERO SECTION — LoomCraft Style Layout
      ═══════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: slide.bgColor, minHeight: '560px' }}
      >
        <div className="max-w-[90rem] mx-auto w-full px-6 sm:px-8 lg:px-14 relative z-10 py-8 lg:py-14"
          style={{ minHeight: '520px' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col lg:flex-row items-center"
            >
              {/* Left: Text content */}
              <div className="w-full lg:w-[45%] text-left flex flex-col items-start pr-0 lg:pr-12">
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(32px, 4.2vw, 52px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: '0 0 18px',
                }}>
                  <span className="text-[#A3704C] block font-light italic" style={{ fontFamily: "'Playfair Display', serif" }}>{slide.line1}</span>
                  <span className="text-[#231F20] block font-extrabold uppercase mt-1 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{slide.line2}</span>
                  <span className="text-[#231F20] block font-extrabold uppercase tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{slide.line3}</span>
                </h1>

                <p style={{ color: C.stone, fontSize: '14.5px', lineHeight: 1.75, marginBottom: 32, maxWidth: 410 }}>
                  {slide.desc}
                </p>

                <div className="flex items-center gap-6 mb-8">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2.5 text-white rounded-full font-bold uppercase tracking-wider text-[11px] transition-all duration-300"
                    style={{
                      background: '#A3704C',
                      padding: '14px 28px',
                      boxShadow: '0 4px 16px rgba(163,112,76,0.25)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#231F20'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#A3704C'; }}
                  >
                    {slide.btnText}
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Slide Indicators: 01 ── 02 ── 03 */}
                <div className="flex items-center gap-4 text-[12px] font-bold text-[#231F20] tracking-widest mt-4">
                  <button 
                    onClick={() => { setDirection(currentSlide < 0 ? 1 : -1); setCurrentSlide(0); }}
                    className={`bg-transparent border-none p-0 cursor-pointer font-bold transition-all ${currentSlide === 0 ? "opacity-100 scale-110 text-[#A3704C]" : "opacity-40"}`}
                  >
                    01
                  </button>
                  <span className="opacity-30">──</span>
                  <button 
                    onClick={() => { setDirection(currentSlide < 1 ? 1 : -1); setCurrentSlide(1); }}
                    className={`bg-transparent border-none p-0 cursor-pointer font-bold transition-all ${currentSlide === 1 ? "opacity-100 scale-110 text-[#A3704C]" : "opacity-40"}`}
                  >
                    02
                  </button>
                  <span className="opacity-30">──</span>
                  <button 
                    onClick={() => { setDirection(currentSlide < 2 ? 1 : -1); setCurrentSlide(2); }}
                    className={`bg-transparent border-none p-0 cursor-pointer font-bold transition-all ${currentSlide === 2 ? "opacity-100 scale-110 text-[#A3704C]" : "opacity-40"}`}
                  >
                    03
                  </button>
                </div>

                {/* Sliding controls (Next / Prev buttons) below 1 2 3 */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-[#EAE5DE] bg-transparent cursor-pointer flex items-center justify-center transition-all duration-300"
                    style={{ color: '#231F20' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#A3704C'; e.currentTarget.style.color = '#FAF8F5'; e.currentTarget.style.borderColor = '#A3704C'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#231F20'; e.currentTarget.style.borderColor = '#EAE5DE'; }}
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-[#EAE5DE] bg-transparent cursor-pointer flex items-center justify-center transition-all duration-300"
                    style={{ color: '#231F20' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#A3704C'; e.currentTarget.style.color = '#FAF8F5'; e.currentTarget.style.borderColor = '#A3704C'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#231F20'; e.currentTarget.style.borderColor = '#EAE5DE'; }}
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right: Arched and stacked image layout from image */}
              <div className="w-full lg:w-[55%] flex items-center gap-3.5 mt-10 lg:mt-0 relative z-5">
                {/* Arched main picture (Woman in Pink Saree) */}
                <div className="w-[60%] aspect-[4/5] sm:aspect-[3/4] lg:h-[480px] rounded-t-full overflow-hidden shadow-lg border border-[#EAE5DE]">
                  <img
                    src={slide.mainImage}
                    alt="LoomCraft India Saree"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Two stacked images on the right side */}
                <div className="w-[37%] flex flex-col gap-3.5 lg:h-[480px]">
                  {/* Top: Fabrics */}
                  <div className="flex-1 rounded-[16px] overflow-hidden shadow-md border border-[#EAE5DE] aspect-square lg:aspect-auto">
                    <img
                      src={slide.img2}
                      alt="LoomCraft Fabric Stack"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Bottom: Bedroom sheet */}
                  <div className="flex-1 rounded-[16px] overflow-hidden shadow-md border border-[#EAE5DE] aspect-square lg:aspect-auto">
                    <img
                      src={slide.img3}
                      alt="LoomCraft Bedroom Linen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 2. Brand Value Bar (horizontal bullet list below hero) ── */}
      <section className="w-full bg-[#FAF8F5] border-t border-b border-[#EAE5DE] py-6">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
            {[
              { title: "PREMIUM QUALITY", desc: "Finest handlooms, unmatched design quality" },
              { title: "WIDE RANGE", desc: "Thousands of materials for every corporate requirement" },
              { title: "PAN INDIA DELIVERY", desc: "Reliable logistics across all states" },
              { title: "CUSTOMER FIRST", desc: "Dedicated support for wholesalers and traders" },
              { title: "EXPERT ASSISTANCE", desc: "Direct guidance from our design spools" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F4EDE4] flex items-center justify-center text-[#A3704C] flex-shrink-0">
                  <span className="text-[14px] font-bold">0{i+1}</span>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-[11px] font-bold tracking-widest text-[#231F20]">{item.title}</h4>
                  <p className="text-[11px] text-[#5B5653] mt-0.5 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. EXPLORE OUR COLLECTIONS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8 border-b border-[#EAE5DE] pb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-[20px] sm:text-[24px] font-bold text-[#231F20] uppercase tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                Explore Our Collections
              </h2>
              {/* Decorative wave divider */}
              <div className="hidden sm:flex items-center gap-1 opacity-40">
                <span className="w-6 h-[1px] bg-[#A3704C]" />
                <span className="w-2 h-[3px] rounded-full bg-[#A3704C]" />
                <span className="w-6 h-[1px] bg-[#A3704C]" />
              </div>
            </div>
            <Link
              to="/products"
              className="text-[11px] font-bold text-[#A3704C] hover:text-[#231F20] transition-colors tracking-widest uppercase flex items-center gap-1.5"
            >
              View All Categories <ChevronRight size={14} />
            </Link>
          </div>

          {/* Category cards — oval-arched vertical shapes as in image */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">
            {displayCategories.map((cat, i) => (
              <Link
                key={i}
                to={`/products?category=${encodeURIComponent(cat.slug)}`}
                className="group flex flex-col items-center text-center"
                style={{ textDecoration: 'none' }}
              >
                {/* Oval/highly rounded image container */}
                <div
                  className="w-full aspect-[4/6] rounded-[40px] overflow-hidden border border-[#EAE5DE] transition-all duration-300"
                  style={{
                    background: '#FAF8F5',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(163,112,76,0.15)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <img
                    src={categoryImages[cat.slug] ? categoryImages[cat.slug][0] : `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60`}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Category name */}
                <span className="text-[12px] font-bold text-[#231F20] tracking-widest uppercase mt-4 block group-hover:text-[#A3704C] transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. PROMO FEATURE CARDS (3 banners matching image)
      ═══════════════════════════════════════ */}
      <section style={{ background: C.bg }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: card.bg,
                  borderRadius: 16,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  minHeight: 240,
                  transition: 'all 0.3s ease',
                  border: card.bg === '#E5D5C5' ? '1px solid rgba(35, 31, 32, 0.05)' : 'none',
                }}
                className="shadow-sm group"
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(35,31,32,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Vector graphics or drawings on the right for visuals */}
                {card.hasGavel && (
                  <div className="absolute right-0 bottom-0 top-0 w-[40%] flex items-center justify-end opacity-20 pointer-events-none pr-4">
                    <svg className="w-24 h-24 stroke-white fill-none" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M14 2L2 14c-1.1 1.1-1.1 2.9 0 4l4 4c1.1 1.1 2.9 1.1 4 0l12-12c1.1-1.1 1.1-2.9 0-4l-4-4c-1.1-1.1-2.9-1.1-4 0zM12 14l3 3M7 9l4 4"/>
                    </svg>
                  </div>
                )}
                {card.hasFabrics && (
                  <div className="absolute right-0 bottom-0 top-0 w-[40%] flex items-center justify-end opacity-20 pointer-events-none pr-4">
                    <svg className="w-24 h-24 stroke-[#231F20] fill-none" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-10-10zM12 5v14M5 12h14"/>
                    </svg>
                  </div>
                )}
                {card.hasLeaf && (
                  <div className="absolute right-0 bottom-0 top-0 w-[40%] flex items-center justify-end opacity-20 pointer-events-none pr-4">
                    <svg className="w-24 h-24 stroke-white fill-none" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M2 22C2 22 8 18 12 12C16 6 22 2 22 2C22 2 18 8 12 12C6 16 2 22 2 22zM12 12C12 12 16 16 18 20M12 12C12 12 8 8 6 4"/>
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2, padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="text-left">
                  <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: card.textColor }} className="opacity-75 block mb-2">
                    {card.tag}
                  </span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: card.textColor, margin: '0 0 8px', lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 13, color: card.textColor, margin: '0 0 24px', lineHeight: 1.6 }} className="opacity-80">
                    {card.desc}
                  </p>
                  <div>
                    <Link
                      to={card.path}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 11.5, fontWeight: 700, color: card.btnColor,
                        background: card.btnBg,
                        textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
                        transition: 'all 0.25s',
                        padding: '10px 20px',
                        borderRadius: 30,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {card.btnText} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. CUSTOMER REVIEWS (Voices of Trust)
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff', borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-16">
          
          <div className="flex items-center justify-between mb-10 border-b border-[#EAE5DE] pb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-[20px] sm:text-[24px] font-bold text-[#231F20] uppercase tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                Voices of Trust
              </h2>
              <div className="hidden sm:flex items-center gap-1 opacity-40">
                <span className="w-6 h-[1px] bg-[#A3704C]" />
                <span className="w-2 h-[3px] rounded-full bg-[#A3704C]" />
                <span className="w-6 h-[1px] bg-[#A3704C]" />
              </div>
            </div>
            <Link
              to="/reviews"
              className="text-[11px] font-bold text-[#A3704C] hover:text-[#231F20] tracking-widest uppercase flex items-center gap-1"
            >
              View All Reviews <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-left flex flex-col justify-between shadow-sm"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 20, 
                  padding: '30px 24px 24px',
                  position: 'relative',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(163, 112, 76, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  {/* Decorative Big Quote */}
                  <div style={{
                    position: 'absolute', top: 12, right: 20,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 70, color: C.sand, lineHeight: 1, fontWeight: 800,
                    opacity: 0.7,
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}>
                    ”
                  </div>

                  {/* Stars block */}
                  <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} size={13} fill={C.accent} stroke="none" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p style={{
                    fontSize: 13.5,
                    color: C.stone,
                    lineHeight: 1.75,
                    margin: '0 0 24px',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    "{review.text}"
                  </p>
                </div>

                {/* Author profile block */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${C.sand}, ${C.border})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, color: C.soil, fontWeight: 700,
                    flexShrink: 0
                  }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 13.5, fontWeight: 700, color: C.soil, margin: 0 }}>
                      {review.name}
                    </h4>
                    <span style={{ fontSize: 11, color: C.stone, fontWeight: 500, display: 'block', marginTop: 1 }}>
                      {review.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
