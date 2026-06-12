import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Blog Page
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ background: '#FFFBF5', border: '1px solid rgba(201,162,39,0.15)' }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', color: '#C9A227', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-medium" style={{ color: '#A68B7C' }}>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4BDB6]" />
                  <span className="text-[11px] font-medium" style={{ color: '#A68B7C' }}>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 leading-snug group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                  {post.title}
                </h3>
                <p className="text-[12px] mb-4" style={{ color: '#A68B7C' }}>By {post.author}</p>
                <div className="mt-auto pt-3 border-t" style={{ borderColor: 'rgba(201,162,39,0.1)' }}>
                  <span className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide" style={{ color: '#B83227' }}>
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
