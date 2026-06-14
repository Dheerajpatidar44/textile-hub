import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const EAuction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="pb-20 -mt-6 lg:-mt-10 max-w-5xl mx-auto px-4 md:px-8">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider font-semibold m-0 normal-case">e-Auction</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Digital Liquidation & Auction System</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-pearl-100 p-6 md:p-10 border border-gray-200 shadow-sm flex flex-col gap-8">

        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-rosegold-500" />
            <h2 className="text-gray-900 font-semibold text-lg  tracking-wider">
              Active e-Auctions
            </h2>
          </div>

          <div className="bg-white py-16 flex flex-col items-center justify-center border border-gray-200 shadow-sm">
            <Inbox size={40} className="text-gray-300 mb-4 stroke-1" />
            <p className="text-rosegold-500 font-semibold text-xs tracking-widest ">
              At present, No e-Auction published
            </p>
          </div>
        </motion.div>

        {/* Participation Registration Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-rosegold-500/10 flex items-center justify-center">
              <Gavel size={24} className="text-rosegold-500" />
            </div>
            <div>
              <h2 className="text-gray-900 font-semibold text-xl uppercase tracking-wider">Participation Registration</h2>
              <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-750 font-bold mb-2">
                  Name of the Participant <span className="text-rosegold-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-750 font-bold mb-2">
                  Legal Name of Business <span className="text-rosegold-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-750 font-bold mb-2">
                  Business Address with PIN Code <span className="text-rosegold-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-750 font-bold mb-2">
                  GST No.
                </label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-750 font-bold mb-2">
                  Mobile No. <span className="text-rosegold-500">*</span>
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-750 font-bold mb-2">
                  Email ID <span className="text-rosegold-500">*</span>
                </label>
                <input type="email" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-[10px] uppercase tracking-widest text-gray-750 font-bold mb-3">
                Upload GST Certificate
              </label>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current.click()}
                className="w-full border-2 border-dashed border-gray-200 py-12 flex flex-col items-center justify-center bg-pearl-100 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <UploadCloud size={32} className="text-gray-300 group-hover:text-rosegold-500 mb-3 transition-colors" />
                {selectedFile ? (
                  <>
                    <p className="text-rosegold-500 font-bold text-sm">Selected: {selectedFile.name}</p>
                    <p className="text-gray-400 text-xs mt-1">Size: {(selectedFile.size / 1024).toFixed(1)} KB (Click to change)</p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-500 font-medium text-sm">Click to upload GST Certificate</p>
                    <p className="text-gray-400 text-[10px] mt-1.5 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
                  </>
                )}
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-rosegold-500 text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-rosegold-400 transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={14} /> Submit Registration
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

export default EAuction;
