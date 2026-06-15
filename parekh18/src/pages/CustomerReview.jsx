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
    <div className="pb-20 w-full max-w-5xl mx-auto px-6 py-10 md:py-14">
      {/* Direct Page Heading */}
      <div className="mb-10 border-b border-[#BD7B88]/20 pb-4 text-left">
        <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Customer Reviews
        </h1>
      </div>

      {/* 3-Column Grid Layout of Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
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
              className="bg-white p-6 rounded-3xl border border-[#BD7B88]/15 shadow-sm flex flex-col justify-between relative hover:border-[#BD7B88] hover:shadow-md transition-all duration-300 group text-left"
            >
              <div>
                {/* Top Row with Quote and Stars */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-[#BD7B88]/30 fill-current rotate-180 animate-pulse" size={24} />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-[#BD7B88] fill-current" size={12} />
                    ))}
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-4">
                  <span className="bg-[#3D223B]/5 text-[#3D223B] text-[8px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-lg border border-[#3D223B]/10">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#7A6273] leading-relaxed text-xs md:text-sm mb-6 italic font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Footer with Avatar Profile Icon and Info */}
              <div className="border-t border-[#BD7B88]/15 pt-4 flex items-center gap-3 mt-auto">
                {/* Circular initials avatar */}
                <div className="w-10 h-10 rounded-full bg-[#3D223B]/5 border border-[#BD7B88]/30 flex items-center justify-center font-playfair font-bold text-xs text-[#3D223B] shrink-0 group-hover:bg-[#3D223B] group-hover:text-white group-hover:border-[#3D223B] transition-colors duration-300">
                  {initials}
                </div>
                <div>
                  <h4 className="text-[#3D223B] font-playfair font-bold text-xs uppercase tracking-wide group-hover:text-[#BD7B88] transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[#7A6273]/80 text-[8px] font-outfit uppercase mt-0.5 tracking-wider font-semibold">
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
