import { motion } from 'framer-motion';

const C = {
  primary: '#043B5C',
  accent: '#C29B62',
  bg: '#FAFAFA',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[40px] pb-24">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">
        
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-[40px] lg:text-[52px] font-bold text-[#043B5C]" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Us
          </h1>
        </div>

        {/* Content Card matching the image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
        >
          
          {/* Left Text Block */}
          <div className="w-full md:w-[60%] bg-[#F5F1EB] p-10 lg:p-16 flex flex-col justify-center">
             <h2 className="text-[40px] lg:text-[56px] font-bold text-[#043B5C] leading-none mb-2 drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                About<br/>
                <span className="text-[#C29B62]">SAUVORA</span>
             </h2>
             <div className="w-16 h-[2px] bg-[#C29B62] mb-8 mt-6"></div>
             
             <p className="text-[15px] leading-relaxed text-[#6B7280] font-medium mb-6 max-w-lg">
                <strong className="text-[#043B5C]">SAUVORA Textile Retail</strong> is your premier destination for high-quality fabrics and ethnic textiles. We bridge traditional craftsmanship with modern retail excellence to deliver premium fabrics that reflect luxury, refinement, and rich cultural heritage.
             </p>
             <p className="text-[15px] leading-relaxed text-[#6B7280] font-medium max-w-lg">
                Our mission is to provide an unmatched selection of textiles tailored to your every need, from everyday wear to extraordinary celebrations.
             </p>
          </div>

          {/* Right Image Block */}
          <div className="w-full md:w-[40%] flex items-center justify-center p-8 bg-white">
             <div className="w-full aspect-square max-w-[320px] lg:max-w-[360px] rounded-[24px] overflow-hidden shadow-lg border-4 border-white">
                <img src="/images/sauvora_about.png" alt="SAUVORA Craftsmanship" className="w-full h-full object-cover" />
             </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}
