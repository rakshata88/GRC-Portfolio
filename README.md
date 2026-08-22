# Royette B. Miranda — Professional Portfolio

A static, multi-page professional portfolio focused on cybersecurity governance, technology risk, operational resilience, and GRC product building.

## Pages

- Home: `index.html`
- Expertise: `expertise/index.html`
- Products: `products/index.html`
- Experience: `experience/index.html`
- Credentials: `credentials/index.html`

## Local preview

```powershell
node dev-server.mjs
```

Then open `http://127.0.0.1:4187/`.

## Deploy

The project has no build step or runtime dependencies. Import the repository into Vercel and deploy with the framework preset set to **Other**. Keep the root directory as `.` and leave the build command empty.

The same folder structure also works on GitHub Pages.

## Profile photo

The optimized portfolio portrait is stored at `assets/royette-miranda.jpg`. The homepage automatically displays it in the profile card and falls back to the RM monogram when the file is missing.

## Before launch

After connecting a final custom domain, replace the relative Open Graph image paths in each page with the absolute public URL of `assets/og.png` for the most reliable social previews.
