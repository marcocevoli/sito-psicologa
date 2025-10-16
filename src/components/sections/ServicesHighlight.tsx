import Link from 'next/link';
import { Heart, Users, MessageCircle, Globe } from 'lucide-react';

const services = [
  {
    title: 'Terapia Individuale',
    description: 'Un percorso personalizzato per affrontare ansia, depressione e migliorare il benessere psicologico.',
    icon: Heart,
    href: '/di-cosa-mi-occupo/terapie/terapia-individuale',
    features: ['Consulenza personalizzata', 'Percorso strutturato', 'Follow-up regolari'],
  },
  {
    title: 'Terapia di Coppia',
    description: 'Supporto per rafforzare la relazione e migliorare la comunicazione nella coppia.',
    icon: Users,
    href: '/di-cosa-mi-occupo/terapie/terapia-di-coppia',
    features: ['Mediazione di coppia', 'Comunicazione efficace', 'Risoluzione conflitti'],
  },
  {
    title: 'Consulenza Online',
    description: 'Sessione di supporto psicologico comode e sicure, direttamente da casa tua.',
    icon: Globe,
    href: '/di-cosa-mi-occupo/terapie/consulenza-online',
    features: ['Videochiamate sicure', 'Flessibilità orari', 'Privacy garantita'],
  },
];

export default function ServicesHighlight() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            I miei servizi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offro diversi percorsi terapeutici personalizzati per supportarti nel tuo cammino 
            verso il benessere psicologico e la crescita personale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group"
            >
              <div className="card-hover h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/di-cosa-mi-occupo"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <span>Scopri tutti i servizi</span>
            <MessageCircle className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}



