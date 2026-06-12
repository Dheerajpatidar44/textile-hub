import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="space-y-16">
      <div className="text-center py-12">
        
        <h1 className="font-playfair text-5xl text-sapphire-900">Trade Enquiry</h1>
        <p className="mt-6 max-w-2xl mx-auto text-sapphire-800/70">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-pearl-100">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl text-sapphire-900 border-b border-pearl-100 pb-4">Company Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Company Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Contact Person *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h3 className="font-playfair text-2xl text-sapphire-900 border-b border-pearl-100 pb-4">Enquiry Details</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-sapphire-800">Interested Categories</label>
              <select className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400">
                <option>Sarees</option>
                <option>Leggings</option>
                <option>Kurtis</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Multiple / Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-sapphire-800">Expected Order Volume</label>
              <select className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400">
                <option>Small (Below 1000 meters / units)</option>
                <option>Medium (1000 - 5000 meters / units)</option>
                <option>Large (5000+ meters / units)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-sapphire-800">Additional Requirements / Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400 resize-none"></textarea>
            </div>
          </div>

          <button className="w-full bg-sapphire-900 text-pearl-50 py-4 rounded-lg font-medium tracking-wide hover:bg-rosegold-400 hover:text-sapphire-900 transition-colors mt-8">
            Submit Trade Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
