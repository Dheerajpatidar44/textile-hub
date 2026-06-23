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
    <div className="w-full max-w-5xl mx-auto px-6 py-6 md:py-8 text-left font-outfit">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider font-bold m-0 font-playfair border-0 pb-0 normal-case">
          <span className="lowercase">e</span>-Auction
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#FAF8F9] p-6 md:p-8 border border-gray-200 rounded-3xl flex flex-col gap-6">

        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={18} className="text-[#0A5F73]" />
            <h2 className="text-[#0C2E3A] font-semibold text-base tracking-wider font-playfair">
              Active e-Auctions
            </h2>
          </div>

          <div className="bg-white py-12 flex flex-col items-center justify-center border border-gray-150 rounded-2xl shadow-xs">
            <Inbox size={36} className="text-gray-300 mb-3 stroke-1" />
            <p className="text-[#0A5F73] font-semibold text-[10px] tracking-widest ">
              At present, No e-Auction published
            </p>
          </div>
        </motion.div>

        {/* Participation Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 md:p-10 border border-gray-200 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 bg-[#FAF8F9] border border-[#0A5F73]/10 rounded-xl flex items-center justify-center shrink-0">
              <Gavel size={20} className="text-[#0A5F73]" />
            </div>
            <div>
              <h2 className="text-[#0C2E3A] font-semibold text-lg uppercase tracking-wider font-playfair">Participation Registration</h2>
              <p className="text-[#4F6D7A] text-[9px] uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  Name of the Participant <span className="text-[#0A5F73]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-1.5">
                  Legal Name of Business <span className="text-[#0A5F73]">*</span>
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

            <div className="pt-2">
              <label className="block text-[9px] uppercase tracking-widest text-[#0C2E3A] font-bold mb-2">
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
                className="w-full border-2 border-dashed border-[#0A5F73]/30 py-8 flex flex-col items-center justify-center bg-[#FAF8F9] hover:bg-[#E5EFF2] transition-colors rounded-2xl cursor-pointer group"
              >
                <UploadCloud size={28} className="text-[#10859F]/60 group-hover:text-[#0A5F73] mb-2 transition-colors" />
                {selectedFile ? (
                  <>
                    <p className="text-[#0A5F73] font-bold text-xs">Selected: {selectedFile.name}</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">Size: {(selectedFile.size / 1024).toFixed(1)} KB (Click to change)</p>
                  </>
                ) : (
                  <>
                    <p className="text-[#0C2E3A] font-medium text-xs">Click to upload GST Certificate</p>
                    <p className="text-gray-400 text-[9px] mt-1 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
                  </>
                )}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#0A5F73] hover:bg-[#084E5F] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={12} /> Submit Registration
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

export default EAuction;
