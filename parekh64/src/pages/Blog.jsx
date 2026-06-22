import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = {
  primary: '#2B2520',       // Dark Charcoal
  primaryLight: '#4A423F',  // Medium Charcoal
  primaryDark: '#1E1A17',   // Deep Charcoal
  accent: '#C5A880',        // Champagne Gold
  gold: '#C5A880',
  bg: '#FDFBF7',
  border: '#EAE5DB',
  stone: '#6C625C',
  soil: '#2B2520',
};

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", category: "Trends", author: "Neha Gupta", readTime: "4 min read", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
            Articles
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Blog & Insights
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Introduction */}
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7, fontWeight: 500 }}>
          Stay updated with the latest trends in the textile industry, design inspirations, and behind-the-scenes stories of traditional handloom crafts from India.
        </p>

        {/* Magazine-style image overlay grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm group border border-[#EAE5DB] cursor-pointer animate-fade-in"
            >
              {/* Zoom image */}
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 absolute inset-0" 
                loading="lazy" 
              />
              {/* Warm dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A17]/90 via-[#1E1A17]/30 to-transparent flex flex-col justify-end p-6 text-left" />

              {/* Float info */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col items-start">
                <span style={{
                  fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.15em',
                  padding: '4px 8px', background: 'rgba(197, 168, 128, 0.2)',
                  color: C.accent, fontWeight: 700, borderRadius: '4px', marginBottom: 10
                }}>
                  {post.category}
                </span>
                
                <h3 className="text-[18px] font-bold font-serif text-white m-0 tracking-wider leading-snug line-clamp-3">
                  {post.title}
                </h3>
                
                <span className="text-[10px] text-[#FAF7F2] opacity-75 mt-2 block">
                  {post.date} · {post.readTime}
                </span>

                <span className="text-[10px] font-bold text-[#C5A880] group-hover:text-white tracking-widest uppercase flex items-center gap-1 transition-colors mt-4">
                  READ ARTICLE <ArrowRight size={11} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
