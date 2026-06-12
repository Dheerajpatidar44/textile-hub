import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const mainLinks = [
    { name: 'Home Page', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Contact us', path: '/contact' },
    { name: 'Product Page', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' }
  ];

  const resourcesLinks = [
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog Page', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Business Media Gallery', path: '/gallery' }
  ];

  // Helper to check if any resources link is active
  const isResourceActive = resourcesLinks.some(link => location.pathname === link.path);

  return (
    <nav className="bg-vastram-light border-b border-vastram-border sticky top-0 z-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-center">
              <span className="font-playfair text-3xl tracking-widest font-bold text-vastram-brown">VASTRAM</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-vastram-gold font-outfit mt-1">Textile Retail Mall</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[12px] font-bold tracking-[0.1em] hover:text-vastram-gold transition-colors uppercase ${
                  location.pathname === link.path ? 'text-vastram-gold' : 'text-vastram-text'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-[12px] font-bold tracking-[0.1em] uppercase hover:text-vastram-gold transition-colors py-8 ${
                  isResourceActive ? 'text-vastram-gold' : 'text-vastram-text'
                }`}
              >
                Resources <ChevronDown size={14} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute top-[75px] right-0 w-64 bg-vastram-light border border-vastram-border shadow-md overflow-hidden rounded-none">
                  <div className="py-2 flex flex-col">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`px-5 py-3 text-[12px] font-medium tracking-widest uppercase transition-all duration-200 border-b border-vastram-border last:border-0 ${
                          location.pathname === link.path 
                            ? 'bg-vastram-brown text-vastram-cream' 
                            : 'text-vastram-text hover:bg-vastram-brown hover:text-vastram-cream'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vastram-text hover:text-vastram-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-vastram-light border-t border-vastram-border max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-none text-[13px] font-bold tracking-widest uppercase ${
                  location.pathname === link.path ? 'text-vastram-gold bg-vastram-cream' : 'text-vastram-text hover:text-vastram-gold hover:bg-vastram-cream'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Resources Section */}
            <div className="mt-4 pt-4 border-t border-vastram-border">
              <p className="px-4 text-[11px] font-bold text-vastram-gold tracking-[0.2em] uppercase mb-2">Resources</p>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-2.5 rounded-none text-[13px] font-medium tracking-widest uppercase transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-vastram-brown text-vastram-cream' 
                      : 'text-vastram-text hover:bg-vastram-brown hover:text-vastram-cream'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
