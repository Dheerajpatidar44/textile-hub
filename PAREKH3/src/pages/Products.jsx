import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProductCard from '../components/cards/ProductCard';
import { featuredProducts, categories } from '../data/mockData';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const allProducts = [
    ...featuredProducts,
    { id: 105, name: 'Bridal Lehenga', category: 'Formal & Ethnic Wear for Women', price: '$450', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
    { id: 106, name: 'Cotton Leggings', category: 'Leggings', price: '$20', image: 'https://images.unsplash.com/photo-1583391733958-650fac5ecf7c?auto=format&fit=crop&q=80&w=800' },
    { id: 107, name: 'Kids Ethnic Kurta', category: 'Formal & Ethnic Wear for Children', price: '$45', image: 'https://images.unsplash.com/photo-1610030469983-98e550905b0f?auto=format&fit=crop&q=80&w=800' },
    { id: 108, name: 'Sherwani Set', category: 'Formal & Ethnic Wear for Men', price: '$250', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e5?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div>
      <PageHeader title="Our Products" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="bg-white border border-[#0B1C3E]/8 sticky top-28">
              <div className="bg-[#0B1C3E] px-6 py-4">
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#D4A853] font-medium">Categories</h3>
              </div>
              <div className="p-3 max-h-[70vh] overflow-y-auto">
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`w-full text-left px-4 py-2.5 text-sm mb-1 transition-all duration-200 border-l-2 ${
                    activeCategory === 'All'
                      ? 'border-[#D4A853] text-[#D4A853] bg-[#FAF7F0] font-medium'
                      : 'border-transparent text-[#6B7A99] hover:text-[#0B1C3E] hover:border-[#D4A853]/40'
                  }`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full text-left px-4 py-2.5 text-sm mb-1 transition-all duration-200 border-l-2 ${
                      activeCategory === cat.name
                        ? 'border-[#D4A853] text-[#D4A853] bg-[#FAF7F0] font-medium'
                        : 'border-transparent text-[#6B7A99] hover:text-[#0B1C3E] hover:border-[#D4A853]/40'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            {/* Count row */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-[#6B7A99] font-light">
                Showing <span className="text-[#0B1C3E] font-medium">{filteredProducts.length}</span> products
                {activeCategory !== 'All' && <span className="text-[#D4A853]"> in {activeCategory}</span>}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-24 text-[#6B7A99] font-light">
                <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-6" />
                No products found for this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
