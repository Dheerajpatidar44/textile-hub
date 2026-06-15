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
    <div className="pb-16 w-full relative min-h-screen bg-pearl-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        {/* Direct Page Heading */}
        <div className="mb-8 border-b border-[#BD7B88]/20 pb-4 text-left">
          <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
            Catalogue
          </h1>
        </div>

        {/* Filter & Spacing Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-[#BD7B88]/15">
          {/* Count Badge & Active Category Indicator */}
          <div className="bg-white text-gray-800 px-6 py-3.5 border border-[#BD7B88]/20 flex items-center gap-3 shadow-md w-full sm:w-auto font-semibold text-xs md:text-sm rounded-lg">
            <ShoppingBag size={18} className="text-[#BD7B88]" />
            <span className="text-[#3D223B]">{filteredProducts.length} Products Available</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#BD7B88] uppercase tracking-widest text-xs font-bold">Active: {activeCategory}</span>
          </div>

          {/* Filter Trigger Button */}
          <button
            onClick={() => {
              setSearchQuery("");
              setIsFilterOpen(true);
            }}
            className="group relative bg-[#3D223B] text-white hover:text-[#3D223B] px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center gap-2.5 cursor-pointer border border-[#BD7B88]/30 w-full sm:w-auto justify-center overflow-hidden rounded-md"
          >
            <span className="absolute inset-0 bg-[#BD7B88] transition-transform duration-300 -translate-x-full group-hover:translate-x-0 z-0" />
            <SlidersHorizontal size={14} className="relative z-10 group-hover:rotate-180 transition-transform duration-500 text-[#BD7B88] group-hover:text-white" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
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
              className="fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-[#3D223B] text-white border-l border-[#BD7B88]/20 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#BD7B88]/15 shrink-0 flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-lg text-[#F6EDF0] font-bold uppercase tracking-wider">
                    Select Collection
                  </h3>
                  <div className="w-12 h-[1px] bg-[#BD7B88] mt-2" />
                </div>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-[#BD7B88] hover:text-[#F6EDF0] bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-colors border border-[#BD7B88]/20 cursor-pointer"
                  aria-label="Close Drawer"
                >
                  <X size={18} />
                </button>
              </div>              {/* Scrollable Indexed List Rows */}
              <div className="flex-grow overflow-y-auto p-4 custom-scrollbar bg-[#3D223B]">
                <div className="flex flex-col gap-2">
                  {/* "All" Product Button */}
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setIsFilterOpen(false);
                    }}
                    className={`group w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      activeCategory === "All"
                        ? "bg-[#BD7B88]/20 border-[#BD7B88] text-white shadow-md"
                        : "bg-[#4D2D4B] border-[#BD7B88]/10 text-[#F6EDF0]/75 hover:bg-white/5 hover:border-[#BD7B88]/30"
                    }`}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6EDF0]">
                      All Collections
                    </h4>
                  </button>

                  {/* Category Loop */}
                  {categories.map((cat) => {
                    const isSelected = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={`group w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#BD7B88]/20 border-[#BD7B88] text-white shadow-md"
                            : "bg-[#4D2D4B] border-[#BD7B88]/10 text-[#F6EDF0]/75 hover:bg-white/5 hover:border-[#BD7B88]/30"
                        }`}
                      >
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6EDF0]">
                          {cat}
                        </h4>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#BD7B88]/15 shrink-0 bg-[#4D2D4B] flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-300 font-medium">
                <span>Active: <strong className="text-[#BD7B88]">{activeCategory}</strong></span>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="bg-[#BD7B88] text-white hover:bg-[#A36471] px-5 py-2.5 font-bold tracking-widest transition-colors cursor-pointer uppercase text-[9px] rounded-lg font-outfit"
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
                  className="group bg-white rounded-xl border border-[#BD7B88]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#BD7B88]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full cursor-pointer"
                >
                  <div className="h-72 w-full relative overflow-hidden shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0" />
                    <span className="absolute top-4 left-4 bg-[#3D223B] text-[#BD7B88] border border-[#BD7B88]/20 text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-md z-10 font-outfit">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5 text-center bg-white border-t border-gray-100 flex-grow flex flex-col justify-center">
                    <p className="text-[#BD7B88] text-[9px] uppercase tracking-widest font-semibold mb-1.5 font-outfit">
                      {product.category} Collection
                    </p>
                    <h3 className="font-playfair text-sm text-[#3D223B] group-hover:text-[#BD7B88] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
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
              <h2 className="font-playfair text-xl text-[#3D223B] font-semibold uppercase tracking-wider mb-6 border-b border-[#BD7B88]/20 pb-2">
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
                    className="group bg-white rounded-xl border border-[#BD7B88]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#BD7B88]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full cursor-pointer"
                  >
                    <div className="h-72 w-full relative overflow-hidden shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0" />
                      <span className="absolute top-4 left-4 bg-[#3D223B] text-[#BD7B88] border border-[#BD7B88]/20 text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-md z-10 font-outfit">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-5 text-center bg-white border-t border-gray-100 flex-grow flex flex-col justify-center">
                      <p className="text-[#BD7B88] text-[9px] uppercase tracking-widest font-semibold mb-1.5 font-outfit">
                        {product.category} Collection
                      </p>
                      <h3 className="font-playfair text-sm text-[#3D223B] group-hover:text-[#BD7B88] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
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
          <div className="text-center py-20 bg-white border border-[#BD7B88]/10 rounded-xl shadow-md">
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
