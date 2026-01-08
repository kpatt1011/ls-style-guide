# Healthspan Wealth Style Guide

A single-page brand guidelines application for Healthspan Wealth, built with React, Vite, Tailwind CSS, and Express.

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js
- **Build**: Vite
- **Styling**: Tailwind CSS with custom brand colors

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
ls-style-guide/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation/
│   │   │   ├── Footer/
│   │   │   └── sections/
│   │   │       ├── HeroSection/
│   │   │       ├── WelcomeSection/
│   │   │       ├── LogoSection/
│   │   │       ├── ColorSection/
│   │   │       └── TypographySection/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| HW Purple | `#7B68EE` | Primary brand color |
| HW Black | `#1A1A1A` | Typography, logo |
| HW White | `#FFFFFF` | Backgrounds |
| Silver | `#9CA3AF` | Logo accent |

## Typography

- **Headings**: DM Serif Display
- **Body**: DM Sans

## License

MIT
