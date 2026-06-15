import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, SlidersHorizontal, X, Search } from 'lucide-react';

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

  const categoryDetails = {
    "All": { desc: "View our entire catalogue of premium products", monogram: "ALL" },
    "Sarees": { desc: "Elegant silk, banarasi & cotton weaves", monogram: "SR" },
    "Leggings": { desc: "Premium comfort fit and stretchy leggings", monogram: "LG" },
    "Kurtis": { desc: "Artisanal designer kurtis & tunic sets", monogram: "KR" },
    "Dress Suits": { desc: "Graceful salwar suits & ethnic dress sets", monogram: "DS" },
    "Bedsheets & Linen": { desc: "Luxurious pure cotton linens & sheets", monogram: "BL" },
    "Hosiery Items": { desc: "Comfy soft-knit daily hosiery items", monogram: "HS" },
    "Suiting": { desc: "Premium blazer & classic suit fabrics", monogram: "ST" },
    "Shirting": { desc: "Crisp cotton, linen & executive shirting", monogram: "SH" },
    "Formal & Ethnic Wear for Women": { desc: "Bridal, festival & celebration wear", monogram: "FW" },
    "Formal & Ethnic Wear for Men": { desc: "Classic sherwanis, bandhgalas & kurtas", monogram: "FM" },
    "Formal & Ethnic Wear for Children": { desc: "Vibrant ethnic clothes for boys & girls", monogram: "FC" },
    "Home Upholstery & Furnishing": { desc: "Drapes, cushions & bespoke furnishings", monogram: "HU" }
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const getProductCount = (categoryName) => {
    if (categoryName === "All") return allProducts.length;
    return allProducts.filter(p => p.category === categoryName).length;
  };

  const filteredCategories = categories.filter(cat => 
    cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#F6F3EB]">
      {/* Page Header Banner */}
      <div className="w-full bg-[#0C0C0C] text-white py-14 px-6 mb-10 text-center relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#F3ECE0] border-0 pb-0 text-3xl md:text-5xl tracking-widest uppercase font-bold m-0 text-center font-playfair">
            Catalogue
          </h1>
          <div className="w-24 h-[1px] bg-[#C5A880] mx-auto mt-4 mb-3" />
          <p className="text-[#C5A880] text-[10px] md:text-xs uppercase tracking-widest font-semibold font-outfit">
            Explore Our Exquisite Collections
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Filter & Spacing Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-gray-200">
          {/* Count Badge & Active Category Indicator */}
          <div className="bg-white text-gray-800 px-6 py-3.5 border border-[#C5A880]/15 flex items-center gap-3 shadow-md w-full sm:w-auto font-semibold text-xs md:text-sm rounded-lg">
            <ShoppingBag size={18} className="text-[#C5A880]" />
            <span className="text-[#0C0C0C]">{filteredProducts.length} Products Available</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#C5A880] uppercase tracking-widest text-xs font-bold">Active: {activeCategory}</span>
          </div>

          {/* Filter Trigger Button */}
          <button
            onClick={() => {
              setSearchQuery("");
              setIsFilterOpen(true);
            }}
            className="group relative bg-[#0C0C0C] text-white hover:text-[#0C0C0C] px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center gap-2.5 cursor-pointer border border-[#C5A880]/30 w-full sm:w-auto justify-center overflow-hidden rounded-md"
          >
            <span className="absolute inset-0 bg-[#C5A880] transition-transform duration-300 -translate-x-full group-hover:translate-x-0 z-0" />
            <SlidersHorizontal size={14} className="relative z-10 group-hover:rotate-180 transition-transform duration-500 text-[#C5A880] group-hover:text-[#0C0C0C]" />
            <span className="relative z-10 group-hover:text-[#0C0C0C] transition-colors duration-300">
              Select Category Collection
            </span>
          </button>
        </div>

      {/* Sleek Right-side Slide-out Category Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
            />

            {/* Right Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.35 }}
              className="fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-[#0C0C0C] text-white border-l border-[#C5A880]/20 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#C5A880]/15 shrink-0 flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-lg text-[#F3ECE0] font-bold uppercase tracking-wider">
                    Select Collection
                  </h3>
                  <div className="w-12 h-[1px] bg-[#C5A880] mt-2" />
                </div>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-[#C5A880] hover:text-[#F3ECE0] bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-colors border border-[#C5A880]/10 cursor-pointer"
                  aria-label="Close Drawer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Live Search Bar */}
              <div className="px-6 py-4 border-b border-[#C5A880]/10 shrink-0 bg-[#121212]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <Search size={14} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search collections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#1C1C1C] border border-[#C5A880]/15 pl-10 pr-10 py-3 text-xs uppercase tracking-widest font-semibold text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]/30 transition-all font-outfit"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-[#C5A880] cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Scrollable Indexed List Rows */}
              <div className="flex-grow overflow-y-auto p-4 custom-scrollbar bg-[#0C0C0C]">
                <div className="flex flex-col gap-2">
                  {/* "All" Product Button */}
                  {( "All Products".toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "" ) && (
                    <button
                      onClick={() => {
                        setActiveCategory("All");
                        setIsFilterOpen(false);
                      }}
                      className={`group w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        activeCategory === "All"
                          ? "bg-[#C5A880]/15 border-[#C5A880] text-white shadow-md"
                          : "bg-[#121212] border-[#C5A880]/10 text-[#dfc39a]/80 hover:bg-white/5 hover:border-[#C5A880]/30"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-playfair text-base italic text-[#C5A880]/60 font-semibold tracking-wider w-6">
                          00
                        </span>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3ECE0]">
                            All Collections
                          </h4>
                          <p className="text-[10px] text-gray-500 uppercase font-medium mt-0.5 tracking-wider">
                            {categoryDetails["All"].desc}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-bold tracking-widest bg-[#0C0C0C] text-[#C5A880] border border-[#C5A880]/20 px-2 py-1 rounded-sm shrink-0 font-outfit">
                          {getProductCount("All")} Items
                        </span>
                        <div className="w-8 h-8 rounded-full border border-[#C5A880]/20 bg-[#1C1C1C] flex items-center justify-center text-[10px] font-playfair font-bold text-[#C5A880] group-hover:border-[#C5A880] transition-colors shrink-0">
                          ALL
                        </div>
                      </div>
                    </button>
                  )}

                  {/* Category Loop */}
                  {filteredCategories.map((cat, idx) => {
                    const isSelected = activeCategory === cat;
                    const indexStr = String(idx + 1).padStart(2, '0');
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={`group w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#C5A880]/15 border-[#C5A880] text-white shadow-md"
                            : "bg-[#121212] border-[#C5A880]/10 text-[#dfc39a]/80 hover:bg-white/5 hover:border-[#C5A880]/30"
                        }`}
                      >
                        <div className="flex items-center gap-4 flex-grow mr-2 min-w-0">
                          <span className="font-playfair text-base italic text-[#C5A880]/60 font-semibold tracking-wider w-6 shrink-0">
                            {indexStr}
                          </span>
                          <div className="truncate">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3ECE0] truncate">
                              {cat}
                            </h4>
                            <p className="text-[10px] text-gray-500 uppercase font-medium mt-0.5 tracking-wider truncate">
                              {categoryDetails[cat]?.desc || "Explore this collection"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className={`text-[9px] font-bold tracking-widest px-2 py-1 rounded-sm font-outfit ${
                            isSelected
                              ? "bg-[#C5A880]/30 text-white border border-[#C5A880]/20"
                              : getProductCount(cat) > 0
                                ? "bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/15"
                                : "bg-[#1C1C1C] text-gray-600 border border-transparent"
                          }`}>
                            {getProductCount(cat) > 0 ? `${getProductCount(cat)} Items` : "Coming Soon"}
                          </span>
                          <div className="w-8 h-8 rounded-full border border-[#C5A880]/20 bg-[#1C1C1C] flex items-center justify-center text-[10px] font-playfair font-bold text-[#C5A880] group-hover:border-[#C5A880] transition-colors shrink-0">
                            {categoryDetails[cat]?.monogram || cat.substring(0, 2).toUpperCase()}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {filteredCategories.length === 0 && !("All Products".toLowerCase().includes(searchQuery.toLowerCase())) && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                      No categories found matching "{searchQuery}"
                    </p>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#C5A880]/15 shrink-0 bg-[#121212] flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                <span>Active: <strong className="text-[#C5A880]">{activeCategory}</strong></span>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="bg-[#C5A880] text-[#0C0C0C] hover:bg-[#F3ECE0] px-5 py-2.5 font-bold tracking-widest transition-colors cursor-pointer uppercase text-[9px] rounded-sm font-outfit"
                >
                  Close Panel
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Products Display */}
      <div className="space-y-16">
        {activeCategory === "All" ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group bg-white rounded-xl border border-[#C5A880]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C5A880]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full cursor-pointer"
                >
                  <div className="h-72 w-full relative overflow-hidden shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0" />
                    <span className="absolute top-4 left-4 bg-[#0C0C0C] text-[#C5A880] border border-[#C5A880]/20 text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-md z-10 font-outfit">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5 text-center bg-white border-t border-gray-100 flex-grow flex flex-col justify-center">
                    <p className="text-[#C5A880] text-[9px] uppercase tracking-widest font-semibold mb-1.5 font-outfit">
                      {product.category} Collection
                    </p>
                    <h3 className="font-playfair text-sm text-[#0C0C0C] group-hover:text-[#C5A880] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          Object.entries(groupedProducts).map(([categoryName, products]) => (
            <div key={categoryName}>
              <h2 className="font-playfair text-xl text-[#0C0C0C] font-semibold uppercase tracking-wider mb-6 border-b border-[#C5A880]/20 pb-2">
                {categoryName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group bg-white rounded-xl border border-[#C5A880]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C5A880]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full cursor-pointer"
                  >
                    <div className="h-72 w-full relative overflow-hidden shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0" />
                      <span className="absolute top-4 left-4 bg-[#0C0C0C] text-[#C5A880] border border-[#C5A880]/20 text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-md z-10 font-outfit">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-5 text-center bg-white border-t border-gray-100 flex-grow flex flex-col justify-center">
                      <p className="text-[#C5A880] text-[9px] uppercase tracking-widest font-semibold mb-1.5 font-outfit">
                        {product.category} Collection
                      </p>
                      <h3 className="font-playfair text-sm text-[#0C0C0C] group-hover:text-[#C5A880] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
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
          <div className="text-center py-20 bg-white border border-[#C5A880]/10 rounded-xl shadow-md">
            <h3 className="font-playfair text-base text-gray-500 uppercase tracking-widest font-semibold">
              Products for this category will be available soon.
            </h3>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}
