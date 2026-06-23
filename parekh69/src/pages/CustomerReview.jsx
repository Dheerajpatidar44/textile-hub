import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function CustomerReview() {
  const reviews = [
    {
      tag: "INSTITUTIONAL PARTNER",
      text: "LoomLine retail mall has redefined premium apparel standards for us. Their consistency in material and tailorship over 8 years is unmatched in India.",
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
    <div className="pb-16 w-full max-w-5xl mx-auto px-6 py-6 md:py-8 font-outfit text-left">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          Customer Reviews
        </h1>
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between relative hover:border-[#0A5F73]/30 hover:shadow-md transition-all duration-300 group text-left"
            >
              <div>
                {/* Top Row with Quote and Stars */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-[#0A5F73]/20 fill-current rotate-180" size={24} />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-[#0A5F73] fill-current" size={10} />
                    ))}
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-4">
                  <span className="bg-[#0A5F73]/5 text-[#0A5F73] text-[8px] font-bold uppercase tracking-widest py-1 px-2.5 rounded-md border border-[#0A5F73]/10">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#4F6D7A] leading-relaxed text-xs mb-6 italic font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Footer with Avatar Profile Icon and Info */}
              <div className="border-t border-gray-150 pt-4 flex items-center gap-3 mt-auto">
                {/* Circular initials avatar */}
                <div className="w-10 h-10 rounded-full bg-[#0A5F73]/5 border border-gray-200 flex items-center justify-center font-playfair font-bold text-xs text-[#0A5F73] shrink-0 group-hover:bg-[#0A5F73] group-hover:text-white group-hover:border-[#0A5F73] transition-colors duration-300">
                  {initials}
                </div>
                <div>
                  <h4 className="text-[#0C2E3A] font-playfair font-bold text-xs uppercase tracking-wide group-hover:text-[#0A5F73] transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[#4F6D7A]/80 text-[8px] font-outfit uppercase mt-0.5 tracking-wider font-semibold">
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
