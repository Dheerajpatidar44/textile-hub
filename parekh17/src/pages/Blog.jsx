import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "The Future of Sustainable Weaving",
      date: "June 10, 2026",
      category: "Innovation",
      excerpt: "Explore how our solar-powered looms and biodegradable organic fibers are setting new standards in zero-waste luxury textiles.",
      readTime: "4 Mins Read",
      image: "/images/royal_saree_model.png"
    },
    {
      title: "Elegance in Rose Gold: The New Fall Collection",
      date: "May 28, 2026",
      category: "Collections",
      excerpt: "An exclusive look into our autumn metallic catalog, featuring traditional zari woven seamlessly with contemporary rose gold threads.",
      readTime: "5 Mins Read",
      image: "/premium_saree_1781069280684.png"
    },
    {
      title: "Behind the Scenes: Crafting the Perfect Saree",
      date: "May 15, 2026",
      category: "Craftsmanship",
      excerpt: "Step inside our master weaving sheds where single banarasi silk sarees undergo a rigorous, 120-hour hand-loomed weaving process.",
      readTime: "6 Mins Read",
      image: "/hero_fabric_1781069270214.png"
    }
  ];

  return (
    <div className="pb-16 w-full min-h-screen bg-[#F6F3EB]">
      {/* Page Header Banner */}
      <div className="w-full bg-[#0C0C0C] text-white py-14 px-6 mb-12 text-center relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#F3ECE0] border-0 pb-0 text-3xl md:text-5xl tracking-widest uppercase font-bold m-0 text-center font-playfair">
            The Journal
          </h1>
          <div className="w-24 h-[1px] bg-[#C5A880] mx-auto mt-4 mb-3" />
          <p className="text-[#C5A880] text-[10px] md:text-xs uppercase tracking-widest font-semibold font-outfit">
            Insights, News & Collections
          </p>
        </div>
      </div>
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white rounded-xl border border-[#C5A880]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C5A880]/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Section */}
              <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-0" />
                <span className="absolute top-4 left-4 bg-[#0C0C0C] text-[#C5A880] border border-[#C5A880]/20 text-[9px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-sm shadow-md z-10 font-outfit">
                  {post.category}
                </span>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[#C5A880] text-[10px] font-semibold uppercase tracking-wider mb-3 font-outfit">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-playfair text-xl text-[#0C0C0C] group-hover:text-[#C5A880] transition-colors duration-300 font-bold uppercase tracking-wide leading-snug mb-3">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow font-outfit">
                  {post.excerpt}
                </p>
                
                {/* Read Button */}
                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between text-[11px] font-bold tracking-widest uppercase text-[#0C0C0C] group-hover:text-[#C5A880] transition-colors duration-300 font-outfit">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
