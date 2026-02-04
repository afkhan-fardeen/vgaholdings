# Quick Start Guide

## Installation

1. Install dependencies:
```bash
npm install
```

2. Add your assets to the `public` folder:
   - All images referenced in components
   - Video file: `VGA_Holdings_Corporate_Video_1080P.mp4`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
vga/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Home page (main entry point)
│   └── globals.css      # Global styles and Tailwind imports
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with video
│   ├── About.tsx        # About/Who We Are section
│   ├── WhatWeDo.tsx     # Capabilities section
│   ├── Services.tsx     # Services grid
│   ├── Portfolio.tsx    # Investment portfolio
│   ├── News.tsx         # Latest news section
│   ├── Clients.tsx      # Client logos
│   ├── Leadership.tsx   # Leadership team
│   ├── Quote.tsx        # Inspiration quote
│   ├── WhyChooseUs.tsx  # Value proposition
│   ├── StealthVideo.tsx # Stealth-Lock video section
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Footer
├── public/              # Static assets (images, videos)
├── types/               # TypeScript type definitions
│   └── iconify.d.ts     # Iconify web component types
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Key Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ Component-based architecture
- ✅ SEO optimized with metadata
- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly menu

## Building for Production

```bash
npm run build
npm start
```

## Notes

- All content has been integrated into the current sections and data files
- Images need to be added to the `public` folder
- Video file should be optimized for web delivery
