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
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Trade Circulars</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Official Corporate & Trade Documents</p>
        </div>
      </div>

      {/* List of Circulars formatted as Individual Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="space-y-4"
      >
        {circulars.map((circular) => (
          <div
            key={circular.id}
            className="bg-white border border-gray-200 shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl hover:border-rosegold-500 transition-all duration-300 group"
          >
            {/* Left Info Area */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-gray-200 bg-pearl-100 flex items-center justify-center shrink-0 group-hover:border-rosegold-500 group-hover:bg-rosegold-500/10 transition-all shadow-sm">
                <FileText size={20} className="text-rosegold-500 group-hover:text-rosegold-400 transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1.5 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide">
                  {circular.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  <span>Reference: {circular.ref}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Date: {circular.date}</span>
                </div>
              </div>
            </div>

            {/* Right Buttons Panel */}
            <div className="flex items-center gap-3 shrink-0">
              <button className="flex items-center gap-1.5 px-4 py-2 border border-rosegold-500 text-rosegold-500 text-xs font-semibold uppercase tracking-wider hover:bg-rosegold-500 hover:text-white transition-all duration-200">
                <Eye size={12} /> View
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-rosegold-500 text-white text-xs font-semibold uppercase tracking-wider hover:bg-rosegold-400 transition-all duration-200 shadow-md">
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
