import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe, Users, Phone, ShoppingBag, Image as ImageIcon,
  MessageSquare, FileText, Briefcase, Star, Clipboard
} from 'lucide-react';

export default function Sidebar({ closeSidebar }) {
  const location = useLocation();

  const navLinks = [
    { name: 'Home Page', path: '/', icon: Globe },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Product Page', path: '/products', icon: ShoppingBag },
    { name: 'Our Retail Management', path: '/retail-management', icon: Users },
    { name: 'Trade Enquiry', path: '/trade-enquiry', icon: MessageSquare },
    { name: 'e-Quotation', path: '/e-quotation', icon: FileText },
    { name: 'e-Auction', path: '/e-auction', icon: FileText },
    { name: 'Trade Circular', path: '/trade-circular', icon: FileText },
    { name: 'Blog Page', path: '/blog', icon: MessageSquare },
    { name: 'Notice Board', path: '/notice-board', icon: Clipboard },
    { name: 'Career Page', path: '/career', icon: Briefcase },
    { name: 'Customer Review', path: '/reviews', icon: Star },
    { name: 'Business Media Gallery', path: '/gallery', icon: ImageIcon },
  ];

  return (
    <div className="flex flex-col h-full bg-pearl-50 border-r border-pearl-100 overflow-y-auto custom-scrollbar">
      {/* Logo Area */}
      <div className="px-8 pt-8 pb-6 border-b border-pearl-100 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-rosegold-500 flex items-center justify-center font-playfair font-bold text-xl text-rosegold-500 shrink-0">
            U
          </div>
          <div className="flex flex-col justify-center">
            <span className="block font-playfair text-base tracking-wider text-gray-900 font-bold leading-none border-b-0 pb-0 mb-0">URBAN</span>
            <span className="block text-[9px] tracking-widest uppercase text-rosegold-500 font-outfit mt-1.5 font-bold leading-none">TEXTILE HUB</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-4 px-6">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative group ${isActive ? 'text-sapphire-900 bg-pearl-100 shadow-sm' : 'text-gray-600 hover:text-sapphire-900 hover:bg-pearl-100/50'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-rosegold-500 rounded-l-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon size={18} className={isActive ? "text-rosegold-500" : "text-gray-400 group-hover:text-rosegold-400 transition-colors"} />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-pearl-100 text-xs text-gray-400">
        <p>© 2026 URBAN TEXTILE HUB.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
