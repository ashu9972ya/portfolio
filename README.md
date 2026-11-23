# Ashutosh Yadav — Portfolio

A responsive frontend engineering portfolio with selected work, career history, light/dark themes, and an email-based contact flow.

## Develop

Use Node.js 24 or newer and npm. Work in this existing checkout; a separate worktree is unnecessary.

```sh
npm ci
npm run dev
```

The development server binds to `0.0.0.0:3000`. Fonts are bundled locally, so builds do not need Google Fonts access. No credentials, database, or environment variables are required.

## Validate

```sh
npm run lint
npm run typecheck
npm run typecheck:compat
npm run build
```

`npm run typecheck` uses the current TypeScript 7 native compiler. TypeScript 6.0.3 supplies the JavaScript compiler API required by Next.js and typescript-eslint. ESLint 9.39.5 is the latest compatible release for the React, accessibility, and import plugins included by eslint-config-next; those plugins do not yet declare support for ESLint 10. Other direct dependencies are pinned to the stable registry releases checked during this update. Removed template libraries are no longer installed.

After building, run the production server with `npm run start`. Avoid running a build and development server against the same `.next` directory concurrently.

### Browser tests

```sh
npx playwright install chromium
npm run test:e2e
```

To use an installed Chromium instead of downloading one:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
```

The suite starts the built production server automatically when none is running. It covers desktop and mobile rendering, project filters, navigation, theme persistence, contact validation and encoded email drafts, clipboard copying, the 404 page, and automated WCAG A/AA accessibility checks in both themes. Test artifacts are ignored by Git.

## Update content

Edit `lib/portfolio.ts` for contact details, skills, experience, education, and projects. Home and project pages share that source. Project images live in `public/work/`, and the existing portrait is in `public/about/developer.png`.

Only documented projects and known links are displayed. There are no placeholder testimonials, invented metrics, or inactive CV links. The public location is limited to city/state, rather than a street address.

The contact form prepares a `mailto:` draft with the visitor’s name, email, and message. Visitors then open their email app, review, and send it themselves. The website does not transmit or store their message; a configured email app is needed. Direct email, phone, and copy-email actions are also provided.

## Structure

- `app/`: pages, metadata, local fonts, global styles, and the app icon
- `components/`: navigation, project display, theme controls, and contact UI
- `lib/portfolio.ts`: shared personal and project content
- `tests/`: Playwright browser checks
- `public/`: existing project images and static assets

The refresh uses Next.js 16, React 19, Tailwind CSS 4, and local Geist fonts. Tailwind’s PostCSS integration and ESLint flat configuration replace the older configuration files.

## Approved professional-content refinement

The supplied finalized résumé is served at `/Ashutosh_Yadav_Frontend_Engineer_Resume.pdf`. Its served bytes are checked against the local PDF in browser tests. The timeline uses Evervent (Dec 2024–Present) and Zestgeek (Nov 2023–Nov 2024); the internship is excluded.

JioInsure, Bimastreet, and VidyaPulse are featured, with static contribution pages under `/projects/`. Earlier work remains available through the project filters. Professional product ownership is attributed to the team; backend learning is separated from professional frontend expertise. BizFlow is excluded.

The person schema and page-specific social metadata use verified identity information. Production SEO uses the owner-supplied `https://ashutoshyadev.vercel.app` domain via `lib/site.ts`, with self-referencing canonicals, sitemap, robots directives, and a generated social image. Vercel preview builds (`VERCEL_ENV=preview`) use noindex/nofollow, disallow crawling, and omit sitemap entries. No custom secret/environment variable is required. External product/LinkedIn and existing deployment requests are currently blocked by the environment's outbound proxy; that is not evidence of broken sites.

## Existing Git-triggered deployment

The owner confirmed that pushing this repository triggers the existing deployment. The reviewed release is pushed to the existing remote `main` branch without force. Hosting account/project settings are preserved; no new project is created. A successful Git push confirms repository delivery, not Vercel build success or a verified production release. Check the hosting deployment result, HTTPS/redirects, all six pages, résumé, social image, sitemap/robots and metadata on the actual production host before declaring the release verified. The configured engine requires Node 24 or newer.
