'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Chi sono', href: '/chi-sono' },
  {
    name: 'Di cosa mi occupo',
    href: '/di-cosa-mi-occupo',
    children: [
      {
        name: 'Terapie',
        href: '/di-cosa-mi-occupo/terapie',
        children: [
          { name: 'Terapia individuale', href: '/di-cosa-mi-occupo/terapie/terapia-individuale' },
          { name: 'Terapia di coppia', href: '/di-cosa-mi-occupo/terapie/terapia-di-coppia' },
          { name: 'Sostegno psicologico', href: '/di-cosa-mi-occupo/terapie/sostegno-psicologico' },
          { name: 'Consulenza online', href: '/di-cosa-mi-occupo/terapie/consulenza-online' },
        ],
      },
      {
        name: 'Aree di intervento',
        href: '/di-cosa-mi-occupo/aree-di-intervento',
        children: [
          { name: 'Ansia', href: '/di-cosa-mi-occupo/aree-di-intervento/ansia' },
          { name: 'Depressione', href: '/di-cosa-mi-occupo/aree-di-intervento/depressione' },
          { name: 'Stress lavoro-correlato', href: '/di-cosa-mi-occupo/aree-di-intervento/stress-lavoro-correlato' },
          { name: 'Autostima', href: '/di-cosa-mi-occupo/aree-di-intervento/autostima' },
          { name: 'Disturbi del sonno', href: '/di-cosa-mi-occupo/aree-di-intervento/disturbi-del-sonno' },
          { name: 'Genitorialità', href: '/di-cosa-mi-occupo/aree-di-intervento/genitorialita' },
        ],
      },
    ],
  },
  { name: 'Approccio terapeutico', href: '/approccio-terapeutico' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contatti', href: '/contatti' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MR</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Dr.ssa Maria Rossi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                >
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                      activeDropdown === item.name ? 'opacity-100 visible' : ''
                    }`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <div key={child.name}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {child.name}
                        </Link>
                        {child.children && (
                          <div className="ml-4 space-y-1">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.name}
                                href={subChild.href}
                                className="block px-4 py-1 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                              >
                                {subChild.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link href="/contatti" className="btn-primary">
              Prenota un colloquio
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <div key={child.name}>
                          <Link
                            href={child.href}
                            className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                          {child.children && (
                            <div className="ml-4 space-y-1">
                              {child.children.map((subChild) => (
                                <Link
                                  key={subChild.name}
                                  href={subChild.href}
                                  className="block px-3 py-1 text-sm text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subChild.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contatti"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prenota un colloquio
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}



