import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pb-12 w-full">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center">About Us</h1>
          <p className="text-[#C5A880] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold">Our Story & Heritage</p>
        </div>
      </div>

      {/* Story Section stacked vertically */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#C5A880]/15 p-8 md:p-12 border-t-4 border-rosegold-500 flex flex-col gap-8 rounded-lg shadow-sm"
        >
          {/* Minimal Text Content */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-playfair text-2xl md:text-3xl text-gray-900 font-semibold uppercase tracking-wide">
              A Legacy of <span className="text-[#C5A880] italic">Excellence</span>
            </h2>
            <p className="text-gray-650 leading-relaxed text-sm md:text-base">
              Since 2026, VARA WEAVES TEXTILE MALL has stood as a beacon of premium apparel and visionary design. We blend the richness of traditional Indian craftsmanship with modern manufacturing technology to weave elegance into every thread.
            </p>
            <p className="text-gray-650 leading-relaxed text-sm">
              Our commitment to sustainable sourcing, ethical labor practices, and zero-defect quality defines our corporate journey. We build apparel crafted to stand the test of time.
            </p>
          </div>

          {/* Wide Landscape Image Content */}
          <div className="w-full relative h-64 md:h-80 lg:h-96 overflow-hidden border border-gray-200 rounded">
            <img
              src="images/about.png"
              alt="About VARA WEAVES TEXTILE MALL"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
