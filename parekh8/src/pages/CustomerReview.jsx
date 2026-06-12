import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const reviews = [
  { text: "Textile Mall has been our trusted partner since years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time.", name: "Anita Desai", role: "Design Head, Mumbai", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
];

export default function CustomerReview() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Customer Review
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-7 rounded-2xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFFFF', border: '1.5px solid rgba(225,77,42,0.2)' }}
            >
              {/* Quote Icon */}
              <div className="mb-5">
                <Quote size={30} color="#E14D2A" className="rotate-180" fill="rgba(225,77,42,0.2)" />
              </div>

              {/* Text */}
              <p className="leading-relaxed text-[13px] mb-6 flex-grow line-clamp-4" style={{ color: '#4B4B4B' }}>
                {review.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-5 border-t"
                style={{ borderColor: 'rgba(225,77,42,0.15)' }}>
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover shadow-sm"
                    style={{ border: '2px solid rgba(225,77,42,0.3)' }}
                  />
                  <div>
                    <h4 className="font-bold text-[14px]" style={{ color: '#303030' }}>{review.name}</h4>
                    <p className="text-[11px] mt-0.5" style={{ color: '#6B6B6B' }}>{review.role}</p>
                  </div>
                </div>
                <ArrowRight size={18} color="#E14D2A" className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
