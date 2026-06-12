import React from 'react';
import ProductCard from '../cards/ProductCard';
import { featuredProducts } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  return (
    <section className="pt-10 pb-24 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-3">Curated Selection</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0B1C3E]">Featured Collection</h2>
            <div className="w-12 h-0.5 bg-[#D4A853] mt-4" />
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-[#0B1C3E] text-xs uppercase tracking-widest font-medium hover:text-[#D4A853] transition-colors"
          >
            View All Products
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
