import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter, ArrowRight } from 'lucide-react';

const C = {
  primary: '#1B2A4A',
  accent: '#D4A842',
  crimson: '#8B1A2D',
  bg: '#F8F7F4',
  border: '#E2DDDA',
  stone: '#5A5560',
};

const categories = [
  { name: "Sarees", image: "/images/popular_banarasi_saree.png" },
  { name: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&auto=format&fit=crop&q=60" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=300&auto=format&fit=crop&q=60" },
  { name: "Dress Suits", image: "/images/popular_anarkali.png" },
  { name: "Bedsheets & Linen", image: "/images/popular_bedsheet.png" },
  { name: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop&q=60" },
  { name: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&auto=format&fit=crop&q=60" },
  { name: "Shirting", image: "/images/popular_cotton_fabric.png" },
  { name: "Women Ethnic", image: "/images/popular_lehenga.png" },
  { name: "Men Ethnic", image: "/images/men_ethnic_wear.png" },
  { name: "Kids Ethnic", image: "/images/children_ethnic_wear.png" },
  { name: "Home Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60" }
];

const allProducts = [
  { id: 101, name: "Classic Banarasi Silk Saree", category: "Sarees", image: "/images/popular_banarasi_saree.png", tag: "Bestseller" },
  { id: 102, name: "Super-Stretch Cotton Leggings", category: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60", tag: "Popular" },
  { id: 103, name: "Handcrafted Chikankari Kurti", category: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60", tag: "New" },
  { id: 104, name: "Anarkali Embroidered Dress Suit", category: "Dress Suits", image: "/images/popular_anarkali.png", tag: "Premium" },
  { id: 105, name: "Luxurious Egyptian Cotton Bedsheet", category: "Bedsheets & Linen", image: "/images/popular_bedsheet.png", tag: "Bestseller" },
  { id: 106, name: "Soft Premium Cotton Hosiery Set", category: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60", tag: "Popular" },
  { id: 107, name: "Italian Wool Blend Suiting Fabric", category: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60", tag: "Premium" },
  { id: 108, name: "Fine Egyptian Giza Cotton Shirting", category: "Shirting", image: "/images/popular_cotton_fabric.png", tag: "New" },
  { id: 109, name: "Designer Georgette Lehenga Choli", category: "Women Ethnic", image: "/images/popular_lehenga.png", tag: "Bestseller" },
  { id: 110, name: "Premium Silk Sherwani Set", category: "Men Ethnic", image: "/images/men_ethnic_wear.png", tag: "Premium" },
  { id: 111, name: "Kid's Festive Cotton Dhoti Kurta", category: "Kids Ethnic", image: "/images/children_ethnic_wear.png", tag: "Popular" },
  { id: 112, name: "Premium Velvet Upholstery Fabric", category: "Home Furnishing", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60", tag: "New" },
];

const TAG_COLORS = {
  'Bestseller': { bg: '#8B1A2D', text: '#FFF' },
  'Premium': { bg: '#1B2A4A', text: '#FFF' },
  'New': { bg: '#D4A842', text: '#FFF' },
  'Popular': { bg: '#2E4070', text: '#FFF' },
};

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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">

        {/* Page Title */}
        <div className="text-center mb-6 mt-0">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Collections
          </h1>
          <div style={{ width: 40, height: 1.5, background: `linear-gradient(90deg, ${C.crimson}, ${C.accent})`, margin: '8px auto 0' }} />
        </div>
        
        {/* Categories container wrapping in multiple rows */}
        <div className="w-full mb-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-6 max-w-6xl mx-auto">
            {/* "All" Category Badge */}
            <button
              onClick={() => handleCategoryChange("All")}
              className="group flex flex-col items-center gap-3 shrink-0 border-none bg-transparent cursor-pointer"
            >
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-sm"
                style={{
                  background: activeCategory === "All" ? C.primary : '#FFFFFF',
                  borderColor: activeCategory === "All" ? C.accent : C.border,
                }}
              >
                <ShoppingBag 
                  size={ activeCategory === "All" ? 28 : 24 } 
                  style={{ 
                    color: activeCategory === "All" ? '#FFFFFF' : C.primary,
                    transition: 'all 0.3s ease'
                  }} 
                />
              </div>
              <span 
                className="text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-colors"
                style={{
                  color: activeCategory === "All" ? C.accent : C.primary,
                }}
              >
                All Products
              </span>
            </button>

            {/* Other Categories */}
            {categories.map((cat, idx) => {
              const active = activeCategory === cat.name;
              return (
                <button
                  key={idx}
                  onClick={() => handleCategoryChange(cat.name)}
                  className="group flex flex-col items-center gap-3 shrink-0 border-none bg-transparent cursor-pointer"
                >
                  <div 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-sm bg-white"
                    style={{
                      borderColor: active ? C.accent : C.border,
                      transform: active ? 'scale(1.05)' : 'none',
                      boxShadow: active ? `0 8px 24px rgba(27,42,74,0.15)` : 'none',
                    }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span 
                    className="text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-colors"
                    style={{
                      color: active ? C.accent : C.primary,
                    }}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid Area */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: C.border }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: C.primary, margin: 0 }}>
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'white', borderRadius: 20, border: `1px solid ${C.border}` }}>
              <ShoppingBag size={14} color={C.primary} />
              <span style={{ fontSize: 12, color: C.stone, fontWeight: 700 }}>{filteredProducts.length} Items</span>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            /* New Card Layout: Horizontal card with image left + content right */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.4) }}
                  className="group bg-white border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
                  style={{ borderColor: C.border }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = `0 20px 48px rgba(27, 42, 74, 0.13)`;
                    e.currentTarget.style.borderColor = C.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = C.border;
                  }}
                >
                  {/* Image container with tag badge */}
                  <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                    <img src={product.image} alt={product.name} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      className="transition-transform duration-700 ease-in-out transform group-hover:scale-108"
                    />
                    {/* Tag Badge */}
                    {product.tag && (
                      <div style={{
                        position: 'absolute', top: 14, left: 14,
                        padding: '4px 10px', borderRadius: 20,
                        fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        background: TAG_COLORS[product.tag]?.bg || C.primary,
                        color: TAG_COLORS[product.tag]?.text || '#fff',
                      }}>
                        {product.tag}
                      </div>
                    )}
                    {/* Bottom gradient */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, rgba(27,42,74,0.15), transparent)', pointerEvents: 'none' }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.accent, fontWeight: 700, display: 'block' }}>
                      {product.category}
                    </span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.primary, margin: 0, lineHeight: 1.4, fontFamily: "'Playfair Display', serif", flex: 1 }}>
                      {product.name}
                    </h3>
                    <button
                      style={{
                        width: '100%', padding: '11px 14px', fontSize: 11, fontWeight: 700,
                        cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                        border: `1.5px solid ${C.border}`,
                        borderRadius: 12,
                        background: 'transparent', color: C.primary,
                        transition: 'all 0.25s ease',
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        marginTop: 8
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}
                    >
                      View Details <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 24px', background: 'white', borderRadius: 20, border: `1px solid ${C.border}` }}>
              <Filter size={48} style={{ margin: '0 auto 16px', color: C.accent, display: 'block', opacity: 0.6 }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: C.primary, marginBottom: 24 }}>
                No products found for "{activeCategory}"
              </p>
              <button
                onClick={() => handleCategoryChange('All')}
                style={{
                  padding: '12px 28px',
                  background: C.primary, color: 'white',
                  borderRadius: 12,
                  border: 'none', fontSize: 13, fontWeight: 700,
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
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
  );
}
