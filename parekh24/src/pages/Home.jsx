import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Store, TrendingUp, HeartHandshake, FileText, Gavel, FileOutput, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: 'SAREES', desc: 'Timeless Drape', image: 'https://plus.unsplash.com/premium_photo-1729038877169-1fed6a3f0c68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8', path: '/products?category=Sarees' },
  { name: 'LEGGINGS', desc: 'Comfort & Style', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80', path: '/products?category=Leggings' },
  { name: 'KURTIS', desc: 'Everyday Elegance', image: 'https://images.unsplash.com/photo-1752653425039-cf1ff22d61bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D', path: '/products?category=Kurtis' },
  { name: 'DRESS SUITS', desc: 'Classic Wear', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80', path: '/products?category=Dress+Suits' },
  { name: 'BEDSHEETS & LINEN', desc: 'Premium Home', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80', path: '/products?category=Bedsheets+%26+Linen' },
  { name: 'SUITING & SHIRTING', desc: 'Refined Fabrics', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=60', path: '/products?category=Suiting' },
];

const sliderSlides = [
  {
    tag: 'Artisan Handlooms',
    title: 'Timeless Weaves for Modern Living',
    desc: 'Experience the finest range of sustainable fabrics, handcrafted silks, and premium textiles curated with heritage techniques.',
    image: '/images/hero1.png',
  },
  {
    tag: 'Heritage Sarees',
    title: 'Exquisite Elegance in Silk & Cotton',
    desc: 'Adorn yourself with designer sarees and ethnic ensembles woven by India\'s master artisans.',
    image: '/images/hero2.png',
  },
  {
    tag: 'Royal Suiting',
    title: 'Sophisticated Men\'s Suiting Fabrics',
    desc: 'Crafted for weddings, formal affairs, and heritage celebrations with premium longevity and soft textures.',
    image: '/images/hero3.png',
  },
  {
    tag: 'Luxe Home Linen',
    title: 'Premium Linens & Bedding Collections',
    desc: 'Transform your space with organic home textiles, designer upholstery, and luxury linen bedsheets.',
    image: '/images/hero4.png',
  }
];

const COLORS = {
  primary: '#6E64B4', 
  primaryDark: '#252131',
  bg: '#FAF9F5',
  cardBg: '#FFFFFF',
  border: '#E1DFEB',
  textDark: '#252131',
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
  };

  return (
    <div className="w-full pb-10" style={{ background: COLORS.bg, fontFamily: "'Urbanist', sans-serif" }}>
      
      {/* ── HERO SLIDER SECTION ── */}
      <section className="relative w-full max-w-[90rem] mx-auto flex flex-col md:flex-row items-stretch h-auto min-h-[500px] md:h-[460px] lg:h-[500px] bg-[#FAF9F5] border-b" style={{ borderColor: COLORS.border }}>
        
        {/* Left Side: Content Div (Pure light theme, no overlay on images) */}
        <div className="w-full md:w-[42%] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 md:py-8 bg-[#FAF9F5] z-10 relative text-left">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              <p className="text-[12px] font-extrabold tracking-[0.25em] uppercase mb-2" style={{ color: COLORS.primary }}>
                {sliderSlides[currentSlide].tag}
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.15] mb-4 serif-title tracking-tight" style={{ color: COLORS.textDark }}>
                {sliderSlides[currentSlide].title}
              </h1>

              <div className="h-[1.5px] w-16 mb-4 rounded-full" style={{ background: COLORS.primary }} />

              <p className="text-xs sm:text-sm mb-6 leading-relaxed opacity-80 font-medium" style={{ color: COLORS.textDark }}>
                {sliderSlides[currentSlide].desc}
              </p>

              <div>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-[10px] font-bold tracking-widest text-[#FAF9F5] transition-all shadow-sm btn-primary uppercase"
                >
                  Explore Now <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicator Dots inside content panel */}
          <div className="flex gap-2 mt-8">
            {sliderSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === index ? 'w-6' : 'w-2'}`}
                style={{ background: currentSlide === index ? COLORS.primary : '#E1DFEB' }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Premium Highlights Grid to cover bottom space */}
          <div className="mt-8 pt-6 border-t grid grid-cols-2 gap-4" style={{ borderColor: COLORS.border }}>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: COLORS.primary }}>Craftsmanship</p>
              <p className="text-xs font-bold mt-0.5" style={{ color: COLORS.textDark }}>100% Handloom Certified</p>
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: COLORS.primary }}>Sustainable</p>
              <p className="text-xs font-bold mt-0.5" style={{ color: COLORS.textDark }}>Organic Sourcing</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Slider (Image is fully visible and not covered by text) */}
        <div className="w-full md:w-[58%] relative h-[280px] md:h-auto overflow-hidden border-t md:border-t-0 md:border-l" style={{ borderColor: COLORS.border }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={sliderSlides[currentSlide].image} 
                alt={sliderSlides[currentSlide].title} 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows on Image Side */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border transition-all bg-[#FAF9F5]/90 border-[#E1DFEB] text-[#252131] hover:bg-[#6E64B4] hover:text-white hover:border-[#6E64B4] cursor-pointer shadow-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border transition-all bg-[#FAF9F5]/90 border-[#E1DFEB] text-[#252131] hover:bg-[#6E64B4] hover:text-white hover:border-[#6E64B4] cursor-pointer shadow-sm"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ── EXPLORE OUR CATEGORIES ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-16" style={{ background: COLORS.primary }} />
          <h2 className="text-xl font-bold tracking-widest uppercase serif-title" style={{ color: COLORS.textDark }}>
            EXPLORE OUR COLLECTIONS
          </h2>
          <div className="h-px w-16" style={{ background: COLORS.primary }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border" style={{ borderColor: COLORS.border }}>
              <div className="h-56 overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-extrabold text-xs tracking-wider mb-1" style={{ color: COLORS.textDark }}>{cat.name}</h3>
                <p className="text-[11px] opacity-70" style={{ color: COLORS.textDark }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NOTICE BOARD HIGHLIGHTS ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 py-8">
        <div className="rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row border" style={{ borderColor: COLORS.border, minHeight: '350px' }}>
          {/* Left Dark Side */}
          <div className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center text-white" style={{ background: COLORS.primaryDark }}>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: COLORS.primary }}>
              Operational Updates
            </p>
            <h2 className="text-4xl lg:text-5xl font-normal mb-6 serif-title">Notice Board</h2>
            <p className="text-xs opacity-80 mb-10 leading-relaxed max-w-sm">
              Stay informed with our latest announcements, general meetings updates, and dispatch schedule notices.
            </p>
            <div>
              <Link to="/notice-board" className="inline-flex items-center gap-2 bg-[#FAF9F5] text-[#252131] px-6 py-2.5 rounded-lg text-[11px] font-bold tracking-widest uppercase hover:bg-[#6E64B4] hover:text-white transition-all">
                VIEW ALL NOTICES <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Light Side: Notice Board Highlights */}
          <div className="lg:w-3/5 bg-white p-10 lg:p-14 flex flex-col justify-center gap-6 border-l" style={{ borderColor: COLORS.border }}>
            <h3 className="text-base font-extrabold uppercase tracking-wider mb-2 text-left" style={{ color: COLORS.textDark }}>Latest Announcements</h3>
            
            <div className="space-y-4 text-left">
              {[
                { title: 'Annual General Meeting 2026', date: 'Nov 01, 2026' },
                { title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026' },
                { title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026' }
              ].map((notice, i) => (
                <Link 
                  key={i} 
                  to="/notice-board" 
                  className="block p-4 rounded-xl border hover:shadow-md transition-all duration-200"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <span className="text-[10px] font-extrabold opacity-60 uppercase" style={{ color: COLORS.textDark }}>{notice.date}</span>
                      <h4 className="font-bold text-sm mt-1" style={{ color: COLORS.textDark }}>{notice.title}</h4>
                    </div>
                    <ArrowRight size={16} className="text-[#6E64B4] shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR B2B SERVICES ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-16" style={{ background: COLORS.primary }} />
          <h2 className="text-xl font-bold tracking-widest uppercase serif-title" style={{ color: COLORS.textDark }}>
            OUR B2B SERVICES
          </h2>
          <div className="h-px w-16" style={{ background: COLORS.primary }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/e-quotation" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <FileText size={32} style={{ color: COLORS.primary }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs tracking-wider mb-1" style={{ color: COLORS.textDark }}>e-QUOTATION</h4>
              <p className="text-[11px] opacity-70" style={{ color: COLORS.textDark }}>Get digital price quotes for large scale orders</p>
            </div>
          </Link>
          <Link to="/e-auction" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <Gavel size={32} style={{ color: COLORS.primary }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs tracking-wider mb-1" style={{ color: COLORS.textDark }}>e-AUCTION</h4>
              <p className="text-[11px] opacity-70" style={{ color: COLORS.textDark }}>Participate in yarn and bulk fabric auctions online</p>
            </div>
          </Link>
          <Link to="/trade-circular" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <FileOutput size={32} style={{ color: COLORS.primary }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs tracking-wider mb-1" style={{ color: COLORS.textDark }}>TRADE CIRCULAR</h4>
              <p className="text-[11px] opacity-70" style={{ color: COLORS.textDark }}>Download governmental & import policies updates</p>
            </div>
          </Link>
          <Link to="/trade-enquiry" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <Users size={32} style={{ color: COLORS.primary }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs tracking-wider mb-1" style={{ color: COLORS.textDark }}>TRADE ENQUIRY</h4>
              <p className="text-[11px] opacity-70" style={{ color: COLORS.textDark }}>Reach out directly to our export managers</p>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
