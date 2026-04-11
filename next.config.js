/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Enable static generation when possible
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
}

export default nextConfig;
