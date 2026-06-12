import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ReviewCard from '../components/cards/ReviewCard';
import { reviews } from '../data/mockData';

const CustomerReview = () => {
  return (
    <div>
      <PageHeader title="Customer Reviews" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {/* Duplicating for demo purposes */}
          {reviews.map((review) => (
            <ReviewCard key={`copy1-${review.id}`} review={{...review, name: review.name + ' (Partner)'}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
