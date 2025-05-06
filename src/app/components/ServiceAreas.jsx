"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import sanAntonioServiceArea from "@public/service-areas-imgs/san-antonio-service-area.png";
import austinServiceArea from "@public/service-areas-imgs/austin-service-area.png";

// Service Areas
const areas = [
  {
    name: "Austin, TX",
    image: austinServiceArea,
    description: "Serving the entire Austin metropolitan area",
  },
  {
    name: "San Antonio, TX",
    image: sanAntonioServiceArea,
    description: "Coverage throughout San Antonio and surrounding areas",
  },
];

export default function ServiceAreas() {
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
          <span className="text-blue-600 font-medium">Service Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Communities We Serve
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive community support and services across these
            locations
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-1/2 lg:w-1/3 group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-[400px]">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-slate-200 text-sm text-center">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium inline-block"
          >
            Find Programs Near You
          </a>
        </motion.div>
      </div>
    </section>
  );
}
