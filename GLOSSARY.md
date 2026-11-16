# The Learning Lab Website

Shared language for the public-facing corporate website prototype and its content model.

## Product and Audience

**Interactive Prototype**:
A presentation-ready, navigable demonstration of the proposed website experience. It is not a production launch system.
_Avoid_: Learning platform, LMS, operational system

**Semi-production Prototype**:
A frontend implementation built with production-quality information architecture, responsive behavior, accessibility expectations, and reusable patterns, while real backend operations remain outside the current deliverable.
_Avoid_: Throwaway mockup, production system

**Primary Audience**:
HR and Learning & Development teams looking for workforce development programs.
_Avoid_: Only audience, end user

**Secondary Audience**:
Corporate decision-makers, managers and team leaders, individual professionals, and prospective clients.
_Avoid_: General public

## Learning Catalogue

**Program Category**:
One of the five established learning areas used to organize the catalogue: Personal Development, Managing Work, Managing Relationships, Leadership & Management, or Impacting Strategy.
_Avoid_: Course group, department

**Course**:
A named learning offering presented within a program category and described using the shared course-detail structure.
_Avoid_: Product, class, module

**Validated Course**:
A course with a confirmed title and enough approved content to support a public detail route.
_Avoid_: Draft course, placeholder course

**Representative Course**:
A small, curated course set used to demonstrate the catalogue experience while the complete authoritative inventory is still unavailable.
_Avoid_: Invented course, full catalogue

**Course Source**:
The authoritative material used to confirm a course's title, category, description, and other publishable details.
_Avoid_: Scraped copy, assumed content

**Learning Approach**:
The organization's stated philosophy and methodology for how learning is designed and experienced.
_Avoid_: Teaching method, LMS feature

**Hero**:
The opening homepage section that communicates The Learning Lab's value and directs visitors toward the primary action.
_Avoid_: Banner, splash screen

**Hero Boundary**:
The visual boundary of the opening homepage Hero: on desktop it occupies the available first viewport below the Primary Navigation; on mobile it remains content-driven so the copy, CTAs, and Hero Image are not cramped.
_Avoid_: Marquee container, full-page takeover

**Hero Emphasis**:
The visual balance between the Hero copy and Hero Image, with the image slightly larger and the headline, supporting copy, CTAs, proof points, and callouts scaled as one composition.
_Avoid_: Oversized headline, decorative image dominance

**Hero Image**:
A photorealistic visual used in the homepage Hero to represent collaborative development through a circular group-workshop composition; the current asset is derived from an existing concept reference and remains proposed until rights and public-use approval are confirmed.
_Avoid_: Course Visual, stock-photo claim, operational product image

**Hero Microinteraction**:
A small user-triggered visual response on the Hero Image, such as a restrained lift, scale, or shadow change, that adds polish without competing with the Hero copy or CTAs.
_Avoid_: Hero animation, carousel, scroll-jacking

**Hero Callout**:
A static, non-clickable visual label positioned around the Hero Image to reinforce its message; current wording is Proposed Copy until stakeholder approval.
_Avoid_: Navigation shortcut, verified claim, testimonial

**Trust Strip**:
An independent section immediately after the Hero that presents organization logos or other approved trust signals; it remains visually separate from the Hero and uses the same horizontal alignment as the primary content.
_Avoid_: Hero content, logo decoration, testimonial proof

**Footer**:
The closing website section that provides brand context, navigation, program discovery, contact direction, and ownership information.
_Avoid_: Secondary navigation, sitemap-only area, contact form

## Content and Inquiry

**Verified Content**:
Course, service, organization, or trust content supported by authoritative organizational material or approved stakeholder input.
_Avoid_: Assumed fact, placeholder

**Approved Content**:
Content that has been explicitly accepted for use in the prototype or publication, whether it is verified organizational information or clearly labeled proposed structure.
_Avoid_: Automatically publishable content

**Proposed Copy**:
Draft wording used to demonstrate intended page structure and message direction, not presented as a verified organizational claim.
_Avoid_: Final copy, factual claim

