import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const milestones = [
    { year: '1990', title: 'Founded', desc: 'Lumina Textiles was established in Mumbai with a passion for premium Indian fabrics.' },
    { year: '2000', title: 'Expansion', desc: 'Opened regional offices in Delhi, Surat, and Kolkata to serve a pan-India clientele.' },
    { year: '2010', title: 'B2B Growth', desc: 'Launched dedicated wholesale and distributorship programs for retail partners.' },
    { year: '2023', title: 'Digital Era', desc: 'Introduced e-Quotation, e-Auction, and digital trade portals for seamless business.' },
  ];

  return (
    <div>
      <PageHeader title="About Us" />

      {/* Hero split */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
                alt="Our Heritage"
                className="w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute top-6 left-6 bottom-[-6px] right-[-6px] border border-[#D4A853]/40 z-0 pointer-events-none" />
            </div>

            <div className="z-10">
              <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-4">Our Legacy</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0B1C3E] leading-tight mb-6">
                Decades of Excellence<br />in Textile Retail
              </h2>
              <div className="w-12 h-0.5 bg-[#D4A853] mb-8" />

              <div className="space-y-4 text-[#6B7A99] text-sm leading-relaxed font-light mb-8">
                <p>
                  Founded with a passion for quality and an eye for elegance, Lumina Textiles has been a cornerstone of the textile retail industry for over three decades. We bring the rich heritage of Indian weaving and modern fabric technology directly to you.
                </p>
                <p>
                  From exquisite silk sarees to premium suiting fabrics, our collections are curated to meet the diverse needs of our clients. We believe in building lasting relationships through trust, quality, and unparalleled service.
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {[
                  'Over 30 years of industry experience',
                  'Partnerships with top weavers and manufacturers',
                  'Extensive range of ethnic and formal wear fabrics',
                  'Commitment to sustainable and ethical sourcing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#0B1C3E]">
                    <CheckCircle size={15} className="text-[#D4A853] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-[#0B1C3E] text-white px-8 py-3.5 text-xs font-medium tracking-widest uppercase hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300"
              >
                Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default About;
