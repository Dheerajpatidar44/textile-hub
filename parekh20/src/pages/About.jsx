import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#F8F5EF' }}>

      {/* ── HERO BANNER ── */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: '1px solid #E2D9CC' }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: '#2A3325' }}>
            About Us
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: '#5F6F5E' }} />
        </div>
      </div>

      {/* ── SECTION 1: SPLIT DETAILS ── */}
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
              style={{ border: '2px solid rgba(197,168,128,0.35)' }} />
            <div className="relative rounded-3xl overflow-hidden shadow-lg" style={{ border: '1px solid #E2D9CC' }}>
              <img
                src="images/about.png"
                alt="About Grand Textile Mart"
                className="w-full h-auto max-h-[460px] object-cover block"
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
            <span className="text-[10px] tracking-[0.2em] uppercase font-black" style={{ color: '#C5A880' }}>
              Who We Are
            </span>
            <h2 className="font-black text-3xl sm:text-4xl mt-2 mb-6 leading-tight" style={{ color: '#2A3325' }}>
              Redefining Premium Weaving and Textile Aesthetics
            </h2>
            <p className="leading-[1.8] text-[15px] mb-5 font-medium" style={{ color: '#3D3D30' }}>
              At <strong>Grand Textile Mart</strong>, we believe that fabric is not just material—it is a form of artistic expression, comfort, and heritage. Over the last two decades, we have evolved from a traditional boutique manufacturer into a state-of-the-art weaving and wholesale pioneer, supplying premium ethnic wear, luxury fabrics, and contemporary apparel elements nationwide.
            </p>
            <p className="leading-[1.8] text-[15px] mb-5 font-medium" style={{ color: '#3D3D30' }}>
              We leverage modern technology, clean eco-friendly dyeing, and advanced automated looms, yet our heart remains dedicated to the touch of authentic craftsmanship. Every collection is engineered to blend soft comfort, rich textures, and colorfast longevity.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="flex-1">
                <p className="font-black text-xl" style={{ color: '#5F6F5E' }}>1200+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#6B7280' }}>Outlets Supplied</p>
              </div>
              <div className="w-px" style={{ background: '#E2D9CC' }} />
              <div className="flex-1">
                <p className="font-black text-xl" style={{ color: '#5F6F5E' }}>10M+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#6B7280' }}>Meters Produced</p>
              </div>
              <div className="w-px" style={{ background: '#E2D9CC' }} />
              <div className="flex-1">
                <p className="font-black text-xl" style={{ color: '#5F6F5E' }}>100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#6B7280' }}>Quality Assured</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
