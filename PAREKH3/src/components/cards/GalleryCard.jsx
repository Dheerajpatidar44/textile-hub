import React from 'react';
import { ZoomIn } from 'lucide-react';

const GalleryCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover group-hover:scale-108 transition-transform duration-700"
        style={{ objectFit: 'cover' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B1C3E]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-6">
        <div className="border border-[#D4A853] p-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
          <ZoomIn className="text-[#D4A853] w-5 h-5" />
        </div>
        <h4 className="text-white font-serif text-center text-sm translate-y-3 group-hover:translate-y-0 transition-transform duration-400 delay-75">
          {item.title}
        </h4>
      </div>
      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#D4A853] py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
        <span className="text-[#0B1C3E] text-[0.6rem] uppercase tracking-widest font-medium">{item.type}</span>
      </div>
    </div>
  );
};

export default GalleryCard;
