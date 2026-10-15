# AGROTECH Frontend Prototype

A farmer-friendly, multilingual frontend inspired by the uploaded AGROTECH project presentation.

## Included
- React + TypeScript + Vite
- Responsive home, about, language selection, login, signup and forgot-password screens
- First-visit language welcome screen; the chosen language is remembered locally
- Eight language choices: Hindi, English, Punjabi, Marathi, Gujarati, Bengali, Tamil and Telugu
- Translation dictionaries and a language switcher
- Frontend form validation, show/hide password controls and honest demo feedback
- Reusable logo, navbar, footer, fields and feature cards
- Responsive layouts for mobile, tablet and desktop

## Run locally
1. Install Node.js 20 or newer.
2. Extract the project folder.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite, usually `http://localhost:5173`.

For a production build:

```bash
npm run build
npm run preview
```

## Important prototype notes
- Login, account creation and password recovery are **not connected** to a backend.
- No password or account data is stored in localStorage. Only the selected language is saved.
- Market prices, weather, schemes, crop image analysis, expert connections, vendor listings and WhatsApp support are represented as UI concepts; no live API is connected.
- Some secondary labels/descriptions may remain in English for languages whose translation dictionary is still partial.
- Agricultural photographs are loaded from Unsplash over the internet. An internet connection is needed for those images.

## PPT alignment
The design reflects the presentation's key service concepts: multilingual support, market prices, weather alerts, government schemes, crop disease guidance, pesticide information, expert connect, vendor details, Kisan Calendar and WhatsApp Bot, plus the SDG 15 / Life on Land message.
