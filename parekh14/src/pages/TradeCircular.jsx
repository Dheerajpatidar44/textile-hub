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
    <div className="pb-16 -mt-8 max-w-5xl mx-auto px-4">

      
      <div className="text-center pt-0 pb-2 mb-4">
        <h1>Trade Circulars</h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-gray-200 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-pearl-50 border-b border-gray-200 px-8 py-6 flex justify-between items-center">
          <h2 className="text-xl font-playfair font-bold text-rosegold-500">Latest Official Circulars</h2>
          <span className="text-[0.6rem] bg-rosegold-500/10 text-rosegold-500 px-3 py-1 uppercase tracking-widest font-bold">Document Hub</span>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-200">
          {circulars.map((circular) => (
            <div
              key={circular.id}
              className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-pearl-50/50 transition-colors group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-gray-200 bg-pearl-100 flex items-center justify-center shrink-0 group-hover:border-rosegold-500 group-hover:bg-rosegold-500/10 transition-all shadow-sm">
                  <FileText size={20} className="text-rosegold-500 group-hover:text-rosegold-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-rosegold-500 transition-colors">{circular.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-medium">
                    <span>Date: {circular.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 border border-rosegold-500 text-rosegold-500 text-xs font-bold uppercase tracking-wider hover:bg-rosegold-500 hover:text-white transition-all duration-200">
                  <Eye size={14} /> View
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-rosegold-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-rosegold-400 transition-all duration-200 shadow-sm">
                  <Printer size={14} /> Print
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TradeCircular;
