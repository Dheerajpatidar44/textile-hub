import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const C = { 
  primary: '#C5A377', 
  primaryDark: '#3D3025', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  bgLight: '#FAF7F2', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
  textMuted: '#C5A377' 
};
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>e-Auction</h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-[14px] mb-10 font-semibold opacity-80" style={{ color: C.textDark }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-left">
          <div className="flex items-center gap-3 mb-6">
            <Gavel size={20} color={C.primary} />
            <h2 className="font-bold text-lg tracking-wide serif-title " style={{ color: C.textDark }}>Active e-Auctions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "AUC-2026-009",
                title: "Surplus Organic Linen Stock",
                description: "Lot of premium surplus dyed and organic linen fabrics. Total quantity of approx. 4,500 meters of various color rolls in pristine condition.",
                quantity: "4,500 Meters (approx.)",
                reservePrice: "₹2,50,000",
                currentBid: "₹2,80,000",
                bidsCount: 8,
                closingTime: "June 20, 2026 · 17:00 IST",
                image: "https://images.unsplash.com/photo-1576016770956-debb63d90029?w=600&auto=format&fit=crop&q=60"
              },
              {
                id: "AUC-2026-010",
                title: "Premium Jacquard Weaving Warp Yarns",
                description: "High-grade industrial warp & weft jacquard yarns. 100% natural wool-cotton textures, surplus stock from our high-end winter line.",
                quantity: "1,200 Kilograms",
                reservePrice: "₹1,80,000",
                currentBid: "₹1,95,000",
                bidsCount: 4,
                closingTime: "June 24, 2026 · 14:00 IST",
                image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=60"
              },
              {
                id: "AUC-2026-011",
                title: "Eco-Luxe Mercerized Cotton Cones",
                description: "Mercerized carded cotton warp cones, assorted colors, high tensile strength, perfect for weaving machinery warp setup.",
                quantity: "3,000 Kilograms",
                reservePrice: "₹3,20,000",
                currentBid: "₹3,20,000",
                bidsCount: 0,
                closingTime: "June 28, 2026 · 11:00 IST",
                image: "https://images.unsplash.com/photo-1605697040924-852290f6768a?w=600&auto=format&fit=crop&q=60"
              }
            ].map((auction) => (
              <div 
                key={auction.id} 
                className="flex flex-col rounded-2xl bg-white border overflow-hidden transition-all duration-300 hover:shadow-md"
                style={{ borderColor: C.border }}
              >
                {/* Item Image */}
                <div className="w-full h-48 relative overflow-hidden bg-[#F6F1EA]">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-[#3D3025] text-white">
                    {auction.id}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="font-bold text-[16px] mb-2 serif-title" style={{ color: C.textDark }}>
                      {auction.title}
                    </h3>
                    
                    <p className="text-xs opacity-80 leading-relaxed mb-4 min-h-[48px]" style={{ color: C.textDark }}>
                      {auction.description}
                    </p>

                    <div className="text-left pt-3 border-t border-dashed" style={{ borderColor: C.border }}>
                      <span className="text-[9px] uppercase tracking-widest font-bold block" style={{ color: C.primary }}>
                        Closing Time
                      </span>
                      <span className="text-xs font-bold" style={{ color: C.textDark }}>
                        {auction.closingTime}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-3 border-t border-b mb-4" style={{ borderColor: C.border }}>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 block" style={{ color: C.textDark }}>
                          Lot Quantity
                        </span>
                        <span className="text-xs font-bold" style={{ color: C.textDark }}>
                          {auction.quantity}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 block" style={{ color: C.textDark }}>
                          Reserve Price
                        </span>
                        <span className="text-xs font-bold" style={{ color: C.textDark }}>
                          {auction.reservePrice}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 block" style={{ color: C.textDark }}>
                          Current Bid
                        </span>
                        <span className="text-xs font-bold" style={{ color: C.primary }}>
                          {auction.currentBid}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 block" style={{ color: C.textDark }}>
                          Bids Placed
                        </span>
                        <span className="text-xs font-bold" style={{ color: C.textDark }}>
                          {auction.bidsCount} bids
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <button 
                        onClick={() => {
                          document.getElementById('auction-reg-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-2.5 rounded-lg text-xs font-bold transition-all text-white cursor-pointer"
                        style={{ background: C.primary }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.primaryDark; e.currentTarget.style.color = '#F6F1EA'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#3D3025'; }}
                      >
                        Register to Bid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          id="auction-reg-form"
          className="max-w-3xl mx-auto rounded-3xl shadow-md overflow-hidden bg-white text-left border scroll-mt-6"
          style={{ borderColor: C.border }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{ background: 'rgba(197, 163, 119, 0.08)', borderColor: 'rgba(197, 163, 119, 0.2)' }}>
                <Gavel size={22} color={C.primary} />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide serif-title" style={{ color: C.textDark }}>Participation Registration</h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 opacity-70" style={{ color: C.textDark }}>
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
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: C.textMid }}>{f.label}</label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = C.border}
                    />
                  </div>
                ))}
              </div>

              {/* Upload */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-3" style={{ color: C.textMid }}>
                  Upload GST Certificate
                </label>
                <label className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-85"
                  style={{ borderColor: C.border, background: C.bg }}>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={32} className="mb-3" color={C.primary} strokeWidth={1.5} />
                  <p className="text-sm font-semibold opacity-85" style={{ color: C.textDark }}>Click to upload GST Certificate</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1 opacity-70" style={{ color: C.textDark }}>PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-[#3D3025] bg-[#C5A377] hover:bg-[#3D3025] hover:text-[#F6F1EA] text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer border border-[#C5A377]"
              >
                <Send size={16} /> Submit Registration
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} color={C.primary} />
                <a href="mailto:info@shreetextilemall.com"
                  className="text-[11px] font-bold tracking-widest hover:underline"
                  style={{ color: C.primary }}>
                  info@shreetextilemall.com
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
