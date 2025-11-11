/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  images: {
    domains: ["images.unsplash.com", "cdn.jsdelivr.net"]
  }
};

module.exports = nextConfig;