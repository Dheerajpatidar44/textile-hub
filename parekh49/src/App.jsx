import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RetailManagement from './pages/RetailManagement';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import TradeCircular from './pages/TradeCircular';
import Blog from './pages/Blog';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import CustomerReview from './pages/CustomerReview';
import BusinessMediaGallery from './pages/BusinessMediaGallery';
import FAQ from './pages/FAQ';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const C = {
  primary: '#1b3252',
  accent: '#b08e5b',
  bg: '#fdfbf7',
  sand: '#f2e8dc',
  border: '#e6dfd5',
  soil: '#1a2538',
  stone: '#63738a',
};

// ─── Simple Welcome Popup ───
function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0"
            style={{ background: 'rgba(14, 25, 44, 0.65)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            style={{
              position: 'relative',
              background: '#fdfbf7',
              borderRadius: 18,
              maxWidth: 360,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 32px 80px rgba(14,25,44,0.3)',
              fontFamily: "'Outfit', sans-serif",
              border: `1px solid ${C.border}`,
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 12, right: 12,
                width: 30, height: 30, borderRadius: '50%',
                background: 'rgba(27,50,82,0.07)', border: '1px solid rgba(27,50,82,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: C.stone, transition: 'all 0.2s',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(27,50,82,0.14)'; e.currentTarget.style.color = C.primary; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(27,50,82,0.07)'; e.currentTarget.style.color = C.stone; }}
            >
              <X size={14} />
            </button>

            {/* Top navy band */}
            <div style={{
              height: 120,
              background: 'linear-gradient(135deg, #1b3252 0%, #0e192c 100%)',
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* Subtle grid pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(176,142,91,0.08) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
              {/* Diamond logo icon */}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 10,
                  background: 'rgba(176,142,91,0.15)',
                  border: '1.5px solid rgba(176,142,91,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 10px',
                }}>
                  <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                    <path d="M13 3 L22 9 L22 17 L13 23 L4 17 L4 9 Z" stroke="#b08e5b" strokeWidth="1.5" fill="rgba(176,142,91,0.2)"/>
                    <path d="M13 7 L18 10.5 L18 15.5 L13 19 L8 15.5 L8 10.5 Z" stroke="#b08e5b" strokeWidth="1" fill="rgba(176,142,91,0.3)"/>
                    <circle cx="13" cy="13" r="2.5" fill="#b08e5b"/>
                  </svg>
                </div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.2, letterSpacing: '0.03em' }}>
                  RUHANI WEAVES
                </p>
                <p style={{ fontSize: 8, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08e5b', margin: '3px 0 0', fontWeight: 600 }}>
                  TEXTILE MALL
                </p>
              </div>
            </div>

            {/* Bottom content */}
            <div style={{ padding: '22px 24px 26px', textAlign: 'center' }}>
              <p style={{ color: C.soil, fontSize: 17, fontWeight: 600, fontFamily: "'Playfair Display', serif", margin: '0 0 8px' }}>
                Welcome!
              </p>
              <p style={{ color: C.stone, fontSize: 13, lineHeight: 1.65, margin: '0 0 22px' }}>
                Discover India's finest textiles — premium sarees, fabrics, ethnic wear and home textiles.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '11px 16px',
                    background: C.primary, color: '#ffffff',
                    border: 'none', borderRadius: 10,
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.25s',
                    boxShadow: '0 4px 16px rgba(27,50,82,0.25)',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
                >
                  Explore Now
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '11px 16px',
                    background: 'transparent', color: C.stone,
                    border: `1.5px solid ${C.border}`, borderRadius: 10,
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.sand; e.currentTarget.style.borderColor = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.border; }}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="retail-management" element={<RetailManagement />} />
          <Route path="trade-enquiry" element={<TradeEnquiry />} />
          <Route path="e-quotation" element={<EQuotation />} />
          <Route path="e-auction" element={<EAuction />} />
          <Route path="trade-circular" element={<TradeCircular />} />
          <Route path="blog" element={<Blog />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="career" element={<Career />} />
          <Route path="reviews" element={<CustomerReview />} />
          <Route path="gallery" element={<BusinessMediaGallery />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <WelcomePopup />
    </Router>
  );
}

export default App;
