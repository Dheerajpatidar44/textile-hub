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
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Business Gallery</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Media, Infrastructure & Operations</p>
        </div>
      </div>

      {/* 1 Column Layout of Wide Horizontal Cards */}
      <div className="flex flex-col gap-8">
        {galleryItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col md:flex-row bg-white border border-gray-200 overflow-hidden hover:border-rosegold-500 hover:shadow-xl transition-all duration-300"
          >
            {/* Image section */}
            <div className="relative h-60 md:h-auto md:w-2/5 overflow-hidden bg-pearl-100 shrink-0">
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
            <div className="p-8 flex flex-col justify-center flex-grow bg-white">
              <span className="text-[10px] text-rosegold-500 font-bold uppercase tracking-widest mb-1.5">{item.date}</span>
              <h3 className="font-playfair text-lg md:text-xl text-gray-900 font-semibold mb-2 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-650 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
