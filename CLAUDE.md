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

Set `GEMINI_API_KEY` in `.env.local` for the AI chat agent functionality.

## Architecture Overview

This is a React + TypeScript portfolio site built with Vite, featuring an AI-powered chat agent.

### Core Structure

- **Entry**: `index.tsx` mounts the React app
- **App.tsx**: Main component with client-side routing via `currentView` state. Views: `home`, `systems`, `work`, `gallery`, `about`
- **types.ts**: Shared TypeScript interfaces (`Project`, `Capability`, `CommissionRequest`)
- **constants.tsx**: Static data (projects, capabilities, tech stack, gallery items)

### Key Features

**AI Chat Agent** (`components/HardcoreAgent.tsx` + `services/geminiService.ts`):
- Floating chat widget using Google Gemini API (`@google/genai`)
- Custom "HARDCORE-OS" persona via system instruction
- API key injected via Vite's `define` in `vite.config.ts`

**Pages** (`pages/`): Full-page views for Systems, Work, Gallery, About

**Components** (`components/`): Section components for the home page (Hero, WorkCarousel, VisualGallery, etc.) plus the AI chat interface

### Styling

Tailwind CSS with custom design system:
- Primary accent: `#00FFFF` (cyan)
- Glass morphism effects via `glass-panel` class
- Terminal/tech aesthetic with monospace fonts and uppercase text
