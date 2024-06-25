/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  distDir: 'build',
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

export default nextConfig;
