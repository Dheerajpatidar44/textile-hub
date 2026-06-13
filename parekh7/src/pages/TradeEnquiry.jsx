import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Trade Enquiry
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-[15px] leading-[1.8] mb-10" style={{ color: '#7D5A4F' }}>
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-xl overflow-hidden"
          style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}
        >
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227, #9B2519)' }} />
          <div className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="space-y-5">
                <h3 className="font-bold text-2xl pb-3 border-b"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810', borderColor: 'rgba(201,162,39,0.2)' }}>
                  Company Details
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Company Name *', type: 'text' }, { label: 'Contact Person *', type: 'text' }].map(f => (
                    <div key={f.label} className="space-y-1.5">
                      <label className="text-[13px] font-medium" style={{ color: '#5C3B2C' }}>{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FDF6EC', border: '1.5px solid rgba(201,162,39,0.2)', color: '#2C1810' }}
                        onFocus={e => e.target.style.borderColor = '#C9A227'}
                        onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.2)'}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Email Address *', type: 'email' }, { label: 'Phone Number *', type: 'tel' }].map(f => (
                    <div key={f.label} className="space-y-1.5">
                      <label className="text-[13px] font-medium" style={{ color: '#5C3B2C' }}>{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FDF6EC', border: '1.5px solid rgba(201,162,39,0.2)', color: '#2C1810' }}
                        onFocus={e => e.target.style.borderColor = '#C9A227'}
                        onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.2)'}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-2xl pb-3 border-b"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810', borderColor: 'rgba(201,162,39,0.2)' }}>
                  Enquiry Details
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium" style={{ color: '#5C3B2C' }}>Interested Categories</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#FDF6EC', border: '1.5px solid rgba(201,162,39,0.2)', color: '#2C1810' }}>
                    <option>Sarees</option>
                    <option>Leggings</option>
                    <option>Kurtis</option>
                    <option>Suiting & Shirting</option>
                    <option>Home Furnishing</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium" style={{ color: '#5C3B2C' }}>Expected Order Volume</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#FDF6EC', border: '1.5px solid rgba(201,162,39,0.2)', color: '#2C1810' }}>
                    <option>Small (Below 1000 meters / units)</option>
                    <option>Medium (1000 - 5000 meters / units)</option>
                    <option>Large (5000+ meters / units)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium" style={{ color: '#5C3B2C' }}>Additional Requirements / Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#FDF6EC', border: '1.5px solid rgba(201,162,39,0.2)', color: '#2C1810' }}
                    onFocus={e => e.target.style.borderColor = '#C9A227'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.2)'}
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-wide text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #9B2519, #B83227)', boxShadow: '0 4px 16px rgba(184,50,39,0.35)' }}>
                Submit Trade Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
