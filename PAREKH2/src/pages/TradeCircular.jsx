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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 bg-brand-light border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-serif font-bold text-brand-darkbrown">Latest Official Circulars</h2>
            <div className="text-sm text-gray-500">Document Hub</div>
          </div>
          <div className="divide-y divide-gray-100">
            {circulars.map((circular) => (
              <div key={circular.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start">
                  <FileText className="text-brand-maroon w-8 h-8 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{circular.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                      <span>Date: {circular.date}</span>
                      <span>Ref: {circular.ref}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-4 py-2 border border-brand-maroon text-brand-maroon text-sm font-medium rounded hover:bg-brand-maroon hover:text-white transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </button>
                  <button className="flex items-center px-4 py-2 bg-brand-maroon text-white text-sm font-medium rounded hover:bg-[#022c22] transition-colors">
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeCircular;
