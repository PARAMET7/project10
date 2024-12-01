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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
    ],
  },
  experimental: {

    serverActions: true, // This is valid for enabling server actions in experimental mode
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
