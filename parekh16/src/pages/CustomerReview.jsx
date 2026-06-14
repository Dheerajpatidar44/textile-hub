import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function CustomerReview() {
  const reviews = [
    {
      tag: "INSTITUTIONAL PARTNER",
      text: "Royal Weaves Textile Mall has redefined premium apparel standards for us. Their consistency in material and tailorship over 8 years is unmatched in India.",
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
    <div className="pb-20 -mt-6 lg:-mt-10 max-w-5xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-[#132C20] text-white py-10 px-6 mb-10 text-center relative overflow-hidden border-b-4 border-[#C3A87E] rounded-3xl shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-0" />
        <div className="relative z-10">
          <h1 className="text-[#eedec9] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center">Customer Reviews</h1>
          <p className="text-[#C3A87E] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold">What Our Partners Say About Us</p>
        </div>
      </div>

      {/* 3-Column Grid Layout of Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((review, idx) => {
          const initials = review.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase();

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-3xl border border-[#ebdcb9]/40 shadow-sm flex flex-col justify-between relative hover:border-[#C3A87E] hover:shadow-md transition-all duration-300 group text-left"
            >
              <div>
                {/* Top Row with Quote and Stars */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-[#C3A87E]/30 fill-current rotate-180 animate-pulse" size={24} />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-[#C3A87E] fill-current" size={12} />
                    ))}
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-4">
                  <span className="bg-[#132C20]/5 text-[#132C20] text-[8px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-lg border border-[#132C20]/10">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#5A6E62] leading-relaxed text-xs md:text-sm mb-6 italic font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Footer with Avatar Profile Icon and Info */}
              <div className="border-t border-[#ebdcb9]/30 pt-4 flex items-center gap-3 mt-auto">
                {/* Circular initials avatar */}
                <div className="w-10 h-10 rounded-full bg-[#132C20]/10 border border-[#ebdcb9]/60 flex items-center justify-center font-playfair font-bold text-xs text-[#132C20] shrink-0 group-hover:bg-[#132C20] group-hover:text-[#eedec9] group-hover:border-[#132C20] transition-colors duration-300">
                  {initials}
                </div>
                <div>
                  <h4 className="text-[#132C20] font-playfair font-bold text-xs uppercase tracking-wide group-hover:text-[#C3A87E] transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[#5A6E62]/80 text-[8px] font-outfit uppercase mt-0.5 tracking-wider font-semibold">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
