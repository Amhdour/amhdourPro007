# Ahmed Amhdour — AI Trust & Security Website

Production website for Ahmed Amhdour’s AI Trust & Security Readiness work, built to present portfolio, evidence, and security content in a clear, review-friendly format.

## What this website represents
This site is the public home for Ahmed’s AI Trust & Security positioning: practical security guidance for RAG and agent systems, portfolio initiatives, case-study style material, and evidence packaging for judges, recruiters, and technical collaborators.

## Main sections and pages
- **Homepage**: positioning, portfolio highlights, services, skills, case-study previews, and contact.
- **Evidence page**: `/evidence/rag-security-platform` (award/review-focused evidence pack).
- **Case studies**: `/case-studies/[slug]`.
- **Blog**: `/blog` and `/blog/[slug]`.
- **Resources**: `/resources`.
- **Assessment**: `/assessment`.
- **Localized routes**: `/ar`, `/fr`, `/de` for core sections.

## Where AI Trust & Security content lives
- Homepage section components: `src/components/sections/*`
- Portfolio and messaging dictionaries: `src/lib/dictionaries.ts`
- Evidence page route: `src/app/evidence/rag-security-platform/page.tsx`
- Evidence content model: `src/content/evidence/ragSecurityPlatform.ts`
- Security-focused blog content: `src/content/blog*/`

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open:
   - `http://localhost:5000`

## Build and checks
- Production build:
  ```bash
  npm run build
  ```
- Start production server locally:
  ```bash
  npm run start
  ```
- Lint:
  ```bash
  npm run lint
  ```

## How to update the evidence page
1. Edit structured content in `src/content/evidence/ragSecurityPlatform.ts`.
2. Update layout/section rendering in `src/app/evidence/rag-security-platform/page.tsx` if needed.
3. Keep claims conservative and verifiable.
4. Do **not** add client counts, adoption metrics, awards, or impact numbers unless they are publicly documented and referenced.
5. Label unpublished artifacts clearly as placeholders (for example, PDF links not yet public).

## Deployment notes
- The app uses standard Next.js build/start scripts and is deployable on any platform that supports Next.js.
- Runtime host/port defaults in this repo are configured in `package.json` scripts (`0.0.0.0:5000`).
