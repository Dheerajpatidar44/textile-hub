import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
  return (
    <div>
      <PageHeader title="About Us" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" 
              alt="Our Heritage" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <SectionTitle title="Our Legacy" subtitle="Decades of Excellence in Textile Retail" />
            <div className="space-y-4 text-gray-700">
              <p>
                Founded with a passion for quality and an eye for elegance, Parekh Textiles has been a cornerstone of the textile retail industry for over three decades. We bring the rich heritage of Indian weaving and modern fabric technology directly to you.
              </p>
              <p>
                From exquisite silk sarees to premium suiting fabrics, our collections are curated to meet the diverse needs of our clients. We believe in building lasting relationships through trust, quality, and unparalleled service.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-brand-darkbrown font-medium">
                <li>Over 30 years of industry experience</li>
                <li>Partnerships with top weavers and manufacturers</li>
                <li>Extensive range of ethnic and formal wear fabrics</li>
                <li>Commitment to sustainable and ethical sourcing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
