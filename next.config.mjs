/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export (replaces `next export`)
  basePath: '/tapmesa-landing', // Replace with your actual repo name
  assetPrefix: '/tapmesa-landing/',
  trailingSlash: true,
};

export default nextConfig;
