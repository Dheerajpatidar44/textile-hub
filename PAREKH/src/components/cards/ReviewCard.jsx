import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-brand-light border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex text-brand-maroon mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 text-lg line-clamp-4">"{review.text}"</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 bg-brand-maroon text-white rounded-full flex items-center justify-center font-serif text-xl font-bold">
          {review.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-brand-darkbrown">{review.name}</h4>
          <span className="text-sm text-gray-500">Verified Customer</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
