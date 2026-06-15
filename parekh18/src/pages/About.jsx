import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 md:py-14">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-10 text-left">
        <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          About Us
        </h1>
      </div>

      {/* Revamped Layout: Elegant 2-Column Split */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#BD7B88]/15 p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row gap-12 items-center rounded-2xl shadow-sm relative overflow-hidden"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#BD7B88]/10 rounded-tr-2xl pointer-events-none" />

          {/* Left Column: Story Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#BD7B88]" />
              <span className="text-[10px] tracking-[0.25em] font-bold text-[#BD7B88] uppercase">Established 2026</span>
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl text-[#3D223B] font-bold uppercase tracking-wide leading-tight">
              A Legacy of <br />
              <span className="text-[#BD7B88] italic font-normal">Excellence & Vision</span>
            </h2>

            <div className="h-px bg-gradient-to-r from-[#BD7B88]/20 to-transparent w-full my-4" />

            <p className="text-gray-650 leading-relaxed text-sm md:text-base font-outfit">
              Since 2026, ROYAL WEAVES TEXTILE MALL has stood as a beacon of premium apparel and visionary design. We blend the richness of traditional Indian craftsmanship with modern manufacturing technology to weave elegance into every thread.
            </p>

            <p className="text-gray-650 leading-relaxed text-sm font-outfit">
              Our commitment to sustainable sourcing, ethical labor practices, and zero-defect quality defines our corporate journey. We build apparel crafted to stand the test of time, honoring generations of handloom legacy while embracing futuristic production values.
            </p>
          </div>

          {/* Right Column: Arched Image Frame matching Hero section style */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[340px] aspect-[4/5] relative overflow-hidden bg-white border border-[#BD7B88]/25 p-2.5 rounded-t-[160px] rounded-b-xl shadow-xl">
              <div className="w-full h-full relative overflow-hidden rounded-t-[150px] rounded-b bg-[#FAF4F6]">
                <img
                  src="images/about.png"
                  alt="About ROYAL WEAVES TEXTILE MALL Heritage"
                  className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
