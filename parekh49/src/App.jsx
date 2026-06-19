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
            style={{ background: 'rgba(44, 26, 26, 0.55)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            style={{
              position: 'relative',
              background: '#FDF8F4',
              borderRadius: 20,
              maxWidth: 360,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 32px 80px rgba(44, 26, 26, 0.25)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 14, right: 14,
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(44,26,26,0.08)', border: '1px solid rgba(44,26,26,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#7A5E5E', transition: 'all 0.2s',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,26,74,0.1)'; e.currentTarget.style.color = '#8B1A4A'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(44,26,26,0.08)'; e.currentTarget.style.color = '#7A5E5E'; }}
            >
              <X size={14} />
            </button>

            {/* Top image band */}
            <div style={{
              height: 130,
              background: 'linear-gradient(135deg, #8B1A4A 0%, #5E0F30 100%)',
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* Subtle pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(196,149,106,0.1) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }} />
              {/* Logo icon */}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  background: 'rgba(196,149,106,0.2)',
                  border: '1.5px solid rgba(196,149,106,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 10px',
                }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="12" stroke="#C4956A" strokeWidth="1.5" fill="none"/>
                    <path d="M14 4 C14 4, 22 10, 22 14 C22 18, 14 24, 14 24 C14 24, 6 18, 6 14 C6 10, 14 4, 14 4Z" fill="rgba(196,149,106,0.3)" stroke="#C4956A" strokeWidth="1"/>
                    <circle cx="14" cy="14" r="3" fill="#C4956A"/>
                  </svg>
                </div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
                  Ananta Fabrics
                </p>
              </div>
            </div>

            {/* Bottom content */}
            <div style={{ padding: '24px 24px 28px', textAlign: 'center' }}>
              <p style={{ color: '#2C1A1A', fontSize: 18, fontWeight: 600, fontFamily: "'Playfair Display', serif", margin: '0 0 8px' }}>
                Welcome!
              </p>
              <p style={{ color: '#7A5E5E', fontSize: 13, lineHeight: 1.65, margin: '0 0 24px' }}>
                Discover India's finest textiles — premium sarees, fabrics, ethnic wear and home textiles.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '12px 16px',
                    background: '#8B1A4A', color: '#ffffff',
                    border: 'none', borderRadius: 10,
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    boxShadow: '0 4px 16px rgba(139,26,74,0.25)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#C4956A'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#8B1A4A'; }}
                >
                  Explore Now
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '12px 16px',
                    background: 'transparent', color: '#7A5E5E',
                    border: '1.5px solid #E8D8CC', borderRadius: 10,
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F5EBE0'; e.currentTarget.style.borderColor = '#C4956A'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#E8D8CC'; }}
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
