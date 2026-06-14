import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pb-12 -mt-6 lg:-mt-10 max-w-5xl mx-auto">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">About Us</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Our Story & Heritage</p>
        </div>
      </div>

      {/* Story Section stacked vertically */}
      <section className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl p-8 md:p-12 border-t-8 border-rosegold-500 flex flex-col gap-8"
        >
          {/* Minimal Text Content */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-playfair text-2xl md:text-3xl text-gray-900 font-semibold uppercase tracking-wide">
              A Legacy of <span className="text-rosegold-500 italic">Excellence</span>
            </h2>
            <p className="text-gray-650 leading-relaxed text-sm md:text-base">
              Since 2026, URBAN TEXTILE HUB has stood as a beacon of premium apparel and visionary design. We blend the richness of traditional Indian craftsmanship with modern manufacturing technology to weave elegance into every thread.
            </p>
            <p className="text-gray-650 leading-relaxed text-sm">
              Our commitment to sustainable sourcing, ethical labor practices, and zero-defect quality defines our corporate journey. We build apparel crafted to stand the test of time.
            </p>
          </div>

          {/* Wide Landscape Image Content */}
          <div className="w-full relative h-64 md:h-80 lg:h-96 overflow-hidden border border-gray-200">
            <img
              src="images/about.png"
              alt="About URBAN TEXTILE HUB"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
