import { motion } from 'framer-motion';

export default function BusinessMediaGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "State-of-the-Art Spinning Mill",
      category: "Manufacturing",
      date: "October 2026",
      desc: "Our automated spinning facilities where premium raw fibers are transformed into high-tenacity yarns.",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Artisanal Handloom Heritage",
      category: "Weaving",
      date: "September 2026",
      desc: "Honoring traditional weaving practices where master craftsmen hand-weave intricate silk borders.",
      image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Fabric Inspection & Quality Check",
      category: "Quality Control",
      date: "August 2026",
      desc: "Ensuring zero defects through rigorous multi-point inspection of every single fabric lot before dispatch.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "Flagship Luxury Retail Outlet",
      category: "Retail Experience",
      date: "July 2026",
      desc: "Providing a world-class shopping environment with customized bridal consult rooms and tailoring suites.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Bespoke Styling & Design Room",
      category: "Design R&D",
      date: "June 2026",
      desc: "Where our design experts sketch contemporary silhouettes and draft custom patterns for the season.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      title: "Yarn Dyeing & Color Labs",
      category: "Dyeing",
      date: "May 2026",
      desc: "Creating rich, long-lasting colors with eco-friendly dyes and digital color matching technology.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="space-y-6 -mt-8">
      <div className="text-center pt-0 pb-2">
        <p className="text-rosegold-500 font-medium tracking-widest uppercase text-xs mb-2">Media & Operations</p>
        <h1 className="mb-0 pb-2 border-b border-gray-200">Business Gallery</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {galleryItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-rosegold-500 hover:shadow-xl transition-all duration-300"
          >
            {/* Image section */}
            <div className="relative h-64 overflow-hidden bg-pearl-100">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="bg-white text-rosegold-500 px-5 py-2 text-xs uppercase tracking-wider font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Full Size
                </span>
              </div>
              <span className="absolute top-4 left-4 bg-rosegold-500 text-pearl-100 text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                {item.category}
              </span>
            </div>

            {/* Text details below image */}
            <div className="p-6 flex flex-col flex-grow bg-white">
              <span className="text-[10px] text-rosegold-500 font-bold uppercase tracking-widest mb-1.5">{item.date}</span>
              <h3 className="font-playfair text-xl text-gray-900 font-bold mb-2 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
