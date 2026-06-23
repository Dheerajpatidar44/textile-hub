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
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-6 md:py-8 text-left font-outfit">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          Trade Circulars
        </h1>
      </div>

      {/* List of Circulars */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {circulars.map((circular) => (
          <div
            key={circular.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-xs p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md hover:border-[#0A5F73]/30 transition-all duration-300 group"
          >
            {/* Left Info Area */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F4F8F9] flex items-center justify-center shrink-0 group-hover:border-[#0A5F73] group-hover:bg-[#0A5F73]/5 transition-all shadow-xs">
                <FileText size={18} className="text-[#0A5F73]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0C2E3A] text-sm mb-1 group-hover:text-[#0A5F73] transition-colors uppercase tracking-wider font-playfair">
                  {circular.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-outfit">
                  <span>Reference: {circular.ref}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Date: {circular.date}</span>
                </div>
              </div>
            </div>

            {/* Right Buttons Panel */}
            <div className="flex items-center gap-3.5 shrink-0 font-outfit">
              <button className="flex items-center gap-1.5 px-4 py-2 border border-[#10859F] text-[#10859F] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#10859F] hover:text-white transition-all duration-200 cursor-pointer">
                <Eye size={12} /> View
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#0A5F73] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#084E5F] transition-all duration-200 shadow-xs cursor-pointer">
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
