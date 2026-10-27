# IDDI NEWS

Website for IDDI NEWS, the bilingual news and education platform of the English Department at Institución Educativa Distrital Bilingüe Nueva Granada in Barranquilla, Colombia.

The site is built with Astro and uses static pages with a shared layout, header, footer and responsive stylesheet.

## Pages

- / — Home
- /about/ — About IDDI NEWS
- /services/ — Bilingual news, projects and school events
- /gallery/ — School community photo gallery
- /contact/ — Contact information

## Development

Install dependencies with npm install and start the site with npm run dev.

To follow the repository's background-server workflow, run astro dev --background. Manage it with astro dev status, astro dev logs and astro dev stop.

Create a production build with npm run build.

## Project structure

- src/pages/ contains file-based routes.
- src/layouts/BaseLayout.astro provides shared page metadata and site chrome.
- src/components/ contains the shared header and footer.
- src/styles/global.css contains site-wide responsive styles.
- public/images/ contains the images migrated from the original static site.
