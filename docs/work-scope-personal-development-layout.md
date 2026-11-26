# Verified Work Scope — Personal Development layout refinement

## Task and scope

Apply the agreed Impeccable visual/layout pass to the Personal Development category page only: banner, six-course card section, and closing CTA.

## Observed

- The Personal Development branch is owned by `app/programs/[category]/page.tsx`.
- It already renders the approved six cards, PDF links, category banner, `Start your journey` behavior, and closing CTA.
- The banner, card section, and CTA use a smaller spacing/radius/shadow scale than the refined homepage.

## Expected

- The page adopts the homepage's stronger layout rhythm and surface treatment without changing content, assets, destinations, or card order.

## Expected evidence

- ADR 0043 and the accepted `$grill` decisions.

## Primary domain and affected executable path

- Primary domain: frontend website presentation.
- Affected path: `app/programs/[category]/page.tsx`, `personal-development` branch only.

## Acceptance criteria

- Banner spacing and title hierarchy are more deliberate while existing image, overlay, copy, and CTA behavior remain intact.
- Six cards keep their current titles, descriptions, images, PDF links, order, square `contain` frames, and responsive columns while matching the stronger card treatment.
- Closing CTA keeps its current copy, destination, asset, and mobile behavior while matching the homepage CTA composition.
- No other category branch changes.

## Risks and constraints

- Visual-only change; no new claims, routes, assets, or interaction behavior.
- Browser screenshot verification may be blocked by the local browser environment.

## Verification plan

- Run `git diff --check`.
- Run Impeccable layout detection on the target file.
- Run `npm run build`.
- Inspect the final diff and git status; browser verification is separate.

Contract Decision Gate: PASS
Write Gate: PASS
PLAN VALIDATED
