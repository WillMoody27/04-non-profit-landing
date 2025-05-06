/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add unsplash images plus pexels images plus unsplash images
    // include the path to use https://stock.adobe.com/
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "stock.adobe.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "istockphoto.com",
        pathname: "/photo/**",
      },
      {
        protocol: "https",
        hostname: "www.istockphoto.com",
        pathname: "/photo/**",
      },
    ],
  },
};

export default nextConfig;
