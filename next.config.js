/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // trailingSlash: true,
  output: 'export',
  distDir: 'docs',
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  assetPrefix: './',
  eslint: {
    // Warning: This allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
