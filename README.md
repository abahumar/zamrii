# Zamri Portfolio (Astro)

Personal portfolio website built with Astro and deployed via GitHub Pages.

Repository: `https://github.com/abahumar/zamrii`

## Pages Included

- Home
- About
- Services
- Portfolio
- Blog
- Contact

## Tech Stack

- Astro 5
- Static output (`dist/`)
- GitHub Actions for deployment
- GitHub Pages hosting

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment (GitHub Pages)

This project is preconfigured for automatic deployment with:

- `.github/workflows/deploy.yml`
- `astro.config.mjs` (auto base path handling in GitHub Actions)

### One-time GitHub setup

1. Open your repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.

### Publish flow

1. Push code to `main`.
2. Open `Actions` tab.
3. Wait for `Deploy static site to GitHub Pages` to finish.
4. Open your live URL.

Live URL for this project:

- `https://abahumar.github.io/zamrii/`

Reference format:

- Project Pages repo: `https://<username>.github.io/<repo-name>/`
- User Pages repo (`<username>.github.io`): `https://<username>.github.io/`

## Content To Update Before Going Live

- `src/pages/contact.astro`: email, WhatsApp link, Formspree endpoint
- `src/pages/index.astro`: update GitHub username in repo feed attribute
- `public/robots.txt`: replace placeholder domain
- `public/sitemap.xml`: replace placeholder domain

## Optional Custom Domain

1. Configure DNS records with your domain provider.
2. Add a `CNAME` file at project root containing your domain.
3. Set the same domain in `Settings` -> `Pages`.

## Troubleshooting

- If deployment does not run, confirm workflow trigger branch is `main`.
- If styles or assets are broken, verify repository name and Pages URL path.
- If Pages shows old content, rerun the latest workflow from the `Actions` tab.
