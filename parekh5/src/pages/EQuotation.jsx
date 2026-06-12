import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const EQuotation = () => {
  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header */}
      <div className="py-10 mb-2 text-center">
        <h1 className="font-playfair text-5xl lg:text-6xl text-[#1B484E] font-bold  tracking-wide">
          e-Quotation
        </h1>
        <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider mt-4 font-medium">
          Request a Price Quotes
        </p>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#fcfbf9] rounded-[2rem] p-6 md:p-10 lg:p-12 border border-gray-100 shadow-sm">
        
        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-[#A8C6B6]" />
            <h2 className="text-[#1B484E] font-bold text-lg md:text-xl uppercase tracking-wide">Active Quotation Requests</h2>
          </div>
          
          <div className="bg-white rounded-2xl py-16 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
            <Inbox size={40} className="text-gray-300 mb-4 stroke-1" />
            <p className="text-[#A8C6B6] font-bold text-xs tracking-widest ">
              ( At present, No e-Quotation published )
            </p>
          </div>
        </motion.div>

        {/* Request a Price Quote Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#A8C6B6]/10 rounded-xl flex items-center justify-center">
              <FileText size={24} className="text-[#A8C6B6]" />
            </div>
            <div>
              <h2 className="text-[#1B484E] font-bold text-xl uppercase tracking-wide">Request a Price Quote</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-1">Fill in your details below</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Name of the Trader <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Business Name <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Business Address with PIN Code <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  GST No.
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Mobile No. <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Email ID <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="email" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                Options <span className="text-[#A8C6B6]">*</span>
              </label>
              <select className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors appearance-none text-sm text-gray-700" required>
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                Particulars of the Products <span className="text-[#A8C6B6]">*</span>
              </label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors resize-none text-sm" 
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required 
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#1B484E] text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#A8C6B6] transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={16} /> Submit Quotation Request
              </button>
            </div>

            <div className="pt-8 text-center flex items-center justify-center gap-2">
              <Mail size={14} className="text-[#A8C6B6]" />
              <a href="mailto:info@textilemall.com" className="text-[#A8C6B6] text-[11px] font-bold tracking-widest hover:underline">
                info@textilemall.com
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
