# RedGirraffe SaaS Landing Page

A modern, responsive SaaS landing page built with **Next.js**, **Tailwind CSS**, and **TypeScript**. Designed for rapid iteration and easy customization, this project is continuously deployed via [Vercel](https://vercel.com/).

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://red-giraffe.vercel.app)

---

## Features

- **Fully Responsive**: Mobile-first design, works seamlessly on all devices.
- **Modern UI**: Clean, glassmorphic design with smooth animations.
- **Sectioned Layout**: Includes hero, features, industries, pricing, solutions, contact, and more.
- **Country Switcher**: Easily switch between regions with a flag dropdown.
- **Accessible Navigation**: Keyboard and screen reader friendly.
- **Easy Customization**: Modular components for rapid changes.

---

## Live Demo

Check out the live site:  
**[RedGirraffe on Vercel](https://red-giraffe.vercel.app)**

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (CI/CD & Hosting)

---

## Project Structure

```
components/
	header.tsx           # Responsive header with navigation & country dropdown
	...                  # Other modular UI sections
	ui/                  # Reusable UI primitives (button, card, etc.)
hooks/                 # Custom React hooks
lib/                   # Utility functions
public/                # Static assets (images, videos, etc.)
app/                   # Next.js app directory (pages, layout, styles)
```

---

## Getting Started
### 1. Unzip file
```bash
unzip redgiraffe.zip
```
After unzip command, change to directory by entering
```bash
cd redgiraffe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Customization

- Edit sections in `components/` to update content or add new features.
- Update styles in `app/globals.css` or tweak Tailwind config in `tailwind.config.ts`.
- Add or modify images in `public/images/`.

---

## Deployment

This project is automatically deployed on [Vercel](https://vercel.com/).  
Push to the `main` branch to trigger a new deployment.

---
