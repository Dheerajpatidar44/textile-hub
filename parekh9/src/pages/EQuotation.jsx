import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FCF5F0',
  border: '1.5px solid #EADCD2',
  color: '#3C3430',
};

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} color="#A24E51" />
            <h2 className="font-bold text-lg uppercase tracking-wide text-[#3C3430]"
              style={{ fontFamily: "'Marcellus', serif" }}>
              Active Quotation Requests
            </h2>
          </div>
          <div className="rounded-2xl py-16 flex flex-col items-center justify-center bg-white"
            style={{ border: '1.5px solid #EADCD2' }}>
            <Inbox size={40} className="mb-4" color="#A24E51" strokeWidth={1} />
            <p className="text-[12px] font-bold tracking-widest text-[#706863]">
              ( At present, No e-Quotation published )
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #EADCD2' }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#EADCD2]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(162,78,81,0.1)', border: '1px solid rgba(162,78,81,0.2)' }}>
                <FileText size={22} color="#A24E51" />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide text-[#3C3430]"
                  style={{ fontFamily: "'Marcellus', serif" }}>
                  Request a Price Quote
                </h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 text-[#908882]">Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with PIN Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#554D48]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#A24E51'}
                      onBlur={e => e.target.style.borderColor = '#EADCD2'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#554D48]">
                  Options *
                </label>
                <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                  style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#554D48]">
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#A24E51'}
                  onBlur={e => e.target.style.borderColor = '#EADCD2'}
                />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm"
              >
                <Send size={16} /> Submit Quotation Request
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} color="#A24E51" />
                <a href="mailto:info@textilemall.com"
                  className="text-[11px] font-bold tracking-widest hover:underline text-[#A24E51]"
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
