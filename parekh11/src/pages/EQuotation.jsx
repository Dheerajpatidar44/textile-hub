import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FDFBF7',
  border: '1.5px solid #EAE3D9',
  color: '#2C362B',
};

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FDFBF7' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#EAE3D9]/60 bg-[#FDFBF7]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-2xl mx-auto px-4 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-[#4E6C50]" />
            <h2 className="font-extrabold text-lg uppercase tracking-wide text-[#2C362B]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Active Quotation Requests
            </h2>
          </div>
          <div className="rounded-3xl py-12 flex flex-col items-center justify-center bg-white"
            style={{ border: '1.5px solid #EAE3D9' }}>
            <Inbox size={36} className="mb-3 text-[#4E6C50]" strokeWidth={1.2} />
            <p className="text-[11px] font-extrabold tracking-widest text-[#7E857E] ">
              At present, No e-Quotation request published
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-sm overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #EAE3D9' }}>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#EAE3D9]/60">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#4E6C50]/10 border border-[#4E6C50]/20">
                <FileText size={20} className="text-[#4E6C50]" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl uppercase tracking-wide text-[#2C362B]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Request a Price Quote
                </h2>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5 text-[#7E857E]">Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with PIN Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#454B45]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#4E6C50'}
                      onBlur={e => e.target.style.borderColor = '#EAE3D9'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#454B45]">
                  Options *
                </label>
                <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                  style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#454B45]">
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#4E6C50'}
                  onBlur={e => e.target.style.borderColor = '#EAE3D9'}
                />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-xs flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 bg-[#4E6C50] hover:bg-[#3D4A3C] shadow-sm cursor-pointer"
              >
                <Send size={14} /> Submit Quotation Request
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} className="text-[#4E6C50]" />
                <a href="mailto:info@textilemall.com"
                  className="text-[11px] font-bold tracking-widest hover:underline text-[#4E6C50]"
                >
                  info@textilemall.com
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
