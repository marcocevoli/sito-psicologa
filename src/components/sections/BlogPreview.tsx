import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/common/Badge';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

// Mock data - in production this would come from the blog system
const featuredPosts = [
  {
    id: '1',
    title: 'Come gestire l\'ansia: 5 strategie pratiche',
    excerpt: 'L\'ansia è una reazione normale, ma quando diventa eccessiva può interferire con la vita quotidiana. Scopri alcune strategie pratiche per gestirla.',
    slug: 'come-gestire-ansia-strategie-pratiche',
    date: '2024-01-15',
    readTime: '5 min',
    cover: '/images/blog/ansia-strategie.jpg',
    tags: ['Ansia', 'Gestione stress', 'Benessere'],
  },
  {
    id: '2',
    title: 'L\'importanza della comunicazione nella coppia',
    excerpt: 'Una comunicazione efficace è fondamentale per mantenere una relazione sana e duratura. Ecco come migliorare il dialogo con il partner.',
    slug: 'comunicazione-coppia-relazione-sana',
    date: '2024-01-10',
    readTime: '7 min',
    cover: '/images/blog/comunicazione-coppia.jpg',
    tags: ['Relazioni', 'Comunicazione', 'Coppia'],
  },
  {
    id: '3',
    title: 'Autostima: come costruire una percezione positiva di sé',
    excerpt: 'L\'autostima influenza ogni aspetto della nostra vita. Scopri come sviluppare una visione più positiva di te stesso attraverso esercizi pratici.',
    slug: 'autostima-percezione-positiva-se-stesso',
    date: '2024-01-05',
    readTime: '6 min',
    cover: '/images/blog/autostima.jpg',
    tags: ['Autostima', 'Crescita personale', 'Benessere'],
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dal mio blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Condivido articoli e riflessioni su psicologia, benessere mentale e crescita personale 
            per supportarti nel tuo percorso di consapevolezza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="card-hover h-full">
                  {/* Cover Image */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

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
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    <span>Leggi l'articolo</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <span>Vedi tutti gli articoli</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

