import React from "react";
import Image from "next/image";

const ImpactStories = () => {
  const stories = [
    {
      title: "Sarah's Journey",
      description:
        "From struggling student to successful mentor, Sarah's story inspires us all.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop",
      category: "Education",
    },
    {
      title: "Community Garden Project",
      description:
        "How we transformed an empty lot into a thriving community space.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
      category: "Community Development",
    },
    {
      title: "The Johnson Family",
      description:
        "Supporting families through challenging times with comprehensive assistance.",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop",
      category: "Social Services",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of change and transformation from our community members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600 mb-2 block">
                  {story.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <a
                  href={`/stories/${story.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Read Full Story →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/stories"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            View All Impact Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
