import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image with decorative frame */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
                alt="Our Heritage"
                className="w-full object-cover"
                style={{ height: '580px', objectPosition: 'center' }}
              />
            </div>
            {/* Decorative frame offset */}
            <div className="absolute top-6 left-6 bottom-[-6px] right-[-6px] border border-[#D4A853]/40 z-0" />
          </div>

          {/* Right: Content */}
          <div className="space-y-7">
            <div>
              <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-4">Our Heritage</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0B1C3E] leading-tight mb-2">
                Decades of Weaving<br />
                <em className="not-italic italic text-[#D4A853]">Excellence & Tradition</em>
              </h2>
              <div className="w-12 h-0.5 bg-[#D4A853] mt-5" />
            </div>

            <p className="text-[#6B7A99] leading-relaxed text-base font-light">
              At LuminaTex, we believe that every fabric tells a story. For generations, we have sourced the finest threads and collaborated with master weavers across India to deliver textiles that blend timeless tradition with modern sophistication.
            </p>

            <p className="text-[#6B7A99] leading-relaxed text-base font-light">
              Our commitment to quality ensures that whether you are purchasing exquisite silk sarees or premium suiting blends, you are investing in unmatched craftsmanship and durability.
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-[#0B1C3E]/8">
              {[
                { label: 'Master Weavers', value: '200+' },
                { label: 'Fabric Categories', value: '12+' },
              ].map((fact) => (
                <div key={fact.label}>
                  <div className="text-2xl font-serif text-[#0B1C3E]">{fact.value}</div>
                  <div className="text-xs uppercase tracking-widest text-[#6B7A99] mt-1">{fact.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-[#0B1C3E] text-white px-8 py-3.5 text-xs font-medium tracking-widest uppercase hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-[#D4A853] text-[#D4A853] px-8 py-3.5 text-xs font-medium tracking-widest uppercase hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
