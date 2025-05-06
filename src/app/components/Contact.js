"use client";

import toast from "react-hot-toast";

export default function Contact() {
  const handleContact = () => {
    toast.success("Thank you for your interest! We will contact you soon.");
  };

  return (
    <div className="bg-emerald-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us Today</h2>
        <p className="mb-8">Get in touch for a free consultation and quote</p>
        <button
          onClick={handleContact}
          className="bg-white text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
