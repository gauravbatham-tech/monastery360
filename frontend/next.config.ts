import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // tell Next.js that "frontend" is the root
  },
  // you can add more config options here later if needed
};

export default nextConfig;
