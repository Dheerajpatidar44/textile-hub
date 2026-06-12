import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../cards/ProductCard';
import { featuredProducts } from '../../data/mockData';

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Collection" 
          subtitle="Explore our handpicked selection of premium textiles, crafted with elegance and tradition."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
