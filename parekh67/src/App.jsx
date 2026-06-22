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
  primary: '#0b3329',
  primaryDark: '#062c22',
  accent: '#bca374',
  accentLight: '#f2ece1',
  bg: '#fcf8f2',
  border: '#eadacc',
  stone: '#4d5d59',
  card: '#ffffff',
};

// ─── Welcome Popup ───
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
            style={{ background: 'rgba(6, 44, 34, 0.4)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'relative',
              background: C.card,
              maxWidth: 400,
              width: '100%',
              overflow: 'hidden',
              borderRadius: '24px',
              zIndex: 10,
              border: `1px solid ${C.border}`,
              boxShadow: '0 40px 80px rgba(6, 44, 34, 0.15)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${C.primaryDark}, ${C.accent}, ${C.primaryDark})` }} />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 32, height: 32,
                background: 'transparent', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: C.stone, transition: 'all 0.2s',
                borderRadius: '50%',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.bg; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <X size={18} />
            </button>

            {/* Body */}
            <div style={{ padding: '36px 32px 32px', textAlign: 'center' }}>
              {/* Logo icon */}
              <div style={{
                width: 72, height: 72, margin: '0 auto 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: C.bg,
                border: `1.5px solid ${C.border}`,
              }}>
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" stroke={C.accent} strokeWidth="1.5" fill="none" />
                  <path d="M50 18 L54 40 L76 40 L59 54 L65 76 L50 63 L35 76 L41 54 L24 40 L46 40 Z" 
                    stroke={C.primary} strokeWidth="2.5" 
                    fill={C.accent} fillOpacity="0.15" 
                    strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="5" fill={C.accent} />
                </svg>
              </div>

              {/* Title */}
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 600,
                color: C.stone, margin: '0 0 8px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}>
                Welcome to
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32, fontWeight: 700,
                color: C.primary, margin: '0 0 4px', lineHeight: 1.2,
                letterSpacing: '0.02em',
              }}>
                Zariya House
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 600,
                color: C.accent, margin: '0 0 20px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}>
                Premium Textile House
              </p>

              <div style={{ width: 50, height: 1.5, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, margin: '0 auto 20px', borderRadius: 2 }} />

              <p style={{ color: C.stone, fontSize: 14, lineHeight: 1.6, margin: '0 0 28px', fontWeight: 400 }}>
                Discover our premium collections, customized e-auctions, and e-quotations. Explore heritage crafted textiles.
              </p>

              {/* Button */}
              <button
                onClick={() => { setIsOpen(false); navigate('/products'); }}
                style={{
                  width: '100%', padding: '14px 20px',
                  background: C.primary,
                  color: '#ffffff',
                  border: 'none',
                  fontSize: 11.5, fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s',
                  borderRadius: '50px',
                  fontFamily: "'Outfit', sans-serif",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
              >
                Explore Collections →
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
      
      <AnimatePresence mode="wait">
        {appVisible && (
          <div
            key="main-app-content"
            className="w-full min-h-screen"
            style={{ background: '#fcf8f2' }}
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
