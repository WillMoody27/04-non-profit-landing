"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Programs = () => {
  const programs = [
    {
      title: "Education & Mentorship",
      description:
        "Providing educational resources and mentorship programs to empower youth and adults in our community.",
      icon: "📚",
      impact: "500+ students supported annually",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      size: "large",
    },
    {
      title: "Community Development",
      description:
        "Building stronger communities through sustainable development projects and neighborhood initiatives.",
      icon: "🏗️",
      impact: "25+ community projects completed",
      image:
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      size: "small",
    },
    {
      title: "Social Services",
      description:
        "Offering essential services including food security, housing assistance, and healthcare access.",
      icon: "🤝",
      impact: "10,000+ lives impacted",
      image:
        "https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      size: "small",
    },
    {
      title: "Environmental Stewardship",
      description:
        "Promoting environmental conservation and sustainable practices in our community.",
      icon: "🌱",
      impact: "100+ environmental initiatives",
      image:
        "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      size: "large",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to creating lasting change through our diverse range
            of programs and initiatives that address critical community needs.
          </p>
        </div>

        {/* Bento Box Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                program.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-[300px]">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-4xl mb-2">{program.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">
                    {program.description}
                  </p>
                  <div className="text-sm font-medium text-blue-400">
                    {program.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Learn More About Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
