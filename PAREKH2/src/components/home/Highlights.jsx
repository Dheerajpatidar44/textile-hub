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
    <section className="relative py-24 bg-brand-darkbrown text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1605337096695-02534f31cfa0?q=80&w=2070&auto=format&fit=crop" 
          alt="Textile Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-brand-darkbrown/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C48B5D] mb-4">The ParekhTex Advantage</h2>
          <div className="w-24 h-1 bg-[#C48B5D] mx-auto opacity-50 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 group shadow-2xl hover:-translate-y-2">
              <div className="mb-6 bg-[#C48B5D]/20 p-4 rounded-2xl text-[#C48B5D] group-hover:scale-110 group-hover:bg-[#C48B5D] group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-white tracking-wide">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
