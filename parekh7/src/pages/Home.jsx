import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, Gavel, MessageSquare, Users, Clipboard, Link as LinkIcon } from 'lucide-react';

const heroSlides = [
    {
    image: '/images/hero3.png',
    tag: '1200+ Retail Outlets',
    heading: 'Experience\nThe Mall of\nTextiles',
    sub: "Step into India's grandest textile destination spanning 10M+ sq ft of retail space.",
    cta: 'About Us',
    ctaPath: '/about',
  },
  {
    image: '/images/hero1.png',
    tag: 'New Season Collection',
    heading: 'Tradition\nWoven with\nElegance',
    sub: "India's most trusted textile retail mall offering unmatched quality, variety and value.",
    cta: 'Explore Collections',
    ctaPath: '/products',
  },
  {
    image: '/images/hero2.png',
    tag: 'Premium Fabrics',
    heading: 'Fabrics That\nInspire\nGenerations',
    sub: 'Over 25,000 premium products curated for retailers, designers and fabric lovers.',
    cta: 'View Catalogue',
    ctaPath: '/products',
  },

];

const shopCategories = [
  { name: 'Sarees', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/saree.png' },
  { name: 'Leggings', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/trousers.png' },
  { name: 'Kurtis', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/shirt.png' },
  { name: 'Dress Suits', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/womens-suit.png' },
  { name: 'Bedsheets & Linen', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/bed.png' },
  { name: 'Hosiery Items', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/socks.png' },
  { name: 'Suiting', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/suit.png' },
  { name: 'Shirting', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/shirt.png' },
  { name: 'Formal & Ethnic Wear for Women', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/dress-front-view.png' },
  { name: 'Formal & Ethnic Wear for Men', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/polo-shirt.png' },
  { name: 'Formal & Ethnic Wear for Children', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/romper.png' },
  { name: 'Home Upholstery & Furnishing', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/sofa.png' },
];

const featuredCollections = [
  { name: 'NEW ARRIVALS', desc: 'Fresh Styles', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&auto=format&fit=crop&q=60' },
  { name: 'WEDDING EDIT', desc: 'Timeless Elegance', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
  { name: 'EVERYDAY ESSENTIALS', desc: 'Comfort & Style', image: '/images/about.png' },
  { name: 'FESTIVE COLLECTION', desc: 'Celebrate in Style', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800' },
];

const quickLinks = [
  { name: 'E-Quotation', icon: FileText, path: '/e-quotation', desc: 'Get instant price quotes' },
  { name: 'E-Auction', icon: Gavel, path: '/e-auction', desc: 'Participate & Win' },
  { name: 'Trade Enquiry', icon: MessageSquare, path: '/trade-enquiry', desc: 'Connect with our experts' },
  { name: 'Retail Management', icon: Users, path: '/retail-management', desc: 'Manage your retail' },
  { name: 'Trade Circular', icon: LinkIcon, path: '/trade-circular', desc: 'Latest circulars' },
  { name: 'Notice Board', icon: Clipboard, path: '/notice-board', desc: 'Important notices' },
];

const stats = [
  { value: '1200+', label: 'Retail Outlets' },
  { value: '25,000+', label: 'Products' },
  { value: '35+', label: 'Years of Trust' },
  { value: '50,000+', label: 'Happy Retailers' },
];

const blogPosts = [
  { title: 'The Future of Sustainable Weaving', date: 'June 10, 2026', image: 'https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60' },
  { title: 'Elegance in Threads: The Fall Collection', date: 'May 28, 2026', image: 'https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60' },
  { title: 'Behind the Scenes: Crafting the Perfect Saree', date: 'May 15, 2026', image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [busy, setBusy] = useState(false);
  const timerRef = useRef(null);
  const n = heroSlides.length;

  // Always slide right-to-left — incoming always from right, outgoing always to left
  const advance = (nextIdx) => {
    if (busy || nextIdx === current) return;
    setLeaving(current);
    setBusy(true);
    setCurrent(nextIdx);
    setTimeout(() => { setLeaving(null); setBusy(false); }, 750);
  };

  const next = () => advance((current + 1) % n);
  const prev = () => advance((current - 1 + n) % n);

  useEffect(() => {
    if (busy) return;
    timerRef.current = setInterval(() => {
      advance((current + 1) % n);
    }, 2000);
    return () => clearInterval(timerRef.current);
  }, [current, busy]);

  const slide = heroSlides[current];

  return (
    <div className="w-full" style={{ background: '#FDF6EC', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO SLIDER ── */}
      <section className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] overflow-hidden">
        {heroSlides.map((s, i) => {
          const isActive = i === current;
          const isLeaving = i === leaving;

          // Active: sits at 0 (just entered from right)
          // Leaving: exits to left (-100%)
          // Others: waiting off-screen to the right (100%)
          let translateX = '100%';
          if (isActive) translateX = '0%';
          if (isLeaving) translateX = '-100%';

          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                transform: `translateX(${translateX})`,
                transition: (isActive || isLeaving) ? 'transform 0.75s cubic-bezier(0.45,0,0.15,1)' : 'none',
                zIndex: isActive ? 10 : isLeaving ? 9 : 0,
              }}
            >
              {/* Full cover image — no cropping, no black gaps */}
              <img
                src={s.image}
                alt={s.heading}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Subtle dark scrim only on left half for text legibility */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(10,3,1,0.6) 0%, rgba(10,3,1,0.3) 35%, transparent 65%)' }}
              />
            </div>
          );
        })}

        {/* Gold top border */}

        {/* Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 flex items-center">
          <div className="max-w-xl ml-4 sm:ml-12 -mt-12">
            {/* Heading */}
            <h1
              className="font-bold leading-[1.08] mb-6 text-white"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                whiteSpace: 'pre-line',
              }}
            >
              {slide.heading.split('\n').map((line, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-[#C9A227]' : ''}`}>{line}</span>
              ))}
            </h1>

            {/* Sub */}
            <p className="text-[#D4BDB6] text-[15px] leading-[1.7] mb-8 max-w-sm">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.ctaPath}
                className="btn-primary px-7 py-3 rounded-full text-[12px] font-bold tracking-[0.08em] uppercase shadow-lg"
              >
                {slide.cta} →
              </Link>
              <Link
                to="/trade-enquiry"
                className="px-7 py-3 rounded-full text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(201,162,39,0.5)', color: '#C9A227' }}
              >
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => advance(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-[#C9A227]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/10"
          style={{ background: 'rgba(10,3,1,0.35)', border: '1px solid rgba(201,162,39,0.35)' }}
        >
          <ChevronLeft size={20} color="#C9A227" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/10"
          style={{ background: 'rgba(10,3,1,0.35)', border: '1px solid rgba(201,162,39,0.35)' }}
        >
          <ChevronRight size={20} color="#C9A227" />
        </button>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#C9A227' }}>Browse</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>Shop By Category</h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(201,162,39,0.4), transparent)' }} />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {shopCategories.map((cat, idx) => (
            <Link
              to="/products"
              key={idx}
              className="category-card group flex flex-col items-center p-4 sm:p-5 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: '#FFFFFF', border: '1px solid #EAEAEA', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}
            >
              <img 
                src={cat.iconUrl} 
                alt={cat.name}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-3 transition-transform duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <span className="text-[10px] sm:text-[11px] font-bold leading-tight" style={{ color: '#2C1810' }}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED COLLECTIONS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#C9A227' }}>Curated</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>Featured Collections</h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(201,162,39,0.4), transparent)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCollections.map((col, idx) => (
            <Link
              to="/products"
              key={idx}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,10,5,0.9) 0%, rgba(26,10,5,0.3) 55%, transparent 100%)' }} />
              {/* Gold top accent */}
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: '#C9A227' }}>{col.name}</p>
                <p className="text-white/80 text-sm mb-3">{col.desc}</p>
                <span className="flex items-center text-white text-xs font-bold tracking-wide gap-1.5 group-hover:gap-3 transition-all duration-200">
                  Shop Now <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="relative overflow-hidden py-14" style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227, #9B2519)' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className="font-bold text-4xl sm:text-5xl mb-2 leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A227' }}
                >
                  {s.value}
                </span>
                <span className="text-[12px] font-medium tracking-wide uppercase" style={{ color: '#A68B7C' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#C9A227' }}>Services</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>Quick Access</h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(201,162,39,0.4), transparent)' }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((ql, i) => (
            <Link
              to={ql.path}
              key={i}
              className="group flex flex-col items-center p-4 sm:p-5 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.15)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #FFF0EC, #FFF8EC)', border: '1.5px solid rgba(184,50,39,0.15)' }}>
                <ql.icon size={22} color="#B83227" />
              </div>
              <p className="text-[12px] font-bold mb-0.5" style={{ color: '#2C1810' }}>{ql.name}</p>
              <p className="text-[10px]" style={{ color: '#A68B7C' }}>{ql.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#C9A227' }}>Insights</p>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>Latest From Our Blog</h2>
            </div>
          </div>
          <Link to="/blog" className="flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-colors hover:opacity-80" style={{ color: '#B83227' }}>
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, idx) => (
            <Link to="/blog" key={idx} className="group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              style={{ background: '#FFFBF5', border: '1px solid rgba(201,162,39,0.12)' }}>
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', color: '#C9A227' }}>
                  Blog
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[11px] font-medium mb-2" style={{ color: '#A68B7C' }}>{post.date}</p>
                <h3 className="font-bold text-xl mb-3 group-hover:opacity-80 transition-opacity leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                  {post.title}
                </h3>
                <div className="mt-auto pt-3 border-t" style={{ borderColor: 'rgba(201,162,39,0.1)' }}>
                  <span className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide" style={{ color: '#B83227' }}>
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
