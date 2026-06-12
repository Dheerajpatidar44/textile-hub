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
      description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.',
    },
    {
      id: 2,
      title: 'Senior Fabric Technologist',
      location: 'Surat, India',
      type: 'Full-time',
      experience: '7+ Years',
      description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.',
    },
    {
      id: 3,
      title: 'B2B Sales Executive',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '2-4 Years',
      description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.',
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ Years',
      description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.',
    },
  ];

  return (
    <div>
      <PageHeader title="Careers" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="max-w-2xl mb-16">
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-4">Join Our Team</p>
            <h2 className="text-4xl font-serif font-light text-[#0B1C3E] mb-4">Join Our Journey</h2>
            <div className="w-12 h-0.5 bg-[#D4A853] mb-6" />
            <p className="text-[#6B7A99] text-sm leading-relaxed font-light">
              At Lumina Textiles, we believe our people are the fabric of our success. We offer a dynamic work environment where tradition meets innovation. Explore our current openings and become part of a legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border border-[#0B1C3E]/6 hover:border-[#D4A853]/40 hover:shadow-[0_8px_40px_rgba(11,28,62,0.1)] transition-all duration-400 flex flex-col">
                <div className="p-8 border-t-2 border-transparent hover:border-[#D4A853] transition-colors flex-grow">
                  <h3 className="text-xl font-serif font-medium text-[#0B1C3E] mb-5">{job.title}</h3>

                  <div className="space-y-2 mb-6 p-4 bg-[#FAF7F0] border-l-2 border-[#D4A853]">
                    <div className="flex items-center gap-2.5 text-xs text-[#6B7A99]">
                      <MapPin size={12} className="text-[#D4A853]" /> {job.location}
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#6B7A99]">
                      <Briefcase size={12} className="text-[#D4A853]" /> {job.type} · {job.experience}
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#6B7A99]">
                      <Mail size={12} className="text-[#D4A853]" />
                      <a href="mailto:careers@luminatex.com" className="hover:text-[#D4A853] transition-colors">careers@luminatex.com</a>
                    </div>
                  </div>

                  <p className="text-[#6B7A99] text-sm leading-relaxed font-light">{job.description}</p>
                </div>

                <div className="px-8 pb-8">
                  <button className="w-full border border-[#0B1C3E] text-[#0B1C3E] py-3 text-xs font-medium uppercase tracking-widest hover:bg-[#0B1C3E] hover:text-white hover:border-[#0B1C3E] transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
