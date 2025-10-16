# Guida al Deploy - Sito Psicologa

Questa guida ti aiuterà a deployare il sito della psicologa su diverse piattaforme.

## 🚀 Deploy su Vercel (Raccomandato)

### Setup Automatico

1. **Collega il repository**
   - Vai su [vercel.com](https://vercel.com)
   - Clicca "New Project"
   - Importa il repository GitHub

2. **Configurazione automatica**
   - Vercel rileva automaticamente Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy**
   - Clicca "Deploy"
   - Il sito sarà disponibile su `https://sito-psicologa.vercel.app`

### Configurazione Manuale

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy in produzione
vercel --prod
```

### Variabili d'Ambiente (obbligatorie per il CMS)

```bash
# Aggiungi in Vercel Dashboard > Settings > Environment Variables
SITE_URL=https://sito-psicologa.vercel.app
GITHUB_CLIENT_ID=la_client_id_della_tua_app_oauth
GITHUB_CLIENT_SECRET=la_client_secret_della_tua_app_oauth
```

## 🌐 Deploy su Netlify

### Setup Automatico

1. **Collega il repository**
   - Vai su [netlify.com](https://netlify.com)
   - Clicca "New site from Git"
   - Seleziona il repository

2. **Configurazione Build**
   ```
   Build command: npm run build
   Publish directory: out
   ```

3. **Deploy**
   - Clicca "Deploy site"
   - Il sito sarà disponibile su `https://sito-psicologa.netlify.app`

### Configurazione CMS

1. **Abilita Netlify Identity**
   - Vai su Site Settings > Identity
   - Clicca "Enable Identity"

2. **Configura Git Gateway**
   - Vai su Site Settings > Identity > Services
   - Abilita "Git Gateway"

3. **Testa il CMS**
   - Vai su `https://sito-psicologa.netlify.app/admin`
   - Registrati e inizia a gestire i contenuti

## 📱 Deploy su Vercel con Decap CMS

### Setup Completo

1. **Crea un'app OAuth GitHub**
   - Homepage URL: dominio del sito (es. `https://sito-psicologa.vercel.app`)
   - Authorization callback URL: `https://<tuo-dominio>/api/decap-cms/callback`

2. **Configura l'app in Vercel**
   - Imposta `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET`
   - Verifica `SITE_URL`

3. **Aggiorna la configurazione del CMS**
   ```yaml
   # public/admin/config.yml
   backend:
     name: github
     repo: your-github-username/sito-psicologa
     branch: main
     base_url: https://sito-psicologa.vercel.app
     auth_endpoint: api/decap-cms/auth
   ```

4. **Accedi a `/admin`**
   - Clicca su **Login with GitHub**
   - Autorizza l'applicazione per gestire i contenuti

## 🔧 Configurazioni Post-Deploy

### 1. Dominio Personalizzato

**Vercel:**
```bash
# Aggiungi dominio in Vercel Dashboard
# Settings > Domains > Add Domain
```

**Netlify:**
```bash
# Aggiungi dominio in Netlify Dashboard  
# Site Settings > Domain Management > Add Custom Domain
```

### 2. SSL Certificate
- **Automatico** su Vercel e Netlify
- Certificati Let's Encrypt gratuiti

### 3. Analytics

**Vercel Analytics:**
```bash
# Abilita in Vercel Dashboard
# Analytics tab > Enable
```

**Google Analytics:**
```javascript
// Aggiungi in layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### 4. Form Contatto

**Formspree:**
```javascript
// In contatti page, sostituisci l'action del form
action="https://formspree.io/f/YOUR_FORM_ID"
```

**Netlify Forms:**
```html
<!-- Aggiungi attributo netlify al form -->
<form name="contact" method="POST" data-netlify="true">
```

## 📊 Monitoraggio

### Performance
- **Vercel**: Analytics integrato
- **Netlify**: Analytics in dashboard
- **Lighthouse**: Test automatici

### Uptime
- **Vercel**: 99.9% SLA
- **Netlify**: 99.9% SLA
- **Uptime Robot**: Monitoraggio esterno

## 🔄 CI/CD

### GitHub Actions (Opzionale)

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

## 🚨 Troubleshooting

### Errori Comuni

**Build Failed:**
```bash
# Controlla log di build
# Verifica dipendenze
npm install --production=false
```

**CMS Non Funziona:**
```bash
# Controlla che GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET siano corretti
# Verifica che l'app OAuth GitHub abbia il callback https://<dominio>/api/decap-cms/callback
# Assicurati che public/admin/config.yml punti al repository corretto
```

**Images Non Caricano:**
```bash
# Controlla path delle immagini
# Verifica ottimizzazione Next.js
# Controlla configurazione CDN
```

### Supporto

**Vercel:**
- [Documentation](https://vercel.com/docs)
- [Community](https://github.com/vercel/vercel/discussions)

**Netlify:**
- [Documentation](https://docs.netlify.com)
- [Community](https://community.netlify.com)

## 📈 Ottimizzazioni

### Performance
- **Image Optimization**: Usa `next/image`
- **Font Optimization**: Usa `next/font`
- **Code Splitting**: Automatico con Next.js
- **Caching**: Configura headers appropriati

### SEO
- **Sitemap**: Generata automaticamente
- **Meta Tags**: Configurati in layout
- **Schema.org**: Implementato
- **Robots.txt**: Configurato

## 🔐 Sicurezza

### Best Practices
- **HTTPS**: Forzato su tutte le piattaforme
- **Security Headers**: Configurati
- **Form Protection**: Honeypot implementato
- **CMS Access**: Protetto con Identity

### Backup
- **Git Repository**: Backup automatico
- **Content**: Sincronizzato con Git
- **Images**: Backup su CDN

---

**Il tuo sito è pronto per il lancio! 🎉**



