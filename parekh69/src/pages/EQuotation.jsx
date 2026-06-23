import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const EQuotation = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 md:py-8 text-left font-outfit">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider font-bold m-0 font-playfair border-0 pb-0 normal-case">
          <span className="lowercase">e</span>-Quotation
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#FAF8F9] p-6 md:p-8 border border-gray-200 rounded-3xl flex flex-col gap-6">

        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={18} className="text-[#0A5F73]" />
            <h2 className="text-[#0C2E3A] font-semibold text-base uppercase tracking-wider font-playfair">
              Active Quotation Requests
            </h2>
          </div>

          <div className="bg-white py-12 flex flex-col items-center justify-center border border-gray-150 rounded-2xl shadow-xs">
            <Inbox size={36} className="text-gray-300 mb-3 stroke-1" />
            <p className="text-[#0A5F73] font-semibold text-[10px] tracking-widest ">
              ( At present, No e-Quotation published )
            </p>
          </div>
        </motion.div>

        {/* Request a Price Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 md:p-10 border border-gray-200 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 bg-[#FAF8F9] border border-[#0A5F73]/10 rounded-xl flex items-center justify-center shrink-0">
              <FileText size={20} className="text-[#0A5F73]" />
            </div>
            <div>
              <h2 className="text-[#0C2E3A] font-semibold text-lg uppercase tracking-wider font-playfair">Request a Price Quote</h2>
              <p className="text-[#4F6D7A] text-[9px] uppercase tracking-widest font-bold mt-1">Fill in your requirements details below</p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  Name of the Trader <span className="text-[#0A5F73]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  Business Name <span className="text-[#0A5F73]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  Business Address with PIN Code <span className="text-[#0A5F73]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  GST No.
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  Mobile No. <span className="text-[#0A5F73]">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  Email ID <span className="text-[#0A5F73]">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
            </div>

            <div className="pt-1">
              <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                Options <span className="text-[#0A5F73]">*</span>
              </label>
              <select
                className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all appearance-none cursor-pointer"
                required
              >
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div className="pt-1">
              <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                Particulars of the Products <span className="text-[#0A5F73]">*</span>
              </label>
              <textarea
                rows="3"
                className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all resize-none"
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#0A5F73] hover:bg-[#084E5F] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={12} /> Submit Quotation Request
              </button>
            </div>

            <div className="pt-4 text-center flex items-center justify-center gap-2">
              <Mail size={14} className="text-[#0A5F73]" />
              <a href="mailto:info@loomline.com" className="text-[#0A5F73] text-[9px] font-bold tracking-widest hover:underline uppercase">
                info@loomline.com
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
