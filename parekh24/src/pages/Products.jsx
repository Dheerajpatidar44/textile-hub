import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter } from 'lucide-react';

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  {
    id: 101,
    name: "Classic Banarasi Silk Saree",
    category: "Sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 102,
    name: "Super-Stretch Cotton Leggings",
    category: "Leggings",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 103,
    name: "Handcrafted Chikankari Kurti",
    category: "Kurtis",
    image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 104,
    name: "Anarkali Embroidered Dress Suit",
    category: "Dress Suits",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 105,
    name: "Luxurious Egyptian Cotton Bedsheet",
    category: "Bedsheets & Linen",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 106,
    name: "Soft Premium Cotton Hosiery Set",
    category: "Hosiery Items",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 107,
    name: "Italian Wool Blend Suiting Fabric",
    category: "Suiting",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 108,
    name: "Fine Egyptian Giza Cotton Shirting",
    category: "Shirting",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 109,
    name: "Designer Georgette Lehenga Choli",
    category: "Formal & Ethnic Wear for Women",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 110,
    name: "Premium Silk Sherwani Set",
    category: "Formal & Ethnic Wear for Men",
    image: "https://images.unsplash.com/photo-1724856604249-ca73680262e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jvb20lMjBkcmVzc3xlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: 111,
    name: "Kid's Festive Cotton Dhoti Kurta",
    category: "Formal & Ethnic Wear for Children",
    image: "https://images.unsplash.com/photo-1741992556912-3b2d62461e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWxkcmVucyUyMGNsb3RoZXN8ZW58MHwwfDB8fHww"
  },
  {
    id: 112,
    name: "Premium Velvet Upholstery Fabric",
    category: "Home Upholstery & Furnishing",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60"
  }
];

const C = {
  primary: '#6E64B4',
  primaryDark: '#252131',
  accent: '#6E64B4',
  bg: '#FAF9F5',
  border: '#E1DFEB',
  textDark: '#252131',
  textMid: '#252131',
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg, minHeight: '100vh' }}>

      {/* Hero Banner */}
      <div className="relative h-44 sm:h-52 overflow-hidden flex items-center justify-center text-center animate-fade-in"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-4 mt-4">
          <h1 className="font-normal text-4xl sm:text-5xl tracking-tight serif-title" style={{ color: C.textDark }}>
            Product Page
          </h1>
          <div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-sm bg-white border" style={{ borderColor: C.border, color: C.primary }}>
              <ShoppingBag size={15} className="shrink-0" />
              <span className="font-extrabold text-[12px]">{filteredProducts.length} Designs Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 pb-24">
        
        {/* Direct Categories Selector Bar (Responsive, Wrapping Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 pb-8 border-b text-left" style={{ borderColor: C.border }}>
          {['All', ...categories].map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer hover:scale-[1.02] shadow-sm"
                style={{
                  background: isActive ? C.primary : '#FFFFFF',
                  borderColor: isActive ? C.primary : C.border,
                  color: isActive ? '#FAF9F5' : C.textDark,
                  boxShadow: isActive ? '0 4px 12px rgba(110,100,180,0.15)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.015, 0.3) }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border"
                style={{ borderColor: C.border }}
              >
                <div className="h-64 w-full relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5" />
                </div>
                <div className="p-5 text-center border-t" style={{ borderColor: C.border }}>
                  <p className="text-[10px] uppercase tracking-widest font-extrabold mb-2" style={{ color: C.primary }}>
                    {product.category}
                  </p>
                  <h3 className="font-bold text-[14px] leading-tight" style={{ color: C.textDark }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl bg-white shadow-sm border" style={{ borderColor: C.border }}>
            <Filter size={48} className="mx-auto mb-4 opacity-40" style={{ color: C.primary }} />
            <p className="text-xl font-normal serif-title mb-6" style={{ color: C.textDark }}>
              Products for "{activeCategory}" will be available soon.
            </p>
            <button 
              onClick={() => handleCategoryChange('All')}
              className="inline-flex px-6 py-2.5 rounded-full font-bold text-sm text-white btn-accent cursor-pointer"
            >
              View All Products
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
