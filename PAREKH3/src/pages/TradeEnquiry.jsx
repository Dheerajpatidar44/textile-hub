import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const TradeEnquiry = () => {
  return (
    <div>
      <PageHeader title="Trade Enquiry" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">

          <div className="bg-white border border-[#0B1C3E]/8">
            {/* Header bar */}
            <div className="bg-[#0B1C3E] px-10 py-8">
              <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-2">Business Partnership</p>
              <h2 className="text-3xl font-serif font-light text-white">Partner With Us</h2>
              <p className="text-white/50 text-sm mt-2 font-light">Fill out the form below for bulk orders, distributorship, or any business-related inquiries.</p>
            </div>

            <div className="p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Company Name *</label>
                    <input type="text" className="input-luxury" placeholder="Your company name" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Contact Person *</label>
                    <input type="text" className="input-luxury" placeholder="Full name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Email Address *</label>
                    <input type="email" className="input-luxury" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Phone Number *</label>
                    <input type="tel" className="input-luxury" placeholder="+91 00000 00000" required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Enquiry Type *</label>
                  <select className="input-luxury bg-white" required>
                    <option value="">Select Enquiry Type</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="distributor">Distributorship</option>
                    <option value="export">Export Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Message / Requirements</label>
                  <textarea rows="5" className="input-luxury resize-none" placeholder="Please detail your requirements..." />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1C3E] text-white py-4 text-xs font-medium uppercase tracking-widest hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeEnquiry;
