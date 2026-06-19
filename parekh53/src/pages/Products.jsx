import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter } from 'lucide-react';

const C = {
  primary: '#e2b865',        // Gold
  primaryDark: '#0a0c10',
  primaryLight: '#1b202c',
  accent: '#e2b865',         // Gold
  accentLight: '#f5dfb8',
  gold: '#e2b865',
  bg: '#12151c',
  border: '#2a3142',
  stone: '#a0aec0',
  cream: '#1b202c',
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
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">

        {/* Page Title */}
        <div className="text-center mb-8 mt-1">
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Collections
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Categories Selector Grid above products */}
        <div className="mb-10 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {["All", ...categories].map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="px-4 py-2.5 rounded-none text-[12px] font-bold tracking-wide transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-sm"
                  style={{
                    background: active ? C.primary : C.cream,
                    color: active ? '#12151c' : C.stone,
                    border: active ? `1.5px solid ${C.primary}` : `1.5px solid ${C.border}`,
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.background = 'rgba(226, 184, 101, 0.08)';
                      e.currentTarget.style.color = C.primary;
                      e.currentTarget.style.borderColor = C.primary;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.background = C.cream;
                      e.currentTarget.style.color = C.stone;
                      e.currentTarget.style.borderColor = C.border;
                    }
                  }}
                >
                  <span>{cat}</span>
                  {active && <div style={{ width: 5, height: 5, borderRadius: '0px', background: '#12151c' }} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Panel */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: C.border }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, fontWeight: 700, color: C.primary, margin: 0 }}>
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: C.cream, borderRadius: '0px', border: `1px solid ${C.border}` }}>
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
                  className="text-left group flex flex-col rounded-none"
                  style={{
                    overflow: 'hidden',
                    background: C.cream, border: `1px solid ${C.border}`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                    <img src={product.image} alt={product.name} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      className="transition-transform duration-1000 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                  </div>
                  <div style={{ padding: '24px' }} className="flex-grow flex flex-col justify-between">
                    <div>
                      <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.accent, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                        {product.category}
                      </span>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 10px', lineHeight: 1.4, fontFamily: "'Cinzel', serif" }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: 12.5, color: C.stone, marginBottom: 20 }}>
                        Authentic, premium weave handpicked for quality and elegance. Craftsmanship designed to add sophistication to your wardrobe or home.
                      </p>
                    </div>
                    <div>
                      <button
                        style={{
                          width: '100%', padding: '12px 14px', fontSize: 11, fontWeight: 700,
                          cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                          border: `1.5px solid ${C.primary}`,
                          borderRadius: '0px',
                          background: C.primary, color: '#12151c',
                          transition: 'all 0.2s ease',
                          textTransform: 'uppercase', letterSpacing: '0.05em'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = 'white'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = C.primary; }}
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 24px', background: C.cream, borderRadius: '0px', border: `1px solid ${C.border}` }}>
              <Filter size={48} style={{ margin: '0 auto 16px', color: C.stone, display: 'block', opacity: 0.6 }} />
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: C.primary, marginBottom: 24 }}>
                No products found for "{activeCategory}"
              </p>
              <button
                onClick={() => handleCategoryChange('All')}
                style={{
                  padding: '12px 28px',
                  background: C.primary, color: '#12151c',
                  borderRadius: '0px',
                  border: 'none', fontSize: 13, fontWeight: 700,
                  cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.2s ease', textTransform: 'uppercase', letterSpacing: '0.05em'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; }}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
