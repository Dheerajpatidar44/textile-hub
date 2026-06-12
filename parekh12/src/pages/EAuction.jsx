import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#121216',
  border: '1.5px solid #24252F',
  color: '#F3F4F6',
};

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#0A0A0C' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#24252F] bg-[#0A0A0C]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            e-Auction
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-2xl mx-auto px-4 py-10">
        <p className="text-center text-[13.5px] mb-8 text-[#9CA3AF] font-semibold">
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-[#C89B5F]" />
            <h2 className="font-extrabold text-lg uppercase tracking-wide text-[#F3F4F6]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Active e-Auctions
            </h2>
          </div>
          <div className="py-12 flex flex-col items-center justify-center bg-[#121216]"
            style={{ border: '1.5px solid #24252F' }}>
            <Inbox size={36} className="mb-3 text-[#C89B5F]" strokeWidth={1.2} />
            <p className="text-[11px] font-extrabold tracking-widest text-[#9CA3AF] ">
              At present, No e-Auction published
            </p>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="shadow-sm overflow-hidden bg-[#121216] text-left"
          style={{ border: '1.5px solid #24252F' }}>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#24252F]">
              <div className="w-11 h-11 flex items-center justify-center bg-[#C89B5F]/10 border border-[#C89B5F]/20">
                <Gavel size={20} className="text-[#C89B5F]" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl uppercase tracking-wide text-[#F3F4F6]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Participation Registration
                </h2>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5 text-[#9CA3AF]">
                  Register your interest for upcoming auctions
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { label: 'Name of the Participant *', type: 'text', req: true },
                  { label: 'Legal Name of Business *', type: 'text', req: true },
                  { label: 'Business Address with PIN Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#D1D5DB]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#C89B5F'}
                      onBlur={e => e.target.style.borderColor = '#24252F'}
                    />
                  </div>
                ))}
              </div>

              {/* Upload */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-3 text-[#D1D5DB]">
                  Upload GST Certificate
                </label>
                <label className="w-full border-2 border-dashed py-10 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80 bg-[#121216]"
                  style={{ borderColor: '#24252F' }}>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={28} className="mb-3 text-[#C89B5F]" strokeWidth={1.2} />
                  <p className="text-xs font-bold text-[#9CA3AF]">Click to upload GST Certificate</p>
                  <p className="text-[9px] uppercase tracking-widest font-bold mt-1 text-[#9CA3AF]">PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 font-bold tracking-widest uppercase text-white text-xs flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 bg-[#4E6C50] btn-primary shadow-sm cursor-pointer"
              >
                <Send size={14} /> Submit Registration
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} className="text-[#C89B5F]" />
                <a href="mailto:info@swastiktextilemall.com" className="text-[11px] font-bold tracking-widest hover:underline text-[#C89B5F]">
                  info@swastiktextilemall.com
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
