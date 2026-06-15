import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const TradeCircular = () => {
  const circulars = [
    { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
    { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
    { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
    { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
  ];

  return (
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading */}
      <div className="mb-10 border-b border-[#BD7B88]/20 pb-4">
        <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Trade Circulars
        </h1>
      </div>

      {/* List of Circulars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {circulars.map((circular) => (
          <div
            key={circular.id}
            className="bg-white border border-[#BD7B88]/15 rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg hover:border-[#BD7B88]/40 transition-all duration-300 group"
          >
            {/* Left Info Area */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#BD7B88]/15 bg-[#FAF4F6] flex items-center justify-center shrink-0 group-hover:border-[#BD7B88] group-hover:bg-[#BD7B88]/10 transition-all shadow-sm">
                <FileText size={20} className="text-[#BD7B88]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#3D223B] text-base mb-1.5 group-hover:text-[#BD7B88] transition-colors uppercase tracking-wide font-playfair">
                  {circular.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-semibold uppercase tracking-wider font-outfit">
                  <span>Reference: {circular.ref}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Date: {circular.date}</span>
                </div>
              </div>
            </div>

            {/* Right Buttons Panel */}
            <div className="flex items-center gap-3 shrink-0 font-outfit">
              <button className="flex items-center gap-1.5 px-4 py-2 border border-[#BD7B88] text-[#BD7B88] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#BD7B88] hover:text-white transition-all duration-200 cursor-pointer">
                <Eye size={12} /> View
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#3D223B] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#4D2D4B] transition-all duration-200 shadow-sm cursor-pointer">
                <Printer size={12} /> Print
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TradeCircular;
