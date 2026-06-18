import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryLight: '#C49272',
  soil: '#231F20',
  sand: '#F4EDE4',
  cream: '#FAF8F5',
  border: '#EAE5DE',
  stone: '#5B5653',
  accent: '#A3704C',
};

const upcomingAuctions = [
  {
    id: "AUC-26-081",
    title: "Surplus Silk Brocade Fabric",
    description: "End of season premium brocade fabric. Excellent condition, suitable for ethnic wear manufacturing.",
    quantity: "450 Meters",
    basePrice: "₹1,80,000",
    startDate: "Oct 20, 2026 - 10:00 AM",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: "AUC-26-082",
    title: "Assorted Linen Rolls (B-Grade)",
    description: "Minor weave variations. Ideal for lining or budget upholstery projects. Sold as a single lot.",
    quantity: "1,200 Meters",
    basePrice: "₹85,000",
    startDate: "Oct 25, 2026 - 11:30 AM",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=60"
  }
];

export default function EAuction() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }} className="pt-[110px] pb-20">

      {/* Page Title inside section with minimal gap */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-8 text-left">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
          e-Auction
        </h1>
        <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginTop: 10 }} />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
        
        <p style={{ fontSize: 14.5, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 800, lineHeight: 1.6 }} className="text-left">
          Participate in our transparent bidding platform to procure surplus inventory, special lots, and discontinued lines at competitive prices.
        </p>

        {/* Upcoming Auctions */}
        <div className="text-left mb-6">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: C.soil, margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
            <Clock size={20} color={C.accent} /> Upcoming Auctions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {upcomingAuctions.map((auction) => (
            <motion.div
              key={auction.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row overflow-hidden"
              style={{
                background: 'white', borderRadius: 16,
                border: `1px solid ${C.border}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(163, 112, 76, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="w-full sm:w-[200px] h-[200px] sm:h-auto overflow-hidden shrink-0">
                <img src={auction.image} alt={auction.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 10, padding: '4px 10px', borderRadius: 20, background: C.sand, color: C.accent, fontWeight: 700, letterSpacing: '0.1em' }}>
                    {auction.id}
                  </span>
                  <span style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>{auction.status}</span>
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: C.soil, margin: '0 0 8px' }}>
                  {auction.title}
                </h3>
                <p style={{ fontSize: 12, color: C.stone, margin: '0 0 16px', lineHeight: 1.6, flex: 1 }}>
                  {auction.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                  <div>
                    <p style={{ fontSize: 10, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px' }}>Quantity</p>
                    <p style={{ fontSize: 14, color: C.soil, fontWeight: 600, margin: 0 }}>{auction.quantity}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px' }}>Base Price</p>
                    <p style={{ fontSize: 14, color: C.soil, fontWeight: 600, margin: 0 }}>{auction.basePrice}</p>
                  </div>
                </div>

                <button style={{
                  width: '100%', padding: '12px', borderRadius: 10,
                  background: C.primary, color: 'white', border: 'none',
                  fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                  cursor: 'pointer', transition: 'all 0.2s',
                  boxShadow: '0 4px 12px rgba(163, 112, 76, 0.2)',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#231F20'}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  Register to Bid
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
