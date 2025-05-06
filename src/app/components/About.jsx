"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Community-driven programs and initiatives",
  "Education and mentorship opportunities",
  "Sustainable development projects",
  "Social services and support",
  "Environmental conservation efforts",
  "Volunteer engagement programs",
];

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl transform -rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop"
                alt="Community Impact team working together"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-blue-600 font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Empowering Communities Since 2008
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              At Community Impact, we're dedicated to creating lasting positive
              change in our communities. Through collaborative efforts,
              innovative programs, and dedicated volunteers, we work to address
              critical needs and build stronger, more resilient communities for
              everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/about"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium text-center"
              >
                Learn More About Us
              </a>
              <a
                href="/impact"
                className="border border-slate-200 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors text-lg font-medium text-center"
              >
                See Our Impact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
