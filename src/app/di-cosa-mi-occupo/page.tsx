import Link from 'next/link';
import { Metadata } from 'next';
import { Heart, Users, MessageCircle, Globe, Brain, Baby, Moon, Briefcase, UserCheck, Home } from 'lucide-react';
import Card from '@/components/common/Card';

export const metadata: Metadata = {
  title: 'Di cosa mi occupo',
  description: 'Terapie e aree di intervento: terapia individuale, terapia di coppia, sostegno psicologico, consulenza online. Specializzata in ansia, depressione, stress, autostima e genitorialità.',
  openGraph: {
    title: 'Di cosa mi occupo - Dr.ssa Maria Rossi',
    description: 'Terapie e aree di intervento per il benessere psicologico.',
  },
};

const terapie = [
  {
    title: 'Terapia Individuale',
    description: 'Un percorso personalizzato per affrontare difficoltà personali, sviluppare consapevolezza e migliorare il benessere psicologico.',
    icon: UserCheck,
    href: '/di-cosa-mi-occupo/terapie/terapia-individuale',
    features: ['Percorso personalizzato', 'Consapevolezza di sé', 'Gestione emozioni', 'Crescita personale'],
  },
  {
    title: 'Terapia di Coppia',
    description: 'Supporto per rafforzare la relazione, migliorare la comunicazione e risolvere conflitti nella coppia.',
    icon: Heart,
    href: '/di-cosa-mi-occupo/terapie/terapia-di-coppia',
    features: ['Comunicazione efficace', 'Risoluzione conflitti', 'Intimità emotiva', 'Progetti condivisi'],
  },
  {
    title: 'Sostegno Psicologico',
    description: 'Supporto psicologico per affrontare momenti difficili, transizioni di vita e situazioni stressanti.',
    icon: MessageCircle,
    href: '/di-cosa-mi-occupo/terapie/sostegno-psicologico',
    features: ['Momenti difficili', 'Transizioni di vita', 'Supporto emotivo', 'Strategie di coping'],
  },
  {
    title: 'Consulenza Online',
    description: 'Sessione di supporto psicologico comode e sicure, direttamente da casa tua, con la stessa qualità delle sedute in presenza.',
    icon: Globe,
    href: '/di-cosa-mi-occupo/terapie/consulenza-online',
    features: ['Videochiamate sicure', 'Flessibilità orari', 'Privacy garantita', 'Stessa qualità'],
  },
];

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

export default function DiCosaMiOccupoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Di cosa mi occupo
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Offro diversi percorsi terapeutici e di supporto psicologico per accompagnarti 
              nel tuo cammino verso il benessere mentale e la crescita personale.
            </p>
            <p className="text-lg text-gray-700">
              Ogni percorso è personalizzato in base alle tue esigenze specifiche e agli obiettivi 
              che desideri raggiungere insieme.
            </p>
          </div>
        </div>
      </section>

      {/* Terapie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le mie terapie
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diversi approcci terapeutici per supportarti nel raggiungimento dei tuoi obiettivi 
              di benessere psicologico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {terapie.map((terapia) => (
              <Link key={terapia.title} href={terapia.href} className="group">
                <Card hover className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                      <terapia.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {terapia.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {terapia.description}
                      </p>
                      <ul className="space-y-2">
                        {terapia.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Aree di Intervento */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aree di intervento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specializzata nel supporto psicologico per diverse aree di difficoltà e crescita personale.
            </p>
          </div>

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

      {/* Processo Terapeutico */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Come funziona il percorso terapeutico
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un processo strutturato e personalizzato per accompagnarti verso il benessere psicologico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primo colloquio</h3>
              <p className="text-gray-600">
                Incontro conoscitivo per comprendere le tue esigenze, obiettivi e stabilire 
                un rapporto di fiducia reciproca.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Percorso personalizzato</h3>
              <p className="text-gray-600">
                Sviluppo di un piano terapeutico su misura per te, con obiettivi chiari 
                e strategie specifiche.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crescita e benessere</h3>
              <p className="text-gray-600">
                Accompagnamento costante nel processo di cambiamento verso il raggiungimento 
                dei tuoi obiettivi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-pastel-blue/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pronto per iniziare il tuo percorso?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contattami per un primo colloquio conoscitivo e scopri come posso supportarti 
              nel tuo cammino verso il benessere psicologico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="btn-primary text-lg px-8 py-4">
                Prenota un colloquio
              </Link>
              <Link href="/approccio-terapeutico" className="btn-outline text-lg px-8 py-4">
                Scopri il mio approccio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



