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
    <div className="pb-16 max-w-5xl mx-auto px-4">

      
      <div className="text-center py-10 mb-6">
        <h1 className="font-playfair text-5xl text-vastram-brown">Trade Circulars</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {circulars.map((circular) => (
          <motion.div
            key={circular.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-none border border-gray-100 shadow-lg p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl hover:border-vastram-gold/50 transition-all duration-300 group"
          >
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 rounded-none border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-vastram-gold group-hover:bg-vastram-gold/10 transition-all duration-300 shadow-sm">
                <FileText size={24} className="text-vastram-brown group-hover:text-vastram-gold transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-vastram-brown text-lg mb-2 leading-snug">{circular.title}</h3>
                <div className="text-sm text-gray-500 font-medium">
                  <span>Date: {circular.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-none border border-vastram-brown text-vastram-brown text-xs font-bold uppercase tracking-wider hover:bg-vastram-brown hover:text-white transition-all duration-200">
                <Eye size={16} /> View
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-none bg-vastram-gold text-white text-xs font-bold uppercase tracking-wider hover:bg-vastram-brown transition-all duration-200 shadow-sm">
                <Printer size={16} /> Print
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TradeCircular;
