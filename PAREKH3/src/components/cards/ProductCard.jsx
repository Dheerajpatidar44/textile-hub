import React from 'react';
import { Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white overflow-hidden border border-[#0B1C3E]/6 hover:border-[#D4A853]/40 transition-all duration-400 hover:shadow-[0_8px_40px_rgba(11,28,62,0.12)]">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '300px' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0B1C3E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
          <button className="flex items-center gap-2 bg-[#D4A853] text-[#0B1C3E] px-5 py-2.5 text-xs font-medium uppercase tracking-widest translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
            <Eye size={14} />
            View Details
          </button>
        </div>
        {/* Top-left amber tag */}
        <div className="absolute top-3 left-3 bg-[#D4A853]/90 text-[#0B1C3E] text-[0.6rem] uppercase tracking-widest px-2.5 py-1 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 border-t border-[#D4A853]/10">
        <p className="text-[#D4A853] text-[0.6rem] uppercase tracking-[0.25em] font-medium mb-1.5">{product.category}</p>
        <h3 className="text-base font-serif font-medium text-[#0B1C3E] group-hover:text-[#D4A853] transition-colors">
          {product.name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
