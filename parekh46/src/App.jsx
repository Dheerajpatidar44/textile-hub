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
            style={{ background: 'rgba(11, 20, 38, 0.65)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'relative',
              background: '#ffffff',
              maxWidth: 400,
              width: '100%',
              overflow: 'hidden',
              borderRadius: '24px',
              zIndex: 10,
              border: '1px solid #E2E8F0',
              boxShadow: '0 40px 80px rgba(17, 30, 56, 0.1)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 32, height: 32,
                background: 'transparent', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#111E38', transition: 'all 0.2s',
                borderRadius: '50%',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(17, 30, 56, 0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <X size={20} />
            </button>

            {/* Body */}
            <div style={{ padding: '44px 32px 36px', textAlign: 'center' }}>
              {/* Logo icon */}
              <div style={{
                width: 64, height: 64, margin: '0 auto 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.08)', }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2"/>
                  <path d="M12 6l-6 6 6 6 6-6-6-6z" stroke="#111E38" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="1.5" fill="#3B82F6"/>
                </svg>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 20, fontWeight: 500,
                color: '#64748B', margin: '0 0 6px', lineHeight: 1.25,
                letterSpacing: '0.04em',
              }}>
                Welcome to
              </h2>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 28, fontWeight: 900,
                color: '#111E38', margin: '0 0 4px', lineHeight: 1.2,
                letterSpacing: '0.05em',
              }}>
                ZARI BLOOM
              </h2>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10, fontWeight: 800,
                color: '#3B82F6', margin: '0 0 20px', letterSpacing: '0.22em',
                textTransform: 'uppercase'
              }}>
                TEXTILE MALL
              </h3>

              <div style={{ width: 48, height: 2, background: '#3B82F6', margin: '0 auto 20px', borderRadius: '1px' }} />

              <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.6, margin: '0 0 32px', fontWeight: 500 }}>
                Discover our premium collections, custom e-auctions, and e-quotations. Explore heritage crafted textiles.
              </p>

              {/* Button */}
              <button
                onClick={() => { setIsOpen(false); navigate('/products'); }}
                style={{
                  width: '100%', padding: '14px 20px',
                  background: '#111E38',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: 11, fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s',
                  borderRadius: '50px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#3B82F6'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#111E38'; }}
              >
                Explore Collection
              </button>
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
