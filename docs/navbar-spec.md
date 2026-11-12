# Navbar Specification

Agreed product and interaction rules for the public website navigation. This document defines behavior before implementation.

## Navigation structure

- Main links: Home, About, Programs, Solutions, Contact.
- Resources remains excluded until approved content exists.
- The brand logo links to Home.
- Programs remains a direct link to the Programs directory and also exposes shortcuts to the five established categories:
  - Personal Development
  - Managing Work
  - Managing Relationships
  - Leadership & Management
  - Impacting Strategy
- The primary navbar CTA is Request Information and routes to the Contact/inquiry page.

## Brand treatment

- Desktop uses the approved full horizontal Learning Lab logo with its original Charcoal rectangular background.
- Mobile uses the compact head mark when space is constrained.

## Behavior

- The navbar stays visible at the top while scrolling.
- Use a White surface, subtle border, and light blur without dramatic resizing.
- The current page is communicated with Charcoal text and a Turquoise underline/accent, not color alone.
- Programs uses a direct link plus a separate chevron control for its desktop dropdown.
- Clicking Programs opens the Programs directory; the chevron opens or closes the category menu.
- The dropdown contains category names only; descriptions, images, course links, and other discovery content remain on Programs pages.
- The dropdown opens through its explicit control and keyboard interaction, not hover alone.
- It closes on Escape, outside click, or category selection.
- On category and course routes, Programs remains active and the current category is identified inside the menu.
- The generic Request Information CTA routes to Contact with Program information as the default interest.
- Course-page inquiry actions may preselect the specific course instead.
- The White navbar surface is consistent across all pages, including dark hero sections.
- At the top of the page the navbar uses a subtle border; after scrolling it adds a very light shadow.

## Mobile accessibility

- Mobile navigation opens from a hamburger control.
- The menu appears as a right-side drawer with a backdrop and body-scroll lock.
- Programs categories are nested inside the mobile menu.
- The CTA remains visible within the menu.
- Include a clear close control, Escape-key support, focus handling, and minimum 44px touch targets.
- The drawer closes through its close button, backdrop click, Escape, or navigation selection.
