# Adrenaline | Formula 1 Luxury Landing Page

A high-performance landing page inspired by landonorris.com, featuring WebGL liquid effects, smooth scrolling, and a bento grid layout.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** GSAP, Framer Motion
- **Smooth Scroll:** Lenis
- **3D/WebGL:** React Three Fiber, Drei, Custom Shaders

## Features

- **Liquid Hero:** Interactive WebGL background with ripple/water distortion on mouse hover.
- **Smooth Scroll:** Luxurious, heavy scrolling feel using Lenis.
- **Custom Cursor:** Blending cursor that reacts to interactive elements.
- **Bento Grid:** Asymmetric, responsive grid layout with entry animations.
- **Parallax:** Scroll-based motion effects.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `src/components/LiquidHero.tsx`: WebGL background with shader effects.
- `src/components/BentoGrid.tsx`: Main content grid.
- `src/components/SmoothScroll.tsx`: Lenis integration.
- `src/components/CustomCursor.tsx`: Custom cursor component.
- `src/app/globals.css`: Global styles and Tailwind configuration.
