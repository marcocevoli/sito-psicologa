import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Heart, Shield, Users } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Ansia - Aree di Intervento',
  description: 'Gestione dell\'ansia generalizzata, attacchi di panico, fobie e preoccupazioni eccessive. Trattamento specializzato con approcci evidence-based.',
  openGraph: {
    title: 'Ansia - Dr.ssa Maria Rossi',
    description: 'Trattamento specializzato per ansia e disturbi correlati.',
  },
};

export default function AnsiaPage() {
  const faqItems = [
    {
      id: '1',
      title: 'L\'ansia può essere completamente eliminata?',
      content: (
        <div>
          <p>L'ansia è una risposta naturale, ma può essere gestita efficacemente. L'obiettivo è ridurne l'intensità e la frequenza, permettendoti di vivere una vita più serena e funzionale.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'Quanto tempo ci vuole per vedere miglioramenti?',
      content: (
        <div>
          <p>I primi miglioramenti si possono vedere già dopo poche sedute, mentre un percorso completo richiede generalmente 12-20 sedute, a seconda della gravità dei sintomi.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'È necessario assumere farmaci?',
      content: (
        <div>
          <p>Non sempre. La terapia psicologica è spesso sufficiente. La decisione di associare farmaci viene valutata caso per caso, in collaborazione con il medico di base o lo psichiatra.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Cosa posso fare da solo per gestire l\'ansia?',
      content: (
        <div>
          <p>Tecniche di respirazione, esercizio fisico regolare, buon sonno e una dieta equilibrata possono essere molto utili. Ti insegnerò strategie specifiche da utilizzare autonomamente.</p>
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
                Ansia
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gestione dell'ansia generalizzata, attacchi di panico, fobie e preoccupazioni 
                eccessive con approcci terapeutici evidence-based.
              </p>
              <p className="text-lg text-gray-700">
                Ti accompagno nel percorso per comprendere e gestire l'ansia, sviluppando 
                strategie efficaci per ritrovare serenità e controllo nella tua vita.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-pastel-blue/30 rounded-2xl flex items-center justify-center">
                <Brain className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è l'Ansia</h2>
              <p className="text-lg text-gray-700 mb-6">
                L'ansia è una reazione naturale del nostro corpo che ci aiuta a prepararci alle sfide della vita. 
                Tuttavia, quando diventa eccessiva o persistente, può interferire significativamente con la 
                nostra quotidianità, le nostre relazioni e il nostro benessere generale.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                L'ansia si manifesta attraverso:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Preoccupazioni eccessive e persistenti</li>
                <li>Sintomi fisici (battito accelerato, sudorazione, tremori)</li>
                <li>Difficoltà di concentrazione e irritabilità</li>
                <li>Disturbi del sonno e dell'appetito</li>
                <li>Evitamento di situazioni temute</li>
                <li>Sensazione di perdita di controllo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of anxiety */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tipi di Ansia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diverse forme di ansia richiedono approcci terapeutici specifici e personalizzati.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ansia Generalizzata</h3>
              <p className="text-gray-600 mb-4">
                Preoccupazioni eccessive e persistenti su diversi aspetti della vita quotidiana.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Preoccupazioni costanti</li>
                <li>• Irritabilità</li>
                <li>• Tensione muscolare</li>
                <li>• Difficoltà di concentrazione</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Attacchi di Panico</h3>
              <p className="text-gray-600 mb-4">
                Episodi intensi di paura accompagnati da sintomi fisici molto forti.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Palpitazioni</li>
                <li>• Sudorazione eccessiva</li>
                <li>• Tremori</li>
                <li>• Sensazione di soffocamento</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fobie Specifiche</h3>
              <p className="text-gray-600 mb-4">
                Paura irrazionale e intensa verso situazioni o oggetti specifici.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Paura degli animali</li>
                <li>• Paura di volare</li>
                <li>• Paura delle altezze</li>
                <li>• Paura degli spazi chiusi</li>
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
              Metodologie evidence-based per il trattamento efficace dell'ansia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia Cognitivo-Comportamentale</h3>
              <p className="text-gray-600">
                Identificazione e modificazione dei pensieri e comportamenti che mantengono l'ansia.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecniche di Rilassamento</h3>
              <p className="text-gray-600">
                Respirazione diaframmatica, rilassamento muscolare e mindfulness per gestire i sintomi.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Esposizione Graduale</h3>
              <p className="text-gray-600">
                Affrontamento progressivo delle situazioni temute in modo sicuro e controllato.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Psicoeducazione</h3>
              <p className="text-gray-600">
                Comprensione dei meccanismi dell'ansia per sviluppare strategie di gestione efficaci.
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
              Un percorso terapeutico strutturato per gestire efficacemente l'ansia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riduzione dei sintomi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Diminuzione significativa dell'intensità e frequenza dell'ansia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Miglioramento della qualità del sonno</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Riduzione dei sintomi fisici</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Miglioramento della qualità di vita</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Maggiore capacità di gestire le situazioni ansiogene</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Miglioramento delle relazioni interpersonali</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ritorno alle attività evitate</span>
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
                Risposte alle domande più comuni sul trattamento dell'ansia.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto a gestire l'ansia in modo efficace?"
        description="Non lasciare che l'ansia controlli la tua vita. Contattami per iniziare un percorso terapeutico personalizzato e ritrovare serenità e controllo."
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


