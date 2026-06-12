import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Products() {
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

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="pb-16 max-w-7xl mx-auto px-4">
      {/* Header matching the image layout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pt-8">
        <div>
          <p className="text-[#A8C6B6] font-bold tracking-[0.2em] uppercase text-xs mb-2">TEXTILE MALL</p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#1B484E] font-bold">Catalogue</h1>
        </div>
        <div className="mt-6 md:mt-0 bg-[#1B484E] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
          <ShoppingBag size={18} />
          <span className="font-bold text-sm">{filteredProducts.length} Products</span>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button 
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors border ${
            activeCategory === "All" 
              ? "bg-[#A8C6B6] text-white border-[#A8C6B6]" 
              : "bg-white text-gray-600 border-gray-200 hover:border-[#A8C6B6]"
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === cat 
                ? "bg-[#A8C6B6] text-white border-[#A8C6B6]" 
                : "bg-white text-gray-600 border-gray-200 hover:border-[#A8C6B6]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Display (Flat Grid) */}
      <div className="space-y-16">
        <div>
          {activeCategory !== "All" && (
            <h2 className="font-playfair text-2xl text-[#1B484E] font-bold mb-6">{activeCategory}</h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 w-full relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center bg-white border-t border-gray-100">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-medium">
                    {product.category}
                  </p>
                  <h3 className="font-playfair text-lg text-[#1B484E] font-bold">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-playfair text-2xl text-gray-400">Products for this category will be available soon.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
