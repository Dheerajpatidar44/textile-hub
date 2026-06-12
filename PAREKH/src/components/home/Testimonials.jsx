import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ReviewCard from '../cards/ReviewCard';
import { reviews } from '../../data/mockData';

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Hear from our satisfied retail partners and customers."
          center
        />
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
