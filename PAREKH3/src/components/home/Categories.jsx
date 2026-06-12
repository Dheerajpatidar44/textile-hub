import React, { useRef } from 'react';
import { categories } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 pb-10 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-3">Our Collections</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0B1C3E]">Shop by Category</h2>
            <div className="w-12 h-0.5 bg-[#D4A853] mt-4" />
          </div>
          <p className="text-[#6B7A99] text-sm max-w-xs leading-relaxed md:text-right font-light">
            Discover our wide range of premium textile products tailored for every occasion.
          </p>
        </div>

        {/* Slider with arrows */}
        <div className="relative group/slider">
          {/* Left Arrow */}
          <button
            onClick={() => slide('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#0B1C3E] text-white flex items-center justify-center hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300 shadow-lg opacity-0 group-hover/slider:opacity-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/products"
                className="group flex-none w-52 snap-start"
              >
                {/* Image container */}
                <div className="relative aspect-[2/3] overflow-hidden mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#0B1C3E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[#D4A853] text-xs uppercase tracking-widest font-medium border border-[#D4A853] px-4 py-2">
                      Explore
                    </span>
                  </div>
                  {/* Amber bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A853] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                {/* Category name */}
                <h3 className="text-sm font-medium text-[#0B1C3E] group-hover:text-[#D4A853] transition-colors tracking-wide">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => slide('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#0B1C3E] text-white flex items-center justify-center hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300 shadow-lg opacity-0 group-hover/slider:opacity-100"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
