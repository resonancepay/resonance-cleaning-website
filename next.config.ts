import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services-v2",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
