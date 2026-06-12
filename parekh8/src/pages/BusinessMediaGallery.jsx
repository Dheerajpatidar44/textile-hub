import { motion } from 'framer-motion';

const galleryItems = [
  { title: "Global Textile Summit 2026", desc: "Our leadership team presenting the future of sustainable fabrics to international delegates and industry leaders.", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "New Manufacturing Unit Inauguration", desc: "Expanding our footprint with a state-of-the-art facility in Gujarat, boosting our production capacity by 40%.", category: "Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" },
  { title: "Award for Excellence in Exports", desc: "Receiving the national award for outstanding contribution to textile exports from the Ministry of Commerce.", category: "Achievement", image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60" },
  { title: "Annual Retailers Meet", desc: "Celebrating success and building stronger bonds with our 50,000+ retail partners across India.", category: "Community", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60" },
  { title: "Launch of Eco-Weave Collection", desc: "A milestone event marking our commitment to 100% organic materials and environmentally friendly dyes.", category: "Product Launch", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=60" },
  { title: "Skill Development Workshop", desc: "Empowering local artisans and weavers with modern textile technologies to preserve heritage crafts.", category: "CSR Initiative", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&auto=format&fit=crop&q=60" },
];

export default function BusinessMediaGallery() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Business Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.15)' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest"
                  style={{ background: 'rgba(225,77,42,0.15)', border: '1px solid rgba(225,77,42,0.4)', color: '#E14D2A', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-[15px] mb-1.5 leading-snug transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                  {item.title}
                </h3>
                <p className="text-[12px] leading-relaxed line-clamp-3" style={{ color: '#6B6B6B' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
