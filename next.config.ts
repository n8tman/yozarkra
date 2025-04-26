import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  output: 'standalone',
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
};

export default nextConfig;
