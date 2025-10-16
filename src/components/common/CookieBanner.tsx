'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-900 font-medium mb-1">
                Utilizziamo i cookie per migliorare la tua esperienza
              </p>
              <p className="text-sm text-gray-600">
                Questo sito utilizza cookie tecnici e di analisi per fornirti la migliore esperienza di navigazione. 
                Continuando a navigare accetti il loro utilizzo.{' '}
                <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                  Leggi la privacy policy
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Rifiuta
            </button>
            <button
              onClick={acceptCookies}
              className="btn-primary text-sm"
            >
              Accetta
            </button>
            <button
              onClick={acceptCookies}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



