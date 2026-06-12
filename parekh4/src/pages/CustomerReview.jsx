import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function CustomerReview() {
  const reviews = [
    { 
      tag: "INSTITUTIONAL PARTNER",
      text: "TEXMART has redefined polyfabric standards for us. Their consistency in yarn strength over 8 years is unmatched in India.", 
      name: "RAJESH SINGHANIA", 
      role: "Director, Apex Logistics" 
    },
    { 
      tag: "GLOBAL EXPORT",
      text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our Middle East supply chain.", 
      name: "AHMED AL-SAYED", 
      role: "Gulf Textiles, UAE" 
    },
    { 
      tag: "CUSTOM R&D",
      text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", 
      name: "VIKAS KULKARNI", 
      role: "National Agri-Solutions" 
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <div className="text-center py-12">
        <h1 className="font-playfair text-5xl text-[#2d0a4e] font-bold">Customer Review</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-8">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col min-h-[300px]"
          >
            {/* Quote Icon */}
            <Quote className="text-[#2d0a4e] mb-4 fill-current rotate-180" size={32} />

            {/* Tag */}
            <div className="mb-5">
              <span className="bg-[#d8a5ad]/10 text-[#2d0a4e] text-[9px] font-bold uppercase tracking-[0.2em] py-1 px-2.5">
                {review.tag}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-[#2d0a4e] leading-relaxed text-sm mb-6 font-playfair italic flex-grow">
              "{review.text}"
            </p>

            {/* Footer with Name, Role, and Stars */}
            <div className="border-t border-gray-100 pt-5 flex items-end justify-between">
              <div>
                <h4 className="text-[#2d0a4e] font-bold text-xs uppercase tracking-wide">{review.name}</h4>
                <p className="text-gray-500 text-[10px] mt-0.5">{review.role}</p>
              </div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-[#d8a5ad] fill-current" size={10} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
