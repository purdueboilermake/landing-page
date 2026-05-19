# BoilerMake landing page

Next.js 15 site for [BoilerMake](https://boilermake.org), Purdue's
flagship hackathon.

## Per-year routes

Each iteration of the hackathon gets its own route under `app/`:

| Route | Source | Live |
| --- | --- | --- |
| `/` | `app/page.tsx` | https://boilermake.org — current year's landing |
| `/2026` | `app/2026/` | https://boilermake.org/2026 |
| `/2025` | `app/2025/` | https://boilermake.org/2025 |
| `/past` | `app/past/` | https://boilermake.org/past — archive of older years |

Site-wide routes (header/footer, about, etc.) live alongside:
`app/about-us/`, `app/home/`, `app/privacy/`.

## Adding a new year

When the next hackathon kicks off, copy the most recent year's
directory and rename it:

```bash
cp -r app/2026 app/2027
```

Edit `app/2027/page.tsx` (and `styles.css` if present) for the new
branding. When you're ready to flip it, update `app/page.tsx` to render
the new year's landing, and link the previous year from `app/past/`.

Existing year directories shouldn't need code changes year-over-year —
keep historical pages intact so the URLs stay live.

## Local development

```bash
npm install
npm run dev    # http://localhost:3000
```

See [`BACKGROUND_SYSTEM_GUIDE.md`](./BACKGROUND_SYSTEM_GUIDE.md) and
[`docs/`](./docs) for in-depth notes on specific subsystems (animations,
shared components, etc.).
