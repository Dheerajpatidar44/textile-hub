import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const categories = [
  "Sarees", "Kurtis", "Leggings", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Women Wear", "Men Wear",
  "Children Wear", "Home Furnishing"
];

const allProducts = [
  { id: 101, name: 'Premium Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?w=600&auto=format&fit=crop&q=60' },
  { id: 105, name: 'Embroidered Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610189013233-0498b89d4fb9?w=600&auto=format&fit=crop&q=60' },
  { id: 102, name: 'Designer Kurti Set', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60' },
  { id: 106, name: 'Printed Cotton Kurti', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=60' },
  { id: 103, name: 'Luxury Cotton Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
  { id: 104, name: 'Classic Men Suit Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=60' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Catalogue
            </h1>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg"
            >
            <ShoppingBag size={16} />
            <span className="font-bold text-sm">{filteredProducts.length} Products</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-200"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #E14D2A, #E14D2A)', color: '#fff', boxShadow: '0 4px 12px rgba(245,124,0,0.3)' }
                : { background: '#FFFFFF', color: '#4B4B4B', border: '1px solid rgba(225,77,42,0.2)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.15)' }}
              >
                <div className="h-60 w-full relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(28,17,10,0.3)' }} />
                </div>
                <div className="p-4 text-center border-t" style={{ borderColor: 'rgba(225,77,42,0.1)' }}>
                  <p className="text-[10px] uppercase tracking-widest font-medium mb-1" style={{ color: '#E14D2A' }}>
                    {product.category}
                  </p>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl"
            style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.15)' }}>
            <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#6B6B6B' }}>
              Products for this category will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
