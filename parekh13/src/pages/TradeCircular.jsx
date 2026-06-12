import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const circulars = [
  { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
  { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
  { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
  { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
];

const TradeCircular = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Trade Circular
          </h1>
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
              className="group p-5 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-md rounded-2xl"
              style={{ border: '1.5px solid #EADBC8' }}
            >
              <div className="flex flex-col items-start gap-4 mb-5">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-300 rounded-lg"
                  style={{ background: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.25)' }}>
                  <FileText size={20} color="#C5A059" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1.5 leading-snug text-[#2A083E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {circular.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#786B80]">
                    Date: {circular.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-[#EADBC8] mt-auto">
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-lg"
                  style={{ border: '1.5px solid rgba(197, 160, 89, 0.4)', color: '#C5A059' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#C5A059'; e.currentTarget.style.color = '#1C032B'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C5A059'; }}>
                  <Eye size={14} /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-[#2A083E] border border-[#EADBC8] hover:border-[#C5A059] text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:text-[#C5A059] hover:bg-[#C5A059]/5 cursor-pointer rounded-lg"
                  >
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
