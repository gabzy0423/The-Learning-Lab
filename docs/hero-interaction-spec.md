# Hero Interaction Specification

## Status

Implemented in the Home Hero after explicit confirmation.

## Objective

Make the homepage Hero feel engaging and polished without distracting from the headline, the `Explore Programs` CTA, or the `Book a Consultation` CTA.

## Interaction model

- The Hero Image receives a restrained microinteraction on pointer hover and keyboard focus-within.
- The response may use approximately 1–2% scale, a 4px lift, and a slightly stronger shadow over roughly 200–250ms.
- The interaction is user-triggered and predictable; it does not animate automatically on page load.
- The image is decorative/supporting content and is not clickable.
- No autoplay carousel, continuous floating animation, scroll-jacking, or forced parallax.

## Hero callouts

- Use up to two static, non-clickable HTML callouts:
  - `Learn with purpose`
  - `Develop with confidence`
- Place one callout in the upper-right area and one in the lower-left area around the Hero Image.
- Keep callout wording separate from the image so it remains editable and accessible.
- Treat both phrases as Proposed Copy until stakeholder approval.

## Responsive behavior

- Desktop: preserve the two-callout composition around the image.
- Mobile: stack the image and callouts without overlap; retain the visual story without relying on hover.
- Touch users receive the final static state without needing a tap-only interaction.

## Accessibility and motion

- Respect `prefers-reduced-motion: reduce` by removing transforms and transition motion while preserving the final readable state.
- Preserve visible keyboard focus for the Hero CTAs.
- Do not use motion or color as the only way to communicate meaning.
- Keep the Hero Image non-interactive to avoid ambiguous navigation.

## Implementation evidence

- CSS-only interaction is implemented in `app/page.tsx`.
- Lint: PASSED (`npm run lint`).
- Production build: PASSED (`npm run build`).
- Browser/workflow verification: BLOCKED because the browser-access host was unavailable.

## Boundaries

- Interaction supports the Hero; it does not become a program directory or product demo.
- The two callouts must not imply verified offerings, systems, testimonials, or outcomes.
- The Hero remains conversion-focused: Programs discovery and Consultation inquiry stay dominant.
