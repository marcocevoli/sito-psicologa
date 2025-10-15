module.exports = {
  siteUrl: process.env.SITE_URL || 'https://sito-psicologa.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*'],
  additionalPaths: async (config) => {
    const result = [];

    // Add blog posts
    const { getAllPosts } = await import('./src/lib/mdx');
    const posts = getAllPosts();
    
    posts.forEach((post) => {
      result.push({
        loc: `/blog/${post.slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date(post.date).toISOString(),
      });
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://sito-psicologa.vercel.app/sitemap.xml',
    ],
  },
};

