import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const C = {
  primary: '#1b3252',
  primaryLight: '#243b61',
  accent: '#b08e5b',
  bg: '#fdfbf7',
  sand: '#f2e8dc',
  border: '#e6dfd5',
  soil: '#1a2538',
  stone: '#63738a',
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
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[124px]">

      {/* Page Title */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid ${C.border}`, padding: '14px 0 16px' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: C.soil, margin: 0 }}>
            Explore Our Collection
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ width: 32, height: 2, background: C.accent, borderRadius: 2 }} />
            <div style={{ width: 7, height: 7, background: C.accent, transform: 'rotate(45deg)', borderRadius: 1 }} />
            <div style={{ width: 60, height: 1, background: 'rgba(176,142,91,0.3)', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-8 pb-20">

        {/* Category Chips */}
        <div style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 14, padding: '18px', marginBottom: 28 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: C.soil, marginBottom: 12, borderBottom: `1px solid ${C.border}`, paddingBottom: 8, margin: '0 0 14px' }}>
            Categories
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {["All", ...categories].map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: 20, fontSize: 12, fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s ease',
                    border: `1.5px solid ${active ? C.primary : C.border}`,
                    background: active ? C.primary : 'transparent',
                    color: active ? '#ffffff' : C.stone,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(27,50,82,0.05)'; e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; } }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: 0 }}>
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 20, background: 'white', border: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 12, color: C.stone, fontWeight: 500 }}>{filteredProducts.length} Products</span>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.04, 0.3) }}
                  className="text-left"
                  style={{
                    borderRadius: 14, overflow: 'hidden',
                    background: 'white', border: `1px solid ${C.border}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(27,50,82,0.10)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <img src={product.image} alt={product.name} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '14px 16px', borderTop: `1px solid ${C.border}` }}>
                    <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.accent, fontWeight: 700, display: 'block', marginBottom: 5 }}>
                      {product.category}
                    </span>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: C.soil, margin: '0 0 14px', lineHeight: 1.4, fontFamily: "'Playfair Display', serif" }}>
                      {product.name}
                    </h3>
                    <button
                      style={{
                        width: '100%', padding: '9px 14px',
                        borderRadius: 8, fontSize: 12, fontWeight: 500,
                        cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                        border: `1.5px solid ${C.border}`,
                        background: 'transparent', color: C.stone,
                        transition: 'all 0.2s ease',
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
            <div style={{ textAlign: 'center', padding: '80px 24px', borderRadius: 16, background: 'white', border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: C.soil, marginBottom: 20 }}>
                No products found for "{activeCategory}"
              </p>
              <button
                onClick={() => handleCategoryChange('All')}
                style={{
                  padding: '11px 24px', borderRadius: 10,
                  background: C.primary, color: 'white',
                  border: 'none', fontSize: 13, fontWeight: 500,
                  cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                  transition: 'all 0.2s ease',
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
  );
}
