import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow the sandbox / Netlify preview hosts to reach the dev server.
  allowedDevOrigins: ["*.e2b.app", "localhost"],
};

export default nextConfig;
