import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail, Phone, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What makes Royal Weaves textiles unique?",
      answer: "Royal Weaves is dedicated to combining time-honored artisanal handloom craftsmanship with sustainable, state-of-the-art weaving technologies. Every product is crafted using premium Mulberry silk, high-quality zari threads, and organic cotton to ensure supreme comfort and lasting durability."
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
    <div className="pb-16 w-full min-h-screen bg-pearl-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
        {/* Direct Page Heading */}
        <div className="mb-10 border-b border-[#BD7B88]/20 pb-4 text-left">
          <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#BD7B88]/15 overflow-hidden shadow-sm hover:shadow-md hover:border-[#BD7B88]/30 transition-all duration-300"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left text-[#3D223B] font-semibold font-playfair uppercase tracking-wider text-xs md:text-sm cursor-pointer hover:text-[#BD7B88] transition-colors duration-250 bg-white"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-[#BD7B88] shrink-0"
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-2 text-xs md:text-sm text-gray-600 font-outfit leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Section - Styled in Deep Plum theme */}
        <div className="bg-[#3D223B] border border-[#BD7B88]/20 rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4D2D4B] to-[#3D223B] z-0" />
          <div className="relative z-10 max-w-xl mx-auto">
            <HelpCircle size={36} className="text-[#BD7B88] mx-auto mb-4" />
            <h3 className="font-playfair text-xl md:text-2xl text-[#F6EDF0] uppercase tracking-wide font-bold mb-2">
              Still Have Questions?
            </h3>
            <p className="text-[#FAF4F6]/70 text-xs md:text-sm font-outfit leading-relaxed mb-8">
              If you couldn't find the answers you were looking for, please feel free to reach out to our dedicated client assistance desk.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="mailto:support@royalweaves.com"
                className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#BD7B88]/40 transition-colors duration-300"
              >
                <Mail size={18} className="text-[#BD7B88] mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#F6EDF0]">Email Us</span>
                <span className="text-[9px] text-gray-300 mt-1 truncate w-full">support@royalweaves.com</span>
              </a>
              <a
                href="tel:+916353778329"
                className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#BD7B88]/40 transition-colors duration-300"
              >
                <Phone size={18} className="text-[#BD7B88] mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#F6EDF0]">Call Us</span>
                <span className="text-[9px] text-gray-300 mt-1">+91 63537 78329</span>
              </a>
              <Link
                to="/trade-enquiry"
                className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#BD7B88]/40 transition-colors duration-300"
              >
                <MessageSquare size={18} className="text-[#BD7B88] mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#F6EDF0]">Enquire Now</span>
                <span className="text-[9px] text-gray-300 mt-1">Submit Bulk Query</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
