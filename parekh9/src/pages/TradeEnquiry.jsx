import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
            Trade Enquiry
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-[15px] leading-[1.8] mb-10 text-[#706863] font-medium">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #EADCD2' }}
        >
          <div className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="space-y-5">
                <h3 className="font-bold text-xl pb-3 border-b text-[#3C3430]"
                  style={{ fontFamily: "'Marcellus', serif", borderColor: '#EADCD2' }}>
                  Company Details
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Company Name *', type: 'text' }, { label: 'Contact Person *', type: 'text' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#554D48]">{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FCF5F0', border: '1.5px solid #EADCD2', color: '#3C3430' }}
                        onFocus={e => e.target.style.borderColor = '#A24E51'}
                        onBlur={e => e.target.style.borderColor = '#EADCD2'}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Email Address *', type: 'email' }, { label: 'Phone Number *', type: 'tel' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#554D48]">{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FCF5F0', border: '1.5px solid #EADCD2', color: '#3C3430' }}
                        onFocus={e => e.target.style.borderColor = '#A24E51'}
                        onBlur={e => e.target.style.borderColor = '#EADCD2'}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-xl pb-3 border-b text-[#3C3430]"
                  style={{ fontFamily: "'Marcellus', serif", borderColor: '#EADCD2' }}>
                  Enquiry Details
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#554D48]">Interested Categories</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#FCF5F0', border: '1.5px solid #EADCD2', color: '#3C3430' }}>
                    <option>Sarees</option>
                    <option>Leggings</option>
                    <option>Kurtis</option>
                    <option>Suiting & Shirting</option>
                    <option>Home Furnishing</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#554D48]">Expected Order Volume</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#FCF5F0', border: '1.5px solid #EADCD2', color: '#3C3430' }}>
                    <option>Small (Below 1000 meters / units)</option>
                    <option>Medium (1000 - 5000 meters / units)</option>
                    <option>Large (5000+ meters / units)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#554D48]">Additional Requirements / Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#FCF5F0', border: '1.5px solid #EADCD2', color: '#3C3430' }}
                    onFocus={e => e.target.style.borderColor = '#A24E51'}
                    onBlur={e => e.target.style.borderColor = '#EADCD2'}
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-wider text-white transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm"
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