**Brand Asset**:
An organization-provided visual or media file used to express the approved identity, offer, or learning content of The Learning Lab.
_Avoid_: Random asset, decorative asset

**Brand Palette**:
The approved visual color family for The Learning Lab website: Charcoal, Cyan Blue, Turquoise, Mint Green, and White.
_Avoid_: Legacy purple palette, arbitrary accent colors

**Course Visual**:
An approved image or media asset associated with a specific validated course or program category.
_Avoid_: Generic stock image

**Promotional Reel**:
An organization-provided short-form video used to communicate the brand, learning experience, or offering in a marketing context.
_Avoid_: Background video, unrelated social clip

**Inquiry**:
A visitor's request for information or a conversation about a course or tailored corporate learning service.
_Avoid_: Enrollment, application, booking

**Simulated Confirmation**:
The frontend-only state shown after an inquiry form interaction, without sending or persistently storing the inquiry.
_Avoid_: Submission receipt, booking confirmation

**Primary CTA**:
The main action a visitor is encouraged to take: requesting information about a specific course.
_Avoid_: Conversion button, enrollment CTA

**Primary Navigation**:
The persistent website menu connecting visitors to Home, About, Programs, Solutions, and Contact, with Request Information as its primary action.
_Avoid_: Sitemap, course directory

**About Menu**:
A section menu within the Primary Navigation that routes visitors to the About The Learning Lab page and the Meet The Team section on that same page.
_Avoid_: Standalone About page replacement, Programs menu

**Meet The Team Section**:
A section of the About page reserved for the organization’s team introduction; until approved people data is available, its structure and copy remain clearly marked as proposed.
_Avoid_: Verified staff directory, invented biography, hiring page

**Programs Menu**:
A dropdown-only navigation control that exposes the five established program categories; it does not represent a separate public Programs overview page.
_Avoid_: Course filter, Resources menu

**Navigation Submenu**:
A grouped set of child links revealed from a primary navigation control and closed after selection, outside interaction, or Escape.
_Avoid_: Persistent sidebar, separate navigation page

**Split Section Intro**:
A section-opening layout that keeps the primary heading in one column and its supporting description in a separate, top-aligned column on larger screens.
_Avoid_: Two unrelated content blocks, equal-priority columns, card grid

**Portfolio Placeholder Card**:
An intentionally blank visual slot completing the Signature Learning Portfolio desktop grid until approved content is available.
_Avoid_: Empty broken link, unpublished program, missing content error

**Portfolio Program Card**:
A Signature Learning Portfolio card that presents one program category through its icon, name, description, approved image, and an Explore Program action.
_Avoid_: Course detail page, promotional claim, hidden hover-only content

**Portfolio Image Swap**:
The accessible card interaction that crossfades a program’s base image to its matching alternate image on hover or keyboard focus while keeping the base image for touch and mobile contexts.
_Avoid_: Carousel, automatic image rotation, touch-only image replacement

**Course Directory**:
An optional browseable view of courses across all five program categories, supporting quick discovery alongside category-first navigation.
_Avoid_: LMS catalogue, enrollment catalogue

**Tailored Corporate Learning**:
Corporate learning support shaped for an organization's needs, presented in the prototype as an approved-or-to-be-confirmed solution concept.
_Avoid_: HRIS, CADS, product package

**Competency Platform**:
An internal delivery capability that may support competency development work; on the public website it is represented only through a high-level visual concept, not as a standalone product or operational dashboard.
_Avoid_: Public SaaS product, live dashboard, HRIS

## Prototype Interaction

**Frontend-only Interaction**:
A simulated interface behavior such as navigation, filtering, FAQ expansion, or inquiry confirmation that does not send data to a backend or persist operational records.
_Avoid_: Real submission, workflow automation

**Content Approval**:
The decision that a fact, claim, course detail, service description, or brand asset is authoritative enough to present as verified.
_Avoid_: Assumption, auto-approved content
