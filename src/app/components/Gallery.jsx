"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      title: "Complete Cockroach Elimination",
      description:
        "Professional treatment plan successfully eliminating severe cockroach infestation in residential property.",
      beforeImage: "/images/gallery/cockroach-before.jpg",
      afterImage: "/images/gallery/cockroach-after.jpg",
      category: "Residential",
    },
    {
      title: "Commercial Kitchen Pest Management",
      description:
        "Comprehensive pest management solution ensuring food safety and regulatory compliance in restaurant facilities.",
      beforeImage: "/images/gallery/kitchen-before.jpg",
      afterImage: "/images/gallery/kitchen-after.jpg",
      category: "Commercial",
    },
    {
      title: "Termite Treatment & Prevention",
      description:
        "Advanced termite treatment and prevention system implementation in historic property.",
      beforeImage: "/images/gallery/termite-before.jpg",
      afterImage: "/images/gallery/termite-after.jpg",
      category: "Residential",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-16 font-inter">
          Case Studies
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[400px]">
                <Image
                  src={galleryItems[currentIndex].beforeImage}
                  alt="Before treatment"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded text-sm font-medium">
                  Before Treatment
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src={galleryItems[currentIndex].afterImage}
                  alt="After treatment"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded text-sm font-medium">
                  After Treatment
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-inter">
                {galleryItems[currentIndex].title}
              </h3>
              <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                {galleryItems[currentIndex].description}
              </p>
              <span className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded text-sm font-medium">
                {galleryItems[currentIndex].category}
              </span>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <FaChevronLeft className="text-gray-600 w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <FaChevronRight className="text-gray-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
