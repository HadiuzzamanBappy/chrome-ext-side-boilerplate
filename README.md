# PageMind Pricing Extension (Boilerplate)

A modern, high-performance Chrome Extension boilerplate built with **React 19**, **Vite**, and **Tailwind CSS**. Designed specifically for SidePanel-based extension architectures.

## 🚀 Features

- **SidePanel Ready**: Pre-configured `sidepanel.html` and manifest settings.
- **Background Script**: Service worker setup for extension-level events.
- **Multi-Entry Build**: Vite configuration optimized for separate sidepanel and background entry points.
- **Modern Stack**: React 19 + TypeScript + Vite.
- **Premium UI**: 
  - **Tailwind CSS 3**: Utility-first styling with custom theme tokens.
  - **ThemeProvider**: Centralized dark/light/system mode management with persistence.
  - **Glassmorphism**: Pre-configured glass styles and premium gradients.
  - **Modular Architecture**: Reusable `Header`, `Footer`, and `Button` components.
- **Dynamic Versioning**: Automatically pulls the application version from `package.json`.

## 🛠️ Project Structure

```text
src/
├── background/      # Service worker logic
├── components/      # Reusable UI components
│   ├── ui/          # Atomic components (Button, etc.)
│   ├── Header.tsx   # Global layout header
│   └── Footer.tsx   # Global layout footer
├── hooks/           # Custom React hooks (useTheme)
├── providers/       # Context providers (ThemeProvider)
└── main.tsx         # SidePanel entry point
public/              # Static assets (manifest.json, icons)
```

## 🚥 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development
Start the Vite dev server for hot-reloading:
```bash
npm run dev
```

### 3. Build for Extension
Generate the `dist/` folder compatible with Chrome:
```bash
npm run build
```

### 4. Load in Chrome
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked**.
4. Select the `dist/` folder in this project directory.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the project for production (Chrome-ready).
- `npm run lint`: Runs ESLint for code quality.
- `npm run preview`: Preview the production build locally.

## 🔧 Configuration

- **Manifest**: Located at `public/manifest.json`.
- **Vite**: Configured in `vite.config.ts` for multi-entry bundling.
- **Theme**: Tokens and colors defined in `tailwind.config.js` and `src/index.css`.

---
Built with ❤️ for high-fidelity Chrome Extension development.
