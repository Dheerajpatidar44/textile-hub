import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBanner from '../../assets/image.png';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#060F22]">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Premium Lumina Textiles Collection"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060F22]/85 via-[#060F22]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060F22]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4A853]/20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >          
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.05] mb-6"
          >
            Threads of<br />
            <em className="not-italic text-[#D4A853]">Timeless</em>
            Elegance
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-lg"
          >
            From hand-woven silks to premium suiting — every fabric in our collection tells a story of craft, culture, and uncompromising quality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 bg-[#D4A853] text-[#0B1C3E] px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-white transition-all duration-300"
            >
              Explore Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-white/25 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
            >
              Our Heritage
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
