const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  experimental: {
    esmExternals: 'loose',
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig;