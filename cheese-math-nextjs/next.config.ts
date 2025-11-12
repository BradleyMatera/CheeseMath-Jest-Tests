import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'CheeseMath-Jest-Tests';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
