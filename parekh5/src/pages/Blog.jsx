import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    { 
      title: "The Future of Sustainable Weaving", 
      date: "June 10, 2026", 
      category: "Innovation", 
      author: "Priya Sharma",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhYnJpY3N8ZW58MHx8MHx8fDA%3D" 
    },
    { 
      title: "Elegance in Threads: The Fall Collection", 
      date: "May 28, 2026", 
      category: "Collections", 
      author: "Rajiv Kapoor",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsb3RoJTIwZmFicmljfGVufDB8fDB8fHww" 
    },
    { 
      title: "Behind the Scenes: Crafting the Perfect Saree", 
      date: "May 15, 2026", 
      category: "Craftsmanship", 
      author: "Ananya Patel",
      readTime: "6 min read",
      image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3JhZnRpbmclMjB0aGUlMjBQZXJmZWN0JTIwU2FyZWV8ZW58MHx8MHx8fDA%3D" 
    }
  ];

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center py-16">
        <h1 className="font-playfair text-5xl md:text-6xl text-[#1B484E] font-bold">The Textile Journal</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {posts.map((post, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl mb-5 shadow-sm">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <h3 className="font-playfair font-bold text-xl text-[#333] mb-1.5 group-hover:text-[#1B484E] transition-colors leading-snug">
              {post.title}
            </h3>
            
            <p className="text-gray-500 text-[13px] font-medium mb-4">
              {post.date}
            </p>
            
            <div className="mt-auto pt-2">
              <span className="flex items-center text-[#1B484E] font-bold text-[13px] tracking-wide group-hover:text-[#215A62] transition-colors">
                Read More <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
