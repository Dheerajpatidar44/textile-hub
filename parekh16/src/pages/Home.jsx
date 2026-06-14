import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Truck, Award, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000&auto=format&fit=crop&q=80",
    subtitle: "PREMIUM BY TRADITION",
    title: "Woven with Heritage, & Designed for You",
    desc: "Discover luxury textiles crafted with tradition, passion and perfection.",
    link: "/products"
  },
  {
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1000&auto=format&fit=crop&q=80",
    subtitle: "ARTISANAL QUALITY",
    title: "Handloom Heritage & Pure Silk Weaves",
    desc: "Woven with pure gold zari and fine mulberry silk, embodying traditional luxury and unmatched craftsmanship.",
    link: "/products"
  },
  {
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1000&auto=format&fit=crop&q=80",
    subtitle: "GLOBAL ECOSYSTEM",
    title: "B2B Bulk Trade & Custom Fabrics",
    desc: "Experience world-class apparel designed with state-of-the-art manufacturing standards and raw hand-selected fibers.",
    link: "/products"
  }
];

const categoryList = [
  { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60', count: '1200+ Items' },
  { name: 'Leggings', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=60', count: '450+ Items' },
  { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1705164453472-e1cbfe8eb5a5?w=600&auto=format&fit=crop&q=60', count: '950+ Items' },
  { name: 'Dress Suits', image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?w=600&auto=format&fit=crop&q=60', count: '1800+ Items' },
  { name: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60', count: '1500+ Items' },
  { name: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60', count: '800+ Items' },
  { name: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60', count: '1100+ Items' },
  { name: 'Shirting', image: 'https://images.unsplash.com/photo-1620012253295-c05518e993be?w=600&auto=format&fit=crop&q=60', count: '2500+ Items' },
  { name: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60', count: '650+ Items' },
  { name: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60', count: '500+ Items' },
  { name: 'Formal & Ethnic Wear for Children', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60', count: '350+ Items' },
  { name: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60', count: '700+ Items' }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0
  })
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = [
    {
      name: 'Royal Kanjivaram Silk Saree',
      category: 'Sarees',
      image: 'https://images.unsplash.com/photo-1705164453572-69b94a306f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'Woven with pure gold zari and fine mulberry silk, embodying traditional luxury.'
    },
    {
      name: 'Bespoke Heritage Sherwani',
      category: 'Formal & Ethnic Wear for Men',
      image: 'https://images.unsplash.com/photo-1678805408312-04e5fd7a9dcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'Handcrafted embroidery on raw silk, designed for monumental celebrations.'
    },
    {
      name: 'Designer Handloom Kurti Set',
      category: 'Kurtis',
      image: 'https://images.unsplash.com/photo-1735553816867-88cd8496df58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'A blend of contemporary silhouettes and artisanal handloom cotton.'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* 1. Hero Section - Wrapped in a compact max-w-5xl container with reduced height and padding */}
      <div className="-mt-6 lg:-mt-10 max-w-5xl mx-auto w-full">
        <section className="relative min-h-[380px] md:min-h-[400px] overflow-hidden bg-[#eae3d5] p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 rounded-3xl shadow-sm border border-[#ebdcb9]">
          
          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center z-10 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Premium Trad Subtitle */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-[#132C20]/40"></div>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#132C20]">
                    {slides[current].subtitle}
                  </span>
                  <div className="w-6 h-[1px] bg-[#132C20]/40"></div>
                </div>

                {/* Main Heading - Split colors style */}
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-[42px] text-[#132C20] leading-tight font-bold tracking-wide border-0 pb-0 mb-0">
                  {slides[current].title.split('&').map((text, idx) => {
                    if (idx === 0) {
                      return <span key={idx} className="block">{text.trim()}</span>;
                    } else {
                      return <span key={idx} className="block text-[#C3A87E] mt-1 font-semibold font-playfair">& {text.trim()}</span>;
                    }
                  })}
                </h1>

                {/* Description */}
                <p className="text-[#384C40] text-xs md:text-sm font-outfit leading-relaxed max-w-xl">
                  {slides[current].desc}
                </p>

                {/* Explore button with arrow */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link 
                    to={slides[current].link} 
                    className="inline-flex items-center gap-2.5 bg-[#132C20] hover:bg-[#204532] text-[#eedec9] hover:text-white px-6 py-3 font-semibold tracking-widest uppercase transition-all duration-300 text-[10px] rounded-xl shadow-md"
                  >
                    Explore Collection <ArrowRight size={13} className="text-[#C3A87E]" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Custom Slide Indicators */}
            <div className="flex gap-5 items-center text-[10px] font-semibold tracking-widest mt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`pb-0.5 border-b transition-all duration-300 font-outfit uppercase cursor-pointer ${
                    idx === current ? 'border-[#132C20] text-[#132C20] font-bold' : 'border-transparent text-[#132C20]/40 hover:text-[#132C20]'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (Palace Arch-style Compact portrait image card) */}
          <div className="w-full lg:w-5/12 flex justify-center shrink-0">
            <div className="w-full max-w-[260px] aspect-[3/4] relative overflow-hidden bg-white/20 border border-[#ebdcb9] rounded-[2rem] shadow-xl p-2.5">
              <div className="absolute inset-0 bg-[#ebdcb9]/10 rounded-[2rem] z-0"></div>
              <div className="w-full h-full relative overflow-hidden rounded-[1.5rem] z-10 bg-slate-100">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 180, damping: 24 },
                      opacity: { duration: 0.4 }
                    }}
                    src={slides[current].image}
                    alt="Luxury Indian Apparel"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Left Arrow button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/35 hover:bg-[#132C20] text-[#132C20] hover:text-[#eedec9] p-2.5 transition-all duration-300 z-10 rounded-full cursor-pointer hidden md:flex"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Right Arrow button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/35 hover:bg-[#132C20] text-[#132C20] hover:text-[#eedec9] p-2.5 transition-all duration-300 z-10 rounded-full cursor-pointer hidden md:flex"
            aria-label="Next Slide"
          >
            <ChevronRight size={16} />
          </button>
        </section>
      </div>

      {/* 2. Features Bar - Light warm sand backdrop */}
      <section className="bg-[#faf8f5] border-y border-[#ebdcb9] py-6 px-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-4 lg:border-r border-[#ebdcb9]/60 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C3A87E]/30 flex items-center justify-center text-[#C3A87E] shrink-0 bg-white shadow-sm">
              <ShieldCheck size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[11px] font-bold uppercase tracking-wider text-[#132C20]">PREMIUM QUALITY</h4>
              <p className="text-[9px] text-[#5A6E62] font-semibold mt-0.5 uppercase tracking-wider">Finest fabrics assured</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 lg:border-r border-[#ebdcb9]/60 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C3A87E]/30 flex items-center justify-center text-[#C3A87E] shrink-0 bg-white shadow-sm">
              <Truck size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[11px] font-bold uppercase tracking-wider text-[#132C20]">PAN INDIA DELIVERY</h4>
              <p className="text-[9px] text-[#5A6E62] font-semibold mt-0.5 uppercase tracking-wider">Safe & fast delivery</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 lg:border-r border-[#ebdcb9]/60 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C3A87E]/30 flex items-center justify-center text-[#C3A87E] shrink-0 bg-white shadow-sm">
              <Award size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[11px] font-bold uppercase tracking-wider text-[#132C20]">WHOLESALE PRICES</h4>
              <p className="text-[9px] text-[#5A6E62] font-semibold mt-0.5 uppercase tracking-wider">Best rates for bulk orders</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C3A87E]/30 flex items-center justify-center text-[#C3A87E] shrink-0 bg-white shadow-sm">
              <Headphones size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[11px] font-bold uppercase tracking-wider text-[#132C20]">CUSTOMER SUPPORT</h4>
              <p className="text-[9px] text-[#5A6E62] font-semibold mt-0.5 uppercase tracking-wider">We are here to help you</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Row 1: Shop by Category scroll (Takes full width) */}
      <section className="py-2 text-left w-full">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#C3A87E]/50"></div>
            <h3 className="font-playfair text-lg text-[#132C20] font-bold uppercase tracking-widest border-b-0 pb-0">
              Shop By Category
            </h3>
            <div className="w-8 h-[1px] bg-[#C3A87E]/50"></div>
          </div>
          <Link 
            to="/products" 
            className="text-xs font-semibold uppercase text-[#132C20] hover:text-[#C3A87E] transition-colors flex items-center gap-1.5 tracking-wider"
          >
            View All Categories <ArrowRight size={13} className="text-[#C3A87E]" />
          </Link>
        </div>

        {/* Responsive 3-Column Grid for Categories (No scrollbar) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {categoryList.slice(0, 3).map((cat, idx) => (
            <Link
              to="/products"
              state={{ category: cat.name }}
              key={idx}
              className="bg-white border border-[#ebdcb9]/40 rounded-2xl overflow-hidden hover:border-[#C3A87E] hover:shadow-md transition-all duration-300 flex flex-col group w-full"
            >
              {/* Category Portrait Image */}
              <div className="h-44 overflow-hidden relative bg-slate-50">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#132C20]/5 group-hover:opacity-0 transition-opacity"></div>
              </div>
              
              {/* Category Text & Action */}
              <div className="p-3.5 text-center flex flex-col flex-grow justify-between">
                <div className="space-y-1">
                  <h4 className="font-playfair text-[11px] text-[#132C20] font-bold uppercase tracking-wider group-hover:text-[#C3A87E] transition-colors truncate">
                    {cat.name}
                  </h4>
                  <p className="text-[8px] text-[#5A6E62] font-bold tracking-widest uppercase">
                    {cat.count}
                  </p>
                </div>
                <div className="mt-3.5">
                  <div className="w-7 h-7 rounded-full border border-[#ebdcb9] flex items-center justify-center text-[#132C20] group-hover:bg-[#132C20] group-hover:text-[#eedec9] group-hover:border-[#132C20] mx-auto transition-all duration-300">
                    <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Row 2: Promo cards side by side in a 2-column grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Card: Exclusive Offer (With matching green shadow) */}
        <div className="bg-[#132C20] text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden min-h-[320px] shadow-[0_15px_35px_rgba(19,44,32,0.35)] border border-[#ebdcb9]/10 text-left">
          {/* Subtle gold floral corner background details */}
          <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#C3A87E]/10 rounded-tr-3xl"></div>
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold text-[#C3A87E] tracking-[0.2em]">EXCLUSIVE OFFER</span>
            <h3 className="font-playfair text-3xl font-bold leading-tight text-white uppercase tracking-wider">
              Wholesale Excellence
            </h3>
            <p className="text-[#eedec9]/75 text-xs font-outfit leading-relaxed max-w-[190px]">
              Special pricing for retailers & bulk buyers
            </p>
          </div>

          <div className="z-10 mt-6">
            <Link 
              to="/trade-enquiry" 
              className="inline-flex items-center gap-2 bg-[#eedec9] hover:bg-white text-[#132C20] px-5 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 rounded-xl shadow-md"
            >
              Enquire Now <ArrowRight size={13} />
            </Link>
          </div>

          {/* Luxury fabric bottom alignment */}
          <div className="absolute right-0 bottom-0 left-0 h-44 overflow-hidden rounded-t-3xl z-0">
            <img 
              src="https://images.unsplash.com/photo-1623310658847-33f12eaab710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoZXMlMjBmYWJyaWNzfGVufDB8fDB8fHww" 
              alt="Wholesale Fabrics Stack" 
              className="w-full h-full object-cover object-top border-t border-[#ebdcb9]/20 shadow-inner" 
            />
          </div>
        </div>

        {/* Right Card: New Arrivals */}
        <div className="bg-[#eaddca] text-[#132C20] p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden min-h-[320px] shadow-sm border border-[#ebdcb9]/40 text-left">
          
          <div className="space-y-4 z-10">
            <span className="text-[10px] uppercase font-bold text-[#132C20]/60 tracking-[0.2em]">NEW ARRIVALS</span>
            <h3 className="font-playfair text-3xl font-bold leading-tight text-[#132C20] uppercase tracking-wider">
              Discover Our Latest Collection
            </h3>
          </div>

          <div className="z-10 mt-6">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-[#132C20] hover:bg-[#204532] text-white px-5 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 rounded-xl shadow-md"
            >
              Shop Now <ArrowRight size={13} className="text-[#C3A87E]" />
            </Link>
          </div>

          {/* Luxury fabric roll bottom alignment */}
          <div className="absolute right-0 bottom-0 left-0 h-44 overflow-hidden rounded-t-3xl z-0">
            <img 
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60" 
              alt="New Collection Textiles" 
              className="w-full h-full object-cover object-top border-t border-[#ebdcb9]/40 shadow-inner" 
            />
          </div>
        </div>

      </section>

      {/* 5. Featured Collection Grid (Preserving existing content & logic) */}
      <section className="bg-white/50 border border-[#ebdcb9]/45 p-8 rounded-3xl mt-4">
        <div className="flex justify-between items-end mb-8 border-b border-[#ebdcb9]/30 pb-4 text-left">
          <div>
            <p className="text-[#C3A87E] font-bold tracking-[0.2em] uppercase text-[10px] mb-1.5">Curated Masterpieces</p>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#132C20] font-bold uppercase tracking-wide">Featured Collection</h2>
          </div>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-1.5 text-[#132C20] hover:text-[#C3A87E] transition-colors font-bold uppercase text-[10px] tracking-wider"
          >
            View Catalogue <ArrowRight size={13} className="text-[#C3A87E]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-white border border-[#ebdcb9]/30 overflow-hidden hover:border-[#C3A87E] hover:shadow-lg transition-all duration-300 rounded-2xl text-left"
            >
              <div className="relative h-[220px] overflow-hidden bg-slate-50">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#132C20] text-[#eedec9] text-[8px] uppercase tracking-widest px-3 py-1 font-bold rounded-lg shadow-sm border border-[#C3A87E]/20">
                  {prod.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-[#132C20] font-playfair text-lg font-bold mb-2 group-hover:text-[#C3A87E] transition-colors uppercase tracking-wide">
                  {prod.name}
                </h3>
                <p className="text-[#5A6E62] text-xs leading-relaxed mb-6 flex-grow">
                  {prod.desc}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-[#C3A87E] hover:text-[#132C20] font-bold uppercase text-[10px] tracking-wider border-b border-transparent hover:border-[#132C20] w-fit pb-0.5 transition-all duration-250"
                >
                  View Details <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
