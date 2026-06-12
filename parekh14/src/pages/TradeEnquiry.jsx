import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="space-y-6 -mt-8">
      <div className="text-center pt-0 pb-2">
        <h1>Trade Enquiry</h1>
        <p className="mt-2 max-w-2xl mx-auto text-gray-650">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-10 md:p-14 border border-gray-200 shadow-xl">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl text-gray-900 border-b border-gray-200 pb-4">Company Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Company Name *</label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-50 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Contact Person *</label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-50 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 bg-pearl-50 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 bg-pearl-50 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h3 className="font-playfair text-2xl text-gray-900 border-b border-gray-200 pb-4">Enquiry Details</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Interested Categories</label>
              <select className="w-full px-4 py-3 bg-pearl-50 border border-gray-200 focus:outline-none focus:border-rosegold-500 text-gray-700 text-sm">
                <option>Sarees</option>
                <option>Leggings</option>
                <option>Kurtis</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Multiple / Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Expected Order Volume</label>
              <select className="w-full px-4 py-3 bg-pearl-50 border border-gray-200 focus:outline-none focus:border-rosegold-500 text-gray-700 text-sm">
                <option>Small (Below 1000 meters / units)</option>
                <option>Medium (1000 - 5000 meters / units)</option>
                <option>Large (5000+ meters / units)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Additional Requirements / Message</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-pearl-50 border border-gray-200 focus:outline-none focus:border-rosegold-500 resize-none"></textarea>
            </div>
          </div>

          <button className="w-full bg-rosegold-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-rosegold-400 transition-colors mt-8">
            Submit Trade Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
