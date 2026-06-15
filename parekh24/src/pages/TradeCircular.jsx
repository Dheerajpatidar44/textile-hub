import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const C = { 
  primary: '#6E64B4', 
  primaryDark: '#252131', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  bgLight: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};

const circulars = [
  { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
  { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
  { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
  { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
];

const TradeCircular = () => {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Trade Circular</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {circulars.map((circular) => (
            <motion.div
              key={circular.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-5 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-md border"
              style={{ borderColor: C.border }}
            >
              <div className="flex flex-col items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                  style={{ background: 'rgba(110, 100, 180, 0.08)', borderColor: 'rgba(110, 100, 180, 0.2)' }}>
                  <FileText size={20} color={C.primary} />
                </div>
                <div>
                  <h3 className="font-black text-base mb-1.5 leading-snug text-dark-800" style={{ color: C.textDark }}>
                    {circular.title}
                  </h3>
                  <div className="text-[11px] font-semibold opacity-70" style={{ color: C.textDark }}>
                    Date: {circular.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 mt-auto border-t" style={{ borderColor: C.border }}>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  style={{ border: '1.5px solid rgba(110, 100, 180, 0.3)', color: C.primary }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#FAF9F5'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; }}>
                  <Eye size={14} /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  style={{ color: C.textDark, border: `1px solid ${C.border}` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textDark; }}>
                  <Printer size={14} /> Print
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeCircular;
