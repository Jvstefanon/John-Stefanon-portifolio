# João Vitor — Portfolio

Personal portfolio of **João Vitor Stefanon**, Full Stack developer working on internal systems for the port sector at FIPS (Port of Santos, Brazil) and building websites and systems for clients in Brazil and abroad through **IWS Digital**.

Built with React, Vite and Tailwind CSS. Single page, dark theme, fully responsive.

## Sections

| Section | What it shows |
|---|---|
| **Home** | Intro, call-to-action buttons and social links |
| **Sobre** (About) | Short bio, key numbers and tech stack |
| **Projetos** (Projects) | Professional and client projects, with the main project highlighted |
| **Formação** (Background) | Education and work experience timelines, plus courses and certificates |
| **Contato** (Contact) | E-mail, LinkedIn, GitHub and Instagram |

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) + plain CSS per section
- [lucide-react](https://lucide.dev/) and [react-icons](https://react-icons.github.io/react-icons/) for icons
- ESLint

## Getting started

Requires **Node.js 20.19+** (or 22.12+).

```bash
npm install
npm run dev      # starts the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serves the production build locally
npm run lint     # runs ESLint
```

## Project structure

```
public/
  favicon.svg
  img/                 # profile photos and project screenshots
src/
  main.jsx             # renders all sections in order
  App.css              # global styles shared by every section
  Pages/
    Home/              # Home.jsx + Home.css (also contains the navbar)
    About/
    Projects/
    Formation/
    Contact/           # also contains the footer
```

## Editing the content

All content lives in plain arrays at the top of each section file, so updating the site doesn't require touching the layout:

| To change | Edit |
|---|---|
| Tech stack and numbers | `skills` and `stats` in `src/Pages/About/About.jsx` |
| Projects | `projects` in `src/Pages/Projects/Projects.jsx` |
| Education, experience, certificates | `education`, `experience`, `courses` in `src/Pages/Formation/Formation.jsx` |
| Contact links | `EMAIL` and `contacts` in `src/Pages/Contact/Contact.jsx` |

Project fields:

- `image` — path to a screenshot in `public/img` (e.g. `"/img/project.png"`)
- `demo` / `github` — external links; leave empty to hide them
- `status` — small label shown when there is no public link (e.g. `"Em produção"`)
- `featured: true` — makes the card span two columns in the grid

## Links

- GitHub: [@Jvstefanon](https://github.com/Jvstefanon)
- LinkedIn: [João Vitor Stefanon](https://www.linkedin.com/in/jo%C3%A3o-vitor-stefanon-lopes-98a1a730b/)
- Instagram: [@_stefanonn](https://www.instagram.com/_stefanonn/)
