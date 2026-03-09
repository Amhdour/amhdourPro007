# Secure Support Agent Starter Kit Site Adaptation Plan

## 1) Codebase inspection findings

### Framework and stack
- **Framework:** Next.js 16 App Router with React 19 and TypeScript.
- **Styling/UI:** Tailwind CSS v4 + shadcn/ui primitives.
- **Content:** MDX-based blog content loaded from local files with `gray-matter`.
- **Theme:** `next-themes` with light/dark toggle.
- **Package/runtime signals:** Defined in `package.json`, global metadata/layout in `src/app/layout.tsx`.

### Routing structure
- **Primary routes:**
  - `/` homepage (`src/app/page.tsx`)
  - `/blog`, `/blog/[slug]`, `/blog/rss.xml`
  - `/resources`
  - `/assessment`
  - `/case-studies/[slug]`
- **Localized routes:** `/fr`, `/de`, `/ar` each with localized home/blog/resources/assessment/case-studies.
- **API routes / server logic:**
  - `POST /api/newsletter` (`src/app/api/newsletter/route.ts`)
  - server action for contact form (`src/app/actions/contact.ts`)

### Layout components
- Root shell and global SEO metadata are in `src/app/layout.tsx`.
- Locale layouts exist in:
  - `src/app/ar/layout.tsx` (RTL wrapper)
  - `src/app/fr/layout.tsx`
  - `src/app/de/layout.tsx`

### Navigation components
- Header and nav rendering are centralized in `src/components/Header.tsx`.
- Menu entries and localized labels are **data-driven from** `dictionaries[locale].header.nav` in `src/lib/dictionaries.ts`.

### Homepage sections (composition order)
- Page composition is in `src/app/page.tsx` and localized equivalents (`src/app/fr/page.tsx`, `src/app/de/page.tsx`, `src/app/ar/page.tsx`).
- Current section stack includes: Header, Hero, TrustBar, About, Stats, Portfolio, ThreatVisualizer, Services, Skills, Experiences (Case Studies), Certifications, Speaking, OpenSource, MediaContent, Testimonials, Newsletter, Changelog, Contact, Footer.

### Portfolio/services data sources
- **Primary source:** `src/lib/dictionaries.ts` (all locale content for hero/about/portfolio/services/case studies/resources/etc.).
- **Portfolio rendering logic:** `src/components/sections/Portfolio.tsx` (maps project names to case-study slugs via `CASE_STUDY_SLUGS`).
- **Services rendering logic:** `src/components/sections/Services.tsx` (renders `dictionaries[locale].services.items`).
- **Case study pages:** route files in `src/app/**/case-studies/[slug]/page.tsx` read `dictionaries.<locale>.caseStudies.studies` and generate metadata.

### SEO/meta implementation
- **Global metadata:** `src/app/layout.tsx` (`title`, `description`, `keywords`, Open Graph, Twitter, icons, manifest).
- **Per-page metadata generators:**
  - Blog post pages (`src/app/blog/[slug]/page.tsx` and localized variants)
  - Case study pages (`src/app/case-studies/[slug]/page.tsx` and localized variants)
- **Structured data:** no explicit JSON-LD script blocks detected in current app code.

### Image/assets locations
- Static assets are served from `public/`:
  - Hero/OG image: `public/images/selfie.jpg`
  - Portfolio images: `public/projectimages/*`
  - Resources PDFs: `public/resources/*`
  - Favicons/manifest/fonts also in `public/`

### Backend/API capability
- There is lightweight backend capability via Next.js route handlers and server actions.
- Existing outbound integration is Formspree (newsletter + contact).
- No database-backed internal API currently present.

---

## 2) Complete reference inventory for target service names

The following files contain references to one or more of:
- Layer Retrofit
- Launch Gate
- RAG Trust Analyzer
- Agent Threat Mapper
- Secure Starter Kit / Secure Starter Kits

