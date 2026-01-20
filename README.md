# AURAON - Deutsche Schlaf-Neurotechnologie

Eine professionelle, medizinische Website für AURAON Technology, entwickelt nach strengen deutschen Industriestandards ("Loewenstein Aesthetic").

## 🎯 Projekt-Übersicht

Diese Website repräsentiert die digitale Präsenz von AURAON, einem führenden Innovator in der Schlafneurotechnologie. Das Design folgt einer präzisen, cleanen und medizinischen Ästhetik.

### Kern-Architektur (4-Layer Structure)
Die Homepage wurde in eine strikte 4-Ebenen-Struktur refaktoriert, um maximale Übersichtlichkeit zu gewährleisten:

1.  **Brand Hero**: Großflächige emotionale Ansprache mit minimalistischem Branding.
2.  **Competence Matrix**: Die zentrale Geschäftspräsentation (siehe unten).
3.  **Philosophy & Innovation**: "Made in Germany" Qualitätsversprechen und Forschung.
4.  **Global Footer**: Rechtliche Navigation und Kontakt.

### Das 4-Säulen Produkt-Matrix
Das Herzstück der Website ist die interaktive Matrix, die das Portfolio in vier Dimensionen gliedert:

1.  **Klinische Therapie (Clinical Therapy)**
    *   *Auraon Pulse*: Medizinprodukt zur Neurotransmitter-Regulation (CES).
    *   *Auraon Mind*: Digitale Therapeutika (CBT-I) mit KI-Rezepten.
2.  **Sensorische Interaktion (Sensory Interaction)**
    *   *Auraon Pet*: Biofeedback-Roboter mit H2C-Atmungssynchronisation.
    *   *Auraon Comfort*: Bionische Kissen und sensorische Augenmasken.
3.  **Digitale Diagnostik (Digital Diagnostics)**
    *   *Auraon Hub*: Dezentrales KI-Datencenter (Privacy First).
    *   *Auraon Eye*: Berührungslose 60GHz-Radarüberwachung.
4.  **Umgebung & Lifestyle (Ambient & Lifestyle)**
    *   *Auraon Space*: Zirkadiane Licht- und Luftsteuerung.
    *   *Auraon Essence*: Biologische Nährstoffregulierung (Tee/Supplements).

## 🎨 Design-System ("Loewenstein Style")

Das visuelle Design wurde radikal auf industrielle Präzision getrimmt:

*   **Zero Border Radius**: Alle UI-Elemente (Buttons, Cards, Inputs) sind streng rechtwinklig. Keine Rundungen.
*   **Precision Grid**: Layouts basieren auf pixelgenauen Rastern (`gap-px`), getrennt durch feine Linien statt Schatten.
*   **Industrial Typography**: 
    *   Navigation und Tags in `UPPERCASE` mit erhöhtem `tracking` (Laufweite).
    *   Schriftart: **Inter** (Google Fonts) in `Light` (300) und `Bold` (700) Kontrasten.
*   **Absolute Centering**: Alle Layouts sind strikt zentriert (`max-w-[1600px] mx-auto`), um visuelle Balance zu garantieren.
*   **Farben**:
    *   `#003366` (Medical Blue) - Primär
    *   `#009999` (Vital Cyan) - Akzent
    *   `#E2E8F0` (Clinical Grey) - Rasterlinien

## 🛠️ Technologie-Stack

*   **Core**: Next.js (App Router)
*   **Styling**: Tailwind CSS (mit Custom Config für Layouts)
*   **Animation**: Framer Motion (für Tab-Switching und Hover-Effekte)
*   **Icons**: Lucide React
*   **Data**: TypeScript-basiertes i18n Datensystem (`app/data/products.ts`)

## 📂 Projekt-Struktur

```
auraon.de/
├── app/
│   ├── components/         
│   │   ├── ProductMatrix.tsx   # Kern-Komponente der 4-Säulen-Matrix
│   │   ├── Navigation.tsx      # Grid-basiertes zentriertes Menü
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── data/
│   │   └── products.ts         # SSOT für Produktdaten (DE/EN/CN)
│   ├── products/               # Detailseiten (Loewenstein-Layout)
│   ├── science/                # Wissenschaftsseite
│   ├── legal/                  # Impressum & Datenschutz
│   └── globals.css             # Globale Tailwind-Regeln
└── public/                     # Assets
```

## 🚀 Entwicklung & Deployment

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

### i18n Konfiguration
Die Mehrsprachigkeit ist datenseitig vorbereitet. Alle Produkttexte liegen in `app/data/products.ts` bereits in DE, EN und CN vor. Die UI-Komponenten konsumieren dieses Datenmodell dynamisch.

---

**© 2026 AURAON Technology GmbH**  
*Innovation for Better Sleep. Made in Germany.*
