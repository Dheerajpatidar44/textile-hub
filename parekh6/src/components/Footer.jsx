export default function Footer() {
  return (
    <footer className="bg-vastram-brown text-vastram-cream py-12 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <h2 className="font-playfair text-2xl text-vastram-gold font-bold mb-6 tracking-wide">VASTRAM</h2>
          <p className="text-sm text-vastram-cream/80 leading-relaxed max-w-sm">
            India's most trusted textile retail destination for quality, variety and value since 1999.
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-vastram-gold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-vastram-cream/80">
            <li><a href="/about" className="hover:text-vastram-gold transition-colors">About Us</a></li>
            <li><a href="/products" className="hover:text-vastram-gold transition-colors">Products Gallery</a></li>
            <li><a href="/trade-enquiry" className="hover:text-vastram-gold transition-colors">Trade Enquiry</a></li>
            <li><a href="/contact" className="hover:text-vastram-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-vastram-gold mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm text-vastram-cream/80">
            <li>Vastram Textile Retail Mall, B/h. New Textile Market,</li>
            <li>Ring Road, Surat - 395002, India</li>
            <li>Email: info@vastramtextile.com</li>
            <li>Phone: +91 79 6622 5500</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-vastram-text text-sm text-vastram-cream/60 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Vastram Textile Retail Mall. All Rights Reserved.</p>
       
      </div>
    </footer>
  );
}
