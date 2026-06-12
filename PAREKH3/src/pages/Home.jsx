import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import Categories from '../components/home/Categories';
import BrandStory from '../components/home/BrandStory';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Highlights from '../components/home/Highlights';
import Testimonials from '../components/home/Testimonials';
import HomeContact from '../components/home/HomeContact';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <BrandStory />
      <Highlights />
      <Testimonials />
      <HomeContact />
    </>
  );
};

export default Home;
