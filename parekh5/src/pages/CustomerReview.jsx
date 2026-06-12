import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

export default function CustomerReview() {
  const reviews = [
    { 
      text: "Textile Mall has been our trusted partner since years. The quality, prices and service are unmatched in the entire industry.", 
      name: "Rajesh Sharma", 
      role: "Retailer, Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    { 
      text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", 
      name: "Ahmed Al-Sayed", 
      role: "Gulf Textiles, UAE",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    { 
      text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", 
      name: "Vikas Kulkarni", 
      role: "National Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center py-16">
        <h1 className="font-playfair text-5xl md:text-6xl text-[#1B484E] font-bold">Customer Reviews</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#faf8f5] p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col cursor-pointer group"
          >
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote className="text-[#c1a075] fill-[#c1a075] rotate-180" size={32} />
            </div>

            {/* Review Text */}
            <p className="text-[#4a4a4a] leading-relaxed text-[15px] font-medium mb-10 flex-grow">
              {review.text}
            </p>

            {/* Footer with Profile, Name, Role, and Arrow */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white"
                />
                <div>
                  <h4 className="text-[#333] font-bold text-[15px] tracking-wide">{review.name}</h4>
                  <p className="text-gray-500 text-[12px] font-medium mt-0.5">{review.role}</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-[#c1a075] group-hover:text-[#1B484E] group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
