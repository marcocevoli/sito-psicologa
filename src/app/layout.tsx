import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/common/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dr.ssa Maria Rossi - Psicologa e Psicoterapeuta',
    template: '%s | Dr.ssa Maria Rossi - Psicologa',
  },
  description: 'Psicologa e Psicoterapeuta specializzata in terapia individuale, di coppia e sostegno psicologico. Approccio umanistico e professionale per il benessere psicologico.',
  keywords: ['psicologa', 'psicoterapeuta', 'terapia individuale', 'terapia di coppia', 'consulenza psicologica', 'benessere mentale'],
  authors: [{ name: 'Dr.ssa Maria Rossi' }],
  creator: 'Dr.ssa Maria Rossi',
  publisher: 'Dr.ssa Maria Rossi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sito-psicologa.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://sito-psicologa.vercel.app',
    title: 'Dr.ssa Maria Rossi - Psicologa e Psicoterapeuta',
    description: 'Psicologa e Psicoterapeuta specializzata in terapia individuale, di coppia e sostegno psicologico.',
    siteName: 'Dr.ssa Maria Rossi - Psicologa',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr.ssa Maria Rossi - Psicologa e Psicoterapeuta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr.ssa Maria Rossi - Psicologa e Psicoterapeuta',
    description: 'Psicologa e Psicoterapeuta specializzata in terapia individuale, di coppia e sostegno psicologico.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Vai al contenuto principale
        </a>
        
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        
        <CookieBanner />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dr.ssa Maria Rossi',
              jobTitle: 'Psicologa e Psicoterapeuta',
              description: 'Psicologa e Psicoterapeuta specializzata in terapia individuale, di coppia e sostegno psicologico.',
              url: 'https://sito-psicologa.vercel.app',
              image: 'https://sito-psicologa.vercel.app/images/psicologa-photo.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Via Roma 123',
                addressLocality: 'Milano',
                postalCode: '20100',
                addressCountry: 'IT',
              },
              telephone: '+39 333 123 4567',
              email: 'info@maria-rossi-psicologa.it',
              sameAs: [
                'https://www.linkedin.com/in/maria-rossi-psicologa',
                'https://www.instagram.com/maria_rossi_psicologa',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

