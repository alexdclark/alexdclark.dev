# Cloud Solutions Architect Portfolio

A static-exportable Next.js + TypeScript + Tailwind portfolio built for GitHub Pages and custom Squarespace-managed domains.

## Features
- App Router Next.js with static export (`output: "export"`) and unoptimized images for GitHub Pages
- Responsive layout with sticky navigation, mobile menu, and dark/light theme toggle (persisted)
- Content-driven sections (edit a single file at `src/content/site.ts`)
- Project cards, experience timeline, certifications list, and contact form UI
- SEO metadata, Open Graph tags, and custom favicon
- GitHub Actions workflow to build and deploy to GitHub Pages

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production (static export goes to `out/`):
   ```bash
   npm run build
   ```

### Environment variables for base paths
If you deploy to `https://<user>.github.io/<repo>`, set a base path so assets resolve correctly:
- Local build:
  ```bash
  NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
  ```
- GitHub Actions already supports `NEXT_PUBLIC_BASE_PATH` via repository variables; set `NEXT_PUBLIC_BASE_PATH` to `/your-repo-name` in **Settings → Variables → Actions** when using a project site.

For **custom domains** (when a `CNAME` file is present), do **not** set `NEXT_PUBLIC_BASE_PATH`. The site builds at the domain root without a repo subpath.

## GitHub Pages deployment
Deployment is handled by `.github/workflows/deploy.yml` and uses the official Pages actions:
1. Install dependencies and lint
2. Build and export the static site (`out/`)
3. Upload the artifact
4. Deploy to GitHub Pages

After pushing to `main`, GitHub Actions will publish the latest build to Pages.

## Custom domain (Squarespace)
1. Set the custom domain in the **Pages** settings of the GitHub repository and commit the `CNAME` file (already present with `example.com`; replace with your domain).
2. In Squarespace DNS settings, add the following records:
   - **A** records for the apex domain pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME** record for `www` pointing to `<username>.github.io` (replace with your GitHub username).
3. Choose whether to use the apex or `www` as primary. GitHub recommends using `www` with a CNAME because it simplifies TLS, then redirect apex to `www` via the A records. Either works; keep it consistent.
4. Enable **Enforce HTTPS** in the repository Pages settings once DNS propagates. Certificates usually issue within a few minutes but can take up to 24 hours.

### Updating the CNAME
Edit the root `CNAME` file to contain only your domain (e.g., `portfolio.example.com`). GitHub Pages will serve that hostname after DNS changes propagate.

## Content editing
All display text and links live in `src/content/site.ts`. Update skills, projects, experience, certifications, and social links in one place. Components consume this content file so sections stay in sync.

## Accessibility and UX notes
- Semantic headings and labels for form fields
- Keyboard-accessible navigation and buttons
- Color contrasts and focus styles tuned for light and dark themes

## Tooling
- ESLint (`npm run lint`)
- Prettier (`npm run format`)
- Tailwind CSS for styling
- `.editorconfig` for consistent editor defaults

## License
MIT
