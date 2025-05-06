"use client";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF className="w-4 h-4" />,
    url: "#",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="w-4 h-4" />,
    url: "#",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-4 h-4" />,
    url: "#",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-4 h-4" />,
    url: "#",
  },
];

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
            <a
              href="tel:1-800-COMMUNITY"
              className="flex items-center space-x-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <FaPhone className="w-4 h-4" />
              <span className="hidden sm:inline">1-800-COMMUNITY</span>
              <span className="sm:hidden">Call Us</span>
            </a>
            <a
              href="mailto:info@communityimpact.org"
              className="flex items-center space-x-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
              <span className="hidden md:inline">info@communityimpact.org</span>
              <span className="md:hidden">Email Us</span>
            </a>
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <FaClock className="w-4 h-4" />
              <span className="hidden lg:inline">
                Mon-Fri: 9AM-5PM | Sat: 10AM-2PM
              </span>
              <span className="lg:hidden">Open Today</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`text-slate-300 hover:text-white transition-colors ${
                  social.name === "Instagram"
                    ? "hidden md:block"
                    : social.name === "LinkedIn"
                    ? "hidden lg:block"
                    : "hidden sm:block"
                }`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
