import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: 'Premium Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?w=600&auto=format&fit=crop&q=60' },
  { id: 105, name: 'Embroidered Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610189013233-0498b89d4fb9?w=600&auto=format&fit=crop&q=60' },
  { id: 102, name: 'Designer Kurti Set', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60' },
  { id: 106, name: 'Printed Cotton Kurti', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=60' },
  { id: 103, name: 'Luxury Cotton Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
  { id: 104, name: 'Classic Men Suit Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=60' },
];

const C = {
  primary: '#5F6F5E',
  primaryDark: '#3B4A32',
  accent: '#C5A880',
  bg: '#F8F5EF',
  border: '#E2D9CC',
  textDark: '#2A3325',
  textMid: '#3D3D30',
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>
            Our Collections
          </h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-white" style={{ border: `1px solid ${C.border}`, color: C.primary }}>
            <ShoppingBag size={14} className="shrink-0" />
            <span className="font-bold text-xs">{filteredProducts.length} Products Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Desktop Left Sidebar */}
          <aside className="hidden lg:block lg:w-1/4 shrink-0 text-left">
            <div className="bg-white rounded-2xl p-6 sticky top-24 shadow-sm" style={{ border: `1px solid ${C.border}` }}>
              <h3 className="text-xl font-black mb-5 pb-3 uppercase tracking-wider" style={{ color: C.textDark, borderBottom: `1px solid ${C.border}` }}>
                Categories
              </h3>
              <ul className="space-y-1 max-h-[350px] overflow-y-auto pr-1">
                {['All', ...categories].map(cat => {
                  const isActive = activeCategory === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-[12.5px] font-bold transition-all duration-150 flex items-center justify-between group"
                        style={{
                          background: isActive ? C.primary : 'transparent',
                          color: isActive ? '#fff' : C.textMid,
                        }}
                        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = `${C.primary}10`; e.currentTarget.style.color = C.primary; } }}
                        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.textMid; } }}
                      >
                        <span className="truncate">{cat}</span>
                        <ChevronRight size={13} className={`transition-transform duration-200 shrink-0 ${isActive ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow w-full">

            {/* Mobile Categories — horizontal scroll */}
            <div className="lg:hidden flex overflow-x-auto gap-2 pb-5 mb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {['All', ...categories].map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className="px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-all duration-200 shrink-0"
                    style={isActive
                      ? { background: C.primary, color: '#fff', boxShadow: '0 4px 12px rgba(95,111,94,0.25)' }
                      : { background: '#FFFFFF', color: C.textMid, border: `1.5px solid ${C.border}` }
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                    style={{ border: `1.5px solid ${C.border}` }}
                  >
                    <div className="h-60 w-full relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'rgba(42,51,37,0.2)' }} />
                    </div>
                    <div className="p-4 text-center" style={{ borderTop: `1px solid ${C.border}` }}>
                      <p className="text-[10px] uppercase tracking-widest font-black mb-1.5" style={{ color: C.accent }}>
                        {product.category}
                      </p>
                      <h3 className="font-black text-base" style={{ color: C.textDark }}>
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-3xl bg-white" style={{ border: `1.5px solid ${C.border}` }}>
                <p className="text-lg font-black" style={{ color: '#4B5563' }}>
                  Products for this category will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
