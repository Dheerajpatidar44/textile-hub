import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function CustomerReview() {
  const reviews = [
    { 
      tag: "INSTITUTIONAL PARTNER",
      text: "HERITAGE GARMENTS has redefined premium apparel standards for us. Their consistency in material and tailorship over 8 years is unmatched in India.", 
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
    <div className="space-y-6 -mt-8 pb-20">
      <div className="text-center pt-0 pb-2">
        <h1>Customer Reviews</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-8">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col min-h-[300px]"
          >
            {/* Quote Icon */}
            <Quote className="text-rosegold-500 mb-4 fill-current rotate-180" size={32} />

            {/* Tag */}
            <div className="mb-5">
              <span className="bg-rosegold-500/10 text-rosegold-500 text-[9px] font-bold uppercase tracking-[0.2em] py-1 px-2.5">
                {review.tag}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-650 leading-relaxed text-sm mb-6 font-playfair italic flex-grow">
              "{review.text}"
            </p>

            {/* Footer with Name, Role, and Stars */}
            <div className="border-t border-gray-200 pt-5 flex items-end justify-between">
              <div>
                <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wide">{review.name}</h4>
                <p className="text-gray-500 text-[10px] mt-0.5">{review.role}</p>
              </div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-rosegold-500 fill-current" size={10} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
