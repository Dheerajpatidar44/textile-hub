import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { FileText, CheckCircle, Clock } from 'lucide-react';

const EQuotation = () => {
  const recentQuotes = [
    { id: 'QT-2023-891', desc: 'Premium Silk Sarees (Qty: 500 pcs) for Retail Boutique', status: 'approved', statusLabel: 'Approved' },
    { id: 'QT-2023-892', desc: 'Cotton Suiting Fabrics (Qty: 2000 meters)', status: 'processing', statusLabel: 'Processing' },
  ];

  return (
    <div>
      <PageHeader title="e-Quotation" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-8">

          {/* Recent Quotations */}
          <div className="bg-[#0B1C3E]">
            <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-serif font-light text-white">Recent Quotations</h3>
              <span className="text-[0.6rem] bg-[#D4A853]/20 text-[#D4A853] px-3 py-1 uppercase tracking-widest">Live Updates</span>
            </div>
            <div className="p-4 space-y-3">
              {recentQuotes.map((q) => (
                <div key={q.id} className="bg-white/5 border border-white/10 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/8 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#D4A853]/20 flex items-center justify-center shrink-0">
                      <FileText size={14} className="text-[#D4A853]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">Quote #{q.id}</h4>
                      <p className="text-white/45 text-xs mt-1 font-light">{q.desc}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs px-3 py-1.5 self-start md:self-auto whitespace-nowrap font-medium ${
                    q.status === 'approved'
                      ? 'bg-green-500/15 text-green-400'
                      : 'bg-amber-500/15 text-amber-400'
                  }`}>
                    {q.status === 'approved' ? <CheckCircle size={12} /> : <Clock size={12} />}
                    {q.statusLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-[#0B1C3E]/8">
            <div className="bg-[#D4A853] px-10 py-8">
              <h2 className="text-2xl font-serif font-light text-[#0B1C3E]">Request a New Quotation</h2>
              <p className="text-[#0B1C3E]/70 text-sm mt-1 font-light">Submit your specific product requirements to receive a formal e-Quotation.</p>
            </div>

            <div className="p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Full Name</label>
                    <input type="text" className="input-luxury" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Company Name</label>
                    <input type="text" className="input-luxury" required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Product Category</label>
                  <select className="input-luxury bg-white">
                    <option>Sarees</option>
                    <option>Suiting & Shirting</option>
                    <option>Home Furnishing</option>
                    <option>Ethnic Wear</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Expected Quantity</label>
                  <input type="number" className="input-luxury" placeholder="e.g. 500 meters / 100 pieces" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Additional Specifications</label>
                  <textarea rows="4" className="input-luxury resize-none" placeholder="Material preferences, color codes, delivery timeline..." />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A853] text-[#0B1C3E] py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#0B1C3E] hover:text-white transition-all duration-300"
                >
                  Generate Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EQuotation;