### Core site data + rendering
1. `src/lib/dictionaries.ts`
   - Hero/About text (all locales)
   - Portfolio project list (all locales)
   - Services list (all locales)
   - Case studies data (all locales)
   - Assessment/results language, events/changelog/open-source labels, etc. where Layer Retrofit/Launch Gate terms also appear
2. `src/components/sections/Portfolio.tsx`
   - `CASE_STUDY_SLUGS` mapping for Layer Retrofit, Secure Starter Kit, Launch Gate
3. `src/app/layout.tsx`
   - global SEO description/keywords/OpenGraph/Twitter text mentioning old multi-offering positioning

### Blog content that contains these names
4. `src/content/blog/three-pillars-ai-security-readiness.mdx`
5. `src/content/blog-fr/three-pillars-ai-security-readiness.mdx`
6. `src/content/blog-de/three-pillars-ai-security-readiness.mdx`
7. `src/content/blog-ar/three-pillars-ai-security-readiness.mdx`

### Assets with old naming
8. `public/resources/launch-gate-worksheet.pdf` (name implies Launch Gate offering)

---

## 3) Where hero/portfolio/services/navigation/case-study-links/metadata/structured-data should change

## A. Hero messaging
- **Edit:** `src/lib/dictionaries.ts`
- **Update:** `hero.bio` (all locales)
- **Goal:** Reposition to “Secure Support Agent Starter Kit” as the only current offering while preserving broader identity areas (AI security evals, runtime guardrails, retrieval security, tool authorization, auditability, incident readiness).

## B. Portfolio section
- **Edit:** `src/lib/dictionaries.ts`
  - `portfolio.projects` should keep only the current live offering card (Secure Support Agent Starter Kit naming update).
- **Edit:** `src/components/sections/Portfolio.tsx`
  - Update `CASE_STUDY_SLUGS` to match final project naming and avoid stale mappings to removed offerings.

## C. Services section
- **Edit:** `src/lib/dictionaries.ts`
  - `services.items` should become a single current service item for Secure Support Agent Starter Kit.
  - Keep supporting capability language in description; do not remove broader professional identity.

## D. Navigation
- **Likely no structural change required** because About/Skills/Blog/Contact/Resources/Assessment must remain and already exist in nav.
- **Potential textual check:** ensure no nav labels imply deprecated offerings (currently labels are generic; no change expected).

## E. Case-study links + routes
- **Edit data:** `src/lib/dictionaries.ts`
  - Keep/reshape `caseStudies.studies` to only currently valid case study(ies) for Secure Support Agent Starter Kit (or retain legacy as archive only if explicitly desired).
- **Edit mapping:** `src/components/sections/Portfolio.tsx`
  - Ensure each displayed portfolio card maps to an existing case-study slug.
- **No route structure change required** unless a slug rename is introduced.

## F. Metadata / SEO / social cards
- **Edit:** `src/app/layout.tsx`
  - Update `description`, `keywords`, OpenGraph/Twitter descriptions to align with single active offering.
  - Preserve broader identity keywords for trust/security readiness capabilities.
- **Optional edit:** case study metadata in `src/app/**/case-studies/[slug]/page.tsx` if titles/descriptions change via dictionary data.

## G. Structured data
- **Current state:** no JSON-LD implementation detected.
- **Recommendation:** either:
  - keep as-is for this pass, or
  - add a minimal Organization + Service JSON-LD in `src/app/layout.tsx` or homepage once content updates are complete.

---

## 4) Exact files to edit (planned)

### Must-edit for business-goal alignment
1. `src/lib/dictionaries.ts`
   - Controls localized marketing copy and data for hero, portfolio, services, case studies, resources wording, and many other sections.
2. `src/components/sections/Portfolio.tsx`
   - Controls portfolio card behavior and project-name → case-study slug linking.
3. `src/app/layout.tsx`
   - Controls global SEO metadata and social preview messaging.

