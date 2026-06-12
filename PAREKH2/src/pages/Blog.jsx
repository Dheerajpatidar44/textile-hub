import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/cards/BlogCard';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  return (
    <div>
      <PageHeader title="Our Blog" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          {/* Duplicating for demo purposes */}
          {blogPosts.map((post) => (
            <BlogCard key={`copy-${post.id}`} post={{...post, id: post.id + 10}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
