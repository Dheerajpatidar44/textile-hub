import React, { useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { categories } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Shop by Category" 
          subtitle="Discover our wide range of textile products tailored for your every need."
          center
        />
        
        <div className="relative group/slider w-full">
          {/* Left Arrow */}
          <button 
            onClick={() => slide('left')}
            className="absolute -left-3 md:-left-5 lg:-left-8 top-[35%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 text-brand-darkbrown hover:text-brand-maroon hover:bg-gray-50 transition-all"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 md:gap-6 lg:gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to="/products" 
                className="group flex-none w-32 md:w-40 lg:w-44 snap-start"
              >
                <div className="relative rounded-full overflow-hidden aspect-square mb-4 shadow-sm group-hover:shadow-lg transition-shadow">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-darkbrown/20 group-hover:bg-brand-maroon/40 transition-colors duration-300"></div>
                </div>
                <h3 className="text-center font-serif font-medium text-brand-darkbrown group-hover:text-brand-maroon transition-colors line-clamp-2">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => slide('right')}
            className="absolute -right-3 md:-right-5 lg:-right-8 top-[35%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 text-brand-darkbrown hover:text-brand-maroon hover:bg-gray-50 transition-all"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
