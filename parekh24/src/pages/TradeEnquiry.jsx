import { motion } from 'framer-motion';

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

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Trade Enquiry</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-[15px] leading-[1.8] mb-10 font-semibold opacity-80" style={{ color: C.textDark }}>
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left border"
          style={{ borderColor: C.border }}
        >
          <div className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="space-y-5">
                <h3 className="font-black text-xl pb-3 serif-title" style={{ color: C.textDark, borderBottom: `1px solid ${C.border}` }}>
                  Company Details
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Company Name *', type: 'text' }, { label: 'Contact Person *', type: 'text' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold" style={{ color: C.textMid }}>{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark }}
                        onFocus={e => e.target.style.borderColor = C.primary}
                        onBlur={e => e.target.style.borderColor = C.border}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Email Address *', type: 'email' }, { label: 'Phone Number *', type: 'tel' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold" style={{ color: C.textMid }}>{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark }}
                        onFocus={e => e.target.style.borderColor = C.primary}
                        onBlur={e => e.target.style.borderColor = C.border}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="font-black text-xl pb-3 serif-title" style={{ color: C.textDark, borderBottom: `1px solid ${C.border}` }}>
                  Enquiry Details
                </h3>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold" style={{ color: C.textMid }}>Interested Categories</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                    style={{ background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark }}>
                    <option>Sarees</option>
                    <option>Leggings</option>
                    <option>Kurtis</option>
                    <option>Suiting & Shirting</option>
                    <option>Home Furnishing</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold" style={{ color: C.textMid }}>Expected Order Volume</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                    style={{ background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark }}>
                    <option>Small (Below 1000 meters / units)</option>
                    <option>Medium (1000 - 5000 meters / units)</option>
                    <option>Large (5000+ meters / units)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold" style={{ color: C.textMid }}>Additional Requirements / Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark }}
                    onFocus={e => e.target.style.borderColor = C.primary}
                    onBlur={e => e.target.style.borderColor = C.border}
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-black tracking-wider text-white transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                style={{ background: C.primary }}
                onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                Submit Trade Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
