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
      <div className="px-8 py-10 border-b border-pearl-100 hidden lg:block">
        <h1 className="font-playfair text-3xl tracking-widest text-[#2D0A4E] font-bold">TEXMART</h1>
        <p className="text-xs tracking-widest uppercase mt-2 text-[#C88A93] font-outfit">Textile retail mall</p>
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    isActive ? 'text-sapphire-900 bg-pearl-100 shadow-sm' : 'text-gray-600 hover:text-sapphire-900 hover:bg-pearl-100/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-sapphire-900 rounded-l-lg"
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
        <p>© 2026 TEXMART.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
