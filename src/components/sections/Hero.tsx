import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Dr.ssa{' '}
                <span className="text-gradient">Maria Rossi</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-6">
                Psicologa e Psicoterapeuta
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Ti accompagnerò nel tuo percorso di benessere psicologico attraverso un approccio 
              umanistico e professionale, creando uno spazio sicuro per la crescita personale.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Pazienti seguiti</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-600">Anni di esperienza</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2">
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">4.9</p>
                <p className="text-sm text-gray-600">Valutazione media</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contatti"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Prenota un colloquio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/chi-sono"
                className="btn-outline text-lg px-8 py-4"
              >
                Scopri chi sono
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/psicologa-hero.jpg"
                alt="Dr.ssa Maria Rossi - Psicologa e Psicoterapeuta"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Iscritta all'Albo</p>
                  <p className="text-sm text-gray-600">Ordine Psicologi</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Disponibile</p>
                  <p className="text-sm text-gray-600">Consulenze online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



