import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Users, MessageCircle, Clock } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Terapia di Coppia',
  description: 'Supporto per rafforzare la relazione, migliorare la comunicazione e risolvere conflitti nella coppia attraverso un percorso terapeutico specializzato.',
  openGraph: {
    title: 'Terapia di Coppia - Dr.ssa Maria Rossi',
    description: 'Supporto per rafforzare la relazione e migliorare la comunicazione di coppia.',
  },
};

export default function TerapiaDiCoppiaPage() {
  const faqItems = [
    {
      id: '1',
      title: 'Quando è il momento di cercare aiuto come coppia?',
      content: (
        <div>
          <p>È il momento giusto quando i conflitti sono ricorrenti, la comunicazione è difficile, o c'è una perdita di intimità emotiva. Non aspettare che la situazione peggiori.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'Funziona anche se solo un partner è motivato?',
      content: (
        <div>
          <p>È ideale che entrambi i partner siano motivati, ma anche con un partner inizialmente riluttante si possono ottenere buoni risultati. Spesso la motivazione cresce durante il percorso.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Quanto dura il percorso di terapia di coppia?',
      content: (
        <div>
          <p>La durata varia in base alle difficoltà della coppia. Generalmente si vedono miglioramenti dopo 8-12 sedute, ma ogni percorso è personalizzato.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Cosa succede se non funziona?',
      content: (
        <div>
          <p>Se il percorso non dovesse portare ai risultati sperati, esploreremo insieme le opzioni alternative, inclusa la possibilità di percorsi individuali.</p>
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
                Terapia di Coppia
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Supporto per rafforzare la relazione, migliorare la comunicazione e risolvere 
                conflitti nella coppia attraverso un percorso terapeutico specializzato.
              </p>
              <p className="text-lg text-gray-700">
                Insieme esploreremo le dinamiche della vostra relazione per costruire una comunicazione 
                più efficace e un legame più forte.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pastel-pink/30 to-primary-100 rounded-2xl flex items-center justify-center">
                <Heart className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è la Terapia di Coppia</h2>
              <p className="text-lg text-gray-700 mb-6">
                La terapia di coppia è un percorso terapeutico che coinvolge entrambi i partner per affrontare insieme 
                le difficoltà della relazione. L'obiettivo è migliorare la comunicazione, risolvere i conflitti e 
                rafforzare il legame emotivo tra i partner.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Attraverso un approccio neutrale e professionale, lavoreremo insieme per:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Migliorare la comunicazione reciproca</li>
                <li>Risolvere i conflitti in modo costruttivo</li>
                <li>Rafforzare l'intimità emotiva</li>
                <li>Ricostruire la fiducia quando compromessa</li>
                <li>Allineare gli obiettivi di coppia</li>
                <li>Migliorare la soddisfazione relazionale</li>
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
              Benefici della Terapia di Coppia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un percorso terapeutico di coppia offre numerosi vantaggi per rafforzare la vostra relazione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comunicazione efficace</h3>
              <p className="text-gray-600">
                Miglioramento delle capacità di ascolto e di espressione per una comunicazione più autentica.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risoluzione conflitti</h3>
              <p className="text-gray-600">
                Sviluppo di strategie per gestire i disaccordi in modo costruttivo e rispettoso.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intimità emotiva</h3>
              <p className="text-gray-600">
                Rafforzamento del legame emotivo e della connessione profonda tra i partner.
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
              Un processo strutturato che coinvolge entrambi i partner per il benessere della relazione.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prima seduta</h3>
              <p className="text-gray-600">
                Il primo incontro coinvolge entrambi i partner per conoscere la storia della coppia 
                e identificare le difficoltà attuali.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Valutazione e comunicazione</h3>
              <p className="text-gray-600">
                Analisi dei pattern relazionali e miglioramento delle capacità comunicative 
                di entrambi i partner.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crescita della relazione</h3>
              <p className="text-gray-600">
                Rafforzamento del legame e della soddisfazione reciproca attraverso 
                strategie personalizzate.
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
                Risposte alle domande più comuni sulla terapia di coppia.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronti per rafforzare la vostra relazione?"
        description="Contattami per un primo colloquio di coppia e scoprite come posso supportarvi nel vostro percorso di crescita insieme."
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


