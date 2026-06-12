import React from 'react';
import ReviewCard from '../cards/ReviewCard';
import { reviews } from '../../data/mockData';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="text-center mb-16">
          <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-3">Client Voices</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0B1C3E]">What Our Clients Say</h2>
          <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
