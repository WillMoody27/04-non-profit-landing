"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Basic",
      price: "99",
      period: "month",
      features: [
        "Quarterly inspections",
        "Common pest treatment",
        "Emergency response",
        "Basic prevention tips",
        "Email support",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      features: [
        "Monthly inspections",
        "Advanced pest treatment",
        "24/7 emergency response",
        "Preventive measures",
        "Priority support",
        "Free consultation",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "299",
      period: "month",
      features: [
        "Bi-weekly inspections",
        "Comprehensive pest control",
        "24/7 emergency response",
        "Custom prevention plan",
        "Dedicated support team",
        "Free consultation",
        "Annual deep cleaning",
      ],
      recommended: false,
    },
  ];

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    toast.success(
      `Thank you for selecting the ${planName} plan! We'll contact you shortly.`
    );
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect pest control solution for your needs. All plans
            include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                plan.recommended ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {plan.recommended && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.recommended
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
