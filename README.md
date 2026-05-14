# Jash Deshani Portfolio

A modern full stack developer portfolio built using Next.js, Tailwind CSS, Framer Motion, and TypeScript.

## Live Demo

[Live Website](https://jash-portfolio-zeta.vercel.app)

---

## Features

- Modern dark UI with purple theme
- Glassmorphism design
- Fully responsive layout
- Dynamic project pages
- Smooth animations using Framer Motion
- Real working contact form with EmailJS
- Project screenshot galleries
- Mobile responsive navbar
- Resume download support
- Optimized images using Next.js Image component

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### Libraries & Tools
- Lucide React
- React Icons
- EmailJS

---

## Folder Structure

```txt
app/
 ├── components/
 ├── data/
 ├── projects/
 │     └── [slug]/
 ├── globals.css
 ├── layout.tsx
 └── page.tsx

public/
 └── images/
```

---

## Projects Included

### Judgement
Modern responsive web application with clean UI and interactive features.

### Recipe Genie
AI-powered recipe generation application with modern responsive design.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

Go inside project folder:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id

NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Deployment

Deployed using Vercel.

---