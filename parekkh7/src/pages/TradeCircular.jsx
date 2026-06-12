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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Trade Circulars
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {circulars.map((circular) => (
            <motion.div
              key={circular.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.25)' }}>
                  <FileText size={24} color="#C9A227" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                    {circular.title}
                  </h3>
                  <div className="text-[12px] font-medium" style={{ color: '#A68B7C' }}>
                    Date: {circular.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t mt-auto"
                style={{ borderColor: 'rgba(201,162,39,0.15)' }}>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all duration-200"
                  style={{ border: '1.5px solid rgba(184,50,39,0.4)', color: '#B83227' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#B83227'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#B83227'; }}>
                  <Eye size={15} /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-[12px] font-bold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #C9A227, #E2C65A)', color: '#1A0A05' }}>
                  <Printer size={15} /> Print
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
