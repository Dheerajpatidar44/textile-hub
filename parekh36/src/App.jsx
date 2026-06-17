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
            style={{ background: 'rgba(10, 18, 30, 0.65)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'relative',
              background: '#0F1E2D',
              borderRadius: 20,
              maxWidth: 380,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              border: '1px solid rgba(201,164,85,0.25)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Gold top bar */}
            <div style={{ height: 3, background: 'linear-gradient(90deg, #C9A455, #F0E4C2, #C9A455)' }} />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,164,85,0.2)'; e.currentTarget.style.color = '#C9A455'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            >
              <X size={13} />
            </button>

            {/* Body */}
            <div style={{ padding: '32px 28px 28px', textAlign: 'center' }}>
              {/* Logo */}
              <div style={{
                width: 52, height: 52, margin: '0 auto 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                  <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" stroke="#C9A455" strokeWidth="1.5" fill="none"/>
                  <polygon points="32,14 50,24 50,40 32,50 14,40 14,24" fill="rgba(201,164,85,0.15)" stroke="rgba(201,164,85,0.4)" strokeWidth="1"/>
                  <circle cx="32" cy="32" r="5" fill="#C9A455"/>
                </svg>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26, fontWeight: 700,
                color: '#ffffff', margin: '0 0 6px', lineHeight: 1.25,
                letterSpacing: '0.04em',
              }}>
                Welcome to
              </h2>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26, fontWeight: 700,
                color: '#C9A455', margin: '0 0 12px', lineHeight: 1.25,
                letterSpacing: '0.1em',
                fontStyle: 'italic',
              }}>
                WEAVORA
              </h2>

              <div style={{ width: 36, height: 1, background: 'rgba(201,164,85,0.5)', margin: '0 auto 16px' }} />

              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7, margin: '0 0 24px' }}>
                Heritage crafted textiles for generations. Discover our premium collection.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 2, padding: '11px 20px',
                    background: 'linear-gradient(135deg, #C9A455, #A88035)',
                    color: '#0F1E2D',
                    border: 'none', borderRadius: 10,
                    fontSize: 12, fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(201,164,85,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Explore Collection
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    flex: 1, padding: '11px 16px',
                    background: 'transparent', color: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10,
                    fontSize: 12, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,164,85,0.3)'; e.currentTarget.style.color = '#C9A455'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
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
