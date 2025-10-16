import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy e trattamento dei dati personali del sito della Dr.ssa Maria Rossi.',
};

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Ultima modifica: {new Date().toLocaleDateString('it-IT')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Informativa sul trattamento dei dati personali
            </h2>
            
            <p className="mb-6">
              La presente informativa descrive le modalità del trattamento dei dati personali 
              degli utenti che consultano il sito web della Dr.ssa Maria Rossi, accessibile 
              all'indirizzo <strong>sito-psicologa.vercel.app</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Titolare del trattamento
            </h3>
            <p className="mb-6">
              <strong>Dr.ssa Maria Rossi</strong><br />
              Psicologa e Psicoterapeuta<br />
              Iscritta all'Ordine degli Psicologi della Lombardia n. 12345<br />
              Email: info@maria-rossi-psicologa.it<br />
              Telefono: +39 333 123 4567<br />
              Studio: Via Roma 123, 20100 Milano
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tipi di dati raccolti
            </h3>
            <p className="mb-4">Tra i dati personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Dati di navigazione (indirizzo IP, browser, sistema operativo)</li>
              <li>Dati forniti volontariamente (nome, email, telefono, messaggi tramite form contatto)</li>
              <li>Cookie e tecnologie simili</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Finalità del trattamento
            </h3>
            <p className="mb-4">I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fornire i servizi richiesti dall'utente</li>
              <li>Rispondere alle richieste di contatto</li>
              <li>Migliorare il funzionamento del sito</li>
              <li>Rispettare gli obblighi di legge</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Base giuridica del trattamento
            </h3>
            <p className="mb-6">
              Il trattamento dei dati personali si basa sul consenso dell'interessato, 
              sull'esecuzione di un contratto o su un interesse legittimo del titolare.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Modalità del trattamento
            </h3>
            <p className="mb-6">
              I dati personali sono trattati con strumenti informatici e/o telematici, 
              con modalità organizzative e con logiche strettamente correlate alle finalità indicate. 
              Oltre al titolare, potrebbero avere accesso ai dati categorie di incaricati coinvolti 
              nell'organizzazione del sito o soggetti esterni.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Conservazione dei dati
            </h3>
            <p className="mb-6">
              I dati personali sono conservati per il tempo necessario alle finalità per cui 
              sono stati raccolti. I dati di navigazione vengono cancellati immediatamente dopo 
              l'elaborazione statistica.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Diritti dell'interessato
            </h3>
            <p className="mb-4">L'interessato ha il diritto di:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Accedere ai propri dati personali</li>
              <li>Chiedere la rettifica o la cancellazione</li>
              <li>Opporsi al trattamento</li>
              <li>Chiedere la limitazione del trattamento</li>
              <li>Chiedere la portabilità dei dati</li>
              <li>Revocare il consenso</li>
              <li>Proporre reclamo al Garante Privacy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cookie
            </h3>
            <p className="mb-6">
              Questo sito utilizza cookie tecnici necessari per il funzionamento del sito 
              e cookie di terze parti per l'analisi del traffico. È possibile gestire 
              le preferenze sui cookie attraverso le impostazioni del browser.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Modifiche alla presente informativa
            </h3>
            <p className="mb-6">
              Il titolare si riserva il diritto di modificare la presente informativa 
              in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contatti
            </h3>
            <p className="mb-6">
              Per qualsiasi domanda relativa alla presente informativa o al trattamento 
              dei dati personali, è possibile contattare il titolare ai recapiti sopra indicati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



