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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-center">
              <span className="font-playfair text-2xl tracking-wider font-bold text-[#1B484E]">TEXTILE MALL</span>
              <span className="text-[10px] tracking-widest uppercase text-gray-500 font-outfit mt-1">Threads of Trust, Style for Generations</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold tracking-wider hover:text-[#1B484E] transition-colors uppercase ${
                  location.pathname === link.path ? 'text-[#1B484E]' : 'text-gray-700'
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
                className={`flex items-center gap-1 text-[13px] font-bold tracking-wider uppercase hover:text-[#1B484E] transition-colors py-8 ${
                  isResourceActive ? 'text-[#1B484E]' : 'text-gray-700'
                }`}
              >
                Resources <ChevronDown size={14} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute top-[80px] right-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-[#1B484E] overflow-hidden">
                  <div className="py-2 flex flex-col">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`px-5 py-3 text-[13px] font-medium tracking-wide transition-all duration-200 border-b border-gray-50 last:border-0 ${
                          location.pathname === link.path 
                            ? 'bg-[#1B484E] text-white' 
                            : 'text-gray-600 hover:bg-[#1B484E] hover:text-white'
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
              className="text-gray-700 hover:text-[#1B484E] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-[14px] font-bold tracking-wide uppercase ${
                  location.pathname === link.path ? 'text-[#1B484E] bg-gray-50' : 'text-gray-700 hover:text-[#1B484E] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Resources Section */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="px-4 text-[12px] font-bold text-gray-400 tracking-widest uppercase mb-2">Resources</p>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-2.5 rounded-md text-[14px] font-medium tracking-wide transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-[#1B484E] text-white' 
                      : 'text-gray-600 hover:bg-[#1B484E] hover:text-white'
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
