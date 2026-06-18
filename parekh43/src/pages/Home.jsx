
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight, Gem, Box, Users, Truck, Headphones, CheckCircle2 } from 'lucide-react';

const C = {
  primary: '#1A2A44',
  accent: '#B56A79',
  bg: '#FFF5F5',
  sand: '#FDECEE',
  border: '#F6D6DA',
  textFaint: '#6B7280',
};

const categories = [
  { name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dress Suits", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&auto=format&fit=crop&q=80" },
  { name: "Bedsheets & Linen", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=80" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80" },
  { name: "Shirting", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&auto=format&fit=crop&q=80" },
  { name: "Formal & Ethnic Wear for Children", image: "https://images.unsplash.com/photo-1580656940647-8854a00547f0?w=400&auto=format&fit=crop&q=80" },
  { name: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80" }
];

const heroSlides = [
  {
    title: "Threads that",
    highlight: "Tell Stories",
    desc: "Timeless textiles crafted with passion, woven with tradition, designed for today.",
    image: "/images/slider.png"
  },
  {
    title: "Elegance in",
    highlight: "Every Weave",
    desc: "Discover the finest collection of premium fabrics curated for your exquisite taste.",
    image: "/images/slider1.png"
  },
  {
    title: "Crafted for",
    highlight: "Perfection",
    desc: "Experience the unmatched quality and beauty of our sustainably sourced materials.",
    image: "/images/slider2.png"
  }
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pb-0">

      {/* ═══════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative w-full min-h-[100vh] flex items-center pt-28 pb-16 lg:py-0 overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
                style={{ transform: currentSlide === i ? 'scale(1)' : 'scale(1.05)', transition: 'transform 6s ease-out' }}
              />
              {/* Overlay gradient so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 w-full relative z-10 flex flex-col justify-center h-full pt-16 lg:pt-0">
          
          <div className="w-full lg:w-[40%] relative z-10 pl-2 lg:pl-0">
            <div className="transition-opacity duration-700 ease-in-out">
              <h1 className="text-[52px] lg:text-[76px] font-normal leading-[1.1] text-white mb-6 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {heroSlides[currentSlide].title} <br/> 
                <span className="text-[#F6D6DA]" style={{ fontWeight: 300 }}>{heroSlides[currentSlide].highlight}</span>
              </h1>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#B56A79]"></div>
                <div className="w-16 h-[2px] bg-[#B56A79]"></div>
              </div>

              <p className="text-[17px] text-white/90 mb-10 max-w-sm leading-relaxed font-light tracking-wide">
                {heroSlides[currentSlide].desc}
              </p>

              <div className="flex items-center gap-6">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#B56A79] text-white text-[12px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#1A2A44] rounded-full shadow-xl"
                >
                  DISCOVER COLLECTIONS <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Left Navigation Control */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 z-20">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1A2A44] transition-all shadow-md border border-white/20"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          {/* Right Navigation Control */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 z-20">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1A2A44] transition-all shadow-md border border-white/20"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          
        </div>
      </section>


      {/* ═══════════════════════════════════════
          3. SHOP BY COLLECTION
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-20">
        <div className="flex items-center justify-between mb-12 border-b border-[#F6D6DA] pb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[16px] font-bold text-[#B56A79] tracking-[0.2em] uppercase">SHOP BY COLLECTION</h2>
            <div className="w-12 h-[1px] bg-[#B56A79]"></div>
          </div>
          <Link to="/products" className="text-[12px] font-bold text-[#1A2A44] uppercase tracking-widest flex items-center gap-2 hover:text-[#B56A79] transition-colors">
            VIEW ALL COLLECTIONS <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.slice(0, 12).map((cat, idx) => (
            <Link key={idx} to={`/products?category=${encodeURIComponent(cat.name)}`} className="flex flex-col items-center group">
              <div className="w-full aspect-[4/5] rounded-t-full overflow-hidden mb-4 bg-white border border-[#F6D6DA] shadow-sm relative">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-[#F6D6DA] flex items-center justify-center text-[#B56A79] shadow-md z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300">
                  <Box size={18} />
                </div>
              </div>
              <h3 className="text-center text-[12px] font-bold tracking-widest uppercase text-[#1A2A44] transition-colors duration-300 group-hover:text-[#B56A79] mt-2">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. PROMOTIONAL BANNER
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24">
        <div className="rounded-md overflow-hidden flex flex-col md:flex-row relative bg-[#EBC2BC]" style={{ minHeight: '340px' }}>
          
          {/* Right Image Side Background */}
          <div className="absolute inset-0 md:left-[40%] z-0">
             <img src="/images/promo_banner_textiles.png" alt="Fabrics" className="w-full h-full object-cover" />
             
             {/* Bottom right decorative arches */}
             <div className="absolute bottom-0 right-0 flex items-end">
               <div className="w-32 h-44 bg-[#B26478] rounded-t-full opacity-90 absolute right-12 bottom-0"></div>
               <div className="w-24 h-32 bg-[#423157] rounded-t-full opacity-100 relative right-0 flex flex-col items-center justify-end p-4">
                  <div className="grid grid-cols-3 gap-2 opacity-60 mb-2">
                    {[...Array(9)].map((_, i) => <div key={i} className="w-[3px] h-[3px] rounded-full bg-white"></div>)}
                  </div>
               </div>
             </div>
          </div>

          {/* Left Navy Side */}
          <div className="w-full md:w-[48%] bg-[#1A2A44] p-10 lg:p-14 flex flex-col justify-center relative z-10" style={{ borderTopRightRadius: '140px', borderBottomRightRadius: '140px' }}>
            <div className="text-[#D18795] text-[10px] font-bold tracking-[0.1em] uppercase mb-4">LIMITED TIME OFFER</div>
            <h2 className="text-[34px] text-white leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Exclusive Textiles
            </h2>
            <h3 className="text-[34px] text-[#D18795] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              at Special Prices
            </h3>
            <p className="text-white text-[12px] mb-8 font-medium">For bulk buyers & retailers.</p>
            <Link to="/trade-enquiry" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#B56A79] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-[#1A2A44] transition-colors self-start shadow-sm">
              ENQUIRE NOW <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
          
          {/* Decorative Badge */}
          <div className="absolute left-1/2 md:left-[48%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[110px] h-[110px] rounded-full border-[1.5px] border-white/30 flex items-center justify-center z-20 bg-[#1A2A44]">
            <div className="text-center text-white flex flex-col items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D18795" strokeWidth="1.2">
                <path d="M12 2v6" />
                <path d="M12 5C10.5 5 9 3 9 3" />
                <path d="M12 5c1.5 0 3-2 3-2" />
                <path d="M12 8C9 8 8 6 8 6" />
                <path d="M12 8c3 0 4-2 4-2" />
              </svg>
              <div className="text-[11px] font-bold tracking-widest uppercase leading-tight">BEST<br/>VALUE</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D18795" strokeWidth="1.2" style={{ transform: 'rotate(180deg)' }}>
                <path d="M12 2v6" />
                <path d="M12 5C10.5 5 9 3 9 3" />
                <path d="M12 5c1.5 0 3-2 3-2" />
                <path d="M12 8C9 8 8 6 8 6" />
                <path d="M12 8c3 0 4-2 4-2" />
              </svg>
            </div>
          </div>
          
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. BLOGS
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#F6D6DA]">
          <div className="flex items-center gap-4">
            <h2 className="text-[16px] font-bold text-[#B56A79] tracking-[0.2em] uppercase">BLOGS</h2>
            <div className="w-8 h-[1px] bg-[#B56A79]"></div>
          </div>
          <Link to="/blog" className="text-[12px] font-bold text-[#1A2A44] uppercase tracking-widest hover:text-[#B56A79] transition-colors">VIEW ALL</Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side: 3 Blogs List */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8 justify-center">
            {[
              { title: "The Future of Sustainable Weaving", date: "June 10, 2026", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
              { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
              { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
            ].map((post, idx) => (
              <Link key={idx} to="/blog" className="flex items-center gap-6 group bg-white rounded-[16px] p-2 border border-transparent hover:border-[#F6D6DA] hover:shadow-sm transition-all duration-300">
                <div className="w-32 h-28 rounded-[12px] overflow-hidden shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="pr-4">
                  <div className="text-[10px] font-bold text-[#B56A79] uppercase tracking-widest mb-2">{post.date}</div>
                  <h3 className="text-[18px] font-bold text-[#1A2A44] leading-snug group-hover:text-[#B56A79] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Right Side: Featured Blog */}
          <div className="w-full lg:w-[55%]">
            <Link to="/blog" className="block relative w-full h-full min-h-[400px] rounded-[24px] overflow-hidden group shadow-md">
              <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1000&auto=format&fit=crop&q=80" alt="Trends to Watch in Home Furnishing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/90 via-[#1A2A44]/40 to-transparent"></div>
              
              <div className="absolute inset-x-8 bottom-8 p-6 bg-white/10 backdrop-blur-md rounded-[16px] border border-white/20 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-2 opacity-80">Apr 22, 2026</div>
                <h3 className="text-[28px] font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Trends to Watch in <br/> Home Furnishing
                </h3>
                <div className="inline-flex items-center gap-2 text-[12px] font-bold text-white uppercase tracking-widest group-hover:text-[#F6D6DA] transition-colors">
                  READ ARTICLE <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24">
        <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#F6D6DA]">
          <h2 className="text-[16px] font-bold text-[#B56A79] tracking-[0.2em] uppercase">WHY CHOOSE US</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: CheckCircle2, title: "Authentic & Quality Assured", desc: "We ensure 100% genuine quality in every thread" },
            { icon: Gem, title: "Ethical & Sustainable", desc: "Sustainable practices for a better and greener future" },
            { icon: Users, title: "Trusted by Thousands", desc: "Loved and reviewed by customers across India" },
            { icon: Truck, title: "Secure & Reliable", desc: "Safe transactions & on-time delivery globally" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col gap-4 p-8 bg-white border border-[#F6D6DA] rounded-[24px] hover:shadow-[0_12px_30px_rgba(59,35,20,0.04)] transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#FDECEE] text-[#B56A79] flex items-center justify-center shrink-0">
                <f.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#1A2A44] mb-2">{f.title}</h4>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
