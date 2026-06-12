import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FFFFFF',
  border: '1.5px solid #EADBC8',
  color: '#2A083E',
};

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#EADBC8] bg-[#FAF6F0]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            e-Auction
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-2xl mx-auto px-4 py-10">
        <p className="text-center text-[13.5px] mb-8 text-[#504257] font-semibold">
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-[#C5A059]" />
            <h2 className="font-extrabold text-lg uppercase tracking-wide text-[#2A083E]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Active e-Auctions
            </h2>
          </div>
          <div className="py-12 flex flex-col items-center justify-center bg-white rounded-2xl"
            style={{ border: '1.5px solid #EADBC8' }}>
            <Inbox size={36} className="mb-3 text-[#C5A059]" strokeWidth={1.2} />
            <p className="text-[11px] font-extrabold tracking-widest text-[#786B80]">
              At present, No e-Auction published
            </p>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="shadow-sm overflow-hidden bg-white text-left rounded-2xl"
          style={{ border: '1.5px solid #EADBC8' }}>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#EADBC8]">
              <div className="w-11 h-11 flex items-center justify-center bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-lg">
                <Gavel size={20} className="text-[#C5A059]" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl uppercase tracking-wide text-[#2A083E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Participation Registration
                </h2>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5 text-[#786B80]">
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
                    <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#504257]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 rounded-lg"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#C5A059'}
                      onBlur={e => e.target.style.borderColor = '#EADBC8'}
                    />
                  </div>
                ))}
              </div>

              {/* Upload */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-3 text-[#504257]">
                  Upload GST Certificate
                </label>
                <label className="w-full border-2 border-dashed py-10 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80 bg-[#FAF6F0] rounded-lg animate-none"
                  style={{ borderColor: '#EADBC8' }}>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={28} className="mb-3 text-[#C5A059]" strokeWidth={1.2} />
                  <p className="text-xs font-bold text-[#504257]">Click to upload GST Certificate</p>
                  <p className="text-[9px] uppercase tracking-widest font-bold mt-1 text-[#786B80]">PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 font-bold tracking-widest uppercase text-white text-xs flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm cursor-pointer"
              >
                <Send size={14} /> Submit Registration
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} className="text-[#C5A059]" />
                <a href="mailto:info@mayuraroyaltextile.com" className="text-[11px] font-bold tracking-widest hover:underline text-[#C5A059]">
                  info@mayuraroyaltextile.com
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
