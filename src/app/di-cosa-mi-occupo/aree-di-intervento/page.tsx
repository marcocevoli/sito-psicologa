import Link from 'next/link';
import { Metadata } from 'next';
import { Brain, Heart, Briefcase, UserCheck, Moon, Baby } from 'lucide-react';
import Card from '@/components/common/Card';

export const metadata: Metadata = {
  title: 'Aree di Intervento - Di cosa mi occupo',
  description: 'Aree di intervento: ansia, depressione, stress lavoro-correlato, autostima, disturbi del sonno, genitorialità. Specializzata nel supporto psicologico.',
  openGraph: {
    title: 'Aree di Intervento - Dr.ssa Maria Rossi',
    description: 'Aree di intervento specializzate per il benessere psicologico.',
  },
};

const areeIntervento = [
  {
    title: 'Ansia',
    description: 'Gestione dell\'ansia generalizzata, attacchi di panico, fobie e preoccupazioni eccessive.',
    icon: Brain,
    href: '/di-cosa-mi-occupo/aree-di-intervento/ansia',
  },
  {
    title: 'Depressione',
    description: 'Supporto per depressione, umore depresso, perdita di interesse e difficoltà emotive.',
    icon: Heart,
    href: '/di-cosa-mi-occupo/aree-di-intervento/depressione',
  },
  {
    title: 'Stress Lavoro-correlato',
    description: 'Gestione dello stress professionale, burnout, difficoltà lavorative e work-life balance.',
    icon: Briefcase,
    href: '/di-cosa-mi-occupo/aree-di-intervento/stress-lavoro-correlato',
  },
  {
    title: 'Autostima',
    description: 'Sviluppo dell\'autostima, fiducia in sé stessi e percezione positiva di sé.',
    icon: UserCheck,
    href: '/di-cosa-mi-occupo/aree-di-intervento/autostima',
  },
  {
    title: 'Disturbi del Sonno',
    description: 'Supporto per insonnia, difficoltà di addormentamento e problemi del sonno.',
    icon: Moon,
    href: '/di-cosa-mi-occupo/aree-di-intervento/disturbi-del-sonno',
  },
  {
    title: 'Genitorialità',
    description: 'Supporto alla genitorialità, difficoltà educative e gestione delle relazioni familiari.',
    icon: Baby,
    href: '/di-cosa-mi-occupo/aree-di-intervento/genitorialita',
  },
];

export default function AreeInterventoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Aree di intervento
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Specializzata nel supporto psicologico per diverse aree di difficoltà e crescita personale. 
              Ogni area richiede un approccio specifico e personalizzato.
            </p>
            <p className="text-lg text-gray-700">
              Utilizzo metodologie evidence-based e un approccio integrato per offrirti il miglior 
              supporto possibile per ogni specifica difficoltà.
            </p>
          </div>
        </div>
      </section>

      {/* Aree Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areeIntervento.map((area) => (
              <Link key={area.title} href={area.href} className="group">
                <Card hover className="h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                      <area.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approccio Integrato */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Il mio approccio integrato
              </h2>
              <p className="text-lg text-gray-600">
                Ogni area di intervento richiede un approccio specifico, ma sempre basato su 
                metodologie scientificamente validate e un approccio umanistico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Metodologie Evidence-Based</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Terapia Cognitivo-Comportamentale (CBT)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Mindfulness e tecniche di rilassamento</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Terapia centrata sulla persona</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Approccio sistemico-relazionale</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Principi Guida</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Personalizzazione del trattamento</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Collaborazione attiva</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Rispetto dell'autonomia</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Continuità e follow-up</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Valutazione */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Processo di valutazione e trattamento
              </h2>
              <p className="text-lg text-gray-600">
                Ogni percorso inizia con una valutazione approfondita per identificare 
                l'approccio più adatto alle tue esigenze specifiche.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Valutazione</h3>
                <p className="text-sm text-gray-600">Analisi approfondita della situazione</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pianificazione</h3>
                <p className="text-sm text-gray-600">Sviluppo di un piano personalizzato</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trattamento</h3>
                <p className="text-sm text-gray-600">Implementazione delle strategie</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Follow-up</h3>
                <p className="text-sm text-gray-600">Monitoraggio e consolidamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-pastel-blue/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Hai domande su una specifica area?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ogni area di intervento richiede un approccio specifico. Contattami per 
              una consulenza personalizzata e scopri come posso supportarti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="btn-primary text-lg px-8 py-4">
                Prenota una consulenza
              </Link>
              <Link href="/di-cosa-mi-occupo/terapie" className="btn-outline text-lg px-8 py-4">
                Scopri le terapie
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



