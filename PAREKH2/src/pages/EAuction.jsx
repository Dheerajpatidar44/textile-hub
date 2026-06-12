import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Gavel, Clock, AlertCircle } from 'lucide-react';

const EAuction = () => {
  return (
    <div>
      <PageHeader title="e-Auction Portal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-brand-darkbrown text-white rounded-xl shadow-lg mb-8 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1584227185011-8071e6be12b5?auto=format&fit=crop&w=800&q=80" alt="Live Auctions" className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Live Auctions</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between border border-white/20">
                    <div>
                      <h4 className="font-bold text-brand-light">Lot #1042: Silk Blends</h4>
                      <p className="text-sm text-gray-300">Closing in: 2h 15m</p>
                    </div>
                    <Gavel className="text-white w-6 h-6" />
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between border border-white/20">
                    <div>
                      <h4 className="font-bold text-brand-light">Lot #1045: Cotton Surplus</h4>
                      <p className="text-sm text-gray-300">Closing in: 5h 30m</p>
                    </div>
                    <Gavel className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start">
              <AlertCircle className="text-red-500 w-6 h-6 mr-3 shrink-0 mt-1" />
              <p className="text-sm text-red-800">
                Participation in e-Auctions requires prior registration and EMD deposit. Ensure your KYC is updated.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-brand-darkbrown mb-6">Register for e-Auction</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Registration No.</label>
                    <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GST IN</label>
                    <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Authorized Bidder Name</label>
                    <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Official Email</label>
                    <input type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Details (For EMD Refund)</label>
                  <textarea rows="3" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" placeholder="A/c No., IFSC Code, Bank Name"></textarea>
                </div>
                
                <div className="flex items-center mt-4">
                  <input type="checkbox" className="h-4 w-4 text-brand-maroon border-gray-300 rounded focus:ring-brand-maroon" required />
                  <label className="ml-2 block text-sm text-gray-700">
                    I accept the Terms and Conditions of the e-Auction portal.
                  </label>
                </div>
                
                <button type="submit" className="w-full md:w-auto bg-brand-maroon text-white font-bold py-3 px-8 rounded hover:bg-[#022c22] transition-colors shadow-sm">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;
