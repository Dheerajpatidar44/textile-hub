import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Products() {
  const location = useLocation();
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

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#F4F8F9] font-outfit">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        {/* Compact Page Heading */}
        <div className="mb-6 border-b border-gray-200 pb-3 text-left">
          <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
            Catalogue
          </h1>
        </div>

        {/* Category Buttons Bar */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${activeCategory === 'All' ? 'bg-[#0A5F73] text-white' : 'bg-gray-100 text-[#0C2E3A]'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium ${activeCategory === cat ? 'bg-[#0A5F73] text-white' : 'bg-gray-100 text-[#0C2E3A]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Display */}
        <div className="space-y-12">
          {activeCategory === "All" ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                  >
                    <div className="h-64 w-full relative overflow-hidden shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-0" />
                      <span className="absolute top-4 left-4 bg-white/95 text-[#0A5F73] border border-gray-100 text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md shadow-xs z-10">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-4 text-center bg-white border-t border-gray-100 flex-grow flex flex-col justify-center">
                      <p className="text-[#10859F] text-[8px] uppercase tracking-widest font-semibold mb-1">
                        {product.category} Collection
                      </p>
                      <h3 className="font-playfair text-xs text-[#0C2E3A] group-hover:text-[#0A5F73] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            Object.entries(groupedProducts).map(([categoryName, products]) => (
              <div key={categoryName} className="text-left">
                <h2 className="font-playfair text-lg text-[#0C2E3A] font-semibold uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">
                  {categoryName}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product, idx) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                    >
                      <div className="h-64 w-full relative overflow-hidden shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-0" />
                        <span className="absolute top-4 left-4 bg-white/95 text-[#0A5F73] border border-gray-100 text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md shadow-xs z-10">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-4 text-center bg-white border-t border-gray-100 flex-grow flex flex-col justify-center">
                        <p className="text-[#10859F] text-[8px] uppercase tracking-widest font-semibold mb-1">
                          {product.category} Collection
                        </p>
                        <h3 className="font-playfair text-xs text-[#0C2E3A] group-hover:text-[#0A5F73] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
                          {product.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white border border-gray-150 rounded-2xl shadow-xs">
              <h3 className="font-playfair text-sm text-gray-500 uppercase tracking-widest font-semibold">
                Products for this category will be available soon.
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
