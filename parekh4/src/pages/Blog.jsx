import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation" },
    { title: "Elegance in Rose Gold: The New Fall Collection", date: "May 28, 2026", category: "Collections" },
    { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship" }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center py-12">
        <p className="text-rosegold-500 font-medium tracking-widest uppercase text-sm mb-4">Insights & News</p>
        <h1 className="font-playfair text-5xl text-sapphire-900">The TEXMART Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={idx === 1 ? '/premium_saree_1781069280684.png' : '/hero_fabric_1781069270214.png'} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-pearl-50 text-sapphire-900 px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-8">
              <p className="text-sapphire-800/50 text-sm mb-3">{post.date}</p>
              <h3 className="font-playfair text-2xl text-sapphire-900 mb-4 group-hover:text-rosegold-500 transition-colors">{post.title}</h3>
              <p className="flex items-center gap-2 text-sm font-medium text-sapphire-700 mt-6 group-hover:text-rosegold-400 transition-colors">
                Read Article <ArrowRight size={16} />
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
