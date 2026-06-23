import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail, Phone, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What makes LoomLine retail mall unique?",
      answer: "LoomLine retail mall is dedicated to combining time-honored artisanal handloom craftsmanship with sustainable, state-of-the-art weaving technologies. Every product is crafted using premium Mulberry silk, high-quality zari threads, and organic cotton to ensure supreme comfort and lasting durability."
    },
    {
      question: "Can I request customization for bridal sarees or specific fabric blends?",
      answer: "Yes, we offer bespoke consultations. You can visit our Flagship Luxury Retail Showrooms or submit an inquiry through our Trade Enquiry portal. Our expert design and styling team will collaborate with you to create custom-woven layouts, metallic thread combinations, or customized patterns."
    },
    {
      question: "What is the recommended care instructions for your luxury silk products?",
      answer: "We recommend professional dry cleaning only for all premium silk sarees, brocades, and garments with heavy metallic zari or embroidery. Keep them stored in a cool, dark, dry place, wrapped in breathable soft cotton or muslin covers to maintain fabric integrity."
    },
    {
      question: "How does the e-Quotation and e-Auction system work for wholesalers?",
      answer: "Verified wholesale buyers can participate in scheduled auctions and submit price quotations for bulk industrial yarn or fabric rolls. You can register via our e-Auction or e-Quotation portals, upload required trade credentials, and receive digital notifications on tender releases."
    },
    {
      question: "Can we arrange a corporate site visit to your spinning mills and color labs?",
      answer: "Absolutely. We offer organized educational and business tours at our state-of-the-art spinning, dyeing, and color R&D facilities. Please contact our corporate office at least two weeks in advance to schedule a visit."
    },
    {
      question: "Do you ship products globally?",
      answer: "Yes, we facilitate international shipping for both retail buyers and wholesale container shipments. International delivery times vary depending on the country of destination and custom clearance processes."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-16 w-full min-h-screen bg-[#F4F8F9] font-outfit">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-6">
        {/* Compact Page Heading */}
        <div className="mb-8 border-b border-gray-200 pb-3 text-left">
          <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-sm hover:border-[#0A5F73]/30 transition-all duration-300"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4.5 flex justify-between items-center text-left text-[#0C2E3A] font-semibold font-playfair uppercase tracking-wider text-xs md:text-sm cursor-pointer hover:text-[#0A5F73] transition-colors duration-250 bg-white"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-[#0A5F73] shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-4.5 pt-1.5 text-xs text-[#4F6D7A] font-outfit leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Section - Styled in Slate Blue / Teal theme */}
        <div className="bg-[#0C2E3A] border border-gray-200 rounded-3xl p-8 text-center text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
            <HelpCircle size={32} className="text-[#10859F] mb-3" />
            <h3 className="font-playfair text-xl md:text-2xl text-white uppercase tracking-wider font-bold mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 text-xs font-outfit leading-relaxed mb-6">
              If you couldn't find the answers you were looking for, please feel free to reach out to our dedicated client assistance desk.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-center">
              <a
                href="mailto:support@loomline.com"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#10859F] transition-colors duration-300"
              >
                <Mail size={16} className="text-[#10859F] mb-1.5" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-white">Email Us</span>
                <span className="text-[8px] text-gray-300 mt-1 truncate w-full lowercase">support@loomline.com</span>
              </a>
              <a
                href="tel:+916353778329"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#10859F] transition-colors duration-300"
              >
                <Phone size={16} className="text-[#10859F] mb-1.5" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-white">Call Us</span>
                <span className="text-[8px] text-gray-300 mt-1">+91 63537 78329</span>
              </a>
              <Link
                to="/trade-enquiry"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#10859F] transition-colors duration-300"
              >
                <MessageSquare size={16} className="text-[#10859F] mb-1.5" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-white">Enquire Now</span>
                <span className="text-[8px] text-gray-300 mt-1">Submit Bulk Query</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
