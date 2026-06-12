import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Highlights from '../components/home/Highlights';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Highlights />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
};

export default Home;
