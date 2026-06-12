import React from 'react';
import { Award, ShieldCheck, Truck, Clock } from 'lucide-react';

const Highlights = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Finest textiles sourced from master weavers and manufacturers across India.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Heritage',
      description: 'Over three decades of expertise in premium textile retail.',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'Reliable and fast shipping across all regions in India.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Dedicated customer service to assist your business needs.',
    },
  ];

  return (
    <section className="py-20 bg-[#0B1C3E] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D4A853 0px, #D4A853 1px, transparent 1px, transparent 60px)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* Section label */}
        <div className="text-center mb-16">
          <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white">
            The LuminaTex Advantage
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#0B1C3E] p-10 flex flex-col hover:bg-[#132452] transition-colors duration-300 border-l border-[#D4A853]/10 first:border-l-0"
            >
              <div className="mb-6 w-12 h-12 border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] group-hover:bg-[#D4A853]/10 transition-all duration-300">
                <feature.icon className="w-5 h-5 text-[#D4A853]" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed font-light">{feature.description}</p>
              {/* Bottom accent */}
              <div className="mt-8 h-px bg-[#D4A853] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
