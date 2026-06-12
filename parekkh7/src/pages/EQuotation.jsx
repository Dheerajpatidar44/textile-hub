import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FDF6EC',
  border: '1.5px solid rgba(201,162,39,0.2)',
  color: '#2C1810',
};

const EQuotation = () => {
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
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} color="#C9A227" />
            <h2 className="font-bold text-lg uppercase tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
              Active Quotation Requests
            </h2>
          </div>
          <div className="rounded-2xl py-16 flex flex-col items-center justify-center"
            style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.15)' }}>
            <Inbox size={40} className="mb-4" color="#D4BDB6" strokeWidth={1} />
            <p className="text-[12px] font-bold tracking-widest" style={{ color: '#A68B7C' }}>
              ( At present, No e-Quotation published )
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-xl overflow-hidden"
          style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}>
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227, #9B2519)' }} />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b" style={{ borderColor: 'rgba(201,162,39,0.15)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)' }}>
                <FileText size={22} color="#C9A227" />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                  Request a Price Quote
                </h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5" style={{ color: '#A68B7C' }}>Fill in your details below</p>
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
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: '#5C3B2C' }}>
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#C9A227'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.2)'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: '#5C3B2C' }}>
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
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: '#5C3B2C' }}>
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C9A227'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.2)'}
                />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #9B2519, #B83227)', boxShadow: '0 4px 16px rgba(184,50,39,0.3)' }}>
                <Send size={16} /> Submit Quotation Request
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} color="#C9A227" />
                <a href="mailto:info@textilemall.com"
                  className="text-[11px] font-bold tracking-widest hover:underline"
                  style={{ color: '#C9A227' }}>
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
