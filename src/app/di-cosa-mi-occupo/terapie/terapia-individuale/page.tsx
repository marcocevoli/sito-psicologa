import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Clock, Heart, CheckCircle } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Terapia Individuale',
  description: 'Percorso personalizzato di terapia individuale per affrontare difficoltà personali, sviluppare consapevolezza e migliorare il benessere psicologico.',
  openGraph: {
    title: 'Terapia Individuale - Dr.ssa Maria Rossi',
    description: 'Percorso personalizzato di terapia individuale per il benessere psicologico.',
  },
};

export default function TerapiaIndividualePage() {
  const faqItems = [
    {
      id: '1',
      title: 'Quanto dura una seduta?',
      content: (
        <div>
          <p>Le sedute individuali durano 50 minuti. Questo tempo è stato studiato per permettere un'analisi approfondita mantenendo alta l'attenzione e l'efficacia del lavoro terapeutico.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'Con che frequenza si svolgono le sedute?',
      content: (
        <div>
          <p>Generalmente si inizia con sedute settimanali, che possono poi essere modulate nel corso del percorso secondo le tue esigenze specifiche e i tuoi obiettivi.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Come garantite la privacy?',
      content: (
        <div>
          <p>La confidenzialità è garantita dal segreto professionale e dal Codice Deontologico degli Psicologi. Tutte le informazioni condivise sono strettamente riservate.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Quando è il momento di iniziare una terapia?',
      content: (
        <div>
          <p>È il momento giusto quando le difficoltà che stai vivendo interferiscono significativamente con la tua vita quotidiana, le relazioni o il benessere generale.</p>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Terapia Individuale
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Un percorso personalizzato per affrontare difficoltà personali, sviluppare 
                consapevolezza e migliorare il benessere psicologico.
              </p>
              <p className="text-lg text-gray-700">
                Attraverso un approccio collaborativo e non giudicante, ti accompagnerò 
                nell'esplorazione di te stesso per raggiungere i tuoi obiettivi di crescita e benessere.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-pastel-blue/30 rounded-2xl flex items-center justify-center">
                <Users className="w-24 h-24 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è la Terapia Individuale</h2>
              <p className="text-lg text-gray-700 mb-6">
                La terapia individuale è un percorso di crescita personale che ti accompagna nell'esplorazione di te stesso, 
                delle tue emozioni e dei tuoi comportamenti. È uno spazio sicuro e riservato dove puoi esprimere liberamente 
                i tuoi pensieri e sentimenti, senza giudizio.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Attraverso un rapporto terapeutico basato sulla fiducia e sul rispetto, lavoreremo insieme per:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Comprendere le cause delle tue difficoltà</li>
                <li>Sviluppare strategie efficaci per gestire le emozioni</li>
                <li>Migliorare le relazioni interpersonali</li>
                <li>Aumentare la consapevolezza di te stesso</li>
                <li>Rafforzare l'autostima e la fiducia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefici della Terapia Individuale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un percorso terapeutico individuale offre numerosi vantaggi per il tuo benessere psicologico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consapevolezza di sé</h3>
              <p className="text-gray-600">
                Maggiore comprensione dei tuoi pensieri, emozioni e comportamenti per una vita più consapevole.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestione emotiva</h3>
              <p className="text-gray-600">
                Migliori capacità di gestire emozioni difficili come ansia, rabbia o tristezza.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Crescita personale</h3>
              <p className="text-gray-600">
                Sviluppo di nuove prospettive e strategie per affrontare la vita con maggiore serenità.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Come funziona
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un processo strutturato e personalizzato per accompagnarti verso il benessere psicologico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primo colloquio</h3>
              <p className="text-gray-600">
                Incontro conoscitivo per comprendere le tue esigenze, obiettivi e stabilire 
                un rapporto di fiducia reciproca.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Percorso personalizzato</h3>
              <p className="text-gray-600">
                Sviluppo di un piano terapeutico su misura per te, con obiettivi chiari 
                e strategie specifiche.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crescita e benessere</h3>
              <p className="text-gray-600">
                Accompagnamento costante nel processo di cambiamento verso il raggiungimento 
                dei tuoi obiettivi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Domande frequenti
              </h2>
              <p className="text-lg text-gray-600">
                Risposte alle domande più comuni sulla terapia individuale.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto per iniziare il tuo percorso di terapia individuale?"
        description="Contattami per un primo colloquio conoscitivo e scopri come posso supportarti nel tuo cammino verso il benessere psicologico."
        primaryAction={{
          text: 'Prenota un colloquio',
          href: '/contatti',
        }}
        secondaryAction={{
          text: 'Scopri altre terapie',
          href: '/di-cosa-mi-occupo/terapie',
        }}
      />
    </>
  );
}
