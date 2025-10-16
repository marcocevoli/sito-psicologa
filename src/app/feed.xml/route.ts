import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = 'https://sito-psicologa.vercel.app';

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dr.ssa Maria Rossi - Blog</title>
    <description>Articoli e riflessioni su psicologia, benessere mentale e crescita personale</description>
    <link>${baseUrl}</link>
    <language>it</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}



