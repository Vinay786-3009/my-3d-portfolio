# Bangalore Vinay — Cinematic 3D Developer Portfolio

A cinematic, interactive 3D personal portfolio website built with **React 19**, **Three.js** (`@react-three/fiber`, `@react-three/drei`), **Tailwind CSS v4**, and **Framer Motion** for **Bangalore Vinay**, a B.Tech Artificial Intelligence & Data Science student.

Designed to communicate elite creative direction, engineering rigour, and recruiter-friendly transparency for software engineering, full-stack development, and data-driven roles.

---

## 🌟 Key Upgrades & Features

### 1. Cinematic 3D Quantum Core
- **Physical Materials**: Faceted dodecahedron geometry rendered in smoked glass and chrome with physical transmission, clearcoat, and realistic reflections.
- **Precision Gyroscopic Gimbals**: Three concentric metallic rings rotating on non-coplanar tilted axes with coordinate ticks.
- **Quantum Constellation Field**: Fine particle dust reacting to mouse pointer raycasting.
- **Gentle Parallax & Elevation**: Damped pointer-reactive rotation and subtle scroll-linked vertical elevation.
- **Graceful WebGL Fallback**: Pure CSS/SVG geometric prism fallback for reduced-motion settings (`prefers-reduced-motion: reduce`) or devices without WebGL.

### 2. Recruiter-First Information Hierarchy
- **Flagship Project Showcases (Placed Immediately After Hero)**:
  - **Smart Campus**: Wide-format flagship architectural showcase with layered preview, problem context, and verified GitHub link ([smart-campus](https://github.com/Vinay786-3009/smart-campus)).
  - **Vinay E-Commerce**: Reverse split layout highlighting component-driven design and storefront usability ([vinay-ecommerce](https://github.com/Vinay786-3009/vinay-ecommerce)).
  - **Traffic Accident Hotspot Analyzer**: Deep-dive spatial data analytics and clustering ([traffic-accident-hotspot-analyzer](https://github.com/Vinay786-3009/traffic-accident-hotspot-analyzer)).
  - **Student Prediction System**: Machine learning predictive model with Scikit-learn ([student-prediction-system](https://github.com/Vinay786-3009/student-prediction-system)).
  - **Academic Traffic Light System**: Hardware embedded timing controller with Arduino.
- **Architectural Deep-Dive Modal**: Clickable on every project to reveal problem statements, engineering approaches, deliverables, and tech stack tags.

### 3. Art-Directed Technical Landscape
- Matrix switcher categorized into the 5 core requested domains:
  - **Programming** (Java, Python, JavaScript, SQL)
  - **Frontend Development** (React.js, Tailwind CSS, HTML5, CSS3, Responsive UI)
  - **Data Science & ML** (Scikit-learn, Pandas, NumPy, EDA, Preprocessing)
  - **Databases** (MySQL, MongoDB, Firebase)
  - **Development Tools** (Git, GitHub, VS Code, Jupyter, Vercel, XAMPP)
- Verified practical context for every technology without misleading percentage bars.

### 4. Custom Desktop Precision Cursor
- Spring-damped dual-ring cursor with magnetic expanding aura on links, buttons, and cards.
- Automatically disabled on touch/mobile devices; non-intrusive `pointer-events-none`.

### 5. Verified Credentials & Direct Communication
- **Real Portrait**: High-resolution portrait in `public/images/vinay-portrait.jpg`.
- **Verified 2-Page Resume**: Direct download pointing to `public/resume/Bangalore_Vinay_Resume.pdf`.
- **One-Click Email Copy**: Direct copy with confetti feedback + native pre-filled mailto launcher.
- **Official Profiles**: Direct links to GitHub (`Vinay786-3009`), LinkedIn, and LeetCode (`B_vinay786`).

---

## 🏗️ Project Architecture

```
BANGALORE VINAY/
├── public/
│   ├── favicon.svg                           # Custom BV brand monogram favicon
│   ├── images/
│   │   ├── vinay-portrait.jpg                # Authentic portrait of Vinay
│   │   ├── project-smart-campus.jpg          # Smart Campus UI preview
│   │   ├── project-ecommerce.jpg             # E-Commerce UI preview
│   │   ├── project-traffic-analyzer.jpg      # Spatial analytics preview
│   │   ├── project-student-prediction.jpg    # ML prediction system preview
│   │   └── project-arduino-traffic.jpg       # Arduino workbench preview
│   └── resume/
│       └── Bangalore_Vinay_Resume.pdf        # Verified resume PDF (2 pages)
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx                  # Smooth spring-damped custom cursor
│   │   ├── Navbar.jsx                        # Glassmorphism navbar + mobile drawer
│   │   ├── Footer.jsx                        # Brand footer, social links, back-to-top
│   │   ├── Icons.jsx                         # Pixel-perfect SVG icons (GitHub, LinkedIn, LeetCode)
│   │   ├── ProjectModal.jsx                  # Architectural deep-dive case modal
│   │   └── WebGLFallback.jsx                 # CSS/SVG geometric prism fallback
│   ├── data/
│   │   └── portfolioData.js                  # Single source of truth for resume & projects
│   ├── hooks/
│   │   └── useReducedMotion.js               # Accessibility & WebGL feature detection
│   ├── sections/
│   │   ├── Hero.jsx                          # Signature hero screen + 3D canvas + CTAs
│   │   ├── Projects.jsx                      # Heroic project showcases + modal trigger
│   │   ├── Skills.jsx                        # Interactive technical landscape matrix
│   │   ├── About.jsx                         # Editorial summary + portrait + JNTUA facts
│   │   ├── Experience.jsx                    # CodeAlpha & Vaultsphere AI timeline
│   │   ├── Education.jsx                     # B.Tech, Intermediate, SSC, NPTEL Elite, EduSkills
│   │   ├── Approach.jsx                      # 4-step engineering methodology & career objective
│   │   └── Contact.jsx                       # Copy email, mailto composer, developer profiles
│   ├── three/
│   │   ├── ComputationalSculpture.jsx        # 3D interactive polyhedral sculpture
│   │   └── Scene3D.jsx                       # Canvas wrapper + ErrorBoundary + studio lights
│   ├── App.jsx                               # Master layout assembly
│   ├── index.css                             # Tailwind CSS v4 design tokens & glass styles
│   └── main.jsx                              # Entry point
├── index.html                                # SEO tags, OpenGraph, Space Grotesk fonts
├── package.json                              # React 19, Three.js, R3F, Framer Motion, Tailwind
├── vite.config.js                            # Tailwind v4 plugin + manualChunks code splitting
├── vercel.json                               # SPA routing rewrites & security headers
└── README.md                                 # Full documentation & setup guide
```

---

## 🚀 Running Locally

```powershell
# Navigate to project
cd "c:\Users\w2c\Desktop\BANGALORE VINAY"

# Install dependencies (if needed)
npm install

# Start Vite development server
npm run dev

# Run production build and preview
npm run build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚢 Deploying to Vercel

The project is pre-configured with `vercel.json` for seamless Vercel single-page application routing and asset caching.

```powershell
# 1. Initialize git
git init
git add .
git commit -m "feat: cinematic 3D portfolio redesign"

# 2. Push to GitHub
git remote add origin https://github.com/Vinay786-3009/my-3d-portfolio.git
git branch -M main
git push -u origin main
```

Then on [vercel.com](https://vercel.com):
- Import repository `my-3d-portfolio`.
- Framework preset: **Vite**.
- Build command: `npm run build`.
- Output directory: `dist`.
- Click **Deploy**.
