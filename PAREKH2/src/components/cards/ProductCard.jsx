import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card-premium overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-brand-darkbrown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-brand-gold text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-darkbrown transition-colors flex items-center shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
            <ShoppingBag className="w-4 h-4 mr-2" /> View Details
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold">{product.category}</p>
        </div>
        <h3 className="text-xl font-serif font-bold text-brand-maroon mb-2">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
