import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ReviewCard from '../components/cards/ReviewCard';
import { reviews } from '../data/mockData';

const CustomerReview = () => {
  return (
    <div>
      <PageHeader title="Customer Reviews" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="text-center mb-16">
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-3">Testimonials</p>
            <h2 className="text-4xl font-serif font-light text-[#0B1C3E]">What Our Clients Say</h2>
            <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
            {reviews.map((review) => (
              <ReviewCard key={`copy1-${review.id}`} review={{ ...review, name: review.name + ' (Partner)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
