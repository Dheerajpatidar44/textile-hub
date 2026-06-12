import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const EAuction = () => {
  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header */}
      <div className="py-10 mb-2">
        <h1 className="font-playfair text-5xl lg:text-6xl text-[#2d0a4e] font-bold  tracking-wide">
          e-Auction
        </h1>
        <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider mt-4 font-medium">
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#fcfbf9] rounded-[2rem] p-6 md:p-10 lg:p-12 border border-gray-100 shadow-sm">
        
        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-[#d8a5ad]" />
            <h2 className="text-[#2d0a4e] font-playfair font-bold text-xl">Active e-Auctions</h2>
          </div>
          
          <div className="bg-white rounded-2xl py-16 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
            <Inbox size={40} className="text-gray-300 mb-4 stroke-1" />
            <p className="text-[#d8a5ad] font-bold text-sm tracking-wide">
              At present, No e-Auction published
            </p>
          </div>
        </motion.div>

        {/* Participation Registration Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#d8a5ad]/10 rounded-xl flex items-center justify-center">
              <Gavel size={24} className="text-[#d8a5ad]" />
            </div>
            <div>
              <h2 className="text-[#2d0a4e] font-playfair font-bold text-2xl uppercase tracking-wide">Participation Registration</h2>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Name of the Participant <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Legal Name of Business <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Business Address with PIN Code <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  GST No.
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Mobile No. <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Email ID <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="email" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-3">
                Upload GST Certificate
              </label>
              <div className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-12 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
                <UploadCloud size={32} className="text-gray-300 group-hover:text-[#d8a5ad] mb-3 transition-colors" />
                <p className="text-gray-500 font-medium text-sm">Click to upload GST Certificate</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#2d0a4e] text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#d8a5ad] transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={16} /> Submit Registration
              </button>
            </div>

            <div className="pt-8 text-center flex items-center justify-center gap-2">
              <Mail size={14} className="text-[#d8a5ad]" />
              <a href="mailto:info@texmart.com" className="text-[#d8a5ad] text-[11px] font-bold tracking-widest hover:underline">
                info@texmart.com
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
