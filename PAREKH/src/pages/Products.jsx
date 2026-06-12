import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProductCard from '../components/cards/ProductCard';
import { featuredProducts, categories } from '../data/mockData';


const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Generating a larger mock list based on featuredProducts
  const allProducts = [
    ...featuredProducts,
    { id: 105, name: 'Bridal Lehenga', category: 'Formal & Ethnic Wear for Women', price: '$450', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
    { id: 106, name: 'Cotton Leggings', category: 'Leggings', price: '$20', image: 'https://images.unsplash.com/photo-1583391733958-650fac5ecf7c?auto=format&fit=crop&q=80&w=800' },
    { id: 107, name: 'Kids Ethnic Kurta', category: 'Formal & Ethnic Wear for Children', price: '$45', image: 'https://images.unsplash.com/photo-1610030469983-98e550905b0f?auto=format&fit=crop&q=80&w=800' },
    { id: 108, name: 'Sherwani Set', category: 'Formal & Ethnic Wear for Men', price: '$250', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e5?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory || categories.find(c => c.name === activeCategory)?.name === p.category);

  return (
    <div>
      <PageHeader title="Our Products" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-serif font-bold text-brand-darkbrown mb-4 border-b pb-2">Categories</h3>
              <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                <li>
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`w-full text-left px-2 py-1 rounded transition-colors ${activeCategory === 'All' ? 'bg-brand-light text-brand-maroon font-semibold' : 'text-gray-600 hover:text-brand-maroon'}`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full text-left px-2 py-1 rounded transition-colors ${activeCategory === cat.name ? 'bg-brand-light text-brand-maroon font-semibold' : 'text-gray-600 hover:text-brand-maroon'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500">
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
