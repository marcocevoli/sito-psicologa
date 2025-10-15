import { Metadata } from 'next';
import Link from 'next/link';
import { Moon, Clock, Heart, Shield } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Disturbi del Sonno - Aree di Intervento',
  description: 'Supporto per insonnia, difficoltà di addormentamento e problemi del sonno. Trattamento specializzato per migliorare la qualità del riposo.',
  openGraph: {
    title: 'Disturbi del Sonno - Dr.ssa Maria Rossi',
    description: 'Trattamento specializzato per disturbi del sonno e insonnia.',
  },
};

export default function DisturbiDelSonnoPage() {
  const faqItems = [
    {
      id: '1',
      title: 'Quanto tempo ci vuole per migliorare il sonno?',
      content: (
        <div>
          <p>I primi miglioramenti si possono vedere già dopo 2-3 settimane di trattamento. Un percorso completo richiede generalmente 6-8 sedute per consolidare i miglioramenti.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'È necessario assumere farmaci per dormire?',
      content: (
        <div>
          <p>Non sempre. La terapia cognitivo-comportamentale per l'insonnia (CBT-I) è spesso molto efficace senza farmaci. La decisione viene presa insieme al medico di base.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Posso lavorare sui disturbi del sonno se ho anche ansia?',
      content: (
        <div>
          <p>Sì, ansia e disturbi del sonno sono spesso collegati. Lavorare su entrambi gli aspetti può portare a miglioramenti significativi in entrambe le aree.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Cosa posso fare da solo per migliorare il sonno?',
      content: (
        <div>
          <p>Mantenere una routine regolare, evitare caffeina dopo le 14:00, creare un ambiente favorevole al sonno e praticare tecniche di rilassamento. Ti insegnerò strategie specifiche.</p>
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
                Disturbi del Sonno
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Supporto per insonnia, difficoltà di addormentamento e problemi del sonno 
                con approcci terapeutici evidence-based.
              </p>
              <p className="text-lg text-gray-700">
                Ti accompagno nel percorso per migliorare la qualità del sonno, sviluppare 
                abitudini salutari e ritrovare il riposo ristoratore necessario per il benessere quotidiano.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-pastel-blue/30 rounded-2xl flex items-center justify-center">
                <Moon className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è l'Insonnia</h2>
              <p className="text-lg text-gray-700 mb-6">
                L'insonnia è un disturbo del sonno caratterizzato da difficoltà nell'addormentarsi, 
                nel mantenere il sonno o nel sentirsi riposati al risveglio. Può essere acuta (breve termine) 
                o cronica (lungo termine) e può interferire significativamente con la qualità della vita quotidiana.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I sintomi principali includono:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Difficoltà ad addormentarsi (più di 30 minuti)</li>
                <li>Risvegli frequenti durante la notte</li>
                <li>Risveglio precoce senza riuscire a riaddormentarsi</li>
                <li>Sensazione di sonno non ristoratore</li>
                <li>Faticabilità durante il giorno</li>
                <li>Difficoltà di concentrazione e memoria</li>
                <li>Irritabilità e sbalzi d'umore</li>
                <li>Preoccupazioni eccessive riguardo al sonno</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of sleep disorders */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tipi di Disturbi del Sonno
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diverse forme di disturbi del sonno richiedono approcci terapeutici specifici.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insonnia Acuta</h3>
              <p className="text-gray-600 mb-4">
                Difficoltà del sonno di breve durata, spesso legate a stress o eventi specifici.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Durata inferiore a 3 mesi</li>
                <li>• Spesso legata a stress</li>
                <li>• Si risolve spontaneamente</li>
                <li>• Può beneficiare di supporto</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insonnia Cronica</h3>
              <p className="text-gray-600 mb-4">
                Disturbo del sonno persistente per almeno 3 mesi, che richiede trattamento specifico.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Durata superiore a 3 mesi</li>
                <li>• Richiede trattamento</li>
                <li>• Impatto significativo sulla vita</li>
                <li>• Spesso associata ad ansia</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disturbo del Ritmo Circadiano</h3>
              <p className="text-gray-600 mb-4">
                Alterazione del ciclo sonno-veglia naturale del corpo.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sonno in orari inappropriati</li>
                <li>• Difficoltà di adattamento</li>
                <li>• Spesso legato al lavoro</li>
                <li>• Richiede regolazione</li>
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
              Terapia Cognitivo-Comportamentale per l'Insonnia (CBT-I), approccio evidence-based.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Restrizione del Sonno</h3>
              <p className="text-gray-600">
                Graduale riduzione del tempo trascorso a letto per migliorare l'efficienza del sonno.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Moon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Controllo degli Stimoli</h3>
              <p className="text-gray-600">
                Associazione del letto solo con il sonno e l'intimità, eliminando attività di veglia.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rilassamento</h3>
              <p className="text-gray-600">
                Tecniche di rilassamento muscolare e respirazione per preparare mente e corpo al sonno.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ristrutturazione Cognitiva</h3>
              <p className="text-gray-600">
                Modifica dei pensieri e preoccupazioni che interferiscono con il sonno.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sleep hygiene */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Igiene del Sonno
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Regole fondamentali per promuovere un sonno di qualità.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Durante il giorno</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Esposizione alla luce naturale al mattino</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Esercizio fisico regolare (non nelle 4 ore prima del sonno)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Evitare caffeina dopo le 14:00</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Limitare i sonnellini a massimo 20 minuti</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prima di dormire</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Routine rilassante 1 ora prima del sonno</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Evitare schermi 1 ora prima di dormire</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ambiente fresco, buio e silenzioso</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Evitare pasti pesanti nelle 3 ore prima</span>
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
              Benefici del trattamento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un sonno di qualità migliora significativamente la qualità della vita.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fisici</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Maggiore energia durante il giorno</li>
                <li>• Miglioramento del sistema immunitario</li>
                <li>• Riduzione del rischio cardiovascolare</li>
                <li>• Miglioramento della memoria</li>
              </ul>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Psicologici</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Miglioramento dell'umore</li>
                <li>• Riduzione dell'ansia e dello stress</li>
                <li>• Maggiore capacità di concentrazione</li>
                <li>• Miglioramento delle relazioni</li>
              </ul>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lavorativi</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Maggiore produttività</li>
                <li>• Migliori performance cognitive</li>
                <li>• Riduzione degli errori</li>
                <li>• Miglior work-life balance</li>
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
                Risposte alle domande più comuni sui disturbi del sonno.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto a ritrovare il riposo ristoratore?"
        description="Un sonno di qualità è fondamentale per il benessere. Contattami per iniziare un percorso personalizzato che ti aiuterà a migliorare la qualità del tuo sonno e della tua vita."
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
