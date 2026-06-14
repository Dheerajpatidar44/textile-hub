import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const EQuotation = () => {
  return (
    <div className="pb-20 -mt-6 lg:-mt-10 max-w-5xl mx-auto px-4 md:px-8">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider font-semibold m-0 normal-case">e-Quotation</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Request a Price Quote Online</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-pearl-100 p-6 md:p-10 border border-gray-200 shadow-sm flex flex-col gap-8">

        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-rosegold-500" />
            <h2 className="text-gray-900 font-semibold text-lg uppercase tracking-wider">Active Quotation Requests</h2>
          </div>

          <div className="bg-white py-16 flex flex-col items-center justify-center border border-gray-200 shadow-sm">
            <Inbox size={40} className="text-gray-300 mb-4 stroke-1" />
            <p className="text-rosegold-500 font-semibold text-xs tracking-widest ">
              ( At present, No e-Quotation published )
            </p>
          </div>
        </motion.div>

        {/* Request a Price Quote Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-rosegold-500/10 flex items-center justify-center">
              <FileText size={24} className="text-rosegold-500" />
            </div>
            <div>
              <h2 className="text-gray-900 font-semibold text-xl uppercase tracking-wider">Request a Price Quote</h2>
              <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold mt-1">Fill in your requirements details below</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Name of the Trader <span className="text-rosegold-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Business Name <span className="text-rosegold-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Business Address with PIN Code <span className="text-rosegold-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  GST No.
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Mobile No. <span className="text-rosegold-500">*</span>
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Email ID <span className="text-rosegold-500">*</span>
                </label>
                <input type="email" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                Options <span className="text-rosegold-500">*</span>
              </label>
              <select className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors appearance-none text-sm text-gray-750" required>
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                Particulars of the Products <span className="text-rosegold-500">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors resize-none text-sm"
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-rosegold-500 text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-rosegold-400 transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={14} /> Submit Quotation Request
              </button>
            </div>

            <div className="pt-6 text-center flex items-center justify-center gap-2">
              <Mail size={14} className="text-rosegold-500" />
              <a href="mailto:info@urbantextilehub.com" className="text-rosegold-500 text-[10px] font-semibold tracking-widest hover:underline uppercase">
                info@urbantextilehub.com
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
