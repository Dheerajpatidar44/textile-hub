import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Gavel, Clock, AlertCircle } from 'lucide-react';

const EAuction = () => {
  const liveAuctions = [
    { lot: '#1042', name: 'Silk Blends', closing: '2h 15m' },
    { lot: '#1045', name: 'Cotton Surplus', closing: '5h 30m' },
  ];

  return (
    <div>
      <PageHeader title="e-Auction" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <div className="lg:w-80 shrink-0 space-y-5">
              {/* Live Auctions panel */}
              <div className="bg-[#0B1C3E] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584227185011-8071e6be12b5?auto=format&fit=crop&w=800&q=80"
                  alt="Live Auctions"
                  className="w-full h-44 object-cover opacity-60"
                />
                <div className="p-6">
                  <h3 className="text-lg font-serif font-light text-white mb-5">Live Auctions</h3>
                  <div className="space-y-3">
                    {liveAuctions.map((a) => (
                      <div key={a.lot} className="bg-white/8 border border-white/10 p-4 flex items-center justify-between hover:bg-white/12 transition-colors">
                        <div>
                          <h4 className="text-white text-sm font-medium">Lot {a.lot}: {a.name}</h4>
                          <p className="text-white/40 text-xs mt-1 font-light">Closing in: {a.closing}</p>
                        </div>
                        <Gavel size={16} className="text-[#D4A853]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="bg-amber-50 border-l-4 border-[#D4A853] p-5 flex gap-3">
                <AlertCircle size={16} className="text-[#D4A853] shrink-0 mt-0.5" />
                <p className="text-xs text-[#6B7A99] leading-relaxed font-light">
                  Participation in e-Auctions requires prior registration and EMD deposit. Ensure your KYC is updated.
                </p>
              </div>
            </div>

            {/* Main form */}
            <div className="flex-1 bg-white border border-[#0B1C3E]/8">
              <div className="bg-[#0B1C3E] px-8 py-7">
                <h2 className="text-2xl font-serif font-light text-white">Register for e-Auction</h2>
              </div>

              <div className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Company Registration No.</label>
                      <input type="text" className="input-luxury" required />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">GST IN</label>
                      <input type="text" className="input-luxury" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Authorized Bidder Name</label>
                      <input type="text" className="input-luxury" required />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Official Email</label>
                      <input type="email" className="input-luxury" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Bank Account Details (For EMD Refund)</label>
                    <textarea rows="3" className="input-luxury resize-none" placeholder="A/c No., IFSC Code, Bank Name" />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="terms-auction"
                      className="h-4 w-4 border-[#0B1C3E]/30 rounded-none accent-[#D4A853]"
                      required
                    />
                    <label htmlFor="terms-auction" className="text-xs text-[#6B7A99] font-light">
                      I accept the Terms and Conditions of the e-Auction portal.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0B1C3E] text-white px-10 py-3.5 text-xs font-medium uppercase tracking-widest hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300"
                  >
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;
