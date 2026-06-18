import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const C = {
  primary: '#043B5C',
  accent: '#C29B62',
  bg: '#FAFAFA',
  sand: '#F8F5F0',
  border: '#EAEAEA',
  textFaint: '#6B7280',
};

const products = [
  { name: "Banarasi Silk Saree", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80" },
  { name: "Embroidered Anarkali Suit", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&auto=format&fit=crop&q=80" },
  { name: "Designer Lehenga Choli", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80" },
  { name: "Pure Cotton Fabric", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
  { name: "Luxury Bedsheet Set", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80" },
  { name: "Tissue Silk Saree", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=400&auto=format&fit=crop&q=80" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }} className="w-full overflow-x-hidden pb-0">

      {/* ═══════════════════════════════════════
          1. HERO SECTION (Full Background Image)
      ═══════════════════════════════════════ */}
      <section className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex items-center pt-20 lg:pt-0 overflow-hidden">
        {/* Full Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/slider/image.png')` }}
        >
        </div>

        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 w-full relative z-10 flex flex-col justify-center h-full pt-16 lg:pt-0">
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            
            <h1 className="text-[42px] lg:text-[60px] font-light leading-[1.2] text-white mb-6 tracking-wide drop-shadow-md" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Timeless Textiles, <br/>
              <span className="text-[#C29B62]">Made for Moments<br/>That Matter</span>
            </h1>
            
            <p className="text-[16px] text-white/90 mb-10 max-w-md leading-relaxed font-light tracking-widest drop-shadow-sm uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              From everyday comfort to celebration of life — we weave beauty in every thread.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C29B62] text-white text-[13px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#043B5C] rounded-full shadow-lg"
              >
                EXPLORE COLLECTION <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. FRESH ARRIVALS & BULK SPLIT
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 py-24 mb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left: Fresh Arrivals (Background Image) */}
          <div className="w-full lg:w-1/2 rounded-[24px] p-10 lg:p-12 flex flex-col relative overflow-hidden min-h-[340px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/image.png')` }}
            >
              {/* Fixed Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center h-full">
              <div className="text-white/80 text-[11px] font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                NEW SEASON <div className="w-6 h-[2px] bg-[#C29B62]"></div>
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-bold text-white leading-tight mb-4 drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                Fresh Arrivals<br/>You'll Love
              </h2>
              <p className="text-white/90 text-[14px] mb-8 max-w-[280px]">
                Discover the latest collection in vibrant colors and prints.
              </p>
              <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#043B5C] text-[11px] font-bold tracking-widest uppercase rounded-[8px] hover:bg-[#C29B62] hover:text-white transition-colors self-start shadow-md">
                SHOP NEW ARRIVALS <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Bulk & Custom */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Top: Bulk Orders (Background Image) */}
            <div className="rounded-[24px] p-8 lg:p-10 flex flex-col relative overflow-hidden flex-1 min-h-[200px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/image copy.png')` }}
              >
                {/* Fixed Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="text-[#C29B62] text-[11px] font-bold tracking-widest uppercase mb-2">BULK ORDERS</div>
                <h3 className="text-[26px] lg:text-[30px] font-bold text-white leading-tight mb-2 drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Best Prices for Retailers
                </h3>
                <p className="text-white/90 text-[13px] mb-6 max-w-[260px]">
                  Special offers on bulk purchases.
                </p>
                <Link to="/trade-enquiry" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white hover:text-[#C29B62] transition-colors">
                  ENQUIRE NOW <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Bottom: Custom Solutions (Background Image) */}
            <div className="rounded-[24px] p-8 lg:p-10 flex flex-col relative overflow-hidden flex-1 min-h-[160px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/image copy 2.png')` }}
              >
                {/* Fixed Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="text-[#C29B62] text-[11px] font-bold tracking-widest uppercase mb-2">CUSTOM SOLUTIONS</div>
                <h3 className="text-[26px] lg:text-[30px] font-bold text-white leading-tight mb-2 drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Tailored Textiles
                </h3>
                <p className="text-white/90 text-[13px] mb-6 max-w-[260px]">
                  We create fabrics that match your vision.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white hover:text-[#C29B62] transition-colors">
                  GET IN TOUCH <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. OUR HANDPICKED COLLECTION
      ═══════════════════════════════════════ */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-14 mb-24">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#EAEAEA]">
          <div className="flex items-center gap-4">
            <h2 className="text-[28px] font-bold text-[#043B5C]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Handpicked Collection</h2>
            <div className="w-12 h-[2px] bg-[#C29B62] hidden sm:block"></div>
          </div>
          <Link to="/products" className="text-[11px] font-bold text-[#043B5C] uppercase tracking-widest flex items-center gap-2 hover:text-[#C29B62] transition-colors">
            VIEW ALL COLLECTIONS <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item, idx) => (
            <div key={idx} className="w-full group cursor-pointer">
              <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden relative bg-[#F8F5F0]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#043B5C]/90 via-[#043B5C]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content inside card */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-[18px] font-bold text-white group-hover:text-[#C29B62] transition-colors drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
