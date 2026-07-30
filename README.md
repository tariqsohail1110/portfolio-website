# Muhammad Tariq Sohail — Personal Portfolio Website

A sleek, responsive, and modern developer portfolio website designed for **Muhammad Tariq Sohail**, a Backend Developer and Automation Engineer based in Karachi, Pakistan. 

The website uses a developer-centric theme inspired by command-line interfaces and terminal consoles, combined with modern, clean styling, smooth animations, and full dark/light mode toggle support.

---

## 🚀 Tech Stack & Design System

- **Core & Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (fast hot module reloading).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a curated theme mapping custom design tokens.
- **Icons**: [Lucide React](https://lucide.dev/) for clean, developer-focused iconography.
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for lightning-fast JavaScript linting.
- **Typography**: 
  - `JetBrains Mono` for code blocks, mock terminals, and technical labels.
  - `Inter` for highly readable body copy.

---

## ✨ Key Features

1. **Interactive Terminal Console**: An interactive mock terminal interface in the contact section. Users can run commands (e.g., `about`, `skills`, `projects`, `gallery`, `education`, `contact`) to smoothly navigate the website or trigger responses.
2. **Typewriter Hero Header**: A custom React typewriter hook that mimics a bash terminal logging session, printing the developer's title, mission, and current status on initial load.
3. **Dynamic Theme System**: Hand-crafted light and dark modes with a persisted theme state synced to the browser's local storage and system preferences.
4. **Auto-Tracking Navigation**: Integrates an `IntersectionObserver` to automatically track the active viewport section and highlight corresponding navbar navigation labels.
5. **Asset Lightbox Gallery**: A showcase displaying high-resolution screenshots of key projects (such as the Expense Tracker dashboard, admin panels, and expense logs) inside interactive browser-mockup frames.
6. **Smooth & Responsive Layout**: Fluid CSS layouts designed for seamless viewing across smartphones, tablets, and desktops, incorporating subtle glassmorphism and modern retro scanline effects.

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets (Resume, screenshots, icons)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx       # About the developer & biography
│   │   ├── Education.jsx   # Academic background details
│   │   ├── Experience.jsx  # Internships and work history
│   │   ├── Footer.jsx      # Sticky footer with social details
│   │   ├── Gallery.jsx     # Project screenshot lightbox gallery
│   │   ├── Hero.jsx        # CLI intro header & typewriter animation
│   │   ├── Navbar.jsx      # Navigation bar & theme toggle controls
│   │   ├── Projects.jsx    # Projects overview & GitHub repository cards
│   │   ├── SectionLabel.jsx# Technical prefix headers
│   │   └── TerminalConsole.jsx # Interactive terminal navigation & contact links
│   ├── context/
│   │   └── ThemeContext.jsx# React Context provider managing Light/Dark theme
│   ├── App.jsx             # Main Application root and section observer
│   ├── index.css           # Tailwind configuration and custom CSS variables
│   └── main.jsx            # Application entrypoint
├── package.json            # Script definitions and dependency trees
└── vite.config.js          # Vite build config
```

---

## 🛠️ Setup & Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### Development Server
Run the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Build & Deploy
Build the optimized production-ready bundle into the `dist` directory:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Linting
Run the fast Oxlint linter:
```bash
npm run lint
```
