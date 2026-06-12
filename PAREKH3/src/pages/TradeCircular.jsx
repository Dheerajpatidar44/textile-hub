import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { FileText, Eye, Printer } from 'lucide-react';

const TradeCircular = () => {
  const circulars = [
    { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2023', ref: 'TC/2023/45' },
    { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2023', ref: 'TC/2023/42' },
    { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2023', ref: 'TC/2023/38' },
    { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2023', ref: 'TC/2023/31' },
  ];

  return (
    <div>
      <PageHeader title="Trade Circulars" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">

          <div className="bg-white border border-[#0B1C3E]/8 overflow-hidden">
            {/* Header */}
            <div className="bg-[#0B1C3E] px-8 py-5 flex justify-between items-center">
              <h2 className="text-lg font-serif font-light text-white">Latest Official Circulars</h2>
              <span className="text-[0.6rem] text-[#D4A853] uppercase tracking-widest">Document Hub</span>
            </div>

            {/* List */}
            <div>
              {circulars.map((circular, i) => (
                <div
                  key={circular.id}
                  className={`px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF7F0] transition-colors group ${
                    i < circulars.length - 1 ? 'border-b border-[#0B1C3E]/6' : ''
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-[#D4A853]/30 flex items-center justify-center shrink-0 group-hover:border-[#D4A853] group-hover:bg-[#D4A853]/10 transition-all">
                      <FileText size={14} className="text-[#D4A853]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0B1C3E] text-sm mb-1.5 group-hover:text-[#D4A853] transition-colors">{circular.title}</h3>
                      <div className="flex items-center gap-5 text-xs text-[#6B7A99] font-light">
                        <span>Date: {circular.date}</span>
                        <span className="text-[#D4A853]/60">|</span>
                        <span>Ref: {circular.ref}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-4 py-2 border border-[#0B1C3E] text-[#0B1C3E] text-xs font-medium uppercase tracking-wider hover:bg-[#0B1C3E] hover:text-white transition-all duration-200">
                      <Eye size={12} /> View
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-[#D4A853] text-[#0B1C3E] text-xs font-medium uppercase tracking-wider hover:bg-[#0B1C3E] hover:text-white transition-all duration-200">
                      <Printer size={12} /> Print
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeCircular;
