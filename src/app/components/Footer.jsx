import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHandHoldingHeart,
} from "react-icons/fa";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "#" },
  { name: "Programs", href: "#" },
  { name: "Impact", href: "#" },
  { name: "Volunteer", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const programs = [
  { name: "Education & Mentorship", href: "#" },
  { name: "Community Development", href: "#" },
  { name: "Social Services", href: "#" },
  { name: "Environmental Stewardship", href: "#" },
  { name: "Youth Programs", href: "#" },
  { name: "Senior Support", href: "#" },
];

const serviceAreas = [
  { name: "Austin, TX", href: "#" },
  { name: "San Antonio, TX", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 text-center items-center">
          {/* Organization Info */}
          <div>
            <div className="flex flex-col items-center text-center">
              <Link
                href="/"
                className="flex items-center gap-2 justify-center mb-6"
              >
                <FaHandHoldingHeart className="w-6 h-6 text-blue-500" />
                <span className="text-2xl font-bold text-white">
                  Community Impact
                </span>
              </Link>
              <p className="text-slate-300 mb-6 text-center">
                Creating lasting positive change in our communities through
                education, support services, and sustainable development
                programs.
              </p>
              <div className="space-y-3 text-center items-center w-full">
                <a
                  href="tel:1-800-COMMUNITY"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors justify-center w-full"
                >
                  <FaPhone className="w-5 h-5" />
                  <span>1-800-COMMUNITY</span>
                </a>
                <a
                  href="mailto:info@communityimpact.org"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors justify-center w-full"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>info@communityimpact.org</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300 justify-center w-full">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>123 Community Way, Austin, TX 78701</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a
                    href={area.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col items-center gap-6">
            <div className="text-slate-300 text-sm">
              © {new Date().getFullYear()} Community Impact. All rights
              reserved.
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-slate-300 text-sm">
            Website designed by{" "}
            <a
              href="https://www.williamhmoody.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slate-200 transition-colors underline"
            >
              William Hellems-Moody
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
