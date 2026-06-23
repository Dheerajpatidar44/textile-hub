import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-6 md:py-8 text-left font-outfit">
      {/* Compact Page Heading */}
      <div className="mb-6 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          Trade Enquiry
        </h1>
      </div>

      <div className="mb-6">
        <p className="max-w-2xl text-[#4F6D7A] text-xs sm:text-sm leading-relaxed font-outfit">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-3xl relative"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-5">
            <h3 className="font-playfair text-lg text-[#0C2E3A] border-b border-gray-100 pb-2 font-semibold uppercase tracking-wider">
              Company Details
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-[#0C2E3A] uppercase tracking-wider font-outfit block">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-[#0C2E3A] uppercase tracking-wider font-outfit block">
                  Contact Person *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-[#0C2E3A] uppercase tracking-wider font-outfit block">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-[#0C2E3A] uppercase tracking-wider font-outfit block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 pt-4">
            <h3 className="font-playfair text-lg text-[#0C2E3A] border-b border-gray-100 pb-2 font-semibold uppercase tracking-wider">
              Enquiry Details
            </h3>

            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-[#0C2E3A] uppercase tracking-wider font-outfit block">
                Interested Categories
              </label>
              <select className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-[#0C2E3A] text-xs transition-all appearance-none cursor-pointer">
                <option>Sarees</option>
                <option>Leggings</option>
                <option>Kurtis</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Multiple / Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-[#0C2E3A] uppercase tracking-wider font-outfit block">
                Expected Order Volume
              </label>
              <select className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-[#0C2E3A] text-xs transition-all appearance-none cursor-pointer">
                <option>Small (Below 1000 meters / units)</option>
                <option>Medium (1000 - 5000 meters / units)</option>
                <option>Large (5000+ meters / units)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-[#0C2E3A] uppercase tracking-wider font-outfit block">
                Additional Requirements / Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 bg-[#FAF8F9] border border-gray-200 focus:outline-none focus:border-[#0A5F73] focus:ring-1 focus:ring-[#0A5F73]/10 rounded-xl text-xs transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <button className="w-full bg-[#0A5F73] hover:bg-[#084E5F] text-white py-3.5 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer text-xs">
            Submit Trade Enquiry
          </button>
        </form>
      </motion.div>
    </div>
  );
}
