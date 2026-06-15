import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const C = { 
  primary: '#6E64B4', 
  primaryDark: '#252131', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  bgLight: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>e-Quotation</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-3xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} color={C.primary} />
            <h2 className="font-black text-lg uppercase tracking-wide serif-title" style={{ color: C.textDark }}>Active Quotation Requests</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                id: "EQ-2026-004",
                title: "Premium Combed Cotton Fabric",
                specifications: "100% Cotton, 60/60 Count, 180 GSM, plain weave, dyed white. Required certificate of quality standard.",
                quantity: "15,000 Meters",
                closingDate: "June 25, 2026",
              },
              {
                id: "EQ-2026-005",
                title: "Organic Mulberry Silk Yarn",
                specifications: "Grade A Mulberry Silk Yarn, count: 20/22 D, unbleached, ready for custom dyeing process.",
                quantity: "2,000 Kilograms",
                closingDate: "June 30, 2026",
              },
              {
                id: "EQ-2026-006",
                title: "Linen Polyester Upholstery Blend",
                specifications: "55% Linen / 45% Polyester blend fabric, 320 GSM, textured weave, fire retardant coated.",
                quantity: "8,500 Meters",
                closingDate: "July 05, 2026",
              }
            ].map((item) => (
              <div 
                key={item.id} 
                className="p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-md"
                style={{ borderColor: C.border }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded bg-[#6E64B4]/10" style={{ color: C.primary }}>
                      {item.id}
                    </span>
                    <h3 className="font-bold text-[16px] mt-2 serif-title" style={{ color: C.textDark }}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] uppercase tracking-widest font-bold block" style={{ color: C.primary }}>
                      Closing Date
                    </span>
                    <span className="text-xs font-extrabold" style={{ color: C.textDark }}>
                      {item.closingDate}
                    </span>
                  </div>
                </div>
                
                <p className="text-xs opacity-80 leading-relaxed mb-4" style={{ color: C.textDark }}>
                  {item.specifications}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t" style={{ borderColor: C.border }}>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold block opacity-60" style={{ color: C.textDark }}>
                      Quantity Required
                    </span>
                    <span className="text-sm font-black" style={{ color: C.textDark }}>
                      {item.quantity}
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      document.getElementById('quote-form-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg text-xs font-bold transition-all text-white cursor-pointer"
                    style={{ background: C.primary }}
                    onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                    onMouseLeave={e => e.currentTarget.style.background = C.primary}
                  >
                    Submit Bid Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          id="quote-form-section"
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left border scroll-mt-6"
          style={{ borderColor: C.border }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{ background: 'rgba(110, 100, 180, 0.08)', borderColor: 'rgba(110, 100, 180, 0.2)' }}>
                <FileText size={22} color={C.primary} />
              </div>
              <div>
                <h2 className="font-black text-xl uppercase tracking-wide serif-title" style={{ color: C.textDark }}>Request a Price Quote</h2>
                <p className="text-[11px] uppercase tracking-widest font-extrabold mt-0.5 opacity-70" style={{ color: C.textDark }}>Fill in your details below</p>
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
                    <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2" style={{ color: C.textMid }}>{f.label}</label>
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
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2" style={{ color: C.textMid }}>Options *</label>
                <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none" style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2" style={{ color: C.textMid }}>
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
                className="w-full py-4 rounded-xl font-black tracking-widest uppercase text-[#FAF9F5] text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                style={{ background: C.primary }}
                onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                <Send size={16} /> Submit Quotation Request
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} color={C.primary} />
                <a href="mailto:info@auraloom.com"
                  className="text-[11px] font-black tracking-widest hover:underline"
                  style={{ color: C.primary }}>
                  info@auraloom.com
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
