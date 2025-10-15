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
