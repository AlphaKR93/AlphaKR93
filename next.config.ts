import type { NextConfig } from "next";
import createVercelToolbar from "@vercel/toolbar/plugins/next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
