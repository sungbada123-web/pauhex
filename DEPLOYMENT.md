# AURAON - Deployment Guide

## 🚀 Deployment-Optionen

### Option 1: Vercel (Empfohlen - Einfachste Methode)

Vercel ist die offizielle Hosting-Plattform für Next.js und bietet:
- Automatisches CI/CD
- Globales CDN
- Automatische SSL-Zertifikate
- Serverless Functions
- Zero-Config Deployment

#### Schritte:

1. **Repository erstellen**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AURAON website"
   ```

2. **GitHub Repository erstellen und pushen**
   ```bash
   git remote add origin https://github.com/IHR-USERNAME/auraon.de.git
   git push -u origin main
   ```

3. **Bei Vercel deployen**
   - Gehen Sie zu [vercel.com](https://vercel.com)
   - Klicken Sie auf "New Project"
   - Importieren Sie Ihr GitHub Repository
   - Vercel erkennt automatisch Next.js
   - Klicken Sie auf "Deploy"

4. **Eigene Domain verbinden (Optional)**
   - In Vercel: Settings → Domains
   - Fügen Sie `auraon.de` hinzu
   - Konfigurieren Sie DNS bei Ihrem Domain-Provider

---

### Option 2: Netlify

Netlify ist eine weitere gute Wahl für statische Sites.

#### Schritte:

1. **Build-Kommando konfigurieren**
   - Build Command: `npm run build`
   - Publish Directory: `.next`

2. **Deployen**
   - Gehen Sie zu [netlify.com](https://netlify.com)
   - "Add new site" → "Import an existing project"
   - Verbinden Sie GitHub
   - Netlify deployed automatisch

---

### Option 3: Eigener Server (VPS/Cloud)

Für vollständige Kontrolle können Sie auf einem eigenen Server deployen.

#### A. Docker Deployment

1. **Erstellen Sie eine `Dockerfile`**:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

2. **`next.config.ts` anpassen**:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

3. **Image bauen und starten**:

```bash
docker build -t auraon-website .
docker run -p 3000:3000 auraon-website
```

#### B. PM2 (Process Manager)

1. **Server vorbereiten** (Ubuntu/Debian):

```bash
# Node.js installieren
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 global installieren
sudo npm install -g pm2
```

2. **Projekt hochladen**:

```bash
# Via Git
git clone https://github.com/IHR-USERNAME/auraon.de.git
cd auraon.de
npm install
npm run build
```

3. **Mit PM2 starten**:

```bash
pm2 start npm --name "auraon-website" -- start
pm2 save
pm2 startup
```

4. **Nginx als Reverse Proxy**:

```nginx
server {
    listen 80;
    server_name auraon.de www.auraon.de;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **SSL mit Let's Encrypt**:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d auraon.de -d www.auraon.de
```

---

### Option 4: AWS / Azure / Google Cloud

#### AWS Amplify

```bash
# AWS Amplify CLI installieren
npm install -g @aws-amplify/cli

# Projekt initialisieren
amplify init
amplify add hosting
amplify publish
```

#### Azure Static Web Apps

```bash
# Azure CLI installieren und einloggen
az login

# Static Web App erstellen
az staticwebapp create \
    --name auraon-website \
    --resource-group IHR-RESOURCE-GROUP \
    --source https://github.com/IHR-USERNAME/auraon.de \
    --location "West Europe" \
    --branch main \
    --app-location "/" \
    --output-location ".next"
```

#### Google Cloud Run

```bash
# Google Cloud SDK installieren
gcloud init

# Container bauen und deployen
gcloud builds submit --tag gcr.io/IHR-PROJECT/auraon-website
gcloud run deploy auraon-website \
    --image gcr.io/IHR-PROJECT/auraon-website \
    --platform managed \
    --region europe-west1 \
    --allow-unauthenticated
```

---

## 📊 Performance-Optimierung

### Nach dem Deployment

1. **Lighthouse Score überprüfen**
   - Öffnen Sie Chrome DevTools
   - Tab "Lighthouse"
   - "Generate Report"

2. **Core Web Vitals überwachen**
   - [Google Search Console](https://search.google.com/search-console)
   - [PageSpeed Insights](https://pagespeed.web.dev/)

3. **CDN aktivieren**
   - Vercel und Netlify haben automatisches CDN
   - Für eigene Server: CloudFlare aktivieren

---

## 🔒 Sicherheit

### SSL/TLS Zertifikat

- Vercel/Netlify: Automatisch inklusive
- Eigener Server: Let's Encrypt (kostenlos)

### Security Headers

Fügen Sie in `next.config.ts` hinzu:

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## 📈 Monitoring

### Vercel Analytics (empfohlen)

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Alternatives Monitoring

- Google Analytics
- Plausible Analytics (Privacy-First)
- Matomo (Self-Hosted)

---

## 🚨 Troubleshooting

### Build schlägt fehl

```bash
# Node Modules löschen und neu installieren
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port bereits belegt

```bash
# Anderen Port verwenden
PORT=3001 npm start
```

### Out of Memory

```bash
# Node Memory erhöhen
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 📞 Support

Bei Deployment-Problemen:
- GitHub Issues: [github.com/IHR-USERNAME/auraon.de/issues]
- E-Mail: tech@auraon.de

---

**Viel Erfolg beim Deployment! 🚀**

Made with ❤️ in Germany 🇩🇪
