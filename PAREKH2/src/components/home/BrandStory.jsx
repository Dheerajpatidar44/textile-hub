import React from 'react';
import { Link } from 'react-router-dom';
import brandStoryImage from '../../assets/brand_story.png';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img 
                src={brandStoryImage} 
                alt="Our Heritage" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#C48B5D] rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#064e3b] rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0 hidden md:block"></div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8 z-10">
            <div>
              <p className="text-[#C48B5D] uppercase tracking-widest font-semibold text-sm mb-3">Our Heritage</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#022c22] leading-tight mb-6">
                Decades of Weaving <br/>
                <span className="italic text-[#064e3b]">Excellence & Tradition</span>
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              At ParekhTex, we believe that every fabric tells a story. For generations, we have sourced the finest threads and collaborated with master weavers across India to deliver textiles that blend timeless tradition with modern sophistication.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg font-light pb-4">
              Our commitment to quality ensures that whether you are purchasing exquisite silk sarees or premium suiting blends, you are investing in unmatched craftsmanship and durability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
              <Link to="/about" className="btn-premium text-center">
                Discover Our Story
              </Link>
              <Link to="/contact" className="btn-outline-premium text-center">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
