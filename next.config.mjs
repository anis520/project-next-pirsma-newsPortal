/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sandbox.sslcommerz.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
