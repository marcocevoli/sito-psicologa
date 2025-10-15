import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Sun, Users, Shield } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Depressione - Aree di Intervento',
  description: 'Supporto per depressione, umore depresso, perdita di interesse e difficoltà emotive. Trattamento specializzato con approcci evidence-based.',
  openGraph: {
    title: 'Depressione - Dr.ssa Maria Rossi',
    description: 'Trattamento specializzato per depressione e disturbi dell\'umore.',
  },
};

export default function DepressionePage() {
  const faqItems = [
    {
      id: '1',
      title: 'Come distinguere la depressione dalla tristezza normale?',
      content: (
        <div>
          <p>La depressione si distingue per la durata (almeno 2 settimane), l'intensità dei sintomi e l'impatto significativo sulla vita quotidiana. La tristezza normale è temporanea e non compromette il funzionamento generale.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'La depressione può essere curata completamente?',
      content: (
        <div>
          <p>Sì, la depressione è una condizione altamente curabile. Con il trattamento appropriato, la maggior parte delle persone può raggiungere una remissione completa e tornare a una vita soddisfacente.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'È necessario assumere farmaci antidepressivi?',
      content: (
        <div>
          <p>Non sempre. Per forme lievi-moderate, la terapia psicologica può essere sufficiente. Per forme gravi, spesso è necessario combinare terapia e farmaci. La decisione viene presa insieme al medico.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Quanto tempo ci vuole per vedere miglioramenti?',
      content: (
        <div>
          <p>I primi miglioramenti possono essere visibili già dopo 2-4 settimane, ma un trattamento completo richiede generalmente 12-20 sedute. Ogni percorso è personalizzato in base alle esigenze individuali.</p>
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
                Depressione
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Supporto per depressione, umore depresso, perdita di interesse e difficoltà 
                emotive con approcci terapeutici evidence-based.
              </p>
              <p className="text-lg text-gray-700">
                Ti accompagno nel percorso per comprendere e superare la depressione, 
                ritrovando gioia di vivere e motivazione per affrontare la vita con nuove energie.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è la Depressione</h2>
              <p className="text-lg text-gray-700 mb-6">
                La depressione è un disturbo dell'umore che si caratterizza per una sensazione persistente di 
                tristezza, perdita di interesse e piacere nelle attività quotidiane, accompagnata da una serie 
                di sintomi che interferiscono significativamente con la vita quotidiana.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I sintomi principali includono:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Umore depresso per la maggior parte del giorno</li>
                <li>Perdita di interesse o piacere nelle attività</li>
                <li>Significativa perdita o aumento di peso</li>
                <li>Disturbi del sonno (insonnia o ipersonnia)</li>
                <li>Faticabilità o perdita di energia</li>
                <li>Sensazione di inutilità o colpa eccessiva</li>
                <li>Difficoltà di concentrazione e decisione</li>
                <li>Pensieri ricorrenti di morte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of depression */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Forme di Depressione
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diverse manifestazioni della depressione richiedono approcci terapeutici specifici.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Depressione Maggiore</h3>
              <p className="text-gray-600 mb-4">
                Episodi depressivi che durano almeno 2 settimane con sintomi significativi.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Umore depresso persistente</li>
                <li>• Perdita di interesse</li>
                <li>• Alterazioni del sonno e appetito</li>
                <li>• Difficoltà di concentrazione</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Distimia</h3>
              <p className="text-gray-600 mb-4">
                Forma cronica di depressione con sintomi meno gravi ma persistenti.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Umore depresso per almeno 2 anni</li>
                <li>• Sintomi meno intensi</li>
                <li>• Impatto sulla vita quotidiana</li>
                <li>• Sensazione di "normalità" triste</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Depressione Post-Partum</h3>
              <p className="text-gray-600 mb-4">
                Depressione che si manifesta dopo il parto, spesso sottovalutata.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Inizio dopo il parto</li>
                <li>• Senso di inadeguatezza</li>
                <li>• Difficoltà nel legame con il bambino</li>
                <li>• Ansia e preoccupazioni eccessive</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Il mio approccio terapeutico
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Metodologie evidence-based per il trattamento efficace della depressione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia Cognitivo-Comportamentale</h3>
              <p className="text-gray-600">
                Identificazione e modificazione dei pensieri negativi e dei comportamenti che mantengono la depressione.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Attivazione Comportamentale</h3>
              <p className="text-gray-600">
                Graduale reintroduzione di attività piacevoli e significative per riattivare la motivazione.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia Interpersonale</h3>
              <p className="text-gray-600">
                Lavoro sulle relazioni interpersonali e sui conflitti che possono contribuire alla depressione.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prevenzione Ricadute</h3>
              <p className="text-gray-600">
                Sviluppo di strategie per riconoscere e gestire i primi segnali di ricaduta.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefici del trattamento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un percorso terapeutico strutturato per superare la depressione e ritrovare il benessere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Miglioramento dei sintomi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Riduzione significativa dell'umore depresso</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ritorno dell'interesse per le attività</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Miglioramento del sonno e dell'appetito</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ripristino del funzionamento</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Miglioramento delle relazioni interpersonali</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ritorno al lavoro o alle attività quotidiane</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Sviluppo di strategie di coping efficaci</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Domande frequenti
              </h2>
              <p className="text-lg text-gray-600">
                Risposte alle domande più comuni sul trattamento della depressione.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto a ritrovare la gioia di vivere?"
        description="La depressione è curabile e non devi affrontarla da solo. Contattami per iniziare un percorso terapeutico personalizzato e ritrovare il benessere e la motivazione."
        primaryAction={{
          text: 'Prenota una consulenza',
          href: '/contatti',
        }}
        secondaryAction={{
          text: 'Scopri altre aree di intervento',
          href: '/di-cosa-mi-occupo/aree-di-intervento',
        }}
      />
    </>
  );
}
