import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Calendar, Filter } from 'lucide-react';

export default function BusinessMediaGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "State-of-the-Art Spinning Mill",
      category: "Manufacturing",
      date: "October 2026",
      desc: "Our automated spinning facilities where premium raw fibers are transformed into high-tenacity yarns.",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Artisanal Handloom Heritage",
      category: "Weaving",
      date: "September 2026",
      desc: "Honoring traditional weaving practices where master craftsmen hand-weave intricate silk borders.",
      image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Fabric Inspection & Quality Check",
      category: "Quality Control",
      date: "August 2026",
      desc: "Ensuring zero defects through rigorous multi-point inspection of every single fabric lot before dispatch.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Flagship Luxury Retail Outlet",
      category: "Retail Experience",
      date: "July 2026",
      desc: "Providing a world-class shopping environment with customized bridal consult rooms and tailoring suites.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Bespoke Styling & Design Room",
      category: "Design R&D",
      date: "June 2026",
      desc: "Where our design experts sketch contemporary silhouettes and draft custom patterns for the season.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      title: "Yarn Dyeing & Color Labs",
      category: "Dyeing",
      date: "May 2026",
      desc: "Creating rich, long-lasting colors with eco-friendly dyes and digital color matching technology.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const categories = ["All", "Manufacturing", "Weaving", "Quality Control", "Retail Experience", "Design R&D", "Dyeing"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pb-16 w-full min-h-screen bg-[#F6F3EB]">
      {/* Page Header Banner */}
      <div className="w-full bg-[#0C0C0C] text-white py-14 px-6 mb-10 text-center relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#F3ECE0] border-0 pb-0 text-3xl md:text-5xl tracking-widest uppercase font-bold m-0 text-center font-playfair">
            Business Gallery
          </h1>
          <div className="w-24 h-[1px] bg-[#C5A880] mx-auto mt-4 mb-3" />
          <p className="text-[#C5A880] text-[10px] md:text-xs uppercase tracking-widest font-semibold font-outfit">
            Media, Infrastructure & Operations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-4">
            <Filter size={14} />
            <span>Filter Operations</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0C0C0C] text-[#C5A880] border-[#C5A880] shadow-md scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-[#0C0C0C] hover:text-[#C5A880] hover:border-[#C5A880]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Column Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-xl border border-[#C5A880]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C5A880]/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                {/* Image Section */}
                <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0 bg-[#F6F3EB]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 z-10">
                    <div className="w-10 h-10 rounded-full border border-[#C5A880] bg-[#0C0C0C]/75 flex items-center justify-center text-[#C5A880] scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={16} />
                    </div>
                    <span className="text-[#C5A880] text-[9px] font-bold tracking-widest uppercase mt-1 font-outfit">
                      Zoom Image
                    </span>
                  </div>
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-[#0C0C0C] text-[#C5A880] border border-[#C5A880]/20 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm shadow-md z-10 font-outfit">
                    {item.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <span className="flex items-center gap-1.5 text-[#C5A880] text-[9px] font-semibold uppercase tracking-wider mb-2.5 font-outfit">
                    <Calendar size={11} />
                    {item.date}
                  </span>
                  <h3 className="font-playfair text-lg text-[#0C0C0C] group-hover:text-[#C5A880] transition-colors duration-300 font-bold uppercase tracking-wide leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-outfit line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#0C0C0C] border border-[#C5A880]/30 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 text-[#C5A880] bg-black/60 rounded-full p-2.5 hover:bg-black hover:text-[#F3ECE0] transition-colors border border-[#C5A880]/20 cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Image Side */}
              <div className="md:w-3/5 relative min-h-[300px] md:min-h-[450px] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Side */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between text-white bg-[#0C0C0C]">
                <div>
                  <span className="text-[#C5A880] text-[9px] uppercase tracking-widest font-semibold border border-[#C5A880]/30 px-3.5 py-1.5 self-start rounded-sm mb-4 inline-block font-outfit">
                    {activeItem.category}
                  </span>
                  <h3 className="font-playfair text-2xl text-[#F3ECE0] uppercase font-bold tracking-wide mb-3 leading-tight mt-2">
                    {activeItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[9px] uppercase tracking-wider mb-5 font-outfit">
                    <Calendar size={11} className="text-[#C5A880]" />
                    <span>Captured on {activeItem.date}</span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-outfit">
                    {activeItem.desc}
                  </p>
                </div>
                
                {/* Branding footer inside modal */}
                <div className="border-t border-[#C5A880]/10 pt-4 mt-8 flex items-center justify-between text-[9px] tracking-widest uppercase text-gray-500 font-outfit">
                  <span>Vara Weaves Operations</span>
                  <span className="text-[#C5A880]">Live Capture</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
