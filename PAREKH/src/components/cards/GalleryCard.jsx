import React from 'react';
import { ZoomIn } from 'lucide-react';

const GalleryCard = ({ item }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-sm">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-brand-darkbrown bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
        <ZoomIn className="text-white w-10 h-10 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
        <h4 className="text-white font-serif font-medium text-center text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h4>
      </div>
    </div>
  );
};

export default GalleryCard;
