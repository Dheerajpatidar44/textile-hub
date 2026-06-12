export default function Footer() {
  return (
    <footer className="bg-[#1B484E] text-pearl-100 py-12 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <h2 className="font-playfair text-2xl text-pearl-50 font-bold mb-6 tracking-wide">TEXTILE MALL</h2>
          <p className="text-sm text-pearl-100/80 leading-relaxed max-w-sm">
            Quality Textiles | Industrial Strength | Traditional Aesthetics. Experience elegance in every thread.
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-pearl-50 mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-pearl-100/80">
            <li><a href="/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
            <li><a href="/products" className="hover:text-gray-300 transition-colors">Products</a></li>
            <li><a href="/trade-enquiry" className="hover:text-gray-300 transition-colors">Trade Enquiry</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-pearl-50 mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm text-pearl-100/80">
            <li>123 Premium Textile Avenue</li>
            <li>CHENNAI, TN, INDIA</li>
            <li>Email: info@textilemall.com</li>
            <li>Phone: +91 6353778329</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#29747E] text-sm text-pearl-100/60 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 | ALL RIGHTS RESERVED | TEXTILE MALL</p>
      </div>
    </footer>
  );
}
