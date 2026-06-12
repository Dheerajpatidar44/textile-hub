import React from 'react';
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
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Trade Circular
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {circulars.map((circular) => (
            <motion.div
              key={circular.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFFFF', border: '1.5px solid rgba(225,77,42,0.2)' }}
            >
              <div className="flex flex-col items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{ background: 'rgba(225,77,42,0.1)', border: '1px solid rgba(225,77,42,0.25)' }}>
                  <FileText size={20} color="#E14D2A" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1.5 leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                    {circular.title}
                  </h3>
                  <div className="text-[11px] font-medium" style={{ color: '#6B6B6B' }}>
                    Date: {circular.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t mt-auto"
                style={{ borderColor: 'rgba(225,77,42,0.15)' }}>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-200"
                  style={{ border: '1.5px solid rgba(225,77,42,0.4)', color: '#E14D2A' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#E14D2A'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E14D2A'; }}>
                  <Eye size={14} /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-[#303030] text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
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
