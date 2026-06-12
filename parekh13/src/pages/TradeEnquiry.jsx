import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#EADBC8]/60 bg-[#FAF6F0]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Trade Enquiry
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-[14px] leading-[1.8] mb-10 text-[#504257] font-semibold">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-sm overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #EADBC8' }}
        >
          <div className="p-8 md:p-10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="space-y-5">
                <h3 className="font-extrabold text-xl pb-3 border-b text-[#2A083E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", borderColor: '#EADBC8' }}>
                  Company Details
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Company Name *', type: 'text' }, { label: 'Contact Person *', type: 'text' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#504257]">{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FAF6F0', border: '1.5px solid #EADBC8', color: '#2A083E' }}
                        onFocus={e => e.target.style.borderColor = '#C5A059'}
                        onBlur={e => e.target.style.borderColor = '#EADBC8'}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Email Address *', type: 'email' }, { label: 'Phone Number *', type: 'tel' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#504257]">{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FAF6F0', border: '1.5px solid #EADBC8', color: '#2A083E' }}
                        onFocus={e => e.target.style.borderColor = '#C5A059'}
                        onBlur={e => e.target.style.borderColor = '#EADBC8'}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="font-extrabold text-xl pb-3 border-b text-[#2A083E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", borderColor: '#EADBC8' }}>
                  Enquiry Details
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#504257]">Interested Categories</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                    style={{ background: '#FAF6F0', border: '1.5px solid #EADBC8', color: '#2A083E' }}>
                    <option>Sarees</option>
                    <option>Leggings</option>
                    <option>Kurtis</option>
                    <option>Suiting & Shirting</option>
                    <option>Home Furnishing</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#504257]">Expected Order Volume</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                    style={{ background: '#FAF6F0', border: '1.5px solid #EADBC8', color: '#2A083E' }}>
                    <option>Small (Below 1000 meters / units)</option>
                    <option>Medium (1000 - 5000 meters / units)</option>
                    <option>Large (5000+ meters / units)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#504257]">Additional Requirements / Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#FAF6F0', border: '1.5px solid #EADBC8', color: '#2A083E' }}
                    onFocus={e => e.target.style.borderColor = '#C5A059'}
                    onBlur={e => e.target.style.borderColor = '#EADBC8'}
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-wider text-white transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm cursor-pointer"
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
