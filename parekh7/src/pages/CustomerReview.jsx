import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const reviews = [
  { text: "Textile Mall has been our trusted partner since years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
];

export default function CustomerReview() {
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
            Customer Review
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-7 rounded-2xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}
            >
              {/* Quote Icon */}
              <div className="mb-5">
                <Quote size={30} color="#C9A227" className="rotate-180" fill="rgba(201,162,39,0.2)" />
              </div>

              {/* Text */}
              <p className="leading-relaxed text-[15px] mb-8 flex-grow" style={{ color: '#7D5A4F' }}>
                {review.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-5 border-t"
                style={{ borderColor: 'rgba(201,162,39,0.15)' }}>
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover shadow-sm"
                    style={{ border: '2px solid rgba(201,162,39,0.3)' }}
                  />
                  <div>
                    <h4 className="font-bold text-[14px]" style={{ color: '#2C1810' }}>{review.name}</h4>
                    <p className="text-[11px] mt-0.5" style={{ color: '#A68B7C' }}>{review.role}</p>
                  </div>
                </div>
                <ArrowRight size={18} color="#C9A227" className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
