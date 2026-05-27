const isProduction = process.env.NODE_ENV === "production";
const repoName = "Rashed-Azizi";
const basePath = isProduction ? `/${repoName}` : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProduction ? `${basePath}/` : undefined,
};

export default nextConfig;
