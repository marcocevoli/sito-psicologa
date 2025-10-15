'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Testimonial from '@/components/common/Testimonial';

const testimonials = [
  {
    id: '1',
    content: 'La Dott.ssa Rossi mi ha aiutato a superare un periodo difficile della mia vita. Il suo approccio empatico e professionale mi ha permesso di trovare la forza per affrontare le mie paure.',
    author: 'Anna M.',
    role: 'Terapia individuale',
    rating: 5,
  },
  {
    id: '2',
    content: 'Grazie alle sedute di coppia, io e mio marito abbiamo imparato a comunicare meglio e a risolvere i nostri conflitti in modo costruttivo. Consiglio vivamente.',
    author: 'Marco e Laura',
    role: 'Terapia di coppia',
    rating: 5,
  },
  {
    id: '3',
    content: 'Le consulenze online sono state fondamentali durante il lockdown. La Dott.ssa Rossi è sempre stata disponibile e professionale, anche a distanza.',
    author: 'Giulia R.',
    role: 'Consulenza online',
    rating: 5,
  },
  {
    id: '4',
    content: 'Un professionista di grande valore. Mi ha aiutato a lavorare sulla mia autostima e a sviluppare strategie efficaci per gestire l\'ansia.',
    author: 'Francesco T.',
    role: 'Terapia individuale',
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cosa dicono i miei pazienti
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La soddisfazione dei miei pazienti è la mia priorità. Ecco alcune testimonianze 
            di chi ha intrapreso un percorso terapeutico con me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Testimonial precedente"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Testimonial successivo"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Vai al testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600 mb-2">98%</p>
            <p className="text-gray-600">Soddisfazione pazienti</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600 mb-2">500+</p>
            <p className="text-gray-600">Pazienti seguiti</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600 mb-2">4.9/5</p>
            <p className="text-gray-600">Valutazione media</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600 mb-2">10+</p>
            <p className="text-gray-600">Anni di esperienza</p>
          </div>
        </div>
      </div>
    </section>
  );
}

