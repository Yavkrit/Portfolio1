# Yavkrit Vashishtha — Portfolio

Personal portfolio site for Yavkrit Vashishtha, Embedded Software Engineer & Research Scholar (AcSIR / CSIR-CSIO). Built with React 19, Vite, Tailwind CSS v4, Framer Motion, and AOS.

## Tech Stack

- **React 19** + **Vite** — UI and build tooling
- **Tailwind CSS v4** — styling
- **Framer Motion** — scroll-driven and interactive animations
- **AOS (Animate On Scroll)** — reveal animations
- **EmailJS** — contact form delivery (falls back to a `mailto:` link if unconfigured)

## Project Structure

- `src/data/portfolioData.js` — single source of truth for all site content (personal info, experience, projects, education, certificates, etc.). Update this file to change content anywhere on the site.
- `src/components/` — one component per section (Hero, About, Projects, Experience, Research, Education, Certificates, Contact, etc.), composed in `src/App.jsx`.
- `public/` — static assets served as-is (resume, certificate PDFs, favicon).

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/). Set the following environment variables (e.g. in a `.env` file) to enable direct email delivery:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these set, form submissions fall back to opening a pre-filled `mailto:` link.
