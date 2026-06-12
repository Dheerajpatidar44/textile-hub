import React from 'react';

const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0B1C3E]">{title}</h2>
      <div className={`w-12 h-0.5 bg-[#D4A853] mt-4 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-[#6B7A99] mt-5 max-w-xl font-light text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
