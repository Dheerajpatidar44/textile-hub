import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/cards/BlogCard';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  return (
    <div>
      <PageHeader title="Our Blog" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="mb-14">
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-3">Insights & Stories</p>
            <h2 className="text-4xl font-serif font-light text-[#0B1C3E]">From Our Desk</h2>
            <div className="w-12 h-0.5 bg-[#D4A853] mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
            {blogPosts.map((post) => (
              <BlogCard key={`copy-${post.id}`} post={{ ...post, id: post.id + 10 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
