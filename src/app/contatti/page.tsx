'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

// Note: This would normally be in a separate file
const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta la Dr.ssa Maria Rossi per prenotare un colloquio. Studio a Milano, consulenze online disponibili. Telefono, email e form contatto.',
  openGraph: {
    title: 'Contatti - Dr.ssa Maria Rossi',
    description: 'Contatta la Dr.ssa Maria Rossi per prenotare un colloquio.',
  },
};

interface FormData {
  nome: string;
  email: string;
  telefono: string;
  messaggio: string;
  consenso: boolean;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContattiPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    consenso: false,
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Invio in corso...' });

    try {
      // In production, this would be a real API call to Formspree or Netlify Forms
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      setFormStatus({
        type: 'success',
        message: 'Messaggio inviato con successo! Ti risponderò entro 24 ore.',
      });
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        messaggio: '',
        consenso: false,
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Errore nell\'invio del messaggio. Riprova più tardi o contattami direttamente.',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-pastel-blue/10 to-pastel-pink/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contattami
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sono qui per supportarti nel tuo percorso di benessere psicologico. 
              Contattami per un primo colloquio conoscitivo o per qualsiasi domanda.
            </p>
            <p className="text-lg text-gray-700">
              Ti risponderò entro 24 ore e potremo programmare insieme un appuntamento 
              che si adatti alle tue esigenze.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informazioni di contatto
              </h2>

              <div className="space-y-6">
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Studio
                      </h3>
                      <p className="text-gray-600">
                        Via Roma 123<br />
                        20100 Milano<br />
                        <span className="text-sm text-gray-500">
                          (Metro MM1 - Porta Venezia)
                        </span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Telefono
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <a 
                          href="tel:+393331234567"
                          className="hover:text-primary-600 transition-colors"
                        >
                          +39 333 123 4567
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        Rispondo dal lunedì al venerdì, 9:00-19:00
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <a 
                          href="mailto:info@maria-rossi-psicologa.it"
                          className="hover:text-primary-600 transition-colors"
                        >
                          info@maria-rossi-psicologa.it
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        Ti rispondo entro 24 ore
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Orari
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Lun - Ven: 9:00 - 19:00</p>
                        <p>Sabato: 9:00 - 13:00</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Consulenze online disponibili anche in orari serali
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/393331234567?text=Ciao%20Dr.ssa%20Rossi,%20vorrei%20prenotare%20un%20colloquio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <span>Scrivimi su WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Invia un messaggio
              </h2>

              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Message */}
                  {formStatus.type !== 'idle' && (
                    <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : formStatus.type === 'error'
                        ? 'bg-red-50 text-red-800 border border-red-200'
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}>
                      {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                      {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome e cognome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Descrivi brevemente la tua situazione e come posso aiutarti..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consenso"
                      name="consenso"
                      checked={formData.consenso}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="consenso" className="text-sm text-gray-600">
                      Acconsento al trattamento dei miei dati personali secondo la{' '}
                      <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                        privacy policy
                      </a>{' '}
                      *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className="w-full justify-center"
                  >
                    {formStatus.type === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Invia messaggio
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Come raggiungermi
            </h2>
            <p className="text-lg text-gray-600">
              Il mio studio si trova in centro a Milano, facilmente raggiungibile con i mezzi pubblici.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Mappa interattiva<br />
                  <span className="text-sm text-gray-500">
                    Via Roma 123, Milano - Metro MM1 Porta Venezia
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Metro</h3>
              <p className="text-gray-600">MM1 Porta Venezia<br />5 minuti a piedi</p>
            </Card>
            <Card className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Tram</h3>
              <p className="text-gray-600">Linee 9, 29, 30<br />Fermata Corso Buenos Aires</p>
            </Card>
            <Card className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Parcheggio</h3>
              <p className="text-gray-600">Parcheggi pubblici<br />nelle vicinanze</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}



