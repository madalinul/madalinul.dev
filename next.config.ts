import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the self-contained static metro page (no server rendering) at /metro.
  async rewrites() {
    return [{ source: "/metro", destination: "/metro.html" }];
  },
};

export default nextConfig;
