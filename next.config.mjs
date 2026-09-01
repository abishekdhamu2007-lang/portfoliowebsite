/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "raw.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
