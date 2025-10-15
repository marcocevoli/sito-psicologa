import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  cover?: string;
  tags: string[];
  draft: boolean;
  content: string;
  readingTime: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  cover?: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(content);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      cover: data.cover,
      tags: data.tags || [],
      draft: data.draft || false,
      content: processedContent.toString(),
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    return null;
  }
}

export function getAllPosts(): PostMeta[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          date: data.date || '',
          description: data.description || '',
          cover: data.cover,
          tags: data.tags || [],
          draft: data.draft || false,
          readingTime: calculateReadingTime(fileContents),
        };
      })
      .filter((post) => !post.draft)
      .sort((a, b) => (a.date < b.date ? 1 : -1));

    return allPostsData;
  } catch (error) {
    return [];
  }
}

export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set<string>();
  
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min di lettura`;
}

export function getFeaturedPosts(limit: number = 3): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