### Conditional edits (only if chosen during implementation)
4. `src/content/blog*/three-pillars-ai-security-readiness.mdx` (4 locale files)
   - If blog should reflect “current offering” positioning rather than historical “three pillars”.
5. `public/resources/launch-gate-worksheet.pdf` and `src/lib/dictionaries.ts` resource entries
   - If resources must remove Launch Gate branding.
6. `src/app/api/launch-gate-status/route.ts` (new)
   - Optional backend endpoint described below.

---

## 5) Dependencies between changes

1. **Content model first (`dictionaries.ts`)**
   - Update canonical messaging/service/project/case-study entries.
2. **Renderer logic second (`Portfolio.tsx`)**
   - Align slug mapping with updated project names.
3. **SEO metadata third (`layout.tsx`)**
   - Match public discoverability text to final on-page language.
4. **Optional extras last**
   - Blog reframing and resources naming cleanup.
   - Optional status endpoint addition.

Reason: most components consume dictionary content; changing rendering before data can create broken links or empty cards.

---

## 6) Risk notes

- **Localization drift risk:** `dictionaries.ts` is multi-locale and large; partial updates can produce inconsistent EN/FR/DE/AR messaging.
- **Slug coupling risk:** portfolio project names are coupled to `CASE_STUDY_SLUGS`; renaming project labels without mapping updates breaks case-study links.
- **Content-history risk:** blog posts may intentionally represent historical thinking; changing them could erase narrative context.
- **Resource URL risk:** renaming/removing PDFs without dictionary update creates broken downloads.
- **SEO mismatch risk:** metadata may lag behind updated page copy if not updated in same pass.

---

## 7) Backend status + safe launch-gate status endpoint feasibility

### Current backend status
- Feasible to add simple internal endpoints using Next.js route handlers.
- Existing pattern uses environment variables and no persistent DB.

### Safe endpoint recommendation
If a launch-gate status endpoint is still useful operationally (even with Secure Support Agent Starter Kit as only offering), add:
- **Route:** `GET /api/launch-gate-status`
- **File:** `src/app/api/launch-gate-status/route.ts`
- **Behavior:** return non-sensitive static/runtime status from env-configured flags.
- **Example response shape:**
  - `service: "secure-support-agent-starter-kit"`
  - `launchGateStatus: "not-public-offering" | "internal-only" | "available"`
  - `updatedAt`
- **Safety controls:**
  - no customer/project identifiers
  - no internal scoring evidence
  - optional token gate for non-public detail (`LAUNCH_GATE_STATUS_TOKEN`)
  - explicit cache headers for intended freshness

This is feasible without adding a database.

---

## 8) What should be changed first

1. Update `src/lib/dictionaries.ts` (EN first, then FR/DE/AR parity).
2. Update `src/components/sections/Portfolio.tsx` slug map and any assumptions about project count.
3. Update `src/app/layout.tsx` SEO metadata.
4. Regression pass for `/`, `/fr`, `/de`, `/ar`, `/case-studies/*`, `/blog`, `/resources`, `/assessment`.

---

## 9) What must remain untouched

Per requirement, preserve these sections/routes and their accessibility:
- About
- Skills
- Blog
- Contact
- Resources
- Assessment

Also keep existing routing structure unless strictly needed for consistency, and avoid inventing new product features not already represented by current architecture.

---

## 10) Main files to change (terminal summary)

- `src/lib/dictionaries.ts`
- `src/components/sections/Portfolio.tsx`
- `src/app/layout.tsx`
- (optional) `src/content/blog/three-pillars-ai-security-readiness.mdx`
- (optional) `src/content/blog-fr/three-pillars-ai-security-readiness.mdx`
- (optional) `src/content/blog-de/three-pillars-ai-security-readiness.mdx`
- (optional) `src/content/blog-ar/three-pillars-ai-security-readiness.mdx`
- (optional) `src/app/api/launch-gate-status/route.ts`
