import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Clock, Shield, Users } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Stress Lavoro-correlato - Aree di Intervento',
  description: 'Gestione dello stress professionale, burnout, difficoltà lavorative e work-life balance. Supporto specializzato per il benessere lavorativo.',
  openGraph: {
    title: 'Stress Lavoro-correlato - Dr.ssa Maria Rossi',
    description: 'Supporto specializzato per stress lavorativo e burnout.',
  },
};

export default function StressLavoroCorrelatoPage() {
  const faqItems = [
    {
      id: '1',
      title: 'Come distinguere lo stress normale dal burnout?',
      content: (
        <div>
          <p>Lo stress normale è temporaneo e si risolve con il riposo. Il burnout è caratterizzato da esaurimento emotivo, depersonalizzazione e ridotta efficacia professionale che persistono nel tempo.</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'È possibile prevenire il burnout?',
      content: (
        <div>
          <p>Sì, attraverso strategie di gestione dello stress, confini chiari tra lavoro e vita privata, e lo sviluppo di risorse personali. La prevenzione è sempre meglio della cura.</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Devo cambiare lavoro per risolvere lo stress?',
      content: (
        <div>
          <p>Non sempre. Spesso è possibile gestire lo stress lavorativo sviluppando nuove strategie e confini. La decisione di cambiare lavoro viene valutata insieme durante il percorso.</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Quanto tempo ci vuole per vedere miglioramenti?',
      content: (
        <div>
          <p>I primi miglioramenti si possono vedere dopo 4-6 sedute, ma un percorso completo richiede generalmente 8-12 sedute, a seconda della gravità della situazione.</p>
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
                Stress Lavoro-correlato
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gestione dello stress professionale, burnout, difficoltà lavorative e work-life balance 
                con supporto specializzato per il benessere lavorativo.
              </p>
              <p className="text-lg text-gray-700">
                Ti accompagno nel percorso per gestire lo stress lavorativo, prevenire il burnout 
                e ritrovare equilibrio tra vita professionale e personale.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-pastel-blue/30 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-24 h-24 text-primary-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cos'è lo Stress Lavoro-correlato</h2>
              <p className="text-lg text-gray-700 mb-6">
                Lo stress lavoro-correlato è una reazione fisiologica e psicologica a fattori di stress 
                presenti nell'ambiente lavorativo. Quando diventa eccessivo o prolungato, può portare 
                al burnout, una condizione di esaurimento emotivo, fisico e mentale.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I sintomi principali includono:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Esaurimento fisico ed emotivo</li>
                <li>Cinismo e distacco dal lavoro</li>
                <li>Ridotta efficacia professionale</li>
                <li>Irritabilità e frustrazione</li>
                <li>Difficoltà di concentrazione</li>
                <li>Disturbi del sonno</li>
                <li>Problemi fisici (mal di testa, tensione muscolare)</li>
                <li>Isolamento sociale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cause principali
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fattori organizzativi e personali che contribuiscono allo stress lavorativo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fattori Organizzativi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Carico di lavoro eccessivo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Scadenze irrealistiche</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Mancanza di controllo sul proprio lavoro</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Comunicazione inadeguata</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ambiente di lavoro tossico</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fattori Personali</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Perfezionismo eccessivo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Difficoltà nel dire "no"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Mancanza di equilibrio vita-lavoro</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Aspettative irrealistiche su se stessi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Scarse risorse di coping</span>
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
              Strategie personalizzate per gestire lo stress lavorativo e prevenire il burnout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestione dello Stress</h3>
              <p className="text-gray-600">
                Tecniche di rilassamento, respirazione e mindfulness per gestire lo stress quotidiano.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Time Management</h3>
              <p className="text-gray-600">
                Strategie per organizzare il tempo, priorizzare i compiti e gestire il carico di lavoro.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comunicazione Efficace</h3>
              <p className="text-gray-600">
                Miglioramento delle capacità comunicative per gestire conflitti e relazioni lavorative.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Sviluppo di confini chiari tra lavoro e vita privata per un equilibrio sostenibile.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Prevention strategies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Strategie di prevenzione
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Approccio proattivo per mantenere il benessere lavorativo nel tempo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Confini Chiari</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Definire orari di lavoro precisi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Non controllare email dopo l'orario</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Imparare a dire "no"</span>
                </li>
              </ul>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Care</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Esercizio fisico regolare</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Alimentazione equilibrata</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Sonno di qualità</span>
                </li>
              </ul>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risorse di Supporto</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Rete sociale di supporto</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Hobby e attività rilassanti</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Supporto professionale</span>
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
                Risposte alle domande più comuni sullo stress lavorativo e il burnout.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto a gestire lo stress lavorativo in modo efficace?"
        description="Non lasciare che lo stress lavorativo comprometta il tuo benessere. Contattami per sviluppare strategie personalizzate e ritrovare equilibrio tra lavoro e vita privata."
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
