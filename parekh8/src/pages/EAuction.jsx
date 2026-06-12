import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FAF4EE',
  border: '1.5px solid rgba(225,77,42,0.2)',
  color: '#303030',
};

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            e-Auction
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8 py-10">
        <p className="text-center text-[14px] mb-10" style={{ color: '#6B6B6B' }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} color="#E14D2A" />
            <h2 className="font-bold text-lg uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
              Active e-Auctions
            </h2>
          </div>
          <div className="rounded-2xl py-16 flex flex-col items-center justify-center"
            style={{ background: '#FFFFFF', border: '1.5px solid rgba(225,77,42,0.15)' }}>
            <Inbox size={40} className="mb-4" color="#E14D2A" strokeWidth={1} />
            <p className="text-[12px] font-bold tracking-widest" style={{ color: '#6B6B6B' }}>
              At present, No e-Auction published
            </p>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-xl overflow-hidden"
          style={{ background: '#FFFFFF', border: '1.5px solid rgba(225,77,42,0.2)' }}>
          <div className="h-1 w-full"  />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b" style={{ borderColor: 'rgba(225,77,42,0.15)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(225,77,42,0.1)', border: '1px solid rgba(225,77,42,0.2)' }}>
                <Gavel size={22} color="#E14D2A" />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                  Participation Registration
                </h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5" style={{ color: '#6B6B6B' }}>
                  Register your interest for upcoming auctions
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Participant *', type: 'text', req: true },
                  { label: 'Legal Name of Business *', type: 'text', req: true },
                  { label: 'Business Address with PIN Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: '#4B4B4B' }}>
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#E14D2A'}
                      onBlur={e => e.target.style.borderColor = 'rgba(225,77,42,0.2)'}
                    />
                  </div>
                ))}
              </div>

              {/* Upload */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-3" style={{ color: '#4B4B4B' }}>
                  Upload GST Certificate
                </label>
                <label className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80"
                  style={{ borderColor: 'rgba(225,77,42,0.3)', background: '#FAF4EE' }}>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={32} className="mb-3" color="#E14D2A" strokeWidth={1.5} />
                  <p className="text-sm font-medium" style={{ color: '#6B6B6B' }}>Click to upload GST Certificate</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: '#6B6B6B' }}>PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-[#303030] text-sm flex items-center justify-center gap-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
                >
                <Send size={16} /> Submit Registration
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} color="#E14D2A" />
                <a href="mailto:info@textilemall.com" className="text-[11px] font-bold tracking-widest hover:underline" style={{ color: '#E14D2A' }}>
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

export default EAuction;
