/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // Add this line for the plus domain
      },
    ],
  },
  experimental: {
    serverActions: true, // This is valid for enabling server actions in experimental mode
  },
};

module.exports = nextConfig;
