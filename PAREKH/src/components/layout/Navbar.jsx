import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product Page', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
  ];

  const dropdownLinks = [
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog Page', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/customer-review' },
    { name: 'Business Media Gallery', path: '/media-gallery' },
  ];

  return (
    <nav className="bg-brand-light shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-brand-maroon mr-2" />
              <span className="font-serif font-bold text-2xl text-brand-darkbrown tracking-wider">PAREKH<span className="text-brand-maroon">TEX</span></span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-brand-maroon px-2 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Dropdown Menu */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-brand-maroon px-2 py-2 rounded-md text-sm font-medium transition-colors">
                Pages <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div 
                className={`absolute top-full left-0 w-56 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 transform origin-top ${isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} border border-gray-100`}
              >
                <div className="py-2">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-maroon hover:text-white transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/trade-enquiry" className="bg-brand-maroon text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-900 transition-colors shadow-sm ml-2">
              Trade Enquiry
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-maroon focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-light border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
               <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-maroon hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 mt-2 pt-2">
              <span className="block px-3 py-2 text-sm font-bold text-gray-900">More Pages</span>
              {dropdownLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-maroon hover:bg-gray-50 pl-6"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              to="/trade-enquiry"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-brand-maroon text-white hover:bg-red-900"
            >
              Trade Enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
