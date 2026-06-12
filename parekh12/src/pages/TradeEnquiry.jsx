import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FDFBF7' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#EAE3D9]/60 bg-[#FDFBF7]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Trade Enquiry
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-[14px] leading-[1.8] mb-10 text-[#5D645D] font-semibold">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-sm overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #EAE3D9' }}
        >
          <div className="p-8 md:p-10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="space-y-5">
                <h3 className="font-extrabold text-xl pb-3 border-b text-[#2C362B]"
                  style={{ fontFamily: "'Playfair Display', serif", borderColor: '#EAE3D9' }}>
                  Company Details
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Company Name *', type: 'text' }, { label: 'Contact Person *', type: 'text' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#454B45]">{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FDFBF7', border: '1.5px solid #EAE3D9', color: '#2C362B' }}
                        onFocus={e => e.target.style.borderColor = '#4E6C50'}
                        onBlur={e => e.target.style.borderColor = '#EAE3D9'}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[{ label: 'Email Address *', type: 'email' }, { label: 'Phone Number *', type: 'tel' }].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#454B45]">{f.label}</label>
                      <input type={f.type} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: '#FDFBF7', border: '1.5px solid #EAE3D9', color: '#2C362B' }}
                        onFocus={e => e.target.style.borderColor = '#4E6C50'}
                        onBlur={e => e.target.style.borderColor = '#EAE3D9'}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="font-extrabold text-xl pb-3 border-b text-[#2C362B]"
                  style={{ fontFamily: "'Playfair Display', serif", borderColor: '#EAE3D9' }}>
                  Enquiry Details
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#454B45]">Interested Categories</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                    style={{ background: '#FDFBF7', border: '1.5px solid #EAE3D9', color: '#2C362B' }}>
                    <option>Sarees</option>
                    <option>Leggings</option>
                    <option>Kurtis</option>
                    <option>Suiting & Shirting</option>
                    <option>Home Furnishing</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#454B45]">Expected Order Volume</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                    style={{ background: '#FDFBF7', border: '1.5px solid #EAE3D9', color: '#2C362B' }}>
                    <option>Small (Below 1000 meters / units)</option>
                    <option>Medium (1000 - 5000 meters / units)</option>
                    <option>Large (5000+ meters / units)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#454B45]">Additional Requirements / Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#FDFBF7', border: '1.5px solid #EAE3D9', color: '#2C362B' }}
                    onFocus={e => e.target.style.borderColor = '#4E6C50'}
                    onBlur={e => e.target.style.borderColor = '#EAE3D9'}
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-wider text-white transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 bg-[#4E6C50] hover:bg-[#3D4A3C] shadow-sm cursor-pointer"
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
