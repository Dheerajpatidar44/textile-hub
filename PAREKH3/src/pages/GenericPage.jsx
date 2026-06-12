import React from 'react';
import { motion } from 'framer-motion';

const GenericPage = ({ title, description }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-neutral-light px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">{title}</h1>
        <p className="text-lg text-primary/70 mb-8 leading-relaxed">
          {description || `The ${title} section is currently under development. Please check back later for updates on this premium feature.`}
        </p>
        <button className="btn-primary">
          Return to Home
        </button>
      </motion.div>
    </div>
  );
};

export default GenericPage;
