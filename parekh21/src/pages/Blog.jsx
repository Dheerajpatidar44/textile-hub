import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = { primary: '#721C2B', accent: '#CDA75E', bg: '#FAF6F0', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", category: "Trends", author: "Neha Gupta", readTime: "4 min read", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-24 pb-10 flex flex-col items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-black text-4xl sm:text-5xl mb-6" style={{ color: C.textDark }}>
            Blog
          </h1>
          <p className="text-[16px] sm:text-[18px] italic mb-8 leading-relaxed max-w-3xl font-medium" style={{ color: '#4B5563' }}>
            "Join and participate in our nation-wide campaign to digitalize the Textile<br className="hidden md:block"/>
            Sector, one of the largest sectors of India."
          </p>
          <h2 className="text-base sm:text-lg font-black tracking-widest mb-2 uppercase" style={{ color: C.textDark }}>
            Ethnic Elegance
          </h2>
          <p className="text-[11px] sm:text-[13px] font-black tracking-wide mb-1" style={{ color: C.accent }}>
            Textile Manufacturer & Entrepreneur
          </p>
          <p className="text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-8" style={{ color: '#6B7280' }}>
            INDIA
          </p>
          <div className="w-32 sm:w-48 h-[1px]" style={{ background: C.border }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white"
              style={{ border: `1.5px solid ${C.border}` }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest uppercase"
                  style={{ background: 'rgba(95,111,94,0.15)', border: `1px solid rgba(95,111,94,0.3)`, color: C.primary, backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-semibold" style={{ color: '#6B7280' }}>{post.date}</span>
                  <span className="w-1 h-1 rounded-full" style={{ background: C.primary }} />
                  <span className="text-[11px] font-semibold" style={{ color: '#6B7280' }}>{post.readTime}</span>
                </div>
                <h3 className="font-black text-lg mb-2 leading-snug transition-colors" style={{ color: C.textDark }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.textDark}>
                  {post.title}
                </h3>
                <p className="text-[12px] mb-4 font-semibold" style={{ color: '#4B5563' }}>By {post.author}</p>
                <div className="mt-auto pt-3" style={{ borderTop: `1px solid ${C.border}60` }}>
                  <span className="flex items-center gap-1.5 text-[12px] font-black tracking-wide" style={{ color: C.primary }}>
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
