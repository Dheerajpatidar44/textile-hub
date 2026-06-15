import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>
      
      {/* ── HERO BANNER ── */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            About Us
          </h1>
        </div>
      </div>

      {/* ── SECTION 1: SPLIT DETAILS (IMAGE & TEXT) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
              style={{ border: '2px solid rgba(197, 168, 128, 0.35)' }} />
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E8E5DC]">
              <img
                src="images/about.png"
                alt="About Urban Fashion Textile"
                className="w-full h-auto max-h-[460px] object-cover block filter saturate-[0.95]"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 text-left"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] font-bold">
              Who We Are
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl mt-2 mb-6 leading-tight text-[#152E47]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Redefining Premium Weaving and Textile Aesthetics
            </h2>
            <p className="leading-[1.8] text-[15px] mb-5 text-[#393E46] font-medium">
              At **Urban Fashion Textile**, we believe that fabric is not just material—it is a form of artistic expression, comfort, and heritage. Over the last two decades, we have evolved from a traditional boutique manufacturer into a state-of-the-art weaving and wholesale pioneer, supplying premium ethnic wear, luxury fabrics, and contemporary apparel elements nationwide.
            </p>
            <p className="leading-[1.8] text-[15px] mb-5 text-[#393E46] font-medium">
              We leverage modern technology, clean eco-friendly dyeing, and advanced automated looms, yet our heart remains dedicated to the touch of authentic craftsmanship. Every collection is engineered to blend soft comfort, rich textures, and colorfast longevity.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="flex-1">
                <p className="text-[#244C73] font-bold text-lg font-serif">1200+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Outlets Supplied</p>
              </div>
              <div className="w-px bg-[#E8E5DC]" />
              <div className="flex-1">
                <p className="text-[#244C73] font-bold text-lg font-serif">10M+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Meters Produced</p>
              </div>
              <div className="w-px bg-[#E8E5DC]" />
              <div className="flex-1">
                <p className="text-[#244C73] font-bold text-lg font-serif">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Quality Assured</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
