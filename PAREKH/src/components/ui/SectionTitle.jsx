import React from 'react';

const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-darkbrown mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-lg mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-brand-maroon mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
