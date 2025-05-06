"use client";
import { FaLeaf, FaClock, FaUserGraduate, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Eco-Friendly Solutions",
      description:
        "We use environmentally conscious methods that are safe for your family and pets.",
      icon: FaLeaf,
    },
    {
      title: "24/7 Emergency Service",
      description: "Available round the clock for urgent pest control needs.",
      icon: FaClock,
    },
    {
      title: "Certified Technicians",
      description:
        "Our team consists of highly trained and certified pest control professionals.",
      icon: FaUserGraduate,
    },
    {
      title: "Guaranteed Results",
      description: "We stand behind our work with a satisfaction guarantee.",
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">
          Why Choose EcoShield?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-emerald-50 rounded-lg"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
