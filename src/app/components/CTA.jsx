"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Your support helps us continue our mission of creating positive
            change in our community. Whether through donations, volunteering, or
            spreading awareness, every contribution matters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Donate</h3>
              <p className="mb-6">
                Support our programs and help us reach more people in need.
              </p>
              <a
                href="/donate"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Donate Now
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
              <p className="mb-6">
                Share your time and skills to make a direct impact in our
                community.
              </p>
              <a
                href="/volunteer"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Volunteer Today
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Partner With Us</h3>
              <p className="mb-6">
                Join our network of partners and help us expand our reach.
              </p>
              <a
                href="/partner"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
