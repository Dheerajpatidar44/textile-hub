import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const Career = () => {
  const jobs = [
    { 
      id: 1, 
      title: 'Retail Operations Manager', 
      location: 'Mumbai, India', 
      type: 'Full-time', 
      experience: '5-8 Years',
      description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.'
    },
    { 
      id: 2, 
      title: 'Senior Fabric Technologist', 
      location: 'Surat, India', 
      type: 'Full-time', 
      experience: '7+ Years',
      description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.'
    },
    { 
      id: 3, 
      title: 'B2B Sales Executive', 
      location: 'Delhi, India', 
      type: 'Full-time', 
      experience: '2-4 Years',
      description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.'
    },
    { 
      id: 4, 
      title: 'Digital Marketing Specialist', 
      location: 'Remote', 
      type: 'Full-time', 
      experience: '3+ Years',
      description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.'
    },
  ];

  return (
    <div>
      <PageHeader title="Careers" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-brand-darkbrown mb-4">Join Our Journey</h2>
          <p className="text-gray-600">
            At Parekh Textiles, we believe our people are the fabric of our success. We offer a dynamic work environment where tradition meets innovation. Explore our current openings and become part of a legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-brand-darkbrown mb-4">{job.title}</h3>
                
                <div className="space-y-3 mb-5 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPin className="w-4 h-4 mr-3 text-brand-maroon" /> {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Briefcase className="w-4 h-4 mr-3 text-brand-maroon" /> {job.type} • {job.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Mail className="w-4 h-4 mr-3 text-brand-maroon" /> 
                    <a href="mailto:careers@parekhtex.com" className="hover:text-brand-maroon transition-colors">careers@parekhtex.com</a>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {job.description}
                </p>
              </div>
              <button className="w-full bg-brand-light text-brand-maroon font-bold py-3 px-4 rounded hover:bg-brand-maroon hover:text-white transition-colors border border-brand-maroon">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
