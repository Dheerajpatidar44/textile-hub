import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {  
  ArrowRight,
  ArrowLeft,  
  ChevronLeft,  
  ChevronRight,  
  Star,
  PlayCircle
} from 'lucide-react';

const C = {
  primary: '#D28D7A',        
  primaryLight: '#E4B5A5',
  primaryDark: '#A56453',
  accent: '#E5A391',         
  accentLight: '#F9F1EF',
  gold: '#D28D7A',
  bg: '#FAF8F5',             
  border: '#EFE9E5',
  stone: '#6B5B56',          
};

const features = [
  { title: "PREMIUM QUALITY", desc: "Finest fabric, unmatched quality", icon: "✨" },
  { title: "WIDE RANGE", desc: "Thousands of fabrics for every need", icon: "📦" },
  { title: "PAN INDIA DELIVERY", desc: "Timely delivery across India", icon: "🚚" },
  { title: "DEDICATED SUPPORT", desc: "We are here to help you anytime", icon: "🎧" }
];

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60" },
  { name: "Shirting", image: "/images/popular_cotton_fabric.png" },
  { name: "Formal & Ethnic Wear for Women", image: "/images/popular_lehenga.png" },
  { name: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
  { name: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60" }
];

const bestsellers = [
  { name: "Banarasi Silk Saree", image: "/images/popular_banarasi_saree.png" },
  { name: "Premium Viscose Fabric", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Embroidered Kurti Set", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Designer Lehenga", image: "/images/popular_anarkali.png" },
  { name: "Fancy Net Fabric", image: "/images/popular_bedsheet.png" }
];

const testimonials = [
  {
    quote: "Kaaya Fabrics has been our trusted partner for years. Their quality and service are simply unmatched in the textile market.",
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

const blogs = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" }
];

const heroSlides = [
  {
    image: "/images/hero_slide1.png",
    subtitle: "Heritage. Craft. Culture.",
    title1: "Timeless Textiles,",
    title2: "Woven for Generations",
    desc: "Discover the finest fabrics that blend tradition, craftsmanship, and contemporary elegance."
  },
  {
    image: "/images/hero_slide2.png",
    subtitle: "Modern Elegance",
    title1: "Exquisite Craftsmanship,",
    title2: "For Your Special Moments",
    desc: "Experience luxury with our handpicked collection of premium wedding and festive wear."
  },
  {
    image: "/images/hero_slide3.png",
    subtitle: "The Royal Collection",
    title1: "Regal Ethnic Wear,",
    title2: "Defining True Class",
    desc: "Step into the spotlight with our timeless and regal selection of ethnic attire."
  }
];

export default function Home() {
  const categoryRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = 300;
      categoryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full h-[80vh] min-h-[550px] overflow-hidden flex items-center justify-center bg-[#FAF8F5]" style={{ perspective: '2000px' }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { rotateY: 90, opacity: 0, z: -400 },
              visible: { rotateY: 0, opacity: 1, z: 0, transition: { duration: 0.9, ease: [0.64, 0.04, 0.35, 1] } },
              exit: { rotateY: -90, opacity: 0, z: -400, transition: { duration: 0.9, ease: [0.64, 0.04, 0.35, 1] } }
            }}
            style={{ transformStyle: "preserve-3d", transformOrigin: "center center -300px" }}
            className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
          >
            <img src={heroSlides[currentSlide].image} alt="Kaaya Fabrics" className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02]" />
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
                exit: { opacity: 0, y: -30, transition: { duration: 0.4 } }
              }}
              className="relative z-10 text-center max-w-4xl px-6 mx-auto mt-6"
            >
              <span className="text-[13px] md:text-[16px] font-bold tracking-[0.3em] text-[#A56453] uppercase">
                {heroSlides[currentSlide].subtitle}
              </span>
              <h1 className="text-[52px] sm:text-[64px] font-normal leading-[1.1] font-serif text-[#A56453] mt-3 mb-1">
                {heroSlides[currentSlide].title1}
              </h1>
              <h2 className="text-[44px] sm:text-[52px] font-normal font-serif text-[#D28D7A] italic mb-5">
                {heroSlides[currentSlide].title2}
              </h2>
              <p className="text-[16px] md:text-[19px] text-[#6B5B56] leading-relaxed font-medium mb-8 max-w-xl mx-auto">
                {heroSlides[currentSlide].desc}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/products"
                  className="px-8 py-3.5 bg-[#D28D7A] text-white text-[12px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#A56453] rounded-md shadow-sm"
                >
                  Explore Collections →
                </Link>
              </div>
              
              <div className="flex justify-center gap-4 mt-8">
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="w-12 h-12 border border-[#D28D7A] text-[#D28D7A] hover:bg-[#D28D7A] hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="w-12 h-12 border border-[#D28D7A] text-[#D28D7A] hover:bg-[#D28D7A] hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Next slide"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Slider Dots below arrows */}
              <div className="flex justify-center gap-2 mt-5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-[#A56453]' : 'w-1.5 bg-[#D28D7A]/40 hover:bg-[#D28D7A]'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>


      </section>

      {/* ── 3. SHOP BY CATEGORY ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 pt-20 pb-10 text-center border-b border-[#EFE9E5]">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[28px] font-normal text-[#A56453] tracking-wider font-serif uppercase m-0">
            SHOP BY <span className="text-[#D28D7A]">CATEGORY</span>
          </h2>
          <Link to="/products" className="text-[11px] font-bold tracking-widest text-[#D28D7A] hover:text-[#A56453] uppercase transition-colors">
            VIEW ALL CATEGORIES →
          </Link>
        </div>

        <div className="relative group/slider">
          {/* Left Scroll Button */}
          <button 
            onClick={() => scrollCategories('left')}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[#A56453] hover:bg-[#D28D7A] hover:text-white transition-all hidden md:flex border border-[#EFE9E5]"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div ref={categoryRef} className="flex gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth">
            {categories.map((cat, idx) => (
              <Link key={idx} to="/products" className="group bg-white rounded-xl border border-[#EFE9E5] overflow-hidden flex flex-col hover:shadow-md transition-all text-left w-[160px] shrink-0">
                <div className="w-full aspect-square overflow-hidden bg-[#FAF8F5]">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 flex justify-between items-center bg-white">
                  <span className="text-[12px] font-bold text-[#A56453] tracking-wider uppercase truncate">
                    {cat.name}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#FAF8F5] text-[#D28D7A] flex items-center justify-center group-hover:bg-[#D28D7A] group-hover:text-white transition-colors shrink-0 ml-1">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button 
            onClick={() => scrollCategories('right')}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[#A56453] hover:bg-[#D28D7A] hover:text-white transition-all hidden md:flex border border-[#EFE9E5]"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* ── 4. RETAIL MANAGEMENT SECTION ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 pt-10 pb-20 border-b border-[#EFE9E5]">
        <Link 
          to="/retail-management" 
          className="group block relative w-full h-[300px] lg:h-[350px] overflow-hidden rounded-2xl border border-[#EFE9E5] bg-[#FAF8F5] hover:shadow-xl transition-all duration-500"
        >
          <img 
            src="/images/retail_management_banner.png" 
            alt="Retail Management" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          <div className="absolute inset-0 p-10 md:p-16 text-center flex flex-col justify-center items-center h-full z-10">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.25em] text-[#E4B5A5] uppercase mb-4 block drop-shadow-md">
              Business Solutions
            </span>
            <h2 className="text-[36px] md:text-[52px] font-normal leading-tight font-serif text-white mb-4 drop-shadow-lg">
              Retail Management <br />
              <span className="italic text-[#E4B5A5]">Simplified.</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-medium mb-8 max-w-lg drop-shadow-md">
              Streamline operations and elevate your textile business with our premium tools.
            </p>
            
            <div className="inline-flex items-center gap-2 text-[14px] font-bold tracking-widest text-white uppercase transition-colors drop-shadow-md">
              Discover Solutions <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </Link>
      </section>



      {/* ── 6. TESTIMONIALS ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 py-20 text-center border-b border-[#EFE9E5] bg-white">
        <div className="mb-12 text-center">
          <span className="text-[12px] font-bold tracking-[0.25em] text-[#D28D7A] uppercase block mb-2">
            WHAT OUR CLIENTS SAY
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#FAF8F5] rounded-xl border border-[#EFE9E5] p-8 text-left">
              <div className="text-[#D28D7A] text-4xl font-serif mb-4">“</div>
              <p className="text-[14px] text-[#6B5B56] leading-relaxed font-medium mb-8">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-[14px] font-bold text-[#A56453]">{item.name}</h4>
                  <p className="text-[12px] text-[#6B5B56]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. FROM OUR BLOG ── */}
      <section className="max-w-[95rem] mx-auto px-6 lg:px-14 py-20 text-center">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[28px] font-normal text-[#A56453] tracking-wider font-serif uppercase m-0">
            FROM OUR <span className="text-[#D28D7A]">BLOG</span>
          </h2>
          <Link to="/blog" className="text-[11px] font-bold tracking-widest text-[#D28D7A] hover:text-[#A56453] uppercase transition-colors">
            VIEW ALL ARTICLES →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Link key={idx} to="/blog" className="bg-white rounded-xl border border-[#EFE9E5] overflow-hidden text-left hover:shadow-md transition-shadow">
              <div className="w-full aspect-video bg-[#FAF8F5]">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-[11px] text-[#6B5B56] uppercase tracking-wider block mb-2">{blog.date}</span>
                <h3 className="text-[16px] font-bold text-[#A56453] mb-4 line-clamp-2 leading-snug">{blog.title}</h3>
                <span className="text-[11px] font-bold text-[#D28D7A] tracking-widest uppercase">READ MORE →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
