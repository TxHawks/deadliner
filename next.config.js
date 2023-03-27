const withStyle9 = require("style9-webpack/next-appdir");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["style9"],
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
};

module.exports = withStyle9({
  minifyProperties: process.env.NODE_ENV === "production",
})(nextConfig);
