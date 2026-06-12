import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="bg-brand-darkbrown text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1610030469983-98e550905b0f?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-beige mb-4">{title}</h1>
        <div className="flex items-center text-sm text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-brand-light">{breadcrumb || title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
