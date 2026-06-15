import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80', path: '/products?category=Sarees' },
  { name: 'Leggings', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&auto=format&fit=crop&q=80', path: '/products?category=Leggings' },
  { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=80', path: '/products?category=Kurtis' },
  { name: 'Dress Suits', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80', path: '/products?category=Dress+Suits' },
  { name: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80', path: '/products?category=Bedsheets+%26+Linen' },
  { name: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=80', path: '/products?category=Hosiery+Items' },
  { name: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop&q=80', path: '/products?category=Suiting' },
  { name: 'Shirting', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&auto=format&fit=crop&q=80', path: '/products?category=Shirting' },
  { name: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80', path: '/products?category=Formal+%26+Ethnic+Wear+for+Women' },
  { name: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1724856604249-ca73680262e8?w=400&auto=format&fit=crop&q=80', path: '/products?category=Formal+%26+Ethnic+Wear+for+Men' },
  { name: 'Formal & Ethnic Wear for Children', image: 'https://images.unsplash.com/photo-1741992556912-3b2d62461e75?w=400&auto=format&fit=crop&q=80', path: '/products?category=Formal+%26+Ethnic+Wear+for+Children' },
  { name: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80', path: '/products?category=Home+Upholstery+%26+Furnishing' },
];

const sliderSlides = [
  {
    tag: 'Artisan Handlooms',
    title: 'Timeless Weaves for Modern Living',
    desc: 'Experience the finest range of sustainable fabrics, handcrafted silks, and premium textiles curated with heritage techniques.',
    image: '/images/heroimages/hero.png',
    position: 'object-top',
    theme: 'dark'
  },
  {
    tag: 'Heritage Sarees',
    title: 'Exquisite Elegance in Silk & Cotton',
    desc: 'Adorn yourself with designer sarees and ethnic ensembles woven by India\'s master artisans.',
    image: '/images/heroimages/hero1.png',
    position: 'object-top',
    theme: 'dark'
  },
  {
    tag: 'Royal Suiting',
    title: 'Sophisticated Men\'s Suiting Fabrics',
    desc: 'Crafted for weddings, formal affairs, and heritage celebrations with premium longevity and soft textures.',
    image: '/images/heroimages/hero2.png',
    position: 'object-center',
    theme: 'light'
  },
  {
    tag: 'Luxe Home Linen',
    title: 'Premium Linens & Bedding Collections',
    desc: 'Transform your space with organic home textiles, designer upholstery, and luxury linen bedsheets.',
    image: '/images/heroimages/hero3.png',
    position: 'object-center',
    theme: 'light'
  }
];

const COLORS = {
  primary: '#C5A377',
  primaryDark: '#3D3025',
  bg: '#F6F1EA',
  cardBg: '#FFFFFF',
  border: '#E8E2D7',
  textDark: '#3D3025',
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
  })
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
  };

  return (
    <div className="w-full pb-10" style={{ background: COLORS.bg, fontFamily: "'Jost', sans-serif" }}>

      {/* ── HERO SLIDER SECTION (Full width banner, content overlaid) ── */}
      <section className="relative w-full h-[400px] sm:h-[460px] lg:h-[520px] overflow-hidden flex items-center justify-center bg-[#3D3025]">

        {/* Animated Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 0.6 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={sliderSlides[currentSlide].image}
                alt={sliderSlides[currentSlide].title}
                className={`w-full h-full object-cover ${sliderSlides[currentSlide].position || 'object-center'}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Overlaid */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 text-[#C5A377] drop-shadow-md">
                {sliderSlides[currentSlide].tag}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.12] mb-5 serif-title tracking-tight text-white max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {sliderSlides[currentSlide].title}
              </h1>

              <div className="h-[2px] w-16 mb-5 rounded-full shadow-sm" style={{ background: COLORS.primary }} />

              <p className="text-xs sm:text-sm lg:text-base mb-8 leading-relaxed max-w-xl text-white font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                {sliderSlides[currentSlide].desc}
              </p>

              <div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg text-[10px] font-bold tracking-widest text-[#3D3025] bg-[#C5A377] hover:bg-white hover:text-[#3D3025] hover:border-white transition-all shadow-md btn-accent uppercase border border-[#C5A377]"
                >
                  Explore Now <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {sliderSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === index ? 'w-6 bg-[#C5A377]' : 'w-2 bg-white/40'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full flex items-center justify-center border transition-all bg-white/10 hover:bg-[#C5A377] border-white/20 text-white hover:border-[#C5A377] cursor-pointer shadow-sm"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full flex items-center justify-center border transition-all bg-white/10 hover:bg-[#C5A377] border-white/20 text-white hover:border-[#C5A377] cursor-pointer shadow-sm"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>
      </section>

      {/* ── OUR BUSINESS SECTION (Legacy description) ── */}
      <section
        className="border-b"
        style={{
          borderColor: COLORS.border,
          backgroundImage: "linear-gradient(rgba(234, 230, 224, 0.85), rgba(206, 190, 162, 0.85)), url('/images/herobg.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-[10px] tracking-[0.25em] font-extrabold uppercase mb-2.5" style={{ color: COLORS.primary }}>
            Our Business
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal mb-5 serif-title tracking-tight" style={{ color: COLORS.textDark }}>
            A Legacy Woven in Every Thread
          </h2>
          <div className="h-[1.5px] w-16 mx-auto mb-6 rounded-full" style={{ background: COLORS.primary }} />
          <p className="text-sm sm:text-base leading-relaxed opacity-85 font-medium max-w-2xl mx-auto" style={{ color: COLORS.textDark }}>
            Shree Textile Mall is one of India's largest and most trusted textile businesses, offering an extraordinary range of fabrics and fashion for every need. From ethnic elegance to everyday comfort — we bring exceptional quality, craftsmanship, and trust together.
          </p>
          <div className="mt-6">
            <Link to="/about" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:underline" style={{ color: COLORS.primary }}>
              KNOW MORE ABOUT US <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY SECTION (Vertically rounded arch grid) ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-12 flex items-center justify-center gap-4">
          <span className="text-xl" style={{ color: COLORS.primary }}>←</span>
          <h2 className="text-2xl font-normal tracking-wider uppercase serif-title" style={{ color: COLORS.textDark }}>
            Shop by Category
          </h2>
          <span className="text-xl" style={{ color: COLORS.primary }}>→</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group flex flex-col items-center">
              {/* Vertically rounded arch style */}
              <div
                className="w-full aspect-[3/4.2] rounded-t-full rounded-b-xl overflow-hidden border transition-all duration-300 shadow-sm group-hover:shadow-md"
                style={{ borderColor: COLORS.border, background: '#FFFFFF' }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="mt-4 font-bold text-xs tracking-wider text-center uppercase group-hover:text-[#C5A377] transition-colors" style={{ color: COLORS.textDark }}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>



    </div>
  );
}
