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
  primary: '#6B4226',
  accent: '#C8966A',
  bg: '#F7F2EC',
  border: '#E8DDD0',
  stone: '#7A6558',
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
            style={{ background: 'rgba(61, 32, 16, 0.5)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'relative',
              background: '#FFFFFF',
              maxWidth: 380,
              width: '100%',
              overflow: 'hidden',
              borderRadius: '20px',
              zIndex: 10,
              border: `1px solid ${C.border}`,
              boxShadow: '0 40px 80px rgba(107, 66, 38, 0.2)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {/* Top golden accent bar */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${C.primary}, ${C.accent}, ${C.primary})` }} />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 30, height: 30,
                background: 'rgba(107, 66, 38, 0.06)', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: C.stone, transition: 'all 0.2s',
                borderRadius: '50%',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(107, 66, 38, 0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(107, 66, 38, 0.06)'; }}
            >
              <X size={16} />
            </button>

            {/* Body */}
            <div style={{ padding: '36px 32px 32px', textAlign: 'center' }}>
              {/* Logo icon */}
              <div style={{
                width: 60, height: 60, margin: '0 auto 18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: `rgba(107, 66, 38, 0.07)`,
                border: `1px solid ${C.border}`,
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Title */}
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10, fontWeight: 700,
                color: C.stone, margin: '0 0 4px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}>
                Welcome to
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28, fontWeight: 700,
                color: C.primary, margin: '0 0 4px', lineHeight: 1.15,
                letterSpacing: '0.03em',
              }}>
                Meraki Ethnic
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 9, fontWeight: 700,
                color: C.stone, margin: '0 0 16px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase'
              }}>
                Premium Textile House
              </p>

              <div style={{ width: 40, height: 1.5, background: C.accent, margin: '0 auto 18px' }} />

              <p style={{ color: C.stone, fontSize: 13, lineHeight: 1.65, margin: '0 0 28px', fontWeight: 500 }}>
                Discover premium ethnic collections, curated e-auctions, and e-quotations crafted with heritage and care.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => { setIsOpen(false); navigate('/products'); }}
                style={{
                  width: '100%', padding: '13px 20px',
                  background: C.primary,
                  color: '#ffffff',
                  border: 'none',
                  fontSize: 11, fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s',
                  borderRadius: '50px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
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
  const [appVisible, setAppVisible] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Premium Application Reveal Animation */}
      <AnimatePresence mode="wait">
        {appVisible && (
          <div
            key="main-app-content"
            className="w-full min-h-screen"
            style={{ background: '#F7F2EC' }}
          >
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
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && (
          <Preloader 
            onStartOut={() => setAppVisible(true)}
            onComplete={() => setLoading(false)} 
          />
        )}
      </AnimatePresence>
      <WelcomePopup />
    </Router>
  );
}

export default App;
