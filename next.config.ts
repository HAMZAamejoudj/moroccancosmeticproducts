import type { NextConfig } from "next";
import path from "path";

const isStaticExport = process.env.CPANEL_STATIC === "1";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  trailingSlash: true,
  images: isStaticExport ? { unoptimized: true } : undefined,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
