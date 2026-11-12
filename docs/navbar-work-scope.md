# VERIFIED Work Scope — Shared Navbar

## Task and scope

Implement the agreed responsive navbar as a shared site component, integrate it into the root layout, provide its required logo asset, and add the minimum page placeholders needed to prevent its approved links from leading to missing routes.

## Observed

- The root layout currently renders page content without shared navigation.
- Only the default create-next-app homepage is implemented; planned route folders contain `.gitkeep` files only.
- Approved brand colors, global fonts, favicon, and logo source assets exist.
- The approved full logo is a raster on a Charcoal rectangle; the White navbar intentionally keeps that original official artwork on desktop.
- The project uses Next.js 16 App Router, React 19, Tailwind CSS 4, and no component or icon library.
- No existing tests cover shared navigation.

## Expected

- A sticky White navbar appears on every page.
- Desktop and mobile behavior follows `docs/navbar-spec.md`.
- Navbar destinations resolve instead of producing missing-page errors.

## Expected evidence

- `docs/navbar-spec.md`
- `design-system/the-learning-lab/MASTER.md`
- `GLOSSARY.md`
- Explicit user confirmation to proceed with development.

## Primary domain

- Shared frontend navigation and responsive interaction.

## Verified owner and executable path

- `app/layout.tsx` owns site-wide composition and will render the shared header.
- `components/layout/Header.tsx` will own interactive navigation state.
- `content/programs.ts` will own the five approved category names and slugs used by navigation and category routing.
- App Router `page.tsx` files will provide the approved destinations.

## Candidate affected surface

- `app/layout.tsx`
- `app/globals.css`
- `components/layout/`
- Core route `page.tsx` files
- `public/assets/logo/`

## Acceptance criteria

- Desktop links, Programs dropdown, CTA, active states, sticky feedback, and logo treatment match the approved specification.
- Mobile drawer supports close button, backdrop, Escape, navigation selection, body-scroll lock, and focus handling.
- Controls meet the agreed 44px minimum touch target.
- Core navbar links and category shortcuts resolve.
- Production build succeeds.

## Constraints and risks

- No new dependency.
- No course content, backend, search, or unrelated page design.
- Route pages remain minimal until their own design work is authorized.
- Browser interaction requires direct workflow verification where available.

## Verification plan

- Run lint and production build.
- Inspect route output.
- Verify desktop dropdown, keyboard close, scroll state, mobile drawer, and navigation behavior in a browser if available.

## Provenance

- Existing application files and approved brand assets: PRE-EXISTING WORK.
- Navbar component, route placeholders, content data, transparent logo derivative, and this scope update: CURRENT AGENT CHANGE.
- `docs.md` and the standalone HTML concept: UNCHANGED USER REFERENCES.

Contract Decision Gate: PASS

Write Gate: PASS

Agentic Coding Entry Gate: READY

## PLAN VALIDATED

- Intended behavior: shared responsive navigation matching `docs/navbar-spec.md`.
- Owning domain: root layout and shared layout components.
- Minimum change: one client header, one program data source, minimum destination pages, one exact logo derivative, and small global focus/scroll-offset rules.
- Material risks: keyboard/focus behavior, body scroll restoration, route matching, raster background extraction.
- Focused validation: lint, production build, route output, generated asset inspection, and direct browser workflow when available.

## Work Progress

- Phase: implementation complete.
- Changes made: shared responsive header, program navigation data, transparent logo derivative, route placeholders, root-layout integration, minimal branded home placeholder, and explicit instant-navigation opt-out for the dynamic category route.
- Lint: PASSED.
- Production build and static route generation: PASSED.
- Live HTTP route checks for all navbar destinations and five category pages: PASSED (200).
- Transparent logo dimensions and alpha checks: PASSED.
- Category route instant-navigation error check: PASSED after adding `instant = false`.
- Direct browser workflow: BLOCKED because the browser-access host was unavailable.
- Remaining work: visual and interaction QA when browser access is available; full page design remains outside this navbar scope.
