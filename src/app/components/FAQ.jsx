"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can I get involved with Community Impact?",
    answer: "There are many ways to get involved! You can volunteer your time, make a donation, participate in our programs, or help spread awareness about our mission. Visit our Volunteer page to learn more about current opportunities."
  },
  {
    question: "What types of programs do you offer?",
    answer: "We offer a wide range of programs including education and mentorship, community development, social services, environmental stewardship, youth programs, and senior support. Each program is designed to address specific community needs."
  },
  {
    question: "How are donations used?",
    answer: "Your donations directly support our programs and initiatives. We maintain transparency in our financial operations, and you can see our annual reports and impact metrics on our website. 85% of all donations go directly to program services."
  },
  {
    question: "Do you offer volunteer opportunities for groups?",
    answer: "Yes! We welcome corporate groups, school groups, and community organizations. We can customize volunteer experiences to match your group's size and interests. Contact our volunteer coordinator to discuss group opportunities."
  },
  {
    question: "How can I apply for assistance?",
    answer: "We have a simple application process for our various support programs. Visit our Programs page to learn about specific eligibility requirements and application procedures. Our team is here to help guide you through the process."
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve communities in Austin, San Antonio, Round Rock, Cedar Park, and Georgetown. We're constantly working to expand our reach and impact to more areas."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our organization, programs, and how you can get involved.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-5 h-5 text-blue-600" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 