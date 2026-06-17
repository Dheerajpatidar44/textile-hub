import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Heart,
  Truck
} from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1B2B3F',
  primaryDark: '#0F1E2D',
  primaryLight: '#243B55',
  accent: '#C9A455',
  accentLight: '#F0E4C2',
  bg: '#F8F5EF',
  sand: '#F5EED8',
  border: '#E8E0D0',
  soil: '#1a1a2e',
  stone: '#6B7280',
  cream: '#FDFBF7',
};

const heroSlides = [
  {
    image: "/images/weavora_hero1.png",
    titleLine1: "TIMELESS",
    titleLine2: "WEAVES",
    titleLine3: "MODERN",
    titleLine4: "ELEGANCE",
    desc: "Explore handcrafted textiles that blend tradition, quality and contemporary design."
  },
  {
    image: "/images/weavora_hero2.png",
    titleLine1: "HERITAGE",
    titleLine2: "CRAFTED",
    titleLine3: "EXQUISITE",
    titleLine4: "DETAILS",
    desc: "Experience the richness of handcrafted luxury that defines your elegant lifestyle."
  },
  {
    image: "/images/weavora_hero3.png",
    titleLine1: "PURE",
    titleLine2: "TRADITION",
    titleLine3: "GRACEFUL",
    titleLine4: "ATTRIBUTES",
    desc: "Bringing the finest legacy of Indian weavers directly to your curated wardrobe."
  }
];

// ── 12 Categories (names & order preserved) ──
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

const testimonials = [
  { text: "Weavora Textiles exceeds expectations in quality, service and authenticity. Highly recommended!", author: "Neha Agarwal", role: "Boutique Owner" },
  { text: "The variety of traditional weaves and prompt supply coordination has transformed our boutique collections completely.", author: "Preeti Sinha", role: "Fashion Designer" },
  { text: "Exceptional design heritage, beautiful handloom details and flawless retail support.", author: "Amit Verma", role: "Retail partner" }
];

