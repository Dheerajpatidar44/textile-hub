import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter } from 'lucide-react';

const C = {
  primary: '#2C1E16',
  primaryDark: '#1A120D',
  primaryLight: '#4A3326',
  accent: '#8A4A51',
  accentLight: '#A5606A',
  bg: '#F9F5F0',
  sand: '#F5EED8',
  border: '#E8DCC8',
  soil: '#2d1a13',
  stone: '#6B7280',
  cream: '#FDFBF7',
};

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: "Classic Banarasi Silk Saree", category: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60" },
  { id: 102, name: "Super-Stretch Cotton Leggings", category: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60" },
  { id: 103, name: "Handcrafted Chikankari Kurti", category: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60" },
  { id: 104, name: "Anarkali Embroidered Dress Suit", category: "Dress Suits", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60" },
  { id: 105, name: "Luxurious Egyptian Cotton Bedsheet", category: "Bedsheets & Linen", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60" },
  { id: 106, name: "Soft Premium Cotton Hosiery Set", category: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60" },
  { id: 107, name: "Italian Wool Blend Suiting Fabric", category: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60" },
  { id: 108, name: "Fine Egyptian Giza Cotton Shirting", category: "Shirting", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60" },
  { id: 109, name: "Designer Georgette Lehenga Choli", category: "Formal & Ethnic Wear for Women", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60" },
  { id: 110, name: "Premium Silk Sherwani Set", category: "Formal & Ethnic Wear for Men", image: "https://images.unsplash.com/photo-1724856604249-ca73680262e8?w=600&auto=format&fit=crop&q=60" },
  { id: 111, name: "Kid's Festive Cotton Dhoti Kurta", category: "Formal & Ethnic Wear for Children", image: "https://images.unsplash.com/photo-1741992556912-3b2d62461e75?w=600&auto=format&fit=crop&q=60" },
  { id: 112, name: "Premium Velvet Upholstery Fabric", category: "Home Upholstery & Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") setSearchParams({});
    else setSearchParams({ category: cat });
  };

  const filteredProducts = allProducts.filter(p => {
    return activeCategory === "All" || p.category === activeCategory;
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[70px] pb-20">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">

        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 600, color: C.primary, margin: '0 0 12px', letterSpacing: '0.02em' }}>
            Collections
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, margin: '0 auto' }} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Sidebar */}
          <div className="w-full md:w-[280px] flex-shrink-0 sticky top-[100px]  p-6" style={{ background: 'white', border: `1px solid ${C.border}` }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: C.primary, marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${C.border}` }}>
              Categories
            </h3>
            <div className="flex flex-col gap-1.5 max-h-[65vh] overflow-y-auto pr-2 custom-sidebar-scrollbar" style={{ scrollbarWidth: 'thin' }}>
              {["All", ...categories].map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className="text-left w-full px-4 py-3  text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-between"
                    style={{
                      background: active ? 'rgba(27, 43, 63, 0.06)' : 'transparent',
                      color: active ? C.primary : C.stone,
                      border: 'none',
                    }}
                    onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(27, 43, 63, 0.03)'; e.currentTarget.style.color = C.primary; }}}
                    onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; }}}
                  >
                    <span>{cat}</span>
                    {active && <div style={{ width: 6, height: 6, background: C.accent }} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: C.border }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: C.soil, margin: 0 }}>
                {activeCategory === "All" ? "All Products" : activeCategory}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'white', border: `1px solid ${C.border}` }}>
                <ShoppingBag size={14} color={C.primary} />
                <span style={{ fontSize: 13, color: C.stone, fontWeight: 500 }}>{filteredProducts.length} Items</span>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.04, 0.3) }}
                    className="text-left product-card group"
                    style={{ overflow: 'hidden',
                      background: 'white', border: `1px solid ${C.border}`,
                    }}
                  >
                    <div style={{ height: 320, overflow: 'hidden', position: 'relative' }}>
                      <img src={product.image} alt={product.name} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease', display: 'block' }}
                        className="group-hover:scale-110"
                      />
                    </div>
                    <div style={{ padding: '20px', borderTop: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.accent, fontWeight: 600, display: 'block', marginBottom: 8 }}>
                        {product.category}
                      </span>
                      <h3 style={{ fontSize: 16, fontWeight: 600, color: C.soil, margin: '0 0 16px', lineHeight: 1.4, fontFamily: "'Playfair Display', serif" }}>
                        {product.name}
                      </h3>
                      <button
                        style={{
                          width: '100%', padding: '12px 14px', fontSize: 13, fontWeight: 500,
                          cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                          border: `1.5px solid ${C.border}`,
                          background: 'transparent', color: C.stone,
                          transition: 'all 0.2s ease',
                          textTransform: 'uppercase', letterSpacing: '0.05em'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; e.currentTarget.style.borderColor = C.border; }}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '100px 24px', background: 'white', border: `1px solid ${C.border}` }}>
                <Filter size={48} style={{ margin: '0 auto 16px', color: C.primaryLight, display: 'block', opacity: 0.6 }} />
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: C.soil, marginBottom: 24 }}>
                  No products found for "{activeCategory}"
                </p>
                <button
                  onClick={() => handleCategoryChange('All')}
                  style={{
                    padding: '12px 28px',
                    background: C.primary, color: 'white',
                    border: 'none', fontSize: 14, fontWeight: 500,
                    cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                    transition: 'all 0.2s ease', textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.accent}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



