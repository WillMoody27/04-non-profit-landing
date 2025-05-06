"use client";

import { useState, useEffect } from "react";
// import { MdPestControl } from "react-icons/md";
import { FaBars, FaTimes, FaHandHoldingHeart } from "react-icons/fa";
// import toast from "react-hot-toast";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import toggle from "@public/menu-01.svg";

// Import the logo for the pests website
// import mobileLogo from "@public/assets/mobile-logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white border-b border-slate-100 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 group">
                <FaHandHoldingHeart
                  className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors"
                  aria-label="Community Impact Logo"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
                  Community Impact
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="space-x-8">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`relative transition-colors font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                      isActive(link.href)
                        ? "text-blue-600 font-semibold after:w-full"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <Image src={toggle} alt="Toggle Menu" width={24} height={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="py-4 border-t border-slate-100"
                >
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`block transition-colors font-medium ${
                            isActive(link.href)
                              ? "text-blue-600 font-semibold"
                              : "text-slate-700 hover:text-blue-600"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 + navLinks.length * 0.1,
                      }}
                    >
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full shadow-sm hover:shadow-md">
                        Donate Now
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
