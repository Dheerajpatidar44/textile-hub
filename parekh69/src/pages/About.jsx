import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 md:py-8 font-outfit text-left">
      {/* Page Heading - Compact top spacing */}
      <div className="mb-6 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          About Us
        </h1>
      </div>

      {/* Unified Layout Container: Both text & image are within this single div */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-gray-250/50 p-6 md:p-10 lg:p-12 rounded-3xl shadow-lg flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative overflow-hidden"
      >
        {/* Subtle Decorative Geometric background element */}
        <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#E5EFF2]/40" />

        {/* Text Content */}
        <div className="w-full lg:w-3/5 space-y-5 text-left order-2 lg:order-1">
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-[#0A5F73]" />
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#0A5F73] uppercase">Established 2026</span>
          </div>

          <h2 className="font-playfair text-2xl md:text-3xl text-[#0C2E3A] font-bold uppercase tracking-wider leading-tight">
            A Legacy of <br />
            <span className="text-[#10859F] italic font-normal font-playfair lowercase">excellence & vision</span>
          </h2>

          <div className="h-[1px] bg-gray-100 w-full" />

          <p className="text-[#4F6D7A] leading-relaxed text-xs md:text-sm">
            Since 2026, <strong>LoomLine retail mall</strong> has stood as a beacon of premium apparel and visionary design. We blend the richness of traditional Indian craftsmanship with modern manufacturing technology to weave elegance into every thread.
          </p>

          <p className="text-[#4F6D7A] leading-relaxed text-xs md:text-sm">
            Our commitment to sustainable sourcing, ethical labor practices, and zero-defect quality defines our corporate journey. We build apparel crafted to stand the test of time, honoring generations of handloom legacy while embracing futuristic production values.
          </p>

          <p className="text-[#4F6D7A] leading-relaxed text-xs">
            We partner directly with more than 100 ethical vendors and local spinners to secure dye permanence and textile integrity, providing wholesale fabrics and bespoke apparel cuts that exceed international standards.
          </p>
        </div>

        {/* Image Display - Leaf Shape Asymmetric Border Radius */}
        <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
          <div className="w-full max-w-[280px] aspect-[5/6] relative overflow-hidden bg-[#FAF8F9] p-2 rounded-tl-[100px] rounded-br-[100px] border border-gray-200 shadow-md">
            <img
              src="/images/about_ceramic_textiles.png"
              alt="LoomLine Retail Mall Heritage Ceramic & Textile showcase"
              className="w-full h-full object-cover rounded-tl-[92px] rounded-br-[92px] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
