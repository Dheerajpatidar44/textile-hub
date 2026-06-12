import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-brand-maroon mb-3 font-medium">
          <Calendar className="w-4 h-4 mr-2" />
          {post.date}
        </div>
        <h3 className="text-xl font-serif font-semibold text-brand-darkbrown mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>
        <Link to={`/blog/${post.id}`} className="inline-flex items-center text-brand-darkbrown font-semibold hover:text-brand-maroon transition-colors mt-auto">
          Read More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
