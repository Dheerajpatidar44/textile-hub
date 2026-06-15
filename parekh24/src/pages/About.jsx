import { motion } from 'framer-motion';

const COLORS = { 
  primary: '#6E64B4', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: COLORS.bg, minHeight: '85vh' }}>

      {/* ── HERO BANNER ── */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: COLORS.textDark }}>
            About us
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
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
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=60"
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
            <span className="text-[10px] tracking-[0.25em] uppercase font-extrabold" style={{ color: COLORS.primary }}>
              Our Philosophy
            </span>
            <h2 className="font-black text-3xl sm:text-4xl mt-2 mb-6 leading-tight serif-title" style={{ color: COLORS.textDark }}>
              Honoring Heritage through Sustainable Threadcraft
            </h2>
            <p className="leading-[1.8] text-sm mb-5 font-semibold opacity-85" style={{ color: COLORS.textMid }}>
              At <strong>Aura Loom</strong>, we believe that fabric is not just material—it is a form of artistic expression, comfort, and heritage. We work directly with weaver clusters to preserve centuries-old handloom techniques while utilizing modern, eco-friendly textile innovations.
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
