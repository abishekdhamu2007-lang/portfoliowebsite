# Abishek D — Premium Web Developer Portfolio

An elite, world-class personal portfolio website built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed to compete visually with Apple, Stripe, Linear, Framer, and Vercel.

---

## ✨ Features

- **Luxury Developer Aesthetic**: Deep dark theme (`#0B1120`), custom glassmorphism cards, glowing neon borders (`#4F46E5`, `#7C3AED`, `#06B6D4`), and subtle ambient aurora lighting.
- **Dynamic Particle System**: High-performance HTML5 Canvas constellation mesh with mouse parallax and auto-throttling for 60fps responsiveness.
- **Interactive 3D Workspace**: Floating code editor previewing TypeScript interfaces with floating technology badges (React, Python, JS, SQL, Tailwind).
- **Typewriter Role Cycler**: Dynamic title animation cycling through *Web Developer*, *Frontend Developer*, *AI Enthusiast*, and *Data Analytics Enthusiast*.
- **Categorized Skills Matrix**: 6 skill groups (Frontend, Programming, Database, Tools, Data Analytics, AI) with interactive glowing cards.
- **Experience Timeline**: Vertical glowing timeline presenting the *Web Development Internship* and *TCS iOS Young Professional Course*.
- **Verified Certifications**: Glass showcase for *Infosys Springboard*, *GUVI*, *Forge Solutions*, and *Google Data Analytics*.
- **Featured Projects**: 4 featured project showcases with 3D tilt effects, feature highlights, and repository links.
- **Contact Hub**: Accessible contact form with real-time validation and verified direct links (Email, Phone, Salem location, LinkedIn, GitHub).
- **SEO & Accessibility**: Complete Open Graph, Twitter Cards, robots.txt, dynamic sitemap.ts, JSON-LD Person schema, and WCAG AA compliance with `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) & [Fira Code](https://fonts.google.com/specimen/Fira+Code)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ installed on your system.

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd d:\portfoliowebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css           # Custom glassmorphism, scrollbars, glowing borders
│   ├── layout.tsx            # Root layout with fonts, SEO metadata, JSON-LD
│   ├── page.tsx              # Main portfolio page integrating all sections
│   ├── robots.ts             # SEO robots rules
│   └── sitemap.ts            # Dynamic sitemap generator
├── components/
│   ├── Navbar.tsx            # Sticky glassmorphism nav with scrollspy & mobile drawer
│   ├── Hero.tsx              # Dynamic typewriter, CTAs, 3D interactive IDE
│   ├── About.tsx             # Two-column story + verified milestone cards
│   ├── Skills.tsx            # 6 categorized skill grids with glowing badges
│   ├── Experience.tsx        # Vertical timeline for Internship & TCS Course
│   ├── Certifications.tsx    # Glass certificate cards with verification modal
│   ├── Projects.tsx          # 4 featured project cards with 3D tilt
│   ├── Services.tsx          # 6 modern developer service cards
│   ├── ResumeCTA.tsx         # Dedicated high-impact resume call to action
│   ├── Contact.tsx           # Contact form (validation) + verified contact info
│   ├── Footer.tsx            # Footer with quick links, back-to-top button
│   ├── ParticleBackground.tsx# High-performance Canvas particle & aurora mesh
│   ├── CustomCursor.tsx      # Subtle neon aura spotlight follower
│   └── ui/                   # Reusable UI primitives (GlassCard, TiltCard, Buttons...)
├── lib/
│   ├── constants.ts          # Centralized profile, skills, projects data
│   └── animations.ts         # Framer motion variants & spring configs
├── hooks/
│   ├── useScrollSpy.ts       # Active section tracker for sticky navbar
│   ├── useMouseParallax.ts   # Mouse coordinates calculation for 3D tilt
│   └── useReducedMotion.ts   # Accessibility hook for prefers-reduced-motion
└── public/
    └── resume.pdf            # Professional developer resume placeholder
```

---

## 👤 Website Owner

- **Name**: Abishek D
- **Role**: Web Developer | Frontend Developer
- **Email**: [abishekdhamu207@gmail.com](mailto:abishekdhamu207@gmail.com)
- **Phone**: +91 63815 30958
- **Location**: Salem, Tamil Nadu, India
- **LinkedIn**: [Abishek D](https://www.linkedin.com/in/abishek-d-60892834a)
- **GitHub**: [abishekdhamu2007-lang](https://github.com/abishekdhamu2007-lang)

---

## 📄 License

© 2026 Abishek D. All rights reserved.
