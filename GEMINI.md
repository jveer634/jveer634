# Project Overview: Jay Nalam Portfolio (`jveer634`)

A modern, responsive, high-performance portfolio and personal brand web application for **Jay Nalam**—Blockchain Engineer, Full Stack Web Developer, and DeFi enthusiast.

The site is built with a sleek dark-mode aesthetic utilizing glassmorphism, GSAP timeline animations, responsive typography, and an interactive contact system integrated with EmailJS.

---

## 🚀 Key Technologies & Stack

- **Core & Framework**: React 19 (`react`, `react-dom`), TypeScript 5.8
- **Build Tool & Bundler**: Vite 8.x (`@vitejs/plugin-react` v6)
- **Styling & Design System**:
  - Tailwind CSS 4.x with `@tailwindcss/vite`
  - Color Theme: Ultra-dark (`#070709`), Zinc scale (`zinc-100` through `zinc-950`), with Violet/Indigo/Fuchsia gradient accents
  - Typography:
    - Primary Body: [Inter](https://fonts.google.com/specimen/Inter) (`font-sans`)
    - Headings & Accents: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (`font-display`)
    - Custom Font: `Nostalgia` (`src/assets/Nostalgia.otf`)
- **Linting & Code Quality**: ESLint 10 with Flat Config (`eslint.config.js`) & `typescript-eslint`
- **Animations & Micro-interactions**:
  - GSAP 3.x (`gsap`) for entrance intro curtain and staggered hero animations
  - `react-fast-marquee` for multi-directional skill badge tickers
- **Routing & Navigation**: `react-router-dom` v7 (Browser router)
- **Forms & Notifications**:
  - `@emailjs/browser` v5 for serverless client-side email delivery
  - `react-toastify` v11 for toast feedback
  - `react-icons` v5 (Bootstrap Icons suite: `react-icons/bs`)
- **Analytics & SEO**:
  - Google Analytics 4 / Google Tag Manager (`G-9687L5CS3X`)
  - Rich OpenGraph & Twitter Card metadata in `index.html`
- **Package Manager**: `pnpm` (v12, lockfile: `pnpm-lock.yaml`)

---

## 📁 Repository Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD deploying ./dist to GitHub Pages
├── Media/
│   └── Banner.png              # Profile banner asset for README
├── public/
│   └── vite.svg                # Public static fallback assets
├── src/
│   ├── assets/                 # Imagery, logo SVG, and custom fonts
│   │   ├── logo.svg            # Custom personal brand logo
│   │   ├── Me.jpg              # Developer portrait
│   │   ├── Nostalgia.otf       # Custom display font
│   │   ├── eth.jpg             # Project background preview
│   │   ├── eth2.jpg            # Project background preview
│   │   └── react.jpg           # Project background preview
│   ├── components/             # Reusable & view-level React components
│   │   ├── NavBar.tsx          # Sticky glassmorphism header with logo & route links
│   │   ├── Home.tsx            # Hero, GSAP intro loader, marquee tech ticker, showcase, footer
│   │   └── Contact.tsx         # Social connection panel & EmailJS interactive contact form
│   ├── App.tsx                 # Root application wrapper, ToastContainer, route definitions
│   ├── main.tsx                # React DOM entry point wrapping App in BrowserRouter
│   ├── index.css               # Tailwind directives, custom scrollbars, @font-face
│   └── vite-env.d.ts           # Vite client environment type declarations
├── index.html                  # HTML entry point, Google Fonts, SEO & OG tags, GA4 script
├── eslint.config.js            # ESLint flat config with TypeScript & React Refresh
├── package.json                # Project dependencies and script declarations
├── pnpm-lock.yaml              # Pnpm dependency lockfile
├── tailwind.config.js          # Tailwind theme extensions (colors, fonts, backgrounds)
├── tsconfig.json               # TypeScript compiler configurations
├── tsconfig.node.json          # Node-specific TypeScript compiler options
└── vite.config.ts              # Vite configuration with React & Tailwind plugins
```

---

## 🛠️ Development & Build Scripts

Run commands from the repository root using `pnpm` (or `npm`):

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts Vite local development server (with HMR) |
| `pnpm build` | Typechecks with `tsc` and compiles production bundle to `dist/` |
| `pnpm preview` | Locally serves and previews the production build from `dist/` |
| `pnpm lint` | Runs ESLint on TypeScript and TSX files |

---

## 🔑 Environment Variables

The contact form uses **EmailJS** to dispatch emails directly from the browser. For contact submissions to work in local development or production, define the following variables in a `.env` / `.env.local` file:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

*Note: If these variables are not provided, the contact form will trigger a toast notification error without sending.*

---

## 🧭 Application Routes & Pages

1. **`Home` (`/`)**:
   - **Loader Curtain**: GSAP animation overlay with staggered slogan reveal (`"Thinking of leveling up your business?"`).
   - **Hero Section**: Personal introduction, developer photo with atmospheric gradient glow, and quick call-to-action button.
   - **Skills Marquee**: Two opposing tickers showcasing core competencies:
     - Frontend / Backend: Django, React Js, REST API, MySQL
     - Web3 / Blockchain: EVM Blockchains, Solidity, GoLang, Hardhat
   - **Featured Projects Showcase**:
     - *Manam Arts Academy* (Web UX / Branding)
     - *Arcade Relayer Bridge* (Blockchain / Web3 - Cross-chain bridge)
     - *Pacific DeFi* (DeFi / Smart Contracts - DEX Aggregator)
   - **Footer**: Copyright details and direct links to LinkedIn, GitHub, and Instagram.

2. **`Contact` (`/contact`)**:
   - Quick links to external profiles (LinkedIn, GitHub, Instagram).
   - Minimal floating-label contact form sending real-time messages via EmailJS with `react-toastify` status updates.

3. **External Navigation**:
   - Blog: Direct navigation link in header to `https://blog.jnalam.dev`.

---

## 🎨 Design & Coding Guidelines for Future Modifications

- **Aesthetic Consistency**:
  - Keep the dark palette (`#070709`) and avoid pure black `#000000` or stark white backgrounds.
  - Maintain glassmorphic panels using `backdrop-blur-md`, semi-transparent backgrounds (`bg-zinc-900/20` to `bg-zinc-900/40`), and subtle borders (`border-zinc-800/50`).
  - Use gradient text (`from-violet-400 via-fuchsia-400 to-indigo-400`) sparingly for primary emphasis.
- **Component Styling**:
  - Leverage Tailwind utility classes extending `tailwind.config.js`.
  - Use `font-display` (`Plus Jakarta Sans`) for headers, button texts, and badges.
  - Use `font-sans` (`Inter`) for body paragraphs and descriptions.
- **Interactivity**:
  - Ensure all interactive buttons, cards, and anchors have smooth transition states (`transition-all duration-300`).
  - Use `react-router-dom`'s `<Link>` for internal navigation to preserve single-page application state.
