import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const footerNavigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Chi sono', href: '/chi-sono' },
    { name: 'Di cosa mi occupo', href: '/di-cosa-mi-occupo' },
    { name: 'Approccio terapeutico', href: '/approccio-terapeutico' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contatti', href: '/contatti' },
  ],
  terapie: [
    { name: 'Terapia individuale', href: '/di-cosa-mi-occupo/terapie/terapia-individuale' },
    { name: 'Terapia di coppia', href: '/di-cosa-mi-occupo/terapie/terapia-di-coppia' },
    { name: 'Sostegno psicologico', href: '/di-cosa-mi-occupo/terapie/sostegno-psicologico' },
    { name: 'Consulenza online', href: '/di-cosa-mi-occupo/terapie/consulenza-online' },
  ],
  aree: [
    { name: 'Ansia', href: '/di-cosa-mi-occupo/aree-di-intervento/ansia' },
    { name: 'Depressione', href: '/di-cosa-mi-occupo/aree-di-intervento/depressione' },
    { name: 'Stress lavoro-correlato', href: '/di-cosa-mi-occupo/aree-di-intervento/stress-lavoro-correlato' },
    { name: 'Autostima', href: '/di-cosa-mi-occupo/aree-di-intervento/autostima' },
    { name: 'Disturbi del sonno', href: '/di-cosa-mi-occupo/aree-di-intervento/disturbi-del-sonno' },
    { name: 'Genitorialità', href: '/di-cosa-mi-occupo/aree-di-intervento/genitorialita' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookie' },
    { name: 'Termini di servizio', href: '/termini' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MR</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Dr.ssa Maria Rossi
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Psicologa e Psicoterapeuta specializzata in terapia individuale, di coppia e sostegno psicologico.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <a href="tel:+393331234567" className="text-gray-600 hover:text-primary-600 transition-colors">
                  +39 333 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <a href="mailto:info@maria-rossi-psicologa.it" className="text-gray-600 hover:text-primary-600 transition-colors">
                  info@maria-rossi-psicologa.it
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                <div className="text-gray-600">
                  <p>Via Roma 123</p>
                  <p>20100 Milano</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-600 mt-0.5" />
                <div className="text-gray-600">
                  <p>Lun - Ven: 9:00 - 19:00</p>
                  <p>Sab: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigazione</h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terapie */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Terapie</h3>
            <ul className="space-y-3">
              {footerNavigation.terapie.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aree di Intervento */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Aree di Intervento</h3>
            <ul className="space-y-3">
              {footerNavigation.aree.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dr.ssa Maria Rossi. Tutti i diritti riservati.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 text-sm hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



