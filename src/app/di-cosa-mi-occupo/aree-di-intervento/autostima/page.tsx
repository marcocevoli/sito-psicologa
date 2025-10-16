import { Metadata } from 'next';
import Link from 'next/link';
import { UserCheck, Heart, Shield, Users } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Autostima - Aree di Intervento',
  description: 'Sviluppo dell\'autostima, fiducia in sé stessi e percezione positiva di sé. Percorso terapeutico per rafforzare la sicurezza personale.',
  openGraph: {
    title: 'Autostima - Dr.ssa Maria Rossi',
    description: 'Sviluppo dell\'autostima e fiducia in sé stessi.',
  },
};

export default function AutostimaPage() {
  const faqItems = [
    {
      id: '1',
      title: 'Quanto tempo ci vuole per migliorare l\'autostima?',
      content: (
        <div>
          <p>L'autostima si sviluppa gradualmente. I primi miglioramenti si possono vedere dopo 6-8 sedute, ma un percorso completo richiede generalmente 12-16 sedute per consolidare i cambiamenti.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'È normale avere alti e bassi nell\'autostima?',
      content: (
        <div>
          <p>Sì, è normale avere fluttuazioni nell'autostima. L'obiettivo è sviluppare un'autostima più stabile e resiliente che non dipenda troppo dalle circostanze esterne.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'L\'autostima può essere influenzata dalle relazioni?',
      content: (
        <div>
          <p>Assolutamente sì. Le relazioni possono influenzare significativamente l'autostima. Lavoreremo anche su come sviluppare relazioni sane che supportino la tua autostima.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Posso lavorare sull\'autostima anche se ho altri problemi?',
      content: (
        <div>
          <p>Sì, l'autostima è spesso collegata ad altre difficoltà come ansia o depressione. Lavorare sull'autostima può migliorare anche altri aspetti del benessere psicologico.</p>
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
                Autostima
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sviluppo dell'autostima, fiducia in sé stessi e percezione positiva di sé 
                attraverso un percorso terapeutico personalizzato.
              </p>
              <p className="text-lg text-gray-700">
                Ti accompagno nel percorso per sviluppare una percezione più positiva di te stesso, 
                rafforzare la fiducia nelle tue capacità e costruire una base solida per il benessere psicologico.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pastel-pink/30 to-primary-100 rounded-2xl flex items-center justify-center">
                <UserCheck className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è l'Autostima</h2>
              <p className="text-lg text-gray-700 mb-6">
                L'autostima è la valutazione che facciamo di noi stessi, il modo in cui percepiamo il nostro valore 
                e le nostre capacità. Una sana autostima è fondamentale per il nostro benessere psicologico e influenza 
                ogni aspetto della nostra vita: dalle relazioni al lavoro, dalle decisioni quotidiane ai nostri obiettivi a lungo termine.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Una persona con sana autostima:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Si accetta per quello che è</li>
                <li>Ha fiducia nelle proprie capacità</li>
                <li>È in grado di affrontare le critiche costruttive</li>
                <li>Non dipende dall'approvazione esterna per sentirsi valida</li>
                <li>È resiliente di fronte alle difficoltà</li>
                <li>Ha relazioni sane e equilibrate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of low self-esteem */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Segnali di bassa autostima
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Riconoscere i segnali è il primo passo verso il miglioramento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comportamentali</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Critiche eccessive verso se stessi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Paura del giudizio altrui</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Difficoltà nel prendere decisioni</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Tendenza a evitare nuove sfide</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotivi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Sensibilità eccessiva alle critiche</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Sentimenti di inadeguatezza</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Paura del rifiuto</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Perfezionismo eccessivo</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Relazionali</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Difficoltà nel dire "no"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ricerca eccessiva di approvazione</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Relazioni sbilanciate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Isolamento sociale</span>
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
              Strategie personalizzate per sviluppare e rafforzare l'autostima.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto-compassione</h3>
              <p className="text-gray-600">
                Sviluppo di gentilezza e comprensione verso se stessi, trattandosi come un amico caro.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ristrutturazione Cognitiva</h3>
              <p className="text-gray-600">
                Identificazione e modifica dei pensieri negativi e autosvalutanti.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assertività</h3>
              <p className="text-gray-600">
                Sviluppo di capacità comunicative per esprimere bisogni e confini in modo rispettoso.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accettazione di Sé</h3>
              <p className="text-gray-600">
                Lavoro sull'accettazione delle proprie imperfezioni e unicità.
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
              Benefici del percorso
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un'autostima sana porta numerosi vantaggi in tutti gli aspetti della vita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefici personali</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Maggiore fiducia nelle proprie capacità</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Riduzione dell'ansia e dello stress</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Maggiore resilienza di fronte alle difficoltà</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Miglioramento del benessere generale</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefici relazionali</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Relazioni più sane ed equilibrate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Maggiore capacità di comunicare i propri bisogni</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Riduzione della dipendenza dall'approvazione altrui</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Maggiore capacità di stabilire confini sani</span>
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
                Risposte alle domande più comuni sullo sviluppo dell'autostima.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto a sviluppare una sana autostima?"
        description="L'autostima è una competenza che si può imparare e migliorare. Contattami per iniziare un percorso personalizzato che ti aiuterà a sviluppare fiducia in te stesso e percezione positiva di te."
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


