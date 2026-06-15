import { Link } from 'react-router-dom';
import { ArrowRight, Box, Store, TrendingUp, HeartHandshake, FileText, Gavel, FileOutput, Users } from 'lucide-react';

const categories = [
  { name: 'SAREES', desc: 'Timeless Drape', image: 'https://plus.unsplash.com/premium_photo-1729038877169-1fed6a3f0c68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8', path: '/products?category=Sarees' },
  { name: 'LEGGINGS', desc: 'Comfort & Style', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80', path: '/products?category=Leggings' },
  { name: 'KURTIS', desc: 'Everyday Elegance', image: 'https://images.unsplash.com/photo-1752653425039-cf1ff22d61bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D' },
  { name: 'DRESS SUITS', desc: 'Classic Wear', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80', path: '/products?category=Dress+Suits' },
  { name: 'BEDSHEETS & LINEN', desc: 'Premium Home', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80', path: '/products?category=Bedsheets+%26+Linen' },
];

const COLORS = {
  primary: '#8B5A2B', 
  primaryDark: '#5A3A1F',
  primaryDarker: '#3E2B21',
  accent: '#A67853',
  bg: '#FAF6F0',
  cardBg: '#FFFFFF',
  border: '#E3D9D1',
  textDark: '#3E2B21',
  textMid: '#6B5244',
};

export default function Home() {
  return (
    <div className="w-full pb-10" style={{ background: COLORS.bg, fontFamily: "'Outfit', sans-serif" }}>
      
      {/* ── HERO SECTION ── */}
      <section className="relative w-full max-w-[90rem] mx-auto overflow-hidden bg-[#FAF6F0] flex flex-col md:flex-row items-stretch">
        
        {/* Left Decorative Floral Element */}
        <div className="absolute left-0 top-1/4 bottom-0 w-[120px] opacity-40 pointer-events-none hidden xl:block">
          <svg viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#A67853]">
            <path d="M20 400C20 300 40 250 40 150C40 50 10 0 10 0" stroke="currentColor" strokeWidth="1.5" />
            <path d="M40 250C60 220 70 200 80 180" stroke="currentColor" strokeWidth="1" />
            <circle cx="80" cy="180" r="3" fill="currentColor" />
            <path d="M35 180C20 160 15 150 10 140" stroke="currentColor" strokeWidth="1" />
            <circle cx="10" cy="140" r="2" fill="currentColor" />
            <path d="M30 320C50 300 60 280 65 260" stroke="currentColor" strokeWidth="1" />
            <circle cx="65" cy="260" r="2.5" fill="currentColor" />
          </svg>
        </div>

        {/* Left Text */}
        <div className="w-full md:w-5/12 flex flex-col justify-center z-10 relative px-6 lg:px-12 py-10 md:py-14">
          <p className="text-[15px] mb-3 font-medium" style={{ color: COLORS.accent }}>Tradition Woven</p>
          <h1 className="text-5xl lg:text-[64px] font-semibold leading-[1.1] mb-5 serif-title tracking-tight" style={{ color: COLORS.textDark }}>
            Timeless Textiles<br />for Every Generation
          </h1>
          
          {/* Decorative Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="h-[1px] w-12" style={{ background: COLORS.accent }}></div>
            <div className="rotate-45 w-2 h-2" style={{ border: `1px solid ${COLORS.accent}` }}></div>
            <div className="h-[1px] w-12" style={{ background: COLORS.accent }}></div>
          </div>

          <p className="text-[14px] mb-8 max-w-[320px] leading-relaxed font-medium" style={{ color: COLORS.textMid }}>
            Experience the finest range of fabrics and home textiles crafted with care and delivering elegance.
          </p>
          <div>
            <Link to="/products" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg text-[13px] font-bold tracking-widest text-white transition-all hover:bg-[#3E2B21] hover:-translate-y-0.5 shadow-sm" style={{ background: COLORS.primary }}>
              DISCOVER COLLECTIONS <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right Images (Diagonal Split with Clip-path) */}
        <div className="w-full md:w-[58%] relative h-[320px] md:h-auto md:absolute md:top-0 md:right-0 md:bottom-0 overflow-hidden">
          {/* Image 1 */}
          <div className="absolute inset-0" style={{ clipPath: 'polygon(10% 0, 39.5% 0, 19.5% 100%, -10% 100%)' }}>
            <img src="/images/hero_fabric_trees.png" alt="Fabric Trees" className="w-full h-full object-cover scale-110" />
          </div>
          {/* Image 2 */}
          <div className="absolute inset-0" style={{ clipPath: 'polygon(40.5% 0, 70% 0, 50% 100%, 20.5% 100%)' }}>
            <img src="/images/hero_fabric_stack.png" alt="Fabric Stack" className="w-full h-full object-cover scale-110" />
          </div>
          {/* Image 3 */}
          <div className="absolute inset-0" style={{ clipPath: 'polygon(71% 0, 110% 0, 90% 100%, 51% 100%)' }}>
            <img src="/images/hero_fabric_draped.png" alt="Fabric Draped" className="w-full h-full object-cover scale-110" />
          </div>
        </div>
      </section>

      {/* ── EXPLORE OUR CATEGORIES ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-16" style={{ background: COLORS.accent }} />
          <h2 className="text-xl font-bold tracking-widest uppercase serif-title" style={{ color: COLORS.textDark }}>
            EXPLORE OUR CATEGORIES
          </h2>
          <div className="h-px w-16" style={{ background: COLORS.accent }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border" style={{ borderColor: COLORS.border }}>
              <div className="h-56 overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-sm tracking-wider mb-1" style={{ color: COLORS.textDark }}>{cat.name}</h3>
                <p className="text-xs" style={{ color: COLORS.textMid }}>{cat.desc}</p>
              </div>
            </Link>
          ))}

          {/* Wholesale Box */}
          <Link to="/contact" className="group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all justify-center items-center p-6 text-center" style={{ background: COLORS.accent, color: '#fff' }}>
            <Box size={40} className="mb-4 text-white opacity-90" />
            <h3 className="font-bold text-lg tracking-wider mb-2">WHOLESALE</h3>
            <p className="text-sm opacity-90 mb-6">Best rates for bulk orders</p>
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#A67853] transition-colors">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </section>

      {/* ── RETAIL MANAGEMENT ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 py-8">
        <div className="rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row" style={{ minHeight: '350px' }}>
          {/* Left Dark Side */}
          <div className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center" style={{ background: COLORS.primaryDarker, color: '#fff' }}>
            <p className="text-sm tracking-wider mb-2" style={{ color: COLORS.accent }}>For Our Valued Partners</p>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 serif-title">Retail Management</h2>
            <p className="text-base opacity-90 mb-10 leading-relaxed max-w-sm">
              Empowering retailers with the best products, support & service.
            </p>
            <div>
              <Link to="/retail-management" className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-md text-sm font-bold tracking-wider transition-colors hover:bg-gray-100" style={{ color: COLORS.primaryDarker }}>
                KNOW MORE <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Light Side */}
          <div className="lg:w-3/5 relative flex flex-col sm:flex-row" style={{ background: '#F5ECE3' }}>
            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center gap-8 z-10">
              <div className="flex items-start gap-4">
                <Store size={28} style={{ color: COLORS.primaryDarker }} />
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: COLORS.textDark }}>Retail Support</h4>
                  <p className="text-sm" style={{ color: COLORS.textMid }}>End to end assistance for your business</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp size={28} style={{ color: COLORS.primaryDarker }} />
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: COLORS.textDark }}>Business Growth</h4>
                  <p className="text-sm" style={{ color: COLORS.textMid }}>Solutions that help you grow</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HeartHandshake size={28} style={{ color: COLORS.primaryDarker }} />
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: COLORS.textDark }}>Long Term Relationship</h4>
                  <p className="text-sm" style={{ color: COLORS.textMid }}>Building trust, delivering value</p>
                </div>
              </div>
            </div>
            
            {/* Image on Right */}
            <div className="hidden sm:block w-[300px] h-full absolute right-0 top-0 bottom-0 z-0 opacity-80" style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}>
              <img src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&q=80" alt="Stacked Fabrics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR TRADE SERVICES ── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-16" style={{ background: COLORS.accent }} />
          <h2 className="text-xl font-bold tracking-widest uppercase serif-title" style={{ color: COLORS.textDark }}>
            OUR TRADE SERVICES
          </h2>
          <div className="h-px w-16" style={{ background: COLORS.accent }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/e-quotation" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <FileText size={32} style={{ color: COLORS.primaryDarker }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-bold text-sm tracking-wider mb-1" style={{ color: COLORS.textDark }}>e-QUOTATION</h4>
              <p className="text-xs" style={{ color: COLORS.textMid }}>Get instant quotes for your requirements</p>
            </div>
          </Link>
          <Link to="/e-auction" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <Gavel size={32} style={{ color: COLORS.primaryDarker }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-bold text-sm tracking-wider mb-1" style={{ color: COLORS.textDark }}>e-AUCTION</h4>
              <p className="text-xs" style={{ color: COLORS.textMid }}>Transparent & fair auction process</p>
            </div>
          </Link>
          <Link to="/trade-circular" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <FileOutput size={32} style={{ color: COLORS.primaryDarker }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-bold text-sm tracking-wider mb-1" style={{ color: COLORS.textDark }}>TRADE CIRCULAR</h4>
              <p className="text-xs" style={{ color: COLORS.textMid }}>Stay updated with latest circulars</p>
            </div>
          </Link>
          <Link to="/trade-enquiry" className="bg-white p-6 rounded-xl border flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group" style={{ borderColor: COLORS.border }}>
            <Users size={32} style={{ color: COLORS.primaryDarker }} className="group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-bold text-sm tracking-wider mb-1" style={{ color: COLORS.textDark }}>MORE SERVICES</h4>
              <p className="text-xs" style={{ color: COLORS.textMid }}>Explore more services designed for you</p>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
