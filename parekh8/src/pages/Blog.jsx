import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", category: "Trends", author: "Neha Gupta", readTime: "4 min read", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-24 pb-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Blog & Article
          </h1>
          
          <p className="text-[17px] sm:text-[20px] md:text-[22px] italic mb-10 text-[#6B7B8A] leading-relaxed max-w-3xl">
            "Join and participate in our nation-wide campaign to digitalize the Textile<br className="hidden md:block"/> Sector, one of the largest sectors of India".
          </p>

          <h2 className="text-lg sm:text-xl font-bold tracking-widest mb-3 uppercase"
              style={{ color: '#2C3E50' }}>
            Samriddhi
          </h2>
          
          <p className="text-[12px] sm:text-[14px] font-bold tracking-wide mb-1"
             style={{ color: '#A87A44' }}>
            Textile Manufacturer & Entrepreneur
          </p>
          
          <p className="text-[11px] sm:text-[12px] font-bold tracking-widest uppercase mb-12"
             style={{ color: '#9AA7B1' }}>
            INDIA
          </p>

          <div className="w-32 sm:w-48 h-[1px]" style={{ background: '#D6C4B0' }}></div>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.15)' }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(225,77,42,0.15)', border: '1px solid rgba(225,77,42,0.4)', color: '#E14D2A', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-medium" style={{ color: '#6B6B6B' }}>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#E14D2A]" />
                  <span className="text-[11px] font-medium" style={{ color: '#6B6B6B' }}>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 leading-snug group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                  {post.title}
                </h3>
                <p className="text-[12px] mb-4" style={{ color: '#6B6B6B' }}>By {post.author}</p>
                <div className="mt-auto pt-3 border-t" style={{ borderColor: 'rgba(225,77,42,0.1)' }}>
                  <span className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide" style={{ color: '#E14D2A' }}>
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
