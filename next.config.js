const createMDX = require('@next/mdx');
const remarkGfm = require('remark-gfm');
const rehypeSlug = require('rehype-slug');
const rehypeAutolinkHeadings = require('rehype-autolink-headings');

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    mdxRs: false,
  },
  eslint: {
    // Durante il build, ignora gli errori ESLint per evitare fallimenti
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Durante il build, ignora gli errori TypeScript per evitare fallimenti
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/feed.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
