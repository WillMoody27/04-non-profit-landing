"use client";

import Image from "next/image";

export default function Tips() {
  const articles = [
    {
      image:
        "https://images.pexels.com/photos/6492773/pexels-photo-6492773.jpeg",
      title: "How to Identify a Termite",
      excerpt:
        "Learn the key signs of termite infestation and what to do about it.",
    },
    {
      image:
        "https://images.pexels.com/photos/7507655/pexels-photo-7507655.jpeg",
      title: "Is Mosquito Control Necessary in the Winter Months?",
      excerpt:
        "Understanding year-round mosquito prevention and control measures.",
    },
    {
      image:
        "https://images.pexels.com/photos/1784316/pexels-photo-1784316.jpeg",
      title: "How to Get Rid of Spiders and Cobwebs from Home",
      excerpt: "Effective methods for spider control and prevention.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Tips & Insights
            </h2>
            <p className="text-gray-600">
              Explore our articles to learn more about pest control. Find expert
              tips, resources, & solutions to common pest problems.
            </p>
          </div>
          <button className="text-[#2D6A4F] hover:text-[#1B4332] transition-colors font-medium">
            View All Articles
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-[240px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2D6A4F] transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <span className="text-[#2D6A4F] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
