# Sito Psicologa - Dr.ssa Maria Rossi

Un sito web professionale per psicologi e psicoterapeuti, costruito con **Next.js 14**, **TypeScript**, **Tailwind CSS** e **Decap CMS** per la gestione dei contenuti.

## 🚀 Caratteristiche

### Design e UI/UX
- **Design moderno e pulito** con palette colori pastello personalizzata
- **Responsive design** ottimizzato per tutti i dispositivi
- **Accessibilità** conforme agli standard WCAG AA
- **Performance ottimizzate** con Next.js 14 e Image Optimization

### Funzionalità Principali
- **Sistema blog completo** con MDX e ricerca client-side
- **CMS visuale** con Decap CMS (Netlify CMS) per gestione contenuti
- **SEO avanzato** con sitemap automatica, meta tags e Schema.org
- **Form contatto** con validazione e protezione spam
- **Testimonial slider** interattivo
- **Cookie banner** conforme GDPR

### Contenuti
- **Pagine principali**: Home, Chi sono, Di cosa mi occupo, Approccio terapeutico, Blog, Contatti
- **Sottopagine dinamiche**: Terapie, Aree di intervento, Articoli del blog
- **Contenuti di esempio**: 5 articoli blog, 4 terapie, 6 aree di intervento
- **RSS feed** automatico per il blog

## 🛠️ Tecnologie Utilizzate

### Frontend
- **Next.js 14** con App Router
- **TypeScript** per type safety
- **Tailwind CSS** per styling
- **Lucide React** per icone
- **Fuse.js** per ricerca

### CMS e Contenuti
- **Decap CMS** (Netlify CMS) per gestione visuale
- **MDX** per contenuti del blog
- **Gray Matter** per parsing frontmatter

### SEO e Performance
- **next-sitemap** per sitemap automatica
- **Schema.org** markup
- **Meta tags** dinamici
- **RSS feed** automatico

## 📦 Installazione

### Prerequisiti
- Node.js 18+ 
- npm, yarn o pnpm

### Setup Locale

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd sito-psicologa
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   # oppure
   yarn install
   # oppure
   pnpm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   # oppure
   yarn dev
   # oppure
   pnpm dev
   ```

4. **Apri il browser**
   Naviga su [http://localhost:3000](http://localhost:3000)

## 🎨 Personalizzazione

### Colori e Design
La palette colori è definita in `tailwind.config.ts`:
- **Primary**: #B6D1D9 (blu pastello)
- **Secondary**: #CCC6C6 (grigio pastello)  
- **Accent**: #FFEEF4 (rosa pastello)

### Contenuti
- **Blog**: Aggiungi articoli in `content/posts/`
- **Terapie**: Modifica contenuti in `content/servizi/terapie/`
- **Aree**: Aggiorna contenuti in `content/servizi/aree/`

### CMS
Accedi al CMS su `/admin` per gestire contenuti visualmente.

## 📝 Script Disponibili

```bash
# Sviluppo
npm run dev          # Avvia server di sviluppo

# Build e Deploy
npm run build        # Build per produzione
npm run start        # Avvia server di produzione

# Qualità del codice
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript check
```

## 🌐 Deploy

### Vercel (Raccomandato)

1. **Collega il repository a Vercel**
2. **Configura le variabili d'ambiente** (se necessarie)
3. **Deploy automatico** ad ogni push

### Netlify

1. **Collega il repository a Netlify**
2. **Configura il build**:
   - Build command: `npm run build`
   - Publish directory: `out`
3. **Abilita Netlify Identity** per Decap CMS

### Configurazione CMS

Per abilitare Decap CMS:

1. **Vai su `/admin`**
2. **Configura Netlify Identity** o GitHub OAuth
3. **Inizia a gestire i contenuti**

## 📁 Struttura del Progetto

```
sito-psicologa/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── blog/           # Blog pages
│   │   ├── di-cosa-mi-occupo/ # Service pages
│   │   └── ...
│   ├── components/         # React components
│   │   ├── common/        # Reusable components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page sections
│   ├── lib/               # Utilities
│   └── styles/            # Global styles
├── content/               # Content files
│   ├── posts/            # Blog posts (MDX)
│   └── servizi/          # Service content
├── public/               # Static assets
│   ├── admin/           # Decap CMS
│   └── images/          # Images
└── ...
```

## 🔧 Configurazioni

### Tailwind CSS
- Configurazione personalizzata con palette colori
- Plugin per typography, forms, aspect-ratio
- Utility classes custom

### Next.js
- App Router con layout nested
- Image optimization
- Font optimization
- MDX support

### TypeScript
- Configurazione strict
- Path mapping (`@/*`)
- Type definitions

## 📊 SEO e Performance

### SEO
- **Meta tags** dinamici per ogni pagina
- **Open Graph** e Twitter Cards
- **Schema.org** markup per Person e Article
- **Sitemap** automatica
- **Robots.txt** configurato

### Performance
- **Image optimization** con next/image
- **Font optimization** con next/font
- **Code splitting** automatico
- **Lazy loading** per componenti
- **Bundle analysis** disponibile

## 🎯 Funzionalità Avanzate

### Blog System
- **Ricerca client-side** con Fuse.js
- **Filtri per tag** e categoria
- **Pagination** (se necessario)
- **RSS feed** automatico
- **Reading time** calcolato

### Form Contatto
- **Validazione** con React Hook Form
- **Honeypot** anti-spam
- **Rate limiting** semplice
- **Messaggi di feedback**
- **Integrazione** con Formspree/Netlify Forms

### CMS Integration
- **Editor visuale** per contenuti
- **Upload media** integrato
- **Preview** in tempo reale
- **Workflow** di pubblicazione

## 🚀 Roadmap

### Prossime funzionalità
- [ ] Sistema di prenotazione online
- [ ] Chat bot integrato
- [ ] Newsletter signup
- [ ] Analytics avanzate
- [ ] PWA support
- [ ] Multilingua

## 📞 Supporto

Per domande o supporto:
- **Email**: info@maria-rossi-psicologa.it
- **Telefono**: +39 333 123 4567

## 📄 Licenza

Questo progetto è stato creato per uso professionale. Tutti i diritti riservati.

---

**Sviluppato con ❤️ per professionisti della salute mentale**



