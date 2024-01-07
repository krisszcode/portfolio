const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  features: {
    // Opt-in to Webpack 5, since it's not the default yet
    webpack5: true,
  },
  experimental: {
    serverComponents: true, 
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
