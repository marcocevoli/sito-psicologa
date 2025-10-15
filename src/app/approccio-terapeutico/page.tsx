import { Metadata } from 'next';
import { Heart, Users, Brain, Shield, BookOpen, Clock } from 'lucide-react';
import Card from '@/components/common/Card';
import Accordion from '@/components/common/Accordion';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Approccio terapeutico',
  description: 'Scopri il mio approccio terapeutico basato su metodologie scientificamente validate, empatia e professionalità per il tuo benessere psicologico.',
  openGraph: {
    title: 'Approccio terapeutico - Dr.ssa Maria Rossi',
    description: 'Il mio approccio terapeutico per il benessere psicologico.',
  },
};

const metodologie = [
  {
    title: 'Terapia Cognitivo-Comportamentale (CBT)',
    description: 'Approccio evidence-based che si concentra sui pensieri, emozioni e comportamenti per promuovere cambiamenti positivi.',
    icon: Brain,
  },
  {
    title: 'Terapia Centrata sulla Persona',
    description: 'Approccio umanistico che valorizza l\'esperienza soggettiva e il potenziale di crescita di ogni individuo.',
    icon: Heart,
  },
  {
    title: 'Terapia Sistemica',
    description: 'Approccio che considera l\'individuo nel contesto delle sue relazioni e sistemi di appartenenza.',
    icon: Users,
  },
];

const principi = [
  {
    title: 'Empatia e Accoglienza',
    description: 'Creo uno spazio sicuro e non giudicante dove ogni persona possa sentirsi libera di esprimere le proprie emozioni e difficoltà.',
  },
  {
    title: 'Collaborazione Attiva',
    description: 'Lavoriamo insieme come una squadra per identificare obiettivi condivisi e sviluppare strategie personalizzate.',
  },
  {
    title: 'Rispetto dell\'Autonomia',
    description: 'Rispetto il ritmo e le scelte di ogni persona, promuovendo la sua autonomia nel processo di crescita.',
  },
  {
    title: 'Evidenza Scientifica',
    description: 'Utilizzo metodologie e tecniche scientificamente validate e mi aggiorno costantemente sulla ricerca più recente.',
  },
];

const faqItems = [
  {
    id: '1',
    title: 'Quanto dura una seduta?',
    content: (
      <div>
        <p>Le sedute individuali durano generalmente 50 minuti, mentre le sedute di coppia possono durare 60-90 minuti. Per le consulenze online, manteniamo la stessa durata delle sedute in presenza.</p>
      </div>
    ),
  },
  {
    id: '2',
    title: 'Con che frequenza si svolgono le sedute?',
    content: (
      <div>
        <p>La frequenza delle sedute viene stabilita insieme in base alle tue esigenze e agli obiettivi terapeutici. Generalmente si inizia con sedute settimanali, che possono poi essere modulate nel corso del percorso.</p>
      </div>
    ),
  },
  {
    id: '3',
    title: 'Come garantite la privacy e la confidenzialità?',
    content: (
      <div>
        <p>La confidenzialità è garantita dal segreto professionale e dal Codice Deontologico degli Psicologi. Le informazioni condivise durante le sedute sono strettamente riservate e non vengono divulgate senza il tuo consenso esplicito.</p>
      </div>
    ),
  },
  {
    id: '4',
    title: 'Come funzionano le sedute online?',
    content: (
      <div>
        <p>Le sedute online si svolgono tramite piattaforme sicure e protette, con la stessa qualità e professionalità delle sedute in presenza. Ti fornirò tutte le istruzioni necessarie per accedere alle sessioni.</p>
      </div>
    ),
  },
  {
    id: '5',
    title: 'Quando è il momento di iniziare una terapia?',
    content: (
      <div>
        <p>È il momento giusto quando senti che le difficoltà che stai vivendo interferiscono significativamente con la tua vita quotidiana, le tue relazioni o il tuo benessere generale. Il primo colloquio ci aiuterà a valutare insieme la situazione.</p>
      </div>
    ),
  },
];

export default function ApproccioTerapeuticoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Il mio approccio terapeutico
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Il mio approccio si basa sulla creazione di uno spazio sicuro e accogliente, 
              dove ogni persona possa esplorare le proprie emozioni e sviluppare strategie 
              efficaci per il proprio benessere psicologico.
            </p>
            <p className="text-lg text-gray-700">
              Utilizzo metodologie scientificamente validate, integrate con un approccio 
              umanistico che valorizza l'unicità di ogni individuo.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le metodologie che utilizzo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Approcci terapeutici evidence-based e tecniche specifiche per supportarti 
              nel tuo percorso di crescita e benessere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {metodologie.map((metodologia) => (
              <Card key={metodologia.title} className="text-center h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <metodologia.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {metodologia.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {metodologia.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principi */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I principi che mi guidano
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Valori e principi fondamentali che caratterizzano il mio approccio professionale 
              e il rapporto terapeutico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principi.map((principio, index) => (
              <Card key={index} className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary-600 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {principio.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principio.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modalità delle Sedute */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Modalità delle sedute
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flessibilità e personalizzazione per adattarmi alle tue esigenze e preferenze.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">In presenza</h3>
              <p className="text-gray-600 mb-4">
                Sedute nel mio studio privato a Milano, in un ambiente confortevole e riservato.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Studio privato e confortevole</li>
                <li>• Ambiente riservato e sicuro</li>
                <li>• Contatto diretto e immediato</li>
              </ul>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online</h3>
              <p className="text-gray-600 mb-4">
                Consulenze psicologiche online tramite videochiamate sicure e protette.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Videochiamate sicure</li>
                <li>• Stessa qualità delle sedute</li>
                <li>• Flessibilità di orari</li>
              </ul>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy e Sicurezza</h3>
              <p className="text-gray-600 mb-4">
                Massima riservatezza e protezione dei tuoi dati personali e delle informazioni condivise.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Segreto professionale</li>
                <li>• Piattaforme sicure</li>
                <li>• GDPR compliant</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Etica e Privacy */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Etica professionale e privacy
              </h2>
              <p className="text-lg text-gray-600">
                I principi etici e le garanzie di privacy che caratterizzano la mia pratica professionale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Codice Deontologico</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Rispetto del segreto professionale</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Consenso informato per ogni intervento</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Competenza e formazione continua</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Rispetto dell'autonomia del paziente</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy e GDPR</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Trattamento dati conforme al GDPR</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Conservazione sicura delle informazioni</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Diritto all'oblio e alla portabilità</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Trasparenza nel trattamento dati</span>
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
                Risposte alle domande più comuni sul mio approccio terapeutico e le modalità di lavoro.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Iniziamo insieme il tuo percorso di benessere"
        description="Contattami per un primo colloquio conoscitivo e scopri come il mio approccio terapeutico può supportarti nel raggiungimento dei tuoi obiettivi."
        primaryAction={{
          text: 'Prenota un colloquio',
          href: '/contatti',
        }}
        secondaryAction={{
          text: 'Scopri i miei servizi',
          href: '/di-cosa-mi-occupo',
        }}
      />
    </>
  );
}

