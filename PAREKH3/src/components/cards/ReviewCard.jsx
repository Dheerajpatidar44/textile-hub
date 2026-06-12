import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="group bg-[#FAF7F0] border border-[#0B1C3E]/6 p-8 hover:border-[#D4A853]/40 hover:shadow-[0_8px_40px_rgba(11,28,62,0.1)] transition-all duration-400 relative">
      {/* Quote decoration */}
      <div className="absolute top-6 right-6 text-[#D4A853]/15 group-hover:text-[#D4A853]/25 transition-colors">
        <Quote size={36} strokeWidth={1} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? 'text-[#D4A853] fill-[#D4A853]' : 'text-[#0B1C3E]/15'}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[#6B7A99] text-sm leading-relaxed mb-7 font-light line-clamp-4">
        "{review.text}"
      </p>

      {/* Divider */}
      <div className="h-px bg-[#0B1C3E]/8 mb-6" />

      {/* Reviewer */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-[#0B1C3E] text-white flex items-center justify-center font-serif text-lg font-medium shrink-0">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#0B1C3E]">{review.name}</h4>
          <span className="text-xs text-[#D4A853] uppercase tracking-widest">Verified Customer</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
