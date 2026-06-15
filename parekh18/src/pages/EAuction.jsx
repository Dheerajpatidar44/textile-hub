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
    <div className="w-full max-w-5xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-10 border-b border-[#BD7B88]/20 pb-4">
        <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider font-bold m-0 font-playfair normal-case">
          e-Auction
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#FAF4F6] p-6 md:p-10 border border-[#BD7B88]/15 rounded-2xl flex flex-col gap-8">

        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-[#BD7B88]" />
            <h2 className="text-[#3D223B] font-semibold text-lg tracking-wider font-playfair">
              Active e-Auctions
            </h2>
          </div>

          <div className="bg-white py-16 flex flex-col items-center justify-center border border-[#BD7B88]/10 rounded-xl shadow-sm">
            <Inbox size={40} className="text-[#BD7B88]/30 mb-4 stroke-1" />
            <p className="text-[#BD7B88] font-semibold text-xs tracking-widest">
              At present, No e-Auction published
            </p>
          </div>
        </motion.div>

        {/* Participation Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 md:p-12 border border-[#BD7B88]/15 rounded-xl shadow-md"
        >
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#FAF4F6] border border-[#BD7B88]/20 rounded-xl flex items-center justify-center shrink-0">
              <Gavel size={24} className="text-[#BD7B88]" />
            </div>
            <div>
              <h2 className="text-[#3D223B] font-semibold text-xl uppercase tracking-wider font-playfair">Participation Registration</h2>
              <p className="text-[#7A6273] text-[9px] uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Name of the Participant <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Legal Name of Business <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Business Address with PIN Code <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  GST No.
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Mobile No. <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Email ID <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-3">
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
                className="w-full border-2 border-dashed border-[#BD7B88]/30 py-12 flex flex-col items-center justify-center bg-[#FAF4F6] hover:bg-[#F6EDF0] transition-colors rounded-xl cursor-pointer group"
              >
                <UploadCloud size={32} className="text-[#BD7B88]/40 group-hover:text-[#BD7B88] mb-3 transition-colors" />
                {selectedFile ? (
                  <>
                    <p className="text-[#BD7B88] font-bold text-sm">Selected: {selectedFile.name}</p>
                    <p className="text-gray-400 text-xs mt-1">Size: {(selectedFile.size / 1024).toFixed(1)} KB (Click to change)</p>
                  </>
                ) : (
                  <>
                    <p className="text-[#3D223B] font-medium text-sm">Click to upload GST Certificate</p>
                    <p className="text-gray-400 text-[10px] mt-1.5 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
                  </>
                )}
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#3D223B] hover:bg-[#4D2D4B] text-white py-4 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer"
              >
                <Send size={14} /> Submit Registration
              </button>
            </div>

            <div className="pt-6 text-center flex items-center justify-center gap-2">
              <Mail size={14} className="text-[#BD7B88]" />
              <a href="mailto:info@royalweaves.com" className="text-[#BD7B88] text-[10px] font-semibold tracking-widest hover:underline uppercase">
                info@royalweaves.com
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
