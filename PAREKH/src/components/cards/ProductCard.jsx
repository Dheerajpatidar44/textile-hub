import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-[2px] transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-brand-darkbrown px-6 py-2 rounded-full font-medium hover:bg-brand-maroon hover:text-white transition-colors flex items-center">
            <ShoppingBag className="w-4 h-4 mr-2" /> Quick View
          </button>
        </div>
      </div>
      <div className="p-5 text-center">
        <p className="text-brand-maroon text-sm font-medium mb-1">{product.category}</p>
        <h3 className="text-xl font-serif font-semibold text-brand-darkbrown mb-2">{product.name}</h3>

      </div>
    </div>
  );
};

export default ProductCard;
