"use client";
import { motion } from "framer-motion";
import { FaClipboardList, FaPencilRuler, FaTools, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: FaClipboardList,
    title: "Initial Consultation",
    description: "We meet to understand your vision and assess your space",
  },
  {
    icon: FaPencilRuler,
    title: "Design & Planning",
    description: "Our experts create a detailed design plan for your approval",
  },
  {
    icon: FaTools,
    title: "Installation",
    description: "Professional installation of your landscape design",
  },
  {
    icon: FaCheckCircle,
    title: "Final Inspection",
    description: "Quality check and walkthrough to ensure your satisfaction",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-medium">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            How We Work
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth experience from concept to completion, delivering exceptional results every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
