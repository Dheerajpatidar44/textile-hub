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
import { X, Sparkles } from 'lucide-react';

const C = {
  primary: '#4A1942',
  primaryDark: '#2E1038',
  accent: '#8B5E3C',
  bg: '#FAF6F1',
  sand: '#F5EDE4',
  sage: '#F3EAE0',
  border: '#E8DDD4',
  soil: '#3D1F35',
  stone: '#7A6670',
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
            style={{ background: 'rgba(46, 16, 56, 0.6)', backdropFilter: 'blur(10px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.82, opacity: 0, y: 36 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 24 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'relative',
              background: '#FAF6F1',
              borderRadius: 28,
              maxWidth: 400,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 40px 100px rgba(46, 16, 56, 0.35)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Top plum band */}
            <div style={{
              background: 'linear-gradient(135deg, #4A1942 0%, #2E1038 100%)',
              padding: '36px 28px 32px',
              position: 'relative',
              textAlign: 'center',
              overflow: 'hidden',
            }}>
              {/* Pattern overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(196,154,108,0.08) 1.5px, transparent 1.5px)',
                backgroundSize: '20px 20px',
                pointerEvents: 'none',
              }} />
              {/* Decorative circle */}
              <div style={{ position: 'absolute', top: -50, right: -50, width: 180, height: 180, borderRadius: '50%', background: 'rgba(139,94,60,0.1)', pointerEvents: 'none' }} />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 30, height: 30, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'rgba(255,255,255,0.8)', transition: 'all 0.2s',
                  zIndex: 5,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
              >
                <X size={14} />
              </button>

              {/* Icon + Title */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(196,154,108,0.2)',
                  border: '1.5px solid rgba(196,154,108,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <Sparkles size={24} style={{ color: '#C49A6C' }} />
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26, fontWeight: 700,
                  color: '#ffffff', margin: 0, lineHeight: 1.3,
                }}>
                  Welcome to<br />
                  <span style={{ fontStyle: 'italic', color: '#C49A6C' }}>THREADORA</span>
                </h2>
              </div>
            </div>

            {/* Bottom content */}
            <div style={{ padding: '24px 28px 28px', textAlign: 'center' }}>
              <p style={{ color: C.stone, fontSize: 14, lineHeight: 1.7, margin: '0 0 24px' }}>
                Discover India's finest textiles — premium sarees, fabrics, ethnic wear and home textiles crafted with tradition.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '13px 20px',
                    background: '#4A1942', color: '#ffffff',
                    border: 'none', borderRadius: 12,
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 6, transition: 'all 0.25s',
                    boxShadow: '0 6px 20px rgba(74,25,66,0.25)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#8B5E3C'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(139,94,60,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#4A1942'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(74,25,66,0.25)'; }}
                >
                  <Sparkles size={14} /> Explore
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '13px 20px',
                    background: 'transparent', color: C.stone,
                    border: `1.5px solid ${C.border}`, borderRadius: 12,
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.sand; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
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
