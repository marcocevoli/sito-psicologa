import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/common/Badge';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';
import BlogShare from '@/components/blog/BlogShare';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Articolo non trovato',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.cover ? [post.cover] : [],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.cover ? [post.cover] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Back Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Torna al blog</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Meta */}
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
              <BlogShare title={post.title} url={`/blog/${post.slug}`} />
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex items-center space-x-4 mb-8">
                <Tag className="w-5 h-5 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <Badge variant="secondary" className="hover:bg-primary-100 transition-colors">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Cover Image */}
            {post.cover && (
              <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden mb-12">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Altri articoli che potrebbero interessarti
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Scopri altri articoli del blog per approfondire temi legati al benessere psicologico.
                </p>
                <Link href="/blog" className="btn-primary">
                  Vedi tutti gli articoli
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-pastel-blue/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Hai domande su questo argomento?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Se hai domande specifiche o vuoi approfondire alcuni aspetti trattati nell'articolo, 
              contattami per una consulenza personalizzata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="btn-primary text-lg px-8 py-4">
                Prenota una consulenza
              </Link>
              <Link href="/di-cosa-mi-occupo" className="btn-outline text-lg px-8 py-4">
                Scopri i miei servizi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



