"use client";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaTree,
  FaWater,
  FaSun,
  FaTools,
  FaHome,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf className="w-8 h-8" />,
    title: "Garden Design",
    description:
      "Create your perfect outdoor space with our expert garden design services. We'll help you plan and implement a beautiful, functional garden that matches your vision.",
  },
  {
    icon: <FaTree className="w-8 h-8" />,
    title: "Landscape Installation",
    description:
      "Transform your property with our professional landscape installation services. From plants to hardscaping, we bring your design to life.",
  },
  {
    icon: <FaWater className="w-8 h-8" />,
    title: "Irrigation Systems",
    description:
      "Keep your landscape thriving with our smart irrigation solutions. We design and install efficient watering systems that save water and money.",
  },
  {
    icon: <FaSun className="w-8 h-8" />,
    title: "Lawn Care",
    description:
      "Maintain a healthy, beautiful lawn with our comprehensive care services. We handle everything from mowing to fertilization.",
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: "Maintenance",
    description:
      "Keep your landscape looking its best with our regular maintenance services. We handle pruning, weeding, and general upkeep.",
  },
  {
    icon: <FaHome className="w-8 h-8" />,
    title: "Outdoor Living",
    description:
      "Create the perfect outdoor living space with our custom patios, decks, and outdoor kitchens. Enjoy your yard year-round.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal-600 font-medium">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Comprehensive Landscaping Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From design to maintenance, we offer a full range of landscaping
              services to transform and maintain your outdoor space.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white p-8 rounded-2xl border border-slate-200 group-hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
