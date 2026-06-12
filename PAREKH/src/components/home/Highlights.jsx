import React from 'react';
import { Award, Truck, ShieldCheck, Clock } from 'lucide-react';

const Highlights = () => {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-brand-light" />,
      title: 'Premium Quality',
      description: 'Finest textiles sourced from the best weavers and manufacturers.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-light" />,
      title: 'Trusted Heritage',
      description: 'Decades of experience in the textile retail business.'
    },
    {
      icon: <Truck className="w-10 h-10 text-brand-light" />,
      title: 'Pan India Delivery',
      description: 'Reliable and fast shipping across all regions in India.'
    },
    {
      icon: <Clock className="w-10 h-10 text-brand-light" />,
      title: '24/7 Support',
      description: 'Dedicated customer service to assist your business needs.'
    }
  ];

  return (
    <section className="py-16 bg-brand-darkbrown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 bg-white/10 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-brand-beige">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
