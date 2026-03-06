# Zamri Portfolio (Astro)

A static multi-page portfolio built with Astro, focused on WordPress and WooCommerce systems:

- Home
- About
- Services
- Portfolio
- Blog
- Contact

## Edit Before Publishing

Update these placeholders:

- `src/pages/contact.astro`: email, WhatsApp, Formspree endpoint
- `src/pages/index.astro`: `data-user="your-github-username"` for repository feed
- `public/robots.txt` and `public/sitemap.xml`: replace `your-domain.com`
- Optional: brand name/domain on all pages

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Then open the local URL shown by Astro (usually `http://localhost:4321`).

## Build For Production

```bash
npm run build
```

Build output is generated in `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Deploy to GitHub Pages (Automatic)

This repo already includes `.github/workflows/deploy.yml`.

1. Push this project to a GitHub repo.
2. In GitHub, go to `Settings` -> `Pages`.
3. Under `Build and deployment`, select `Source: GitHub Actions`.
4. Push to `main` branch.
5. Wait for workflow `Deploy static site to GitHub Pages` to finish.

Your live URL will be:

- `https://<your-username>.github.io/<repo-name>/`

Notes:

- Astro config auto-sets the correct base path for project pages in GitHub Actions.
- For user/organization pages (`<username>.github.io` repo), it uses `/` as base.

## Optional: Custom Domain

If you use a custom domain:

1. Add DNS records from your domain provider to GitHub Pages.
2. Add a `CNAME` file in repo root with your domain (example: `markzack.dev`).
3. Set the same domain in `Settings` -> `Pages`.

## Suggested Content Improvements

1. Add metrics to each case study (example: "Reduced order handling time by 45%.")
2. Add 1-2 screenshots or architecture diagrams per portfolio project.
3. Replace testimonial placeholders with real names/companies when possible.
4. Publish at least 3 blog posts in the first week for SEO traction.
5. Add schema markup (`Person`, `Service`) for richer search results.
