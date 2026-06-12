import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroSilk from '../../assets/hero_silk.png';
import heroSuiting from '../../assets/hero_suiting.png';
import heroUpholstery from '../../assets/hero_upholstery.png';

const slides = [
  {
    id: 1,
    image: heroSilk,
    title: 'Exquisite Silk Collections',
    subtitle: 'Discover the heritage of Indian textiles with our premium silk sarees.',
    cta: 'Explore Collection',
    link: '/products'
  },
  {
    id: 2,
    image: heroSuiting,
    title: 'Premium Suiting Fabrics',
    subtitle: 'Crafting confidence with the finest blends of suiting and shirting.',
    cta: 'View Fabrics',
    link: '/products'
  },
  {
    id: 3,
    image: heroUpholstery,
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
    <div className="relative h-[calc(100vh-5rem)] w-full overflow-hidden bg-brand-darkbrown">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[20000ms] ease-out ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-12 mt-12">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-white mb-6 drop-shadow-xl tracking-wide max-w-5xl leading-tight transform translate-y-0 transition-transform duration-1000">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl drop-shadow-md font-light tracking-wide">
              {slide.subtitle}
            </p>
            <Link
              to={slide.link}
              className="btn-outline-premium text-white border-white hover:bg-white hover:text-black text-lg px-10 py-3 tracking-widest uppercase transition-all duration-500"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-[#022c22]/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-[#022c22]/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === current ? 'bg-[#C48B5D]' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
