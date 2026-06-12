import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Trade Enquiry
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-[15px] leading-[1.8] mb-10" style={{ color: '#6B6B6B' }}>
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-xl overflow-hidden"
          style={{ background: '#FFFFFF', border: '1.5px solid rgba(225,77,42,0.2)' }}
        >
          <div className="h-1 w-full"  />
          <div className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="space-y-5">
                <h3 className="font-bold text-2xl pb-3 border-b"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#303030', borderColor: 'rgba(225,77,42,0.2)' }}>
                  Company Details
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Company Name *', type: 'text' }, { label: 'Contact Person *', type: 'text' }].map(f => (
                    <div key={f.label} className="space-y-1.5">
                      <label className="text-[13px] font-medium" style={{ color: '#4B4B4B' }}>{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FAF4EE', border: '1.5px solid rgba(225,77,42,0.2)', color: '#303030' }}
                        onFocus={e => e.target.style.borderColor = '#E14D2A'}
                        onBlur={e => e.target.style.borderColor = 'rgba(225,77,42,0.2)'}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Email Address *', type: 'email' }, { label: 'Phone Number *', type: 'tel' }].map(f => (
                    <div key={f.label} className="space-y-1.5">
                      <label className="text-[13px] font-medium" style={{ color: '#4B4B4B' }}>{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FAF4EE', border: '1.5px solid rgba(225,77,42,0.2)', color: '#303030' }}
                        onFocus={e => e.target.style.borderColor = '#E14D2A'}
                        onBlur={e => e.target.style.borderColor = 'rgba(225,77,42,0.2)'}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-2xl pb-3 border-b"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#303030', borderColor: 'rgba(225,77,42,0.2)' }}>
                  Enquiry Details
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium" style={{ color: '#4B4B4B' }}>Interested Categories</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#FAF4EE', border: '1.5px solid rgba(225,77,42,0.2)', color: '#303030' }}>
                    <option>Sarees</option>
                    <option>Leggings</option>
                    <option>Kurtis</option>
                    <option>Suiting & Shirting</option>
                    <option>Home Furnishing</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium" style={{ color: '#4B4B4B' }}>Expected Order Volume</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#FAF4EE', border: '1.5px solid rgba(225,77,42,0.2)', color: '#303030' }}>
                    <option>Small (Below 1000 meters / units)</option>
                    <option>Medium (1000 - 5000 meters / units)</option>
                    <option>Large (5000+ meters / units)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium" style={{ color: '#4B4B4B' }}>Additional Requirements / Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#FAF4EE', border: '1.5px solid rgba(225,77,42,0.2)', color: '#303030' }}
                    onFocus={e => e.target.style.borderColor = '#E14D2A'}
                    onBlur={e => e.target.style.borderColor = 'rgba(225,77,42,0.2)'}
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-wide text-[#303030] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
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
