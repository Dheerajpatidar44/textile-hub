import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter } from 'lucide-react';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  primaryDark: '#0B1426',
  primaryLight: '#1E2D4A',
  accent: '#DE5B49',         // Terracotta Red Accent
  accentLight: '#EB7C6E',
  gold: '#DE5B49',
  bg: '#FAF9F5',
  border: '#EAEAEA',
  stone: '#5A6F8F',
  cream: '#FFFFFF',
};

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: "Classic Banarasi Silk Saree", category: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { id: 102, name: "Super-Stretch Cotton Leggings", category: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60" },
  { id: 103, name: "Handcrafted Chikankari Kurti", category: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60" },
  { id: 104, name: "Anarkali Embroidered Dress Suit", category: "Dress Suits", image: "/images/popular_anarkali.png" },
  { id: 105, name: "Luxurious Egyptian Cotton Bedsheet", category: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { id: 106, name: "Soft Premium Cotton Hosiery Set", category: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60" },
  { id: 107, name: "Italian Wool Blend Suiting Fabric", category: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60" },
  { id: 108, name: "Fine Egyptian Giza Cotton Shirting", category: "Shirting", image: "/images/popular_cotton_fabric.png" },
  { id: 109, name: "Designer Georgette Lehenga Choli", category: "Formal & Ethnic Wear for Women", image: "/images/popular_lehenga.png" },
  { id: 110, name: "Premium Silk Sherwani Set", category: "Formal & Ethnic Wear for Men", image: "/images/men_ethnic_wear.png" },
  { id: 111, name: "Kid's Festive Cotton Dhoti Kurta", category: "Formal & Ethnic Wear for Children", image: "/images/children_ethnic_wear.png" },
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
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">

        {/* Page Title - minimized top gap */}
        <div className="text-center mb-8 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Collections
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Sidebar - rounded filter menu */}
          <div className="w-full md:w-[280px] flex-shrink-0 sticky top-[110px] p-6 rounded-3xl shadow-sm" style={{ background: 'white', border: `1px solid ${C.border}` }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${C.border}` }}>
              Categories
            </h3>
            <div className="flex flex-col gap-1.5 max-h-[60vh] overflow-y-auto pr-2 custom-sidebar-scrollbar" style={{ scrollbarWidth: 'thin' }}>
              {["All", ...categories].map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className="text-left w-full px-4 py-2.5 rounded-2xl text-[13px] font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-between"
                    style={{
                      background: active ? 'rgba(30, 62, 55, 0.08)' : 'transparent',
                      color: active ? C.primary : C.stone,
                      border: 'none',
                    }}
                    onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(30, 62, 55, 0.04)'; e.currentTarget.style.color = C.primary; }}}
                    onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; }}}
                  >
                    <span>{cat}</span>
                    {active && <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: C.border }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: C.primary, margin: 0 }}>
                {activeCategory === "All" ? "All Products" : activeCategory}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'white', borderRadius: 20, border: `1px solid ${C.border}` }}>
                <ShoppingBag size={14} color={C.primary} />
                <span style={{ fontSize: 12, color: C.stone, fontWeight: 700 }}>{filteredProducts.length} Items</span>
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
                    className="text-left cursor-pointer"
                    style={{ overflow: 'hidden',
                      background: 'white', border: `1px solid ${C.border}`,
                      borderRadius: 20,
                      display: 'flex', flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: 'none'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(17, 30, 56, 0.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                      <img src={product.image} alt={product.name} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    <div style={{ padding: '24px' }}>
                      <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.accent, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                        {product.category}
                      </span>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: C.primary, margin: '0 0 20px', lineHeight: 1.4, fontFamily: "'Cormorant Garamond', serif" }}>
                        {product.name}
                      </h3>
                      <button
                        style={{
                          width: '100%', padding: '12px 14px', fontSize: 11, fontWeight: 700,
                          cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                          border: `1.5px solid ${C.border}`,
                          borderRadius: 16,
                          background: 'transparent', color: C.primary,
                          transition: 'all 0.2s ease',
                          textTransform: 'uppercase', letterSpacing: '0.05em'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}
                      >
                        Enquire Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '100px 24px', background: 'white', borderRadius: 24, border: `1px solid ${C.border}` }}>
                <Filter size={48} style={{ margin: '0 auto 16px', color: C.primaryLight, display: 'block', opacity: 0.6 }} />
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: C.primary, marginBottom: 24 }}>
                  No products found for "{activeCategory}"
                </p>
                <button
                  onClick={() => handleCategoryChange('All')}
                  style={{
                    padding: '12px 28px',
                    background: C.primary, color: 'white',
                    borderRadius: 16,
                    border: 'none', fontSize: 13, fontWeight: 700,
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
