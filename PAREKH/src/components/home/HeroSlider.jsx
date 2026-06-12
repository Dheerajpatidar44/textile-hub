import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920',
    title: 'Exquisite Silk Collections',
    subtitle: 'Discover the heritage of Indian textiles with our premium silk sarees.',
    cta: 'Explore Collection',
    link: '/products'
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1674718916590-4a560d46d655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Premium Suiting Fabrics',
    subtitle: 'Crafting confidence with the finest blends of suiting and shirting.',
    cta: 'View Fabrics',
    link: '/products'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1920',
    title: 'Elegant Home Upholstery',
    subtitle: 'Transform your living spaces with our luxurious home furnishing range.',
    cta: 'Shop Now',
    link: '/products'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-brand-darkbrown">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-10000 ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 drop-shadow-lg transform translate-y-[-20px] transition-all duration-700">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl drop-shadow-md">
              {slide.subtitle}
            </p>
            <Link
              to={slide.link}
              className="px-8 py-4 bg-brand-maroon text-white font-bold text-lg rounded hover:bg-red-900 transition-colors shadow-lg"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-red-900/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-red-900/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-brand-maroon w-8' : 'bg-white/50 hover:bg-red-900'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
