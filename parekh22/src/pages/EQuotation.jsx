import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#EFF3EB', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: `linear-gradient(135deg, ${C.bgLight} 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>e-Quotation</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-3xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} color={C.primary} />
            <h2 className="font-black text-lg uppercase tracking-wide" style={{ color: C.textDark }}>Active Quotation Requests</h2>
          </div>
          <div className="rounded-2xl py-16 flex flex-col items-center justify-center bg-white" style={{ border: `1.5px solid ${C.border}` }}>
            <Inbox size={40} className="mb-4" color={C.primary} strokeWidth={1} />
            <p className="text-[12px] font-black tracking-widest" style={{ color: '#4B5563' }}>
              ( At present, No e-Quotation request published )
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: `1.5px solid ${C.border}` }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5" style={{ borderBottom: `1px solid ${C.border}60` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(114,28,43,0.08)', border: '1px solid rgba(114,28,43,0.2)' }}>
                <FileText size={22} color={C.primary} />
              </div>
              <div>
                <h2 className="font-black text-xl uppercase tracking-wide" style={{ color: C.textDark }}>Request a Price Quote</h2>
                <p className="text-[11px] uppercase tracking-widest font-black mt-0.5" style={{ color: '#6B7280' }}>Fill in your details below</p>
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
                    <label className="block text-[11px] uppercase tracking-widest font-black mb-2" style={{ color: C.textMid }}>{f.label}</label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = C.border}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-black mb-2" style={{ color: C.textMid }}>Options *</label>
                <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none" style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-black mb-2" style={{ color: C.textMid }}>
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = C.primary}
                  onBlur={e => e.target.style.borderColor = C.border}
                />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-black tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm"
                style={{ background: C.primary }}
                onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                <Send size={16} /> Submit Quotation Request
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} color={C.primary} />
                <a href="mailto:info@grandtextilemart.com"
                  className="text-[11px] font-black tracking-widest hover:underline"
                  style={{ color: C.primary }}>
                  info@grandtextilemart.com
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
