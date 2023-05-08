/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  },
};

module.exports = nextConfig;
