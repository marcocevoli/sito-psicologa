import Hero from '@/components/sections/Hero';
import ServicesHighlight from '@/components/sections/ServicesHighlight';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider';
import BlogPreview from '@/components/sections/BlogPreview';
import CTABanner from '@/components/common/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesHighlight />
      <TestimonialsSlider />
      <BlogPreview />
      <CTABanner
        title="Pronto per iniziare il tuo percorso di benessere?"
        description="Contattami per un primo colloquio conoscitivo. Insieme potremo esplorare come posso aiutarti a raggiungere i tuoi obiettivi di benessere psicologico."
        primaryAction={{
          text: 'Prenota un colloquio',
          href: '/contatti',
        }}
        secondaryAction={{
          text: 'Scopri il mio approccio',
          href: '/approccio-terapeutico',
        }}
      />
    </>
  );
}

