import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = {
  primary: '#0a1828',       // Deep Navy
  primaryDark: '#040a12',
  soil: '#0a1828',
  sand: '#FAF6F0',
  cream: '#FAF6F0',
  border: '#E8D5C4',
  stone: '#4A4A4A',
  accent: '#D79F88',        // Peach
};

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", category: "Trends", author: "Neha Gupta", readTime: "4 min read", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Blog & Insights
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7, fontWeight: 400 }}>
          Stay updated with the latest trends in the textile industry, design inspirations, and behind-the-scenes stories of traditional handloom crafts from India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#E8D5C4] overflow-hidden text-left hover:shadow-md transition-shadow cursor-pointer animate-fade-in"
            >
              <div className="w-full aspect-video bg-[#FAF6F0]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-[#4A4A4A] uppercase tracking-wider block mb-2 font-bold">{post.date}</span>
                <h3 className="text-[16px] font-bold text-[#0a1828] mb-4 line-clamp-2 leading-snug font-serif">{post.title}</h3>
                <span className="text-[11px] font-bold text-[#D79F88] tracking-widest uppercase flex items-center gap-1">
                  READ MORE <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
