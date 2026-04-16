# kateblomgren.github.io

Personal academic website for Kate Blomgren, PhD student at Linköping University.

Built with [Astro](https://astro.build) + TailwindCSS. Deployed via Vercel.

## Stack

- **Framework**: Astro 5.x (SSR via Vercel adapter)
- **Styling**: TailwindCSS 4.x
- **Database**: Turso (libSQL) via Astro DB — used for the guestbook
- **Hosting**: Vercel

## Local Development

```bash
npm install
npm run dev

git add .
      git commit -m "describe what you changed"
      git push origin gh-pages
```

Environment variables required (create `.env` in root):

```
ASTRO_DB_REMOTE_URL=your_turso_db_url
ASTRO_DB_APP_TOKEN=your_turso_token
```

## Adding Content

- **Outputs** (papers, posters, etc.): add a `.md` file to `src/pages/outputs/` using `src/pages/outputs/_template.md`
- **News posts**: add a `.md` file to `src/pages/posts/` using `src/pages/posts/_template.md`
- **Projects**: add a `.md` file to `src/pages/projects/` using `src/pages/projects/_template.md`

## Archive

The previous Jekyll-based site is preserved in the `archive/jekyll` branch.
