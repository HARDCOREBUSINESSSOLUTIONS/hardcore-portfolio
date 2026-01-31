# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server on port 3000
npm run build        # Production build
npm run preview      # Preview production build
```

## Environment Setup

Create a `.env.local` file in the project root with:

```bash
GEMINI_API_KEY=your_gemini_api_key_here        # Required for AI chat agent
VITE_AIRTABLE_API_KEY=your_airtable_api_key    # Required for lead submission
```

**Note**: Both keys are injected into the frontend via Vite's `define` config and `import.meta.env`.

## Architecture Overview

This is a React 19 + TypeScript portfolio site built with Vite, featuring an AI-powered chat agent and Airtable lead capture.

### Directory Structure

```
hardcore-portfolio/
├── components/           # Reusable UI components (11 files)
├── pages/               # Full-page view components (4 files)
├── services/            # External service integrations
│   ├── geminiService.ts # Google Gemini API for chat
│   └── leadService.ts   # Airtable API for lead capture
├── public/              # Static assets
├── App.tsx              # Main component with routing
├── index.tsx            # React entry point
├── index.html           # HTML template with Tailwind CDN
├── types.ts             # TypeScript interfaces
├── constants.tsx        # Static data (projects, capabilities)
└── vite.config.ts       # Vite configuration
```

### Core Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main shell with navigation, routing via `currentView` state, footer |
| `types.ts` | Shared types: `Project`, `Capability`, `CommissionRequest`, `ProjectStatus` |
| `constants.tsx` | Static data: projects, capabilities, tech stack, gallery items, brand colors |
| `index.html` | HTML template with Tailwind CDN, fonts, glass morphism CSS utilities |

### Routing

Client-side routing via `currentView` state in `App.tsx`. Views: `home`, `systems`, `work`, `gallery`, `about`

### Component Architecture

```
App.tsx (routing + layout)
├── Home View
│   ├── Hero.tsx              # Landing with canvas particle animation
│   ├── SystemsBuilder.tsx    # 4-column capability grid
│   ├── WorkCarousel.tsx      # Horizontal scrolling projects
│   ├── TechnicalDepth.tsx    # Architecture diagram + tech stack
│   ├── VisualGallery.tsx     # 3-column image grid
│   ├── Manifesto.tsx         # Bio section
│   └── HardwareLab.tsx       # Hardware specs display
├── SystemsPage.tsx           # Agentic architectures
├── WorkPage.tsx              # Project portfolio + inventory table
├── GalleryPage.tsx           # Visual gallery with categories
├── AboutPage.tsx             # Personal manifesto, process, hardware
└── Floating Elements (always rendered)
    ├── HardcoreAgent.tsx     # AI chat widget (z-index 80)
    └── StartHereModal.tsx    # Lead capture modal (z-index 100)
```

## Key Services

### Gemini Chat Service (`services/geminiService.ts`)

```typescript
getHardcoreResponse(userPrompt: string): Promise<string>
```
- Model: `gemini-3-flash-preview`
- Custom "HARDCORE-OS" persona with aggressive/technical voice
- Temperature: 0.8

### Lead Service (`services/leadService.ts`)

```typescript
submitLead(data: LeadData): Promise<{ success: boolean; error?: string }>
```
- Airtable integration for lead capture
- Base ID: `appmLNPbO9K6AWIWs`
- Table ID: `tblQj5zUrtzq486ko`
- Fields: name, email, intent, priority, budget, details

## Styling

### Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary Accent | `#00FFFF` (cyan) | Buttons, active states, glows |
| Secondary Accent | `#FF0033` (red) | Portfolio image, alerts |
| Background | `#000000` (black) | Primary background |
| Text Primary | `#FFFFFF` (white) | Main text |

### Custom CSS Classes (defined in `index.html`)

- `.glass-panel` - Backdrop blur + gradient background
- `.glass-panel-accent` - Cyan-tinted variant
- `.glass-panel-red` - Red-tinted variant
- `.neon-glow` - Cyan text-shadow effect
- `.red-glow` - Red text-shadow effect
- `.glitch-text` - Hover animation
- `.crt-overlay` - Scanline CRT effect

### Typography

- **Primary Font**: Inter (400/700/900)
- **Monospace Font**: JetBrains Mono (400/700)
- Loaded via Google Fonts CDN

### Tailwind

Tailwind CSS v4 loaded via CDN in `index.html`. No custom config file - uses Tailwind defaults with inline custom utilities.

## Tech Stack

- **React 19.2.3** - UI framework
- **TypeScript 5.8** - Type safety
- **Vite 6.2** - Build tool
- **Lucide React 0.562** - Icon library
- **@google/genai 1.36** - Gemini API SDK
- **Tailwind CSS** (CDN) - Utility-first CSS

## Code Conventions

### Naming

- **Components**: PascalCase (`Hero`, `SystemsBuilder`)
- **Variables/Functions**: camelCase (`navigateTo`, `handleSubmit`)
- **CSS Classes**: kebab-case (`glass-panel`, `neon-glow`)
- **Constants**: UPPER_SNAKE_CASE (`BRAND_NAME`, `NEON_CYAN`)

### Component Pattern

```typescript
interface ComponentProps {
  prop: string;
  onAction?: () => void;
}

const Component: React.FC<ComponentProps> = ({ prop, onAction }) => {
  // useState, useRef, useEffect hooks
  return (/* JSX */);
};

export default Component;
```

### State Management

- Local component state via `useState` (no Redux/Context)
- Navigation via `currentView` state in App.tsx
- Form state via individual `useState` per field

### Imports Order

1. React
2. External libraries (lucide-react, etc.)
3. Local types/constants
4. Components
5. Services

## Canvas Animations

Two canvas-based animations:
- **Hero.tsx**: Particle system with 50 nodes + connecting lines
- **NeuralAvatar.tsx**: 3D rotating neural network (sphere projection)

Both use `requestAnimationFrame` with proper cleanup in `useEffect`.

## Important Notes

### Security Considerations

- API keys are exposed to frontend via Vite's `define` config
- Airtable API key accessible in browser (consider server-side proxy for production)

### No Testing

No test framework configured (no Jest/Vitest). Consider adding tests for:
- Form validation in `StartHereModal`
- API service functions

### No Code Splitting

Single-page app without lazy loading. All components bundled together.

### Icon Usage

Icons from `lucide-react`. Use `getIcon()` helper in `constants.tsx` for dynamic icon rendering:

```typescript
import { Bot, Shield, Terminal } from 'lucide-react';
// Use directly or via getIcon('bot')
```

## Common Tasks

### Adding a New Project

Edit `constants.tsx`:
1. Add to `FLAGSHIP_PROJECTS` or `MASTER_INVENTORY` array
2. Follow `Project` interface from `types.ts`

### Adding a New Page/View

1. Create component in `pages/`
2. Add case to `renderView()` switch in `App.tsx`
3. Add navigation link in nav section of `App.tsx`

### Modifying Lead Form

- Form logic in `components/StartHereModal.tsx`
- Submission in `services/leadService.ts`
- Update Airtable field mapping if adding new fields

### Changing AI Chat Persona

Edit system instruction in `services/geminiService.ts` within `getHardcoreResponse()`.
