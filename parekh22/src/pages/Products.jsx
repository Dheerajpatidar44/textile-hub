import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Filter, X } from 'lucide-react';

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
  primary: '#721C2B',
  primaryDark: '#4A0E17',
  accent: '#CDA75E',
  bg: '#FAF6F0',
  border: '#E6D8C5',
  textDark: '#330A10',
  textMid: '#554447',
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    setIsModalOpen(false);
  };

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>

      {/* Hero Banner */}
      <div className="relative h-44 sm:h-52 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-4 mt-4">
          <h1 className="font-black text-4xl sm:text-5xl tracking-tight serif-title" style={{ color: C.textDark }}>
            Our Collections
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-sm bg-white" style={{ border: `1px solid ${C.border}`, color: C.primary }}>
              <ShoppingBag size={15} className="shrink-0" />
              <span className="font-bold text-[13px]">{filteredProducts.length} Products Available</span>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full shadow-md text-white transition-all hover:-translate-y-0.5"
              style={{ background: '#8B5A2B' }}
            >
              <Filter size={15} className="shrink-0" />
              <span className="font-bold text-[13px]">
                {activeCategory === 'All' ? 'Filter by Category' : `Category: ${activeCategory}`}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 pb-24">
        
        {/* Products Grid - Now Full Width */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                style={{ border: `1.5px solid ${C.border}` }}
              >
                <div className="h-64 w-full relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(62,43,33,0.15)' }} />
                </div>
                <div className="p-5 text-center" style={{ borderTop: `1px solid ${C.border}` }}>
                  <p className="text-[10px] uppercase tracking-widest font-black mb-2" style={{ color: '#CDA75E' }}>
                    {product.category}
                  </p>
                  <h3 className="font-black text-[15px] leading-tight" style={{ color: C.textDark }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl bg-white shadow-sm" style={{ border: `1.5px solid ${C.border}` }}>
            <Filter size={48} className="mx-auto mb-4 opacity-20" style={{ color: '#8B5A2B' }} />
            <p className="text-xl font-bold serif-title" style={{ color: '#4B5563' }}>
              Products for "{activeCategory}" will be available soon.
            </p>
            <button 
              onClick={() => handleCategoryChange('All')}
              className="mt-6 inline-flex px-6 py-2 rounded-full font-bold text-sm text-white"
              style={{ background: '#8B5A2B' }}
            >
              View All Products
            </button>
          </div>
        )}

      </div>

      {/* Categories Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#FAF6F0] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh]"
              style={{ border: `1px solid ${C.border}` }}
            >
              <div className="p-6 sm:p-8 border-b bg-white flex items-center justify-between shrink-0" style={{ borderColor: C.border }}>
                <div>
                  <h3 className="text-3xl font-bold serif-title mb-1" style={{ color: '#3E2B21' }}>Explore Categories</h3>
                  <p className="text-sm font-medium" style={{ color: C.textMid }}>Select a category to filter our collections</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-2.5 hover:bg-gray-100 rounded-full transition-colors"
                  style={{ color: '#3E2B21' }}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {['All', ...categories].map(cat => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className="text-left p-4 rounded-2xl transition-all duration-200 border group flex items-center justify-between"
                        style={{
                          background: isActive ? '#8B5A2B' : '#FFFFFF',
                          borderColor: isActive ? '#8B5A2B' : C.border,
                          color: isActive ? '#FFFFFF' : '#3E2B21',
                          boxShadow: isActive ? '0 4px 15px rgba(139,90,43,0.3)' : '0 2px 5px rgba(0,0,0,0.02)'
                        }}
                      >
                        <span className="font-bold text-[14px]">{cat}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-white opacity-80" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
