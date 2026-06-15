import { motion } from 'framer-motion';

const COLORS = { 
  primary: '#C5A377', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: COLORS.bg, minHeight: '85vh' }}>

      {/* ── HERO BANNER ── */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: COLORS.textDark }}>
            About us
          </h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>
      </div>

      {/* ── ABOUT CONTENT SECTION ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Asymmetric Designer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Lavender Frame Offset */}
            <div 
              className="absolute -top-3 -left-3 w-[85%] h-[95%] rounded-3xl"
              style={{ border: `1.5px solid ${COLORS.primary}`, opacity: 0.3 }}
            />
            {/* Image Container with Asymmetrical Corner Styling */}
            <div 
              className="relative rounded-3xl rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-xl border w-[85%] h-auto aspect-[4/5]" 
              style={{ borderColor: COLORS.border }}
            >
              <img
                src="/images/about.png"
                alt="Artisan Loom Threads"
                className="w-full h-full object-cover block filter saturate-[0.95] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column: Shortened Premium Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 text-left"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: COLORS.primary }}>
              Our Philosophy
            </span>
            <h2 className="font-normal text-3xl sm:text-4xl mt-2 mb-6 leading-tight serif-title" style={{ color: COLORS.textDark }}>
              Honoring Heritage through Sustainable Threadcraft
            </h2>
            <p className="leading-[1.8] text-sm mb-5 font-semibold opacity-85" style={{ color: COLORS.textMid }}>
              At <strong>Shree Textile Mall</strong>, we believe that fabric is not just material—it is a form of artistic expression, comfort, and heritage. We work directly with weaver clusters to preserve centuries-old handloom techniques while utilizing modern, eco-friendly textile innovations.
            </p>
            <p className="leading-[1.8] text-sm font-semibold opacity-85" style={{ color: COLORS.textMid }}>
              Every yarn is sourced ethically, processed with non-toxic organic dyes, and woven to deliver colorfast longevity and exceptional soft textures. By eliminating unnecessary layers, we support fair artisan compensation and deliver premium textiles directly to our global networks.
            </p>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
