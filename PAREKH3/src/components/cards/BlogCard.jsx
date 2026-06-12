import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="group bg-white border border-[#0B1C3E]/6 hover:border-[#D4A853]/40 hover:shadow-[0_8px_40px_rgba(11,28,62,0.1)] transition-all duration-400 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="overflow-hidden" style={{ height: '220px' }}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Top amber line on hover */}
      <div className="h-0.5 bg-[#D4A853] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Content */}
      <div className="p-7 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-xs text-[#D4A853] mb-4 uppercase tracking-wider font-medium">
          <Calendar size={12} />
          {post.date}
        </div>
        <h3 className="text-xl font-serif font-medium text-[#0B1C3E] mb-3 line-clamp-2 leading-snug group-hover:text-[#D4A853] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#6B7A99] text-sm mb-6 flex-grow line-clamp-3 font-light leading-relaxed">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-[#0B1C3E] text-xs font-medium uppercase tracking-widest hover:text-[#D4A853] transition-colors group/link mt-auto"
        >
          Read Article
          <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
