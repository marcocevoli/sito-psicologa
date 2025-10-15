import { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Heart, Shield, Users } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Sostegno Psicologico',
  description: 'Supporto psicologico per affrontare momenti difficili, transizioni di vita e situazioni stressanti con un approccio empatico e professionale.',
  openGraph: {
    title: 'Sostegno Psicologico - Dr.ssa Maria Rossi',
    description: 'Supporto psicologico per momenti difficili e transizioni di vita.',
  },
};

export default function SostegnoPsicologicoPage() {
  const faqItems = [
    {
      id: '1',
      title: 'Quando è utile il sostegno psicologico?',
      content: (
        <div>
          <p>Il sostegno psicologico è utile durante momenti di difficoltà, transizioni importanti, perdite, cambiamenti di vita o quando ci si sente sopraffatti dalle circostanze.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'Quanto dura un percorso di sostegno?',
      content: (
        <div>
          <p>La durata varia in base alle esigenze individuali. Può essere un supporto breve e mirato o un accompagnamento più prolungato, a seconda della situazione.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'È diverso dalla terapia?',
      content: (
        <div>
          <p>Il sostegno psicologico si concentra sull'elaborazione di situazioni specifiche e sul supporto emotivo, mentre la terapia lavora su aspetti più profondi della personalità.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Posso interrompere quando voglio?',
      content: (
        <div>
          <p>Sì, hai sempre la libertà di decidere quando interrompere il percorso. Tuttavia, è consigliabile discuterne insieme per una chiusura appropriata.</p>
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
                Sostegno Psicologico
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Supporto psicologico per affrontare momenti difficili, transizioni di vita e 
                situazioni stressanti con un approccio empatico e professionale.
              </p>
              <p className="text-lg text-gray-700">
                Ti accompagno nel navigare le sfide della vita con strumenti e strategie 
                personalizzate per ritrovare equilibrio e serenità.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pastel-blue/30 to-primary-100 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è il Sostegno Psicologico</h2>
              <p className="text-lg text-gray-700 mb-6">
                Il sostegno psicologico è un intervento mirato per aiutarti ad affrontare momenti difficili, 
                transizioni di vita o situazioni stressanti. È uno spazio di ascolto e supporto dove puoi 
                elaborare le tue emozioni e trovare nuove risorse per gestire le sfide quotidiane.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Attraverso un approccio empatico e non giudicante, ti supporto per:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Elaborare eventi difficili o traumatici</li>
                <li>Gestire transizioni di vita importanti</li>
                <li>Sviluppare strategie di coping efficaci</li>
                <li>Ritrovare equilibrio emotivo</li>
                <li>Rafforzare le risorse personali</li>
                <li>Migliorare la qualità della vita</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to seek support */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quando cercare sostegno psicologico
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ci sono momenti nella vita in cui un supporto professionale può fare la differenza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eventi di vita difficili</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Lutto e perdite significative</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Separazioni e divorzi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Problemi di salute</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Difficoltà lavorative</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transizioni di vita</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Cambiamenti di ruolo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Trasferimenti e nuovi inizi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Diventare genitore</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Età avanzata e pensionamento</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefici del Sostegno Psicologico
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un percorso di sostegno offre numerosi vantaggi per affrontare le sfide della vita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supporto emotivo</h3>
              <p className="text-gray-600">
                Uno spazio sicuro per esprimere e elaborare le proprie emozioni.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategie di coping</h3>
              <p className="text-gray-600">
                Sviluppo di strumenti pratici per gestire lo stress e le difficoltà.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risorse personali</h3>
              <p className="text-gray-600">
                Rafforzamento delle proprie capacità e risorse interne.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Perspective taking</h3>
              <p className="text-gray-600">
                Nuove prospettive e punti di vista sulle situazioni difficili.
              </p>
            </Card>
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
                Risposte alle domande più comuni sul sostegno psicologico.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Hai bisogno di supporto in un momento difficile?"
        description="Non sei solo. Contattami per un colloquio di sostegno e scopri come posso accompagnarti attraverso le sfide che stai affrontando."
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
