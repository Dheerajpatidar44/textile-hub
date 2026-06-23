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
      title: "Elegance in Weaving: The New Fall Collection",
      date: "May 28, 2026",
      category: "Collections",
      excerpt: "An exclusive look into our autumn metallic catalog, featuring traditional weaving patterns combined with contemporary elements.",
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
    <div className="pb-16 w-full min-h-screen bg-[#F4F8F9] font-outfit">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        {/* Compact Page Heading */}
        <div className="mb-8 border-b border-gray-200 pb-3 text-left">
          <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
            The Journal
          </h1>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0A5F73]/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Image Section */}
              <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0" />
                <span className="absolute top-4 left-4 bg-[#0C2E3A] text-[#10859F] border border-white/10 text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-md z-10">
                  {post.category}
                </span>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[#0A5F73] text-[9px] font-bold uppercase tracking-wider mb-3">
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
                <h3 className="font-playfair text-lg text-[#0C2E3A] group-hover:text-[#0A5F73] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug mb-3">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-[#4F6D7A] text-xs leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Read Button */}
                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#0C2E3A] group-hover:text-[#0A5F73] transition-colors duration-300">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
