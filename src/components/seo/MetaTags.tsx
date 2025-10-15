import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

export default function MetaTags({
  title = 'Dr.ssa Maria Rossi - Psicologa e Psicoterapeuta',
  description = 'Psicologa e Psicoterapeuta specializzata in terapia individuale, di coppia e sostegno psicologico. Approccio umanistico e professionale per il benessere psicologico.',
  keywords = 'psicologa, psicoterapeuta, terapia individuale, terapia di coppia, consulenza psicologica, benessere mentale',
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  publishedTime,
  author = 'Dr.ssa Maria Rossi',
}: MetaTagsProps) {
  const siteUrl = 'https://sito-psicologa.vercel.app';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Dr.ssa Maria Rossi - Psicologa" />
      <meta property="og:locale" content="it_IT" />
      
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Psicologia" />
          <meta property="article:tag" content={keywords} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#B6D1D9" />
      <meta name="msapplication-TileColor" content="#B6D1D9" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'Article' : 'WebPage',
            headline: title,
            description: description,
            image: fullImage,
            url: fullUrl,
            author: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Dr.ssa Maria Rossi',
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/images/logo.png`,
              },
            },
            ...(publishedTime && {
              datePublished: publishedTime,
              dateModified: publishedTime,
            }),
          }),
        }}
      />
    </Head>
  );
}

