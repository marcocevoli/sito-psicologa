import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getAllTags } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/common/Badge';
import { Search, Calendar, Clock, Tag } from 'lucide-react';
import BlogSearch from '@/components/blog/BlogSearch';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articoli e riflessioni su psicologia, benessere mentale e crescita personale. Consigli pratici e approfondimenti per il tuo benessere psicologico.',
  openGraph: {
    title: 'Blog - Dr.ssa Maria Rossi',
    description: 'Articoli e riflessioni su psicologia e benessere mentale.',
  },
};

interface BlogPageProps {
  searchParams: {
    tag?: string;
    search?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  
  // Filter posts based on search params
  let filteredPosts = allPosts;
  
  if (searchParams.tag) {
    filteredPosts = allPosts.filter(post => 
      post.tags.includes(searchParams.tag!)
    );
  }
  
  if (searchParams.search) {
    const searchTerm = searchParams.search.toLowerCase();
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Il mio blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Articoli e riflessioni su psicologia, benessere mentale e crescita personale. 
              Consigli pratici e approfondimenti per supportarti nel tuo percorso di benessere.
            </p>
            
            {/* Search */}
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="flex items-center space-x-4">
              <Tag className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600 font-medium">Filtra per argomento:</span>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blog"
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    !searchParams.tag
                      ? 'bg-primary-100 text-primary-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Tutti
                </Link>
                {allTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      searchParams.tag === tag
                        ? 'bg-primary-100 text-primary-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nessun articolo trovato
              </h3>
              <p className="text-gray-600 mb-6">
                {searchParams.search || searchParams.tag
                  ? 'Prova a modificare i filtri di ricerca.'
                  : 'Non ci sono ancora articoli pubblicati.'}
              </p>
              {(searchParams.search || searchParams.tag) && (
                <Link href="/blog" className="btn-primary">
                  Vedi tutti gli articoli
                </Link>
              )}
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-600">
                  {filteredPosts.length} articolo{filteredPosts.length !== 1 ? 'i' : ''} trovato{filteredPosts.length !== 1 ? 'i' : ''}
                  {searchParams.tag && (
                    <span> per l'argomento "<strong>{searchParams.tag}</strong>"</span>
                  )}
                  {searchParams.search && (
                    <span> per la ricerca "<strong>{searchParams.search}</strong>"</span>
                  )}
                </p>
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="card-hover h-full">
                        {/* Cover Image */}
                        {post.cover && (
                          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                            <Image
                              src={post.cover}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                          {/* Meta */}
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readingTime}</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {post.title}
                          </h2>

                          {/* Description */}
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.description}
                          </p>

                          {/* Tags */}
                          {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                              {post.tags.length > 3 && (
                                <Badge variant="secondary">
                                  +{post.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-pastel-blue/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Hai domande specifiche?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Se hai domande su argomenti trattati nel blog o vuoi approfondire 
              alcuni aspetti, non esitare a contattarmi per una consulenza.
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

