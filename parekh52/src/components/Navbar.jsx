import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Phone, 
  ShoppingBag, 
  Store, 
  FileText, 
  Gavel, 
  Newspaper, 
  BookOpen, 
  Bell, 
  Briefcase, 
  MessageSquare, 
  Image as ImageIcon, 
  HelpCircle,
  Menu,
  X,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#064040',        // Deepest Forest Teal (active text color)
  primaryLight: '#E6A822',   // Golden Yellow (active background)
  primaryDark: '#064040',    // Dark Forest Teal
  accent: '#E6A822',         // Accent
  bg: '#064040',             // Sidebar Background (matches footer)
  border: 'rgba(255,255,255,0.08)',         // Muted border
  stone: 'rgba(255,255,255,0.7)',          // Inactive text
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Product Gallery', path: '/products', icon: ShoppingBag },
    { name: 'Our Retail Management', path: '/retail-management', icon: Store },
    { name: 'e-Quotation', path: '/e-quotation', icon: FileText },
    { name: 'e-Auction', path: '/e-auction', icon: Gavel },
    { name: 'Trade Circular', path: '/trade-circular', icon: Newspaper },
    { name: 'Blog Page', path: '/blog', icon: BookOpen },
    { name: 'Notice Board', path: '/notice-board', icon: Bell },
    { name: 'Career Page', path: '/career', icon: Briefcase },
    { name: 'Customer Review', path: '/reviews', icon: MessageSquare },
    { name: 'Business Media Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  const isItemActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    if (path !== '/' && location.pathname.startsWith(path) && path !== '/products') return true;
    return false;
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full select-none py-6 px-4 bg-transparent">
      {/* Navigation List - Custom styled scrollbar */}
      <nav className="flex-1 overflow-y-auto my-2 pr-1 space-y-1 custom-sidebar-scrollbar text-left">
        {navItems.map((item) => {
          const active = isItemActive(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[13px] font-medium tracking-wide transition-all duration-300"
              style={{
                background: active ? C.primaryLight : 'transparent',
                color: active ? C.primary : C.stone,
              }}
              onMouseEnter={e => {
                if (!active) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#E6A822';
                }
              }}
              onMouseLeave={e => {
                if (!active) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = C.stone;
                }
              }}
            >
              <item.icon size={16} strokeWidth={active ? 2.5 : 2} className="shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Social Media Footer inside Sidebar */}
      <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] mt-auto flex items-center justify-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-[#E6A822] hover:scale-110 transition-all duration-300">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-[#E6A822] hover:scale-110 transition-all duration-300">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-[#E6A822] hover:scale-110 transition-all duration-300">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-[#E6A822] hover:scale-110 transition-all duration-300">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
  );

  return (
    <aside 
      className="flex flex-col w-[280px] h-[calc(100vh-64px)] fixed left-0 top-16 z-40"
      style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, borderRight: `1px solid ${C.border}` }}
    >
      <SidebarContent />
    </aside>
  );
}
