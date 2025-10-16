import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Shield, Clock, Video } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Consulenza Online',
  description: 'Sessione di supporto psicologico comode e sicure, direttamente da casa tua, con la stessa qualità delle sedute in presenza.',
  openGraph: {
    title: 'Consulenza Online - Dr.ssa Maria Rossi',
    description: 'Supporto psicologico online comodo e sicuro.',
  },
};

export default function ConsulenzaOnlinePage() {
  const faqItems = [
    {
      id: '1',
      title: 'Le consulenze online sono efficaci quanto quelle in presenza?',
      content: (
        <div>
          <p>Sì, numerose ricerche dimostrano che la terapia online è altrettanto efficace di quella in presenza. Mantengo la stessa qualità e professionalità delle sedute tradizionali.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'Come garantite la privacy e la sicurezza?',
      content: (
        <div>
          <p>Utilizzo piattaforme sicure e protette, conformi al GDPR. La confidenzialità è garantita dal segreto professionale e da protocolli di sicurezza avanzati.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Che tipo di connessione internet serve?',
      content: (
        <div>
          <p>È sufficiente una connessione stabile di almeno 1 Mbps. Ti fornirò tutte le istruzioni tecniche necessarie per preparare al meglio la sessione.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Posso scegliere tra online e in presenza?',
      content: (
        <div>
          <p>Assolutamente sì. Puoi decidere di volta in volta la modalità che preferisci, o combinare entrambe secondo le tue esigenze.</p>
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
                Consulenza Online
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sessione di supporto psicologico comode e sicure, direttamente da casa tua, 
                con la stessa qualità delle sedute in presenza.
              </p>
              <p className="text-lg text-gray-700">
                La tecnologia al servizio del benessere psicologico: accessibilità, comodità 
                e professionalità unite per il tuo percorso di crescita.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-pastel-blue/30 rounded-2xl flex items-center justify-center">
                <Globe className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è la Consulenza Online</h2>
              <p className="text-lg text-gray-700 mb-6">
                La consulenza online è una modalità innovativa di supporto psicologico che utilizza 
                tecnologie sicure per offrire sessioni terapeutiche attraverso videochiamate. 
                Mantiene la stessa efficacia e professionalità delle sedute tradizionali, 
                offrendo maggiore flessibilità e accessibilità.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Attraverso questa modalità, puoi beneficiare di:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Comodità e flessibilità negli orari</li>
                <li>Accessibilità da qualsiasi luogo</li>
                <li>Riduzione dei tempi di spostamento</li>
                <li>Maggiore privacy nel tuo ambiente</li>
                <li>Stessa qualità delle sedute in presenza</li>
                <li>Continuità del percorso anche in situazioni particolari</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vantaggi della Consulenza Online
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La tecnologia al servizio del benessere psicologico per una maggiore accessibilità.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibilità</h3>
              <p className="text-gray-600">
                Accedi al supporto psicologico da qualsiasi luogo, eliminando le barriere geografiche.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flessibilità</h3>
              <p className="text-gray-600">
                Maggiore flessibilità negli orari e possibilità di sessioni anche in orari serali.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy</h3>
              <p className="text-gray-600">
                Maggiore privacy nel tuo ambiente domestico, utilizzando piattaforme sicure e protette.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualità</h3>
              <p className="text-gray-600">
                Stessa qualità e professionalità delle sedute in presenza, con tecnologie avanzate.
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
              Un processo semplice e sicuro per accedere al supporto psicologico online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prenotazione</h3>
              <p className="text-gray-600">
                Prenota la tua sessione online e ricevi le istruzioni tecniche per preparare 
                l'ambiente ottimale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connessione sicura</h3>
              <p className="text-gray-600">
                Accedi alla sessione attraverso una piattaforma sicura e protetta, 
                garantendo privacy e confidenzialità.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sessione terapeutica</h3>
              <p className="text-gray-600">
                Svolgi la tua sessione con la stessa qualità e professionalità delle sedute 
                in presenza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical requirements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Requisiti tecnici
              </h2>
              <p className="text-lg text-gray-600">
                Tutto quello che ti serve per una sessione online di qualità.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connessione Internet</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Connessione stabile di almeno 1 Mbps</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>WiFi o connessione cablata</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Ambiente silenzioso e privato</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dispositivi</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Computer, tablet o smartphone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Camera e microfono funzionanti</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Browser aggiornato</span>
                  </li>
                </ul>
              </Card>
            </div>
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
                Risposte alle domande più comuni sulla consulenza online.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto per una consulenza online?"
        description="Scopri la comodità e l'efficacia del supporto psicologico online. Prenota la tua prima sessione e inizia il tuo percorso di benessere da casa tua."
        primaryAction={{
          text: 'Prenota una consulenza online',
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


