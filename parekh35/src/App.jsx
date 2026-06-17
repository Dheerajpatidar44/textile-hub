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
  primary: '#56513E',
  primaryDark: '#3b372a',
  accent: '#a87c5e',
  bg: '#fdfaf6',
  sand: '#efe3d5',
  sage: '#f0ede4',
  border: '#e6dacb',
  soil: '#3b2314',
  stone: '#7c6a5e',
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
            style={{ background: 'rgba(59, 35, 20, 0.4)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            style={{
              position: 'relative',
              background: '#fdfaf6',
              borderRadius: 24,
              maxWidth: 420,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              border: '1.5px solid #e6dacb',
              boxShadow: '0 30px 80px rgba(59, 35, 20, 0.18)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 18, right: 18,
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(86, 81, 62, 0.08)', border: 'none',
                display: 'flex', alignItems: 'center', justify_content: 'center',
                cursor: 'pointer', color: '#56513E', transition: 'all 0.2s',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(86, 81, 62, 0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(86, 81, 62, 0.08)'; }}
            >
              <X size={14} />
            </button>

            {/* Modal Body */}
            <div style={{ padding: '40px 32px 32px', textAlign: 'center' }}>
              
              {/* Elegant Accent Emblem */}
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: '#efe3d5',
                border: '1.5px solid #a87c5e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <Sparkles size={26} style={{ color: '#a87c5e' }} />
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28, fontWeight: 700,
                color: '#3b2314', margin: '0 0 12px', lineHeight: 1.3,
              }}>
                Welcome to<br />
                <span style={{ fontStyle: 'italic', color: '#a87c5e' }}>AAVANIKA</span>
              </h2>

              <div style={{ width: 40, height: 1.5, background: '#a87c5e', margin: '14px auto' }} />

              <p style={{ color: '#7c6a5e', fontSize: 13.5, lineHeight: 1.7, margin: '0 0 28px' }}>
                Step into a world of heritage textiles. Discover premium sarees, fabrics, ethnic wear, and luxury home linen crafted to last generations.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 2, padding: '12px 24px',
                    background: '#56513E', color: '#ffffff',
                    border: 'none', borderRadius: 12,
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 6, transition: 'all 0.25s',
                    boxShadow: '0 6px 16px rgba(86, 81, 62,0.18)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#736d53'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#56513E'; }}
                >
                  <Sparkles size={13} /> Explore Collection
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    flex: 1, padding: '12px 20px',
                    background: 'transparent', color: '#7c6a5e',
                    border: '1.5px solid #e6dacb', borderRadius: 12,
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#efe3d5'; }}
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
