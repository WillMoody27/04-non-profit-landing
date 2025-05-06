"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of landscaping services including garden design, landscape installation, irrigation systems, lawn care, maintenance, and outdoor living spaces. Our team can handle projects of any size, from small garden updates to complete landscape transformations.",
    },
    {
      question: "How long does a typical landscaping project take?",
      answer:
        "Project timelines vary depending on the scope and complexity. A basic garden design might take 2-3 weeks, while a complete landscape transformation could take 6-8 weeks. We'll provide a detailed timeline during your initial consultation.",
    },
    {
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we offer comprehensive maintenance services to keep your landscape looking its best year-round. This includes regular lawn care, pruning, weeding, irrigation maintenance, and seasonal clean-ups.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve Austin and San Antonio, Texas, and surrounding areas. Contact us to confirm if we cover your specific location.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-teal-600 font-medium">FAQ</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Can't find what you're looking for? Contact us at
              info@edenscape.com
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full text-left p-6 hover:bg-slate-50 transition-colors flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-slate-900 font-medium">
                    {faq.question}
                  </span>
                  <span className="text-teal-600">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