const processSteps = [
  { id: '01', title: 'WEAVING', img: 'https://images.unsplash.com/photo-1605282711667-175f0a005086?w=200&auto=format&fit=crop&q=80' },
  { id: '02', title: 'DYEING', img: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=200&auto=format&fit=crop&q=80' },
  { id: '03', title: 'PRINTING', img: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=200&auto=format&fit=crop&q=80' },
  { id: '04', title: 'STITCHING', img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=200&auto=format&fit=crop&q=80' },
  { id: '05', title: 'FINISHING', img: 'https://images.unsplash.com/photo-1598449426314-8b02525e8733?w=200&auto=format&fit=crop&q=80' },
  { id: '06', title: 'QUALITY CHECK', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&auto=format&fit=crop&q=80' },
  { id: '07', title: 'PACKAGING', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&auto=format&fit=crop&q=80' }
];

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-0">

      {/* ═══════════════════════════════════════
          1. HERO SECTION (Layout matching image)
      ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#1B2B3F] min-h-[600px] lg:min-h-[720px] flex items-center pt-20">
        <div className="absolute inset-0 bg-[#0F1E2D]" />
        
        {/* Decorative Circular Spotlight */}
        <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white opacity-90 blur-xl pointer-events-none z-0 hidden lg:block" />
        <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-white pointer-events-none z-0 hidden lg:block" />

        <div className="max-w-[95rem] mx-auto w-full px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center h-full">
          
          {/* Vertical Slide Indicators */}
          <div className="hidden lg:flex flex-col items-center gap-6 mr-10 h-full justify-center">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="text-[13px] font-medium transition-all"
                style={{
                  color: currentSlide === idx ? '#C9A455' : 'rgba(255,255,255,0.4)',
                  borderBottom: currentSlide === idx ? '1px solid #C9A455' : 'none',
                  paddingBottom: 2
                }}
              >
                0{idx + 1}
              </button>
            ))}
          </div>

          {/* Left Text Content */}
          <div className="w-full lg:w-[45%] text-left flex flex-col items-start py-12 lg:py-0 z-20">
            <h1 className="flex flex-col m-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                {heroSlides[currentSlide].titleLine1}
              </span>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: 'rgba(255,255,255,0.6)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                {heroSlides[currentSlide].titleLine2}
              </span>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: '#ffffff', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                {heroSlides[currentSlide].titleLine3}
              </span>
              <span style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, color: '#ffffff', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                {heroSlides[currentSlide].titleLine4}
              </span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.6, marginTop: 24, marginBottom: 36, maxWidth: 420 }}>
              {heroSlides[currentSlide].desc}
            </p>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 transition-all duration-300 rounded-lg group"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '16px 28px',
                backdropFilter: 'blur(5px)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              EXPLORE COLLECTIONS <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%] relative h-[400px] lg:h-[600px] flex items-center justify-center z-10 mt-10 lg:mt-0">
            {heroSlides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt="Hero"
                style={{
                  position: 'absolute',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                }}
              />
            ))}
            
            {/* Stamp / Badge Graphic */}
            <div className="absolute top-10 right-4 lg:right-10 w-28 h-28 rounded-full border border-white/40 flex flex-col items-center justify-center bg-transparent backdrop-blur-sm z-20">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B2B3F" strokeWidth="1.5" className="mb-1 hidden lg:block">
                  <path d="M4 6h16v12H4z" />
                  <path d="M8 6v12" />
                  <path d="M16 6v12" />
               </svg>
               <span className="text-[10px] font-bold text-[#1B2B3F] text-center leading-tight tracking-wider hidden lg:block">
                 HERITAGE<br/>CRAFTED<br/><span className="font-normal italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', textTransform: 'lowercase' }}>for Generations</span>
               </span>
               <span className="text-[10px] font-bold text-white text-center leading-tight tracking-wider lg:hidden">
                 HERITAGE<br/>CRAFTED
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. FEATURE BAR
      ═══════════════════════════════════════ */}
      <section className="relative z-20 max-w-[90rem] mx-auto px-6 lg:px-14 -mt-8 sm:-mt-12 mb-16">
        <div
          className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-wrap lg:flex-nowrap justify-between gap-6"
        >
          {[
            { icon: ShieldCheck, title: "PREMIUM QUALITY", desc: "Finest fabrics, unmatched quality" },
            { icon: Layers, title: "WIDE RANGE", desc: "Thousands of fabrics for every need" },
            { icon: Heart, title: "CUSTOMER FIRST", desc: "Your satisfaction is our priority" },
            { icon: Truck, title: "PAN INDIA DELIVERY", desc: "Timely delivery across India" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full sm:w-[45%] lg:w-1/4">
              <div
                style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'transparent',
                  border: `1.5px solid #E8E0D0`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                className="shrink-0"
              >
                <item.icon size={20} style={{ color: '#1B2B3F' }} />
              </div>
              <div>
                <h4 className="text-[12px] font-bold tracking-wider mb-1" style={{ color: '#1a1a2e' }}>
                  {item.title}
                </h4>
                <p className="text-[11px] leading-tight" style={{ color: '#6B7280' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. EXPLORE OUR COLLECTIONS
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            EXPLORE OUR COLLECTIONS
          </h2>
          <Link
            to="/products"
            className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-2"
            style={{ color: '#1B2B3F' }}
          >
            VIEW ALL COLLECTIONS <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="relative group overflow-hidden rounded-xl bg-gray-100 block aspect-[4/5]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <h3 className="text-white text-[12px] font-bold tracking-wider uppercase text-center w-full leading-tight">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. ACTION PANELS (e-Auction & Bulk)
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[340px]">

          {/* Card 1: Live e-Auction */}
          <div className="lg:col-span-4 rounded-2xl p-8 flex flex-col justify-between text-left text-white relative overflow-hidden"
            style={{ background: '#1B2B3F' }}
          >
            <div className="z-10">
              <h3 className="text-[22px] font-medium mb-6 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                LIVE E-AUCTION
              </h3>
              <p className="text-[13px] opacity-80 leading-relaxed max-w-[200px] mb-8">
                Bid on exclusive textiles at unbeatable value.
              </p>
              <Link
                to="/e-auction"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1B2B3F] text-[11px] font-bold uppercase tracking-wider transition-all"
                style={{ borderRadius: 4 }}
              >
                JOIN LIVE AUCTIONS <ArrowRight size={14} />
              </Link>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=80"
              alt="Gavel"
              className="absolute right-[-20px] bottom-0 w-[240px] h-[240px] object-contain opacity-90 z-0"
              style={{ mixBlendMode: 'luminosity' }}
            />
          </div>

          {/* Card 2: Ongoing Auctions */}
          <div className="lg:col-span-4 rounded-2xl p-8 flex flex-col text-center border relative overflow-hidden"
            style={{ background: '#738290', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <h3 className="text-[14px] font-bold mb-8 uppercase tracking-wider text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              ONGOING AUCTIONS
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-8">
               <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 mb-2">
                   <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&auto=format&fit=crop&q=60" className="w-full h-full object-cover"/>
                 </div>
                 <div className="bg-[#1B2B3F] text-white text-[9px] px-2 py-0.5 rounded-sm font-mono mb-1">02h : 45m : 30s</div>
                 <div className="text-white text-[10px] font-medium">Banarasi Silk</div>
               </div>
               <ArrowRight size={14} color="rgba(255,255,255,0.6)" className="mt-[-20px]"/>
               
               <div className="flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 mb-2 transform -translate-y-2">
                   <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=100&auto=format&fit=crop&q=60" className="w-full h-full object-cover"/>
                 </div>
                 <div className="bg-[#1B2B3F] text-white text-[9px] px-2 py-0.5 rounded-sm font-mono mb-1">01h : 30m : 20s</div>
                 <div className="text-white text-[10px] font-medium">Jacquard Fabric</div>
               </div>
               <ArrowRight size={14} color="rgba(255,255,255,0.6)" className="mt-[-20px]"/>

               <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 mb-2">
                   <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=100&auto=format&fit=crop&q=60" className="w-full h-full object-cover"/>
                 </div>
                 <div className="bg-[#1B2B3F] text-white text-[9px] px-2 py-0.5 rounded-sm font-mono mb-1">03h : 15m : 40s</div>
                 <div className="text-white text-[10px] font-medium">Pure Cotton</div>
               </div>
            </div>

            <div className="mt-auto">
              <Link
                to="/e-auction"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider transition-all hover:bg-white/30"
                style={{ borderRadius: 4 }}
              >
                VIEW ALL AUCTIONS <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 3: Bulk Orders */}
          <div className="lg:col-span-4 rounded-2xl p-8 flex flex-col justify-between text-left text-white relative overflow-hidden"
            style={{ background: '#8A9AAB' }}
          >
            <div className="z-10">
              <h3 className="text-[22px] font-medium mb-6 uppercase tracking-wider leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                BULK ORDERS<br/>MADE EASY
              </h3>
              <p className="text-[13px] opacity-90 leading-relaxed max-w-[200px] mb-8">
                Special pricing for bulk buyers & retailers.
              </p>
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A6478] text-white text-[11px] font-bold uppercase tracking-wider transition-all hover:bg-[#3d5364]"
                style={{ borderRadius: 4 }}
              >
                ENQUIRE NOW <ArrowRight size={14} />
              </Link>
            </div>

            <img
              src="https://images.unsplash.com/photo-1606744824163-985d376605aa?w=300&auto=format&fit=crop&q=80"
              alt="Fabrics"
              className="absolute right-[-20px] bottom-[-20px] w-[200px] h-[200px] object-cover opacity-90 z-0 rounded-tl-[60px]"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. PROCESS STEPS
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-8 mb-16 overflow-x-auto">
         <div className="flex items-center justify-between min-w-[900px] py-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                 <div className="flex flex-col items-center gap-3">
                   <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-md group">
                     <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform group-hover:scale-110"/>
                     <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-[#526B80] text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white">
                       {step.id}
                     </div>
                   </div>
                   <span className="text-[10px] font-bold tracking-wider text-[#1a1a2e] uppercase mt-2">{step.title}</span>
                 </div>
                 {idx < processSteps.length - 1 && (
                   <ArrowRight size={16} color="#A3B1C6" className="transform -translate-y-4" />
                 )}
              </div>
            ))}
         </div>
      </section>

      {/* ═══════════════════════════════════════
          6. BOTTOM GRID (Journal, Media, Clients)
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-8 mb-16">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Journal */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#1a1a2e]">FROM OUR JOURNAL</h3>
                <Link to="/blog" className="text-[10px] font-bold uppercase flex items-center gap-1 text-[#1B2B3F]">VIEW ALL <ArrowRight size={12}/></Link>
              </div>
              <div className="flex flex-col gap-4">
                 {[
                   { date: "20 MAY 2024", title: "The Art of Handloom – A Timeless Tradition", img: "https://images.unsplash.com/photo-1605282711667-175f0a005086?w=100&auto=format&fit=crop&q=60" },
                   { date: "15 MAY 2024", title: "Choosing the Right Fabric for Every Season", img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=100&auto=format&fit=crop&q=60" },
                   { date: "10 MAY 2024", title: "Sustainable Textiles – A Better Tomorrow", img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=100&auto=format&fit=crop&q=60" }
                 ].map((post, i) => (
                   <Link to="/blog" key={i} className="flex gap-4 items-center group">
                     <div className="w-16 h-12 rounded-md overflow-hidden shrink-0">
                       <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                     </div>
                     <div>
                       <div className="text-[9px] text-[#6B7280] uppercase tracking-wider mb-0.5">{post.date}</div>
                       <div className="text-[12px] font-bold text-[#1a1a2e] leading-tight group-hover:text-[#C9A455] transition-colors">{post.title}</div>
                     </div>
                   </Link>
                 ))}
              </div>
            </div>

            {/* Media Gallery */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#1a1a2e]">MEDIA GALLERY</h3>
                <Link to="/gallery" className="text-[10px] font-bold uppercase flex items-center gap-1 text-[#1B2B3F]">VIEW GALLERY <ArrowRight size={12}/></Link>
              </div>
              <div className="grid grid-cols-3 gap-2 relative">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&auto=format&fit=crop&q=60" className="w-full h-20 object-cover rounded-sm col-span-2" />
                <img src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?w=200&auto=format&fit=crop&q=60" className="w-full h-20 object-cover rounded-sm" />
                <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=200&auto=format&fit=crop&q=60" className="w-full h-20 object-cover rounded-sm" />
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&auto=format&fit=crop&q=60" className="w-full h-20 object-cover rounded-sm col-span-2" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-10 h-10 bg-[#1B2B3F]/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                </div>
              </div>
            </div>

            {/* What Our Clients Say */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#1a1a2e] mb-6">WHAT OUR CLIENTS SAY</h3>
              <div className="bg-[#F0F2F5] p-6 rounded-xl relative">
                 <div className="text-[40px] text-[#1B2B3F] font-serif absolute top-4 left-4 opacity-20">"</div>
                 <p className="text-[13px] text-[#1a1a2e] font-medium leading-relaxed relative z-10 pl-6 mb-6">
                   {testimonials[0].text}
                 </p>
                 <div className="pl-6 border-l-2 border-[#C9A455]">
                   <div className="text-[12px] font-bold text-[#1a1a2e]">{testimonials[0].author}</div>
                   <div className="text-[10px] text-[#6B7280] uppercase tracking-wider">{testimonials[0].role}</div>
                 </div>
                 
                 <div className="flex gap-2 justify-center mt-6">
                    <span className="w-1.5 h-1.5 bg-[#1B2B3F] rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-[#C9A455] rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-[#D1D5DB] rounded-full"></span>
                 </div>
              </div>
            </div>

         </div>
      </section>

    </div>
  );
}
