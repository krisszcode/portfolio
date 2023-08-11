const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "/src/app/components"),
      "@hooks": path.resolve(__dirname, "/src/app/hooks"),
      "@styles": path.resolve(__dirname, "/src/app/styles"),
    };
    return config;
  },
};

module.exports = nextConfig;
