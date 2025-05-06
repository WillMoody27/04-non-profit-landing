"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";
//

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&auto=format&fit=crop"
          alt="Community Impact"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Creating Lasting Change in Our Community
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Together, we're building a stronger, more resilient community
            through education, support services, and sustainable development
            programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/donate"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-sm">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm">Active Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm">Community Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
