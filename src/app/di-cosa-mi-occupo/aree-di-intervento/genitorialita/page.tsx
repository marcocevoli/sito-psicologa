import { Metadata } from 'next';
import Link from 'next/link';
import { Baby, Heart, Users, Shield } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Genitorialità - Aree di Intervento',
  description: 'Supporto alla genitorialità, difficoltà educative e gestione delle relazioni familiari. Percorso terapeutico per genitori e famiglie.',
  openGraph: {
    title: 'Genitorialità - Dr.ssa Maria Rossi',
    description: 'Supporto specializzato per genitori e famiglie.',
  },
};

export default function GenitorialitaPage() {
  const faqItems = [
    {
      id: '1',
      title: 'A che età dei bambini è più utile il supporto alla genitorialità?',
      content: (
        <div>
          <p>Il supporto è utile in tutte le fasi dello sviluppo, dall'infanzia all'adolescenza. Ogni fase presenta sfide specifiche che possono beneficiare di un sostegno professionale.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'È necessario coinvolgere i bambini nelle sedute?',
      content: (
        <div>
          <p>Dipende dalla situazione. A volte è utile lavorare solo con i genitori, altre volte può essere benefico coinvolgere anche i bambini. La decisione viene presa insieme durante la valutazione.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Quanto tempo ci vuole per vedere miglioramenti?',
      content: (
        <div>
          <p>I primi miglioramenti si possono vedere già dopo 4-6 sedute, ma un percorso completo richiede generalmente 8-12 sedute, a seconda delle difficoltà specifiche.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Il supporto è utile anche per genitori single?',
      content: (
        <div>
          <p>Assolutamente sì. Il supporto alla genitorialità è utile per tutti i tipi di famiglie, incluse le famiglie monoparentali che possono affrontare sfide specifiche.</p>
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
                Genitorialità
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Supporto alla genitorialità, difficoltà educative e gestione delle relazioni familiari 
                con approcci terapeutici specializzati per genitori e famiglie.
              </p>
              <p className="text-lg text-gray-700">
                Ti accompagno nel percorso per sviluppare competenze genitoriali efficaci, gestire 
                le sfide educative e costruire relazioni familiari sane e positive.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pastel-pink/30 to-primary-100 rounded-2xl flex items-center justify-center">
                <Baby className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporto alla Genitorialità</h2>
              <p className="text-lg text-gray-700 mb-6">
                Essere genitore è una delle esperienze più gratificanti ma anche più impegnative della vita. 
                Il supporto alla genitorialità offre strumenti e strategie per affrontare le sfide educative, 
                migliorare la comunicazione familiare e costruire relazioni positive con i propri figli.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Le aree di intervento includono:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Gestione di comportamenti difficili e capricci</li>
                <li>Comunicazione efficace con bambini e adolescenti</li>
                <li>Gestione delle regole e dei limiti</li>
                <li>Sostegno durante le transizioni di sviluppo</li>
                <li>Gestione di separazioni e divorzi</li>
                <li>Supporto per genitori single</li>
                <li>Gestione di conflitti tra fratelli</li>
                <li>Sostegno per difficoltà scolastiche</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges by age */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sfide per Età
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ogni fase dello sviluppo presenta sfide specifiche che richiedono approcci diversi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prima Infanzia (0-5 anni)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Capricci e opposizione</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Disturbi del sonno</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Separazione e ansia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Regole e limiti</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Età Scolare (6-12 anni)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Difficoltà scolastiche</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Conflitti tra fratelli</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Gestione delle amicizie</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Responsabilità domestiche</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adolescenza (13-18 anni)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Conflitti e ribellione</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Privacy e autonomia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Gestione delle tecnologie</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Pressioni sociali</span>
                </li>
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
              Metodologie evidence-based per il supporto alla genitorialità e alle famiglie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Parent Training</h3>
              <p className="text-gray-600">
                Sviluppo di competenze genitoriali efficaci attraverso tecniche specifiche e pratiche.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia Familiare</h3>
              <p className="text-gray-600">
                Lavoro con l'intera famiglia per migliorare la comunicazione e le relazioni.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestione Comportamentale</h3>
              <p className="text-gray-600">
                Strategie per gestire comportamenti difficili e promuovere comportamenti positivi.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Baby className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supporto Emotivo</h3>
              <p className="text-gray-600">
                Sostegno emotivo per genitori che affrontano sfide specifiche o situazioni difficili.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Parenting strategies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Strategie Genitoriali Efficaci
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Approcci pratici per una genitorialità positiva e efficace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comunicazione Positiva</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ascolto attivo e empatico</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Messaggi chiari e specifici</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Riconoscimento delle emozioni</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Uso di "io" invece di "tu"</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestione dei Comportamenti</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Regole chiare e coerenti</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Conseguenze logiche e proporzionate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Rinforzo positivo dei comportamenti buoni</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Modellamento di comportamenti positivi</span>
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
              Benefici del supporto
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un supporto alla genitorialità porta benefici significativi per tutta la famiglia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Per i Genitori</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li>• Maggiore fiducia nelle proprie capacità</li>
                <li>• Riduzione dello stress genitoriale</li>
                <li>• Miglioramento della comunicazione</li>
                <li>• Strategie pratiche per situazioni difficili</li>
              </ul>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Per i Bambini</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li>• Comportamenti più positivi</li>
                <li>• Miglior autoregolazione</li>
                <li>• Maggiore sicurezza emotiva</li>
                <li>• Sviluppo di competenze sociali</li>
              </ul>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Per la Famiglia</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li>• Relazioni più armoniose</li>
                <li>• Riduzione dei conflitti</li>
                <li>• Maggiore coesione familiare</li>
                <li>• Ambiente domestico più sereno</li>
              </ul>
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
                Risposte alle domande più comuni sul supporto alla genitorialità.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto a sviluppare le tue competenze genitoriali?"
        description="Essere genitore non è sempre facile, ma con il supporto giusto puoi affrontare ogni sfida. Contattami per iniziare un percorso personalizzato che ti aiuterà a diventare il genitore che vuoi essere."
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
