"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "EdenScape transformed our backyard into a stunning outdoor living space. Their attention to detail and professional service exceeded our expectations. The team was knowledgeable and completed the project on time and within budget.",
      rating: 5,
      location: "San Francisco",
    },
    {
      name: "Michael Chen",
      role: "Property Developer",
      text: "Working with EdenScape on our commercial property landscaping was a pleasure. Their expertise in sustainable design and efficient project management made them the perfect partner for our development.",
      rating: 5,
      location: "San Jose",
    },
    {
      name: "Emily Rodriguez",
      role: "Homeowner",
      text: "The garden design and installation service was exceptional. Our new landscape has completely transformed our home's curb appeal. The team was professional and the results are beautiful.",
      rating: 5,
      location: "Oakland",
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      text: "EdenScape created an amazing outdoor dining space for our restaurant. Their understanding of commercial landscaping needs and attention to detail has significantly enhanced our customer experience.",
      rating: 5,
      location: "Berkeley",
    },
    {
      name: "Lisa Martinez",
      role: "Homeowner",
      text: "The maintenance service keeps our garden looking perfect year-round. The team is reliable, professional, and always goes above and beyond. Highly recommend their services!",
      rating: 5,
      location: "Fremont",
    },
    {
      name: "James Wilson",
      role: "Office Manager",
      text: "EdenScape's corporate landscaping service has transformed our office building's exterior. The design is modern, low-maintenance, and creates a welcoming environment for our employees and clients.",
      rating: 5,
      location: "San Francisco",
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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal-600 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our landscaping services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white p-8 rounded-2xl border border-slate-200 group-hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-teal-500" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.location}
                  </div>
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-teal-600">
                    {testimonial.role}
                  </div>
                </div>
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
            Read More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
}
