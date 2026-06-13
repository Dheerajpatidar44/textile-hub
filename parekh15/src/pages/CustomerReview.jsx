import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function CustomerReview() {
  const reviews = [
    {
      tag: "INSTITUTIONAL PARTNER",
      text: "URBAN TEXTILE HUB has redefined premium apparel standards for us. Their consistency in material and tailorship over 8 years is unmatched in India.",
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
    <div className="pb-20 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Customer Reviews</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">What Our Partners Say About Us</p>
        </div>
      </div>

      {/* 1 Column Layout of Wide Testimonial Cards */}
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 border border-gray-200 shadow-lg flex flex-col relative"
          >
            {/* Quote Icon */}
            <Quote className="text-rosegold-500 mb-4 fill-current rotate-180" size={32} />

            {/* Tag */}
            <div className="mb-4">
              <span className="bg-rosegold-505/10 bg-rosegold-500/10 text-rosegold-500 text-[9px] font-bold uppercase tracking-[0.2em] py-1.5 px-3">
                {review.tag}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-650 leading-relaxed text-sm md:text-base mb-6 italic font-medium">
              "{review.text}"
            </p>

            {/* Footer with Name, Role, and Stars */}
            <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
              <div>
                <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wide">{review.name}</h4>
                <p className="text-gray-500 text-[10px] mt-0.5">{review.role}</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-rosegold-500 fill-current" size={12} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
