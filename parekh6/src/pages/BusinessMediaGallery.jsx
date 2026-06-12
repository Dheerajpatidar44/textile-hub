import { motion } from 'framer-motion';

export default function BusinessMediaGallery() {
  const galleryItems = [
    {
      title: "Global Textile Summit 2026",
      desc: "Our leadership team presenting the future of sustainable fabrics to international delegates and industry leaders.",
      category: "Event",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "New Manufacturing Unit Inauguration",
      desc: "Expanding our footprint with a state-of-the-art facility in Gujarat, boosting our production capacity by 40%.",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Award for Excellence in Exports",
      desc: "Receiving the national award for outstanding contribution to textile exports from the Ministry of Commerce.",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Annual Retailers Meet",
      desc: "Celebrating success and building stronger bonds with our 50,000+ retail partners across India.",
      category: "Community",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Launch of Eco-Weave Collection",
      desc: "A milestone event marking our commitment to 100% organic materials and environmentally friendly dyes.",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Skill Development Workshop",
      desc: "Empowering local artisans and weavers with modern textile technologies to preserve heritage crafts.",
      category: "CSR Initiative",
      image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 bg-[#faf8f5]">
      <div className="text-center py-16">
        <h1 className="font-playfair text-5xl text-vastram-brown">Business Media Gallery</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {galleryItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col cursor-pointer"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vastram-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category Pill */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-vastram-brown px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-sm">
                {item.category}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-playfair text-xl font-bold text-vastram-brown mb-3 group-hover:text-vastram-gold transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
