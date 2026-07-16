# The Joe Tape Vol. 1

A vertical-scroll mixtape — five meaningful songs across five chapters of life.

**Live:** [joekalmar.com/thejoetapevol1](https://joekalmar.com/thejoetapevol1)  
**GitHub Pages:** `https://<your-username>.github.io/thejoetapevol1/`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/thejoetapevol1/](http://localhost:5173/thejoetapevol1/)

## Deploy to GitHub Pages

Pushes to `main` automatically build and deploy via GitHub Actions.

1. Create a repo named **`thejoetapevol1`** on GitHub
2. Push this project to `main`
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**
4. After the workflow runs, the site is live at `https://<username>.github.io/thejoetapevol1/`

For **joekalmar.com/thejoetapevol1**, copy the `dist/` output into your main site's `/thejoetapevol1/` folder after `npm run build`.

## Customize songs

Edit `src/data/songs.ts` — titles, stories, Spotify IDs, and themes (`dawn`, `ember`, `pink`, `spectrum`, `gold`, etc.).

## Slides

| # | Content |
|---|---------|
| 1 | Title — The Joe Tape Vol. 1 |
| 2–6 | Tracks 01–05 |
| 7 | Spotify playlist |
