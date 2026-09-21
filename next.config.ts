import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "store.zrpm.cl",
      },
      {
        protocol: "https",
        hostname: "zrpm.cl",
      },
    ],
  },
};

export default nextConfig;
