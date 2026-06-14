import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation" },
    { title: "Elegance in Rose Gold: The New Fall Collection", date: "May 28, 2026", category: "Collections" },
    { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship" }
  ];

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">The Journal</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Insights, News & Collections</p>
        </div>
      </div>

      {/* 1 Column Stack of Wide Horizontal Cards */}
      <div className="flex flex-col gap-8">
        {posts.map((post, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:border-rosegold-500 border border-gray-200 transition-all duration-300 flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="h-60 md:h-auto md:w-2/5 overflow-hidden relative shrink-0">
              <img 
                src={idx === 1 ? '/premium_saree_1781069280684.png' : '/hero_fabric_1781069270214.png'} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white text-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                {post.category}
              </div>
            </div>
            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center flex-grow">
              <p className="text-gray-400 text-xs mb-2 font-semibold uppercase tracking-wider">{post.date}</p>
              <h3 className="font-playfair text-xl md:text-2xl text-gray-900 mb-4 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide">
                {post.title}
              </h3>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rosegold-500 group-hover:text-rosegold-400 transition-colors">
                Read Article <ArrowRight size={14} />
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
