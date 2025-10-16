import Image from 'next/image';
import { Metadata } from 'next';
import { GraduationCap, Award, Users, Heart, Mail, Phone } from 'lucide-react';
import Card from '@/components/common/Card';
import CTABanner from '@/components/common/CTABanner';

export const metadata: Metadata = {
  title: 'Chi sono',
  description: 'Conosci la Dr.ssa Maria Rossi, psicologa e psicoterapeuta con oltre 10 anni di esperienza. Specializzata in terapia individuale, di coppia e sostegno psicologico.',
  openGraph: {
    title: 'Chi sono - Dr.ssa Maria Rossi',
    description: 'Conosci la Dr.ssa Maria Rossi, psicologa e psicoterapeuta con oltre 10 anni di esperienza.',
  },
};

export default function ChiSonoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chi sono
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sono la <strong>Dr.ssa Maria Rossi</strong>, psicologa e psicoterapeuta con oltre 
                10 anni di esperienza nel supporto psicologico di adulti e coppie.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Il mio approccio si basa sulla creazione di uno spazio sicuro e non giudicante, 
                dove ogni persona possa esplorare le proprie emozioni, pensieri e comportamenti 
                per raggiungere una maggiore consapevolezza e benessere psicologico.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/psicologa-photo.jpg"
                  alt="Dr.ssa Maria Rossi - Psicologa e Psicoterapeuta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le mie credenziali
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Formazione accademica, specializzazioni e iscrizioni professionali che garantiscono 
              la qualità del servizio offerto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Formazione</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Laurea in Psicologia</li>
                <li>Università degli Studi di Milano</li>
                <li>Specializzazione in Psicoterapia</li>
                <li>Approccio Cognitivo-Comportamentale</li>
              </ul>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Iscrizioni</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Ordine Psicologi Lombardia</li>
                <li>N. 12345</li>
                <li>Iscritta dal 2014</li>
                <li>Formazione continua ECM</li>
              </ul>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Esperienza</h3>
              <ul className="text-gray-600 space-y-2">
                <li>10+ anni di esperienza</li>
                <li>500+ pazienti seguiti</li>
                <li>Terapia individuale e di coppia</li>
                <li>Consulenze online specializzate</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach & Values */}
      <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Il mio approccio
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Empatia e Accoglienza</h3>
                    <p className="text-gray-600">
                      Creo uno spazio sicuro e non giudicante dove ogni persona possa sentirsi 
                      libera di esprimere le proprie emozioni e difficoltà.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborazione</h3>
                    <p className="text-gray-600">
                      Lavoriamo insieme per identificare obiettivi condivisi e sviluppare 
                      strategie personalizzate per il tuo benessere psicologico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professionalità</h3>
                    <p className="text-gray-600">
                      Utilizzo metodologie scientificamente validate e mi aggiorno costantemente 
                      per offrire il miglior supporto possibile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">I miei valori</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Rispetto:</strong> Ogni persona ha diritto alla propria dignità e unicità
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Confidenzialità:</strong> Privacy e riservatezza sono garantite in ogni momento
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Autenticità:</strong> Promuovo l'espressione autentica di sé
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Crescita:</strong> Credo nel potenziale di crescita di ogni individuo
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Benessere:</strong> L'obiettivo è il miglioramento della qualità di vita
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pronto per iniziare il tuo percorso?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sono qui per supportarti nel tuo cammino verso il benessere psicologico. 
              Contattami per un primo colloquio conoscitivo.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <Phone className="w-8 h-8 text-primary-600" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Chiamami</p>
                  <a href="tel:+393331234567" className="text-primary-600 hover:text-primary-700">
                    +39 333 123 4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <Mail className="w-8 h-8 text-primary-600" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Scrivimi</p>
                  <a href="mailto:info@maria-rossi-psicologa.it" className="text-primary-600 hover:text-primary-700">
                    info@maria-rossi-psicologa.it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Iniziamo insieme il tuo percorso di benessere"
        description="Prenota un primo colloquio conoscitivo per esplorare come posso aiutarti a raggiungere i tuoi obiettivi di benessere psicologico."
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



