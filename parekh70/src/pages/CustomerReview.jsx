import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const C = {
  primary: '#1B2A4A',
  accent: '#D4A842',
  bg: '#F8F7F4',
  border: '#E2DDDA',
  stone: '#5A5560',
};

const reviews = [
  { text: "Meraki Ethnic has been our trusted partner for years. The quality, and B2B quotation services are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time and rework.", name: "Anita Desai", role: "Design Head, Mumbai", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
];

export default function CustomerReview() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-10 mt-0">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#D4A842] uppercase block mb-1">REVIEWS</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Customer Reviews
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-[24px] border border-[#E2DDDA] p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-[#D4A842]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[13px] text-[#5A5560] leading-relaxed font-semibold italic">
                  "{review.text}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#E2DDDA]">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#E2DDDA]"
                  />
                ) : (
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(107, 66, 38, 0.08)', color: C.accent }}
                  >
                    <User size={16} />
                  </div>
                )}
                <div>
                  <h4 className="text-[12.5px] font-bold text-[#1B2A4A] m-0">{review.name}</h4>
                  <p className="text-[11px] text-[#5A5560] font-medium m-0">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
