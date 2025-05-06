"use client";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding Common Household Pests: A Comprehensive Guide",
      excerpt:
        "Learn about the most common household pests, their behaviors, and effective prevention methods to keep your home pest-free.",
      image: "/images/blog-pest-guide.jpg",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson",
      category: "Pest Education",
      readTime: "5 min read",
    },
    {
      title: "Eco-Friendly Pest Control: Sustainable Solutions for Your Home",
      excerpt:
        "Discover how modern pest control methods can be both effective and environmentally conscious, protecting your home without harming the planet.",
      image: "/images/blog-eco-pest.jpg",
      date: "March 10, 2024",
      author: "Michael Chen",
      category: "Eco Solutions",
      readTime: "4 min read",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-16 font-inter">
          Industry Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaUser className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-inter">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <button className="mt-6 w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium">
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
