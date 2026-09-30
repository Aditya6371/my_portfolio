# Portfolio overview

Single-page site for Aditya Ranjan Das. React 19, Vite, Tailwind 4, Framer Motion. Dark navy background with a teal accent (`#64ffda`). Content is data, not hardcoded in the components.

## How it is wired

```
index.html          SEO tags, title "ARD", mounts #root
src/main.jsx        renders <App /> and loads src/index.css
src/App.jsx         Navbar + Home + About + Projects + Experience + Contact + ChatBot
src/data/portfolioData.js   all copy, links, projects, jobs, skills
src/index.css       theme tokens, grid background, shared classes
```

Each section is a full-height block with an `id` (`home`, `about`, `projects`, `experience`, `contact`). The navbar uses `react-scroll` to jump to those ids and highlight the one in view. Images are imported at the top of `portfolioData.js` from `src/assets/` and passed in as `profileImage`, `icon`, or `logo`.

To change what the site says, edit `src/data/portfolioData.js`. The components only map over that data.

| Export | Used by |
| --- | --- |
| `personalInfo` | Home, Navbar, Contact (name, bio, photo, email, resume URL) |
| `socialLinks` | Home, Contact |
| `navItems` | Navbar |
| `aboutContent`, `education`, `skills` | About |
| `majorProjects`, `minorProjects` | Projects |
| `experiences` | Experience |
| `contactInfo` | Contact |
| `careerMilestones` | CareerGrowth (not rendered) |
| `themeColors`, `animations` | defined, not read by the live components |

Resume is one field: `personalInfo.resumeUrl`. Both the navbar **Resume** button and the home **View Resume** button call `window.open` on that Google Drive link.

## Sections

1. **Navbar** — Fixed bar. Links from `navItems`. Desktop and a hamburger menu. **Resume** opens the Drive PDF.
2. **Home** — Greeting, name, title, short description. GitHub, LinkedIn, email. **View Resume**. Animated profile photo with orbital rings.
3. **About** — Two bio paragraphs. Education cards (school, dates, degree, GPA, highlights). Skills as chips, grouped by category.
4. **Projects** — Featured apps as large rows (icon, category, description, tech list, store links). Then a 3-column grid of other work.
5. **Experience** — Vertical timeline. Each job shows logo, company, role, dates, and bullet points.
6. **Contact** — Two intro paragraphs, then GitHub, LinkedIn, email, phone, and WhatsApp. Form fields: name, email, message.

## What’s on the page

**Education**
- Gandhi Engineering College — B.Tech CSE (GPA 8.29)
- Eastern Academy of Higher Secondary School — +2 Science
- Venkateswar English Medium School — Matriculation

**Skills**
- Flutter / Dart, Languages, API & services, Tools & DevOps, Platforms, Other, Soft Skills

**Featured projects** (`majorProjects`)
- Ultraviolette UV App — Play Store and App Store
- NewKommerce Admin
- NewKommerce Customer App
- NewKommerce POS
- GreenWave Terratech
- Wedium
- Zero EV
- Chat Application

Cards render `title`, `category`, `description`, `technologies`, `icon`, and store links when present. `features`, `challenges`, `year`, `status`, and `bgColor` are stored on the objects and not shown.

**Other work** (`minorProjects`)
- Virtual Assistance (Jarvis)
- Instagram UI Clone
- Michi Bot (Robo Car)

**Experience**
- Ultraviolette Automotive — Flutter Developer (contract via Appscrip)
- 3Embed Software Tech (Appscrip) — Flutter Developer
- Concept Infoway — Junior iOS Developer
- Concept Infoway — Intern iOS Developer

**Contact links**
- GitHub, LinkedIn, email (`mailto:`), phone (`tel:`), WhatsApp

## Other features

- **Scroll spy** — Navbar marks the section currently in view. Mobile menu closes after a tap.
- **Motion** — Sections fade and slide in with Framer Motion (`whileInView`). Hover lifts on project cards and social icons. A shimmer line sits under some headings.
- **Chat widget** — Floating robot button, bottom right. Keyword replies for projects, experience, about, contact, education, and skills. Projects, experience, about, and contact also scroll to that section. Answers are hardcoded in `ChatBot.jsx`, not pulled from `portfolioData.js`.
- **Contact form** — Does not post to a server. Submit builds a `mailto:` to `personalInfo.email` with the name, email, and message, then clears the fields.
- **SEO** — Description, keywords, author, Open Graph, and Twitter tags in `index.html`. Favicon is `/favicon.png`.
- **Theme** — Colors live in `src/index.css` (`--color-bg-*`, `--color-text-*`, `--color-accent-*`) and are exposed to Tailwind as `bg-bg-primary`, `text-accent-secondary`, and so on. Dotted grid on the page background.
- **Deploy** — Vite `base` is `/my_portfolio/`. `npm run build:docs` builds into `docs/` for GitHub Pages. `npm run dev` serves `http://localhost:5173/my_portfolio/`.

## In the code, not on the page

These files exist and are commented out or never imported by `App.jsx`:

- `CareerGrowth.jsx` — chart of `careerMilestones`, commented out at the bottom of About
- `CodeGenerator.jsx` — sample Flutter/Swift snippets with a copy button
- `ProjectModal.jsx` and `ProjectModalSimple.jsx` — project detail popups; nothing opens them
- `DataManagementPanel.jsx` — dev-only panel to validate and export portfolio data (`src/utils/dataValidation.js`, `src/utils/dataExport.js`). The import in `App.jsx` is commented out
