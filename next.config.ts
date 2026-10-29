import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { agentUpgrade: "security" },
  /* config options here */
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }, { protocol: 'https', hostname: 'infotechbusinesssolutions.com', pathname: '/images/blogs/**' }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
