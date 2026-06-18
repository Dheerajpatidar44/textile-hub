import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryLight: '#C49272',
  soil: '#231F20',
  sand: '#F4EDE4',
  cream: '#FAF8F5',
  border: '#EAE5DE',
  stone: '#5B5653',
  accent: '#A3704C',
};

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", category: "Trends", author: "Neha Gupta", readTime: "4 min read", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }} className="pt-[110px] pb-20">

      {/* Page Title inside section with minimal gap */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-8 text-left">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
          Blog & Insights
        </h1>
        <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginTop: 10 }} />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden text-left bg-white border border-[#EAE5DE] rounded-[16px] shadow-sm transition-all duration-300"
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(163, 112, 76, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[16px] shrink-0 border-b border-[#EAE5DE]">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div style={{ position: 'absolute', top: 12, left: 12, padding: '4px 12px', borderRadius: 20, background: 'rgba(250,248,245,0.96)', border: '1px solid #EAE5DE', boxShadow: '0 2px 8px rgba(35,31,32,0.06)' }}>
                  <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.accent, fontWeight: 700 }}>{post.category}</span>
                </div>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>{post.date}</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.accent }} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16.5, fontWeight: 700, color: C.soil, margin: '0 0 10px', lineHeight: 1.4, cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.soil}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 11.5, color: C.stone, margin: '0 0 16px', fontWeight: 500 }}>By {post.author}</p>
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid #EAE5DE` }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.primary, fontWeight: 700, cursor: 'pointer' }}>
                    Read More <ArrowRight size={13} />
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
