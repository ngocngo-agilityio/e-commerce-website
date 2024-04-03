/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/ecommerce-fashion-16e2e.appspot.com/o/**',
      },
    ],
  },
};

export default nextConfig;
